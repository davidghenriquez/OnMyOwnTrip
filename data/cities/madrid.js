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
        visitInfo: {
          hours: { adult: 'Domingo a miércoles 10:00-24:00; jueves a sábado 10:00-01:00.', kids: 'Abre todos los días, hasta bien entrada la noche.' },
          price: { adult: 'Gratis entrar; solo se paga lo que compres en los puestos.', kids: 'Entrar es gratis, ¡solo se paga lo que compres!' }
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
        },
        quiz: {
          'secret-history': {
            question: '¿Qué había antes en el lugar donde está este mercado?',
            options: ['Una iglesia antigua', 'Un castillo', 'Una plaza de toros'],
            correct: 0,
            reveal: '¡Una iglesia! Se llamaba San Miguel de los Octoes. La derribaron hace mucho tiempo y en su lugar se puso el mercado. 🏛️'
          },
          legends: {
            question: '¿Qué cuenta la gente que pasa por las noches cerca de este mercado?',
            options: ['Que se oyen ruidos raros', 'Que aparece un fantasma pirata', 'Que suena música antigua'],
            correct: 0,
            reveal: '¡Ruidos raros! 👻 Cuentan que entre los soportales de la Plaza Mayor, al lado, a veces se oyen cosas que nadie sabe explicar.'
          },
          architecture: {
            question: '¿De qué material está hecha la estructura de este mercado?',
            options: ['De hierro', 'De madera', 'De piedra'],
            correct: 0,
            reveal: '¡De hierro! Es el único mercado de este tipo que queda en Madrid, con más de 100 años.'
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
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (plaza pública al aire libre).', kids: '¡Se puede visitar en cualquier momento, no tiene horario!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
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
        },
        quiz: {
          'secret-history': {
            question: '¿Qué se come tradicionalmente en Nochevieja mientras suena el reloj de esta plaza?',
            options: ['Doce uvas', 'Turrón', 'Doce mandarinas'],
            correct: 0,
            reveal: '¡Doce uvas! 🍇 Una por cada campanada, y millones de personas lo ven en directo por la tele cada Nochevieja.'
          },
          legends: {
            question: '¿Qué animal aparece en la estatua símbolo de Madrid en esta plaza?',
            options: ['Un oso', 'Un león', 'Un águila'],
            correct: 0,
            reveal: '¡Un oso! 🐻 Está subido a un árbol llamado madroño, y es el símbolo de Madrid desde la Edad Media.'
          },
          architecture: {
            question: '¿Qué marca la placa que hay en el suelo delante del edificio del reloj?',
            options: ['El Kilómetro 0 de España', 'El centro exacto de Madrid', 'El punto más alto de la ciudad'],
            correct: 0,
            reveal: '¡El Kilómetro 0! Desde ahí se miden todas las carreteras que salen de España.'
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
        },
        quiz: {
          'secret-history': {
            question: '¿Para qué se construyó originalmente el edificio del Museo del Prado?',
            options: ['Para guardar plantas y animales de estudio', 'Para ser un palacio real', 'Para ser una iglesia'],
            correct: 0,
            reveal: '¡Para guardar plantas y animales! Se iba a llamar Gabinete de Historia Natural, pero una reina decidió usarlo para arte. 🖼️'
          },
          legends: {
            question: '¿Qué pintó Goya directamente sobre las paredes de su propia casa?',
            options: ['Unos cuadros gigantes', 'Un mapa del mundo', 'Su autorretrato'],
            correct: 0,
            reveal: '¡Cuadros gigantes! Se llaman las Pinturas Negras. Años después alguien tuvo que despegarlas con muchísimo cuidado para traerlas aquí.'
          },
          architecture: {
            question: '¿De qué material son las columnas de la entrada del museo?',
            options: ['De piedra', 'De madera', 'De metal'],
            correct: 0,
            reveal: '¡De piedra granítica! El edificio tiene pórticos con columnas muy altas, típicas del estilo neoclásico.'
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
        visitInfo: {
          hours: { adult: 'De 10:00 hasta las 21:00 (mayo-agosto), 19:00 (marzo y octubre) o 18:00 (noviembre-febrero), según la época del año.', kids: 'Abre todos los días; en verano cierra más tarde que en invierno.' },
          price: { adult: '4€ entrada general, 2€ reducida (estudiantes, familias numerosas), 0,50€ mayores de 65. Gratis para menores de 18 y los martes de 10:00 a 13:00.', kids: '4€, pero gratis si tienes menos de 18 años.' }
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
        visitInfo: {
          hours: { adult: 'Abril a septiembre 6:00-24:00; octubre a marzo 6:00-22:00.', kids: 'Abre muy temprano y cierra tarde, ¡casi todo el día!' },
          price: { adult: 'Gratis, no requiere entrada (algunas exposiciones puntuales dentro del parque pueden ser de pago).', kids: '¡Gratis! No hace falta pagar entrada.' }
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
        },
        quiz: {
          'secret-history': {
            question: '¿Qué había antes en este parque, hace casi 400 años?',
            options: ['El jardín de un palacio real', 'Un bosque salvaje', 'Una granja'],
            correct: 0,
            reveal: '¡El jardín de un palacio! Se llamaba Palacio del Buen Retiro, y casi ha desaparecido, pero el parque que lo rodeaba sigue siendo precioso. 🌳'
          },
          legends: {
            question: '¿A quién representa la estatua rara que hay en la Glorieta del Ángel Caído?',
            options: ['Al diablo', 'A un héroe', 'A un rey'],
            correct: 0,
            reveal: '¡Al diablo! 😈 Es uno de los pocos monumentos del mundo dedicados a él, y está en un sitio que casualmente tiene 666 metros de altura.'
          },
          architecture: {
            question: '¿De qué está hecho casi por completo el Palacio de Cristal?',
            options: ['De vidrio', 'De piedra', 'De ladrillo'],
            correct: 0,
            reveal: '¡De vidrio y hierro! Como un gran invernadero brillante, construido para mostrar plantas y animales de Filipinas.'
          }
        }
      },
      {
        id: 'palacio-cristal-retiro',
        name: {
          adult: 'Palacio de Cristal',
          kids: 'Palacio de Cristal — El Invernadero Gigante 🌿'
        },
        subtitle: {
          adult: 'Un pabellón de hierro y vidrio inspirado en Londres',
          kids: '¡Un palacio casi todo transparente!'
        },
        category: CATEGORIES.HISTORY,
        coords: [40.413556, -3.682056],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Palacio_de_Cristal%2C_Retiro%2C_Madrid.jpg/330px-Palacio_de_Cristal%2C_Retiro%2C_Madrid.jpg',
        audio: {
          duration: 130,
          title: {
            adult: 'Audioguía: Palacio de Cristal',
            kids: '¡Aventura Sonora: El Invernadero Gigante!'
          }
        },
        visitInfo: {
          hours: {
            adult: 'Abril-septiembre 10:00-22:00; marzo y octubre 10:00-19:00; noviembre-febrero 10:00-18:00, todos los días (puede cerrar en días de lluvia o calor extremo).',
            kids: 'Abre todos los días; en verano se puede visitar hasta las 10 de la noche.'
          },
          price: {
            adult: 'Gratis, no requiere entrada (sala de exposiciones del Museo Reina Sofía).',
            kids: '¡Gratis! No hace falta pagar entrada.'
          }
        },
        tabs: {
          history: {
            adult: 'Lo construyó en 1887 el arquitecto Ricardo Velázquez Bosco para exhibir la flora y fauna traídas de la Exposición General de las Islas Filipinas. Iba a ser una estructura provisional, incluso se planeó desmontarla y enviarla a Manila al terminar la exposición, pero nunca se desmontó y se quedó para siempre en el Retiro. El 10 de mayo de 1936 acogió la votación que eligió a Manuel Azaña presidente de la Segunda República.',
            kids: 'Se construyó hace más de 130 años para enseñar plantas y animales que trajeron de Filipinas, ¡un viaje larguísimo en barco! Iba a ser algo temporal, pero gustó tanto que se quedó para siempre.'
          },
          architecture: {
            adult: 'Es una estructura metálica cubierta casi por completo de cristal, con planta de cruz griega de tres naves: la cúpula central alcanza 22,60 metros de altura. La cerámica decorativa, obra de Daniel Zuloaga, incluye grutescos con cabezas de pato en frisos y remates. Le rodea un estanque artificial con cipreses calvos, elegido para que el edificio se reflejase en el agua.',
            kids: 'Está hecho de hierro y cristal, ¡como un gran invernadero de casi 23 metros de altura! Fíjate en la cerámica de colores con dibujos de patos raros, y en el estanque de delante: el palacio se refleja entero en el agua.'
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Para qué se construyó el Palacio de Cristal?',
            options: ['Para enseñar plantas y animales de Filipinas', 'Para ser un teatro', 'Para ser una biblioteca'],
            correct: 0,
            reveal: '¡Para enseñar plantas y animales de Filipinas! Iba a ser algo temporal, pero gustó tanto que se quedó para siempre. 🌿'
          },
          architecture: {
            question: '¿Cuántos metros de altura tiene aproximadamente su cúpula central?',
            options: ['Casi 23 metros', 'Casi 5 metros', 'Casi 100 metros'],
            correct: 0,
            reveal: '¡Casi 23 metros! Está hecho casi todo de hierro y cristal, con un estanque delante donde se refleja entero.'
          }
        }
      },
      {
        id: 'palacio-velazquez-retiro',
        name: {
          adult: 'Palacio de Velázquez',
          kids: 'Palacio de Velázquez — El Hermano de Ladrillo 🧱'
        },
        subtitle: {
          adult: 'El otro gran pabellón de exposiciones del Retiro',
          kids: '¡El hermano mayor del Palacio de Cristal, pero de ladrillo!'
        },
        category: CATEGORIES.HISTORY,
        coords: [40.415189, -3.681989],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/037_Palacio_de_Vel%C3%A1zquez%2C_Parque_del_Retiro_%28Madrid%29%2C_fa%C3%A7ana_sud.jpg/330px-037_Palacio_de_Vel%C3%A1zquez%2C_Parque_del_Retiro_%28Madrid%29%2C_fa%C3%A7ana_sud.jpg',
        audio: {
          duration: 125,
          title: {
            adult: 'Audioguía: Palacio de Velázquez',
            kids: '¡Aventura Sonora: El Hermano de Ladrillo!'
          }
        },
        visitInfo: {
          hours: {
            adult: 'Abril-septiembre 10:00-22:00; marzo y octubre 10:00-19:00; noviembre-febrero 10:00-18:00, todos los días.',
            kids: 'Abre todos los días; en verano se puede visitar hasta las 10 de la noche.'
          },
          price: {
            adult: 'Gratis, no requiere entrada (sala de exposiciones del Museo Reina Sofía).',
            kids: '¡Gratis! No hace falta pagar entrada.'
          }
        },
        tabs: {
          history: {
            adult: 'Se construyó entre 1881 y 1883 para la Exposición Nacional de Minería, y en 1887 acogió también la Exposición General de las Islas Filipinas, sirviendo después como Museo de Ultramar. Cerró en 2005 para una restauración y reabrió en 2010 con una exposición dedicada al artista Antoni Miralda.',
            kids: 'Este edificio ha sido de todo un poco: primero enseñó minerales, luego cosas traídas de Filipinas, ¡y ahora enseña arte moderno! Ha cambiado de trabajo más veces que nadie que conozcas.'
          },
          architecture: {
            adult: 'Obra de Ricardo Velázquez Bosco, el mismo arquitecto del Palacio de Cristal, con bóvedas de hierro y cristal que iluminan las salas con luz natural. Mide 73,80 por 28,75 metros, construido en ladrillo de dos tonos traído de Zaragoza y decorado con azulejos de la Real Fábrica de la Moncloa.',
            kids: '¡Es como el hermano mayor del Palacio de Cristal, pero vestido de ladrillo en vez de cristal! Por dentro también tiene techos de cristal que dejan entrar la luz del sol.'
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Para qué se usó este edificio antes de ser sala de arte moderno?',
            options: ['Para exposiciones de minerales y de Filipinas', 'Para ser un hospital', 'Para ser un cuartel'],
            correct: 0,
            reveal: '¡Minerales y cosas de Filipinas! Este edificio ha cambiado de uso más veces que nadie que conozcas. ⛏️'
          },
          architecture: {
            question: '¿Quién diseñó este edificio, el mismo arquitecto de otro edificio del Retiro?',
            options: ['El arquitecto del Palacio de Cristal', 'El arquitecto del Museo del Prado', 'El arquitecto de la Puerta de Alcalá'],
            correct: 0,
            reveal: '¡El mismo que el Palacio de Cristal, Ricardo Velázquez Bosco! Por eso los dos tienen techos de cristal que dejan pasar la luz.'
          }
        }
      },
      {
        id: 'jardines-cecilio-rodriguez',
        name: {
          adult: 'Jardines de Cecilio Rodríguez',
          kids: 'Jardines de Cecilio Rodríguez — El Reino de los Pavos Reales 🦚'
        },
        subtitle: {
          adult: 'Un jardín vallado con pavos reales sueltos',
          kids: '¡Aquí viven pavos reales de verdad, sueltos!'
        },
        category: CATEGORIES.HIDDEN,
        coords: [40.414256, -3.678609],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Pabell%C3%B3n_de_los_Jardines_de_Cecilio_Rodriguez_%2852108926219%29.jpg/330px-Pabell%C3%B3n_de_los_Jardines_de_Cecilio_Rodriguez_%2852108926219%29.jpg',
        audio: {
          duration: 115,
          title: {
            adult: 'Audioguía: Jardines de Cecilio Rodríguez',
            kids: '¡Aventura Sonora: El Reino de los Pavos Reales!'
          }
        },
        visitInfo: {
          hours: {
            adult: 'Recinto vallado con horario propio, distinto al del parque general: 10:00-18:00 en otoño e invierno; 10:00-20:00 en primavera y verano.',
            kids: 'Tiene su propia verja y cierra un poco antes que el resto del parque.'
          },
          price: {
            adult: 'Gratis, no requiere entrada.',
            kids: '¡Gratis! No hace falta pagar entrada.'
          }
        },
        tabs: {
          history: {
            adult: 'Se diseñaron hacia 1940 y llevan el nombre de Cecilio Rodríguez, jardinero mayor del Retiro que empezó a trabajar con solo 8 años y siguió en su oficio hasta los 88. El jardín es un homenaje a toda una vida dedicada a cuidar este parque.',
            kids: 'Este jardín tiene el nombre de un jardinero que empezó a trabajar cuando tenía solo 8 años, ¡y siguió cuidando plantas hasta que cumplió 88! Casi toda su vida entera.'
          },
          legends: {
            adult: 'Mezclan un trazado clásico con influencia andaluza: junto a la entrada norte hay una escultura de Venus romana, y la Fuente de las Gaviotas, regalo de la embajada de Noruega a los madrileños en 1962. Los vistosos pavos reales que pasean sueltos por el recinto son la seña de identidad del lugar, y forman parte del "Paisaje de la Luz", declarado Patrimonio de la Humanidad por la UNESCO en 2021.',
            kids: '¡Los pavos reales caminan sueltos por todo el jardín, como si fueran los dueños! Si tienes suerte, verás a alguno abrir su cola en forma de abanico lleno de colores. Este jardín es tan especial que la UNESCO lo declaró tesoro de la humanidad.'
          }
        },
        quiz: {
          'secret-history': {
            question: '¿A qué edad empezó a trabajar el jardinero que da nombre a este jardín?',
            options: ['A los 8 años', 'A los 18 años', 'A los 25 años'],
            correct: 0,
            reveal: '¡A los 8 años! Y siguió cuidando plantas hasta que cumplió 88 — casi toda su vida entera. 🌷'
          },
          legends: {
            question: '¿Qué animales pasean sueltos por este jardín?',
            options: ['Pavos reales', 'Ciervos', 'Flamencos'],
            correct: 0,
            reveal: '¡Pavos reales! 🦚 Si tienes suerte, verás a alguno abrir su cola llena de colores como un abanico.'
          }
        }
      },
      {
        id: 'casa-fieras-retiro',
        name: {
          adult: 'Casa de Fieras',
          kids: 'Casa de Fieras — El Zoo Fantasma 👻🦁'
        },
        subtitle: {
          adult: 'Los restos del antiguo zoológico del Retiro',
          kids: '¡Aquí hubo leones y monos de verdad!'
        },
        category: CATEGORIES.HIDDEN,
        coords: [40.416472, -3.679703],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Retiro_-_Casa_de_Fieras_08_recortada.jpg/330px-Retiro_-_Casa_de_Fieras_08_recortada.jpg',
        audio: {
          duration: 120,
          title: {
            adult: 'Audioguía: Casa de Fieras',
            kids: '¡Aventura Sonora: El Zoo Fantasma!'
          }
        },
        visitInfo: {
          hours: {
            adult: 'Los restos exteriores se ven en cualquier momento dentro del horario del parque; el edificio alberga hoy una biblioteca pública con horario propio.',
            kids: '¡Puedes verlo desde fuera siempre que el parque esté abierto!'
          },
          price: {
            adult: 'Gratis, no requiere entrada.',
            kids: '¡Gratis! No hace falta pagar entrada.'
          }
        },
        tabs: {
          history: {
            adult: 'El Retiro tuvo su propio zoológico, la Casa de Fieras, abierto en 1774 bajo Carlos III. Cerró el 22 de junio de 1972, cuando sus más de 550 animales de 83 especies se trasladaron al nuevo zoo de la Casa de Campo.',
            kids: '¡Aquí hubo un zoo de verdad, con más de 550 animales! Cerró hace más de 50 años y todos los animales se mudaron a otro zoo de Madrid.'
          },
          legends: {
            adult: 'Hoy el espacio lo ocupa la Biblioteca Pública Eugenio Trías (2013), que integró a propósito restos del antiguo zoo en su diseño: la "Leonera" de dos plantas y las rejas de hierro por las que se alimentaba a los animales desde arriba. Cerca, en los Jardines de Herrera Palacios, todavía se conserva el llamado "Foso de los Monos".',
            kids: 'Aunque ahora es una biblioteca, todavía se pueden ver restos de verdad del zoo antiguo: una jaula de dos pisos donde vivían los leones, y un foso donde antes vivían los monos. ¡Como un zoo fantasma escondido en la biblioteca!'
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Qué había antes en el lugar donde hoy hay una biblioteca?',
            options: ['Un zoológico de verdad', 'Un mercado', 'Un hospital'],
            correct: 0,
            reveal: '¡Un zoo de verdad! Tuvo más de 550 animales, hasta que se mudaron a otro zoo de Madrid hace más de 50 años. 🦁'
          },
          legends: {
            question: '¿Qué se conserva todavía del antiguo zoo dentro de la biblioteca?',
            options: ['Una jaula de dos pisos donde vivían los leones', 'Una jaula de pájaros', 'El estanque de los peces'],
            correct: 0,
            reveal: '¡La jaula de los leones! Tiene dos pisos, y también se conserva un foso donde antes vivían los monos.'
          }
        }
      },
      {
        id: 'estanque-retiro',
        name: {
          adult: 'Estanque Grande y Monumento a Alfonso XII',
          kids: 'El Estanque Grande — El Lago de las Barcas 🚣'
        },
        subtitle: {
          adult: 'El gran lago del Retiro y su monumento más fotografiado',
          kids: '¡Aquí puedes alquilar una barca de remos!'
        },
        category: CATEGORIES.HIDDEN,
        coords: [40.417151, -3.683971],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Monumento_a_Alfonso_XII_%28Madrid%29_13.jpg/330px-Monumento_a_Alfonso_XII_%28Madrid%29_13.jpg',
        audio: {
          duration: 135,
          title: {
            adult: 'Audioguía: Estanque Grande y Monumento a Alfonso XII',
            kids: '¡Aventura Sonora: El Lago de las Barcas!'
          }
        },
        visitInfo: {
          hours: {
            adult: 'El paseo alrededor del estanque sigue el horario general del parque. Alquiler de barcas: 10:00-14:00 y 15:30-20:00.',
            kids: '¡El parque abre pronto y cierra tarde, así que hay mucho tiempo para remar!'
          },
          price: {
            adult: 'Pasear es gratis; alquilar una barca (hasta 4 personas, 45 minutos) cuesta 6€ entre semana y 8€ fines de semana y festivos.',
            kids: '¡Pasear es gratis! Remar en barca tiene un precio aparte, pero merece mucho la pena.'
          }
        },
        tabs: {
          history: {
            adult: 'El estanque existe desde el reinado de Felipe IV: un primer estanque se levantó entre 1634 y 1636, y poco después se excavó uno mayor —el que ha llegado hasta hoy— que se terminó el 13 de abril de 1638. Ha sido el centro social del parque desde el siglo XVII.',
            kids: '¡Este lago tiene casi 400 años! Lo mandó hacer un rey hace muchísimo tiempo, y desde entonces ha sido el lugar favorito para pasear y remar en Madrid.'
          },
          architecture: {
            adult: 'El monumento a Alfonso XII, en el extremo este del estanque, lo diseñó José Grases Riera en 1902 y se construyó entre 1902 y 1922: un hemiciclo de columnas jónicas rematado por la estatua ecuestre del rey, obra del escultor Mariano Benlliure. El conjunto completo mide 30 metros de alto, 86 de largo y 58 de ancho, y participaron más de veinte escultores.',
            kids: '¡Es un monumento gigante, tan alto como un edificio de diez pisos! Tiene un montón de columnas y, arriba del todo, una estatua de un rey a caballo. Más de veinte artistas ayudaron a construirlo.'
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Desde cuándo existe este lago?',
            options: ['Desde hace casi 400 años', 'Desde hace 50 años', 'Desde hace 1.000 años'],
            correct: 0,
            reveal: '¡Casi 400 años! Lo mandó hacer un rey, Felipe IV, y desde entonces es el lugar favorito para pasear y remar en Madrid. 🚣'
          },
          architecture: {
            question: '¿Qué se puede hacer en este lago además de pasear alrededor?',
            options: ['Alquilar una barca de remos', 'Nadar', 'Pescar'],
            correct: 0,
            reveal: '¡Alquilar una barca! Al lado hay también un monumento gigante, tan alto como un edificio de diez pisos.'
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
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (plaza pública al aire libre).', kids: '¡Se puede visitar en cualquier momento, no tiene horario!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
        tabs: {
          history: {
            adult: 'Felipe II encargó a Juan de Herrera transformar este espacio, y en 1619, bajo Felipe III, Juan Gómez de Mora terminó de darle su fisonomía definitiva. Ha sufrido tres grandes incendios (1631, 1672 y 1790); tras el último, el arquitecto Juan de Villanueva la reconstruyó respetando el trazado original, aunque redujo la altura de los edificios de cinco a tres plantas. Durante siglos acogió corridas de toros, representaciones teatrales, autos de fe de la Inquisición e incluso ejecuciones públicas, todo ello presenciado desde los balcones. Fue también el gran mercado de la ciudad, con cada gremio de comerciantes instalado en su rincón asignado, una tradición que hoy pervive en el mercadillo navideño que se instala aquí cada diciembre, el más concurrido de Madrid.',
            kids: '¡Esta plaza se ha quemado tres veces a lo largo de su historia! Cada vez la reconstruyeron. Hace muchos siglos aquí se hacían fiestas, obras de teatro ¡y hasta corridas de toros, todo en la misma plaza! También fue durante siglos el mercado más grande de la ciudad, con cada tipo de tienda en su propia esquina — ¡esa tradición sigue viva hoy, porque cada diciembre se instala aquí el mercadillo de Navidad más famoso de Madrid!'
          },
          legends: {
            adult: 'La estatua ecuestre de Felipe III que preside la plaza desde 1848 tuvo una vida itinerante: fue esculpida originalmente por Juan de Bolonia y Pietro Tacca para colocarse en la Casa de Campo, y solo llegó a su emplazamiento actual dos siglos después de su fundición, por decisión de la reina Isabel II. Bajo los soportales se cuentan 97 arcadas o entradas numeradas, entre ellas el célebre Arco de Cuchilleros, que baja directo hacia el Madrid más castizo; la tradición asegura además que bajo la plaza se conservan túneles y pasadizos antiguos, hoy sellados, que conectaban antaño con edificios cercanos.',
            kids: '¡La estatua del rey a caballo que ves en el medio de la plaza estuvo primero en otro sitio totalmente distinto durante 200 años, antes de que la trajeran aquí! Imagina una estatua tan pesada mudándose de casa. Bajo los soportales hay 97 arcos numerados: uno de ellos, el Arco de Cuchilleros, baja hacia unas calles antiguas muy típicas. ¡Cuentan que debajo de la plaza hay túneles secretos, aunque hoy están todos cerrados!'
          },
          architecture: {
            adult: 'La Casa de la Panadería, el edificio más emblemático de la plaza, luce desde 1992 una espectacular fachada pintada al fresco por Carlos Franco, con un programa mitológico propio poblado de dioses clásicos como Cibeles y personajes inventados por el propio pintor. La plaza, de planta rectangular y soportales continuos, conserva 237 balcones que antiguamente se alquilaban para presenciar los espectáculos que allí se celebraban.',
            kids: '¡Mira la fachada llena de colores del edificio del fondo! Está pintada con dioses y personajes inventados, pintada hace poco más de 30 años. Cuenta los balcones que puedas ver — ¡hay más de 200 en toda la plaza!'
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Cuántas veces se ha incendiado esta plaza a lo largo de la historia?',
            options: ['Tres veces', 'Una vez', 'Nunca'],
            correct: 0,
            reveal: '¡Tres veces! Cada vez la reconstruyeron, y hoy además es el mercado de Navidad más famoso de Madrid cada diciembre. 🔥'
          },
          legends: {
            question: '¿Cuántos arcos o entradas numeradas hay bajo los soportales de la plaza?',
            options: ['97', '10', '50'],
            correct: 0,
            reveal: '¡97 arcadas! Una de ellas, el Arco de Cuchilleros, baja hacia las calles más típicas de Madrid.'
          },
          architecture: {
            question: '¿Cuántos balcones tiene aproximadamente la Plaza Mayor?',
            options: ['Más de 200', 'Unos 20', 'Unos 50'],
            correct: 0,
            reveal: '¡Más de 200! La Casa de la Panadería, al fondo, tiene además una fachada pintada llena de colores.'
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
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (calle pública); las tiendas suelen abrir de 10:00 a 21:00.', kids: '¡Se puede pasear por aquí en cualquier momento!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
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
        },
        quiz: {
          'secret-history': {
            question: '¿Con qué rompió el rey el primer muro para empezar las obras de esta avenida?',
            options: ['Con una piqueta de plata', 'Con un martillo de oro', 'Con una espada'],
            correct: 0,
            reveal: '¡Con una piqueta de plata! Fue Alfonso XIII, en 1910. La avenida tardó 21 años en construirse entera, en tres partes distintas.'
          },
          legends: {
            question: '¿Qué apodo le pusieron los madrileños a esta avenida en una época difícil?',
            options: ['"La avenida de los obuses"', '"La avenida del miedo"', '"La avenida rota"'],
            correct: 0,
            reveal: '¡"La avenida de los obuses"! A pesar de todo, el edificio Telefónica resistió siempre entero. 🏢'
          },
          architecture: {
            question: '¿Qué edificio fue durante años el más alto de Madrid, en esta avenida?',
            options: ['El edificio Telefónica', 'El edificio Metrópolis', 'La Puerta de Alcalá'],
            correct: 0,
            reveal: '¡El edificio Telefónica, con 89 metros! Busca también la estatua dorada con alas sobre la cúpula del Metrópolis.'
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
        },
        quiz: {
          'secret-history': {
            question: '¿Cuántos siglos de pintura reúne este museo?',
            options: ['Siete siglos', 'Dos siglos', 'Veinte siglos'],
            correct: 0,
            reveal: '¡Siete siglos! Desde los primeros pintores italianos hasta el arte más moderno, todo en el mismo museo. 🖼️'
          },
          legends: {
            question: '¿Qué había sido antes la mujer que ayudó a traer esta colección a España?',
            options: ['Miss España', 'Una científica famosa', 'Una futbolista'],
            correct: 0,
            reveal: '¡Miss España! Después se convirtió en una gran experta en arte. Nunca se sabe qué caminos puede tomar una vida.'
          },
          architecture: {
            question: '¿Qué tipo de edificio ocupa este museo?',
            options: ['Un antiguo palacio', 'Un antiguo mercado', 'Un antiguo teatro'],
            correct: 0,
            reveal: '¡Un antiguo palacio! Por dentro lo cambiaron todo para colocar los cuadros ordenados por época.'
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
        },
        quiz: {
          'secret-history': {
            question: '¿Para qué se usaba este edificio antes de ser un museo?',
            options: ['Era un hospital', 'Era una fábrica', 'Era una estación de tren'],
            correct: 0,
            reveal: '¡Era un hospital enorme, hace más de 200 años! Luego lo convirtieron en museo de arte moderno. 🏥'
          },
          legends: {
            question: '¿Cuál es el cuadro más famoso que se puede ver en este museo?',
            options: ['El Guernica', 'La Mona Lisa', 'Las Meninas'],
            correct: 0,
            reveal: '¡El Guernica, de Picasso! Tardó muchísimos años en poder llegar aquí desde donde estaba guardado.'
          },
          architecture: {
            question: '¿Qué se ve por fuera del edificio, subiendo y bajando?',
            options: ['Ascensores de cristal', 'Escaleras de piedra', 'Puentes colgantes'],
            correct: 0,
            reveal: '¡Ascensores de cristal! Contrastan mucho con el edificio antiguo de ladrillo que hay detrás.'
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
            adult: 'La cripta neorrománica, terminada en 1911, es la parte más antigua del conjunto y contrasta con la nave neoclásica superior. Las vidrieras, de diseño no figurativo, dialogan con el policromado techo y con los mosaicos del padre Marko Rupnik en la capilla del Santísimo, creando un conjunto que combina tradición constructiva centenaria con un programa decorativo plenamente contemporáneo. En las hornacinas de la fachada pueden identificarse las estatuas de San Pedro —con la inscripción «PETRUS», las llaves del Reino de los Cielos y una red de pescador— y San Pablo —«PAVLVS», con un relieve que representa su conversión camino a Damasco—, ambos considerados columnas de la Iglesia.',
            kids: '¡Baja a la cripta, la parte más antigua de toda la catedral! Después sube arriba y compara: verás una mezcla de estilos muy distintos en el mismo edificio, ¡como si hubieran construido dos iglesias en una! Busca también en la fachada dos estatuas con nombres tallados debajo: una es San Pedro, con unas llaves enormes y una red de pescar; la otra es San Pablo, con una escena tallada al lado.'
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Cuántos años tardaron en construir esta catedral?',
            options: ['110 años', '20 años', '5 años'],
            correct: 0,
            reveal: '¡110 años! Al final, un Papa la vino a bendecir en persona, algo que no ha pasado con ninguna otra catedral española. ⛪'
          },
          legends: {
            question: '¿Cómo es el techo por dentro de esta catedral?',
            options: ['Pintado de muchos colores brillantes', 'Todo blanco y liso', 'Cubierto de espejos'],
            correct: 0,
            reveal: '¡Lleno de colores, casi como un cómic! Es una de las sorpresas que más gustan a quien la visita.'
          },
          architecture: {
            question: '¿Qué parte de la catedral es la más antigua de todas?',
            options: ['La cripta', 'La cúpula', 'La torre del reloj'],
            correct: 0,
            reveal: '¡La cripta! Busca también en la fachada las estatuas de San Pedro y San Pablo, con sus nombres tallados debajo.'
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
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (plaza pública al aire libre).', kids: '¡Se puede visitar en cualquier momento, no tiene horario!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
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
        },
        quiz: {
          'secret-history': {
            question: '¿Qué tira del carro de la diosa Cibeles en esta fuente?',
            options: ['Dos leones', 'Dos caballos', 'Dos toros'],
            correct: 0,
            reveal: '¡Dos leones! La fuente se hizo hace más de 240 años y es uno de los símbolos más fotografiados de Madrid. 🦁'
          },
          legends: {
            question: '¿Qué apodo cariñoso le pusieron a esta fuente cuando la taparon para protegerla?',
            options: ['"La linda tapada"', '"La dama escondida"', '"La fuente fantasma"'],
            correct: 0,
            reveal: '¡"La linda tapada"! La cubrieron con ladrillos y sacos para que no se rompiera del todo en una época difícil.'
          },
          architecture: {
            question: '¿Qué hacen los aficionados del Real Madrid en esta plaza cuando ganan un título?',
            options: ['Ponen una bandera gigante a la diosa', 'Encienden fuegos artificiales', 'Se bañan en la fuente'],
            correct: 0,
            reveal: '¡Le ponen una bandera gigante! Es una tradición que lleva ya muchísimos años en esta plaza tan famosa.'
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
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (monumento exterior).', kids: '¡Se puede visitar en cualquier momento, no tiene horario!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
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
        },
        quiz: {
          'secret-history': {
            question: '¿Qué tipo de monumento es la Puerta de Alcalá?',
            options: ['Un arco de triunfo', 'Una puerta de muralla', 'Una torre vigía'],
            correct: 0,
            reveal: '¡Un arco de triunfo! Fue el primero de su tipo construido en toda Europa desde la época de los romanos. 🎉'
          },
          legends: {
            question: '¿Qué tiene de curioso esta puerta si te fijas bien en sus dos lados?',
            options: ['Los dos lados son ligeramente distintos', 'Es transparente por un lado', 'Tiene un reloj escondido'],
            correct: 0,
            reveal: '¡Los dos lados son distintos! Dicen que el rey aprobó sin darse cuenta dos diseños diferentes para la misma puerta.'
          },
          architecture: {
            question: '¿Cuántos huecos o vanos tiene la Puerta de Alcalá?',
            options: ['5', '3', '10'],
            correct: 0,
            reveal: '¡5! El del medio es más alto que los demás. Esta puerta nunca sirvió para defender la ciudad, solo para presumir.'
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
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (plaza pública al aire libre).', kids: '¡Se puede visitar en cualquier momento, no tiene horario!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
        tabs: {
          history: {
            adult: 'Fue el centro administrativo de Madrid desde la Edad Media hasta principios del siglo XXI: la Casa de la Villa, de estilo herreriano con fachadas barrocas, albergó el Ayuntamiento durante más de 300 años, hasta su traslado en 2007 al Palacio de Cibeles. La plaza reúne edificios de los siglos XV al XVII, entre ellos la Torre de los Lujanes, en estilo gótico-mudéjar, y la Casa de Cisneros, joya del plateresco construida en 1537. En el centro se alza una estatua del almirante Álvaro de Bazán, que nunca perdió una batalla naval.',
            kids: '¡Esta plaza fue el centro de gobierno de Madrid durante más de 300 años seguidos! Tiene edificios de hace 500 y hasta 600 años, ¡de los más antiguos de toda la ciudad! En el centro hay una estatua de un almirante que nunca perdió ni una sola batalla en el mar.'
          },
          legends: {
            adult: 'Tras la derrota francesa en la batalla de Pavía (24 de febrero de 1525), el rey Francisco I de Francia fue trasladado prisionero a Madrid, llegando el 12 de agosto de 1525. La tradición sostiene que permaneció custodiado en la Torre de los Lujanes, aunque los historiadores no descartan que solo fuera su primer alojamiento mientras se le preparaba una estancia en el Alcázar. No sería liberado hasta enero de 1526, tras renunciar a extensos territorios en Italia y Flandes. La Casa de Cisneros está unida a la Casa de la Villa por un puente elevado que cruza sobre la calle; pese a su aspecto antiguo, se construyó en la década de 1910 para que los concejales pudieran pasar de un edificio a otro sin salir a la calle. La propia plaza ocupa además el solar del antiguo cementerio de la desaparecida parroquia de San Salvador.',
            kids: '¡Un rey de Francia estuvo prisionero aquí, en esta misma plaza, después de perder una batalla hace 500 años! Se cuenta que lo guardaron en esa torre tan alta. Tardó casi un año entero en poder volver a su país. ¡La Casa de Cisneros está conectada con la Casa de la Villa por un puente elevado que cruza por encima de la calle! Aunque parece muy antiguo, en realidad se construyó hace poco más de 100 años, para que los concejales no tuvieran que salir a la calle para pasar de un edificio a otro. Y bajo esta plaza estuvo antes el cementerio de una iglesia que ya no existe.'
          },
          architecture: {
            adult: 'La Torre de los Lujanes, del siglo XV, es uno de los escasos ejemplos de arquitectura civil gótica conservados en Madrid, hoy sede de la Real Academia de Ciencias Morales y Políticas. La Casa de Cisneros combina elementos góticos, mudéjares y renacentistas en un estilo exclusivamente español conocido como plateresco, por el parecido de su ornamentación con el trabajo de los plateros.',
            kids: '¡Mira la torre puntiaguda, es una de las construcciones más antiguas de todo Madrid! El otro edificio bonito de al lado se llama así porque su decoración de piedra parece hecha por un joyero, ¡tallada con muchísimo detalle!'
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Qué edificio de esta plaza fue el ayuntamiento de Madrid durante más de 300 años?',
            options: ['La Casa de la Villa', 'El Palacio Real', 'La Torre de los Lujanes'],
            correct: 0,
            reveal: '¡La Casa de la Villa! Estuvo aquí hasta 2007, cuando el ayuntamiento se mudó al Palacio de Cibeles. 🏛️'
          },
          legends: {
            question: '¿Qué rey extranjero estuvo prisionero en esta plaza hace 500 años?',
            options: ['El rey de Francia', 'El rey de Inglaterra', 'El rey de Portugal'],
            correct: 0,
            reveal: '¡El rey de Francia, Francisco I! Se cuenta que lo guardaron en la Torre de los Lujanes tras perder una batalla.'
          },
          architecture: {
            question: '¿Cómo se llama la torre gótica más antigua de esta plaza?',
            options: ['La Torre de los Lujanes', 'La Torre del Oro', 'La Torre Eiffel'],
            correct: 0,
            reveal: '¡La Torre de los Lujanes! Es del siglo XV, una de las construcciones más antiguas de todo Madrid.'
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
        visitInfo: {
          hours: { adult: 'El recinto exterior (pórticos, estanque y explanada) es de acceso libre a cualquier hora. El interior del templo abre martes a domingo 10:00-20:00 (cerrado lunes), con aforo limitado a 10 personas; se recomienda reserva gratuita previa en madrid.es/debodreservas.', kids: 'Por fuera se puede ver siempre; para entrar dentro del templo hay que reservar antes, ¡es gratis pero caben pocas personas a la vez!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
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
            adult: 'El conjunto conserva su puerta monumental y dos pilonos de acceso, junto con relieves originales que representan a los faraones ptolemaicos realizando ofrendas a las divinidades egipcias. Se ubica sobre una pequeña colina del antiguo Cuartel de la Montaña, orientado deliberadamente para ofrecer una de las mejores puestas de sol de la ciudad sobre la Casa de Campo, en un guiño a su función original de templo solar. Minutos después de la puesta de sol llega la llamada «hora azul», cuando el templo se ilumina y se refleja en el estanque frente a él, una de las imágenes más fotografiadas de Madrid.',
            kids: '¡Fíjate en los dibujos tallados en la piedra! Muestran a antiguos reyes egipcios haciendo regalos a sus dioses. Este templo está en una colina perfecta para ver la puesta de sol, ¡casi como si siguiera mirando al sol como hacía en Egipto! Un rato después de que se ponga el sol llega la "hora azul": el templo se ilumina y se refleja en el agua del estanque de delante, ¡una de las fotos más bonitas de todo Madrid!'
          }
        },
        quiz: {
          'secret-history': {
            question: '¿De qué país vino este templo como regalo?',
            options: ['De Egipto', 'De Grecia', 'De Roma'],
            correct: 0,
            reveal: '¡De Egipto! Vino en barco, piedra a piedra, como agradecimiento por ayudar a salvar templos de una presa. 🐪'
          },
          legends: {
            question: '¿Qué condición secreta pedía el regalo del templo, que nunca se ha cumplido?',
            options: ['Que nunca estuviera al aire libre', 'Que solo lo vieran los reyes', 'Que se pintara de dorado'],
            correct: 0,
            reveal: '¡Que nunca estuviera al aire libre! Pero lleva más de 50 años fuera, lloviendo y todo.'
          },
          architecture: {
            question: '¿Para qué momento del día está especialmente orientado este templo?',
            options: ['Para ver la puesta de sol', 'Para ver el amanecer', 'Para ver las estrellas'],
            correct: 0,
            reveal: '¡Para la puesta de sol! Minutos después llega la "hora azul", cuando se refleja en el estanque de delante.'
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
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (plaza pública al aire libre).', kids: '¡Se puede visitar en cualquier momento, no tiene horario!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
        tabs: {
          history: {
            adult: 'El actual monumento a Cervantes se erigió en 1929, tras un concurso nacional convocado en 1915 con motivo del tercer centenario de la muerte del escritor. Con los años se completó con las esculturas en bronce de Don Quijote y Sancho Panza cabalgando sobre Rocinante y su burro, y las figuras de Dulcinea y Aldonza Lorenzo, además de los pícaros Rinconete y Cortadillo y la protagonista de La Gitanilla, otros personajes cervantinos. La plaza se sometió a una profunda remodelación entre 2019 y 2021, que sacó a la luz numerosos restos arqueológicos y transformó la zona en un gran eje peatonal con más zonas verdes.',
            kids: '¡En el centro de esta plaza hay un monumento gigante dedicado al escritor Cervantes! Abajo del todo puedes ver sus dos personajes más famosos, Don Quijote y Sancho Panza, montados en sus animales. También hay otros personajes de sus historias, como los pícaros Rinconete y Cortadillo. Hace pocos años arreglaron toda la plaza y encontraron restos muy antiguos escondidos bajo tierra.'
          },
          legends: {
            adult: 'El concurso de 1915 para elegir el diseño del monumento se convocó al cumplirse tres siglos de la muerte de Cervantes en 1616, aunque las obras no se completaron hasta 1929: casi 15 años de gestación para un homenaje que reúne alrededor del escritor a sus criaturas más universales, incluyendo también a Dulcinea, mostrando cómo unos personajes de ficción llegaron a ser tan reales para Madrid como cualquier figura histórica.',
            kids: '¡Los personajes de un libro, Don Quijote y Sancho Panza, tienen aquí sus propias estatuas, como si hubieran existido de verdad! Tardaron casi 15 años en decidir cómo iba a ser este monumento tan especial.'
          },
          architecture: {
            adult: 'La plaza está flanqueada por dos de los primeros rascacielos de España: el Edificio España (1953) y la Torre de Madrid (1957), ambos símbolos de la arquitectura de posguerra. Tras la remodelación de 2021, la plaza incorporó más arbolado, fuentes, carriles bici y amplias zonas peatonales, integrando mejor el monumento histórico con los usos contemporáneos del espacio.',
            kids: '¡Mira hacia arriba! Los dos edificios altísimos que rodean la plaza fueron, durante muchos años, los rascacielos más altos de España. Ahora la plaza tiene también fuentes y mucho espacio para pasear sin coches.'
          }
        },
        quiz: {
          'secret-history': {
            question: '¿A qué escritor está dedicado el monumento central de esta plaza?',
            options: ['A Cervantes', 'A Lope de Vega', 'A García Lorca'],
            correct: 0,
            reveal: '¡A Cervantes! Tardaron casi 15 años en decidir cómo iba a ser este monumento tan especial. 📖'
          },
          legends: {
            question: '¿Qué personajes de un libro tienen sus propias estatuas en esta plaza?',
            options: ['Don Quijote y Sancho Panza', 'Romeo y Julieta', 'Peter Pan'],
            correct: 0,
            reveal: '¡Don Quijote y Sancho Panza! Como si hubieran existido de verdad, montados en sus animales.'
          },
          architecture: {
            question: '¿Qué dos edificios altísimos rodean esta plaza?',
            options: ['El Edificio España y la Torre de Madrid', 'Dos catedrales', 'Dos museos'],
            correct: 0,
            reveal: '¡El Edificio España y la Torre de Madrid! Durante años fueron los rascacielos más altos de todo el país.'
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
        visitInfo: {
          hours: { adult: 'La azotea-mirador abre domingo a jueves 10:00-01:00, viernes y sábados hasta las 02:00.', kids: 'Abre todos los días, ¡hasta tarde por la noche!' },
          price: { adult: '5€ entrada general (incluye las salas de exposiciones), 4€ con carné joven. Gratis los martes de 11:00 a 14:00 para desempleados.', kids: '5€, o 4€ si tienes el carné joven.' }
        },
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
        },
        quiz: {
          'secret-history': {
            question: '¿Quién inauguró este edificio en persona?',
            options: ['Un rey, Alfonso XIII', 'Un Papa', 'Un presidente'],
            correct: 0,
            reveal: '¡Un rey, Alfonso XIII! Desde entonces es uno de los centros culturales más activos de Madrid. 👑'
          },
          legends: {
            question: '¿A qué diosa representa la estatua que corona la azotea de este edificio?',
            options: ['A Minerva, diosa de la sabiduría', 'A Cibeles', 'A Venus'],
            correct: 0,
            reveal: '¡A Minerva! Tardaron 40 años en colocarla, aunque estaba planeada desde el principio.'
          },
          architecture: {
            question: '¿Qué se puede hacer hoy en la azotea de este edificio?',
            options: ['Tomar algo mientras ves toda la ciudad', 'Nadar en una piscina', 'Ver una película'],
            correct: 0,
            reveal: '¡Tomar algo con vistas! Es uno de los miradores más solicitados de Madrid.'
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
        },
        quiz: {
          'secret-history': {
            question: '¿Cuántos años tardaron en construir este teatro, con muchas paradas por falta de dinero?',
            options: ['32 años', '5 años', '100 años'],
            correct: 0,
            reveal: '¡32 años! Lo inauguró una reina, Isabel II, casi 30 años después de que se pusiera la primera piedra. 🎭'
          },
          legends: {
            question: '¿Qué problema escondido casi hace que este teatro se derrumbara?',
            options: ['Un río escondido bajo los cimientos', 'Un incendio', 'Un terremoto'],
            correct: 0,
            reveal: '¡Un río escondido! Tuvieron que hacer obras muy complicadas para salvar el teatro, construyendo una base nueva.'
          },
          architecture: {
            question: '¿Cuántas personas caben aproximadamente en este teatro?',
            options: ['Más de 1.700', 'Unas 100', 'Unas 500'],
            correct: 0,
            reveal: '¡Más de 1.700! Por dentro tiene máquinas modernísimas para mover los decorados durante las funciones.'
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
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (plaza pública al aire libre).', kids: '¡Se puede visitar en cualquier momento, no tiene horario!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
        tabs: {
          history: {
            adult: 'El trazado definitivo de la plaza responde a un diseño de 1844 del arquitecto Narciso Pascual Colomer, por iniciativa de la reina Isabel II. Está flanqueada por veinte estatuas de reyes visigodos y de los primeros reinos cristianos, esculpidas entre 1750 y 1753 para decorar originalmente la cornisa del Palacio Real, aunque nunca llegaron a colocarse allí y acabaron repartidas por distintos jardines y plazas de la ciudad. En total se tallaron 44 estatuas de esta serie de reyes, de las cuales solo veinte se repartieron finalmente por esta plaza; el resto se reparte hoy por otros jardines y ciudades españolas.',
            kids: '¡Esta plaza está rodeada de veinte estatuas de reyes muy antiguos! Estaban pensadas para ir encima del Palacio Real, pero al final nunca las pusieron ahí, y las repartieron por distintos sitios de la ciudad, incluida esta plaza. ¡En total se hicieron 44 estatuas de esta serie, pero solo veinte acabaron aquí! Las demás están repartidas por otros parques y ciudades de España.'
          },
          legends: {
            adult: 'El monumento central, una estatua ecuestre de Felipe IV, es una obra maestra de ingeniería del siglo XVII: fue realizada en bronce por el escultor italiano Pietro Tacca a partir de un boceto pictórico de Diego Velázquez, y el propio Galileo Galilei asesoró científicamente su estabilidad para lograr que el caballo se sostuviera únicamente sobre sus dos patas traseras. Está considerada la primera estatua ecuestre del mundo sujeta solo por las patas de atrás.',
            kids: '¡Mira la estatua del rey a caballo del centro! Es un caballo empinado que se sujeta solo con las dos patas de atrás, algo rarísimo de conseguir en una estatua tan pesada. Para lograrlo, ayudó nada menos que un científico famosísimo llamado Galileo. ¡La primera estatua del mundo que lo consiguió!'
          },
          architecture: {
            adult: 'De trazado rectangular con cabecera curvada, los jardines combinan setos recortados, fuentes y las citadas estatuas reales en un diseño neoclásico decimonónico que armoniza con la fachada oeste del Palacio Real y con el Teatro Real, situado en uno de sus extremos.',
            kids: '¡Pasea entre los setos bien recortados y busca cuántas estatuas de reyes puedes contar! Desde aquí se ve muy bien el Palacio Real por un lado y el Teatro Real por el otro.'
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Cuántas estatuas de reyes rodean esta plaza?',
            options: ['Veinte', 'Cinco', 'Cien'],
            correct: 0,
            reveal: '¡Veinte! Estaban pensadas para ir encima del Palacio Real, pero nunca se colocaron ahí. 👑'
          },
          legends: {
            question: '¿Quién ayudó a diseñar el equilibrio de la estatua del rey a caballo de esta plaza?',
            options: ['El científico Galileo Galilei', 'El pintor Goya', 'El arquitecto Gaudí'],
            correct: 0,
            reveal: '¡Galileo Galilei! Ayudó a que el caballo se sostuviera solo con las dos patas traseras, algo rarísimo.'
          },
          architecture: {
            question: '¿Qué dos edificios importantes se ven desde estos jardines?',
            options: ['El Palacio Real y el Teatro Real', 'El Museo del Prado y el Retiro', 'La Puerta del Sol y la Gran Vía'],
            correct: 0,
            reveal: '¡El Palacio Real y el Teatro Real! Uno a cada lado de estos jardines tan bien cuidados.'
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
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (barrio con calles públicas).', kids: '¡Se puede pasear por aquí en cualquier momento!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
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
        },
        quiz: {
          'secret-history': {
            question: '¿Por qué se llama así este barrio?',
            options: ['Por una mujer que sabía mucho latín', 'Por una antigua tribu romana', 'Por un idioma que se hablaba aquí'],
            correct: 0,
            reveal: '¡Por Beatriz Galindo, "La Latina"! Fue maestra nada menos que de los hijos de una reina. 📚'
          },
          legends: {
            question: '¿Qué se paraba antiguamente en la calle más famosa de este barrio?',
            options: ['Los carruajes de viajeros', 'Los barcos', 'Los trenes'],
            correct: 0,
            reveal: '¡Los carruajes de viajeros! Por eso se llenó de posadas, una tradición de comer bien que sigue viva hoy.'
          },
          architecture: {
            question: '¿Cómo son las calles de este barrio?',
            options: ['Estrechas y con cuestas', 'Anchas y rectas', 'Todas iguales'],
            correct: 0,
            reveal: '¡Estrechas y con cuestas! Así eran las calles de Madrid hace muchísimos siglos.'
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
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (barrio con calles públicas).', kids: '¡Se puede pasear por aquí en cualquier momento!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
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
        },
        quiz: {
          'secret-history': {
            question: '¿De quién lleva el nombre este barrio?',
            options: ['De un compositor de música, Federico Chueca', 'De un rey', 'De un pintor'],
            correct: 0,
            reveal: '¡De un compositor de zarzuelas! El barrio estuvo abandonado durante un tiempo, hasta que se llenó de vida y color. 🎶'
          },
          legends: {
            question: '¿Qué se celebra aquí cada año con banderas de arcoíris?',
            options: ['El Orgullo LGTBI', 'El día de la música', 'El carnaval'],
            correct: 0,
            reveal: '¡El Orgullo! Una de las celebraciones más grandes de toda Europa, para celebrar que cada persona puede ser como es.'
          },
          architecture: {
            question: '¿Qué se ilumina de colores por la noche en la plaza principal del barrio?',
            options: ['Los discos del suelo', 'Las farolas', 'Los árboles'],
            correct: 0,
            reveal: '¡Los discos de colores del suelo! Rodeados de edificios de más de 100 años llenos de tiendas y bares.'
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
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (barrio con calles públicas).', kids: '¡Se puede pasear por aquí en cualquier momento!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
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
        },
        quiz: {
          'secret-history': {
            question: '¿Cuántos años tenía Manuela Malasaña, la joven que da nombre a este barrio?',
            options: ['17 años', '30 años', '50 años'],
            correct: 0,
            reveal: '¡17 años! Fue muy valiente durante un momento muy difícil para Madrid, hace más de 200 años. 🎗️'
          },
          legends: {
            question: '¿Qué movimiento artístico y musical nació en este barrio hace unos 40 años?',
            options: ['La Movida Madrileña', 'El Flamenco', 'El Rock and Roll español'],
            correct: 0,
            reveal: '¡La Movida Madrileña! Se llenó de músicos y artistas con ganas de crear cosas nuevas.'
          },
          architecture: {
            question: '¿Qué tipo de tiendas hay hoy en las calles antiguas de este barrio?',
            options: ['Tiendas modernas y curiosas', 'Solo tiendas de siempre', 'Ninguna tienda'],
            correct: 0,
            reveal: '¡Tiendas modernas y curiosas! Una mezcla especial entre lo de siempre y lo nuevo.'
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
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (barrio con calles públicas).', kids: '¡Se puede pasear por aquí en cualquier momento!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
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
        },
        quiz: {
          'secret-history': {
            question: '¿Qué famoso escritor de Don Quijote vivió en este barrio?',
            options: ['Miguel de Cervantes', 'Federico García Lorca', 'Antonio Machado'],
            correct: 0,
            reveal: '¡Miguel de Cervantes! Vivió aquí junto a otros grandes escritores de la misma época. ✒️'
          },
          legends: {
            question: '¿Qué se cuenta que hicieron dos escritores rivales de este barrio?',
            options: ['Uno pudo ayudar a escribir una copia falsa del libro del otro', 'Se batieron en duelo', 'Se hicieron muy amigos'],
            correct: 0,
            reveal: '¡Una copia falsa! Cervantes y Lope de Vega, casi vecinos, en realidad no se llevaban nada bien.'
          },
          architecture: {
            question: '¿Qué se puede leer grabado en el suelo de una calle de este barrio?',
            options: ['Versos de escritores famosos', 'Nombres de reyes', 'Fechas importantes'],
            correct: 0,
            reveal: '¡Versos de escritores famosos! Una calle que se lee con los pies mientras paseas.'
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
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (plaza pública al aire libre).', kids: '¡Se puede visitar en cualquier momento, no tiene horario!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
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
        },
        quiz: {
          'secret-history': {
            question: '¿Qué edificio de esta plaza es el teatro más antiguo de Madrid?',
            options: ['El Teatro Español', 'El Teatro Real', 'El Teatro Real Coliseo'],
            correct: 0,
            reveal: '¡El Teatro Español! Se construyó sobre un antiguo corral de comedias del Siglo de Oro. 🎭'
          },
          legends: {
            question: '¿Qué sostiene una de las estatuas de escritores de esta plaza, a punto de volar?',
            options: ['Un pajarillo', 'Una espada', 'Un libro'],
            correct: 0,
            reveal: '¡Un pajarillo! Es la estatua de Federico García Lorca, que parece a punto de soltarlo hacia el teatro.'
          },
          architecture: {
            question: '¿Cómo está esta plaza de día y de noche?',
            options: ['Siempre llena de vida, con gente en las terrazas', 'Siempre vacía', 'Solo abierta de noche'],
            correct: 0,
            reveal: '¡Siempre llena de vida! Con terrazas y bares muy animados junto al teatro más antiguo de Madrid.'
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
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (plaza pública al aire libre).', kids: '¡Se puede visitar en cualquier momento, no tiene horario!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
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
        },
        quiz: {
          'secret-history': {
            question: '¿Qué se vendía antiguamente en esta plaza, antes de que existiera la Plaza Mayor?',
            options: ['Paja para las mulas', 'Pescado', 'Ropa'],
            correct: 0,
            reveal: '¡Paja! Se la daban de comer a las mulas de los sacerdotes que servían en la capilla de al lado. 🌾'
          },
          legends: {
            question: '¿Qué se dice que se descubrió cerca de esta plaza sobre el patrón de Madrid?',
            options: ['Que su cuerpo estaba sorprendentemente conservado', 'Que nunca existió', 'Que vivía en un castillo'],
            correct: 0,
            reveal: '¡Que estaba conservado! Se cuenta que no tenía signos de haber pasado el tiempo, algo que alimentó su fama de santo.'
          },
          architecture: {
            question: '¿De qué época parece esta plaza, por su aspecto?',
            options: ['Medieval', 'Moderna', 'Futurista'],
            correct: 0,
            reveal: '¡Medieval! Sus calles estrechas y curvas te hacen sentir como si viajaras varios siglos atrás.'
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
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (calle pública).', kids: '¡Se puede pasear por aquí en cualquier momento!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
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
        },
        quiz: {
          'secret-history': {
            question: '¿Qué récord Guinness tiene el restaurante de esta calle?',
            options: ['Es el restaurante más antiguo del mundo', 'Es el más grande del mundo', 'Es el más caro del mundo'],
            correct: 0,
            reveal: '¡El más antiguo del mundo! Lleva funcionando sin parar desde 1725. 🔪'
          },
          legends: {
            question: '¿Quién se dice que trabajó aquí lavando platos antes de ser famoso?',
            options: ['El pintor Goya', 'El escritor Cervantes', 'El rey Felipe II'],
            correct: 0,
            reveal: '¡El pintor Goya! Aunque es más leyenda popular que un hecho totalmente comprobado.'
          },
          architecture: {
            question: '¿Cómo es esta calle?',
            options: ['Muy empinada, como una pequeña montaña', 'Totalmente plana', 'Muy ancha'],
            correct: 0,
            reveal: '¡Muy empinada! Su famoso arco de piedra es la entrada hacia la Plaza Mayor.'
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
        visitInfo: {
          hours: { adult: 'Martes a sábado 10:00-14:00 y 16:00-18:30; domingos y festivos 10:00-15:00. Cerrado los lunes. Solo se visita con guía (incluida en el precio).', kids: 'Abre de martes a domingo. Los lunes está cerrado. Se visita con un guía.' },
          price: { adult: '8€ entrada general. Gratis miércoles y jueves de 16:00 a 18:30 para ciudadanos de la UE e Iberoamérica.', kids: '8€, pero es gratis los miércoles y jueves por la tarde.' },
          link: 'https://tickets.patrimonionacional.es/es/tickets/monasterio-descalzas'
        },
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
        },
        quiz: {
          'secret-history': {
            question: '¿Quién fundó este convento, en el mismo palacio donde había nacido?',
            options: ['Una princesa española, Juana de Austria', 'Un rey', 'Un Papa'],
            correct: 0,
            reveal: '¡Juana de Austria! Al quedarse viuda joven, convirtió su propia casa en un convento. 👑'
          },
          legends: {
            question: '¿Qué trajeron muchas mujeres nobles al entrar en este convento?',
            options: ['Joyas y obras de arte muy valiosas', 'Solo ropa sencilla', 'Animales de compañía'],
            correct: 0,
            reveal: '¡Joyas y obras de arte! Por eso guarda tesoros tan grandes, a pesar de su fachada tan sencilla.'
          },
          architecture: {
            question: '¿Cómo es la fachada de este edificio comparada con su interior?',
            options: ['Sencilla por fuera, muy rica por dentro', 'Igual de sencilla en ambos', 'Muy decorada por fuera y sencilla por dentro'],
            correct: 0,
            reveal: '¡Sencilla por fuera, rica por dentro! Escaleras pintadas y tapices gigantes esperan a quien entra.'
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
        },
        quiz: {
          'secret-history': {
            question: '¿Quién mandó construir este convento?',
            options: ['Una reina española', 'Un Papa', 'Un noble extranjero'],
            correct: 0,
            reveal: '¡Una reina, Margarita de Austria! Lo mandó hacer muy cerca del Palacio Real hace más de 400 años. 👑'
          },
          legends: {
            question: '¿Qué se dice que pasa cada 27 de julio con una reliquia de este convento?',
            options: ['Cambia de sólida a líquida', 'Desaparece', 'Cambia de color a azul'],
            correct: 0,
            reveal: '¡Cambia de sólida a líquida! Nadie ha podido explicar por qué, y lleva pasando así desde hace siglos.'
          },
          architecture: {
            question: '¿Cómo es la fachada de este monasterio?',
            options: ['Sobria, de piedra gris', 'Llena de colores', 'De cristal'],
            correct: 0,
            reveal: '¡Sobria y de piedra gris! Pero por dentro esconde salas llenas de objetos antiguos y misteriosos.'
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
        visitInfo: {
          hours: { adult: 'Martes a domingo 10:00-20:00. Cerrado los lunes.', kids: 'Abre de martes a domingo. Los lunes está cerrado.' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
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
        visitInfo: {
          hours: { adult: 'Edificio de propiedad privada (sede de la SGAE): no tiene horario turístico regular. Solo se ve la fachada desde la calle.', kids: 'Es la sede de una empresa, así que solo se puede ver por fuera.' },
          price: { adult: 'Gratis ver la fachada; no se visita el interior.', kids: '¡Gratis mirarlo por fuera!' }
        },
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
        visitInfo: {
          hours: { adult: 'Edificio de propiedad privada (uso de oficinas): no se visita el interior. Se ve la fachada desde la calle en cualquier momento.', kids: 'Es un edificio de oficinas, ¡así que solo se puede ver por fuera!' },
          price: { adult: 'Gratis ver la fachada; no se visita el interior.', kids: '¡Gratis mirarlo por fuera!' }
        },
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
        visitInfo: {
          hours: { adult: 'El edificio y sus exposiciones son de acceso libre en horario del centro cultural. El mirador de la azotea abre martes a domingo 10:30-14:00 y 16:00-19:30 (pases cada media hora); cerrado los lunes.', kids: 'El edificio se visita gratis; para subir al mirador de arriba hay que pagar un poquito.' },
          price: { adult: 'Entrada al edificio gratis. Subir al mirador: 3€ general (tarifas reducidas para niños, mayores y desempleados).', kids: 'El edificio es gratis; subir arriba al mirador cuesta 3€ (¡menos si eres niño!).' }
        },
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
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (plaza pública al aire libre).', kids: '¡Se puede visitar en cualquier momento, no tiene horario!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
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
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (calle pública); las tiendas suelen abrir de 10:00 a 21:00.', kids: '¡Se puede pasear por aquí en cualquier momento!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
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
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (calle pública).', kids: '¡Se puede pasear por aquí en cualquier momento!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
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
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (plaza pública al aire libre).', kids: '¡Se puede visitar en cualquier momento, no tiene horario!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
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
        visitInfo: {
          hours: { adult: 'Edificio de oficinas: la fachada se ve desde la calle en cualquier momento. Su espacio de exposiciones en planta baja (Fundación Telefónica) suele abrir martes a domingo, con entrada gratuita.', kids: 'Por fuera se ve siempre; abajo del todo hay veces que hay exposiciones gratis.' },
          price: { adult: 'Gratis ver la fachada; las exposiciones de la planta baja también suelen ser gratuitas.', kids: '¡Gratis mirarlo por fuera!' }
        },
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
        visitInfo: {
          hours: { adult: 'Acceso libre, parque público abierto en horario diurno.', kids: '¡Se puede visitar en cualquier momento del día!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
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
        visitInfo: {
          hours: { adult: 'Acceso libre, jardín público abierto en horario diurno (suele cerrar al anochecer).', kids: '¡Se puede visitar durante el día!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
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
        visitInfo: {
          hours: { adult: 'Iglesia parroquial activa: suele abrir a diario, aproximadamente de 8:00 a 13:00 y de 18:00 a 21:00 (fuera de horario de misa).', kids: 'Abre casi todos los días, por la mañana y por la tarde.' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
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
        visitInfo: {
          hours: { adult: 'Martes a sábado 10:30-14:30 y 16:00-18:30 (en julio, agosto y septiembre, horario reducido de 10:30 a 15:30). Cerrada domingos y lunes.', kids: 'Abre de martes a sábado. Los domingos y lunes está cerrada.' },
          price: { adult: '6€ entrada general, 3,50€ reducida (menores, jubilados, grupos). Gratis los jueves.', kids: '6€, pero gratis los jueves.' }
        },
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
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (monumento exterior).', kids: '¡Se puede visitar en cualquier momento, no tiene horario!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
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
        visitInfo: {
          hours: { adult: 'Martes a domingo 10:00-20:00 (10:00-19:00 del 15 de junio al 15 de septiembre). Cerrado los lunes.', kids: 'Abre de martes a domingo. Los lunes está cerrado.' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
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
        visitInfo: {
          hours: { adult: 'Todos los días 10:00-20:00 (24 y 31 de diciembre y 5 de enero, hasta las 18:00).', kids: 'Abre todos los días, por la mañana y por la tarde.' },
          price: { adult: '6€ entrada general. Gratis para menores de 16 años, y para todos el 15, 17 (desde las 19:00) y 18 de mayo, y el 9 de noviembre.', kids: '6€, ¡pero gratis si tienes menos de 16 años!' }
        },
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
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (plaza pública al aire libre).', kids: '¡Se puede visitar en cualquier momento, no tiene horario!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
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
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (plaza pública al aire libre).', kids: '¡Se puede visitar en cualquier momento, no tiene horario!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
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
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (plaza pública al aire libre).', kids: '¡Se puede visitar en cualquier momento, no tiene horario!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
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
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (plaza pública al aire libre).', kids: '¡Se puede visitar en cualquier momento, no tiene horario!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
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
        visitInfo: {
          hours: { adult: 'Lunes a sábado, aproximadamente 9:00-21:00 (horarios pueden variar por puesto).', kids: 'Abre de lunes a sábado, por la mañana y por la tarde.' },
          price: { adult: 'Gratis entrar; solo se paga lo que compres.', kids: 'Entrar es gratis, ¡solo se paga lo que compres!' }
        },
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
        visitInfo: {
          hours: { adult: 'Lunes a sábado, aproximadamente 9:00-14:00 y 17:00-20:00 (horarios pueden variar por puesto).', kids: 'Abre de lunes a sábado, por la mañana y por la tarde.' },
          price: { adult: 'Gratis entrar; solo se paga lo que compres.', kids: 'Entrar es gratis, ¡solo se paga lo que compres!' }
        },
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
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (calle pública).', kids: '¡Se puede pasear por aquí en cualquier momento!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
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
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (plaza pública al aire libre).', kids: '¡Se puede visitar en cualquier momento, no tiene horario!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
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
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (calle pública).', kids: '¡Se puede pasear por aquí en cualquier momento!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
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
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (plaza pública al aire libre).', kids: '¡Se puede visitar en cualquier momento, no tiene horario!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
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
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (calle pública).', kids: '¡Se puede pasear por aquí en cualquier momento!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
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
        visitInfo: {
          hours: { adult: 'Acceso libre, jardín público abierto en horario diurno (suele cerrar al anochecer).', kids: '¡Se puede visitar durante el día!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
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
      },
      {
        id: 'calle-postas-posada-peine',
        name: { adult: 'Calle de Postas y Posada del Peine', kids: 'Calle de Postas — La Posada del Peine Encadenado 🪮' },
        subtitle: { adult: 'La antigua estación de postas junto a la Plaza Mayor', kids: '¡Aquí había un peine de metal encadenado en la puerta!' },
        category: CATEGORIES.HIDDEN,
        coords: [40.41573, -3.70599],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Madrid%2C_Posada_del_Peine%2C_2024.jpg/330px-Madrid%2C_Posada_del_Peine%2C_2024.jpg',
        audio: { duration: 145, title: { adult: 'Audioguía: Calle de Postas y Posada del Peine', kids: '¡Aventura Sonora: La Posada del Peine Encadenado!' } },
        visitInfo: {
          hours: { adult: 'Acceso libre a la calle en cualquier momento; la Posada del Peine funciona hoy como hotel privado.', kids: '¡Se puede pasear por la calle a cualquier hora!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis!' }
        },
        tabs: {
          history: {
            adult: 'La calle debe su nombre a que en el siglo XVI aquí se ubicaba la Casa de Postas, una estación de correos donde los caballos del servicio postal descansaban y se cambiaban antes de seguir viaje. En ese mismo tramo se encuentra hoy la Posada del Peine, una de las posadas más antiguas de Madrid, con orígenes en el siglo XVII y una fachada muy cuidada que corona un pequeño templete con reloj instalado en 1892 para conmemorar el IV centenario del Descubrimiento de América.',
            kids: '¡Esta calle se llama así porque hace siglos había aquí una estación donde los caballos del correo paraban a descansar antes de seguir viaje! En esa misma calle está la Posada del Peine, una posada muy antigua, del siglo XVII, que hoy sigue siendo un hotel.'
          },
          legends: {
            adult: 'En el portal de la antigua Casa de Postas había una hornacina con una imagen de la Virgen de la Soledad, muy venerada por los madrileños de la época. La Posada del Peine se hizo famosa porque, según la tradición, fue de las primeras en tener un peine de metal encadenado en la entrada para que los huéspedes se peinaran antes de entrar, algo insólito para la higiene de la época.',
            kids: '¡En la puerta de la posada colgaba un peine de metal, sujeto con una cadena, para que los viajeros se peinaran antes de entrar! Es de las primeras veces que se hizo algo así en toda la ciudad.'
          },
          architecture: {
            adult: 'El edificio actual, hoy convertido en hotel, une tres construcciones de épocas distintas bajo una misma fachada. Conserva el empedrado original de la entrada y la escalera principal de madera de pino, además del templete con reloj que remata el tejado, uno de los elementos más reconocibles de toda la calle.',
            kids: '¡Mira hacia arriba! En lo alto del edificio hay un pequeño templete con un reloj, puesto hace más de 130 años. Dentro se conserva todavía la escalera de madera y el suelo empedrado de la entrada, tal y como eran hace siglos.'
          }
        }
      },
      {
        id: 'calle-san-cristobal',
        name: { adult: 'Calle de San Cristóbal', kids: 'Calle de San Cristóbal — El Santo que Cruzaba Ríos 🌊' },
        subtitle: { adult: 'Una calle corta con nombre de santo gigante', kids: '¡Lleva el nombre de un santo que ayudaba a cruzar ríos!' },
        category: CATEGORIES.HIDDEN,
        coords: [40.41594, -3.70567],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Calle_de_San_Crist%C3%B3bal_%28Madrid%29_01.jpg/330px-Calle_de_San_Crist%C3%B3bal_%28Madrid%29_01.jpg',
        audio: { duration: 115, title: { adult: 'Audioguía: Calle de San Cristóbal', kids: '¡Aventura Sonora: El Santo que Cruzaba Ríos!' } },
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (calle pública).', kids: '¡Se puede pasear por aquí en cualquier momento!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis!' }
        },
        tabs: {
          history: {
            adult: 'Esta calle corta, de apenas un centenar de metros, debe su nombre a una antigua capillita dedicada a San Cristóbal, el santo gigante que, según la tradición, ayudaba a los viajeros a cruzar los ríos cargándolos sobre sus hombros. Forma parte de la misma manzana que el Palacio de Santa Cruz y conecta con la plaza del mismo nombre, dentro del trazado estrecho e irregular típico del Madrid de los Austrias.',
            kids: '¡Esta calle tan cortita lleva el nombre de un santo gigante que, según cuentan, cargaba a la gente sobre sus hombros para cruzar los ríos! Está justo al lado del Palacio de Santa Cruz.'
          },
          legends: {
            adult: 'Es un cruce de paso obligado entre varios puntos del casco histórico: desde aquí se llega en pocos minutos tanto a la Posada del Peine como a la Plaza Mayor, en un recorrido de calles estrechas que apenas ha cambiado de trazado desde el siglo XVI.',
            kids: '¡Desde aquí se llega andando en un momento tanto a la Posada del Peine como a la Plaza Mayor! Las calles de esta zona son casi iguales a como eran hace 500 años.'
          },
          architecture: {
            adult: 'No conserva ningún edificio propio destacado ni resto visible de la antigua capilla que le dio nombre; su interés está en el propio trazado, estrecho y sinuoso, heredado del Madrid medieval que se articula alrededor de la Plaza de Santa Cruz.',
            kids: 'Ya no queda nada de la capilla del santo, pero la calle conserva su forma estrecha y torcida de hace cientos de años. ¡Así eran casi todas las calles del Madrid antiguo!'
          }
        }
      },
      {
        id: 'plaza-santa-cruz',
        name: { adult: 'Plaza de Santa Cruz', kids: 'Plaza de Santa Cruz — El Palacio que Fue Cárcel 🔑' },
        subtitle: { adult: 'Una joya escondida del Madrid de los Austrias', kids: '¡Este palacio fue cárcel antes que ministerio!' },
        category: CATEGORIES.HISTORY,
        coords: [40.4147, -3.70603],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Palacio_de_Santa_Cruz%2C_Madrid_4.jpg/330px-Palacio_de_Santa_Cruz%2C_Madrid_4.jpg',
        audio: { duration: 150, title: { adult: 'Audioguía: Plaza de Santa Cruz', kids: '¡Aventura Sonora: El Palacio que Fue Cárcel!' } },
        visitInfo: {
          hours: { adult: 'La plaza es de acceso libre; el interior del Palacio de Santa Cruz, sede del Ministerio de Asuntos Exteriores, no es visitable.', kids: 'Se puede pasear por la plaza en cualquier momento, ¡pero no se puede entrar al edificio!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis!' }
        },
        tabs: {
          history: {
            adult: 'Su gran protagonista es el antiguo Palacio de Santa Cruz, construido entre 1629 y 1643 bajo Felipe IV según diseño de Juan Gómez de Mora, el mismo arquitecto que dio su fisonomía definitiva a la Plaza Mayor. Sirvió como cárcel de la Corte durante siglos y hoy es la sede del Ministerio de Asuntos Exteriores.',
            kids: 'El edificio más importante de esta plaza es el Palacio de Santa Cruz, construido hace casi 400 años. ¡Durante mucho tiempo fue una cárcel! Hoy es la sede de un ministerio del gobierno.'
          },
          legends: {
            adult: 'Es una de las joyas escondidas del Madrid de los Austrias: vale la pena fijarse en su fachada simétrica de ladrillo rojo y granito y en sus torres angulares rematadas en chapiteles de pizarra, muy fotogénicas y a menudo pasadas por alto por quien solo visita la cercana Plaza Mayor.',
            kids: '¡Fíjate en las torres puntiagudas del palacio! Están hechas con un tipo de piedra oscura llamada pizarra. Mucha gente pasa cerca sin darse cuenta de lo bonito que es este edificio.'
          },
          architecture: {
            adult: 'Presenta una portada central de triple vano con superposición de cuerpos y un ático coronado por el escudo real. Su planta rectangular organiza dos patios interiores simétricos, inspirados en el Hospital Tavera de Toledo.',
            kids: 'La entrada principal tiene tres huecos, uno encima de otro, con el escudo del rey arriba del todo. Por dentro tiene dos patios iguales, inspirados en un hospital de Toledo.'
          }
        }
      },
      {
        id: 'colegiata-san-isidro',
        name: { adult: 'Colegiata de San Isidro', kids: 'Colegiata de San Isidro — La Catedral Antes de la Catedral ⛪' },
        subtitle: { adult: 'La catedral de Madrid antes de la Almudena', kids: '¡Fue la catedral de Madrid antes de que existiera la Almudena!' },
        category: CATEGORIES.HISTORY,
        coords: [40.41278, -3.70694],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Main_facade_of_the_Colegiata_de_San_Isidro_2022.jpg/330px-Main_facade_of_the_Colegiata_de_San_Isidro_2022.jpg',
        audio: { duration: 155, title: { adult: 'Audioguía: Colegiata de San Isidro', kids: '¡Aventura Sonora: La Catedral Antes de la Catedral!' } },
        visitInfo: {
          hours: { adult: 'Abre en horario de culto, normalmente por la mañana y por la tarde.', kids: 'Se puede visitar en horario de misa.' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis!' }
        },
        tabs: {
          history: {
            adult: 'A lo largo de la Calle de Toledo, una de las vías más antiguas de Madrid —históricamente el camino que conectaba con Toledo cuando esta era capital—, se alza la Colegiata de San Isidro, que durante un tiempo fue la catedral de Madrid antes de que se construyera la Almudena. Proyectada en 1620 por el jesuita Pedro Sánchez, la obra se prolongó hasta 1664 bajo Francisco Bautista y Melchor de Bueras.',
            kids: 'Esta iglesia está en la Calle de Toledo, una de las calles más antiguas de la ciudad, que antes llevaba directo hasta la ciudad de Toledo. ¡Esta iglesia fue la catedral de Madrid antes de que existiera la que hay ahora!'
          },
          legends: {
            adult: 'Es una joya barroca del siglo XVII, inspirada en la iglesia del Gesù de Roma, que guarda las reliquias de San Isidro y Santa María de la Cabeza, patrones de Madrid. La calle desemboca en la zona de El Rastro, el mercadillo dominical más famoso de la ciudad, cuyo nombre viene de los rastros de sangre que dejaban las pieles de los animales que se curtían y vendían antiguamente allí.',
            kids: 'Dentro se guardan los restos de San Isidro y su mujer, los patrones de Madrid. Si sigues caminando por esta calle llegas al Rastro, el mercadillo más famoso de la ciudad, ¡que tiene un nombre con una historia un poco sangrienta!'
          },
          architecture: {
            adult: 'Su modelo es la iglesia del Gesù de Roma: planta de cruz latina, una sola nave con capillas laterales, crucero y cúpula. La fachada de piedra de granito presenta un cuerpo central de cuatro columnas corintias y un grupo escultórico de San Isidro y Santa María de la Cabeza.',
            kids: '¡Cuenta las columnas de la entrada! Son cuatro, muy altas, y arriba hay estatuas de los dos santos patrones de Madrid. La iglesia tiene forma de cruz, como muchas iglesias grandes.'
          }
        }
      },
      {
        id: 'calle-botoneras',
        name: { adult: 'Calle Botoneras', kids: 'Calle Botoneras — La Calle de los Botones de Plata 🔘' },
        subtitle: { adult: 'Una calle gremial junto a la Plaza Mayor', kids: '¡Aquí se hacían botones de plata a medida!' },
        category: CATEGORIES.HIDDEN,
        coords: [40.41482, -3.70677],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/View_of_house_No.8_at_Calle_de_Botoneras%2C_Madrid.jpg/330px-View_of_house_No.8_at_Calle_de_Botoneras%2C_Madrid.jpg',
        audio: { duration: 130, title: { adult: 'Audioguía: Calle Botoneras', kids: '¡Aventura Sonora: La Calle de los Botones de Plata!' } },
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (calle pública).', kids: '¡Se puede pasear por aquí en cualquier momento!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis!' }
        },
        tabs: {
          history: {
            adult: 'Calle pequeña pero con mucha historia gremial: en el siglo XVII se instalaron aquí mujeres que fabricaban y vendían botones a medida, de plata, hueso y marfil, de donde toma su nombre actual. Antes se llamaba Arco Imperial.',
            kids: '¡Esta calle se llama así porque hace siglos aquí se hacían y vendían botones hechos a mano, algunos hasta de plata! Antes tenía otro nombre: Arco Imperial.'
          },
          legends: {
            adult: 'En el número 5 está el restaurante Los Galayos, que existe desde 1894 y conserva la barra tallada a mano de principios del siglo XIX, procedente de otro local familiar, y el llamado Salón Ávila, con vigas de madera vistas y azulejería de motivos quijotescos.',
            kids: '¡En esta calle hay un restaurante que lleva abierto desde 1894! Dentro guarda una barra de madera tallada a mano y azulejos pintados con dibujos de Don Quijote.'
          },
          architecture: {
            adult: 'Forma parte del entramado de calles porticadas que Juan Gómez de Mora extendió alrededor de la Plaza Mayor, con soportales continuos que conectan directamente con los de la plaza.',
            kids: '¡Esta calle tiene soportales, como la Plaza Mayor, que está justo al lado! Así puedes caminar protegido de la lluvia o del sol.'
          }
        }
      },
      {
        id: 'calle-siete-de-julio',
        name: { adult: 'Calle del Siete de Julio', kids: 'Calle del Siete de Julio — La Calle de la Amargura 😢' },
        subtitle: { adult: 'De camino de condenados a escenario de un alzamiento', kids: '¡Antes se llamaba la Calle de la Amargura!' },
        category: CATEGORIES.HIDDEN,
        coords: [40.41593, -3.70797],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Madrid_%2822216555508%29.jpg/330px-Madrid_%2822216555508%29.jpg',
        audio: { duration: 130, title: { adult: 'Audioguía: Calle del Siete de Julio', kids: '¡Aventura Sonora: La Calle de la Amargura!' } },
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (calle pública).', kids: '¡Se puede pasear por aquí en cualquier momento!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis!' }
        },
        tabs: {
          history: {
            adult: 'Antiguamente se llamaba Calle de la Amargura, porque era el camino que recorrían los condenados hacia su ejecución pública en la Plaza Mayor. Cambió de nombre por un enfrentamiento real ocurrido aquí el 7 de julio de 1822, cuando la Milicia Nacional se enfrentó a la Guardia Real de Fernando VII en defensa de la Constitución liberal de la época; el cambio se oficializó por acuerdo municipal el 23 de noviembre de 1823.',
            kids: 'Esta calle antes se llamaba "Calle de la Amargura", porque por aquí pasaban los presos camino de su castigo en la Plaza Mayor. Le cambiaron el nombre después de una pelea de verdad que pasó aquí, ¡un 7 de julio!'
          },
          legends: {
            adult: 'Es una calle corta pero que fue escenario de un intento de golpe de estado real. Conserva una de las clásicas placas cerámicas del callejero madrileño, con el nombre de la calle pintado a mano.',
            kids: '¡En esta calle tan cortita pasó un enfrentamiento de verdad entre soldados! Fíjate en la placa de cerámica con el nombre de la calle, pintada a mano como las de todo el centro de Madrid.'
          },
          architecture: {
            adult: 'Conecta la Calle Mayor con la Plaza Mayor a través de uno de los tramos más estrechos del entramado original diseñado por Juan Gómez de Mora en el siglo XVII.',
            kids: 'Es una calle muy estrecha, tal y como se diseñaron muchas calles de esta zona hace 400 años.'
          }
        }
      },
      {
        id: 'calle-ciudad-rodrigo',
        name: { adult: 'Calle Ciudad Rodrigo', kids: 'Calle Ciudad Rodrigo — La Puerta del Cortejo Real 👑' },
        subtitle: { adult: 'Una de las diez entradas históricas a la Plaza Mayor', kids: '¡Se abrió para que pasara el cortejo del rey!' },
        category: CATEGORIES.HIDDEN,
        coords: [40.41574, -3.7084],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Plaza_Mayor_de_Madrid_desde_calle_Ciudad_Rodrigo_-_03.jpg/330px-Plaza_Mayor_de_Madrid_desde_calle_Ciudad_Rodrigo_-_03.jpg',
        audio: { duration: 125, title: { adult: 'Audioguía: Calle Ciudad Rodrigo', kids: '¡Aventura Sonora: La Puerta del Cortejo Real!' } },
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (calle pública).', kids: '¡Se puede pasear por aquí en cualquier momento!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis!' }
        },
        tabs: {
          history: {
            adult: 'Es una de las diez entradas históricas a la Plaza Mayor. Antes se llamaba Calle Nueva, y se abrió especialmente para que el cortejo real pudiera ir desde la Plaza Mayor hasta la iglesia de Atocha sin rodear por la Puerta del Sol.',
            kids: '¡Esta calle es una de las diez entradas antiguas a la Plaza Mayor! Se abrió para que el rey pudiera pasar directo hacia otra iglesia, sin dar rodeos.'
          },
          legends: {
            adult: 'Le cambiaron el nombre en honor a la ciudad de Ciudad Rodrigo (Salamanca), que resistió heroicamente el asedio de las tropas napoleónicas durante la Guerra de la Independencia.',
            kids: 'Le pusieron el nombre de otra ciudad española, Ciudad Rodrigo, que resistió muy valientemente cuando la invadieron los soldados franceses hace más de 200 años.'
          },
          architecture: {
            adult: 'Es una de las calles porticadas que enlazan con los soportales de la Plaza Mayor, dentro del modelo unificado que Juan Gómez de Mora extendió a las calles adyacentes en el siglo XVII.',
            kids: '¡Esta calle también tiene soportales, igual que la Plaza Mayor! Todas estas calles de alrededor se construyeron con el mismo estilo hace 400 años.'
          }
        }
      },
      {
        id: 'calle-duque-de-najera',
        name: { adult: 'Calle del Duque de Nájera', kids: 'Calle del Duque de Nájera — El Palacio Maldito 👻' },
        subtitle: { adult: 'La calle del palacio con fama de embrujado', kids: '¡Rodea un palacio con fama de estar maldito!' },
        category: CATEGORIES.HIDDEN,
        coords: [40.41496, -3.71114],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Palacio_de_Ca%C3%B1ete_%28Madrid%29_01.jpg/330px-Palacio_de_Ca%C3%B1ete_%28Madrid%29_01.jpg',
        audio: { duration: 140, title: { adult: 'Audioguía: Calle del Duque de Nájera', kids: '¡Aventura Sonora: El Palacio Maldito!' } },
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (calle pública).', kids: '¡Se puede pasear por aquí en cualquier momento!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis!' }
        },
        tabs: {
          history: {
            adult: 'Va desde la Calle Mayor hasta la Calle de Sacramento, rodeando el antiguo Palacio de Cañete, construido entre finales del siglo XVI y principios del XVII en estilo herreriano, con ladrillo visto, zócalos de piedra, cuatro plantas y dos torres laterales rematadas en chapiteles.',
            kids: 'Esta calle rodea un palacio antiguo, el Palacio de Cañete, construido hace más de 400 años, con dos torres con tejados puntiagudos.'
          },
          legends: {
            adult: 'El palacio se ganó fama de estar maldito, con apariciones y ruidos extraños, hasta que se descubrió que un criado había asesinado al dueño anterior. La viuda no soportó seguir viviendo allí y vendió el palacio; quien lo compró fue el Duque de Nájera, de ahí el nombre de la calle.',
            kids: '¡Dicen que este palacio estaba embrujado, con ruidos raros por las noches! Al final se descubrió que un criado había hecho algo terrible ahí dentro. La viuda del dueño no quiso seguir viviendo allí y lo vendió a un duque, que le dio su nombre a la calle.'
          },
          architecture: {
            adult: 'El palacio, de estilo herreriano y casi sin ornamentación, conserva una portada principal con molduras rectas de granito, pilastras dóricas y un remate de triglifos y metopas.',
            kids: 'La entrada del palacio es muy sobria, sin apenas decoración, con columnas sencillas talladas en piedra. Así eran los edificios serios de la época de Felipe II.'
          }
        }
      },
      {
        id: 'catedral-castrense',
        name: { adult: 'Catedral Castrense (Iglesia del Sacramento)', kids: 'Catedral Castrense — La Catedral de los Soldados ⚔️' },
        subtitle: { adult: 'La catedral de las Fuerzas Armadas españolas', kids: '¡Guarda una lanza que atravesó a Cristo, según la tradición!' },
        category: CATEGORIES.HISTORY,
        coords: [40.41477, -3.71231],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Madrid%2C_iglesia_catedral_castrense_del_sacramento_%28cattedrale_delle_forze_armate%29%2C_facciata_02.jpg/330px-Madrid%2C_iglesia_catedral_castrense_del_sacramento_%28cattedrale_delle_forze_armate%29%2C_facciata_02.jpg',
        audio: { duration: 150, title: { adult: 'Audioguía: Catedral Castrense', kids: '¡Aventura Sonora: La Catedral de los Soldados!' } },
        visitInfo: {
          hours: { adult: 'Abre en horario de culto, normalmente por la mañana y por la tarde.', kids: 'Se puede visitar en horario de misa.' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis!' }
        },
        tabs: {
          history: {
            adult: 'En origen fue el convento de las monjas bernardas del Santísimo Sacramento, fundado en 1615. La iglesia, proyectada en cruz latina por Juan Gómez de Mora, tardó décadas en construirse: la obra, dirigida principalmente por Bartolomé Hurtado García con intervención de Francisco Bautista y Manuel del Olmo, se terminó en 1744. No se convirtió en Catedral de las Fuerzas Armadas hasta 1986.',
            kids: 'Esta iglesia empezó siendo un convento de monjas, hace más de 400 años. Tardaron muchísimos años en construirla del todo. Hace relativamente poco, en 1986, se convirtió en la catedral de los soldados españoles.'
          },
          legends: {
            adult: 'Guarda una reliquia curiosa: una lanza que la tradición atribuye al centurión romano que atravesó el costado de Cristo.',
            kids: '¡Dentro guardan una lanza que, según cuentan, es la misma que usó un soldado romano hace 2.000 años! Es una de las reliquias más curiosas de todo Madrid.'
          },
          architecture: {
            adult: 'La fachada de granito, con tres arcos y un bajorrelieve de San Benito y San Bernardo adorando el Santísimo, es obra del arquitecto Pedro de Ribera, hacia 1744; la decoración interior es de Francisco Esteban, del mismo año.',
            kids: 'La entrada tiene tres arcos de piedra gris, con una escena tallada encima. Por dentro, la decoración es de la misma época, ¡de hace casi 300 años!'
          }
        }
      },
      {
        id: 'mirador-muralla-arabe',
        name: { adult: 'Mirador de la Muralla Árabe', kids: 'Mirador de la Muralla Árabe — Donde Nació Madrid 🏰' },
        subtitle: { adult: 'Los restos más antiguos de la ciudad, al aire libre', kids: '¡Aquí empezó Madrid, hace más de 1.100 años!' },
        category: CATEGORIES.HIDDEN,
        coords: [40.41493, -3.71457],
        image: 'assets/photos/madrid/mirador-muralla-arabe.jpg',
        audio: { duration: 145, title: { adult: 'Audioguía: Mirador de la Muralla Árabe', kids: '¡Aventura Sonora: Donde Nació Madrid!' } },
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (mirador y parque al aire libre).', kids: '¡Se puede visitar en cualquier momento!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis!' }
        },
        tabs: {
          history: {
            adult: 'En el Parque del Emir Mohamed I, en la Cuesta de la Vega y frente al ábside de la Catedral de la Almudena, se conservan restos de la muralla emiral de Madrid, construida en el siglo IX, cuando la ciudad era una pequeña alcazaba árabe llamada Mayrit, fundada por el emir Mohamed I para vigilar el valle del Manzanares y proteger Toledo. Es una de las construcciones más antiguas conservadas en toda la ciudad, hecha con mampostería de piedra caliza y sílex.',
            kids: '¡Aquí se conservan trozos de la muralla más antigua de Madrid, de hace más de 1.100 años! En esa época Madrid era solo una pequeña fortaleza árabe llamada Mayrit, construida para vigilar el valle y proteger el camino hacia Toledo.'
          },
          legends: {
            adult: 'Bajo el cristal que la protege también se puede ver parte del foso defensivo. Junto a la muralla hay una escultura de bronce de un hombre asomado a la cristalera, obra del artista Antonio López García, que representa la mirada de la ciudad hacia su propio pasado enterrado. Este punto marca literalmente el límite de lo que fue la Madrid musulmana original.',
            kids: '¡Bajo un cristal se puede ver también el foso que protegía la muralla! Al lado hay una estatua de bronce de un hombre asomado, como si estuviera mirando el pasado escondido de la ciudad. ¡Aquí terminaba la Madrid árabe de hace mil años!'
          },
          architecture: {
            adult: 'La muralla combina hiladas de mampostería con verdugadas de ladrillo en algunos tramos, una técnica constructiva típica de la arquitectura defensiva andalusí de los siglos IX y X, muy anterior a las murallas cristianas posteriores que rodearían la ciudad.',
            kids: 'Fíjate en cómo está hecha la muralla: piedras puestas en filas, con algunas líneas de ladrillo entre medias. Así construían las murallas árabes hace más de mil años, mucho antes de las murallas cristianas que vinieron después.'
          }
        }
      },
      {
        id: 'palacio-senado',
        name: { adult: 'Palacio del Senado', kids: 'Palacio del Senado — Dos Edificios en Uno 🏛️' },
        subtitle: { adult: 'Cámara alta española en un convento reconvertido', kids: '¡Un edificio antiguo y otro moderno, pegados!' },
        category: CATEGORIES.HISTORY,
        coords: [40.42118, -3.71182],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Madrid_-_Senado_de_Espa%C3%B1a_2.jpg/330px-Madrid_-_Senado_de_Espa%C3%B1a_2.jpg',
        audio: { duration: 150, title: { adult: 'Audioguía: Palacio del Senado', kids: '¡Aventura Sonora: Dos Edificios en Uno!' } },
        visitInfo: {
          hours: { adult: 'Se puede visitar por dentro en jornadas de puertas abiertas o con cita previa organizada por el propio Senado; por fuera, acceso libre a la plaza.', kids: 'Por fuera se puede ver siempre; para entrar hay que apuntarse a una visita organizada.' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis!' }
        },
        tabs: {
          history: {
            adult: 'Combina dos edificios bien diferenciados por su color: el histórico, de fachada rosa, es el antiguo Colegio de Doña María de Aragón, del siglo XVI, reformado en estilo neoclásico en el siglo XIX por Aníbal Álvarez Bouquel; el arquitecto Antonio Prat transformó después la antigua iglesia conventual, de planta rectangular, en el actual Salón de Sesiones.',
            kids: 'Este edificio en realidad son dos pegados: uno antiguo, de color rosa, que antes fue un colegio religioso, y otro más moderno. ¡La sala donde se reúnen los senadores estaba antes dentro de una iglesia!'
          },
          legends: {
            adult: 'El edificio de Ampliación, de planta circular en la calle Bailén, se construyó entre 1987 y 1991, obra conjunta de los arquitectos Salvador Gayarre, José Ramos y Antonio García Vereda; su hemiciclo moderno muestra una fachada curva hacia la calle.',
            kids: 'La parte más nueva del edificio es redonda y se terminó hace poco más de 30 años. ¡Fíjate en su forma curva, muy distinta del edificio rosa de al lado!'
          },
          architecture: {
            adult: 'La combinación de un edificio conventual reformado en el siglo XIX con una ampliación circular de finales del XX convierte al Palacio del Senado en un ejemplo poco habitual de arquitectura institucional construida en dos tiempos muy distintos, sin ocultar ninguno de los dos.',
            kids: 'Es raro ver un edificio de gobierno hecho de dos partes tan diferentes: una muy antigua y otra bastante moderna, ¡sin intentar disimular ninguna de las dos!'
          }
        }
      },
      {
        id: 'real-compania-asturiana-minas',
        name: { adult: 'Antigua sede de la Real Compañía Asturiana de Minas', kids: 'La Casa de la Compañía de Minas ⛏️' },
        subtitle: { adult: 'Un palacio ecléctico camino de convertirse en centro cultural', kids: '¡Un edificio precioso que antes era de una empresa minera!' },
        category: CATEGORIES.HIDDEN,
        coords: [40.42194, -3.7125],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Real_Compa%C3%B1%C3%ADa_Asturiana_de_Minas_%28Madrid%29_03.jpg/330px-Real_Compa%C3%B1%C3%ADa_Asturiana_de_Minas_%28Madrid%29_03.jpg',
        audio: { duration: 140, title: { adult: 'Audioguía: Real Compañía Asturiana de Minas', kids: '¡Aventura Sonora: La Casa de la Compañía de Minas!' } },
        visitInfo: {
          hours: { adult: 'En rehabilitación: no es visitable por dentro; se puede ver la fachada desde la calle.', kids: 'Ahora mismo está en obras, así que solo se puede ver por fuera.' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis!' }
        },
        tabs: {
          history: {
            adult: 'Este edificio ecléctico, construido entre 1895 y 1899 por el arquitecto Manuel Martínez Ángel, fue la sede histórica de la Real Compañía Asturiana de Minas, una importante compañía minera española. Actualmente está en rehabilitación para convertirse en centro cultural de la Fundación Mutua Madrileña.',
            kids: 'Este edificio tan bonito, de hace más de 125 años, era la sede de una empresa que se dedicaba a las minas. Ahora lo están arreglando para convertirlo en un centro de cultura.'
          },
          legends: {
            adult: 'Con 3.800 metros cuadrados construidos en estilo ecléctico monumental de gusto francés, sus dos alas rectangulares flanquean un cuerpo central rematado por una torre con cúpula, que alberga en su interior una escalinata imperial.',
            kids: '¡Es un edificio enorme, con una torre en el medio rematada por una cúpula! Dentro tiene una escalera muy grande y elegante, de las que suben en varias direcciones.'
          },
          architecture: {
            adult: 'Combina piedra y ladrillo en las dos primeras plantas y conserva vidrieras clasicistas de la casa Maumejean, de 1899, en la escalera y en la entrada, un detalle decorativo poco frecuente en los edificios de oficinas de la época.',
            kids: 'Fíjate en las vidrieras de colores de la entrada y de la escalera: ¡tienen más de 125 años y son un lujo poco habitual para un edificio de oficinas!'
          }
        }
      },
      {
        id: 'mirador-edificio-espana',
        name: { adult: 'Mirador del Edificio España (Hotel RIU Plaza España)', kids: 'El Rascacielos con Balcón Infinito 🌆' },
        subtitle: { adult: 'Vistas de 360º desde uno de los primeros rascacielos de España', kids: '¡Tiene un balcón de cristal que parece flotar en el aire!' },
        category: CATEGORIES.HIDDEN,
        coords: [40.42417, -3.71194],
        image: 'assets/photos/madrid/riu-plaza-espana.jpg',
        audio: { duration: 145, title: { adult: 'Audioguía: Mirador del Edificio España', kids: '¡Aventura Sonora: El Rascacielos con Balcón Infinito!' } },
        visitInfo: {
          hours: { adult: 'El mirador de la planta 27 es de acceso libre para clientes del hotel; conviene consultar horario y disponibilidad in situ.', kids: 'Para subir al mirador hay que ser cliente del hotel.' },
          price: { adult: 'Gratis para clientes del hotel; puede haber consumición mínima en la terraza.', kids: 'Depende del hotel, ¡pregunta antes de subir!' }
        },
        tabs: {
          history: {
            adult: 'Este rascacielos, construido en 1953 por los hermanos Otamendi, tiene 117 metros de altura y 27 plantas. Fue uno de los primeros grandes rascacielos de España y hoy funciona como hotel, el RIU Plaza España.',
            kids: '¡Este edificio tan alto se construyó hace más de 70 años y fue uno de los primeros rascacielos de toda España! Ahora es un hotel.'
          },
          legends: {
            adult: 'Tiene el llamado "balcón infinito" de cristal en la planta 26, y una terraza con vistas de 360 grados en la planta 27, dos de los miradores más solicitados de la ciudad.',
            kids: '¡Tiene un balcón de cristal en un piso muy alto, que parece que no tiene fin! Y arriba del todo, una terraza desde la que se ve Madrid entero, en todas direcciones.'
          },
          architecture: {
            adult: 'Comparte protagonismo con la Torre de Madrid (1957) como uno de los dos grandes símbolos de la arquitectura de posguerra española que flanquean la Plaza de España, ambos entre los edificios más altos de Europa en el momento de su construcción.',
            kids: 'Este edificio y su vecino, la Torre de Madrid, fueron durante años de los edificios más altos de toda Europa. ¡Los dos vigilan la Plaza de España desde arriba!'
          }
        }
      },
      {
        id: 'carmelitas-descalzas-plaza-espana',
        name: { adult: 'Templo de Santa Teresa y San José (Carmelitas Descalzas)', kids: 'La Iglesia con Forma de Castillo 🏰' },
        subtitle: { adult: 'La primera iglesia de Madrid en hormigón armado', kids: '¡Una iglesia con almenas, como un castillo!' },
        category: CATEGORIES.HISTORY,
        coords: [40.42236, -3.71491],
        image: 'assets/photos/madrid/carmelitas-descalzas.jpg',
        audio: { duration: 150, title: { adult: 'Audioguía: Templo de Santa Teresa y San José', kids: '¡Aventura Sonora: La Iglesia con Forma de Castillo!' } },
        visitInfo: {
          hours: { adult: 'Abre en horario de culto, normalmente por la mañana y por la tarde.', kids: 'Se puede visitar en horario de misa.' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis!' }
        },
        tabs: {
          history: {
            adult: 'Financiada por Alfonso XIII y la reina Victoria Eugenia, se colocó la primera piedra el 28 de marzo de 1916; las obras, dirigidas por el arquitecto Jesús Carrasco-Muñoz, comenzaron en 1923 y el templo se inauguró el 26 de mayo de 1928. Fue la primera iglesia de Madrid construida en hormigón armado.',
            kids: 'Esta iglesia la pagaron un rey y una reina, hace más de 100 años. Tardaron años en construirla y fue la primera iglesia de Madrid hecha con hormigón, un material muy moderno para la época.'
          },
          legends: {
            adult: 'Su diseño se inspira en "Las Moradas" de Santa Teresa de Jesús, y tiene aspecto de castillo, con almenas en su fachada, una imagen poco habitual para un templo religioso.',
            kids: '¡Tiene almenas en la fachada, como un castillo de verdad! Es rarísimo ver una iglesia con esa forma. Su diseño está inspirado en un libro escrito por una santa hace siglos.'
          },
          architecture: {
            adult: 'El uso pionero del hormigón armado permitió resolver con un lenguaje casi militar —torreones, almenas— un edificio religioso, un contraste poco frecuente en la arquitectura sacra madrileña del primer tercio del siglo XX.',
            kids: 'Usar hormigón para construir una iglesia era una idea muy nueva para la época. ¡Por eso pudieron hacerle esos torreones y almenas, como si fuera una fortaleza!'
          }
        }
      },
      {
        id: 'fuente-de-la-concha',
        name: { adult: 'Fuente de la Concha (o del Nacimiento del Agua)', kids: 'La Fuente de las Ninfas 🧜' },
        subtitle: { adult: 'Una fuente con ninfas de bronce, trasladada en 2021', kids: '¡Esta fuente se mudó de sitio hace pocos años!' },
        category: CATEGORIES.HIDDEN,
        coords: [40.4227, -3.7146],
        image: 'assets/photos/madrid/fuente-concha.jpg',
        audio: { duration: 130, title: { adult: 'Audioguía: Fuente de la Concha', kids: '¡Aventura Sonora: La Fuente de las Ninfas!' } },
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (fuente al aire libre).', kids: '¡Se puede visitar en cualquier momento!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis!' }
        },
        tabs: {
          history: {
            adult: 'De 1970, con diseño de Manuel Herrera Palacios y ninfas de bronce obra del escultor Antonio Campillo, se ubicaba originalmente en el borde este de la Plaza de España. Durante la remodelación de la plaza entre 2019 y 2021 se trasladó a su ubicación actual, cerca de la Iglesia de las Carmelitas Descalzas, camino del Templo de Debod.',
            kids: 'Esta fuente tiene más de 50 años y tiene ninfas de bronce decorándola. Hace pocos años, cuando arreglaron toda la Plaza de España, la cambiaron de sitio.'
          },
          legends: {
            adult: 'El cambio de ubicación, poco conocido incluso entre los propios madrileños, hace que algunas fotos y planos antiguos de la plaza ya no coincidan con la posición actual de la fuente, un pequeño rompecabezas para quien intente localizarla con una foto vieja en la mano.',
            kids: '¡Si alguien busca esta fuente con una foto antigua, puede que se despiste! Como la movieron de sitio hace poco, ya no está donde estaba antes.'
          },
          architecture: {
            adult: 'Las ninfas de bronce, dispuestas alrededor del cuerpo central de la fuente, representan alegorías del nacimiento del agua, un tema clásico de la fontanería ornamental española del siglo XX.',
            kids: 'Las figuras de bronce que rodean la fuente representan el nacimiento del agua, como si contaran una pequeña historia con estatuas.'
          }
        }
      },
      {
        id: 'monumento-dos-de-mayo',
        name: { adult: 'Monumento al Pueblo del Dos de Mayo de 1808', kids: 'El Monumento a los Héroes del Dos de Mayo ⚔️' },
        subtitle: { adult: 'Homenaje al levantamiento popular contra Napoleón', kids: '¡Recuerda a la gente que se rebeló contra un ejército entero!' },
        category: CATEGORIES.HISTORY,
        coords: [40.42315, -3.71491],
        image: 'assets/photos/madrid/monumento-2-mayo.jpg',
        audio: { duration: 165, title: { adult: 'Audioguía: Monumento al Dos de Mayo', kids: '¡Aventura Sonora: Los Héroes del Dos de Mayo!' } },
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (monumento al aire libre).', kids: '¡Se puede visitar en cualquier momento!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis!' }
        },
        tabs: {
          history: {
            adult: 'Obra del escultor Aniceto Marinas, esculpida originalmente en Roma en 1891, conmemora el levantamiento popular de Madrid contra las tropas napoleónicas el 2 de mayo de 1808. El monumento definitivo en bronce se inauguró en 1908, coincidiendo con el centenario, y representa al teniente Luis Daoíz herido sobre un cañón inutilizado, al chispero Juan Manuel Malasaña y a su hija Manuela Malasaña, junto a un niño anónimo que la sujeta de la mano con gesto de rabia, coronado por una figura alada con bandera que simboliza la Gloria o la Victoria.',
            kids: 'Este monumento recuerda un día en que la gente de Madrid se enfrentó, casi sin armas, a un ejército entero, el 2 de mayo de 1808. Un escultor lo hizo hace más de 100 años, y muestra a varios de esos vecinos valientes.'
          },
          legends: {
            adult: 'Tuvo un recorrido bastante viajero antes de llegar a su ubicación actual: pasó por la Glorieta de San Bernardo, luego Moncloa, después la Plaza del Dos de Mayo, hasta terminar, ya en los años 60, junto a la Plaza de España.',
            kids: '¡Esta estatua se ha mudado de sitio varias veces! Estuvo en al menos tres lugares distintos de Madrid antes de quedarse en el sitio donde está ahora, cerca de la Plaza de España.'
          },
          architecture: {
            adult: 'El conjunto escultórico combina piedra y bronce en un lenguaje realista y dramático, típico de la escultura monumental española de finales del siglo XIX, pensado para transmitir el sufrimiento y la determinación de sus protagonistas populares, no militares de carrera.',
            kids: 'Fíjate en las caras de las figuras: están hechas para que se note el dolor y el valor de esas personas normales, que no eran soldados profesionales, ¡pero se enfrentaron igual a un ejército entero!'
          }
        }
      },
      {
        id: 'caidos-cuartel-montana',
        name: { adult: 'Caídos del Cuartel de la Montaña', kids: 'El Monumento del Cuartel Desaparecido 🎖️' },
        subtitle: { adult: 'Homenaje escultórico a los combates de julio de 1936', kids: '¡Aquí hubo un cuartel que ya no existe!' },
        category: CATEGORIES.HISTORY,
        coords: [40.42427, -3.71646],
        image: 'assets/photos/madrid/caidos-cuartel-montana.jpg',
        audio: { duration: 145, title: { adult: 'Audioguía: Caídos del Cuartel de la Montaña', kids: '¡Aventura Sonora: El Monumento del Cuartel Desaparecido!' } },
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (monumento al aire libre, en el parque del Templo de Debod).', kids: '¡Se puede visitar en cualquier momento!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis!' }
        },
        tabs: {
          history: {
            adult: 'Este monumento, obra del artista Joaquín Vaquero Turcios, se inauguró en 1972 en el eje del Templo de Debod, en la bifurcación de la escalinata que sube desde la calle Ferraz hacia los jardines. El antiguo Cuartel de la Montaña estaba precisamente en esta zona —donde hoy se alza el Templo de Debod— y fue escenario de duros combates al inicio de la Guerra Civil, en julio de 1936.',
            kids: 'Este monumento recuerda un cuartel militar que ya no existe: estaba justo donde hoy está el Templo de Debod. Allí hubo combates muy duros al principio de una guerra, en julio de 1936. El monumento se hizo bastantes años después, en 1972.'
          },
          legends: {
            adult: 'Consiste en un talud sostenido por un parapeto de sacos terreros tallados en piedra arenisca rosada, sobre el que se recorta una figura de bronce mutilada, de carácter expresionista y colgada en horizontal, que rinde homenaje a las víctimas caídas en el cuartel. La inscripción en el suelo, en una placa de bronce, dice: "1936 · A los Caídos en el Cuartel de la Montaña · 1972".',
            kids: 'El monumento parece un muro hecho de sacos de arena, pero está tallado en piedra. Encima hay una figura de bronce tumbada, con una placa en el suelo que recuerda ese año tan duro.'
          },
          architecture: {
            adult: 'El uso de la piedra arenisca rosada tallada para imitar sacos terreros es un recurso escultórico poco habitual, que busca fundir la memoria de una fortificación militar real con el lenguaje de un monumento conmemorativo.',
            kids: '¡Es un truco muy ingenioso! La piedra está tallada para que parezca de verdad una pared hecha de sacos de arena apilados, como los que se usaban para protegerse en la guerra.'
          }
        }
      }
];
