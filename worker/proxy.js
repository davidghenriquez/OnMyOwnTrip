// ============================================================
// OnMyOwnTrip · Proxy de IA (Cloudflare Worker)
//
// Reenvía las peticiones de la app a Gemini, guardando la API key
// en el propio Worker (variable de entorno "GEMINI_API_KEY"),
// para que el navegador del visitante nunca la vea.
//
// Este archivo NO contiene ninguna key — se pega tal cual en el
// editor de Cloudflare, y la key se configura aparte como "secret"
// en el panel de Cloudflare (Settings → Variables and Secrets).
// ============================================================

// Cambia esto por el origen real de tu web (y añade localhost si
// quieres poder probar en local contra este mismo Worker).
const ALLOWED_ORIGINS = [
  'https://davidghenriquez.github.io',
  'http://localhost:8791'
];

const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/openai/chat/completions';
const GOOGLE_TTS_URL = 'https://texttospeech.googleapis.com/v1/text:synthesize';

// Voz de audioguía: WaveNet en español de España, la más barata de las
// voces "de calidad" de Google (ver worker/README.md). Ritmo ligeramente
// más pausado que el neutro (1.0), a juego con el ajuste ya aplicado a la
// voz del navegador (SPEECH.speak en app.js).
const TTS_VOICE = { languageCode: 'es-ES', name: 'es-ES-Wavenet-B' };
const TTS_SPEAKING_RATE = 0.95;

function corsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const headers = corsHeaders(origin);

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers });
    }

    const url = new URL(request.url);
    const isChat = url.pathname.endsWith('/chat/completions');
    const isTts = url.pathname.endsWith('/tts');
    const isLicense = url.pathname.endsWith('/license/check');
    const isVisit = url.pathname.endsWith('/license/visit');
    const isDashboard = url.pathname.endsWith('/license/dashboard');
    const isDashboardClear = url.pathname.endsWith('/license/dashboard/clear');

    if (request.method !== 'POST' || (!isChat && !isTts && !isLicense && !isVisit && !isDashboard && !isDashboardClear)) {
      return new Response(JSON.stringify({ error: 'not found' }), {
        status: 404,
        headers: { ...headers, 'Content-Type': 'application/json' }
      });
    }

    if (!ALLOWED_ORIGINS.includes(origin)) {
      return new Response(JSON.stringify({ error: 'origin not allowed' }), {
        status: 403,
        headers: { ...headers, 'Content-Type': 'application/json' }
      });
    }

    // La comprobación de licencia (y sus rutas hermanas de visitas/panel) va
    // ANTES del rate limiter de abajo (que es para la cuota compartida de
    // Gemini): no tiene nada que ver con la IA, y no queremos que alguien se
    // quede sin poder ni entrar a la app solo porque otros usuarios estén
    // saturando el chat en ese momento.
    if (isLicense) return handleLicenseCheck(request, env, headers);
    if (isVisit) return handleVisit(request, env, headers);
    if (isDashboard) return handleDashboard(request, env, headers);
    if (isDashboardClear) return handleDashboardClear(request, env, headers);

    // Rate limiting por IP (binding "RATE_LIMITER", configurado en el panel
    // de Cloudflare → pestaña "Bindings" → Add binding → Rate Limiting).
    // Sin esto, una sola IP podría agotar ella sola la cuota compartida de
    // Gemini (~20 peticiones/min para todo el mundo) y dejar sin IA real al
    // resto de gente usando la app en ese mismo minuto. Si el binding no
    // está configurado (env.RATE_LIMITER no existe), se salta sin romper
    // nada: es una capa extra, no un requisito para que la app funcione.
    if (env.RATE_LIMITER) {
      const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
      const { success } = await env.RATE_LIMITER.limit({ key: ip });
      if (!success) {
        return new Response(JSON.stringify({ error: 'rate limit exceeded, prueba en un minuto' }), {
          status: 429,
          headers: { ...headers, 'Content-Type': 'application/json' }
        });
      }
    }

    if (isTts) return handleTts(request, env, headers);

    let body;
    try {
      body = await request.text();
    } catch (e) {
      return new Response(JSON.stringify({ error: 'invalid request body' }), {
        status: 400,
        headers: { ...headers, 'Content-Type': 'application/json' }
      });
    }

    const geminiRes = await fetch(GEMINI_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${env.GEMINI_API_KEY}`
      },
      body
    });

    const text = await geminiRes.text();
    return new Response(text, {
      status: geminiRes.status,
      headers: { ...headers, 'Content-Type': 'application/json' }
    });
  }
};

// Audioguía en voz real (Google Cloud Text-to-Speech). Solo se usa para el
// resumen narrado de cada POI (texto fijo, cacheado en el navegador de
// quien lo pide — ver CLOUD_TTS en app.js), nunca para el chat con la IA.
// Requiere el secret "GOOGLE_TTS_API_KEY" en el Worker (ver worker/README.md);
// si no está configurado, responde 501 y la app cae automáticamente a la
// voz del navegador (Web Speech API) sin que el usuario note un error.
async function handleTts(request, env, headers) {
  if (!env.GOOGLE_TTS_API_KEY) {
    return new Response(JSON.stringify({ error: 'TTS not configured' }), {
      status: 501,
      headers: { ...headers, 'Content-Type': 'application/json' }
    });
  }

  let payload;
  try {
    payload = await request.json();
  } catch (e) {
    return new Response(JSON.stringify({ error: 'invalid request body' }), {
      status: 400,
      headers: { ...headers, 'Content-Type': 'application/json' }
    });
  }

  // Tope de caracteres por petición: ninguna narración de la app se acerca
  // a esto (el límite real de la propia API de Google es 5000), es solo un
  // cinturón de seguridad extra ante un uso indebido del endpoint.
  const text = String((payload && payload.text) || '').slice(0, 3000);
  if (!text.trim()) {
    return new Response(JSON.stringify({ error: 'missing text' }), {
      status: 400,
      headers: { ...headers, 'Content-Type': 'application/json' }
    });
  }

  let ttsRes;
  try {
    ttsRes = await fetch(`${GOOGLE_TTS_URL}?key=${env.GOOGLE_TTS_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: { text },
        voice: TTS_VOICE,
        audioConfig: { audioEncoding: 'MP3', speakingRate: TTS_SPEAKING_RATE }
      })
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'tts request failed' }), {
      status: 502,
      headers: { ...headers, 'Content-Type': 'application/json' }
    });
  }

  if (!ttsRes.ok) {
    // Aquí llega también un 429/403 de Google si se agota la cuota gratis
    // (o el límite de caracteres que hayas puesto tú en la consola de
    // Google Cloud): se reenvía tal cual, el cliente lo trata como "no
    // disponible" y cae a la voz del navegador sin romper la audioguía.
    const errText = await ttsRes.text();
    return new Response(errText, {
      status: ttsRes.status,
      headers: { ...headers, 'Content-Type': 'application/json' }
    });
  }

  const data = await ttsRes.json();
  const binary = atob(data.audioContent);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);

  return new Response(bytes, {
    status: 200,
    headers: { ...headers, 'Content-Type': 'audio/mpeg' }
  });
}

// Control de acceso (ver LICENSE en app.js y la sección correspondiente de
// worker/README.md): a diferencia del resto de este Worker, aquí el propio
// usuario/clave vive en un KV namespace (binding "LICENSES", configurado en
// el panel de Cloudflare → Settings → Bindings → KV Namespace), NUNCA en un
// fichero público del repo — así alguien que mire el código o el tráfico de
// red solo ve la pregunta "¿es válido este usuario?" y la respuesta (sí/no),
// nunca la lista completa de usuarios y fechas.
//
// Formato del valor guardado en KV para cada clave (=nombre de usuario):
//   - "libre"          -> acceso vitalicio, sin caducidad.
//   - "YYYY-MM-DD"      -> válido hasta ese día incluido (criterio estándar:
//                          una semana desde el alta, salvo que se acuerde
//                          otra cosa).
//
// "kind" en el body ('gate' por defecto, o 'watch'): distingue un intento
// real (pantalla de acceso, o la revalidación única al abrir la app) de un
// simple ping del vigilante en segundo plano (ver LICENSE.startWatching en
// app.js, cada 60s mientras la app sigue abierta). Solo se registra en el
// historial del panel (ver handleDashboard) lo primero — si se registrara
// cada ping, el historial se llenaría de un evento por minuto y usuario
// activo, tapando los eventos que de verdad interesan.
async function handleLicenseCheck(request, env, headers) {
  // (nota sobre "respond" más abajo: solo registra los intentos FALLIDOS.
  // Un acceso correcto vía 'gate' siempre dispara justo después una llamada
  // a /license/visit desde app.js — ver wireLicenseGate/init — así que
  // registrarlo también aquí duplicaría la misma entrada dos veces en el
  // historial por cada acceso bueno.)
  let payload;
  try {
    payload = await request.json();
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, reason: 'bad-request' }), {
      status: 400,
      headers: { ...headers, 'Content-Type': 'application/json' }
    });
  }

  if (!env.LICENSES) {
    // Sin el binding configurado esto no puede funcionar: se falla "cerrado"
    // (nadie pasa) en vez de dejar entrar a cualquiera, para que un despliegue
    // mal configurado nunca se traduzca en saltarse el control de acceso.
    return new Response(JSON.stringify({ ok: false, reason: 'not-configured' }), {
      status: 501,
      headers: { ...headers, 'Content-Type': 'application/json' }
    });
  }

  const username = String((payload && payload.username) || '').trim();
  const isWatch = (payload && payload.kind) === 'watch';

  const respond = async (body) => {
    if (!isWatch && !body.ok) {
      await logAccessEvent(env, {
        type: 'check',
        username: username || '(vacío)',
        result: body.reason || 'error'
      });
    }
    return new Response(JSON.stringify(body), {
      status: 200,
      headers: { ...headers, 'Content-Type': 'application/json' }
    });
  };

  if (!username) return respond({ ok: false, reason: 'not-found' });

  const raw = await env.LICENSES.get(username);
  if (raw == null) return respond({ ok: false, reason: 'not-found' });

  const value = raw.trim();
  if (value.toLowerCase() === 'libre') return respond({ ok: true, expires: null });

  const today = new Date().toISOString().slice(0, 10);
  if (today <= value) return respond({ ok: true, expires: value });

  return respond({ ok: false, reason: 'expired', expires: value });
}

// Cuenta de visitas por usuario (ver LICENSE.recordVisit en app.js): se
// llama una única vez por apertura de la app ya autenticada (nunca desde el
// vigilante en segundo plano), así que sí representa "veces que ha abierto
// la app", no comprobaciones técnicas. KV no tiene incremento atómico: para
// el volumen de esta app (control de acceso personal, no un servicio con
// miles de peticiones simultáneas del mismo usuario) una lectura + escritura
// normal es más que suficiente, sin necesitar nada más sofisticado.
async function handleVisit(request, env, headers) {
  let payload;
  try {
    payload = await request.json();
  } catch (e) {
    return new Response(JSON.stringify({ ok: false }), {
      status: 400,
      headers: { ...headers, 'Content-Type': 'application/json' }
    });
  }

  const username = String((payload && payload.username) || '').trim();
  if (!username || !env.ACCESS_LOG) {
    return new Response(JSON.stringify({ ok: false }), {
      status: 200,
      headers: { ...headers, 'Content-Type': 'application/json' }
    });
  }

  const key = `visits:${username}`;
  let count = 0;
  try {
    const current = await env.ACCESS_LOG.get(key);
    count = (parseInt(current, 10) || 0) + 1;
    await env.ACCESS_LOG.put(key, String(count));
  } catch (_) { /* un fallo aquí no debe romper la apertura de la app */ }

  await logAccessEvent(env, { type: 'visit', username, result: 'ok' });

  return new Response(JSON.stringify({ ok: true, visits: count }), {
    status: 200,
    headers: { ...headers, 'Content-Type': 'application/json' }
  });
}

// Guarda un evento en el historial del panel de accesos (ver ACCESS_LOG,
// handleDashboard). Clave con timestamp + sufijo aleatorio: list() de KV
// devuelve las claves en orden alfabético, y con un timestamp de 13 dígitos
// (siempre el mismo nº de cifras hasta el año 2286) ese orden coincide con
// el cronológico; el sufijo evita colisiones entre dos eventos en el mismo
// milisegundo. El dato real va en la METADATA de la entrada (no en el
// valor) para poder leer el historial entero con un solo list() en
// handleDashboard, sin tener que pedir cada clave por separado después.
async function logAccessEvent(env, data) {
  if (!env.ACCESS_LOG) return;
  const key = `log:${Date.now()}:${Math.random().toString(36).slice(2, 8)}`;
  try {
    await env.ACCESS_LOG.put(key, '1', { metadata: { ts: Date.now(), ...data } });
  } catch (_) { /* nunca debe romper el flujo de login por un fallo aquí */ }
}

// Comprueba la clave de administrador (secret "ADMIN_KEY", distinta de las
// claves de usuario de LICENSES) compartida por handleDashboard y
// handleDashboardClear. Devuelve una Response de error si algo no cuadra
// (payload inválido, clave incorrecta, KV sin configurar), o null si todo
// está en orden y se puede continuar.
async function checkAdminAccess(request, env, headers) {
  let payload;
  try {
    payload = await request.json();
  } catch (e) {
    return { error: new Response(JSON.stringify({ error: 'bad-request' }), {
      status: 400,
      headers: { ...headers, 'Content-Type': 'application/json' }
    }) };
  }
  if (!env.ADMIN_KEY || (payload && payload.adminKey) !== env.ADMIN_KEY) {
    return { error: new Response(JSON.stringify({ error: 'unauthorized' }), {
      status: 403,
      headers: { ...headers, 'Content-Type': 'application/json' }
    }) };
  }
  if (!env.ACCESS_LOG) {
    return { error: new Response(JSON.stringify({ error: 'not-configured' }), {
      status: 501,
      headers: { ...headers, 'Content-Type': 'application/json' }
    }) };
  }
  return { payload };
}

// Panel de accesos (ver admin/dashboard.html): protegido con una clave de
// administrador propia (secret "ADMIN_KEY" en el Worker, NO la misma cosa
// que las claves de usuario de LICENSES) — sin esto, cualquiera que
// encontrara la URL de la página vería quién usa la app y con qué
// frecuencia, ya que el repo (y por tanto esa página) es público.
async function handleDashboard(request, env, headers) {
  const { error } = await checkAdminAccess(request, env, headers);
  if (error) return error;

  const visitsList = await env.ACCESS_LOG.list({ prefix: 'visits:' });
  const visits = await Promise.all(visitsList.keys.map(async (k) => ({
    username: k.name.slice('visits:'.length),
    visits: parseInt(await env.ACCESS_LOG.get(k.name), 10) || 0
  })));
  visits.sort((a, b) => b.visits - a.visits);

  // Tope de 500 claves leídas y 200 mostradas: de sobra para el volumen de
  // un control de acceso personal: si algún día hiciera falta más historial
  // que eso, tocaría paginar con el "cursor" que devuelve list(), pero no
  // merece la pena complicar esto hasta que de verdad haga falta.
  const logList = await env.ACCESS_LOG.list({ prefix: 'log:', limit: 500 });
  const history = logList.keys
    .map((k) => k.metadata)
    .filter(Boolean)
    .sort((a, b) => b.ts - a.ts)
    .slice(0, 200);

  return new Response(JSON.stringify({ visits, history }), {
    status: 200,
    headers: { ...headers, 'Content-Type': 'application/json' }
  });
}

// Borra TODO el historial y los contadores de visitas (botón "Borrar
// historial" de admin/dashboard.html) — no toca LICENSES, así que ningún
// acceso de usuario se ve afectado, solo estos datos informativos. KV no
// tiene un "borrar todo" con un prefijo: hay que listar las claves y
// borrarlas una a una (limit alto de sobra para el volumen de un panel
// personal; si algún día hubiera más de 1000 de cada, tocaría paginar con
// el cursor de list(), pero no compensa complicarlo antes de que haga falta).
async function handleDashboardClear(request, env, headers) {
  const { error } = await checkAdminAccess(request, env, headers);
  if (error) return error;

  const [logList, visitsList] = await Promise.all([
    env.ACCESS_LOG.list({ prefix: 'log:', limit: 1000 }),
    env.ACCESS_LOG.list({ prefix: 'visits:', limit: 1000 })
  ]);
  const keys = [...logList.keys, ...visitsList.keys].map((k) => k.name);
  await Promise.all(keys.map((k) => env.ACCESS_LOG.delete(k)));

  return new Response(JSON.stringify({ ok: true, deleted: keys.length }), {
    status: 200,
    headers: { ...headers, 'Content-Type': 'application/json' }
  });
}
