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
    // Insignia de ciudad (modo niño, ver STATE.game.cityBadges en app.js):
    // se gana al llegar a esta cantidad de estrellas SOLO con quizzes de
    // Toledo. Puesto en ~50% del máximo real de la ciudad (48 POIs con
    // quiz × 10 puntos = 1440 posibles), para que haga falta explorar a
    // fondo sin exigir el 100%.
    badgeThreshold: 720,
    badgeImg: 'assets/badges/toledo.png',
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
          adult: 'Esta es la ruta imprescindible de Toledo: siete paradas que resumen casi 2.000 años de historia en poco más de dos kilómetros a pie. Entrarás por la monumental Puerta de Bisagra, cruzarás la Plaza de Zocodover, subirás hasta el Alcázar y visitarás la Catedral Primada, la Iglesia de Santo Tomé y la Sinagoga del Tránsito, antes de terminar con las mejores vistas de la ciudad desde el Mirador del Valle. Al acabar entenderás por qué Toledo se llama la Ciudad de las Tres Culturas: aquí conviven, a pocos metros unas de otras, la huella musulmana, cristiana y judía. Toca cada parada en el mapa para ver la información específica de ese lugar.',
          kids: '¡Prepárate para la aventura más importante de Toledo! 🏰 Vas a pasar por una puerta gigante de hace más de 1.000 años, un castillo enorme, una catedral con vitrales de colores, una iglesia con un cuadro gigante y una sinagoga con madera traída desde muy lejos. ¡Y terminarás en un mirador con las mejores vistas de toda la ciudad! Al final sabrás por qué a Toledo la llaman la ciudad de las tres culturas. ¡Toca cada punto del mapa para descubrir todo sobre ese sitio!'
        }
      },
      {
        id: 'juderia',
        name: { adult: 'Judería y Rincones Ocultos', kids: '¡El Barrio Secreto! 🕵️' },
        color: '#8B5CF6',
        intro: {
          adult: 'Esta ruta te lleva por el antiguo barrio judío de Toledo y algunos de sus rincones más escondidos. Empezarás en la Sinagoga de Santa María la Blanca, seguirás hasta el Palacio de Fuensalida y la Casa-Museo de El Greco, pasarás por el estrecho Callejón del Pozo Amargo —escenario de una leyenda de amor imposible— y terminarás en dos joyas casi secretas: la Mezquita de las Tornerías, escondida en un edificio comercial, y la Mezquita del Cristo de la Luz. Al terminar habrás visto cómo la Toledo medieval dejó su huella en calles que apenas han cambiado en 800 años. Toca cada parada en el mapa para ver la información específica de ese lugar.',
          kids: '¡Esta ruta es un poco secreta! 🕵️ Vas a caminar por el antiguo barrio judío de Toledo, con calles tan estrechas que casi puedes tocar las dos paredes a la vez. Verás una sinagoga preciosa, la casa donde vivió un pintor muy famoso, un callejón con una leyenda de amor triste, ¡y hasta una mezquita escondida dentro de una tienda! Al terminar sabrás encontrar secretos que casi nadie más conoce en Toledo. ¡Toca cada punto del mapa para descubrir todo sobre ese sitio!'
        }
      },
      {
        id: 'conventos',
        name: { adult: 'Conventos y Monasterios Escondidos', kids: '¡El Barrio de las Monjas y los Frailes! 🙏' },
        color: '#10B981',
        intro: {
          adult: 'Un recorrido tranquilo por los conventos y monasterios que todavía laten en el corazón de Toledo. Empieza en el imponente Monasterio de San Juan de los Reyes, sigue por el Convento de Santo Domingo el Antiguo y el de San Clemente, pasa por la Iglesia de San Pedro Mártir y el Monasterio de la Madre de Dios, y termina en el Convento de las Comendadoras de Santiago. Al finalizar habrás descubierto que, tras muchos de estos muros silenciosos, todavía viven comunidades religiosas activas desde hace siglos. Toca cada parada en el mapa para ver la información específica de ese lugar.',
          kids: '¡Esta ruta te lleva al barrio más tranquilo de Toledo! 🙏 Vas a ver varios conventos y monasterios, algunos con monjas y frailes que todavía viven dentro, como hace cientos de años. Empezarás en un monasterio enorme con cadenas colgando en su fachada, y terminarás descubriendo rincones que parecen sacados de un cuento. Al acabar sabrás que, detrás de esas paredes tan calladas, la vida sigue igual que hace siglos. ¡Toca cada punto del mapa para descubrir todo sobre ese sitio!'
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
    // ~50% del máximo real de Madrid (81 POIs con quiz × 10 = 2430 posibles).
    badgeThreshold: 1200,
    badgeImg: 'assets/badges/madrid.png',
    center: [40.4169, -3.7095],
    zoom: 15.3,
    minZoom: 13,
    // Ampliados respecto a los originales ([[40.408,-3.722],[40.423,-3.697]]):
    // eran demasiado ajustados y dejaban fuera del área navegable del mapa
    // POIs reales como el Museo del Prado o el Parque del Retiro (detectado
    // por scripts/validate-data.js). Con las nuevas rutas "Paseo del Arte"
    // y "Palacio y Plaza de España" tocaba corregirlo ya.
    // Lado este ampliado de nuevo a -3.680 -> -3.677: dejaba fuera del mapa
    // un par de rincones del Retiro (Jardines de Cecilio Rodríguez, Casa de
    // Fieras) detectados con la misma validación al añadir nuevas paradas.
    bounds: [[40.404, -3.723], [40.432, -3.677]],
    routes: [
      {
        id: 'main',
        name: { adult: 'Recomendaciones', kids: '¡Lo Top! 🚩' },
        color: '#F59E0B',
        intro: {
          adult: 'La ruta imprescindible de Madrid reúne sus grandes símbolos en un paseo corto y muy caminable. Visitarás el Palacio Real, uno de los más grandes de Europa, probarás el ambiente del Mercado de San Miguel, pisarás el kilómetro cero de España en la Puerta del Sol y cruzarás la Plaza Mayor. Junto a la Catedral de la Almudena verás los restos de muralla árabe más antiguos de la ciudad, y terminarás recorriendo la Gran Vía, entre la Plaza del Callao y el Edificio Telefónica, el primer rascacielos de Europa. Al acabar tendrás una primera fotografía completa de Madrid: la capital de un imperio, convertida siglos después en una ciudad moderna y cosmopolita. Toca cada parada en el mapa para ver la información específica de ese lugar.',
          kids: '¡Esta es la ruta top de Madrid! 🚩 Vas a ver un palacio gigante con más de 3.000 habitaciones, un mercado lleno de comida rica, la plaza donde empiezan todas las carreteras de España y una plaza mayor preciosa. Junto a la catedral verás las piedras más viejas de todo Madrid, ¡de hace más de 1.100 años! Y terminarás en una calle enorme llena de luces y teatros, con el primer rascacielos que hubo en toda Europa. Al final habrás visto lo mejor de Madrid en un solo paseo. ¡Toca cada punto del mapa para descubrir todo sobre ese sitio!'
        }
      },
      {
        id: 'arte',
        name: { adult: 'Paseo del Arte', kids: '¡El Paseo de los Museos! 🎨' },
        color: '#E11D48',
        intro: {
          adult: 'El Paseo del Arte es el eje cultural más importante de España: en poco más de un kilómetro se concentran algunos de los museos más visitados del mundo. Empezarás junto a la diosa Cibeles y bajo la Puerta de Alcalá, seguirás por el Museo Thyssen-Bornemisza, el Museo del Prado y el Real Jardín Botánico, te adentrarás en el Retiro hasta el Estanque Grande y el Palacio de Cristal, pasarás por la fachada vegetal del CaixaForum y terminarás en el Museo Reina Sofía, hogar del Guernica de Picasso. Al terminar habrás recorrido ocho siglos de historia del arte, del Románico a la vanguardia del siglo XX, sin salir de un mismo paseo. Toca cada parada en el mapa para ver la información específica de ese lugar.',
          kids: '¡Esta ruta es puro arte! 🎨 Empezarás junto a una diosa de piedra y una puerta gigante, pasarás por tres museos con cuadros y tesoros distintos, un jardín con plantas de todo el mundo, y un lago del Retiro donde hace siglos un rey organizaba batallas navales de mentira. Terminarás en un edificio con una pared cubierta de plantas de verdad. Al final habrás visto pinturas hechas hace cientos de años y otras hechas hace muy poquito tiempo, ¡todo en el mismo paseo! ¡Toca cada punto del mapa para descubrir todo sobre ese sitio!'
        }
      },
      {
        id: 'austrias',
        name: { adult: 'Madrid de los Austrias', kids: '¡El Madrid Antiguo! 🏰' },
        color: '#16A34A',
        intro: {
          adult: 'Esta ruta recorre el Madrid más antiguo, el de los Austrias, con sus calles estrechas y sus plazas escondidas. Pasarás por la Iglesia de San Ginés y el barrio de La Latina, bajarás por la Calle Cuchilleros, llegarás a la Plaza de la Paja y los Jardines de Anglona, visitarás la Colegiata de San Isidro —la catedral de Madrid antes de la Almudena— y la basílica de San Francisco el Grande, subirás al mirador del Parque de las Vistillas y terminarás en el castizo Mercado de la Cebada. Al terminar habrás visto el Madrid medieval y renacentista que sobrevive, casi intacto, a la sombra de la Plaza Mayor. Toca cada parada en el mapa para ver la información específica de ese lugar.',
          kids: '¡Esta ruta te lleva al Madrid más antiguo de todos! 🏰 Vas a caminar por el barrio más castizo de la ciudad, por calles estrechitas y empinadas, como las de un pueblo de hace cientos de años, con plazas escondidas y jardines tranquilos. Visitarás la iglesia que fue catedral de Madrid antes de que existiera la Almudena, subirás a un mirador con vistas preciosas y terminarás en un mercado con mucho ambiente. Al final habrás descubierto un Madrid que casi nadie ve porque está escondido detrás de la Plaza Mayor. ¡Toca cada punto del mapa para descubrir todo sobre ese sitio!'
        }
      },
      {
        id: 'palacio',
        name: { adult: 'Palacio y Plaza de España', kids: '¡El Barrio del Rey! 👑' },
        color: '#0EA5E9',
        intro: {
          adult: 'Una ruta por el Madrid más monumental, alrededor del Palacio Real. Empezarás en el Teatro Real, cruzarás la Plaza de Oriente y los Jardines de Sabatini, subirás hasta el Templo de Debod —un templo egipcio real, regalado a España hace más de 2.000 años— y el Monumento al Dos de Mayo de 1808, visitarás el Museo Cerralbo y terminarás en la Plaza de España, el Monasterio de la Encarnación y el Palacio del Senado. Al terminar habrás visto cómo Madrid combina la grandeza de sus palacios con un templo egipcio original, algo que no se ve en ninguna otra capital europea. Toca cada parada en el mapa para ver la información específica de ese lugar.',
          kids: '¡Esta ruta es la del rey! 👑 Vas a pasar por un teatro enorme, unos jardines preciosos, ¡y hasta un templo egipcio de verdad, con miles de años, que le regalaron a España! También verás un monumento a un grupo de valientes que se enfrentaron a un ejército entero. Terminarás en una plaza con Don Quijote y Sancho Panza, un monasterio tranquilo y el edificio donde trabajan los senadores. Al final sabrás que en Madrid hay un pedacito de Egipto, ¡y pocos niños lo saben! ¡Toca cada punto del mapa para descubrir todo sobre ese sitio!'
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
    // ~50% del máximo real de Peñíscola (6 POIs con quiz × 10 = 180 posibles).
    badgeThreshold: 90,
    badgeImg: 'assets/badges/peniscola.png',
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
          adult: 'La ruta imprescindible de Peñíscola sigue el camino natural que unió esta antigua isla a tierra firme. Empezarás en Playa Norte, entrarás por las murallas renacentistas, visitarás la Iglesia de Santa María y llegarás hasta el Castillo del Papa Luna, el último bastión de un Papa que nunca se rindió. Terminarás en la Ermita de la Virgen de la Ermitana y en El Bufador, una grieta en la roca que "respira" con el oleaje. Al acabar conocerás la historia de Peñíscola desde el mar hasta lo más alto del peñón. Toca cada parada en el mapa para ver la información específica de ese lugar.',
          kids: '¡Esta ruta te lleva de la playa hasta lo más alto de un castillo sobre el mar! 🏰🌊 Vas a caminar junto a murallas que frenaron a los piratas, entrar en una iglesia con el tesoro de un Papa muy testarudo, y llegar hasta su castillo. Al final escucharás una roca que respira como una ballena. ¡Sabrás por qué Peñíscola casi era una isla de verdad! ¡Toca cada punto del mapa para descubrir todo sobre ese sitio!'
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
    // ~50% del máximo real de CDMX (19 POIs con quiz × 10 = 570 posibles).
    badgeThreshold: 290,
    badgeImg: 'assets/badges/cdmx.png',
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
          adult: 'Esta ruta recorre el corazón de la Ciudad de México, construido literalmente sobre las ruinas de Tenochtitlan. Visitarás la Catedral Metropolitana, la más grande de América, el Palacio Nacional con sus murales de Diego Rivera, el Templo Mayor azteca excavado bajo la propia plaza, subirás a la Torre Latinoamericana —el primer rascacielos antisísmico del mundo—, entrarás en el Palacio de Bellas Artes y terminarás paseando por la Alameda Central, el parque público más antiguo de América. Al acabar habrás visto cómo la capital azteca y la ciudad colonial conviven, literalmente, una encima de la otra. Toca cada parada en el mapa para ver la información específica de ese lugar.',
          kids: '¡Esta ruta te lleva al centro de una ciudad que se construyó encima de otra ciudad! 🏛️🐍 Vas a ver una catedral gigante, un palacio con una campana muy especial y pinturas gigantes, una pirámide azteca escondida bajo tierra durante casi 500 años, subir a una torre altísima que baila en los terremotos, y visitar un palacio de mármol blanco. Al terminar sabrás que, bajo tus pies, todavía está la antigua capital de los aztecas. ¡Toca cada punto del mapa para descubrir todo sobre ese sitio!'
        }
      },
      {
        id: 'sur',
        name: { adult: 'Coyoacán', kids: 'Coyoacán 🎨' },
        color: '#22C55E',
        intro: {
          adult: 'Un paseo por Coyoacán, el barrio colonial donde vivieron Frida Kahlo, Diego Rivera y León Trotsky. Empezarás en el Jardín Centenario y la Parroquia de San Juan Bautista, seguirás por el animado Mercado de Coyoacán, visitarás la Casa Azul donde nació y murió Frida Kahlo, y terminarás en la casa-fortaleza donde Trotsky pasó sus últimos meses de exilio. Al acabar conocerás el barrio que marcó a algunos de los personajes más importantes del arte y la política del siglo XX. Toca cada parada en el mapa para ver la información específica de ese lugar.',
          kids: '¡Esta ruta te lleva al barrio de una pintora muy famosa! 🎨💙 Vas a pasar por una plaza llena de estatuas de ranas, un mercado con mil sabores, una casa pintada de azul intenso donde vivió Frida Kahlo, y una casa convertida en fortaleza de verdad, con torretas y todo. Al final sabrás por qué este barrio sigue siendo uno de los más queridos de toda la ciudad. ¡Toca cada punto del mapa para descubrir todo sobre ese sitio!'
        }
      },
      {
        id: 'polanco',
        name: { adult: 'Polanco · Museos', kids: 'Polanco · Museos 🦉' },
        color: '#F5A623',
        intro: {
          adult: 'Esta ruta reúne algunos de los museos más importantes de México, empezando por el único castillo de uso real de toda América: el Castillo de Chapultepec. Seguirás por el Museo Nacional de Antropología, con la Piedra del Sol como pieza estrella, y terminarás frente a frente entre dos museos privados muy distintos: el brillante Museo Soumaya y el sobrio Museo Jumex. Al acabar habrás visto, en un mismo paseo, desde un emperador del siglo XIX hasta el arte contemporáneo más actual. Toca cada parada en el mapa para ver la información específica de ese lugar.',
          kids: '¡Esta ruta está llena de tesoros! 🦉 Vas a subir a un castillo de verdad, donde vivió un emperador, ver la piedra azteca más famosa del mundo, y terminar entre dos museos que parecen del futuro: uno plateado y brillante, y otro blanco y muy recto. Al final habrás visto objetos de hace miles de años y arte hecho hace muy poquito tiempo. ¡Toca cada punto del mapa para descubrir todo sobre ese sitio!'
        }
      },
      {
        id: 'basilica',
        name: { adult: 'Basílica', kids: 'Basílica ⛪' },
        color: '#7B2D8E',
        intro: {
          adult: 'Una ruta breve pero muy especial: el santuario mariano más visitado del mundo. Visitarás la Basílica de Guadalupe, construida junto al cerro donde, según la tradición, se apareció la Virgen a Juan Diego en 1531, recorrerás la Antigua Basílica —el templo original, hoy museo, notablemente inclinado por el hundimiento del terreno— y subirás hasta la Capilla del Cerrito, en el punto más alto y sagrado de todo el conjunto. Al terminar conocerás el lugar que recibe a millones de peregrinos cada año, especialmente cada 12 de diciembre. Toca cada parada en el mapa para ver la información específica de ese lugar.',
          kids: '¡Esta ruta te lleva a uno de los lugares más visitados del mundo! ⛪🌟 Vas a ver una iglesia redonda gigantesca, otra iglesia mucho más vieja que está clarísimamente torcida, y subir hasta la cima de una colina donde, cuenta la leyenda, aparecieron unas rosas mágicas. Al final sabrás por qué millones de personas vienen aquí cada año desde hace casi 500 años. ¡Toca cada punto del mapa para descubrir todo sobre ese sitio!'
        }
      }
    ]
  },

  berlin: {
    id: 'berlin',
    name: 'Berlín',
    country: 'Alemania',
    continent: 'Europa',
    subtitle: { adult: 'Historia, muros y memoria', kids: '¡La Ciudad del Oso y el Muro! 🐻' },
    // ~50% del máximo real de Berlín (30 POIs con quiz × 10 = 890 posibles).
    badgeThreshold: 450,
    badgeImg: 'assets/badges/berlin.png',
    center: [52.5145, 13.3888],
    zoom: 12.3,
    // Ampliados respecto a los originales ([[52.493,13.27],[52.535,13.47]]):
    // se quedaban fuera POIs reales de las rutas nuevas "Isla de los Museos"
    // y "Muro y Guerra Fría" (Mauerpark al norte, Tempelhofer Feld y Curry 36
    // al sur), igual que se corrigió antes en Madrid.
    minZoom: 11,
    bounds: [[52.468, 13.27], [52.548, 13.47]],
    routes: [
      {
        id: 'main',
        name: { adult: 'Recomendaciones', kids: '¡Lo Top! 🚩' },
        color: '#F59E0B',
        intro: {
          adult: 'La ruta imprescindible de Berlín reúne los grandes símbolos de una ciudad marcada por el siglo XX: dictadura, guerra, muro y reunificación. Empezarás en la Puerta de Brandeburgo, subirás a la cúpula de cristal del Reichstag, cruzarás el inquietante Monumento a los Judíos de Europa Asesinados y llegarás hasta Checkpoint Charlie, el paso fronterizo más famoso de la Guerra Fría. Seguirás hasta la Catedral de Berlín y el Museo de Pérgamo, en la Isla de los Museos, y terminarás con las vistas de toda la ciudad desde la Torre de Televisión de Alexanderplatz. Al ser una ruta más extensa que en otras ciudades, algunos tramos te convendrá hacerlos en metro o bus en lugar de a pie. Al acabar entenderás por qué Berlín es, quizás, la capital europea que más abiertamente convive con su propia historia. Toca cada parada en el mapa para ver la información específica de ese lugar.',
          kids: '¡Prepárate para conocer una ciudad que tiene un oso como símbolo, igual que Madrid! 🐻 Vas a pasar por una puerta gigante con un carro de oro encima, subir a una cúpula de cristal desde la que se ve todo el Parlamento, cruzar un lugar muy especial que recuerda a millones de personas, y visitar el puesto fronterizo más famoso de cuando la ciudad estaba dividida por un muro. También verás una catedral enorme, un museo con puertas gigantes de hace miles de años y una torre altísima con las mejores vistas de toda la ciudad. Como Berlín es una ciudad grande, ¡en algunos tramos os convendrá coger el metro! ¡Toca cada punto del mapa para descubrir todo sobre ese sitio!'
        }
      },
      {
        id: 'museos',
        name: { adult: 'Isla de los Museos y Centro Histórico', kids: '¡La Isla de los Tesoros! 🏛️' },
        color: '#7C3AED',
        intro: {
          adult: 'Esta ruta recorre el corazón monumental de Berlín, apenas un kilómetro y medio a pie por la Isla de los Museos —Patrimonio de la Humanidad de la UNESCO— y sus alrededores en el barrio de Mitte. Empezarás en Bebelplatz y la Neue Wache, en pleno bulevar Unter den Linden, entrarás en el Humboldt Forum, el antiguo palacio real reconstruido, y recorrerás cuatro de los cinco grandes museos de la isla: el Altes Museum, el Neues Museum (con el busto de Nefertiti), la Alte Nationalgalerie y el Bode Museum. Cruzarás después hasta los pintorescos patios de las Hackesche Höfe y el Nikolaiviertel, el barrio más antiguo de Berlín, pasarás junto al Ayuntamiento Rojo y el DDR Museum, y terminarás en la elegante plaza del Gendarmenmarkt. Al acabar habrás visto ocho siglos de historia y algunas de las colecciones de arte antiguo más importantes del mundo, todo sin salir de un mismo paseo. Toca cada parada en el mapa para ver la información específica de ese lugar.',
          kids: '¡Esta ruta te lleva a una isla llena de museos con tesoros de miles de años! 🏛️ Vas a entrar en un palacio reconstruido, ver momias y bustos egipcios antiquísimos, cuadros gigantes y hasta el mármol de un templo griego entero. Después cruzarás unos patios preciosos escondidos, pasarás por el barrio más viejo de todo Berlín, junto al ayuntamiento con la torre roja, y aprenderás cómo vivía la gente cuando Alemania estaba dividida en dos países. ¡Toca cada punto del mapa para descubrir todo sobre ese sitio!'
        }
      },
      {
        id: 'muro',
        name: { adult: 'Muro y Guerra Fría', kids: '¡La Ruta del Muro! 🧱' },
        color: '#DC2626',
        intro: {
          adult: 'Una ruta por los lugares que mejor explican cómo fue vivir en una ciudad partida en dos durante casi 30 años. Empezarás en la Topografía del Terror, sobre el antiguo cuartel general de la Gestapo y las SS, seguirás hasta la Potsdamer Platz, una plaza que renació de la nada tras pasar cuatro décadas como tierra de nadie junto al Muro. Después te convendrá coger el metro o el bus hasta el Memorial del Muro de Berlín en la calle Bernauer, el lugar que mejor conserva cómo era realmente la frontera, y hasta el cercano Mauerpark, construido literalmente sobre la antigua "franja de la muerte". Terminarás muy al este, en la East Side Gallery y el puente de Oberbaum, junto al Molecule Man, sobre el río Spree. Al acabar habrás recorrido, de punta a punta de la ciudad, la historia de un muro que dividió familias enteras y que hoy es uno de los grandes símbolos de la reunificación europea. Toca cada parada en el mapa para ver la información específica de ese lugar.',
          kids: '¡Esta ruta te cuenta la historia del muro que partió Berlín en dos durante casi 30 años! 🧱 Vas a ver el lugar donde tenía su cuartel la policía secreta más temida, una plaza que estuvo vacía durante 40 años y ahora está llena de rascacielos, y el sitio que mejor conserva cómo era el muro de verdad, con sus torres de vigilancia. Como está lejos, ¡tocará coger el metro! Terminarás junto a un trozo de muro pintado con colores y un puente precioso sobre el río. ¡Toca cada punto del mapa para descubrir todo sobre ese sitio!'
        }
      }
    ]
  },

  roma: {
    id: 'roma',
    name: 'Roma',
    country: 'Italia',
    continent: 'Europa',
    subtitle: { adult: 'La Ciudad Eterna', kids: '¡La Ciudad de los Gladiadores! ⚔️' },
    // ~50% del máximo real de Roma (cifra a ajustar cuando esté todo el
    // contenido subido; de momento estimado sobre el primer lote de POIs).
    badgeThreshold: 900,
    badgeImg: 'assets/badges/roma.png',
    center: [41.8986, 12.4768],
    zoom: 14.2,
    minZoom: 12,
    // Cubre desde Trastevere/Gianicolo (oeste) hasta el Coliseo y Terme di
    // Caracalla (este), y de esa misma zona (suroeste) a Villa Borghese/
    // Piazza del Popolo (norte). El Vaticano tiene su propia ciudad aparte
    // (ver "vaticano" más abajo), con sus propios límites de mapa.
    bounds: [[41.876, 12.448], [41.916, 12.510]],
    routes: [
      {
        id: 'main',
        name: { adult: 'Recomendaciones', kids: '¡Lo Top! 🚩' },
        color: '#F59E0B',
        intro: {
          adult: 'La ruta imprescindible de Roma reúne los grandes símbolos de casi tres mil años de historia ininterrumpida. Empezarás en el Coliseo, el anfiteatro más famoso del mundo, seguirás por el Foro Romano y el Palatino, el corazón político y el barrio residencial de la Roma antigua, y cruzarás hasta el Panteón, el edificio con cúpula de hormigón sin armar más grande jamás construido. Terminarás lanzando una moneda a la Fontana di Trevi y perdiéndote entre las columnas berninianas de Piazza Navona. Al ser una ruta extensa, algunos tramos te convendrá hacerlos en metro o a buen paso. Al acabar entenderás por qué a Roma se la llama la Ciudad Eterna: pocos lugares del mundo permiten caminar, en una sola mañana, por el Imperio, el Renacimiento y el Barroco sin salir del mismo casco urbano. Toca cada parada en el mapa para ver la información específica de ese lugar.',
          kids: '¡Prepárate para la aventura más grande de Roma! ⚔️ Vas a entrar en un anfiteatro gigante donde luchaban los gladiadores, caminar por las ruinas de la plaza más importante del Imperio Romano, y visitar un templo con una cúpula de piedra tan enorme que todavía hoy sorprende a los arquitectos. Después lanzarás una moneda a una fuente preciosa para poder volver algún día, ¡y verás una plaza con fuentes y estatuas por todas partes! Como Roma es una ciudad grande, ¡en algunos tramos os convendrá caminar rápido o coger el metro! ¡Toca cada punto del mapa para descubrir todo sobre ese sitio!'
        }
      },
      {
        id: 'antigua-roma',
        name: { adult: 'Roma Antigua e Imperial', kids: '¡El Imperio Romano! 🏛️' },
        color: '#B8411E',
        intro: {
          adult: 'Esta ruta recorre el corazón del poder de la Roma imperial, del Coliseo al Circo Máximo. Verás el Arco de Constantino, el mayor de los arcos triunfales que se conservan en la ciudad, descenderás al Circo Máximo, el hipódromo que llegó a albergar a 150.000 espectadores, y visitarás la Bocca della Verità, la boca de piedra que, según la leyenda, muerde la mano de quien miente. Terminarás en las Terme di Caracalla, unas termas públicas tan colosales que hoy acogen conciertos de ópera entre sus ruinas. Al acabar habrás recorrido a pie los mismos escenarios que vieron desfilar emperadores, gladiadores y carreras de cuadrigas hace dos mil años. Toca cada parada en el mapa para ver la información específica de ese lugar.',
          kids: '¡Esta ruta te lleva al corazón del Imperio Romano! 🏛️ Vas a ver el arco más grande de todos los que quedan en Roma, bajar hasta un hipódromo gigante donde corrían carreras de carros con caballos delante de 150.000 personas, y meter la mano en una boca de piedra que, según la leyenda, ¡muerde a quien dice mentiras! Terminarás en unas termas romanas tan enormes que hoy hacen conciertos dentro de sus ruinas. ¡Toca cada punto del mapa para descubrir todo sobre ese sitio!'
        }
      },
      {
        id: 'trastevere',
        name: { adult: 'Trastevere y la Roma Escondida', kids: '¡El Barrio Secreto del Río! 🌊' },
        color: '#10B981',
        intro: {
          adult: 'Esta ruta cruza al otro lado del Tíber, a Trastevere, el barrio más castizo y menos monumental de Roma, perfecto para perderse sin prisa. Pasarás por la Isola Tiberina, la única isla del río dentro de la ciudad, entrarás en la Basílica de Santa Maria in Trastevere, una de las iglesias más antiguas dedicadas a la Virgen, y subirás hasta el Gianicolo, un mirador con las mejores vistas de toda Roma. Al terminar habrás descubierto que, a solo unos minutos a pie de los grandes monumentos, Roma esconde callejuelas empedradas, plazas con fuentes modestas y una vida de barrio que apenas ha cambiado en siglos. Toca cada parada en el mapa para ver la información específica de ese lugar.',
          kids: '¡Esta ruta es un poco secreta! 🌊 Vas a cruzar a un barrio con calles estrechas y empedradas, pasar por la única isla que tiene el río de Roma, entrar en una de las iglesias más antiguas dedicadas a la Virgen, y subir a una colina con las mejores vistas de toda la ciudad. Al final habrás descubierto un Roma tranquilo que casi ningún turista con prisa llega a ver. ¡Toca cada punto del mapa para descubrir todo sobre ese sitio!'
        }
      }
    ]
  },

  vaticano: {
    id: 'vaticano',
    name: 'Vaticano',
    country: 'Ciudad del Vaticano',
    continent: 'Europa',
    subtitle: { adult: 'El Estado más pequeño del mundo', kids: '¡El País Más Pequeño del Mundo! 🕊️' },
    // ~50% del máximo real del Vaticano (5 POIs con quiz × 30 = 150 posibles).
    badgeThreshold: 75,
    badgeImg: 'assets/badges/vaticano.png',
    center: [41.9025, 12.4595],
    zoom: 15.6,
    minZoom: 14,
    // Desde la Plaza de San Pedro y los Museos Vaticanos (oeste) hasta el
    // Castel Sant'Angelo y su puente (este), separado de Roma como ciudad
    // propia por tratarse literalmente de otro país.
    bounds: [[41.898, 12.449], [41.907, 12.470]],
    routes: [
      {
        id: 'main',
        name: { adult: 'Recomendaciones', kids: '¡Lo Top! 🚩' },
        color: '#F5C518',
        intro: {
          adult: 'La ruta imprescindible del Vaticano recorre el Estado más pequeño del mundo, apenas 0,44 km² con más historia y arte por metro cuadrado que casi cualquier otro lugar del planeta. Empezarás en la Plaza de San Pedro, abrazada por la columnata de Bernini, entrarás en la Basílica de San Pedro, el templo católico más grande del mundo, y visitarás los Museos Vaticanos y la Capilla Sixtina, con el techo pintado por Miguel Ángel. Terminarás cruzando hacia el Castel Sant\'Angelo, el antiguo mausoleo de Adriano convertido en fortaleza papal, y el Ponte Sant\'Angelo, decorado con ángeles de Bernini. Al acabar habrás visto cómo, en apenas un kilómetro, conviven la sede de la Iglesia católica, una de las mayores colecciones de arte del mundo y un mausoleo imperial romano reconvertido en fortaleza. Toca cada parada en el mapa para ver la información específica de ese lugar.',
          kids: '¡Esta ruta te lleva al país más pequeño del mundo entero! 🕊️ Vas a entrar en la iglesia más grande de todo el planeta, visitar un museo con un techo pintado a mano que tardó años en terminarse, y cruzar hasta un castillo que antes fue la tumba de un emperador romano, pasando por un puente con estatuas de ángeles. Al final habrás visto en un solo paseo la iglesia más grande del mundo y algunas de las obras de arte más famosas de la historia. ¡Toca cada punto del mapa para descubrir todo sobre ese sitio!'
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
      `Presenta ${pick(p.name, 'kids')} a un niño de 8 años: qué es, por qué mola, dos o tres datos súper curiosos y una mini-challenge interactiva que pueda hacer allí. Unas 190-220 palabras (equivalente a un minuto largo hablado, igual de largo que la versión de adultos). Usa emojis y tono divertido, no lo resumas demasiado.`
  },
  options: [
    {
      id: 'secret-history',
      label: { adult: 'Historia secreta', kids: 'Historia secreta' },
      prompt: {
        adult: (p, cityName) =>
          `Cuéntame con detalle una historia poco conocida, oscura o inesperada sobre ${pick(p.name, 'adult')} (${cityName}). Asegúrate de que sea un episodio real, poco divulgado, y desarróllalo en varios párrafos con contexto. Unas 190-220 palabras. Añade una frase final con la fuente histórica más fiable si la conoces.`,
        kids: (p) =>
          `¡Cuéntame con muchos detalles el secreto más chulo y misterioso de ${pick(p.name, 'kids')}! 😱 Pero que NO dé miedo, que sea de aventuras o magia. Unas 190-220 palabras (tan largo como para un adulto). Termina con un mini-juego: "¿Te atreves a buscar... allí?"`
      }
    },
    {
      id: 'architecture',
      label: { adult: 'Arquitectura', kids: 'Trucos de arquitectura' },
      prompt: {
        adult: (p, cityName) =>
          `Analiza en profundidad la arquitectura de ${pick(p.name, 'adult')} como si fueras un guía especializado: estilo, material estrella, dimensión poco visible (bóvedas, cimentación, simetrías ocultas) y por qué esta obra es única frente a otras de ${cityName}. Unas 190-220 palabras, en varios párrafos.`,
        kids: (p) =>
          `Explícame con detalle los TRUCOS DE INGENIERO que usaron los constructores de ${pick(p.name, 'kids')} para que no se cayera en mil años! 🛠️ Menciona varias cosas que pueda ver con sus ojos. Unas 190-220 palabras (tan largo como para un adulto). Termina con un reto de observación.`
      }
    },
    {
      id: 'legends',
      label: { adult: 'Leyendas', kids: 'Leyendas divertidas' },
      prompt: {
        adult: (p, cityName) =>
          `Narra con detalle la leyenda más antigua y verosímil asociada a ${pick(p.name, 'adult')} de ${cityName}, citando su origen documental si existe. Desarróllala en varios párrafos. Unas 190-220 palabras. Termina con tu interpretación: ¿qué hecho real pudo inspirarla?`,
        kids: (p) =>
          `¡Cuéntame con muchos detalles una leyenda superchula de ${pick(p.name, 'kids')} con personajes mágicos (reyes, hadas, animales parlanchines)! 🧚 Sin miedo. Unas 190-220 palabras (tan larga como para un adulto). Termina con una moraleja corta y divertida.`
      }
    }
  ],
  deepenLabel: { adult: 'Profundiza más', kids: '¡Cuéntame más!' },
  resetLabel: { adult: 'Ver otros temas', kids: '¡Otras sorpresas!' },
  deepen: {
    adult: (p, topicLabel) =>
      `Sigue profundizando sobre ${topicLabel} en ${pick(p.name, 'adult')}. Da dos datos nuevos, más concretos y menos conocidos que no hayas mencionado antes, sin repetirte, desarrollados con detalle. Unas 150-180 palabras.`,
    kids: (p, topicLabel) =>
      `¡Sigue contándome más sobre ${topicLabel} en ${pick(p.name, 'kids')}! Dos datos nuevos y flipantes que no hayas contado antes 🤩, con detalles. Unas 150-180 palabras (tan largo como para un adulto). Termina con una pregunta para que quiera saber más.`
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
