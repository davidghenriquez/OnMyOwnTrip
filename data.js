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
      },
      {
        id: 'museo-prado',
        name: {
          adult: 'Museo Nacional del Prado',
          kids: 'El Palacio de los Cuadros Mágicos 🖼️'
        },
        subtitle: {
          adult: 'Una de las mejores pinacotecas del mundo',
          kids: '¡Miles de cuadros famosísimos bajo un mismo techo!'
        },
        category: CATEGORIES.HISTORY,
        coords: [40.4139, -3.6922],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Museo_del_Prado_2016_%2825185969599%29.jpg/330px-Museo_del_Prado_2016_%2825185969599%29.jpg',
        audio: {
          duration: 178,
          title: {
            adult: 'Audioguía: Museo del Prado',
            kids: '¡Aventura Sonora: El Palacio de los Cuadros Mágicos!'
          }
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
        id: 'parque-retiro',
        name: {
          adult: 'Parque de El Retiro',
          kids: 'El Parque del Ángel Malo 😈'
        },
        subtitle: {
          adult: 'El gran pulmón verde histórico de Madrid',
          kids: '¡Tiene una estatua del diablo, única en el mundo!'
        },
        category: CATEGORIES.HIDDEN,
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
          kids: 'La Plaza del Rey a Caballo 🐴'
        },
        subtitle: {
          adult: 'El corazón monumental del Madrid de los Austrias',
          kids: '¡Una plaza que se ha incendiado tres veces!'
        },
        category: CATEGORIES.HIDDEN,
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
        name: { adult: 'Gran Vía', kids: 'La Avenida de los Rascacielos 🏙️' },
        subtitle: {
          adult: 'El Broadway madrileño, escaparate de un siglo de arquitectura',
          kids: '¡Una avenida que tardó 21 años en construirse entera!'
        },
        category: CATEGORIES.HIDDEN,
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
        name: { adult: 'Museo Nacional Thyssen-Bornemisza', kids: 'El Museo de la Colección Ganadora 🏆' },
        subtitle: {
          adult: 'Un recorrido por 700 años de pintura occidental',
          kids: '¡España "ganó" esta colección a otros dos países!'
        },
        category: CATEGORIES.HISTORY,
        coords: [40.4160, -3.6944],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Museo_Thyssen-Bornemisza_%28Madrid%29_07.jpg/330px-Museo_Thyssen-Bornemisza_%28Madrid%29_07.jpg',
        audio: { duration: 165, title: { adult: 'Audioguía: Museo Thyssen-Bornemisza', kids: '¡Aventura Sonora: El Museo de la Colección Ganadora!' } },
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
        name: { adult: 'Museo Nacional Centro de Arte Reina Sofía', kids: 'El Hospital Convertido en Museo del Guernica 🎨' },
        subtitle: {
          adult: 'El hogar del Guernica de Picasso',
          kids: '¡Antes de ser museo, este edificio curaba enfermos!'
        },
        category: CATEGORIES.HISTORY,
        coords: [40.408798, -3.693648],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Museo_Reina_Sofia%2C_Madrid_%286394654203%29.jpg/330px-Museo_Reina_Sofia%2C_Madrid_%286394654203%29.jpg',
        audio: { duration: 172, title: { adult: 'Audioguía: Museo Reina Sofía', kids: '¡Aventura Sonora: El Hospital Convertido en Museo!' } },
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
        name: { adult: 'Catedral de la Almudena', kids: 'La Catedral de 110 Años y Colores 🌈' },
        subtitle: {
          adult: 'Única catedral de España consagrada por un Papa',
          kids: '¡Tardaron 110 años en terminarla!'
        },
        category: CATEGORIES.HISTORY,
        coords: [40.415556, -3.714444],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Almudena_2022_-_overview.jpg/330px-Almudena_2022_-_overview.jpg',
        audio: { duration: 168, title: { adult: 'Audioguía: Catedral de la Almudena', kids: '¡Aventura Sonora: La Catedral de 110 Años y Colores!' } },
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
        name: { adult: 'Plaza de Cibeles', kids: 'La Diosa que se Escondió de las Bombas 🦁' },
        subtitle: {
          adult: 'El símbolo más fotografiado de Madrid',
          kids: '¡Una diosa en un carro tirado por leones!'
        },
        category: CATEGORIES.HIDDEN,
        coords: [40.419331, -3.693093],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Fuente_de_Cibeles_-_Dec_2024.jpg/330px-Fuente_de_Cibeles_-_Dec_2024.jpg',
        audio: { duration: 148, title: { adult: 'Audioguía: Plaza de Cibeles', kids: '¡Aventura Sonora: La Diosa que se Escondió de las Bombas!' } },
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
        name: { adult: 'Puerta de Alcalá', kids: 'El Arco con Dos Caras Distintas 🎭' },
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
        name: { adult: 'Plaza de la Villa', kids: 'La Plaza que Encerró a un Rey Francés 🗼' },
        subtitle: {
          adult: 'El rincón medieval mejor conservado de Madrid',
          kids: '¡Aquí estuvo prisionero un rey de Francia!'
        },
        category: CATEGORIES.HIDDEN,
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
        name: { adult: 'Templo de Debod', kids: 'El Templo Egipcio que Cruzó el Mar 🐪' },
        subtitle: {
          adult: 'Un templo egipcio del siglo II a.C. en pleno Madrid',
          kids: '¡Viajó piedra a piedra desde Egipto hasta aquí!'
        },
        category: CATEGORIES.HISTORY,
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
        name: { adult: 'Plaza de España', kids: 'La Plaza de Don Quijote y Sancho 🐴' },
        subtitle: {
          adult: 'Homenaje a Cervantes junto a los rascacielos históricos',
          kids: '¡Aquí están Don Quijote y Sancho Panza en bronce!'
        },
        category: CATEGORIES.HIDDEN,
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
        name: { adult: 'Círculo de Bellas Artes', kids: 'La Azotea de la Diosa Sabia 🦉' },
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
        name: { adult: 'Teatro Real', kids: 'El Teatro que Flotaba sobre un Río Escondido 💧' },
        subtitle: {
          adult: 'La ópera nacional frente al Palacio Real',
          kids: '¡Un río escondido casi hace que se cayera!'
        },
        category: CATEGORIES.HISTORY,
        coords: [40.41824, -3.71037],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Teatro_Real_de_Madrid_2025.jpg/330px-Teatro_Real_de_Madrid_2025.jpg',
        audio: { duration: 160, title: { adult: 'Audioguía: Teatro Real', kids: '¡Aventura Sonora: El Teatro que Flotaba sobre un Río Escondido!' } },
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
        name: { adult: 'Plaza de Oriente', kids: 'La Plaza del Rey que Casi se Cae 🐎' },
        subtitle: {
          adult: 'Jardines monumentales frente al Palacio Real',
          kids: '¡Una estatua a caballo con un truco de equilibrio genial!'
        },
        category: CATEGORIES.HIDDEN,
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
        name: { adult: 'Barrio de La Latina', kids: 'El Barrio de la Maestra Sabia 📚' },
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
        name: { adult: 'Barrio de Chueca', kids: 'El Barrio Más Alegre y Colorido 🌈' },
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
        name: { adult: 'Barrio de Malasaña', kids: 'El Barrio de la Joven Valiente 🎗️' },
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
        name: { adult: 'Barrio de las Letras', kids: 'El Barrio de los Escritores Rivales ✒️' },
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
        name: { adult: 'Plaza de Santa Ana', kids: 'La Plaza de los Poetas Rivales 🎭' },
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
        name: { adult: 'Plaza de la Paja', kids: 'La Plaza Antes de la Plaza Mayor 🌾' },
        subtitle: {
          adult: 'El mercado y corazón de Madrid antes de que existiera la Plaza Mayor',
          kids: '¡Aquí compraban paja para las mulas de los curas!'
        },
        category: CATEGORIES.HIDDEN,
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
        name: { adult: 'Calle de Cuchilleros', kids: 'La Calle de los Fabricantes de Cuchillos 🔪' },
        subtitle: {
          adult: 'Empinada calle porticada, hogar del restaurante más antiguo del mundo',
          kids: '¡Aquí está el restaurante más viejo del mundo entero!'
        },
        category: CATEGORIES.HIDDEN,
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
        name: { adult: 'Monasterio de las Descalzas Reales', kids: 'El Convento del Tesoro Escondido 👑' },
        subtitle: {
          adult: 'Fachada austera, interior con tesoros de la realeza española',
          kids: '¡Por fuera parece sencillo, pero por dentro esconde un tesoro!'
        },
        category: CATEGORIES.HISTORY,
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
        name: { adult: 'Real Monasterio de la Encarnación', kids: 'El Convento de la Sangre Milagrosa 🩸' },
        subtitle: {
          adult: 'Reliquias reales y un milagro que se repite cada 27 de julio',
          kids: '¡Aquí guardan una reliquia que "cambia" una vez al año!'
        },
        category: CATEGORIES.HISTORY,
        coords: [40.4200041, -3.7115521],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Real_Monasterio_de_la_Encarnaci%C3%B3n_%28Madrid%29_01.jpg/330px-Real_Monasterio_de_la_Encarnaci%C3%B3n_%28Madrid%29_01.jpg',
        audio: { duration: 165, title: { adult: 'Audioguía: Real Monasterio de la Encarnación', kids: '¡Aventura Sonora: El Convento de la Sangre Milagrosa!' } },
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
        name: { adult: 'Museo de Historia de Madrid', kids: 'El Museo de la Portada de Piedra Tallada 🏛️' },
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
        name: { adult: 'Museo del Romanticismo', kids: 'La Casa que Viaja en el Tiempo 🕰️' },
        subtitle: {
          adult: 'Un palacete que recrea la vida burguesa del Madrid del siglo XIX',
          kids: '¡Cada sala parece congelada hace 200 años!'
        },
        category: CATEGORIES.HISTORY,
        coords: [40.4260218, -3.6989394],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Museo_del_Romanticismo_-_Fachada_-_Fachada_del_Museo_del_Romanticismo.jpg/330px-Museo_del_Romanticismo_-_Fachada_-_Fachada_del_Museo_del_Romanticismo.jpg',
        audio: { duration: 150, title: { adult: 'Audioguía: Museo del Romanticismo', kids: '¡Aventura Sonora: La Casa que Viaja en el Tiempo!' } },
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
        name: { adult: 'Museo Cerralbo', kids: 'El Palacio del Marqués Coleccionista 🗝️' },
        subtitle: {
          adult: 'La colección privada de un marqués, conservada intacta',
          kids: '¡Un marqués guardó aquí más de 50.000 objetos curiosos!'
        },
        category: CATEGORIES.HISTORY,
        coords: [40.423684, -3.714577],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Palacio_del_Marqu%C3%A9s_de_Cerralbo_%28Madrid%29_01.jpg/330px-Palacio_del_Marqu%C3%A9s_de_Cerralbo_%28Madrid%29_01.jpg',
        audio: { duration: 155, title: { adult: 'Audioguía: Museo Cerralbo', kids: '¡Aventura Sonora: El Palacio del Marqués Coleccionista!' } },
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
        name: { adult: 'Real Academia de Bellas Artes de San Fernando', kids: 'La Escuela que Suspendió a Goya 🎨' },
        subtitle: {
          adult: 'Donde estudiaron, y no siempre triunfaron, los grandes artistas españoles',
          kids: '¡Uno de los pintores más famosos de España suspendió aquí el examen!'
        },
        category: CATEGORIES.HISTORY,
        coords: [40.417423, -3.700378],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Palacio_de_Goyeneche_-_Real_Academia_de_Bellas_Artes_de_San_Fernando.jpg/330px-Palacio_de_Goyeneche_-_Real_Academia_de_Bellas_Artes_de_San_Fernando.jpg',
        audio: { duration: 155, title: { adult: 'Audioguía: Real Academia de Bellas Artes de San Fernando', kids: '¡Aventura Sonora: La Escuela que Suspendió a Goya!' } },
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
        name: { adult: 'Palacio de Longoria', kids: 'La Casa Tarta 🎂' },
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
        name: { adult: 'Edificio Metrópolis', kids: 'El Edificio de la Estatua que Cambió 🗽' },
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
        name: { adult: 'Palacio de Cibeles (CentroCentro)', kids: 'Nuestra Señora de las Comunicaciones 📮' },
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
        name: { adult: 'Plaza de Alonso Martínez', kids: 'La Rotonda del Jurista 👨‍⚖️' },
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
        name: { adult: 'Calle de Fuencarral', kids: 'La Calle que Une Dos Barrios Distintos 🛍️' },
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
        name: { adult: 'Calle de la Montera', kids: 'La Calle del Gorro Perdido 🎩' },
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
        name: { adult: 'Plaza del Callao', kids: 'La Plaza de las Pantallas Gigantes 🎬' },
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
        name: { adult: 'Edificio Telefónica', kids: 'El Primer Rascacielos de Europa 📞' },
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
        name: { adult: 'Parque de las Vistillas', kids: 'El Mirador de las Trincheras 🌅' },
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
        name: { adult: 'Jardines del Príncipe de Anglona', kids: 'El Jardín Secreto de La Latina 🌿' },
        subtitle: {
          adult: 'Un jardín nobiliario del siglo XVIII escondido junto a la Plaza de la Paja',
          kids: '¡Un jardín escondido que casi nadie conoce!'
        },
        category: CATEGORIES.HIDDEN,
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
        name: { adult: 'Iglesia de San Ginés', kids: 'La Iglesia del Cuadro Escondido 🖼️' },
        subtitle: {
          adult: 'Una de las parroquias más antiguas de Madrid, con un El Greco y chocolate con churros al lado',
          kids: '¡Guarda un cuadro pintado por uno de los artistas más famosos de la historia!'
        },
        category: CATEGORIES.HISTORY,
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
        name: { adult: 'Basílica de San Francisco el Grande', kids: 'La Cúpula Gigante de Goya 🎨' },
        subtitle: {
          adult: 'La cuarta cúpula más grande de Europa, con un autorretrato escondido de Goya',
          kids: '¡Tiene una de las cúpulas más grandes de toda Europa!'
        },
        category: CATEGORIES.HISTORY,
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
        name: { adult: 'Puerta de Toledo', kids: 'La Última Puerta Monumental de Madrid 🚪' },
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
        name: { adult: 'Museo de San Isidro - Los Orígenes de Madrid', kids: 'El Museo del Pozo Milagroso 💧' },
        subtitle: {
          adult: 'Arqueología madrileña y la leyenda del pozo del santo patrón',
          kids: '¡Aquí se cuenta una leyenda sobre un pozo mágico!'
        },
        category: CATEGORIES.HISTORY,
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
        name: { adult: 'CaixaForum Madrid', kids: 'El Edificio que Flota 🪴' },
        subtitle: {
          adult: 'Un antiguo edificio industrial que parece flotar, junto a un jardín vertical gigante',
          kids: '¡Este edificio parece flotar en el aire, sin apoyarse en el suelo!'
        },
        category: CATEGORIES.HISTORY,
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
