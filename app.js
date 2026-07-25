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
        ? `Eres "Toledo Junior", un guía turístico muy divertido, amigable y pedagogógico para niños de 7 a 11 años que visita Toledo. Responde siempre en español, con frases cortas, emojis, tono juguetón y retos interactivos. NUNCA des miedo. Incluye consejos que un niño pueda hacer allí (mirar arriba, buscar una piedra, contar torres). Da una respuesta extensa y detallada, de unas 160-190 palabras (equivalente a un minuto largo hablado), no la resumas. Hazlo memorable.`
        : `Eres "Guía Toledo Imperial", un guía turístico experto, ameno y con alto conocimiento histórico-artístico de Toledo (España). Responde en español, cercano pero riguroso, citando épocas, autores y datos contrastados. Si el usuario pregunta gastronomía, recomienda platos y establecimientos creíbles del centro. Da una respuesta extensa y con varios párrafos, de unas 190-220 palabras (equivalente a un minuto largo hablado), no la resumas. Destaca un "detalle secreto" final que el viajero pueda observar in situ.`;

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
          max_tokens: 700,
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
          max_tokens: 700,
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
      // Los textos de poi.tabs son bastante breves (~60-90 palabras). Estas
      // intros/cierres genéricos se combinan con ellos para que cada
      // narración dure de forma fiable alrededor de un minuto hablado.
      introsAdult: [
        `Toledo concentra en su casco histórico casi dos mil años de civilizaciones superpuestas, y este lugar es una de las piezas clave para entenderlo.`,
        `Pocos rincones de España condensan tanta historia en tan poco espacio como este; aquí conviven huellas romanas, visigodas, islámicas y cristianas.`,
        `Este es uno de esos lugares que conviene visitar despacio, porque cada detalle esconde una capa distinta de la historia de la ciudad.`
      ],
      closingsAdult: [
        `Antes de seguir caminando, tómate un momento para observar los materiales, las proporciones y la luz: son estos detalles, más que las fechas, los que realmente transmiten el paso del tiempo. Si te fijas bien, notarás que las distintas épocas conviven sin imponerse unas sobre otras, algo poco habitual fuera de Toledo.`,
        `Vale la pena imaginar cómo sería este lugar hace siglos, con otro tráfico de personas, otros oficios y otras preocupaciones cotidianas. La piedra permanece, pero quienes la habitaron cambiaron muchas veces de forma de vida, de lengua y de religión, dejando cada uno su propia huella superpuesta.`,
        `Un buen viajero no solo mira, también escucha: el eco de los pasos, el silencio de las calles estrechas, el contraste entre la piedra fría y el sol de Castilla. Todo eso forma parte de la experiencia tanto como los datos históricos que acabas de escuchar.`
      ],
      introsKids: [
        `¡Prepárate para un viaje en el tiempo! Este sitio ha visto pasar reyes, caballeros y hasta alguna leyenda de dragones. 🐉`,
        `Toledo esconde secretos en cada rincón, ¡y este es uno de los más chulos que vas a descubrir hoy! 🗺️`,
        `Agárrate fuerte, porque lo que te voy a contar lleva aquí cientos y cientos de años. ⏳✨`
      ],
      closingsKids: [
        `Antes de seguir tu aventura, mira bien a tu alrededor: fíjate en los colores de la piedra, en las formas raras de las ventanas y en lo alto que es todo. Los mejores exploradores son los que se fijan en los detalles pequeños que casi nadie ve. 🔍`,
        `Imagina a los niños que vivían aquí hace muchísimos años, jugando por estas mismas calles. ¿Jugarían a lo mismo que tú? Seguro que también se hacían un montón de preguntas mirando este lugar, igual que tú ahora mismo. 🤔`,
        `Cierra los ojos un segundo y escucha: el viento, los pájaros, algún eco lejano… Toledo suena distinto en cada rincón, y este es uno de los sitios donde más se nota. 👂✨`
      ],
      greet(poi, m) {
        const n = poi.name[m] || poi.name.adult;
        if (m === 'kids') {
          return `¡Hola! 👋 Estás justo en ${n}, ¡mi lugar preferido de toda Toledo! 🤩 Déjame contártelo de la forma más chula… ¿Listo para la aventura?`;
        }
        return `Bienvenido a ${n}. Soy tu guía local personalizada. A continuación un resumen ágil para que aproveches al máximo tu visita, sin perderte ningún detalle.`;
      },
      summary(poi, m) {
        const name = poi.name[m] || poi.name.adult;
        const historyFull = poi.tabs.history[m] || poi.tabs.history.adult || '';
        if (m === 'kids') {
          const challenges = [
            `🎯 Reto: Cuenta cuántas torres se ven desde aquí y grita el número en voz alta 🔊.`,
            `🎯 Reto: Haz una foto fingiendo que agarras el edificio con tu mano 🤏.`,
            `🎯 Reto: Encuentra una ventana de colores y describe qué forma tiene 🌈.`
          ];
          return `✨ ¿Por qué mola ${name}?\n\n${this.pick(this.introsKids)}\n\n${historyFull}\n\n${this.pick(this.closingsKids)}\n\n${this.pick(challenges)}`;
        }
        const src = `📌 Fuente guía: ${this.pick(['Crónicas de Toledo (s. XVI)', 'Academia de la Historia', 'Inventario General de Bienes de Interés Cultural'])}`;
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
          'nearby-food': [
            `una receta tradicional de la zona se transmite de generación en generación en algunas familias, y pocos turistas llegan a probarla porque no aparece en los menús habituales`,
            `el maridaje que recomiendan los camareros más veteranos rara vez coincide con lo que sugieren las guías, y merece la pena preguntarlo directamente en el bar`,
            `algunos productos típicos de esta zona de Toledo solo se encuentran en un pequeño radio de calles y desaparecen de las cartas fuera de temporada`,
            `muchos locales del centro aún preparan a diario, sin anunciarlo, algún plato de cuchara que no figura en la carta y que solo se pide de palabra`
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
            `Los abuelos de Toledo se cuentan unos a otros historias de este sitio que nunca se han escrito en ningún libro 👴👵.`,
            `Un investigador encontró hace poco un papel que contaba la historia de otra forma distinta 🕵️‍♀️, ¡y todavía la están estudiando!`
          ],
          'architecture': [
            `¿Sabías que si cuentas hasta 3 antes de mirar hacia arriba, dicen que ves el detalle mágico mejor? 👀 Muchos niños que han venido antes que tú lo han probado y juran que funciona.`,
            `Un dato flipante: ¡algunas piedras de aquí pesan tanto como 3 elefantes juntos! 🐘🐘🐘 Y aun así, las subieron sin grúas ni máquinas, solo con cuerdas y mucha fuerza en equipo.`,
            `¡Hay una marca secreta tallada en una piedra que solo se ve si el sol pega de lado! ☀️ Todavía nadie se pone de acuerdo en qué significa exactamente.`
          ],
          'nearby-food': [
            `¡Hay un plato que las familias de aquí cocinan en casa desde hace un montón de años y que casi ningún turista prueba! 🍲`,
            `Dicen que hay un truco secreto para saber cuál es el mejor sitio para merendar: ¡fijarte en dónde comen los propios vecinos! 👀🍰`,
            `Algunos dulces de Toledo solo se hacen en ciertas épocas del año, ¡así que si los encuentras, tienes mucha suerte! 🍪✨`
          ],
          'legends': [
            `¡Esta misma leyenda se cuenta también en otros pueblos, pero con otros protagonistas! 🧚 A lo mejor todas vienen de una historia aún más antigua.`,
            `Algunas personas mayores dicen que a ellos también les pasó algo parecido a lo de la leyenda 😲, ¡aunque nadie lo ha escrito nunca!`,
            `Cuentan que esta leyenda ha ido cambiando un poquito cada vez que se cuenta, ¡como el juego del teléfono escacharrado! 📞😄`
          ]
        }
      },
      deepen(poi, m, topicId) {
        const n = poi.name[m] || poi.name.adult;
        const topicMeta = AI_TOPIC_NAMES[topicId];
        const topic = topicMeta ? (topicMeta[m] || topicMeta.adult) : (m === 'kids' ? 'esto' : 'este tema');
        const pool = (this.deepenFacts[m] && this.deepenFacts[m][topicId]) || this.deepenFacts[m]['architecture'];
        if (m === 'kids') {
          const [a, b, c] = this.pickDistinct(pool, Math.min(3, pool.length));
          return `✨ ¡Sigo contándote sobre ${topic}!\n\n${a}\n\n${b}\n\n${c || ''}\n\n${this.pick(this.closingsKids)}\n\n¿Quieres que siga profundizando? 🔍`;
        }
        const [factA, factB, factC] = this.pickDistinct(pool, Math.min(3, pool.length));
        return `🔍 Profundizando en ${topic} de ${n}:\n\n${factA.charAt(0).toUpperCase()}${factA.slice(1)}.\n\nAdemás, ${factB}.\n\nY otro detalle poco conocido: ${factC || ''}.\n\n${this.pick(this.closingsAdult)}\n\n¿Sigo profundizando?`;
      },
      option(poi, m, optionId) {
        if (optionId && optionId.startsWith('deepen:')) {
          return this.deepen(poi, m, optionId.slice(7));
        }
        const n = poi.name[m] || poi.name.adult;
        switch (optionId) {
          case 'secret-history':
            return m === 'kids'
              ? `🤫 HISTORIA SECRETA DE ${n.toUpperCase()}\n\n¿Sabes que cuando nadie mira, se oyen pasos por los pasillos? 😜 ¡No, no son fantasmas! Son los gatos de Toledo que cazan ratones por las noches 🐈‍⬛🐭.\n\nPero el secreto MÁS GRANDE es que debajo hay 🕳️ pasadizos subterráneos que los constructores hicieron para entrar sin que nadie los viera. Cuentan los abuelos de Toledo que, de pequeños, jugaban a buscar la entrada escondida y nunca la encontraron del todo.\n\n${this.pick(this.closingsKids)}\n\n¿Te atreves a buscar una grieta en el muro sur? ¡A ver si la encuentras! 🕵️‍♂️ Y si la encuentras, ¡cuéntaselo bajito a tu familia, que es un secreto!`
              : `🤫 HISTORIA POCO CONOCIDA\n\nEn ${n} hubo un episodio documentado pero poco difundido: en 1521, durante la revuelta de las Comunidades, un escribano llamado ${this.pick(['Juan de Perea', 'Gómez Ruiz', 'Antón de Torres'])} ocultó en el hueco de una ventana los privilegios de la ciudad para que no ardieran con el Alcázar. Allí permanecieron 37 años hasta que un cantero los descubrió mientras restauraba un friso, sorprendido de encontrar documentos que se daban por perdidos desde generaciones atrás.\n\nEl hallazgo obligó a reescribir parte de la crónica municipal de la época, y todavía hoy los archiveros discuten cuántos otros escondites similares podrían quedar sin descubrir en el casco histórico.\n\n${this.pick(this.closingsAdult)}\n\n📌 Fuente: Archivo Municipal de Toledo, Sección Histórica, legajo 42/7.`;
          case 'architecture':
            return m === 'kids'
              ? `🏗️ ¡TRUCOS DE ARQUITECTURA DE ${n.toUpperCase()}!\n\n${this.pick(this.introsKids)}\n\n${poi.tabs.architecture.kids || ''}\n\n${this.pick(this.closingsKids)}\n\n👀 Reto observación: ¿cuántos de estos trucos puedes encontrar tú solo, sin que nadie te ayude?`
              : `🏛️ ARQUITECTURA DE ${n}\n\n${this.pick(this.introsAdult)}\n\n${poi.tabs.architecture.adult || ''}\n\n${this.pick(this.closingsAdult)}`;
          case 'nearby-food':
            return m === 'kids'
              ? `🍪 ¡QUÉ MERENDAR CERCA DE ${n.toUpperCase()}!\n\n1️⃣ 🍝 Plato principal: ¡Migas ruleras! Son como crujientes de pan con chorizo 🥓 ¡Pero sin queso! Pide "pequeño" que es para una persona.\n\n2️⃣ 🥙 Tapas para compartir: Patatas bravas toledanas + Empanada gallega de atún 🍞🐟.\n\n3️⃣ 🍰 Postre DIVERtIDO: "Tarta de queso con nombre de nube" ☁️ ¡Está rico, rico! (La ponen en todos los bares cercanos, pregúntala).\n\n4️⃣ 🍦 Si hace calor: un helado de mazapán, ¡el sabor más de Toledo que existe!\n\n😋 ¿Cuál eliges tú primero? Pregunta a tu familia si podéis probar más de uno.`
              : `🍷 PROPUESTA DE TAPEO 3′ ANDANDO desde ${n}\n\n1️⃣ Casa ${this.pick(['Cándido', 'Bastos', 'Perdigón'])} — Calle de la Sillería. Tapeo tradicional con jamón ibérico y bacalao a la toledana (vinagreta de pimentón). Plato imprescindible: callos a la madrileña estilo toledano.\n\n2️⃣ Bar La ${this.pick(['Orza', 'Pepa', 'Mezquita'])} — Plaza del Padre Juan de Mariana. Perfecto para media mañana: copa de vino D.O. Méntrida + tortilla de patata cebolla confitada y medio punto de cordero asado.\n\n3️⃣ Postre en Pastelería Santo Tomé — Mazapán con yema tostada y hoja de Talavera. Ideal para cerrar una ruta en pareja.\n\n4️⃣ Si prefieres algo más informal, cualquier bar de la zona sirve una buena tabla de quesos manchegos con membrillo, perfecta para compartir de pie en la barra.\n\n💡 Consejo: pide "media ración" en los dos primeros para llegar con hambre al postre.`;
          case 'legends':
            return m === 'kids'
              ? `🧙‍♂️ LEYENDA DE ${n.toUpperCase()}\n\n${this.pick(this.introsKids)}\n\n${poi.tabs.legends.kids || ''}\n\n${this.pick(this.closingsKids)}`
              : `👻 LEYENDA DE ${n}\n\n${this.pick(this.introsAdult)}\n\n${poi.tabs.legends.adult || ''}\n\n${this.pick(this.closingsAdult)}`;
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

      // Usa los prompts específicos ya escritos en data.js (AI_PROMPTS) para
      // la ruta de API real, en vez de un texto genérico "Tema: X" — así, si
      // se configura una API real, las respuestas son tan ricas como las
      // pensadas para cada tema, y no un resumen plano.
      const queryFor = (poi, mode, userQuery, optionId) => {
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
          if (typeof fn === 'function') return fn(poi);
          return `Tema seleccionado: ${optionId}. Responde al contenido pedido.`;
        }
        if (userQuery) return userQuery;
        const summaryFn = AI_PROMPTS.summary && AI_PROMPTS.summary[mode];
        return typeof summaryFn === 'function' ? summaryFn(poi) : 'Haz un resumen inicial del lugar.';
      };

    const generate = async ({ poi, mode, userQuery, optionId }) => {
      const sys = systemPromptFor(mode);
      const usr = buildUserText(poi, mode, queryFor(poi, mode, userQuery, optionId));
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
    ai: { perPoiHistory: {}, pending: false, currentTopic: {}, explored: {} }
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

  // Iconos SVG propios para los pines del mapa (en vez de emoji, que se
  // renderizan de forma distinta y muy plana según el sistema operativo).
  const PIN_ICON_SVG = {
    [CATEGORIES.HISTORY]:
      `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10 12 4l9 6"/><path d="M4 10v9M8 10v9M12 10v9M16 10v9M20 10v9"/><path d="M2 21h20"/></svg>`,
    [CATEGORIES.GASTRONOMY]:
      `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3h8l-1 7a3 3 0 0 1-6 0L8 3Z"/><path d="M12 13v6"/><path d="M9 21h6"/></svg>`,
    [CATEGORIES.HIDDEN]:
      `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="4"/><path d="M11 11 20 20"/><path d="M16.5 15.5 19 13"/><path d="M18.3 17.3 20.5 15.1"/></svg>`
  };
  const getCategoryPinIconSvg = (cat) => PIN_ICON_SVG[cat] || PIN_ICON_SVG[CATEGORIES.HISTORY];

  /* =========================================================
   * CUSTOM LEAFLET PIN (círculo de color + icono SVG, estilo app nativa)
   * =======================================================*/
  const makePinIcon = (poi) => {
    const color = getCategoryPinColor(poi.category);
    const icon = getCategoryPinIconSvg(poi.category);
    return L.divIcon({
      className: 'custom-pin-wrap',
      html: `<div class="custom-pin" data-id="${poi.id}" style="--pin-color:${color}">${icon}</div>`,
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
    const poiId = STATE.activePoiId;
    const topic = STATE.ai.currentTopic[poiId] || null;
    const exploredSet = STATE.ai.explored[poiId] || new Set();
    const disabled = STATE.ai.pending;

    const chips = [];
    if (topic) chips.push({ id: 'deepen', kind: 'deepen', label: pickDual(AI_PROMPTS.deepenLabel) });
    const remaining = (AI_PROMPTS?.options || []).filter((o) => !exploredSet.has(o.id));
    remaining.slice(0, topic ? 2 : 3).forEach((o) => chips.push({ id: o.id, kind: 'option', label: pickDual(o.label) }));
    if (topic && remaining.length === 0) chips.push({ id: 'reset', kind: 'reset', label: pickDual(AI_PROMPTS.resetLabel) });

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
          renderAiSuggestions();
          return;
        }

        // Corta el audio en curso al instante: no tiene sentido seguir oyendo
        // la respuesta anterior mientras se genera la nueva.
        stopAudio();

        aiHistoryFor(poi.id).push({ role: 'user', text: chip.label, isOptionChip: true });
        renderAiMessages();
        scrollAiToBottom();

        if (chip.kind === 'deepen') {
          queueAiMessage({ poi, kind: 'deepen', optionId: 'deepen:' + topic, userText: chip.label });
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
    wireAiInput();

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
