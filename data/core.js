// ============================================================
// OnMyOwnTrip · Núcleo de datos (siempre cargado)
//
// Contiene todo lo que la app necesita ANTES de que el usuario elija
// ciudad: categorías, prompts de IA, y un "esqueleto" de cada ciudad
// (metadatos + rutas, pero SIN pois[]) para poder mostrar el selector
// de ciudades y calcular "la ciudad más cercana" por geolocalización
// sin tener que descargar el contenido completo de las 4 ciudades.
//
// El contenido real de cada ciudad (pois[]) vive en su propio archivo,
// en data/cities/<id>.js, y se carga bajo demanda (ver loadCityData en
// app.js) solo cuando el usuario elige esa ciudad — así no se descargan
// de golpe las ~130 paradas de las 4 ciudades en cada visita.
// ============================================================

const CATEGORIES = {
  ALL: 'all',
  HISTORY: 'historia',
  GASTRONOMY: 'gastronomia',
  HIDDEN: 'rincones-ocultos'
};

const CATEGORY_META = {
  [CATEGORIES.HISTORY]: {
    label: { adult: 'Museos', kids: 'Lugares Épicos 🏰' },
    pin: 'history',
    accent: '#B8411E'
  },
  [CATEGORIES.GASTRONOMY]: {
    label: { adult: 'Restauración', kids: '¡Comidas Ricas! 🍖' },
    pin: 'gastronomy',
    accent: '#C8703A'
  },
  [CATEGORIES.HIDDEN]: {
    label: { adult: 'Interés', kids: 'Secretos ⭐' },
    pin: 'hidden',
    accent: '#4A90A4'
  }
};

// ============================================================
// CIUDADES (esqueleto): cada una con su propio centro/zoom/límites de
// mapa y sus rutas, pero pois[] se rellena luego desde
// data/cities/<id>.js. STATE.cityId (en app.js) decide cuál se carga.
// ============================================================
const CITIES = {
  toledo: {
    id: 'toledo',
    name: 'Toledo',
    country: 'España',
    continent: 'Europa',
    subtitle: { adult: 'Ciudad Imperial', kids: '¡Ciudad de Castillos! 🏰' },
    center: [39.8628, -4.0273],
    zoom: 15.2,
    minZoom: 13,
    bounds: [[39.845, -4.05], [39.878, -4.00]],
    routes: [
      { id: 'main', name: { adult: 'Imprescindible', kids: '¡Lo Top! 🚩' }, color: '#F59E0B' },
      { id: 'juderia', name: { adult: 'Judería y Rincones Ocultos', kids: '¡El Barrio Secreto! 🕵️' }, color: '#8B5CF6' }
    ]
  },

  madrid: {
    id: 'madrid',
    name: 'Madrid',
    country: 'España',
    continent: 'Europa',
    subtitle: { adult: 'La Villa y Corte', kids: '¡La Ciudad del Oso y el Madroño! 🐻' },
    center: [40.4169, -3.7095],
    zoom: 15.3,
    minZoom: 13,
    bounds: [[40.408, -3.722], [40.423, -3.697]],
    routes: [
      { id: 'main', name: { adult: 'Imprescindible', kids: '¡Lo Top! 🚩' }, color: '#F59E0B' }
    ]
  },

  peniscola: {
    id: 'peniscola',
    name: 'Peñíscola',
    country: 'España',
    continent: 'Europa',
    subtitle: { adult: 'La Ciudad en el Mar', kids: '¡El Castillo sobre las Olas! 🌊' },
    center: [40.359, 0.403],
    zoom: 15.4,
    minZoom: 13,
    bounds: [[40.353, 0.395], [40.365, 0.411]],
    routes: [
      { id: 'main', name: { adult: 'Imprescindible', kids: '¡Lo Top! 🚩' }, color: '#F59E0B' }
    ]
  },

  cdmx: {
    id: 'cdmx',
    name: 'Ciudad de México',
    country: 'México',
    continent: 'América',
    subtitle: { adult: 'Capital azteca y virreinal', kids: '¡La Ciudad de las Águilas y las Pirámides! 🦅' },
    center: [19.37, -99.15],
    zoom: 11,
    minZoom: 9.5,
    bounds: [[19.22, -99.22], [19.51, -99.08]],
    routes: [
      { id: 'centro', name: { adult: 'Centro Histórico', kids: 'Centro Histórico 🏛️' }, color: '#E4002B' },
      { id: 'sur', name: { adult: 'Coyoacán', kids: 'Coyoacán 🎨' }, color: '#22C55E' },
      { id: 'polanco', name: { adult: 'Polanco · Museos', kids: 'Polanco · Museos 🦉' }, color: '#F5A623' },
      { id: 'basilica', name: { adult: 'Basílica', kids: 'Basílica ⛪' }, color: '#7B2D8E' }
    ]
  }
};

const AI_PROMPTS = {
  summary: {
    adult: (p, cityName) =>
      `Un recorrido extenso y detallado por ${pick(p.name, 'adult')}, resaltando por qué es imprescindible en ${cityName}: datos clave, época, contexto histórico y un detalle sorprendente. Unas 190-220 palabras (equivalente a un minuto largo hablado), en varios párrafos. Tono: experto pero cercano.`,
    kids: (p, cityName) =>
      `Presenta ${pick(p.name, 'kids')} a un niño de 8 años: qué es, por qué mola, dos o tres datos súper curiosos y una mini-challenge interactiva que pueda hacer allí. Unas 160-190 palabras (equivalente a un minuto largo hablado). Usa emojis y tono divertido, no lo resumas demasiado.`
  },
  options: [
    {
      id: 'secret-history',
      label: { adult: '🤫 Historia secreta', kids: '🤫 Historia secreta' },
      prompt: {
        adult: (p, cityName) =>
          `Cuéntame con detalle una historia poco conocida, oscura o inesperada sobre ${pick(p.name, 'adult')} (${cityName}). Asegúrate de que sea un episodio real, poco divulgado, y desarróllalo en varios párrafos con contexto. Unas 190-220 palabras. Añade una frase final con la fuente histórica más fiable si la conoces.`,
        kids: (p) =>
          `¡Cuéntame con muchos detalles el secreto más chulo y misterioso de ${pick(p.name, 'kids')}! 😱 Pero que NO dé miedo, que sea de aventuras o magia. Unas 160-190 palabras. Termina con un mini-juego: "¿Te atreves a buscar... allí?"`
      }
    },
    {
      id: 'architecture',
      label: { adult: '🏛️ Arquitectura', kids: '🏗️ Trucos de arquitectura' },
      prompt: {
        adult: (p, cityName) =>
          `Analiza en profundidad la arquitectura de ${pick(p.name, 'adult')} como si fueras un guía especializado: estilo, material estrella, dimensión poco visible (bóvedas, cimentación, simetrías ocultas) y por qué esta obra es única frente a otras de ${cityName}. Unas 190-220 palabras, en varios párrafos.`,
        kids: (p) =>
          `Explícame con detalle los TRUCOS DE INGENIERO que usaron los constructores de ${pick(p.name, 'kids')} para que no se cayera en mil años! 🛠️ Menciona varias cosas que pueda ver con sus ojos. Unas 160-190 palabras. Termina con un reto de observación.`
      }
    },
    {
      id: 'legends',
      label: { adult: '👻 Leyendas', kids: '🧙‍♂️ Leyendas divertidas' },
      prompt: {
        adult: (p, cityName) =>
          `Narra con detalle la leyenda más antigua y verosímil asociada a ${pick(p.name, 'adult')} de ${cityName}, citando su origen documental si existe. Desarróllala en varios párrafos. Unas 190-220 palabras. Termina con tu interpretación: ¿qué hecho real pudo inspirarla?`,
        kids: (p) =>
          `¡Cuéntame con muchos detalles una leyenda superchula de ${pick(p.name, 'kids')} con personajes mágicos (reyes, hadas, animales parlanchines)! 🧚 Sin miedo. Unas 160-190 palabras. Termina con una moraleja corta y divertida.`
      }
    }
  ],
  deepenLabel: { adult: '🔍 Profundiza más', kids: '🔍 ¡Cuéntame más!' },
  resetLabel: { adult: '🔄 Ver otros temas', kids: '🔄 ¡Otras sorpresas!' },
  deepen: {
    adult: (p, topicLabel) =>
      `Sigue profundizando sobre ${topicLabel} en ${pick(p.name, 'adult')}. Da dos datos nuevos, más concretos y menos conocidos que no hayas mencionado antes, sin repetirte, desarrollados con detalle. Unas 150-180 palabras.`,
    kids: (p, topicLabel) =>
      `¡Sigue contándome más sobre ${topicLabel} en ${pick(p.name, 'kids')}! Dos datos nuevos y flipantes que no hayas contado antes 🤩, con detalles. Unas 130-160 palabras. Termina con una pregunta para que quiera saber más.`
  }
};

const AI_TOPIC_NAMES = {
  'secret-history': { adult: 'la historia secreta', kids: 'el secreto' },
  'architecture': { adult: 'la arquitectura', kids: 'los trucos de construcción' },
  'legends': { adult: 'las leyendas', kids: 'las leyendas' }
};

function pick(obj, mode) {
  if (!obj) return '';
  return obj[mode] ?? obj.adult ?? obj.kids ?? '';
}
