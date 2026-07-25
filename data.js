const CATEGORIES = {
  ALL: 'all',
  HISTORY: 'historia',
  GASTRONOMY: 'gastronomia',
  HIDDEN: 'rincones-ocultos'
};

const CATEGORY_META = {
  [CATEGORIES.HISTORY]: {
    label: { adult: 'Historia', kids: 'Lugares Épicos 🏰' },
    pin: 'history',
    accent: '#B8411E'
  },
  [CATEGORIES.GASTRONOMY]: {
    label: { adult: 'Gastronomía', kids: '¡Comidas Ricas! 🍖' },
    pin: 'gastronomy',
    accent: '#C8703A'
  },
  [CATEGORIES.HIDDEN]: {
    label: { adult: 'Rincones Ocultos', kids: 'Secretos ⭐' },
    pin: 'hidden',
    accent: '#4A90A4'
  }
};

const POIS = [
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
    image: 'https://picsum.photos/seed/catedral-toledo/900/600',
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
    image: 'https://picsum.photos/seed/puerta-bisagra/900/600',
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
    image: 'https://picsum.photos/seed/mirador-valle/900/600',
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
    name: {
      adult: 'Restaurante La Sorbona',
      kids: '¡La Casa de las Comidas! 🍽️'
    },
    subtitle: {
      adult: 'Tradición gastronómica toledana desde 1893',
      kids: 'Las migas más ricas de Toledo'
    },
    category: CATEGORIES.GASTRONOMY,
    coords: [39.8587, -4.0256],
    image: 'https://picsum.photos/seed/sorbona-toledo/900/600',
    audio: {
      duration: 156,
      title: {
        adult: 'Audioguía: Gastronomía en La Sorbona',
        kids: '¡Aventura Sonora: ¡Hora de Comer!'
      }
    },
    tabs: {
      history: {
        adult: 'Fundado en 1893 por el matrimonio Soriano-Bona, La Sorbona es uno de los restaurantes más antiguos de Toledo. Su nombre hace honor a la cercana Universidad. Durante más de un siglo ha servido cocina castellana de autor, manteniendo intactos sus suelos de madera de roble y sus espejos biselados. Figuras como Hemingway, Juan Carlos I y Mario Vargas Llosa han comido en su salón principal.',
        kids: '¡Este restaurante tiene más de 130 años! 🧓 De pequeñito… ¡de pequeñito el bisabuelo de los dueños lo abrió! Han venido escritores famosos y hasta reyes. ¡Hay espejos antiguos que reflejan tu cara como si fuera un cuento de hadas!'
      },
      legends: {
        adult: 'Cuentan los camareros veteranos que el cubierto nº 7 de la mesa redonda del fondo es "el cubierto del escritor". Todo autor que se sienta allí y prueba el bacalao a la toledana termina su novela antes del año. También se dice que Ernest Hemingway se enamoró aquí de las gachas manchegas y llevó la receta escrita en una servilleta a su casa de Cuba.',
        kids: '¡La mesa 7 es mágica! ✨ Los escritores que se sientan allí terminan sus libros antes de un año. ¡Pregunta a tu mamá o papá si puedes sentarte ahí y pide un postre rico! ¿Qué cuento escribirías tú?'
      },
      architecture: {
        adult: 'Ocupando la planta baja de un palacio renacentista del siglo XVI, su interior conserva suelos de roble original, paredes con pinturas murales de paisajes toledanos, techos con vigas de madera vistas y una gran chimenea de azulejos Talaveranos que funciona en invierno. El salón principal está flanqueado por estanterías de más de 4 metros llenas de libros antiguos y vinilos de solistas de jazz.',
        kids: '¡Mira el techo! Hay vigas de madera supergruesas. 🪵 Una chimenea de colores se enciende en invierno. En las estanterías hay más de 500 libros antiguos. ¿Te atreves a contar cuántos platos caben en la mesa grande del centro?'
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
    image: 'https://picsum.photos/seed/santo-tome/900/600',
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
    image: 'https://picsum.photos/seed/mirador-azor/900/600',
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
    image: 'https://picsum.photos/seed/casa-greco/900/600',
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
    image: 'https://picsum.photos/seed/alcazar-toledo/900/600',
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
  }
];

const AI_PROMPTS = {
  summary: {
    adult: (p) =>
      `Un recorrido extenso y detallado por ${pick(p.name, 'adult')}, resaltando por qué es imprescindible en Toledo: datos clave, época, contexto histórico y un detalle sorprendente. Unas 190-220 palabras (equivalente a un minuto largo hablado), en varios párrafos. Tono: experto pero cercano.`,
    kids: (p) =>
      `Presenta ${pick(p.name, 'kids')} a un niño de 8 años: qué es, por qué mola, dos o tres datos súper curiosos y una mini-challenge interactiva que pueda hacer allí. Unas 160-190 palabras (equivalente a un minuto largo hablado). Usa emojis y tono divertido, no lo resumas demasiado.`
  },
  options: [
    {
      id: 'secret-history',
      label: { adult: '🤫 Historia secreta', kids: '🤫 Historia secreta' },
      prompt: {
        adult: (p) =>
          `Cuéntame con detalle una historia poco conocida, oscura o inesperada sobre ${pick(p.name, 'adult')} (Toledo). Asegúrate de que sea un episodio real, poco divulgado, y desarróllalo en varios párrafos con contexto. Unas 190-220 palabras. Añade una frase final con la fuente histórica más fiable si la conoces.`,
        kids: (p) =>
          `¡Cuéntame con muchos detalles el secreto más chulo y misterioso de ${pick(p.name, 'kids')}! 😱 Pero que NO dé miedo, que sea de aventuras o magia. Unas 160-190 palabras. Termina con un mini-juego: "¿Te atreves a buscar... allí?"`
      }
    },
    {
      id: 'architecture',
      label: { adult: '🏛️ Arquitectura', kids: '🏗️ Trucos de arquitectura' },
      prompt: {
        adult: (p) =>
          `Analiza en profundidad la arquitectura de ${pick(p.name, 'adult')} como si fueras un guía especializado: estilo, material estrella, dimensión poco visible (bóvedas, cimentación, simetrías ocultas) y por qué esta obra es única frente a otras de Toledo. Unas 190-220 palabras, en varios párrafos.`,
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
        adult: (p) =>
          `Narra con detalle la leyenda más antigua y verosímil asociada a ${pick(p.name, 'adult')} de Toledo, citando su origen documental si existe. Desarróllala en varios párrafos. Unas 190-220 palabras. Termina con tu interpretación: ¿qué hecho real pudo inspirarla?`,
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

