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
// CIUDADES: cada una con su propio centro/zoom/límites de mapa y su
// propia lista de POIs. STATE.cityId (en app.js) decide cuál se carga.
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
    pois: [
      {
        id: 'catedral-primada',
        name: {
          adult: 'Catedral Primada Santa María de Toledo',
          kids: 'La Catedral Mágica ✨'
        },
        subtitle: {
          adult: 'Obra maestra del gótico español',
          kids: 'Un castillo de piedra con agujas de sol'
        },
        category: CATEGORIES.HISTORY,
        coords: [39.8568, -4.0244],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Cathedral_of_Toledo_%287079311505%29.jpg/330px-Cathedral_of_Toledo_%287079311505%29.jpg',
        audio: {
          duration: 182,
          title: {
            adult: 'Audioguía: Catedral Primada',
            kids: '¡Aventura Sonora: La Catedral Mágica!'
          }
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
        }
      },
      {
        id: 'puerta-bisagra',
        name: {
          adult: 'Puerta de Bisagra',
          kids: 'La Puerta de los Reyes 👑'
        },
        subtitle: {
          adult: 'Acceso monumental mudéjar a la ciudad',
          kids: 'Una puerta de castillo de verdad'
        },
        category: CATEGORIES.HISTORY,
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
        }
      },
      {
        id: 'mirador-valle',
        name: {
          adult: 'Mirador del Valle',
          kids: 'El Mirador de los Sueños 🌅'
        },
        subtitle: {
          adult: 'La mejor panorámica de la Ciudad Imperial',
          kids: '¡Las mejores vistas de todo Toledo!'
        },
        category: CATEGORIES.HIDDEN,
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
        }
      },
      {
        id: 'restaurante-sorbona',
        fictional: true, // parada de ambientación: no existe como tal en Toledo, ver §documentación
        name: {
          adult: 'Restaurante La Sorbona',
          kids: '¡La Casa de las Comidas! 🍽️'
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
          kids: 'La Iglesia del Caballero ⚔️'
        },
        subtitle: {
          adult: 'Hogar de "El Entierro del Conde de Orgaz" de El Greco',
          kids: '¡Un cuadro de gigante muy famoso!'
        },
        category: CATEGORIES.HISTORY,
        coords: [39.8560, -4.0269],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Tol%C3%A8de_-_clocher_de_Santo_Tom%C3%A9.JPG/330px-Tol%C3%A8de_-_clocher_de_Santo_Tom%C3%A9.JPG',
        audio: {
          duration: 171,
          title: {
            adult: 'Audioguía: Iglesia de Santo Tomé',
            kids: '¡Aventura Sonora: La Iglesia del Caballero!'
          }
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
        }
      },
      {
        id: 'mirador-azor',
        name: {
          adult: 'Mirador del Azor',
          kids: 'El Secreto de las Palomas 🕊️'
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
          kids: 'La Casa del Pintor Mágico 🎨'
        },
        subtitle: {
          adult: 'Vida y obra del pintor cretense en Toledo',
          kids: '¡Donde vivía el hombre de los cuadros!'
        },
        category: CATEGORIES.HISTORY,
        coords: [39.8551, -4.0281],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/WLM14ES_-_10072005_114623_7742_-_.jpg/330px-WLM14ES_-_10072005_114623_7742_-_.jpg',
        audio: {
          duration: 165,
          title: {
            adult: 'Audioguía: Casa-Museo de El Greco',
            kids: '¡Aventura Sonora: ¡La Casa del Pintor Mágico!'
          }
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
          kids: 'El Castillo Gigante 🏯'
        },
        subtitle: {
          adult: 'Fortaleza romana convertida en Museo del Ejército',
          kids: '¡El castillo más grande de Toledo!'
        },
        category: CATEGORIES.HISTORY,
        coords: [39.8581, -4.0219],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/FP_Toledo_Alcazar_2025_-_Views.jpg/330px-FP_Toledo_Alcazar_2025_-_Views.jpg',
        audio: {
          duration: 205,
          title: {
            adult: 'Audioguía: El Alcázar de Toledo',
            kids: '¡Aventura Sonora: ¡El Castillo Gigante!'
          }
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
        }
      },
      {
        id: 'san-juan-de-los-reyes',
        name: {
          adult: 'Monasterio de San Juan de los Reyes',
          kids: 'El Monasterio de las Cadenas ⛓️'
        },
        subtitle: {
          adult: 'Joya del gótico isabelino mandada construir por los Reyes Católicos',
          kids: '¡Un monasterio cubierto de cadenas de verdad!'
        },
        category: CATEGORIES.HISTORY,
        coords: [39.8577, -4.0316],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Iglesia_del_monasterio_de_San_Juan_de_los_Reyes%2C_Toledo%2C_Espa%C3%B1a.jpg/330px-Iglesia_del_monasterio_de_San_Juan_de_los_Reyes%2C_Toledo%2C_Espa%C3%B1a.jpg',
        audio: {
          duration: 175,
          title: {
            adult: 'Audioguía: Monasterio de San Juan de los Reyes',
            kids: '¡Aventura Sonora: El Monasterio de las Cadenas!'
          }
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
          kids: 'El Bosque de Columnas Blancas 🕊️'
        },
        subtitle: {
          adult: 'El mejor ejemplo de arte almohade conservado en España',
          kids: '¡Una sinagoga convertida en un bosque de piedra blanca!'
        },
        category: CATEGORIES.HISTORY,
        coords: [39.8569, -4.0304],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Santa_Mar%C3%ADa_la_Blanca_-_Arcos.jpg/330px-Santa_Mar%C3%ADa_la_Blanca_-_Arcos.jpg',
        audio: {
          duration: 165,
          title: {
            adult: 'Audioguía: Sinagoga de Santa María la Blanca',
            kids: '¡Aventura Sonora: El Bosque de Columnas Blancas!'
          }
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
          kids: 'La Mezquita de la Lámpara Mágica 🏮'
        },
        subtitle: {
          adult: 'El edificio hispanomusulmán mejor conservado de Toledo',
          kids: '¡Una lámpara que ardió encendida 300 años!'
        },
        category: CATEGORIES.HISTORY,
        coords: [39.8606, -4.0243],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Cristo_de_la_Luz_2025_Fa%C3%A7ade.jpg/330px-Cristo_de_la_Luz_2025_Fa%C3%A7ade.jpg',
        audio: {
          duration: 158,
          title: {
            adult: 'Audioguía: Mezquita del Cristo de la Luz',
            kids: '¡Aventura Sonora: La Mezquita de la Lámpara Mágica!'
          }
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
          kids: 'El Puente de las Dos Torres 🌉'
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
          kids: 'El Puente del Incendio Secreto 🔥'
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
          kids: 'La Iglesia de las Torres Gemelas 🔭'
        },
        subtitle: {
          adult: 'El mejor mirador barroco sobre los tejados de Toledo',
          kids: '¡Sube a sus torres y verás TODO Toledo!'
        },
        category: CATEGORIES.HISTORY,
        coords: [39.8581, -4.0261],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/PanToledo01copia.jpg/330px-PanToledo01copia.jpg',
        audio: {
          duration: 160,
          title: {
            adult: 'Audioguía: Iglesia de los Jesuitas',
            kids: '¡Aventura Sonora: La Iglesia de las Torres Gemelas!'
          }
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
          kids: 'La Plaza del Mercado de Camellos 🐫'
        },
        subtitle: {
          adult: 'El corazón social de Toledo desde época árabe',
          kids: '¡Aquí se vendían animales hace 1.000 años!'
        },
        category: CATEGORIES.HIDDEN,
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
        }
      },
      {
        id: 'sinagoga-transito',
        name: {
          adult: 'Sinagoga del Tránsito y Museo Sefardí',
          kids: 'La Sinagoga de los Cedros del Líbano 🌲'
        },
        subtitle: {
          adult: 'La sinagoga hispanojudía más importante de España',
          kids: '¡Construida con madera traída desde muy, muy lejos!'
        },
        category: CATEGORIES.HISTORY,
        coords: [39.8557, -4.0294],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Toledo_-_Sinagoga_El_Transito_01.jpg/330px-Toledo_-_Sinagoga_El_Transito_01.jpg',
        audio: {
          duration: 168,
          title: {
            adult: 'Audioguía: Sinagoga del Tránsito',
            kids: '¡Aventura Sonora: La Sinagoga de los Cedros del Líbano!'
          }
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
        }
      },
      {
        id: 'hospital-tavera',
        name: {
          adult: 'Hospital de Tavera (Museo Duque de Lerma)',
          kids: 'El Hospital del Retrato Fantasma 👻'
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
          kids: 'La Calle del Tesoro Escondido 📜'
        },
        subtitle: {
          adult: 'La arteria comercial e histórica del casco antiguo',
          kids: '¡Aquí Cervantes dice que encontró el Quijote!'
        },
        category: CATEGORIES.HIDDEN,
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
          kids: 'La Puerta del Sol y la Luna ☀️🌙'
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
          kids: 'La Iglesia de las Coronas de Oro 👑'
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
          kids: 'El Paseo de los Huertos Secretos 🌳'
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
          kids: 'El Palacio de la Cruz Gigante ✝️'
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
          kids: 'La Ermita de la Romería 🌸'
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
      }
    ]
  },

  tokio: {
    id: 'tokio',
    name: 'Tokio',
    country: 'Japón',
    continent: 'Asia',
    subtitle: { adult: 'Tradición y neón', kids: '¡Ciudad de Templos y Robots! 🤖' },
    center: [35.6782, 139.7706],
    zoom: 12.5,
    minZoom: 10,
    bounds: [[35.55, 139.58], [35.80, 139.93]],
    pois: [
      {
        id: 'senso-ji',
        name: {
          adult: 'Sensō-ji',
          kids: 'El Templo del Dragón Dorado 🐉'
        },
        subtitle: {
          adult: 'El templo budista más antiguo de Tokio',
          kids: '¡Una estatua de oro que apareció en un río!'
        },
        category: CATEGORIES.HISTORY,
        coords: [35.7146, 139.7967],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Sensoji_2023.jpg/330px-Sensoji_2023.jpg',
        audio: {
          duration: 175,
          title: {
            adult: 'Audioguía: Sensō-ji',
            kids: '¡Aventura Sonora: El Templo del Dragón Dorado!'
          }
        },
        tabs: {
          history: {
            adult: 'El Sensō-ji se fundó en el año 645, cuando el sacerdote budista Shōkai construyó un pabellón para venerar una pequeña estatua de la diosa Kannon. Es el templo más antiguo de Tokio y el corazón del barrio de Asakusa. Su Kaminarimon, la "Puerta del Trueno", con su enorme farolillo rojo de casi 700 kg, es una de las imágenes más fotografiadas de Japón. El templo original ardió en el bombardeo de Tokio de 1945 y fue reconstruido en hormigón tras la guerra, respetando su diseño de época Edo.',
            kids: '¡Este templo tiene casi 1.400 años! 🏮 Se llama Sensō-ji y está en el barrio de Asakusa. En la entrada hay una puerta gigante con un farolillo rojo enorme, ¡tan pesado como un coche pequeño! El templo de verdad se quemó hace muchos años, pero lo reconstruyeron para que siguiera siendo mágico.'
          },
          legends: {
            adult: 'Cuenta la leyenda que en el año 628, dos hermanos pescadores, Hinokuma Hamanari y Takenari, encontraron una pequeña estatua dorada de Kannon atrapada en sus redes en el río Sumida. La devolvieron al agua varias veces, pero siempre regresaba a ellos. Un sabio local, conmovido, convirtió su propia casa en un santuario. Desde entonces la estatua nunca ha sido mostrada al público: nadie vivo puede decir con certeza qué aspecto tiene.',
            kids: '¡Hace muchísimos años, dos hermanos pescadores sacaron del río una estatuita dorada con su red! 🎣✨ La devolvieron al agua… ¡pero volvió a aparecer una y otra vez! Así que decidieron guardarla para siempre. Desde entonces nadie ha vuelto a verla — ¡sigue siendo un secreto absoluto!'
          },
          architecture: {
            adult: 'El complejo combina una pagoda de cinco pisos, el Hōzōmon (puerta del tesoro) y el Kaminarimon, flanqueados por estatuas guardianas. La calle Nakamise-dori, con casi 90 puestos centenarios, conecta ambas puertas con el salón principal. El techo del hondō (salón principal), reconstruido en 1958, sigue fielmente las proporciones del edificio original de época Edo, con tejas curvas y aleros muy pronunciados típicos del budismo japonés.',
            kids: '¡Hay una calle entera de tiendas antiguas para llegar al templo! 🍡 Se llama Nakamise y vende dulces y recuerdos desde hace cientos de años. Busca las dos estatuas guardianas gigantes en la puerta — ¡parece que vigilan a todo el que entra!'
          }
        }
      },
      {
        id: 'tsukiji-mercado',
        name: {
          adult: 'Mercado Exterior de Tsukiji',
          kids: '¡El Mercado de los Mil Sabores! 🐟'
        },
        subtitle: {
          adult: 'La cocina de Tokio desde 1935',
          kids: 'Donde huele a sushi fresquísimo'
        },
        category: CATEGORIES.GASTRONOMY,
        coords: [35.6614, 139.7697],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/2018_Tsukiji_fish_market.jpg/330px-2018_Tsukiji_fish_market.jpg',
        audio: {
          duration: 150,
          title: {
            adult: 'Audioguía: Mercado de Tsukiji',
            kids: '¡Aventura Sonora: El Mercado de los Mil Sabores!'
          }
        },
        tabs: {
          history: {
            adult: 'Tras el gran terremoto de Kantō de 1923, que destruyó el antiguo mercado de Nihonbashi, la ciudad trasladó su mercado de pescado a Tsukiji, inaugurado en 1935. Durante más de 80 años fue conocido como "la cocina de Tokio". En 2018, la sección mayorista —con sus famosas subastas de atún— se trasladó a Toyosu, pero el mercado exterior, con sus calles llenas de puestos, cuchillería y restaurantes de sushi, sigue funcionando en su emplazamiento original.',
            kids: '¡Este mercado lleva casi 90 años vendiendo el pescado más fresco de Tokio! 🐠 Antes aquí se hacían subastas gigantes de atunes enormes. Esa parte se mudó a otro barrio, pero las calles con puestos de comida y sushi siguen aquí, ¡oliendo riquísimo desde por la mañana!'
          },
          legends: {
            adult: 'Junto al mercado se alza el santuario Namiyoke Inari, "el que protege de las olas". Cuenta la tradición que, en el siglo XVII, unas obras de relleno junto al mar eran destruidas una y otra vez por el oleaje, hasta que una noche apareció flotando un objeto sagrado y luminoso. Al construirle un santuario, el mar se calmó y las obras pudieron terminarse. Desde el terremoto de 1923, los comerciantes del mercado lo consideran su guardián.',
            kids: '¡Hay un templo muy especial junto al mercado! Cuentan que hace muchísimo tiempo el mar no dejaba de destruir un muro nuevo, hasta que una noche apareció algo brillante flotando en el agua ✨. Construyeron un templo para cuidarlo, ¡y el mar se calmó para siempre!'
          },
          architecture: {
            adult: 'El mercado exterior conserva un trazado de callejuelas estrechas de posguerra, con más de 400 tiendas y puestos especializados: cuchillos artesanales, algas secas, tés y, sobre todo, barras de sushi diminutas de apenas seis u ocho asientos. Los toldos de colores y los carteles pintados a mano mantienen una estética que apenas ha cambiado desde mediados del siglo XX, en fuerte contraste con los rascacielos que rodean el barrio.',
            kids: '¡Las calles son súper estrechas y están llenas de tienditas! 🔪🍵 Venden desde cuchillos especiales hasta algas y té. Algunos restaurantes de sushi son tan pequeños que solo caben 6 personas sentadas. ¡Busca los toldos de colores, llevan ahí desde hace muchísimos años!'
          }
        }
      },
      {
        id: 'torre-tokio',
        name: {
          adult: 'Torre de Tokio',
          kids: 'La Torre Roja y Blanca 🗼'
        },
        subtitle: {
          adult: 'El mirador más icónico de la ciudad',
          kids: '¡Más alta que la Torre Eiffel!'
        },
        category: CATEGORIES.HIDDEN,
        coords: [35.6586, 139.7456],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/TaroTokyo20110213-TokyoTower-01.jpg/330px-TaroTokyo20110213-TokyoTower-01.jpg',
        audio: {
          duration: 160,
          title: {
            adult: 'Audioguía: Torre de Tokio',
            kids: '¡Aventura Sonora: La Torre Roja y Blanca!'
          }
        },
        tabs: {
          history: {
            adult: 'Inaugurada en 1958 como torre de telecomunicaciones, la Torre de Tokio se construyó en plena reconstrucción de posguerra como símbolo del renacimiento del país. Con 332,9 metros, es casi 9 metros más alta que la Torre Eiffel, en la que se inspiró su diseño. Un dato poco conocido: cerca de un tercio del acero de su estructura procede de tanques estadounidenses dañados durante la guerra de Corea, fundidos y reaprovechados.',
            kids: '¡Se construyó en 1958 y es un poquito más alta que la Torre Eiffel de París! 🗼 Un dato flipante: ¡parte del metal con el que se hizo viene de tanques de guerra viejos que fundieron para reutilizar! Así que esta torre guarda un secreto de metal muy especial.'
          },
          legends: {
            adult: 'Aunque no tiene leyendas centenarias como los templos de la ciudad, la Torre de Tokio se ha convertido en un mito moderno: generaciones de películas, series y cómics japoneses la usan como símbolo de esperanza y reencuentro, y muchas parejas suben a sus miradores por tradición en una primera cita. Se dice que si ves la torre iluminada de naranja en una noche despejada, el año que viene traerá buena suerte.',
            kids: '¡Esta torre no tiene leyendas antiguas, pero sí una supermoderna! Dicen que si la ves iluminada de naranja en una noche muy clara, ¡tendrás buena suerte todo el año que viene! ✨ Muchísimas películas y dibujos animados japoneses la usan como protagonista.'
          },
          architecture: {
            adult: 'Su estructura reticulada de acero, pintada en blanco y "naranja internacional" por normativa de seguridad aérea, alberga dos miradores: el Main Deck a 150 metros y el Top Deck, más exclusivo, a 250 metros. Bajo la torre, el edificio FootTown reúne tiendas, un acuario y un pequeño museo. De noche, un sistema de iluminación LED permite cambiar el color de toda la torre según la estación o eventos especiales.',
            kids: '¡Tiene dos miradores para ver Tokio desde arriba! Uno está a 150 metros y el otro, más especial, a 250 metros 🏙️. Por la noche se ilumina de colores distintos según la época del año. ¡Debajo hay hasta un pequeño acuario!'
          }
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
    bounds: [[40.408, -3.722], [40.423, -3.697]],
    pois: [
      {
        id: 'palacio-real',
        name: {
          adult: 'Palacio Real de Madrid',
          kids: 'El Palacio de las Mil Puertas 👑'
        },
        subtitle: {
          adult: 'El palacio real en uso más grande de Europa Occidental',
          kids: '¡Un palacio con más de 3.000 habitaciones!'
        },
        category: CATEGORIES.HISTORY,
        coords: [40.4180, -3.7144],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Palacio_Real_de_Madrid_Julio_2016_%28cropped%29.jpg/330px-Palacio_Real_de_Madrid_Julio_2016_%28cropped%29.jpg',
        audio: {
          duration: 175,
          title: {
            adult: 'Audioguía: Palacio Real de Madrid',
            kids: '¡Aventura Sonora: El Palacio de las Mil Puertas!'
          }
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
        }
      },
      {
        id: 'mercado-san-miguel',
        name: {
          adult: 'Mercado de San Miguel',
          kids: '¡El Mercado de Hierro y Sabores! 🍤'
        },
        subtitle: {
          adult: 'El último mercado de hierro de Madrid',
          kids: 'Tapas del mundo bajo un techo antiguo'
        },
        category: CATEGORIES.GASTRONOMY,
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
          kids: 'La Plaza del Kilómetro Cero 🐻'
        },
        subtitle: {
          adult: 'El kilómetro cero de España',
          kids: '¡Aquí empiezan todas las carreteras!'
        },
        category: CATEGORIES.HIDDEN,
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
      id: 'nearby-food',
      label: { adult: '🍷 Gastronomía cercana', kids: '🍪 ¡Qué comer cerca!' },
      prompt: {
        adult: (p) =>
          `Soy un viajero cerca de ${pick(p.name, 'adult')}. Recomiéndame con detalle 3 o 4 opciones de tapeo o restaurante cercanos (máx 3 min andando), por qué cada una merece la pena y un plato imprescindible en cada una. Tipo de público: pareja. Unas 190-220 palabras.`,
        kids: (p) =>
          `Estoy con mi familia justo en ${pick(p.name, 'kids')}, ¿qué sitios ricos hay cerca? 🥘 Recomienda con detalle 3 o 4 ideas: plato principal, tapas chulas para compartir y postre ¡con nombre divertido! Unas 160-190 palabras.`
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
  'nearby-food': { adult: 'la gastronomía cercana', kids: 'qué comer cerca' },
  'legends': { adult: 'las leyendas', kids: 'las leyendas' }
};

function pick(obj, mode) {
  if (!obj) return '';
  return obj[mode] ?? obj.adult ?? obj.kids ?? '';
}
