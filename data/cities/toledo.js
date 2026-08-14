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
            kids: '¡Las columnas de dentro son tan viejas que las trajeron de otro edificio todavía más antiguo! En las paredes hay pinturas de hace más de 700 años, con santos y escenas religiosas. ¡Casi parece un libro de dibujos gigante pintado en la pared!'
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
            adult: 'Declaradas Bien de Interés Cultural en 2008, las cuevas conservan su estructura original de opus caementicium recubierta de cemento hidráulico, visitables hoy como uno de los rincones subterráneos más enigmáticos de la ciudad.',
            kids: '¡Bajar a estas cuevas es como viajar al mismísimo Imperio Romano! Sus paredes de piedra llevan casi 2000 años en pie.'
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
            adult: 'Una placa conmemorativa en la pared de la calle recuerda hoy la leyenda a los visitantes, en uno de los rincones más recogidos y evocadores de la antigua judería.',
            kids: '¡Todavía hoy puedes ver una placa en la pared que recuerda esta historia tan antigua y tan triste!'
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
            adult: 'A pesar de todas las intervenciones, el circo no se ha desenterrado en su totalidad, pues existen construcciones modernas sobre parte de sus estructuras; sus restos quedan hoy repartidos entre el Parque Escolar y el Paseo del Circo Romano.',
            kids: '¡Aunque hoy solo se ven algunos restos, imagina este lugar lleno de gente animando a los carros de caballos en sus carreras!'
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
            adult: 'Se encuentra cerca de la Puerta Nueva de Bisagra, en la zona norte del casco histórico, y debe su nombre a su ubicación en los antiguos arrabales, los barrios que quedaban fuera de las murallas de la ciudad.',
            kids: '¡Su nombre viene de que antiguamente estaba fuera de las murallas de la ciudad, en un barrio de las afueras!'
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
            adult: 'En las partes bajas se reutilizaron sillares de épocas anteriores, mientras que en las zonas media y alta se empleó la mampostería toledana típica del mudéjar, con ladrillo y tapial. Con la pérdida de su valor defensivo, sus primitivos arcos de herradura se transformaron en arcos de medio punto.',
            kids: '¡Si te fijas bien, verás piedras y ladrillos de épocas muy distintas mezclados en la misma puerta, como un rompecabezas de la historia!'
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
            adult: 'Templo mudéjar de origen medieval, situado extramuros de la ciudad, que sigue siendo hoy escenario de gran devoción popular, especialmente ligado a la festividad de la Virgen del Valle.',
            kids: '¡Está fuera de las antiguas murallas de Toledo, en una zona tranquila junto a la vega del río!'
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
            adult: 'La Roca Tarpeya ofrece unas vistas formidables sobre el meandro del Tajo y los cigarrales de la otra orilla, un mirador natural que el propio escultor convirtió en parte esencial de su obra y legado.',
            kids: '¡Desde aquí las vistas sobre el río son espectaculares! No es de extrañar que un artista quisiera vivir y trabajar en un sitio tan bonito.'
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
            adult: 'Alberga algunas de las obras más destacadas del pintor, como el retablo de La Resurrección y los Santos Juanes, en un conjunto monástico reformado en el siglo XVI que combina la antigüedad de sus orígenes con la riqueza artística del Siglo de Oro.',
            kids: '¡Dentro se pueden ver algunos de los primeros cuadros que El Greco pintó al llegar a Toledo!'
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
            adult: 'Su fachada sobria apenas deja intuir la riqueza artística que aguarda tras sus muros: patios porticados, yeserías mudéjares y artesonados policromados, entre ellos una escalera con artesonado plateresco del siglo XVI.',
            kids: '¡Por fuera parece un edificio sencillo, pero por dentro esconde patios y techos de madera tallada y pintada muy elaborados!'
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
            adult: 'Situada frente a la Catedral, esta plaza reúne simbólicamente el poder civil, religioso y judicial de la ciudad, un buen resumen del peso histórico de Toledo como capital.',
            kids: '¡En esta plaza se juntan los edificios más importantes del poder de la ciudad: el ayuntamiento y la catedral, uno frente al otro!'
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
            adult: 'El claustro principal de los dominicos, el Claustro Real, es una importante obra renacentista proyectada por Alonso de Covarrubias en 1541 y ejecutada en piedra por Hernán González de Lara.',
            kids: '¡Su patio principal es una auténtica joya, diseñado por uno de los arquitectos más importantes del Renacimiento español!'
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
            adult: 'Actualmente alberga el Centro Regional de Artesanía de Castilla-La Mancha, que puede visitarse y acoge exposiciones temporales, un buen ejemplo de cómo Toledo reutiliza su patrimonio islámico.',
            kids: '¡Hoy en día puedes visitarla y ver exposiciones de artesanía, en un edificio que lleva mil años en pie!'
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
            adult: 'La capilla de Oballe, decorada por El Greco en el siglo XVII, es uno de los detalles artísticos más valiosos que se conservan en el interior del templo.',
            kids: '¡Dentro hay una capilla decorada por el pintor El Greco, el mismo que pintó tantas obras famosas en Toledo!'
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
            adult: 'Es un convento de clausura, por lo que las visitas son limitadas, aunque cuenta con una tienda y un espacio expositivo en la entrada donde se pueden adquirir los famosos dulces elaborados por las propias monjas.',
            kids: '¡Aunque no se puede visitar por dentro porque las monjas viven en clausura, sí puedes comprar en la puerta los dulces que ellas mismas preparan!'
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
            adult: 'El yacimiento es de acceso gratuito y permite ver directamente las estructuras de las termas romanas, un ejemplo poco conocido pero revelador del pasado imperial de la ciudad.',
            kids: '¡Puedes entrar gratis a ver estos restos tan antiguos, escondidos justo debajo de la plaza por la que pasea la gente cada día!'
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
            adult: 'Construcción ecléctica de tres plantas con motivos románicos, mudéjares, talaveranos, góticos e italianizantes; su patio, de estilo mudéjar, se decora con yeserías y azulejos, sus principales atractivos.',
            kids: '¡Su patio interior está decorado con yeso tallado y azulejos de colores, una auténtica mezcla de estilos artísticos!'
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
            adult: 'Combina los estilos mudéjar, renacentista y barroco, integrado hoy en la universidad; destaca su portada mudéjar del siglo XIV, que evoca la arquitectura de los Reales Alcázares de Sevilla y la Alhambra, y su claustro renacentista de planta trapezoidal a dos alturas.',
            kids: '¡Su entrada está decorada de una forma que recuerda a los palacios árabes más famosos de España, como la Alhambra!'
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
            adult: 'Hoy los cigarrales siguen siendo sinónimo de exclusividad y paisaje, con vistas privilegiadas sobre la ciudad amurallada desde la otra orilla del Tajo, y muchos de ellos convertidos en espacios para eventos y hostelería.',
            kids: '¡Desde estas casas de campo se puede ver toda la ciudad de Toledo, con sus torres y murallas, al otro lado del río!'
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
            adult: 'La pilastra visigoda, auténtica joya histórica del templo, representa escenas como la curación del ciego, la resurrección de Lázaro o la curación de la mujer del flujo de sangre.',
            kids: '¡Busca la columna más especial de todas, tallada por los visigodos con dibujos que cuentan historias de la Biblia, hace más de 1300 años!'
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
            adult: 'Con una superficie total de 12.000 metros cuadrados, su fachada escalonada y los jardines del Miradero en la azotea ofrecen espacios exteriores con vistas panorámicas sobre el río Tajo y el perfil de la ciudad.',
            kids: '¡En la azotea del edificio hay unos jardines con unas vistas espectaculares sobre el río y toda la ciudad!'
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
            adult: 'El equipo de ingenieros que lo diseñó, entre ellos Carlos Fernández Casado y Javier Manterola, tuvo la clara intención de crear una obra discreta que no interfiriera con las vistas del histórico puente de Alcántara y el paisaje medieval típico de la ciudad.',
            kids: '¡Los ingenieros que lo diseñaron quisieron que este puente moderno no estropeara las vistas del puente antiguo y del paisaje histórico de Toledo!'
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
            adult: 'Estas monjas de clausura forman parte integral de la Orden Militar de los Caballeros de Santiago, y entre sus dulces típicos destacan los pastelillos de té, la pasta bonita y las castañas de mazapán bañadas en chocolate.',
            kids: '¡Puedes comprar sus dulces típicos, como castañas de mazapán bañadas en chocolate, hechos con recetas que llevan siglos pasando de monja en monja!'
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
            adult: 'El claustro mudéjar es datable en torno a finales del siglo XII; de este estilo quedan restos dentro del templo y en las dos portadas, ambas enmarcadas con arco de herradura.',
            kids: '¡Sus puertas de entrada tienen forma de arco de herradura, un estilo típico de los constructores mudéjares de hace 800 años!'
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
            adult: 'Perdió importancia en el siglo XIV, cuando se convirtió en entrada secundaria; su arco de herradura se transformó en arco de medio punto para permitir el paso de carros, y en 1921 fue declarada Monumento Nacional junto con el resto de puertas y murallas de Toledo.',
            kids: '¡Con el tiempo, la forma de su arco cambió para que pudieran pasar los carros! Hoy está protegida como monumento nacional, igual que el resto de puertas de la muralla.'
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
          }
        }
      }
];
