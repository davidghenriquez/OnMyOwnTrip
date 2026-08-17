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

    // "concise" lo usa la conversación por voz (ver queueCallTurn en app.js):
    // en una llamada nadie quiere escuchar un párrafo entero solo para saber
    // cuánto mide algo, así que ahí se pide expresamente lo contrario que en
    // el chat de texto normal (que sí busca respuestas ricas y extensas).
    const systemPromptFor = (mode, cityName = 'la ciudad', concise = false) => {
      if (concise) {
        return mode === 'kids'
          ? `Eres "${cityName} Junior", un guía turístico divertido para niños de 7 a 11 años, hablando por VOZ en una llamada en directo (no por texto). Responde SIEMPRE muy corto y directo, como en una conversación real: da primero el dato exacto que se pregunta (una medida, un nombre, un número) y, como mucho, UNA frase corta más con un dato relacionado curioso o relevante. Máximo 2-3 frases en total, nunca listas ni resúmenes largos.`
          : `Eres "Guía ${cityName}", un guía turístico experto de ${cityName}, hablando por VOZ en una llamada en directo (no por texto). Responde SIEMPRE muy corto y directo, como en una conversación real: da primero el dato concreto que se pregunta (una cifra, un nombre, una fecha) y, como mucho, añade UNA frase corta con un dato relacionado relevante (por ejemplo, si preguntan una medida, la cifra y, si aporta valor, una comparación conocida). Máximo 2-3 frases en total, nunca párrafos largos ni resúmenes.`;
      }
      return mode === 'kids'
        ? `Eres "${cityName} Junior", un guía turístico muy divertido, amigable y pedagogógico para niños de 7 a 11 años que visita ${cityName}. Responde siempre en español, con frases cortas, emojis, tono juguetón y retos interactivos. NUNCA des miedo. Incluye consejos que un niño pueda hacer allí (mirar arriba, buscar una piedra, contar torres). Da una respuesta extensa y detallada, de unas 190-220 palabras (equivalente a un minuto largo hablado, tan larga como para un adulto), no la resumas. Hazlo memorable.`
        : `Eres "Guía ${cityName}", un guía turístico experto, ameno y con alto conocimiento histórico-artístico de ${cityName}. Responde en español, cercano pero riguroso, citando épocas, autores y datos contrastados. Si el usuario pregunta gastronomía, recomienda platos y establecimientos creíbles del centro. Da una respuesta extensa y con varios párrafos, de unas 190-220 palabras (equivalente a un minuto largo hablado), no la resumas. Destaca un "detalle secreto" final que el viajero pueda observar in situ.`;
    };

    const buildUserText = (poi, mode, userQuery, cityName = 'la ciudad') => {
      // Se usa siempre el nombre real (no el apodo de modo niño) como contexto
      // para la IA, para no confundirla con un nombre que no es el oficial.
      const name = poi.name.adult;
      const cat = poi.category;
      const context = [
        `Estamos en ${cityName}, justo en: ${name}`,
        `Categoría: ${cat}`,
        `Subtítulo: ${poi.subtitle[mode] || poi.subtitle.adult}`,
        `Fragmento historia: ${(poi.tabs.history[mode] || poi.tabs.history.adult).slice(0, 260)}…`
      ].join('. ');
      return `${context}. Usuario pregunta: ${userQuery}`;
    };

    const fetchOpenAI = async (sys, usr, maxTokensOverride) => {
      const url = (CFG.baseUrl || 'https://api.openai.com/v1') + '/chat/completions';
      const model = CFG.model || 'gpt-4o-mini';
      // Sin timeout, un fetch que se queda colgado (red inestable, el Worker
      // o el modelo tardando de más) deja la promesa pendiente para
      // siempre: ni error ni respuesta, así que "Pensando…" se queda ahí
      // sin que el usuario sepa si sigue trabajando o se ha roto (mismo
      // motivo que fetchOpenAIVision, más abajo, que ya tenía este límite).
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 25000);
      let res;
      try {
        res = await fetch(url, {
          method: 'POST',
          signal: controller.signal,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${CFG.apiKey}`
          },
          body: JSON.stringify({
            model,
            temperature: 0.6,
            // maxTokens/extraBody son opcionales en window.LLM_CONFIG:
            // algunos modelos "razonadores" (p.ej. Gemini 3.x vía el
            // endpoint compatible con OpenAI) consumen muchos tokens en
            // pensamiento interno antes de responder, así que necesitan un
            // max_tokens mucho más alto y a veces un reasoning_effort bajo
            // para no cortar la respuesta a medias. maxTokensOverride
            // permite bajarlo para peticiones que ya piden ser breves (ver
            // la llamada de voz, concise en LLM.generate): con menos
            // margen el modelo tiene menos "hueco" para pensar de más, lo
            // que en la práctica también suele acelerar la respuesta.
            max_tokens: maxTokensOverride || CFG.maxTokens || 700,
            messages: [
              { role: 'system', content: sys },
              { role: 'user', content: usr }
            ],
            ...(CFG.extraBody || {})
          })
        });
      } catch (e) {
        if (e.name === 'AbortError') throw new Error('chat-timeout');
        throw e;
      } finally {
        clearTimeout(timeoutId);
      }
      if (!res.ok) {
        const err = new Error(`OpenAI ${res.status}`);
        err.status = res.status;
        throw err;
      }
      const json = await res.json();
      return json?.choices?.[0]?.message?.content?.trim() ?? '';
    };

    // Variante con foto para "¿qué estoy viendo?" (ver scanForPoi en la UI):
    // mismo endpoint, pero con el content como array (texto + image_url), el
    // formato multimodal estándar que Gemini expone vía su capa compatible
    // con OpenAI. El Worker no distingue esto de una petición normal, así
    // que no necesita ningún cambio.
    //
    // IMPORTANTE: aunque la respuesta que queremos es corta (un id), hay que
    // mandar el mismo extraBody (reasoning_effort) que la llamada normal y
    // un max_tokens generoso: los modelos "razonadores" (p.ej. Gemini vía
    // este endpoint) gastan tokens en pensamiento interno ANTES de escribir
    // nada visible, así que un max_tokens bajo (p.ej. 20) puede agotarse
    // entero en ese pensamiento y devolver contenido vacío sin dar ningún
    // error — parece que la app "no responde" cuando en realidad la API
    // respondió 200 OK con la respuesta cortada a la nada.
    const fetchOpenAIVision = async (sys, usrText, imageDataUrl, maxTokens) => {
      const url = (CFG.baseUrl || 'https://api.openai.com/v1') + '/chat/completions';
      const model = CFG.model || 'gpt-4o-mini';
      // Sin timeout, un fetch que se queda colgado (red inestable, el
      // Worker o el modelo tardando de más) deja la promesa pendiente para
      // siempre: ni error ni respuesta, así que la app parece no responder
      // aunque en realidad sigue "esperando" sin que el usuario lo sepa.
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);
      let res;
      try {
        res = await fetch(url, {
          method: 'POST',
          signal: controller.signal,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${CFG.apiKey}`
          },
          body: JSON.stringify({
            model,
            temperature: 0.2,
            max_tokens: maxTokens || 300,
            messages: [
              { role: 'system', content: sys },
              { role: 'user', content: [
                { type: 'text', text: usrText },
                { type: 'image_url', image_url: { url: imageDataUrl } }
              ] }
            ],
            ...(CFG.extraBody || {})
          })
        });
      } catch (e) {
        if (e.name === 'AbortError') throw new Error('vision-timeout');
        throw e;
      } finally {
        clearTimeout(timeoutId);
      }
      if (!res.ok) {
        // El cuerpo del error de Gemini distingue "modelo saturado en este
        // instante" (RESOURCE_EXHAUSTED por rate-limit puntual, se
        // resuelve solo) de "cuota del día/mes agotada" (mismo código,
        // pero el mensaje lo aclara) — sin esto solo se ve "503" y no hay
        // forma de saber cuál de las dos es.
        let detail = '';
        try { detail = (await res.text()).slice(0, 300); } catch (_) {}
        console.warn('[Vision] Error de la API, cuerpo de la respuesta:', detail);
        const err = new Error(`OpenAI ${res.status}`);
        err.status = res.status;
        err.detail = detail;
        throw err;
      }
      const json = await res.json();
      return json?.choices?.[0]?.message?.content?.trim() ?? '';
    };

    // Reconocimiento visual: dada una foto y una lista corta de POIs
    // cercanos (ya acotada por GPS, ver scanForPoi): primero intenta que la
    // IA confirme cuál de esos candidatos concretos es (nunca le dejamos
    // adivinar un candidato inventado). Si la foto NO es ninguno de los
    // candidatos pero la IA aun así reconoce el lugar (aunque no esté en
    // nuestros datos), lo dice igual, con un resumen — ver scanForPoi para
    // cómo se presenta eso después con un aviso de "sin verificar", ya que
    // ese dato no está curado como el resto de la app.
    const identifyPoi = async ({ imageDataUrl, candidates, cityName }) => {
      if (!CFG || !CFG.apiKey || CFG.provider !== 'openai') return { supported: false };
      const list = candidates.map((c) => `- id:${c.id} | ${c.name} — ${c.subtitle}`).join('\n');
      // Prompt reforzado tras detectar un caso real de confusión: una foto de
      // la estatua del Oso y el Madroño (en plena Puerta del Sol de Madrid)
      // se identificó como "Puerta del Sol" — el modelo confundió cercanía
      // geográfica con identidad visual, algo muy fácil de que pase cuando
      // dos candidatos distintos comparten la misma plaza o están a pocos
      // metros (una escultura pequeña justo delante de un edificio grande,
      // por ejemplo). Las instrucciones de abajo separan explícitamente
      // ambos conceptos y piden identificar primero el objeto/edificio
      // protagonista de la foto antes de intentar hacer coincidir un id.
      const sys = [
        'Eres un sistema experto de reconocimiento visual de monumentos y lugares turísticos.',
        'Se te da una foto real tomada por un turista y, si las hay, una lista de lugares candidatos cercanos por GPS (con id y una breve descripción).',
        'IMPORTANTE: la lista de candidatos es solo una acotación por cercanía geográfica, NO una lista de opciones garantizadas. Es muy habitual que dos o más candidatos distintos estén en la misma plaza o a pocos metros entre sí (por ejemplo, una estatua o fuente pequeña justo delante de un edificio monumental, o un monumento dentro de una plaza más grande). Que la foto se haya tomado CERCA de un candidato no significa que la foto SEA ese candidato.',
        'Antes de responder, identifica primero qué objeto, escultura o edificio concreto es el protagonista real de la foto (su forma, tamaño, materiales, si es una pieza pequeña aislada o una fachada completa), y solo después compáralo con la descripción de cada candidato.',
        'Responde ÚNICAMENTE en uno de estos formatos, sin texto extra:',
        '1) Si el protagonista de la foto coincide visualmente, de forma clara, con la DESCRIPCIÓN de uno de los candidatos (no solo con la cercanía del lugar donde se tomó): MATCH:<id exacto>',
        '2) Si el protagonista de la foto NO coincide visualmente con ningún candidato de la lista (aunque la foto se haya tomado cerca de alguno), o no había lista, pero aun así reconoces con razonable confianza qué edificio/monumento/escultura/lugar es en realidad:',
        'NOMBRE: <nombre corto>',
        'RESUMEN: <una frase breve>',
        'INFO: <2-3 frases con datos concretos y contrastables: qué es, época o autor, algo destacable>',
        '3) Si no puedes identificarlo con una confianza razonable: DESCONOCIDO'
      ].join('\n');
      const usrText = candidates.length
        ? `Foto tomada cerca de ${cityName}. Candidatos cercanos:\n${list}\n\n¿Cuál coincide (MATCH:<id>)? Si no coincide ninguno, identifica igualmente el lugar si puedes (formato NOMBRE/RESUMEN/INFO), o responde DESCONOCIDO.`
        : `Foto tomada cerca de ${cityName}, sin candidatos cercanos conocidos. Identifica qué edificio, monumento o lugar es (formato NOMBRE/RESUMEN/INFO), o responde DESCONOCIDO si no puedes.`;
      const raw = await fetchOpenAIVision(sys, usrText, imageDataUrl, 400);
      const trimmed = raw.trim();
      if (/^DESCONOCIDO/i.test(trimmed)) return { supported: true, type: 'none' };
      const matchTag = trimmed.match(/^MATCH:\s*(.+)/i);
      if (matchTag) {
        const cleaned = matchTag[1].trim().replace(/["'.:\s]+$/, '');
        // Coincidencia exacta primero; si el modelo se ha ido de madre con
        // explicaciones pese a la instrucción, buscamos el id como palabra
        // suelta dentro de la respuesta en vez de descartarlo sin más.
        let match = candidates.find((c) => c.id.toLowerCase() === cleaned.toLowerCase());
        if (!match) {
          const lower = cleaned.toLowerCase();
          match = candidates.find((c) => new RegExp(`\\b${c.id.toLowerCase()}\\b`).test(lower));
        }
        if (match) return { supported: true, type: 'match', poiId: match.id };
      }
      const nameMatch = trimmed.match(/NOMBRE:\s*(.+)/i);
      if (nameMatch) {
        const summaryMatch = trimmed.match(/RESUMEN:\s*(.+)/i);
        const infoMatch = trimmed.match(/INFO:\s*([\s\S]+)/i);
        return {
          supported: true,
          type: 'openended',
          name: nameMatch[1].trim(),
          subtitle: summaryMatch ? summaryMatch[1].trim() : '',
          info: infoMatch ? infoMatch[1].trim() : ''
        };
      }
      return { supported: true, type: 'none' };
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
          max_tokens: 700,
          temperature: 0.6,
          messages: [{ role: 'user', content: usr }]
        })
      });
      if (!res.ok) {
        const err = new Error(`Anthropic ${res.status}`);
        err.status = res.status;
        throw err;
      }
      const json = await res.json();
      const block = json?.content?.find((b) => b.type === 'text');
      return (block?.text ?? '').trim();
    };

    /* ---- LOCAL SIMULATOR (template + POI context-aware, no network) ---- */
    const SIM = {
      pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; },
      // Los textos de poi.tabs son bastante breves (~60-90 palabras). Estas
      // intros/cierres genéricos se combinan con ellos para que cada
      // narración dure de forma fiable alrededor de un minuto hablado.
      introsAdult: [
        `Este casco histórico concentra siglos de civilizaciones superpuestas, y este lugar es una de las piezas clave para entenderlo.`,
        `Pocos rincones del mundo condensan tanta historia en tan poco espacio como este; aquí conviven huellas de distintas épocas y culturas.`,
        `Este es uno de esos lugares que conviene visitar despacio, porque cada detalle esconde una capa distinta de la historia de la ciudad.`
      ],
      closingsAdult: [
        `Antes de seguir caminando, tómate un momento para observar los materiales, las proporciones y la luz: son estos detalles, más que las fechas, los que realmente transmiten el paso del tiempo. Si te fijas bien, notarás que las distintas épocas conviven sin imponerse unas sobre otras, algo poco habitual.`,
        `Vale la pena imaginar cómo sería este lugar hace siglos, con otro tráfico de personas, otros oficios y otras preocupaciones cotidianas. La piedra permanece, pero quienes la habitaron cambiaron muchas veces de forma de vida, de lengua y de religión, dejando cada uno su propia huella superpuesta.`,
        `Un buen viajero no solo mira, también escucha: el eco de los pasos, el silencio de las calles, el contraste entre la piedra fría y la luz del día. Todo eso forma parte de la experiencia tanto como los datos históricos que acabas de escuchar.`
      ],
      introsKids: [
        `¡Prepárate para un viaje en el tiempo! Este sitio ha visto pasar reyes, caballeros y hasta alguna leyenda de dragones. 🐉`,
        `Esta ciudad esconde secretos en cada rincón, ¡y este es uno de los más chulos que vas a descubrir hoy! 🗺️`,
        `Agárrate fuerte, porque lo que te voy a contar lleva aquí cientos y cientos de años. ⏳✨`
      ],
      closingsKids: [
        `Antes de seguir tu aventura, mira bien a tu alrededor: fíjate en los colores de la piedra, en las formas raras de las ventanas y en lo alto que es todo. Los mejores exploradores son los que se fijan en los detalles pequeños que casi nadie ve. 🔍`,
        `Imagina a los niños que vivían aquí hace muchísimos años, jugando por estas mismas calles. ¿Jugarían a lo mismo que tú? Seguro que también se hacían un montón de preguntas mirando este lugar, igual que tú ahora mismo. 🤔`,
        `Cierra los ojos un segundo y escucha: el viento, los pájaros, algún eco lejano… Cada rincón de esta ciudad suena distinto, y este es uno de los sitios donde más se nota. 👂✨`
      ],
      // Introducciones específicas para "Historia secreta": el dato real viene
      // de poi.tabs.legends (igual que el chip "Leyendas"), así que aquí se usa
      // un envoltorio distinto ("dato poco conocido" en vez de "cuenta la
      // leyenda") para que no se lea como una repetición literal del otro chip.
      secretIntrosAdult: [
        `No es un dato que aparezca en las guías al uso, pero muchos vecinos y guías locales lo conocen bien.`,
        `Es de esos detalles que casi nunca se cuentan en una visita rápida, aunque cambian bastante la forma de ver el lugar.`,
        `Pocos visitantes se paran a preguntar por esto, aunque forma parte de lo que hace único a este sitio.`
      ],
      secretIntrosKids: [
        `¡Esto es un secreto que no todo el mundo conoce! 🤫`,
        `Prepárate, porque esto que te voy a contar no lo sabe todo el mundo... 🤭`,
        `¡Shhh! Acércate un poco, que esto es un secretillo especial de este lugar. 🤫✨`
      ],
      greet(poi, m) {
        // Nombre real siempre, aunque se hable en modo niño: el apodo
        // divertido es solo para lo que se lee en pantalla.
        const n = poi.name.adult;
        if (m === 'kids') {
          return `¡Hola! 👋 Estás justo en ${n}, ¡uno de mis lugares preferidos de toda la ciudad! 🤩 Déjame contártelo de la forma más chula… ¿Listo para la aventura?`;
        }
        return `Bienvenido a ${n}. Soy tu guía local personalizada. A continuación un resumen ágil para que aproveches al máximo tu visita, sin perderte ningún detalle.`;
      },
      summary(poi, m) {
        const name = poi.name.adult;
        const historyFull = poi.tabs.history[m] || poi.tabs.history.adult || '';
        if (m === 'kids') {
          const challenges = [
            `🎯 Reto: Cuenta cuántas torres se ven desde aquí y grita el número en voz alta 🔊.`,
            `🎯 Reto: Haz una foto fingiendo que agarras el edificio con tu mano 🤏.`,
            `🎯 Reto: Encuentra una ventana de colores y describe qué forma tiene 🌈.`
          ];
          return `✨ ¿Por qué mola ${name}?\n\n${this.pick(this.introsKids)}\n\n${historyFull}\n\n${this.pick(this.closingsKids)}\n\n${this.pick(challenges)}`;
        }
        const src = `📌 Fuente guía: ${this.pick(['Crónicas locales (s. XVI)', 'Academia de la Historia', 'Inventario General de Bienes de Interés Cultural'])}`;
        return `📍 ${name}\n\n${this.pick(this.introsAdult)}\n\n${historyFull}\n\n${this.pick(this.closingsAdult)}\n\n${src}.`;
      },
      pickDistinct(arr, count) {
        const pool = arr.slice();
        const out = [];
        while (out.length < count && pool.length) {
          const idx = Math.floor(Math.random() * pool.length);
          out.push(pool.splice(idx, 1)[0]);
        }
        return out;
      },
      // Datos de "profundizar" por tema (no genéricos), para que la respuesta
      // siga hablando realmente de historia secreta / arquitectura / comida /
      // leyendas, y no derive hacia otro asunto sin relación.
      deepenFacts: {
        adult: {
          'secret-history': [
            `un documento del archivo diocesano menciona un incidente que nunca llegó a las crónicas oficiales, silenciado probablemente por conveniencia política de la época`,
            `algunos vecinos más veteranos del barrio conservan relatos orales que nunca se han recogido por escrito, transmitidos de generación en generación`,
            `un historiador local publicó hace pocos años una referencia que contradice la versión más difundida de los hechos, aunque todavía no se ha investigado a fondo`,
            `existen indicios de que ciertos episodios se atenuaron deliberadamente en las crónicas para no comprometer a familias influyentes de la época`
          ],
          'architecture': [
            `un detalle que pocos guías mencionan es que los canteros solían dejar una marca personal oculta, visible solo con luz rasante al amanecer o al atardecer`,
            `los registros de la época recogen anécdotas curiosas sobre reformas posteriores que no siempre aparecen en las guías oficiales`,
            `un matiz que sorprende a los expertos es la superposición de técnicas constructivas de distintas épocas en el mismo punto`,
            `restauraciones recientes revelaron capas anteriores que cambian ligeramente la datación tradicional que se suele contar a los visitantes`
          ],
          'legends': [
            `existen variantes de esta leyenda en pueblos cercanos, con protagonistas distintos pero un desenlace casi idéntico, lo que sugiere un origen común más antiguo`,
            `algunos investigadores del folclore creen que estas historias servían para explicar fenómenos naturales que la gente de la época no podía comprender de otra forma`,
            `hay quien asegura haber vivido una experiencia similar a la de la leyenda en tiempos recientes, aunque nunca ha quedado documentada de forma oficial`,
            `la versión que se cuenta hoy en día difiere bastante de la recogida en manuscritos antiguos, señal de que la historia se ha ido adornando con el tiempo`
          ]
        },
        kids: {
          'secret-history': [
            `Cuentan que hay una carta muy antigua escondida en un archivo que nadie ha terminado de leer 📜, ¡y podría guardar otro secreto más!`,
            `Los abuelos del barrio se cuentan unos a otros historias de este sitio que nunca se han escrito en ningún libro 👴👵.`,
            `Un investigador encontró hace poco un papel que contaba la historia de otra forma distinta 🕵️‍♀️, ¡y todavía la están estudiando!`
          ],
          'architecture': [
            `¿Sabías que si cuentas hasta 3 antes de mirar hacia arriba, dicen que ves el detalle mágico mejor? 👀 Muchos niños que han venido antes que tú lo han probado y juran que funciona.`,
            `Un dato flipante: ¡algunas piedras de aquí pesan tanto como 3 elefantes juntos! 🐘🐘🐘 Y aun así, las subieron sin grúas ni máquinas, solo con cuerdas y mucha fuerza en equipo.`,
            `¡Hay una marca secreta tallada en una piedra que solo se ve si el sol pega de lado! ☀️ Todavía nadie se pone de acuerdo en qué significa exactamente.`
          ],
          'legends': [
            `¡Esta misma leyenda se cuenta también en otros pueblos, pero con otros protagonistas! 🧚 A lo mejor todas vienen de una historia aún más antigua.`,
            `Algunas personas mayores dicen que a ellos también les pasó algo parecido a lo de la leyenda 😲, ¡aunque nadie lo ha escrito nunca!`,
            `Cuentan que esta leyenda ha ido cambiando un poquito cada vez que se cuenta, ¡como el juego del teléfono escacharrado! 📞😄`
          ]
        }
      },
      deepen(poi, m, topicId) {
        const topicMeta = AI_TOPIC_NAMES[topicId];
        const topic = topicMeta ? (topicMeta[m] || topicMeta.adult) : (m === 'kids' ? 'esto' : 'este tema');
        const pool = (this.deepenFacts[m] && this.deepenFacts[m][topicId]) || this.deepenFacts[m]['architecture'];
        if (m === 'kids') {
          const [a, b, c] = this.pickDistinct(pool, Math.min(3, pool.length));
          return `✨ ¡Sigo contándote sobre ${topic}!\n\n${a}\n\n${b}\n\n${c || ''}\n\n${this.pick(this.closingsKids)}\n\n¿Quieres que siga profundizando? 🔍`;
        }
        const [factA, factB, factC] = this.pickDistinct(pool, Math.min(3, pool.length));
        return `🔍 Profundizando en ${topic}:\n\n${factA.charAt(0).toUpperCase()}${factA.slice(1)}.\n\nAdemás, ${factB}.\n\nY otro detalle poco conocido: ${factC || ''}.\n\n${this.pick(this.closingsAdult)}\n\n¿Sigo profundizando?`;
      },
      option(poi, m, optionId) {
        if (optionId && optionId.startsWith('deepen:')) {
          return this.deepen(poi, m, optionId.slice(7));
        }
        const n = poi.name.adult;
        switch (optionId) {
          case 'secret-history': {
            // Sin API real disponible no hay forma de generar un dato nuevo
            // de verdad, así que en vez de inventar un episodio y una fuente
            // falsos (como antes), se reutiliza el dato real y verificado de
            // poi.tabs.legends, con un envoltorio distinto al del chip
            // "Leyendas" para que no se lea como el mismo texto dos veces.
            const legendText = poi.tabs.legends[m] || poi.tabs.legends.adult || '';
            return m === 'kids'
              ? `🤫 HISTORIA SECRETA\n\n${this.pick(this.secretIntrosKids)}\n\n${legendText}\n\n${this.pick(this.closingsKids)}\n\n🕵️‍♂️ ¿Te atreves a contarle este secreto a tu familia?`
              : `🤫 HISTORIA POCO CONOCIDA\n\n${this.pick(this.secretIntrosAdult)}\n\n${legendText}\n\n${this.pick(this.closingsAdult)}`;
          }
          case 'architecture':
            return m === 'kids'
              ? `🏗️ ¡TRUCOS DE ARQUITECTURA!\n\n${this.pick(this.introsKids)}\n\n${poi.tabs.architecture.kids || ''}\n\n${this.pick(this.closingsKids)}\n\n👀 Reto observación: ¿cuántos de estos trucos puedes encontrar tú solo, sin que nadie te ayude?`
              : `🏛️ ARQUITECTURA\n\n${this.pick(this.introsAdult)}\n\n${poi.tabs.architecture.adult || ''}\n\n${this.pick(this.closingsAdult)}`;
          case 'legends':
            return m === 'kids'
              ? `🧙‍♂️ LEYENDA\n\n${this.pick(this.introsKids)}\n\n${poi.tabs.legends.kids || ''}\n\n${this.pick(this.closingsKids)}`
              : `👻 LEYENDA\n\n${this.pick(this.introsAdult)}\n\n${poi.tabs.legends.adult || ''}\n\n${this.pick(this.closingsAdult)}`;
          default: {
            if (m === 'kids') {
              return `¡Vaya, qué buena pregunta! 🤔 Pues mira, te cuento un secreto: en ${n} hay ${this.pick(['ventanas invisibles', 'escaleras que giran', 'colores secretos'])} y solo los niños atentos lo descubren. ¡Pasea con los ojos MUY ABIERTOS! 👀 ¿Qué has visto tú que nadie más vea?`;
            }
            return `Buena pregunta. En el contexto de ${n}, lo más relevante es lo siguiente: ${(poi.tabs.history.adult || '').slice(0, 200)}\n\n💡 Si deseas profundizar, pregunta por un periodo concreto (época romana, califal, medieval, renacentista) o por un autor (El Greco, Covarrubias, Berruguete).`;
          }
        }
      },
      generic(poi, m, query) {
        const n = poi.name.adult;
        const q = (query || '').toLowerCase();
        const has = (arr) => arr.some((w) => q.includes(w));
        if (has(['horario', 'abierto', 'abre', 'cierra', 'hora'])) {
          return m === 'kids'
            ? `⏰ Horario MUY FÁCIL:\n\nDe martes a sábado: desde que te despiertas hasta la merienda (¡10:00 a 18:30!).\nDomingos: ¡solo por la mañana! ☀️\nLunes: el castillo descansa 🌙 (como los osos 🐻).\n\nCuentaselo a papá o mamá y mirad la web oficial por si cambian un día de fiesta 🎊.`
            : `🕒 Horario orientativo (puede variar en festivos, conviene confirmar en la web oficial del lugar):\nMartes–Sábado: 10:00 – 18:30 (último acceso 17:45)\nDomingos y festivos: 10:00 – 14:00\nLunes: cerrado (salvo lunes festivos).\n\n🎟️ Entrada reducida si llevas carné joven, familia numerosa o carné de estudiante. Consejo: comprála online con antelación y ahorras la cola.`;
        }
        if (has(['precio', 'entrada', 'dinero', 'cuesta', 'euro'])) {
          return m === 'kids'
            ? `💰 Cuesta casi lo mismo que un menú de hamburguesas 🍔 para los mayores.\n\nLos niños de tu edad ¡entran GRATIS o casi nada! 🎉\n\nPide a papá que pida "entrada familiar" que sale más barato 👨‍👩‍👧‍👦. `
            : `💶 Entrada general orientativa: ~10 € (moneda local equivalente). Reducida (estudiante, >65, familia numerosa): ~5 €. Menores de 12 años: gratuita en muchos casos. Muchas ciudades ofrecen bonos conjuntos con otros monumentos cercanos que permiten ahorrar hasta un 30% — merece la pena preguntar en taquilla o mirar la web oficial.`;
        }
        if (has(['llegar', 'cómo voy', 'autobús', 'bus', 'parking', 'coche', 'aparcamiento'])) {
          return m === 'kids'
            ? `🚶 ¡Casi siempre vas ANDANDO! Los mejores tesoros de esta ciudad están en calles estrechas donde no pasan coches 🏘️.\n\nSi venís en coche 🚗 lo dejáis en un parking cerca del centro y luego entráis caminando. ¡Las vistas son de película! 🎬`
            : `🚶 Acceso recomendado: a pie desde la zona monumental más cercana (5–10 min); el núcleo histórico suele ser 100% peatonal. Si viajas en coche, usa algún parking disuasorio en el perímetro y evita entrar en el casco histórico con vehículo — calles estrechas, limitaciones y horarios de acceso muy estrictos. El transporte público local suele cubrir el recorrido exterior en unos 15 min.`;
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
      },
      // Versión corta de generic(), para la conversación por voz (ver
      // queueCallTurn): nadie quiere escuchar un párrafo entero por voz solo
      // para saber un horario o cuánto mide algo — aquí se prioriza dar el
      // dato directo y como mucho una frase más, igual que se le pide a la
      // IA real vía systemPromptFor(mode, cityName, concise: true).
      genericConcise(poi, m, query) {
        const n = poi.name.adult;
        const q = (query || '').toLowerCase();
        const has = (arr) => arr.some((w) => q.includes(w));
        if (has(['horario', 'abierto', 'abre', 'cierra', 'hora'])) {
          return m === 'kids'
            ? '⏰ Abre de martes a sábado, de 10:00 a 18:30. Los domingos solo por la mañana, ¡y los lunes descansa!'
            : '🕒 De martes a sábado, 10:00–18:30. Domingos 10:00–14:00. Lunes cerrado (confirma en la web oficial por si hay festivos).';
        }
        if (has(['precio', 'entrada', 'dinero', 'cuesta', 'euro'])) {
          return m === 'kids'
            ? '💰 Cuesta poquito, ¡y los niños casi siempre entran gratis o casi gratis!'
            : '💶 Entrada general orientativa: unos 10 €, reducida unos 5 €. Confirma el precio exacto en la web oficial.';
        }
        if (has(['llegar', 'cómo voy', 'autobús', 'bus', 'parking', 'coche', 'aparcamiento'])) {
          return m === 'kids'
            ? '🚶 Casi siempre se va andando, ¡las calles del centro son solo para caminar!'
            : '🚶 Mejor a pie desde el centro histórico, unos 5-10 minutos; es una zona muy peatonal.';
        }
        const firstFact = (poi.tabs.history.adult || '').split('.')[0];
        return m === 'kids'
          ? `¡Buena pregunta! De ${n} lo más curioso es que tiene siglos de historia escondidos en cada rincón. 🕰️`
          : `Sobre ${n}: ${firstFact}.`;
      }
    };

    const simulated = async (poi, mode, userQuery, optionId, concise) => {
      // simulate latency, natural
      const wait = 900 + Math.floor(Math.random() * 1100);
      await new Promise((r) => setTimeout(r, wait));
      const kind = optionId
        ? 'option'
        : (userQuery === null || userQuery === undefined ? 'summary' : 'generic');
      if (kind === 'summary') return SIM.summary(poi, mode);
      if (kind === 'option')  return SIM.option(poi, mode, optionId);
      return concise ? SIM.genericConcise(poi, mode, userQuery) : SIM.generic(poi, mode, userQuery);
    };

      // Usa los prompts específicos ya escritos en data.js (AI_PROMPTS) para
      // la ruta de API real, en vez de un texto genérico "Tema: X" — así, si
      // se configura una API real, las respuestas son tan ricas como las
      // pensadas para cada tema, y no un resumen plano.
      const queryFor = (poi, mode, userQuery, optionId, cityName) => {
        if (optionId && optionId.startsWith('deepen:')) {
          const topicId = optionId.slice(7);
          const topicMeta = AI_TOPIC_NAMES[topicId];
          const topicLabel = topicMeta ? (topicMeta[mode] || topicMeta.adult) : (mode === 'kids' ? 'esto' : 'este tema');
          const fn = AI_PROMPTS.deepen && AI_PROMPTS.deepen[mode];
          if (typeof fn === 'function') return fn(poi, topicLabel);
          return mode === 'kids'
            ? `Sigue contándome más sobre ${topicLabel}, un dato nuevo que no hayas contado antes.`
            : `Continúa profundizando sobre ${topicLabel}, con un dato nuevo, más concreto y que no hayas mencionado antes. No te repitas.`;
        }
        if (optionId) {
          const opt = (AI_PROMPTS.options || []).find((o) => o.id === optionId);
          const fn = opt && opt.prompt && opt.prompt[mode];
          if (typeof fn === 'function') return fn(poi, cityName);
          return `Tema seleccionado: ${optionId}. Responde al contenido pedido.`;
        }
        if (userQuery) return userQuery;
        const summaryFn = AI_PROMPTS.summary && AI_PROMPTS.summary[mode];
        return typeof summaryFn === 'function' ? summaryFn(poi, cityName) : 'Haz un resumen inicial del lugar.';
      };

    const generate = async ({ poi, mode, userQuery, optionId, cityName, concise }) => {
      const sys = systemPromptFor(mode, cityName, concise);
      const usr = buildUserText(poi, mode, queryFor(poi, mode, userQuery, optionId, cityName), cityName);
      if (CFG && CFG.apiKey && CFG.provider) {
        try {
          if (CFG.provider === 'anthropic') return await fetchAnthropic(sys, usr);
          // concise pide un max_tokens menor para acelerar la respuesta,
          // pero no demasiado bajo: probado contra la API real, 500 cortaba
          // a mitad de frase (finish_reason: "length") en respuestas que
          // mencionaban más de un dato — el modelo gasta parte del margen
          // en pensamiento interno antes de escribir nada visible (ver
          // fetchOpenAIVision), así que hace falta más colchón del que
          // parece. 800 completó bien esas mismas respuestas en las pruebas.
          return await fetchOpenAI(sys, usr, concise ? 800 : undefined);
        } catch (e) {
          console.warn('[LLM] Fallo API, usando simulador local:', e);
          // 429 = cuota agotada, 503 = modelo saturado: son la misma causa de
          // cara al usuario ("hay demasiada gente usando la IA ahora mismo"),
          // así que merecen un aviso distinto del genérico de "error de conexión".
          const isQuotaError = e && (e.status === 429 || e.status === 503);
          // Se incluye el motivo real y corto del fallo, no solo en consola
          // (en el móvil nadie la mira): así un fallo se puede diagnosticar
          // con una captura de pantalla en vez de adivinarlo a ciegas (mismo
          // motivo que en scanForPoi para el escaneo de fotos).
          const code = e && e.status ? `HTTP ${e.status}`
            : (e && (e.name === 'AbortError' || e.message === 'chat-timeout')) ? 'tiempo agotado'
            : (e && e.message) ? e.message
            : 'error desconocido';
          const suffix = isQuotaError
            ? (mode === 'kids'
                ? '\n\n⚠️ (¡La IA está muy solicitada ahora mismo! Se ha usado el modo sin conexión mientras se libera hueco.)'
                : '\n\n⚠️ (La IA está saturada de peticiones en este momento —no es un fallo de la app—, se ha usado el simulador local mientras tanto.)')
            : (mode === 'kids'
                ? `\n\n⚠️ (Modo offline: la IA real respondió con error — ${code})`
                : `\n\n⚠️ (Modo offline. Error al conectar con la API (${code}), se ha usado el simulador local.)`);
          return await simulated(poi, mode, userQuery, optionId, concise) + suffix;
        }
      }
      return simulated(poi, mode, userQuery, optionId, concise);
    };

    return {
      generate,
      identifyPoi,
      summaryGreet: (poi, m) => SIM.greet(poi, m),
      isReal: () => !!(CFG && CFG.apiKey)
    };
  })();

  /* =========================================================
   * GLOBAL STATE
   * =======================================================*/
  const STATE = {
    mode: 'adult',
    cityId: null,
    category: CATEGORIES.ALL,
    activeRoute: null, // id de la ruta imprescindible activa (para ciudades con varios circuitos)
    activePoiId: null,
    sheet: 'closed',
    audio: {
      playing: false, currentTime: 0, duration: 0, timer: null,
      // 'cloud' mientras suena/está en pausa un audio de CLOUD_TTS; null
      // en cualquier otro caso (incluido "sonando con Web Speech").
      engine: null,
      // Texto puntual a narrar a continuación (p.ej. la revelación de una
      // pregunta del quiz), en vez del resumen inicial. Se limpia cada vez
      // que se abre una ficha para que el audio inicial vuelva a sonar.
      overrideText: null,
      speech: { supported: false, utterance: null, voices: [], pickedVoice: null }
    },
    ai: { perPoiHistory: {}, pending: false, currentTopic: {}, explored: {} },
    // Gamificación (modo niño): puntos por preguntas acertadas. "answered" guarda
    // qué combinaciones "poiId:topicId" ya sumaron puntos, para no poder
    // "granjear" puntos repitiendo la misma pregunta una y otra vez.
    game: { points: 0, answered: {} },
    userLocation: null // { lat, lng } una vez que el usuario comparte su ubicación
  };

  /* =========================================================
   * PERSISTENCIA (localStorage)
   * Guarda el progreso (conversación por POI, temas explorados, modo)
   * para que sobreviva a un refresco de página o a que el móvil mate
   * la pestaña en segundo plano a media visita.
   * =======================================================*/
  const STORAGE_KEY = 'omot_state_v1';
  const saveState = () => {
    try {
      const explored = {};
      Object.entries(STATE.ai.explored).forEach(([poiId, set]) => {
        explored[poiId] = Array.from(set);
      });
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        mode: STATE.mode,
        cityId: STATE.cityId,
        ai: {
          perPoiHistory: STATE.ai.perPoiHistory,
          currentTopic: STATE.ai.currentTopic,
          explored
        },
        game: STATE.game
      }));
    } catch (_) { /* localStorage no disponible (navegación privada, cuota...): seguimos sin persistir */ }
  };
  const loadState = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw);
      if (saved.mode === 'kids' || saved.mode === 'adult') STATE.mode = saved.mode;
      if (saved.cityId && CITIES[saved.cityId]) STATE.cityId = saved.cityId;
      if (saved.ai) {
        STATE.ai.perPoiHistory = saved.ai.perPoiHistory || {};
        STATE.ai.currentTopic = saved.ai.currentTopic || {};
        const explored = {};
        Object.entries(saved.ai.explored || {}).forEach(([poiId, arr]) => {
          explored[poiId] = new Set(arr);
        });
        STATE.ai.explored = explored;
      }
      if (saved.game) {
        STATE.game.points = Number(saved.game.points) || 0;
        STATE.game.answered = saved.game.answered || {};
      }
    } catch (_) { /* datos corruptos o de una versión anterior: empezamos de cero */ }
  };

  const ICONS = {
    play: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="7 4 20 12 7 20 7 4"></polygon></svg>`,
    pause: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const els = {};
  let map, markersLayer, clusterLayer, markerLookup = {}, userMarker = null;
  let POIS = []; // POIs de la ciudad activa (CURRENT_CITY.pois) — se rellena al elegir ciudad
  let CURRENT_CITY = null;
  let fountainsLayer = null, fountainsVisible = false;

  /* =========================================================
   * HELPERS
   * =======================================================*/
  const pickDual = (obj) => {
    if (!obj) return '';
    const k = STATE.mode === 'kids' ? 'kids' : 'adult';
    return obj[k] ?? obj.adult ?? obj.kids ?? '';
  };
  // Las imágenes vienen de Wikimedia como miniaturas de 330px
  // (".../thumb/…/330px-Archivo.jpg"). Wikimedia genera bajo demanda
  // cualquier ancho pedido en esa misma URL, pero si el ancho pedido supera
  // el de la imagen original, responde 400 en vez de recortarlo — por eso el
  // lightbox necesita una cadena de fallback (ver openLightbox).
  const getLargeImageUrl = (src) => {
    if (!src) return src;
    return src.replace(/\/(\d+)px-/, '/1200px-');
  };
  // Reconstruye la URL del archivo original sin recortar, quitando el
  // segmento "/thumb/" y el sufijo "NNNpx-" del nombre de archivo repetido.
  const getOriginalImageUrl = (src) => {
    if (!src || !src.includes('/thumb/')) return src;
    return src.replace('/thumb/', '/').replace(/\/\d+px-[^/]+$/, '');
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
  // Ayuda temporal de diagnóstico (ver wireOnboarding): muestra un texto
  // largo en un cuadro propio de la página, con un botón de copiar, en vez
  // de depender de window.prompt (bloqueado en algunos navegadores móviles).
  const showDebugDump = (text) => {
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,0.75);display:flex;flex-direction:column;gap:10px;padding:16px;';
    const box = document.createElement('textarea');
    box.readOnly = true;
    box.value = text;
    box.style.cssText = 'flex:1;width:100%;box-sizing:border-box;padding:10px;border-radius:10px;border:0;font:12px/1.4 monospace;resize:none;';
    const row = document.createElement('div');
    row.style.cssText = 'display:flex;gap:10px;';
    const copyBtn = document.createElement('button');
    copyBtn.type = 'button';
    copyBtn.textContent = 'Copiar';
    copyBtn.style.cssText = 'flex:1;padding:12px;border-radius:10px;border:0;background:#6C5CE7;color:#fff;font-weight:700;font-size:15px;';
    copyBtn.addEventListener('click', async () => {
      box.focus();
      box.select();
      try {
        await navigator.clipboard.writeText(text);
        copyBtn.textContent = '¡Copiado! ✅';
      } catch (_) {
        try {
          document.execCommand('copy');
          copyBtn.textContent = '¡Copiado! ✅';
        } catch (__) {
          copyBtn.textContent = 'Selecciona el texto a mano';
        }
      }
    });
    const closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.textContent = 'Cerrar';
    closeBtn.style.cssText = 'flex:1;padding:12px;border-radius:10px;border:0;background:#333;color:#fff;font-weight:700;font-size:15px;';
    closeBtn.addEventListener('click', () => overlay.remove());
    row.appendChild(copyBtn);
    row.appendChild(closeBtn);
    overlay.appendChild(box);
    overlay.appendChild(row);
    document.body.appendChild(overlay);
    box.focus();
    box.select();
  };

  // Panel oculto del registro de escaneos sin match (ver ScanLog): se abre
  // con 6 toques sobre la versión (ver wireOnboarding). Pensado solo para
  // revisión propia, no es una función de cara al usuario final.
  const renderScanLogList = () => {
    const list = $('#scanLogList');
    if (!list) return;
    const entries = ScanLog.read();
    list.innerHTML = '';
    if (!entries.length) {
      const empty = document.createElement('li');
      empty.className = 'scan-log-empty';
      empty.textContent = 'Todavía no hay ninguna foto registrada.';
      list.appendChild(empty);
      return;
    }
    entries.forEach((e) => {
      const li = document.createElement('li');
      li.className = 'scan-log-item';
      const img = document.createElement('img');
      img.src = e.thumb || '';
      img.alt = '';
      const textWrap = document.createElement('div');
      textWrap.className = 'scan-log-item-text';
      const nameEl = document.createElement('div');
      nameEl.className = 'scan-log-item-name';
      nameEl.textContent = e.name || (e.type === 'none' ? 'No identificado por la IA' : 'Sin nombre');
      const metaEl = document.createElement('div');
      metaEl.className = 'scan-log-item-meta';
      const d = new Date(e.ts);
      metaEl.textContent = `${e.city || '?'} · ${d.toLocaleDateString()} ${d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
      textWrap.appendChild(nameEl);
      textWrap.appendChild(metaEl);
      li.appendChild(img);
      li.appendChild(textWrap);
      list.appendChild(li);
    });
  };
  const openScanLogModal = () => {
    const modal = $('#scanLogModal');
    if (!modal) return;
    renderScanLogList();
    modal.classList.add('-open');
    modal.setAttribute('aria-hidden', 'false');
  };
  const closeScanLogModal = () => {
    const modal = $('#scanLogModal');
    if (!modal) return;
    modal.classList.remove('-open');
    modal.setAttribute('aria-hidden', 'true');
  };
  const exportScanLog = () => {
    const entries = ScanLog.read();
    const blob = new Blob([JSON.stringify(entries, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `omot-scan-log-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  };
  const clearScanLog = () => {
    ScanLog.clear();
    renderScanLogList();
  };
  const wireScanLogModal = () => {
    const modal = $('#scanLogModal');
    if (!modal) return;
    $('#scanLogClose')?.addEventListener('click', closeScanLogModal);
    $('#scanLogExport')?.addEventListener('click', exportScanLog);
    $('#scanLogClear')?.addEventListener('click', clearScanLog);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeScanLogModal(); });
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('-open')) closeScanLogModal();
    });
  };

  const getCategoryPinColor = (cat) => {
    if (cat === CATEGORIES.HISTORY) return '#3B82F6'; // monumentos y museos: azul
    if (cat === CATEGORIES.GASTRONOMY) return '#EAB308'; // restauración: amarillo
    if (cat === CATEGORIES.HIDDEN) return '#22C55E'; // puntos de interés: verde
    return '#3B82F6';
  };
  // Iconos SVG propios por categoría (en vez de emoji, que se renderizan de
  // forma distinta y muy plana según el sistema operativo). Se usan tanto
  // en los pines del mapa como en las píldoras de filtro, para que
  // coincidan visualmente.
  const CATEGORY_ICON_PATHS = {
    // Monumentos y museos: edificio de columnas
    [CATEGORIES.HISTORY]: `<path d="M3 10 12 4l9 6"/><path d="M4 10v9M8 10v9M12 10v9M16 10v9M20 10v9"/><path d="M2 21h20"/>`,
    // Restauración: tenedor (centrado en x=12)
    [CATEGORIES.GASTRONOMY]: `<path d="M9 3v5M12 3v5M15 3v5"/><path d="M9 8c0 2 1.3 3 3 3s3-1 3-3"/><path d="M12 11v10"/>`,
    // Puntos de interés: prismáticos
    [CATEGORIES.HIDDEN]: `<rect x="2.5" y="9" width="7" height="9" rx="2.5"/><rect x="14.5" y="9" width="7" height="9" rx="2.5"/><path d="M9.5 12.5h5"/><path d="M5 9V7.5A1.5 1.5 0 0 1 6.5 6h1"/><path d="M19 9V7.5A1.5 1.5 0 0 0 17.5 6h-1"/>`
  };
  const categoryIconSvg = (cat, color = 'currentColor') =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${CATEGORY_ICON_PATHS[cat] || CATEGORY_ICON_PATHS[CATEGORIES.HISTORY]}</svg>`;
  const PIN_ICON_SVG = Object.fromEntries(
    Object.keys(CATEGORY_ICON_PATHS).map((cat) => [cat, categoryIconSvg(cat, 'white')])
  );
  const getCategoryPinIconSvg = (cat) => PIN_ICON_SVG[cat] || PIN_ICON_SVG[CATEGORIES.HISTORY];

  // Iconos SVG para los chips de sugerencia del chat IA (mismo criterio que
  // arriba: nada de emoji, que cada sistema operativo los pinta distinto).
  // "deepen" usa un destello de dos puntas, el símbolo habitual de "generado
  // por IA" en el resto de apps.
  const SUGGEST_ICON_SVG = {
    ticket: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1.5a1.5 1.5 0 0 0 0 3V15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1.5a1.5 1.5 0 0 0 0-3V9Z"/><path d="M9 7.5v9" stroke-dasharray="1.5 2.2"/></svg>`,
    deepen: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M11.5 2c.5 3 1.2 5 2.2 6s3 1.7 6 2.2c-3 .5-5 1.2-6 2.2s-1.7 3-2.2 6c-.5-3-1.2-5-2.2-6s-3-1.7-6-2.2c3-.5 5-1.2 6-2.2s1.7-3 2.2-6Z"/><path d="M19 15c.3 1.3.6 2.1 1.1 2.6s1.3.8 2.6 1.1c-1.3.3-2.1.6-2.6 1.1s-.8 1.3-1.1 2.6c-.3-1.3-.6-2.1-1.1-2.6s-1.3-.8-2.6-1.1c1.3-.3 2.1-.6 2.6-1.1s.8-1.3 1.1-2.6Z"/></svg>`,
    'secret-history': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="2.2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/><circle cx="12" cy="15.4" r="1.3" fill="currentColor" stroke="none"/></svg>`,
    architecture: CATEGORY_ICON_PATHS[CATEGORIES.HISTORY],
    legends: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H12v18H6.5A2.5 2.5 0 0 1 4 18.5v-13Z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H12v18h5.5a2.5 2.5 0 0 0 2.5-2.5v-13Z"/></svg>`,
    reset: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 15.3-6.4L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15.3 6.4L3 16"/><path d="M3 21v-5h5"/></svg>`
  };
  const suggestIconSvg = (kind) => {
    const inner = SUGGEST_ICON_SVG[kind];
    if (!inner) return '';
    // "architecture"/"legends" y el resto de categorías reutilizan el mismo
    // formato <path>...</path> que CATEGORY_ICON_PATHS: hace falta envolverlos
    // en <svg>; deepen/ticket/secret-history ya traen su propio <svg>.
    return inner.startsWith('<svg')
      ? inner
      : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
  };

  // Icono de la píldora "Ruta imprescindible" (bandera de meta)
  const ROUTE_ICON_SVG = (color = 'currentColor') =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3v18"/><path d="M5 4h13l-3 4 3 4H5"/></svg>`;
  const getCssVar = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

  /* =========================================================
   * CUSTOM LEAFLET PIN (círculo de color + icono SVG, estilo app nativa)
   * =======================================================*/
  const makePinIcon = (poi, dimmed = false) => {
    const color = dimmed ? '#94A3B8' : getCategoryPinColor(poi.category);
    const icon = getCategoryPinIconSvg(poi.category);
    const cls = 'custom-pin' + (dimmed ? ' -dimmed' : '');
    return L.divIcon({
      className: 'custom-pin-wrap',
      html: `<div class="${cls}" data-id="${poi.id}" style="--pin-color:${color}">${icon}</div>`,
      iconSize: [38, 38], iconAnchor: [19, 19], popupAnchor: [0, -19]
    });
  };

  // Pin de las fuentes de agua potable: mucho más pequeño que un pin de POI
  // (16px frente a 38px) y de otro color, para que se lea a simple vista
  // como una capa aparte y no compita visualmente con los POIs turísticos.
  const makeFountainIcon = (status) => L.divIcon({
    className: 'fountain-pin-wrap',
    html: `<div class="fountain-pin${status === 'fuera-de-servicio' ? ' -off' : ''}"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C12 2 5 10.5 5 15a7 7 0 0 0 14 0c0-4.5-7-13-7-13Z"/></svg></div>`,
    iconSize: [12, 12], iconAnchor: [6, 6], popupAnchor: [0, -6]
  });

  // Burbuja de agrupación (cluster): mismo lenguaje visual que .custom-pin,
  // pero con el número de POIs agrupados dentro. Crece un poco con la
  // cantidad para que se note de un vistazo si hay 3 o 30 ahí dentro.
  const makeClusterIcon = (cluster) => {
    const count = cluster.getChildCount();
    const size = count < 10 ? 40 : count < 30 ? 46 : 52;
    return L.divIcon({
      className: 'custom-pin-wrap',
      html: `<div class="custom-pin -cluster" style="--pin-size:${size}px">${count}</div>`,
      iconSize: [size, size], iconAnchor: [size / 2, size / 2]
    });
  };

  /* =========================================================
   * MAP
   * =======================================================*/
  const updatePinScale = () => {
    if (!map || !CURRENT_CITY) return;
    const zoom = map.getZoom();
    const restZoom = CURRENT_CITY.zoom;
    const minZoom = CURRENT_CITY.minZoom || 11;
    const t = restZoom > minZoom ? (zoom - minZoom) / (restZoom - minZoom) : 1;
    const scale = 0.45 + 0.55 * Math.max(0, Math.min(1, t));
    document.documentElement.style.setProperty('--pin-scale', scale.toFixed(3));
  };

  const initMap = () => {
    // Cleanup: si el script se evalúa dos veces, evita "Map container is already initialized"
    const mapEl = document.getElementById('map');
    if (mapEl) {
      while (mapEl.firstChild) mapEl.removeChild(mapEl.firstChild);
      mapEl.removeAttribute('style');
      if (mapEl._leaflet_id) delete mapEl._leaflet_id;
    }
    const city = CURRENT_CITY || CITIES.toledo;
    const cityMinZoom = city.minZoom || 11;
    map = L.map('map', { zoomControl: false, attributionControl: false, scrollWheelZoom: true, maxBoundsViscosity: 0.7 })
      .setView(city.center, city.zoom);
    map.setMaxBounds(L.latLngBounds(city.bounds[0], city.bounds[1]).pad(0.25));
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      maxZoom: 19, minZoom: cityMinZoom, subdomains: 'abcd'
    }).addTo(map);
    markersLayer = L.layerGroup().addTo(map);
    // Agrupa pines en modo "explorar libremente" (fuera de una ruta): con
    // ciudades como Madrid (59 POIs) el mapa alejado es ilegible sin esto.
    // En modo ruta no se agrupa nunca: los pines llevan un número de orden
    // y una línea que los conecta, agruparlos rompería esa lectura.
    clusterLayer = L.markerClusterGroup({
      showCoverageOnHover: false,
      spiderfyOnMaxZoom: true,
      maxClusterRadius: 55,
      iconCreateFunction: makeClusterIcon
    });
    // Capa independiente de fuentes de agua potable: no se agrupa con
    // markersLayer/clusterLayer ni se excluyen entre sí — convive con
    // cualquiera de los dos modos y se activa/desactiva aparte con su
    // propio botón (ver toggleFountains).
    fountainsLayer = L.layerGroup();
    if (fountainsVisible) {
      loadWaterFountains(STATE.cityId).then(() => {
        renderFountains();
        if (map && fountainsLayer) fountainsLayer.addTo(map);
      });
    }
    map.on('zoom', updatePinScale);
    updatePinScale();
    renderMarkers();
  };
  const isRouteMode = () => STATE.category === 'essential';
  // Rutas imprescindibles de la ciudad activa; las ciudades sin `routes` propio
  // se tratan como una única ruta "main" con el color primario de la app.
  const getCityRoutes = () => (CURRENT_CITY && CURRENT_CITY.routes) || [
    { id: 'main', name: { adult: 'Recomendaciones', kids: '¡Lo Top!' }, color: null }
  ];
  const isPoiInActiveRoute = (poi) => !!(poi.essential && poi.essential.route === STATE.activeRoute);

  const makeRouteIcon = (poi, order, color) => {
    return L.divIcon({
      className: 'custom-pin-wrap',
      html: `<div class="custom-pin -route" data-id="${poi.id}" style="--pin-color:${color}">${order}</div>`,
      iconSize: [38, 38], iconAnchor: [19, 19], popupAnchor: [0, -19]
    });
  };

  const renderMarkers = () => {
    markersLayer.clearLayers();
    clusterLayer.clearLayers();
    markerLookup = {};
    const routeMode = isRouteMode();
    // En modo ruta se usa markersLayer (sin agrupar, con línea y orden);
    // en modo exploración libre se usa clusterLayer (agrupa al alejar el
    // zoom). Solo una de las dos capas está añadida al mapa a la vez.
    if (routeMode) {
      if (map.hasLayer(clusterLayer)) map.removeLayer(clusterLayer);
      if (!map.hasLayer(markersLayer)) markersLayer.addTo(map);
    } else {
      if (map.hasLayer(markersLayer)) map.removeLayer(markersLayer);
      if (!map.hasLayer(clusterLayer)) clusterLayer.addTo(map);
    }
    const targetLayer = routeMode ? markersLayer : clusterLayer;
    const routeMeta = routeMode && getCityRoutes().find((r) => r.id === STATE.activeRoute);
    const routeColor = (routeMeta && routeMeta.color) || getCssVar('--color-primary') || '#F59E0B';
    // Las fichas efímeras de "¿qué estoy viendo?" (ver openAdHocScanResult)
    // viven en POIS para que el resto del flujo (chat, audioguía) funcione
    // igual que con un POI real, pero nunca deben aparecer como pin: no son
    // datos de la ciudad, son un resultado de una foto concreta.
    const scannablePois = POIS.filter((p) => !p.isAdHocScan);
    const list = routeMode && routeMeta
      ? scannablePois.filter(isPoiInActiveRoute).sort((a, b) => a.essential.order - b.essential.order)
      : (routeMode ? [] : scannablePois);
    if (routeMode && list.length > 1) {
      L.polyline(list.map((p) => p.coords), {
        color: routeColor,
        weight: 3, opacity: 0.8, dashArray: '2 10', lineCap: 'round'
      }).addTo(markersLayer);
      for (let i = 1; i < list.length; i++) {
        const a = list[i - 1].coords, b = list[i].coords;
        const mid = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
        L.marker(mid, {
          icon: L.divIcon({
            className: 'route-distance-wrap',
            html: `<span class="route-distance" style="--route-color:${routeColor}">${formatDistance(haversineMeters(a, b))}</span>`,
            iconSize: [0, 0]
          }),
          interactive: false,
          zIndexOffset: -9000
        }).addTo(markersLayer);
      }
    }
    list.forEach((poi, i) => {
      const dimmed = !routeMode && STATE.category !== CATEGORIES.ALL && poi.category !== STATE.category;
      const icon = routeMode ? makeRouteIcon(poi, i + 1, routeColor) : makePinIcon(poi, dimmed);
      const marker = L.marker(poi.coords, { icon });
      marker.options.poiId = poi.id;
      marker.options.category = poi.category;
      marker.on('click', () => selectPoi(poi.id, true));
      marker.addTo(targetLayer);
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
   * GEOLOCALIZACIÓN ("dónde estoy" + distancia a cada lugar)
   * =======================================================*/
  const haversineMeters = (a, b) => {
    const R = 6371000;
    const toRad = (d) => (d * Math.PI) / 180;
    const dLat = toRad(b[0] - a[0]);
    const dLng = toRad(b[1] - a[1]);
    const lat1 = toRad(a[0]), lat2 = toRad(b[0]);
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(h));
  };
  const formatDistance = (meters) => {
    if (meters < 1000) return `${Math.round(meters / 10) * 10} m`;
    return `${(meters / 1000).toFixed(1)} km`;
  };

  const updateUserMarker = () => {
    if (!STATE.userLocation || !map) return;
    const pos = [STATE.userLocation.lat, STATE.userLocation.lng];
    if (userMarker) {
      userMarker.setLatLng(pos);
    } else {
      userMarker = L.marker(pos, {
        icon: L.divIcon({ className: 'user-location-wrap', html: '<div class="user-location-dot"></div>', iconSize: [16, 16], iconAnchor: [8, 8] }),
        interactive: false,
        zIndexOffset: -100
      }).addTo(map);
    }
  };

  // watchId del seguimiento continuo de posición: una vez que el usuario
  // localiza con éxito una vez, se deja un watchPosition corriendo de fondo
  // para que el punto azul se mueva solo mientras camina, en vez de quedarse
  // fijo hasta que vuelva a tocar el botón (comportamiento anterior).
  let locationWatchId = null;

  const startLocationWatch = () => {
    if (locationWatchId !== null || !navigator.geolocation) return;
    locationWatchId = navigator.geolocation.watchPosition(
      (pos) => {
        STATE.userLocation = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        $('#locateBtn')?.classList.add('-active');
        updateUserMarker();
        if (STATE.activePoiId) updateSheetDistance(STATE.activePoiId);
      },
      // Errores intermitentes del watch (señal débil momentánea, etc.) se
      // ignoran en silencio: el usuario ya vio el aviso de error, si lo
      // hubo, en el intento inicial de requestLocation. Avisar en cada
      // fallo puntual del watch sería machacar con toasts sin motivo.
      () => {},
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 15000 }
    );
  };

  const requestLocation = (centerOnResult = true) => {
    const btn = $('#locateBtn');
    if (!navigator.geolocation) {
      showToast(STATE.mode === 'kids' ? 'Tu navegador no sabe dónde estás 😅' : 'La geolocalización no está disponible en este navegador.');
      return;
    }
    // Si el seguimiento continuo ya está activo y tenemos una posición
    // reciente, no hace falta pedir una nueva: solo recentra el mapa.
    if (locationWatchId !== null && STATE.userLocation) {
      if (centerOnResult && map) map.flyTo([STATE.userLocation.lat, STATE.userLocation.lng], 16, { duration: 0.7 });
      return;
    }
    btn?.classList.add('-locating');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        STATE.userLocation = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        btn?.classList.remove('-locating');
        btn?.classList.add('-active');
        updateUserMarker();
        if (centerOnResult && map) map.flyTo([STATE.userLocation.lat, STATE.userLocation.lng], 16, { duration: 0.7 });
        if (STATE.activePoiId) updateSheetDistance(STATE.activePoiId);
        startLocationWatch();
      },
      (err) => {
        btn?.classList.remove('-locating');
        const denied = err && err.code === 1;
        showToast(
          STATE.mode === 'kids'
            ? (denied ? 'Necesito permiso para saber dónde estás 🗺️' : 'No he podido encontrarte ahora mismo.')
            : (denied ? 'Has denegado el permiso de ubicación. Actívalo en los ajustes del navegador para usar esta función.' : 'No se pudo obtener tu ubicación. Inténtalo de nuevo.'),
          3200
        );
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 30000 }
    );
  };

  const updateSheetDistance = (poiId) => {
    const el = $('.sheet-distance', els.sheet);
    if (!el) return;
    const poi = POIS.find((p) => p.id === poiId);
    if (!poi || !STATE.userLocation) { el.hidden = true; return; }
    const meters = haversineMeters([STATE.userLocation.lat, STATE.userLocation.lng], poi.coords);
    el.hidden = false;
    el.textContent = (STATE.mode === 'kids' ? '📍 A ' : '📍 A ') + formatDistance(meters) + (STATE.mode === 'kids' ? ' de ti' : '');
  };

  /* =========================================================
   * "¿QUÉ ESTOY VIENDO?": identifica un POI a partir de una foto + GPS.
   * La foto NUNCA se manda sola: siempre va acompañada de los POIs reales
   * más cercanos al usuario, y la IA solo puede elegir entre esos (o decir
   * que no reconoce ninguno). Así no puede "inventarse" un monumento que
   * no está en nuestros datos.
   * =======================================================*/
  const getCurrentLocationOnce = () => {
    if (!navigator.geolocation) return Promise.reject(new Error('no-geolocation'));
    const geoPromise = new Promise((resolve, reject) => {
      // Sin alta precisión: solo hace falta acertar el barrio para acotar
      // candidatos, y así se responde en 1-2s en vez de esperar a que el
      // GPS "caliente" para una posición exacta (que aquí no aporta nada).
      navigator.geolocation.getCurrentPosition(
        (pos) => resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        (err) => reject(err),
        { enableHighAccuracy: false, timeout: 6000, maximumAge: 60000 }
      );
    });
    // El "timeout" de arriba es solo una petición al navegador, no una
    // garantía: en algunas combinaciones de SO/navegador (visto en iOS
    // Chrome) ni éxito ni error llegan a dispararse nunca si el servicio
    // de localización del sistema no responde, dejando la promesa
    // pendiente para siempre pase lo que pase en la opción "timeout". Este
    // segundo timeout, propio y forzado, garantiza que esta función SIEMPRE
    // se resuelve o rechaza antes de 7s, ocurra lo que ocurra por debajo.
    const hardTimeout = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('geolocation-hard-timeout')), 7000);
    });
    return Promise.race([geoPromise, hardTimeout]);
  };

  // Dispara la petición de ubicación en el momento del toque (ver
  // scanUploadPhoto/scanTakePhoto), sin esperar a su resultado: solo deja
  // el permiso resuelto y STATE.userLocation ya actualizado de fondo para
  // cuando scanForPoi lo necesite después.
  const prefetchLocation = () => {
    getCurrentLocationOnce()
      .then((coords) => { STATE.userLocation = coords; updateUserMarker(); })
      .catch(() => {});
  };

  // Reduce la foto (los móviles hacen fotos de varios MB) antes de mandarla:
  // más rápido de subir y de menos coste en tokens, sin perder detalle
  // relevante para reconocer un edificio.
  const resizeImageFile = (file, maxDim = 768, quality = 0.72) => new Promise((resolve, reject) => {
    const img = new Image();
    const objectUrl = URL.createObjectURL(file);
    // Por si el formato (p.ej. HEIC en algún navegador) no dispara ni
    // onload ni onerror: sin esto la promesa se queda pendiente para
    // siempre y el "Analizando tu foto…" no llega a ningún sitio.
    const timeoutId = setTimeout(() => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error('image-load-timeout'));
    }, 8000);
    img.onload = () => {
      clearTimeout(timeoutId);
      let { width, height } = img;
      if (width > height && width > maxDim) { height = Math.round((height * maxDim) / width); width = maxDim; }
      else if (height >= width && height > maxDim) { width = Math.round((width * maxDim) / height); height = maxDim; }
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      canvas.getContext('2d').drawImage(img, 0, 0, width, height);
      URL.revokeObjectURL(objectUrl);
      resolve(canvas.toDataURL('image/jpeg', quality));
    };
    img.onerror = () => { clearTimeout(timeoutId); URL.revokeObjectURL(objectUrl); reject(new Error('image-load-failed')); };
    img.src = objectUrl;
  });

  // Reduce una imagen ya en memoria (data URL) a una miniatura pequeña, sin
  // volver a tocar red ni el archivo original: se usa solo para el registro
  // de escaneos sin match (ver ScanLog más abajo), donde guardar la foto ya
  // redimensionada a 768px en localStorage para cientos de entradas se
  // llenaría el almacenamiento en poco tiempo.
  const shrinkDataUrl = (dataUrl, maxDim, quality) => new Promise((resolve, reject) => {
    const img = new Image();
    const timeoutId = setTimeout(() => reject(new Error('thumb-timeout')), 4000);
    img.onload = () => {
      clearTimeout(timeoutId);
      let { width, height } = img;
      if (width > height && width > maxDim) { height = Math.round((height * maxDim) / width); width = maxDim; }
      else if (height >= width && height > maxDim) { width = Math.round((width * maxDim) / height); height = maxDim; }
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      canvas.getContext('2d').drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL('image/jpeg', quality));
    };
    img.onerror = () => { clearTimeout(timeoutId); reject(new Error('thumb-failed')); };
    img.src = dataUrl;
  });

  // Registro local (localStorage) de fotos escaneadas que no encontraron
  // match curado (ni "openended" ni "none"): pensado para que, con el
  // tiempo, se pueda revisar qué está fotografiando la gente que la app
  // todavía no reconoce, y decidir si merece la pena curarlo como POI
  // nuevo. Nunca se envía a ningún sitio: vive solo en este dispositivo,
  // y se exporta a mano como JSON desde el panel oculto (ver
  // wireScanLogTrigger). Acotado a SCAN_LOG_MAX entradas (con miniaturas
  // pequeñas) para no arriesgarse a llenar la cuota de localStorage.
  const SCAN_LOG_KEY = 'omot_scan_log';
  const SCAN_LOG_MAX = 150;
  const ScanLog = {
    read() {
      try { return JSON.parse(localStorage.getItem(SCAN_LOG_KEY)) || []; } catch (_) { return []; }
    },
    write(list) {
      try { localStorage.setItem(SCAN_LOG_KEY, JSON.stringify(list)); } catch (_) {}
    },
    add(entry) {
      const list = this.read();
      list.unshift(entry);
      if (list.length > SCAN_LOG_MAX) list.length = SCAN_LOG_MAX;
      this.write(list);
    },
    clear() { this.write([]); }
  };

  // Se llama sin esperar su resultado (no debe retrasar mostrar el
  // resultado del escaneo al usuario): cualquier fallo generando la
  // miniatura o escribiendo en localStorage se ignora en silencio, es un
  // extra de depuración, nunca debe romper el flujo normal de escaneo.
  const logUnrecognizedScan = async ({ type, name, coords, imageDataUrl }) => {
    try {
      const thumb = await shrinkDataUrl(imageDataUrl, 96, 0.5);
      ScanLog.add({
        ts: Date.now(),
        city: CURRENT_CITY ? CURRENT_CITY.id : null,
        type,
        name: name || null,
        coords: coords ? { lat: coords.lat, lng: coords.lng } : null,
        thumb
      });
    } catch (_) {}
  };

  // Candidatos: los POIs más cercanos al usuario en la ciudad actual, sin
  // depender del filtro de categoría activo (si vas caminando y sacas la
  // foto, tiene que poder reconocer cualquier punto, esté o no filtrado).
  const nearbyPoiCandidates = (coords, limit = 5) => {
    if (!coords || !POIS || !POIS.length) return [];
    return POIS
      .map((p) => ({ poi: p, dist: haversineMeters([coords.lat, coords.lng], p.coords) }))
      .sort((a, b) => a.dist - b.dist)
      .slice(0, limit)
      .map(({ poi }) => ({ id: poi.id, name: pickDual(poi.name), subtitle: pickDual(poi.subtitle) }));
  };

  const setScanning = (on) => {
    const btn = $('#scanBtn');
    btn?.classList.toggle('-scanning', on);
    btn?.toggleAttribute('disabled', on);
  };

  // Cámara en vivo (getUserMedia) para "Tomar foto": en escritorio (y algún
  // navegador que no honre bien el atributo "capture" del input file) el
  // input por sí solo no abre ninguna cámara real. "Subir foto" usa en
  // cambio el input de archivo normal (ver wireEvents), como opción
  // explícita e independiente, no como fallback automático encadenado: así
  // no depende de la "activación" del toque original, que puede haberse
  // perdido tras la espera async del permiso de cámara.
  let cameraStream = null;

  const closeCameraCapture = () => {
    if (cameraStream) {
      cameraStream.getTracks().forEach((t) => t.stop());
      cameraStream = null;
    }
    const modal = $('#cameraModal');
    modal?.classList.remove('-open');
    modal?.setAttribute('aria-hidden', 'true');
  };

  const openCameraCapture = async () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return false;
    let stream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false });
    } catch (_) {
      return false;
    }
    // A partir de aquí ya tenemos la cámara: cualquier fallo pintando el
    // modal (elemento no encontrado, srcObject rechazado, etc.) no debe
    // dejar colgada la promesa sin caer al input de archivo de respaldo.
    try {
      const modal = $('#cameraModal');
      const video = $('#cameraVideo');
      if (!modal || !video) throw new Error('camera-modal-missing');
      cameraStream = stream;
      video.srcObject = stream;
      modal.classList.add('-open');
      modal.setAttribute('aria-hidden', 'false');
    } catch (_) {
      stream.getTracks().forEach((t) => t.stop());
      cameraStream = null;
      return false;
    }
    return true;
  };

  const captureCameraPhoto = () => {
    const video = $('#cameraVideo');
    if (!video || !video.videoWidth) return;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    canvas.toBlob((blob) => {
      closeCameraCapture();
      if (blob) scanForPoi(blob);
    }, 'image/jpeg', 0.85);
  };

  const scanForPoi = async (file) => {
    if (!file || !CURRENT_CITY) return;
    setScanning(true);
    // Feedback inmediato: localizarte + que la IA mire la foto puede tardar
    // varios segundos, y sin esto el único indicio de que algo está
    // pasando es el pulso sutil del botón — fácil de no notar.
    showToast(STATE.mode === 'kids' ? 'Mirando tu foto… 🔍' : 'Analizando tu foto…', 6000);
    try {
      let coords = STATE.userLocation;
      try {
        coords = await getCurrentLocationOnce();
        STATE.userLocation = coords;
        updateUserMarker();
      } catch (_) {
        // Sin ubicación no abortamos: seguimos sin candidatos cercanos que
        // confirmar, pero la IA puede identificar la foto igual en abierto
        // (ver más abajo). La ubicación aquí es una ayuda para acotar, no
        // un requisito — sobre todo porque en algunos dispositivos falla
        // de forma persistente y bloquear la función entera por eso sería
        // peor que ofrecer un resultado sin ubicación confirmada.
        if (!coords) {
          showToast(STATE.mode === 'kids'
            ? 'No sé dónde estás, pero miro la foto igual 🔍'
            : 'No se pudo obtener tu ubicación; analizo la foto de todos modos.', 2600);
        }
      }

      // Sin candidatos cercanos no abortamos: seguimos para que la IA
      // intente igual una identificación abierta (ver más abajo), solo que
      // sin nada conocido con lo que confirmarla primero.
      const candidates = nearbyPoiCandidates(coords, 5);

      const imageDataUrl = await resizeImageFile(file);

      if (!LLM.isReal()) {
        // Sin IA real configurada no hay reconocimiento visual posible: el
        // GPS por sí solo, si hay algo cerca, es la única aproximación
        // honesta que podemos ofrecer.
        if (candidates.length) openScannedPoi(candidates[0].id, { gpsOnly: true });
        else showToast(STATE.mode === 'kids' ? 'No puedo analizar fotos sin conexión a la IA 😅' : 'No se puede analizar la foto sin conexión a la IA.', 3000);
        return;
      }

      // 429/503 = la IA está saturada en ese instante (frecuente con
      // Gemini en horas punta): no es un fallo persistente, así que antes
      // de rendirse se reintenta una vez tras una breve espera en vez de
      // hacer fracasar todo el escaneo por una saturación pasajera.
      let result;
      try {
        result = await LLM.identifyPoi({ imageDataUrl, candidates, cityName: CURRENT_CITY.name });
      } catch (e) {
        if (e && (e.status === 429 || e.status === 503)) {
          showToast(STATE.mode === 'kids' ? '¡La IA está muy solicitada! Probando otra vez… 🔁' : 'La IA está saturada ahora mismo, reintentando…', 2500);
          await new Promise((r) => setTimeout(r, 2500));
          result = await LLM.identifyPoi({ imageDataUrl, candidates, cityName: CURRENT_CITY.name });
        } else {
          throw e;
        }
      }
      if (!result.supported) {
        if (candidates.length) openScannedPoi(candidates[0].id, { gpsOnly: true });
        else showToast(STATE.mode === 'kids' ? '¡Uy! Algo ha fallado con la foto 😅' : 'No se pudo analizar la foto. Inténtalo de nuevo.', 3000);
        return;
      }
      if (result.type === 'match') {
        openScannedPoi(result.poiId, { gpsOnly: false });
      } else if (result.type === 'openended') {
        logUnrecognizedScan({ type: 'openended', name: result.name, coords, imageDataUrl });
        openAdHocScanResult(result, imageDataUrl, coords);
      } else {
        logUnrecognizedScan({ type: 'none', name: null, coords, imageDataUrl });
        showToast(STATE.mode === 'kids'
          ? '¡No he reconocido este sitio! Prueba a acercarte más 🔍'
          : 'No he podido identificar este lugar. Prueba a acercarte más o a otro ángulo.', 3200);
      }
    } catch (e) {
      console.warn('[Scan] Error identificando POI:', e);
      if (e && (e.status === 429 || e.status === 503)) {
        // Ya se reintentó una vez arriba: si sigue saturada, mensaje
        // honesto de "vuelve a intentarlo en un momento" en vez de un
        // código HTTP que no significa nada para quien lo lee.
        showToast(STATE.mode === 'kids'
          ? '¡La IA sigue muy solicitada! Prueba otra vez en un ratito 🙏'
          : 'La IA sigue saturada. Prueba de nuevo en un minuto.', 3500);
      } else {
        // Se incluye el motivo real y corto en el propio aviso (no solo en
        // consola, que en el móvil nadie mira): así un fallo se puede
        // reportar con una captura de pantalla en vez de tener que
        // adivinarlo a ciegas otra vez.
        const code = e && e.status ? `HTTP ${e.status}`
          : (e && (e.name === 'AbortError' || e.message === 'vision-timeout')) ? 'tiempo agotado con la IA'
          : (e && (e.message === 'image-load-timeout' || e.message === 'image-load-failed')) ? 'no se pudo procesar la imagen'
          : (e && e.message) ? e.message
          : 'error desconocido';
        showToast(STATE.mode === 'kids' ? `¡Uy! Algo ha fallado con la foto (${code}) 😅` : `No se pudo analizar la foto (${code}). Inténtalo de nuevo.`, 4200);
      }
    } finally {
      setScanning(false);
    }
  };

  const openScannedPoi = (poiId, { gpsOnly }) => {
    const poi = POIS.find((p) => p.id === poiId);
    if (!poi) return;
    selectPoi(poiId, true);
    showToast(
      gpsOnly
        ? (STATE.mode === 'kids' ? `📍 El punto más cercano es: ${pickDual(poi.name)}` : `📍 Sin reconocimiento visual disponible: te muestro el punto más cercano, ${pickDual(poi.name)}.`)
        : (STATE.mode === 'kids' ? `¡Es ${pickDual(poi.name)}! 🎉` : `¡Reconocido! Es ${pickDual(poi.name)}.`),
      2800
    );
  };

  // Cuando la foto no es ninguno de los POIs curados de la app pero la IA
  // reconoce igual qué es, se construye una ficha "efímera" (no forma parte
  // de los datos de la ciudad, no aparece como pin en el mapa) reutilizando
  // toda la infraestructura de la ficha normal: imagen (la propia foto del
  // usuario), audioguía narrada y chat para seguir preguntando. Se marca
  // claramente como "sin verificar" porque, a diferencia del resto de la
  // app, aquí ni siquiera los datos base están curados a mano.
  const openAdHocScanResult = (info, imageDataUrl, coords) => {
    const id = `scan-adhoc-${Date.now()}`;
    // El aviso de "sin verificar" NO va en subtitle: la primera narración
    // dice en voz alta el nombre + subtítulo (ver buildNarrativeText), así
    // que si el aviso viviera ahí la audioguía leería literalmente "sin
    // verificar, puede contener errores" como si fuera parte del relato.
    // Se deja solo en el badge y en el aviso emergente, que son visuales.
    const tagline = info.subtitle || (STATE.mode === 'kids' ? '¡Descubierto con tu foto!' : 'Identificado a partir de tu foto');
    const poi = {
      id,
      name: { adult: info.name, kids: info.name },
      subtitle: { adult: tagline, kids: tagline },
      category: CATEGORIES.HIDDEN,
      // Sin ubicación real, se usa el centro de la ciudad como posición de
      // relleno: nunca se muestra como pin (ver renderMarkers), así que
      // solo afecta al cálculo de distancia, que ya no tiene sentido mostrar
      // aquí de todas formas.
      coords: coords ? [coords.lat, coords.lng] : CURRENT_CITY.center,
      image: imageDataUrl,
      audio: {
        duration: Math.max(40, Math.round((info.info || info.subtitle || '').split(/\s+/).length / 2.3)),
        title: { adult: `Análisis IA: ${info.name}`, kids: `Análisis IA: ${info.name}` }
      },
      tabs: {
        history: {
          adult: info.info || info.subtitle || 'Sin más datos disponibles.',
          kids: info.info || info.subtitle || 'Sin más datos disponibles.'
        }
      },
      isAdHocScan: true
    };
    POIS.push(poi);
    selectPoi(id, true);
    const badge = $('.sheet-cat-badge', els.sheet);
    if (badge) badge.textContent = STATE.mode === 'kids' ? 'IA · SIN VERIFICAR' : 'ANÁLISIS IA · SIN VERIFICAR';
    showToast(STATE.mode === 'kids'
      ? `¡Creo que es ${info.name}! (sin verificar) 🔍`
      : `No estaba en mis datos, pero creo que es: ${info.name} (sin verificar).`, 3200);
  };

  // Las fichas efímeras del escaneo no deben quedarse coladas en POIS: si
  // no se limpian, podrían reaparecer como un pin fantasma en el mapa la
  // próxima vez que se recalculen los marcadores (cambio de filtro, etc.).
  const cleanupAdHocScanIfNeeded = (poiId) => {
    if (!poiId) return;
    const idx = POIS.findIndex((p) => p.id === poiId && p.isAdHocScan);
    if (idx >= 0) POIS.splice(idx, 1);
  };

  /* =========================================================
   * CIUDADES
   * =======================================================*/
  const nearestCityId = (lat, lng) => {
    let best = null, bestDist = Infinity;
    Object.values(CITIES).forEach((city) => {
      const d = haversineMeters([lat, lng], city.center);
      if (d < bestDist) { bestDist = d; best = city.id; }
    });
    return best;
  };

  // Carga bajo demanda de data/cities/<id>.js (POIs de una ciudad): solo
  // CATEGORIES/CITIES-esqueleto/AI_PROMPTS viven en data/core.js, que se
  // descarga siempre; el contenido real de cada ciudad se pide solo la
  // primera vez que se elige, y queda cacheado (variable + Service Worker)
  // para las siguientes veces en la misma sesión o visitas posteriores.
  const loadedCityScripts = new Set();
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const loadScriptOnce = (src) => new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`No se pudo cargar ${src}`));
    document.head.appendChild(script);
  });

  // Justo tras registrarse, el Service Worker puede tomar el control de la
  // página a mitad de sesión (clients.claim() en sw.js) mientras esta
  // petición ya está en marcha, lo que a veces la hace fallar una vez con
  // net::ERR_FAILED aunque la red vaya bien. Un par de reintentos cortos
  // resuelve ese hueco sin que el usuario vea nunca el aviso de error.
  const loadCityData = async (cityId) => {
    if (CITIES[cityId] && Array.isArray(CITIES[cityId].pois)) return;
    if (loadedCityScripts.has(cityId)) return;
    const src = `data/cities/${cityId}.js?v=20`;
    const delays = [0, 350, 900];
    let lastError;
    for (const delay of delays) {
      if (delay) await sleep(delay);
      try {
        await loadScriptOnce(src);
        loadedCityScripts.add(cityId);
        return;
      } catch (e) {
        lastError = e;
      }
    }
    throw lastError;
  };

  // Carga bajo demanda de data/layers/water-fountains-<id>.js: solo se pide
  // la primera vez que el usuario activa el toggle de bebederos (no en
  // selectCity), para no penalizar a quien nunca usa esta capa.
  const loadedFountainScripts = new Set();
  const loadWaterFountains = async (cityId) => {
    if (window.WATER_FOUNTAINS && window.WATER_FOUNTAINS[cityId]) return;
    if (loadedFountainScripts.has(cityId)) return;
    try {
      await loadScriptOnce(`data/layers/water-fountains-${cityId}.js?v=1`);
      loadedFountainScripts.add(cityId);
    } catch (e) {
      console.warn(`No se pudieron cargar las fuentes de agua de ${cityId}`, e);
    }
  };

  const renderFountains = () => {
    if (!fountainsLayer) return;
    fountainsLayer.clearLayers();
    const list = (window.WATER_FOUNTAINS && window.WATER_FOUNTAINS[STATE.cityId]) || [];
    list.forEach((f) => {
      // zIndexOffset muy negativo: mantiene los bebederos siempre por
      // detrás de los pines de POI (offset 0) cuando coinciden en el mapa.
      const marker = L.marker(f.coords, { icon: makeFountainIcon(f.status), zIndexOffset: -1000 });
      const offNote = f.status === 'fuera-de-servicio' ? '<br><em>Fuera de servicio</em>' : '';
      marker.bindPopup(`<strong>Fuente de agua potable</strong><br>${f.address}${offNote}`);
      marker.addTo(fountainsLayer);
    });
  };

  // Toggle del botón de bebederos: carga los datos la primera vez (si hace
  // falta) y añade/quita fountainsLayer del mapa sin tocar markersLayer ni
  // clusterLayer.
  const toggleFountains = async () => {
    fountainsVisible = !fountainsVisible;
    const btn = $('#fountainsBtn');
    btn?.classList.toggle('-active', fountainsVisible);
    if (!map || !fountainsLayer) return;
    if (fountainsVisible) {
      await loadWaterFountains(STATE.cityId);
      renderFountains();
      if (!map.hasLayer(fountainsLayer)) fountainsLayer.addTo(map);
    } else if (map.hasLayer(fountainsLayer)) {
      map.removeLayer(fountainsLayer);
    }
  };

  // Cambia de ciudad: recarga POIs, mapa y cabecera. Si la app ya estaba
  // en marcha (no es el arranque inicial), también limpia la ficha abierta.
  // Async porque puede necesitar descargar data/cities/<id>.js primero.
  const selectCity = async (cityId) => {
    const city = CITIES[cityId];
    if (!city) return;
    await loadCityData(cityId);
    STATE.cityId = cityId;
    CURRENT_CITY = city;
    POIS = city.pois;
    STATE.category = CATEGORIES.ALL;
    STATE.activeRoute = null;
    closeRoutePicker();
    saveState();
    if (map) {
      closeSheet();
      initMap();
      updatePills();
    }
    setStateMode(STATE.mode);
  };

  /* =========================================================
   * HEADER
   * =======================================================*/
  // Activa una ruta imprescindible concreta (tras elegirla directamente o
  // desde el selector de circuitos) y refresca mapa/ficha/píldora en bloque.
  const activateRoute = (routeId) => {
    STATE.activeRoute = routeId;
    STATE.category = 'essential';
    closeRoutePicker();
    updatePills();
    updateEssentialPillLabel();
    renderMarkers();
    if (STATE.activePoiId) {
      const poi = POIS.find((x) => x.id === STATE.activePoiId);
      if (!poi || !isPoiInActiveRoute(poi)) closeSheet();
      else setSelectedMarker(STATE.activePoiId);
    }
    const routeMeta = getCityRoutes().find((r) => r.id === routeId);
    const routeLabel = routeMeta ? pickDual(routeMeta.name) : '';
    showToast(STATE.mode === 'kids'
      ? `¡Sigue los números de "${routeLabel}" en el mapa! 🚩`
      : `Ruta "${routeLabel}": sigue el orden numerado en el mapa.`, 3000);
    playRouteIntro(routeMeta);
  };

  /* =========================================================
   * INTRO DE RUTA (audioguía corta al elegir un circuito)
   * Reutiliza SPEECH (misma voz elegida, mismo motor) pero con su propio
   * mini-reproductor en el header, independiente de la ficha de POI: se
   * activa antes de que el usuario haya tocado ningún pin.
   * =======================================================*/
  const routeIntroState = { playing: false, currentTime: 0, duration: 0, timer: null, routeId: null };

  const formatAudioTime = (s) => {
    const total = Math.max(0, Math.round(s));
    return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, '0')}`;
  };

  const updateRouteIntroUi = () => {
    if (!els.routeIntro || els.routeIntro.hidden) return;
    const btn = $('#routeIntroPlay');
    if (btn) btn.innerHTML = routeIntroState.playing ? ICONS.pause : ICONS.play;
    const fill = $('#routeIntroFill');
    const dur = routeIntroState.duration || 1;
    if (fill) fill.style.width = `${Math.min(100, (routeIntroState.currentTime / dur) * 100)}%`;
    const time = $('#routeIntroTime');
    if (time) time.textContent = `${formatAudioTime(routeIntroState.currentTime)} / ${formatAudioTime(routeIntroState.duration)}`;
  };

  const stopRouteIntroAudio = () => {
    routeIntroState.playing = false;
    clearInterval(routeIntroState.timer);
    routeIntroState.timer = null;
    SPEECH.cancel();
    updateRouteIntroUi();
  };

  // Se llama también al abrir un POI o cambiar de ciudad, para que no quede
  // sonando (o con el icono desincronizado) por encima de otra narración.
  const closeRouteIntro = () => {
    stopRouteIntroAudio();
    routeIntroState.routeId = null;
    if (els.routeIntro) els.routeIntro.hidden = true;
  };

  const startRouteIntroAudio = (isResume = false) => {
    routeIntroState.playing = true;
    if (!isResume && SPEECH.isSupported()) {
      routeIntroState.duration = estimateSpeechDuration(SPEECH.getText());
    }
    const duration = routeIntroState.duration;
    clearInterval(routeIntroState.timer);

    if (!isResume) {
      const spokeOk = SPEECH.isSupported() && SPEECH.speak(({ finished, error, startFailed }) => {
        if (finished || error || startFailed) {
          routeIntroState.currentTime = finished ? duration : 0;
          stopRouteIntroAudio();
        }
      });
      if (!spokeOk) {
        routeIntroState.playing = false;
        updateRouteIntroUi();
        return;
      }
    } else {
      SPEECH.resume();
    }

    routeIntroState.timer = setInterval(() => {
      routeIntroState.currentTime += 0.2;
      if (routeIntroState.currentTime >= duration) {
        routeIntroState.currentTime = duration;
        stopRouteIntroAudio();
        return;
      }
      updateRouteIntroUi();
    }, 200);
    updateRouteIntroUi();
  };

  const pauseRouteIntroAudio = () => {
    routeIntroState.playing = false;
    clearInterval(routeIntroState.timer);
    routeIntroState.timer = null;
    SPEECH.pause();
    updateRouteIntroUi();
  };

  const toggleRouteIntroAudio = () => {
    if (!routeIntroState.routeId) return;
    if (routeIntroState.playing) {
      if (SPEECH.isSupported() && routeIntroState.currentTime > 0 && routeIntroState.currentTime < routeIntroState.duration) {
        pauseRouteIntroAudio();
      } else {
        stopRouteIntroAudio();
      }
    } else {
      const isPausedMidway = routeIntroState.currentTime > 0 && routeIntroState.currentTime < routeIntroState.duration;
      startRouteIntroAudio(isPausedMidway);
    }
  };

  // Se llama SIEMPRE de forma síncrona dentro del click del usuario que
  // elige la ruta (requisito de iOS para poder narrar sin un gesto aparte).
  const playRouteIntro = (routeMeta) => {
    if (!els.routeIntro || !routeMeta || !routeMeta.intro || !SPEECH.isSupported()) return;
    const text = pickDual(routeMeta.intro);
    if (!text) return;
    stopRouteIntroAudio();
    routeIntroState.routeId = routeMeta.id;
    routeIntroState.currentTime = 0;
    routeIntroState.duration = 0;
    STATE.audio.overrideText = text;
    const title = $('#routeIntroTitle');
    if (title) {
      title.textContent = (STATE.mode === 'kids' ? '¡Antes de empezar! — ' : 'Antes de empezar — ') + pickDual(routeMeta.name);
    }
    els.routeIntro.style.setProperty('--route-intro-color', routeMeta.color || '');
    els.routeIntro.hidden = false;
    startRouteIntroAudio(false);
  };

  // Posiciona un menú `position:absolute` justo bajo (o, si no cabe, sobre)
  // un botón ancla, relativo al offsetParent del propio menú. Se usa para
  // el selector de circuitos, anclado dentro del header.
  const positionDropdownNear = (picker, anchorEl) => {
    const anchor = picker.offsetParent;
    if (!anchorEl || !anchor) return;
    const elRect = anchorEl.getBoundingClientRect();
    const anchorRect = anchor.getBoundingClientRect();
    const pickerWidth = picker.offsetWidth;
    const maxLeft = anchorRect.width - pickerWidth - 4;
    const left = Math.max(4, Math.min(elRect.left - anchorRect.left, maxLeft));
    picker.style.left = `${left}px`;
  };

  const closeRoutePicker = () => { if (els.routePicker) els.routePicker.hidden = true; };
  const openRoutePicker = (routes) => {
    if (!els.routePicker) return;
    els.routePicker.innerHTML = routes.map((r) => `
      <button type="button" class="dropdown-option" data-route="${r.id}">
        <span class="dropdown-dot" style="background:${r.color}"></span>
        <span>${pickDual(r.name)}</span>
      </button>
    `).join('');
    $$('.dropdown-option', els.routePicker).forEach((btn) => {
      btn.addEventListener('click', () => activateRoute(btn.dataset.route));
    });
    els.routePicker.hidden = false;
    // Ancla el selector justo bajo la píldora "Recomendaciones" (y no a todo
    // el ancho del header), para tapar lo mínimo posible del mapa.
    const pill = els.filters && els.filters.querySelector('.pill[data-category="essential"]');
    positionDropdownNear(els.routePicker, pill);
  };

  const updateEssentialPillLabel = () => {
    const pill = els.filters && els.filters.querySelector('.pill[data-category="essential"]');
    if (!pill) return;
    const isKids = STATE.mode === 'kids';
    const active = STATE.category === 'essential' && getCityRoutes().find((r) => r.id === STATE.activeRoute);
    pill.innerHTML = `<span class="pill-icon">${ROUTE_ICON_SVG()}</span><span>${
      active ? pickDual(active.name) : (isKids ? '¡Lo Top! 🚩' : 'Recomendaciones')
    }</span>`;
    pill.style.setProperty('--pill-color', (active && active.color) || getCssVar('--color-primary'));
  };

  const buildHeader = () => {
    $$('.pill', els.filters).forEach((p) => {
      p.addEventListener('click', () => {
        if (p.dataset.category === 'essential') {
          const routes = getCityRoutes();
          if (routes.length > 1) {
            if (els.routePicker && !els.routePicker.hidden) closeRoutePicker();
            else openRoutePicker(routes);
            return;
          }
          activateRoute(routes[0].id);
          return;
        }
        closeRoutePicker();
        STATE.category = p.dataset.category;
        updatePills();
        updateEssentialPillLabel();
        renderMarkers();
        if (STATE.activePoiId) {
          const poi = POIS.find((x) => x.id === STATE.activePoiId);
          const stillVisible = poi && (STATE.category === CATEGORIES.ALL || poi.category === STATE.category);
          if (!stillVisible) closeSheet();
          else setSelectedMarker(STATE.activePoiId);
        }
      });
    });
    $$('.mode-toggle-option').forEach((opt) => {
      opt.addEventListener('click', () => setStateMode(opt.dataset.mode));
    });
    // Cierra los desplegables (circuitos, voz) al tocar fuera de ellos o de
    // su botón.
    document.addEventListener('click', (e) => {
      if (els.routePicker && !els.routePicker.hidden) {
        const essentialPill = els.filters && els.filters.querySelector('.pill[data-category="essential"]');
        if (!els.routePicker.contains(e.target) && !(essentialPill && essentialPill.contains(e.target))) closeRoutePicker();
      }
      const scanMenu = $('#scanMenu'), scanBtn = $('#scanBtn');
      if (scanMenu && !scanMenu.hidden) {
        if (!scanMenu.contains(e.target) && !(scanBtn && scanBtn.contains(e.target))) {
          scanMenu.hidden = true;
          scanBtn?.setAttribute('aria-expanded', 'false');
        }
      }
    }, true);

    if (els.filters) {
      els.filters.addEventListener('scroll', updateFiltersScrollHint, { passive: true });
      // Detecta cambios de ancho del propio contenido (cambia de idioma/modo,
      // la píldora "Recomendaciones" cambia de texto, etc.) sin tener que
      // acordarse de llamar a esto a mano desde cada sitio que las toca.
      if (typeof ResizeObserver !== 'undefined') {
        new ResizeObserver(updateFiltersScrollHint).observe(els.filters);
      }
      updateFiltersScrollHint();
    }
  };

  // Solo visible mientras quede contenido sin ver a la derecha: evita dejar
  // la flecha puesta cuando el usuario ya ha llegado al final de la lista.
  const updateFiltersScrollHint = () => {
    const filters = els.filters;
    const hint = $('#filtersMore');
    if (!filters || !hint) return;
    const hasMore = filters.scrollWidth - filters.scrollLeft - filters.clientWidth > 4;
    hint.classList.toggle('-visible', hasMore);
  };
  const updatePills = () => $$('.pill', els.filters)
    .forEach((p) => p.dataset.active = p.dataset.category === STATE.category ? 'true' : 'false');

  // Niveles del explorador (modo niño): umbrales de puntos pensados para
  // cuando haya preguntas en más lugares, no solo para este prototipo.
  const EXPLORER_LEVELS = [
    { id: 'principiante', min: 0,   label: 'Principiante', color: '#22C55E', img: 'assets/explorer/principiante.png' },
    { id: 'intermedio',   min: 50,  label: 'Intermedio',   color: '#F5B942', img: 'assets/explorer/intermedio.png' },
    { id: 'avanzado',     min: 150, label: 'Avanzado',     color: '#EF4444', img: 'assets/explorer/avanzado.png' }
  ];
  const getExplorerLevel = (points) =>
    [...EXPLORER_LEVELS].reverse().find((lv) => points >= lv.min) || EXPLORER_LEVELS[0];

  // Los stickers del explorador se guardaron sin transparencia real: el
  // "fondo a cuadros" que se ve en el editor de imágenes quedó grabado como
  // píxeles opacos de verdad (negro/gris alternados), no como transparencia.
  // Sin editor de imagen disponible aquí, se recorta en el propio navegador
  // con un flood fill: partiendo de todo el borde exterior del lienzo, se
  // va "caminando" por píxeles vecinos mientras sean neutros (gris/negro/
  // blanco, poca diferencia entre R, G y B) —eso cubre tanto el cuadriculado
  // como el borde blanco del sticker— y se detiene en cuanto encuentra color
  // real del dibujo (piel, pelo, ropa...), que sí tiene saturación. Se
  // cachea por URL para no repetir el procesado cada vez que cambia de nivel.
  const explorerSpriteCache = {};
  const loadExplorerSprite = (src) => {
    if (explorerSpriteCache[src]) return explorerSpriteCache[src];
    const promise = new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        const W = img.naturalWidth, H = img.naturalHeight;
        const off = document.createElement('canvas');
        off.width = W;
        off.height = H;
        const ctx = off.getContext('2d');
        ctx.drawImage(img, 0, 0);
        const frame = ctx.getImageData(0, 0, W, H);
        const d = frame.data;

        const NEUTRAL_TOL = 26; // max(R,G,B) - min(R,G,B) por debajo de esto = "neutro"
        const idx = (x, y) => (y * W + x) * 4;
        const isNeutral = (i) => {
          const r = d[i], g = d[i + 1], b = d[i + 2];
          return (Math.max(r, g, b) - Math.min(r, g, b)) <= NEUTRAL_TOL;
        };
        const visited = new Uint8Array(W * H);
        const stack = [];
        for (let x = 0; x < W; x++) { stack.push(x, 0); stack.push(x, H - 1); }
        for (let y = 0; y < H; y++) { stack.push(0, y); stack.push(W - 1, y); }
        while (stack.length) {
          const y = stack.pop(), x = stack.pop();
          const p = y * W + x;
          if (visited[p]) continue;
          visited[p] = 1;
          const i = idx(x, y);
          if (!isNeutral(i)) continue;
          d[i + 3] = 0;
          if (x > 0) stack.push(x - 1, y);
          if (x < W - 1) stack.push(x + 1, y);
          if (y > 0) stack.push(x, y - 1);
          if (y < H - 1) stack.push(x, y + 1);
        }

        ctx.putImageData(frame, 0, 0);

        // El personaje queda perdido en medio de un lienzo enorme y
        // mayormente vacío (los 1024×1024 originales), así que se recorta
        // al rectángulo real donde hay contenido visible, para que al
        // escalarlo a un icono pequeño se vea grande y centrado en vez de
        // diminuto y descuadrado con el resto del badge.
        let minX = W, minY = H, maxX = -1, maxY = -1;
        for (let y = 0; y < H; y++) {
          for (let x = 0; x < W; x++) {
            if (d[idx(x, y) + 3] > 10) {
              if (x < minX) minX = x;
              if (x > maxX) maxX = x;
              if (y < minY) minY = y;
              if (y > maxY) maxY = y;
            }
          }
        }
        if (maxX < minX || maxY < minY) { resolve(off); return; } // no se detectó contenido: se usa tal cual
        const cropW = maxX - minX + 1, cropH = maxY - minY + 1;
        const cropped = document.createElement('canvas');
        cropped.width = cropW;
        cropped.height = cropH;
        cropped.getContext('2d').drawImage(off, minX, minY, cropW, cropH, 0, 0, cropW, cropH);
        resolve(cropped);
      };
      img.onerror = reject;
      img.src = src;
    });
    explorerSpriteCache[src] = promise;
    return promise;
  };

  const updatePointsBadge = () => {
    const badge = $('#pointsBadge');
    if (!badge) return;
    const isKids = STATE.mode === 'kids';
    badge.hidden = !isKids;
    if (!isKids) return;
    const level = getExplorerLevel(STATE.game.points);
    badge.style.setProperty('--explorer-color', level.color);
    badge.textContent = `⭐ ${STATE.game.points} · ${level.label}`;
  };

  const updateExplorerBadge = () => {
    const wrap = $('#explorerBadge');
    if (!wrap) return;
    const isKids = STATE.mode === 'kids';
    wrap.hidden = !isKids;
    if (!isKids) return;
    const level = getExplorerLevel(STATE.game.points);
    const canvas = $('#explorerAvatar', wrap);
    if (canvas.dataset.levelId === level.id) return;
    canvas.dataset.levelId = level.id;
    canvas.setAttribute('aria-label', `Explorador nivel ${level.label}`);
    loadExplorerSprite(level.img).then((sprite) => {
      if (canvas.dataset.levelId !== level.id) return; // el nivel cambió mientras cargaba
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // El recorte ya no es cuadrado (el personaje es más alto que ancho),
      // así que se escala manteniendo proporción y se centra en el lienzo
      // en vez de estirarlo, para que quede alineado con el badge de al lado.
      const scale = Math.min(canvas.width / sprite.width, canvas.height / sprite.height);
      const w = sprite.width * scale, h = sprite.height * scale;
      const dx = (canvas.width - w) / 2, dy = (canvas.height - h) / 2;
      ctx.drawImage(sprite, dx, dy, w, h);
    }).catch(() => {});
  };

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
    const cityName = CURRENT_CITY ? CURRENT_CITY.name : 'Toledo';
    if (brandSub) brandSub.textContent = isKids ? '¡Aventuras mágicas a tu ritmo!' : `${cityName} · Turismo autoguiado inteligente`;
    if (brandBadge) brandBadge.textContent = isKids ? 'Modo Niños 🎈' : 'Adultos';
    if (CURRENT_CITY) {
      const citySubtitle = pickDual(CURRENT_CITY.subtitle);
      document.title = `OnMyOwnTrip · ${cityName}`;
      const metaDescription = document.getElementById('metaDescription');
      if (metaDescription) {
        metaDescription.setAttribute('content', `OnMyOwnTrip · Turismo autoguiado interactivo por ${cityName}, ${citySubtitle}. Modo Adultos y Niños.`);
      }
    }
    updatePointsBadge();
    updateExplorerBadge();
    $$('.pill').forEach((p) => {
      const cat = p.dataset.category;
      if (cat === CATEGORIES.ALL) {
        p.innerHTML = `<span>${isKids ? 'Todo ✨' : 'Todos'}</span>`;
      } else if (cat === 'essential') {
        updateEssentialPillLabel();
      } else {
        const meta = CATEGORY_META[cat];
        if (meta) p.innerHTML = `<span class="pill-icon">${categoryIconSvg(cat)}</span><span>${pickDual(meta.label)}</span>`;
        p.style.setProperty('--pill-color', getCategoryPinColor(cat));
      }
      p.dataset.active = cat === STATE.category ? 'true' : 'false';
    });
    if (STATE.activePoiId) {
      populateSheetContent(STATE.activePoiId);
      ensureAiPanelInitialGreet(POIS.find((p) => p.id === STATE.activePoiId));
      renderAiSuggestions();
    }
    saveState();
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
      saveState();
      queueAiMessage({ poi, kind: 'summary' });
    }
    renderAiMessages();
    scrollAiToBottom();
  };

  // Chips de sugerencia: en vez de mostrar siempre las 4 categorías fijas,
  // una vez elegido un tema se ofrece "profundizar más" sobre ese mismo tema
  // + los temas que aún no se han explorado, para enganchar en una conversación
  // que se va abriendo en profundidad en vez de repetir las mismas opciones.
  const renderAiSuggestions = () => {
    const input = $('#aiInput');
    const sendBtn = $('#aiSend');
    if (sendBtn) sendBtn.toggleAttribute('disabled', STATE.ai.pending || !(input && input.value.trim()));
    const box = $('#aiSuggestions');
    if (!box || !STATE.activePoiId) return;
    box.innerHTML = '';
    // Modo niño: sin chat de texto ni chips. Solo audioguía y, al terminar,
    // una pregunta con puntos (ver renderKidsQuizCard).
    if (STATE.mode === 'kids') return;
    const poiId = STATE.activePoiId;
    const poi = POIS.find((p) => p.id === poiId);
    const topic = STATE.ai.currentTopic[poiId] || null;
    const exploredSet = STATE.ai.explored[poiId] || new Set();
    const disabled = STATE.ai.pending;

    // El chip de "Entrada" no es una de las opciones de IA: es información
    // práctica fija (horario/precio), solo se muestra si el propio POI la
    // trae (poi.visitInfo) y va siempre primero, antes que "Profundiza más".
    const chips = [];
    if (poi && poi.visitInfo) chips.push({ id: 'ticket', kind: 'ticket', label: 'Entrada: horario y precio' });
    // "Profundiza más" va siempre el primero de los de IA, incluso antes de
    // elegir un tema (en ese caso profundiza sobre el resumen inicial, no
    // sobre un tema concreto); luego, hasta 2 temas sin explorar todavía.
    chips.push({ id: 'deepen', kind: 'deepen', label: pickDual(AI_PROMPTS.deepenLabel) });
    const remaining = (AI_PROMPTS?.options || []).filter((o) => !exploredSet.has(o.id));
    remaining.slice(0, 2).forEach((o) => chips.push({ id: o.id, kind: 'option', label: pickDual(o.label) }));
    if (remaining.length === 0) chips.push({ id: 'reset', kind: 'reset', label: pickDual(AI_PROMPTS.resetLabel) });

    chips.forEach((chip) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'suggest-chip';
      const iconKind = chip.kind === 'option' ? chip.id : chip.kind;
      b.innerHTML = `<span class="suggest-chip-icon">${suggestIconSvg(iconKind)}</span><span>${chip.label}</span>`;
      if (disabled) b.setAttribute('disabled', 'true');
      b.addEventListener('click', () => {
        if (!STATE.activePoiId || STATE.ai.pending) return;
        const poi = POIS.find((p) => p.id === STATE.activePoiId);

        if (chip.kind === 'reset') {
          STATE.ai.explored[poi.id] = new Set();
          STATE.ai.currentTopic[poi.id] = null;
          saveState();
          renderAiSuggestions();
          return;
        }

        // Corta el audio en curso al instante: no tiene sentido seguir oyendo
        // la respuesta anterior mientras se genera la nueva.
        stopAudio();

        aiHistoryFor(poi.id).push({ role: 'user', text: chip.label, isOptionChip: true });

        renderAiMessages();
        scrollAiToBottom();

        if (chip.kind === 'ticket') {
          showVisitInfo(poi);
          return;
        }

        if (chip.kind === 'deepen') {
          queueAiMessage({ poi, kind: 'deepen', optionId: 'deepen:' + (topic || 'general'), userText: chip.label });
        } else {
          if (!STATE.ai.explored[poi.id]) STATE.ai.explored[poi.id] = new Set();
          STATE.ai.explored[poi.id].add(chip.id);
          STATE.ai.currentTopic[poi.id] = chip.id;
          queueAiMessage({ poi, kind: 'option', optionId: chip.id, userText: chip.label });
        }
      });
      box.appendChild(b);
    });
  };

  // Pregunta de gamificación tras el audio (modo niño): elige el primer tema
  // sin acertar aún de este lugar, o null si no hay preguntas o ya se
  // respondieron todas. El orden prioriza secreto > leyenda > arquitectura.
  const KIDS_QUIZ_ORDER = [
    'secret-history', 'legends', 'architecture',
    'construction-time', 'palace-size', 'royal-family', 'nearby-food'
  ];
  const nextKidsQuizTopic = (poi) => {
    if (!poi || !poi.quiz) return null;
    const keys = Object.keys(poi.quiz).sort((a, b) => KIDS_QUIZ_ORDER.indexOf(a) - KIDS_QUIZ_ORDER.indexOf(b));
    return keys.find((t) => !STATE.game.answered[`${poi.id}:${t}`]) || null;
  };

  // Se llama al terminar cualquier narración en modo niño: solo dispara la
  // primera pregunta (cuando termina el audio inicial y la ficha aún no
  // muestra nada). Pasar de una pregunta a la siguiente es cosa del botón
  // "Siguiente" en answerKidsQuiz, no de esperar a que acabe el audio.
  const maybeShowFirstKidsQuiz = () => {
    const card = $('#kidsQuizCard');
    if (card && card.hidden) renderKidsQuizCard();
  };

  const hideKidsQuiz = () => {
    const card = $('#kidsQuizCard');
    if (!card) return;
    card.hidden = true;
    card.innerHTML = '';
  };

  // Se llama cuando termina de sonar la audioguía en modo niño: muestra la
  // siguiente pregunta pendiente de este lugar directamente en la ficha
  // (no en el chat, que en modo niño está oculto).
  const renderKidsQuizCard = () => {
    const card = $('#kidsQuizCard');
    if (!card || STATE.mode !== 'kids' || !STATE.activePoiId) { hideKidsQuiz(); return; }
    const poi = POIS.find((p) => p.id === STATE.activePoiId);
    if (!poi || !poi.quiz) { hideKidsQuiz(); return; }

    const topicId = nextKidsQuizTopic(poi);
    card.innerHTML = '';
    card.hidden = false;

    if (!topicId) {
      const done = document.createElement('p');
      done.className = 'quiz-done';
      done.textContent = '¡Ya conoces todos los secretos de este lugar! ⭐⭐⭐';
      card.appendChild(done);
      return;
    }

    const q = poi.quiz[topicId];
    const question = document.createElement('div');
    question.className = 'quiz-question';
    question.textContent = '🤔 ' + q.question;
    card.appendChild(question);

    const optsWrap = document.createElement('div');
    optsWrap.className = 'quiz-options';
    q.options.forEach((optText, i) => {
      const optBtn = document.createElement('button');
      optBtn.type = 'button';
      optBtn.className = 'quiz-option';
      optBtn.textContent = optText;
      optBtn.addEventListener('click', () => answerKidsQuiz(poi, topicId, i));
      optsWrap.appendChild(optBtn);
    });
    card.appendChild(optsWrap);
  };

  const answerKidsQuiz = (poi, topicId, selectedIndex) => {
    const card = $('#kidsQuizCard');
    if (!card) return;
    const q = poi.quiz[topicId];
    const isCorrect = selectedIndex === q.correct;
    const key = `${poi.id}:${topicId}`;
    let pointsAwarded = 0;
    if (isCorrect && !STATE.game.answered[key]) {
      STATE.game.answered[key] = true;
      STATE.game.points += 10;
      pointsAwarded = 10;
      updatePointsBadge();
      updateExplorerBadge();
    }
    saveState();
    $$('.quiz-option', card).forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.correct) btn.classList.add('-correct');
      else if (i === selectedIndex) btn.classList.add('-incorrect');
    });
    const revealText = (isCorrect
      ? (pointsAwarded ? `🎉 ¡Correcto! +${pointsAwarded} ⭐ ` : '🎉 ¡Correcto! ')
      : '¡Casi! Era esta 👉 ') + q.reveal;
    const reveal = document.createElement('p');
    reveal.className = 'quiz-reveal';
    reveal.textContent = revealText;
    card.appendChild(reveal);

    // Se narra el dato en voz alta como texto puntual (no se guarda en el
    // historial del lugar: si no, la próxima vez que se abra esta ficha, el
    // audio inicial sonaría con esta revelación en vez del resumen). Avanzar
    // a la siguiente pregunta ya no depende de esperar a que termine el
    // audio: el niño decide el ritmo tocando "Siguiente".
    if (STATE.activePoiId === poi.id) {
      STATE.audio.overrideText = revealText;
      stopAudio();
      startAudio(false, true);
    }

    const nextBtn = document.createElement('button');
    nextBtn.type = 'button';
    nextBtn.className = 'quiz-next-btn';
    nextBtn.textContent = 'Siguiente ▶';
    nextBtn.addEventListener('click', () => {
      stopAudio();
      renderKidsQuizCard();
    });
    card.appendChild(nextBtn);
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
      // msg.link solo lo trae el mensaje fijo de info práctica (ver
      // showVisitInfo): se añade como <a> real vía DOM, nunca con innerHTML,
      // para no arriesgarse a inyectar HTML si algún día este campo llegara
      // a depender de un texto menos controlado que el nuestro.
      if (msg.link) {
        const a = document.createElement('a');
        a.className = 'ai-msg-link';
        a.href = msg.link;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.textContent = '🎟️ Comprar entrada oficial ↗';
        bubble.appendChild(a);
      }
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

  // Info práctica (horario/precio): a diferencia de los chips de IA, este
  // texto es fijo y viene del propio POI (poi.visitInfo), así que se
  // inserta directo en el historial sin pasar por LLM.generate — no tiene
  // sentido dejar que un dato tan sensible a errores (precios, horarios)
  // pueda inventarse o desactualizarse vía IA.
  const showVisitInfo = (poi) => {
    if (!poi || !poi.visitInfo) return;
    const hist = aiHistoryFor(poi.id);
    const hours = pickDual(poi.visitInfo.hours);
    const price = pickDual(poi.visitInfo.price);
    const text = `🕐 Horario\n${hours}\n\n🎟️ Precio\n${price}\n\n📅 Datos orientativos: pueden cambiar, confirma en la web oficial antes de ir.`;
    hist.push({ role: 'assistant', text, link: poi.visitInfo.link || null });
    renderAiMessages();
    scrollAiToBottom();
    saveState();
    if (STATE.activePoiId === poi.id) startAudio(false, true);
  };

  const queueAiMessage = async ({ poi, kind, userText, optionId }) => {
    if (!poi || STATE.ai.pending) return;
    STATE.ai.pending = true;
    if (STATE.activePoiId === poi.id) updateAudioUi(); // refleja el play deshabilitado (ver updateAudioUi)
    const hist = aiHistoryFor(poi.id);
    hist.push({ role: 'typing' });
    renderAiMessages();
    renderAiSuggestions();
    scrollAiToBottom();

    try {
      // concise solo para preguntas sueltas escritas por el usuario
      // (kind: 'text'): si pregunta algo puntual como "¿a qué hora abre?"
      // o "¿cuánto mide?", no tiene sentido que la IA responda con un
      // párrafo entero de historia detrás — eso es justo lo que se pide en
      // los botones de tema (Historia secreta, Arquitectura, Leyendas,
      // Profundiza más), que sí deben seguir siendo extensos por diseño.
      const text = await LLM.generate({
        poi,
        mode: STATE.mode,
        userQuery: userText ?? null,
        optionId: optionId ?? null,
        cityName: CURRENT_CITY ? CURRENT_CITY.name : 'la ciudad',
        concise: kind === 'text'
      });
      const idx = hist.findIndex((m) => m.role === 'typing');
      if (idx >= 0) hist.splice(idx, 1);
      // isSummary marca de forma explícita cuál es el resumen inicial, para
      // que el audio principal en modo niño siempre lo identifique bien sin
      // depender de su posición en el historial (ver buildNarrativeText).
      hist.push({ role: 'assistant', text, isSummary: kind === 'summary' });
      // Solo el resumen inicial intenta CLOUD_TTS: es la única narración
      // que vale la pena cachear (el chat y las revelaciones del quiz son
      // texto de un solo uso). Si no está configurado o falla, no añade
      // espera real (fetchAndCache resuelve al momento en ese caso).
      // Importante: se pide con SPEECH.getText() (evaluado ya con este
      // mensaje metido en el historial), no con la variable "text" suelta
      // — buildNarrativeText le añade la intro ("¡Hola! Vamos a descubrir…")
      // que también se narra, así que hay que cachear el texto completo tal
      // cual lo va a pedir startAudio, o la caché nunca haría match.
      if (kind === 'summary' && STATE.activePoiId === poi.id && CLOUD_TTS.isConfigured()) {
        await CLOUD_TTS.fetchAndCache(SPEECH.getText());
      }
      // Autoplay de la respuesta recién generada. Se dispara fuera del gesto
      // directo del usuario (tras el await), así que en iOS Safari puede no
      // arrancar la primera vez; por eso "silent" evita un toast de error y
      // el botón de play queda listo para un toque manual como respaldo.
      // Ojo: solo si no hay ya algo sonando. El botón de play se deshabilita
      // mientras STATE.ai.pending está activo (ver updateAudioUi) para que
      // no se pueda arrancar de forma manual con el texto de respaldo
      // mientras esto carga, pero por si acaso (p.ej. una pestaña que
      // quedó reproduciendo audio de otro momento) no forzamos nunca un
      // reinicio en pleno play: eso es justo lo que sonaba como un audio
      // que "se refresca solo" a los pocos segundos.
      if (STATE.activePoiId === poi.id && !STATE.audio.playing) startAudio(false, true);
    } catch (e) {
      const idx = hist.findIndex((m) => m.role === 'typing');
      if (idx >= 0) hist.splice(idx, 1);
      hist.push({ role: 'assistant', text: STATE.mode === 'kids'
        ? '¡Ups! 😵 Mi cajita mágica está un poquito lenta… Vuelve a intentarlo en 1 minuto, por favor.'
        : 'No hemos podido obtener respuesta. Revisa tu conexión o la configuración de la API (window.LLM_CONFIG).' });
    } finally {
      STATE.ai.pending = false;
      if (STATE.activePoiId === poi.id) updateAudioUi(); // reactiva el play si se había deshabilitado (ver arriba)
      renderAiMessages();
      renderAiSuggestions();
      scrollAiToBottom();
      saveState();
    }
  };

  const sendUserAiMessage = () => {
    const input = $('#aiInput');
    if (!input) return;
    const text = (input.value || '').trim();
    if (!text || STATE.ai.pending || !STATE.activePoiId) return;
    const poi = POIS.find((p) => p.id === STATE.activePoiId);
    stopAudio();
    aiHistoryFor(poi.id).push({ role: 'user', text });
    input.value = '';
    $('#aiSend')?.setAttribute('disabled', 'true');
    renderAiMessages();
    scrollAiToBottom();
    queueAiMessage({ poi, kind: 'text', userText: text });
  };

  const wireAiInput = () => {
    const input = $('#aiInput');
    const sendBtn = $('#aiSend');
    if (!input || !sendBtn) return;
    sendBtn.addEventListener('click', sendUserAiMessage);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        sendUserAiMessage();
      }
    });
    input.addEventListener('input', () => {
      sendBtn.toggleAttribute('disabled', STATE.ai.pending || !input.value.trim());
    });
  };

  // Dictado por voz de la pregunta: Web Speech API (reconocimiento), no
  // confundir con SPEECH (síntesis/TTS de la audioguía) de más arriba. Solo
  // Chrome/Edge la soportan de verdad (Safari/iOS no implementa
  // SpeechRecognition), así que el botón se queda oculto si no hay soporte
  // en vez de mostrar algo roto.
  const wireMicInput = () => {
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const btn = $('#aiMic');
    const input = $('#aiInput');
    const sendBtn = $('#aiSend');
    if (!Recognition || !btn || !input || !sendBtn) return;
    btn.hidden = false;

    let recognition = null;
    let listening = false;
    const setListening = (on) => {
      listening = on;
      btn.setAttribute('aria-pressed', String(on));
    };

    btn.addEventListener('click', () => {
      if (listening) { recognition?.stop(); return; }
      if (!STATE.activePoiId) return;
      stopAudio(); // si la audioguía está sonando, el micro no debe "escucharla"
      recognition = new Recognition();
      recognition.lang = 'es-ES';
      recognition.interimResults = true;
      recognition.continuous = false;
      recognition.onstart = () => setListening(true);
      recognition.onresult = (e) => {
        let transcript = '';
        for (let i = 0; i < e.results.length; i++) transcript += e.results[i][0].transcript;
        input.value = transcript;
        sendBtn.toggleAttribute('disabled', STATE.ai.pending || !transcript.trim());
      };
      recognition.onerror = () => setListening(false);
      recognition.onend = () => setListening(false);
      try { recognition.start(); } catch (_) { setListening(false); }
    });
  };

  /* =========================================================
   * CONVERSACIÓN POR VOZ ("llamada" con la IA)
   * Distinto del dictado puntual de arriba (wireMicInput): aquí se abre un
   * modal a pantalla completa que se queda activo turno tras turno, con la
   * IA respondiendo siempre en voz alta y preguntando "¿algo más?" al
   * terminar, hasta que el usuario dice/escribe que no o pulsa "Colgar".
   * Reutiliza LLM.generate directamente (mismo contexto de POI/ciudad que
   * el chat normal, así que las respuestas ya vienen acotadas a la zona) y
   * guarda cada turno en el historial normal del lugar (aiHistoryFor), para
   * que quede visible también en el chat de texto si se reabre después.
   *
   * Si el navegador soporta SpeechRecognition (no en Safari/iOS) escucha
   * cada turno por voz; si no, muestra un input de texto dentro del propio
   * modal como respaldo — la IA sigue respondiendo hablado en ambos casos,
   * y el flujo de "llamada" (turnos + cierre) es idéntico.
   * =======================================================*/
  const CALL_END_RE = /^(no|nada|nada m[aá]s|gracias|ya est[aá]|para|termina|terminar|cierra|cuelga|colgar|adi[oó]s|chao|eso es todo)[.!¡¿?\s]*$/i;
  // Respuesta a "¿quieres decirme algo, o continúo?" tras una interrupción
  // (ver handleCallInterruption): si el usuario no quería decir nada nuevo,
  // no se re-narra la respuesta cortada (complicaría el flujo innecesariamente
  // — si le interesa ese dato puede volver a preguntarlo), simplemente se
  // pasa a preguntar si quiere algo más.
  const CALL_CONTINUE_RE = /^(sigue|contin[uú]a|nada|no,? sigue|no,? contin[uú]a|prosigue|adelante|vale,? sigue|nada,? sigue)[.!¡¿?\s]*$/i;

  // nextHandler: a qué función debe ir el próximo texto reconocido/escrito
  // (una pregunta normal, o la respuesta a "¿quieres decirme algo?" tras una
  // interrupción) — tanto el reconocimiento de voz como el input de texto de
  // respaldo consultan este mismo valor, así el flujo es idéntico entre los
  // dos caminos de entrada.
  const callState = { active: false, poi: null, nextHandler: null };
  let callRecognition = null;
  let callInterruptRecognition = null;

  const hasSpeechRecognition = () => !!(window.SpeechRecognition || window.webkitSpeechRecognition);

  const setCallStatus = (text) => {
    const el = $('#aiCallStatus');
    if (el) el.textContent = text;
  };
  const setCallAvatarState = (cls) => {
    const el = $('#aiCallAvatar');
    if (!el) return;
    el.classList.remove('-listening', '-speaking');
    if (cls) el.classList.add(cls);
  };
  const appendCallBubble = (role, text) => {
    const box = $('#aiCallTranscript');
    if (!box) return;
    const b = document.createElement('div');
    b.className = 'ai-call-bubble' + (role === 'user' ? ' -user' : '');
    b.textContent = text;
    box.appendChild(b);
    box.scrollTo({ top: box.scrollHeight, behavior: 'smooth' });
  };
  const focusCallTextInput = (handler) => {
    callState.nextHandler = handler || handleCallUserInput;
    setCallAvatarState(null);
    const row = $('#aiCallTextRow');
    if (row) row.hidden = false;
    $('#aiCallInput')?.focus();
  };

  // "Oído" de fondo que escucha MIENTRAS la IA habla, solo para detectar que
  // el usuario ha empezado a decir algo (barge-in): en cuanto llega cualquier
  // resultado (aunque sea provisional) se corta la voz y se pregunta si quería
  // decir algo. Aviso: sin cancelación de eco garantizada, en algunos
  // dispositivos podría confundir la propia voz de la IA saliendo por el
  // altavoz con la del usuario — pendiente de afinar con pruebas reales en
  // un móvil, no se ha podido verificar este camino concreto en este entorno
  // (sin acceso a micrófono real).
  const stopCallInterruptWatch = () => {
    if (!callInterruptRecognition) return;
    try {
      callInterruptRecognition.onresult = null;
      callInterruptRecognition.onerror = null;
      callInterruptRecognition.onend = null;
      callInterruptRecognition.stop();
    } catch (_) {}
    callInterruptRecognition = null;
  };
  const startCallInterruptWatch = (onInterrupt) => {
    if (!hasSpeechRecognition() || !callState.active) return;
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    try {
      callInterruptRecognition = new Recognition();
      callInterruptRecognition.lang = 'es-ES';
      callInterruptRecognition.interimResults = true;
      callInterruptRecognition.continuous = true;
      let triggered = false;
      callInterruptRecognition.onresult = (e) => {
        if (triggered) return;
        const hasSpeech = Array.from(e.results).some((r) => (r[0]?.transcript || '').trim().length > 0);
        if (hasSpeech) { triggered = true; onInterrupt(); }
      };
      callInterruptRecognition.onerror = () => {}; // ruido/silencio: se ignora, es solo un oído de fondo
      callInterruptRecognition.onend = () => {};
      callInterruptRecognition.start();
    } catch (_) {
      callInterruptRecognition = null;
    }
  };

  // Habla usando el mismo motor SPEECH (Web Speech API) que la audioguía,
  // reutilizando el mecanismo de "texto puntual" (overrideText) ya probado
  // con las revelaciones del quiz — así no hay que duplicar lógica de voces/
  // ritmo/pitch. No usa STATE.audio.playing/timer: la llamada tiene su
  // propio estado (callState), independiente del reproductor de la ficha.
  // interruptible: si el usuario empieza a hablar mientras esto suena, se
  // corta y se gestiona como interrupción (ver handleCallInterruption) en
  // vez de esperar a que termine todo el parlamento.
  const speakCallText = (text, onDone, { interruptible = false } = {}) => {
    setCallAvatarState('-speaking');
    if (!SPEECH.isSupported()) { setCallAvatarState(null); onDone && onDone(); return; }
    STATE.audio.overrideText = text;
    if (interruptible) {
      startCallInterruptWatch(() => {
        stopCallInterruptWatch();
        // SPEECH.cancel() dispara un evento "canceled" que el propio motor
        // SPEECH ignora a propósito (no llama a onEndCallback), así que la
        // interrupción se gestiona aquí mismo, no esperando ese callback.
        SPEECH.cancel();
        handleCallInterruption();
      });
    }
    SPEECH.speak(() => {
      stopCallInterruptWatch();
      STATE.audio.overrideText = null;
      setCallAvatarState(null);
      // Margen antes de seguir (normalmente, volver a escuchar): parar un
      // reconocimiento de voz (el "oído de fondo" de la interrupción) y
      // arrancar otro inmediatamente después (el de escucha real) en el
      // mismo instante falla en la práctica en varios navegadores — el
      // anterior no ha soltado el micrófono todavía — y el intento de
      // escuchar caía a texto sin motivo real. Con este margen se evita
      // esa carrera; se aplica siempre, no solo si hubo interrupción.
      setTimeout(() => { onDone && onDone(); }, 300);
    });
  };

  const startCallListening = (handler) => {
    if (!callState.active) return;
    callState.nextHandler = handler || handleCallUserInput;
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Recognition) { focusCallTextInput(callState.nextHandler); return; }
    $('#aiCallTextRow').hidden = true;
    setCallStatus(STATE.mode === 'kids' ? 'Te escucho… 🎙️' : 'Te escucho…');
    setCallAvatarState('-listening');
    try {
      callRecognition = new Recognition();
      callRecognition.lang = 'es-ES';
      callRecognition.interimResults = false;
      callRecognition.continuous = false;
      callRecognition.onresult = (e) => {
        let transcript = '';
        for (let i = 0; i < e.results.length; i++) transcript += e.results[i][0].transcript;
        callState.nextHandler(transcript);
      };
      callRecognition.onerror = () => { if (callState.active) focusCallTextInput(callState.nextHandler); };
      callRecognition.onend = () => setCallAvatarState(null);
      callRecognition.start();
    } catch (_) {
      focusCallTextInput(callState.nextHandler);
    }
  };

  const askCallForMore = (poi) => {
    if (!callState.active) return;
    const more = STATE.mode === 'kids' ? '¿Quieres preguntarme algo más?' : '¿Quieres preguntar algo más?';
    setCallStatus(more);
    speakCallText(more, () => {
      if (!callState.active) return;
      if (hasSpeechRecognition()) startCallListening(handleCallUserInput);
      else focusCallTextInput(handleCallUserInput);
    }, { interruptible: true });
  };

  // Se llama cuando el "oído" de fondo detecta que el usuario ha empezado a
  // hablar mientras la IA respondía: corta, pregunta si quería decir algo, y
  // el siguiente turno se enruta a handleInterruptionReply (no directamente
  // a queueCallTurn) para distinguir "quería seguir escuchando" de "tenía
  // una pregunta nueva".
  const handleCallInterruption = () => {
    if (!callState.active) return;
    STATE.audio.overrideText = null;
    setCallAvatarState(null);
    const ask = STATE.mode === 'kids' ? '¡Ups! ¿Querías decirme algo, o sigo? 👂' : 'Disculpa, ¿quieres decirme algo, o continúo?';
    appendCallBubble('assistant', ask);
    setCallStatus(ask);
    speakCallText(ask, () => {
      if (!callState.active) return;
      if (hasSpeechRecognition()) startCallListening(handleInterruptionReply);
      else focusCallTextInput(handleInterruptionReply);
    }, { interruptible: true });
  };

  const handleInterruptionReply = (raw) => {
    const t = (raw || '').trim();
    if (!t || CALL_CONTINUE_RE.test(t)) {
      askCallForMore(callState.poi);
      return;
    }
    appendCallBubble('user', t);
    if (CALL_END_RE.test(t)) {
      const bye = STATE.mode === 'kids' ? '¡Hasta la próxima aventura! 👋' : 'Hasta luego, que disfrutes la visita.';
      setCallStatus(bye);
      speakCallText(bye, () => closeAiCallMode());
      return;
    }
    queueCallTurn(t);
  };

  const queueCallTurn = async (userText) => {
    if (!callState.active || !callState.poi) return;
    const poi = callState.poi;
    setCallStatus(STATE.mode === 'kids' ? 'Pensando… 🤔' : 'Pensando…');
    setCallAvatarState(null);
    STATE.ai.pending = true;
    if (STATE.activePoiId === poi.id) updateAudioUi();
    aiHistoryFor(poi.id).push({ role: 'user', text: userText });
    // La IA real puede tardar bastantes segundos en responder (más aún si
    // hay que reintentar por saturación): sin este aviso, "Pensando…" se
    // queda ahí quieto y parece que la llamada se ha colgado sin más.
    const slowTimer = setTimeout(() => {
      if (callState.active) {
        setCallStatus(STATE.mode === 'kids' ? 'Sigo pensando… dame un segundo más 🤔' : 'Sigo pensando, un momento…');
      }
    }, 6000);
    let text;
    try {
      // concise: en una llamada de voz nadie quiere un párrafo entero para
      // saber, por ejemplo, cuánto mide algo (ver systemPromptFor) — a
      // diferencia del chat de texto normal, que sí busca respuestas ricas.
      // También se pide un max_tokens menor (ver fetchOpenAI): con menos
      // margen el modelo tiene menos "hueco" para pensar de más, lo que en
      // la práctica también ayuda a que responda antes.
      text = await LLM.generate({
        poi,
        mode: STATE.mode,
        userQuery: userText,
        optionId: null,
        cityName: CURRENT_CITY ? CURRENT_CITY.name : 'la ciudad',
        concise: true
      });
      aiHistoryFor(poi.id).push({ role: 'assistant', text });
      saveState();
    } catch (e) {
      text = STATE.mode === 'kids'
        ? '¡Ups! Mi cajita mágica está un poquito lenta. ¿Lo intentamos otra vez?'
        : 'No he podido generar una respuesta. ¿Lo intentamos de nuevo?';
    } finally {
      clearTimeout(slowTimer);
      STATE.ai.pending = false;
      if (STATE.activePoiId === poi.id) updateAudioUi();
    }
    if (!callState.active) return; // se colgó mientras esperaba la respuesta
    appendCallBubble('assistant', text);
    setCallStatus(STATE.mode === 'kids' ? 'Hablando…' : 'Respondiendo…');
    speakCallText(text, () => askCallForMore(poi), { interruptible: true });
  };

  const handleCallUserInput = (raw) => {
    const t = (raw || '').trim();
    if (!t) {
      // No se capturó nada (silencio, ruido): reintenta escuchar en vez de
      // dejar la llamada colgada sin más.
      if (hasSpeechRecognition()) startCallListening(handleCallUserInput);
      else focusCallTextInput(handleCallUserInput);
      return;
    }
    appendCallBubble('user', t);
    if (CALL_END_RE.test(t)) {
      const bye = STATE.mode === 'kids' ? '¡Hasta la próxima aventura! 👋' : 'Hasta luego, que disfrutes la visita.';
      setCallStatus(bye);
      speakCallText(bye, () => closeAiCallMode());
      return;
    }
    queueCallTurn(t);
  };

  const closeAiCallMode = () => {
    callState.active = false;
    callState.poi = null;
    callState.nextHandler = null;
    try { callRecognition?.stop(); } catch (_) {}
    callRecognition = null;
    stopCallInterruptWatch();
    SPEECH.cancel();
    STATE.audio.overrideText = null;
    const modal = $('#aiCallModal');
    if (modal) { modal.classList.remove('-open'); modal.setAttribute('aria-hidden', 'true'); }
  };

  const openAiCallMode = () => {
    if (!STATE.activePoiId) return;
    const poi = POIS.find((p) => p.id === STATE.activePoiId);
    if (!poi) return;
    const modal = $('#aiCallModal');
    if (!modal) return;
    stopAudio(); // la audioguía y la llamada no deben sonar a la vez
    callState.active = true;
    callState.poi = poi;
    callState.nextHandler = handleCallUserInput;
    $('#aiCallTranscript').innerHTML = '';
    $('#aiCallTextRow').hidden = true;
    $('#aiCallInput').value = '';
    modal.classList.add('-open');
    modal.setAttribute('aria-hidden', 'false');
    const greet = STATE.mode === 'kids'
      ? `¡Hola! Pregúntame lo que quieras sobre ${pickDual(poi.name)}.`
      : `Te escucho. Pregúntame lo que quieras sobre ${pickDual(poi.name)}.`;
    setCallStatus(greet);
    appendCallBubble('assistant', greet);
    speakCallText(greet, () => {
      if (!callState.active) return;
      if (hasSpeechRecognition()) startCallListening(handleCallUserInput);
      else focusCallTextInput(handleCallUserInput);
    }, { interruptible: true });
  };

  const wireAiCallModal = () => {
    const modal = $('#aiCallModal');
    if (!modal) return;
    $('#aiCallBtn')?.addEventListener('click', openAiCallMode);
    $('#aiCallClose')?.addEventListener('click', closeAiCallMode);
    $('#aiCallEnd')?.addEventListener('click', closeAiCallMode);
    const input = $('#aiCallInput');
    const submit = () => {
      const t = (input.value || '').trim();
      if (!t) return;
      input.value = '';
      (callState.nextHandler || handleCallUserInput)(t);
    };
    $('#aiCallSend')?.addEventListener('click', submit);
    input?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); submit(); }
    });
    modal.addEventListener('click', (e) => { if (e.target === modal) closeAiCallMode(); });
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('-open')) closeAiCallMode();
    });
  };

  /* =========================================================
   * POI SELECTION + SHEET
   * =======================================================*/
  const selectPoi = (id, centerMap = false) => {
    // Si había una ficha efímera de escaneo abierta y se salta directo a
    // otro POI sin cerrarla antes, hay que limpiarla igual (closeSheet no
    // llega a ejecutarse en ese camino).
    if (STATE.activePoiId && STATE.activePoiId !== id) cleanupAdHocScanIfNeeded(STATE.activePoiId);
    STATE.activePoiId = id;
    const poi = POIS.find((p) => p.id === id);
    if (!poi) return;
    closeRouteIntro(); // no dejar la intro de la ruta sonando por encima del POI
    setSelectedMarker(id);
    populateSheetContent(id);
    resetAudio(poi.audio.duration);
    ensureAiPanelInitialGreet(poi);
    openSheet();
    if (centerMap && map) map.flyTo([poi.coords[0] - 0.0015, poi.coords[1]], 16.5, { duration: 0.7 });
    // El audio del resumen se autorreproduce cuando llega (ver queueAiMessage),
    // no aquí, para no arrancar dos veces la narración con el texto de relleno.
  };

  const openSheet = () => {
    STATE.sheet = 'open';
    els.backdrop.classList.add('-open');
    els.sheet.classList.add('-open');
    try { els.sheet.setAttribute('aria-hidden', 'false'); } catch (_) {}
  };
  const closeSheet = () => {
    cleanupAdHocScanIfNeeded(STATE.activePoiId);
    STATE.sheet = 'closed';
    STATE.activePoiId = null;
    els.backdrop.classList.remove('-open');
    els.sheet.classList.remove('-open');
    try { els.sheet.setAttribute('aria-hidden', 'true'); } catch (_) {}
    stopAudio();
    clearSelectedMarker();
    closeLightbox();
  };

  const openLightbox = (smallSrc, alt) => {
    if (!els.lightbox || !smallSrc) return;
    const img = $('.lightbox-img', els.lightbox);
    const originalSrc = getOriginalImageUrl(smallSrc);
    // Cadena de fallback: 1200px → original sin recortar → miniatura pequeña
    // (esta última garantizada, ya que es la que se ve en la ficha).
    img.onerror = () => {
      if (img.dataset.stage === 'large') {
        img.dataset.stage = 'original';
        img.src = originalSrc;
      } else if (img.dataset.stage !== 'small') {
        img.dataset.stage = 'small';
        img.onerror = null;
        img.src = smallSrc;
      }
    };
    img.dataset.stage = 'large';
    img.alt = alt || '';
    img.src = getLargeImageUrl(smallSrc);
    els.lightbox.classList.add('-open');
    els.lightbox.setAttribute('aria-hidden', 'false');
  };
  const closeLightbox = () => {
    if (!els.lightbox) return;
    els.lightbox.classList.remove('-open');
    els.lightbox.setAttribute('aria-hidden', 'true');
  };

  // "Visitado" = se ha abierto su ficha al menos una vez (ensureAiPanelInitialGreet
  // guarda un saludo en perPoiHistory la primera vez que se abre), sin importar
  // si luego se ha vuelto a cerrar. Se recalcula cada vez que se abre el modal
  // en vez de guardarse aparte, para no duplicar estado.
  const openVisitSummary = () => {
    if (!els.visitSummary || !CURRENT_CITY) return;
    // Igual que en renderMarkers: las fichas efímeras de escaneo no son
    // POIs de la ciudad y no deben contar aquí.
    const realPois = POIS.filter((p) => !p.isAdHocScan);
    const visited = realPois.filter((p) => (STATE.ai.perPoiHistory[p.id] || []).length > 0);
    const total = realPois.length;
    const level = getExplorerLevel(STATE.game.points);

    $('#visitSummaryTitle', els.visitSummary).textContent = `Tu aventura por ${CURRENT_CITY.name}`;
    $('#visitSummaryStat', els.visitSummary).textContent =
      `${visited.length} de ${total} lugares visitados`;
    $('#visitSummaryFill', els.visitSummary).style.width =
      `${total ? Math.round((visited.length / total) * 100) : 0}%`;
    const pointsEl = $('#visitSummaryPoints', els.visitSummary);
    pointsEl.textContent = `⭐ ${STATE.game.points} · ${level.label}`;
    pointsEl.style.setProperty('--explorer-color', level.color);

    const list = $('#visitSummaryList', els.visitSummary);
    list.innerHTML = realPois.map((p) => {
      const isVisited = (STATE.ai.perPoiHistory[p.id] || []).length > 0;
      return `<li data-visited="${isVisited}">
        <span class="visit-summary-check" aria-hidden="true">${isVisited ? '✅' : '⬜'}</span>
        <span>${pickDual(p.name)}</span>
      </li>`;
    }).join('');

    els.visitSummary.classList.add('-open');
    els.visitSummary.setAttribute('aria-hidden', 'false');
  };
  const closeVisitSummary = () => {
    if (!els.visitSummary) return;
    els.visitSummary.classList.remove('-open');
    els.visitSummary.setAttribute('aria-hidden', 'true');
  };

  const populateSheetContent = (id) => {
    const poi = POIS.find((p) => p.id === id);
    if (!poi) return;
    const meta = CATEGORY_META[poi.category];

    $('.sheet-thumb', els.sheet).src = poi.image;
    $('.sheet-thumb', els.sheet).alt = pickDual(poi.name);
    $('.sheet-cat-badge', els.sheet).textContent = pickDual(meta.label)
      + (poi.fictional ? (STATE.mode === 'kids' ? ' · Imaginado' : ' · Ilustrativo') : '');
    $('.sheet-title', els.sheet).textContent = pickDual(poi.name);
    $('.sheet-sub', els.sheet).textContent = pickDual(poi.subtitle);
    updateSheetDistance(id);

    renderAiSuggestions();
    hideKidsQuiz();

    stopAudio();
    STATE.audio.overrideText = null;
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

    // Nombres que en la práctica suenan mucho menos "robóticas" que las voces
    // clásicas offline de cada sistema (Windows SAPI, etc.): voces neuronales/
    // online de Google, Microsoft Edge, Amazon o Apple. La elección es siempre
    // automática (mejor voz española disponible en el sistema del usuario),
    // sin selector manual: menos que decidir, y evita ofrecer una voz que
    // luego no siga instalada en otro dispositivo.
    const QUALITY_NAME_RE = /online|natural|neural|enhanced|premium|wavenet|google|chirp|journey|studio|plus|siri/i;
    // Voces "compactas" offline: son las más robóticas de todas (motor SAPI
    // muy antiguo en iOS/Android si no se ha descargado una voz mejorada).
    // Se evitan activamente aunque sean la única voz "es-ES" disponible, y
    // solo se usan como último recurso si no queda ninguna otra opción.
    const LOW_QUALITY_NAME_RE = /compact/i;

    const pickSpanishVoice = () => {
      if (!S.supported) return null;
      try {
        const all = (synth.getVoices && synth.getVoices()) || [];
        S.voices = all;
        const prefer = [
          (v) => /^es/i.test(v.lang) && QUALITY_NAME_RE.test(v.name || ''),
          (v) => /es[-_]ES/i.test(v.lang) && /Monica|Jorge|Diego|sabina|lucia|paulina|elvira|alvaro|isabela/i.test(v.name || ''),
          (v) => /es[-_]ES/i.test(v.lang) && !LOW_QUALITY_NAME_RE.test(v.name || ''),
          (v) => /^es/i.test(v.lang) && !LOW_QUALITY_NAME_RE.test(v.name || ''),
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

    // La síntesis de voz de algunos sistemas "lee" los emoji en voz alta
    // (por ejemplo 📌 se pronuncia como "chincheta"). Los quitamos SOLO del
    // texto que se narra; el texto mostrado en el chat conserva sus emoji.
    const stripEmojiForSpeech = (text) => Array.from(text || '').filter((ch) => {
      const cp = ch.codePointAt(0);
      if (cp === 0xFE0F || cp === 0x200D || cp === 0x20E3) return false; // variation selector, ZWJ, keycap
      if (cp >= 0x1F000 && cp <= 0x1FFFF) return false; // emoji: emoticonos, símbolos, transporte, etc.
      if (cp >= 0x2600 && cp <= 0x27BF) return false; // símbolos varios y dingbats (✨ ☀ etc.)
      if (cp >= 0x2B00 && cp <= 0x2BFF) return false; // símbolos varios y flechas (⭐ etc.)
      return true;
    }).join('');

    const buildNarrativeText = () => {
      // Texto puntual (revelación de una pregunta del quiz, o la intro de
      // una ruta): se dice directo, sin depender de que haya un POI activo
      // (una intro de ruta se narra antes de elegir ningún lugar concreto).
      if (STATE.audio.overrideText) {
        return stripEmojiForSpeech(STATE.audio.overrideText).replace(/\s+/g, ' ').trim().slice(0, 1800);
      }
      const poi = POIS.find((p) => p.id === STATE.activePoiId);
      if (!poi) return '';
      const m = STATE.mode;
      // Nombre real también al hablar en modo niño (el apodo divertido es
      // solo texto en pantalla; decirlo en voz alta con el "—" queda raro).
      const name = poi.name.adult;
      const subtitle = pickDual(poi.subtitle);
      const hist = aiHistoryFor(poi.id).filter((x) => x.role === 'assistant');
      // Reconoce el texto de una revelación de quiz (empieza siempre con uno
      // de estos dos prefijos fijos, ver answerKidsQuiz) para poder
      // descartarlo aquí aunque venga de un historial guardado por una
      // versión antigua, sin la marca isSummary ni en la posición esperada
      // (p.ej. si en su momento se respondió una pregunta antes de que
      // terminara de llegar el resumen inicial).
      const looksLikeQuizReveal = (text) => /^(🎉 ¡Correcto!|¡Casi! Era esta)/.test(text || '');
      // En modo niño el audio principal es siempre el resumen original: no
      // hay chips que generen respuestas legítimas adicionales, así que
      // cualquier otro mensaje del historial se ignora aquí a propósito.
      const summaryMsg = hist.find((x) => x.isSummary) || hist.find((x) => !looksLikeQuizReveal(x.text));
      // Si NINGÚN mensaje guardado sirve como resumen (p.ej. un historial
      // viejo donde todas las respuestas registradas son revelaciones del
      // quiz, sin que llegara a guardarse nunca un resumen real), no se cae
      // a hist[0] a ciegas: se trata igual que si no hubiera historial.
      const body = m === 'kids'
        ? (summaryMsg ? summaryMsg.text : (pickDual(poi.tabs.history) || ''))
        : (hist.length ? hist[hist.length - 1].text : (pickDual(poi.tabs.history) || ''));
      // El título y subtítulo solo se dicen en la primera narración (el
      // resumen inicial al tocar el pin); en las siguientes respuestas
      // (chips, "profundiza más", preguntas) se habla directo, sin repetirlo.
      // El texto de tabs.history no trae su propia introducción (a
      // diferencia del resumen generado, que ya empieza con su propio
      // gancho), así que cuando se usa como respaldo en modo niño también
      // lleva el saludo, aunque el historial ya tenga mensajes antiguos.
      const usingFallbackHistory = m === 'kids' && !summaryMsg;
      const isFirstNarration = usingFallbackHistory || hist.length <= 1;
      const intro = !isFirstNarration ? '' : (m === 'kids')
        ? `¡Hola! Vamos a descubrir ${name}. ${subtitle}. ¡Pon mucha atención! `
        : `Audioguía de ${name}. ${subtitle}. `;
      return stripEmojiForSpeech(intro + body).replace(/\s+/g, ' ').trim().slice(0, 1800);
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
        // Ritmo y tono algo más pausados y graves que el neutro (1/1) leen
        // como una voz más cálida y menos robótica en la mayoría de motores;
        // en niños se mantiene la energía pero se suaviza el agudo "chillón".
        u.rate = STATE.mode === 'kids' ? 1.05 : 0.93;
        u.pitch = STATE.mode === 'kids' ? 1.14 : 0.95;
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
      getText: buildNarrativeText,
      speak, pause, resume, cancel, warmUp
    };
  })();

  /* =========================================================
   * CLOUD TTS (Google Cloud Text-to-Speech, vía el Worker propio)
   * Prototipo opcional en prueba: si no hay window.LLM_CONFIG.baseUrl
   * configurado, o el Worker no tiene la key de Google puesta, o falla la
   * petición (incluida cuota agotada), todo esto queda inactivo sin más y
   * la app sigue funcionando con SPEECH (Web Speech API) como hasta ahora
   * — nunca se rompe la audioguía por esto.
   *
   * Solo se intenta para el resumen narrado que genera la IA al abrir un
   * POI (kind: 'summary' en queueAiMessage), nunca para el chat ni las
   * revelaciones del quiz: ese texto es dinámico y no compensa cachearlo,
   * así que se queda directamente en Web Speech.
   *
   * El audio se pide una vez por texto exacto (se cachea por hash del
   * texto, no por POI, para que un mismo resumen nunca se vuelva a pagar)
   * y se guarda en Cache Storage — sobrevive a recargas de página, no solo
   * a la sesión actual.
   * =======================================================*/
  const CLOUD_TTS = (() => {
    const baseUrl = (typeof window !== 'undefined' && window.LLM_CONFIG && window.LLM_CONFIG.baseUrl) || '';
    const endpoint = baseUrl ? `${baseUrl.replace(/\/$/, '')}/tts` : '';
    const CACHE_NAME = 'omot-tts-v1';
    // hash(texto) -> URL de objeto ya lista para reproducir sin esperar red
    // ni Cache Storage (que también es async): así startAudio puede mirar
    // esto de forma síncrona en el momento del toque del usuario.
    const readyUrls = new Map();

    // Hash corto no criptográfico: solo hace falta que el mismo texto
    // exacto produzca siempre la misma clave de caché.
    const hashText = (text) => {
      let h = 0;
      for (let i = 0; i < text.length; i++) h = (Math.imul(31, h) + text.charCodeAt(i)) | 0;
      return 'h' + (h >>> 0).toString(36);
    };

    const fetchAndCache = async (text) => {
      if (!endpoint || !text) return null;
      const key = hashText(text);
      if (readyUrls.has(key)) return readyUrls.get(key);
      const cacheKey = `https://tts.cache.local/${key}`;
      try {
        const cache = await caches.open(CACHE_NAME);
        const cached = await cache.match(cacheKey);
        if (cached) {
          const url = URL.createObjectURL(await cached.blob());
          readyUrls.set(key, url);
          return url;
        }
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 8000);
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text }),
          signal: controller.signal
        }).finally(() => clearTimeout(timeout));
        if (!res.ok) return null; // 501 sin configurar, 429/403 sin cuota, etc.
        const blob = await res.blob();
        await cache.put(cacheKey, new Response(blob, { headers: { 'Content-Type': 'audio/mpeg' } }));
        const url = URL.createObjectURL(blob);
        readyUrls.set(key, url);
        return url;
      } catch (_) {
        return null; // red caída, timeout, etc.: se cae a Web Speech
      }
    };

    const getReadyUrl = (text) => (text ? readyUrls.get(hashText(text)) || null : null);

    return { isConfigured: () => !!endpoint, fetchAndCache, getReadyUrl };
  })();

  /* =========================================================
   * AUDIO PLAYER (visual + real speech when available)
   * =======================================================*/
  // Elemento compartido para reproducir el audio de CLOUD_TTS cuando está
  // disponible; con Web Speech (el camino de siempre) no se usa.
  const cloudAudioEl = (typeof Audio !== 'undefined') ? new Audio() : null;

  // Desbloqueo de audio en iOS Safari: un <audio> solo puede empezar a
  // sonar por su cuenta (fuera de un toque directo) si YA se llamó a
  // play() alguna vez dentro de un toque directo del usuario, igual que
  // SPEECH ya hace para la voz del navegador (ver "Fix crítico iOS Safari"
  // más arriba). El resumen de CLOUD_TTS llega tras esperar a la IA, así
  // que sin este desbloqueo previo, en iPhone se bloquearía en silencio y
  // caería siempre a Web Speech aunque el audio esté listo. Se reproduce
  // un WAV silencioso mínimo una sola vez, sobre este mismo elemento (el
  // desbloqueo es por elemento, no global) — luego se le cambia el "src"
  // real cuando toque, sin perder el desbloqueo.
  const SILENT_WAV = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=';
  let cloudAudioUnlocked = false;
  const unlockCloudAudioOnce = () => {
    if (cloudAudioUnlocked || !cloudAudioEl) return;
    cloudAudioUnlocked = true;
    try {
      cloudAudioEl.src = SILENT_WAV;
      const p = cloudAudioEl.play();
      if (p && p.catch) p.catch(() => {});
      cloudAudioEl.pause();
    } catch (_) {}
    document.removeEventListener('click', unlockCloudAudioOnce, true);
    document.removeEventListener('touchstart', unlockCloudAudioOnce, true);
  };
  if (cloudAudioEl) {
    document.addEventListener('click', unlockCloudAudioOnce, true);
    document.addEventListener('touchstart', unlockCloudAudioOnce, true);
  }
  const toggleAudio = () => {
    if (!STATE.activePoiId) return;
    if (STATE.audio.playing) {
      const canPause = STATE.audio.engine === 'cloud' || SPEECH.isSupported();
      if (canPause && STATE.audio.currentTime > 0 && STATE.audio.currentTime < STATE.audio.duration) {
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
    if (STATE.audio.engine === 'cloud') {
      cloudAudioEl.pause();
    } else {
      SPEECH.pause();
    }
    updateAudioUi();
  };

  // Estima cuánto durará la narración a partir del nº de palabras, para que
  // la barra de progreso corresponda al texto real (que ahora varía en
  // longitud) en vez de a una duración fija inventada por POI. Solo se usa
  // con Web Speech: el audio de CLOUD_TTS trae su propia duración real.
  const estimateSpeechDuration = (text) => {
    const words = (text || '').trim().split(/\s+/).filter(Boolean).length;
    const rate = STATE.mode === 'kids' ? 1.05 : 0.93;
    const wpm = 150 * rate;
    return Math.max(8, Math.round((words / wpm) * 60));
  };

  // Reproduce un audio ya resuelto de CLOUD_TTS. Comparte STATE.audio y
  // updateAudioUi con el camino de Web Speech: la barra de progreso no
  // sabe (ni le importa) qué motor está sonando.
  const startCloudAudio = (url, silent) => {
    STATE.audio.engine = 'cloud';
    cloudAudioEl.onloadedmetadata = () => {
      if (isFinite(cloudAudioEl.duration)) STATE.audio.duration = cloudAudioEl.duration;
      updateAudioUi();
    };
    cloudAudioEl.ontimeupdate = () => {
      STATE.audio.currentTime = cloudAudioEl.currentTime;
      updateAudioUi();
    };
    cloudAudioEl.onended = () => {
      stopAudio();
      if (!silent) showToast(STATE.mode === 'kids' ? '¡Fin del cuento! 🎉' : 'Audioguía completada');
      if (STATE.mode === 'kids') maybeShowFirstKidsQuiz();
    };
    // Si el audio en caché falla al reproducir (blob corrupto, formato no
    // soportado, etc.) se reintenta ya mismo con Web Speech en vez de dejar
    // la audioguía muda.
    const fallbackToSpeech = () => { STATE.audio.engine = null; startAudio(false, silent); };
    cloudAudioEl.onerror = fallbackToSpeech;
    cloudAudioEl.src = url;
    cloudAudioEl.currentTime = 0;
    const p = cloudAudioEl.play();
    if (p && p.catch) p.catch(fallbackToSpeech);
    updateAudioUi();
  };

  const startAudio = (isResume = false, silent = false) => {
    if (!STATE.activePoiId) return;
    STATE.audio.playing = true;

    if (!isResume) {
      const cloudUrl = CLOUD_TTS.getReadyUrl(SPEECH.getText());
      if (cloudUrl) { startCloudAudio(cloudUrl, silent); return; }
      STATE.audio.engine = null;
    } else if (STATE.audio.engine === 'cloud') {
      cloudAudioEl.play().catch(() => {});
      updateAudioUi();
      return;
    }

    if (!isResume && SPEECH.isSupported()) {
      STATE.audio.duration = estimateSpeechDuration(SPEECH.getText());
    }
    const duration = STATE.audio.duration;
    clearInterval(STATE.audio.timer);

    if (!isResume) {
      const spokeOk = SPEECH.isSupported() && SPEECH.speak(({ finished, error, startFailed }) => {
        if (finished) {
          STATE.audio.currentTime = duration;
          stopAudio();
          STATE.audio.currentTime = 0;
          updateAudioUi();
          if (!silent) showToast(STATE.mode === 'kids' ? '¡Fin del cuento! 🎉' : 'Audioguía completada');
          if (STATE.mode === 'kids') maybeShowFirstKidsQuiz();
          return;
        }
        if (error || startFailed) {
          stopAudio();
          STATE.audio.currentTime = 0;
          updateAudioUi();
          // En autoplay (silent) no avisamos: en iOS Safari el primer intento
          // fuera de un gesto directo puede fallar siempre, y el botón de
          // play ya queda listo para un toque manual (eso sí funcionará).
          if (!silent) {
            showToast(
              STATE.mode === 'kids'
                ? 'No pude arrancar la voz. Toca reproducir otra vez.'
                : 'No se pudo iniciar la audioguía. Prueba a pulsar reproducir otra vez.',
              3200
            );
          }
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
        if (STATE.mode === 'kids') maybeShowFirstKidsQuiz();
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
    if (cloudAudioEl) {
      cloudAudioEl.pause();
      cloudAudioEl.onended = cloudAudioEl.onerror = cloudAudioEl.ontimeupdate = cloudAudioEl.onloadedmetadata = null;
    }
    STATE.audio.engine = null;
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
    // Mientras se está generando una respuesta nueva (STATE.ai.pending) y
    // no hay nada sonando todavía, se deshabilita el play: si se pudiera
    // arrancar en ese hueco, sonaría con el texto de respaldo (tabs.history)
    // y unos segundos después, al llegar la respuesta real, se reiniciaría
    // solo con el texto correcto — el "audio que se refresca a los 8s"
    // que reportó un usuario. Una vez playing=true no se vuelve a tocar
    // este disabled, para no bloquear pausar/reanudar mientras suena.
    btn.disabled = STATE.ai.pending && !STATE.audio.playing;
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

    $('#locateBtn')?.addEventListener('click', () => requestLocation(true));

    $('#fountainsBtn')?.addEventListener('click', () => toggleFountains());

    $('#scanBtn')?.addEventListener('click', () => {
      const menu = $('#scanMenu'), btn = $('#scanBtn');
      const willOpen = menu?.hidden;
      if (menu) menu.hidden = !willOpen;
      btn?.setAttribute('aria-expanded', String(!!willOpen));
    });
    $('#scanTakePhoto')?.addEventListener('click', async () => {
      $('#scanMenu').hidden = true;
      $('#scanBtn')?.setAttribute('aria-expanded', 'false');
      prefetchLocation(); // ver comentario en scanUploadPhoto
      const opened = await openCameraCapture();
      if (!opened) {
        showToast(STATE.mode === 'kids'
          ? '¡No pude abrir la cámara! Prueba a subir una foto 📷'
          : 'No se pudo abrir la cámara. Prueba a subir una foto en su lugar.', 3200);
      }
    });
    $('#scanUploadPhoto')?.addEventListener('click', () => {
      $('#scanMenu').hidden = true;
      $('#scanBtn')?.setAttribute('aria-expanded', 'false');
      // Pide la ubicación YA, en este toque directo, en vez de esperar a
      // después de elegir la foto: en iOS, tras cerrarse el selector nativo
      // de fotos, el toque original ya no cuenta como "reciente" y el
      // permiso de geolocalización puede fallar o comportarse mal si se
      // pide en ese momento. Pedirlo aquí dispara el diálogo de permiso (si
      // hace falta) mientras el toque sigue "fresco"; para cuando scanForPoi
      // la necesite, ya estará resuelta o en curso.
      prefetchLocation();
      $('#scanInput')?.click();
    });
    $('#cameraShutterBtn')?.addEventListener('click', captureCameraPhoto);
    $('#cameraCloseBtn')?.addEventListener('click', closeCameraCapture);
    $('#scanInput')?.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      e.target.value = ''; // permite volver a elegir la misma foto una segunda vez
      if (file) scanForPoi(file);
    });

    $('#changeCityBtn')?.addEventListener('click', () => {
      STATE.cityId = null;
      saveState();
      location.reload();
    });

    $('.play-btn', els.sheet).addEventListener('click', toggleAudio);
    $('.progress-wrap', els.sheet).addEventListener('click', (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
      STATE.audio.currentTime = ratio * (STATE.audio.duration || 0);
      updateAudioUi();
    });

    $('.sheet-thumb', els.sheet).addEventListener('click', (e) => {
      openLightbox(e.currentTarget.src, e.currentTarget.alt);
    });
    if (els.lightbox) {
      $('.lightbox-close', els.lightbox).addEventListener('click', closeLightbox);
      els.lightbox.addEventListener('click', (e) => {
        if (e.target === els.lightbox) closeLightbox();
      });
    }

    $('#pointsBadge')?.addEventListener('click', openVisitSummary);
    if (els.visitSummary) {
      $('.visit-summary-close', els.visitSummary).addEventListener('click', closeVisitSummary);
      els.visitSummary.addEventListener('click', (e) => {
        if (e.target === els.visitSummary) closeVisitSummary();
      });
    }

    $('#routeIntroPlay')?.addEventListener('click', toggleRouteIntroAudio);
    $('#routeIntroClose')?.addEventListener('click', closeRouteIntro);

    window.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      if (els.lightbox && els.lightbox.classList.contains('-open')) { closeLightbox(); return; }
      if (els.visitSummary && els.visitSummary.classList.contains('-open')) { closeVisitSummary(); return; }
      if (STATE.sheet !== 'closed') closeSheet();
    });
  };

  /* =========================================================
   * PANTALLA DE BIENVENIDA (ciudad + modo, todo en una sola pantalla)
   * =======================================================*/
  const setOnboardingLoading = (isLoading) => {
    const card = $('.onboarding-card');
    if (card) card.classList.toggle('-loading', isLoading);
  };

  const finishOnboarding = async (cityId, mode) => {
    STATE.mode = mode === 'kids' ? 'kids' : 'adult';
    setOnboardingLoading(true);
    try {
      await selectCity(cityId);
    } catch (e) {
      console.warn('[OMOT] Fallo al cargar la ciudad:', e);
      setOnboardingLoading(false);
      showToast('No se pudo cargar la ciudad. Comprueba tu conexión e inténtalo de nuevo.', 3500);
      return;
    }
    setOnboardingLoading(false);
    const ob = $('#onboarding');
    if (ob) { ob.hidden = true; ob.setAttribute('aria-hidden', 'true'); }
    startApp();
  };

  const wireOnboarding = () => {
    const ob = $('#onboarding');
    if (!ob) return;

    // Ayuda temporal de diagnóstico: 3 toques sobre el número de versión
    // muestran los datos guardados en un cuadro directamente en la página
    // (no window.prompt, que algunos navegadores móviles bloquean sobre
    // todo en modo "añadido a pantalla de inicio"), para poder revisar de
    // verdad qué hay guardado en un dispositivo concreto. Si se sigue
    // tocando hasta 6 toques seguidos (sin que pase el temporizador), se
    // abre además el registro de fotos sin reconocer (ver ScanLog): no se
    // resetea el contador al llegar a 3 para poder seguir sumando toques
    // dentro de la misma ventana de tiempo.
    const versionEl = $('#appVersion');
    if (versionEl) {
      let tapCount = 0;
      let tapTimer = null;
      versionEl.addEventListener('click', () => {
        tapCount++;
        clearTimeout(tapTimer);
        tapTimer = setTimeout(() => { tapCount = 0; }, 2500);
        if (tapCount === 3) {
          try {
            const raw = localStorage.getItem(STORAGE_KEY) || '(vacío)';
            showDebugDump(raw);
          } catch (_) {}
        } else if (tapCount >= 6) {
          tapCount = 0;
          clearTimeout(tapTimer);
          openScanLogModal();
        }
      });
    }

    // Reinicio completo: borra caché del Service Worker, el propio Service
    // Worker registrado y todo localStorage (ciudad/modo, puntos, progreso
    // del quiz, conversaciones con la IA), y recarga — como si fuera la
    // primera vez que se abre la web. Pide confirmación con un modal propio
    // (no window.confirm, por el mismo motivo que el volcado de depuración
    // no usa window.prompt: puede bloquearse en modo "añadido a pantalla de
    // inicio" en algunos navegadores móviles).
    const resetBtn = $('#obResetBtn');
    const resetModal = $('#resetConfirmModal');
    const openResetConfirm = () => {
      if (!resetModal) return;
      resetModal.classList.add('-open');
      resetModal.setAttribute('aria-hidden', 'false');
    };
    const closeResetConfirm = () => {
      if (!resetModal) return;
      resetModal.classList.remove('-open');
      resetModal.setAttribute('aria-hidden', 'true');
    };
    const performFullReset = async () => {
      const okBtn = $('#resetConfirmOk');
      if (okBtn) { okBtn.disabled = true; okBtn.textContent = 'Reiniciando…'; }
      try {
        const regs = await navigator.serviceWorker.getRegistrations();
        await Promise.all(regs.map((r) => r.unregister()));
      } catch (_) {}
      try {
        const keys = await caches.keys();
        await Promise.all(keys.map((k) => caches.delete(k)));
      } catch (_) {}
      try { localStorage.clear(); } catch (_) {}
      location.reload();
    };
    resetBtn?.addEventListener('click', openResetConfirm);
    $('#resetConfirmCancel')?.addEventListener('click', closeResetConfirm);
    $('#resetConfirmOk')?.addEventListener('click', performFullReset);
    resetModal?.addEventListener('click', (e) => {
      if (e.target === resetModal) closeResetConfirm();
    });
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && resetModal && resetModal.classList.contains('-open')) closeResetConfirm();
    });

    let chosenMode = STATE.mode === 'kids' ? 'kids' : 'adult';
    const modeBtns = $$('.onboarding-btn.-mode');
    modeBtns.forEach((b) => {
      b.dataset.active = String(b.dataset.mode === chosenMode);
      b.addEventListener('click', () => {
        chosenMode = b.dataset.mode === 'kids' ? 'kids' : 'adult';
        modeBtns.forEach((x) => { x.dataset.active = String(x === b); });
      });
    });

    // Lista de ciudades: continente → país → ciudad (se genera desde CITIES).
    const cityList = $('#obCityList');
    const allCities = Object.values(CITIES);

    const makeRow = (label, sub, onClick) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'onboarding-city-option';
      b.innerHTML = sub ? `<span>${label}</span><small>${sub}</small>` : `<span>${label}</span>`;
      b.addEventListener('click', (e) => { e.stopPropagation(); onClick(); });
      return b;
    };

    const makeBack = (label, onClick) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'onboarding-city-back';
      b.innerHTML = `<span aria-hidden="true">←</span> ${label}`;
      b.addEventListener('click', (e) => { e.stopPropagation(); onClick(); });
      return b;
    };

    const renderContinents = () => {
      if (!cityList) return;
      cityList.innerHTML = '';
      const continents = [...new Set(allCities.map((c) => c.continent))];
      continents.forEach((continent) => {
        cityList.appendChild(makeRow(continent, '', () => renderCountries(continent)));
      });
    };

    const renderCountries = (continent) => {
      if (!cityList) return;
      cityList.innerHTML = '';
      cityList.appendChild(makeBack('Continentes', renderContinents));
      const countries = [...new Set(allCities.filter((c) => c.continent === continent).map((c) => c.country))];
      countries.forEach((country) => {
        cityList.appendChild(makeRow(country, '', () => renderCities(continent, country)));
      });
    };

    const renderCities = (continent, country) => {
      if (!cityList) return;
      cityList.innerHTML = '';
      cityList.appendChild(makeBack(country, () => renderCountries(continent)));
      allCities
        .filter((c) => c.continent === continent && c.country === country)
        .forEach((city) => {
          cityList.appendChild(makeRow(city.name, '', () => finishOnboarding(city.id, chosenMode)));
        });
    };

    const pickCityBtn = $('#obPickCity');
    pickCityBtn?.addEventListener('click', (e) => {
      if (!cityList) return;
      const willExpand = cityList.hidden;
      if (willExpand) renderContinents();
      cityList.hidden = !willExpand;
      e.currentTarget.setAttribute('aria-expanded', String(willExpand));
      e.stopPropagation();
    });

    document.addEventListener('click', (e) => {
      if (!cityList || cityList.hidden) return;
      if (cityList.contains(e.target) || pickCityBtn?.contains(e.target)) return;
      cityList.hidden = true;
      pickCityBtn?.setAttribute('aria-expanded', 'false');
    });

    $('#obNearby')?.addEventListener('click', () => {
      if (!navigator.geolocation) {
        showToast('No se pudo detectar tu ubicación. Elige una ciudad de la lista.');
        if (cityList) cityList.hidden = false;
        return;
      }
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          STATE.userLocation = { lat: pos.coords.latitude, lng: pos.coords.longitude };
          const cityId = nearestCityId(pos.coords.latitude, pos.coords.longitude);
          finishOnboarding(cityId, chosenMode);
        },
        () => {
          showToast('No hemos podido acceder a tu ubicación. Elige una ciudad de la lista.');
          if (cityList) cityList.hidden = false;
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 30000 }
      );
    });
  };

  /* =========================================================
   * INIT
   * =======================================================*/
  const startApp = () => {
    els.sheet = $('#bottomSheet');
    els.backdrop = $('#sheetBackdrop');
    els.filters = $('#filters');
    els.header = $('.header');
    els.lightbox = $('#imageLightbox');
    els.visitSummary = $('#visitSummaryModal');
    els.routePicker = $('#routePicker');
    els.routeIntro = $('#routeIntro');

    buildHeader();
    initMap();
    wireEvents();
    wireAiInput();
    wireMicInput();
    wireAiCallModal();

    setStateMode(STATE.mode);
    updatePills();

    setTimeout(() => {
      showToast(STATE.mode === 'kids'
        ? '¡Hola aventurero! Toca los pines 🏰'
        : `Bienvenido a ${CURRENT_CITY.name} · Toca un pin`);
    }, 600);
  };

  const init = () => {
    loadState();
    document.documentElement.dataset.mode = STATE.mode;

    // Al abrir el enlace siempre se muestra la pantalla principal (elegir
    // ciudad y modo), aunque ya se hubiera elegido una ciudad antes.
    const ob = $('#onboarding');
    if (ob) { ob.hidden = false; ob.setAttribute('aria-hidden', 'false'); }
    wireOnboarding();
    wireScanLogModal();
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  // Al volver atrás o reabrir la pestaña, algunos navegadores (sobre todo en
  // móvil) restauran la página desde la caché tal cual estaba (a media
  // pregunta del quiz, con la ficha abierta...) sin volver a ejecutar init().
  // Forzamos una recarga real para que siempre se vea la pantalla principal.
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) location.reload();
  });

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
