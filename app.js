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

    const systemPromptFor = (mode, cityName = 'la ciudad') =>
      mode === 'kids'
        ? `Eres "${cityName} Junior", un guía turístico muy divertido, amigable y pedagogógico para niños de 7 a 11 años que visita ${cityName}. Responde siempre en español, con frases cortas, emojis, tono juguetón y retos interactivos. NUNCA des miedo. Incluye consejos que un niño pueda hacer allí (mirar arriba, buscar una piedra, contar torres). Da una respuesta extensa y detallada, de unas 160-190 palabras (equivalente a un minuto largo hablado), no la resumas. Hazlo memorable.`
        : `Eres "Guía ${cityName}", un guía turístico experto, ameno y con alto conocimiento histórico-artístico de ${cityName}. Responde en español, cercano pero riguroso, citando épocas, autores y datos contrastados. Si el usuario pregunta gastronomía, recomienda platos y establecimientos creíbles del centro. Da una respuesta extensa y con varios párrafos, de unas 190-220 palabras (equivalente a un minuto largo hablado), no la resumas. Destaca un "detalle secreto" final que el viajero pueda observar in situ.`;

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

    const fetchOpenAI = async (sys, usr) => {
      const url = (CFG.baseUrl || 'https://api.openai.com/v1') + '/chat/completions';
      const model = CFG.model || 'gpt-4o-mini';
      // maxTokens/extraBody son opcionales en window.LLM_CONFIG: algunos
      // modelos "razonadores" (p.ej. Gemini 3.x vía el endpoint compatible
      // con OpenAI) consumen muchos tokens en pensamiento interno antes de
      // responder, así que necesitan un max_tokens mucho más alto y a veces
      // un reasoning_effort bajo para no cortar la respuesta a medias.
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${CFG.apiKey}`
        },
        body: JSON.stringify({
          model,
          temperature: 0.6,
          max_tokens: CFG.maxTokens || 700,
          messages: [
            { role: 'system', content: sys },
            { role: 'user', content: usr }
          ],
          ...(CFG.extraBody || {})
        })
      });
      if (!res.ok) {
        const err = new Error(`OpenAI ${res.status}`);
        err.status = res.status;
        throw err;
      }
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

    const generate = async ({ poi, mode, userQuery, optionId, cityName }) => {
      const sys = systemPromptFor(mode, cityName);
      const usr = buildUserText(poi, mode, queryFor(poi, mode, userQuery, optionId, cityName), cityName);
      if (CFG && CFG.apiKey && CFG.provider) {
        try {
          if (CFG.provider === 'anthropic') return await fetchAnthropic(sys, usr);
          return await fetchOpenAI(sys, usr);
        } catch (e) {
          console.warn('[LLM] Fallo API, usando simulador local:', e);
          // 429 = cuota agotada, 503 = modelo saturado: son la misma causa de
          // cara al usuario ("hay demasiada gente usando la IA ahora mismo"),
          // así que merecen un aviso distinto del genérico de "error de conexión".
          const isQuotaError = e && (e.status === 429 || e.status === 503);
          const suffix = isQuotaError
            ? (mode === 'kids'
                ? '\n\n⚠️ (¡La IA está muy solicitada ahora mismo! Se ha usado el modo sin conexión mientras se libera hueco.)'
                : '\n\n⚠️ (La IA está saturada de peticiones en este momento —no es un fallo de la app—, se ha usado el simulador local mientras tanto.)')
            : (mode === 'kids'
                ? '\n\n⚠️ (Modo offline: la IA real respondió con error)'
                : '\n\n⚠️ (Modo offline. Error al conectar con la API, se ha usado el simulador local.)');
          return await simulated(poi, mode, userQuery, optionId) + suffix;
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
    cityId: null,
    category: CATEGORIES.ALL,
    activeRoute: null, // id de la ruta imprescindible activa (para ciudades con varios circuitos)
    activePoiId: null,
    sheet: 'closed',
    audio: {
      playing: false, currentTime: 0, duration: 0, timer: null,
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
  let map, markersLayer, markerLookup = {}, userMarker = null;
  let POIS = []; // POIs de la ciudad activa (CURRENT_CITY.pois) — se rellena al elegir ciudad
  let CURRENT_CITY = null;

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
    markerLookup = {};
    const routeMode = isRouteMode();
    const routeMeta = routeMode && getCityRoutes().find((r) => r.id === STATE.activeRoute);
    const routeColor = (routeMeta && routeMeta.color) || getCssVar('--color-primary') || '#F59E0B';
    const list = routeMode && routeMeta
      ? POIS.filter(isPoiInActiveRoute).sort((a, b) => a.essential.order - b.essential.order)
      : (routeMode ? [] : POIS);
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

  const requestLocation = (centerOnResult = true) => {
    const btn = $('#locateBtn');
    if (!navigator.geolocation) {
      showToast(STATE.mode === 'kids' ? 'Tu navegador no sabe dónde estás 😅' : 'La geolocalización no está disponible en este navegador.');
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
    const src = `data/cities/${cityId}.js?v=12`;
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
    }, true);
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
    if (poi && poi.visitInfo) chips.push({ id: 'ticket', kind: 'ticket', label: '🎟️ Entrada: horario y precio' });
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
      b.textContent = chip.label;
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
        optionId: optionId ?? null,
        cityName: CURRENT_CITY ? CURRENT_CITY.name : 'la ciudad'
      });
      const idx = hist.findIndex((m) => m.role === 'typing');
      if (idx >= 0) hist.splice(idx, 1);
      // isSummary marca de forma explícita cuál es el resumen inicial, para
      // que el audio principal en modo niño siempre lo identifique bien sin
      // depender de su posición en el historial (ver buildNarrativeText).
      hist.push({ role: 'assistant', text, isSummary: kind === 'summary' });
      // Autoplay de la respuesta recién generada. Se dispara fuera del gesto
      // directo del usuario (tras el await), así que en iOS Safari puede no
      // arrancar la primera vez; por eso "silent" evita un toast de error y
      // el botón de play queda listo para un toque manual como respaldo.
      if (STATE.activePoiId === poi.id) startAudio(false, true);
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

  /* =========================================================
   * POI SELECTION + SHEET
   * =======================================================*/
  const selectPoi = (id, centerMap = false) => {
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
    const visited = POIS.filter((p) => (STATE.ai.perPoiHistory[p.id] || []).length > 0);
    const total = POIS.length;
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
    list.innerHTML = POIS.map((p) => {
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
    refreshVoicePicker();
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
    // online de Google, Microsoft Edge, Amazon o Apple.
    const QUALITY_NAME_RE = /online|natural|neural|enhanced|premium|wavenet|google/i;

    // Voz elegida a mano por el usuario (selector en el reproductor), si la
    // hay: se guarda solo el nombre (las voces del navegador no son
    // serializables) y tiene prioridad sobre la heurística automática de
    // más abajo, siempre que siga estando disponible en este dispositivo.
    const VOICE_PREF_KEY = 'omot_voice_pref_v1';
    try { S.preferredVoiceName = localStorage.getItem(VOICE_PREF_KEY) || null; } catch (_) { S.preferredVoiceName = null; }

    const pickSpanishVoice = () => {
      if (!S.supported) return null;
      try {
        const all = (synth.getVoices && synth.getVoices()) || [];
        S.voices = all;
        if (S.preferredVoiceName) {
          const chosen = all.find((v) => v.name === S.preferredVoiceName);
          if (chosen) { S.pickedVoice = chosen; return chosen; }
        }
        const prefer = [
          (v) => /^es/i.test(v.lang) && QUALITY_NAME_RE.test(v.name || ''),
          (v) => /es[-_]ES/i.test(v.lang) && /Monica|Jorge|Diego|sabina|lucia|paulina/i.test(v.name || ''),
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

    // Voces candidatas para el selector: españolas si hay al menos dos,
    // o todas las disponibles como último recurso (algunos navegadores/SO
    // no traen ninguna voz "es*" instalada).
    const listVoices = () => {
      const all = S.voices && S.voices.length ? S.voices : ((synth && synth.getVoices && synth.getVoices()) || []);
      const spanish = all.filter((v) => /^es/i.test(v.lang));
      return spanish.length >= 2 ? spanish : all;
    };

    const setPreferredVoice = (name) => {
      const all = S.voices && S.voices.length ? S.voices : ((synth && synth.getVoices && synth.getVoices()) || []);
      const chosen = all.find((v) => v.name === name);
      if (!chosen) return false;
      S.preferredVoiceName = name;
      S.pickedVoice = chosen;
      try { localStorage.setItem(VOICE_PREF_KEY, name); } catch (_) {}
      return true;
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
      getText: buildNarrativeText,
      speak, pause, resume, cancel, warmUp,
      listVoices, setPreferredVoice,
      getPickedVoiceName: () => (S.pickedVoice && S.pickedVoice.name) || null
    };
  })();

  // Rellena/oculta el selector de voz del reproductor según las voces que
  // el navegador tenga disponibles en ESTE momento (getVoices() suele
  // llegar de forma asíncrona, así que se reintenta desde varios puntos:
  // apertura de ficha, onvoiceschanged, y los reintentos de pickSpanishVoice).
  const refreshVoicePicker = () => {
    const picker = $('#voicePicker'), select = $('#voiceSelect');
    if (!picker || !select || !SPEECH.isSupported()) return;
    const voices = SPEECH.listVoices();
    if (voices.length < 2) { picker.hidden = true; return; }
    const current = SPEECH.getPickedVoiceName();
    select.innerHTML = voices.map((v) =>
      `<option value="${v.name.replace(/"/g, '&quot;')}"${v.name === current ? ' selected' : ''}>${v.name} (${v.lang})</option>`
    ).join('');
    picker.hidden = false;
  };

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

  // Estima cuánto durará la narración a partir del nº de palabras, para que
  // la barra de progreso corresponda al texto real (que ahora varía en
  // longitud) en vez de a una duración fija inventada por POI.
  const estimateSpeechDuration = (text) => {
    const words = (text || '').trim().split(/\s+/).filter(Boolean).length;
    const rate = STATE.mode === 'kids' ? 1.08 : 0.96;
    const wpm = 150 * rate;
    return Math.max(8, Math.round((words / wpm) * 60));
  };

  const startAudio = (isResume = false, silent = false) => {
    if (!STATE.activePoiId) return;
    STATE.audio.playing = true;
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

    $('#locateBtn')?.addEventListener('click', () => requestLocation(true));

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

    $('#voiceSelect')?.addEventListener('change', (e) => {
      const wasPlaying = STATE.audio.playing;
      if (!SPEECH.setPreferredVoice(e.target.value)) return;
      if (wasPlaying) {
        // No se puede "seguir" a mitad de frase con otra voz: se reinicia
        // la narración desde el principio, ya con la voz elegida.
        stopAudio();
        STATE.audio.currentTime = 0;
        startAudio(false);
      }
    });
    // getVoices() suele llegar de forma asíncrona tras la carga: si el
    // selector de ciudad/POI se abrió antes de que las voces estuvieran
    // listas, esto lo repuebla en cuanto el navegador avisa.
    if (SPEECH.isSupported() && typeof speechSynthesis !== 'undefined') {
      try { speechSynthesis.addEventListener('voiceschanged', refreshVoicePicker); } catch (_) {}
    }

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
    // verdad qué hay guardado en un dispositivo concreto.
    const versionEl = $('#appVersion');
    if (versionEl) {
      let tapCount = 0;
      let tapTimer = null;
      versionEl.addEventListener('click', () => {
        tapCount++;
        clearTimeout(tapTimer);
        tapTimer = setTimeout(() => { tapCount = 0; }, 2500);
        if (tapCount >= 3) {
          tapCount = 0;
          try {
            const raw = localStorage.getItem(STORAGE_KEY) || '(vacío)';
            showDebugDump(raw);
          } catch (_) {}
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
