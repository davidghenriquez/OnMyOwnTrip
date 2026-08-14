// Datos de Madrid — cargado bajo demanda por app.js (loadCityData) al elegir esta ciudad.
CITIES.madrid.pois = [
      {
        id: 'palacio-real',
        name: {
          adult: 'Palacio Real de Madrid',
          kids: 'Palacio Real de Madrid — El Palacio de las Mil Puertas 👑'
        },
        subtitle: {
          adult: 'El palacio real en uso más grande de Europa Occidental',
          kids: '¡Un palacio con más de 3.000 habitaciones!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'main', order: 5 },
        coords: [40.4180, -3.7144],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Palacio_Real_de_Madrid_Julio_2016_%28cropped%29.jpg/330px-Palacio_Real_de_Madrid_Julio_2016_%28cropped%29.jpg',
        audio: {
          duration: 175,
          title: {
            adult: 'Audioguía: Palacio Real de Madrid',
            kids: '¡Aventura Sonora: El Palacio de las Mil Puertas!'
          }
        },
        visitInfo: {
          hours: {
            adult: 'Octubre a marzo 10:00-18:00; abril a septiembre 10:00-19:00. Última entrada una hora antes del cierre.',
            kids: 'Abre todos los días, por la mañana y por la tarde.'
          },
          price: {
            adult: 'Entre 8€ y 17€ según qué zonas visites (Real Armería, Jardines del Campo del Moro). Gratis para menores de 5 años, docentes, desempleados y personas con discapacidad.',
            kids: 'Entre 8€ y 17€, según cuánto quieras ver. ¡Gratis si tienes menos de 5 años!'
          },
          link: 'https://tickets.patrimonionacional.es/es/tickets/palacio-real-de-madrid'
        },
        tabs: {
          history: {
            adult: 'El Alcázar medieval que ocupaba este lugar ardió la Nochebuena de 1734, y Felipe V encargó un palacio nuevo al arquitecto italiano Filippo Juvarra, que murió antes de empezar las obras. Su discípulo Giovanni Battista Sacchetti heredó el proyecto en 1737 y lo redujo drásticamente, elevando de tres a seis plantas lo que Juvarra había pensado como una construcción horizontal inspirada en Versalles. Las obras, iniciadas en 1738, no terminaron hasta 1764, ya con Carlos III en el trono, y arquitectos españoles como Francesco Sabatini y Ventura Rodríguez completaron los interiores.',
            kids: '¡Este palacio se construyó porque el castillo antiguo se quemó en la Nochebuena de 1734! 🔥 El rey encargó uno nuevo a un arquitecto italiano, pero él murió antes de empezar, así que su alumno terminó el diseño... ¡y lo hizo mucho más alto de lo planeado! Tardaron casi 30 años en construirlo entero.'
          },
          legends: {
            adult: 'En 1738, mientras se construía el palacio, la reina Isabel de Farnesio tuvo una pesadilla: soñó que un terremoto arrasaba Madrid y que ella moría aplastada bajo una de las 108 estatuas de reyes españoles que iban a coronar la fachada. El sueño la angustió tanto que ordenó retirar todas las estatuas antes de colocarlas. Se guardaron durante más de un siglo —algunas acabaron en la Plaza de Oriente y otras en distintas ciudades españolas— y nunca llegaron a coronar el palacio tal como se había proyectado.',
            kids: '¡La reina tuvo un sueño rarísimo! Soñó que un terremoto tiraba al suelo unas estatuas gigantes de reyes que iban a poner encima del palacio, y que una le caía encima 😱. Se asustó tanto que mandó guardar TODAS las estatuas antes de ponerlas. ¡Por eso el palacio no tiene esas estatuas arriba, como se había planeado al principio!'
          },
          architecture: {
            adult: 'Sacchetti proyectó una planta cuadrada alrededor de un patio central, con cuatro torres en las esquinas que recuerdan a las fortalezas tradicionales, sobre un potente basamento almohadillado de piedra de Colmenar. Con más de 135.000 metros cuadrados y 3.418 habitaciones, es el palacio real en uso más grande de Europa Occidental, por delante de Versalles o Buckingham, aunque la familia real española no vive aquí: se reserva para actos oficiales y recepciones de Estado.',
            kids: '¡Este palacio tiene más de 3.000 habitaciones! 🚪 Es tan grande que ni los reyes de España viven aquí normalmente — solo lo usan para fiestas importantes y para recibir a otros jefes de estado. Fíjate en las cuatro torres de las esquinas, ¡parecen un castillo de cuento!'
          }
        },
        // Prototipo de gamificación para modo niño (ver conversación): una
        // pregunta de selección simple por tema, con el dato real como
        // "revelación" tras responder. Solo este POI la tiene por ahora,
        // a la espera de validar el formato antes de escribirlas para más.
        quiz: {
          'secret-history': {
            question: '¿Por qué se construyó este palacio nuevo?',
            options: [
              'Porque el castillo antiguo se quemó una Nochebuena',
              'Porque un rey quería una casa más grande para sus hijos',
              'Porque lo pidió el Papa de Roma'
            ],
            correct: 0,
            reveal: 'El castillo antiguo se quemó la Nochebuena de 1734 🔥. El arquitecto que lo iba a construir murió antes de empezar, así que terminó el diseño su alumno... ¡y lo hizo mucho más alto de lo planeado!'
          },
          'legends': {
            question: '¿Por qué el palacio no tiene, como se planeó al principio, estatuas de reyes en lo más alto?',
            options: [
              'Un pájaro gigante se las llevó volando',
              'La reina soñó que una le caía encima en un terremoto',
              'No quedó dinero para subirlas'
            ],
            correct: 1,
            reveal: '¡La reina tuvo un sueño rarísimo! Soñó que un terremoto tiraba las 108 estatuas de reyes y una le caía encima 😱. Mandó guardarlas todas antes de colocarlas: algunas acabaron en la Plaza de Oriente.'
          },
          'architecture': {
            question: '¿Cuántas habitaciones tiene aproximadamente este palacio?',
            options: ['Unas 30', 'Unas 300', 'Más de 3.000'],
            correct: 2,
            reveal: '¡Más de 3.000 habitaciones! 🚪 Es tan grande que ni los reyes de España viven aquí normalmente, solo lo usan para actos oficiales importantes.'
          },
          'construction-time': {
            question: '¿Cuántos años tardaron en construir el palacio entero?',
            options: ['Unos 5 años', 'Unos 15 años', '¡Casi 30 años!'],
            correct: 2,
            reveal: '¡Casi 30 años! 🏗️ Empezaron las obras en 1738 y no las terminaron hasta 1764. Para cuando lo acabaron, ¡ya reinaba un rey distinto al que lo había encargado!'
          },
          'palace-size': {
            question: '¿Verdad o mentira: este palacio es incluso más grande que el famoso Palacio de Versalles, en Francia?',
            options: ['¡Verdad, es más grande!', 'Mentira, Versalles es más grande', 'Miden exactamente lo mismo'],
            correct: 0,
            reveal: '¡Es verdad! 🏆 Con más de 3.000 habitaciones, el Palacio Real de Madrid es el palacio en uso más grande de toda Europa Occidental, por delante de Versalles y hasta del palacio de Buckingham en Londres.'
          },
          'royal-family': {
            question: '¿Vive el Rey de España en este palacio ahora mismo?',
            options: ['Sí, duerme aquí cada noche', 'No, solo lo usan para actos y fiestas importantes', 'Solo los fines de semana'],
            correct: 1,
            reveal: '¡No! Aunque es su palacio oficial, la familia real no vive aquí en el día a día: es tan grande que solo se usa para recibir a otros jefes de estado y celebrar actos muy importantes. 👑'
          }
        }
      },
      {
        id: 'mercado-san-miguel',
        name: {
          adult: 'Mercado de San Miguel',
          kids: 'Mercado de San Miguel — ¡El Mercado de Hierro y Sabores! 🍤'
        },
        subtitle: {
          adult: 'El último mercado de hierro de Madrid',
          kids: 'Tapas del mundo bajo un techo antiguo'
        },
        category: CATEGORIES.GASTRONOMY,
        essential: { route: 'main', order: 3 },
        coords: [40.4153, -3.7092],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Mercado_de_San_Miguel_2025.jpg/330px-Mercado_de_San_Miguel_2025.jpg',
        audio: {
          duration: 150,
          title: {
            adult: 'Audioguía: Mercado de San Miguel',
            kids: '¡Aventura Sonora: El Mercado de Hierro y Sabores!'
          }
        },
        tabs: {
          history: {
            adult: 'En este solar hubo antes una iglesia parroquial, San Miguel de los Octoes, derribada a principios del siglo XIX. En su lugar se instaló un mercado al aire libre que no se cubrió hasta 1916, cuando se inauguró la actual estructura de hierro, inspirada en los mercados parisinos de la época. Fue el último de los grandes mercados de hierro de Madrid en sobrevivir, tras la desaparición de los de la Cebada y los Mostenses. En 2009 se reconvirtió en mercado gourmet, el primero de su tipo en España.',
            kids: '¡Antes de ser un mercado, aquí había una iglesia muy antigua! La derribaron hace muchísimo tiempo, y en su lugar pusieron un mercado. En 1916 le pusieron este techo de hierro tan bonito, ¡y es el único que queda de esa época en todo Madrid!'
          },
          legends: {
            adult: 'El mercado linda con la Plaza Mayor, escenario durante los siglos XVII y XVIII de ejecuciones públicas —ahorcamientos frente a la Casa de la Panadería, decapitaciones junto a la antigua Casa de la Carnicería—. Tras un incendio en 1631, empezaron a circular historias de apariciones nocturnas entre los soportales, alimentadas durante generaciones por vecinos y comerciantes de la zona.',
            kids: '¡Al lado de este mercado está la Plaza Mayor, que tiene un pasado muy misterioso! Hace muchísimos años pasaban cosas serias allí, y desde entonces la gente cuenta que por las noches, entre las columnas de la plaza, a veces se oyen ruidos raros que nadie sabe explicar 👻.'
          },
          architecture: {
            adult: 'Es el único mercado de estructura íntegramente metálica que se conserva en Madrid: columnas de fundición, una nave diáfana y una llamativa crestería de cerámica que remata la cubierta, un detalle decorativo típico de la arquitectura de hierro de principios del siglo XX. Bajo la planta principal se conserva un sótano que originalmente se usaba como almacén y cámara frigorífica para los puestos de pescado y carne.',
            kids: '¡Fíjate en las columnas de metal y en el techo! Son de hierro, como los mercados antiguos de París. Arriba del todo hay una especie de cresta de cerámica decorada, ¡como si fuera la cresta de un gallo pero hecha de azulejos!'
          }
        }
      },
      {
        id: 'puerta-del-sol-madrid',
        name: {
          adult: 'Puerta del Sol',
          kids: 'Puerta del Sol — La Plaza del Kilómetro Cero 🐻'
        },
        subtitle: {
          adult: 'El kilómetro cero de España',
          kids: '¡Aquí empiezan todas las carreteras!'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'main', order: 1 },
        coords: [40.4169, -3.7035],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/MADRID_100206_UDCI_023.jpg/330px-MADRID_100206_UDCI_023.jpg',
        audio: {
          duration: 160,
          title: {
            adult: 'Audioguía: Puerta del Sol',
            kids: '¡Aventura Sonora: La Plaza del Kilómetro Cero!'
          }
        },
        tabs: {
          history: {
            adult: 'La Real Casa de Correos, el edificio más antiguo de la plaza, se construyó a finales del siglo XVIII. Su torre del reloj se inauguró en 1866 con un mecanismo regalado a la ciudad por el relojero leonés José Rodríguez Losada. Desde entonces, sus campanadas marcan cada Nochevieja la tradición de comer las doce uvas de la suerte, seguida en directo por toda España. Frente a la fachada, una placa señala el Kilómetro 0, el punto desde el que se miden todas las carreteras radiales del país desde 1950.',
            kids: '¡Aquí está el reloj más famoso de España! 🕐 Cada Nochevieja, millones de personas ven por la tele cómo suena doce veces mientras todo el mundo come una uva por cada campanada. En el suelo, delante del edificio, hay una placa que marca el Kilómetro 0: ¡el punto de partida de todas las carreteras del país!'
          },
          legends: {
            adult: 'En una esquina de la plaza se alza la estatua de El Oso y el Madroño, obra del escultor Antonio Navarro Santafé inaugurada en 1967, que representa el escudo heráldico de Madrid. Aunque hoy parece solo un punto de encuentro popular para citas, el oso y el madroño ya aparecían en el sello del concejo madrileño desde la Edad Media, como símbolo de los terrenos de caza y bosques que rodeaban la villa.',
            kids: '¿Ves esa estatua de un oso subido a un árbol? 🐻🌳 ¡Es el símbolo de Madrid desde hace muchísimos años, desde la Edad Media! El árbol se llama madroño y da unas frutitas rojas que le encantan a los osos. Es un lugar perfecto para quedar con amigos.'
          },
          architecture: {
            adult: 'La Real Casa de Correos combina un estilo neoclásico sobrio con la torre del reloj como único elemento vertical destacado de toda la plaza. La remodelación de 2022-2023 rediseñó el pavimento del Kilómetro 0, rodeando la placa original de 2009 con una rosa de los vientos que señala los nombres de todas las capitales de provincia y ciudades autónomas de España.',
            kids: '¡Busca la rosa de los vientos en el suelo! Es un dibujo con los nombres de todas las capitales de España alrededor de la placa del Kilómetro 0. La pusieron hace pocos años, cuando arreglaron toda la plaza.'
          }
        }
      },
      {
        id: 'museo-prado',
        name: {
          adult: 'Museo Nacional del Prado',
          kids: 'Museo Nacional del Prado — El Palacio de los Cuadros Mágicos 🖼️'
        },
        subtitle: {
          adult: 'Una de las mejores pinacotecas del mundo',
          kids: '¡Miles de cuadros famosísimos bajo un mismo techo!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'arte', order: 2 },
        coords: [40.4139, -3.6922],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Museo_del_Prado_2016_%2825185969599%29.jpg/330px-Museo_del_Prado_2016_%2825185969599%29.jpg',
        audio: {
          duration: 178,
          title: {
            adult: 'Audioguía: Museo del Prado',
            kids: '¡Aventura Sonora: El Palacio de los Cuadros Mágicos!'
          }
        },
        visitInfo: {
          hours: {
            adult: 'Lunes a sábado 10:00-20:00, domingos y festivos 10:00-19:00.',
            kids: 'Abre todos los días, por la mañana y hasta bien entrada la tarde.'
          },
          price: {
            adult: '15€ general, 7,50€ reducida. Gratis lunes a sábado de 18:00 a 20:00 y domingos/festivos de 17:00 a 19:00; siempre gratis para menores de 18 años.',
            kids: '15€, ¡pero es gratis si tienes menos de 18 años! También es gratis un ratito antes de cerrar cada día.'
          },
          link: 'https://entradas.museodelprado.es/'
        },
        tabs: {
          history: {
            adult: 'Inaugurado el 19 de noviembre de 1819 con apenas 311 cuadros de las colecciones reales, el edificio neoclásico de Juan de Villanueva se había proyectado originalmente como Gabinete de Historia Natural, y solo por iniciativa de la reina María Isabel de Braganza terminó convirtiéndose en museo de pintura. Hoy reúne obras maestras de Velázquez, Goya, El Greco, Tiziano y Rubens, entre muchos otros.',
            kids: '¡Este museo abrió hace más de 200 años con solo 311 cuadros! El edificio en realidad se construyó para guardar plantas y animales de ciencia, no cuadros, ¡pero una reina decidió que sería mejor usarlo para arte!'
          },
          legends: {
            adult: 'En 1873, el nuevo dueño de la casa de campo de Goya —conocida como la Quinta del Sordo, llamada así por un propietario anterior sordo, en una curiosa coincidencia con la propia sordera del pintor— decidió arrancar de las paredes las célebres Pinturas Negras que Goya había pintado directamente sobre el yeso. Mediante la delicada técnica del estrappo, un restaurador del propio Prado las trasladó a lienzo, permitiendo que hoy puedan verse en el museo tal como Goya las concibió, aunque nunca pensadas para ser expuestas.',
            kids: '¡Un pintor muy famoso, Goya, pintó unos cuadros GIGANTES directamente sobre las paredes de su propia casa! Años después, alguien tuvo que despegarlos con muchísimo cuidado para poder traerlos aquí. ¡Imagina despegar una pintura entera de una pared sin romperla!'
          },
          architecture: {
            adult: 'El edificio de Villanueva, uno de los ejemplos más depurados del neoclasicismo español, se organiza en tres cuerpos diferenciados originalmente destinados a distintos fines científicos, hoy reconvertidos en salas de exposición. Sus fachadas de piedra granítica, con pórticos jónicos y dóricos, reflejan el ideal ilustrado de un edificio dedicado al conocimiento, aunque acabara consagrado a la pintura en lugar de a las ciencias naturales.',
            kids: '¡Fíjate en las columnas de piedra de la entrada! El edificio iba a ser para guardar animales y plantas de estudio, por eso es tan grande y con tantas salas — ¡perfecto para guardar en su lugar miles de cuadros!'
          }
        }
      },
      {
        id: 'jardin-botanico-madrid',
        name: {
          adult: 'Real Jardín Botánico',
          kids: 'Real Jardín Botánico — El Bosque de las Mil Plantas 🌿'
        },
        subtitle: {
          adult: 'Miles de especies vegetales junto al Prado',
          kids: '¡Un jardín con plantas de todo el mundo, justo al lado del museo!'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'arte', order: 3 },
        coords: [40.4111, -3.6917],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/RJB_-_Puerta_Real_%28Madrid%29_01.jpg/330px-RJB_-_Puerta_Real_%28Madrid%29_01.jpg',
        audio: {
          duration: 160,
          title: {
            adult: 'Audioguía: Real Jardín Botánico',
            kids: '¡Aventura Sonora: El Bosque de las Mil Plantas!'
          }
        },
        tabs: {
          history: {
            adult: 'Fundado en 1755 por el rey Fernando VI junto al río Manzanares, el Real Jardín Botánico se trasladó en 1781, por orden de Carlos III, a su ubicación actual junto al Paseo del Prado, dentro del gran proyecto ilustrado del "Salón del Prado" que incluía también el propio Museo del Prado y el Observatorio Astronómico. Concebido como centro científico para catalogar y aclimatar las especies traídas de las expediciones botánicas a América, hoy conserva un herbario con más de un millón de pliegos.',
            kids: '¡Este jardín tiene más de 270 años y lo mandó construir un rey para estudiar plantas! Primero estaba en otro sitio, junto a un río, pero lo trasladaron aquí, justo al lado de donde después se construyó el Museo del Prado. Aquí llegaban plantas traídas en barco desde América para estudiarlas.'
          },
          legends: {
            adult: 'Entre sus tesoros se conserva parte del herbario original de expediciones botánicas del siglo XVIII a Nueva Granada, Perú y Chile, financiadas por la Corona para localizar plantas medicinales y de valor comercial; se cuenta que algunos de los botánicos que participaron en aquellos viajes de años de duración jamás regresaron a España, y que sus colecciones llegaron a Madrid mucho después que ellos mismos, a bordo de barcos distintos. El jardín conserva también varios árboles centenarios catalogados como Monumento Natural, supervivientes de los primeros años del jardín en su ubicación actual.',
            kids: '¡Guardan aquí plantas secas de expediciones que viajaron a América hace más de 200 años, buscando plantas medicinales! Algunos de los científicos que fueron a buscarlas tardaron muchísimos años en volver, ¡y algunos ni siquiera llegaron a regresar! Hay árboles aquí que tienen más de 200 años y están protegidos como si fueran monumentos.'
          },
          architecture: {
            adult: 'Diseñado por los arquitectos Francesco Sabatini y Juan de Villanueva —el mismo que proyectó el edificio del Prado—, el jardín se organiza en tres terrazas escalonadas que salvan el desnivel hasta la calle Alfonso XII, cada una con un trazado distinto: el Cuadro de la Escuela Botánica, el Plano de Flores y el Jardín de Bonpland. Su acceso principal, la Puerta Real, es una verja monumental de estilo neoclásico realizada en 1781, considerada una de las más elegantes de todo Madrid.',
            kids: '¡Está construido en tres niveles como una escalera gigante, cada uno con un tipo distinto de jardín! La entrada principal tiene una verja de hierro preciosa que se hizo hace más de 240 años. El mismo arquitecto que diseñó el Museo del Prado ayudó también a diseñar este jardín.'
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Qué rey trasladó el Real Jardín Botánico a su ubicación actual, junto al Prado?',
            options: ['Carlos III', 'Felipe II', 'Alfonso XII'],
            correct: 0,
            reveal: '¡Carlos III! 🌿 Lo trasladó aquí en 1781, dentro de su gran proyecto ilustrado del Paseo del Prado.'
          },
          legends: {
            question: '¿De dónde venían muchas de las plantas que se estudiaron aquí en el siglo XVIII?',
            options: ['De expediciones botánicas a América', 'De jardines franceses', 'De invernaderos de Rusia'],
            correct: 0,
            reveal: '¡De expediciones botánicas a América! 🌎 Viajes de años de duración en busca de plantas medicinales y comerciales.'
          },
          architecture: {
            question: '¿Cómo se llama la verja monumental de la entrada principal del jardín?',
            options: ['La Puerta Real', 'La Puerta del Sol', 'La Puerta Verde'],
            correct: 0,
            reveal: '¡La Puerta Real! 🚪 Una verja neoclásica de 1781, considerada una de las más elegantes de Madrid.'
          }
        }
      },
      {
        id: 'parque-retiro',
        name: {
          adult: 'Parque de El Retiro',
          kids: 'Parque de El Retiro — El Parque del Ángel Malo 😈'
        },
        subtitle: {
          adult: 'El gran pulmón verde histórico de Madrid',
          kids: '¡Tiene una estatua del diablo, única en el mundo!'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'arte', order: 4 },
        coords: [40.4150, -3.6839],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Palacio_de_Cristal.jpg/330px-Palacio_de_Cristal.jpg',
        audio: {
          duration: 165,
          title: {
            adult: 'Audioguía: Parque de El Retiro',
            kids: '¡Aventura Sonora: El Parque del Ángel Malo!'
          }
        },
        tabs: {
          history: {
            adult: 'Los jardines nacieron en 1630 por iniciativa del valido Gaspar de Guzmán, conde-duque de Olivares, quien impulsó la construcción de un gran palacio de recreo para Felipe IV: el Palacio del Buen Retiro, obra del arquitecto Alonso Carbonel. Tras el incendio del Alcázar en 1734, llegó a servir como residencia oficial de los primeros Borbones, pero perdió protagonismo tras la apertura del actual Palacio Real en 1764. Del antiguo palacio apenas sobreviven hoy el Casón del Buen Retiro y el Salón de Reinos.',
            kids: '¡Este parque empezó siendo el jardín de un palacio de recreo para un rey, hace casi 400 años! El palacio de verdad casi ha desaparecido, pero el parque que lo rodeaba sigue siendo uno de los más bonitos de España.'
          },
          legends: {
            adult: 'En la Glorieta del Ángel Caído se alza una escultura de 1885 obra de Ricardo Bellver que representa al ángel expulsado del Paraíso: es uno de los pocos monumentos públicos del mundo dedicados expresamente al demonio. Una curiosidad añadida, puramente geográfica, alimenta su fama esotérica: la rotonda se encuentra a 666 metros de altitud sobre el nivel del mar, la misma altura media de toda la ciudad de Madrid.',
            kids: '¡Hay una estatua del diablo en este parque, algo rarísimo de ver en cualquier ciudad del mundo! Está en un sitio que, por pura casualidad, tiene una altura con el número 666. ¿Te atreves a ir a verla?'
          },
          architecture: {
            adult: 'Entre sus elementos más destacados sobresale el Palacio de Cristal, una estructura de hierro y vidrio construida en 1887 para exponer flora y fauna de Filipinas, inspirada en el Palacio de Cristal de Londres. Junto al Estanque Grande, existente ya desde tiempos de Felipe II, se alza el monumento a Alfonso XII, un gran hemiciclo de columnas rematado por una estatua ecuestre del monarca.',
            kids: '¡El Palacio de Cristal es casi todo de vidrio, como un gran invernadero brillante! Se construyó para enseñar plantas y animales de un lugar muy lejano, Filipinas. Al lado hay un estanque enorme donde puedes alquilar una barca.'
          }
        }
      },
      {
        id: 'plaza-mayor-madrid',
        name: {
          adult: 'Plaza Mayor',
          kids: 'Plaza Mayor — La Plaza del Rey a Caballo 🐴'
        },
        subtitle: {
          adult: 'El corazón monumental del Madrid de los Austrias',
          kids: '¡Una plaza que se ha incendiado tres veces!'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'main', order: 2 },
        coords: [40.4155, -3.7074],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Plaza_Mayor_de_Madrid_06.jpg/330px-Plaza_Mayor_de_Madrid_06.jpg',
        audio: {
          duration: 155,
          title: {
            adult: 'Audioguía: Plaza Mayor',
            kids: '¡Aventura Sonora: La Plaza del Rey a Caballo!'
          }
        },
        tabs: {
          history: {
            adult: 'Felipe II encargó a Juan de Herrera transformar este espacio, y en 1619, bajo Felipe III, Juan Gómez de Mora terminó de darle su fisonomía definitiva. Ha sufrido tres grandes incendios (1631, 1672 y 1790); tras el último, el arquitecto Juan de Villanueva la reconstruyó respetando el trazado original, aunque redujo la altura de los edificios de cinco a tres plantas. Durante siglos acogió corridas de toros, representaciones teatrales, autos de fe de la Inquisición e incluso ejecuciones públicas, todo ello presenciado desde los balcones.',
            kids: '¡Esta plaza se ha quemado tres veces a lo largo de su historia! Cada vez la reconstruyeron. Hace muchos siglos aquí se hacían fiestas, obras de teatro ¡y hasta corridas de toros, todo en la misma plaza!'
          },
          legends: {
            adult: 'La estatua ecuestre de Felipe III que preside la plaza desde 1848 tuvo una vida itinerante: fue esculpida originalmente por Juan de Bolonia y Pietro Tacca para colocarse en la Casa de Campo, y solo llegó a su emplazamiento actual dos siglos después de su fundición, por decisión de la reina Isabel II.',
            kids: '¡La estatua del rey a caballo que ves en el medio de la plaza estuvo primero en otro sitio totalmente distinto durante 200 años, antes de que la trajeran aquí! Imagina una estatua tan pesada mudándose de casa.'
          },
          architecture: {
            adult: 'La Casa de la Panadería, el edificio más emblemático de la plaza, luce desde 1992 una espectacular fachada pintada al fresco por Carlos Franco, con un programa mitológico propio poblado de dioses clásicos como Cibeles y personajes inventados por el propio pintor. La plaza, de planta rectangular y soportales continuos, conserva 237 balcones que antiguamente se alquilaban para presenciar los espectáculos que allí se celebraban.',
            kids: '¡Mira la fachada llena de colores del edificio del fondo! Está pintada con dioses y personajes inventados, pintada hace poco más de 30 años. Cuenta los balcones que puedas ver — ¡hay más de 200 en toda la plaza!'
          }
        }
      },
      {
        id: 'gran-via',
        name: { adult: 'Gran Vía', kids: 'Gran Vía — La Avenida de los Rascacielos 🏙️' },
        subtitle: {
          adult: 'El Broadway madrileño, escaparate de un siglo de arquitectura',
          kids: '¡Una avenida que tardó 21 años en construirse entera!'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'main', order: 8 },
        coords: [40.420438, -3.706293],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Callao_%2B_Capitol_%2B_Gran_V%C3%ADa_%28Madrid%29_%2823815769052%29.jpg/330px-Callao_%2B_Capitol_%2B_Gran_V%C3%ADa_%28Madrid%29_%2823815769052%29.jpg',
        audio: { duration: 155, title: { adult: 'Audioguía: Gran Vía', kids: '¡Aventura Sonora: La Avenida de los Rascacielos!' } },
        tabs: {
          history: {
            adult: 'Sus obras comenzaron el 4 de abril de 1910, cuando Alfonso XIII rompió simbólicamente el primer muro con una piqueta de plata, iniciando la demolición de cientos de viviendas del trazado medieval. Se construyó en tres tramos sucesivos a lo largo de 21 años: el primero, de influencia francesa; el segundo, hasta Callao, de inspiración estadounidense; y el tercero, hasta Plaza de España, ya en pleno estilo art déco. La obra no se dio por concluida hasta 1931.',
            kids: '¡Esta avenida tardó 21 años en construirse entera! Empezó un rey rompiendo una pared con un pico de plata. Se hizo en tres partes distintas, cada una con un estilo de edificios diferente. ¡Fíjate cómo cambian las fachadas según caminas!'
          },
          legends: {
            adult: 'Durante la Guerra Civil, la Gran Vía sufrió intensos bombardeos dirigidos especialmente contra el edificio Telefónica, utilizado como puesto de observación. Los madrileños la rebautizaron entonces como "la avenida de los obuses", en referencia al calibre de los proyectiles que caían sobre ella. A pesar de ser el blanco más castigado de toda la ciudad, el edificio Telefónica resistió sin que nadie muriera jamás en su interior durante toda la contienda.',
            kids: 'Hace muchos años, esta avenida pasó por una época muy difícil, y la gente de Madrid le puso un apodo especial. A pesar de todo, el edificio más alto de la avenida, el de Telefónica, resistió siempre entero. ¡Menuda torre tan fuerte!'
          },
          architecture: {
            adult: 'El edificio Metrópolis (1911), en la confluencia con la calle de Alcalá, luce una cúpula rematada por la escultura de la Victoria Alada. El edificio Telefónica (1929), con sus 89 metros, fue durante años el más alto de Madrid. En el número 60 se conserva un llamativo ejemplo de art déco, testimonio del tercer y último tramo de la avenida, ya construido en pleno siglo XX.',
            kids: '¡Busca la estatua dorada con alas encima de una de las cúpulas! Y fíjate en el edificio de Telefónica, que durante años fue el más alto de toda la ciudad. Cada trozo de esta avenida tiene edificios de un estilo distinto.'
          }
        }
      },
      {
        id: 'museo-thyssen',
        name: { adult: 'Museo Nacional Thyssen-Bornemisza', kids: 'Museo Nacional Thyssen-Bornemisza — El Museo de la Colección Ganadora 🏆' },
        subtitle: {
          adult: 'Un recorrido por 700 años de pintura occidental',
          kids: '¡España "ganó" esta colección a otros dos países!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'arte', order: 1 },
        coords: [40.4160, -3.6944],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Museo_Thyssen-Bornemisza_%28Madrid%29_07.jpg/330px-Museo_Thyssen-Bornemisza_%28Madrid%29_07.jpg',
        audio: { duration: 165, title: { adult: 'Audioguía: Museo Thyssen-Bornemisza', kids: '¡Aventura Sonora: El Museo de la Colección Ganadora!' } },
        visitInfo: {
          hours: {
            adult: 'Lunes 12:00-16:00; martes a domingo 10:00-19:00 (sábados, las exposiciones temporales abren hasta las 21:00).',
            kids: 'Abre todos los días. Los lunes solo abre por la tarde.'
          },
          price: {
            adult: '13€ general, 9€ reducida (mayores de 65, jubilados, estudiantes). Gratis lunes de 12:00 a 16:00 y sábados de 21:00 a 23:00; siempre gratis para menores de 18.',
            kids: '13€, pero gratis si tienes menos de 18 años, o los lunes por la mañana.'
          },
          link: 'https://museothyssen.tictactickets.com/es'
        },
        tabs: {
          history: {
            adult: 'Inaugurado en octubre de 1992 en el Palacio de Villahermosa, el museo reúne la colección privada del barón Hans Heinrich Thyssen-Bornemisza, considerada una de las más importantes formadas en el siglo XX. El Gobierno español convenció al barón de instalarla en Madrid frente a las ofertas de Suiza y Reino Unido, y en 1993 adquirió las 775 obras por 265 millones de euros, abarcando siete siglos de pintura europea, desde los primitivos italianos hasta las vanguardias.',
            kids: '¡Este museo tiene cuadros de hace 700 años hasta cuadros modernos, todo junto! España consiguió esta colección tan importante compitiendo contra otros dos países que también la querían. ¡Y ganó Madrid!'
          },
          legends: {
            adult: 'La responsable de traer la colección a España fue Carmen "Tita" Cervera, esposa del barón. Antes de convertirse en baronesa y coleccionista de arte, Cervera había sido Miss España en 1961, quedando además segunda en Miss Europa y tercera en Miss Universo. De reina de belleza a artífice de una de las mayores operaciones culturales de la España democrática: toda una reconversión de carrera.',
            kids: '¡La mujer que ayudó a traer esta colección a España había sido antes reina de belleza, Miss España, cuando era joven! Después se convirtió en una gran experta en arte. ¡Nunca se sabe qué caminos puede tomar una vida!'
          },
          architecture: {
            adult: 'El museo ocupa el Palacio de Villahermosa, un edificio neoclásico del siglo XVIII remodelado por el arquitecto Rafael Moneo para adaptarlo a su nueva función museística, conservando su fachada histórica frente al Paseo del Prado mientras reorganizaba por completo sus espacios interiores en salas cronológicas.',
            kids: '¡Por fuera este museo parece un palacio antiguo, porque lo era! Por dentro lo cambiaron todo para poder colocar los cuadros ordenados por época, ¡como un viaje en el tiempo que recorres caminando!'
          }
        }
      },
      {
        id: 'museo-reina-sofia',
        name: { adult: 'Museo Nacional Centro de Arte Reina Sofía', kids: 'Museo Nacional Centro de Arte Reina Sofía — El Hospital Convertido en Museo del Guernica 🎨' },
        subtitle: {
          adult: 'El hogar del Guernica de Picasso',
          kids: '¡Antes de ser museo, este edificio curaba enfermos!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'arte', order: 6 },
        coords: [40.408798, -3.693648],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Museo_Reina_Sofia%2C_Madrid_%286394654203%29.jpg/330px-Museo_Reina_Sofia%2C_Madrid_%286394654203%29.jpg',
        audio: { duration: 172, title: { adult: 'Audioguía: Museo Reina Sofía', kids: '¡Aventura Sonora: El Hospital Convertido en Museo!' } },
        visitInfo: {
          hours: {
            adult: 'Lunes a sábado 10:00-21:00, domingos 10:00-14:30. Cerrado los martes.',
            kids: 'Abre todos los días excepto los martes. Los domingos solo por la mañana.'
          },
          price: {
            adult: '12€ general. Gratis lunes y de miércoles a sábado de 19:00 a 21:00, y domingos de 12:30 a 14:30.',
            kids: '12€, aunque hay un ratito gratis cada tarde y los domingos a mediodía.'
          },
          link: 'https://entradas.museoreinasofia.es/'
        },
        tabs: {
          history: {
            adult: 'El edificio Sabatini, sede original del museo, fue construido en el siglo XVIII como Hospital General de Madrid, según diseño de José de Hermosilla ejecutado por Francesco Sabatini. Declarado Monumento Histórico-Artístico en 1977, se reconvirtió en centro de arte y abrió al público en 1986. En 2005 se amplió con el edificio Nouvel, de cristal y acero, obra del arquitecto francés Jean Nouvel.',
            kids: '¡Este museo antes era un hospital enorme donde curaban a personas enfermas, hace más de 200 años! Luego lo convirtieron en un museo de arte moderno. Después le añadieron otra parte nueva, toda de cristal.'
          },
          legends: {
            adult: 'El Guernica de Picasso llegó a Madrid el 10 de septiembre de 1981, procedente del MoMA de Nueva York. Picasso había dejado por escrito, en 1970, que el cuadro no debía regresar a España hasta que se restablecieran las libertades democráticas, condición que él mismo no llegó a ver cumplida, pues murió en 1973. El cuadro se instaló primero en el Casón del Buen Retiro y no se trasladó a su ubicación actual hasta 1992, bajo estrictas medidas de seguridad.',
            kids: '¡El cuadro más famoso de este museo, el Guernica, viajó desde muy lejos! El pintor que lo hizo dijo que el cuadro no podía volver a España hasta que las cosas mejoraran mucho en el país. Por eso tardó muchísimos años en llegar aquí.'
          },
          architecture: {
            adult: 'El edificio Sabatini conserva la planta original del antiguo hospital dieciochesco, con sus grandes patios y fachadas de ladrillo y granito. Frente a él, dos torres de cristal transparentes —instaladas en los años 80 como ascensores panorámicos— rompieron deliberadamente con la sobriedad clasicista del conjunto, anticipando el diálogo entre tradición y modernidad que después ampliaría el edificio Nouvel.',
            kids: '¡Mira los ascensores de cristal por fuera del edificio! Se ven desde la calle mientras suben y bajan. Contrastan mucho con el edificio antiguo de ladrillo, ¡como si fueran de dos épocas completamente distintas!'
          }
        }
      },
      {
        id: 'catedral-almudena',
        name: { adult: 'Catedral de la Almudena', kids: 'Catedral de la Almudena — La Catedral de 110 Años y Colores 🌈' },
        subtitle: {
          adult: 'Única catedral de España consagrada por un Papa',
          kids: '¡Tardaron 110 años en terminarla!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'main', order: 6 },
        coords: [40.415556, -3.714444],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Almudena_2022_-_overview.jpg/330px-Almudena_2022_-_overview.jpg',
        audio: { duration: 168, title: { adult: 'Audioguía: Catedral de la Almudena', kids: '¡Aventura Sonora: La Catedral de 110 Años y Colores!' } },
        visitInfo: {
          hours: {
            adult: 'La catedral abre todos los días de 9:00 a 20:30. El museo y la cúpula abren de lunes a sábado de 10:00 a 14:30.',
            kids: 'La iglesia se puede visitar todos los días. Para subir a la cúpula, solo de lunes a sábado por la mañana.'
          },
          price: {
            adult: 'Entrar a la catedral es gratis (donativo voluntario de 1€). Museo + cúpula: 7€ general, 5€ reducida. Gratis para menores de 9 años.',
            kids: '¡Entrar a la iglesia es gratis! Para subir a la cúpula y ver la ciudad desde arriba, cuesta 7€.'
          },
          link: 'https://catedraldelaalmudena.es/museoycupula'
        },
        tabs: {
          history: {
            adult: 'Alfonso XII colocó la primera piedra el 4 de abril de 1883, con un proyecto neogótico del arquitecto Francisco de Cubas. La proclamación de la República en 1931 y la Guerra Civil paralizaron las obras durante décadas. Cuando se reanudaron en 1984, los arquitectos Carlos Sidro y Fernando Chueca Goitia rebajaron deliberadamente la altura prevista para no eclipsar al Palacio Real vecino. Tras 110 años de obras, el Papa Juan Pablo II la consagró el 15 de junio de 1993, la única catedral de España que ostenta ese honor.',
            kids: '¡Esta catedral tardó 110 años en construirse del todo! Empezaron un rey y pararon las obras varias veces por guerras y cambios de gobierno. Al final, la vino a bendecir un Papa en persona, ¡algo que no ha pasado con ninguna otra catedral española!'
          },
          legends: {
            adult: 'Los arquitectos que retomaron el proyecto en el siglo XX decidieron sustituir el estilo neogótico original por una fachada neoclásica en armonía con el Palacio Real, pero conservaron un interior sorprendentemente moderno: el pintor José Luis Galicia decoró la bóveda con un intenso colorido geométrico de inspiración pop art, muy alejado de la sobriedad habitual en las catedrales españolas, combinado con pan de oro y motivos que representan los cuatro elementos clásicos.',
            kids: '¡Por fuera esta catedral parece clásica y seria, pero por dentro el techo está pintado de un montón de colores brillantes, casi como un cómic! Es una de las sorpresas que más gustan a los niños que la visitan. Levanta la vista en cuanto entres.'
          },
          architecture: {
            adult: 'La cripta neorrománica, terminada en 1911, es la parte más antigua del conjunto y contrasta con la nave neoclásica superior. Las vidrieras, de diseño no figurativo, dialogan con el policromado techo y con los mosaicos del padre Marko Rupnik en la capilla del Santísimo, creando un conjunto que combina tradición constructiva centenaria con un programa decorativo plenamente contemporáneo.',
            kids: '¡Baja a la cripta, la parte más antigua de toda la catedral! Después sube arriba y compara: verás una mezcla de estilos muy distintos en el mismo edificio, ¡como si hubieran construido dos iglesias en una!'
          }
        }
      },
      {
        id: 'plaza-cibeles',
        name: { adult: 'Plaza de Cibeles', kids: 'Plaza de Cibeles — La Diosa que se Disfrazó de Piedra 🦁' },
        subtitle: {
          adult: 'El símbolo más fotografiado de Madrid',
          kids: '¡Una diosa en un carro tirado por leones!'
        },
        category: CATEGORIES.HIDDEN,
        coords: [40.419331, -3.693093],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Fuente_de_Cibeles_-_Dec_2024.jpg/330px-Fuente_de_Cibeles_-_Dec_2024.jpg',
        audio: { duration: 148, title: { adult: 'Audioguía: Plaza de Cibeles', kids: '¡Aventura Sonora: La Diosa que se Disfrazó de Piedra!' } },
        tabs: {
          history: {
            adult: 'La fuente, inaugurada en 1782 por iniciativa de Carlos III dentro de su plan de embellecimiento neoclásico de Madrid, representa a la diosa Cibeles sobre un carro tirado por leones, obra del arquitecto Francisco Gutiérrez y el escultor Vicente Crespí. Originalmente se ubicaba frente al Palacio de Buenavista, y no se trasladó al centro exacto de la plaza hasta 1895.',
            kids: '¡Esta fuente representa a una diosa que viaja en un carro tirado nada menos que por dos leones! Se hizo hace más de 240 años y antes estaba colocada en otro sitio de la plaza, no justo en el centro como ahora.'
          },
          legends: {
            adult: 'Durante la Guerra Civil, el bando republicano protegió la fuente cubriéndola con una pirámide de ladrillo y sacos de arena, tras sufrir ya daños de metralla en un brazo, la nariz y el hocico de uno de los leones. Los madrileños, que vieron desaparecer su monumento más querido tras aquel caparazón durante meses, la bautizaron cariñosamente como "la linda tapada".',
            kids: '¡Durante una época difícil, la gente de Madrid tapó esta fuente con ladrillos y sacos para protegerla, y así no se rompiera del todo! Como no se la podía ver, le pusieron un apodo muy tierno: "la linda tapada". ¡Menudo disfraz se puso la diosa!'
          },
          architecture: {
            adult: 'En el siglo XX, la plaza se convirtió en el punto de celebración deportiva del Real Madrid, cuyo estadio se encuentra en las inmediaciones: cada título se festeja envolviendo el monumento con una bandera del club, una tradición tan arraigada como la propia fuente. La plaza está rodeada de algunos de los edificios más monumentales de la capital, entre ellos el antiguo Palacio de Comunicaciones.',
            kids: '¡Cuando el equipo de fútbol Real Madrid gana algo importante, sus aficionados vienen aquí a celebrarlo y le ponen una bandera gigante a la diosa! Es una tradición que lleva ya muchísimos años.'
          }
        }
      },
      {
        id: 'puerta-alcala',
        name: { adult: 'Puerta de Alcalá', kids: 'Puerta de Alcalá — El Arco con Dos Caras Distintas 🎭' },
        subtitle: {
          adult: 'El primer arco de triunfo de la Europa moderna',
          kids: '¡Sus dos lados son ligeramente diferentes!'
        },
        category: CATEGORIES.HISTORY,
        coords: [40.420024, -3.688727],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Puerta_de_Alcal%C3%A1_2025.jpg/330px-Puerta_de_Alcal%C3%A1_2025.jpg',
        audio: { duration: 150, title: { adult: 'Audioguía: Puerta de Alcalá', kids: '¡Aventura Sonora: El Arco con Dos Caras Distintas!' } },
        tabs: {
          history: {
            adult: 'Construida entre 1769 y 1778 por encargo de Carlos III, el "rey alcalde", según proyecto del arquitecto italiano Francisco Sabatini, ganador de un concurso frente a José de Hermosilla y Ventura Rodríguez. Con 19,5 metros de altura y cinco vanos, está considerada el primer arco de triunfo construido en Europa desde la caída del Imperio Romano, un regalo del monarca a la ciudad para simbolizar el esplendor de la nueva dinastía borbónica.',
            kids: '¡Este arco fue el primero de su tipo en construirse en toda Europa desde la época de los romanos! Lo mandó hacer un rey como regalo a la ciudad de Madrid. ¡Mide casi como 5 pisos de altura!'
          },
          legends: {
            adult: 'Cuenta la anécdota que Sabatini presentó al rey dos diseños distintos para las dos caras de la puerta, y que Carlos III, ocupado con asuntos de Estado, aprobó ambos sin darse cuenta de la duplicidad. El arquitecto, sin atreverse a corregir al monarca, ejecutó los dos proyectos tal cual: por eso hoy la decoración del lado interior (obra de Roberto Michel) y la del exterior (de Francisco Gutiérrez) son ligeramente diferentes entre sí.',
            kids: '¡Dicen que el rey aprobó sin darse cuenta DOS diseños distintos para esta puerta! El arquitecto no se atrevió a decírselo, así que construyó los dos a la vez, uno en cada lado. Fíjate bien: ¡los dos lados de la puerta no son exactamente iguales!'
          },
          architecture: {
            adult: 'De granito, presenta una estructura horizontal de cinco vanos: los tres centrales de medio punto, con el central más elevado, y los dos laterales adintelados. Rompe deliberadamente con el concepto tradicional de puerta como parte de una muralla defensiva, recuperando en su lugar la monumentalidad pura del arco de triunfo romano, sin función militar alguna.',
            kids: '¡Cuenta los huecos del arco, son 5 en total! El del medio es más alto que los demás. Esta puerta nunca sirvió para defender la ciudad, como las puertas antiguas — ¡era solo para presumir de lo bonita que era!'
          }
        }
      },
      {
        id: 'plaza-villa-madrid',
        name: { adult: 'Plaza de la Villa', kids: 'Plaza de la Villa — La Plaza que Encerró a un Rey Francés 🗼' },
        subtitle: {
          adult: 'El rincón medieval mejor conservado de Madrid',
          kids: '¡Aquí estuvo prisionero un rey de Francia!'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'main', order: 4 },
        coords: [40.415324, -3.710195],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/%C2%A92021_Antonello_Dellanotte_Plaza_de_la_Villa_y_Torre_de_los_Lujanes_IMG_2491.jpg/330px-%C2%A92021_Antonello_Dellanotte_Plaza_de_la_Villa_y_Torre_de_los_Lujanes_IMG_2491.jpg',
        audio: { duration: 158, title: { adult: 'Audioguía: Plaza de la Villa', kids: '¡Aventura Sonora: La Plaza que Encerró a un Rey Francés!' } },
        tabs: {
          history: {
            adult: 'Fue el centro administrativo de Madrid desde la Edad Media hasta principios del siglo XXI: la Casa de la Villa, de estilo herreriano con fachadas barrocas, albergó el Ayuntamiento durante más de 300 años, hasta su traslado en 2007 al Palacio de Cibeles. La plaza reúne edificios de los siglos XV al XVII, entre ellos la Torre de los Lujanes, en estilo gótico-mudéjar, y la Casa de Cisneros, joya del plateresco construida en 1537.',
            kids: '¡Esta plaza fue el centro de gobierno de Madrid durante más de 300 años seguidos! Tiene edificios de hace 500 y hasta 600 años, ¡de los más antiguos de toda la ciudad!'
          },
          legends: {
            adult: 'Tras la derrota francesa en la batalla de Pavía (24 de febrero de 1525), el rey Francisco I de Francia fue trasladado prisionero a Madrid, llegando el 12 de agosto de 1525. La tradición sostiene que permaneció custodiado en la Torre de los Lujanes, aunque los historiadores no descartan que solo fuera su primer alojamiento mientras se le preparaba una estancia en el Alcázar. No sería liberado hasta enero de 1526, tras renunciar a extensos territorios en Italia y Flandes.',
            kids: '¡Un rey de Francia estuvo prisionero aquí, en esta misma plaza, después de perder una batalla hace 500 años! Se cuenta que lo guardaron en esa torre tan alta. Tardó casi un año entero en poder volver a su país.'
          },
          architecture: {
            adult: 'La Torre de los Lujanes, del siglo XV, es uno de los escasos ejemplos de arquitectura civil gótica conservados en Madrid, hoy sede de la Real Academia de Ciencias Morales y Políticas. La Casa de Cisneros combina elementos góticos, mudéjares y renacentistas en un estilo exclusivamente español conocido como plateresco, por el parecido de su ornamentación con el trabajo de los plateros.',
            kids: '¡Mira la torre puntiaguda, es una de las construcciones más antiguas de todo Madrid! El otro edificio bonito de al lado se llama así porque su decoración de piedra parece hecha por un joyero, ¡tallada con muchísimo detalle!'
          }
        }
      },
      {
        id: 'templo-debod',
        name: { adult: 'Templo de Debod', kids: 'Templo de Debod — El Templo Egipcio que Cruzó el Mar 🐪' },
        subtitle: {
          adult: 'Un templo egipcio del siglo II a.C. en pleno Madrid',
          kids: '¡Viajó piedra a piedra desde Egipto hasta aquí!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'palacio', order: 4 },
        coords: [40.42405, -3.71778],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Templo_de_Debod_in_Madrid.jpg/330px-Templo_de_Debod_in_Madrid.jpg',
        audio: { duration: 160, title: { adult: 'Audioguía: Templo de Debod', kids: '¡Aventura Sonora: El Templo Egipcio que Cruzó el Mar!' } },
        tabs: {
          history: {
            adult: 'Erigido a principios del siglo II a.C. por el rey meroita Adijalamani como capilla dedicada a Amón de Debod e Isis de Filé, y ampliado después por los soberanos ptolemaicos. En 1954 Egipto comenzó a construir la presa de Asuán, que amenazaba con inundar numerosos templos de Nubia; España colaboró en el salvamento internacional promovido por la Unesco, y en 1968 Egipto donó este templo en agradecimiento. Sus bloques viajaron por barco hasta Valencia en 1969 y fueron reconstruidos junto al Parque del Oeste, inaugurándose el 20 de julio de 1972.',
            kids: '¡Este templo egipcio tiene más de 2.200 años! Cuando Egipto iba a construir una presa enorme que inundaría el valle donde estaba, España ayudó a salvar templos como este. Como agradecimiento, ¡Egipto le regaló uno entero a Madrid! Vino en barco, piedra a piedra.'
          },
          legends: {
            adult: 'El decreto de donación de 1968 estipulaba una condición muy concreta: el templo "bajo ningún concepto debía exponerse al aire libre", sino alojarse en un edificio construido o reformado especialmente para protegerlo. Más de cincuenta años después, el Templo de Debod sigue a la intemperie en pleno parque madrileño, expuesto a la lluvia y la contaminación: una condición del regalo que, por distintos motivos a lo largo de las décadas, nunca llegó a cumplirse.',
            kids: '¡El regalo tenía una condición secreta que casi nadie conoce: Egipto pidió que el templo NUNCA estuviera al aire libre, sino protegido dentro de un edificio! Pues resulta que llevan más de 50 años sin cumplir esa promesa, y el templo sigue fuera, ¡lloviendo y todo!'
          },
          architecture: {
            adult: 'El conjunto conserva su puerta monumental y dos pilonos de acceso, junto con relieves originales que representan a los faraones ptolemaicos realizando ofrendas a las divinidades egipcias. Se ubica sobre una pequeña colina del antiguo Cuartel de la Montaña, orientado deliberadamente para ofrecer una de las mejores puestas de sol de la ciudad sobre la Casa de Campo, en un guiño a su función original de templo solar.',
            kids: '¡Fíjate en los dibujos tallados en la piedra! Muestran a antiguos reyes egipcios haciendo regalos a sus dioses. Este templo está en una colina perfecta para ver la puesta de sol, ¡casi como si siguiera mirando al sol como hacía en Egipto!'
          }
        }
      },
      {
        id: 'plaza-espana-madrid',
        name: { adult: 'Plaza de España', kids: 'Plaza de España — La Plaza de Don Quijote y Sancho 🐴' },
        subtitle: {
          adult: 'Homenaje a Cervantes junto a los rascacielos históricos',
          kids: '¡Aquí están Don Quijote y Sancho Panza en bronce!'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'palacio', order: 6 },
        coords: [40.42339, -3.71223],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Plaza_de_Espa%C3%B1a_de_Madrid_-_02.jpg/330px-Plaza_de_Espa%C3%B1a_de_Madrid_-_02.jpg',
        audio: { duration: 155, title: { adult: 'Audioguía: Plaza de España', kids: '¡Aventura Sonora: La Plaza de Don Quijote y Sancho!' } },
        tabs: {
          history: {
            adult: 'El actual monumento a Cervantes se erigió en 1929, tras un concurso nacional convocado en 1915 con motivo del tercer centenario de la muerte del escritor. Con los años se completó con las esculturas en bronce de Don Quijote y Sancho Panza cabalgando sobre Rocinante y su burro, y las figuras de Dulcinea y Aldonza Lorenzo. La plaza se sometió a una profunda remodelación entre 2019 y 2021, que sacó a la luz numerosos restos arqueológicos y transformó la zona en un gran eje peatonal con más zonas verdes.',
            kids: '¡En el centro de esta plaza hay un monumento gigante dedicado al escritor Cervantes! Abajo del todo puedes ver sus dos personajes más famosos, Don Quijote y Sancho Panza, montados en sus animales. Hace pocos años arreglaron toda la plaza y encontraron restos muy antiguos escondidos bajo tierra.'
          },
          legends: {
            adult: 'El concurso de 1915 para elegir el diseño del monumento se convocó al cumplirse tres siglos de la muerte de Cervantes en 1616, aunque las obras no se completaron hasta 1929: casi 15 años de gestación para un homenaje que reúne alrededor del escritor a sus criaturas más universales, incluyendo también a Dulcinea, mostrando cómo unos personajes de ficción llegaron a ser tan reales para Madrid como cualquier figura histórica.',
            kids: '¡Los personajes de un libro, Don Quijote y Sancho Panza, tienen aquí sus propias estatuas, como si hubieran existido de verdad! Tardaron casi 15 años en decidir cómo iba a ser este monumento tan especial.'
          },
          architecture: {
            adult: 'La plaza está flanqueada por dos de los primeros rascacielos de España: el Edificio España (1953) y la Torre de Madrid (1957), ambos símbolos de la arquitectura de posguerra. Tras la remodelación de 2021, la plaza incorporó más arbolado, fuentes, carriles bici y amplias zonas peatonales, integrando mejor el monumento histórico con los usos contemporáneos del espacio.',
            kids: '¡Mira hacia arriba! Los dos edificios altísimos que rodean la plaza fueron, durante muchos años, los rascacielos más altos de España. Ahora la plaza tiene también fuentes y mucho espacio para pasear sin coches.'
          }
        }
      },
      {
        id: 'circulo-bellas-artes',
        name: { adult: 'Círculo de Bellas Artes', kids: 'Círculo de Bellas Artes — La Azotea de la Diosa Sabia 🦉' },
        subtitle: {
          adult: 'Las mejores vistas panorámicas de Madrid',
          kids: '¡Una diosa de bronce vigila la ciudad desde arriba!'
        },
        category: CATEGORIES.HISTORY,
        coords: [40.418307, -3.696575],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/C%C3%ADrculo_de_Bellas_Artes_%28Madrid%29_06.jpg/330px-C%C3%ADrculo_de_Bellas_Artes_%28Madrid%29_06.jpg',
        audio: { duration: 150, title: { adult: 'Audioguía: Círculo de Bellas Artes', kids: '¡Aventura Sonora: La Azotea de la Diosa Sabia!' } },
        tabs: {
          history: {
            adult: 'Fundado como institución artística en 1880, el Círculo de Bellas Artes estrenó su actual sede, obra del arquitecto Antonio Palacios, en 1926, inaugurada por el propio Alfonso XIII en la confluencia de la calle de Alcalá con la Gran Vía. Desde entonces se ha consolidado como uno de los centros culturales privados más activos de Madrid, con exposiciones, cine, teatro y conciertos.',
            kids: '¡Este edificio tan bonito se terminó hace casi 100 años, y lo inauguró un rey en persona! Desde entonces es un sitio donde se organizan exposiciones de arte, conciertos y películas.'
          },
          legends: {
            adult: 'La escultura de Minerva, diosa romana de la sabiduría y el arte, que corona la azotea y da nombre a la revista de la institución, no se instaló hasta 1966, cuarenta años después de la inauguración del edificio, aunque ya formaba parte del proyecto original de Antonio Palacios. Desde su altura, la diosa contempla hoy una de las panorámicas de 360 grados más completas de Madrid, desde la Sierra de Guadarrama hasta el Cerro de los Ángeles.',
            kids: '¡Arriba del todo hay una estatua de una diosa de metal que representa la sabiduría! Aunque estaba planeada desde el principio, tardaron 40 años en colocarla. Desde donde está ella se ve Madrid entero, ¡y hasta las montañas que rodean la ciudad!'
          },
          architecture: {
            adult: 'El edificio de Antonio Palacios combina influencias eclécticas con elementos modernistas y neobarrocos, característicos del llamado "estilo Palacios" que definió buena parte de la arquitectura madrileña de principios del siglo XX. Su azotea, hoy habilitada como terraza con cafetería, se ha convertido en uno de los miradores urbanos más solicitados de la capital.',
            kids: '¡Sube hasta la azotea y podrás tomar algo mientras ves toda la ciudad desde las alturas! El edificio mezcla varios estilos distintos, es difícil decir de qué época exacta parece.'
          }
        }
      },
      {
        id: 'teatro-real',
        name: { adult: 'Teatro Real', kids: 'Teatro Real — El Teatro que Flotaba sobre un Río Escondido 💧' },
        subtitle: {
          adult: 'La ópera nacional frente al Palacio Real',
          kids: '¡Un río escondido casi hace que se cayera!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'palacio', order: 1 },
        coords: [40.41824, -3.71037],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Teatro_Real_de_Madrid_2025.jpg/330px-Teatro_Real_de_Madrid_2025.jpg',
        audio: { duration: 160, title: { adult: 'Audioguía: Teatro Real', kids: '¡Aventura Sonora: El Teatro que Flotaba sobre un Río Escondido!' } },
        visitInfo: {
          hours: {
            adult: 'El edificio solo se visita con visita guiada, todos los días, con acceso entre las 10:30 y las 16:30 (último acceso 15:30).',
            kids: 'Solo se puede entrar con una visita guiada, todos los días por la mañana y por la tarde.'
          },
          price: {
            adult: 'Según la modalidad de visita guiada, entre 5€ y 10€ (reducida entre 3€ y 8€ para mayores de 65, menores de 26 y familias numerosas). Menores de 7 años, gratis.',
            kids: 'Entre 5€ y 10€, según qué zonas del teatro visites. ¡Gratis si tienes menos de 7 años!'
          },
          link: 'https://www.teatroreal.es/es/comprar-entradas'
        },
        tabs: {
          history: {
            adult: 'La primera piedra se colocó el 23 de abril de 1818, bajo Fernando VII, pero las obras se interrumpieron repetidamente por falta de fondos hasta que la reina Isabel II lo inauguró formalmente el 19 de noviembre de 1850: 32 años de construcción intermitente. Se erige en la Plaza de Isabel II, frente a la fachada oeste del Palacio Real, consolidándose como la principal sede de ópera de España.',
            kids: '¡Este teatro tardó 32 años en construirse, con muchas paradas por falta de dinero! Al final lo inauguró una reina, casi 30 años después de que se pusiera la primera piedra.'
          },
          legends: {
            adult: 'Poco después de su inauguración, se descubrió que las corrientes subterráneas del antiguo arroyo del Arenal estaban corroyendo lentamente los cimientos del edificio, amenazando con su derrumbe. Hubo que excavar una nueva cimentación por debajo del nivel freático, aislada con ataguías, y sustituir buena parte de la estructura de madera original por hormigón armado y metal: el teatro de la ópera de Madrid estuvo, literalmente, a punto de hundirse bajo el agua de un río que nadie veía.',
            kids: '¡Debajo de este teatro corría un río escondido que nadie podía ver, y estaba estropeando los cimientos poco a poco! Tuvieron que hacer obras muy complicadas para salvarlo, construyendo una base nueva mucho más abajo, bajo el nivel del agua.'
          },
          architecture: {
            adult: 'Tras las obras de consolidación, el edificio combina su fachada neoclásica original con una estructura interior completamente renovada, capaz de albergar más de 1.700 espectadores. El foso de la orquesta y la maquinaria escénica se cuentan entre las más avanzadas de Europa, resultado de la profunda reconstrucción acometida a finales del siglo XX.',
            kids: '¡Por fuera parece un teatro clásico y elegante, pero por dentro tiene máquinas y tecnología modernísima para mover los decorados durante las funciones! Caben más de 1.700 personas viendo la ópera a la vez.'
          }
        }
      },
      {
        id: 'plaza-oriente',
        name: { adult: 'Plaza de Oriente', kids: 'Plaza de Oriente — La Plaza del Rey que Casi se Cae 🐎' },
        subtitle: {
          adult: 'Jardines monumentales frente al Palacio Real',
          kids: '¡Una estatua a caballo con un truco de equilibrio genial!'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'palacio', order: 2 },
        coords: [40.418222, -3.712222],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Plaza_de_Oriente_%28Madrid%29._Monumento_a_Felipe_IV.jpg/330px-Plaza_de_Oriente_%28Madrid%29._Monumento_a_Felipe_IV.jpg',
        audio: { duration: 150, title: { adult: 'Audioguía: Plaza de Oriente', kids: '¡Aventura Sonora: La Plaza del Rey que Casi se Cae!' } },
        tabs: {
          history: {
            adult: 'El trazado definitivo de la plaza responde a un diseño de 1844 del arquitecto Narciso Pascual Colomer, por iniciativa de la reina Isabel II. Está flanqueada por veinte estatuas de reyes visigodos y de los primeros reinos cristianos, esculpidas entre 1750 y 1753 para decorar originalmente la cornisa del Palacio Real, aunque nunca llegaron a colocarse allí y acabaron repartidas por distintos jardines y plazas de la ciudad.',
            kids: '¡Esta plaza está rodeada de veinte estatuas de reyes muy antiguos! Estaban pensadas para ir encima del Palacio Real, pero al final nunca las pusieron ahí, y las repartieron por distintos sitios de la ciudad, incluida esta plaza.'
          },
          legends: {
            adult: 'El monumento central, una estatua ecuestre de Felipe IV, es una obra maestra de ingeniería del siglo XVII: fue realizada en bronce por el escultor italiano Pietro Tacca a partir de un boceto pictórico de Diego Velázquez, y el propio Galileo Galilei asesoró científicamente su estabilidad para lograr que el caballo se sostuviera únicamente sobre sus dos patas traseras. Está considerada la primera estatua ecuestre del mundo sujeta solo por las patas de atrás.',
            kids: '¡Mira la estatua del rey a caballo del centro! Es un caballo empinado que se sujeta solo con las dos patas de atrás, algo rarísimo de conseguir en una estatua tan pesada. Para lograrlo, ayudó nada menos que un científico famosísimo llamado Galileo. ¡La primera estatua del mundo que lo consiguió!'
          },
          architecture: {
            adult: 'De trazado rectangular con cabecera curvada, los jardines combinan setos recortados, fuentes y las citadas estatuas reales en un diseño neoclásico decimonónico que armoniza con la fachada oeste del Palacio Real y con el Teatro Real, situado en uno de sus extremos.',
            kids: '¡Pasea entre los setos bien recortados y busca cuántas estatuas de reyes puedes contar! Desde aquí se ve muy bien el Palacio Real por un lado y el Teatro Real por el otro.'
          }
        }
      },
      {
        id: 'barrio-la-latina',
        name: { adult: 'Barrio de La Latina', kids: 'Barrio de La Latina — El Barrio de la Maestra Sabia 📚' },
        subtitle: {
          adult: 'El barrio más castizo, cuna del tapeo madrileño',
          kids: '¡Lleva el nombre de una profesora superlista!'
        },
        category: CATEGORIES.HIDDEN,
        coords: [40.4124, -3.7092],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Fiestas_de_la_Paloma_2023_-_Calle_de_la_Cava_Baja_-_Madrid_07.jpg/330px-Fiestas_de_la_Paloma_2023_-_Calle_de_la_Cava_Baja_-_Madrid_07.jpg',
        audio: { duration: 150, title: { adult: 'Audioguía: Barrio de La Latina', kids: '¡Aventura Sonora: El Barrio de la Maestra Sabia!' } },
        tabs: {
          history: {
            adult: 'El barrio debe su nombre a Beatriz Galindo, humanista nacida en Salamanca en 1465 y apodada "La Latina" por su dominio del latín clásico desde muy joven. Fue maestra de la reina Isabel la Católica y de sus hijos, un reconocimiento excepcional a la capacidad intelectual femenina en su época. Junto a su marido, Francisco Ramírez, fundó en 1499 un hospital en la actual calle de Toledo, junto a la Plaza de la Cebada, que acabó dando nombre a todo el barrio.',
            kids: '¡Este barrio lleva el nombre de una mujer que sabía muchísimo latín, tanto que le pusieron ese apodo! Fue profesora nada menos que de los hijos de una reina. Ella y su marido fundaron aquí un hospital hace más de 500 años, y el barrio se quedó con su nombre.'
          },
          legends: {
            adult: 'La Cava Baja, la calle más emblemática del barrio, era antiguamente la parada de las diligencias que llegaban a Madrid desde el sur, lo que explica la enorme concentración de posadas y tabernas que surgieron para atender a los viajeros. Esa tradición hostelera nunca se ha interrumpido: pocas calles de Madrid concentran hoy tantos bares por metro cuadrado como esta.',
            kids: '¡Esta calle era antiguamente donde paraban los carruajes que traían viajeros desde muy lejos! Por eso se llenó de posadas para darles de comer y dormir. ¡Esa tradición de comer bien sigue viva hoy, con un montón de bares!'
          },
          architecture: {
            adult: 'El barrio conserva un trazado medieval de calles estrechas y sinuosas, con desniveles pronunciados heredados de su topografía original junto al antiguo cauce del arroyo del Arenal. Sus fachadas combinan casas populares de varios siglos con algunos palacetes, en un conjunto declarado de interés histórico-artístico.',
            kids: '¡Fíjate en lo estrechas y torcidas que son las calles, y en las cuestas que tiene el barrio! Así eran las calles de Madrid hace muchísimos siglos, y aquí se han conservado casi igual.'
          }
        }
      },
      {
        id: 'barrio-chueca',
        name: { adult: 'Barrio de Chueca', kids: 'Barrio de Chueca — El Barrio Más Alegre y Colorido 🌈' },
        subtitle: {
          adult: 'El corazón LGTBI de Madrid',
          kids: '¡Un barrio lleno de banderas de colores!'
        },
        category: CATEGORIES.HIDDEN,
        coords: [40.4227, -3.6976],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Madrid_-_Plaza_de_Chueca_2.jpg/330px-Madrid_-_Plaza_de_Chueca_2.jpg',
        audio: { duration: 140, title: { adult: 'Audioguía: Barrio de Chueca', kids: '¡Aventura Sonora: El Barrio Más Alegre y Colorido!' } },
        tabs: {
          history: {
            adult: 'El barrio toma su nombre de una pequeña plaza dedicada al compositor de zarzuelas Federico Chueca, nacido en Madrid en 1846. Durante buena parte del siglo XX vivió un fuerte deterioro y despoblación, hasta que a finales de los años 80 comenzó a acoger a la comunidad gay y lesbiana, atraída por los bajos alquileres. En apenas una década, un movimiento social organizado en torno a asociaciones como COGAM (fundada en 1986) transformó por completo un barrio degradado en uno de los ejes más vitales del centro de Madrid.',
            kids: '¡Este barrio lleva el nombre de un compositor de música! Durante un tiempo estuvo bastante abandonado, pero un grupo de personas decidió instalarse aquí y, poco a poco, lo llenaron de vida, tiendas y color hasta convertirlo en uno de los barrios más animados de Madrid.'
          },
          legends: {
            adult: 'Desde 1989, Chueca se convirtió en el epicentro de las celebraciones del Orgullo LGTBI en Madrid, una de las más multitudinarias del mundo. Es un ejemplo poco habitual de cómo un movimiento social organizado logró transformar por completo, en muy pocos años, la estructura social y económica de todo un barrio, recuperando una de las zonas más deterioradas del centro histórico.',
            kids: '¡Cada año se celebra aquí una fiesta enorme y muy colorida, con banderas de arcoíris por todas partes, para celebrar que cada persona puede ser como es! Es una de las celebraciones más grandes de toda Europa.'
          },
          architecture: {
            adult: 'El barrio conserva un caserío de finales del siglo XIX y principios del XX, hoy rehabilitado, que combina comercios independientes, galerías, terrazas y locales de ocio en torno a la Plaza de Chueca, cuyos discos de colores iluminados por la noche se han convertido en una imagen característica del barrio.',
            kids: '¡Por la noche, la plaza principal del barrio se llena de luces de colores en el suelo! Los edificios son de hace más de 100 años, pero ahora están llenos de tiendas y bares muy animados.'
          }
        }
      },
      {
        id: 'barrio-malasana',
        name: { adult: 'Barrio de Malasaña', kids: 'Barrio de Malasaña — El Barrio de la Joven Valiente 🎗️' },
        subtitle: {
          adult: 'De heroína de 1808 a cuna de la Movida madrileña',
          kids: '¡Lleva el nombre de una joven muy valiente!'
        },
        category: CATEGORIES.HIDDEN,
        coords: [40.428681, -3.703169],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Calle_de_Manuela_Malasa%C3%B1a_south.JPG/330px-Calle_de_Manuela_Malasa%C3%B1a_south.JPG',
        audio: { duration: 155, title: { adult: 'Audioguía: Barrio de Malasaña', kids: '¡Aventura Sonora: El Barrio de la Joven Valiente!' } },
        tabs: {
          history: {
            adult: 'El barrio, antiguamente llamado Maravillas, cambió su nombre popular en honor a Manuela Malasaña, una joven costurera de 17 años que murió el 2 de mayo de 1808 durante el levantamiento popular de Madrid contra la ocupación napoleónica. Existen dos versiones sobre su muerte: que cayó abasteciendo de munición a su padre durante el combate, o que fue ejecutada en la misma plaza tras ser sorprendida con unas tijeras de costurera, confundidas con un arma.',
            kids: '¡Este barrio lleva el nombre de una chica joven, de solo 17 años, que fue muy valiente durante un momento muy difícil para Madrid, hace más de 200 años! Antes el barrio se llamaba de otra forma distinta, Maravillas.'
          },
          legends: {
            adult: 'Casi dos siglos después de la muerte de Manuela Malasaña, el barrio volvió a protagonizar un momento histórico: en la efervescente década de 1980, tras el final de la dictadura, se convirtió en el epicentro de la Movida Madrileña, un movimiento contracultural que revolucionó el arte, la música y la sociedad española, atrayendo a artistas y jóvenes en busca de nuevas formas de expresión tras años de censura.',
            kids: '¡Hace unos 40 años, este barrio se llenó de músicos, artistas y gente con ganas de crear cosas nuevas después de una época en la que no se podía hacer casi nada libremente! Fue un momento muy especial e importante para toda España.'
          },
          architecture: {
            adult: 'El barrio conserva un trazado de calles estrechas del siglo XVIII y XIX, hoy salpicado de comercios vintage, cafés alternativos y galerías, en un contraste constante entre edificios históricos rehabilitados y una vida cultural marcadamente contemporánea, heredera directa del espíritu de los años 80.',
            kids: '¡Las calles de este barrio son antiguas, pero están llenas de tiendas modernas y curiosas! Es una mezcla muy especial entre lo de siempre y lo nuevo.'
          }
        }
      },
      {
        id: 'barrio-letras',
        name: { adult: 'Barrio de las Letras', kids: 'Barrio de las Letras — El Barrio de los Escritores Rivales ✒️' },
        subtitle: {
          adult: 'Donde vivieron Cervantes, Lope de Vega y Quevedo',
          kids: '¡Los versos de poetas famosos están escritos en el suelo!'
        },
        category: CATEGORIES.HIDDEN,
        coords: [40.4133, -3.6974],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Barrio_de_las_Letras_%28Madrid%29_01.jpg/330px-Barrio_de_las_Letras_%28Madrid%29_01.jpg',
        audio: { duration: 158, title: { adult: 'Audioguía: Barrio de las Letras', kids: '¡Aventura Sonora: El Barrio de los Escritores Rivales!' } },
        tabs: {
          history: {
            adult: 'En los siglos XVI y XVII, este barrio periférico junto al arroyo del Recoletos y el olivar de Atocha se convirtió en residencia de los grandes escritores del Siglo de Oro español: Miguel de Cervantes, Lope de Vega, Francisco de Quevedo y Luis de Góngora vivieron todos ellos en estas calles, entre corrales de comedias, conventos e imprentas. Lope de Vega compró una casa con jardín en la que ahora es la calle de Cervantes, donde vivió entre 1610 y 1635.',
            kids: '¡En este barrio vivieron, hace 400 años, algunos de los escritores más importantes de toda la historia de España, todos casi vecinos entre ellos! Uno de ellos, Lope de Vega, se compró una casa con jardín que todavía se puede visitar.'
          },
          legends: {
            adult: 'Cervantes y Lope de Vega, vecinos casi de la misma calle, mantuvieron una sonada enemistad literaria. Se cree que Lope, celoso del éxito alcanzado por Cervantes tras la publicación de Don Quijote en 1605, pudo estar detrás del seudónimo "Alonso Fernández de Avellaneda", autor de una segunda parte apócrifa de la novela publicada en 1614 con la clara intención de perjudicar a su rival, un misterio literario que los expertos siguen debatiendo siglos después.',
            kids: '¡Dos de los escritores más famosos de España, que vivían casi puerta con puerta, en realidad no se llevaban nada bien! Se cree que uno de ellos ayudó en secreto a escribir una copia falsa del libro más famoso del otro, ¡para intentar fastidiarle! Todavía hoy los expertos discuten sobre quién lo hizo de verdad.'
          },
          architecture: {
            adult: 'La calle de las Huertas, peatonal y adoquinada, concentra la seña de identidad más visible del barrio: citas y versos de Cervantes, Lope, Quevedo, Góngora y otros autores del Siglo de Oro grabados directamente en el pavimento, convirtiendo el simple paseo en un recorrido de lectura al aire libre.',
            kids: '¡Mira bien al suelo mientras caminas por esta calle! Verás frases y versos escritos por escritores muy famosos de hace siglos, grabados directamente en las piedras. ¡Una calle que se lee con los pies!'
          }
        }
      },
      {
        id: 'plaza-santa-ana',
        name: { adult: 'Plaza de Santa Ana', kids: 'Plaza de Santa Ana — La Plaza de los Poetas Rivales 🎭' },
        subtitle: {
          adult: 'Donde el teatro y la vida nocturna conviven entre estatuas de dramaturgos',
          kids: '¡Dos poetas famosos parecen mirarse desde sus estatuas!'
        },
        category: CATEGORIES.HIDDEN,
        coords: [40.414863, -3.700600],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Plaza_de_Santa_Ana%2C_Madrid_01.jpg/330px-Plaza_de_Santa_Ana%2C_Madrid_01.jpg',
        audio: { duration: 150, title: { adult: 'Audioguía: Plaza de Santa Ana', kids: '¡Aventura Sonora: La Plaza de los Poetas Rivales!' } },
        tabs: {
          history: {
            adult: 'La plaza actual nació en 1810, cuando José I Bonaparte ordenó derribar el antiguo convento carmelita de Santa Ana, que le da nombre, dentro de sus reformas urbanísticas de Madrid. Pero la zona ya era, desde los siglos XVI y XVII, lugar de paso habitual de Lope de Vega, Cervantes y Calderón de la Barca. En su lado este se alza el Teatro Español, el más antiguo de Madrid, construido sobre el antiguo Corral del Príncipe, uno de los corrales de comedias donde se estrenaban las grandes obras del Siglo de Oro.',
            kids: 'Esta plaza se creó hace más de 200 años, tras derribar un convento antiguo que le dio su nombre. Pero mucho antes, por aquí ya paseaban algunos de los escritores más famosos de España. Uno de los edificios, el Teatro Español, es el teatro más antiguo de todo Madrid.'
          },
          legends: {
            adult: 'La plaza reúne dos monumentos a dramaturgos con casi 120 años de diferencia: la estatua de Calderón de la Barca, inaugurada en 1880 con relieves de obras como La vida es sueño, y la de Federico García Lorca, instalada en 1998 con motivo del centenario de su nacimiento, que aparece sosteniendo una alondra a punto de volar hacia el propio teatro. Además, el hotel Reina Victoria, construido a principios del siglo XX en el lado oeste, se convirtió en punto de encuentro predilecto de los toreros más famosos de la época.',
            kids: '¡En esta plaza hay dos estatuas de escritores famosos que parecen mirarse entre ellos, aunque vivieron en épocas distintas! Uno de ellos sostiene un pajarillo a punto de salir volando hacia el teatro de al lado.'
          },
          architecture: {
            adult: 'La plaza combina edificios decimonónicos con la fachada neoclásica del Teatro Español. Hoy es uno de los núcleos de ocio del Barrio de las Letras, con terrazas, bares de tapas y ambiente nocturno animado, sin perder su vínculo con el mundo del teatro y la literatura.',
            kids: '¡Esta plaza está siempre llena de vida! De día y de noche hay gente sentada en las terrazas, cerca del teatro más antiguo de Madrid.'
          }
        }
      },
      {
        id: 'plaza-de-la-paja',
        name: { adult: 'Plaza de la Paja', kids: 'Plaza de la Paja — La Plaza Antes de la Plaza Mayor 🌾' },
        subtitle: {
          adult: 'El mercado y corazón de Madrid antes de que existiera la Plaza Mayor',
          kids: '¡Aquí compraban paja para las mulas de los curas!'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'austrias', order: 4 },
        coords: [40.41256389, -3.71113611],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Visual_Plaza_de_la_Paja.jpg/330px-Visual_Plaza_de_la_Paja.jpg',
        audio: { duration: 145, title: { adult: 'Audioguía: Plaza de la Paja', kids: '¡Aventura Sonora: La Plaza Antes de la Plaza Mayor!' } },
        tabs: {
          history: {
            adult: 'Durante los siglos XIII y XIV, la Plaza de la Paja fue el gran mercado y auténtico centro neurálgico de Madrid, mucho antes de que existiera la Plaza Mayor. Su nombre proviene de la venta de paja para alimentar a las mulas de los sacerdotes que servían en la cercana Capilla del Obispo, construida entre 1520 y 1535 por la familia Vargas para albergar los restos de San Isidro, patrón de la ciudad. La plaza perdió protagonismo comercial a partir del siglo XV, cuando la nueva Plaza Mayor desplazó la actividad mercantil.',
            kids: 'Hace muchísimos siglos, antes de que existiera la Plaza Mayor que conocemos hoy, ¡esta pequeña plaza era el mercado más importante de todo Madrid! Aquí se vendía paja para dar de comer a las mulas.'
          },
          legends: {
            adult: 'Junto a la plaza se esconde el Jardín del Príncipe de Anglona, uno de los pocos jardines nobiliarios del siglo XVIII conservados en Madrid. Se cuenta que cuando el cuerpo de San Isidro fue localizado en este entorno a finales del siglo XIII, dos siglos después de su muerte, se constató que el cadáver no presentaba signos de descomposición, un hecho que alimentó su fama de santidad entre los madrileños.',
            kids: '¡Justo al lado de esta plaza se esconde un jardín secreto que casi nadie conoce! Y cuenta la leyenda que el cuerpo del santo patrón de Madrid se encontró aquí cerca en un estado sorprendentemente conservado, mucho tiempo después de morir.'
          },
          architecture: {
            adult: 'Es una de las plazas de aspecto más medieval de Madrid, de trazado irregular y escala reducida, flanqueada por el Palacio de los Vargas y la Capilla del Obispo. Conserva un ambiente recogido y castizo en pleno barrio de La Latina, muy popular para el tapeo y como punto de partida para pasear por el Madrid de los Austrias.',
            kids: '¡Esta plaza parece sacada de un cuento medieval! Sus calles estrechas y curvas te hacen sentir como si viajaras varios siglos atrás.'
          }
        }
      },
      {
        id: 'calle-cuchilleros',
        name: { adult: 'Calle de Cuchilleros', kids: 'Calle de Cuchilleros — La Calle de los Fabricantes de Cuchillos 🔪' },
        subtitle: {
          adult: 'Empinada calle porticada, hogar del restaurante más antiguo del mundo',
          kids: '¡Aquí está el restaurante más viejo del mundo entero!'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'austrias', order: 2 },
        coords: [40.41410556, -3.70810278],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Calle_de_Cuchilleros_%28Madrid%29_01.jpg/330px-Calle_de_Cuchilleros_%28Madrid%29_01.jpg',
        audio: { duration: 155, title: { adult: 'Audioguía: Calle de Cuchilleros', kids: '¡Aventura Sonora: La Calle de los Fabricantes de Cuchillos!' } },
        tabs: {
          history: {
            adult: 'La calle debe su nombre al gremio de cuchilleros, artesanos dedicados a fabricar y vender cuchillos, que se instaló aquí desde el siglo XVII por su cercanía con el mercado de carnicería de la Plaza Mayor. Para salvar el pronunciado desnivel entre la plaza y esta zona, el arquitecto Juan Gómez de Mora diseñó en 1617 la escalinata y el Arco de Cuchilleros. En el número 17 se encuentra el Sobrino de Botín, fundado como hostería en 1725, reconocido por el Libro Guinness de los Récords como el restaurante más antiguo del mundo en funcionamiento continuo.',
            kids: 'Esta calle se llama así porque aquí trabajaban los artesanos que fabricaban cuchillos, hace más de 400 años. ¡Y en esta misma calle está el restaurante más antiguo de todo el mundo, según el libro Guinness de los Récords!'
          },
          legends: {
            adult: 'Según la tradición recogida por el propio Guinness, un joven Francisco de Goya trabajó como lavaplatos en Botín en 1765, antes de convertirse en el gran pintor de la corte, aunque conviene tomarlo como anécdota popular más que como hecho biográfico contrastado. Décadas después, Ernest Hemingway fue cliente habitual y mencionó el restaurante en su novela Fiesta. El propio Arco de Cuchilleros alimentó otra leyenda: se dice que el bandolero romántico Luis Candelas usaba las cuevas bajo el arco como escondite para planear sus robos.',
            kids: '¡Cuenta la leyenda que un pintor muy famoso, Goya, trabajó aquí lavando platos cuando era joven, mucho antes de ser famoso! Y se dice que un bandido muy conocido usaba las cuevas bajo el arco como escondite secreto.'
          },
          architecture: {
            adult: 'Calle empedrada, estrecha y en pronunciada pendiente, con soportales y el característico Arco de Cuchilleros como umbral hacia la Plaza Mayor. Conserva un aire castizo y decimonónico que la convierte en una de las estampas más fotografiadas del Madrid de los Austrias.',
            kids: '¡Esta calle es tan empinada que parece una pequeña montaña! Pasar bajo su arco de piedra es como entrar en un Madrid de hace siglos.'
          }
        }
      },
      {
        id: 'descalzas-reales',
        name: { adult: 'Monasterio de las Descalzas Reales', kids: 'Monasterio de las Descalzas Reales — El Convento del Tesoro Escondido 👑' },
        subtitle: {
          adult: 'Fachada austera, interior con tesoros de la realeza española',
          kids: '¡Por fuera parece sencillo, pero por dentro esconde un tesoro!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'main', order: 7 },
        coords: [40.4186602, -3.7062538],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Monasterio_de_las_Descalzas_Reales_%28Madrid%29_01.jpg/330px-Monasterio_de_las_Descalzas_Reales_%28Madrid%29_01.jpg',
        audio: { duration: 160, title: { adult: 'Audioguía: Monasterio de las Descalzas Reales', kids: '¡Aventura Sonora: El Convento del Tesoro Escondido!' } },
        tabs: {
          history: {
            adult: 'Fundado en 1559 por Juana de Austria, hija de Carlos V y hermana de Felipe II, sobre el palacio del siglo XVI donde ella misma había nacido. Tras enviudar joven, Juana transformó su antigua residencia en un convento de clarisas franciscanas. El maestro de obras Antonio Sillero dirigió las reformas entre 1559 y 1564, y Juan Bautista de Toledo añadió elementos renacentistas, entre ellos la notable escalera monumental. Juana de Austria murió en 1573 y está enterrada en una capilla de mármol del propio monasterio.',
            kids: 'Este convento lo fundó una princesa española, Juana de Austria, en el mismo palacio donde ella había nacido. Cuando se quedó viuda muy joven, decidió convertir su casa en un convento para monjas.'
          },
          legends: {
            adult: 'El convento se convirtió en refugio de viudas y mujeres solteras de la alta nobleza y la familia real, muchas de las cuales aportaron a su ingreso auténticas fortunas en joyas, tapices y obras de arte, lo que explica su excepcional patrimonio pese a la austera fachada exterior. Tradicionalmente solo podían habitar el convento 33 monjas a la vez, en referencia simbólica a la edad de Cristo, y aunque sigue siendo un convento de clausura activo, un permiso especial del Vaticano de 1960 permite las visitas turísticas a diario a determinadas zonas.',
            kids: '¡Aunque por fuera este edificio parece muy sencillo, por dentro guarda auténticos tesoros! Muchas mujeres nobles que vivieron aquí trajeron joyas y obras de arte muy valiosas, y todavía hoy viven monjas dentro.'
          },
          architecture: {
            adult: 'Combina una fachada exterior sobria, casi anónima, con un interior de extraordinaria riqueza: la célebre escalera monumental decorada con frescos del siglo XVII y la colección de tapices flamencos El Triunfo de la Eucaristía, tejidos en Bruselas a partir de diseños de Rubens y donados por la infanta Isabel Clara Eugenia.',
            kids: '¡Es un edificio de sorpresas! Por fuera no parece gran cosa, pero al entrar descubres escaleras pintadas y telas gigantes bordadas hace siglos.'
          }
        }
      },
      {
        id: 'monasterio-encarnacion',
        name: { adult: 'Real Monasterio de la Encarnación', kids: 'Real Monasterio de la Encarnación — El Convento de la Sangre Milagrosa 🩸' },
        subtitle: {
          adult: 'Reliquias reales y un milagro que se repite cada 27 de julio',
          kids: '¡Aquí guardan una reliquia que "cambia" una vez al año!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'palacio', order: 7 },
        coords: [40.4200041, -3.7115521],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Real_Monasterio_de_la_Encarnaci%C3%B3n_%28Madrid%29_01.jpg/330px-Real_Monasterio_de_la_Encarnaci%C3%B3n_%28Madrid%29_01.jpg',
        audio: { duration: 165, title: { adult: 'Audioguía: Real Monasterio de la Encarnación', kids: '¡Aventura Sonora: El Convento de la Sangre Milagrosa!' } },
        visitInfo: {
          hours: {
            adult: 'Martes a sábado 10:00-14:00 y 16:00-18:30, domingos 10:00-15:00. Cerrado los lunes. Solo se visita con guía (incluida en el precio).',
            kids: 'Abre de martes a domingo. Los lunes está cerrado. Se visita siempre con un guía.'
          },
          price: {
            adult: '8€ entrada general. Gratis miércoles y jueves de 16:00 a 18:30.',
            kids: '8€, pero es gratis los miércoles y jueves por la tarde.'
          },
          link: 'https://tickets.patrimonionacional.es/es/tickets/monasterio-encarnacion'
        },
        tabs: {
          history: {
            adult: 'Construido entre 1611 y 1616 por orden de la reina Margarita de Austria, esposa de Felipe III, según proyecto de Juan Gómez de Mora y Alberto de la Madre de Dios, como convento de monjas agustinas de clausura vinculado a la familia real. La iglesia fue reformada posteriormente por Ventura Rodríguez entre 1755 y 1767. El monasterio conserva una colección de más de dos mil reliquias, una de las más importantes de España.',
            kids: 'Este convento lo mandó construir una reina española hace más de 400 años, para que vivieran monjas muy cerca del Palacio Real. Guarda una colección enorme de objetos religiosos muy antiguos, ¡más de dos mil!'
          },
          legends: {
            adult: 'Entre sus reliquias más veneradas se encuentran dos fragmentos de San Pantaleón, un poco de sangre y un hueso, regalo del papa Paulo V a comienzos del siglo XVII. Cada 27 de julio, festividad del santo, la sangre se licua según la tradición, pasando de un estado sólido y oscuro a líquido y rojizo, para volver a solidificarse el resto del año, sin que exista una explicación científica reconocida. En 1724 la propia Inquisición organizó una investigación formal, con testigos que verificaron el fenómeno durante siete años consecutivos antes de declararlo auténtico.',
            kids: '¡Aquí se guarda una reliquia muy misteriosa! Cuenta la tradición que, cada 27 de julio, una pequeña muestra de sangre muy antigua cambia de forma sólida a líquida, sin que nadie sepa explicar por qué. ¡Lleva pasando así desde hace siglos!'
          },
          architecture: {
            adult: 'Fachada herreriana sobria de granito y ladrillo, típica de la arquitectura religiosa madrileña del siglo XVII, con un interior que combina la severidad exterior con salas ricamente decoradas donde se exhiben pinturas, esculturas y el relicario.',
            kids: '¡Por fuera es un edificio serio y de piedra gris, pero dentro esconde salas llenas de objetos religiosos antiguos y misteriosos!'
          }
        }
      },
      {
        id: 'museo-historia-madrid',
        name: { adult: 'Museo de Historia de Madrid', kids: 'Museo de Historia de Madrid — El Museo de la Portada de Piedra Tallada 🏛️' },
        subtitle: {
          adult: 'Un antiguo hospicio barroco que repasa la historia de la capital',
          kids: '¡Su entrada parece un decorado de teatro tallado en piedra!'
        },
        category: CATEGORIES.HISTORY,
        coords: [40.425833, -3.700833],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Museo_de_Historia_de_Madrid_%28Espa%C3%B1a%29_03.jpg/330px-Museo_de_Historia_de_Madrid_%28Espa%C3%B1a%29_03.jpg',
        audio: { duration: 150, title: { adult: 'Audioguía: Museo de Historia de Madrid', kids: '¡Aventura Sonora: El Museo de la Portada de Piedra Tallada!' } },
        tabs: {
          history: {
            adult: 'El edificio fue el antiguo Real Hospicio de San Fernando, construido entre 1721 y 1726 bajo el reinado de Felipe V para acoger a pobres y niños abandonados. Pedro de Ribera diseñó la fachada y portada principal, con el conjunto escultórico obra de Juan Ron. En 1929 se inauguró aquí el Museo Municipal, renombrado Museo de Historia de Madrid en 2007.',
            kids: 'Este edificio fue antes un hospicio, un lugar donde se acogía a niños que no tenían familia, hace unos 300 años. Ahora es un museo que cuenta toda la historia de Madrid.'
          },
          legends: {
            adult: 'La portada, dedicada a San Fernando, está considerada una de las obras cumbre del barroco civil español, con ángeles que parecen descorrer cortinas de piedra en una auténtica escenografía teatral tallada en granito y piedra caliza.',
            kids: '¡Mira bien la entrada del museo! Está tallada en piedra con tanto detalle que parece un decorado de teatro, con ángeles descorriendo cortinas de piedra de verdad.'
          },
          architecture: {
            adult: 'Barroco madrileño de Pedro de Ribera, con la fachada-portada como pieza más fotografiada del edificio. Hoy alberga la colección municipal que recorre la historia de Madrid desde 1561, año en que se convirtió en capital, hasta inicios del siglo XX.',
            kids: '¡Dentro puedes ver cómo era Madrid hace siglos, con planos, cuadros y objetos antiguos de la ciudad!'
          }
        }
      },
      {
        id: 'museo-romanticismo',
        name: { adult: 'Museo del Romanticismo', kids: 'Museo del Romanticismo — La Casa que Viaja en el Tiempo 🕰️' },
        subtitle: {
          adult: 'Un palacete que recrea la vida burguesa del Madrid del siglo XIX',
          kids: '¡Cada sala parece congelada hace 200 años!'
        },
        category: CATEGORIES.HISTORY,
        coords: [40.4260218, -3.6989394],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Museo_del_Romanticismo_-_Fachada_-_Fachada_del_Museo_del_Romanticismo.jpg/330px-Museo_del_Romanticismo_-_Fachada_-_Fachada_del_Museo_del_Romanticismo.jpg',
        audio: { duration: 150, title: { adult: 'Audioguía: Museo del Romanticismo', kids: '¡Aventura Sonora: La Casa que Viaja en el Tiempo!' } },
        visitInfo: {
          hours: {
            adult: 'Mayo a octubre: martes a sábado 9:30-20:30, domingos 10:00-15:00. Noviembre a abril: martes a sábado 9:30-18:30, domingos 10:00-15:00. Cerrado los lunes.',
            kids: 'Abre de martes a domingo. Los lunes está cerrado.'
          },
          price: {
            adult: '3€ general, 1,50€ reducida. Gratis sábados desde las 14:00 y todos los domingos. No hay venta de entradas online: se compran en la taquilla del museo.',
            kids: '3€, pero es gratis los sábados por la tarde y todos los domingos. Se compra en la puerta, no por internet.'
          }
        },
        tabs: {
          history: {
            adult: 'Palacio construido entre 1776 y 1779 por el arquitecto Manuel Rodríguez para el marqués de Matallana; a finales del siglo XVIII pasó a los condes de Puebla del Maestre, que lo habitaron hasta 1915. El museo nace de la colección donada al Estado en 1921 por Benigno de la Vega-Inclán, marqués de Vega-Inclán, y abrió sus puertas el 1 de junio de 1924.',
            kids: 'Esta casa palaciega tiene casi 250 años. Un noble español decidió donar toda su colección de objetos antiguos al Estado para que se pudiera visitar, y así nació este museo hace un siglo.'
          },
          legends: {
            adult: 'Su fundador, el marqués de Vega-Inclán, fue además el primer Comisario Regio de Turismo de España, un pionero en convertir el patrimonio histórico español en atractivo turístico mucho antes de que existiera el concepto moderno de turismo cultural.',
            kids: '¡La persona que creó este museo fue de las primeras en España en pensar que visitar lugares históricos podía ser un plan turístico divertido, hace ya más de 100 años!'
          },
          architecture: {
            adult: 'Palacete de trazas neoclásicas reformado y ornamentado a lo largo del siglo XIX. Sus salas recrean ambientes domésticos del Romanticismo español, salón, alcoba, gabinete, con mobiliario, pintura y objetos originales de la época.',
            kids: '¡Al entrar en cada sala parece que viajas atrás en el tiempo! Los muebles, los cuadros y hasta los objetos de decoración son de verdad de hace 200 años.'
          }
        }
      },
      {
        id: 'museo-cerralbo',
        name: { adult: 'Museo Cerralbo', kids: 'Museo Cerralbo — El Palacio del Marqués Coleccionista 🗝️' },
        subtitle: {
          adult: 'La colección privada de un marqués, conservada intacta',
          kids: '¡Un marqués guardó aquí más de 50.000 objetos curiosos!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'palacio', order: 5 },
        coords: [40.423684, -3.714577],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Palacio_del_Marqu%C3%A9s_de_Cerralbo_%28Madrid%29_01.jpg/330px-Palacio_del_Marqu%C3%A9s_de_Cerralbo_%28Madrid%29_01.jpg',
        audio: { duration: 155, title: { adult: 'Audioguía: Museo Cerralbo', kids: '¡Aventura Sonora: El Palacio del Marqués Coleccionista!' } },
        visitInfo: {
          hours: {
            adult: 'Martes a sábado 9:30-15:00 (jueves también 17:00-20:00), domingos y festivos 10:00-15:00. Cerrado los lunes.',
            kids: 'Abre de martes a domingo. Los lunes está cerrado.'
          },
          price: {
            adult: '3€ general, 1,50€ reducida. Gratis los jueves de 17:00 a 20:00 y todos los domingos. No hay venta de entradas online: se compran en la taquilla del museo.',
            kids: '3€, pero es gratis los jueves por la tarde y todos los domingos. Se compra en la puerta, no por internet.'
          }
        },
        tabs: {
          history: {
            adult: 'Palacio mandado construir entre 1883 y 1893 por Enrique de Aguilera y Gamboa, XVII marqués de Cerralbo, según proyecto del arquitecto Luis María Cabello y Lapiedra pero siguiendo el gusto e ideas personales del propio marqués. Se concibió desde el inicio con doble función, vivienda nobiliaria y museo, y fue donado al Estado para conservar la colección unida.',
            kids: 'Un marqués mandó construir este palacio para vivir en él, hace más de 130 años, pero pensando desde el principio en que algún día se convirtiera en museo con todas sus cosas dentro.'
          },
          legends: {
            adult: 'El Salón de Baile está decorado con paneles de ágata de Granada, mármoles y enormes espejos venecianos que multiplican las luces y reflejos hasta el infinito; en el techo, los frescos representan a las divinidades del Olimpo. El marqués fue además pionero de la arqueología española, organizando más de 150 excavaciones.',
            kids: '¡El salón de baile de este palacio tiene espejos gigantes que repiten la luz una y otra vez, como si no se acabara nunca! El marqués que vivió aquí también excavó ruinas antiguas por toda España.'
          },
          architecture: {
            adult: 'Palacio historicista del siglo XIX que conserva intacta la instalación museográfica original del propio marqués, con más de 50.000 obras repartidas en salones que recrean la vida aristocrática decimonónica.',
            kids: '¡Cada sala está llena hasta arriba de objetos curiosos: armaduras, cuadros, relojes y muchísimas cosas más, tal y como las dejó el marqués!'
          }
        }
      },
      {
        id: 'real-academia-bellas-artes',
        name: { adult: 'Real Academia de Bellas Artes de San Fernando', kids: 'Real Academia de Bellas Artes de San Fernando — La Escuela que Suspendió a Goya 🎨' },
        subtitle: {
          adult: 'Donde estudiaron, y no siempre triunfaron, los grandes artistas españoles',
          kids: '¡Uno de los pintores más famosos de España suspendió aquí el examen!'
        },
        category: CATEGORIES.HISTORY,
        coords: [40.417423, -3.700378],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Palacio_de_Goyeneche_-_Real_Academia_de_Bellas_Artes_de_San_Fernando.jpg/330px-Palacio_de_Goyeneche_-_Real_Academia_de_Bellas_Artes_de_San_Fernando.jpg',
        audio: { duration: 155, title: { adult: 'Audioguía: Real Academia de Bellas Artes de San Fernando', kids: '¡Aventura Sonora: La Escuela que Suspendió a Goya!' } },
        visitInfo: {
          hours: {
            adult: 'Martes a domingo 10:00-15:00, incluidos festivos. Cerrado los lunes.',
            kids: 'Abre de martes a domingo por la mañana. Los lunes está cerrado.'
          },
          price: {
            adult: '9€ general, 5€ reducida (mayores de 65, jubilados, estudiantes). Gratis de martes a viernes de 13:30 a 15:00.',
            kids: '9€, pero hay un ratito gratis cada tarde entre semana.'
          },
          link: 'https://www.realacademiabellasartessanfernando.com/visitas/tarifas-y-reservas/'
        },
        tabs: {
          history: {
            adult: 'El Palacio de Goyeneche fue diseñado en 1720 por José Benito de Churriguera como residencia del financiero Juan de Goyeneche, y completado tras su muerte por su hermano Alberto de Churriguera. En 1773 Carlos III compró el edificio a los herederos de Goyeneche para instalar la Real Academia de Bellas Artes de San Fernando, cuya primera sede había estado en la Casa de la Panadería de la Plaza Mayor.',
            kids: 'Este edificio era la casa de un rico financiero, hace 300 años. Después, un rey lo compró para convertirlo en una escuela de arte muy importante, que sigue funcionando hoy en día.'
          },
          legends: {
            adult: 'Goya intentó ingresar como alumno y suspendió el examen de acceso; años después, en 1795, la propia institución lo nombró director de pintura. Picasso estudió brevemente aquí, y Salvador Dalí fue expulsado en los años 20 tras cuestionar la competencia de un profesor del tribunal.',
            kids: '¡Goya, uno de los pintores más famosos de España, suspendió el examen para entrar en esta escuela cuando era joven! Años después, la misma escuela lo nombró su director de pintura. Otro pintor muy famoso, Dalí, fue incluso expulsado de aquí.'
          },
          architecture: {
            adult: 'El arquitecto Diego de Villanueva eliminó posteriormente los elementos barrocos originales para adaptar el edificio al gusto neoclásico. Hoy alberga una pinacoteca con obras de Goya, Zurbarán, Rubens y otros grandes maestros.',
            kids: '¡Dentro de esta escuela hay un museo con cuadros pintados por artistas súper famosos, incluidos algunos que estudiaron aquí mismo!'
          }
        }
      },
      {
        id: 'palacio-longoria',
        name: { adult: 'Palacio de Longoria', kids: 'Palacio de Longoria — La Casa Tarta 🎂' },
        subtitle: {
          adult: 'La joya modernista de Madrid, a menudo confundida con obra de Gaudí',
          kids: '¡Los madrileños la llaman "la casa pastel" por sus formas onduladas!'
        },
        category: CATEGORIES.HISTORY,
        coords: [40.4250435, -3.6969586],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Palacio_Longoria_%28Madrid%29_08.jpg/330px-Palacio_Longoria_%28Madrid%29_08.jpg',
        audio: { duration: 150, title: { adult: 'Audioguía: Palacio de Longoria', kids: '¡Aventura Sonora: La Casa Tarta!' } },
        tabs: {
          history: {
            adult: 'Construido entre 1902 y 1904 por el arquitecto catalán José Grases Riera por encargo del financiero y político Francisco Javier González Longoria. Desde 1950 es la sede de la SGAE, la Sociedad General de Autores y Editores, que custodia aquí el principal archivo de obras líricas de España.',
            kids: 'Este edificio tan curioso lo construyó un arquitecto hace más de 100 años para un financiero español. Hoy es la sede de la organización que protege los derechos de autores y compositores de España.'
          },
          legends: {
            adult: 'Se atribuye erróneamente a Gaudí con frecuencia; en realidad su autor, Grases Riera, fue compañero de estudios de Gaudí en la Escuela de Arquitectura de Barcelona, no discípulo suyo. Los madrileños lo conocen popularmente como la casa tarta o la casa pastel por sus formas onduladas.',
            kids: '¡Mucha gente piensa que este edificio lo diseñó el famoso arquitecto Gaudí, pero en realidad no fue él, aunque estudiaron juntos! Los vecinos lo llaman cariñosamente "la casa tarta" por sus formas redondeadas.'
          },
          architecture: {
            adult: 'El edificio modernista más representativo de Madrid, con fachadas de piedra artificial de formas orgánicas y vegetales que envuelven toda la superficie; en la galería trasera destacan soportes tallados en hierro con forma de palmera.',
            kids: '¡Sus paredes están talladas con formas que parecen olas y plantas, nada de líneas rectas! Es de los edificios más originales de todo Madrid.'
          }
        }
      },
      {
        id: 'edificio-metropolis',
        name: { adult: 'Edificio Metrópolis', kids: 'Edificio Metrópolis — El Edificio de la Estatua que Cambió 🗽' },
        subtitle: {
          adult: 'La cúpula dorada de Gran Vía, coronada por una estatua que no es la original',
          kids: '¡La estatua de oro que ves hoy no es la primera que tuvo este edificio!'
        },
        category: CATEGORIES.HISTORY,
        coords: [40.41877778, -3.69746667],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edificio_Metr%C3%B3polis_%286_de_diciembre_de_2005%2C_Madrid%29.JPG/330px-Edificio_Metr%C3%B3polis_%286_de_diciembre_de_2005%2C_Madrid%29.JPG',
        audio: { duration: 155, title: { adult: 'Audioguía: Edificio Metrópolis', kids: '¡Aventura Sonora: El Edificio de la Estatua que Cambió!' } },
        tabs: {
          history: {
            adult: 'Encargado por la aseguradora La Unión y el Fénix, que convocó un concurso internacional ganado por los arquitectos franceses Jules y Raymond Février, se construyó entre 1907 y 1911, con una cúpula de pizarra de 45 metros. El acabado final corrió a cargo del arquitecto español Luis Esteve.',
            kids: 'Este edificio con cúpula dorada lo construyó, hace más de un siglo, una compañía de seguros que ganó un concurso internacional de arquitectura.'
          },
          legends: {
            adult: 'La estatua de bronce que corona hoy el edificio, la Victoria Alada de Federico Coullaut-Valera, instalada entre 1975 y 1977, no es la original. La primera, obra del escultor francés René de Saint-Marceaux, representaba al propio Ave Fénix con una figura de Ganímedes. Cuando en 1975 La Unión y el Fénix vendió el edificio a la aseguradora Metrópolis, se llevó su estatua original a su nueva sede, y el edificio pasó a llamarse Metrópolis con la nueva Victoria Alada.',
            kids: '¡La estatua dorada que corona este edificio no es la que tuvo al principio! La primera estatua se la llevó la empresa que lo construyó cuando vendió el edificio, y pusieron una nueva, la que ves hoy volando en lo alto.'
          },
          architecture: {
            adult: 'Estilo afrancesado con cúpula de pizarra dorada visible desde gran parte de Madrid; ocupa la esquina entre Gran Vía y Alcalá con una fachada profusamente esculpida.',
            kids: '¡Su cúpula dorada brilla tanto que se ve desde muy lejos! Está justo en una esquina muy importante, donde se encuentran dos calles famosas de Madrid.'
          }
        }
      },
      {
        id: 'palacio-cibeles-centrocentro',
        name: { adult: 'Palacio de Cibeles (CentroCentro)', kids: 'Palacio de Cibeles (CentroCentro) — Nuestra Señora de las Comunicaciones 📮' },
        subtitle: {
          adult: 'De sede de Correos a mirador y centro cultural con el mejor balcón de Madrid',
          kids: '¡Antes de ser ayuntamiento, aquí se repartía todo el correo de España!'
        },
        category: CATEGORIES.HISTORY,
        coords: [40.418611, -3.691667],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Palacio_de_Comunicaciones_-_46.jpg/330px-Palacio_de_Comunicaciones_-_46.jpg',
        audio: { duration: 155, title: { adult: 'Audioguía: Palacio de Cibeles', kids: '¡Aventura Sonora: Nuestra Señora de las Comunicaciones!' } },
        tabs: {
          history: {
            adult: 'Ganó el concurso de 1904 la propuesta de dos jóvenes arquitectos de apenas treinta años, Antonio Palacios y Joaquín Otamendi. Se construyó entre 1907 y 1917 como sede central de Correos y Telégrafos, sobre terrenos que antes ocupaban los jardines de recreo del Buen Retiro. En 2007 el Ayuntamiento de Madrid adquirió el edificio y lo transformó en centro cultural y sede consistorial.',
            kids: 'Este edificio tan grande se construyó hace más de 100 años para repartir todas las cartas y telegramas de España. Hoy es el ayuntamiento de Madrid y también un centro cultural que se puede visitar.'
          },
          legends: {
            adult: 'Por su monumentalidad, similar a la de una catedral, los madrileños lo bautizaron con el apodo cariñoso de Nuestra Señora de las Comunicaciones.',
            kids: '¡Este edificio es tan enorme y bonito que parece una catedral! Por eso los madrileños le pusieron un mote muy cariñoso, como si fuera una señora importante.'
          },
          architecture: {
            adult: 'Estilo ecléctico que combina el neoplateresco, el modernismo y la secesión vienesa, con fachada de piedra de Novelda y un cimborrio octogonal rematado con reloj. Hoy tiene mirador panorámico, exposiciones y terraza-restaurante abiertos al público.',
            kids: '¡Puedes subir hasta arriba del todo y ver Madrid entero desde su mirador! Es una de las mejores vistas de toda la ciudad.'
          }
        }
      },
      {
        id: 'plaza-alonso-martinez',
        name: { adult: 'Plaza de Alonso Martínez', kids: 'Plaza de Alonso Martínez — La Rotonda del Jurista 👨‍⚖️' },
        subtitle: {
          adult: 'Rotonda histórica que homenajea al creador del Código Civil español',
          kids: '¡Lleva el nombre de quien escribió las leyes más importantes de España!'
        },
        category: CATEGORIES.HIDDEN,
        coords: [40.4276958, -3.6957454],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Madrid_-_Plaza_de_Alonso_Mart%C3%ADnez_1.jpg/330px-Madrid_-_Plaza_de_Alonso_Mart%C3%ADnez_1.jpg',
        audio: { duration: 140, title: { adult: 'Audioguía: Plaza de Alonso Martínez', kids: '¡Aventura Sonora: La Rotonda del Jurista!' } },
        tabs: {
          history: {
            adult: 'Surgió durante la expansión decimonónica de Madrid tras derribarse la cerca de Felipe IV en 1868; se llamó primero Glorieta de Santa Bárbara y, desde 1891, tomó el nombre del jurista y político Manuel Alonso Martínez, artífice del Código Civil español e impulsor del Canal de Isabel II.',
            kids: 'Esta plaza se formó cuando Madrid empezó a crecer, hace más de 150 años, tras derribar una antigua muralla. Lleva el nombre de un abogado muy importante que ayudó a escribir las leyes de España.'
          },
          legends: {
            adult: 'La fuente ornamental que hoy ocupa el centro de la glorieta se instaló en 1996 dentro de un plan municipal de remodelación de plazas, con quince surtidores centrales y unos ochenta perimetrales.',
            kids: '¡La fuente que ves en el centro de la plaza tiene casi cien chorros de agua distintos! Se instaló hace unos 30 años para embellecer la plaza.'
          },
          architecture: {
            adult: 'Rotonda de tráfico donde confluyen las calles de Génova, Almagro, Santa Engracia y Sagasta; zona de ambiente universitario y de ocio nocturno, con numerosos bares y buena comunicación de metro.',
            kids: '¡Aquí se juntan varias calles importantes de Madrid! Es una zona con muchos bares y mucho ambiente, sobre todo por las noches.'
          }
        }
      },
      {
        id: 'calle-fuencarral',
        name: { adult: 'Calle de Fuencarral', kids: 'Calle de Fuencarral — La Calle que Une Dos Barrios Distintos 🛍️' },
        subtitle: {
          adult: 'Del camino rural a arteria comercial entre Malasaña y Chueca',
          kids: '¡Un antiguo camino de tierra se convirtió en una de las calles más de moda!'
        },
        category: CATEGORIES.HIDDEN,
        coords: [40.42479167, -3.70076111],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Calle_de_Fuencarral_%28Madrid%29_01.jpg/330px-Calle_de_Fuencarral_%28Madrid%29_01.jpg',
        audio: { duration: 145, title: { adult: 'Audioguía: Calle de Fuencarral', kids: '¡Aventura Sonora: La Calle que Une Dos Barrios Distintos!' } },
        tabs: {
          history: {
            adult: 'Nació como camino rural que conectaba Madrid con el entonces pueblo de Fuencarral, tomando su nombre de una fuente situada junto a esa ruta. Durante los reinados de Felipe II y Felipe III se fue urbanizando hasta convertirse en una de las calles más largas de la ciudad.',
            kids: 'Esta calle empezó siendo un simple camino de tierra que llevaba hasta un pueblo cercano llamado Fuencarral. Con el tiempo se convirtió en una de las calles más largas de Madrid.'
          },
          legends: {
            adult: 'El primer tramo se peatonalizó en 2009, consolidando la calle como corazón de la cultura urbana alternativa madrileña. Cerca de allí estuvo el Mercado de San Ildefonso, el primer mercado de abastos cubierto de Madrid, activo entre 1835 y 1970, hoy reconvertido en mercado gastronómico.',
            kids: '¡Cerca de aquí estuvo el primer mercado cubierto de todo Madrid, hace casi 200 años! Hoy en día se ha transformado en un mercado moderno de comida.'
          },
          architecture: {
            adult: 'Arteria que enlaza Malasaña, de espíritu bohemio y alternativo, con Chueca, barrio LGTBI animado y diverso; concentra comercio de moda, desde marcas internacionales hasta tiendas vintage y alternativas.',
            kids: '¡Caminar por esta calle es como pasar por dos barrios muy distintos a la vez! Está llena de tiendas de ropa de todo tipo, desde las más modernas hasta las más originales.'
          }
        }
      },
      {
        id: 'calle-montera',
        name: { adult: 'Calle de la Montera', kids: 'Calle de la Montera — La Calle del Gorro Perdido 🎩' },
        subtitle: {
          adult: 'Tres leyendas distintas explican el origen de su nombre',
          kids: '¡Nadie se pone de acuerdo en por qué se llama así!'
        },
        category: CATEGORIES.HIDDEN,
        coords: [40.4185955, -3.7023065],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Calle_de_la_Montera_%28Madrid%29_01.jpg/330px-Calle_de_la_Montera_%28Madrid%29_01.jpg',
        audio: { duration: 145, title: { adult: 'Audioguía: Calle de la Montera', kids: '¡Aventura Sonora: La Calle del Gorro Perdido!' } },
        tabs: {
          history: {
            adult: 'Calle histórica junto a la Puerta del Sol que en siglos pasados tuvo cierto carácter de lujo y elegancia. Desde principios del siglo XX se asocia también a la prostitución visible, aunque actualmente vive un proceso de transformación urbana y comercial.',
            kids: 'Esta calle está pegadita a la Puerta del Sol y ha cambiado mucho a lo largo de los siglos. Ahora mismo está cambiando otra vez, con tiendas y edificios nuevos.'
          },
          legends: {
            adult: 'Existen tres versiones sobre el origen de su nombre: que el rey Sancho IV perdió aquí su montera, o gorro, al cruzar la calle a caballo a toda velocidad; que en tiempos de Felipe III vivió aquí una viuda de un montero real tan bella que sus pretendientes llegaban a batirse en duelo por ella; o una explicación más sencilla, por la forma del terreno, parecida a una montera.',
            kids: '¡Hay tres leyendas distintas sobre por qué esta calle se llama así! Una dice que un rey perdió aquí su gorro montado a caballo, otra habla de una mujer tan guapa que los hombres se retaban a duelo por ella. ¡Elige la que más te guste!'
          },
          architecture: {
            adult: 'Calle peatonal estrecha que conecta Sol con Gran Vía; barrio en transformación, con comercios nuevos y renovación de viviendas conviviendo aún con su pasado.',
            kids: '¡Es una calle estrecha y peatonal que conecta dos zonas muy famosas de Madrid! Cada vez tiene más tiendas nuevas.'
          }
        }
      },
      {
        id: 'plaza-callao',
        name: { adult: 'Plaza del Callao', kids: 'Plaza del Callao — La Plaza de las Pantallas Gigantes 🎬' },
        subtitle: {
          adult: 'El epicentro cinematográfico de Madrid, con nombre de batalla naval',
          kids: '¡Su nombre viene de una batalla en el mar, muy lejos de Madrid!'
        },
        category: CATEGORIES.HIDDEN,
        coords: [40.419953, -3.705799],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/City_of_Madrid_%2818038988892%29.jpg/330px-City_of_Madrid_%2818038988892%29.jpg',
        audio: { duration: 145, title: { adult: 'Audioguía: Plaza del Callao', kids: '¡Aventura Sonora: La Plaza de las Pantallas Gigantes!' } },
        tabs: {
          history: {
            adult: 'Se construyó entre 1917 y 1927 dentro del proyecto urbanístico de la Gran Vía. Su nombre conmemora el Combate del Callao, una batalla naval de 1866 en Perú entre la Armada española y la escuadra aliada de Perú y Chile.',
            kids: 'Esta plaza se construyó hace un siglo, como parte de la gran avenida Gran Vía. Su nombre recuerda una batalla naval que ocurrió muy lejos de aquí, en Sudamérica.'
          },
          legends: {
            adult: 'El Cine Callao se inauguró el 11 de diciembre de 1926, diseñado por el arquitecto Luis Gutiérrez Soto en solo ocho meses, y fue de los primeros cines españoles en proyectar películas sonoras, en 1929.',
            kids: '¡El cine de esta plaza fue uno de los primeros en España en poder poner películas con sonido! Se construyó en tan solo ocho meses, hace casi 100 años.'
          },
          architecture: {
            adult: 'Confluencia emblemática de Gran Vía, flanqueada por el Edificio Carrión y el Cine Callao; uno de los cruces más transitados de Madrid, epicentro del comercio y el ocio cinematográfico.',
            kids: '¡Es una de las plazas con más gente pasando de todo Madrid! Está rodeada de tiendas, cines y pantallas gigantes de publicidad.'
          }
        }
      },
      {
        id: 'edificio-telefonica',
        name: { adult: 'Edificio Telefónica', kids: 'Edificio Telefónica — El Primer Rascacielos de Europa 📞' },
        subtitle: {
          adult: 'El primer rascacielos de Europa, testigo y refugio durante la Guerra Civil',
          kids: '¡Fue el edificio más alto de todo un continente!'
        },
        category: CATEGORIES.HISTORY,
        coords: [40.42038889, -3.70190278],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Edificio_Telefonica_Madrid.jpg/330px-Edificio_Telefonica_Madrid.jpg',
        audio: { duration: 155, title: { adult: 'Audioguía: Edificio Telefónica', kids: '¡Aventura Sonora: El Primer Rascacielos de Europa!' } },
        tabs: {
          history: {
            adult: 'Su construcción se inició en 1926, dirigida por el arquitecto español Ignacio de Cárdenas con el apoyo técnico del ingeniero estadounidense Lewis S. Weeks, representante de la International Telephone and Telegraph Company. Se levantó en apenas tres años combinando acero, hormigón y vidrio con ornamentación artesanal española.',
            kids: 'Este edificio tan alto se construyó hace unos 100 años, en solo tres años, mezclando técnicas de construcción muy modernas para la época con decoraciones típicas españolas.'
          },
          legends: {
            adult: 'Está considerado el primer rascacielos de Europa, con unos 90 metros de altura y entre 13 y 14 plantas. Durante la Guerra Civil se convirtió en puesto de observación y sede de la prensa extranjera; desde aquí enviaron sus crónicas del asedio a Madrid corresponsales como Ernest Hemingway y John Dos Passos.',
            kids: '¡Este fue el primer rascacielos de toda Europa! Muchos años después de construirse, escritores famosos como Ernest Hemingway lo usaron para contar al mundo lo que pasaba en Madrid durante una guerra.'
          },
          architecture: {
            adult: 'Rascacielos de influencia estadounidense adaptado con detalles decorativos españoles; su silueta sigue dominando el perfil de Gran Vía.',
            kids: '¡Su silueta sigue siendo una de las más reconocibles de toda la Gran Vía! Se ve desde muy lejos.'
          }
        }
      },
      {
        id: 'parque-vistillas',
        name: { adult: 'Parque de las Vistillas', kids: 'Parque de las Vistillas — El Mirador de las Trincheras 🌅' },
        subtitle: {
          adult: 'Vistas privilegiadas sobre el Manzanares y huellas de la Guerra Civil',
          kids: '¡Un mirador precioso que también guarda huellas de una guerra!'
        },
        category: CATEGORIES.HIDDEN,
        coords: [40.4110037, -3.7170498],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Parque_de_las_Vistillas_-Madrid_%286952903529%29.jpg/330px-Parque_de_las_Vistillas_-Madrid_%286952903529%29.jpg',
        audio: { duration: 145, title: { adult: 'Audioguía: Parque de las Vistillas', kids: '¡Aventura Sonora: El Mirador de las Trincheras!' } },
        tabs: {
          history: {
            adult: 'Debe su nombre a las magníficas vistas que ofrece sobre el río Manzanares, la Catedral de la Almudena y la Casa de Campo. Es escenario tradicional de las verbenas populares madrileñas.',
            kids: 'Este parque tiene unas vistas preciosas sobre el río de Madrid y sobre la Catedral. Aquí se celebran fiestas populares desde hace mucho tiempo.'
          },
          legends: {
            adult: 'Durante la Guerra Civil, la Casa de Campo, justo enfrente, se convirtió en frente de batalla: en apenas un día de noviembre de 1936 el ejército sublevado ocupó tres cuartas partes del parque. Aún se conservan restos de trincheras en la zona, una de ellas defendida por voluntarios internacionales, probablemente la mejor conservada de la Batalla de Madrid.',
            kids: '¡Justo enfrente de este parque hubo una batalla muy importante hace casi 90 años! Todavía se conservan restos de trincheras, los agujeros donde se escondían los soldados.'
          },
          architecture: {
            adult: 'Mirador ajardinado escalonado sobre el Manzanares; aquí se celebran cada año la Fiesta de la Paloma y la Fiesta de San Isidro, con terrazas y ambiente muy castizo en verano.',
            kids: '¡En verano este parque se llena de terrazas y música! Es uno de los sitios favoritos de los madrileños para ver atardecer.'
          }
        }
      },
      {
        id: 'jardines-anglona',
        name: { adult: 'Jardines del Príncipe de Anglona', kids: 'Jardines del Príncipe de Anglona — El Jardín Secreto de La Latina 🌿' },
        subtitle: {
          adult: 'Un jardín nobiliario del siglo XVIII escondido junto a la Plaza de la Paja',
          kids: '¡Un jardín escondido que casi nadie conoce!'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'austrias', order: 5 },
        coords: [40.4129877, -3.7115786],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Jardines_del_Principe_de_Anglona_%289%29_%2811983191794%29.jpg/330px-Jardines_del_Principe_de_Anglona_%289%29_%2811983191794%29.jpg',
        audio: { duration: 140, title: { adult: 'Audioguía: Jardines del Príncipe de Anglona', kids: '¡Aventura Sonora: El Jardín Secreto de La Latina!' } },
        tabs: {
          history: {
            adult: 'Vinculado al Palacio del Príncipe de Anglona, construido hacia 1530 como residencia de Francisco de Vargas, consejero de los Reyes Católicos y Carlos I. El jardín se trazó en el siglo XVIII según diseño de 1761 de Nicolas Chalmandrier, en estilo neoclásico con toques de jardinería hispanoárabe; su fisonomía actual procede de un encargo de 1920 al jardinero Javier de Winthuysen, y fue restaurado en 2002.',
            kids: 'Este jardín pertenecía a un palacio construido hace casi 500 años. Se diseñó hace más de 250 años, y hace poco más de 20 años lo restauraron para que pudiera visitarse.'
          },
          legends: {
            adult: 'Se construyó sobre la antigua huerta de la familia Vargas, salvando un desnivel considerable del terreno, por lo que en algunas zonas se le describe como jardín colgante.',
            kids: '¡Parte de este jardín está construido en una zona con mucho desnivel, así que en algunos puntos parece un jardín "colgante"!'
          },
          architecture: {
            adult: 'Uno de los pocos jardines nobiliarios del siglo XVIII conservados en Madrid; un rincón escondido y tranquilo junto a la Plaza de la Paja, en pleno Madrid de los Austrias.',
            kids: '¡Es un rincón tranquilo y verde escondido en pleno centro de Madrid! Perfecto para descansar un rato entre tanta calle de piedra.'
          }
        }
      },
      {
        id: 'iglesia-san-gines',
        name: { adult: 'Iglesia de San Ginés', kids: 'Iglesia de San Ginés — La Iglesia del Cuadro Escondido 🖼️' },
        subtitle: {
          adult: 'Una de las parroquias más antiguas de Madrid, con un El Greco y chocolate con churros al lado',
          kids: '¡Guarda un cuadro pintado por uno de los artistas más famosos de la historia!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'austrias', order: 1 },
        coords: [40.4170539, -3.7069889],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Iglesia_de_San_Gin%C3%A9s_%28Madrid%29_06.jpg/330px-Iglesia_de_San_Gin%C3%A9s_%28Madrid%29_06.jpg',
        audio: { duration: 150, title: { adult: 'Audioguía: Iglesia de San Ginés', kids: '¡Aventura Sonora: La Iglesia del Cuadro Escondido!' } },
        tabs: {
          history: {
            adult: 'Dedicada a San Ginés de Arlés, la iglesia actual se construyó en 1645 sobre lo que se cree fue una antigua ermita mozárabe, siendo una de las parroquias más antiguas de Madrid. Su fachada actual, en ladrillo y piedra, data de una reforma de 1870.',
            kids: 'Esta iglesia es una de las más antiguas de todo Madrid. La que ves hoy se construyó hace casi 400 años, sobre otra todavía más vieja.'
          },
          legends: {
            adult: 'Conserva La expulsión de los mercaderes del templo de El Greco, pintado hacia 1610-1614, la última de las siete versiones conocidas que el pintor hizo de este tema. El archivo parroquial guarda documentos desde 1480, entre ellos la partida de bautismo de Francisco de Quevedo y la de matrimonio de Lope de Vega.',
            kids: '¡Dentro se guarda un cuadro pintado por El Greco, uno de los pintores más importantes de la historia de España! Y en sus archivos hay documentos de hace más de 500 años, con los nombres de escritores muy famosos.'
          },
          architecture: {
            adult: 'Junto a la iglesia, en un pasadizo lateral, se encuentra la histórica Chocolatería San Ginés, célebre por su chocolate con churros a cualquier hora, parada obligada tras una noche de fiesta en Madrid.',
            kids: '¡Justo al lado hay una chocolatería famosísima donde puedes tomar chocolate con churros a cualquier hora del día o de la noche!'
          }
        }
      },
      {
        id: 'basilica-san-francisco-el-grande',
        name: { adult: 'Basílica de San Francisco el Grande', kids: 'Basílica de San Francisco el Grande — La Cúpula Gigante de Goya 🎨' },
        subtitle: {
          adult: 'La cuarta cúpula más grande de Europa, con un autorretrato escondido de Goya',
          kids: '¡Tiene una de las cúpulas más grandes de toda Europa!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'austrias', order: 7 },
        coords: [40.4108476, -3.7138633],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Exterior_-_Real_basilica_de_San_Francisco_el_Grande_-_Madrid_01.jpg/330px-Exterior_-_Real_basilica_de_San_Francisco_el_Grande_-_Madrid_01.jpg',
        audio: { duration: 160, title: { adult: 'Audioguía: Basílica de San Francisco el Grande', kids: '¡Aventura Sonora: La Cúpula Gigante de Goya!' } },
        tabs: {
          history: {
            adult: 'La tradición sitúa el origen del templo hacia 1214-1217, cuando San Francisco de Asís, de paso por Madrid en su peregrinación a Santiago, habría fundado una ermita en este solar. El edificio actual se construyó entre 1776 y 1784 bajo la dirección del arquitecto Francisco Sabatini.',
            kids: 'Cuenta la tradición que este templo lo fundó el propio San Francisco de Asís, hace más de 800 años, cuando pasó por Madrid camino de Santiago. El edificio que ves hoy se construyó hace unos 250 años.'
          },
          legends: {
            adult: 'Su cúpula, de 33 metros de diámetro y 58 de altura, es la mayor de España y la cuarta de Europa, solo por detrás de San Pedro del Vaticano, el Panteón de Roma y Santa Maria del Fiore de Florencia. En la Capilla de San Bernardino, Goya pintó San Bernardino de Siena predicando ante Alfonso V de Aragón, y se autorretrató entre la multitud, vestido de amarillo.',
            kids: '¡Esta cúpula es tan grande que es la cuarta más grande de toda Europa! Y en una de las capillas, el pintor Goya se pintó a sí mismo escondido entre la gente del cuadro, vestido de amarillo. ¿Te atreves a buscarlo?'
          },
          architecture: {
            adult: 'Basílica neoclásica de planta circular bajo cúpula; la cúpula fue pintada en 1917 por Luis Menéndez Pidal con la Apoteosis de las Virtudes.',
            kids: '¡Al entrar y mirar hacia arriba, la cúpula pintada parece un cielo entero lleno de personajes!'
          }
        }
      },
      {
        id: 'puerta-de-toledo',
        name: { adult: 'Puerta de Toledo', kids: 'Puerta de Toledo — La Última Puerta Monumental de Madrid 🚪' },
        subtitle: {
          adult: 'Arco triunfal construido para celebrar el regreso de un rey',
          kids: '¡Fue la última gran puerta que se construyó en todo Madrid!'
        },
        category: CATEGORIES.HISTORY,
        coords: [40.4070507, -3.7110664],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Puerta_de_Toledo_-_detalles_-_Madrid_01.jpg/330px-Puerta_de_Toledo_-_detalles_-_Madrid_01.jpg',
        audio: { duration: 145, title: { adult: 'Audioguía: Puerta de Toledo', kids: '¡Aventura Sonora: La Última Puerta Monumental de Madrid!' } },
        tabs: {
          history: {
            adult: 'El proyecto original lo ordenó José Bonaparte en 1808 para conmemorar su acceso al trono; tras la expulsión de los franceses, el Ayuntamiento encargó un nuevo diseño al arquitecto Antonio López Aguado, que la reconvirtió en arco triunfal dedicado al restaurado Fernando VII. Se construyó entre 1813 y 1827, siendo la última puerta monumental erigida en el antiguo recinto de Madrid.',
            kids: 'Esta puerta se empezó a construir para un rey, pero antes de terminarse cambió de dueño y de dedicatoria: se terminó construyendo para otro rey distinto, hace casi 200 años.'
          },
          legends: {
            adult: 'Bajo la primera piedra se enterró originalmente una caja de plomo con monedas y documentos franceses; al ser expulsados los franceses, las autoridades desenterraron la caja y la sustituyeron por otra con la Constitución de 1812, calendarios y monedas de Fernando VII. Desde el siglo XVII, esta puerta era el paso habitual del ganado que entraba en Madrid camino de los mataderos del sur.',
            kids: '¡Debajo de esta puerta hay una caja enterrada con monedas y documentos antiguos! La primera caja se cambió por otra distinta cuando cambió el rey. Durante siglos, por aquí entraban en Madrid los animales camino del mercado.'
          },
          architecture: {
            adult: 'Arco triunfal de 19 metros de altura, en bloques de granito con elementos decorativos de piedra caliza; arco central de medio punto flanqueado por dos puertas adinteladas y grupo escultórico en lo alto.',
            kids: '¡Es un arco enorme de piedra gris, con estatuas en lo más alto! Antiguamente marcaba el límite de la ciudad de Madrid.'
          }
        }
      },
      {
        id: 'museo-san-isidro',
        name: { adult: 'Museo de San Isidro - Los Orígenes de Madrid', kids: 'Museo de San Isidro - Los Orígenes de Madrid — El Museo del Pozo Milagroso 💧' },
        subtitle: {
          adult: 'Arqueología madrileña y la leyenda del pozo del santo patrón',
          kids: '¡Aquí se cuenta una leyenda sobre un pozo mágico!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'austrias', order: 6 },
        coords: [40.4122, -3.71093056],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Museo_de_San_Isidro.jpg/330px-Museo_de_San_Isidro.jpg',
        audio: { duration: 150, title: { adult: 'Audioguía: Museo de San Isidro', kids: '¡Aventura Sonora: El Museo del Pozo Milagroso!' } },
        tabs: {
          history: {
            adult: 'Inaugurado el 15 de mayo de 2000, este museo municipal gratuito recorre la historia de Madrid desde la Prehistoria hasta el establecimiento de la Corte. Conserva del edificio original un patio renacentista del siglo XVI y una capilla del siglo XVII.',
            kids: 'Este museo, que es gratis para visitar, cuenta cómo era Madrid desde hace muchísimos siglos, ¡incluso desde antes de que existieran las ciudades!'
          },
          legends: {
            adult: 'El lugar está tradicionalmente vinculado a la casa de San Isidro Labrador, patrón de Madrid, y conserva el llamado Pozo del Milagro: según la leyenda, el hijo del santo cayó al pozo, y las oraciones de sus padres hicieron que el agua subiera hasta la superficie para salvarlo. Excavaciones arqueológicas recientes sugieren que el pozo conservado podría ser de una época posterior a la vida de San Isidro, por lo que conviene tomarlo como tradición y no como hecho histórico verificado.',
            kids: '¡Aquí se cuenta la leyenda de un pozo mágico! Se dice que el hijo del santo patrón de Madrid cayó dentro, y que el agua subió sola hasta arriba para salvarlo, gracias a las oraciones de sus padres.'
          },
          architecture: {
            adult: 'Museo gratuito con jardín arqueobotánico y almacén visitable; recorre tres áreas temáticas: Antes de Madrid, Mayrit/Madrid y San Isidro.',
            kids: '¡Tiene hasta un jardín con plantas antiguas y una zona donde puedes ver cómo se guardan los objetos del museo!'
          }
        }
      },
      {
        id: 'caixaforum-madrid',
        name: { adult: 'CaixaForum Madrid', kids: 'CaixaForum Madrid — El Edificio que Flota 🪴' },
        subtitle: {
          adult: 'Un antiguo edificio industrial que parece flotar, junto a un jardín vertical gigante',
          kids: '¡Este edificio parece flotar en el aire, sin apoyarse en el suelo!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'arte', order: 5 },
        coords: [40.410905, -3.692897],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Caixaforum_Madrid_2024.jpg/330px-Caixaforum_Madrid_2024.jpg',
        audio: { duration: 150, title: { adult: 'Audioguía: CaixaForum Madrid', kids: '¡Aventura Sonora: El Edificio que Flota!' } },
        tabs: {
          history: {
            adult: 'El edificio ocupaba originalmente la antigua Central Eléctrica del Mediodía, de principios del siglo XX. Los arquitectos suizos Herzog y de Meuron lo transformaron entre 2001 y 2007, y el centro cultural de la Fundación la Caixa abrió sus puertas en 2008.',
            kids: 'Este edificio era antes una antigua central eléctrica, hace más de 100 años. Dos arquitectos lo transformaron por completo hace menos de 20 años, convirtiéndolo en un centro cultural.'
          },
          legends: {
            adult: 'Los arquitectos eliminaron la base original de ladrillo del edificio, de modo que el pesado volumen superior parece flotar suspendido sobre la plaza, creando un espacio público cubierto que conecta con el Paseo del Prado.',
            kids: '¡Los arquitectos quitaron la parte de abajo del edificio, así que ahora parece que flota en el aire! Es un truco visual buenísimo.'
          },
          architecture: {
            adult: 'Estructura histórica de ladrillo conservada, coronada por una ampliación revestida de acero corten; junto al edificio, el jardín vertical de 460 metros cuadrados diseñado por el botánico francés Patrick Blanc, con cerca de 15.000 plantas de unas 300 especies.',
            kids: '¡Al lado del edificio hay un jardín vertical gigante, con miles de plantas creciendo directamente sobre una pared! Parece una selva pegada al edificio.'
          }
        }
      },
      {
        id: 'plaza-dos-de-mayo',
        name: { adult: 'Plaza del Dos de Mayo', kids: 'Plaza del Dos de Mayo — La Plaza de los Héroes Valientes ⚔️' },
        subtitle: {
          adult: 'Cuna del levantamiento de 1808 contra las tropas napoleónicas',
          kids: '¡Aquí lucharon unos héroes muy valientes hace más de 200 años!'
        },
        category: CATEGORIES.HIDDEN,
        coords: [40.42693333, -3.70407222],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Plaza_del_Dos_de_Mayo%2C_Madrid.jpg/330px-Plaza_del_Dos_de_Mayo%2C_Madrid.jpg',
        audio: { duration: 150, title: { adult: 'Audioguía: Plaza del Dos de Mayo', kids: '¡Aventura Sonora: La Plaza de los Héroes Valientes!' } },
        tabs: {
          history: {
            adult: 'La plaza toma su nombre de la resistencia frente al ataque francés protagonizada por Luis Daoíz y Pedro Velarde la mañana del 2 de mayo de 1808, un levantamiento popular contra las tropas napoleónicas que marcó el inicio de la Guerra de la Independencia española. Donde hoy está la plaza se encontraba el Cuartel de Monteleón, donde unos doscientos patriotas se atrincheraron y lucharon sin esperanza contra el mejor ejército del mundo de aquel momento.',
            kids: 'Esta plaza recuerda un día muy importante para España, hace más de 200 años, cuando un grupo de vecinos valientes se enfrentó a un ejército extranjero que había invadido Madrid.'
          },
          legends: {
            adult: 'El monumento, con las esculturas de Daoíz y Velarde, se levanta ante el Arco de Monteleón, el único resto que se conserva del antiguo cuartel de artillería que ambos militares defendieron uniéndose al levantamiento popular. La iniciativa de erigir un homenaje a los héroes partió del propio rey Fernando VII, y fue encargada al escultor Antonio Solá, que la creó en 1822 durante su estancia en Roma; la escultura se instaló definitivamente en esta plaza en 1869.',
            kids: '¡El arco de piedra que ves en la plaza es el único trozo que queda del cuartel donde lucharon los héroes! Las estatuas que los recuerdan las hizo un escultor español que vivía en Roma, hace ya 200 años.'
          },
          architecture: {
            adult: 'Hoy la plaza es el corazón social de Malasaña, rodeada de terrazas, bares y ambiente joven, sin perder su valor simbólico como lugar de memoria histórica.',
            kids: '¡Ahora esta plaza está siempre llena de gente sentada en las terrazas! Es uno de los puntos de encuentro favoritos del barrio.'
          }
        }
      },
      {
        id: 'plaza-cebada',
        name: { adult: 'Plaza de la Cebada', kids: 'Plaza de la Cebada — La Plaza del Cereal para los Caballos 🌾' },
        subtitle: {
          adult: 'Mercado histórico que también fue escenario de ejecuciones públicas',
          kids: '¡Aquí se vendía cebada para los caballos del rey!'
        },
        category: CATEGORIES.HIDDEN,
        coords: [40.41109722, -3.70968889],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Plaza_de_la_Cebada_%28Madrid%29_01.jpg/330px-Plaza_de_la_Cebada_%28Madrid%29_01.jpg',
        audio: { duration: 145, title: { adult: 'Audioguía: Plaza de la Cebada', kids: '¡Aventura Sonora: La Plaza del Cereal para los Caballos!' } },
        tabs: {
          history: {
            adult: 'Desde el siglo XVI, la Plaza de la Cebada ha sido escenario de comercio, ferias y otros episodios de la vida madrileña. El nombre se debe a que aquí se separaba la cebada destinada a los caballos del rey de la de los regimientos de caballería, cereal con el que se comerciaba en este emplazamiento.',
            kids: 'Esta plaza lleva el nombre de un cereal, la cebada, porque aquí se vendía el que se usaba para dar de comer a los caballos del rey y del ejército, hace ya varios siglos.'
          },
          legends: {
            adult: 'A finales del siglo XVIII se convirtió en el lugar de ejecuciones públicas de Madrid, tras el incendio de la Plaza Mayor en 1790, que hasta entonces había cumplido esa función. Durante el siglo XIX se celebraron aquí ejecuciones mediante horca o garrote vil; el general Rafael del Riego fue ahorcado en esta plaza en noviembre de 1823.',
            kids: 'Hace mucho tiempo, esta plaza no solo era un mercado: también era el lugar donde se castigaba públicamente a quienes rompían la ley, algo muy distinto a lo que vemos en las plazas de hoy.'
          },
          architecture: {
            adult: 'Hoy la plaza conserva su vocación comercial junto al moderno edificio del Mercado de la Cebada, en pleno corazón del castizo barrio de La Latina.',
            kids: '¡Hoy en día la plaza sigue siendo un lugar de mercado, aunque ya no se venden caballos ni cebada!'
          }
        }
      },
      {
        id: 'plaza-tirso-molina',
        name: { adult: 'Plaza de Tirso de Molina', kids: 'Plaza de Tirso de Molina — La Plaza de las Flores y el Convento Desaparecido 🌷' },
        subtitle: {
          adult: 'Un antiguo convento dio paso a un mercado permanente de flores',
          kids: '¡Aquí había un convento enorme que ya no existe!'
        },
        category: CATEGORIES.HIDDEN,
        coords: [40.41228611, -3.70501111],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Plaza_de_Tirso_de_Molina_%28Madrid%29_02.jpg/330px-Plaza_de_Tirso_de_Molina_%28Madrid%29_02.jpg',
        audio: { duration: 145, title: { adult: 'Audioguía: Plaza de Tirso de Molina', kids: '¡Aventura Sonora: La Plaza de las Flores y el Convento Desaparecido!' } },
        tabs: {
          history: {
            adult: 'La plaza ocupa el solar del antiguo Convento de la Merced, fundado en 1564, uno de los templos más frecuentados de la capital hasta el siglo XIX, con un claustro y una fuente considerada la joya de Madrid. El convento, desamortizado y demolido en 1836 durante el gobierno de Mendizábal, dio paso a la creación de la plaza, llamada inicialmente Plaza del Progreso. El dramaturgo Tirso de Molina, que da nombre actual a la plaza, residió en este convento.',
            kids: 'En este lugar hubo antiguamente un convento enorme donde vivió el escritor que hoy da nombre a la plaza. El convento se derribó hace casi 200 años y en su lugar se creó esta plaza.'
          },
          legends: {
            adult: 'En el siglo XVII el convento vivió su época dorada, llegando a tener 110 religiosos y una gran cantidad de obras de arte. Hoy, tras los muros de la actual estación de metro de Tirso de Molina, se dice que aún descansan los restos de los frailes del antiguo convento de la Merced.',
            kids: '¡Se cuenta que bajo la estación de metro de esta plaza todavía descansan los restos de los frailes que vivían en el convento antiguo!'
          },
          architecture: {
            adult: 'Actualmente la plaza cuenta con un mercado permanente de flores, formado por ocho módulos de metal y madera de diseño moderno, abierto todos los días del año, en el que cada puesto lleva el nombre de una obra de Tirso de Molina.',
            kids: '¡Toda la plaza está llena de puestos de flores de colores! Cada puesto tiene el nombre de una obra escrita por el autor que da nombre a la plaza.'
          }
        }
      },
      {
        id: 'plaza-lavapies',
        name: { adult: 'Plaza de Lavapiés', kids: 'Plaza de Lavapiés — La Plaza del Nombre Misterioso 🧩' },
        subtitle: {
          adult: 'El corazón multicultural de Madrid, con un origen de nombre incierto',
          kids: '¡Nadie sabe con seguridad de dónde viene su curioso nombre!'
        },
        category: CATEGORIES.HIDDEN,
        coords: [40.40889722, -3.70115833],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Plaza_Lavapies%2C_Madrid%2C_13.08.14.jpg/330px-Plaza_Lavapies%2C_Madrid%2C_13.08.14.jpg',
        audio: { duration: 145, title: { adult: 'Audioguía: Plaza de Lavapiés', kids: '¡Aventura Sonora: La Plaza del Nombre Misterioso!' } },
        tabs: {
          history: {
            adult: 'Con más de 500 años de vida, el barrio de Lavapiés es uno de los más antiguos de la capital. El origen del topónimo es incierto, aunque se argumenta que procedería de una fuente que existió antiguamente en la plaza, ya que todas las plazoletas del Madrid antiguo contaban con fuentes para suministrar agua y para lavar la ropa.',
            kids: 'Este barrio tiene más de 500 años de historia, ¡uno de los más antiguos de todo Madrid! Nadie sabe con total seguridad de dónde viene su nombre tan curioso.'
          },
          legends: {
            adult: 'Una leyenda muy extendida asegura que aquí estuvo la judería de Madrid en época de los Reyes Católicos, y que el nombre vendría de una fuente donde los judíos se lavaban los pies antes de entrar a la sinagoga. Sin embargo, ni documentos escritos ni excavaciones arqueológicas han podido demostrar este origen, por lo que se considera más leyenda popular que hecho histórico confirmado.',
            kids: '¡Cuenta una leyenda muy popular que el nombre de la plaza viene de una fuente donde la gente se lavaba los pies antes de entrar a un templo antiguo! Pero nadie ha podido demostrar del todo si esta historia es cierta.'
          },
          architecture: {
            adult: 'Hoy es el epicentro multicultural, artístico y alternativo del castizo barrio de Lavapiés, con una intensa mezcla de comercios de todo el mundo, arte urbano y ambiente diverso.',
            kids: '¡Esta plaza está llena de gente de todo el mundo! Es uno de los barrios más multiculturales y con más ambiente de todo Madrid.'
          }
        }
      },
      {
        id: 'mercado-anton-martin',
        name: { adult: 'Mercado de Antón Martín', kids: 'Mercado de Antón Martín — El Mercado con Escuela de Flamenco 💃' },
        subtitle: {
          adult: 'Tres siglos de tradición comercial junto al Cine Doré',
          kids: '¡Este mercado tiene hasta una escuela de baile flamenco dentro!'
        },
        category: CATEGORIES.GASTRONOMY,
        coords: [40.411575, -3.69871944],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Mercado_de_Ant%C3%B3n_Mart%C3%ADn%2C_fachada_calle_Santa_Isabel.JPG/330px-Mercado_de_Ant%C3%B3n_Mart%C3%ADn%2C_fachada_calle_Santa_Isabel.JPG',
        audio: { duration: 145, title: { adult: 'Audioguía: Mercado de Antón Martín', kids: '¡Aventura Sonora: El Mercado con Escuela de Flamenco!' } },
        tabs: {
          history: {
            adult: 'Durante el siglo XVIII, la plaza de Antón Martín tenía el sobrenombre de plazuela del Mercado, ya que allí se reunían puestos ambulantes de alimentación. En 1933 el Ayuntamiento de Madrid encargó al arquitecto Gonzalo Domínguez Espúñez el diseño del mercado actual, cuyo proyecto se ejecutó tras la Guerra Civil, siendo inaugurado en 1941.',
            kids: 'En esta zona ya se vendía comida en puestos ambulantes hace más de 300 años. El edificio del mercado que ves hoy se construyó hace más de 80 años.'
          },
          legends: {
            adult: 'El mercado, situado muy cerca de la Puerta del Sol y la Plaza Mayor, cuenta con más de 70 puestos, donde conviven comercios tradicionales de varias generaciones familiares con vermuterías, cafeterías y restaurantes de cocina internacional. En su tercera planta se encuentra la escuela de arte flamenco Amor de Dios, una de las más prestigiosas de España.',
            kids: '¡Imagina comprar fruta y pescado abajo mientras arriba, en el piso de encima, decenas de bailarines de flamenco ensayan sus zapateados! Es una de las escuelas de flamenco más importantes de toda España, escondida justo encima de los puestos del mercado. 💃'
          },
          architecture: {
            adult: 'El mercado tiene tres plantas: en las dos primeras conviven puestos tradicionales de pescado, carne y verdura junto a espacios gastronómicos modernos, mientras que en la tercera se combina la actividad comercial con la cultural.',
            kids: '¡Puedes recorrer el mercado y encontrar de todo: pescado, fruta, y también sitios para comer platos de todo el mundo!'
          }
        }
      },
      {
        id: 'mercado-cebada',
        name: { adult: 'Mercado de la Cebada', kids: 'Mercado de la Cebada — El Mercado que Reemplazó a un Palacio de Hierro 🏗️' },
        subtitle: {
          adult: 'Uno de los mercados más grandes y tradicionales de Madrid',
          kids: '¡Antes hubo aquí un mercado hecho de hierro traído desde Londres!'
        },
        category: CATEGORIES.GASTRONOMY,
        essential: { route: 'austrias', order: 8 },
        coords: [40.41111111, -3.70975],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Madrid_-_Mercado_de_la_Cebada_-_outside.jpg/330px-Madrid_-_Mercado_de_la_Cebada_-_outside.jpg',
        audio: { duration: 145, title: { adult: 'Audioguía: Mercado de la Cebada', kids: '¡Aventura Sonora: El Mercado que Reemplazó a un Palacio de Hierro!' } },
        tabs: {
          history: {
            adult: 'A finales del siglo XVIII, el aumento de la población de Madrid llevó a crear un mercado capaz de abastecer a la ciudad con garantías de higiene. En 1868 el arquitecto Mariano Calvo y Pereira diseñó un edificio de hierro y cristal, con 166 columnas de hierro forjado traídas directamente desde Londres, inaugurado en 1875 por el rey Alfonso XII. Por problemas de higiene, aquel edificio se demolió en 1956 y se construyó el mercado más funcional que existe hoy, terminado en 1958.',
            kids: 'El mercado que ves hoy no es el primero que hubo aquí: antes existió un edificio precioso hecho de hierro y cristal, con columnas traídas desde Londres, ¡pero se demolió hace más de 60 años porque ya no cumplía las normas de higiene!'
          },
          legends: {
            adult: 'El primer edificio, con una cúpula central de 15 metros de altura, fue considerado todo un espectáculo arquitectónico en su época, comparable al mercado gemelo de los Mostenses, diseñado por el mismo arquitecto.',
            kids: '¡Imagina un mercado fantasma hecho de hierro y cristal, con una cúpula tan alta como un edificio de cinco pisos y columnas traídas en barco desde muy lejos! Ese primer mercado ya no existe, pero fue toda una maravilla de la ingeniería en su época, mucho antes de que se construyera el que ves hoy. 👻'
          },
          architecture: {
            adult: 'Es, junto con el de Antón Martín, uno de los mercados de abastos más grandes y tradicionales del centro histórico, corazón comercial del castizo barrio de La Latina.',
            kids: '¡Sigue siendo uno de los mercados más grandes de todo el centro de Madrid! Aquí los vecinos del barrio hacen la compra desde hace generaciones.'
          }
        }
      },
      {
        id: 'calle-nuncio',
        name: { adult: 'Calle del Nuncio', kids: 'Calle del Nuncio — La Calle del Embajador del Papa ⛪' },
        subtitle: {
          adult: 'Una calle empinada que albergó a los embajadores del Vaticano',
          kids: '¡Aquí vivían los representantes del Papa en España!'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'austrias', order: 3 },
        coords: [40.413425, -3.70905278],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Antiguo_Palacio_de_la_Nunciatura_Apost%C3%B3lica_%28Madrid%29_01.jpg/330px-Antiguo_Palacio_de_la_Nunciatura_Apost%C3%B3lica_%28Madrid%29_01.jpg',
        audio: { duration: 145, title: { adult: 'Audioguía: Calle del Nuncio', kids: '¡Aventura Sonora: La Calle del Embajador del Papa!' } },
        tabs: {
          history: {
            adult: 'Esta calle del barrio de La Latina, en pleno casco histórico de Madrid, debe su nombre a la circunstancia de que en ella residieron, hasta mediados del siglo XX, los embajadores apostólicos del Vaticano. Durante los reinados de los Austrias, en los siglos XVI y XVII, el representante papal, o nuncio, se convirtió en una figura clave en la Corte de Madrid.',
            kids: 'Esta calle tan empinada lleva el nombre de los antiguos embajadores del Papa, que vivieron aquí desde hace siglos hasta hace relativamente poco tiempo.'
          },
          legends: {
            adult: 'El Palacio de la Nunciatura se construyó en un solar de la familia Vargas por el arquitecto Manuel Moradillo entre 1731 y 1735. En ese mismo solar tuvieron antes su casa nobles madrileños como Rodrigo Calderón, marqués de Siete Iglesias, favorito de Felipe III que murió degollado en la Plaza Mayor en 1621, al comienzo del reinado de Felipe IV.',
            kids: '¡En el mismo terreno donde luego se construyó el palacio del embajador del Papa, antes vivió un noble muy poderoso que acabó ejecutado en la Plaza Mayor!'
          },
          architecture: {
            adult: 'Calle de trazado irregular y pronunciada pendiente, que discurre desde la plaza de Puerta Cerrada hasta la costanilla de San Pedro, en pleno Madrid de los Austrias.',
            kids: '¡Es una calle tan empinada que parece una pequeña cuesta! Está en pleno barrio más antiguo de Madrid.'
          }
        }
      },
      {
        id: 'plaza-rastrillo',
        name: { adult: 'Plaza del Rastrillo', kids: 'Plaza del Rastrillo — La Plaza del Mercadillo Antiguo 🛒' },
        subtitle: {
          adult: 'Antiguo mercadillo popular de Malasaña, hoy punto de encuentro',
          kids: '¡Antiguamente aquí había un mercadillo callejero muy animado!'
        },
        category: CATEGORIES.HIDDEN,
        coords: [40.4252956, -3.7039468],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Madrid_-_Malasa%C3%B1a%2C_Plaza_Juan_Pujol_1.jpg/330px-Madrid_-_Malasa%C3%B1a%2C_Plaza_Juan_Pujol_1.jpg',
        audio: { duration: 140, title: { adult: 'Audioguía: Plaza del Rastrillo', kids: '¡Aventura Sonora: La Plaza del Mercadillo Antiguo!' } },
        tabs: {
          history: {
            adult: 'Esta pequeña plaza de Malasaña albergó desde al menos el siglo XVII un mercadillo al aire libre, conocido popularmente entre los vecinos como el Rastrillo, que se abastecía de los puestos cercanos del mercado de San Ildefonso. Hacia finales de la década de 1960, con la apertura del mercado de Barceló, los vendedores callejeros fueron desapareciendo poco a poco.',
            kids: 'En esta plaza había antiguamente un mercadillo al aire libre muy popular entre los vecinos del barrio, que llevaba funcionando desde hacía siglos.'
          },
          legends: {
            adult: 'Entre 1969 y años recientes, la plaza llevó oficialmente el nombre de Juan Pujol, en homenaje a un periodista y propagandista del franquismo. En el marco de la retirada de referencias franquistas del callejero de Madrid, el Ayuntamiento recuperó su nombre popular e histórico, Plaza del Rastrillo, tal y como los vecinos siempre la habían conocido.',
            kids: '¡Esta plaza ha cambiado de nombre oficial más de una vez! Los vecinos siempre la llamaron por su nombre popular, y hace poco el Ayuntamiento decidió recuperarlo oficialmente.'
          },
          architecture: {
            adult: 'Pequeña y animada plaza del corazón de Malasaña, rodeada de terrazas y bares, y muy popular como punto de encuentro entre vecinos y visitantes.',
            kids: '¡Es una plaza pequeñita pero con mucho ambiente! Está siempre llena de gente sentada charlando en las terrazas.'
          }
        }
      },
      {
        id: 'calle-zurbano',
        name: { adult: 'Calle de Zurbano', kids: 'Calle de Zurbano — La Calle de los Palacetes Elegantes 🏘️' },
        subtitle: {
          adult: 'Elegante calle residencial del siglo XIX, poblada de palacetes nobiliarios',
          kids: '¡Una calle llena de casas tan bonitas que parecen pequeños palacios!'
        },
        category: CATEGORIES.HIDDEN,
        coords: [40.4276489, -3.6938919],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Palacete_en_la_calle_Zurbano.JPG/330px-Palacete_en_la_calle_Zurbano.JPG',
        audio: { duration: 140, title: { adult: 'Audioguía: Calle de Zurbano', kids: '¡Aventura Sonora: La Calle de los Palacetes Elegantes!' } },
        tabs: {
          history: {
            adult: 'Calle arbolada de un único carril que atraviesa el distrito de Chamberí, urbanizada tras la parcelación de la antigua huerta de Loinaz a finales del siglo XIX. En ella se construyeron elegantes casas-palacio destinadas a la alta nobleza que se instaló en la zona, por iniciativa del visionario duque de Santo Mauro.',
            kids: 'Esta calle se construyó hace más de 100 años, sobre lo que antes era una gran huerta. Familias nobles muy ricas mandaron construir aquí sus casas, algunas tan grandes que parecen pequeños palacios.'
          },
          legends: {
            adult: 'Uno de los edificios más notables es el Palacio de Zurbano, en el número 5-7, construido entre 1878 y 1881 para el conde de Muguiro por el arquitecto Severiano Sainz de la Lastra, testimonio del estilo de vida de una clase social privilegiada durante más de un siglo de historia.',
            kids: '¡Uno de los palacetes de esta calle lo mandó construir un conde hace casi 150 años! Todavía se conserva y se puede admirar su fachada.'
          },
          architecture: {
            adult: 'La calle combina comercio de proximidad tradicional con casas señoriales de balconadas y algunos palacetes de estilo Belle Époque, en una de las estampas más elegantes del Madrid clásico.',
            kids: '¡Caminar por esta calle es como pasear entre casas de cuento, con balcones y fachadas muy elegantes!'
          }
        }
      },
      {
        id: 'plaza-santa-barbara',
        name: { adult: 'Plaza de Santa Bárbara', kids: 'Plaza de Santa Bárbara — La Plaza de la Reina que Fundó un Convento 👸' },
        subtitle: {
          adult: 'Rodeada por la iglesia de las Salesas Reales, fundada por una reina',
          kids: '¡Una reina fundó aquí un convento para educar a jóvenes nobles!'
        },
        category: CATEGORIES.HIDDEN,
        coords: [40.42452778, -3.69387222],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Salesas-fachada.jpg/330px-Salesas-fachada.jpg',
        audio: { duration: 145, title: { adult: 'Audioguía: Plaza de Santa Bárbara', kids: '¡Aventura Sonora: La Plaza de la Reina que Fundó un Convento!' } },
        tabs: {
          history: {
            adult: 'La plaza toma su nombre de la Iglesia de Santa Bárbara, parte del Monasterio Real de la Visitación de Nuestra Señora, conocido como las Salesas Reales, fundado en 1748 por la reina Bárbara de Braganza, esposa de Fernando VI, con el propósito de educar a jóvenes nobles y servir de lugar de retiro. El convento fue diseñado por François Carlier y completado por Francisco Moradillo, que añadió las torres campanario, en 1758.',
            kids: 'Esta plaza lleva el nombre de una iglesia que mandó construir una reina española, hace casi 300 años, para que unas monjas educaran a jóvenes nobles.'
          },
          legends: {
            adult: 'La reina Bárbara de Braganza murió antes que su esposo el rey, y ambos fueron enterrados en esta iglesia, en un mausoleo diseñado por el arquitecto Francesco Sabatini. El antiguo monasterio fue incautado por el Estado en 1870 para convertirse en el Palacio de Justicia, mientras que la iglesia se mantuvo abierta al culto y hoy es parroquia.',
            kids: '¡La reina que fundó este lugar está enterrada dentro de la propia iglesia, en una tumba diseñada por un arquitecto muy famoso!'
          },
          architecture: {
            adult: 'Una de las iglesias más notables y hermosas de Madrid, declarada Bien de Interés Cultural en 1979, espléndido ejemplo del arte del siglo XVIII con elementos franceses, italianos y españoles. Junto a ella se encuentra el Palacio de Justicia, antigua sede del convento.',
            kids: '¡Esta iglesia es tan bonita que está protegida como un tesoro artístico! Junto a ella hay un edificio enorme que antes era parte del mismo convento.'
          }
        }
      },
      {
        id: 'calle-huertas',
        name: { adult: 'Calle de Huertas', kids: 'Calle de Huertas — La Calle de los Versos Dorados en el Suelo ✨' },
        subtitle: {
          adult: 'El eje literario del Barrio de las Letras, con versos grabados en el pavimento',
          kids: '¡Hay versos escritos en letras doradas justo bajo tus pies!'
        },
        category: CATEGORIES.HIDDEN,
        coords: [40.41345556, -3.69793056],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Calle_Huertas_%285876701988%29.jpg/330px-Calle_Huertas_%285876701988%29.jpg',
        audio: { duration: 145, title: { adult: 'Audioguía: Calle de Huertas', kids: '¡Aventura Sonora: La Calle de los Versos Dorados en el Suelo!' } },
        tabs: {
          history: {
            adult: 'La calle toma su nombre de las huertas del Prado que existían en el siglo XVII en los terrenos vecinos al Prado de los Jerónimos. El Barrio de las Letras, conocido simplemente como Huertas, fue morada o lugar de encuentro de grandes escritores de los siglos XVI y XVII, entre ellos Cervantes, Lope de Vega, Tirso de Molina, Calderón de la Barca y Quevedo.',
            kids: 'Esta calle recibe su nombre de unos huertos que existían aquí hace siglos. En este mismo barrio vivieron algunos de los escritores más importantes de la historia de España.'
          },
          legends: {
            adult: 'Una de las características más singulares de la calle son los versos grabados en el propio pavimento: el Ayuntamiento inscribió frases y versos de Cervantes, Lope, Quevedo, Góngora y otros autores del Siglo de Oro en letras doradas, formando una ruta poética que conecta el Siglo de Oro con los visitantes de hoy.',
            kids: '¡Mira bien al suelo mientras caminas! Hay frases y versos escritos en letras doradas, escritos por autores que vivieron hace 400 años.'
          },
          architecture: {
            adult: 'Eje cultural del Barrio de las Letras, con ambiente animado de bares y restaurantes, que conserva su identidad literaria como ninguna otra calle de Madrid.',
            kids: '¡Es una calle llena de vida, con bares y restaurantes, pero que no ha olvidado a los escritores que la hicieron famosa!'
          }
        }
      },
      {
        id: 'jardines-sabatini',
        name: { adult: 'Jardines de Sabatini', kids: 'Jardines de Sabatini — El Jardín que Reemplazó a las Caballerizas Reales 🐎' },
        subtitle: {
          adult: 'Jardines neoclásicos construidos sobre las antiguas caballerizas reales',
          kids: '¡Aquí antes vivían los caballos del rey, no había jardines!'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'palacio', order: 3 },
        coords: [40.42021, -3.71394],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Estanque_Central_-_Jardines_de_Sabatini_-_Madrid_01.jpg/330px-Estanque_Central_-_Jardines_de_Sabatini_-_Madrid_01.jpg',
        audio: { duration: 150, title: { adult: 'Audioguía: Jardines de Sabatini', kids: '¡Aventura Sonora: El Jardín que Reemplazó a las Caballerizas Reales!' } },
        tabs: {
          history: {
            adult: 'Los Jardines de Sabatini se construyeron en la década de 1930, tras la proclamación de la Segunda República, sobre el solar que ocupaban las caballerizas reales, levantadas en el siglo XVIII por el arquitecto italiano Francesco Sabatini junto al Palacio Real. El Ayuntamiento de Madrid convocó un concurso abierto en 1932 para transformar el espacio, y el proyecto se asignó finalmente al arquitecto Fernando García Mercadal.',
            kids: 'Donde hoy hay un jardín precioso, antes vivían los caballos del rey, en unas caballerizas construidas hace más de 250 años por un arquitecto italiano.'
          },
          legends: {
            adult: 'La Guerra Civil detuvo las obras, que se retomaron después, completándose en 1950. Los jardines, ejecutados con algunas variaciones sobre el proyecto original, se inauguraron ese mismo año y recibieron el nombre de Sabatini en honor al arquitecto del palacio y de las antiguas caballerizas.',
            kids: '¡Los jardines llevan el nombre del arquitecto que construyó las caballerizas de los caballos del rey, para no olvidar lo que hubo antes en este lugar!'
          },
          architecture: {
            adult: 'Jardines de trazado neoclásico y geometría simétrica, con setos recortados, estanques y estatuas de reyes españoles, situados en la fachada norte del Palacio Real.',
            kids: '¡Sus setos están recortados con formas muy geométricas, como un laberinto verde! Es un lugar perfecto para pasear tranquilamente junto al Palacio Real.'
          }
        }
      }
];
