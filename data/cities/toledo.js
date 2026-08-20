// Datos de Toledo — cargado bajo demanda por app.js (loadCityData) al elegir esta ciudad.
CITIES.toledo.pois = [
      {
        id: 'catedral-primada',
        name: {
          adult: 'Catedral Primada Santa María de Toledo',
          kids: 'Catedral Primada Santa María de Toledo — La Catedral Mágica ✨'
        },
        subtitle: {
          adult: 'Obra maestra del gótico español',
          kids: 'Un castillo de piedra con agujas de sol'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'main', order: 5 },
        coords: [39.8568, -4.0244],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Cathedral_of_Toledo_%287079311505%29.jpg/330px-Cathedral_of_Toledo_%287079311505%29.jpg',
        audio: {
          duration: 182,
          title: {
            adult: 'Audioguía: Catedral Primada',
            kids: '¡Aventura Sonora: La Catedral Mágica!'
          }
        },
        visitInfo: {
          hours: {
            adult: 'Lunes a sábado 10:00-18:30, domingos 14:00-18:30 (el acceso cierra media hora antes). Entrada gratuita a las naves de lunes a viernes de 8:00 a 9:15.',
            kids: 'Abre de lunes a sábado por la mañana y por la tarde, y los domingos solo por la tarde.'
          },
          price: {
            adult: '12€ entrada general (templo, museos, Capilla de Reyes y claustro). Gratis para empadronados en Toledo; 8€ para mayores de 65 años.',
            kids: '12€, aunque es gratis si vives en Toledo. Si vas muy pronto entre semana, ¡puedes ver la iglesia gratis!'
          },
          link: 'https://tickets.catedralprimada.es/'
        },
        tabs: {
          history: {
            adult: 'La Catedral Primada de Toledo fue comenzada en 1226 bajo el reinado de Fernando III el Santo, sobre los restos de una antigua mezquita. Considerada una de las obras cumbres del gótico español, su construcción se prolongó durante más de 250 años, incorporando elementos mudéjares y renacentistas. Su interior acoge obras de El Greco, Titiano, Velázquez y Goya, además del espectacular Transparente de Narciso Tomé, una obra de mármol y cristal que parece flotar bajo la luz cenital.',
            kids: '¡Hace más de 800 años unos constructores superhéroes empezaron esta catedral! Hay cristales de colores que pintan el suelo como un arcoíris 🌈 y un sitio llamado el Transparente por donde entra el sol como si fuera magia. ¡Busca los cuadros de señores muy famosos!'
          },
          legends: {
            adult: 'Dice la tradición que el arquitecto Martín, apodado "el Petizo", ocultó en una de las claves de la bóveda el retrato de su amada, una mujer que no pertenecía a su clase social. Cuentan también que cuando el Cardenal Mendoza visitó la obra en construcción, un obrero se lanzó desde lo alto de una torre para demostrarle su admiración, sobreviviendo milagrosamente. Otra leyenda habla de un búho encantado que aparece solo a quienes buscan la verdad entre sus muros.',
            kids: '¡Cuenta la leyenda que vive un búho de oro 🦉 en una de las torres y solo aparece a los niños buenos! También dicen que un obrero valiente saltó de lo más alto de la torre para enseñar su valentía… y sobrevivió. ¿Tú crees que lo verás?'
          },
          architecture: {
            adult: 'De planta de cruz latina y cinco naves, sus bóvedas de crucería alcanzan los 44 metros de altura. El triforio superior conserva tracerías mudéjares únicas. Destacan: la Puerta del Perdón (románica), la Sacristía con el "Expolio" de El Greco, la Capilla Mayor con el retablo de Berruguete, el coro con 72 sillas góticas talladas, y el Transparente (1721-1732), una pieza de mármol, bronce y cristal considerada una de las maravillas del Barroco español. Su silueta con tres torres define el perfil de Toledo desde el Mirador del Valle.',
            kids: '¡Mira hacia arriba y cuenta las columnas! 📐 Los arcos de punta parecen montañas de piedra. Las ventanas de colores se llaman "vitrales" — ¡cada color cuenta una historia! La catedral tiene 5 calles, como un laberinto gigante. ¡Y el techo es ¡más alto que 14 personas de pie una encima de otra!'
          },
          deepenFillers: {
            adult: [
              'La campana gorda, fundida en el siglo XVIII, es una de las mayores de España, con varias toneladas de bronce y un diámetro que roza los tres metros. Se agrietó poco después de fundirse, probablemente por un enfriamiento demasiado rápido, y desde entonces suena con un timbre grave y ronco muy característico que los toledanos reconocen de inmediato. Por precaución, hoy ya no se voltea como las demás campanas, sino que se toca golpeando el badajo con mucho cuidado.',
              'Las sillerías bajas del coro, talladas por Rodrigo Alemán —un escultor de origen alemán afincado en Castilla—, representan escena por escena la conquista de Granada, con un castillo o ciudad distinto tallado en cada uno de los asientos. El detalle es tan minucioso que se distinguen armaduras, estandartes y hasta expresiones de los soldados, convirtiendo el conjunto en una suerte de crónica visual pensada para quienes no sabían leer, capaz de narrar la campaña militar entera sin una sola palabra escrita.'
            ],
            kids: [
              '¡La campana más grande de la catedral se llama "la Gorda" y pesa muchísimo, como varios coches juntos! Se rajó nada más sonar por primera vez, hace más de 200 años, y por eso tiene un sonido tan grave y especial que se reconoce enseguida. Como está agrietada, ya no la balancean como a las demás: la tocan con muchísimo cuidado para que no se rompa más. 🔔',
              '¡En las sillas de madera del coro hay tallado un castillo o una ciudad distinta en cada una, contando una guerra entera como si fuera un cómic gigante de piedra y madera! El artista que las talló era tan detallista que se ven hasta las banderas y las armaduras de los soldados. ¡La gente que no sabía leer podía "leer" la historia solo mirando los dibujos! 🏰'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Sobre qué se construyó la Catedral de Toledo?',
            options: ['Sobre una antigua mezquita', 'Sobre un campo vacío', 'Sobre un antiguo teatro romano'],
            correct: 0,
            reveal: '¡Sobre una antigua mezquita! 🕌 Empezaron a construirla en 1226 y tardaron más de 250 años en terminarla del todo.'
          },
          legends: {
            question: '¿Qué animal se dice que vive escondido en una de las torres de la Catedral?',
            options: ['Un dragón', 'Un búho de oro', 'Un gato negro'],
            correct: 1,
            reveal: '¡Un búho de oro! 🦉 Cuenta la leyenda que solo se deja ver por quienes buscan la verdad entre sus muros.'
          },
          architecture: {
            question: '¿Cómo se llama la obra de mármol y cristal por donde entra la luz del sol dentro de la Catedral?',
            options: ['El Transparente', 'La Ventana Mágica', 'El Espejo de Oro'],
            correct: 0,
            reveal: '¡Se llama el Transparente! ✨ Se hizo entre 1721 y 1732 con mármol, bronce y cristal, y hace que la luz entre como por arte de magia.'
          }
        }
      },
      {
        id: 'puerta-bisagra',
        name: {
          adult: 'Puerta de Bisagra',
          kids: 'Puerta de Bisagra — La Puerta de los Reyes 👑'
        },
        subtitle: {
          adult: 'Acceso monumental mudéjar a la ciudad',
          kids: 'Una puerta de castillo de verdad'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'main', order: 1 },
        coords: [39.8604, -4.0308],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/1_Puerta_de_Bisagra_toledo_2014.jpg/330px-1_Puerta_de_Bisagra_toledo_2014.jpg',
        audio: {
          duration: 148,
          title: {
            adult: 'Audioguía: Puerta de Bisagra',
            kids: '¡Aventura Sonora: La Puerta de los Reyes!'
          }
        },
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (puerta exterior integrada en las murallas).', kids: '¡Se puede visitar en cualquier momento, no tiene horario!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
        tabs: {
          history: {
            adult: 'La Puerta de Bisagra es la entrada monumental más famosa de Toledo, construida en el siglo X durante la época musulmana y reformada ampliamente en 1559 por Alonso de Covarrubias por orden de Carlos I. Su nombre procede de Bab-Saqra (Puerta Sagrada). Sobre su arco luce el escudo imperial de los Austrias. Fue el punto de recepción de reyes, peregrinos y ejércitos durante siglos.',
            kids: '¡Esta puerta es de cuando los moros y luego los reyes vivían aquí! 👑 Pasa por debajo del arco y fíjate en el escudo gigante de arriba. ¡Los reyes entraban por aquí con sus caballos y sus banderas ondeando!'
          },
          legends: {
            adult: 'Se dice que bajo los cimientos de Bisagra descansa un tesoro oculto del último gobernador musulmán, que lo enterró la noche anterior a la rendición de la ciudad en 1085. También se atribuye a la puerta un hechizo protector: ningún invasor que cruce sus arcos con intenciones malignas podrá abandonar la ciudad vivo.',
            kids: '¡Dicen que debajo de la puerta hay un tesoro 💰 que guardaron hace 1.000 años! ¿Lo has encontrado tú? También dicen que tiene un hechizo para proteger Toledo de los malos… ¡menos de los niños!'
          },
          architecture: {
            adult: 'Construida en piedra de granito, combina arcos mudéjares (herradura doblada) con elementos renacentistas. Consta de dos cuerpos: el inferior con dos torres cilíndricas y un gran arco de medio punto flanqueado por columnas toscanas; y el superior con un frontón clásico y el escudo imperial. En su interior se abre un puente levadizo y un doble arco que crea una sala de paso casi catedralicia.',
            kids: '¡Tiene dos torres de vigilancia como de castillo! 🏰 El arco grande es tan ancho que pasan 5 personas de la mano. Arriba del todo hay un escudo con un águila de dos cabezas ¡genial! ¡Ponte justo debajo del arco y grita fuerte a ver si oyes el eco!'
          },
          deepenFillers: {
            adult: [
              'La puerta actual son en realidad dos puertas superpuestas: la interior, mudéjar y del siglo X, y la exterior renacentista de 1559, separadas por un patio de armas pensado para atrapar a los atacantes entre dos fuegos si lograban franquear el primer arco. Este esquema defensivo, habitual en fortificaciones islámicas, obligaba al enemigo a girar y exponer su flanco desprotegido justo en el punto donde los defensores tenían mejor ángulo de tiro desde lo alto de las torres.',
              'El escudo imperial que corona el arco fue tallado en piedra por canteros toledanos del siglo XVI y muestra el águila bicéfala de los Habsburgo, símbolo del vasto imperio de Carlos I. En su día estuvo policromado con colores vivos —dorados, rojos y azules— que ayudaban a distinguirlo con claridad desde la distancia, pero que hoy apenas se conservan tras siglos de exposición al sol y la lluvia, dejando visible solo la piedra desnuda.'
            ],
            kids: [
              '¡Esta puerta en realidad son dos puertas seguidas, una vieja de hace más de 1000 años y otra más nueva, con un patio en medio! Si un enemigo entraba por la primera puerta, se quedaba atrapado en el patio antes de llegar a la segunda, ¡y los soldados de las torres podían verlo desde arriba y defenderse mejor! Era una trampa pensada con mucha inteligencia. 🏰',
              '¡El escudo de piedra de arriba antes tenía colores pintados de verdad: dorado, rojo y azul, como un dibujo gigante hecho para verse desde muy lejos! Hoy casi no se ven esos colores porque el sol y la lluvia los han ido borrando poco a poco durante cientos de años, y solo queda la piedra gris. 🎨'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿De qué palabra árabe viene el nombre "Bisagra"?',
            options: ['De Bab-Saqra, "Puerta Sagrada"', 'De la bisagra de una puerta de madera', 'Del nombre de un rey'],
            correct: 0,
            reveal: '¡De Bab-Saqra, "Puerta Sagrada"! 🕌 Se construyó en el siglo X y por aquí entraban reyes, peregrinos y ejércitos enteros.'
          },
          legends: {
            question: '¿Qué dicen que hay escondido bajo los cimientos de la Puerta de Bisagra?',
            options: ['Un tesoro de un gobernador musulmán', 'Una piscina romana', 'Una biblioteca secreta'],
            correct: 0,
            reveal: '¡Un tesoro! 💰 Cuentan que lo enterró el último gobernador musulmán la noche antes de rendir la ciudad, en el año 1085.'
          },
          architecture: {
            question: '¿Qué animal aparece en el escudo imperial de la parte de arriba de la puerta?',
            options: ['Un león', 'Un águila de dos cabezas', 'Un dragón'],
            correct: 1,
            reveal: '¡Un águila de dos cabezas! 🦅 Es el escudo imperial de los Austrias, y corona el arco por donde pasaban los caballos de los reyes.'
          }
        }
      },
      {
        id: 'mirador-valle',
        name: {
          adult: 'Mirador del Valle',
          kids: 'Mirador del Valle — El Mirador de los Sueños 🌅'
        },
        subtitle: {
          adult: 'La mejor panorámica de la Ciudad Imperial',
          kids: '¡Las mejores vistas de todo Toledo!'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'main', order: 9 },
        coords: [39.8530, -4.0205],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Vista_de_Toledo_desde_el_mirador_del_Valle_01.jpg/330px-Vista_de_Toledo_desde_el_mirador_del_Valle_01.jpg',
        audio: {
          duration: 124,
          title: {
            adult: 'Audioguía: Mirador del Valle',
            kids: '¡Aventura Sonora: El Mirador de los Sueños!'
          }
        },
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (mirador al aire libre).', kids: '¡Se puede visitar en cualquier momento, no tiene horario!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
        tabs: {
          history: {
            adult: 'El Mirador del Valle se construyó a principios del siglo XX en el paraje conocido como "Cerro del Emperador", frente al Alcázar. Sobre sus bancos han pasado generaciones de toledanos y viajeros, y se dice que El Greco utilizaba este punto de vista para componer su famosa "Vista y plano de Toledo", pintura conservada en el Museo del Prado. Aquí es costumbre acudir al atardecer.',
            kids: '¡Los pintores muy famosos como El Greco venían aquí para dibujar Toledo! 🖼️ Los abuelos y las abuelas de Toledo llevan 100 años viniendo aquí a ver el atardecer. ¿Has visto cómo brilla el río Tajo abajo?'
          },
          legends: {
            adult: 'Se cuenta que si te sientas en el banco del centro y pides un deseo justo cuando el sol se oculta tras las torres de la Catedral, el deseo se cumplirá antes de que pase un año. Los jóvenes toledanos llaman a este mirador "el Valle de las Promesas", porque aquí se sellan promesas de amor frente al cielo.',
            kids: '¡Haz un deseo cuando el sol se ponga detrás de la Catedral! 🌅 Dicen que se cumple antes de que pase un año. ¡No te olvides de cerrar los ojos! ¿Qué habrás pedido tú?'
          },
          architecture: {
            adult: 'Es un mirador natural de 120 metros de desnivel sobre la vega del Tajo, con una explanada de piedra caliza y bancos de hierro fundido de principios de siglo. Desde su barandilla se domina todo el recinto amurallado: la Catedral, el Alcázar, San Juan de los Reyes, las murallas y el puente de San Martín. No tiene edificación propia, pero destaca una inscripción de piedra con un verso de Garcilaso de la Vega.',
            kids: '¡Aguanta fuerte la barandilla y mira 360 grados! 📏 Puedes ver: la catedral, el castillo (Alcázar), el río Tajo y todas las casitas juntas como un juguete. ¡Cuenta las torres que veas, hay más de 20!'
          },
          deepenFillers: {
            adult: [
              'La inscripción de piedra con el verso de Garcilaso de la Vega recuerda que este poeta y soldado renacentista, nacido en Toledo y muerto en batalla en Francia en 1536 con apenas 35 años, también pudo contemplar alguna vez vistas parecidas a estas antes de dedicarse a las armas. Sus versos, de tono bucólico y melancólico, contrastan con la vida de combate que llevó, y esta inscripción funciona como un pequeño homenaje de su ciudad natal a uno de los grandes renovadores de la poesía española.',
              'El mirador se sitúa justo enfrente del promontorio del Alcázar, por lo que ofrece uno de los pocos puntos desde los que se aprecia a la vez la fachada este de la fortaleza y toda la muralla que baja hasta el Tajo. Esta perspectiva elevada, al otro lado del meandro que rodea la ciudad, es también la que suelen buscar los fotógrafos al amanecer, cuando la luz rasante ilumina de forma directa la piedra dorada de los edificios.'
            ],
            kids: [
              '¡Hay un verso de un poeta y soldado tallado en una piedra del mirador! Se llamaba Garcilaso de la Vega, nació aquí mismo en Toledo y vivió hace casi 500 años. Escribía poemas muy bonitos sobre el campo y la naturaleza, pero también luchaba como soldado, y murió en una batalla siendo todavía joven. ✍️',
              '¡Desde aquí se ve el castillo (Alcázar) por un lado que casi no se ve desde ningún otro sitio de Toledo! Los fotógrafos vienen mucho a este mirador al amanecer, porque cuando sale el sol la luz pinta las piedras de Toledo de un color dorado precioso, ¡como si la ciudad entera brillara! 🏯'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Qué pintor famoso usaba este mirador para dibujar Toledo?',
            options: ['Velázquez', 'El Greco', 'Goya'],
            correct: 1,
            reveal: '¡El Greco! 🖼️ Se dice que vino aquí para componer su famosa "Vista y plano de Toledo", que hoy se guarda en el Museo del Prado.'
          },
          legends: {
            question: 'Según la leyenda, ¿qué hay que hacer para que se cumpla un deseo en este mirador?',
            options: ['Pedirlo cuando el sol se pone tras la Catedral', 'Girar tres veces sobre ti mismo', 'Lanzar una moneda al río'],
            correct: 0,
            reveal: '¡Pedirlo justo cuando el sol se oculta tras las torres de la Catedral! 🌅 Dicen que el deseo se cumple antes de que pase un año.'
          },
          architecture: {
            question: '¿Cuántos metros de desnivel tiene el mirador sobre el río Tajo?',
            options: ['Unos 10 metros', 'Unos 60 metros', '120 metros'],
            correct: 2,
            reveal: '¡120 metros! 📏 Desde ahí arriba se ve toda la ciudad amurallada: la Catedral, el Alcázar y el puente de San Martín.'
          }
        }
      },
      {
        id: 'restaurante-sorbona',
        fictional: true, // parada de ambientación: no existe como tal en Toledo, ver §documentación
        name: {
          adult: 'Restaurante La Sorbona',
          kids: 'Restaurante La Sorbona — ¡La Casa de las Comidas! 🍽️'
        },
        subtitle: {
          adult: 'Parada ilustrativa de gastronomía toledana',
          kids: 'Las migas más ricas de Toledo (¡un cuento para abrir boca!)'
        },
        category: CATEGORIES.GASTRONOMY,
        coords: [39.8587, -4.0256],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Gazpacho_manchego_con_torta_cence%C3%B1a_Ruiz_de_La_Roda.jpg/330px-Gazpacho_manchego_con_torta_cence%C3%B1a_Ruiz_de_La_Roda.jpg', // foto genérica de cocina castellana (lugar ilustrativo, no una foto del "restaurante" en sí)
        audio: {
          duration: 156,
          title: {
            adult: 'Audioguía: Gastronomía en La Sorbona',
            kids: '¡Aventura Sonora: ¡Hora de Comer!'
          }
        },
        visitInfo: {
          hours: { adult: 'Horario habitual de restaurante: en torno a 13:00-16:00 y 20:00-23:00 (puede variar).', kids: 'Abre a la hora de comer y a la hora de cenar.' },
          price: { adult: 'No es un monumento con entrada: se paga según lo que pidas de la carta.', kids: 'Aquí no se paga entrada, ¡se paga la comida que pidas!' }
        },
        tabs: {
          history: {
            adult: 'La Sorbona es una parada de ambientación (no un establecimiento real) que recrea el espíritu de los mesones clásicos del casco histórico de Toledo: siglos de cocina castellana de autor, suelos de madera de roble y espejos biselados. Sirve para imaginar, entre lugar y lugar de la ruta, cómo se vive la sobremesa toledana.',
            kids: '¡Vamos a imaginarnos un restaurante mágico! Aquí nos inventamos una casa de comidas que lleva generaciones sirviendo migas riquísimas. 🧓 ¡Con espejos antiguos que reflejan tu cara como si fuera un cuento de hadas!'
          },
          legends: {
            adult: 'Como parada imaginada, se le atribuye una pequeña leyenda propia de la ruta: dicen que el cubierto nº 7 de la mesa redonda del fondo es "el cubierto de la inspiración", y que quien se sienta ahí y prueba el bacalao a la toledana termina aquello en lo que estaba trabajando antes de un año.',
            kids: '¡La mesa 7 es mágica! ✨ Quien se sienta ahí termina sus proyectos antes de un año. ¡Pide un postre rico y piensa qué cuento escribirías tú!'
          },
          architecture: {
            adult: 'Se imagina ocupando la planta baja de un palacio renacentista del siglo XVI, con suelos de roble, pinturas murales de paisajes toledanos, vigas de madera vistas y una gran chimenea de azulejos talaveranos. Una ambientación pensada para transmitir cómo era comer en el Toledo de hace varios siglos.',
            kids: '¡Imagina el techo! Con vigas de madera supergruesas. 🪵 Una chimenea de colores que se enciende en invierno. ¿Te atreves a imaginar cuántos platos cabrían en la mesa grande del centro?'
          },
          deepenFillers: {
            adult: [
              'Se cuenta, dentro de esta ambientación, que la receta imaginada de las migas manchegas se transmite entre cocineros de la ruta desde hace generaciones, cambiando un ingrediente secreto cada vez que pasa de mano en mano. Según este relato ilustrativo, cada cocinero añadía un toque propio —un punto de pimentón, un chorro distinto de aceite— sin revelar jamás cuál era, de modo que ningún comensal ha llegado a probar exactamente las mismas migas dos veces, aunque el plato siempre resulte reconociblemente manchego.',
              'En esta parada imaginada, los espejos biselados del comedor "reflejan" siempre un poco más de luz de la que entra por la ventana, un pequeño guiño ilustrativo al ingenio de la cocina toledana. Se cuenta, como parte de este relato, que los antiguos comensales bromeaban diciendo que el propio local parecía "querer" que la sala luciera más animada de lo que en realidad estaba, un detalle pensado para transmitir el ambiente acogedor típico de los mesones históricos de la ciudad.'
            ],
            kids: [
              '¡En esta casa de comidas imaginaria, dicen que las migas saben mejor si las remueves tú mismo con la cuchara mágica de la cocina! Cuenta el cuento que cada cocinero le añadía un ingrediente secreto distinto sin contárselo a nadie, así que nunca sabes si tus migas van a saber exactamente igual que las de ayer. ¡Qué misterio tan rico! 🥄',
              '¡Los espejos de este restaurante inventado brillan un poquito más que los espejos normales, según cuenta la leyenda de la ruta! Dicen que hacían que la sala pareciera siempre llena de luz y de gente contenta, para que quien entrara se sintiera como en casa desde el primer minuto. ✨'
            ]
          }
        }
      },
      {
        id: 'santo-tome',
        name: {
          adult: 'Iglesia de Santo Tomé',
          kids: 'Iglesia de Santo Tomé — La Iglesia del Caballero ⚔️'
        },
        subtitle: {
          adult: 'Hogar de "El Entierro del Conde de Orgaz" de El Greco',
          kids: '¡Un cuadro de gigante muy famoso!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'main', order: 6 },
        coords: [39.8560, -4.0269],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Tol%C3%A8de_-_clocher_de_Santo_Tom%C3%A9.JPG/330px-Tol%C3%A8de_-_clocher_de_Santo_Tom%C3%A9.JPG',
        audio: {
          duration: 171,
          title: {
            adult: 'Audioguía: Iglesia de Santo Tomé',
            kids: '¡Aventura Sonora: La Iglesia del Caballero!'
          }
        },
        visitInfo: {
          hours: {
            adult: 'Todos los días 10:00-18:45 (1 de marzo a 15 de octubre) o 10:00-17:45 (16 de octubre a 28 de febrero). Taquilla cierra 10 minutos antes.',
            kids: 'Abre todos los días, por la mañana y por la tarde.'
          },
          price: {
            adult: '4€ entrada individual, o 14€ con la Pulsera Turística de Toledo Monumental (incluye 7 monumentos, válida 7 días).',
            kids: '4€, o 14€ con una pulsera especial que sirve para entrar en 7 sitios distintos de Toledo.'
          },
          link: 'https://tickets.toledomonumental.com/es/767-toledo-monumental/4296-pulsera-turistica-de-toledo'
        },
        tabs: {
          history: {
            adult: 'La Iglesia de Santo Tomé se construyó en el siglo XIV sobre una antigua mezquita, en el barrio toledano de la Judería. Su mayor tesoro es "El Entierro del Conde de Orgaz", encargado en 1586 a Doménikos Theotokópoulos "El Greco" por el párroco Andrés Núñez. Es la obra más célebre del pintor cretense, un óleo de 4,8 m × 3,6 m que divide el mundo en dos: el terrenal, con los nobles toledanos; y el celestial, con santos y ángeles que reciben el alma del conde.',
            kids: '¡Aquí vive un cuadro GIGANTE de El Greco! 🎨 Mide ¡como 4 niños de alto! Dibuja a un caballero que muere: abajo están los señores con ropa chula y arriba están los ángeles 😇 en las nubes llevándolo al cielo.'
          },
          legends: {
            adult: 'Según la crónica, cuando El Greco terminó el cuadro, el párroco se enfadó muchísimo porque uno de los nobles pintados miraba fijamente al espectador y no al entierro. El Greco se negó a retocarlo: "Ese caballero es el único que ha visto con vida al conde". El párroco, impresionado por la respuesta, le pagó el doble.',
            kids: '¡El Greco pintó a un señor que te mira a LOS OJOS 👀! El cura se enfadó mucho, pero El Greco le dijo: "Ese señor conoció al caballero de verdad". ¡Y el cura le pagó el doble! ¿Tú qué miras más, al cuadro o al señor que te mira?'
          },
          architecture: {
            adult: 'De estilo gótico mudéjar, destaca su torre del siglo XIV, una de las más bellas de Toledo, con cuerpos superpuestos y frisos de esmaltes mudéjares en azul y blanco. Su interior conserva un artesonado renacentista, púlpito de mármol y la capilla de la Concepción, donde se expone el cuadro de El Greco en penumbra controlada para su conservación. El presbiterio está alzado sobre el antiguo mihrab de la mezquita.',
            kids: '¡Mira la torre por fuera! Tiene azulejos azules y blancos como la playa 🏖️. Dentro el cuadro está en una habitación casi oscura, como si fuera un tesoro secreto. ¡Toca tu nariz 3 veces antes de entrar para que te traiga suerte!'
          },
          deepenFillers: {
            adult: [
              'El niño situado en primer plano del cuadro, con una antorcha, es Jorge Manuel, el propio hijo de El Greco, que llegó a ser también pintor y arquitecto. El artista escondió en el pañuelo de su bolsillo una fecha que se interpreta como el año de su nacimiento, a modo de firma disimulada, una práctica habitual entre los pintores de la época para dejar constancia de su autoría sin romper la composición general de la escena.',
              'El lienzo se instaló en un hueco abierto expresamente en el muro de la capilla, de forma que la luz natural de una ventana cercana ilumina la escena celestial de manera distinta según la hora del día. Al mediodía, cuando la luz entra con más fuerza, la parte superior del cuadro —con las figuras celestiales— parece cobrar un brillo especial, un efecto que muy probablemente El Greco tuvo en cuenta al planear dónde debía colgarse la obra.'
            ],
            kids: [
              '¡El niño con la antorcha que aparece en el cuadro es el propio hijo de El Greco, que se llamaba Jorge Manuel y de mayor también se hizo pintor! Su papá escondió una fecha secreta en el pañuelo de su bolsillo, como una firma escondida, en vez de firmar el cuadro de forma normal. 🕵️',
              '¡El cuadro se colocó en un hueco especial de la pared para que la luz de una ventana cercana lo iluminara de forma distinta según la hora del día! Al mediodía, cuando entra más luz, la parte de arriba del cuadro —donde están los ángeles— brilla todavía más. ¡Casi como si El Greco hubiera pensado en un efecto especial hace más de 400 años! 🔆'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Quién pintó "El Entierro del Conde de Orgaz", que se guarda en esta iglesia?',
            options: ['El Greco', 'Goya', 'Velázquez'],
            correct: 0,
            reveal: '¡El Greco! 🎨 Se lo encargó el párroco Andrés Núñez en 1586, y es la obra más famosa de todo el pintor.'
          },
          legends: {
            question: '¿Por qué se enfadó el párroco con El Greco al ver el cuadro terminado?',
            options: ['Porque tardó demasiado en pintarlo', 'Porque un noble miraba directamente al espectador', 'Porque usó muy pocos colores'],
            correct: 1,
            reveal: '¡Porque un noble te mira a ti directamente a los ojos! 👀 El Greco dijo que ese caballero era el único que había visto con vida al conde, y el párroco, impresionado, le pagó el doble.'
          },
          architecture: {
            question: '¿Sobre qué se construyó el altar principal de esta iglesia?',
            options: ['Sobre el antiguo mihrab de una mezquita', 'Sobre un cementerio romano', 'Sobre un antiguo pozo'],
            correct: 0,
            reveal: '¡Sobre el mihrab de una mezquita! 🕌 La iglesia se construyó en el siglo XIV sobre un templo musulmán anterior, en pleno barrio de la Judería.'
          }
        }
      },
      {
        id: 'mirador-azor',
        name: {
          adult: 'Mirador del Azor',
          kids: 'Mirador del Azor — El Secreto de las Palomas 🕊️'
        },
        subtitle: {
          adult: 'Rincón oculto del casco histórico',
          kids: 'Solo lo conocen los toledanos'
        },
        category: CATEGORIES.HIDDEN,
        coords: [39.8618, -4.0211],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Wall_detail_-_Toledo,_Spain.JPG/330px-Wall_detail_-_Toledo,_Spain.JPG', // detalle de la muralla (no la foto exacta de este rincón concreto, que no tiene foto libre disponible)
        audio: {
          duration: 112,
          title: {
            adult: 'Audioguía: Mirador del Azor',
            kids: '¡Aventura Sonora: ¡El Rincón Secreto!'
          }
        },
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (mirador al aire libre).', kids: '¡Se puede visitar en cualquier momento, no tiene horario!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
        tabs: {
          history: {
            adult: 'El Mirador del Azor es un pequeño balcón sobre la muralla oriental de Toledo, oculto entre la Calle de las Bulas y el Adarve de la Magdalena. Recibe su nombre de la familia Azor, que poseyó aquí unas casas durante el siglo XVII. Ha permanecido fuera de las rutas turísticas convencionales, siendo un lugar de referencia exclusivo para toledanos y enamorados de la ciudad.',
            kids: '¡Este mirador es el SECRETO MEJOR GUARDADO de Toledo! 🤫 Solo lo conocen los niños que viven aquí y sus abuelos. Se llama "del Azor" por una familia que tenía aquí su casa hace 400 años. ¡No se lo cuentes a nadie, eh?'
          },
          legends: {
            adult: 'La tradición oral toledana dice que este es el lugar donde los amores imposibles de la Judería medieval se citaban a escondidas de sus familias. Cuentan que si escribes el nombre de tu amor en un trozo de papel y lo dejas bajo una de las piedras del murete, al regresar dentro de un año el deseo se habrá cumplido. También lo llaman el "balcón de los susurros", porque el viento parece repetir nombres.',
            kids: '¡Si escribes el nombre de tu mejor amig@ en un papel y lo guardas debajo de una piedra, vuestra amistad durará SIEMPRE! 💖 El viento por aquí susurra nombres. ¿Oyes tú alguno? ¡Qué no te vea el guarda o te regañará!'
          },
          architecture: {
            adult: 'Construido sobre un lienzo de la muralla almohade del siglo XII, consta de una pequeña plaza de apenas 5 × 7 metros con suelo de adoquín y una barandilla de hierro forjado del siglo XIX. Desde aquí se divisa la ladera noreste del Tajo, el barrio de Santa Bárbara y el puente de Alcántara. Tiene un banco de piedra solo, pensado para dos personas y media. El acceso es a través de un estrecho callejón sin señalización.',
            kids: '¡Agáchate un poco y pasa por el callejón SUPERESTRECHO! 🤏 Cuando salgas, ¡zas! Tendrás unas vistas alucinantes. El banco de piedra está hecho para 2 personas… ¡tres si son muy amigos! Ponte de puntillas: a lo lejos se ve el puente de Alcántara.'
          },
          deepenFillers: {
            adult: [
              'Aunque se llama "del Azor", el nombre no viene del ave rapaz sino del apellido de la familia toledana que tuvo aquí sus casas durante el siglo XVII; aun así, la coincidencia resulta curiosa, porque todavía hoy es fácil ver azores y cernícalos sobrevolando este tramo de muralla, atraídos por las corrientes térmicas que se forman sobre el desfiladero del Tajo y que estas aves aprovechan para planear sin apenas batir las alas.',
              'El estrecho callejón de acceso conserva el trazado propio de un adarve defensivo medieval, el camino de ronda por el que los vigías patrullaban la muralla sin ser vistos desde el exterior. Su anchura reducida, apenas suficiente para el paso de una persona, respondía a razones puramente defensivas: cuanto más estrecho el paso, más fácil resultaba controlarlo con pocos hombres en caso de que un enemigo lograra alcanzar ese tramo de la fortificación.'
            ],
            kids: [
              '¡Aunque se llama "del Azor", el nombre viene de una familia que vivió aquí hace 400 años, no del pájaro! Pero aun así es una casualidad muy chula, porque de verdad se ven aves rapaces volando por esta muralla, aprovechando el aire que sube desde el río para planear sin mover casi las alas. 🦅',
              '¡El callejón tan estrecho por el que se llega era antes un camino secreto para que los vigías patrullaran la muralla sin que los vieran desde fuera! Era tan estrecho a propósito: así, si un enemigo conseguía entrar, solo podía pasar una persona a la vez y era mucho más fácil pararlo. 🕵️'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿De qué familia toma su nombre el Mirador del Azor?',
            options: ['De la familia Azor, que tuvo aquí sus casas en el siglo XVII', 'De un ave rapaz que anidaba en la muralla', 'De un rey que paraba aquí a descansar'],
            correct: 0,
            reveal: '¡De la familia Azor! 🏠 Tuvo aquí sus casas hace 400 años, y por eso este balcón sobre la muralla heredó su apellido.'
          },
          legends: {
            question: 'Según la leyenda, ¿qué hay que hacer con un papel bajo una piedra del murete para que se cumpla un deseo de amistad?',
            options: ['Quemarlo al atardecer', 'Escribir un nombre y esconderlo debajo', 'Enterrarlo con una moneda de oro'],
            correct: 1,
            reveal: '¡Escribir un nombre y esconderlo bajo una piedra! 💖 Dicen que si vuelves dentro de un año, el deseo se habrá cumplido.'
          },
          architecture: {
            question: '¿Sobre qué muralla está construido este pequeño mirador?',
            options: ['La muralla romana', 'La muralla almohade del siglo XII', 'La muralla del siglo XIX'],
            correct: 1,
            reveal: '¡Sobre la muralla almohade del siglo XII! 🧱 Desde su barandilla de hierro forjado se llega a ver el puente de Alcántara a lo lejos.'
          }
        }
      },
      {
        id: 'casa-museo-greco',
        name: {
          adult: 'Casa-Museo de El Greco',
          kids: 'Casa-Museo de El Greco — La Casa del Pintor Mágico 🎨'
        },
        subtitle: {
          adult: 'Vida y obra del pintor cretense en Toledo',
          kids: '¡Donde vivía el hombre de los cuadros!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'juderia', order: 3 },
        coords: [39.8551, -4.0281],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/WLM14ES_-_10072005_114623_7742_-_.jpg/330px-WLM14ES_-_10072005_114623_7742_-_.jpg',
        audio: {
          duration: 165,
          title: {
            adult: 'Audioguía: Casa-Museo de El Greco',
            kids: '¡Aventura Sonora: ¡La Casa del Pintor Mágico!'
          }
        },
        visitInfo: {
          hours: {
            adult: 'Martes a sábado 9:30-19:30 (marzo-octubre) o 9:30-18:00 (noviembre-febrero); domingos y festivos 10:00-15:00. Cerrado los lunes.',
            kids: 'Abre de martes a sábado, y los domingos solo por la mañana. Los lunes está cerrado.'
          },
          price: {
            adult: '3€ entrada individual, 5€ combinada con el Museo Sefardí. Gratis los sábados a partir de las 14:00 y todos los domingos.',
            kids: '3€, pero es gratis los sábados por la tarde y todos los domingos.'
          },
          link: 'https://museodelgreco.sacatuentrada.es/es/productos/info/museo-del-greco'
        },
        tabs: {
          history: {
            adult: 'La Casa-Museo de El Greco, inaugurada en 1911, reconstruye el hogar que pudo tener Doménikos Theotokópoulos "El Greco" en la Judería de Toledo, donde vivió desde 1577 hasta su muerte en 1614. El museo acoge pinturas originales suyas (como "Vista y plano de Toledo" y retratos de sus contemporáneos) además de obras de sus discípulos, mobiliario del siglo XVI y reconstrucciones de su taller.',
            kids: '¡Este pintor venía de una isla superlejana llamada Creta! 🏝️ Vivió aquí hace 450 años. En la casa puedes ver sus pinceles, sus cuadros ¡y hasta cómo era su cocina! Se llamaba Doménikos pero todo el mundo le decía El Greco, que significa "El Griego".'
          },
          legends: {
            adult: 'El Greco murió en 1614 a los 73 años, dejando inacabados varios cuadros. Sus contemporáneos decían que dormía muy poco, porque las musas le hablaban al oído por las noches y le inspiraban obras. En una carta que le sobrevivió, le escribe a su amigo Miguel Ángel a Roma: "Toledo me ha dado la luz que Roma me negó".',
            kids: '¡Dicen que El Greco dormía POQUÍSIMO porque las hadas de la pintura le susurraban ideas mientras pintaba! 🌟 Una noche le dijo a una amiga: "Toledo me da la luz que Roma no me daba". ¿Tú cuántas horas te dormirías si fueras un pintor famoso?'
          },
          architecture: {
            adult: 'El museo ocupa dos edificios de la Judería: una vivienda típica toledana con patio mudéjar (fuente de azulejos, arcos de herradura, planta en L) y una ermita contigua. El patio, con plantas aromáticas y una fuente circular, es una de las reconstrucciones más fieles de la vivienda nobiliaria toledana del XVI. El taller, en la planta alta, tiene un lucernario norte idóneo para la luz difusa tan característica en sus cuadros.',
            kids: '¡En el patio hay una fuente de azulejos donde los gatos 🐈‍⬛ de Toledo van a beber! Los arcos son de herradura, como los de los cuentos de Aladino. Ve al piso de arriba y mira la ventana especial por donde pintaba El Greco — ¡tiene la luz PERFECTA para dibujar!'
          },
          deepenFillers: {
            adult: [
              'Pese a su nombre, el edificio no fue realmente la vivienda de El Greco: se construyó a comienzos del siglo XX como recreación idealizada de cómo pudo ser su hogar, en un solar próximo a donde se cree que vivió de verdad. Esta práctica de reconstruir "casas de artista" con fines museísticos fue habitual en la España de principios del siglo pasado, y buscaba ofrecer a los visitantes una experiencia inmersiva más que un rigor histórico estricto sobre el emplazamiento exacto.',
              'El impulsor del museo, el marqués de la Vega-Inclán, adquirió y restauró varias casas del barrio para crear este conjunto, dentro de un proyecto más amplio de recuperación del patrimonio judío toledano que incluyó también la restauración de la cercana Sinagoga del Tránsito. Fue además el primer Comisario Regio de Turismo de España, cargo desde el que impulsó iniciativas similares por todo el país para poner en valor monumentos entonces olvidados o en ruinas.'
            ],
            kids: [
              '¡Esta casa no es exactamente donde vivió El Greco de verdad! Se construyó hace más de 100 años para imaginarse cómo pudo ser su hogar, cerca de donde vivió en realidad. Querían que los visitantes pudieran sentir cómo era la vida de un pintor famoso hace cientos de años, ¡aunque los muebles y las habitaciones sean una reconstrucción! 🏠',
              '¡Un noble llamado marqués de la Vega-Inclán compró varias casas del barrio para crear este museo, hace más de 100 años! También ayudó a arreglar otro edificio muy famoso cerca de aquí, la Sinagoga del Tránsito, y fue de los primeros en pensar que Toledo podía ser una ciudad especial para que la visitaran turistas de todo el mundo. 🎩'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿En qué año se inauguró la Casa-Museo de El Greco?',
            options: ['En 1911', 'En 1614', 'En 1985'],
            correct: 0,
            reveal: '¡En 1911! 🏛️ Reconstruye el hogar que pudo tener el pintor en la Judería, donde vivió desde 1577 hasta su muerte.'
          },
          legends: {
            question: '¿Qué le escribió El Greco a su amigo Miguel Ángel sobre la ciudad de Toledo?',
            options: ['Que Toledo le daba la luz que Roma le había negado', 'Que echaba de menos su isla natal', 'Que quería mudarse a Madrid'],
            correct: 0,
            reveal: '¡Que Toledo le daba la luz que Roma le negaba! 🌟 Sus contemporáneos decían que dormía muy poco porque las musas le inspiraban por las noches.'
          },
          architecture: {
            question: '¿Hacia dónde se abre el lucernario del taller de El Greco, en la planta alta?',
            options: ['Hacia el norte', 'Hacia el sur', 'Hacia el este'],
            correct: 0,
            reveal: '¡Hacia el norte! ☀️ Esa orientación da una luz difusa y uniforme, ideal para pintar cuadros como los que hizo El Greco.'
          }
        }
      },
      {
        id: 'alcazar-toledo',
        name: {
          adult: 'El Alcázar de Toledo',
          kids: 'El Alcázar de Toledo — El Castillo Gigante 🏯'
        },
        subtitle: {
          adult: 'Fortaleza romana convertida en Museo del Ejército',
          kids: '¡El castillo más grande de Toledo!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'main', order: 4 },
        coords: [39.8581, -4.0219],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/FP_Toledo_Alcazar_2025_-_Views.jpg/330px-FP_Toledo_Alcazar_2025_-_Views.jpg',
        audio: {
          duration: 205,
          title: {
            adult: 'Audioguía: El Alcázar de Toledo',
            kids: '¡Aventura Sonora: ¡El Castillo Gigante!'
          }
        },
        visitInfo: {
          hours: {
            adult: 'Martes a domingo 10:00-17:00. Cerrado los lunes.',
            kids: 'Abre de martes a domingo por la mañana y hasta media tarde. Los lunes está cerrado.'
          },
          price: {
            adult: '5€ entrada general, 2,50€ reducida (estudiantes, mayores de 65, discapacidad). Gratis para menores de 18 y todos los domingos.',
            kids: '5€, pero es gratis si eres menor de edad, ¡y también todos los domingos!'
          },
          link: 'https://ejercito.defensa.gob.es/museo/visitas/prepara_visita/'
        },
        tabs: {
          history: {
            adult: 'El Alcázar de Toledo es una fortaleza de origen romano (s. III d.C.) reconstruida en época visigoda y definitivamente ampliada por los Reyes Católicos y Carlos V como palacio-puente del Imperio. Destacó durante la Guerra de la Independencia y por su asedio épico en 1936. Actualmente alberga el Museo del Ejército, con más de 30.000 piezas históricas. Su silueta domina toda la vega del Tajo.',
            kids: '¡Los romanos construyeron este castillo ¡HACE 2000 AÑOS! 🏛️ Luego los caballeros medievales, los reyes y los emperadores lo hicieron cada vez más grande. Tiene cuarteles donde guardaban espadas y escudos ⚔️. ¡Es tan grande que cabe un museo entero dentro!'
          },
          legends: {
            adult: 'Cuentan los cronistas que durante el Asedio de Toledo (1521, revuelta de las Comunidades), una aparición de Santiago Matamoros a caballo fue vista cargando contra los comuneros desde la torre noroeste. También se dice que los túneles secretos del Alcázar cruzan toda la ciudad bajo tierra y llegan hasta la Catedral y la Puerta de Bisagra, aunque ninguno ha sido encontrado por arqueólogos.',
            kids: '¡Dicen que hay un montón de TÚNELES SECRETOS 🕳️ debajo del castillo que llegan hasta la catedral! También cuentan que una noche apareció un caballero con una espada de luz en la torre. ¿Te atreverías a entrar con una linterna?'
          },
          architecture: {
            adult: 'Cuatro torres de 52 m flanquean un rectángulo de 80 × 63 metros. El patio de armas, renacentista, es una de las obras maestras de Covarrubias, con columnas toscanas y una escalera imperial monumental. Sus muros de granito tienen 8 metros de espesor en los basamentos. Destacan el Salón de los Tapices (Flandes s. XVII) y la Sala del Trono, donde Felipe II juró como príncipe heredero.',
            kids: '¡Cuenta las 4 torres! Cada una mide lo mismo que ¡12 niños en fila de alto! 🧍 Las paredes son ¡tan gruesas como un coche! 🚗 Dentro hay un patio con escaleras gigantes ¡y un salón de tapices de colores parecido a un cuento de princesas!'
          },
          deepenFillers: {
            adult: [
              'Durante el asedio de 1936, el Alcázar quedó prácticamente reducido a un cascarón de piedra tras semanas de bombardeos, dinamitazos y voladuras que hicieron caer buena parte de sus torres. Buena parte del edificio actual es en realidad una reconstrucción de posguerra, levantada siguiendo en lo posible las trazas originales de Covarrubias, por lo que lo que hoy se contempla mezcla piedra auténtica de siglos anteriores con fábrica reconstruida en el siglo XX.',
              'El patio renacentista de Covarrubias incluye una escalera imperial cuyos peldaños se hicieron deliberadamente bajos y anchos, para que los caballos pudieran subir montados hasta el piso principal, una solución poco habitual en la arquitectura palaciega de la época. Este detalle respondía tanto a razones prácticas como de representación: permitía a los soberanos hacer una entrada solemne a caballo, reforzando la imagen de poder que el propio edificio estaba llamado a proyectar.'
            ],
            kids: [
              '¡Durante una batalla muy famosa en 1936, el Alcázar quedó casi destruido del todo, con torres caídas y muchísimos agujeros de las explosiones! Lo que ves hoy se reconstruyó después, como un puzle gigante, intentando que se pareciera lo más posible a como era antes de la batalla. 🧩',
              '¡La escalera del patio tiene escalones anchos y bajitos a propósito, para que los caballos pudieran subir montados hasta arriba! Así los reyes podían entrar a caballo hasta el piso principal, ¡imagina el ruido de los cascos resonando por toda la escalera de piedra! 🐴'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿De qué época es el origen de la fortaleza del Alcázar?',
            options: ['Época romana', 'Siglo XIX', 'Edad Media tardía'],
            correct: 0,
            reveal: '¡De época romana! 🏛️ Se construyó en el siglo III d.C. y después reyes y emperadores lo fueron ampliando durante siglos hasta hacerlo gigante.'
          },
          legends: {
            question: 'Según la leyenda, ¿hasta dónde llegan los túneles secretos bajo el Alcázar?',
            options: ['Hasta el mar', 'Hasta la Catedral y la Puerta de Bisagra', 'Hasta Madrid'],
            correct: 1,
            reveal: '¡Hasta la Catedral y la Puerta de Bisagra! 🕳️ Aunque nadie los ha encontrado nunca de verdad, cuentan que cruzan toda la ciudad bajo tierra.'
          },
          architecture: {
            question: '¿Cuánto miden de grosor los muros de granito del Alcázar en sus partes más bajas?',
            options: ['2 metros', '8 metros', '20 metros'],
            correct: 1,
            reveal: '¡8 metros! 🧱 Tan gruesos como varios coches puestos en fila. Por eso el Alcázar ha resistido tantos siglos y tantos asedios.'
          }
        }
      },
      {
        id: 'fabrica-armas-toledo',
        name: {
          adult: 'Real Fábrica de Armas de Toledo',
          kids: 'Real Fábrica de Armas de Toledo — La Fábrica de las Espadas Mágicas ⚔️'
        },
        subtitle: {
          adult: 'Donde se industrializó la tradición espadera de Toledo',
          kids: '¡Aquí se fabricaban miles de espadas de verdad!'
        },
        category: CATEGORIES.HISTORY,
        coords: [39.8660, -4.0429],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Biblioteca_General_del_Campus_de_Toledo.jpg/330px-Biblioteca_General_del_Campus_de_Toledo.jpg',
        audio: {
          duration: 175,
          title: {
            adult: 'Audioguía: Real Fábrica de Armas',
            kids: '¡Aventura Sonora: La Fábrica de las Espadas Mágicas!'
          }
        },
        visitInfo: {
          hours: { adult: 'Hoy es un campus universitario: los exteriores y patios se pueden recorrer libremente en horario lectivo (aproximadamente 8:00-21:00 entre semana).', kids: 'Se puede pasear por fuera del campus, ¡como si fuera un parque!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
        tabs: {
          history: {
            adult: 'Toledo forjaba espadas de gran calidad desde época romana, gracias al hierro y al agua de sus ríos, pero hasta el siglo XVIII el oficio se repartía entre pequeños talleres dispersos por la ciudad. En 1761 el rey Carlos III ordenó centralizar y modernizar esta tradición bajo un único techo: la Real Fábrica de Armas, construida entre 1777 y 1783 según los planos del arquitecto italiano Francesco Sabatini, el mismo que diseñó la Puerta de Alcalá de Madrid. Produjo espadas de caballería, dragones e infantería para el ejército español durante más de dos siglos.',
            kids: '¡En Toledo se hacían espadas desde hace casi 2.000 años, pero cada herrero trabajaba por su cuenta en su propio taller! Un rey llamado Carlos III decidió juntar a todos bajo un mismo techo enorme, hace más de 200 años. ¡El mismo arquitecto que hizo un monumento famoso de Madrid diseñó también esta fábrica!'
          },
          legends: {
            adult: 'Se dice que los maestros espaderos toledanos guardaban en secreto de familia la técnica exacta del temple del acero, un proceso tan delicado que una leyenda asegura que las mejores espadas se enfriaban clavándolas en el cuerpo de un condenado a muerte, para que el acero absorbiera su fuerza vital. La fama de las espadas de Toledo llegó a ser tal que en toda Europa se falsificaba la marca "Toledo" grabada en las hojas, obligando a los gremios locales a desarrollar marcas y contramarcas cada vez más difíciles de imitar.',
            kids: '¡Los maestros espaderos guardaban en secreto cómo hacer el acero perfecto para las espadas! Cuenta una leyenda muy antigua y exagerada que las mejores espadas se enfriaban de una forma muy dramática para que quedaran superfuertes. Las espadas de Toledo eran tan famosas que en otros países las copiaban ¡y ponían la palabra "Toledo" en espadas falsas para venderlas mejor!'
          },
          architecture: {
            adult: 'El edificio principal, el Palacio Sabatini, es una construcción rectangular de planta clásica organizada en torno a dos grandes patios, hoy considerada una de las mejores muestras de arquitectura industrial ilustrada de España. Bajo el propio edificio discurre el Canal de Carlos III, una obra de ingeniería hidráulica que canalizaba el agua del Tajo para mover la maquinaria de forja. En ampliaciones posteriores, ya de los siglos XIX y XX, se añadieron pabellones de estilo neomudéjar en ladrillo y hierro, hasta sumar más de sesenta edificios en su época de mayor actividad.',
            kids: '¡El edificio principal tiene dos patios enormes y fue diseñado por un arquitecto muy famoso! Por debajo pasa un canal de agua que movía toda la maquinaria de la fábrica, ¡como un río escondido bajo tierra! Con el tiempo se construyeron más de sesenta edificios distintos alrededor, formando casi una ciudad propia dedicada a fabricar armas.'
          },
          deepenFillers: {
            adult: [
              'El Canal de Carlos III, que corre bajo el edificio, conserva buena parte de su trazado original y llegó a mover gran parte de la maquinaria de forja mediante un sistema de norias y engranajes hidráulicos, aprovechando la fuerza del agua desviada del Tajo en lugar de depender del carbón, entonces mucho más caro de transportar hasta Toledo. Este planteamiento convirtió a la fábrica en una instalación pionera de energía hidráulica aplicada a la industria en la España del siglo XVIII.',
              'Hoy buena parte del recinto acoge el Campus Tecnológico de la Fábrica de Armas de la Universidad de Castilla-La Mancha, uno de los pocos casos en España de una gran fábrica histórica reconvertida íntegramente en campus universitario. La rehabilitación respetó buena parte de la fisonomía industrial original de los pabellones decimonónicos, de modo que hoy conviven aulas y laboratorios modernos con estructuras de ladrillo y hierro que en su día albergaron fraguas y talleres de forja.'
            ],
            kids: [
              '¡El canal de agua que pasa por debajo del edificio movía muchas máquinas distintas de la fábrica al mismo tiempo, usando solo la fuerza del agua, sin necesidad de electricidad ni de carbón! Era una forma muy lista de ahorrar y trabajar rápido hace más de 200 años. 💧⚙️',
              '¡Hoy en día, donde antes se fabricaban espadas de verdad, ahora estudian universitarios con ordenadores y laboratorios! Toda la fábrica se convirtió en un campus, pero dejaron los ladrillos y las paredes antiguas tal y como eran, así que se nota que allí antes trabajaban herreros. 🎓'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Qué rey ordenó construir la Real Fábrica de Armas de Toledo?',
            options: ['Carlos III', 'Felipe II', 'Alfonso X'],
            correct: 0,
            reveal: '¡Carlos III! ⚔️ La mandó construir en 1761 para centralizar bajo un mismo techo la tradición espadera toledana.'
          },
          legends: {
            question: '¿Qué palabra falsificaban en otros países sobre las espadas, por su fama?',
            options: ['"Toledo" grabada en las hojas', 'El escudo del rey', 'La firma del herrero'],
            correct: 0,
            reveal: '¡La palabra "Toledo"! ⚔️ Las espadas toledanas eran tan famosas que se falsificaba esa marca en espadas hechas fuera de la ciudad.'
          },
          architecture: {
            question: '¿Qué obra de ingeniería hidráulica discurre bajo el edificio principal?',
            options: ['El Canal de Carlos III', 'Un acueducto romano', 'Una mina de plata'],
            correct: 0,
            reveal: '¡El Canal de Carlos III! 💧 Canalizaba el agua del Tajo para mover la maquinaria de forja de toda la fábrica.'
          }
        }
      },
      {
        id: 'san-juan-de-los-reyes',
        name: {
          adult: 'Monasterio de San Juan de los Reyes',
          kids: 'Monasterio de San Juan de los Reyes — El Monasterio de las Cadenas ⛓️'
        },
        subtitle: {
          adult: 'Joya del gótico isabelino mandada construir por los Reyes Católicos',
          kids: '¡Un monasterio cubierto de cadenas de verdad!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'conventos', order: 1 },
        coords: [39.8577, -4.0316],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Iglesia_del_monasterio_de_San_Juan_de_los_Reyes%2C_Toledo%2C_Espa%C3%B1a.jpg/330px-Iglesia_del_monasterio_de_San_Juan_de_los_Reyes%2C_Toledo%2C_Espa%C3%B1a.jpg',
        audio: {
          duration: 175,
          title: {
            adult: 'Audioguía: Monasterio de San Juan de los Reyes',
            kids: '¡Aventura Sonora: El Monasterio de las Cadenas!'
          }
        },
        visitInfo: {
          hours: {
            adult: 'Todos los días 10:00-18:45 (1 de marzo a 15 de octubre) o 10:00-17:45 (16 de octubre a 28 de febrero). Taquilla cierra 10 minutos antes.',
            kids: 'Abre todos los días, por la mañana y por la tarde.'
          },
          price: {
            adult: '4€ entrada individual, o 14€ con la Pulsera Turística de Toledo Monumental (incluye 7 monumentos, válida 7 días).',
            kids: '4€, o 14€ con una pulsera especial que sirve para entrar en 7 sitios distintos de Toledo.'
          },
          link: 'https://tickets.toledomonumental.com/es/767-toledo-monumental/4296-pulsera-turistica-de-toledo'
        },
        tabs: {
          history: {
            adult: 'Isabel la Católica encargó este monasterio en 1477 a los arquitectos Juan Guas y Enrique Egas para conmemorar la victoria de Toro (1476) frente a Portugal, y lo concibió como panteón real donde descansarían ella y Fernando para siempre. Tras la conquista de Granada en 1492, los reyes cambiaron de planes: decidieron ser enterrados allí, en la recién fundada Capilla Real, como símbolo del fin de la Reconquista. San Juan de los Reyes se quedó sin los cuerpos reales, pero conservó su función devocional franciscana.',
            kids: '¡Los Reyes Católicos mandaron construir este monasterio para celebrar una batalla que ganaron! 👑 Al principio querían que fuera su tumba para siempre, pero luego conquistaron Granada y decidieron que preferían descansar allí. Así que este sitio se quedó sin ellos, ¡pero sigue siendo precioso!'
          },
          legends: {
            adult: 'Décadas después de la muerte de Isabel en 1504, y aunque su cuerpo reposa en Granada, un documento de 1568 recoge que el guardián del monasterio aseguraba a Felipe II que allí se conservaban sus entrañas, retiradas durante el proceso de embalsamamiento. Durante más de un siglo el monasterio mantuvo un túmulo funerario en su honor, cubierto de terciopelos negros y brocados de oro, que desapareció probablemente durante la Guerra de la Independencia.',
            kids: '¡Aunque la reina Isabel está enterrada en Granada, cuentan que una parte de ella se quedó guardada aquí en secreto! 🤫 Durante muchísimos años hubo un monumento dedicado a ella, cubierto de telas negras y doradas muy lujosas. ¿Tú qué crees que pasó con él?'
          },
          architecture: {
            adult: 'Es una de las obras cumbre del gótico isabelino, con una iglesia de una sola nave y crucero, y un claustro de dos pisos: el inferior gótico, con tracería calada, y el superior con techumbre de madera mudéjar. En el exterior cuelgan las cadenas de los cautivos cristianos liberados en la conquista de Granada (1492), un regalo simbólico de los Reyes Católicos a modo de ofrenda de gratitud, ya que finalmente no fueron enterrados aquí.',
            kids: '¡Mira las cadenas que cuelgan por fuera! ⛓️ Son de verdad, y eran de prisioneros que quedaron libres hace más de 500 años. Los reyes las pusieron aquí para dar las gracias. ¡Sube al piso de arriba del claustro y fíjate en el techo de madera tallada!'
          },
          deepenFillers: {
            adult: [
              'El monasterio sufrió graves daños durante la invasión napoleónica de 1808, cuando las tropas francesas lo ocuparon como cuartel militar y, según la tradición, prendieron fuego deliberadamente al retirarse en 1813, destruyendo buena parte de la techumbre original del claustro y dañando gravemente la iglesia. Durante décadas el edificio permaneció semiabandonado y expuesto a la intemperie, con parte de sus bóvedas hundidas, hasta que a mediados del siglo XIX se planteó en serio su recuperación.',
              'Su restauración en el siglo XIX corrió a cargo del arquitecto Arturo Mélida, que trabajó a partir de 1878 recuperando buena parte de la decoración gótica isabelina siguiendo criterios historicistas propios de la época, es decir, intentando reconstruir el aspecto que debió de tener el monasterio en su momento de máximo esplendor más que conservar literalmente sus ruinas. Gracias a su labor, hoy es posible admirar tracerías y bóvedas que a finales del XIX estaban prácticamente perdidas.'
            ],
            kids: [
              '¡Durante una guerra hace unos 200 años, los soldados franceses usaron este monasterio tan bonito como si fuera un cuartel para dormir y guardar armas! Cuando se fueron, dicen que le prendieron fuego a propósito, y el techo del claustro se cayó a trozos. Durante muchos años el monasterio estuvo medio abandonado, ¡con lluvia cayendo dentro por los agujeros del techo! 🔥',
              '¡Un arquitecto llamado Arturo Mélida ayudó a devolverle su aspecto bonito hace más de 140 años, como un restaurador de cuadros pero de edificios enteros! Estudió cómo era el monasterio antes del incendio y reconstruyó con mucho cuidado los techos y las decoraciones que se habían roto, para que hoy puedas verlo casi tan bonito como cuando lo construyeron los Reyes Católicos. 🛠️'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Qué victoria quisieron conmemorar los Reyes Católicos al encargar este monasterio?',
            options: ['La conquista de Granada', 'La victoria de Toro frente a Portugal', 'La toma de Toledo'],
            correct: 1,
            reveal: '¡La victoria de Toro (1476)! 👑 Isabel la Católica lo encargó en 1477, aunque después decidió que su tumba estuviera en Granada.'
          },
          legends: {
            question: 'Según un documento de 1568, ¿qué se decía que se conservaba en secreto en el monasterio tras la muerte de Isabel?',
            options: ['Su corona', 'Sus entrañas, retiradas al embalsamarla', 'Su espada'],
            correct: 1,
            reveal: '¡Sus entrañas! 🤫 El guardián del monasterio aseguraba a Felipe II que se habían quedado allí, aunque el cuerpo de la reina reposa en Granada.'
          },
          architecture: {
            question: '¿De dónde vienen las cadenas que cuelgan en la fachada exterior del monasterio?',
            options: ['De prisioneros cristianos liberados en la conquista de Granada', 'De un antiguo puente levadizo', 'De un tesoro escondido'],
            correct: 0,
            reveal: '¡De los cautivos cristianos liberados en 1492! ⛓️ Los Reyes Católicos las colgaron aquí como ofrenda de gratitud.'
          }
        }
      },
      {
        id: 'santa-maria-la-blanca',
        name: {
          adult: 'Sinagoga de Santa María la Blanca',
          kids: 'Sinagoga de Santa María la Blanca — El Bosque de Columnas Blancas 🕊️'
        },
        subtitle: {
          adult: 'El mejor ejemplo de arte almohade conservado en España',
          kids: '¡Una sinagoga convertida en un bosque de piedra blanca!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'juderia', order: 1 },
        coords: [39.8569, -4.0304],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Santa_Mar%C3%ADa_la_Blanca_-_Arcos.jpg/330px-Santa_Mar%C3%ADa_la_Blanca_-_Arcos.jpg',
        audio: {
          duration: 165,
          title: {
            adult: 'Audioguía: Sinagoga de Santa María la Blanca',
            kids: '¡Aventura Sonora: El Bosque de Columnas Blancas!'
          }
        },
        visitInfo: {
          hours: {
            adult: 'Todos los días 10:00-18:45 (1 de marzo a 15 de octubre) o 10:00-17:45 (16 de octubre a 28 de febrero). Taquilla cierra 10 minutos antes.',
            kids: 'Abre todos los días, por la mañana y por la tarde.'
          },
          price: {
            adult: '4€ entrada individual, o 14€ con la Pulsera Turística de Toledo Monumental (incluye 7 monumentos, válida 7 días).',
            kids: '4€, o 14€ con una pulsera especial que sirve para entrar en 7 sitios distintos de Toledo.'
          },
          link: 'https://tickets.toledomonumental.com/es/767-toledo-monumental/4296-pulsera-turistica-de-toledo'
        },
        tabs: {
          history: {
            adult: 'Construida hacia 1180 para la próspera comunidad judía de Toledo, fue durante 211 años la Sinagoga Mayor de la ciudad. Tras los violentos disturbios antijudíos de 1391, impulsados por los sermones del arcediano Ferrán Martínez, el edificio fue confiscado y, en 1411, tras la predicación de san Vicente Ferrer, convertido en iglesia bajo la advocación de Santa María la Blanca. Con el paso de los siglos también sirvió como beaterío (1550) y cuartel militar (siglo XVIII).',
            kids: '¡Esta sinagoga se construyó hace más de 800 años para que los judíos de Toledo rezaran aquí! Después de unos sucesos muy tristes, la convirtieron en iglesia. Con el tiempo también fue un cuartel de soldados. ¡Este edificio ha tenido muchas vidas distintas!'
          },
          legends: {
            adult: 'Tras el pogromo de 1391, el poeta hebreo Ya\'aqob Albeneh escribió una elegía que aún se conserva, lamentando la destrucción de las sinagogas toledanas: "¡Ay de las sinagogas trocadas en ruina!". Es uno de los pocos testimonios directos en primera persona que ha sobrevivido de aquella comunidad, y convierte este templo en un lugar de memoria tanto arquitectónica como literaria.',
            kids: 'Hace muchísimos años, un poeta escribió unos versos muy tristes sobre lo que pasó aquí, y esos versos se han conservado hasta hoy. ¡Imagina que las paredes de este sitio pudieran contarte todo lo que han visto a lo largo de 800 años!'
          },
          architecture: {
            adult: 'Sus cinco naves, separadas por arcos de herradura sobre pilares octogonales, están coronadas por capiteles decorados con motivos de piñas, típicos del arte almohade. Sobre las arcadas se despliegan arquerías ciegas de yeserías con lacerías geométricas y decoración vegetal en "sebka", consideradas el mejor conjunto de arte almohade conservado en España, pese a tratarse de un templo judío en su origen.',
            kids: '¡Cuenta las columnas blancas! Parece un bosque de piedra 🌳. Los arcos tienen forma de herradura, como los de un caballo. Fíjate en las decoraciones de arriba, ¡parecen encaje de piedra tallado a mano!'
          },
          deepenFillers: {
            adult: [
              'A pesar de su nombre y de haber sido consagrada como iglesia en 1411, el edificio nunca perdió del todo su aspecto de sinagoga: carece de imágenes religiosas cristianas visibles en su decoración original, algo excepcional entre los templos toledanos, donde lo habitual tras una conversión era cubrir o eliminar cualquier resto del culto anterior. Esa ausencia deliberada de iconografía cristiana es hoy, paradójicamente, lo que permite apreciar casi intacta la sinagoga original bajo la advocación cristiana.',
              'Sus arcos de herradura y las yeserías que los coronan están construidos con yeso y ladrillo en lugar de piedra, una técnica más ligera y barata, propia de la arquitectura civil y doméstica de la época más que de los grandes templos religiosos monumentales. Paradójicamente, esa aparente modestia constructiva ha facilitado su conservación durante más de 800 años, ya que estos materiales resultan más fáciles de restaurar que la piedra maciza cuando se dañan por la humedad o el paso del tiempo.'
            ],
            kids: [
              '¡Aunque hoy es una iglesia, por dentro casi no tiene dibujos religiosos cristianos! Sigue pareciendo casi igual que cuando era una sinagoga, hace más de 800 años. Normalmente, cuando un edificio cambiaba de religión, tapaban o quitaban todo lo del culto anterior, pero aquí casi no lo hicieron. Por eso hoy puedes imaginarte casi exactamente cómo era cuando los judíos rezaban aquí. 🕍',
              '¡Sus arcos no están hechos de piedra dura, sino de yeso y ladrillo, más ligeros y baratos de construir! Normalmente los templos grandes se hacían de piedra maciza, pero este se hizo con materiales más sencillos, como si fuera una casa normal. Por eso ha durado tantísimos años sin romperse: cuando algo se estropeaba, era mucho más fácil de arreglar. 🧱'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Durante cuántos años fue esta la Sinagoga Mayor de Toledo?',
            options: ['211 años', '50 años', '20 años'],
            correct: 0,
            reveal: '¡211 años! 🕍 Se construyó hacia 1180, y en 1411 fue convertida en iglesia tras la predicación de san Vicente Ferrer.'
          },
          legends: {
            question: '¿Qué dejó escrito el poeta hebreo Ya\'aqob Albeneh tras el pogromo de 1391?',
            options: ['Una elegía lamentando la destrucción de las sinagogas', 'Un mapa del edificio', 'Una lista de tesoros escondidos'],
            correct: 0,
            reveal: '¡Una elegía! 📜 Es uno de los pocos testimonios en primera persona que sobreviven de aquella comunidad, y aún se conserva hoy.'
          },
          architecture: {
            question: '¿Qué motivo decora los capiteles de sus columnas, típico del arte almohade?',
            options: ['Piñas', 'Estrellas', 'Animales'],
            correct: 0,
            reveal: '¡Piñas! 🌲 Coronan las cinco naves separadas por arcos de herradura, consideradas el mejor conjunto de arte almohade conservado en España.'
          }
        }
      },
      {
        id: 'cristo-de-la-luz',
        name: {
          adult: 'Mezquita del Cristo de la Luz',
          kids: 'Mezquita del Cristo de la Luz — La Mezquita de la Lámpara Mágica 🏮'
        },
        subtitle: {
          adult: 'El edificio hispanomusulmán mejor conservado de Toledo',
          kids: '¡Una lámpara que ardió encendida 300 años!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'juderia', order: 7 },
        coords: [39.8606, -4.0243],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Cristo_de_la_Luz_2025_Fa%C3%A7ade.jpg/330px-Cristo_de_la_Luz_2025_Fa%C3%A7ade.jpg',
        audio: {
          duration: 158,
          title: {
            adult: 'Audioguía: Mezquita del Cristo de la Luz',
            kids: '¡Aventura Sonora: La Mezquita de la Lámpara Mágica!'
          }
        },
        visitInfo: {
          hours: {
            adult: 'Todos los días 10:00-18:45 (1 de marzo a 15 de octubre) o 10:00-17:45 (16 de octubre a 28 de febrero). Taquilla cierra 10 minutos antes.',
            kids: 'Abre todos los días, por la mañana y por la tarde.'
          },
          price: {
            adult: '4€ entrada individual, o 14€ con la Pulsera Turística de Toledo Monumental (incluye 7 monumentos, válida 7 días).',
            kids: '4€, o 14€ con una pulsera especial que sirve para entrar en 7 sitios distintos de Toledo.'
          },
          link: 'https://tickets.toledomonumental.com/es/767-toledo-monumental/4296-pulsera-turistica-de-toledo'
        },
        tabs: {
          history: {
            adult: 'Construida en el año 999, durante el califato de Córdoba bajo Hisham II, según reza una inscripción tallada en su fachada, es el edificio en pie más antiguo de Toledo. Su planta cuadrada de nueve tramos abovedados, cada uno con una cúpula distinta, sigue el modelo de la Mezquita de Córdoba a pequeña escala. En el siglo XII, tras la conquista cristiana, artesanos mudéjares le añadieron un ábside en el lado oriental, combinando formas románicas con técnicas constructivas mudéjares.',
            kids: '¡Este es el edificio más viejo de todo Toledo! Lo construyeron hace más de 1.000 años. Tiene 9 techitos en forma de cúpula, ¡todos distintos! Después le añadieron un trocito nuevo, mezclando dos estilos diferentes.'
          },
          legends: {
            adult: 'Cuenta la leyenda que, cuando el rey Alfonso VI entró en Toledo en 1085, el caballo del Cid Campeador se arrodilló espontáneamente frente a esta antigua mezquita. Intrigado, el rey ordenó derribar un muro y encontró, tras él, una lámpara que llevaba más de 300 años ardiendo sin apagarse, iluminando una imagen de Cristo crucificado escondida desde la época musulmana. Aquel hallazgo se interpretó como un milagro y dio nombre al edificio. Una piedra blanca en el suelo, junto a la entrada, señala todavía hoy el lugar exacto donde se dice que se arrodilló el caballo.',
            kids: '¡Cuentan que el caballo de un caballero muy famoso, el Cid, se arrodilló de repente delante de esta mezquita! El rey mandó abrir un muro y encontraron una lámpara que llevaba encendida ¡300 años sin apagarse! Todavía puedes ver una piedra blanca en el suelo que marca dónde se arrodilló el caballo.'
          },
          architecture: {
            adult: 'De reducidas dimensiones y planta casi cuadrada, su interior se organiza en nueve espacios abovedados con nueve cúpulas de nervios entrecruzados, ninguna igual a otra, sostenidas por columnas romanas y visigodas reutilizadas. La fachada exterior de ladrillo combina arcos de herradura entrelazados y una decoración de esquinillas escalonadas de clara influencia cordobesa, considerada una de las cumbres del arte califal fuera de Córdoba.',
            kids: '¡Fíjate en el techo! Tiene 9 cúpulas y ninguna es igual a las demás 🎨. Las columnas de dentro son tan viejas que las trajeron de otros edificios todavía más antiguos. ¡Por fuera los ladrillos forman dibujos como si fueran un rompecabezas!'
          },
          deepenFillers: {
            adult: [
              'La inscripción árabe conservada en su fachada indica el nombre de quien costeó su construcción, un particular llamado Ahmad ibn Hadidi, y precisa incluso la fecha exacta, el año 999. Es una de las pocas inscripciones fundacionales fechadas que se conservan de la arquitectura califal en toda España, lo que convierte a este pequeño edificio en un documento histórico de primer orden, capaz de fechar con precisión casi absoluta una construcción de hace más de mil años.',
              'El pequeño ábside cristiano añadido en el siglo XII conserva restos de pintura mural románica que representan escenas religiosas en tonos ocres y rojizos, hoy parcialmente desvaídos por el paso del tiempo. Se trata de una de las pocas muestras de este estilo pictórico que se conservan en una ciudad dominada casi por completo por el arte mudéjar, lo que las convierte en un testimonio poco frecuente de cómo pintaban los artesanos cristianos que trabajaron aquí tras la conquista.'
            ],
            kids: [
              '¡En la fachada hay una inscripción en árabe con el nombre de quien pagó su construcción, un hombre llamado Ahmad ibn Hadidi, tallada hace más de 1000 años! Hasta dice el año exacto en que se hizo, el 999. Es un tesoro escrito en piedra, porque casi no quedan inscripciones tan antiguas y tan precisas en toda España. 📜',
              '¡El trocito de iglesia que le añadieron después tiene pinturas antiguas en la pared, de un estilo que casi no se ve en ningún otro sitio de Toledo! Son de hace casi 900 años y muestran escenas religiosas en colores como el rojo y el ocre. Aunque están un poco borrosas por el paso del tiempo, todavía se pueden distinguir. 🎨'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿En qué año se construyó esta mezquita, según la inscripción de su fachada?',
            options: ['En el año 999', 'En el año 1492', 'En el año 711'],
            correct: 0,
            reveal: '¡En el año 999! 🕌 Es el edificio en pie más antiguo de Toledo, construido durante el califato de Córdoba bajo Hisham II.'
          },
          legends: {
            question: '¿Cuántos años llevaba ardiendo la lámpara que se encontró escondida tras el muro?',
            options: ['Más de 300 años', '30 años', '3 años'],
            correct: 0,
            reveal: '¡Más de 300 años sin apagarse! 🏮 Se encontró tras el muro que Alfonso VI mandó abrir cuando el caballo del Cid se arrodilló ante la mezquita.'
          },
          architecture: {
            question: '¿Cuántas cúpulas distintas cubren el interior de la mezquita?',
            options: ['Nueve, todas diferentes entre sí', 'Una única cúpula central', 'Cuatro cúpulas iguales'],
            correct: 0,
            reveal: '¡Nueve cúpulas, ninguna igual a otra! ✨ Se apoyan sobre columnas romanas y visigodas reutilizadas de edificios todavía más antiguos.'
          }
        }
      },
      {
        id: 'puente-alcantara',
        name: {
          adult: 'Puente de Alcántara',
          kids: 'Puente de Alcántara — El Puente de las Dos Torres 🌉'
        },
        subtitle: {
          adult: 'Puente romano y arco de triunfo sobre el Tajo',
          kids: '¡Un puente con más de 2.000 años de historia!'
        },
        category: CATEGORIES.HISTORY,
        coords: [39.8603, -4.0175],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/FP_Toledo_2025_-_Puente_de_Alc%C3%A1ntara.jpg/330px-FP_Toledo_2025_-_Puente_de_Alc%C3%A1ntara.jpg',
        audio: {
          duration: 150,
          title: {
            adult: 'Audioguía: Puente de Alcántara',
            kids: '¡Aventura Sonora: El Puente de las Dos Torres!'
          }
        },
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (puente peatonal al aire libre).', kids: '¡Se puede cruzar en cualquier momento, no tiene horario!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
        tabs: {
          history: {
            adult: 'De origen romano, el puente fue reconstruido por los árabes en el año 997 y de nuevo en el siglo XIII por Alfonso X tras sufrir graves daños. Su nombre conserva la huella de aquella época: alcántara significa "puente" en árabe. Carlos V ordenó una restauración en el siglo XVI, dejando constancia con el escudo imperial que corona su arco de triunfo. El torreón oriental, ya en ruinas, fue sustituido en 1721 por el actual arco barroco.',
            kids: '¡Este puente tiene más de 2.000 años! Lo construyeron los romanos, y luego los árabes y los reyes cristianos lo arreglaron varias veces. Su nombre significa "puente" en árabe. ¡Hasta un emperador puso su escudo en la entrada para que no se olvidara quién lo reparó!'
          },
          legends: {
            adult: 'Cuenta la tradición que, tras la conquista cristiana de 1085, un joven caballero llamado Rodrigo se enamoró de Zahira, una joven musulmana, y planearon huir juntos cruzando este puente de noche. Cerca del arroyo que hoy lleva su recuerdo, dos hombres que creyeron que la joven estaba siendo raptada la hirieron de muerte. Rodrigo la bautizó agonizante con agua del arroyo, poniéndole el nombre de Casilda, y después profesó como monje, acudiendo cada tarde a rezar junto al lugar donde ella murió: el llamado desde entonces Arroyo de la Degollada.',
            kids: 'Cuentan que hace muchísimos años, un caballero y una joven se querían mucho pero eran de familias distintas, así que intentaron escapar juntos cruzando este puente de noche. Su historia terminó muy triste, y desde entonces hay un arroyo cerca que lleva su recuerdo en el nombre. Es una de las historias de amor más contadas de Toledo.'
          },
          architecture: {
            adult: 'Conserva capas de distintas épocas superpuestas: cimientos romanos, reconstrucción andalusí y reformas cristianas medievales y renacentistas. Está flanqueado por una torre fortificada de acceso y un arco de triunfo con el escudo imperial de Carlos V, testigos de su función histórica como puerta de control de mercancías y viajeros que entraban en la ciudad.',
            kids: '¡Fíjate en la torre con almenas, como de castillo! Y en el escudo grande de piedra encima del arco. Antiguamente aquí se paraba a toda la gente que entraba en la ciudad para comprobar quién era. ¡Como un control de pasaportes de hace 500 años!'
          },
          deepenFillers: {
            adult: [
              'El puente ha sido destruido y reconstruido varias veces a lo largo de su larga historia, sobre todo por crecidas violentas del Tajo, un río que en época de deshielo o lluvias intensas puede subir varios metros en pocas horas. Una de esas riadas se llevó por delante uno de sus arcos en el siglo XIV, obligando a una reconstrucción que, como tantas otras intervenciones posteriores, dejó su propia huella superpuesta a las fábricas romana, árabe y cristiana anteriores.',
              'Cerca del puente se alza el Castillo de San Servando, una fortaleza medieval de origen templario que formó parte del mismo sistema defensivo de entrada a la ciudad, vigilando el acceso desde la orilla opuesta del Tajo. Puente y castillo funcionaban de forma coordinada: cualquier ejército que intentara cruzar el río por aquí tenía que hacerlo bajo la vigilancia directa de la fortaleza, lo que convertía este tramo en uno de los puntos mejor protegidos de todo el perímetro de Toledo.'
            ],
            kids: [
              '¡Este puente se ha caído y se ha vuelto a construir varias veces a lo largo de la historia, sobre todo por culpa de las crecidas del río! Cuando llueve mucho o se derrite la nieve, el Tajo puede subir muchísimo en pocas horas. Una vez, hace más de 600 años, el agua se llevó uno de los arcos enteros, ¡y hubo que reconstruirlo! 🌊',
              '¡Al otro lado del puente hay un castillo llamado San Servando! Formaba parte del mismo sistema para proteger la entrada a Toledo, vigilando el puente desde lo alto. Si un ejército enemigo intentaba cruzar el río por aquí, los soldados del castillo lo veían venir enseguida y podían defenderse mejor. ¡Puente y castillo trabajaban juntos, como un equipo! 🏰'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Qué significa la palabra "alcántara" en árabe?',
            options: ['Puente', 'Río', 'Torre'],
            correct: 0,
            reveal: '¡Puente! 🌉 Los árabes reconstruyeron este puente romano en el año 997, y su nombre quedó grabado en la ciudad para siempre.'
          },
          legends: {
            question: '¿Qué nombre recibe hoy el arroyo cercano donde termina la triste historia de amor de Rodrigo y Zahira?',
            options: ['Arroyo de la Degollada', 'Arroyo de los Amantes', 'Arroyo Dorado'],
            correct: 0,
            reveal: 'Se llama Arroyo de la Degollada. 💔 Rodrigo bautizó allí a la joven agonizante, y después se hizo monje para rezar cada tarde junto a ese lugar.'
          },
          architecture: {
            question: '¿Qué emperador dejó su escudo grabado sobre el arco de triunfo del puente?',
            options: ['Carlos V', 'Felipe II', 'Alfonso X'],
            correct: 0,
            reveal: '¡Carlos V! 🛡️ Ordenó una restauración en el siglo XVI y dejó constancia de ella con el escudo imperial que corona el arco.'
          }
        }
      },
      {
        id: 'puente-san-martin',
        name: {
          adult: 'Puente de San Martín',
          kids: 'Puente de San Martín — El Puente del Incendio Secreto 🔥'
        },
        subtitle: {
          adult: 'Puente mudéjar del siglo XIV con dos torres almenadas',
          kids: '¡Una esposa le prendió fuego para salvarlo!'
        },
        category: CATEGORIES.HISTORY,
        coords: [39.8566, -4.0342],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Puente_de_San_Mart%C3%ADn_%28Toledo%29_2011-05-27.jpg/330px-Puente_de_San_Mart%C3%ADn_%28Toledo%29_2011-05-27.jpg',
        audio: {
          duration: 155,
          title: {
            adult: 'Audioguía: Puente de San Martín',
            kids: '¡Aventura Sonora: El Puente del Incendio Secreto!'
          }
        },
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (puente peatonal al aire libre).', kids: '¡Se puede cruzar en cualquier momento, no tiene horario!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
        tabs: {
          history: {
            adult: 'Construido en el siglo XIV y reconstruido en 1390 por el arzobispo Pedro Tenorio, forma parte del sistema defensivo occidental de Toledo, junto al Puente de Alcántara al otro lado de la ciudad. De estilo mudéjar, consta de cinco arcos y dos torres hexagonales almenadas en sus extremos, y durante siglos fue la entrada habitual de peregrinos y comerciantes que llegaban desde el oeste.',
            kids: '¡Este puente se construyó hace más de 600 años! Tiene dos torres con almenas, como un castillo de verdad, en cada extremo. Durante siglos, toda la gente que llegaba a Toledo desde el oeste tenía que cruzarlo.'
          },
          legends: {
            adult: 'Cuenta la leyenda que, al terminar la obra, el maestro alarife descubrió un error de cálculo que haría colapsar el arco principal en cuanto se retiraran los andamios de madera. Angustiado, se lo confesó a su esposa. Aquella misma noche, ella prendió fuego en secreto a los andamios, simulando un accidente y ganando así el tiempo necesario para que su marido reconstruyera el arco sin ser descubierto, salvando tanto su vida como su reputación.',
            kids: '¡Cuentan que el hombre que construyó este puente se equivocó al hacer los cálculos, y el puente se iba a caer! Su mujer, sin decirle nada a nadie, quemó de noche la madera que sujetaba el puente para que pareciera un accidente. Así su marido tuvo tiempo de arreglarlo bien, ¡y nadie se enteró jamás del error!'
          },
          architecture: {
            adult: 'El puente actual, obra del arzobispo Tenorio, presenta cinco arcos apuntados de fábrica de sillería, con dos torres hexagonales fortificadas y almenadas que flanquean sus extremos. En la cara que mira río abajo, sobre la clave del arco central, se conserva una pequeña estatua cuyo significado exacto se ha perdido con el tiempo.',
            kids: '¡Cuenta los arcos! Son 5, y las dos torres de los extremos tienen forma de hexágono (¡como un panal de abejas!). Busca una estatuilla pequeñita justo encima del arco del medio — nadie sabe muy bien qué significa.'
          },
          deepenFillers: {
            adult: [
              'Antes del puente actual existió uno anterior, de origen probablemente romano o altomedieval, que se derrumbó en el siglo XIII al paso de una multitud que huía en desbandada de una repentina crecida del Tajo, provocando numerosas víctimas. Aquel desastre, uno de los más recordados de la historia toledana, impulsó la reconstrucción definitiva del puente en el siglo XIV, con el diseño mudéjar de arcos apuntados y torres almenadas que ha llegado, con reformas, hasta nuestros días.',
              'Sus dos torres, aunque parecen simétricas a simple vista, presentan ligeras diferencias de altura, proporción y decoración entre sí, algo que solo se aprecia con una mirada atenta. Estas pequeñas discrepancias son fruto de haberse construido y reformado en momentos distintos a lo largo de los siglos, ya que cada intervención posterior fue adaptando el diseño original a las técnicas y gustos de su época, sin llegar nunca a igualar por completo ambos extremos del puente.'
            ],
            kids: [
              '¡Antes de este puente hubo otro más antiguo que se cayó hace muchísimos siglos, cuando mucha gente lo cruzaba a la vez huyendo de una crecida del río! Fue un desastre muy triste que la gente de Toledo recordó durante generaciones. Por eso, tiempo después, construyeron este puente nuevo, mucho más fuerte, con torres y arcos pensados para aguantar mejor. 🌊',
              '¡Aunque las dos torres parecen iguales, si te fijas bien tienen pequeñas diferencias entre ellas, en la altura y en los dibujos tallados! Se construyeron y arreglaron en momentos distintos a lo largo de los siglos, así que cada una tiene un poquito de su propia época. Hace falta mirar con mucha atención para notarlo. 🔍'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Qué arzobispo reconstruyó este puente en 1390?',
            options: ['Pedro Tenorio', 'Pedro González de Mendoza', 'Juan Pardo de Tavera'],
            correct: 0,
            reveal: '¡El arzobispo Pedro Tenorio! 🌉 Formaba parte del sistema defensivo occidental de Toledo, junto al Puente de Alcántara al otro lado de la ciudad.'
          },
          legends: {
            question: '¿Qué hizo la esposa del maestro alarife para salvar a su marido, según la leyenda?',
            options: ['Prendió fuego a los andamios de noche', 'Avisó al arzobispo del error', 'Reconstruyó ella misma el arco'],
            correct: 0,
            reveal: '¡Prendió fuego a los andamios en secreto! 🔥 Así ganó tiempo para que su marido corrigiera el error de cálculo sin que nadie lo descubriera.'
          },
          architecture: {
            question: '¿Qué forma tienen las dos torres que flanquean los extremos del puente?',
            options: ['Hexagonal', 'Cuadrada', 'Redonda'],
            correct: 0,
            reveal: '¡Hexagonal! 🏰 Están almenadas y fortificadas, y el puente tiene cinco arcos apuntados de sillería entre ambas.'
          }
        }
      },
      {
        id: 'iglesia-jesuitas',
        name: {
          adult: 'Iglesia de los Jesuitas (San Ildefonso)',
          kids: 'Iglesia de los Jesuitas (San Ildefonso) — La Iglesia de las Torres Gemelas 🔭'
        },
        subtitle: {
          adult: 'El mejor mirador barroco sobre los tejados de Toledo',
          kids: '¡Sube a sus torres y verás TODO Toledo!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'conventos', order: 6 },
        coords: [39.8581, -4.0261],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/PanToledo01copia.jpg/330px-PanToledo01copia.jpg',
        audio: {
          duration: 160,
          title: {
            adult: 'Audioguía: Iglesia de los Jesuitas',
            kids: '¡Aventura Sonora: La Iglesia de las Torres Gemelas!'
          }
        },
        visitInfo: {
          hours: {
            adult: 'Todos los días 10:00-18:45 (1 de marzo a 15 de octubre) o 10:00-17:45 (16 de octubre a 28 de febrero). Taquilla cierra 10 minutos antes.',
            kids: 'Abre todos los días, por la mañana y por la tarde.'
          },
          price: {
            adult: '4€ entrada individual (incluye subir a las torres-mirador), o 14€ con la Pulsera Turística de Toledo Monumental (7 monumentos, válida 7 días).',
            kids: '4€ para subir a las torres, o 14€ con una pulsera especial que sirve para entrar en 7 sitios distintos de Toledo.'
          },
          link: 'https://tickets.toledomonumental.com/es/767-toledo-monumental/4296-pulsera-turistica-de-toledo'
        },
        tabs: {
          history: {
            adult: 'Los jesuitas se establecieron en Toledo en 1558 y adquirieron en 1569 los terrenos donde, según la tradición, había nacido San Ildefonso. Las obras de la actual iglesia comenzaron hacia 1629 bajo la dirección de Pedro Sánchez, y se prolongaron durante más de un siglo: Francisco Bautista construyó la fachada-retablo barroca, y Bartolomé Zumbigo terminó las torres gemelas. La iglesia fue finalmente consagrada en 1718.',
            kids: '¡Los jesuitas construyeron esta iglesia justo donde, según cuentan, nació hace muchísimos siglos un santo llamado Ildefonso! Tardaron casi 100 años en terminarla del todo, con varios arquitectos distintos trabajando uno detrás de otro.'
          },
          legends: {
            adult: 'Se conserva el documento fundacional en el que los promotores explican por qué eligieron este solar exacto: "por cuanto se tiene por tradición que el glorioso San Ildefonso... nació en esta casa donde ahora hacemos esta fundación". Es decir, la iglesia entera se construyó, según sus propios fundadores, sobre la casa natal de uno de los santos más venerados de Toledo.',
            kids: '¡Dicen que un santo muy importante nació justo en el terreno donde está esta iglesia! Por eso decidieron construirla ahí y no en otro sitio. ¿Te imaginas construir tu casa en el mismo sitio donde nació alguien famoso?'
          },
          architecture: {
            adult: 'Su fachada-retablo, obra cumbre del barroco toledano, está flanqueada por dos torres gemelas de más de 50 metros, desde cuya azotea se contempla la panorámica más completa de la ciudad, con la Catedral y el Alcázar dominando el perfil urbano. El interior, de nave única con capillas laterales interconectadas, alberga una cúpula sobre el crucero y un retablo mayor pintado al fresco con efecto de trampantojo.',
            kids: '¡Sube las escaleras hasta arriba de las torres! Desde allí se ve TODO Toledo como si estuvieras volando 🦅. Dentro, fíjate en el techo pintado — parece que tiene columnas de verdad, ¡pero están pintadas para hacerte creer que son de piedra!'
          },
          deepenFillers: {
            adult: [
              'Subir a sus torres implica ascender por una estrecha escalera de caracol de piedra, la misma que durante siglos usaron los jesuitas para acceder a las campanas, tocarlas a mano en las horas litúrgicas y vigilar la ciudad desde lo alto en tiempos de peligro. El recorrido, angosto y con escalones desgastados por el paso de generaciones, culmina en una azotea abierta desde la que hoy los visitantes disfrutan de la misma panorámica que antes era privilegio exclusivo de los religiosos.',
              'La cúpula pintada al fresco sobre el crucero se atribuye a artistas de la escuela toledana del siglo XVIII, expertos en la técnica del trampantojo, capaz de simular volúmenes arquitectónicos inexistentes mediante juegos de luces y sombras pintadas. El efecto, pensado para engañar a la vista desde el suelo del templo, buscaba dar sensación de mayor altura y riqueza decorativa de la que realmente existía en piedra, un recurso económico y a la vez espectacular muy habitual en el barroco español.'
            ],
            kids: [
              '¡Para subir a las torres hay que subir una escalera de caracol muy estrecha de piedra, la misma que usaban los jesuitas hace siglos para tocar las campanas y vigilar la ciudad! Los escalones están un poco desgastados de tanta gente que ha subido por ellos a lo largo de los años. Cuando llegas arriba, ves las mismas vistas que antes solo veían los religiosos. 🌀',
              '¡Los artistas que pintaron el techo eran expertos en hacer trucos visuales, pintando columnas que en realidad no existen! Usaban luces y sombras pintadas para engañar a tus ojos y hacerte creer que el techo era más alto y más decorado de lo que era de verdad. ¡Es casi como magia hecha con pintura! 🎭'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿En qué año fue finalmente consagrada esta iglesia, tras más de un siglo de obras?',
            options: ['En 1718', 'En 1629', 'En 1558'],
            correct: 0,
            reveal: '¡En 1718! ⛪ Las obras empezaron hacia 1629 con Pedro Sánchez, y varios arquitectos distintos se turnaron hasta terminar las torres gemelas.'
          },
          legends: {
            question: '¿Por qué eligieron los jesuitas este solar exacto para construir la iglesia?',
            options: ['Porque se creía que allí había nacido San Ildefonso', 'Porque era el punto más alto de Toledo', 'Porque pertenecía a un rey'],
            correct: 0,
            reveal: '¡Porque, según la tradición, allí nació San Ildefonso! 👑 Así lo explican los propios promotores en el documento fundacional que se conserva.'
          },
          architecture: {
            question: '¿Cuántos metros de altura tienen las torres gemelas de esta iglesia?',
            options: ['Más de 50 metros', 'Unos 10 metros', 'Más de 100 metros'],
            correct: 0,
            reveal: '¡Más de 50 metros! 🔭 Desde su azotea se contempla la panorámica más completa de Toledo, con la Catedral y el Alcázar dominando el perfil.'
          }
        }
      },
      {
        id: 'plaza-zocodover',
        name: {
          adult: 'Plaza de Zocodover',
          kids: 'Plaza de Zocodover — La Plaza del Mercado de Camellos 🐫'
        },
        subtitle: {
          adult: 'El corazón social de Toledo desde época árabe',
          kids: '¡Aquí se vendían animales hace 1.000 años!'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'main', order: 3 },
        coords: [39.8595, -4.0214],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Toledo_Zocodover_01_lou.JPG/330px-Toledo_Zocodover_01_lou.JPG',
        audio: {
          duration: 145,
          title: {
            adult: 'Audioguía: Plaza de Zocodover',
            kids: '¡Aventura Sonora: La Plaza del Mercado de Camellos!'
          }
        },
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (plaza pública al aire libre).', kids: '¡Se puede visitar en cualquier momento, no tiene horario!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
        tabs: {
          history: {
            adult: 'Su nombre procede del árabe sūq al-dawābb, "mercado de bestias de carga", y refleja su función original como zoco de animales durante el dominio musulmán. Tras la reconquista de 1085 mantuvo su carácter comercial y popular, y con el paso de los siglos acogió también torneos, mercados, recepciones de autoridades y los autos de fe de la Inquisición. Un incendio destruyó la plaza el 29 de octubre de 1589, tras el cual se rediseñó siguiendo trazas de Juan de Herrera.',
            kids: '¡El nombre de esta plaza significa "mercado de animales" en árabe! Hace 1.000 años aquí se compraban y vendían burros, camellos y caballos. Con el tiempo se convirtió en el sitio donde pasaba TODO en Toledo: fiestas, mercados, ¡de todo!'
          },
          legends: {
            adult: 'Durante siglos, la plaza fue también escenario de ejecuciones públicas y autos de fe. La tradición oral toledana sostiene que las almas de algunos de los ajusticiados nunca abandonaron del todo el lugar, y que en las noches más silenciosas todavía se percibe su presencia entre los soportales, especialmente cerca de donde se alzaba el antiguo patíbulo.',
            kids: 'Hace muchísimos años pasaban aquí cosas bastante serias, y por eso cuentan que, en las noches muy silenciosas, algunas personas dicen notar algo raro entre las columnas de la plaza. ¿Te atreverías a pasar por aquí de noche?'
          },
          architecture: {
            adult: 'La plaza actual, de planta irregular con soportales porticados, se reconstruyó tras el incendio de 1589 siguiendo criterios de regularidad urbana promovidos por Felipe II. Los edificios que la rodean combinan balconadas de forja y arcos de medio punto en sus plantas bajas, creando un espacio unificado que ha servido de escenario social continuado desde la Edad Media hasta hoy.',
            kids: '¡Mira los soportales con columnas alrededor de toda la plaza! Sirven para pasear a la sombra o resguardarte de la lluvia. Después de un incendio muy grande hace 400 años, la reconstruyeron toda igual de bonita, ¡y así sigue hoy!'
          },
          deepenFillers: {
            adult: [
              'La plaza también fue escenario de corridas de toros y otros festejos populares hasta bien entrado el siglo XIX, cuando para cada función se instalaba en su centro un tablado de madera desmontable con gradas improvisadas, que se retiraba después para devolver el espacio a su uso cotidiano como mercado y lugar de paseo. Esta doble función, festiva y comercial a la vez, explica por qué Zocodover ha sido durante siglos el auténtico corazón social de la ciudad.',
              'El edificio conocido como el Miradero, que hoy delimita uno de sus lados, sustituyó a un antiguo mercado cubierto de hierro y cristal construido en el siglo XIX, siguiendo la moda de las grandes estructuras metálicas propias de la revolución industrial, similar en espíritu a los mercados de abastos que entonces se levantaban en toda Europa. Aquel mercado acabó desapareciendo con el tiempo, sustituido por las construcciones que hoy configuran este lado de la plaza.'
            ],
            kids: [
              '¡Aquí también se hacían corridas de toros hace mucho tiempo! Montaban un escenario de madera desmontable justo en el centro de la plaza, con gradas para que la gente se sentara a ver. Cuando terminaba la fiesta, lo desmontaban todo otra vez para que la plaza volviera a ser el mercado de siempre. ¡Era una plaza con muchos trabajos distintos a la vez! 🐂',
              '¡Antes había aquí un mercado cubierto de hierro y cristal, como una estación de tren pequeñita, que ya no existe! Se construyó hace más de 150 años, cuando estaba de moda hacer edificios así en toda Europa. Con el tiempo lo quitaron y pusieron otros edificios en su lugar, los que ves hoy alrededor de la plaza. 🚉'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Qué significa "Zocodover" en árabe?',
            options: ['Plaza del rey', 'Mercado de bestias de carga', 'Jardín de flores'],
            correct: 1,
            reveal: '¡Mercado de bestias de carga! 🐫 Durante el dominio musulmán aquí se compraban y vendían burros, camellos y caballos.'
          },
          legends: {
            question: '¿Qué cuenta la tradición toledana sobre las noches silenciosas en esta plaza?',
            options: ['Que aparecen luces de colores', 'Que se nota la presencia de quienes fueron ajusticiados aquí', 'Que suena música antigua'],
            correct: 1,
            reveal: 'Durante siglos aquí hubo ejecuciones públicas, y la tradición dice que en las noches más silenciosas todavía se percibe algo raro entre los soportales. 👻'
          },
          architecture: {
            question: '¿Qué pasó en esta plaza en 1589 que hizo que se reconstruyera entera?',
            options: ['Un terremoto', 'Un incendio', 'Una inundación'],
            correct: 1,
            reveal: '¡Un incendio! 🔥 Ardió el 29 de octubre de 1589, y la reconstruyeron con los soportales y arcos que todavía puedes ver hoy.'
          }
        }
      },
      {
        id: 'sinagoga-transito',
        name: {
          adult: 'Sinagoga del Tránsito y Museo Sefardí',
          kids: 'Sinagoga del Tránsito y Museo Sefardí — La Sinagoga de los Cedros del Líbano 🌲'
        },
        subtitle: {
          adult: 'La sinagoga hispanojudía más importante de España',
          kids: '¡Construida con madera traída desde muy, muy lejos!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'main', order: 7 },
        coords: [39.8557, -4.0294],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Toledo_-_Sinagoga_El_Transito_01.jpg/330px-Toledo_-_Sinagoga_El_Transito_01.jpg',
        audio: {
          duration: 168,
          title: {
            adult: 'Audioguía: Sinagoga del Tránsito',
            kids: '¡Aventura Sonora: La Sinagoga de los Cedros del Líbano!'
          }
        },
        visitInfo: {
          hours: {
            adult: 'Martes a sábado 9:30-20:00, domingos y festivos 10:00-15:00. Cerrado los lunes.',
            kids: 'Abre de martes a sábado, y los domingos solo por la mañana. Los lunes está cerrado.'
          },
          price: {
            adult: '3€ entrada individual. Gratis los sábados a partir de las 14:00 y todos los domingos.',
            kids: '3€, pero es gratis los sábados por la tarde y todos los domingos.'
          },
          link: 'https://www.cultura.gob.es/msefardi/visita/entradas-reservas.html'
        },
        tabs: {
          history: {
            adult: 'Construida entre 1357 y 1358 por encargo de Samuel ha-Leví, tesorero del rey Pedro I de Castilla, que llegó a importar cedros del Líbano para su techumbre. Desde 1964 alberga el Museo Sefardí, dedicado a la historia de los judíos en España: su llegada en época romana, su edad de oro cultural medieval y su expulsión por los Reyes Católicos en 1492.',
            kids: '¡El hombre que mandó construir esta sinagoga trajo madera especial desde un país muy lejano, el Líbano, cruzando el mar! Hoy dentro hay un museo que cuenta la historia de los judíos que vivieron en España durante cientos de años.'
          },
          legends: {
            adult: 'Samuel ha-Leví hizo grabar en los muros de su sinagoga alabanzas al rey Pedro I, a quien servía con lealtad como tesorero real. Pero su fortuna y su cercanía al monarca despertaron envidias: a principios de 1361 fue acusado de malversación, encarcelado y torturado hasta morir en las Atarazanas de Sevilla, sin haber logrado el perdón real. El hombre que construyó una de las joyas de Toledo murió sin poder disfrutarla.',
            kids: 'El hombre que mandó construir esta sinagoga tan bonita era muy importante y muy rico, y eso hizo que otras personas le tuvieran envidia. Al final tuvo muy mala suerte. Es una historia triste, pero su sinagoga sigue en pie y sigue siendo preciosa siglos después.'
          },
          architecture: {
            adult: 'Su Gran Sala de oración, de planta rectangular, conserva frisos policromados de yesería con motivos vegetales, geométricos, epigráficos en hebreo y heráldicos de la corona de Castilla —una combinación única que refleja la doble lealtad de Samuel ha-Leví, judío y servidor del rey cristiano. El artesonado de madera de alerce con incrustaciones de marfil corona el conjunto.',
            kids: '¡Mira las paredes de arriba a abajo! Tienen dibujos tallados en yeso: unos son de plantas, otros de formas geométricas y otros son letras hebreas. El techo de madera tiene decoraciones de marfil, ¡como si fuera una caja de joyas gigante!'
          },
          deepenFillers: {
            adult: [
              'El edificio conserva una larga inscripción en hebreo, tallada en yeso a lo largo de los muros de la sala principal, que alaba tanto a Dios como al rey Pedro I, mezclando así devoción religiosa y lealtad política en un mismo texto. Se trata de uno de los testimonios epigráficos hebreos más extensos y mejor conservados de toda la España medieval, y permite reconstruir con notable precisión el discurso con el que Samuel ha-Leví justificaba su cercanía al monarca cristiano.',
              'Aunque hoy se visita como museo y ya no acoge culto religioso, la sinagoga conserva su orientación original hacia Jerusalén, tal y como exige la tradición judía para el rezo, y el hueco donde antiguamente se guardaba el Arón, el armario o nicho que custodiaba los rollos de la Torá durante las ceremonias. Estos detalles, discretos pero esenciales, permiten a los visitantes imaginar cómo funcionaba realmente este espacio cuando todavía era un lugar vivo de culto judío.'
            ],
            kids: [
              '¡En las paredes hay un texto larguísimo escrito en hebreo hace más de 650 años, que alababa tanto a Dios como al rey! Es uno de los más largos que se conservan de aquella época en toda España. Gracias a él, los historiadores pueden saber exactamente cómo hablaba el hombre que construyó la sinagoga sobre su amistad con el rey. 📜',
              '¡La sinagoga todavía mira hacia Jerusalén, la ciudad sagrada, tal y como se construyó! Y se ve el huequito donde guardaban los libros sagrados, llamado Arón. Aunque ahora es un museo y ya no se reza aquí, estos detalles te ayudan a imaginar cómo era este lugar cuando de verdad venían los judíos a rezar. 🕎'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿De dónde trajo la madera para el techo el hombre que mandó construir esta sinagoga?',
            options: ['Del Líbano', 'De un bosque cerca de Toledo', 'De Italia'],
            correct: 0,
            reveal: '¡Del Líbano! 🌲 Samuel ha-Leví, tesorero del rey Pedro I, hizo traer cedros desde muy lejos, cruzando el mar, para el techo de la sinagoga.'
          },
          legends: {
            question: '¿Qué le pasó a Samuel ha-Leví, el hombre que mandó construir la sinagoga?',
            options: ['Vivió feliz en ella muchos años', 'Fue acusado y murió antes de poder disfrutarla', 'Se hizo todavía más rico'],
            correct: 1,
            reveal: 'Su riqueza y su cercanía al rey le trajeron envidias: lo acusaron y murió sin haber podido disfrutar de la joya que había construido. 😢'
          },
          architecture: {
            question: '¿Qué tipo de decoraciones cubren las paredes de la Gran Sala de oración?',
            options: ['Frisos tallados en yeso con motivos vegetales y hebreos', 'Pinturas al óleo', 'Mosaicos de cerámica azul'],
            correct: 0,
            reveal: '¡Frisos de yesería con plantas, formas geométricas y letras hebreas! 📜 Una combinación única que no se ve en ningún otro sitio.'
          }
        }
      },
      {
        id: 'hospital-tavera',
        name: {
          adult: 'Hospital de Tavera (Museo Duque de Lerma)',
          kids: 'Hospital de Tavera (Museo Duque de Lerma) — El Hospital del Retrato Fantasma 👻'
        },
        subtitle: {
          adult: 'Palacio renacentista con farmacia histórica intacta',
          kids: '¡Un cuadro pintado de un hombre que ya estaba muerto!'
        },
        category: CATEGORIES.HISTORY,
        coords: [39.8650, -4.0244],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Toledo_Capital_-_194_%2837538222744%29.jpg/330px-Toledo_Capital_-_194_%2837538222744%29.jpg',
        audio: {
          duration: 170,
          title: {
            adult: 'Audioguía: Hospital de Tavera',
            kids: '¡Aventura Sonora: El Hospital del Retrato Fantasma!'
          }
        },
        visitInfo: {
          hours: {
            adult: 'Martes a sábado 10:00-18:00, domingos 10:00-14:00. Cerrado los lunes. Se visita en grupo con un guía, en turnos cada hora.',
            kids: 'Abre de martes a sábado, y los domingos solo por la mañana. Los lunes está cerrado. Se visita con un guía, en grupo.'
          },
          price: {
            adult: '15€ visita guiada completa. Gratis para menores de 12 años.',
            kids: '15€, ¡pero gratis si tienes menos de 12 años!'
          },
          link: 'https://fundacionmedinaceli.org/monumentos/hospital-tavera/'
        },
        tabs: {
          history: {
            adult: 'Erigido a partir de 1541 por encargo del cardenal Juan Pardo de Tavera, con proyecto de Bartolomé de Bustamante continuado por Covarrubias y los Vergara, el hospital se sitúa extramuros, junto al antiguo camino real. Hoy funciona como Museo Duque de Lerma, con obras de El Greco, Ribera, Tintoretto y Sánchez Coello, además de una farmacia histórica que conserva su completa colección de tarros de cerámica de Talavera.',
            kids: '¡Este hospital lo construyó un cardenal hace casi 500 años! Ahora es un museo con cuadros muy famosos y con una farmacia antigua llena de tarros de cerámica pintados a mano, como los de las boticas de los cuentos.'
          },
          legends: {
            adult: 'El cardenal Tavera murió en 1545, casi 65 años antes de que El Greco pintara su célebre retrato para este mismo hospital. Como el pintor nunca llegó a conocerlo en vida, tuvo que basarse en la mascarilla mortuoria que el escultor Alonso Berruguete había realizado sobre el cadáver del cardenal para tallar su sepulcro. El resultado es uno de los retratos más inquietantes de El Greco: representa fielmente a un hombre que llevaba décadas muerto cuando el cuadro se pintó.',
            kids: '¡Hay un cuadro de un cardenal pintado por un pintor que nunca lo llegó a conocer, porque el cardenal ya se había muerto hacía muchísimos años! El pintor usó una máscara que habían hecho de la cara del cardenal después de morir para saber cómo pintarle. ¡Un retrato hecho sin haberlo visto nunca en persona!'
          },
          architecture: {
            adult: 'De planta rectangular dividida en dos patios simétricos por una iglesia central, el edificio es uno de los ejemplos más puros del Renacimiento español. Su fachada principal, obra de Bustamante, combina un severo orden clásico con un patio interior de doble arquería. La farmacia, con su mobiliario original de madera tallada, conserva intacta una de las boticas históricas más completas de España.',
            kids: '¡Este edificio tiene dos patios idénticos, como si fuera un espejo, con una iglesia justo en el medio! En la farmacia hay armarios de madera tallada llenos de tarros antiguos — ¡algunos todavía tienen pintado el nombre de la medicina que guardaban!'
          },
          deepenFillers: {
            adult: [
              'El propio cardenal Tavera dejó dispuesto en su testamento que sus restos descansaran bajo el altar mayor de la iglesia del hospital que él mismo había fundado, en un sepulcro de mármol esculpido por Alonso Berruguete y considerado una de las obras cumbre de este escultor. La figura yacente del cardenal, tallada con extraordinario realismo, transmite una sensación de serenidad que contrasta con la crudeza del retrato pintado por El Greco a partir de su mascarilla mortuoria.',
              'El hospital se sitúa deliberadamente extramuros, junto al antiguo camino real de entrada a Toledo, siguiendo una práctica sanitaria habitual en la época para mantener alejados del núcleo urbano a los enfermos contagiosos y evitar así la propagación de epidemias dentro de la ciudad amurallada. Esta ubicación periférica, pensada originalmente por razones de salud pública, terminó convirtiéndose con los siglos en una ventaja estética añadida, al rodear el edificio de espacio abierto y buenas vistas.'
            ],
            kids: [
              '¡El cardenal que mandó construir este hospital está enterrado justo debajo del altar de su iglesia, en una tumba de mármol tallada por un escultor famoso! La estatua de piedra que lo representa parece dormir tranquilamente, tallada con muchísimo detalle. Es una de las obras más bonitas de ese escultor, ¡y está aquí mismo, en el hospital que el cardenal ayudó a crear! ⚰️',
              '¡El hospital se construyó fuera de las murallas a propósito, para mantener alejados de la ciudad a los enfermos que podían contagiar a otros! Así evitaban que las enfermedades se extendieran por todo Toledo. Con el paso del tiempo, estar fuera de las murallas también resultó bueno por otra razón: el hospital quedó rodeado de espacio abierto y bonitas vistas. 🏥'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Qué cardenal encargó la construcción de este hospital en 1541?',
            options: ['Juan Pardo de Tavera', 'Pedro González de Mendoza', 'Francisco Jiménez de Cisneros'],
            correct: 0,
            reveal: '¡El cardenal Juan Pardo de Tavera! 🏛️ Hoy el edificio es el Museo Duque de Lerma, con obras de El Greco, Ribera y Tintoretto.'
          },
          legends: {
            question: '¿Cómo pudo El Greco pintar el retrato del cardenal Tavera si nunca lo conoció en vida?',
            options: ['Usando la mascarilla mortuoria del cardenal', 'Copiando otro retrato antiguo', 'Preguntando a su familia cómo era'],
            correct: 0,
            reveal: '¡Usando su mascarilla mortuoria! 👻 El cardenal llevaba casi 65 años muerto cuando El Greco pintó uno de sus retratos más inquietantes.'
          },
          architecture: {
            question: '¿Cómo se organiza la planta del edificio, dividida por una iglesia central?',
            options: ['En dos patios simétricos', 'En un único patio circular', 'En tres torres separadas'],
            correct: 0,
            reveal: '¡En dos patios simétricos! 🏛️ Es uno de los ejemplos más puros del Renacimiento español, con fachada de Bustamante.'
          }
        }
      },
      {
        id: 'calle-comercio',
        name: {
          adult: 'Calle del Comercio (Calle Ancha)',
          kids: 'Calle del Comercio (Calle Ancha) — La Calle del Tesoro Escondido 📜'
        },
        subtitle: {
          adult: 'La arteria comercial e histórica del casco antiguo',
          kids: '¡Aquí Cervantes dice que encontró el Quijote!'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'juderia', order: 5 },
        coords: [39.8585, -4.0233],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Toledo%2C_Calle_del_Comercio-PM_65607.jpg/330px-Toledo%2C_Calle_del_Comercio-PM_65607.jpg',
        audio: {
          duration: 152,
          title: {
            adult: 'Audioguía: Calle del Comercio',
            kids: '¡Aventura Sonora: La Calle del Tesoro Escondido!'
          }
        },
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (calle pública); las tiendas suelen abrir de 10:00 a 20:00.', kids: '¡Se puede pasear por aquí en cualquier momento!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
        tabs: {
          history: {
            adult: 'Conocida popularmente como Calle Ancha, une la Plaza de Zocodover con la Plaza de las Cuatro Calles, antiguo emplazamiento de la Alcaná, el mercado judío donde trabajaban cambistas, prestamistas y plateros hebreos. En el siglo XIX recibió su nombre oficial de Calle del Comercio, en referencia a los numerosos gremios que allí ejercían su actividad, tradición artesanal que continúa hoy con los talleres de damasquinado.',
            kids: '¡Esta calle une la plaza de Zocodover con otra plaza más antigua, donde antes había un mercado judío! Con el tiempo se llenó de tiendas de todo tipo, y todavía hoy puedes ver artesanos haciendo dibujos de oro sobre metal, una técnica que se llama damasquinado.'
          },
          legends: {
            adult: 'En el capítulo IX de "El Quijote", Cervantes cuenta que un muchacho vendía en la Alcaná unos viejos cartapacios escritos en árabe; intrigado, los compró y contrató a un morisco para que se los tradujera en su propia casa. Aquel supuesto manuscrito, obra de un tal Cide Hamete Benengeli, sería el origen ficticio de toda la historia de Don Quijote. Es decir: según el propio Cervantes, la novela más importante de la lengua española nació de un hallazgo callejero justo en esta calle.',
            kids: '¡Cervantes, el escritor de Don Quijote, contó que encontró el manuscrito original de su libro en esta misma calle, escrito en árabe por un tal Cide Hamete! Dijo que compró los papeles a un niño y pagó a alguien para que se los tradujera. ¡Imagina que el libro más famoso de España empezara con un hallazgo callejero!'
          },
          architecture: {
            adult: 'Es una calle estrecha y sinuosa, típica del trazado urbano medieval toledano, flanqueada por fachadas de distintas épocas que combinan comercios de planta baja con viviendas en altura. El damasquinado —incrustaciones de hilo de oro y plata sobre acero, técnica de origen califal que toma su nombre de Damasco— sigue practicándose en talleres artesanales a lo largo de todo su recorrido.',
            kids: '¡Fíjate en los escaparates de las tiendas! Muchas venden objetos de metal negro con dibujos de hilo de oro clavados encima. Se llama damasquinado, ¡y los artesanos llevan haciéndolo en Toledo desde hace más de 1.000 años!'
          },
          deepenFillers: {
            adult: [
              'Durante siglos, la Alcaná funcionó como un espacio comercial donde convivían comerciantes judíos y cristianos, compartiendo puestos, clientes y calle en pleno corazón de la Toledo medieval, en un ejemplo cotidiano de la llamada convivencia entre las tres culturas. Aquella mezcla comercial no estuvo exenta de tensiones a lo largo de los siglos, pero durante largos periodos funcionó con normalidad, hasta que los sucesivos episodios de intolerancia religiosa fueron cerrando ese espacio de convivencia compartida.',
              'Algunos de los talleres de damasquinado que hoy se ven a lo largo de la calle llevan varias generaciones de la misma familia trabajando el mismo oficio, transmitiendo la técnica de padres a hijos sin necesidad de escuela ni manual escrito, solo observando y practicando durante años en el propio taller familiar. Este tipo de transmisión oral y práctica es habitual en los oficios artesanales toledanos, y explica por qué cada familia conserva pequeños secretos propios en el acabado final.'
            ],
            kids: [
              '¡En esta calle, hace muchos siglos, los comerciantes judíos y cristianos vendían sus cosas codo con codo, compartiendo la misma calle y los mismos clientes! Era un buen ejemplo de cómo convivían distintas religiones en el Toledo medieval. Aunque a veces había problemas, durante mucho tiempo todos trabajaron juntos aquí sin más. 🤝',
              '¡Algunos talleres de esta calle llevan varias generaciones de la misma familia haciendo damasquinado, pasando el secreto de padres a hijos! No lo aprenden en ningún libro: los niños de la familia van mirando y practicando en el propio taller durante años, hasta que se les da tan bien como a sus padres. 👨‍👦'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Qué mercado ocupaba antiguamente la zona de la Plaza de las Cuatro Calles, junto a esta calle?',
            options: ['La Alcaná, mercado judío', 'Un mercado de esclavos', 'Un mercado de ganado'],
            correct: 0,
            reveal: '¡La Alcaná! 💰 Era el mercado judío donde trabajaban cambistas, prestamistas y plateros hebreos, antes de que la calle se llamara "del Comercio".'
          },
          legends: {
            question: 'Según cuenta el propio Cervantes, ¿qué compró en la Alcaná antes de escribir El Quijote?',
            options: ['Unos viejos cartapacios escritos en árabe', 'Una espada toledana', 'Un mapa antiguo de la ciudad'],
            correct: 0,
            reveal: '¡Unos cartapacios en árabe! 📜 Cervantes contó que los mandó traducir, y de ahí surgió, según él, la historia de Cide Hamete Benengeli.'
          },
          architecture: {
            question: '¿De dónde viene el nombre de la técnica del damasquinado, que todavía se practica en esta calle?',
            options: ['De la ciudad de Damasco', 'Del apellido de un artesano toledano', 'De la palabra árabe para "oro"'],
            correct: 0,
            reveal: '¡De Damasco! 🪡 Es una técnica de incrustar hilo de oro y plata sobre acero, de origen califal, que los talleres toledanos mantienen viva desde hace siglos.'
          }
        }
      },
      {
        id: 'puerta-del-sol-toledo',
        name: {
          adult: 'Puerta del Sol',
          kids: 'Puerta del Sol — La Puerta del Sol y la Luna ☀️🌙'
        },
        subtitle: {
          adult: 'Puerta mudéjar del siglo XIV con arcos entrelazados',
          kids: '¡Tiene un sol y una luna tallados en piedra!'
        },
        category: CATEGORIES.HISTORY,
        coords: [39.8611, -4.0240],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Toledo_-_Puerta_del_Sol_1.jpg/330px-Toledo_-_Puerta_del_Sol_1.jpg',
        audio: {
          duration: 150,
          title: {
            adult: 'Audioguía: Puerta del Sol',
            kids: '¡Aventura Sonora: La Puerta del Sol y la Luna!'
          }
        },
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (puerta exterior integrada en las murallas).', kids: '¡Se puede visitar en cualquier momento, no tiene horario!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
        tabs: {
          history: {
            adult: 'Construida en el último cuarto del siglo XIV por los Caballeros Hospitalarios sobre una antigua torre defensiva de origen romano, más tarde reforzada durante la época islámica, la Puerta del Sol es uno de los mejores ejemplos de arquitectura militar mudéjar de Toledo. Su reforma definitiva se enmarca en el impulso constructivo del arzobispo Pedro Tenorio tras la guerra civil entre Pedro I y Enrique de Trastámara.',
            kids: '¡Esta puerta empezó siendo una simple torre romana hace 2.000 años! Después los musulmanes la hicieron más grande y fuerte, y por último los cristianos le dieron la forma que tiene hoy, hace más de 600 años.'
          },
          legends: {
            adult: 'En el arco interior se conserva un gran medallón de mármol que representa la Imposición de la Casulla: el momento en que, según la tradición, la Virgen María descendió a la Catedral de Toledo para entregar personalmente una casulla a San Ildefonso como premio por su devoción mariana. Sobre esta escena se añadieron en el siglo XVIII las figuras del Sol y la Luna que finalmente dieron nombre a la puerta.',
            kids: '¡Mira el dibujo tallado en piedra dentro del arco! Cuenta una leyenda muy famosa de Toledo: dicen que la Virgen María bajó del cielo para regalarle personalmente una prenda a un santo llamado Ildefonso. Arriba del todo, fíjate en el sol y la luna — ¡de ahí viene el nombre de la puerta!'
          },
          architecture: {
            adult: 'De planta rectangular rematada en semicírculo, combina un gran arco apuntado exterior con un arco de herradura interior rodeado de arquerías lobuladas entrelazadas, todo ello construido en sillería, mampostería y ladrillo. Sus almenas y su friso decorativo son un ejemplo notable de cómo la arquitectura militar cristiana adoptó plenamente el repertorio decorativo islámico en el Toledo bajomedieval.',
            kids: '¡Cuenta cuántos arcos distintos hay, uno dentro de otro! Los de arriba parecen entrelazados como un collar de piedra. Las almenas de arriba servían para que los soldados se escondieran detrás mientras vigilaban.'
          },
          deepenFillers: {
            adult: [
              'A diferencia de otras puertas de Toledo pensadas sobre todo para la defensa militar, la Puerta del Sol tiene un marcado carácter simbólico y devocional, evidente en el gran medallón religioso que preside su arco interior. Esta combinación de función defensiva y mensaje religioso no era casual: quien atravesaba la puerta recibía al mismo tiempo protección física y un recordatorio visual de la devoción mariana propia de la ciudad, reforzando el vínculo entre poder militar y espiritual tan característico del Toledo medieval.',
              'Su decoración de arquerías lobuladas entrelazadas recuerda inevitablemente a la de la Mezquita de Córdoba, aunque aquí se construyó siglos después, ya en plena época cristiana, como una suerte de homenaje tardío al refinado repertorio decorativo andalusí. Este fenómeno, lejos de ser una excepción, fue habitual en el Toledo bajomedieval: los artesanos mudéjares que trabajaban para los cristianos seguían empleando las formas y técnicas heredadas de la tradición islámica, dando lugar a un estilo propio, mestizo y singular.'
            ],
            kids: [
              '¡Esta puerta no es solo para defenderse, también tiene un dibujo religioso muy importante tallado en piedra! Es más especial que otras puertas de Toledo porque combina dos cosas: protegía la ciudad de los ataques y, al mismo tiempo, recordaba a quien entraba una historia religiosa muy querida por los toledanos. ¡Como una puerta con doble trabajo! 👼',
              '¡Sus arcos entrelazados se parecen a los de la mezquita más famosa de España, aunque esta puerta se construyó siglos después, ya con los cristianos! Los artesanos que trabajaban para los reyes cristianos seguían usando las formas bonitas que habían aprendido de los musulmanes, mezclando estilos distintos. ¡Así nació un estilo propio de Toledo, muy especial! 🕌'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Sobre qué tipo de construcción se levanta la Puerta del Sol?',
            options: ['Una antigua torre defensiva romana', 'Un antiguo mercado', 'Un antiguo cementerio'],
            correct: 0,
            reveal: '¡Sobre una torre romana! 🏛️ Los Caballeros Hospitalarios la reconstruyeron en el siglo XIV, en uno de los mejores ejemplos de arquitectura militar mudéjar.'
          },
          legends: {
            question: '¿Qué escena tallada en mármol se conserva en el arco interior de la puerta?',
            options: ['La Imposición de la Casulla a San Ildefonso', 'La coronación de un rey', 'Una batalla contra los musulmanes'],
            correct: 0,
            reveal: 'La Imposición de la Casulla. 👼 Cuenta que la Virgen bajó a Toledo para entregar personalmente una prenda a San Ildefonso.'
          },
          architecture: {
            question: '¿Qué dos figuras se añadieron en el siglo XVIII sobre la escena tallada, dando nombre a la puerta?',
            options: ['El Sol y la Luna', 'Dos ángeles', 'Un león y un águila'],
            correct: 0,
            reveal: '¡El Sol y la Luna! ☀️🌙 Se añadieron sobre el medallón de mármol, y de ahí viene el nombre que conocemos hoy.'
          }
        }
      },
      {
        id: 'museo-concilios-san-roman',
        name: {
          adult: 'Museo de los Concilios y la Cultura Visigoda',
          kids: 'Museo de los Concilios y la Cultura Visigoda — La Iglesia de las Coronas de Oro 👑'
        },
        subtitle: {
          adult: 'Antigua iglesia de San Román con tesoro visigodo',
          kids: '¡Guarda copias de coronas de reyes de hace 1.400 años!'
        },
        category: CATEGORIES.HISTORY,
        coords: [39.8583, -4.0269],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Toledo_-_San_Roman_-_Museo_de_los_Concilios_y_de_la_Cultura_Visigoda_2.jpg/330px-Toledo_-_San_Roman_-_Museo_de_los_Concilios_y_de_la_Cultura_Visigoda_2.jpg',
        audio: {
          duration: 158,
          title: {
            adult: 'Audioguía: Museo de los Concilios',
            kids: '¡Aventura Sonora: La Iglesia de las Coronas de Oro!'
          }
        },
        visitInfo: {
          hours: { adult: 'Martes a sábado 10:00-14:00 y 16:00-18:00; domingos 9:00-15:00. Cerrado los lunes.', kids: 'Abre de martes a domingo. Los lunes está cerrado.' },
          price: { adult: 'Entrada gratuita (de forma temporal).', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
        tabs: {
          history: {
            adult: 'Esta iglesia mudéjar del siglo XIII, consagrada en 1221, fue escenario en 1166 de la proclamación como rey de Alfonso VIII de Castilla, con el alzamiento de su pendón desde la torre. Desde 1968 alberga el Museo de los Concilios y la Cultura Visigoda, con piezas arqueológicas de los siglos VI al VIII y réplicas de las coronas votivas del célebre Tesoro de Guarrazar, halladas cerca de Toledo en el siglo XIX.',
            kids: '¡En esta iglesia, hace casi 900 años, se proclamó rey a un niño desde lo alto de la torre! Hoy dentro hay un museo con copias de coronas de oro de reyes visigodos que vivieron aquí hace más de 1.400 años.'
          },
          legends: {
            adult: 'El Tesoro de Guarrazar, del que este museo conserva réplicas, fue descubierto por casualidad en 1858 por dos vecinos que buscaban leña en un huerto cercano a Toledo. Entre las piezas apareció la corona votiva del rey visigodo Recesvinto, con su nombre grabado en letras colgantes de oro y zafiros. Las piezas originales se dispersaron entre Madrid y París, pero sus réplicas devolvieron a Toledo el recuerdo de aquel hallazgo excepcional.',
            kids: '¡Unas coronas de oro de reyes que vivieron hace 1.400 años se encontraron por casualidad, enterradas en un huerto cerca de Toledo! Dos personas que buscaban leña las descubrieron sin querer. Las coronas de verdad están ahora en otros museos, pero aquí puedes ver copias exactas.'
          },
          architecture: {
            adult: 'De planta basilical con tres naves separadas por arcos de herradura sobre columnas romanas y visigodas reaprovechadas, conserva en sus muros pinturas murales del último cuarto del siglo XIII consideradas las más meridionales de estilo románico en toda la península. Su torre mudéjar, con vanos agrupados de dos y tres huecos, sirvió de modelo a otras torres toledanas posteriores.',
            kids: '¡Fíjate en las columnas! Son romanas y visigodas, reaprovechadas de otro edificio todavía más antiguo. En las paredes hay pinturas de hace más de 700 años, con santos y escenas religiosas. ¡Casi parece un libro de dibujos gigante pintado en la pared!'
          },
          deepenFillers: {
            adult: [
              'El nombre "Museo de los Concilios" recuerda que Toledo fue sede de importantes concilios de la Iglesia visigoda entre los siglos VI y VII, reuniones periódicas de obispos y nobles que sentaron buena parte de las bases legales y religiosas del reino, desde cuestiones puramente doctrinales hasta decisiones políticas de gran calado, como la sucesión al trono. Aquellos concilios convirtieron a Toledo, durante generaciones, en la auténtica capital espiritual y legislativa de la España visigoda.',
              'Entre las piezas originales que sí conserva el museo, más allá de las réplicas del Tesoro de Guarrazar, hay inscripciones visigodas en piedra que documentan nombres propios y fechas concretas de aquella época, un tipo de testimonio directo poco frecuente en otros yacimientos peninsulares de los siglos VI a VIII. Estas inscripciones son especialmente valiosas para los historiadores, porque permiten fechar con precisión otros hallazgos arqueológicos similares encontrados sin contexto claro en otras partes de España.'
            ],
            kids: [
              '¡El nombre del museo viene de unas reuniones importantísimas que se hacían en Toledo hace 1400 años, cuando los obispos y los reyes visigodos se juntaban para decidir las leyes del reino! No solo hablaban de religión, también decidían cosas de política, como quién sería el próximo rey. Toledo era entonces como la capital de todas esas decisiones. 📜',
              '¡El museo también tiene piedras de verdad con nombres y fechas escritas hace 1400 años, no solo copias de las coronas! Estas piedras ayudan mucho a los historiadores, porque gracias a ellas pueden saber con seguridad de qué año son otras cosas antiguas parecidas que se encuentran en otros lugares de España. 🪨'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Qué rey fue proclamado en esta iglesia en el año 1166?',
            options: ['Alfonso VIII de Castilla', 'Alfonso X el Sabio', 'Fernando III el Santo'],
            correct: 0,
            reveal: '¡Alfonso VIII de Castilla! 👑 Se alzó su pendón desde la torre. Hoy el edificio alberga el Museo de los Concilios y la Cultura Visigoda.'
          },
          legends: {
            question: '¿Cómo se descubrió el Tesoro de Guarrazar, del que este museo guarda réplicas?',
            options: ['Por casualidad, buscando leña en un huerto', 'Excavando a propósito con arqueólogos', 'Dentro de una tumba real'],
            correct: 0,
            reveal: '¡Por casualidad! 🪓 Dos vecinos que buscaban leña encontraron las coronas votivas de reyes visigodos, entre ellas la de Recesvinto.'
          },
          architecture: {
            question: '¿De qué épocas son las columnas reutilizadas que sostienen los arcos de herradura del interior?',
            options: ['Romana y visigoda', 'Solo del siglo XX', 'Árabe y renacentista'],
            correct: 0,
            reveal: '¡Romana y visigoda! 🏛️ Sus pinturas murales del siglo XIII son además las más meridionales de estilo románico de toda la península.'
          }
        }
      },
      {
        id: 'paseo-transito',
        name: {
          adult: 'Paseo del Tránsito',
          kids: 'Paseo del Tránsito — El Paseo de los Huertos Secretos 🌳'
        },
        subtitle: {
          adult: 'Mirador tranquilo sobre el valle del Tajo',
          kids: '¡Un paseo tranquilo con vistas al río!'
        },
        category: CATEGORIES.HIDDEN,
        coords: [39.8555, -4.0288],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Paseo_del_Tr%C3%A1nsito%2C_Toledo.jpg/330px-Paseo_del_Tr%C3%A1nsito%2C_Toledo.jpg',
        audio: {
          duration: 130,
          title: {
            adult: 'Audioguía: Paseo del Tránsito',
            kids: '¡Aventura Sonora: El Paseo de los Huertos Secretos!'
          }
        },
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (paseo público al aire libre).', kids: '¡Se puede pasear por aquí en cualquier momento!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
        tabs: {
          history: {
            adult: 'En la Edad Media, esta zona era conocida como Montichel, uno de los arrabales situados fuera de la muralla que delimitaba la primera judería de Toledo, de la que aún se conservan restos integrados en el paisaje urbano actual. En el siglo XIX se explanó y ajardinó sobre las ruinas de un antiguo caserío, dando lugar al paseo peatonal que hoy conecta la Sinagoga del Tránsito con la Casa-Museo de El Greco.',
            kids: '¡Hace muchísimos años, aquí había casas fuera de las murallas de Toledo! Con el tiempo las quitaron y pusieron jardines. Hoy es un paseo tranquilo que va desde una sinagoga hasta la casa de un pintor muy famoso.'
          },
          legends: {
            adult: 'Bajo el pavimento y los jardines actuales se ocultan restos de la muralla más antigua de la judería toledana, anterior incluso al gran barrio judío medieval que conocemos. Muchos visitantes pasan junto a ellos sin reparar en su existencia: son fáciles de confundir con simples muros de contención, y solo un ojo atento distingue su antigüedad real.',
            kids: '¡Debajo de este paseo hay restos de una muralla muy, muy antigua, de cuando Toledo era todavía más pequeña! Mucha gente pasa por aquí sin darse cuenta de que están pisando historia escondida. ¿Serás tú capaz de encontrarla?'
          },
          architecture: {
            adult: 'Es un paseo arbolado y completamente peatonal, con barandillas de piedra desde las que se domina el valle del Tajo y, al otro lado del río, la zona de los Cigarrales. Su trazado sinuoso, ajardinado en el siglo XIX, contrasta deliberadamente con la densidad medieval del resto del barrio judío, ofreciendo un respiro verde dentro del casco histórico.',
            kids: '¡Apóyate en la barandilla de piedra y mira al otro lado del río! Se ve una zona llena de casas con jardines, llamadas Cigarrales. Este paseo tiene árboles y bancos, perfecto para descansar un rato mientras caminas por Toledo.'
          },
          deepenFillers: {
            adult: [
              'El paseo discurre por encima del trazado de una antigua muralla que en el siglo XI separaba la judería del resto de la ciudad, un límite físico y también simbólico, ya que marcaba dónde terminaba la jurisdicción propia de la comunidad judía y empezaba la ciudad cristiana o musulmana circundante. Aunque hoy es completamente invisible bajo el pavimento y los jardines, ese límite marcó durante siglos la vida cotidiana de sus habitantes, condicionando movimientos, horarios y hasta relaciones vecinales.',
              'Al atardecer, cuando la luz rasante define mejor el relieve del terreno, este paseo es uno de los pocos puntos de Toledo desde los que se aprecia con claridad cómo la ciudad entera se asienta sobre un meandro casi cerrado del Tajo, una circunstancia geográfica clave en su papel histórico como fortaleza natural prácticamente inexpugnable. Esa protección natural del río explica en buena medida por qué Toledo fue durante siglos una capital tan difícil de conquistar por la fuerza.'
            ],
            kids: [
              '¡Este paseo pasa justo por encima de donde antes había una muralla que separaba el barrio judío del resto de la ciudad, hace casi 1000 años! Esa muralla marcaba dónde terminaba un barrio y empezaba el otro, y la gente tenía que respetarla en su día a día. Hoy no se ve nada de ella, ¡pero está ahí escondida bajo tus pies! 🧱',
              '¡Desde aquí se ve muy bien cómo el río Tajo rodea casi toda la ciudad, como un abrazo de agua! Al atardecer se nota todavía mejor, porque la luz del sol dibuja bien las formas del terreno. Por eso Toledo era tan difícil de atacar: el río hacía de muralla natural casi por todas partes. 🌊'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Cómo se conocía esta zona en la Edad Media?',
            options: ['Montichel', 'La Alcaná', 'El Miradero'],
            correct: 0,
            reveal: '¡Montichel! 🏘️ Era uno de los arrabales fuera de la muralla de la primera judería de Toledo, hoy convertido en un paseo ajardinado.'
          },
          legends: {
            question: '¿Qué se esconde bajo el pavimento y los jardines de este paseo?',
            options: ['Restos de la muralla más antigua de la judería', 'Un antiguo teatro romano', 'Una fuente subterránea'],
            correct: 0,
            reveal: '¡Restos de una muralla muy antigua! 🧱 Muchos visitantes pasan junto a ellos sin darse cuenta, confundiéndolos con simples muros de contención.'
          },
          architecture: {
            question: '¿Qué zona se puede contemplar al otro lado del río Tajo desde la barandilla de este paseo?',
            options: ['Los Cigarrales', 'El Alcázar', 'La Vega Baja'],
            correct: 0,
            reveal: '¡Los Cigarrales! 🌳 Este paseo arbolado y peatonal, ajardinado en el siglo XIX, ofrece un respiro verde en pleno barrio judío.'
          }
        }
      },
      {
        id: 'hospital-santa-cruz',
        name: {
          adult: 'Antiguo Hospital de la Santa Cruz',
          kids: 'Antiguo Hospital de la Santa Cruz — El Palacio de la Cruz Gigante ✝️'
        },
        subtitle: {
          adult: 'Obra cumbre del plateresco español',
          kids: '¡Todo el edificio tiene forma de cruz!'
        },
        category: CATEGORIES.HISTORY,
        coords: [39.8597, -4.0201],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/FP_Toledo_2025_-_Santa_Cruz_Museum_-_Fa%C3%A7ade.jpg/330px-FP_Toledo_2025_-_Santa_Cruz_Museum_-_Fa%C3%A7ade.jpg',
        audio: {
          duration: 162,
          title: {
            adult: 'Audioguía: Hospital de la Santa Cruz',
            kids: '¡Aventura Sonora: El Palacio de la Cruz Gigante!'
          }
        },
        visitInfo: {
          hours: { adult: 'Lunes a sábado 10:00-18:30, domingos 10:00-14:00.', kids: 'Abre todos los días, por la mañana y la tarde (domingos solo por la mañana).' },
          price: { adult: '4€ entrada general, aunque actualmente es gratuita de forma temporal. Siempre gratis miércoles desde las 16:00, domingos, y para menores de 18, mayores de 65 y otros colectivos.', kids: '¡Ahora mismo es gratis para todos! Y siempre lo es los domingos y los miércoles por la tarde.' }
        },
        tabs: {
          history: {
            adult: 'Fundado por el cardenal Pedro González de Mendoza, que obtuvo la bula papal en 1494 para levantar un hospital dedicado a acoger a niños huérfanos y desamparados de la ciudad, aunque murió en enero de 1495 sin llegar a ver comenzar las obras. Se construyó en dos fases: la primera, entre 1504 y 1514, a cargo de Enrique y Antón Egas; la segunda, ya avanzado el siglo XVI, con Alonso de Covarrubias completando la fachada y el patio principal.',
            kids: '¡Un cardenal muy importante mandó construir este hospital para cuidar a niños que no tenían familia! Por desgracia murió antes de que empezaran a construirlo. Tardaron más de 30 años en terminarlo entre varios arquitectos distintos.'
          },
          legends: {
            adult: 'El cardenal Mendoza, apodado en su época "el tercer rey de España" por su enorme influencia junto a los Reyes Católicos, tuvo también tres hijos con Mencía de Lemos, dama de la corte, pese a su condición eclesiástica. La propia reina Isabel la Católica, que legitimó a los hijos del cardenal otorgándoles títulos nobiliarios, los llamaba con cariño "los hermosos pecados del cardenal".',
            kids: '¡El cardenal que mandó construir este hospital era tan importante que le llamaban "el tercer rey de España"! La reina Isabel la Católica le tenía mucho aprecio, ¡e incluso ayudó con cariño a su familia!'
          },
          architecture: {
            adult: 'Por expreso deseo de Mendoza, el edificio se organiza en planta de cruz griega, una tipología de clara influencia italiana muy innovadora para su época en Castilla. Su fachada plateresca, obra de Covarrubias, y su escalera de tres tramos se cuentan entre los conjuntos más refinados de este estilo en España, situando al Hospital de Santa Cruz entre los dos monumentos platerescos más antiguos del país.',
            kids: '¡Si lo miras desde arriba, todo el edificio tiene forma de cruz! Fue una idea muy moderna para la época en que se construyó. Fíjate en la fachada de piedra tallada — ¡tiene tantos dibujos que parece de encaje!'
          },
          deepenFillers: {
            adult: [
              'El edificio funcionó ininterrumpidamente como hospital de expósitos y hospicio infantil hasta bien entrado el siglo XX, cumpliendo durante más de cuatrocientos años la función benéfica para la que lo concibió el cardenal Mendoza. Solo se convirtió en museo, tal y como se conoce hoy, tras el traslado de sus funciones asistenciales a otras instalaciones más modernas de la ciudad, cerrando así uno de los capítulos de asistencia social más largos y continuados de toda la historia toledana.',
              'Su fachada plateresca incluye, entre la profusa decoración vegetal y heráldica, medallones esculpidos con los bustos del propio cardenal Mendoza y de los Reyes Católicos, dejando constancia visual y permanente de quiénes fueron los patrocinadores e impulsores de esta obra benéfica. Este tipo de retratos en piedra, frecuentes en la arquitectura religiosa y hospitalaria de la época, cumplían una doble función: honrar a los fundadores y recordar a generaciones futuras el origen y el propósito último del edificio.'
            ],
            kids: [
              '¡Este edificio fue un hospital para niños de verdad hasta hace relativamente poco tiempo, no siempre fue un museo! Durante más de 400 años, cuidó a niños que no tenían familia, cumpliendo exactamente lo que el cardenal Mendoza había querido. Solo se convirtió en museo cuando trasladaron a los niños a otro edificio más moderno. 👶',
              '¡En la fachada, entre tanta decoración tallada, hay retratos de piedra del cardenal y de los Reyes Católicos que lo hicieron posible! Los pusieron ahí a propósito, para que nadie olvidara nunca quién había ayudado a construir este hospital tan importante para los niños de Toledo. 👑'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Llegó a ver el cardenal Mendoza el hospital terminado?',
            options: ['No, murió antes de que empezaran las obras', 'Sí, vivió allí muchos años', 'Sí, pero solo vio los cimientos'],
            correct: 0,
            reveal: 'No llegó a verlo. 😢 Obtuvo la bula papal en 1494 pero murió en enero de 1495, antes de que empezaran las obras.'
          },
          legends: {
            question: '¿Cómo llamaba con cariño la reina Isabel la Católica a los hijos del cardenal Mendoza?',
            options: ['"Los hermosos pecados del cardenal"', '"Los príncipes de Toledo"', '"Los guardianes de la cruz"'],
            correct: 0,
            reveal: '¡"Los hermosos pecados del cardenal"! 👑 Isabel la Católica los legitimó otorgándoles títulos nobiliarios, pese a la condición eclesiástica de su padre.'
          },
          architecture: {
            question: '¿Qué forma tiene la planta del Hospital de Santa Cruz, por expreso deseo de Mendoza?',
            options: ['Cruz griega', 'Círculo', 'Cuadrado perfecto'],
            correct: 0,
            reveal: '¡Cruz griega! ✝️ Era una tipología muy innovadora para su época en Castilla, y su fachada plateresca es de las más refinadas de España.'
          }
        }
      },
      {
        id: 'ermita-valle',
        name: {
          adult: 'Ermita del Valle (Santuario de Nuestra Señora del Valle)',
          kids: 'Ermita del Valle (Santuario de Nuestra Señora del Valle) — La Ermita de la Romería 🌸'
        },
        subtitle: {
          adult: 'Centro de la romería más querida de los toledanos',
          kids: '¡Cada 1 de mayo, todo Toledo viene de fiesta aquí!'
        },
        category: CATEGORIES.HISTORY,
        coords: [39.8508, -4.0206],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Puerta_de_la_Ermita_Nuestra_Se%C3%B1ora_del_Valle_%28Toledo%29.jpg/330px-Puerta_de_la_Ermita_Nuestra_Se%C3%B1ora_del_Valle_%28Toledo%29.jpg',
        audio: {
          duration: 145,
          title: {
            adult: 'Audioguía: Ermita del Valle',
            kids: '¡Aventura Sonora: La Ermita de la Romería!'
          }
        },
        visitInfo: {
          hours: { adult: 'El interior solo suele abrir durante la romería (en torno al 1 de mayo) y en horario de misa; el exterior y su entorno son visitables en cualquier momento.', kids: 'Por fuera se puede ver siempre, ¡pero por dentro solo se abre en la fiesta de la romería!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
        tabs: {
          history: {
            adult: 'Se cree que el primer edificio religioso en este lugar data del año 610, cuando el rey visigodo Gundemaro habría fundado un monasterio dedicado a San Félix de Gerona. La ermita actual se construyó en 1674, sobre los restos de aquella primitiva fundación y de una posterior ermita de San Pedro de Saelices. Desde 1631, la tradicional romería en honor a la Virgen del Valle se celebra cada 1 de mayo, tras trasladarse desde su fecha original de agosto para evitar el calor.',
            kids: '¡Se cree que aquí hubo un templo religioso hace más de 1.400 años, en tiempos de los reyes visigodos! La ermita que ves hoy es más nueva, de hace unos 350 años. Cada 1 de mayo, toda la ciudad de Toledo viene aquí de romería a celebrar.'
          },
          legends: {
            adult: 'La tradición liga el origen de este lugar a San Félix, un mártir de Gerona del siglo IV cuya devoción, según cuenta la leyenda local, habría llegado hasta Toledo llevada por el propio rey Gundemaro. Con los siglos, el culto original a este santo casi olvidado se transformó en la devoción mariana que hoy convoca cada primavera a miles de toledanos en la romería más multitudinaria de la ciudad.',
            kids: '¡Cuentan que hace más de 1.400 años, un rey trajo hasta aquí la devoción a un santo de un lugar muy lejano! Con el paso de los siglos, la gente empezó a venerar más a la Virgen del Valle, y hoy es la fiesta más grande y bonita de todo Toledo.'
          },
          architecture: {
            adult: 'Tras sucesivas ampliaciones, presenta una planta de tres naves con elementos decorativos de distintas épocas, entre los que destacan azulejos ornamentales en los zócalos y una reja de forja obra del artesano Julio Pascual. Su ubicación, en la ladera opuesta al casco histórico, la convierte en punto de partida natural para contemplar la silueta completa de Toledo desde el cercano Mirador del Valle.',
            kids: '¡Fíjate en los azulejos de colores en la parte de abajo de las paredes! También hay una reja de hierro forjado muy trabajada. Este lugar está justo al lado del mirador con las mejores vistas de todo Toledo.'
          },
          deepenFillers: {
            adult: [
              'La romería del 1 de mayo incluye tradicionalmente una procesión con la imagen de la Virgen del Valle, que recorre los alrededores de la ermita acompañada por cientos de toledanos vestidos de romería, entre cánticos y música popular. Es uno de los momentos más multitudinarios y esperados del calendario festivo toledano, comparable en importancia sentimental a las grandes procesiones de Semana Santa, aunque con un carácter mucho más campestre y familiar que el de las celebraciones del casco histórico.',
              'El entorno de la ermita, salpicado de merenderos y áreas de picnic bajo los árboles, mantiene viva una tradición de convivencia popular al aire libre que se remonta como mínimo al siglo XIX, cuando familias enteras subían aquí a pasar el día comiendo, cantando y bailando lejos del bullicio del centro. Esa costumbre de la comida campestre en torno a la romería sigue prácticamente intacta hoy, generación tras generación de toledanos que repiten el mismo ritual cada primavera.'
            ],
            kids: [
              '¡El día de la romería, la imagen de la Virgen sale en procesión y toda la ciudad participa! Cientos de toledanos se visten con ropa especial y la acompañan cantando y bailando por los alrededores de la ermita. Es una de las fiestas más esperadas de todo el año en Toledo, ¡casi tan importante como la Semana Santa! 🎉',
              '¡Alrededor de la ermita la gente monta meriendas y picnics desde hace más de 150 años! Familias enteras suben aquí a pasar el día comiendo debajo de los árboles, cantando y bailando lejos del ruido del centro. Es una tradición tan antigua que los abuelos de los abuelos ya la hacían igual. 🧺'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Qué rey visigodo se cree que fundó el primer edificio religioso en este lugar, en el año 610?',
            options: ['Gundemaro', 'Recesvinto', 'Rodrigo'],
            correct: 0,
            reveal: '¡El rey Gundemaro! 👑 La ermita actual, construida en 1674, se levanta sobre los restos de aquella primitiva fundación.'
          },
          legends: {
            question: '¿A qué santo estuvo dedicado originalmente el culto de este lugar, antes de la devoción a la Virgen del Valle?',
            options: ['San Félix de Gerona', 'San Ildefonso', 'Santiago Apóstol'],
            correct: 0,
            reveal: '¡A San Félix de Gerona! ⛪ Con los siglos, aquel culto casi olvidado se transformó en la romería mariana más multitudinaria de Toledo.'
          },
          architecture: {
            question: '¿Qué elemento decorativo, obra del artesano Julio Pascual, adorna la ermita?',
            options: ['Una reja de forja', 'Un rosetón de cristal', 'Una torre almenada'],
            correct: 0,
            reveal: '¡Una reja de forja! ⚒️ Junto a los azulejos ornamentales de los zócalos, es uno de los detalles más cuidados de la ermita.'
          }
        }
      },
      {
        id: 'cuevas-hercules',
        name: { adult: 'Cuevas de Hércules', kids: 'Cuevas de Hércules — La Cueva Mágica de Hércules 🔮' },
        subtitle: {
          adult: 'Depósito de agua romano envuelto en leyendas de magia y nigromancia',
          kids: '¡Aquí se contaba que un héroe enseñaba magia en secreto!'
        },
        category: CATEGORIES.HISTORY,
        coords: [39.8586656, -4.0243597],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Cueva_de_H%C3%A9rcules_-_01.jpg/330px-Cueva_de_H%C3%A9rcules_-_01.jpg',
        audio: { duration: 155, title: { adult: 'Audioguía: Cuevas de Hércules', kids: '¡Aventura Sonora: La Cueva Mágica de Hércules!' } },
        visitInfo: {
          hours: { adult: 'Martes a sábado 12:00-14:00 y 16:00-18:00. Cerrado domingos y lunes. Sufre cierres puntuales sin previo aviso: conviene confirmar con el Consorcio de Toledo antes de ir.', kids: 'Abre de martes a sábado. Los domingos y lunes está cerrada.' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
        tabs: {
          history: {
            adult: 'Se trata de un espacio abovedado construido por los romanos en el subsuelo de Toledo durante la segunda mitad del siglo I, en época de Augusto o Tiberio, que funcionó como castellum aquae, el depósito terminal del acueducto romano que abastecía la ciudad. Tras la caída del Imperio, los visigodos ocuparon el espacio y lo convirtieron en iglesia, y en el siglo XII se erigió sobre él un templo dedicado a San Ginés, abandonado en el siglo XVIII y demolido en 1841.',
            kids: 'Este espacio subterráneo lo construyeron los romanos hace casi 2000 años para guardar agua. Después, otros pueblos lo usaron como iglesia, ¡hasta que quedó abandonado hace unos 200 años!'
          },
          legends: {
            adult: 'Una persistente leyenda identifica estos sótanos con la mítica Cueva de Hércules, una suerte de universidad de las artes mágicas: se cuenta que el héroe convirtió las cuevas que horadan el promontorio rocoso de Toledo en el lugar donde enseñaba magia y nigromancia a quienes lo desearan.',
            kids: '¡Cuenta la leyenda que el héroe Hércules usó estas cuevas como una auténtica escuela secreta de magia! Se dice que aquí enseñaba sus trucos más misteriosos a quien se atreviera a aprenderlos.'
          },
          architecture: {
            adult: 'El espacio se articula en cámaras abovedadas construidas en opus caementicium, el hormigón romano de cal, arena y piedra, recubierto de un mortero hidráulico impermeable típico de las obras de canalización del Imperio. Sus muros macizos, de varios metros de espesor, estaban pensados para resistir la presión del agua almacenada, ya que funcionaban como castellum aquae, el depósito final del acueducto que abastecía Toledo. Declaradas Bien de Interés Cultural en 2008, conservan esa estructura original pese a haber sido reutilizadas después como iglesia visigoda y templo medieval.',
            kids: '¡Estas cuevas están hechas con una especie de hormigón romano supergrueso, con piedras y cal mezcladas, para que no se colara ni una gota de agua! Las paredes son tan anchas como un armario tumbado, porque tenían que aguantar el peso de toda el agua guardada dentro. Bajar aquí es como meterte dentro de un depósito de agua gigante ¡construido hace casi 2000 años!'
          },
          deepenFillers: {
            adult: [
              'Algunas crónicas medievales describían este lugar como el escondite de un talismán, o "casa cerrada", capaz de proteger España de futuras invasiones, guardado por sucesivos reyes que se limitaban a añadir un candado más sin abrirlo nunca. La leyenda cuenta que el último rey visigodo, don Rodrigo, desoyendo esa prohibición ancestral, lo abrió por curiosidad o soberbia, y que dentro solo encontró un lienzo con la profecía de que España sería invadida, lo que poco después ocurrió con la conquista musulmana.',
              'Aunque hoy se accede desde una plaza tranquila del centro histórico, el recinto formaba parte en origen del trazado del acueducto romano que cruzaba buena parte de la ciudad, transportando agua desde manantiales situados a varios kilómetros de distancia hasta este depósito final. De aquella gran infraestructura hidráulica romana, capaz de abastecer a toda una ciudad, apenas se conservan hoy otros restos visibles en superficie, lo que convierte a estas cuevas en uno de los pocos testimonios tangibles que quedan de ella.'
            ],
            kids: [
              '¡Una leyenda medieval decía que aquí dentro había un objeto mágico que protegía toda España, guardado con muchos candados por varios reyes que nunca se atrevieron a abrirlo! Pero un rey curioso llamado Rodrigo lo abrió sin permiso, ¡y dentro solo había un dibujo con una profecía muy mala! Poco después, España fue invadida, tal y como decía la profecía. ✨',
              '¡Estas cuevas formaban parte de una tubería gigante romana que traía agua desde muy lejos hasta aquí, cruzando toda la ciudad! Los romanos construyeron un sistema enorme para llevar agua a Toledo, pero hoy casi no queda nada visible de él por la ciudad, ¡excepto estas cuevas! Por eso son tan especiales. 💧'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Para qué se construyó originalmente este espacio abovedado en el siglo I?',
            options: ['Como castellum aquae, depósito final del acueducto romano', 'Como cárcel para prisioneros', 'Como almacén de grano'],
            correct: 0,
            reveal: '¡Como castellum aquae! 💧 Era el depósito terminal del acueducto romano que abastecía de agua a toda la ciudad de Toledo.'
          },
          legends: {
            question: 'Según la leyenda, ¿qué se dice que enseñaba Hércules en estas cuevas?',
            options: ['Magia y nigromancia', 'Esgrima y combate', 'Astronomía'],
            correct: 0,
            reveal: '¡Magia y nigromancia! 🔮 La leyenda las convierte en una auténtica escuela secreta de artes mágicas, digna de un héroe mitológico.'
          },
          architecture: {
            question: '¿Con qué material romano están construidas las cámaras abovedadas de las cuevas?',
            options: ['Opus caementicium (hormigón romano de cal, arena y piedra)', 'Ladrillo mudéjar', 'Mármol de Carrara'],
            correct: 0,
            reveal: '¡Opus caementicium! 🏛️ Recubierto de un mortero hidráulico impermeable, era la técnica típica de las grandes obras de agua del Imperio romano.'
          }
        }
      },
      {
        id: 'callejon-pozo-amargo',
        name: { adult: 'Callejón del Pozo Amargo', kids: 'Callejón del Pozo Amargo — El Callejón del Amor Imposible 💔' },
        subtitle: {
          adult: 'Un pozo que da nombre a la leyenda de amor más trágica de Toledo',
          kids: '¡Aquí ocurrió una historia de amor muy triste entre dos jóvenes de religiones distintas!'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'juderia', order: 4 },
        coords: [39.8550219, -4.0235220],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/El_Pozo_Amargo._Toledo_%28Espa%C3%B1a%29.jpg/330px-El_Pozo_Amargo._Toledo_%28Espa%C3%B1a%29.jpg',
        audio: { duration: 150, title: { adult: 'Audioguía: Callejón del Pozo Amargo', kids: '¡Aventura Sonora: El Callejón del Amor Imposible!' } },
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (callejón público).', kids: '¡Se puede visitar en cualquier momento, no tiene horario!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
        tabs: {
          history: {
            adult: 'El pozo sobre el que se basa la historia se encuentra en una pequeña plaza de la calle del Pozo Amargo, en pleno corazón de la judería toledana, a pocos metros de la Catedral. Hay constancia de que dicho pozo era uno de los más notables de la ciudad ya en 1093, cuando se le llamaba pozo Caxali; en 1162 cambió su nombre a pozo amargo, época en la que se sitúa la leyenda.',
            kids: 'Este pozo, escondido en una plazuela pequeñita del barrio judío de Toledo, ya era conocido hace casi 1000 años, ¡aunque entonces tenía un nombre distinto!'
          },
          legends: {
            adult: 'La leyenda narra el amor imposible entre Don Fernando, un caballero cristiano, y Raquel, hija del acaudalado hebreo Leví, que vivía en un palacio en cuyos jardines se encontraba el pozo. Se trata de una de las leyendas de temática interreligiosa y romántica más conocidas de la ciudad, recogida por autores como Luis Moreno Nieto, con un desenlace trágico marcado por las normas sociales de la época.',
            kids: 'Cuenta la leyenda que un caballero cristiano y una joven judía se enamoraron en secreto junto a este pozo, hace muchísimos siglos. Pero como pertenecían a religiones distintas, su historia de amor terminó de forma muy triste.'
          },
          architecture: {
            adult: 'El propio pozo, de brocal de piedra labrada, se conserva en el centro de una plazuela diminuta a la que se accede por un callejón estrecho y sinuoso, trazado típico de la judería medieval toledana, con muros encalados y balcones de forja que apenas dejan pasar la luz. Su aspecto sobrio y humilde es coherente con su ubicación en un barrio de calles estrechas y estructura casi laberíntica, alejado de las grandes plazas monumentales de la ciudad. Una placa conmemorativa en la pared recuerda hoy la leyenda a los visitantes.',
            kids: '¡El pozo de verdad está hecho de piedra, en medio de una plaza tan pequeña que casi no cabe! Para llegar hasta él tienes que pasar por un callejón estrechito y con curvas, como un laberinto de casas blancas. Fíjate en los balcones de hierro que casi se tocan de una casa a otra. ¡Y no te olvides de buscar la placa que cuenta la historia en la pared!'
          },
          deepenFillers: {
            adult: [
              'El callejón se encuentra a apenas un par de minutos a pie de la Catedral, en una de las zonas de la judería que conserva casi intacto su trazado urbano medieval, con calles estrechas que apenas han cambiado de anchura ni de dirección en varios siglos. Esta cercanía entre el corazón religioso cristiano de la ciudad y el antiguo barrio judío ilustra bien lo compacta que era la Toledo medieval, donde comunidades distintas convivían a solo unos pasos unas de otras.',
              'La leyenda del Pozo Amargo se ha recogido en distintas versiones a lo largo de los siglos, con pequeñas variaciones en los nombres de los protagonistas y en algunos detalles del desenlace, lo que sugiere una larga transmisión oral entre generaciones de toledanos antes de que autores como Luis Moreno Nieto la pusieran por escrito de forma definitiva. Esta fluidez es típica de las leyendas populares, que se van adaptando ligeramente cada vez que alguien las vuelve a contar en voz alta.'
            ],
            kids: [
              '¡Este callejón está a solo un par de minutos andando de la Catedral, escondido en un trocito de Toledo que casi no ha cambiado en siglos! Las calles son tan estrechas y torcidas como lo eran hace cientos de años. Aquí puedes imaginar perfectamente cómo era pasear por la judería medieval, ¡como viajar en el tiempo sin moverte del centro! 🚶',
              '¡La leyenda de este pozo se ha contado de formas un poco distintas a lo largo de los siglos! A veces cambian el nombre de los protagonistas o algún detalle de la historia. Seguramente la gente se la iba contando de boca en boca, de abuelos a nietos, durante generaciones, antes de que alguien decidiera escribirla tal y como la conocemos hoy. 🗣️'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Cómo se llamaba este pozo antes de que en 1162 pasara a llamarse "pozo amargo"?',
            options: ['Pozo Caxali', 'Pozo del Rey', 'Pozo Santo'],
            correct: 0,
            reveal: '¡Pozo Caxali! 📜 Ya era conocido con ese nombre en 1093, casi un siglo antes de que cambiara al nombre que tiene hoy.'
          },
          legends: {
            question: '¿Quién era el padre de Raquel, la joven de la leyenda de amor imposible de este callejón?',
            options: ['Un caballero cristiano', 'Leví, un hebreo acaudalado', 'Un mercader árabe'],
            correct: 1,
            reveal: '¡Leví, un hebreo acaudalado! 💔 Raquel vivía en un palacio en cuyos jardines estaba el pozo, y se enamoró en secreto de Don Fernando, un caballero cristiano.'
          },
          architecture: {
            question: '¿Cómo es el callejón por el que se accede a la plazuela del pozo?',
            options: ['Estrecho y sinuoso, típico de la judería medieval', 'Una avenida ancha y recta', 'Una escalinata monumental'],
            correct: 0,
            reveal: '¡Estrecho y sinuoso! 🏘️ Con muros encalados y balcones de forja, es un trazado típico del laberíntico barrio judío medieval de Toledo.'
          }
        }
      },
      {
        id: 'circo-romano-toledo',
        name: { adult: 'Circo Romano de Toledo', kids: 'Circo Romano de Toledo — El Estadio de las Carreras de Carros 🏇' },
        subtitle: {
          adult: 'Restos de uno de los grandes espectáculos públicos de la Roma imperial',
          kids: '¡Aquí competían carros tirados por caballos hace 2000 años!'
        },
        category: CATEGORIES.HISTORY,
        coords: [39.86426389, -4.02920833],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Espa%C3%B1a_-_Toledo_-_Ruinas_del_Circo_Romano_003.JPG/330px-Espa%C3%B1a_-_Toledo_-_Ruinas_del_Circo_Romano_003.JPG',
        audio: { duration: 155, title: { adult: 'Audioguía: Circo Romano de Toledo', kids: '¡Aventura Sonora: El Estadio de las Carreras de Carros!' } },
        visitInfo: {
          hours: { adult: 'Acceso libre como parque arqueológico al aire libre, en horario diurno habitual de parque público.', kids: 'Se puede visitar de día, ¡como un parque!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
        tabs: {
          history: {
            adult: 'El circo romano de Toledo se construyó a finales del siglo I, probablemente por mandato de Octavio Augusto de dotar a las grandes ciudades de Hispania de exuberantes edificios públicos, con unas dimensiones de 422 metros de largo por unos 112 de ancho. Se encuentra en el sector sur de la Zona Arqueológica de la Vega Baja, un espacio de más de seis hectáreas que contiene también uno de los cementerios medievales más importantes de la ciudad.',
            kids: 'Este enorme estadio se construyó hace casi 2000 años, cuando Toledo era una ciudad romana. Era tan grande como cuatro campos de fútbol seguidos.'
          },
          legends: {
            adult: 'Las primeras excavaciones se remontan a 1886, cuando la Sociedad Arqueológica de Toledo exploró el sector de las carceres. Entre 1927 y 1929 se desarrollaron nuevas campañas, y en 1982-83 tuvo lugar la única excavación asociada a un proyecto de investigación científica, que determinó su proceso de construcción y descubrió restos medievales islámicos de hornos del siglo IX.',
            kids: '¡Los arqueólogos llevan más de 130 años excavando este lugar poco a poco! Cada excavación ha ido descubriendo nuevos secretos escondidos bajo la tierra.'
          },
          architecture: {
            adult: 'Con 422 metros de longitud por unos 112 de ancho, sus dimensiones lo sitúan entre los circos romanos más grandes de Hispania. Contaba con carceres (las puertas de salida de los carros) en uno de sus extremos y gradas de piedra escalonadas donde el público seguía las carreras de cuadrigas. A pesar de todas las intervenciones, el circo no se ha desenterrado en su totalidad, pues existen construcciones modernas sobre parte de sus estructuras; sus restos quedan hoy repartidos entre el Parque Escolar y el Paseo del Circo Romano.',
            kids: '¡Este circo mide 422 metros de largo, tan largo como cuatro campos de fútbol seguidos! Tenía unas puertas especiales llamadas carceres, por donde salían disparados los carros a la vez, como en una carrera de coches. La gente se sentaba en gradas de piedra escalonadas para animar a los aurigas. ¡Aunque hoy solo se ven algunos restos, imagina este lugar lleno de gente gritando de emoción!'
          },
          deepenFillers: {
            adult: [
              'Se calcula que el circo pudo albergar a varios miles de espectadores sentados en sus gradas escalonadas de piedra, una capacidad más que considerable para la época que da idea de la importancia de Toletum como una de las grandes ciudades romanas de Hispania, no solo un enclave administrativo sino también un centro de ocio y vida pública capaz de reunir a buena parte de su población y de las localidades cercanas para presenciar las carreras de cuadrigas.',
              'Parte del trazado del circo quedó sepultado bajo el barrio moderno que fue creciendo encima durante el siglo XX, cuando todavía no existía la protección legal ni la sensibilidad arqueológica actuales sobre este tipo de yacimientos. Por esa razón, hoy solo es visible una fracción de su perímetro original, mientras que el resto permanece oculto bajo calles, edificios y solares urbanos, a la espera de futuras excavaciones que quizá algún día permitan recuperar una imagen más completa del conjunto.'
            ],
            kids: [
              '¡Se cree que en este circo cabían miles de personas para ver las carreras, sentadas en gradas de piedra escalonadas! Toledo era una de las ciudades romanas más importantes de España, no solo para gobernar, sino también para divertirse. Imagina a miles de personas gritando emocionadas viendo pasar los carros a toda velocidad. 🎪',
              '¡Parte de este circo tan grande está escondido debajo de casas modernas! Se construyeron encima hace unos 100 años, cuando nadie sabía todavía lo importante que era proteger los restos romanos. Solo se puede ver un trocito de todo lo que había, ¡el resto sigue escondido bajo la ciudad de hoy! 🏘️'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Qué emperador romano impulsó probablemente la construcción de este circo?',
            options: ['Trajano', 'Julio César', 'Octavio Augusto'],
            correct: 2,
            reveal: '¡Octavio Augusto! 🏇 Se construyó a finales del siglo I para dotar a las grandes ciudades de Hispania de exuberantes edificios públicos.'
          },
          legends: {
            question: '¿En qué año se hicieron las primeras excavaciones conocidas del circo romano de Toledo?',
            options: ['En 1886', 'En 1975', 'En 2005'],
            correct: 0,
            reveal: '¡En 1886! 🏺 La Sociedad Arqueológica de Toledo exploró entonces el sector de las carceres, iniciando más de 130 años de excavaciones.'
          },
          architecture: {
            question: '¿Para qué servían los carceres, situados en uno de los extremos del circo?',
            options: ['Eran las puertas de salida de los carros', 'Eran la entrada de los gladiadores', 'Eran el palco del emperador'],
            correct: 0,
            reveal: '¡Eran las puertas de salida! 🐎 Todos los carros arrancaban a la vez desde allí para completar las vueltas ante el público de las gradas.'
          }
        }
      },
      {
        id: 'iglesia-santiago-arrabal',
        name: { adult: 'Iglesia de Santiago del Arrabal', kids: 'Iglesia de Santiago del Arrabal — La Catedral en Miniatura del Mudéjar 🕌' },
        subtitle: {
          adult: 'Considerada la catedral del arte mudéjar toledano',
          kids: '¡Le llaman "la catedral mudéjar" por lo especial que es!'
        },
        category: CATEGORIES.HISTORY,
        coords: [39.862, -4.0255],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/%C3%81bside_Iglesia_de_Santiago%2C_Toledo.jpg/330px-%C3%81bside_Iglesia_de_Santiago%2C_Toledo.jpg',
        audio: { duration: 150, title: { adult: 'Audioguía: Iglesia de Santiago del Arrabal', kids: '¡Aventura Sonora: La Catedral en Miniatura del Mudéjar!' } },
        visitInfo: {
          hours: { adult: 'Iglesia parroquial activa: el interior suele abrirse en horario de misa (normalmente por la mañana y a media tarde); el exterior se ve en cualquier momento.', kids: 'Por fuera se ve siempre; por dentro solo cuando hay misa.' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
        tabs: {
          history: {
            adult: 'La iglesia se construyó en la segunda mitad del siglo XIII bajo el patrocinio de Sancho II, rey de Portugal, y es considerada uno de los mejores ejemplos del arte mudéjar toledano, hasta el punto de ser conocida como la Catedral del Mudéjar. Su ubicación en un antiguo barrio musulmán sugiere que se construyó sobre un templo anterior, posiblemente una mezquita, cuyo alminar correspondería a la actual torre exenta, reforzada con ladrillo para instalar el campanario.',
            kids: 'Esta iglesia se construyó hace más de 750 años, probablemente sobre una mezquita antigua. Es tan bonita y especial que la llaman "la catedral" del estilo mudéjar, aunque no sea la catedral de verdad.'
          },
          legends: {
            adult: 'Es uno de los ejemplos más claros de la construcción mudéjar toledana y la única iglesia de la ciudad que conserva su estructura primitiva casi intacta. Sus muros de mampostería y ladrillo, con puertas enmarcadas en arcos polilobulados de herradura, conviven con tres ábsides semicirculares decorados con arcos de distintos tipos.',
            kids: '¡Es la única iglesia de todo Toledo que conserva su forma original de hace tantos siglos, casi sin cambios!'
          },
          architecture: {
            adult: 'Su torre exenta, que según los expertos corresponde al antiguo alminar de la mezquita que ocupó este solar, se alza separada del cuerpo principal del templo, un rasgo poco habitual entre las iglesias mudéjares toledanas. Los muros combinan mampostería encintada de ladrillo con paños decorativos de esquinillas, la característica decoración en zigzag del ladrillo toledano. Se encuentra cerca de la Puerta Nueva de Bisagra, en la zona norte del casco histórico, y debe su nombre a su ubicación en los antiguos arrabales, los barrios que quedaban fuera de las murallas de la ciudad.',
            kids: '¡Su torre está separada del resto de la iglesia, como si fuera un vigía solitario! Se cree que antes fue el minarete de una mezquita, el lugar desde donde llamaban a la gente a rezar. Los ladrillos de las paredes forman dibujos en zigzag, ¡una auténtica decoración hecha con ladrillos! Su nombre viene de que antiguamente estaba fuera de las murallas de la ciudad, en un barrio de las afueras.'
          },
          deepenFillers: {
            adult: [
              'Su interior conserva un artesonado de madera policromada que representa uno de los mejores ejemplos de carpintería mudéjar toledana, con una compleja decoración geométrica de lazo de tradición andalusí, formada por piezas de madera entrelazadas sin apenas clavos, ensambladas con enorme precisión geométrica. Este tipo de techumbre, típica de los templos mudéjares castellanos, exigía carpinteros altamente especializados capaces de calcular ángulos y proporciones complejas mucho antes de que existieran herramientas de medición modernas.',
              'El barrio del Arrabal, donde se sitúa esta iglesia, fue históricamente uno de los asentamientos mudéjares más importantes de Toledo tras la conquista cristiana, habitado por musulmanes que optaron por permanecer en la ciudad conservando su religión y sus costumbres bajo dominio cristiano. Esta comunidad, conocida como mudéjar, mantuvo durante generaciones sus propios oficios artesanales, entre ellos la carpintería y el trabajo del ladrillo, técnicas que dejaron una huella profunda en la arquitectura religiosa del barrio, incluida esta misma iglesia.'
            ],
            kids: [
              '¡Dentro tiene un techo de madera pintado con dibujos geométricos entrelazados, una auténtica joya de artesanía mudéjar! Los carpinteros que lo hicieron encajaban trozos de madera unos con otros, casi sin clavos, calculando ángulos súper complicados a mano. Hacía falta muchísima habilidad para conseguir que todo encajara tan perfectamente. 🎨',
              '¡El barrio donde está esta iglesia estuvo habitado durante siglos por musulmanes que se quedaron en Toledo después de que la conquistaran los cristianos! Se llamaban mudéjares, y siguieron viviendo con su propia religión y sus costumbres. Eran muy buenos carpinteros y trabajando el ladrillo, y por eso hay tantos edificios bonitos hechos por ellos en este barrio. 🏘️'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Qué rey patrocinó la construcción de esta iglesia en el siglo XIII?',
            options: ['Sancho II de Portugal', 'Alfonso X el Sabio', 'Fernando III el Santo'],
            correct: 0,
            reveal: '¡Sancho II de Portugal! ⛪ Por eso esta iglesia es considerada uno de los mejores ejemplos del arte mudéjar toledano, casi como "la Catedral del Mudéjar".'
          },
          legends: {
            question: '¿Cuántos ábsides semicirculares conserva esta iglesia, decorados con distintos tipos de arcos?',
            options: ['Tres', 'Uno', 'Cinco'],
            correct: 0,
            reveal: '¡Tres ábsides! 🏛️ Es la única iglesia de Toledo que conserva su estructura primitiva casi intacta, con puertas de arcos polilobulados de herradura.'
          },
          architecture: {
            question: '¿Qué se cree que fue originalmente la torre exenta de esta iglesia?',
            options: ['El alminar de una mezquita anterior', 'Una torre de vigilancia militar', 'Un antiguo depósito de agua'],
            correct: 0,
            reveal: '¡El alminar de una mezquita! 🕌 Se reforzó con ladrillo para instalar el campanario, y hoy se alza separada del cuerpo principal del templo.'
          }
        }
      },
      {
        id: 'puerta-valmardon',
        name: { adult: 'Puerta de Valmardón', kids: 'Puerta de Valmardón — La Puerta Más Antigua de Toledo 🚪' },
        subtitle: {
          adult: 'Probablemente la puerta más antigua conservada de la ciudad',
          kids: '¡Esta puerta ha tenido más de seis nombres distintos a lo largo de la historia!'
        },
        category: CATEGORIES.HISTORY,
        coords: [39.8608494, -4.0244095],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Puerta_de_Valmard%C3%B3n%2C_Toledo_-_1.JPG/330px-Puerta_de_Valmard%C3%B3n%2C_Toledo_-_1.JPG',
        audio: { duration: 145, title: { adult: 'Audioguía: Puerta de Valmardón', kids: '¡Aventura Sonora: La Puerta Más Antigua de Toledo!' } },
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (puerta exterior integrada en las murallas).', kids: '¡Se puede visitar en cualquier momento, no tiene horario!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
        tabs: {
          history: {
            adult: 'La Puerta de Valmardón, o Bab al-Mardum, fue una de las puertas de la muralla urbana de Toledo por la que se accedía a la medina islámica. Es probablemente la puerta más antigua de la ciudad, con restos que datan de los siglos IX y X, aunque sus orígenes son incluso anteriores, pues en época romana era conocida como Puerta de Aquilina o del Rey Agila.',
            kids: 'Esta es probablemente la puerta más vieja de toda la ciudad, con partes construidas hace más de 1000 años, ¡aunque sus orígenes son todavía más antiguos!'
          },
          legends: {
            adult: 'Su nombre oficial procede del árabe bab al-Mardum, que significa "puerta bloqueada o condenada", indicando que en algún momento dejó de usarse como paso principal, ya que el tránsito habitual se realizaba por la cercana Puerta del Sol. A lo largo de la historia ha sido citada con nombres como Balmardón, Puerta del Mayordomo o Puerta de la Cruz.',
            kids: '¡Esta puerta ha cambiado de nombre muchísimas veces a lo largo de los siglos! Su nombre en árabe significa "puerta bloqueada", porque en algún momento dejó de usarse para entrar a la ciudad.'
          },
          architecture: {
            adult: 'De reducidas dimensiones y planta rectangular, se sitúa muy cerca de la Mezquita del Cristo de la Luz, con la que en origen compartía el mismo recinto amurallado de la medina islámica. En las partes bajas se reutilizaron sillares de épocas anteriores, mientras que en las zonas media y alta se empleó la mampostería toledana típica del mudéjar, con ladrillo y tapial. Con la pérdida de su valor defensivo, sus primitivos arcos de herradura se transformaron en arcos de medio punto, aunque el grosor de sus muros todavía recuerda su función original como punto fortificado de la muralla.',
            kids: '¡Esta puerta es pequeñita pero muy gruesa, porque antes tenía que aguantar ataques de verdad! Está muy cerca de otra construcción musulmana famosa, la Mezquita del Cristo de la Luz. Si te fijas bien, verás piedras y ladrillos de épocas muy distintas mezclados en la misma puerta, como un rompecabezas de la historia. Su arco, que antes tenía forma de herradura, cambió de forma con el paso de los siglos.'
          },
          deepenFillers: {
            adult: [
              'Se encuentra a apenas unos metros de la Mezquita del Cristo de la Luz, formando junto a ella uno de los rincones urbanos islámicos mejor conservados de toda la ciudad.',
              'Al perder su función como paso principal, la puerta quedó integrada durante siglos en las viviendas colindantes, hasta que labores de restauración recientes la recuperaron como elemento visible y visitable.'
            ],
            kids: [
              '¡Está pegadita a la Mezquita del Cristo de la Luz, formando con ella un rincón casi intacto desde hace más de 1000 años! 🕌',
              '¡Durante mucho tiempo esta puerta quedó escondida entre las casas de al lado, hasta que la volvieron a dejar a la vista hace relativamente poco! 🔍'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Cómo se conocía esta puerta en época romana?',
            options: ['Puerta de Aquilina o del Rey Agila', 'Puerta del Sol', 'Puerta de Bisagra'],
            correct: 0,
            reveal: '¡Puerta de Aquilina o del Rey Agila! 🏛️ Sus orígenes son anteriores incluso a los restos islámicos de los siglos IX y X que hoy se conservan.'
          },
          legends: {
            question: '¿Qué significa "bab al-Mardum", el nombre árabe original de esta puerta?',
            options: ['Puerta bloqueada o condenada', 'Puerta del tesoro', 'Puerta de los reyes'],
            correct: 0,
            reveal: '¡Puerta bloqueada o condenada! 🚪 Indica que en algún momento dejó de usarse como paso principal, ya que el tránsito se hacía por la cercana Puerta del Sol.'
          },
          architecture: {
            question: '¿Qué materiales se reutilizaron en las partes bajas de esta puerta?',
            options: ['Sillares de épocas anteriores', 'Mármol traído de Italia', 'Adobe sin cocer'],
            correct: 0,
            reveal: '¡Sillares de épocas anteriores! 🧱 Arriba se usó mampostería mudéjar con ladrillo y tapial, mezclando materiales de distintos siglos.'
          }
        }
      },
      {
        id: 'cristo-de-la-vega',
        name: { adult: 'Ermita del Cristo de la Vega', kids: 'Ermita del Cristo de la Vega — El Cristo que Testificó en un Juicio ⚖️' },
        subtitle: {
          adult: 'Escenario de la célebre leyenda "A buen juez, mejor testigo"',
          kids: '¡Cuenta la leyenda que una estatua habló para salvar a una mujer!'
        },
        category: CATEGORIES.HISTORY,
        coords: [39.86091667, -4.03428056],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/WLM14ES_-_10072005_170647_7840_-_.jpg/330px-WLM14ES_-_10072005_170647_7840_-_.jpg',
        audio: { duration: 155, title: { adult: 'Audioguía: Ermita del Cristo de la Vega', kids: '¡Aventura Sonora: El Cristo que Testificó en un Juicio!' } },
        visitInfo: {
          hours: { adult: 'Iglesia parroquial activa: el interior suele abrirse en horario de misa; el exterior se ve en cualquier momento.', kids: 'Por fuera se ve siempre; por dentro solo cuando hay misa.' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
        tabs: {
          history: {
            adult: 'La ermita se levanta donde antaño estuvo la basílica visigótica de Santa Leocadia, en plena Vega Baja de Toledo. Su parte más antigua, el ábside, data del siglo XIII y es de estilo mudéjar. El Cristo que alberga ya era venerado en este lugar al menos desde 1612, fecha en la que Francisco de Pisa mencionó por primera vez la famosa leyenda.',
            kids: 'Esta ermita se construyó donde antes hubo un templo todavía más antiguo, de hace más de 1300 años. La imagen de Cristo que guarda dentro ya era venerada hace más de 400 años.'
          },
          legends: {
            adult: 'La leyenda, convertida en pieza literaria por José Zorrilla bajo el título A buen juez, mejor testigo, narra el amor entre Diego Martínez e Inés de Vargas: antes de partir a la guerra, Diego juró ante el Cristo de la Vega que se casaría con ella a su regreso. Cuando Diego no volvió, Inés reclamó justicia y, como único testigo, presentó al propio Cristo, que ante el asombro general desclavó su mano derecha de la cruz para testificar a su favor.',
            kids: '¡Esta es una de las leyendas más famosas de Toledo! Cuenta que un joven prometió casarse con su novia ante esta estatua de Cristo, y cuando no cumplió su promesa, la propia estatua movió la mano para testificar a favor de ella ante un tribunal.'
          },
          architecture: {
            adult: 'Su elemento más antiguo, el ábside, data del siglo XIII y es un notable ejemplo de arte mudéjar, con paños de arcos ciegos entrelazados y decoración de ladrillo resaltado, típica de los alarifes toledanos de la época. El resto del templo, de origen medieval y situado extramuros de la ciudad, refleja las sucesivas reformas sufridas a lo largo de los siglos. Sigue siendo hoy escenario de gran devoción popular, especialmente ligado a la festividad de la Virgen del Valle.',
            kids: '¡La parte más vieja de la iglesia, el ábside, tiene casi 800 años y está decorada con arcos entrelazados hechos de ladrillo, como un encaje rojizo! El resto de la iglesia se ha ido cambiando y arreglando muchas veces a lo largo de los siglos. Está fuera de las antiguas murallas de Toledo, en una zona tranquila junto a la vega del río.'
          },
          deepenFillers: {
            adult: [
              'En este mismo entorno se celebraron algunos de los concilios toledanos de época visigoda, entre ellos, según la tradición, el IV Concilio de Toledo del año 633, uno de los más influyentes en la definición del derecho canónico medieval.',
              'La imagen de Cristo que hoy se venera no es necesariamente la misma de la leyenda medieval original, ya que sufrió distintos avatares y restauraciones a lo largo de los siglos.'
            ],
            kids: [
              '¡Aquí cerca se celebraron reuniones religiosas importantísimas hace casi 1400 años, cuando los visigodos gobernaban España! 📜',
              '¡La estatua de Cristo que ves hoy puede que no sea exactamente la misma de la leyenda original, porque ha pasado por varios cambios a lo largo de los siglos! 🖼️'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Sobre qué antiguo templo se levanta esta ermita?',
            options: ['La basílica visigótica de Santa Leocadia', 'Una mezquita del siglo X', 'Un templo romano dedicado a Júpiter'],
            correct: 0,
            reveal: '¡La basílica visigótica de Santa Leocadia! ⛪ Se alzaba en plena Vega Baja de Toledo, y su recuerdo pervive en la ermita actual.'
          },
          legends: {
            question: '¿Qué escritor español convirtió esta leyenda en una famosa obra literaria?',
            options: ['José Zorrilla', 'Miguel de Cervantes', 'Gustavo Adolfo Bécquer'],
            correct: 0,
            reveal: '¡José Zorrilla! ✍️ Tituló su obra "A buen juez, mejor testigo", inspirada en la leyenda del Cristo que desclavó su mano para testificar.'
          },
          architecture: {
            question: '¿De qué siglo data el ábside, la parte más antigua conservada de esta ermita?',
            options: ['Del siglo XIII', 'Del siglo XVIII', 'Del siglo XX'],
            correct: 0,
            reveal: '¡Del siglo XIII! 🧱 Es un notable ejemplo de arte mudéjar, con arcos ciegos entrelazados y decoración de ladrillo resaltado.'
          }
        }
      },
      {
        id: 'casa-museo-victorio-macho',
        name: { adult: 'Casa-Museo Victorio Macho', kids: 'Casa-Museo Victorio Macho — El Estudio del Escultor sobre el Precipicio 🗿' },
        subtitle: {
          adult: 'La casa-taller de un escultor, encaramada sobre la Roca Tarpeya',
          kids: '¡Un escultor construyó su casa en el borde de un acantilado!'
        },
        category: CATEGORIES.HISTORY,
        coords: [39.8559506, -4.0307402],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Sala_de_museo_victorio_macho.jpg/330px-Sala_de_museo_victorio_macho.jpg',
        audio: { duration: 150, title: { adult: 'Audioguía: Casa-Museo Victorio Macho', kids: '¡Aventura Sonora: El Estudio del Escultor sobre el Precipicio!' } },
        visitInfo: {
          hours: { adult: 'Domingo a miércoles 10:00-14:00; jueves a sábado 11:00-18:00. Cerrado en agosto.', kids: 'Abre casi todos los días, aunque en agosto está cerrado.' },
          price: { adult: '5€ general, 2,50€ reducida (estudiantes, guías, mayores de 65, grupos). Gratis para menores de 12 años.', kids: '5€, pero gratis si tienes menos de 12 años.' }
        },
        tabs: {
          history: {
            adult: 'El museo se sitúa en el promontorio de la Roca Tarpeya, un enclave abrupto sobre el río Tajo, que el escultor Victorio Macho escogió para edificar en 1953 su casa y taller, diseñados por el arquitecto Secundino Zuazo. Cuando el artista murió en Toledo en 1966, dejó expresado en su testamento su deseo de que sus obras permanecieran vinculadas a este mismo lugar, en un museo creado a tal efecto.',
            kids: 'Un escultor famoso eligió este lugar tan especial, al borde de un acantilado sobre el río, para construir su casa y su taller, hace más de 70 años.'
          },
          legends: {
            adult: 'La colección del museo está compuesta por 91 esculturas y 48 dibujos que recorren la trayectoria artística del artista entre 1903 y 1965, la mayoría procedentes de la donación del propio Victorio Macho. Tras años cerrado, Roca Tarpeya reabrió sus puertas en 1999, y ese mismo año los Reyes de España inauguraron oficialmente el nuevo espacio cultural.',
            kids: '¡Dentro del museo hay más de 90 esculturas hechas por el propio artista, que él mismo quiso regalar a la ciudad para que todos pudieran verlas!'
          },
          architecture: {
            adult: 'El arquitecto Secundino Zuazo diseñó la casa-taller adaptándose al escarpado terreno de la Roca Tarpeya, con terrazas escalonadas que descienden hacia el río y un pequeño auditorio excavado directamente en la roca. Los jardines, salpicados de esculturas del propio Macho, se integran con las vistas del meandro del Tajo, convirtiendo el paisaje mismo en parte de la obra expuesta. En una capilla del recinto reposan los restos del escultor, cumpliendo su deseo de permanecer unido para siempre a este lugar.',
            kids: '¡El arquitecto que diseñó esta casa la construyó pegadita a la roca, con terrazas que bajan escalón a escalón hacia el río! Hasta hay un pequeño teatro excavado directamente en la piedra. En el jardín hay esculturas repartidas entre las plantas, como si el paisaje entero formara parte del museo. El escultor quiso quedarse aquí para siempre, ¡y por eso descansa en una capillita del propio museo!'
          },
          deepenFillers: {
            adult: [
              'El nombre de Roca Tarpeya es un guiño culto a la colina romana desde la que, según la tradición, se despeñaba a los traidores en la antigua Roma, aplicado aquí por su parecido escarpe abrupto sobre el río.',
              'Victorio Macho es también autor de esculturas muy conocidas fuera de Toledo, como el Cristo del Otero en Palencia, uno de los monumentos religiosos más grandes de España.'
            ],
            kids: [
              '¡El nombre "Roca Tarpeya" viene de una colina de la antigua Roma con un precipicio parecido a este! Por eso le pusieron ese nombre tan curioso. 🏔️',
              '¡El mismo escultor hizo una estatua de Cristo gigante en otra ciudad de España, una de las más grandes del país! 🗿'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿En qué año eligió Victorio Macho este lugar para construir su casa y taller?',
            options: ['En 1953', 'En 1903', 'En 1999'],
            correct: 0,
            reveal: '¡En 1953! 🗿 El arquitecto Secundino Zuazo diseñó la casa sobre la Roca Tarpeya, un enclave abrupto sobre el río Tajo.'
          },
          legends: {
            question: '¿Cuántas esculturas componen la colección donada por el propio Victorio Macho?',
            options: ['91 esculturas', '10 esculturas', '500 esculturas'],
            correct: 0,
            reveal: '¡91 esculturas, junto a 48 dibujos! 🎨 Recorren toda su trayectoria artística entre 1903 y 1965, casi toda ella donada por el propio artista.'
          },
          architecture: {
            question: '¿Qué elemento poco habitual excavó el arquitecto directamente en la roca del recinto?',
            options: ['Un pequeño auditorio', 'Una piscina', 'Un aparcamiento'],
            correct: 0,
            reveal: '¡Un pequeño auditorio! 🎭 Las terrazas escalonadas y los jardines con esculturas completan este mirador natural sobre el Tajo.'
          }
        }
      },
      {
        id: 'convento-santo-domingo-antiguo',
        name: { adult: 'Convento de Santo Domingo el Antiguo', kids: 'Convento de Santo Domingo el Antiguo — El Misterio de la Tumba Perdida 🔍' },
        subtitle: {
          adult: 'Donde El Greco fue enterrado, aunque sus restos hoy son un misterio',
          kids: '¡Un gran pintor está enterrado aquí, pero nadie sabe exactamente dónde!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'conventos', order: 2 },
        coords: [39.859350, -4.028037],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Convento_de_Santo_Domingo_El_Antiguo_-_01.jpg/330px-Convento_de_Santo_Domingo_El_Antiguo_-_01.jpg',
        audio: { duration: 155, title: { adult: 'Audioguía: Convento de Santo Domingo el Antiguo', kids: '¡Aventura Sonora: El Misterio de la Tumba Perdida!' } },
        visitInfo: {
          hours: { adult: 'Lunes a sábado y festivos 11:00-13:30 y 16:00-19:00; domingos 16:00-19:00.', kids: 'Abre todos los días, aunque los domingos solo por la tarde.' },
          price: { adult: '3€ entrada general.', kids: '3€ la entrada.' }
        },
        tabs: {
          history: {
            adult: 'Los orígenes del convento se remontan a un cenobio visigótico fundado sobre la casa de Santa Leocadia, sustituido después por un monasterio establecido por Alfonso VI en 1085, tras la conquista de Toledo, siendo uno de los conventos más antiguos de la ciudad. Este templo tuvo el honor de atraer por primera vez a Doménikos Theotokópoulos, El Greco, a Toledo en 1577, con un encargo de nueve pinturas para su retablo.',
            kids: 'Este convento es uno de los más antiguos de Toledo, con casi 1000 años de historia. Fue precisamente un encargo en este lugar lo que trajo por primera vez a Toledo al pintor más famoso de la ciudad, El Greco.'
          },
          legends: {
            adult: 'El Greco murió el 7 de abril de 1614 y fue enterrado en la cripta de este convento, pero durante reformas del siglo XVII sus restos fueron trasladados y se perdieron. Una tercera expedición a la cripta en 1984 documentó hallazgos, pero no pudo demostrarse con certeza que los restos del pintor sigan allí, por lo que, según Turismo de Toledo, no existe seguridad absoluta sobre su ubicación final.',
            kids: '¡Aquí enterraron a El Greco cuando murió, hace más de 400 años! Pero con el tiempo sus restos se perdieron durante unas obras, y nadie sabe con seguridad dónde están exactamente hoy.'
          },
          architecture: {
            adult: 'El retablo mayor, encargado a El Greco en 1577, constituye una rareza en su carrera: el propio pintor diseñó también la arquitectura del conjunto, además de pintar sus lienzos —entre ellos La Resurrección y los Santos Juanes—, en uno de los pocos ejemplos documentados de un pintor actuando como arquitecto en el Siglo de Oro español. La iglesia, de nave única, conserva el conjunto monástico reformado en el siglo XVI. Bajo el pavimento del presbiterio se sitúa la cripta donde fue enterrado el pintor cretense en 1614.',
            kids: '¡El Greco no solo pintó los cuadros de este convento, también diseñó él mismo cómo tenía que ser todo el altar, como si fuera arquitecto! Es una de las pocas veces en la historia que un pintor hizo también de arquitecto. La iglesia tiene una sola nave, y debajo del altar hay una cripta donde enterraron a El Greco hace más de 400 años.'
          },
          deepenFillers: {
            adult: [
              'El retablo original de El Greco para este convento fue desmontado en el siglo XVIII y sus lienzos se dispersaron; varias de aquellas pinturas se conservan hoy en museos de Estados Unidos.',
              'Las monjas de clausura que habitan hoy el convento, de la orden cisterciense, mantienen la elaboración artesanal de dulces conventuales, una tradición común a buena parte de los conventos toledanos.'
            ],
            kids: [
              '¡El altar original que pintó El Greco para este convento se desmontó hace mucho tiempo, y algunos de sus cuadros hoy están en museos de otro continente! 🌎',
              '¡Las monjas que viven aquí hoy hacen dulces artesanales, como muchas otras monjas de conventos de Toledo! 🍪'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Qué papel poco habitual desempeñó El Greco además de pintar los lienzos del retablo mayor?',
            options: ['Diseñó también la arquitectura del retablo', 'Financió toda la obra', 'Talló él mismo la madera'],
            correct: 0,
            reveal: '¡Diseñó también la arquitectura del retablo! 🎨 Fue uno de los pocos casos documentados de un pintor actuando como arquitecto en el Siglo de Oro.'
          },
          legends: {
            question: '¿Qué pasó con los restos de El Greco tras ser enterrado en la cripta de este convento en 1614?',
            options: ['Se trasladaron durante unas reformas y se perdieron', 'Siguen exactamente donde los dejaron', 'Fueron llevados a Grecia'],
            correct: 0,
            reveal: 'Se perdieron durante unas reformas del siglo XVII. 🔍 Una expedición de 1984 no pudo confirmar con certeza que sigan allí.'
          },
          architecture: {
            question: '¿Qué se esconde bajo el pavimento del presbiterio de esta iglesia?',
            options: ['La cripta donde fue enterrado El Greco', 'Un antiguo aljibe romano', 'Una capilla visigoda intacta'],
            correct: 0,
            reveal: '¡La cripta de El Greco! ⚰️ Está bajo el mismo altar cuyo diseño arquitectónico él mismo trazó en 1577.'
          }
        }
      },
      {
        id: 'palacio-fuensalida',
        name: { adult: 'Palacio de Fuensalida', kids: 'Palacio de Fuensalida — El Palacio donde Vivió una Emperatriz 👑' },
        subtitle: {
          adult: 'Palacio mudéjar vinculado a la emperatriz Isabel de Portugal',
          kids: '¡Aquí vivió la esposa de uno de los emperadores más poderosos de la historia!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'juderia', order: 2 },
        coords: [39.85638889, -4.02805556],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Palacio_de_Fuensalida_.jpg/330px-Palacio_de_Fuensalida_.jpg',
        audio: { duration: 150, title: { adult: 'Audioguía: Palacio de Fuensalida', kids: '¡Aventura Sonora: El Palacio donde Vivió una Emperatriz!' } },
        visitInfo: {
          hours: { adult: 'Sede institucional (Presidencia de Castilla-La Mancha): no tiene horario turístico regular, solo se visita por dentro en ocasiones puntuales o con autorización previa. La fachada y la plaza se ven en cualquier momento.', kids: 'Por fuera se ve siempre; por dentro casi nunca se puede entrar, ¡porque hoy es una oficina del gobierno!' },
          price: { adult: 'Gratis (cuando hay visita autorizada, no requiere entrada de pago).', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
        tabs: {
          history: {
            adult: 'Construido hacia 1440 por los primeros condes de Fuensalida, Pedro López de Ayala y Elvira de Castañeda, se trata de un soberbio palacio mudéjar con claras influencias góticas, según un modelo de inspiración hispanomusulmana implantado en Toledo desde mediados del siglo XIV. Su historia se vincula a figuras como Garcilaso de la Vega, El Greco o Lope de Vega, pero especialmente a Carlos I y su esposa, la emperatriz Isabel de Portugal, madre de Felipe II.',
            kids: 'Este palacio, construido hace casi 600 años, estuvo vinculado a la esposa de uno de los emperadores más poderosos de la historia de España, y también a varios escritores y pintores famosos.'
          },
          legends: {
            adult: 'A lo largo de su historia, el palacio ha tenido múltiples vidas: residencia nobiliaria, cuartel militar e incluso vivienda para vecinos, hasta que en 1964 fue adquirido por la Dirección General de Patrimonio Artístico para su restauración.',
            kids: '¡Este edificio ha sido de todo un poco a lo largo de los siglos: casa de nobles, cuartel militar, e incluso vivienda de vecinos normales, antes de convertirse en el monumento que es hoy!'
          },
          architecture: {
            adult: 'Tras su fachada sobria de estilo gótico-mudéjar se despliega un patio porticado con arcos sobre columnas, decorado con yeserías mudéjares y techumbres de madera policromada. La escalera principal conserva un artesonado plateresco del siglo XVI de gran riqueza ornamental, uno de los elementos mejor conservados del conjunto. Según la tradición, fue precisamente en una de estas estancias donde falleció en 1539 la emperatriz Isabel de Portugal, esposa de Carlos I, tras dar a luz a un hijo que no sobrevivió.',
            kids: '¡Por fuera parece un edificio sencillo, pero por dentro esconde un patio con columnas y techos de madera tallada y pintada! Su escalera tiene un techo de madera dorada precioso. Cuenta la tradición que en una de sus habitaciones murió, hace casi 500 años, la esposa de un emperador muy poderoso.'
          },
          deepenFillers: {
            adult: [
              'El palacio debe parte de su fama a haber servido de escenario, en 1526, para la firma de las capitulaciones matrimoniales entre Carlos I e Isabel de Portugal, la misma pareja cuya esposa moriría después en este edificio.',
              'Hoy es sede oficial de la Presidencia de la Junta de Comunidades de Castilla-La Mancha, uno de los pocos palacios mudéjares de Toledo que sigue teniendo un uso institucional activo en pleno siglo XXI.'
            ],
            kids: [
              '¡En este palacio se firmaron los papeles de la boda entre un emperador y su futura esposa, hace casi 500 años! 💍',
              '¡Hoy en día este palacio sigue usándose de verdad: es la sede del gobierno de Castilla-La Mancha! 🏛️'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Quiénes construyeron este palacio hacia 1440?',
            options: ['Los primeros condes de Fuensalida', 'Los Reyes Católicos', 'La familia de El Greco'],
            correct: 0,
            reveal: '¡Los primeros condes de Fuensalida, Pedro López de Ayala y Elvira de Castañeda! 👑 Es un soberbio palacio mudéjar con claras influencias góticas.'
          },
          legends: {
            question: '¿Qué usos ha tenido este edificio a lo largo de su historia, antes de su restauración en 1964?',
            options: ['Residencia nobiliaria, cuartel militar e incluso vivienda de vecinos', 'Solo ha sido siempre sede de gobierno', 'Fábrica de armas y después hospital'],
            correct: 0,
            reveal: '¡De todo un poco! 🏠 Ha sido casa de nobles, cuartel militar y hasta vivienda de vecinos normales antes de convertirse en el monumento que es hoy.'
          },
          architecture: {
            question: 'Según la tradición, ¿qué suceso importante ocurrió en una de las estancias de este palacio en 1539?',
            options: ['La muerte de la emperatriz Isabel de Portugal', 'La coronación de un rey', 'La firma de un tratado de paz'],
            correct: 0,
            reveal: '¡La muerte de la emperatriz Isabel de Portugal! 👑 Esposa de Carlos I, falleció allí tras dar a luz a un hijo que no sobrevivió.'
          }
        }
      },
      {
        id: 'casa-consistorial-toledo',
        name: { adult: 'Plaza del Ayuntamiento y Casa Consistorial', kids: 'Plaza del Ayuntamiento y Casa Consistorial — La Plaza de los Tres Poderes ⚖️' },
        subtitle: {
          adult: 'El edificio consistorial diseñado por Juan de Herrera y rematado por el hijo de El Greco',
          kids: '¡El hijo de un pintor muy famoso ayudó a terminar de construir este edificio!'
        },
        category: CATEGORIES.HISTORY,
        coords: [39.85655, -4.02498889],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Toledo_City_Council_01.jpg/330px-Toledo_City_Council_01.jpg',
        audio: { duration: 150, title: { adult: 'Audioguía: Plaza del Ayuntamiento', kids: '¡Aventura Sonora: La Plaza de los Tres Poderes!' } },
        visitInfo: {
          hours: { adult: 'La plaza es de acceso libre en cualquier momento. El interior del Ayuntamiento solo se visita en horario de oficina o con visita concertada.', kids: 'La plaza se puede ver siempre; por dentro del ayuntamiento no se suele entrar.' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
        tabs: {
          history: {
            adult: 'El Ayuntamiento se halla frente a la fachada principal de la Catedral y tiene su origen en el siglo XIV; a finales del siglo XVI se inició el actual edificio sobre otro mudéjar preexistente. El proyecto es obra del célebre arquitecto Juan de Herrera, autor también de El Escorial, cuyas obras comenzaron por la fachada principal.',
            kids: 'Este edificio se construyó sobre otro más antiguo, hace más de 400 años. Lo diseñó el mismo arquitecto que hizo el famoso monasterio de El Escorial, cerca de Madrid.'
          },
          legends: {
            adult: 'Tras la muerte del arquitecto que continuó la obra, Jorge Manuel Theotocópuli, hijo de El Greco, tomó las obras en sus manos en 1612, levantando el segundo piso y coronando el edificio con un pequeño frontón triangular donde colocó el escudo de la ciudad. El remate final de las dos torres con chapiteles barrocos de pizarra lo dio Teodoro Ardemans, que concluyó el edificio en 1703.',
            kids: '¡El hijo del pintor El Greco ayudó a terminar de construir este edificio! Añadió un piso entero y colocó el escudo de la ciudad en lo más alto.'
          },
          architecture: {
            adult: 'El edificio se organiza en dos plantas de fachada clasicista, con un cuerpo central rematado por el escudo de la ciudad y flanqueado por dos torres gemelas coronadas con chapiteles de pizarra, un remate característico de la arquitectura herreriana que también corona El Escorial. Situada frente a la Catedral, la plaza reúne simbólicamente el poder civil, religioso y judicial de la ciudad, un buen resumen del peso histórico de Toledo como capital.',
            kids: '¡El edificio tiene dos torres gemelas con la punta cubierta de pizarra gris, igual que el famoso monasterio de El Escorial! En el centro, arriba del todo, está el escudo de la ciudad. En esta plaza se juntan los edificios más importantes del poder de la ciudad: el ayuntamiento y la catedral, uno frente al otro.'
          },
          deepenFillers: {
            adult: [
              'El edificio se asienta sobre las antiguas casas consistoriales medievales, de las que se conservan algunos elementos reutilizados en los cimientos, visibles en intervenciones arqueológicas realizadas durante su restauración.',
              'Su salón de plenos conserva pinturas y tapices que narran episodios de la historia municipal de Toledo, y sigue siendo hoy el lugar donde se reúne el pleno del Ayuntamiento.'
            ],
            kids: [
              '¡Debajo de este edificio hay restos de un ayuntamiento todavía más viejo, de la Edad Media! Los arqueólogos los encontraron durante unas obras. 🏛️',
              '¡La sala donde se reúnen los políticos de Toledo hoy en día es la misma que se usa desde que se construyó el edificio, hace siglos! 🗳️'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Qué famoso arquitecto, autor también de El Escorial, diseñó el proyecto del Ayuntamiento?',
            options: ['Juan de Herrera', 'Alonso de Covarrubias', 'Rafael Moneo'],
            correct: 0,
            reveal: '¡Juan de Herrera! 🏛️ Sus obras comenzaron por la fachada principal, a finales del siglo XVI, sobre un edificio mudéjar anterior.'
          },
          legends: {
            question: '¿Quién continuó las obras del Ayuntamiento en 1612, levantando el segundo piso?',
            options: ['Jorge Manuel Theotocópuli, hijo de El Greco', 'El propio Juan de Herrera', 'Teodoro Ardemans'],
            correct: 0,
            reveal: '¡Jorge Manuel Theotocópuli, hijo de El Greco! 👨‍🎨 Coronó el edificio con un frontón triangular donde colocó el escudo de la ciudad.'
          },
          architecture: {
            question: '¿Quién dio el remate final a las dos torres del Ayuntamiento, con chapiteles barrocos de pizarra, en 1703?',
            options: ['Teodoro Ardemans', 'Juan de Herrera', 'El Greco'],
            correct: 0,
            reveal: '¡Teodoro Ardemans! 🗼 Sus torres gemelas de pizarra son un remate típico de la arquitectura herreriana, como la de El Escorial.'
          }
        }
      },
      {
        id: 'iglesia-san-pedro-martir',
        name: { adult: 'Iglesia de San Pedro Mártir', kids: 'Iglesia de San Pedro Mártir — El Convento Convertido en Universidad 🎓' },
        subtitle: {
          adult: 'Antiguo convento dominico, hoy sede universitaria',
          kids: '¡Este antiguo convento hoy es parte de una universidad!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'conventos', order: 4 },
        coords: [39.8579556, -4.0272897],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Convento_de_San_Pedro_M%C3%A1rtir_%28Toledo%29._Claustro_Real.jpg/330px-Convento_de_San_Pedro_M%C3%A1rtir_%28Toledo%29._Claustro_Real.jpg',
        audio: { duration: 150, title: { adult: 'Audioguía: Iglesia de San Pedro Mártir', kids: '¡Aventura Sonora: El Convento Convertido en Universidad!' } },
        visitInfo: {
          hours: { adult: 'Hoy es una facultad universitaria: el claustro se puede visitar libremente en horario lectivo (lunes a viernes, 8:00-21:30); la iglesia suele estar cerrada salvo eventos. Hay visitas guiadas concertadas por 3€.', kids: 'El patio se puede ver entre semana; la iglesia normalmente está cerrada.' },
          price: { adult: 'Gratis para el claustro; 3€ la visita guiada concertada.', kids: 'Gratis para pasear por el patio.' }
        },
        tabs: {
          history: {
            adult: 'La presencia dominica en Toledo comenzó con una fundación en 1230 bajo la advocación de San Pablo, en la Huerta del Granadal, y en 1407 los frailes se trasladaron dentro de las murallas, alegando problemas de salud por la humedad del río. La iglesia, ejemplo del clasicismo posherreriano, fue dirigida por Nicolás de Vergara el Mozo a partir de 1587, continuando las obras Juan Bautista Monegro desde 1607.',
            kids: 'Los frailes que vivían aquí se mudaron dentro de las murallas de la ciudad hace más de 600 años, porque decían que la humedad del río les hacía daño donde vivían antes.'
          },
          legends: {
            adult: 'Con el proceso de crecimiento y expansión, el convento llegó a formar un conjunto arquitectónico de veintiún edificios, funcionando prácticamente como una microciudad dentro de la propia Toledo. Tras la desamortización, el edificio tuvo varios usos hasta ser rehabilitado como complejo universitario, sede hoy de la Facultad de Ciencias Jurídicas y Sociales de la Universidad de Castilla-La Mancha.',
            kids: '¡Este convento llegó a tener 21 edificios propios, como una ciudad pequeña dentro de la propia Toledo! Hoy en día estudian aquí universitarios de verdad.'
          },
          architecture: {
            adult: 'La iglesia, ejemplo del clasicismo posherreriano toledano, fue dirigida desde 1587 por Nicolás de Vergara el Mozo, que trazó una fachada sobria de líneas rectas y proporciones clásicas, continuada desde 1607 por Juan Bautista Monegro. El claustro principal de los dominicos, el Claustro Real, es una importante obra renacentista proyectada por Alonso de Covarrubias en 1541 y ejecutada en piedra por Hernán González de Lara, con dos pisos de arcadas sobre columnas que organizan el conjunto conventual.',
            kids: '¡La iglesia tiene una fachada muy elegante y sencilla, sin demasiados adornos, diseñada por dos arquitectos que trabajaron uno detrás de otro! Su patio principal, con dos pisos de arcos sobre columnas, es una auténtica joya, diseñada por uno de los arquitectos más importantes del Renacimiento español.'
          },
          deepenFillers: {
            adult: [
              'En su iglesia se conserva el sepulcro del cardenal Juan Martínez Silíceo, arzobispo de Toledo célebre por instaurar los polémicos estatutos de limpieza de sangre en la Catedral en el siglo XVI.',
              'El Claustro Real, hoy rodeado de aulas universitarias, mantiene su función original de espacio de tránsito y encuentro, aunque ahora lo recorren estudiantes de Derecho en lugar de frailes dominicos.'
            ],
            kids: [
              '¡Dentro de la iglesia hay enterrado un arzobispo muy importante de Toledo, que vivió hace casi 500 años! ⚰️',
              '¡El patio principal, antes lleno de frailes, hoy está lleno de estudiantes universitarios caminando entre clase y clase! 🎓'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿En qué año comenzó la presencia dominica en Toledo, con una primera fundación bajo la advocación de San Pablo?',
            options: ['En 1230', 'En 1407', 'En 1587'],
            correct: 0,
            reveal: '¡En 1230! ⛪ Los frailes se trasladaron dentro de las murallas en 1407, alegando problemas de salud por la humedad del río.'
          },
          legends: {
            question: '¿Cuántos edificios llegó a tener este convento en su momento de mayor crecimiento?',
            options: ['Veintiuno', 'Tres', 'Cien'],
            correct: 0,
            reveal: '¡Veintiuno! 🏘️ Formaba casi una microciudad dentro de Toledo, hoy convertida en la Facultad de Ciencias Jurídicas y Sociales.'
          },
          architecture: {
            question: '¿Quién proyectó el Claustro Real de este convento en 1541?',
            options: ['Alonso de Covarrubias', 'Juan de Herrera', 'Rafael Moneo'],
            correct: 0,
            reveal: '¡Alonso de Covarrubias! 🏛️ Su obra renacentista fue ejecutada en piedra por Hernán González de Lara.'
          }
        }
      },
      {
        id: 'mezquita-tornerias',
        name: { adult: 'Mezquita de las Tornerías', kids: 'Mezquita de las Tornerías — La Mezquita Escondida en un Barrio Comercial 🛍️' },
        subtitle: {
          adult: 'Más de mil años de historia en pleno barrio comercial toledano',
          kids: '¡Esta mezquita antigua ha sido tienda, taller y hasta fábrica de velas!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'juderia', order: 6 },
        coords: [39.8585, -4.0228],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Mezquita_de_las_Torner%C3%ADas._Toledo.jpg/330px-Mezquita_de_las_Torner%C3%ADas._Toledo.jpg',
        audio: { duration: 150, title: { adult: 'Audioguía: Mezquita de las Tornerías', kids: '¡Aventura Sonora: La Mezquita Escondida en un Barrio Comercial!' } },
        visitInfo: {
          hours: { adult: 'Martes a sábado y festivos 10:00-15:00 y 16:00-18:00 (acceso hasta 30 min antes del cierre). Cerrado los lunes.', kids: 'Abre de martes a sábado. Los lunes está cerrada.' },
          price: { adult: '3€ general, 2€ reducida.', kids: '3€ la entrada.' }
        },
        tabs: {
          history: {
            adult: 'Esta mezquita data de finales del siglo IX, asentada sobre cimientos visigodos anteriores, situada en el antiguo Arrabal de Francos, junto al zoco de los bruñidores y sobre el zoco de los cambiadores, en el corazón de un barrio eminentemente comercial. El edificio aparece mencionado por primera vez en 1190, y la última vez que se cita como mezquita es en 1498, fecha que se toma como límite para su desacralización.',
            kids: 'Esta mezquita se construyó hace más de 1100 años, en un barrio donde se compraba y vendía de todo, entre puestos de artesanos y comerciantes.'
          },
          legends: {
            adult: 'A lo largo de los siglos la mezquita ha tenido muchos usos: fue mesón, viviendas humildes, bodegones, carpinterías, caldererías, fábrica de sombreros y de velas de sebo, antes de que en 1505 su propietario, el corregidor de Toledo don Pedro de Castilla, la donara al Hospital de la Misericordia.',
            kids: '¡A lo largo de la historia, este edificio ha sido de todo menos mezquita: posada, taller de sombreros, fábrica de velas y muchas cosas más!'
          },
          architecture: {
            adult: 'A diferencia de otras mezquitas toledanas, la sala de oración se sitúa en la planta alta del edificio, sobre unos bajos comerciales ocupados históricamente por los talleres de torneros que dan nombre al lugar, una disposición poco habitual en la arquitectura religiosa islámica. Su interior se reparte en tres espacios longitudinales, con arquerías de herradura apoyadas en columnas de acarreo cuyos capiteles y basas son de origen romano y visigodo. Actualmente alberga el Centro Regional de Artesanía de Castilla-La Mancha, que puede visitarse y acoge exposiciones temporales, un buen ejemplo de cómo Toledo reutiliza su patrimonio islámico.',
            kids: '¡Esta mezquita es rarísima porque está en el piso de arriba de un edificio, encima de tiendas de verdad! Abajo trabajaban los torneros, artesanos que daban forma a la madera y al metal con un torno, y arriba se rezaba. Dentro tiene tres pasillos separados por arcos de herradura, apoyados en columnas todavía más antiguas, romanas y visigodas. Hoy en día puedes visitarla y ver exposiciones de artesanía, en un edificio que lleva mil años en pie.'
          },
          deepenFillers: {
            adult: [
              'Su torre-mirador, añadida siglos después de la fundación islámica, ofrece hoy una de las escasas vistas elevadas y accesibles gratuitamente sobre los tejados del centro histórico de Toledo.',
              'Junto con la Mezquita del Cristo de la Luz y la iglesia de El Salvador, antigua mezquita también, forma parte de un reducido grupo de templos islámicos toledanos anteriores al siglo XI que han llegado hasta hoy.'
            ],
            kids: [
              '¡Desde la torre de este edificio se puede ver el tejado del centro de Toledo gratis, algo que no es nada fácil de encontrar en la ciudad! 🏙️',
              '¡Esta mezquita es una de las pocas mezquitas tan antiguas que quedan en pie en Toledo! Es un tesoro rarísimo. 🕌'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿De qué siglo data esta mezquita, asentada sobre cimientos visigodos anteriores?',
            options: ['De finales del siglo IX', 'Del siglo XV', 'Del siglo I'],
            correct: 0,
            reveal: '¡De finales del siglo IX! 🕌 Se situaba en el antiguo Arrabal de Francos, junto al zoco de los bruñidores y el de los cambiadores.'
          },
          legends: {
            question: '¿Cuál de estos NO fue uno de los usos que tuvo este edificio a lo largo de los siglos?',
            options: ['Fábrica de sombreros y velas de sebo', 'Cuartel militar permanente', 'Mesón y viviendas humildes'],
            correct: 1,
            reveal: 'Nunca fue cuartel militar. 🏚️ Sí fue mesón, viviendas, bodegones, carpinterías y hasta fábrica de sombreros y velas, antes de donarse en 1505 al Hospital de la Misericordia.'
          },
          architecture: {
            question: '¿Dónde se sitúa la sala de oración de esta mezquita, de forma poco habitual?',
            options: ['En la planta alta, sobre locales comerciales', 'Bajo tierra, en un sótano', 'En una torre exenta'],
            correct: 0,
            reveal: '¡En la planta alta! 🏢 Se sitúa sobre los bajos ocupados históricamente por talleres de torneros, una disposición rara entre las mezquitas toledanas.'
          }
        }
      },
      {
        id: 'plaza-san-vicente',
        name: { adult: 'Plaza de San Vicente', kids: 'Plaza de San Vicente — La Iglesia que se Convirtió en Discoteca 🎶' },
        subtitle: {
          adult: 'Una iglesia mudéjar con un pasado sorprendentemente moderno',
          kids: '¡Esta antigua iglesia llegó a ser discoteca antes de convertirse en centro de arte!'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'main', order: 2 },
        coords: [39.8596, -4.0252],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Toledo%2C_Iglesia_san_Vicente-PM_65615.jpg/330px-Toledo%2C_Iglesia_san_Vicente-PM_65615.jpg',
        audio: { duration: 150, title: { adult: 'Audioguía: Plaza de San Vicente', kids: '¡Aventura Sonora: La Iglesia que se Convirtió en Discoteca!' } },
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (plaza pública al aire libre).', kids: '¡Se puede visitar en cualquier momento, no tiene horario!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
        tabs: {
          history: {
            adult: 'La Iglesia de San Vicente fue fundada por Alfonso VI poco después de la conquista cristiana de la ciudad en el siglo XI. Hacia 1125 ya se la citaba como parroquia, aunque su parte más antigua conservada, el ábside, data de mediados del siglo XIII, con tres niveles de arquerías ciegas y arcos de herradura interiores que dan paso a capillas góticas del siglo XIV.',
            kids: 'Esta iglesia se construyó hace casi 1000 años, poco después de que los cristianos conquistaran Toledo. Su parte más antigua tiene casi 800 años.'
          },
          legends: {
            adult: 'A finales del siglo XVI sufrió graves daños estructurales que obligaron a una rehabilitación importante, con una nueva torre construida en 1599. Su uso religioso terminó en 1842, tras lo cual el edificio pasó a ser almacén, después museo, más tarde aulas universitarias, e incluso, ya en el siglo XX, una sala de fiestas, antes de convertirse en la sede actual del Círculo de Arte de Toledo.',
            kids: '¡Esta iglesia ha tenido vidas muy distintas! Ha sido almacén, museo, aulas de universidad, ¡e incluso una discoteca, antes de convertirse en lo que es hoy!'
          },
          architecture: {
            adult: 'Su ábside, la parte más antigua conservada, se articula en tres niveles de arquerías ciegas superpuestas con arcos de herradura, que dan paso en el interior a capillas góticas añadidas en el siglo XIV. La torre actual, reconstruida en 1599 tras los graves daños sufridos a finales del siglo XVI, sustituyó a la original. Entre las capillas del templo destaca la de Oballe, decorada por El Greco a comienzos del siglo XVII, uno de los detalles artísticos más valiosos que se conservan en el interior.',
            kids: '¡Su parte más vieja, el ábside, tiene tres pisos de arcos ciegos apilados uno sobre otro, como una tarta de piedra! Dentro hay capillas góticas añadidas hace más de 700 años. La torre que ves hoy no es la original: la reconstruyeron hace más de 400 años porque la primera se dañó. Y dentro hay una capilla decorada por el pintor El Greco, el mismo que pintó tantas obras famosas en Toledo.'
          },
          deepenFillers: {
            adult: [
              'El Círculo de Arte de Toledo, que ocupa hoy el edificio, organiza regularmente exposiciones temporales y conciertos, devolviendo a este antiguo templo una vida cultural activa tras siglos de usos muy dispares.',
              'La plaza que rodea la iglesia conserva un trazado urbano abierto poco habitual en el denso casco histórico toledano, posiblemente porque en origen sirvió como cementerio parroquial.'
            ],
            kids: [
              '¡Hoy en día aquí se hacen exposiciones de arte y conciertos de verdad! El edificio sigue lleno de vida cultural. 🎨',
              '¡La plaza de alrededor es más abierta de lo normal para el centro de Toledo, quizá porque antes fue el cementerio de la parroquia! ⛲'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Qué rey fundó esta iglesia poco después de la conquista cristiana de Toledo, en el siglo XI?',
            options: ['Alfonso VI', 'Alfonso X el Sabio', 'Carlos I'],
            correct: 0,
            reveal: '¡Alfonso VI! ⛪ Hacia 1125 ya se la citaba como parroquia, aunque su ábside, la parte más antigua, data de mediados del siglo XIII.'
          },
          legends: {
            question: '¿Qué sorprendente uso tuvo este edificio en el siglo XX, antes de convertirse en el Círculo de Arte de Toledo?',
            options: ['Sala de fiestas', 'Cárcel municipal', 'Fábrica de armas'],
            correct: 0,
            reveal: '¡Una sala de fiestas! 🎶 Antes había sido también almacén, museo y aulas universitarias, tras dejar de usarse como iglesia en 1842.'
          },
          architecture: {
            question: '¿Qué pintor decoró la Capilla de Oballe, en el interior de esta iglesia?',
            options: ['El Greco', 'Goya', 'Velázquez'],
            correct: 0,
            reveal: '¡El Greco! 🎨 La decoró a comienzos del siglo XVII, y es uno de los detalles artísticos más valiosos que se conservan en el templo.'
          }
        }
      },
      {
        id: 'convento-san-clemente',
        name: { adult: 'Convento de San Clemente', kids: 'Convento de San Clemente — La Cuna del Mazapán 🍬' },
        subtitle: {
          adult: 'Convento de clausura considerado el lugar de nacimiento del mazapán',
          kids: '¡Aquí se inventó el mazapán, hace más de 800 años!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'conventos', order: 3 },
        coords: [39.858108, -4.028364],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Toledo_-_Convento_de_San_Clemente_-_201102.jpg/330px-Toledo_-_Convento_de_San_Clemente_-_201102.jpg',
        audio: { duration: 150, title: { adult: 'Audioguía: Convento de San Clemente', kids: '¡Aventura Sonora: La Cuna del Mazapán!' } },
        visitInfo: {
          hours: { adult: 'Es un convento de clausura: no se visita el interior. Se puede comprar mazapán por el torno, normalmente por la mañana y a media tarde.', kids: 'No se puede entrar, ¡pero puedes comprar mazapán por una ventanita giratoria llamada torno!' },
          price: { adult: 'No hay entrada; solo se paga si compras dulces.', kids: 'No se paga entrada, ¡solo si compras dulces!' }
        },
        tabs: {
          history: {
            adult: 'El Monasterio de San Clemente fue fundado por Alfonso VI fuera de las murallas, y trasladado dentro de ellas por su nieto Alfonso VII el Emperador, siendo uno de los primeros conventos fundados en Toledo tras la Reconquista. Originalmente vinculado a la orden de Cluny, tras la reforma benedictina se adaptó a la regla cisterciense en 1117, incorporación que confirmó definitivamente el papa Alejandro III en 1180.',
            kids: 'Este convento es uno de los primeros que se fundaron en Toledo después de que los cristianos reconquistaran la ciudad, hace casi 1000 años.'
          },
          legends: {
            adult: 'Según la tradición, el mazapán en su versión actual se inventó en este convento a comienzos del siglo XIII, concretamente tras la batalla de las Navas de Tolosa en 1212, cuando el hambre se extendió por la región y las monjas idearon esta receta a base de almendra y azúcar. Hoy lo habitan monjas bernardas que siguen la regla "ora et labora", elaborando exquisitos dulces y mazapanes mientras mantienen su horario regular de oración.',
            kids: '¡Cuenta la tradición que el mazapán, ese dulce tan típico de Toledo, se inventó aquí dentro hace más de 800 años, en un año de mucha hambre, usando solo almendra y azúcar!'
          },
          architecture: {
            adult: 'Su iglesia actual, reconstruida en época barroca, sustituyó a fábricas medievales anteriores vinculadas a la primitiva regla cisterciense adoptada en 1117, cuando el convento dejó atrás su origen clunicense. El conjunto conventual, cerrado al público por tratarse de una clausura, conserva tras sus muros claustros y dependencias de distintas épocas que reflejan casi mil años de vida monástica ininterrumpida. En la portería, un torno permite comprar sin traspasar la clausura los dulces y mazapanes que las monjas siguen elaborando a mano.',
            kids: '¡La iglesia que ves hoy es más nueva, pero debajo esconde partes muchísimo más antiguas, de cuando el convento seguía otras reglas religiosas distintas, hace casi 1000 años! Aunque no se puede entrar porque las monjas viven en clausura, en la puerta hay una ventanita giratoria llamada torno por donde te pasan los dulces y el mazapán sin que os veáis las caras.'
          },
          deepenFillers: {
            adult: [
              'Las monjas bernardas del convento también elaboran otros dulces menos conocidos que el mazapán, como mantecados y yemas, siguiendo un recetario propio transmitido de generación en generación entre las religiosas.',
              'El gremio de pasteleros de Toledo llegó a litigar en el siglo XIX por el uso del nombre "mazapán de Toledo", en un intento de proteger la autenticidad de la receta original ligada a este convento.'
            ],
            kids: [
              '¡Las monjas también hacen otros dulces menos famosos que el mazapán, como mantecados y yemas, con recetas secretas de hace generaciones! 🍮',
              '¡Hace más de 100 años hubo hasta un pleito para decidir quién podía usar el nombre "mazapán de Toledo" de verdad! ⚖️'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Quién fundó este monasterio originalmente, fuera de las murallas de Toledo?',
            options: ['Alfonso VI', 'Fernando III el Santo', 'Carlos V'],
            correct: 0,
            reveal: '¡Alfonso VI! 👑 Su nieto Alfonso VII el Emperador lo trasladó después dentro de las murallas, siendo uno de los primeros conventos fundados tras la Reconquista.'
          },
          legends: {
            question: 'Según la tradición, ¿tras qué batalla se inventó el mazapán en este convento?',
            options: ['La batalla de las Navas de Tolosa (1212)', 'La conquista de Granada (1492)', 'La batalla de Lepanto (1571)'],
            correct: 0,
            reveal: '¡Tras las Navas de Tolosa! 🍬 En un año de mucha hambre, las monjas idearon esta receta a base de almendra y azúcar, a comienzos del siglo XIII.'
          },
          architecture: {
            question: '¿Qué regla monástica adoptó el convento en 1117, dejando atrás su origen clunicense?',
            options: ['La regla cisterciense', 'La regla benedictina original', 'La regla dominica'],
            correct: 0,
            reveal: '¡La regla cisterciense! 📜 El papa Alejandro III confirmó definitivamente esta incorporación en 1180.'
          }
        }
      },
      {
        id: 'termas-amador-rios',
        name: { adult: 'Termas Romanas de la Plaza de Amador de los Ríos', kids: 'Termas Romanas de la Plaza de Amador de los Ríos — Los Baños Romanos Escondidos bajo una Plaza 🛁' },
        subtitle: {
          adult: 'Restos de unas termas que revelan la monumentalidad del Toledo romano',
          kids: '¡Debajo de esta plaza tan tranquila se esconden unos baños romanos!'
        },
        category: CATEGORIES.HISTORY,
        coords: [39.8584168, -4.0252939],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Termas_Romanas_de_la_Plaza_de_Amador_de_los_R%C3%ADos%2C_Toledo_%286431432341%29.jpg/330px-Termas_Romanas_de_la_Plaza_de_Amador_de_los_R%C3%ADos%2C_Toledo_%286431432341%29.jpg',
        audio: { duration: 145, title: { adult: 'Audioguía: Termas Romanas de Amador de los Ríos', kids: '¡Aventura Sonora: Los Baños Romanos Escondidos bajo una Plaza!' } },
        visitInfo: {
          hours: { adult: 'Se ven desde el exterior, a través de un mirador acristalado, en cualquier momento.', kids: '¡Se pueden ver a través de un cristal, en cualquier momento del día!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
        tabs: {
          history: {
            adult: 'Los restos arqueológicos conservados en este lugar, conocidos desde 1986, ilustran la monumentalidad que debió de tener la ciudad de Toledo en época romana, siguiendo el modelo urbano imperante emanado de la capital del Imperio. La plaza toma su nombre de Rodrigo Amador de los Ríos, autor de la magnífica obra Monumentos arquitectónicos de España, publicada en 1905.',
            kids: 'Bajo esta plaza tranquila se esconden restos de unos baños romanos de hace casi 2000 años, descubiertos hace relativamente poco tiempo, en 1986.'
          },
          legends: {
            adult: 'La excavación de una necrópolis judía en Toledo fue uno de los últimos trabajos arqueológicos de Rodrigo Amador de los Ríos, y su muerte apenas cuatro meses después de publicar los resultados impidió consolidar un hallazgo que habría revolucionado la investigación sobre el mundo funerario medieval en la península.',
            kids: '¡El estudioso que da nombre a esta plaza hizo un descubrimiento importantísimo sobre un antiguo cementerio judío, pero murió muy poco después de publicarlo!'
          },
          architecture: {
            adult: 'Los restos conservados permiten reconocer la disposición típica de unas termas romanas, con vestigios del sistema de hipocausto —el suelo elevado sobre pilares de ladrillo que permitía la circulación de aire caliente— que caldeaba las salas de baño. Un mirador acristalado instalado en la propia plaza permite contemplar hoy estas estructuras sin necesidad de descender al nivel arqueológico, conservando su ubicación original bajo el trazado urbano actual. Es un ejemplo poco conocido pero revelador de la monumentalidad que tuvo el Toledo romano.',
            kids: '¡Debajo de esta plaza hay restos de un suelo elevado sobre columnitas de ladrillo! Servía para que el aire caliente circulara por debajo y calentara las salas de baño, como una especie de calefacción romana. Puedes verlo todo a través de un cristal instalado en la propia plaza, sin tener que bajar. ¡Imagina a los romanos bañándose justo donde tú caminas hoy!'
          },
          deepenFillers: {
            adult: [
              'Las termas formaban parte de un conjunto urbano romano más amplio, del que también se han hallado restos en otros puntos cercanos del centro histórico, en lo que fue un área residencial y de ocio relevante del Toletum romano.',
              'El sistema de hipocausto conservado aquí funcionaba junto a un praefurnium, el horno externo donde se generaba el aire caliente que después circulaba bajo el suelo de las salas de baño.'
            ],
            kids: [
              '¡Cerca de aquí se han encontrado más restos romanos! Este barrio era una zona importante de la ciudad romana, con casas y sitios de ocio. 🏛️',
              '¡El aire caliente que calentaba los baños se generaba en un horno especial fuera del edificio y luego viajaba por debajo del suelo! 🔥'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Desde qué año se conocen estos restos arqueológicos?',
            options: ['Desde 1986', 'Desde 1905', 'Desde 2010'],
            correct: 0,
            reveal: '¡Desde 1986! 🏺 Ilustran la monumentalidad que debió de tener Toledo en época romana, siguiendo el modelo urbano de la capital del Imperio.'
          },
          legends: {
            question: '¿Qué importante hallazgo arqueológico fue uno de los últimos trabajos de Rodrigo Amador de los Ríos?',
            options: ['La excavación de una necrópolis judía', 'El descubrimiento de estas mismas termas', 'Un tesoro visigodo'],
            correct: 0,
            reveal: '¡Una necrópolis judía! 📚 Murió apenas cuatro meses después de publicar los resultados, dejando el hallazgo sin consolidar del todo.'
          },
          architecture: {
            question: '¿Qué sistema de calefacción romana se reconoce en los restos de estas termas?',
            options: ['El hipocausto, con suelo elevado sobre pilares', 'Chimeneas de ladrillo visible', 'Braseros portátiles de bronce'],
            correct: 0,
            reveal: '¡El hipocausto! 🔥 El aire caliente circulaba bajo el suelo elevado sobre pilares de ladrillo, calentando así las salas de baño.'
          }
        }
      },
      {
        id: 'palacio-benacazon',
        name: { adult: 'Palacio de Benacazón', kids: 'Palacio de Benacazón — El Palacio del Conde Inventado 🎭' },
        subtitle: {
          adult: 'Antigua sede de la Inquisición, con un patio de historia inquietante',
          kids: '¡Un señor se inventó él solito un título de conde!'
        },
        category: CATEGORIES.HISTORY,
        coords: [39.8607285, -4.0217875],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Portada_del_Palacio_de_Benacaz%C3%B3n%2C_Toledo.jpg/330px-Portada_del_Palacio_de_Benacaz%C3%B3n%2C_Toledo.jpg',
        audio: { duration: 150, title: { adult: 'Audioguía: Palacio de Benacazón', kids: '¡Aventura Sonora: El Palacio del Conde Inventado!' } },
        visitInfo: {
          hours: { adult: 'Edificio de propiedad privada: no tiene horario turístico regular. Solo se ve la fachada desde la calle.', kids: 'Es de un dueño particular, así que solo se puede ver por fuera.' },
          price: { adult: 'Gratis ver la fachada; no se visita el interior.', kids: '¡Gratis mirarlo por fuera!' }
        },
        tabs: {
          history: {
            adult: 'El palacio que hoy lleva el nombre de Benacazón data probablemente de la época de Pedro I el Cruel, y fue también sede del Santo Oficio de la Inquisición; su patio central era conocido como Patio de los Presos. Perteneció antes a Fernán Pérez de Pantoja y fue casa solariega de las familias Pantoja y Gaytán.',
            kids: 'Este palacio tan antiguo fue durante un tiempo la sede de un tribunal muy importante de hace siglos, la Inquisición. Por eso a su patio central lo llamaban "el Patio de los Presos".'
          },
          legends: {
            adult: 'Entre 1920 y 1940 fue propiedad de Anastasio Páramo Barranco, que se atribuyó a sí mismo el título de conde de Benacazón, señor de Mocejón y Benacazón, dando nombre definitivo al edificio. Hacia 1970 fue adquirido por la Caja de Ahorro Provincial de Toledo, que lo rehabilitó para eventos culturales.',
            kids: '¡El nombre actual del palacio se lo puso un hombre que, hace unos 100 años, decidió inventarse a sí mismo el título de conde!'
          },
          architecture: {
            adult: 'De tres plantas y construcción ecléctica, mezcla en su fachada y su patio motivos románicos, mudéjares, talaveranos, góticos e italianizantes, reflejo de las sucesivas ampliaciones sufridas a lo largo de los siglos. Su patio central, de estilo mudéjar y decorado con yeserías y azulejos, es conocido históricamente como el Patio de los Presos, en recuerdo de su etapa como sede del Santo Oficio de la Inquisición. Tras su rehabilitación hacia 1970, el edificio se adaptó para acoger actos y eventos culturales sin perder su fisonomía original.',
            kids: '¡Este palacio mezcla un montón de estilos distintos, como si fuera un collage de siglos de historia! Su patio interior está decorado con yeso tallado y azulejos de colores, y se llama "el Patio de los Presos" porque aquí encerraban a la gente cuando el edificio era sede de un tribunal muy serio. Hoy en día se usa para eventos culturales, ¡pero conserva su aspecto de siempre!'
          },
          deepenFillers: {
            adult: [
              'Antes de su rehabilitación cultural, el edificio pasó por distintos usos y propietarios particulares a lo largo de los siglos XIX y XX, lo que explica algunas de las reformas eclécticas visibles en su fachada.',
              'La Caja de Ahorro Provincial de Toledo, que lo adquirió hacia 1970, mantuvo intencionadamente el nombre popular de "Palacio de Benacazón" pese a tratarse de un título nobiliario inventado, por ser ya el modo en que los toledanos conocían el edificio.'
            ],
            kids: [
              '¡Antes de ser un sitio para eventos, este palacio fue la casa normal de varias familias a lo largo de los siglos! Por eso tiene mezclas de estilos distintos. 🏠',
              '¡Aunque el título de conde era inventado, decidieron seguir llamando al palacio con ese nombre, porque así lo conocía ya toda la gente de Toledo! 🏷️'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿De la época de qué rey se cree que data este palacio?',
            options: ['Pedro I el Cruel', 'Carlos I', 'Alfonso X el Sabio'],
            correct: 0,
            reveal: '¡De Pedro I el Cruel! 👑 El palacio fue también sede del Santo Oficio de la Inquisición, y perteneció antes a las familias Pantoja y Gaytán.'
          },
          legends: {
            question: '¿Quién se atribuyó a sí mismo el título de conde de Benacazón, entre 1920 y 1940?',
            options: ['Anastasio Páramo Barranco', 'Fernán Pérez de Pantoja', 'Un noble portugués'],
            correct: 0,
            reveal: '¡Anastasio Páramo Barranco! 🎭 Se inventó el título él solito, y así fue como el palacio recibió el nombre que tiene hoy.'
          },
          architecture: {
            question: '¿Cómo se conoce históricamente el patio central de este palacio?',
            options: ['El Patio de los Presos', 'El Patio de las Flores', 'El Patio del Rey'],
            correct: 0,
            reveal: '¡El Patio de los Presos! ⛓️ El nombre recuerda su etapa como sede de la Inquisición, aunque hoy está decorado con yeserías y azulejos.'
          }
        }
      },
      {
        id: 'monasterio-madre-de-dios',
        name: { adult: 'Convento de la Madre de Dios', kids: 'Convento de la Madre de Dios — El Convento de las Hermanas Silva 👭' },
        subtitle: {
          adult: 'Convento fundado por dos hermanas nobles a finales del siglo XV',
          kids: '¡Dos hermanas nobles fundaron aquí un convento hace más de 500 años!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'conventos', order: 5 },
        coords: [39.857904, -4.026119],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Convento_Madre_de_Dios_02.JPG/330px-Convento_Madre_de_Dios_02.JPG',
        audio: { duration: 145, title: { adult: 'Audioguía: Convento de la Madre de Dios', kids: '¡Aventura Sonora: El Convento de las Hermanas Silva!' } },
        visitInfo: {
          hours: { adult: 'Es un convento de clausura: no se visita el interior con regularidad, aunque se organizan visitas guiadas puntuales al claustro. Se puede comprar dulces por el torno.', kids: 'No se suele poder entrar, ¡pero puedes comprar dulces por una ventanita giratoria!' },
          price: { adult: 'No hay entrada; solo se paga si compras dulces.', kids: 'No se paga entrada, ¡solo si compras dulces!' }
        },
        tabs: {
          history: {
            adult: 'El convento fue fundado a finales del siglo XV por Leonor y María de Silva, hijas del conde de Cifuentes, como convento femenino de la orden dominica. El complejo creció desde finales del siglo XV hasta mediados del XVII, dando lugar al típico conjunto conventual articulado en torno a patios.',
            kids: 'Este convento lo fundaron dos hermanas nobles hace más de 500 años, para que vivieran allí monjas dominicas.'
          },
          legends: {
            adult: 'Durante las obras de rehabilitación del complejo conventual se llevaron a cabo diversas actividades arqueológicas, especialmente en la zona antes ocupada por la huerta de las monjas, donde se hallaron restos de diferentes épocas: romana, medieval y moderna.',
            kids: '¡Cuando se hicieron obras en este convento, los arqueólogos encontraron restos de muchísimas épocas distintas enterrados en el antiguo huerto de las monjas!'
          },
          architecture: {
            adult: 'Combina los estilos mudéjar, renacentista y barroco, fruto de un crecimiento que se prolongó desde finales del siglo XV hasta mediados del XVII. Destaca su portada mudéjar del siglo XIV, que evoca la arquitectura de los Reales Alcázares de Sevilla y la Alhambra, y su claustro renacentista de planta trapezoidal a dos alturas, organizado en torno a patios como es habitual en los conventos toledanos. Integrado hoy en la universidad, bajo su antigua huerta se hallaron durante las obras de rehabilitación restos arqueológicos de época romana, medieval y moderna.',
            kids: '¡Su entrada está decorada de una forma que recuerda a los palacios árabes más famosos de España, como la Alhambra! El convento se construyó poco a poco durante casi 150 años, mezclando varios estilos distintos. Su patio principal tiene dos alturas y forma de trapecio, ¡una figura geométrica con lados desiguales! Y bajo el antiguo huerto de las monjas se encontraron restos de épocas muy distintas escondidos bajo tierra.'
          },
          deepenFillers: {
            adult: [
              'El convento fue integrado en el campus de la Universidad de Castilla-La Mancha a finales del siglo XX, combinando su función religiosa original, que continúa activa en parte del recinto, con un uso académico en las zonas rehabilitadas.',
              'Las fundadoras, Leonor y María de Silva, pertenecían a una de las familias nobles más influyentes de la Toledo de finales del siglo XV, vinculada al condado de Cifuentes.'
            ],
            kids: [
              '¡Hoy en día parte de este convento forma parte de la universidad! Mezcla vida religiosa de siempre con estudiantes modernos. 🎓',
              '¡Las dos hermanas que fundaron el convento pertenecían a una familia noble muy importante de Toledo, hace más de 500 años! 👑'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Quiénes fundaron este convento a finales del siglo XV?',
            options: ['Leonor y María de Silva, hijas del conde de Cifuentes', 'Los Reyes Católicos', 'Santa Teresa de Jesús'],
            correct: 0,
            reveal: '¡Leonor y María de Silva! 👭 Lo fundaron como convento femenino de la orden dominica, hijas del conde de Cifuentes.'
          },
          legends: {
            question: '¿De qué épocas eran los restos hallados bajo la antigua huerta de las monjas?',
            options: ['Romana, medieval y moderna', 'Solo de época visigoda', 'Solo del siglo XX'],
            correct: 0,
            reveal: '¡Romana, medieval y moderna! 🏺 Aparecieron durante las obras de rehabilitación del complejo conventual.'
          },
          architecture: {
            question: '¿A qué palacios evoca la portada mudéjar del siglo XIV de este convento?',
            options: ['A los Reales Alcázares de Sevilla y la Alhambra', 'A El Escorial', 'Al Palacio Real de Madrid'],
            correct: 0,
            reveal: '¡A los Reales Alcázares de Sevilla y la Alhambra! 🕌 Su claustro renacentista tiene planta trapezoidal y dos alturas.'
          }
        }
      },
      {
        id: 'cigarrales-toledo',
        name: { adult: 'Cigarrales de Toledo', kids: 'Cigarrales de Toledo — Las Casas de Campo de las Cigarras 🎶' },
        subtitle: {
          adult: 'Las tradicionales fincas de recreo a orillas del Tajo',
          kids: '¡Su nombre viene del sonido de las cigarras cantando en verano!'
        },
        category: CATEGORIES.HIDDEN,
        coords: [39.8627518, -4.0456210],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Camino_de_los_Cigarrales_%28alrededores_de_Toledo%29.jpg/330px-Camino_de_los_Cigarrales_%28alrededores_de_Toledo%29.jpg',
        audio: { duration: 145, title: { adult: 'Audioguía: Cigarrales de Toledo', kids: '¡Aventura Sonora: Las Casas de Campo de las Cigarras!' } },
        visitInfo: {
          hours: { adult: 'Zona de fincas privadas: se contempla desde los miradores y caminos públicos en cualquier momento.', kids: 'Se ven desde fuera, ¡en cualquier momento del día!' },
          price: { adult: 'Gratis contemplarlos desde el exterior.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
        tabs: {
          history: {
            adult: 'Un cigarral es una finca tradicional toledana situada en el entorno inmediato de la ciudad, generalmente en la margen sur del Tajo, compuesta por una casa de campo rodeada de jardines, arboledas y tierras de labor. Sus antecedentes se encuentran en las villas romanas y, especialmente, en las huertas de recreo islámicas, pensadas para mitigar el calor estival combinando agua, vegetación y frescor.',
            kids: 'Los cigarrales son casas de campo tradicionales que rodean Toledo, situadas al otro lado del río. La idea de construir casas así viene de hace muchísimos siglos, desde época romana y árabe.'
          },
          legends: {
            adult: 'Una de las teorías más extendidas sobre el origen del término cigarral hace referencia a la presencia de cigarras en los márgenes del Tajo, cuyo característico sonido acompañaba las jornadas estivales. Durante los siglos XVI y XVII, con la capitalidad de Carlos I en Toledo entre 1519 y 1561, la nobleza y el clero encontraron en estas fincas su lugar de esparcimiento estival, huyendo del bullicio de la capital.',
            kids: '¡El nombre "cigarral" viene del sonido de las cigarras, esos insectos que cantan tanto en verano! Cuando Toledo fue capital de España, hace 500 años, los nobles construían aquí sus casas de vacaciones.'
          },
          architecture: {
            adult: 'La disposición típica de un cigarral combina una casa principal encalada con huertas escalonadas en la ladera y jardines de cipreses y frutales, aprovechando los desniveles del terreno para crear terrazas con distintas vistas sobre el Tajo. El escritor Tirso de Molina inmortalizó estas fincas en su obra "Los Cigarrales de Toledo" (1624), dando fama literaria a este paisaje. Hoy los cigarrales siguen siendo sinónimo de exclusividad, con vistas privilegiadas sobre la ciudad amurallada desde la otra orilla del río, y muchos de ellos convertidos en espacios para eventos y hostelería.',
            kids: '¡Una casa de cigarral típica es blanca, con jardines escalonados como si fueran peldaños gigantes en la ladera de la colina! Tienen árboles frutales y cipreses muy altos. Un escritor muy famoso, Tirso de Molina, escribió hace casi 400 años un libro entero sobre estas casas. Desde estas casas de campo se puede ver toda la ciudad de Toledo, con sus torres y murallas, al otro lado del río.'
          },
          deepenFillers: {
            adult: [
              'Uno de los cigarrales más célebres llegó a alojar a personajes como Federico García Lorca durante el siglo XX, continuando la tradición literaria de estas fincas iniciada por Tirso de Molina siglos antes.',
              'Muchos cigarrales conservan aljibes y sistemas de riego de origen andalusí, reutilizados durante siglos para mantener los huertos y jardines pese a la escasez de agua típica del verano toledano.'
            ],
            kids: [
              '¡Un escritor muy famoso, Federico García Lorca, se quedó una temporada en uno de estos cigarrales hace unos 100 años! ✍️',
              '¡Muchos cigarrales todavía usan pozos y sistemas de riego antiguos, de hace más de 1000 años, para regar sus jardines en verano! 💧'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿En qué construcciones antiguas se inspiran los cigarrales, según sus antecedentes históricos?',
            options: ['Villas romanas y huertas de recreo islámicas', 'Castillos medievales', 'Templos visigodos'],
            correct: 0,
            reveal: '¡Villas romanas y huertas islámicas! 🌳 Estaban pensadas para combatir el calor del verano combinando agua, vegetación y frescor.'
          },
          legends: {
            question: '¿De qué sonido viene, según la teoría más extendida, el nombre "cigarral"?',
            options: ['Del canto de las cigarras', 'Del color rojizo de la tierra', 'De un antiguo apellido noble'],
            correct: 0,
            reveal: '¡Del canto de las cigarras! 🎶 Acompañaba las jornadas de verano en los márgenes del Tajo, cuando la nobleza venía aquí a descansar.'
          },
          architecture: {
            question: '¿Qué escritor dedicó una obra entera a estas fincas, titulada "Los Cigarrales de Toledo" (1624)?',
            options: ['Tirso de Molina', 'Miguel de Cervantes', 'Lope de Vega'],
            correct: 0,
            reveal: '¡Tirso de Molina! ✍️ Su obra dio fama literaria a estas casas escalonadas de huertas, cipreses y frutales sobre la ladera del Tajo.'
          }
        }
      },
      {
        id: 'iglesia-salvador',
        name: { adult: 'Iglesia de El Salvador', kids: 'Iglesia de El Salvador — La Iglesia con Columnas Robadas a los Romanos 🏛️' },
        subtitle: {
          adult: 'Antigua mezquita construida reutilizando columnas romanas y visigodas',
          kids: '¡Sus columnas son en realidad recicladas de un templo mucho más antiguo!'
        },
        category: CATEGORIES.HISTORY,
        coords: [39.85664444, -4.02677222],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Iglesia_del_Salvador._Toledo.jpg/330px-Iglesia_del_Salvador._Toledo.jpg',
        audio: { duration: 150, title: { adult: 'Audioguía: Iglesia de El Salvador', kids: '¡Aventura Sonora: La Iglesia con Columnas Robadas a los Romanos!' } },
        visitInfo: {
          hours: { adult: 'Todos los días 10:00-18:45 (1 de marzo a 15 de octubre) o 10:00-17:45 (16 de octubre a 28 de febrero); domingos abre a las 11:30.', kids: 'Abre todos los días, por la mañana y por la tarde.' },
          price: { adult: '4€ entrada individual, o 14€ con la Pulsera Turística de Toledo Monumental (incluye 7 monumentos, válida 7 días).', kids: '4€, o 14€ con una pulsera especial que sirve para entrar en 7 sitios distintos de Toledo.' },
          link: 'https://tickets.toledomonumental.com/es/767-toledo-monumental/4296-pulsera-turistica-de-toledo'
        },
        tabs: {
          history: {
            adult: 'La Iglesia de El Salvador fue originalmente una mezquita hispanomusulmana construida en el siglo IX, considerada la iglesia más antigua de la ciudad. Se trata de un templo del siglo XII construido sobre una mezquita taifa del siglo XI, que a su vez fue una ampliación de una mezquita omeya del siglo IX levantada sobre un edificio religioso visigodo anterior.',
            kids: 'Esta iglesia empezó siendo una mezquita hace casi 1200 años, ¡pero se construyó encima de un templo todavía más antiguo, de los visigodos!'
          },
          legends: {
            adult: 'La iglesia conserva una arquería de herradura en la nave de la epístola, compuesta por siete soportes, de los cuales seis son columnas romanas y uno es una pilastra visigoda decorada con escenas de milagros de Cristo relacionadas con la Resurrección. Excavaciones recientes han revelado restos de estructuras romanas y visigodas bajo la iglesia, permitiendo explorar la historia oculta de este templo.',
            kids: '¡Mira bien sus columnas! Casi todas son romanas de verdad, reutilizadas aquí hace muchos siglos, y una de ellas tiene tallada una escena religiosa visigoda muy antigua.'
          },
          architecture: {
            adult: 'La arquería de herradura de la nave de la epístola se sostiene sobre siete soportes de procedencia diversa: seis son columnas romanas de mármol, con capiteles también reaprovechados de distintos edificios anteriores, y el séptimo es la célebre pilastra visigoda, que representa escenas como la curación del ciego, la resurrección de Lázaro o la curación de la mujer del flujo de sangre. Esta mezcla de materiales reutilizados, o spolia, es habitual en la arquitectura mudéjar toledana. Excavaciones recientes bajo el suelo de la iglesia han sacado a la luz estructuras romanas y visigodas anteriores.',
            kids: '¡Los siete pilares que sostienen los arcos de esta iglesia no son todos iguales! Seis son columnas romanas de mármol, recicladas de otro edificio todavía más antiguo, y la séptima es la famosa columna visigoda tallada con dibujos que cuentan historias de la Biblia, ¡tallada hace más de 1300 años! Es como si hubieran hecho la iglesia con piezas de un puzle gigante de distintas épocas.'
          },
          deepenFillers: {
            adult: [
              'Bajo el suelo de la iglesia se han documentado también restos de una necrópolis visigoda, con enterramientos anteriores incluso a la primera mezquita que ocupó este mismo solar.',
              'La torre de la iglesia, de origen mudéjar, conserva vanos geminados con arcos de herradura entrelazados que la emparentan estilísticamente con la cercana Mezquita del Cristo de la Luz.'
            ],
            kids: [
              '¡Debajo del suelo de esta iglesia hay tumbas visigodas todavía más antiguas que la primera mezquita que hubo aquí! ⚰️',
              '¡Su torre tiene ventanas dobles con arcos entrelazados, muy parecidas a las de la mezquita más famosa de Toledo! 🕌'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Sobre qué se construyó la mezquita omeya del siglo IX que dio origen a esta iglesia?',
            options: ['Sobre un edificio religioso visigodo anterior', 'Sobre un teatro romano', 'Sobre un palacio árabe'],
            correct: 0,
            reveal: '¡Sobre un edificio religioso visigodo! ⛪ Esta iglesia es considerada la más antigua de Toledo, tras varias capas de construcciones superpuestas.'
          },
          legends: {
            question: '¿Qué tipo de escenas representa la pilastra visigoda de esta iglesia?',
            options: ['La vida de Santiago', 'Milagros de Cristo relacionados con la Resurrección', 'La conquista de Toledo'],
            correct: 1,
            reveal: 'Milagros de Cristo relacionados con la Resurrección. ✨ Es una auténtica joya histórica entre las siete columnas que sostienen la nave.'
          },
          architecture: {
            question: '¿De qué material son la mayoría de las columnas reutilizadas en la arquería de la nave de la epístola?',
            options: ['Ladrillo mudéjar', 'Madera de cedro', 'Mármol romano reutilizado'],
            correct: 2,
            reveal: '¡Mármol romano reutilizado! 🏛️ Seis de los siete soportes son columnas romanas recicladas de edificios todavía más antiguos.'
          }
        }
      },
      {
        id: 'torre-miradero',
        name: { adult: 'Torre del Miradero', kids: 'Torre del Miradero — El Palacio Diseñado por un Arquitecto Premiado 🏆' },
        subtitle: {
          adult: 'Un moderno palacio de congresos diseñado por Rafael Moneo, incrustado en la ladera',
          kids: '¡Un edificio moderno diseñado por uno de los arquitectos más premiados de España!'
        },
        category: CATEGORIES.HISTORY,
        coords: [39.8610525, -4.0210495],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Toledo%2C_eskal%C3%A1tory_%28002%29.jpg/330px-Toledo%2C_eskal%C3%A1tory_%28002%29.jpg',
        audio: { duration: 145, title: { adult: 'Audioguía: Torre del Miradero', kids: '¡Aventura Sonora: El Palacio Diseñado por un Arquitecto Premiado!' } },
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (mirador exterior al aire libre).', kids: '¡Se puede visitar en cualquier momento, no tiene horario!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
        tabs: {
          history: {
            adult: 'El Palacio de Congresos de Toledo, situado junto a la Plaza de Zocodover sobre un abrupto promontorio que rodea el Tajo, fue diseñado en el año 2000 por el arquitecto Rafael Moneo, ganador del Premio Príncipe de Asturias de las Artes, junto al urbanista Joan Busquets, y se presentó en junio de 2001.',
            kids: 'Este moderno edificio lo diseñó, hace unos 25 años, uno de los arquitectos españoles más premiados del mundo.'
          },
          legends: {
            adult: 'El edificio, bautizado en honor a El Greco, hace referencia en su diseño al juego de luces y formas alargadas característico del pintor renacentista que vivió en Toledo. Moneo concibió una estructura parcialmente incrustada en la ladera de la ciudad, usando piedra y ladrillo para reflejar las texturas históricas de Toledo.',
            kids: '¡El edificio se llama así en honor al pintor El Greco! Su diseño juega con la luz y las formas alargadas, igual que hacía el propio pintor en sus cuadros.'
          },
          architecture: {
            adult: 'Con una superficie total de 12.000 metros cuadrados repartidos en varias plantas, buena parte de ellas semienterradas en la ladera para reducir el impacto visual sobre el conjunto histórico, el edificio combina piedra, ladrillo y hormigón visto. Su fachada escalonada desciende siguiendo el desnivel natural del terreno, y los jardines del Miradero en la azotea ofrecen espacios exteriores con vistas panorámicas sobre el río Tajo y el perfil de la ciudad, funcionando además como una plaza pública elevada.',
            kids: '¡Este edificio tan moderno mide 12.000 metros cuadrados, como dos campos de fútbol juntos! Buena parte está escondida dentro de la propia colina, para no estropear las vistas del Toledo antiguo. Está hecho de piedra, ladrillo y hormigón. En la azotea hay unos jardines con unas vistas espectaculares sobre el río y toda la ciudad, ¡como una plaza en el aire!'
          },
          deepenFillers: {
            adult: [
              'El edificio se levanta sobre el antiguo emplazamiento del Miradero, un mirador histórico ya mencionado en textos del siglo XVI como uno de los puntos tradicionales desde los que los toledanos contemplaban la vega del Tajo.',
              'Rafael Moneo ganó posteriormente el Premio Pritzker de Arquitectura, considerado el más prestigioso del mundo en esta disciplina, lo que sitúa a este edificio toledano entre las obras de un arquitecto de referencia internacional.'
            ],
            kids: [
              '¡Este edificio se construyó donde antes había un mirador tradicional, del que la gente de Toledo ya hablaba hace 500 años! 👀',
              '¡El arquitecto que lo diseñó ganó después uno de los premios más importantes del mundo para arquitectos! 🏆'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Qué arquitecto español, ganador del Premio Príncipe de Asturias de las Artes, diseñó este edificio en el año 2000?',
            options: ['Rafael Moneo', 'Santiago Calatrava', 'Alonso de Covarrubias'],
            correct: 0,
            reveal: '¡Rafael Moneo! 🏆 Diseñó el Palacio de Congresos junto al urbanista Joan Busquets, y se presentó en junio de 2001.'
          },
          legends: {
            question: '¿En honor a qué pintor está bautizado este edificio?',
            options: ['El Greco', 'Goya', 'Velázquez'],
            correct: 0,
            reveal: '¡El Greco! 🎨 Su diseño juega con la luz y las formas alargadas, igual que hacía el propio pintor en sus cuadros toledanos.'
          },
          architecture: {
            question: '¿Cuántos metros cuadrados tiene en total este edificio?',
            options: ['12.000 metros cuadrados', '1.200 metros cuadrados', '50.000 metros cuadrados'],
            correct: 0,
            reveal: '¡12.000 metros cuadrados! 📐 Buena parte está semienterrada en la ladera, para no estropear las vistas del Toledo histórico.'
          }
        }
      },
      {
        id: 'puente-azarquiel',
        name: { adult: 'Puente de Azarquiel (Puente de Piedra)', kids: 'Puente de Azarquiel (Puente de Piedra) — El Puente del Astrónomo 🔭' },
        subtitle: {
          adult: 'Un puente moderno con nombre del gran astrónomo andalusí de Toledo',
          kids: '¡Este puente lleva el nombre de un astrónomo que estudiaba las estrellas hace 900 años!'
        },
        category: CATEGORIES.HISTORY,
        coords: [39.861111, -4.016417],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Puente_de_Azarquiel._Toledo.jpg/330px-Puente_de_Azarquiel._Toledo.jpg',
        audio: { duration: 140, title: { adult: 'Audioguía: Puente de Azarquiel', kids: '¡Aventura Sonora: El Puente del Astrónomo!' } },
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (puente al aire libre).', kids: '¡Se puede cruzar en cualquier momento, no tiene horario!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
        tabs: {
          history: {
            adult: 'El puente de Azarquiel es un puente moderno construido sobre el río Tajo que conecta el barrio de Santa Bárbara y la estación de tren AVE con el casco histórico de Toledo, inaugurado el 19 de junio de 1984. Se construyó para atender las necesidades del entonces incipiente polígono industrial, la estación de ferrocarril y el barrio de Santa Bárbara, ya que el trazado estrecho y sinuoso del anterior Puente Nuevo de Alcántara, abierto en 1933, resultaba insuficiente.',
            kids: 'Este puente moderno se construyó hace unos 40 años, para conectar mejor la estación de tren y algunos barrios con el centro histórico de Toledo.'
          },
          legends: {
            adult: 'Durante siglos, Toledo solo pudo cruzar el Tajo por los puentes de Alcántara y San Martín, lo que constituía el mejor método de defensa de la ciudad. El proyecto se llamó inicialmente puente de Safont y puente de Galiana, pero finalmente recibió el nombre de Azarquiel, en honor al célebre astrónomo andalusí toledano, a petición de la Real Academia de Bellas Artes y Ciencias Históricas de Toledo.',
            kids: '¡Durante siglos, solo se podía cruzar el río por dos puentes muy antiguos! Este puente moderno se llama así en honor a un astrónomo de Toledo que vivió hace casi 1000 años y que estudiaba las estrellas.'
          },
          architecture: {
            adult: 'Obra de ingeniería civil moderna en hormigón, el puente salva el cauce del Tajo con un tablero apoyado en pilas esbeltas, una solución típica del ingeniero Carlos Fernández Casado, especializado en grandes puentes de hormigón en toda España. El equipo que lo diseñó, junto a Javier Manterola, tuvo la clara intención de crear una obra discreta que no interfiriera con las vistas del histórico puente de Alcántara y el paisaje medieval típico de la ciudad, primando la funcionalidad sobre el protagonismo estético.',
            kids: '¡Este puente está hecho de hormigón, el material que se usa para construir carreteras y edificios modernos! Se apoya en unas columnas finas y fuertes que cruzan de lado a lado el río. Los ingenieros que lo diseñaron quisieron que este puente moderno no estropeara las vistas del puente antiguo y del paisaje histórico de Toledo, ¡así que lo hicieron sencillo a propósito!'
          },
          deepenFillers: {
            adult: [
              'El astrónomo Azarquiel, que da nombre al puente, trabajó en Toledo en el siglo XI y es célebre por perfeccionar el astrolabio y por elaborar las Tablas Toledanas, un catálogo astronómico usado en Europa durante siglos.',
              'El puente sustituyó en la práctica al histórico Puente Nuevo de Alcántara de 1933, que había quedado insuficiente para el tráfico rodado moderno pese a tener apenas medio siglo de antigüedad.'
            ],
            kids: [
              '¡El astrónomo que da nombre a este puente vivió en Toledo hace casi 1000 años y ayudó a mejorar un instrumento para estudiar las estrellas, el astrolabio! 🔭',
              '¡Antes de este puente había otro más nuevo que ya se había quedado pequeño para tantos coches, aunque tenía menos de 50 años! 🚗'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿En qué fecha se inauguró el Puente de Azarquiel?',
            options: ['El 19 de junio de 1984', 'El 1 de enero de 1933', 'El 12 de octubre de 1992'],
            correct: 0,
            reveal: '¡El 19 de junio de 1984! 🌉 Se construyó para conectar mejor el barrio de Santa Bárbara y la estación de tren con el casco histórico.'
          },
          legends: {
            question: '¿Con qué nombres se conoció inicialmente el proyecto de este puente, antes de llamarse Azarquiel?',
            options: ['Puente de Safont y puente de Galiana', 'Puente Nuevo y puente Real', 'Puente del Rey y puente de la Reina'],
            correct: 0,
            reveal: '¡Puente de Safont y puente de Galiana! 📜 Finalmente se llamó Azarquiel en honor al astrónomo andalusí toledano, a petición de la Real Academia.'
          },
          architecture: {
            question: '¿Qué material moderno se usó para construir este puente?',
            options: ['Hormigón', 'Madera reforzada', 'Piedra caliza'],
            correct: 0,
            reveal: '¡Hormigón! 🏗️ El ingeniero Carlos Fernández Casado, especializado en grandes puentes de hormigón, formó parte del equipo que lo diseñó.'
          }
        }
      },
      {
        id: 'comendadoras-santiago',
        name: { adult: 'Convento de las Comendadoras de Santiago', kids: 'Convento de las Comendadoras de Santiago — El Convento de las Guerreras de Santiago ⚔️' },
        subtitle: {
          adult: 'Monjas vinculadas a la Orden Militar de Santiago, con siglos de tradición dulcera',
          kids: '¡Estas monjas pertenecen a una orden militar y hacen dulces con recetas muy antiguas!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'conventos', order: 7 },
        coords: [39.860722, -4.026250],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Claustro_de_la_Mona._Toledo.jpg/330px-Claustro_de_la_Mona._Toledo.jpg',
        audio: { duration: 150, title: { adult: 'Audioguía: Convento de las Comendadoras de Santiago', kids: '¡Aventura Sonora: El Convento de las Guerreras de Santiago!' } },
        visitInfo: {
          hours: { adult: 'Es un convento de clausura: no tiene horario turístico regular ni visitas garantizadas al interior.', kids: 'Es un convento donde viven monjas, así que normalmente no se puede entrar.' },
          price: { adult: 'Gratis ver la fachada; no se visita el interior con regularidad.', kids: '¡Gratis mirarlo por fuera!' }
        },
        tabs: {
          history: {
            adult: 'La Orden de las Comendadoras de Santiago se fundó en 1175 en Palencia, y en 1502 los Reyes Católicos enviaron a las hermanas comendadoras a Toledo, concretamente al Convento de Santa Fe. En 1935, las monjas se trasladaron al Claustro de la Mona y los edificios adyacentes, parte del antiguo monasterio de Santo Domingo el Real.',
            kids: 'Estas monjas pertenecen a una orden fundada hace más de 800 años, vinculada a los caballeros de una orden militar española. Viven en este convento desde hace unos 90 años.'
          },
          legends: {
            adult: 'El claustro que hoy ocupan, el Claustro de la Mona, fue diseñado por Diego de Alcántara, buen conocedor de la arquitectura de Herrera, que trabajó como aparejador en la construcción del Alcázar de Toledo. En 1961 las hermanas abrieron un parvulario y más tarde comenzaron a elaborar dulces artesanales tras recibir recetas centenarias de las comendadoras del convento de Granada.',
            kids: '¡Las monjas de este convento hacen dulces siguiendo recetas secretas que tienen más de un siglo de antigüedad, aprendidas de otras monjas de Granada!'
          },
          architecture: {
            adult: 'El Claustro de la Mona, sede actual de las comendadoras desde 1935, fue diseñado por Diego de Alcántara, buen conocedor de la arquitectura de Herrera, que trabajó como aparejador en la construcción del Alcázar de Toledo. Forma parte del antiguo conjunto del monasterio de Santo Domingo el Real, del que las monjas ocupan hoy el claustro y los edificios adyacentes. Estas comendadoras de clausura, vinculadas a la Orden Militar de los Caballeros de Santiago, elaboran en su obrador dulces artesanales como los pastelillos de té, la pasta bonita y las castañas de mazapán bañadas en chocolate.',
            kids: '¡El patio donde viven hoy estas monjas se llama el Claustro de la Mona, y lo diseñó un arquitecto que también trabajó en la construcción del Alcázar de Toledo! Forma parte de un monasterio todavía más grande y antiguo. Estas monjas de clausura pertenecen a una orden de caballeros medievales, y en su obrador hacen dulces como castañas de mazapán bañadas en chocolate, con recetas que llevan siglos pasando de monja en monja.'
          },
          deepenFillers: {
            adult: [
              'La Orden de Santiago a la que pertenecen estas comendadoras es una de las grandes órdenes militares españolas surgidas durante la Reconquista, aunque su rama femenina siguió un desarrollo propio y distinto al de los caballeros.',
              'El nombre "Claustro de la Mona" con el que se conoce su sede actual no tiene relación con el animal, sino que procede de una antigua denominación popular cuyo origen exacto se ha perdido con el tiempo.'
            ],
            kids: [
              '¡La orden de estas monjas es una de las grandes órdenes de caballeros que lucharon hace siglos durante la Reconquista! ⚔️',
              '¡El nombre "Claustro de la Mona" no tiene que ver con el animal! Nadie recuerda ya de dónde salió exactamente ese nombre tan curioso. 🤔'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿En qué ciudad se fundó originalmente la Orden de las Comendadoras de Santiago, en 1175?',
            options: ['Toledo', 'Palencia', 'Granada'],
            correct: 1,
            reveal: '¡En Palencia! 📜 Los Reyes Católicos enviaron a las hermanas a Toledo en 1502, al Convento de Santa Fe.'
          },
          legends: {
            question: '¿Qué relación tuvo con el Alcázar de Toledo el arquitecto del Claustro de la Mona, Diego de Alcántara?',
            options: ['Trabajó como aparejador en su construcción', 'Lo diseñó él solo por completo', 'Vivió allí de joven'],
            correct: 0,
            reveal: '¡Trabajó como aparejador en su construcción! 🏰 Era buen conocedor de la arquitectura de Herrera, y aplicó ese estilo en el claustro de las comendadoras.'
          },
          architecture: {
            question: '¿A qué antiguo monasterio pertenecía originalmente el Claustro de la Mona, sede actual de las comendadoras?',
            options: ['Al monasterio de Santo Domingo el Real', 'Al monasterio de San Clemente', 'A la Catedral de Toledo'],
            correct: 0,
            reveal: '¡Al monasterio de Santo Domingo el Real! 🏛️ Las comendadoras se trasladaron allí en 1935, y siguen ocupando el claustro y edificios adyacentes.'
          }
        }
      },
      {
        id: 'iglesia-san-andres',
        name: { adult: 'Iglesia de San Andrés', kids: 'Iglesia de San Andrés — La Iglesia de las Momias 💀' },
        subtitle: {
          adult: 'Alberga el mayor conjunto de momias conocido en toda España',
          kids: '¡En su cripta hay 50 momias que llevan siglos conservadas!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'main', order: 8 },
        coords: [39.854472, -4.024058],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Toledo_-_San_Andres.jpg/330px-Toledo_-_San_Andres.jpg',
        audio: { duration: 155, title: { adult: 'Audioguía: Iglesia de San Andrés', kids: '¡Aventura Sonora: La Iglesia de las Momias!' } },
        visitInfo: {
          hours: { adult: 'La iglesia abre en horario de misa. La visita a las momias es limitada y se organiza directamente con la parroquia: conviene confirmar disponibilidad antes de ir.', kids: 'La iglesia abre cuando hay misa. Para ver las momias hay que preguntar antes en la propia iglesia.' },
          price: { adult: 'Entrada a la iglesia gratuita; la visita a las momias puede tener un coste que fija la propia parroquia.', kids: 'Entrar a la iglesia es gratis; para ver las momias puede haber que pagar un poco.' }
        },
        tabs: {
          history: {
            adult: 'La primera noticia documental de esta iglesia data del año 1150, cuando se cita un incendio a raíz del cual tuvo que reedificarse ese mismo siglo. A comienzos del siglo XIV se añadieron el crucero y la capilla de la Epifanía, combinando elementos mudéjares y góticos con reformas barrocas del siglo XVII.',
            kids: 'Esta iglesia se construyó hace casi 900 años, aunque tuvo que reconstruirse después de un incendio muy pronto en su historia.'
          },
          legends: {
            adult: 'La iglesia alberga el mayor conjunto de momias conocido en España, con 50 cuerpos descubiertos en su cripta en la década de 1960. Los rostros de estas momias, que revelan un sentimiento de dolor y angustia, descansan hoy en el mismo lugar, protegidos bajo un cristal que permite contemplarlas sin alterar el microclima que las ha preservado durante más de dos siglos.',
            kids: '¡En el sótano de esta iglesia se descubrieron, hace unos 60 años, ni más ni menos que 50 momias! Todavía se pueden ver hoy, protegidas detrás de un cristal.'
          },
          architecture: {
            adult: 'El claustro mudéjar, datable en torno a finales del siglo XII, conserva restos de ese estilo original tanto dentro del templo como en sus dos portadas, ambas enmarcadas con arco de herradura. A comienzos del siglo XIV se añadieron el crucero y la Capilla de la Epifanía, en un estilo de transición entre lo mudéjar y lo gótico, mientras que reformas del siglo XVII incorporaron elementos barrocos que conviven hoy con la fábrica medieval original. Esta mezcla de estilos superpuestos convierte a San Andrés en un buen ejemplo de cómo las iglesias toledanas se fueron ampliando siglo tras siglo.',
            kids: '¡Sus puertas de entrada tienen forma de arco de herradura, un estilo típico de los constructores mudéjares de hace 800 años! Después, hace más de 700 años, le añadieron una parte nueva llamada crucero y una capilla especial. Y todavía más tarde, hace unos 400 años, le pusieron decoraciones barrocas. ¡Esta iglesia ha ido creciendo y cambiando poquito a poco durante siglos, como un dibujo hecho por varias manos distintas!'
          },
          deepenFillers: {
            adult: [
              'Se cree que la extraordinaria conservación de las momias se debe a un microclima muy seco y estable en la cripta, un fenómeno de momificación natural, sin que mediara ningún proceso artificial de embalsamamiento.',
              'Los cuerpos hallados en la cripta corresponderían, según los estudios realizados, a distintas familias de la parroquia enterradas a lo largo de varios siglos, y no a un único suceso puntual.'
            ],
            kids: [
              '¡Las momias se conservaron solas, de forma natural, gracias a que el aire de la cripta es muy seco! Nadie las momificó a propósito. 🏜️',
              '¡No son todas de la misma época! Se fueron enterrando ahí distintas familias del barrio a lo largo de varios siglos. 👨‍👩‍👧‍👦'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Qué suceso obligó a reedificar esta iglesia poco después de su primera mención documental, en 1150?',
            options: ['Un incendio', 'Un terremoto', 'Una inundación del Tajo'],
            correct: 0,
            reveal: '¡Un incendio! 🔥 Tuvo que reedificarse ese mismo siglo, y a comienzos del XIV se añadieron el crucero y la capilla de la Epifanía.'
          },
          legends: {
            question: '¿Cuántas momias se descubrieron en la cripta de esta iglesia en la década de 1960?',
            options: ['50', '5', '500'],
            correct: 0,
            reveal: '¡50 momias! 👻 Es el mayor conjunto de momias conocido en España, protegido hoy bajo un cristal que preserva el microclima de la cripta.'
          },
          architecture: {
            question: '¿De qué época data el claustro mudéjar de esta iglesia?',
            options: ['De finales del siglo XII', 'Del siglo XX', 'De época romana'],
            correct: 0,
            reveal: '¡De finales del siglo XII! 🕍 Sus dos portadas conservan ese estilo, enmarcadas con arco de herradura.'
          }
        }
      },
      {
        id: 'puerta-alarcones',
        name: { adult: 'Puerta de Alarcones', kids: 'Puerta de Alarcones — La Puerta Escondida cerca de Zocodover 🚪' },
        subtitle: {
          adult: 'La puerta más antigua de Toledo que conserva su ubicación original',
          kids: '¡Es la puerta más antigua que sigue exactamente en su sitio original!'
        },
        category: CATEGORIES.HISTORY,
        coords: [39.861126, -4.023231],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Espa%C3%B1a_-_Toledo_-_Puerta_de_Alarcones_001.JPG/330px-Espa%C3%B1a_-_Toledo_-_Puerta_de_Alarcones_001.JPG',
        audio: { duration: 145, title: { adult: 'Audioguía: Puerta de Alarcones', kids: '¡Aventura Sonora: La Puerta Escondida cerca de Zocodover!' } },
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (puerta exterior).', kids: '¡Se puede visitar en cualquier momento, no tiene horario!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
        tabs: {
          history: {
            adult: 'La Puerta de Alarcones tiene origen visigodo y, más tarde, durante el periodo islámico, se convirtió en uno de los principales accesos a la ciudad. Es la puerta más antigua de Toledo que se conserva en su ubicación original, muy cerca de la Puerta del Sol y la Plaza de Zocodover. Su primera mención escrita aparece en 1216, cuando un documento mozárabe la llama Puerta Mohaguía.',
            kids: 'Esta es la puerta más antigua de Toledo que sigue exactamente en el mismo lugar donde se construyó, hace más de 1300 años.'
          },
          legends: {
            adult: 'Más tarde se conoció como Puerta Alta de la Herrería, mientras que la Puerta del Sol era la Puerta Baja de la Herrería, ya que en esa zona trabajaban los herreros. Durante el periodo islámico fue uno de los accesos más importantes, por el que entraban a Toledo los visitantes más distinguidos, formando junto a la Puerta del Sol un sistema defensivo común.',
            kids: '¡Por esta puerta entraban a la ciudad los visitantes más importantes, hace muchos siglos! Cerca de aquí trabajaban también los herreros, artesanos que forjaban el hierro.'
          },
          architecture: {
            adult: 'Perdió importancia en el siglo XIV, cuando se convirtió en entrada secundaria frente a la cercana Puerta del Sol; su arco de herradura originario se transformó entonces en arco de medio punto para permitir el paso de carros. Construida en mampostería y sillarejo, formaba junto a la Puerta del Sol un sistema defensivo conjunto que protegía este flanco de la muralla urbana. En 1921 fue declarada Monumento Nacional junto con el resto de puertas y murallas de Toledo.',
            kids: '¡Con el tiempo, la forma de su arco cambió para que pudieran pasar los carros! Está construida con piedras y ladrillos colocados a mano, y trabajaba en equipo con la Puerta del Sol para proteger esta parte de la muralla, como dos guardianes vecinos. Hoy está protegida como monumento nacional, igual que el resto de puertas de la muralla.'
          },
          deepenFillers: {
            adult: [
              'A diferencia de otras puertas más monumentales de Toledo, esta pasa fácilmente desapercibida por su reducido tamaño y su ubicación discreta muy cerca del bullicio de Zocodover, pese a ser posiblemente la más antigua en su emplazamiento original.',
              'Su nombre actual, "de Alarcones", se documenta más tardíamente que sus otras denominaciones históricas, y su origen concreto sigue sin estar del todo aclarado por los historiadores.'
            ],
            kids: [
              '¡Esta puerta es tan pequeña que mucha gente pasa por al lado sin darse cuenta de que está ahí, aunque puede que sea la más antigua de todo Toledo en su sitio original! 👀',
              '¡Nadie sabe con seguridad de dónde viene exactamente su nombre actual, "de Alarcones"! Es un pequeño misterio sin resolver. 🕵️'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿En qué año aparece la primera mención escrita de esta puerta, en un documento mozárabe que la llama "Puerta Mohaguía"?',
            options: ['En 1216', 'En 711', 'En 1492'],
            correct: 0,
            reveal: '¡En 1216! 📜 Es la puerta más antigua de Toledo que se conserva en su ubicación original, con origen visigodo.'
          },
          legends: {
            question: '¿Cómo se conoció más tarde a esta puerta, en referencia a los artesanos que trabajaban cerca?',
            options: ['Puerta Alta de la Herrería', 'Puerta de los Plateros', 'Puerta de los Zapateros'],
            correct: 0,
            reveal: '¡Puerta Alta de la Herrería! ⚒️ La Puerta del Sol, cercana, era la Puerta Baja de la Herrería: en esa zona trabajaban los herreros.'
          },
          architecture: {
            question: '¿En qué se transformó el arco de herradura original de esta puerta en el siglo XIV?',
            options: ['En un arco de medio punto', 'En un arco apuntado gótico', 'En una puerta sin arco'],
            correct: 0,
            reveal: '¡En un arco de medio punto! 🚪 El cambio permitió el paso de carros, cuando la puerta perdió su papel como entrada principal.'
          }
        }
      },
      {
        id: 'plaza-santa-teresa',
        name: { adult: 'Plaza de Santa Teresa', kids: 'Plaza de Santa Teresa — La Plaza de la Santa Escritora 📖' },
        subtitle: {
          adult: 'Pequeña plaza junto al convento fundado por Santa Teresa de Jesús',
          kids: '¡Una santa muy famosa fundó aquí un convento hace más de 450 años!'
        },
        category: CATEGORIES.HIDDEN,
        coords: [39.859629, -4.031443],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Monument_to_Saint_Teresa_of_Jesus_-_Toledo_04.jpg/330px-Monument_to_Saint_Teresa_of_Jesus_-_Toledo_04.jpg',
        audio: { duration: 145, title: { adult: 'Audioguía: Plaza de Santa Teresa', kids: '¡Aventura Sonora: La Plaza de la Santa Escritora!' } },
        visitInfo: {
          hours: { adult: 'Acceso libre, sin horario fijo (plaza pública al aire libre).', kids: '¡Se puede visitar en cualquier momento, no tiene horario!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
        tabs: {
          history: {
            adult: 'Esta pequeña plaza ajardinada se esconde tras las murallas, junto al Paseo del Recaredo, a pocos metros de la Puerta del Cambrón. La fundación toledana de Santa Teresa de Jesús fue la quinta que estableció la santa, el 14 de mayo de 1569, gracias a un rico mercader llamado Martín Ramírez que dejó dinero en su testamento para fundar una iglesia.',
            kids: 'Esta plaza tan pequeña y tranquila está junto a un convento fundado por una santa muy famosa hace más de 450 años, gracias al dinero que dejó un rico comerciante.'
          },
          legends: {
            adult: 'Inicialmente, el convento se ubicó en una casa de la calle San Juan de Dios, en la judería toledana, pero un año después se trasladó a su emplazamiento actual en la Plaza de Santa Teresa, muy cerca de la Puerta del Cambrón, donde continúa hoy.',
            kids: '¡El convento no empezó aquí, sino en otra calle! Se mudó a este lugar solo un año después de fundarse, y desde entonces sigue en el mismo sitio.'
          },
          architecture: {
            adult: 'La plaza está flanqueada por un antiguo edificio y el Convento de San José, de mediados del siglo XVI, de las Carmelitas Descalzas, la orden que la propia Santa Teresa fundó y en la que todavía residen algunas monjas; una escultura moderna de la santa, obra del escultor toledano Luis Pablo Gómez Vidales, preside hoy el espacio.',
            kids: '¡En medio de la plaza hay una estatua moderna de la santa que le da nombre! Justo al lado sigue habiendo monjas viviendo, siguiendo la orden que ella misma fundó.'
          },
          deepenFillers: {
            adult: [
              'Santa Teresa de Jesús narró en sus escritos autobiográficos algunos episodios sobre las dificultades económicas y los obstáculos que tuvo que superar para conseguir asentar definitivamente esta fundación toledana.',
              'El Convento de San José de Toledo conserva entre sus reliquias objetos personales vinculados a la propia santa, en una tradición de veneración que se mantiene activa entre las Carmelitas Descalzas que aún residen en el lugar.'
            ],
            kids: [
              '¡Santa Teresa escribió ella misma sobre las dificultades que tuvo para conseguir fundar este convento en Toledo, hace más de 450 años! ✍️',
              '¡Dentro del convento se guardan objetos que pertenecieron de verdad a la propia santa, como reliquias muy especiales! 🙏'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Gracias a quién pudo Santa Teresa fundar este convento en 1569?',
            options: ['A un rico mercader llamado Martín Ramírez', 'A los Reyes Católicos', 'A un cardenal toledano'],
            correct: 0,
            reveal: '¡A Martín Ramírez! 💰 Este mercader dejó dinero en su testamento para fundar la iglesia, y fue la quinta fundación de la santa.'
          },
          legends: {
            question: '¿Dónde se ubicó el convento antes de trasladarse a la Plaza de Santa Teresa?',
            options: ['En una casa de la calle San Juan de Dios, en la judería', 'En el Alcázar', 'Fuera de las murallas de la ciudad'],
            correct: 0,
            reveal: '¡En una casa de la judería! 🏠 Solo un año después se trasladó a su emplazamiento actual, junto a la Puerta del Cambrón.'
          },
          architecture: {
            question: '¿Qué preside hoy el centro de esta plaza?',
            options: ['Una escultura moderna de Santa Teresa', 'Una fuente', 'Un reloj de sol'],
            correct: 0,
            reveal: '¡Una escultura moderna de la santa! 🗿 Es obra del escultor toledano Luis Pablo Gómez Vidales, junto al Convento de San José.'
          }
        }
      }
];
