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
      {
        id: 'main',
        name: { adult: 'Recomendaciones', kids: '¡Lo Top! 🚩' },
        color: '#F59E0B',
        intro: {
          adult: 'Esta es la ruta imprescindible de Toledo: siete paradas que resumen casi 2.000 años de historia en poco más de dos kilómetros a pie. Entrarás por la monumental Puerta de Bisagra, cruzarás la Plaza de Zocodover, subirás hasta el Alcázar y visitarás la Catedral Primada, la Iglesia de Santo Tomé y la Sinagoga del Tránsito, antes de terminar con las mejores vistas de la ciudad desde el Mirador del Valle. Al acabar entenderás por qué Toledo se llama la Ciudad de las Tres Culturas: aquí conviven, a pocos metros unas de otras, la huella musulmana, cristiana y judía.',
          kids: '¡Prepárate para la aventura más importante de Toledo! 🏰 Vas a pasar por una puerta gigante de hace más de 1.000 años, un castillo enorme, una catedral con vitrales de colores, una iglesia con un cuadro gigante y una sinagoga con madera traída desde muy lejos. ¡Y terminarás en un mirador con las mejores vistas de toda la ciudad! Al final sabrás por qué a Toledo la llaman la ciudad de las tres culturas.'
        }
      },
      {
        id: 'juderia',
        name: { adult: 'Judería y Rincones Ocultos', kids: '¡El Barrio Secreto! 🕵️' },
        color: '#8B5CF6',
        intro: {
          adult: 'Esta ruta te lleva por el antiguo barrio judío de Toledo y algunos de sus rincones más escondidos. Empezarás en la Sinagoga de Santa María la Blanca, seguirás hasta el Palacio de Fuensalida y la Casa-Museo de El Greco, pasarás por el estrecho Callejón del Pozo Amargo —escenario de una leyenda de amor imposible— y terminarás en dos joyas casi secretas: la Mezquita de las Tornerías, escondida en un edificio comercial, y la Mezquita del Cristo de la Luz. Al terminar habrás visto cómo la Toledo medieval dejó su huella en calles que apenas han cambiado en 800 años.',
          kids: '¡Esta ruta es un poco secreta! 🕵️ Vas a caminar por el antiguo barrio judío de Toledo, con calles tan estrechas que casi puedes tocar las dos paredes a la vez. Verás una sinagoga preciosa, la casa donde vivió un pintor muy famoso, un callejón con una leyenda de amor triste, ¡y hasta una mezquita escondida dentro de una tienda! Al terminar sabrás encontrar secretos que casi nadie más conoce en Toledo.'
        }
      },
      {
        id: 'conventos',
        name: { adult: 'Conventos y Monasterios Escondidos', kids: '¡El Barrio de las Monjas y los Frailes! 🙏' },
        color: '#10B981',
        intro: {
          adult: 'Un recorrido tranquilo por los conventos y monasterios que todavía laten en el corazón de Toledo. Empieza en el imponente Monasterio de San Juan de los Reyes, sigue por el Convento de Santo Domingo el Antiguo y el de San Clemente, pasa por la Iglesia de San Pedro Mártir y el Monasterio de la Madre de Dios, y termina en el Convento de las Comendadoras de Santiago. Al finalizar habrás descubierto que, tras muchos de estos muros silenciosos, todavía viven comunidades religiosas activas desde hace siglos.',
          kids: '¡Esta ruta te lleva al barrio más tranquilo de Toledo! 🙏 Vas a ver varios conventos y monasterios, algunos con monjas y frailes que todavía viven dentro, como hace cientos de años. Empezarás en un monasterio enorme con cadenas colgando en su fachada, y terminarás descubriendo rincones que parecen sacados de un cuento. Al acabar sabrás que, detrás de esas paredes tan calladas, la vida sigue igual que hace siglos.'
        }
      }
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
    // Ampliados respecto a los originales ([[40.408,-3.722],[40.423,-3.697]]):
    // eran demasiado ajustados y dejaban fuera del área navegable del mapa
    // POIs reales como el Museo del Prado o el Parque del Retiro (detectado
    // por scripts/validate-data.js). Con las nuevas rutas "Paseo del Arte"
    // y "Palacio y Plaza de España" tocaba corregirlo ya.
    bounds: [[40.404, -3.723], [40.432, -3.680]],
    routes: [
      {
        id: 'main',
        name: { adult: 'Recomendaciones', kids: '¡Lo Top! 🚩' },
        color: '#F59E0B',
        intro: {
          adult: 'La ruta imprescindible de Madrid reúne sus seis grandes símbolos en un paseo corto y muy caminable. Visitarás el Palacio Real, uno de los más grandes de Europa, probarás el ambiente del Mercado de San Miguel, pisarás el kilómetro cero de España en la Puerta del Sol, cruzarás la Plaza Mayor, recorrerás la Gran Vía y terminarás junto a la Catedral de la Almudena. Al acabar tendrás una primera fotografía completa de Madrid: la capital de un imperio, convertida siglos después en una ciudad moderna y cosmopolita.',
          kids: '¡Esta es la ruta top de Madrid! 🚩 Vas a ver un palacio gigante con más de 3.000 habitaciones, un mercado lleno de comida rica, la plaza donde empiezan todas las carreteras de España, una plaza mayor preciosa y una calle enorme llena de luces y teatros. ¡Y terminarás junto a una catedral con la fachada de muchos colores! Al final habrás visto lo mejor de Madrid en un solo paseo.'
        }
      },
      {
        id: 'arte',
        name: { adult: 'Paseo del Arte', kids: '¡El Paseo de los Museos! 🎨' },
        color: '#E11D48',
        intro: {
          adult: 'El Paseo del Arte es el eje cultural más importante de España: en poco más de un kilómetro se concentran algunos de los museos más visitados del mundo. Empezarás en el Museo Thyssen-Bornemisza, seguirás por el Museo del Prado, te tomarás un respiro entre los jardines del Retiro, pasarás por la fachada vegetal del CaixaForum y terminarás en el Museo Reina Sofía, hogar del Guernica de Picasso. Al terminar habrás recorrido ocho siglos de historia del arte, del Románico a la vanguardia del siglo XX, sin salir de un mismo paseo.',
          kids: '¡Esta ruta es puro arte! 🎨 Vas a pasar por tres museos gigantes, cada uno con cuadros y tesoros distintos, un parque enorme para descansar en medio, y un edificio con una pared cubierta de plantas de verdad. Al terminar habrás visto pinturas hechas hace cientos de años y otras hechas hace muy poquito tiempo, ¡todo en el mismo paseo!'
        }
      },
      {
        id: 'austrias',
        name: { adult: 'Madrid de los Austrias', kids: '¡El Madrid Antiguo! 🏰' },
        color: '#16A34A',
        intro: {
          adult: 'Esta ruta recorre el Madrid más antiguo, el de los Austrias, con sus calles estrechas y sus plazas escondidas. Pasarás por la Iglesia de San Ginés, bajarás por la Calle Cuchilleros, llegarás a la Plaza de la Paja y los Jardines de Anglona, visitarás la basílica de San Francisco el Grande y terminarás en el castizo Mercado de la Cebada. Al terminar habrás visto el Madrid medieval y renacentista que sobrevive, casi intacto, a la sombra de la Plaza Mayor.',
          kids: '¡Esta ruta te lleva al Madrid más antiguo de todos! 🏰 Vas a caminar por calles estrechitas y empinadas, como las de un pueblo de hace cientos de años, con plazas escondidas y jardines tranquilos. Terminarás en un mercado con mucho ambiente. Al final habrás descubierto un Madrid que casi nadie ve porque está escondido detrás de la Plaza Mayor.'
        }
      },
      {
        id: 'palacio',
        name: { adult: 'Palacio y Plaza de España', kids: '¡El Barrio del Rey! 👑' },
        color: '#0EA5E9',
        intro: {
          adult: 'Una ruta por el Madrid más monumental, alrededor del Palacio Real. Empezarás en el Teatro Real, cruzarás la Plaza de Oriente y los Jardines de Sabatini, subirás hasta el Templo de Debod —un templo egipcio real, regalado a España hace más de 2.000 años—, pasarás por la Plaza de España y terminarás en el Monasterio de la Encarnación. Al terminar habrás visto cómo Madrid combina la grandeza de sus palacios con un templo egipcio original, algo que no se ve en ninguna otra capital europea.',
          kids: '¡Esta ruta es la del rey! 👑 Vas a pasar por un teatro enorme, unos jardines preciosos, ¡y hasta un templo egipcio de verdad, con miles de años, que le regalaron a España! Terminarás en un monasterio tranquilo cerca del Palacio Real. Al final sabrás que en Madrid hay un pedacito de Egipto, ¡y pocos niños lo saben!'
        }
      }
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
      {
        id: 'main',
        name: { adult: 'Recomendaciones', kids: '¡Lo Top! 🚩' },
        color: '#F59E0B',
        intro: {
          adult: 'La ruta imprescindible de Peñíscola sigue el camino natural que unió esta antigua isla a tierra firme. Empezarás en Playa Norte, entrarás por las murallas renacentistas, visitarás la Iglesia de Santa María y llegarás hasta el Castillo del Papa Luna, el último bastión de un Papa que nunca se rindió. Terminarás en la Ermita de la Virgen de la Ermitana y en El Bufador, una grieta en la roca que "respira" con el oleaje. Al acabar conocerás la historia de Peñíscola desde el mar hasta lo más alto del peñón.',
          kids: '¡Esta ruta te lleva de la playa hasta lo más alto de un castillo sobre el mar! 🏰🌊 Vas a caminar junto a murallas que frenaron a los piratas, entrar en una iglesia con el tesoro de un Papa muy testarudo, y llegar hasta su castillo. Al final escucharás una roca que respira como una ballena. ¡Sabrás por qué Peñíscola casi era una isla de verdad!'
        }
      }
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
      {
        id: 'centro',
        name: { adult: 'Centro Histórico', kids: 'Centro Histórico 🏛️' },
        color: '#E4002B',
        intro: {
          adult: 'Esta ruta recorre el corazón de la Ciudad de México, construido literalmente sobre las ruinas de Tenochtitlan. Visitarás la Catedral Metropolitana, la más grande de América, el Templo Mayor azteca excavado bajo la propia plaza, subirás a la Torre Latinoamericana —el primer rascacielos antisísmico del mundo—, entrarás en el Palacio de Bellas Artes y terminarás paseando por la Alameda Central, el parque público más antiguo de América. Al acabar habrás visto cómo la capital azteca y la ciudad colonial conviven, literalmente, una encima de la otra.',
          kids: '¡Esta ruta te lleva al centro de una ciudad que se construyó encima de otra ciudad! 🏛️🐍 Vas a ver una catedral gigante, una pirámide azteca escondida bajo tierra durante casi 500 años, subir a una torre altísima que baila en los terremotos, y visitar un palacio de mármol blanco. Al terminar sabrás que, bajo tus pies, todavía está la antigua capital de los aztecas.'
        }
      },
      {
        id: 'sur',
        name: { adult: 'Coyoacán', kids: 'Coyoacán 🎨' },
        color: '#22C55E',
        intro: {
          adult: 'Un paseo por Coyoacán, el barrio colonial donde vivieron Frida Kahlo, Diego Rivera y León Trotsky. Empezarás en el Jardín Centenario y la Parroquia de San Juan Bautista, seguirás por el animado Mercado de Coyoacán, visitarás la Casa Azul donde nació y murió Frida Kahlo, y terminarás en la casa-fortaleza donde Trotsky pasó sus últimos meses de exilio. Al acabar conocerás el barrio que marcó a algunos de los personajes más importantes del arte y la política del siglo XX.',
          kids: '¡Esta ruta te lleva al barrio de una pintora muy famosa! 🎨💙 Vas a pasar por una plaza llena de estatuas de ranas, un mercado con mil sabores, una casa pintada de azul intenso donde vivió Frida Kahlo, y una casa convertida en fortaleza de verdad, con torretas y todo. Al final sabrás por qué este barrio sigue siendo uno de los más queridos de toda la ciudad.'
        }
      },
      {
        id: 'polanco',
        name: { adult: 'Polanco · Museos', kids: 'Polanco · Museos 🦉' },
        color: '#F5A623',
        intro: {
          adult: 'Esta ruta reúne algunos de los museos más importantes de México, empezando por el único castillo de uso real de toda América: el Castillo de Chapultepec. Seguirás por el Museo Nacional de Antropología, con la Piedra del Sol como pieza estrella, y terminarás frente a frente entre dos museos privados muy distintos: el brillante Museo Soumaya y el sobrio Museo Jumex. Al acabar habrás visto, en un mismo paseo, desde un emperador del siglo XIX hasta el arte contemporáneo más actual.',
          kids: '¡Esta ruta está llena de tesoros! 🦉 Vas a subir a un castillo de verdad, donde vivió un emperador, ver la piedra azteca más famosa del mundo, y terminar entre dos museos que parecen del futuro: uno plateado y brillante, y otro blanco y muy recto. Al final habrás visto objetos de hace miles de años y arte hecho hace muy poquito tiempo.'
        }
      },
      {
        id: 'basilica',
        name: { adult: 'Basílica', kids: 'Basílica ⛪' },
        color: '#7B2D8E',
        intro: {
          adult: 'Una ruta breve pero muy especial: el santuario mariano más visitado del mundo. Visitarás la Basílica de Guadalupe, construida junto al cerro donde, según la tradición, se apareció la Virgen a Juan Diego en 1531, y subirás hasta la Capilla del Cerrito, en el punto más alto y sagrado de todo el conjunto. Al terminar conocerás el lugar que recibe a millones de peregrinos cada año, especialmente cada 12 de diciembre.',
          kids: '¡Esta ruta te lleva a uno de los lugares más visitados del mundo! ⛪🌟 Vas a ver una iglesia redonda gigantesca, y subir hasta la cima de una colina donde, cuenta la leyenda, aparecieron unas rosas mágicas. Al final sabrás por qué millones de personas vienen aquí cada año desde hace casi 500 años.'
        }
      }
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
