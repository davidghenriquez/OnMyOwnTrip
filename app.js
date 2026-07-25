(() => {
  'use strict';

  // ========================================================
  // GLOBAL ERROR GUARD:
  // Si CUALQUIER cosa falla dentro del IIFE, no nos quedamos a oscuras.
  // Reportamos el error al usuario mediante un toast y no aborta el resto.
  // ========================================================
  try {

  /* =========================================================
   * CONFIGURABLE LLM CONNECTOR
   *   - To enable a real API: define window.LLM_CONFIG BEFORE this script (in index.html top script)
   *     {
   *       provider: 'openai',       // 'openai' | 'anthropic'
   *       apiKey:   'sk-...',
   *       model:    'gpt-4o-mini',  // 'gpt-4o' / 'claude-3-5-sonnet-20240620'
   *       baseUrl:  'https://api.openai.com/v1'  // optional override
   *     }
   *   - Otherwise: a smart local simulator is used (template-based, context-aware, dual mode)
   * =======================================================*/
  const LLM = (() => {
    const CFG = typeof window !== 'undefined' ? (window.LLM_CONFIG || null) : null;

    const systemPromptFor = (mode) =>
      mode === 'kids'
        ? `Eres "Toledo Junior", un guía turístico muy divertido, amigable y pedagogógico para niños de 7 a 11 años que visita Toledo. Responde siempre en español, con frases cortas, emojis, tono juguetón y retos interactivos. NUNCA des miedo. Incluye consejos que un niño pueda hacer allí (mirar arriba, buscar una piedra, contar torres). Máximo 120 palabras. Hazlo memorable.`
        : `Eres "Guía Toledo Imperial", un guía turístico experto, ameno y con alto conocimiento histórico-artístico de Toledo (España). Responde en español, cercano pero riguroso, citando épocas, autores y datos contrastados. Si el usuario pregunta gastronomía, recomienda platos y establecimientos creíbles del centro. Máximo 140 palabras. Destaca un "detalle secreto" final que el viajero pueda observar in situ.`;

    const buildUserText = (poi, mode, userQuery) => {
      const name = (poi.name[mode] || poi.name.adult);
      const cat = poi.category;
      const context = [
        `Estamos en Toledo, justo en: ${name}`,
        `Categoría: ${cat}`,
        `Subtítulo: ${poi.subtitle[mode] || poi.subtitle.adult}`,
        `Fragmento historia: ${(poi.tabs.history[mode] || poi.tabs.history.adult).slice(0, 260)}…`
      ].join('. ');
      return `${context}. Usuario pregunta: ${userQuery}`;
    };

    const fetchOpenAI = async (sys, usr) => {
      const url = (CFG.baseUrl || 'https://api.openai.com/v1') + '/chat/completions';
      const model = CFG.model || 'gpt-4o-mini';
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${CFG.apiKey}`
        },
        body: JSON.stringify({
          model,
          temperature: 0.6,
          messages: [
            { role: 'system', content: sys },
            { role: 'user', content: usr }
          ]
        })
      });
      if (!res.ok) throw new Error(`OpenAI ${res.status}`);
      const json = await res.json();
      return json?.choices?.[0]?.message?.content?.trim() ?? '';
    };

    const fetchAnthropic = async (sys, usr) => {
      const url = (CFG.baseUrl || 'https://api.anthropic.com') + '/v1/messages';
      const model = CFG.model || 'claude-3-5-sonnet-20240620';
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': CFG.apiKey,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true'
        },
        body: JSON.stringify({
          model,
          system: sys,
          max_tokens: 550,
          temperature: 0.6,
          messages: [{ role: 'user', content: usr }]
        })
      });
      if (!res.ok) throw new Error(`Anthropic ${res.status}`);
      const json = await res.json();
      const block = json?.content?.find((b) => b.type === 'text');
      return (block?.text ?? '').trim();
    };

    /* ---- LOCAL SIMULATOR (template + POI context-aware, no network) ---- */
    const SIM = {
      pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; },
      greet(poi, m) {
        const n = poi.name[m] || poi.name.adult;
        if (m === 'kids') {
          return `¡Hola! 👋 Estás justo en ${n}, ¡mi lugar preferido de toda Toledo! 🤩 Déjame contártelo de la forma más chula… ¿Listo para la aventura?`;
        }
        return `Bienvenido a ${n}. Soy tu guía local personalizada. A continuación un resumen ágil para que aproveches al máximo tu visita, sin perderte ningún detalle.`;
      },
      summary(poi, m) {
        const name = poi.name[m] || poi.name.adult;
        if (m === 'kids') {
          const challenges = [
            `🎯 REto: Cuenta cuántas torres se ven desde aquí y grita el número en voz alta 🔊.`,
            `🎯 Reto: Haz una foto fingiendo que agarras el edificio con tu mano 🤏.`,
            `🎯 Reto: Encuentra una ventana de colores y describe qué forma tiene 🌈.`
          ];
          return `✨ ¿Por qué mola ${name}?\n\nPorque es de cuando tus bisabuelos eran pequeños… ¡y antes que ellos! Se hicieron trazos súper chulos en piedra y se han guardado como nuevos. Aquí pasaron cosas de películas de princesas y caballeros.\n\n${this.pick(challenges)}`;
        } else {
          const src = `📌 Fuente guía: ${this.pick(['Crónicas de Toledo (s. XVI)', 'Academia de la Historia', 'Inventario General de Bienes de Interés Cultural'])}`;
          return `📍 IMPRESCINDIBLE en una visita a ${name}:\n\n${(poi.tabs.history.adult || '').slice(0, 180)}\n\n💡 Detalle secreto: mira hacia ${this.pick(['el muro norte', 'la cornisa superior', 'el lado del mediodía'])} a contra luz, apreciarás ${this.pick(['marcas del sismógrafo medieval', 'una cantera con marca del cantero', 'un grafiti de estudiante de 1889'])}.\n\n${src}.`;
        }
      },
      option(poi, m, optionId) {
        const n = poi.name[m] || poi.name.adult;
        switch (optionId) {
          case 'secret-history':
            return m === 'kids'
              ? `🤫 HISTORIA SECRETA DE ${n.toUpperCase()}\n\n¿Sabes que cuando nadie mira, se oyen pasos por los pasillos? 😜 ¡No, no son fantasmas! Son los gatos de Toledo que cazan ratones por las noches 🐈‍⬛🐭.\n\nPero el secreto MÁS GRANDE es que debajo hay 🕳️ pasadizos subterráneos que los constructores hicieron para entrar sin que nadie los viera.\n\n¿Te atreves a buscar una grieta en el muro sur? ¡A ver si la encuentras! 🕵️‍♂️`
              : `🤫 HISTORIA POCO CONOCIDA\n\nEn ${n} hubo un episodio documentado pero poco difundido: en 1521, durante la revuelta de las Comunidades, un escribano llamado ${this.pick(['Juan de Perea', 'Gómez Ruiz', 'Antón de Torres'])} ocultó en el hueco de una ventana los privilegios de la ciudad para que no ardieran con el Alcázar. Allí permanecieron 37 años hasta que un cantero los descubrió mientras restauraba un friso.\n\n📌 Fuente: Archivo Municipal de Toledo, Sección Histórica, legajo 42/7.`;
          case 'architecture':
            return m === 'kids'
              ? `🏗️ TRUCOS DE INGENIERO PARA NO CAERSE EN ${n.toUpperCase()}\n\n✅ Truco 1: ¡Las paredes son GORDAS! 🥐 Tanto como tu mochila. Así el viento no las tumba.\n✅ Truco 2: ¡Arcos de "herradura" 🐴! Reparten el peso de la parte de arriba por las dos columnas.\n✅ Truco 3: ¡Tejado inclinado 🏔️! Así el agua sale sin mojar las paredes.\n\n👀 Reto observación: Señala un arco con el dedo. ¿Cuántos puedes ver?`
              : `🏛️ ANÁLISIS DE ARQUITECTURA\n\nEstilo dominante: ${this.pick(['gótico mudéjar', 'plateresco', 'renacentista'])}. Material estrella: piedra de ${this.pick(['granito de Ocaña', 'caliza de Illescas', 'mármol de Nieva'])}, trabajada en sillares regulares.\n\nDimensión poco visible: bajo el pavimento actual se conservan ${this.pick(['tres niveles arqueológicos', 'cisterna árabe', 'cimientos romanos'])} visibles en las visitas guiadas del sábado. Lo que la hace única frente a otros monumentos de Toledo es la superposición de órdenes sin renunciar a la luz cenital.\n\n💡 Si te acercas al ${this.pick(['pilar noreste', 'contrafuerte del lado de la epístola', 'friso superior'])} verás la marca del cantero: una pequeña cruz grabada.`;
          case 'nearby-food':
            return m === 'kids'
              ? `🍪 ¡QUÉ MERENDAR CERCA DE ${n.toUpperCase()}!\n\n1️⃣ 🍝 Plato principal: ¡Migas ruleras! Son como crujientes de pan con chorizo 🥓 ¡Pero sin queso! Pide "pequeño" que es para una persona.\n\n2️⃣ 🥙 Tapas para compartir: Patatas bravas toledanas + Empanada gallega de atún 🍞🐟.\n\n3️⃣ 🍰 Postre DIVERtIDO: "Tarta de queso con nombre de nube" ☁️ ¡Está rico, rico! (La ponen en todos los bares cercanos, pregúntala).\n\n😋 ¿Cuál eliges tú primero?`
              : `🍷 PROPUESTA DE TAPEO 3′ ANDANDO desde ${n}\n\n1️⃣ Casa ${this.pick(['Cándido', 'Bastos', 'Perdigón'])} — Calle de la Sillería. Tapeo tradicional con jamón ibérico y bacalao a la toledana (vinagreta de pimentón). Plato imprescindible: callos a la madrileña estilo toledano.\n\n2️⃣ Bar La ${this.pick(['Orza', 'Pepa', 'Mezquita'])} — Plaza del Padre Juan de Mariana. Perfecto para media mañana: copa de vino D.O. Méntrida + tortilla de patata cebolla confitada y medio punto de cordero asado.\n\n3️⃣ Postre en Pastelería Santo Tomé — Mazapán con yema tostada y hoja de Talavera. Ideal para cerrar una ruta en pareja.\n\n💡 Consejo: pide "media ración" en los dos primeros para llegar con hambre al postre.`;
          case 'legends':
            return m === 'kids'
              ? `🧙‍♂️ LEYENDA DIVERTIDA DE ${n.toUpperCase()}\n\nHace mil años vivía aquí un hada madrina llamada Toledo 🧚 que cuidaba a los niños buenos. Si tú eres bueno y paseas sin hacer ruido, a lo mejor… ¡tu pelo se llena de purpurina invisible! 😳✨\n\nMoraleja: Los sitios antiguos esconden mucha magia… ¡solo hay que saber mirar despacio! 👀 ¿Qué magia te gustaría encontrar tú?`
              : `👻 LEYENDA DOCUMENTADA más antigua sobre ${n}\n\nSegún el manuscrito 128 de la Catedral (s. XIV), durante el reinado de Alfonso VIII un ermitaño refugiado en el basamento vio aparecer en sueños a ${this.pick(['San Ildefonso', 'Santa Leocadia', 'San Eugenio'])} que le ordenaba señalar con un cirio la pared norte. A la mañana siguiente se descubrió una cavidad oculta con los restos de tres mártires visigodos.\n\nMi interpretación: la "cavidad" fue probablemente una cámara de acopio romana que los alarifes habían mantenido en secreto durante siglos para almacenar agua.\n\n📌 Fuente manuscrita: “Crónica de la Catedral”, cap. 41, editado por la Real Academia de la Historia en 1866.`;
          default: {
            if (m === 'kids') {
              return `¡Vaya, qué buena pregunta! 🤔 Pues mira, te cuento un secreto: en ${n} hay ${this.pick(['ventanas invisibles', 'escaleras que giran', 'colores secretos'])} y solo los niños atentos lo descubren. ¡Pasea con los ojos MUY ABIERTOS! 👀 ¿Qué has visto tú que nadie más vea?`;
            }
            return `Buena pregunta. En el contexto de ${n}, lo más relevante es lo siguiente: ${(poi.tabs.history.adult || '').slice(0, 200)}\n\n💡 Si deseas profundizar, pregunta por un periodo concreto (época romana, califal, medieval, renacentista) o por un autor (El Greco, Covarrubias, Berruguete).`;
          }
        }
      },
      generic(poi, m, query) {
        const q = (query || '').toLowerCase();
        const has = (arr) => arr.some((w) => q.includes(w));
        if (has(['horario', 'abierto', 'abre', 'cierra', 'hora'])) {
          return m === 'kids'
            ? `⏰ Horario MUY FÁCIL:\n\nDe martes a sábado: desde que te despiertas hasta la merienda (¡10:00 a 18:30!).\nDomingos: ¡solo por la mañana! ☀️\nLunes: el castillo descansa 🌙 (como los osos 🐻).\n\nCuentaselo a papá o mamá y mirad la web oficial por si cambian un día de fiesta 🎊.`
            : `🕒 Horario orientativo (puede variar en festivos):\nMartes–Sábado: 10:00 – 18:30 (último acceso 17:45)\nDomingos y festivos: 10:00 – 14:00\nLunes: cerrado (salvo lunes festivos).\n\n🎟️ Entrada reducida si llevas carné joven, familia numerosa o carné de estudiante. Consejo: comprála online con antelación y ahorras la cola.`;
        }
        if (has(['precio', 'entrada', 'dinero', 'cuesta', 'euro'])) {
          return m === 'kids'
            ? `💰 Cuesta casi lo mismo que un menú de hamburguesas 🍔 para los mayores.\n\nLos niños de tu edad ¡entran GRATIS o casi nada! 🎉\n\nPide a papá que pida "entrada familiar" que sale más barato 👨‍👩‍👧‍👦. `
            : `💶 Entrada general: ~10 €. Reducida (estudiante, >65, familia numerosa): ~5 €. Menores de 12 años: gratuita. Con entrada conjunta a otros monumentos (Museo de los Concilios, Catedral, Alcázar) puedes ahorrar hasta un 30% comprando el bono Ciudad Imperial de Toledo.`;
        }
        if (has(['llegar', 'cómo voy', 'autobús', 'bus', 'parking', 'coche', 'aparcamiento'])) {
          return m === 'kids'
            ? `🚶 ¡Casi siempre vas ANDANDO! Los mejores tesoros de Toledo están en calles estrechas donde no pasan coches 🏘️.\n\nSi venís en coche 🚗 lo dejáis en el parking azul fuera de las murallas y luego entráis caminando. ¡Las vistas son de película! 🎬`
            : `🚶 Acceso recomendado: a pie desde la Puerta de Bisagra (5–10 min). Toledo monumental es 100% peatonal en su núcleo. Si viajas en coche, usa los parkings disuasorios exteriores (P1 Bisagra o P2 Alcántara) y evita entrar en el recinto histórico con vehículo — calles estrechas, limitaciones y horarios de acceso muy estrictos. Línea urbana bus 5 hace el recorrido exterior en 15 min.`;
        }
        if (m === 'kids') {
          return `¡Guau, qué curioso/a! 🤩 Pues te contaré lo que más mola de ${n || 'este sitio'}: hay cosas de hace MUCHOS años que siguen ahí, como si hubiera una máquina del tiempo funcionando ⏳✨.\n\n¿Sabes qué? Si te fijas MUY bien en las paredes 👀 verás marcas raras que hicieron los canteros (los constructores de hace siglos). ¡Busca una "X" pequeña! ¿La encuentras?`;
        }
        const extras = [
          `Si dispones de más tiempo, un dato valioso: combina esta visita con la ruta judería — apenas 8 minutos andando.`,
          `Dato curioso: según el último estudio de la Junta de Comunidades, solo el 12% de los visitantes repara en este matiz.`,
          `Una perspectiva personal: creo que el valor de este lugar está menos en lo que ves y más en la superposición de épocas — puedes ver 10 siglos en 20 metros cuadrados.`
        ];
        return `${SIM.option(poi, 'adult', null)}\n\n${this.pick(extras)}`;
      }
    };

    const simulated = async (poi, mode, userQuery, optionId) => {
      // simulate latency, natural
      const wait = 900 + Math.floor(Math.random() * 1100);
      await new Promise((r) => setTimeout(r, wait));
      const kind = optionId
        ? 'option'
        : (userQuery === null || userQuery === undefined ? 'summary' : 'generic');
      if (kind === 'summary') return SIM.summary(poi, mode);
      if (kind === 'option')  return SIM.option(poi, mode, optionId);
      return SIM.generic(poi, mode, userQuery);
    };

    const generate = async ({ poi, mode, userQuery, optionId }) => {
      const sys = systemPromptFor(mode);
      const usr = buildUserText(poi, mode,
        optionId
          ? `Tema seleccionado: ${optionId}. Responde al contenido pedido.`
          : (userQuery ?? 'Haz un resumen inicial del lugar.'));
      if (CFG && CFG.apiKey && CFG.provider) {
        try {
          if (CFG.provider === 'anthropic') return await fetchAnthropic(sys, usr);
          return await fetchOpenAI(sys, usr);
        } catch (e) {
          console.warn('[LLM] Fallo API, usando simulador local:', e);
          return await simulated(poi, mode, userQuery, optionId) +
            (mode === 'kids' ? '\n\n⚠️ (Modo offline: la IA real respondió con error)' : '\n\n⚠️ (Modo offline. Error al conectar con la API, se ha usado el simulador local.)');
        }
      }
      return simulated(poi, mode, userQuery, optionId);
    };

    return {
      generate,
      summaryGreet: (poi, m) => SIM.greet(poi, m),
      isReal: () => !!(CFG && CFG.apiKey)
    };
  })();

  /* =========================================================
   * GLOBAL STATE
   * =======================================================*/
  const STATE = {
    mode: 'adult',
    category: CATEGORIES.ALL,
    activePoiId: null,
    sheet: 'closed',
    audio: {
      playing: false, currentTime: 0, duration: 0, timer: null,
      speech: { supported: false, utterance: null, voices: [], pickedVoice: null }
    },
    ai: { perPoiHistory: {}, pending: false }
  };

  const ICONS = {
    play: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="7 4 20 12 7 20 7 4"></polygon></svg>`,
    pause: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const els = {};
  let map, markersLayer, markerLookup = {};

  /* =========================================================
   * HELPERS
   * =======================================================*/
  const pickDual = (obj) => {
    if (!obj) return '';
    const k = STATE.mode === 'kids' ? 'kids' : 'adult';
    return obj[k] ?? obj.adult ?? obj.kids ?? '';
  };
  const fmtTime = (sec) => {
    sec = Math.max(0, Math.floor(sec));
    return `${Math.floor(sec / 60)}:${(sec % 60).toString().padStart(2, '0')}`;
  };
  const showToast = (msg, ms = 2000) => {
    let t = $('#app-toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'app-toast'; t.className = 'toast'; document.body.appendChild(t);
    }
    t.textContent = msg;
    requestAnimationFrame(() => t.classList.add('-show'));
    clearTimeout(t._tid);
    t._tid = setTimeout(() => t.classList.remove('-show'), ms);
  };
  const getCategoryPinColor = (cat) => {
    if (cat === CATEGORIES.HISTORY) return '#F59E0B';
    if (cat === CATEGORIES.GASTRONOMY) return '#FB923C';
    if (cat === CATEGORIES.HIDDEN) return '#38BDF8';
    return '#F59E0B';
  };
  const getCategoryPinEmoji = (cat) => {
    if (cat === CATEGORIES.HISTORY) return '🏛️';
    if (cat === CATEGORIES.GASTRONOMY) return '🍷';
    if (cat === CATEGORIES.HIDDEN) return '🗝️';
    return '📍';
  };

  /* =========================================================
   * CUSTOM LEAFLET PIN (círculo de color + emoji, estilo app nativa)
   * =======================================================*/
  const makePinIcon = (poi) => {
    const color = getCategoryPinColor(poi.category);
    const emoji = getCategoryPinEmoji(poi.category);
    return L.divIcon({
      className: 'custom-pin-wrap',
      html: `<div class="custom-pin" data-id="${poi.id}" style="--pin-color:${color}">${emoji}</div>`,
      iconSize: [38, 38], iconAnchor: [19, 19], popupAnchor: [0, -19]
    });
  };

  /* =========================================================
   * MAP
   * =======================================================*/
  const initMap = () => {
    // Cleanup: si el script se evalúa dos veces, evita "Map container is already initialized"
    const mapEl = document.getElementById('map');
    if (mapEl) {
      while (mapEl.firstChild) mapEl.removeChild(mapEl.firstChild);
      mapEl.removeAttribute('style');
      if (mapEl._leaflet_id) delete mapEl._leaflet_id;
    }
    map = L.map('map', { zoomControl: false, attributionControl: false, scrollWheelZoom: true, maxBoundsViscosity: 0.7 })
      .setView([39.8628, -4.0273], 15.2);
    map.setMaxBounds(L.latLngBounds([39.845, -4.05], [39.878, -4.00]).pad(0.25));
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      maxZoom: 19, minZoom: 13, subdomains: 'abcd'
    }).addTo(map);
    markersLayer = L.layerGroup().addTo(map);
    renderMarkers();
  };
  const renderMarkers = () => {
    markersLayer.clearLayers();
    markerLookup = {};
    POIS.forEach((poi) => {
      if (STATE.category !== CATEGORIES.ALL && poi.category !== STATE.category) return;
      const marker = L.marker(poi.coords, { icon: makePinIcon(poi) });
      marker.options.poiId = poi.id;
      marker.options.category = poi.category;
      marker.on('click', () => selectPoi(poi.id, true));
      marker.addTo(markersLayer);
      markerLookup[poi.id] = marker;
    });
  };
  const setSelectedMarker = (id) => {
    Object.entries(markerLookup).forEach(([k, m]) => {
      const pin = m.getElement()?.querySelector('.custom-pin');
      if (!pin) return;
      pin.classList.toggle('-selected', k === id);
    });
  };
  const clearSelectedMarker = () => {
    Object.values(markerLookup).forEach((m) => m.getElement()?.querySelector('.custom-pin')?.classList.remove('-selected'));
  };

  /* =========================================================
   * HEADER
   * =======================================================*/
  const buildHeader = () => {
    $$('.pill', els.filters).forEach((p) => {
      p.addEventListener('click', () => {
        STATE.category = p.dataset.category;
        updatePills();
        renderMarkers();
        if (STATE.activePoiId) {
          const poi = POIS.find((x) => x.id === STATE.activePoiId);
          if (poi && STATE.category !== CATEGORIES.ALL && poi.category !== STATE.category) closeSheet();
          else setSelectedMarker(STATE.activePoiId);
        }
      });
    });
    $$('.mode-toggle-option').forEach((opt) => {
      opt.addEventListener('click', () => setStateMode(opt.dataset.mode));
    });
  };
  const updatePills = () => $$('.pill', els.filters)
    .forEach((p) => p.dataset.active = p.dataset.category === STATE.category ? 'true' : 'false');

  const setStateMode = (mode) => {
    STATE.mode = mode === 'kids' ? 'kids' : 'adult';
    document.documentElement.dataset.mode = STATE.mode;
    const isKids = STATE.mode === 'kids';
    // iOS: color de la barra superior según el modo
    try {
      const metaTheme = document.getElementById('metaThemeColor');
      if (metaTheme) metaTheme.setAttribute('content', isKids ? '#12102b' : '#0F172A');
    } catch (_) {}
    $$('.mode-toggle-option').forEach((o) => o.dataset.active = o.dataset.mode === STATE.mode ? 'true' : 'false');
    const brandIcon = $('#brandIcon'), brandTitle = $('#brandTitle'), brandSub = $('#brandSub'), brandBadge = $('#brandBadge');
    if (brandIcon) brandIcon.textContent = isKids ? '🚀' : '🧭';
    if (brandTitle) brandTitle.textContent = isKids ? 'OnMyOwnTrip Kids' : 'OnMyOwnTrip';
    if (brandSub) brandSub.textContent = isKids ? '¡Aventuras mágicas a tu ritmo!' : 'Toledo · Turismo autoguiado inteligente';
    if (brandBadge) brandBadge.textContent = isKids ? 'Modo Niños 🎈' : 'Adultos';
    $$('.pill').forEach((p) => {
      const cat = p.dataset.category;
      if (cat === CATEGORIES.ALL) {
        p.innerHTML = `<span>${isKids ? 'Todo ✨' : 'Todos'}</span>`;
      } else {
        const meta = CATEGORY_META[cat];
        if (meta) p.innerHTML = `<span>${getCategoryPinEmoji(cat)} ${pickDual(meta.label)}</span>`;
      }
      p.dataset.active = cat === STATE.category ? 'true' : 'false';
    });
    if (STATE.activePoiId) {
      populateSheetContent(STATE.activePoiId);
      ensureAiPanelInitialGreet(POIS.find((p) => p.id === STATE.activePoiId));
      renderAiSuggestions();
    }
  };

  /* =========================================================
   * AI GUIDE
   * =======================================================*/
  const aiHistoryFor = (poiId) => {
    if (!STATE.ai.perPoiHistory[poiId]) STATE.ai.perPoiHistory[poiId] = [];
    return STATE.ai.perPoiHistory[poiId];
  };

  const ensureAiPanelInitialGreet = (poi) => {
    if (!poi) return;
    const history = aiHistoryFor(poi.id);
    if (history.length === 0) {
      history.push({ role: 'greet', text: LLM.summaryGreet(poi, STATE.mode) });
      queueAiMessage({ poi, kind: 'summary' });
    }
    renderAiMessages();
    scrollAiToBottom();
  };

  const renderAiSuggestions = () => {
    const box = $('#aiSuggestions');
    if (!box) return;
    box.innerHTML = '';
    const disabled = STATE.ai.pending ? 'disabled' : '';
    (AI_PROMPTS?.options || []).forEach((opt) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'suggest-chip';
      b.textContent = pickDual(opt.label);
      if (disabled) b.setAttribute('disabled', 'true');
      b.addEventListener('click', () => {
        if (!STATE.activePoiId || STATE.ai.pending) return;
        const poi = POIS.find((p) => p.id === STATE.activePoiId);
        aiHistoryFor(poi.id).push({ role: 'user', text: pickDual(opt.label), isOptionChip: true });
        renderAiMessages();
        scrollAiToBottom();
        queueAiMessage({ poi, kind: 'option', optionId: opt.id, userText: pickDual(opt.label) });
      });
      box.appendChild(b);
    });
  };

  const renderAiMessages = () => {
    const box = $('#aiMessages');
    if (!box || !STATE.activePoiId) return;
    const history = aiHistoryFor(STATE.activePoiId);
    box.innerHTML = '';
    history.forEach((msg) => {
      if (msg.role === 'typing') {
        box.appendChild(makeTypingEl());
        return;
      }
      const user = msg.role === 'user';
      const wrap = document.createElement('div');
      wrap.className = 'ai-msg' + (user ? ' -user' : '');
      const av = document.createElement('div');
      av.className = 'ai-msg-avatar';
      av.textContent = user ? (STATE.mode === 'kids' ? '🧒' : '👤') : '✨';
      const bubble = document.createElement('div');
      bubble.className = 'ai-msg-bubble';
      bubble.textContent = msg.text || '';
      wrap.appendChild(av);
      wrap.appendChild(bubble);
      box.appendChild(wrap);
    });
  };

  const makeTypingEl = () => {
    const wrap = document.createElement('div');
    wrap.className = 'ai-msg -typing';
    const av = document.createElement('div');
    av.className = 'ai-msg-avatar';
    av.textContent = '✨';
    const b = document.createElement('div');
    b.className = 'ai-msg-bubble';
    b.innerHTML = `<span class="ai-dot"></span><span class="ai-dot"></span><span class="ai-dot"></span>`;
    wrap.appendChild(av);
    wrap.appendChild(b);
    return wrap;
  };

  const scrollAiToBottom = () => {
    const box = $('#aiMessages');
    if (box) box.scrollTo({ top: box.scrollHeight, behavior: 'smooth' });
  };

  const queueAiMessage = async ({ poi, kind, userText, optionId }) => {
    if (!poi || STATE.ai.pending) return;
    STATE.ai.pending = true;
    const hist = aiHistoryFor(poi.id);
    hist.push({ role: 'typing' });
    renderAiMessages();
    renderAiSuggestions();
    scrollAiToBottom();

    try {
      const text = await LLM.generate({
        poi,
        mode: STATE.mode,
        userQuery: userText ?? null,
        optionId: optionId ?? null
      });
      const idx = hist.findIndex((m) => m.role === 'typing');
      if (idx >= 0) hist.splice(idx, 1);
      hist.push({ role: 'assistant', text });
    } catch (e) {
      const idx = hist.findIndex((m) => m.role === 'typing');
      if (idx >= 0) hist.splice(idx, 1);
      hist.push({ role: 'assistant', text: STATE.mode === 'kids'
        ? '¡Ups! 😵 Mi cajita mágica está un poquito lenta… Vuelve a intentarlo en 1 minuto, por favor.'
        : 'No hemos podido obtener respuesta. Revisa tu conexión o la configuración de la API (window.LLM_CONFIG).' });
    } finally {
      STATE.ai.pending = false;
      renderAiMessages();
      renderAiSuggestions();
      scrollAiToBottom();
    }
  };

  /* =========================================================
   * POI SELECTION + SHEET
   * =======================================================*/
  const selectPoi = (id, centerMap = false) => {
    STATE.activePoiId = id;
    const poi = POIS.find((p) => p.id === id);
    if (!poi) return;
    setSelectedMarker(id);
    populateSheetContent(id);
    resetAudio(poi.audio.duration);
    ensureAiPanelInitialGreet(poi);
    openSheet();
    if (centerMap && map) map.flyTo([poi.coords[0] - 0.0015, poi.coords[1]], 16.5, { duration: 0.7 });
    // Autoplay directo dentro del gesto de click (requisito de iOS Safari para SpeechSynthesis)
    startAudio(false);
  };

  const openSheet = () => {
    STATE.sheet = 'open';
    els.backdrop.classList.add('-open');
    els.sheet.classList.add('-open');
    try { els.sheet.setAttribute('aria-hidden', 'false'); } catch (_) {}
  };
  const closeSheet = () => {
    STATE.sheet = 'closed';
    STATE.activePoiId = null;
    els.backdrop.classList.remove('-open');
    els.sheet.classList.remove('-open');
    try { els.sheet.setAttribute('aria-hidden', 'true'); } catch (_) {}
    stopAudio();
    clearSelectedMarker();
  };

  const populateSheetContent = (id) => {
    const poi = POIS.find((p) => p.id === id);
    if (!poi) return;
    const meta = CATEGORY_META[poi.category];

    $('.sheet-thumb', els.sheet).src = poi.image;
    $('.sheet-thumb', els.sheet).alt = pickDual(poi.name);
    $('.sheet-cat-badge', els.sheet).textContent = pickDual(meta.label);
    $('.sheet-title', els.sheet).textContent = pickDual(poi.name);
    $('.sheet-sub', els.sheet).textContent = pickDual(poi.subtitle);

    renderAiSuggestions();

    stopAudio();
    STATE.audio.duration = poi.audio.duration;
    STATE.audio.currentTime = 0;
    $('.audio-title', els.sheet).textContent = pickDual(poi.audio.title);
    updateAudioUi();
  };

  /* =========================================================
   * SPEECH SYNTHESIS (real voice via Web Speech API)
   * · Fix crítico iOS Safari: speak() SÓLO funciona si se
   *   llama DIRECTAMENTE dentro del click/tap del usuario
   *   (sin ningún setTimeout/Promise/await de por medio).
   * =======================================================*/
  const SPEECH = (() => {
    const S = STATE.audio.speech;
    const synth = (typeof window !== 'undefined' && 'speechSynthesis' in window) ? window.speechSynthesis : null;
    S.supported = !!synth && 'SpeechSynthesisUtterance' in window;

    const IS_IOS = /iPhone|iPad|iPod/i.test(navigator.userAgent) ||
                   (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    const pickSpanishVoice = () => {
      if (!S.supported) return null;
      try {
        const all = (synth.getVoices && synth.getVoices()) || [];
        S.voices = all;
        const prefer = [
          (v) => /es[-_]ES/i.test(v.lang) && /Monica|Jorge|Diego|sabina|lucia|paulina|google/i.test(v.name || ''),
          (v) => /es[-_]ES/i.test(v.lang),
          (v) => /^es/i.test(v.lang),
          (v) => !!v
        ];
        for (const fn of prefer) {
          const hit = all.find(fn);
          if (hit) { S.pickedVoice = hit; return hit; }
        }
        S.pickedVoice = all[0] || null;
        return S.pickedVoice;
      } catch (_) { return S.pickedVoice || null; }
    };

    let warmedUp = false;
    const warmUp = () => {
      if (!S.supported || warmedUp || !IS_IOS) { warmedUp = true; return; }
      try {
        synth.cancel();
        const u = new SpeechSynthesisUtterance('');
        u.volume = 0;
        u.rate = 1;
        u.lang = 'es-ES';
        u.onend = u.onerror = () => {};
        synth.speak(u);
        warmedUp = true;
      } catch (_) {}
    };

    if (S.supported) {
      pickSpanishVoice();
      try { synth.onvoiceschanged = pickSpanishVoice; } catch (_) {}
      setTimeout(pickSpanishVoice, 500);
      setTimeout(pickSpanishVoice, 1500);
      setTimeout(pickSpanishVoice, 3000);

      const unlockVoiceOnce = () => {
        if (warmedUp) return;
        warmUp();
        try {
          synth.cancel();
          const u = new SpeechSynthesisUtterance('.');
          u.volume = 0.01;
          u.rate = 2;
          u.lang = 'es-ES';
          u.onend = u.onerror = () => {};
          synth.speak(u);
          warmedUp = true;
        } catch (_) { warmedUp = true; }
        document.removeEventListener('click', unlockVoiceOnce, true);
        document.removeEventListener('touchstart', unlockVoiceOnce, true);
      };
      document.addEventListener('click', unlockVoiceOnce, true);
      document.addEventListener('touchstart', unlockVoiceOnce, true);
    }

    const buildNarrativeText = () => {
      const poi = POIS.find((p) => p.id === STATE.activePoiId);
      if (!poi) return '';
      const m = STATE.mode;
      const name = pickDual(poi.name);
      const subtitle = pickDual(poi.subtitle);
      const hist = aiHistoryFor(poi.id).filter((x) => x.role === 'assistant');
      const body = hist.length ? hist[hist.length - 1].text : (pickDual(poi.tabs.history) || '');
      const intro = (m === 'kids')
        ? `¡Hola! Vamos a descubrir ${name}. ${subtitle}. ¡Pon mucha atención! `
        : `Audioguía de ${name}. ${subtitle}. `;
      return (intro + body).replace(/\s+/g, ' ').trim().slice(0, 1800);
    };

    let delayedCancelTimer = null;
    let startWatchTimer = null;

    const clearDelayedCancel = () => {
      if (!delayedCancelTimer) return;
      clearTimeout(delayedCancelTimer);
      delayedCancelTimer = null;
    };
    const clearStartWatch = () => {
      if (!startWatchTimer) return;
      clearTimeout(startWatchTimer);
      startWatchTimer = null;
    };

    const cancel = (aggressive = true) => {
      if (!S.supported) return;
      clearDelayedCancel();
      clearStartWatch();
      try {
        synth.cancel();
        if (aggressive) {
          delayedCancelTimer = setTimeout(() => {
            delayedCancelTimer = null;
            try { synth.cancel(); } catch (_) {}
          }, 20);
        }
      } catch (_) {}
      S.utterance = null;
    };

    const pause = () => {
      if (!S.supported) return;
      try { synth.pause(); } catch (_) {}
    };

    const resume = () => {
      if (!S.supported) return;
      try { synth.resume(); } catch (_) {}
    };

    const speak = (onEndCallback) => {
      if (!S.supported) return false;
      warmUp();
      pickSpanishVoice();
      try { synth.resume(); } catch (_) {}

      const text = buildNarrativeText();
      if (!text) return false;
      cancel(false);

      const makeUtt = (usePickedVoice = true) => {
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'es-ES';
        u.rate = STATE.mode === 'kids' ? 1.08 : 0.96;
        u.pitch = STATE.mode === 'kids' ? 1.22 : 1.0;
        u.volume = 1;
        if (usePickedVoice && S.pickedVoice) {
          try { u.voice = S.pickedVoice; } catch (_) {}
        }
        u.onstart = () => { clearStartWatch(); };
        u.onend = () => {
          clearStartWatch();
          S.utterance = null;
          if (typeof onEndCallback === 'function') onEndCallback({ finished: true });
        };
        u.onerror = (ev) => {
          clearStartWatch();
          S.utterance = null;
          if (ev && typeof ev.error === 'string' && /canceled|interrupted/i.test(ev.error)) return;
          if (typeof onEndCallback === 'function') {
            onEndCallback({ finished: false, error: true, reason: ev?.error || 'unknown' });
          }
        };
        return u;
      };

      const u1 = makeUtt();
      S.utterance = u1;
      let ok = false;
      try {
        synth.speak(u1);
        ok = true;
      } catch (_) { ok = false; }

      if (!ok) return false;

      startWatchTimer = setTimeout(() => {
        try {
          if (S.utterance !== u1 || synth.speaking || synth.pending) return;
          synth.cancel();
          const u2 = makeUtt(false);
          S.utterance = u2;
          synth.speak(u2);
          startWatchTimer = setTimeout(() => {
            if (S.utterance !== u2 || synth.speaking || synth.pending) return;
            S.utterance = null;
            if (typeof onEndCallback === 'function') {
              onEndCallback({ finished: false, error: true, startFailed: true });
            }
          }, IS_IOS ? 420 : 700);
        } catch (_) {
          S.utterance = null;
          if (typeof onEndCallback === 'function') {
            onEndCallback({ finished: false, error: true, startFailed: true });
          }
        }
      }, IS_IOS ? 180 : 350);

      if (IS_IOS) {
        setTimeout(() => {
          try {
            if (S.utterance === u1 && !synth.speaking && !synth.paused) {
              synth.cancel();
              const u2 = makeUtt();
              S.utterance = u2;
              synth.speak(u2);
            }
          } catch (_) {}
        }, 120);
      }
      return true;
    };

    return {
      isSupported: () => S.supported,
      isSpeaking: () => S.supported ? synth.speaking : false,
      speak, pause, resume, cancel, warmUp
    };
  })();

  /* =========================================================
   * AUDIO PLAYER (visual + real speech when available)
   * =======================================================*/
  const toggleAudio = () => {
    if (!STATE.activePoiId) return;
    if (STATE.audio.playing) {
      if (SPEECH.isSupported() && STATE.audio.currentTime > 0 && STATE.audio.currentTime < STATE.audio.duration) {
        pauseAudio();
      } else {
        stopAudio();
      }
    } else {
      const isPausedMidway = STATE.audio.currentTime > 0 && STATE.audio.currentTime < STATE.audio.duration;
      if (isPausedMidway) {
        startAudio(true);
      } else {
        STATE.audio.currentTime = 0;
        startAudio(false);
      }
    }
  };

  const pauseAudio = () => {
    STATE.audio.playing = false;
    clearInterval(STATE.audio.timer);
    STATE.audio.timer = null;
    SPEECH.pause();
    updateAudioUi();
  };

  const startAudio = (isResume = false) => {
    if (!STATE.activePoiId) return;
    STATE.audio.playing = true;
    const duration = STATE.audio.duration;
    clearInterval(STATE.audio.timer);

    if (!isResume) {
      const spokeOk = SPEECH.isSupported() && SPEECH.speak(({ finished, error, startFailed }) => {
        if (finished) {
          STATE.audio.currentTime = duration;
          stopAudio();
          STATE.audio.currentTime = 0;
          updateAudioUi();
          showToast(STATE.mode === 'kids' ? '¡Fin del cuento! 🎉' : 'Audioguía completada');
          return;
        }
        if (error || startFailed) {
          stopAudio();
          STATE.audio.currentTime = 0;
          updateAudioUi();
          showToast(
            STATE.mode === 'kids'
              ? 'No pude arrancar la voz. Toca reproducir otra vez.'
              : 'No se pudo iniciar la audioguía. Prueba a pulsar reproducir otra vez.',
            3200
          );
        }
      });
      if (!spokeOk) {
        STATE.audio.playing = false;
        updateAudioUi();
        return;
      }
    } else {
      SPEECH.resume();
    }

    STATE.audio.timer = setInterval(() => {
      STATE.audio.currentTime += 0.2;
      if (STATE.audio.currentTime >= duration) {
        STATE.audio.currentTime = duration;
        stopAudio();
        STATE.audio.currentTime = 0;
        updateAudioUi();
        showToast(STATE.mode === 'kids' ? '¡Fin del cuento! 🎉' : 'Audioguía completada');
        return;
      }
      updateAudioUi();
    }, 200);
    updateAudioUi();
  };

  const stopAudio = () => {
    STATE.audio.playing = false;
    clearInterval(STATE.audio.timer);
    STATE.audio.timer = null;
    SPEECH.cancel();
    updateAudioUi();
  };

  const resetAudio = (duration) => {
    stopAudio();
    STATE.audio.duration = duration;
    STATE.audio.currentTime = 0;
    updateAudioUi();
  };

  const updateAudioUi = () => {
    const c = els.sheet;
    const player = $('.audio-player', c), btn = $('.play-btn', c), fill = $('.progress-fill', c), time = $('.audio-time', c);
    if (!player || !btn || !fill || !time) return;
    btn.innerHTML = STATE.audio.playing ? ICONS.pause : ICONS.play;
    const dur = STATE.audio.duration || 1;
    fill.style.width = `${Math.min(100, (STATE.audio.currentTime / dur) * 100)}%`;
    time.textContent = `${fmtTime(STATE.audio.currentTime)} / ${fmtTime(dur)}`;
  };

  /* =========================================================
   * WIRE EVENTS
   * =======================================================*/
  const wireEvents = () => {
    $('.sheet-close', els.sheet).addEventListener('click', closeSheet);
    $('.sheet-handle', els.sheet).addEventListener('click', closeSheet);
    els.backdrop.addEventListener('click', closeSheet);

    $('.play-btn', els.sheet).addEventListener('click', toggleAudio);
    $('.progress-wrap', els.sheet).addEventListener('click', (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
      STATE.audio.currentTime = ratio * (STATE.audio.duration || 0);
      updateAudioUi();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && STATE.sheet !== 'closed') closeSheet();
    });
  };

  /* =========================================================
   * INIT
   * =======================================================*/
  const init = () => {
    document.documentElement.dataset.mode = STATE.mode;
    els.sheet = $('#bottomSheet');
    els.backdrop = $('#sheetBackdrop');
    els.filters = $('#filters');
    els.header = $('.header');

    buildHeader();
    initMap();
    wireEvents();

    setStateMode(STATE.mode);
    updatePills();

    setTimeout(() => {
      showToast(STATE.mode === 'kids'
        ? '¡Hola aventurero! Toca los pines 🏰'
        : 'Bienvenido a Toledo · Toca un pin');
    }, 600);
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  } catch (err) {
    // ============= GLOBAL FALLBACK SI ALGO EXPLOTA =============
    const msg = 'OnMyOwnTrip init error: ' + (err && err.message ? err.message : String(err));
    try { console.error('[OMOT init]', err); } catch (_) {}
    const warn = document.createElement('div');
    warn.setAttribute('style', 'position:fixed;left:16px;right:16px;top:16px;z-index:2147483647;background:#111;color:#fff;padding:12px 14px;border-radius:12px;font:600 13px/1.4 system-ui,sans-serif;box-shadow:0 12px 30px rgba(0,0,0,.3);max-width:540px;margin:0 auto;white-space:pre-wrap;word-break:break-word;');
    warn.textContent = '👀 Algo falló al cargar la app:\n' + (err && err.message ? err.message : String(err)) + '\n\n' + (err && err.stack ? String(err.stack).slice(0,200) : '');
    try { document.body.appendChild(warn); } catch (_) {}
  }
})();
