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
    routes: [
      { id: 'main', name: { adult: 'Imprescindible', kids: '¡Lo Top! 🚩' }, color: '#F59E0B' }
    ],
    pois: [
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
        essential: { route: 'main', order: 4 },
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
        essential: { route: 'main', order: 7 },
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
        essential: { route: 'main', order: 5 },
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
          kids: 'El Alcázar de Toledo — El Castillo Gigante 🏯'
        },
        subtitle: {
          adult: 'Fortaleza romana convertida en Museo del Ejército',
          kids: '¡El castillo más grande de Toledo!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'main', order: 3 },
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
          kids: 'Monasterio de San Juan de los Reyes — El Monasterio de las Cadenas ⛓️'
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
          kids: 'Sinagoga de Santa María la Blanca — El Bosque de Columnas Blancas 🕊️'
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
          kids: 'Mezquita del Cristo de la Luz — La Mezquita de la Lámpara Mágica 🏮'
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
          kids: 'Plaza de Zocodover — La Plaza del Mercado de Camellos 🐫'
        },
        subtitle: {
          adult: 'El corazón social de Toledo desde época árabe',
          kids: '¡Aquí se vendían animales hace 1.000 años!'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'main', order: 2 },
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
          kids: 'Sinagoga del Tránsito y Museo Sefardí — La Sinagoga de los Cedros del Líbano 🌲'
        },
        subtitle: {
          adult: 'La sinagoga hispanojudía más importante de España',
          kids: '¡Construida con madera traída desde muy, muy lejos!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'main', order: 6 },
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
    ],
    pois: [
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
        essential: { route: 'main', order: 4 },
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
          kids: 'Parque de El Retiro — El Parque del Ángel Malo 😈'
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
        essential: { route: 'main', order: 6 },
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
        name: { adult: 'Museo Nacional Centro de Arte Reina Sofía', kids: 'Museo Nacional Centro de Arte Reina Sofía — El Hospital Convertido en Museo del Guernica 🎨' },
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
        name: { adult: 'Catedral de la Almudena', kids: 'Catedral de la Almudena — La Catedral de 110 Años y Colores 🌈' },
        subtitle: {
          adult: 'Única catedral de España consagrada por un Papa',
          kids: '¡Tardaron 110 años en terminarla!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'main', order: 5 },
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
        name: { adult: 'Plaza de Oriente', kids: 'Plaza de Oriente — La Plaza del Rey que Casi se Cae 🐎' },
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
        name: { adult: 'Real Academia de Bellas Artes de San Fernando', kids: 'Real Academia de Bellas Artes de San Fernando — La Escuela que Suspendió a Goya 🎨' },
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
    ],
    pois: [
      {
        id: 'castillo-papa-luna',
        name: {
          adult: 'Castillo del Papa Luna',
          kids: 'Castillo del Papa Luna — El Castillo del Papa Rebelde 🏰'
        },
        subtitle: {
          adult: 'Fortaleza templaria y último refugio de un Papa',
          kids: '¡Un castillo sobre el mar donde vivió un Papa muy testarudo!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'main', order: 4 },
        coords: [40.3626, 0.4020],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Pe%C3%B1%C3%ADscola._Castillo_del_Papa_Luna_19.jpg/330px-Pe%C3%B1%C3%ADscola._Castillo_del_Papa_Luna_19.jpg',
        audio: {
          duration: 178,
          title: {
            adult: 'Audioguía: Castillo del Papa Luna',
            kids: '¡Aventura Sonora: El Castillo del Papa Rebelde!'
          }
        },
        tabs: {
          history: {
            adult: 'Los caballeros templarios levantaron este castillo a comienzos del siglo XIV sobre una roca que se adentra en el Mediterráneo, aprovechando restos de una fortaleza árabe anterior. Tras la disolución de la Orden del Temple pasó a la Orden de Montesa, pero su momento más célebre llegó en 1411, cuando Benedicto XIII —el aragonés Pedro de Luna, conocido como el "Papa Luna"— se refugió aquí tras ser depuesto durante el Cisma de Occidente. Convertido en palacio pontificio, Peñíscola fue su corte y su último bastión: siguió considerándose el único Papa legítimo hasta su muerte en 1423, casi en solitario frente a toda la cristiandad.',
            kids: '¡Hace más de 600 años, unos caballeros con cruces rojas construyeron este castillo sobre una roca metida en el mar! 🌊 Después vivió aquí un señor llamado el Papa Luna: ¡todo el mundo le decía que dejara de ser Papa, pero él dijo que no y se quedó aquí gobernando solo, sin rendirse nunca!'
          },
          legends: {
            adult: 'Cuenta la tradición que Benedicto XIII, ya anciano y prácticamente abandonado por los cardenales que antes lo apoyaban, se negó hasta el final a renunciar al papado, firmando bulas y nombrando cardenales en solitario desde estas salas. Se dice que su tozudez dio origen al dicho popular "mantenerse en sus trece", porque redactó trece proposiciones defendiendo su legitimidad como Papa y nunca cedió ni una. Los pescadores locales cuentan que, en noches de tormenta, aún puede verse una luz encendida en su antigua biblioteca.',
            kids: "¡Dicen que de aquí viene la frase 'mantenerse en sus trece'! El Papa Luna escribió trece razones para no rendirse... ¡y no cambió de idea ni una sola! 📜 Los pescadores cuentan que en noches de tormenta todavía se ve una lucecita encendida en su antigua biblioteca. ¿Será verdad?"
          },
          architecture: {
            adult: 'De planta trapezoidal adaptada a la roca, combina el austero estilo militar templario con las reformas palaciegas que ordenó el Papa Luna: la Sala Gótica, la antigua biblioteca pontificia y una pequeña capilla. Sus muros, de hasta cuatro metros de grosor en algunos tramos, nunca llegaron a ser tomados por la fuerza en toda su historia medieval. Hoy es también escenario de rodajes: aquí se filmaron escenas de "El Cid" (1961) y de la ciudad de Meereen en "Juego de Tronos".',
            kids: '¡Las paredes de este castillo son tan gruesas como un coche puesto de pie! 🚗 Por eso nadie pudo conquistarlo nunca por la fuerza. Y un secreto: ¡aquí se rodaron escenas de una serie de dragones muy famosa! ¿Sabes cuál puede ser?'
          }
        }
      },
      {
        id: 'murallas-peniscola',
        name: {
          adult: 'Murallas de Peñíscola',
          kids: 'Murallas de Peñíscola — La Muralla que Frenó a los Piratas 🛡️'
        },
        subtitle: {
          adult: 'Fortificación renacentista contra la piratería berberisca',
          kids: '¡Un muro gigante para que no entraran los piratas!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'main', order: 2 },
        coords: [40.3586, 0.4068],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Overview_of_walls_in_Pe%C3%B1%C3%ADscola%2C_Bajo_Maestrazgo_Comarca.jpg/330px-Overview_of_walls_in_Pe%C3%B1%C3%ADscola%2C_Bajo_Maestrazgo_Comarca.jpg',
        audio: {
          duration: 155,
          title: {
            adult: 'Audioguía: Murallas de Peñíscola',
            kids: '¡Aventura Sonora: La Muralla que Frenó a los Piratas!'
          }
        },
        tabs: {
          history: {
            adult: 'Durante el siglo XVI, la costa mediterránea sufría constantes ataques de piratas berberiscos, así que Felipe II encargó reforzar las defensas de Peñíscola al ingeniero militar italiano Giovan Battista Antonelli, especialista en fortificaciones abaluartadas. El resultado fue un cinturón de murallas que rodea todo el casco antiguo y se funde con el propio castillo, convirtiendo la península en una plaza casi inexpugnable. Junto al Portal Fosc y otras puertas históricas, estas murallas protegieron a la población durante siglos de incursiones desde el mar.',
            kids: '¡Hace muchos años, unos piratas muy malos atacaban los pueblos de la costa! 🏴‍☠️ Así que el rey mandó construir esta muralla gigante alrededor de todo el pueblo. ¡Se juntaba con el castillo y hacía que fuera casi imposible entrar sin permiso!'
          },
          legends: {
            adult: 'Se cuenta que, durante una de las incursiones berberiscas del siglo XVI, los vigías de la muralla lograron avistar las velas enemigas al amanecer y hacer sonar las campanas a tiempo para que toda la población se refugiara dentro del recinto amurallado antes del desembarco. Desde entonces, la tradición local recuerda cada año ese aviso con un repique especial de campanas, como homenaje a los centinelas anónimos que salvaron el pueblo.',
            kids: '¡Cuentan que un vigía vio llegar a los piratas justo al amanecer y tocó las campanas a tiempo para avisar a todo el pueblo! 🔔 Gracias a él, todos se pusieron a salvo dentro de la muralla. Cada año, las campanas suenan en su honor. ¡Menos mal que estaba atento!'
          },
          architecture: {
            adult: 'El trazado sigue el sistema abaluartado propio del siglo XVI, con lienzos de piedra que se adaptan al perfil irregular de la roca y se refuerzan en los puntos más expuestos al oleaje. Varias puertas históricas, como el Portal Fosc o la Puerta de Santa María, permiten aún hoy el acceso al casco antiguo, cuyas calles estrechas y empinadas conservan el trazado medieval original casi sin modificaciones desde su construcción.',
            kids: '¡La muralla no es recta, sigue la forma de la roca! 🪨 Tiene varias puertas antiguas por donde se entra al pueblo, como el Portal Fosc. Las calles de dentro son estrechas y empinadas, ¡casi iguales a como eran hace cientos de años!'
          }
        }
      },
      {
        id: 'el-bufador',
        name: {
          adult: 'El Bufador',
          kids: 'El Bufador — La Roca que Respira 🌊'
        },
        subtitle: {
          adult: 'Chimenea natural donde el mar "respira" entre las rocas',
          kids: '¡Una roca que resopla como una ballena!'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'main', order: 6 },
        coords: [40.3570, 0.4073],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Bufador.JPG/330px-Bufador.JPG',
        audio: {
          duration: 128,
          title: {
            adult: 'Audioguía: El Bufador',
            kids: '¡Aventura Sonora: La Roca que Respira!'
          }
        },
        tabs: {
          history: {
            adult: 'En la ladera norte de la península, bajo las murallas del castillo, el oleaje ha ido horadando durante siglos una grieta natural en la roca. Cuando el mar está agitado, el agua entra a presión por una abertura inferior y sale expulsada con fuerza por un respiradero superior, produciendo un sonido característico parecido a un bufido, de ahí su nombre. Los pescadores de Peñíscola lo usaban tradicionalmente como indicador natural: si el Bufador "soplaba" con fuerza, era señal de que se aproximaba mal tiempo.',
            kids: '¡Esta roca tiene un agujero secreto! 🕳️ Cuando el mar está movido, el agua entra a presión por abajo y sale disparada por arriba haciendo un ruido como un resoplido. Los pescadores de antes lo escuchaban para saber si venía una tormenta. ¡Es como si la roca respirara!'
          },
          legends: {
            adult: 'La tradición oral de Peñíscola cuenta que en esta grieta vive el aliento de un antiguo dragón marino que protegía la costa de los invasores, y que su resoplido furioso —más fuerte cuanto peor es la tormenta— es en realidad una advertencia a los pescadores para que no se hagan a la mar. Aunque la explicación real es puramente geológica, muchos vecinos siguen llamando al fenómeno "el aliento del Bufador" cuando el mar brama con especial fuerza.',
            kids: '¡Dicen que dentro vive el aliento de un dragón marino que cuida la costa! 🐉 Cuando resopla muy fuerte, es porque te está avisando de que viene una tormenta y que mejor no salgas a navegar. ¿Te atreves a escucharlo de cerca?'
          },
          architecture: {
            adult: 'Más que una construcción, El Bufador es un accidente geológico: una cavidad kárstica formada por la erosión marina sobre la roca caliza de la península. Su boca superior, de apenas medio metro de diámetro, contrasta con la fuerza del chorro que puede llegar a proyectar en días de temporal. Es uno de los rincones favoritos de fotógrafos y curiosos, accesible a pie desde el paseo que rodea la base del castillo, aunque conviene mantener la distancia cuando el mar está fuerte.',
            kids: '¡No lo construyó nadie, lo hizo el propio mar! 🌊 Durante muchísimos años, el agua fue abriendo un agujero en la roca poquito a poco. La salida de arriba es pequeñita, ¡pero el chorro de agua puede salir disparado muy alto los días de olas grandes!'
          }
        }
      },
      {
        id: 'restaurante-la-llotja',
        fictional: true, // parada de ambientación: no existe como tal en Peñíscola, sigue el mismo patrón que "restaurante-sorbona" en Toledo
        name: {
          adult: 'Restaurante La Llotja',
          kids: 'Restaurante La Llotja — ¡La Casa de los Sabores del Mar! 🦐'
        },
        subtitle: {
          adult: 'Parada ilustrativa de gastronomía marinera',
          kids: '¡El arroz más rico junto al puerto!'
        },
        category: CATEGORIES.GASTRONOMY,
        coords: [40.3572, 0.4040],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Arroz_a_banda_%28Torreblanca%29.jpg/330px-Arroz_a_banda_%28Torreblanca%29.jpg', // foto genérica de arròs a banda de la Costa del Azahar (lugar ilustrativo, no una foto del "restaurante" en sí)
        audio: {
          duration: 150,
          title: {
            adult: 'Audioguía: Gastronomía en La Llotja',
            kids: '¡Aventura Sonora: Hora de Comer junto al Mar!'
          }
        },
        tabs: {
          history: {
            adult: 'La Llotja es una parada de ambientación (no un establecimiento real) que recrea el espíritu de las lonjas y restaurantes marineros que bordean el puerto de Peñíscola desde mediados del siglo XX, cuando la pesca de bou dejaba su género fresco cada mañana. Sirve para imaginar cómo huele y sabe la cocina de la Costa del Azahar entre parada y parada de la ruta, con el castillo siempre de fondo.',
            kids: '¡Vamos a imaginarnos un restaurante junto al puerto! 🦐 Aquí los pescadores traían el pescado fresquísimo cada mañana, directo del barco al plato. ¡Con el castillo vigilando desde arriba mientras comes!'
          },
          legends: {
            adult: 'Como parada imaginada, se le atribuye una pequeña leyenda propia de la ruta: dicen que el arròs a banda que se sirve en la mesa más cercana al ventanal solo sale perfecto —ni un grano pasado, ni uno crudo— cuando el cocinero mira al castillo justo antes de retirarlo del fuego. Los marineros que la frecuentan juran que a ellos nunca les ha fallado.',
            kids: '¡Cuentan que el arroz sale perfecto solo si el cocinero mira al castillo justo antes de apagar el fuego! 👨‍🍳🏰 Los pescadores dicen que ese truco nunca falla. ¿Tú lo probarías?'
          },
          architecture: {
            adult: 'Se imagina como una casa marinera de fachada azul añil frente al puerto deportivo, con mesas de madera desgastada por la sal, redes y aparejos de pesca colgados del techo, y una terraza abierta desde la que se ve el perfil del castillo recortado contra el mar. Una ambientación pensada para transmitir cómo es comer arroz recién hecho con los pies casi en el agua.',
            kids: '¡Imagina una terraza pegadita al mar! 🌊 Con redes de pescar colgando del techo como decoración y mesas de madera con olor a sal. Desde tu silla puedes ver el castillo entero mientras comes. ¿A que apetece?'
          }
        }
      },
      {
        id: 'playa-norte',
        name: {
          adult: 'Playa Norte',
          kids: 'Playa Norte — ¡La Playa que Casi Era una Isla! 🏖️'
        },
        subtitle: {
          adult: 'Cinco kilómetros de arena sobre la lengua de tierra que salvó a Peñíscola',
          kids: '¡Un banco de arena gigante que unió la roca con la tierra firme!'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'main', order: 1 },
        coords: [40.3555, 0.398],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/100_Platja_del_Nord_%28Pen%C3%ADscola%29.jpg/330px-100_Platja_del_Nord_%28Pen%C3%ADscola%29.jpg',
        audio: {
          duration: 150,
          title: {
            adult: 'Audioguía: Playa Norte',
            kids: '¡Aventura Sonora: La Playa que Casi Era una Isla!'
          }
        },
        tabs: {
          history: {
            adult: 'La roca sobre la que se asienta Peñíscola fue durante siglos un peñón aislado en el mar. Con el paso de los siglos, la sedimentación fue formando un tómbolo —una franja natural de arena— que acabó uniéndolo a tierra firme, aunque durante mucho tiempo esa lengua de arena desaparecía con los temporales y volvía a formarse en verano. De ahí viene incluso el nombre de la ciudad: los romanos la llamaron "paene insula", "casi isla", que con el tiempo derivó en Peñíscola.',
            kids: '¿Sabías que la roca donde está el castillo antes era una isla de verdad, separada de la playa? 🏝️ Poco a poco, el mar fue arrastrando arena hasta que se formó un camino natural que la unió a tierra. ¡Por eso la ciudad se llama Peñíscola, que viene de una palabra que significa "casi isla"!'
          },
          legends: {
            adult: 'Durante siglos, esa franja de arena que unía la roca con la costa era tan frágil que los temporales fuertes podían borrarla por completo, dejando de nuevo aislado el peñón como en la Antigüedad. Los pescadores más veteranos contaban que, en esas noches de mar embravecido, la isla "recordaba" ser isla, y que solo el buen tiempo del verano le devolvía el camino a tierra, año tras año, como una promesa que el mar renovaba cada vez.',
            kids: 'Cuentan los pescadores más mayores que, en las noches de tormenta más fuertes, el camino de arena podía desaparecer por completo, ¡y la roca del castillo volvía a quedarse sola en el mar como hace muchísimos años! 🌊 Por suerte, cuando llegaba el buen tiempo, la arena siempre volvía a aparecer.'
          },
          architecture: {
            adult: 'Hoy Playa Norte es la más larga de la provincia de Castellón, con unos cinco kilómetros de arena dorada que arrancan junto al casco histórico y avanzan en paralelo al paseo marítimo de la Avenida Papa Luna. El proceso de erosión y sedimentación de sus acantilados fue estudiado ya en el siglo XVIII por el naturalista Cavanilles, y hoy la playa luce distinciones como la Bandera Azul gracias a la calidad de sus aguas.',
            kids: 'Hoy la Playa Norte tiene ¡cinco kilómetros de arena! Empieza justo al lado del castillo y sigue y sigue por la costa 🏖️. Es tan limpia y bonita que tiene banderas especiales que premian a las mejores playas.'
          }
        }
      },
      {
        id: 'iglesia-santa-maria',
        name: {
          adult: 'Iglesia de Santa María',
          kids: 'Iglesia de Santa María — La Iglesia del Tesoro del Papa 📿'
        },
        subtitle: {
          adult: 'El templo que guarda el tesoro personal del Papa Luna',
          kids: '¡Aquí se guardan objetos que usó de verdad un Papa!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'main', order: 3 },
        coords: [40.3605, 0.4025],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Church_of_Santa_Maria%2C_Peniscola_01.JPG/330px-Church_of_Santa_Maria%2C_Peniscola_01.JPG',
        audio: {
          duration: 160,
          title: {
            adult: 'Audioguía: Iglesia de Santa María',
            kids: '¡Aventura Sonora: La Iglesia del Tesoro del Papa!'
          }
        },
        tabs: {
          history: {
            adult: 'La iglesia se levantó poco después de la conquista cristiana de Peñíscola en el siglo XIII, y de aquella primera construcción todavía se conservan la portada y parte del muro original. A mediados del siglo XV un incendio la destruyó casi por completo, y el papa Eugenio IV concedió indulgencias especiales para financiar su reconstrucción, a petición de la reina María de Castilla. Entre 1725 y 1739 el templo se amplió y reorientó por completo, y en 1862 se añadió el campanario que hoy sigue en pie.',
            kids: 'Esta iglesia se construyó hace más de 700 años, justo después de que Peñíscola pasara a manos cristianas ⛪. Hace mucho tiempo un incendio la destruyó casi entera, ¡pero hasta un Papa ayudó a pagar que la reconstruyeran! Después se hizo más grande, y el campanario que ves hoy se añadió hace más de 150 años.'
          },
          legends: {
            adult: 'Aunque el Papa Luna vivía y gobernaba desde el castillo, esta iglesia guardaba parte de su tesoro personal: entre las piezas del patrimonio parroquial se conservan objetos pontificios que pertenecieron a Benedicto XIII, así como una cruz procesional manierista donada por otro Papa, Clemente VIII. Es el hilo que conecta directamente esta iglesia sencilla con la corte pontificia que un día gobernó Peñíscola desde lo alto del peñón.',
            kids: 'El Papa Luna vivía en el castillo, ¡pero parte de sus objetos más valiosos se guardaban aquí, en esta iglesia! 👑 Todavía se conservan cosas que pertenecieron de verdad a aquel Papa tan testarudo. ¡Imagina tocar algo que usó él mismo hace más de 600 años!'
          },
          architecture: {
            adult: 'De planta de cruz latina, tiene cuatro tramos de nave cubiertos con bóvedas de crucería y capillas laterales entre los contrafuertes, mientras que el crucero se remata con una bóveda de cañón con lunetos. La fachada, sobria, se organiza en torno a una puerta de arco de medio punto enmarcada por un alfiz, y el campanario, de base cuadrada, se eleva en tres cuerpos hasta rematarse con una pequeña cúpula y pináculos.',
            kids: 'Por dentro tiene forma de cruz, con techos abovedados y varias capillas a los lados 🕍. Por fuera, la puerta de entrada tiene forma de arco redondeado. El campanario tiene tres pisos y termina en una cúpula pequeña con pináculos puntiagudos, ¡como un sombrero de mago!'
          }
        }
      },
      {
        id: 'ermita-ermitana',
        name: {
          adult: 'Ermita de la Virgen de la Ermitana',
          kids: 'Ermita de la Virgen de la Ermitana — La Capilla de la Patrona 🕯️'
        },
        subtitle: {
          adult: 'El santuario de la patrona de Peñíscola, pegado al castillo',
          kids: '¡La casa de la Virgen que cuida el pueblo entero!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'main', order: 5 },
        coords: [40.3628, 0.4017],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/045_Esgl%C3%A9sia_de_la_Mare_de_D%C3%A9u_de_l%27Ermitana_%28Pen%C3%ADscola%29%2C_pl._d%27Armes.jpg/330px-045_Esgl%C3%A9sia_de_la_Mare_de_D%C3%A9u_de_l%27Ermitana_%28Pen%C3%ADscola%29%2C_pl._d%27Armes.jpg',
        audio: {
          duration: 155,
          title: {
            adult: 'Audioguía: Ermita de la Virgen de la Ermitana',
            kids: '¡Aventura Sonora: La Capilla de la Patrona!'
          }
        },
        tabs: {
          history: {
            adult: 'La ermita actual, adosada al propio castillo, se construyó entre 1708 y 1714 por orden de Sancho de Echevarría, gobernador militar de Peñíscola, en agradecimiento por la fidelidad de la población a la causa borbónica durante la Guerra de Sucesión. Sustituyó a una capilla más pequeña que ocupaba el mismo lugar, levantada a su vez sobre un antiguo cementerio del siglo VI. Desde 1664 hay constancia documental de que el pueblo celebraba fiestas en honor a su patrona, tradición que continúa cada 8 de septiembre con danzas populares.',
            kids: 'Esta ermita se construyó hace más de 300 años, pegadita al castillo 🏰. Se hizo para dar las gracias porque el pueblo entero fue muy fiel durante una guerra importante. ¡Y debajo hay restos de un cementerio todavía más antiguo, de hace casi 1.500 años!'
          },
          legends: {
            adult: 'La tradición cuenta que la imagen de la Virgen fue traída a Peñíscola por el propio apóstol Santiago, y que durante la dominación musulmana los cristianos la escondieron en una cueva del Barrio del Olivo para protegerla, hasta que pudo volver al culto tras la Reconquista. La talla original desapareció durante la Guerra Civil española, y en 1953 el propio pueblo, por voluntad popular, costeó una copia fiel para devolverle su patrona a la ermita.',
            kids: 'Cuenta la leyenda que la imagen de la Virgen la trajo hasta aquí el mismísimo apóstol Santiago ✨. Hace muchos años tuvieron que esconderla en una cueva para protegerla, y luego desapareció durante una guerra. ¡Así que en 1953 todo el pueblo se juntó para hacer una copia y devolverle su Virgen a la ermita!'
          },
          architecture: {
            adult: 'De planta de cruz latina con dos capillas a cada lado, el crucero se cubre con una cúpula y a los pies se levanta un coro alto. La fachada, rematada por una cornisa mixtilínea con pináculos que enmarca el escudo de Felipe V, guarda una curiosidad poco habitual en un templo religioso: junto a la puerta principal aparecen tallados en piedra motivos militares, como cañones y tambores de guerra, en lugar de los símbolos religiosos que sería de esperar.',
            kids: 'Tiene forma de cruz, con una cúpula en el centro y un coro elevado a la entrada 🎶. Pero fíjate bien en la puerta principal: en vez de decoraciones religiosas, ¡tiene tallados cañones y tambores de guerra en la piedra! Un detalle rarísimo para una ermita.'
          }
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
      { id: 'centro', name: { adult: 'Centro Histórico', kids: 'Centro Histórico 🏛️' }, color: '#E4002B' },
      { id: 'sur', name: { adult: 'Coyoacán', kids: 'Coyoacán 🎨' }, color: '#22C55E' },
      { id: 'polanco', name: { adult: 'Polanco · Museos', kids: 'Polanco · Museos 🦉' }, color: '#F5A623' },
      { id: 'basilica', name: { adult: 'Basílica', kids: 'Basílica ⛪' }, color: '#7B2D8E' }
    ],
    pois: [
      {
        id: 'catedral-metropolitana-cdmx',
        name: {
          adult: 'Catedral Metropolitana de México',
          kids: 'Catedral Metropolitana — La Catedral de las Dos Torres 🔔'
        },
        subtitle: {
          adult: 'La catedral católica más grande de América',
          kids: '¡Construida piedra a piedra sobre un templo azteca!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'centro', order: 1 },
        coords: [19.4344, -99.1331],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Catedral_Metropolitana_de_la_Ciudad_de_M%C3%A9xico_1.jpg/330px-Catedral_Metropolitana_de_la_Ciudad_de_M%C3%A9xico_1.jpg',
        audio: {
          duration: 188,
          title: {
            adult: 'Audioguía: Catedral Metropolitana',
            kids: '¡Aventura Sonora: La Catedral de las Dos Torres!'
          }
        },
        tabs: {
          history: {
            adult: 'La Catedral Metropolitana de México se construyó entre 1573 y 1813, a lo largo de 240 años y once virreyes, sobre parte del recinto sagrado mexica y con piedras procedentes del propio Templo Mayor. Es la catedral católica más grande de América y sede del arzobispado desde la época colonial. Su lenta construcción hizo que conviva el gótico tardío de los primeros planos con el barroco de su cuerpo central y el neoclásico de sus torres y el remate de la cúpula, obra de Manuel Tolsá a comienzos del siglo XIX.',
            kids: '¡Esta catedral tardó 240 años en construirse — más de 10 generaciones de familias! 🏗️ Se levantó justo encima de donde estaba un templo azteca gigante, y usaron piedras de ese templo para hacerla. Por eso tiene un poquito de varios estilos mezclados, ¡como si tres arquitectos distintos se hubieran turnado el trabajo!'
          },
          legends: {
            adult: 'Se dice que el edificio entero se hunde muy lentamente en el antiguo lecho del lago de Texcoco, sobre el que se construyó Tenochtitlan, y que sus cimientos guardan túneles secretos que conectarían con el Templo Mayor y el Palacio Nacional, aunque nunca se han encontrado del todo. En la Capilla de las Reliquias se venera al "Cristo del Veneno", una talla que según la tradición se oscureció al absorber el veneno que un feligrés indígena había untado en sus pies para envenenar a los fieles que lo besaban, salvando así muchas vidas.',
            kids: '¡Dicen que la catedral se hunde poquito a poquito porque está construida sobre un lago antiguo! 🌊 También cuentan la leyenda de una estatua de Cristo que se puso oscura de color para "tragarse" un veneno y salvar a la gente que la besaba. ¡Algunos túneles secretos bajo la catedral siguen siendo un misterio!'
          },
          architecture: {
            adult: 'De planta de cruz latina con cinco naves y dieciséis capillas, alberga el imponente Altar de los Reyes, obra churrigueresca en madera dorada de Jerónimo de Balbás terminada en 1737. Sus dos torres campanario alcanzan los 67 metros y guardan 25 campanas, entre ellas "La Doña María", la mayor de América Latina. Debido al terreno blando de la antigua isla lacustre, el edificio se ha inclinado y hundido de forma desigual durante siglos, lo que obligó a un ambicioso proyecto de nivelación con pozos de compensación en los años 90.',
            kids: '¡Tiene dos torres altísimas con 25 campanas dentro, y una se llama "La Doña María"! 🔔 Es tan grande que tiene 16 capillas diferentes adentro, como pequeñas iglesias dentro de la iglesia grande. Como está construida sobre tierra blandita de un lago viejo, ¡el edificio se ha ido inclinando poquito a poco durante siglos!'
          }
        }
      },
      {
        id: 'templo-mayor',
        name: {
          adult: 'Templo Mayor',
          kids: 'Templo Mayor — La Pirámide Escondida 🐍🦅'
        },
        subtitle: {
          adult: 'El corazón sagrado de Tenochtitlan',
          kids: '¡Una pirámide azteca oculta bajo la ciudad!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'centro', order: 2 },
        coords: [19.4350, -99.1314],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Partial_view_Templo_Mayor.jpg/330px-Partial_view_Templo_Mayor.jpg',
        audio: {
          duration: 180,
          title: {
            adult: 'Audioguía: Templo Mayor',
            kids: '¡Aventura Sonora: La Pirámide Escondida!'
          }
        },
        tabs: {
          history: {
            adult: 'El Templo Mayor fue el centro religioso y simbólico de Tenochtitlan, capital del imperio mexica, fundada según la tradición en 1325. Dedicado conjuntamente a Huitzilopochtli, dios de la guerra, y Tláloc, dios de la lluvia, la pirámide se reconstruyó y amplió en siete etapas superpuestas a lo largo de dos siglos, cada nuevo gobernante añadiendo una capa sobre la anterior. Fue arrasado por los conquistadores españoles en 1521 y quedó sepultado bajo el centro de la nueva ciudad colonial durante más de 450 años.',
            kids: '¡Aquí estaba la pirámide más importante de los aztecas, con dos templos en la punta! 🔺 Cada nuevo gobernante construía una pirámide nueva encima de la anterior, ¡como capas de un pastel! Cuando llegaron los españoles la destruyeron, y la ciudad se construyó justo encima. ¡Estuvo escondida bajo tierra durante casi 500 años!'
          },
          legends: {
            adult: 'El lugar está ligado al mito fundacional de México: los mexicas, pueblo errante, recibieron de sus sacerdotes la señal de asentarse donde vieran un águila devorando una serpiente posada sobre un nopal, visión que hallaron en un islote del lago de Texcoco. En el Templo Mayor se representaba también el mito de Coyolxauhqui, la diosa lunar descuartizada por su hermano Huitzilopochtli al nacer este armado para defender a su madre; su cuerpo desmembrado aparece tallado en el enorme disco de piedra hallado al pie de las escalinatas.',
            kids: '¡La leyenda dice que los aztecas buscaban una señal para fundar su ciudad: un águila comiéndose una serpiente encima de un nopal! 🦅🐍 La encontraron aquí mismo, ¡y por eso está en la bandera de México! También cuentan la historia de una diosa de la Luna que aparece "rota en pedacitos" tallada en una piedra gigante, ¡como un rompecabezas de piedra!'
          },
          architecture: {
            adult: 'La pirámide combinaba dos templos gemelos en su cúspide, accesibles por escalinatas independientes, sobre una base de más de 80 metros de lado en su última fase. El hallazgo casual en 1978 de la piedra de Coyolxauhqui por trabajadores de la Compañía de Luz desencadenó una excavación sistemática que sacó a la luz más de 200 ofrendas rituales con objetos de jade, concha, coral y restos de animales traídos de todo Mesoamérica. Hoy el yacimiento, a cielo abierto junto a la Catedral, se recorre mediante pasarelas elevadas y se completa con el Museo del Templo Mayor.',
            kids: '¡Se encontró por accidente en 1978, cuando unos trabajadores estaban cavando para poner cables de luz! ⚡ Encontraron una piedra gigante con la diosa de la Luna tallada. Desde entonces han descubierto más de 200 "regalos" que los aztecas ofrecían a sus dioses: joyas, conchas y hasta huesos de animales de lugares muy lejanos.'
          }
        }
      },
      {
        id: 'palacio-bellas-artes-cdmx',
        name: {
          adult: 'Palacio de Bellas Artes',
          kids: 'Palacio de Bellas Artes — El Palacio de Mármol que Sube y Baja 🎭'
        },
        subtitle: {
          adult: 'El templo del arte mexicano, mitad mármol, mitad Art Déco',
          kids: '¡Un palacio que pesa tanto que se hunde poquito a poco!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'centro', order: 4 },
        coords: [19.43527778, -99.14138889],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Bellas_Artes_01.jpg/330px-Bellas_Artes_01.jpg',
        audio: {
          duration: 178,
          title: {
            adult: 'Audioguía: Palacio de Bellas Artes',
            kids: '¡Aventura Sonora: El Palacio que Sube y Baja!'
          }
        },
        tabs: {
          history: {
            adult: 'El Palacio de Bellas Artes se comenzó a construir en 1904 por encargo del presidente Porfirio Díaz, quien encomendó al arquitecto italiano Adamo Boari un edificio de mármol que rivalizara con los grandes teatros europeos para celebrar el centenario de la Independencia en 1910. Las obras se interrumpieron por la Revolución Mexicana y por problemas de cimentación en el terreno blando del antiguo lago, y no se inauguró hasta 1934, treinta años después de empezar, ya con un interior Art Déco diseñado por el arquitecto mexicano Federico Mariscal.',
            kids: '¡Este palacio tardó 30 años en terminarse! 🏛️ Empezó a construirse hace más de 100 años con mármol traído desde Italia, pero hubo una revolución en México y las obras pararon durante mucho tiempo. Cuando por fin lo terminaron, lo decoraron por dentro con un estilo mucho más moderno y colorido.'
          },
          legends: {
            adult: 'El edificio entero pesa tanto —su fachada es de mármol de Carrara— que desde su construcción se ha hundido más de cuatro metros en el subsuelo blando de la antigua Ciudad de México, hasta el punto de que hoy hay que bajar varios escalones desde la calle para entrar, al contrario de como se proyectó. Se cuenta que Boari, obsesionado con el mármol italiano, mandó traer tantas toneladas de piedra que los propios barcos que las transportaban tuvieron problemas para cruzar el Atlántico cargados.',
            kids: '¡Este palacio pesa tantísimo que se ha ido hundiendo poco a poco durante más de 100 años! 🏛️⬇️ Por eso ahora hay que bajar escalones para entrar, cuando al principio se construyó al nivel de la calle. ¡Imagina un edificio tan pesado que se hunde en la tierra como una piedra en la arena!'
          },
          architecture: {
            adult: 'Combina un exterior de mármol de estilo Art Nouveau, con la célebre cúpula de mosaicos de cristal de Tiffany, y un interior completamente Art Déco, con mármoles de colores geométricos y motivos prehispánicos estilizados. Alberga el telón de cristal de Tiffany más grande del mundo, con casi un millón de piezas representando los volcanes Popocatépetl e Iztaccíhuatl, y sus muros están decorados con murales de Diego Rivera —incluido "El hombre controlador del universo"—, David Alfaro Siqueiros y Rufino Tamayo.',
            kids: '¡Por fuera parece un pastel de mármol blanco con una cúpula de cristales de colores! 🎂✨ Por dentro tiene un telón gigante hecho con casi un millón de piezas de cristal que forma un dibujo de dos volcanes. En las paredes hay pinturas enormes hechas por artistas mexicanos muy famosos, ¡como si el palacio fuera un museo de cómics gigante!'
          }
        }
      },
      {
        id: 'torre-latinoamericana',
        name: {
          adult: 'Torre Latinoamericana',
          kids: 'Torre Latinoamericana — El Rascacielos que Baila con los Terremotos 🏢'
        },
        subtitle: {
          adult: 'El primer rascacielos antisísmico del mundo',
          kids: '¡Un edificio que se mueve para no romperse en los terremotos!'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'centro', order: 3 },
        coords: [19.43388889, -99.14055556],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Torre_Latinoamericana_Mexico_City.jpg/330px-Torre_Latinoamericana_Mexico_City.jpg',
        audio: {
          duration: 172,
          title: {
            adult: 'Audioguía: Torre Latinoamericana',
            kids: '¡Aventura Sonora: El Rascacielos que Baila!'
          }
        },
        tabs: {
          history: {
            adult: 'Inaugurada en 1956, la Torre Latinoamericana fue durante más de dos décadas el edificio más alto de Latinoamérica, con 182 metros y 44 pisos. Se construyó justo en el cruce donde antes estuvo el Colegio de San Ildefonso, sobre el mismo subsuelo lacustre inestable que ha hundido tantos edificios del centro histórico.',
            kids: '¡Cuando se construyó, en 1956, fue el edificio más alto de toda Latinoamérica! 🏆 Tiene 44 pisos y está justo en el centro de la ciudad, construido sobre la misma tierra blandita de un lago antiguo que ha hecho que otros edificios se hundan.'
          },
          legends: {
            adult: 'Su mayor hazaña ocurrió el 28 de julio de 1957: un terremoto de magnitud 7,7 sacudió la ciudad y derribó decenas de edificios, pero la Torre Latinoamericana apenas sufrió daños, oscilando sin romperse gracias a su innovador sistema de cimentación con pilotes de fricción hasta roca firme, diseñado por el ingeniero Adolfo Zeevaert. Desde entonces se ganó fama de torre "invencible", y ha resistido sin colapsar todos los grandes terremotos de la capital, incluidos los de 1985 y 2017.',
            kids: '¡En 1957 hubo un terremoto gigante que tiró muchos edificios de la ciudad, pero esta torre apenas se movió! 🌎 Desde entonces la llaman la torre "invencible", porque ha aguantado todos los terremotos grandes que ha habido después, ¡incluso los más recientes!'
          },
          architecture: {
            adult: 'Fue el primer rascacielos del mundo diseñado específicamente para resistir tanto sismos como el terreno blando de una antigua cuenca lacustre, mediante 361 pilotes de control clavados hasta encontrar un estrato de roca firme a 33 metros de profundidad, permitiendo que la estructura "flote" y se mueva ligeramente en vez de resistir rígida. Su mirador, en el piso 44, ofrece una de las mejores vistas panorámicas de 360 grados del Centro Histórico y, en días despejados, de los volcanes que rodean el Valle de México.',
            kids: '¡Tiene 361 patas de cemento clavadas muy hondo en la tierra, hasta encontrar roca dura! 🦵 Así, en vez de quedarse tiesa como una estatua, el edificio se puede mover un poquito cuando tiembla, ¡como si bailara! Arriba del todo hay un mirador desde el que se ve toda la ciudad, ¡y hasta los volcanes en los días despejados!'
          }
        }
      },
      {
        id: 'castillo-chapultepec',
        name: {
          adult: 'Castillo de Chapultepec',
          kids: 'Castillo de Chapultepec — El Castillo de la Colina del Chapulín 🦗🏰'
        },
        subtitle: {
          adult: 'El único castillo real de América del Norte',
          kids: '¡Un castillo de verdad con emperador y todo!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'polanco', order: 1 },
        coords: [19.4206, -99.1817],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Chapultepec_castle_in_Mexico_city.jpg/330px-Chapultepec_castle_in_Mexico_city.jpg',
        audio: {
          duration: 178,
          title: {
            adult: 'Audioguía: Castillo de Chapultepec',
            kids: '¡Aventura Sonora: El Castillo de la Colina!'
          }
        },
        tabs: {
          history: {
            adult: 'Construido a partir de 1785 sobre el cerro sagrado de Chapultepec —"colina del chapulín" en náhuatl— por orden del virrey Bernardo de Gálvez, pasó por usos muy distintos: colegio militar, y desde 1864 residencia del emperador Maximiliano I y la emperatriz Carlota durante el Segundo Imperio Mexicano. Fue también residencia presidencial hasta 1939, cuando Lázaro Cárdenas lo convirtió en el Museo Nacional de Historia. Es el único castillo de auténtico uso real que ha existido en el continente americano.',
            kids: '¡Este es el único castillo de verdad, con emperador y todo, que ha habido en toda América! 👑 Antes de ser castillo fue escuela militar, y luego lo convirtieron en un museo enorme. Está en lo alto de una colina que los aztecas ya consideraban un lugar sagrado.'
          },
          legends: {
            adult: 'El cerro es escenario de la célebre gesta de los Niños Héroes: en 1847, durante la invasión estadounidense, varios jóvenes cadetes del Colegio Militar resistieron hasta el final la toma del castillo, y la tradición cuenta que el cadete Juan Escutia se envolvió en la bandera mexicana y saltó al vacío antes que rendirla al enemigo. Por los pasillos del castillo también se cuenta que el fantasma de la emperatriz Carlota, quien enloqueció de dolor tras la ejecución de Maximiliano, aún recorre de noche las habitaciones que habitó.',
            kids: '¡Cuenta la leyenda que en 1847 unos cadetes muy jóvenes defendieron el castillo hasta el final! Dicen que uno de ellos, Juan Escutia, se envolvió en la bandera de México y saltó desde lo alto antes que dejar que se la quitaran. 🇲🇽 También hay quien dice que el fantasma de una emperatriz muy triste todavía camina por las noches entre las habitaciones.'
          },
          architecture: {
            adult: 'Combina elementos neoclásicos y art nouveau, con el añadido del célebre Alcázar y sus jardines colgantes al estilo pompeyano, mandados construir por Maximiliano. Alberga murales de grandes muralistas mexicanos como Juan O\'Gorman —cuyo mural narra la lucha por la Independencia— y David Alfaro Siqueiros. Desde su terraza, el "Balcón del Emperador" ofrece una de las mejores vistas de la Ciudad de México, con el Paseo de la Reforma extendiéndose hacia el horizonte.',
            kids: '¡Tiene jardines colgantes que parecen de un palacio romano! 🌿 Dentro hay pinturas gigantes hechas por artistas mexicanos muy famosos que cuentan la historia del país en las paredes. Desde el balcón de arriba, ¡se ve toda la Ciudad de México a tus pies!'
          }
        }
      },
      {
        id: 'casa-azul-frida-kahlo',
        name: {
          adult: 'Museo Frida Kahlo (La Casa Azul)',
          kids: 'La Casa Azul — La Casa Mágica de Frida 🎨💙'
        },
        subtitle: {
          adult: 'La casa donde nació, vivió y murió Frida Kahlo',
          kids: '¡Una casa pintada de azul brillante!'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'sur', order: 3 },
        coords: [19.3551, -99.1625],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Museo_Frida_Kahlo.JPG/330px-Museo_Frida_Kahlo.JPG',
        audio: {
          duration: 170,
          title: {
            adult: 'Audioguía: La Casa Azul',
            kids: '¡Aventura Sonora: La Casa Mágica de Frida!'
          }
        },
        tabs: {
          history: {
            adult: 'Construida en 1904 por Guillermo Kahlo, padre de la artista, esta casa del barrio de Coyoacán fue el hogar donde Frida Kahlo nació en 1907 y murió en 1954, y donde vivió junto al muralista Diego Rivera durante buena parte de su matrimonio. Tras la muerte de Frida, Diego donó la casa y su contenido para convertirla en museo, que abrió sus puertas en 1958 conservando intactos muebles, objetos personales y buena parte de su colección de arte popular mexicano y prehispánico.',
            kids: '¡Frida Kahlo nació en esta casa y también vivió aquí de mayor con su esposo, el pintor Diego Rivera! 🖼️ Cuando ella murió, Diego decidió convertir la casa en un museo para que todo el mundo pudiera conocerla, ¡con sus muebles y sus cosas tal y como las dejó!'
          },
          legends: {
            adult: 'En el jardín se conserva la pequeña pirámide prehispánica que Diego Rivera mandó construir para exhibir su colección de piezas de arte popular y cerámica antigua, un templo en miniatura dedicado a "los dioses que él mismo inventaba" según sus propias palabras. Se cuenta que las urnas con las cenizas de Frida, en forma de sapo prehispánico según su deseo, permanecen en su antigua habitación junto a la cama con el espejo en el techo que su madre instaló tras el accidente de tranvía que marcó su vida y su pintura para siempre.',
            kids: '¡En el jardín hay una pequeña pirámide que Diego construyó para guardar figuras antiguas que coleccionaba! 🌵 Dicen que las cenizas de Frida están guardadas en una urna con forma de sapito, tal y como ella quería. En su cuarto todavía se puede ver la cama con un espejo en el techo — ¡lo pusieron para que ella pudiera pintarse a sí misma cuando no podía moverse!'
          },
          architecture: {
            adult: 'La casa debe su nombre al intenso azul cobalto de sus muros exteriores, un color tradicional mexicano conocido como "azul añil". En torno a un patio central con plantas y esculturas prehispánicas se distribuyen el estudio de Frida —con su silla de ruedas y caballete tal como los dejó—, la cocina de azulejos amarillos y azules decorada con miniaturas de barro, y salas que exhiben sus característicos vestidos de tehuana y corsés pintados a mano.',
            kids: '¡Toda la casa está pintada de un azul buenísimo, por eso la llaman "la Casa Azul"! 💙 Tiene un patio en el medio lleno de plantas y esculturas antiguas. Puedes ver el estudio donde pintaba Frida, con su silla de ruedas y sus pinceles, ¡tal y como los dejó ella!'
          }
        }
      },
      {
        id: 'xochimilco-trajineras',
        name: {
          adult: 'Xochimilco',
          kids: 'Xochimilco — El Barrio de los Canales de Colores 🛶🌸'
        },
        subtitle: {
          adult: 'Los últimos canales del antiguo lago azteca',
          kids: '¡Paseos en barca por canales de colores!'
        },
        category: CATEGORIES.HIDDEN,
        coords: [19.2476, -99.0982],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Sobrevuelos_CDMX_Xochimilco_%2840385667161%29.jpg/330px-Sobrevuelos_CDMX_Xochimilco_%2840385667161%29.jpg',
        audio: {
          duration: 165,
          title: {
            adult: 'Audioguía: Xochimilco',
            kids: '¡Aventura Sonora: Los Canales de Colores!'
          }
        },
        tabs: {
          history: {
            adult: 'Xochimilco —"lugar donde florecen las flores" en náhuatl— conserva el último vestigio del vasto sistema de lagos que cubría el Valle de México antes de la conquista española. Desde época prehispánica, los pueblos del lugar cultivaban chinampas, islas artificiales de tierra fértil ancladas con ahuejotes (sauces locales), un ingenioso sistema agrícola que llegó a alimentar a toda Tenochtitlan. En 1987 la UNESCO declaró la zona Patrimonio de la Humanidad, reconociendo tanto sus canales como su valor agrícola vivo.',
            kids: '¡Xochimilco es lo último que queda del gran lago que había antes donde ahora está la ciudad! 🌊 Hace cientos de años la gente cultivaba en "islas flotantes" hechas de tierra, ¡como huertos que flotan en el agua! Todavía hoy hay gente que cultiva flores y verduras así.'
          },
          legends: {
            adult: 'Los canales de Xochimilco son escenario de una de las leyendas más inquietantes de México: la de La Llorona, el espíritu de una mujer que llora eternamente junto al agua en busca de sus hijos perdidos, cuyo lamento —dicen los lugareños— aún puede escucharse en las noches de niebla sobre los canales. Muy cerca se encuentra también la Isla de las Muñecas, donde un ermitaño llamado Julián Santana Barrera colgó durante décadas cientos de muñecas mutiladas que encontraba flotando, convencido de que así calmaba el espíritu de una niña ahogada en el canal.',
            kids: '¡Por las noches, cuentan que se escucha llorar a un fantasma llamado La Llorona entre la niebla de los canales! 👻 Y muy cerca hay una isla espeluznante llena de muñecas viejas colgadas de los árboles — ¡un señor las colocó ahí hace muchos años porque decía que así protegía el espíritu de una niña! ¿Te atreverías a pasar cerca en barca?'
          },
          architecture: {
            adult: 'La red de canales, de unos 170 kilómetros en su máxima extensión histórica, se recorre en trajineras, coloridas embarcaciones de madera pintadas con nombres de mujeres y decoradas con arcos florales, que antiguamente transportaban las cosechas de las chinampas al mercado. Hoy conviven con embarcaciones que venden comida, música de mariachi y hasta flores directamente desde el agua, en un paseo dominical que sigue siendo, siglos después, la forma más viva de conocer el antiguo paisaje lacustre de la ciudad.',
            kids: '¡Los barcos se llaman "trajineras" y cada uno tiene pintado un nombre de mujer, como si fueran de colores! 🚣‍♀️🌺 Por los canales pasan también barcas que venden comida y hasta música de mariachi tocando en directo. ¡Es como un mercado flotante gigante!'
          }
        }
      },
      {
        id: 'mercado-coyoacan',
        name: {
          adult: 'Mercado de Coyoacán',
          kids: 'Mercado de Coyoacán — El Mercado de los Mil Sabores 🌮🥭'
        },
        subtitle: {
          adult: 'Sabores, colores y tostadas desde 1921',
          kids: '¡Aquí huele riquísimo en cada pasillo!'
        },
        category: CATEGORIES.GASTRONOMY,
        essential: { route: 'sur', order: 2 },
        coords: [19.3503, -99.1624],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Mercado_de_Coyoac%C3%A1n_CDMX.jpg/330px-Mercado_de_Coyoac%C3%A1n_CDMX.jpg',
        audio: {
          duration: 155,
          title: {
            adult: 'Audioguía: Mercado de Coyoacán',
            kids: '¡Aventura Sonora: El Mercado de los Mil Sabores!'
          }
        },
        tabs: {
          history: {
            adult: 'El Mercado de Coyoacán abrió sus puertas en 1921, aunque el edificio actual data de 1956, cuando el gobierno de Adolfo Ruiz Cortines impulsó la modernización de los mercados públicos de la capital. Situado en pleno barrio de Coyoacán, donde vivieron Frida Kahlo y Diego Rivera, se convirtió con el paso de las décadas en uno de los mercados más queridos de la ciudad, tanto por sus puestos de comida como por su artesanía y sus telas bordadas.',
            kids: '¡Este mercado lleva abierto más de 100 años! 🏪 Está en el barrio donde vivió la pintora Frida Kahlo, así que dicen que ella misma venía por aquí a comprar. Tiene dos pisos llenos de puestos de comida, ropa y juguetes tradicionales mexicanos.'
          },
          legends: {
            adult: 'Entre los puestos más veteranos circula la leyenda de que el secreto de las mejores tostadas del mercado —hay decenas de variedades, desde tinga hasta ceviche— se transmite en susurros de madre a hija desde hace generaciones, y que ningún puesto ha logrado copiar exactamente la receta original de sus vecinos, por mucho que lo hayan intentado. Los vecinos de Coyoacán aseguran que basta con caminar sus pasillos para reconocer, con los ojos cerrados, en qué puesto está cada familia solo por el aroma.',
            kids: '¡Cuentan que las recetas de las famosas tostadas del mercado son un secreto de familia que se pasa de madres a hijas! 🤫 Nadie ha logrado copiar exactamente el sabor de su vecino, aunque lo intenten. ¡Dicen que los vecinos del barrio reconocen cada puesto solo por el olor, con los ojos cerrados!'
          },
          architecture: {
            adult: 'Es un edificio de planta rectangular de dos alturas donde conviven bajo un mismo techo puestos de frutas y verduras, flores, artesanías, disfraces, textiles bordados a mano y una concurrida zona de comida con largas barras compartidas. Su trazado en pasillos estrechos, típico de los mercados populares mexicanos de mediados del siglo XX, mantiene un ambiente denso y colorido que apenas ha cambiado desde su modernización.',
            kids: '¡Es un mercado de dos pisos con pasillos estrechos llenos de colores! 🌈 En una parte venden fruta y flores, en otra ropa bordada a mano y disfraces, ¡y en otra hay mesas larguísimas donde te sientas a comer codo con codo con otras familias!'
          }
        }
      },
      {
        id: 'alameda-central',
        name: {
          adult: 'Alameda Central',
          kids: 'Alameda Central — El Parque de las Fuentes de Piedra ⛲'
        },
        subtitle: {
          adult: 'El parque público más antiguo de América',
          kids: '¡El parque más viejito de todo el continente!'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'centro', order: 5 },
        coords: [19.43555556, -99.14388889],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Alameda_Central_desde_el_aire_1.jpg/330px-Alameda_Central_desde_el_aire_1.jpg',
        audio: {
          duration: 150,
          title: {
            adult: 'Audioguía: Alameda Central',
            kids: '¡Aventura Sonora: El Parque de las Fuentes de Piedra!'
          }
        },
        tabs: {
          history: {
            adult: 'Mandada crear en 1592 por el virrey Luis de Velasco II, la Alameda Central es el parque público más antiguo de América. Debe su nombre a los álamos que se plantaron originalmente en sus paseos. Durante la época colonial fue ampliada varias veces y, bajo el Porfiriato, se remodeló al estilo de los parques parisinos, con las fuentes y esculturas de mármol que aún conserva, para ofrecer a la burguesía capitalina un paseo elegante a la europea.',
            kids: '¡Este parque se creó hace más de 400 años, en 1592! 🌳 Es el parque público más antiguo de todo el continente americano. Le pusieron ese nombre por los árboles llamados álamos que sembraron al principio. Hace más de 100 años lo decoraron con fuentes que parecen sacadas de un cuento.'
          },
          legends: {
            adult: 'En la época colonial, la Alameda fue también escenario de los autos de fe de la Inquisición, y se cuenta que las almas de algunos condenados aún vagan entre sus fuentes en las noches de niebla. Más moderna es la leyenda urbana ligada al mural de Diego Rivera "Sueño de una tarde dominical en la Alameda Central", que originalmente colgaba en un hotel cercano: se dice que el pintor incluyó su propio rostro de niño junto al de Frida Kahlo y La Catrina como un autorretrato secreto de todo México reunido en un solo sueño.',
            kids: '¡Cuentan que hace mucho tiempo pasaban cosas muy tristes en este parque, y que algunos fantasmas todavía se pasean entre las fuentes en las noches de niebla! 👻 También hay un mural gigante y famoso sobre este parque donde el pintor Diego Rivera se dibujó a sí mismo de niño, ¡escondido entre cientos de personajes de la historia de México!'
          },
          architecture: {
            adult: 'De trazado geométrico con paseos arbolados que convergen en un octágono central, conserva ocho fuentes de estilo neoclásico e italianizante instaladas durante el Porfiriato, entre ellas la Fuente de Venus y la Fuente de Neptuno. En sus extremos se alzan el Hemiciclo a Juárez y el Palacio de Bellas Artes, y su vegetación de fresnos centenarios ofrece uno de los pocos grandes pulmones verdes del Centro Histórico.',
            kids: '¡Tiene ocho fuentes de piedra con nombres de dioses antiguos, como Venus y Neptuno! ⛲ Los caminos del parque forman un dibujo geométrico si lo ves desde arriba. Está lleno de árboles enormes y muy viejos que dan muchísima sombra.'
          }
        }
      },
      {
        id: 'parroquia-san-juan-bautista-coyoacan',
        name: {
          adult: 'Jardín Centenario y Parroquia de San Juan Bautista',
          kids: 'Jardín Centenario — La Plaza de las Ranas de Coyoacán 🐸'
        },
        subtitle: {
          adult: 'El corazón colonial de Coyoacán desde 1522',
          kids: '¡La plaza principal con estatuas de ranitas!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'sur', order: 1 },
        coords: [19.34891667, -99.16236111],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/San_Juan_Bautista%2C_Parroquia_de_Coyoac%C3%A1n.jpg/330px-San_Juan_Bautista%2C_Parroquia_de_Coyoac%C3%A1n.jpg',
        audio: {
          duration: 165,
          title: {
            adult: 'Audioguía: Jardín Centenario y Parroquia de Coyoacán',
            kids: '¡Aventura Sonora: La Plaza de las Ranitas!'
          }
        },
        tabs: {
          history: {
            adult: 'A solo ocho años de completada la conquista, Hernán Cortés cedió estos terrenos a un grupo de frailes franciscanos, que entre 1522 y 1552 levantaron el convento, el templo y la huerta de San Juan Bautista, una de las primeras parroquias de la Nueva España. El conjunto, que hoy ocupa buena parte del actual Jardín Centenario y Plaza Hidalgo, fue el germen del pueblo de Coyoacán, que durante un tiempo llegó a funcionar como sede provisional del gobierno de la Ciudad de México tras la caída de Tenochtitlan.',
            kids: '¡Esta iglesia y su plaza tienen casi 500 años! ⛪ Los frailes que la construyeron llegaron justo después de la conquista. Durante un tiempo, Coyoacán fue incluso el lugar desde donde se gobernaba toda la ciudad, ¡antes de que se reconstruyera el centro donde está hoy!'
          },
          legends: {
            adult: 'El Jardín Centenario, antiguo atrio del convento, se llenó en el siglo XX de esculturas de ranas de bronce en homenaje al posible origen del nombre "Coyoacán" —"lugar de coyotes" en náhuatl, aunque otra teoría lo relaciona con "cojo-huacan", "lugar de quienes tienen ranas"—. La tradición local asegura que frotar la cabeza de la rana de la fuente central trae buena suerte a los visitantes, un ritual que miles de turistas repiten cada fin de semana.',
            kids: '¡El jardín está lleno de estatuas de ranas de bronce! 🐸 Nadie sabe con seguridad por qué, pero una teoría dice que tiene que ver con el propio nombre de Coyoacán. La gente del barrio dice que si le frotas la cabeza a la rana de la fuente, ¡te trae buena suerte!'
          },
          architecture: {
            adult: 'La fachada de la parroquia combina un ábside plateresco del siglo XVI con torres barrocas añadidas en 1804, resultado de sucesivas ampliaciones a lo largo de cuatro siglos. El antiguo atrio conventual, hoy convertido en el Jardín Centenario, conserva parte de sus muros de piedra volcánica original y se comunica directamente con la vecina Plaza Hidalgo, formando el conjunto de plazas arboladas más animado de Coyoacán, rodeado de cafés y puestos de artesanía.',
            kids: '¡La iglesia mezcla partes construidas hace 500 años con torres añadidas hace "solo" 200! 🕰️ Todavía se pueden ver trozos del muro original de piedra volcánica del convento. Alrededor hay cafés y puestos de artesanías por todas partes.'
          }
        }
      },
      {
        id: 'museo-casa-trotsky',
        name: {
          adult: 'Museo Casa de León Trotsky',
          kids: 'Museo Casa de León Trotsky — La Casa Fortaleza 🗼'
        },
        subtitle: {
          adult: 'El último refugio del revolucionario ruso exiliado',
          kids: '¡Una casa convertida en fortaleza de verdad!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'sur', order: 4 },
        coords: [19.35770123, -99.15958737],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/MUSEO_CASA_DE_LEON_TROTSKY_1.jpg/330px-MUSEO_CASA_DE_LEON_TROTSKY_1.jpg',
        audio: {
          duration: 170,
          title: {
            adult: 'Audioguía: Casa de León Trotsky',
            kids: '¡Aventura Sonora: La Casa Fortaleza!'
          }
        },
        tabs: {
          history: {
            adult: 'El revolucionario ruso León Trotsky, exiliado y perseguido por Stalin, vivió en esta casa de Coyoacán desde 1939 hasta su asesinato en 1940, tras una primera etapa alojado en la Casa Azul de Frida Kahlo y Diego Rivera, quienes gestionaron su asilo en México. Tras el atentado, su viuda Natalia Sedova conservó la vivienda tal cual quedó aquella noche, y en 1990 la convirtió en museo dedicado a su memoria y a la historia del movimiento revolucionario internacional.',
            kids: '¡Aquí vivió un revolucionario ruso muy famoso que tuvo que escapar de su país! 🇷🇺 Antes de esta casa, vivió un tiempo en la Casa Azul con Frida Kahlo y Diego Rivera, que le ayudaron a venir a México. Su esposa convirtió la casa en museo para que la gente recordara su historia.'
          },
          legends: {
            adult: 'La casa sufrió un primer atentado en mayo de 1940, cuando un comando armado ametralló los dormitorios sin lograr matar a Trotsky, que se salvó escondiéndose bajo la cama junto a su esposa; los impactos de bala aún son visibles en los muros. Meses después, en agosto de 1940, un agente soviético infiltrado como simpatizante logró acercarse a él en su propio despacho y asestarle un golpe mortal con un piolet de alpinista, en uno de los magnicidios más estudiados del siglo XX.',
            kids: '¡Esta casa sufrió un ataque con muchísimos disparos, y todavía se pueden ver los agujeros de las balas en las paredes! 🔫 Por suerte, esa vez nadie murió. Meses después ocurrió algo mucho más triste, y por eso la casa se convirtió después en un lugar para recordar su historia.'
          },
          architecture: {
            adult: 'Tras el primer atentado, la vivienda original se transformó en una auténtica fortaleza: se levantaron muros perimetrales de más de tres metros, se blindaron puertas y ventanas, y se construyeron torretas de vigilancia en las esquinas, todavía en pie. El despacho de Trotsky se conserva intacto, con sus libros, gafas y calendario congelado en la fecha del atentado, mientras que el jardín alberga su tumba, coronada con un monumento y la hoz y el martillo.',
            kids: '¡Después del primer ataque, convirtieron la casa en una fortaleza de verdad! 🏰 Le pusieron muros altísimos, ventanas blindadas y hasta torretas de vigilancia en las esquinas, que todavía siguen ahí. Su despacho se conserva tal cual lo dejó, con sus libros y sus gafas.'
          }
        }
      },
      {
        id: 'museo-nacional-antropologia',
        name: {
          adult: 'Museo Nacional de Antropología',
          kids: 'Museo Nacional de Antropología — El Museo de la Piedra del Sol ☀️'
        },
        subtitle: {
          adult: 'El mayor museo de culturas prehispánicas del mundo',
          kids: '¡Aquí vive la piedra azteca más famosa del mundo!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'polanco', order: 2 },
        coords: [19.42611111, -99.18611111],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Musee_National_Anthropologie-Entree.jpg/330px-Musee_National_Anthropologie-Entree.jpg',
        audio: {
          duration: 185,
          title: {
            adult: 'Audioguía: Museo Nacional de Antropología',
            kids: '¡Aventura Sonora: El Museo de la Piedra del Sol!'
          }
        },
        tabs: {
          history: {
            adult: 'Inaugurado en 1964 por el presidente Adolfo López Mateos, el Museo Nacional de Antropología reúne y ordena en 23 salas el legado de las culturas prehispánicas de México: olmecas, mayas, mexicas, teotihuacanos y muchas más. Su construcción, dirigida por el arquitecto Pedro Ramírez Vázquez, formó parte de un ambicioso proyecto de estado para consolidar un relato nacional del pasado indígena mexicano tras la Revolución.',
            kids: '¡Este museo se inauguró en 1964 y guarda tesoros de todas las culturas antiguas de México! 🏺 Ahí dentro puedes conocer a los olmecas, los mayas y los aztecas, entre muchos otros pueblos. Tiene 23 salas, ¡cada una dedicada a una cultura distinta!'
          },
          legends: {
            adult: 'Su pieza más célebre, la Piedra del Sol o "calendario azteca", encontrada en 1790 bajo el Zócalo, ha generado toda clase de teorías populares —desde predicciones apocalípticas hasta lecturas astronómicas fantasiosas— que los propios arqueólogos del museo llevan décadas desmintiendo: en realidad es un monumento ceremonial dedicado al Sol, no un calendario funcional como tal. Se dice también que el gran "paraguas" de piedra que preside el patio central, sostenido por una sola columna, desafía las leyes de la ingeniería según cuentan los guías a los visitantes más incrédulos.',
            kids: '¡La pieza más famosa es un disco de piedra gigante llamado "calendario azteca"! ☀️ Aunque mucha gente cree que predice el futuro, los expertos dicen que en realidad era un monumento dedicado al Sol. En el patio central hay un "paraguas" de piedra gigante que se sostiene ¡con una sola columna en el medio!'
          },
          architecture: {
            adult: 'El edificio, obra maestra de la arquitectura mexicana del siglo XX, se organiza alrededor de un patio central cubierto por "El Paraguas", una gran estructura de concreto de 84 por 54 metros sostenida por una única columna esculpida con motivos prehispánicos, de la que cae una cortina de agua. Las salas se distribuyen en dos niveles bajo un mismo techo continuo, permitiendo un recorrido cronológico y temático por las principales culturas de Mesoamérica.',
            kids: '¡Hay una estructura gigante llamada "El Paraguas" que cubre el patio central, sostenida por una sola columna decorada! 🌂 Debajo cae una cortina de agua como una fuente. El museo tiene dos pisos enteros llenos de salas para recorrer.'
          }
        }
      },
      {
        id: 'museo-soumaya',
        name: {
          adult: 'Museo Soumaya',
          kids: 'Museo Soumaya — El Edificio de Escamas Plateadas ✨'
        },
        subtitle: {
          adult: 'Un edificio futurista con más de 66.000 obras de arte',
          kids: '¡Un museo con forma de escultura gigante y brillante!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'polanco', order: 3 },
        coords: [19.44066, -99.20462],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Museo_Soumaya%2C_Ciudad_de_M%C3%A9xico%2C_M%C3%A9xico%2C_2015-07-18%2C_DD_12.JPG/330px-Museo_Soumaya%2C_Ciudad_de_M%C3%A9xico%2C_M%C3%A9xico%2C_2015-07-18%2C_DD_12.JPG',
        audio: {
          duration: 160,
          title: {
            adult: 'Audioguía: Museo Soumaya',
            kids: '¡Aventura Sonora: El Edificio de Escamas Plateadas!'
          }
        },
        tabs: {
          history: {
            adult: 'Inaugurado en 2011 y financiado por el empresario Carlos Slim, el Museo Soumaya lleva el nombre de su esposa fallecida, Soumaya Domit. Su colección, de entrada gratuita, reúne más de 66.000 piezas que van desde arte prehispánico mexicano hasta la mayor colección de esculturas de Auguste Rodin fuera de Francia, pasando por pintura europea de los siglos XV al XX.',
            kids: '¡Este museo se inauguró en 2011 y es totalmente gratis! 🎟️ Tiene más de 66.000 obras de arte, incluida la colección más grande de esculturas de un artista francés muy famoso llamado Rodin que hay fuera de su propio país.'
          },
          legends: {
            adult: 'El diseño del arquitecto Fernando Romero, yerno de Carlos Slim, generó un intenso debate desde su inauguración: se dice que su forma asimétrica, cubierta por 16.000 hexágonos de aluminio plateado, no tenía originalmente ninguna columna interior que interrumpiera el recorrido, todo un reto de ingeniería que obligó a rediseñar la estructura sobre la marcha. Popularmente se le apodó "la plancha" por su silueta curva y brillante, comparada también con un torso o una bota gigante según quien lo mire.',
            kids: '¡La gente le ha puesto un montón de apodos graciosos a este edificio por su forma tan rara, como "la plancha"! 🪞 Está cubierto por 16.000 piezas de metal plateado con forma de hexágono, como una armadura brillante. ¡Cada persona ve una forma distinta cuando lo mira!'
          },
          architecture: {
            adult: 'La estructura, de 16.000 paneles hexagonales de aluminio anodizado montados sobre una retícula de acero, forma una superficie curva sin una sola línea recta, apoyada sobre seis columnas asimétricas. En su interior, una rampa helicoidal continua conecta los seis niveles de exhibición sin necesidad de escaleras, permitiendo un recorrido ascendente ininterrumpido por toda la colección.',
            kids: '¡Por fuera parece una escultura brillante sin ninguna línea recta! 🌀 Por dentro tiene una rampa que sube en espiral y conecta los seis pisos, así que puedes recorrer todo el museo sin usar ni una sola escalera.'
          }
        }
      },
      {
        id: 'museo-jumex',
        name: {
          adult: 'Museo Jumex',
          kids: 'Museo Jumex — El Vecino de Cemento Blanco 🏛️'
        },
        subtitle: {
          adult: 'Arte contemporáneo frente al Museo Soumaya',
          kids: '¡El museo blanco justo al lado del edificio brillante!'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'polanco', order: 4 },
        coords: [19.4406, -99.2033],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Museo_J%C3%BAmex_front.jpg/330px-Museo_J%C3%BAmex_front.jpg',
        audio: {
          duration: 155,
          title: {
            adult: 'Audioguía: Museo Jumex',
            kids: '¡Aventura Sonora: El Vecino de Cemento Blanco!'
          }
        },
        tabs: {
          history: {
            adult: 'Abierto en 2013, el Museo Jumex alberga la Colección Jumex, la mayor colección privada de arte contemporáneo de América Latina, reunida por el empresario Eugenio López Alonso a partir de la fortuna de la empresa jugera familiar. Se construyó deliberadamente justo enfrente del Museo Soumaya, creando en la Plaza Carso uno de los conjuntos museísticos privados más comentados de la ciudad, financiados por dos de las mayores fortunas de México.',
            kids: '¡Este museo se abrió en 2013 y guarda una de las colecciones de arte moderno más grandes de toda Latinoamérica! 🎨 Lo construyeron a propósito justo enfrente del Museo Soumaya, así que puedes visitar los dos seguidos, ¡son vecinos!'
          },
          legends: {
            adult: 'A diferencia de la exuberancia formal de su vecino el Soumaya, el arquitecto británico David Chipperfield diseñó un edificio deliberadamente sobrio de piedra travertino blanca, casi como un contrapunto silencioso. Se cuenta que esta austeridad fue una decisión consciente para no competir visualmente con la escultura plateada de enfrente, generando entre los arquitectos locales un debate constante sobre cuál de los dos edificios "gana" a la vista desde la plaza.',
            kids: '¡Mientras que el museo de al lado es plateado y curvo, este es blanco y con formas rectas! 📐 Dicen que el arquitecto lo hizo así a propósito, para no "competir" con el brillo del edificio vecino. ¡Los dos juntos parecen el día y la noche!'
          },
          architecture: {
            adult: 'El edificio, de cinco niveles revestidos en piedra travertino, se eleva sobre una planta baja porticada que conecta visualmente con la plaza pública, mientras que su cubierta ondulada de aluminio dentado —visible sobre todo desde el interior— es la única concesión formal a la geometría curva de su entorno. Sus salas diáfanas, sin columnas interiores, permiten montajes flexibles para exposiciones temporales de arte contemporáneo internacional.',
            kids: '¡Tiene cinco pisos cubiertos de piedra blanca y un techo con forma de zigzag que casi no se ve desde fuera! 🏢 Por dentro las salas son enormes y sin columnas, así que pueden cambiar la forma de exponer el arte cada vez que quieren.'
          }
        }
      },
      {
        id: 'basilica-guadalupe',
        name: {
          adult: 'Basílica de Guadalupe',
          kids: 'Basílica de Guadalupe — El Templo que se Inclina 🌟'
        },
        subtitle: {
          adult: 'El santuario mariano más visitado del mundo',
          kids: '¡El templo más visitado del planeta, después de este hay pocos!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'basilica', order: 1 },
        coords: [19.484444, -99.117222],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Bas%C3%ADlica_de_Santa_Mar%C3%ADa_de_Guadalupe_2018.jpg/330px-Bas%C3%ADlica_de_Santa_Mar%C3%ADa_de_Guadalupe_2018.jpg',
        audio: {
          duration: 180,
          title: {
            adult: 'Audioguía: Basílica de Guadalupe',
            kids: '¡Aventura Sonora: El Templo que se Inclina!'
          }
        },
        tabs: {
          history: {
            adult: 'Erigida a los pies del cerro del Tepeyac, la Basílica de Guadalupe marca el lugar donde, según la tradición católica, la Virgen de Guadalupe se apareció al indígena Juan Diego en 1531. La antigua basílica, construida entre los siglos XVI y XVIII, comenzó a hundirse de forma peligrosa por el terreno lacustre, lo que llevó a construir un nuevo templo, inaugurado en 1976, capaz de recibir a las multitudes que la visitan cada año, especialmente el 12 de diciembre.',
            kids: '¡Aquí se apareció, según cuentan, la Virgen de Guadalupe a un indígena llamado Juan Diego hace casi 500 años! ⛪ La iglesia antigua se empezó a hundir por el terreno blandito, así que construyeron una nueva y mucho más grande en 1976 para que cupiera toda la gente que viene a visitarla.'
          },
          legends: {
            adult: 'La reliquia central del santuario es el ayate de Juan Diego, un manto de fibra de maguey donde habría quedado impresa milagrosamente la imagen de la Virgen tras caer de él un ramo de rosas de Castilla —flores imposibles en pleno invierno mexicano—. Científicos y devotos llevan siglos debatiendo el origen de la imagen, que se conserva sin restauración aparente pese a los más de 490 años transcurridos, y que hoy puede verse desde una cinta transportadora bajo el altar para no interrumpir el paso de los peregrinos.',
            kids: '¡La imagen de la Virgen apareció, según la leyenda, pintada mágicamente en la capa de un hombre llamado Juan Diego, cuando de ella cayeron unas rosas que no deberían crecer en esa época del año! 🌹 La capa original se sigue conservando, ¡y puedes verla pasando por una cinta que se mueve debajo del altar!'
          },
          architecture: {
            adult: 'La nueva basílica, obra del arquitecto Pedro Ramírez Vázquez, adopta una planta circular de gran amplitud que permite a 10.000 fieles ver el altar simultáneamente desde cualquier punto, coronada por una cubierta de cobre en forma de carpa que evoca el manto de la Virgen. Junto a ella permanece la antigua basílica barroca, notablemente inclinada por el hundimiento diferencial del subsuelo, motivo por el que fue cerrada al culto y reconvertida en museo.',
            kids: '¡La iglesia nueva es redonda y tiene sitio para 10.000 personas a la vez, todas viendo bien el altar! ⭕ Al lado se puede ver la iglesia vieja, que está clarísimamente torcida porque el terreno se hundió con el paso de los años, ¡ahora es un museo!'
          }
        }
      },
      {
        id: 'capilla-cerrito',
        name: {
          adult: 'Capilla del Cerrito',
          kids: 'Capilla del Cerrito — La Capilla de la Cima 🌵'
        },
        subtitle: {
          adult: 'En la cima del Tepeyac, donde florecieron las rosas',
          kids: '¡Sube hasta arriba de la colina para ver toda la ciudad!'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'basilica', order: 2 },
        coords: [19.48618333, -99.11598056],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Capilla_del_Cerrito_05.jpg/330px-Capilla_del_Cerrito_05.jpg',
        audio: {
          duration: 145,
          title: {
            adult: 'Audioguía: Capilla del Cerrito',
            kids: '¡Aventura Sonora: La Capilla de la Cima!'
          }
        },
        tabs: {
          history: {
            adult: 'En la cima del cerro del Tepeyac, la tradición sitúa el lugar exacto donde Juan Diego recogió las rosas de Castilla que la Virgen le pidió llevar como prueba ante el obispo. La primera ermita se construyó aquí en el siglo XVII, y el templo actual, de finales del XIX, corona el punto más alto y sagrado de todo el conjunto guadalupano, muy anterior en importancia religiosa a la propia basílica de abajo.',
            kids: '¡Arriba de esta colina fue, según la leyenda, donde Juan Diego recogió las rosas mágicas para llevárselas al obispo! 🌹 La primera capilla se construyó aquí hace más de 300 años. Es el punto más alto y más sagrado de todo el santuario.'
          },
          legends: {
            adult: 'Se dice que el propio cerro, antes de la evangelización, era ya un lugar de culto a Tonantzin, diosa madre mexica, y que la aparición guadalupana se superpuso deliberadamente a esta devoción prehispánica previa para facilitar la conversión de los indígenas al catolicismo. Los peregrinos más devotos suben de rodillas la explanada hasta la capilla como penitencia, una tradición que se mantiene viva especialmente en la madrugada del 12 de diciembre.',
            kids: '¡Antes de que llegara la Virgen, se dice que la gente ya subía a esta colina para rezarle a una diosa antigua! Por eso este lugar ya era especial desde antes. Algunos peregrinos muy devotos suben hasta arriba de rodillas, ¡como una promesa muy especial!'
          },
          architecture: {
            adult: 'La capilla actual, de fachada neoclásica sencilla, se alza sobre una plataforma con vistas privilegiadas de todo el conjunto de la Villa de Guadalupe y buena parte del norte de la ciudad. En su exterior, un mural de mosaico narra el momento en que Juan Diego recoge las rosas, y unos jardines con motivos florales tallados en piedra recrean el prodigio que da nombre al lugar.',
            kids: '¡Desde aquí arriba se ve toda la Villa de Guadalupe y buena parte de la ciudad! 🏙️ Por fuera tiene un mural hecho con piezas pequeñas de mosaico que cuenta la historia de las rosas. Alrededor hay jardines con flores talladas en piedra.'
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
