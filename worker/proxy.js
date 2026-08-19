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

    if (request.method !== 'POST' || (!isChat && !isTts)) {
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
