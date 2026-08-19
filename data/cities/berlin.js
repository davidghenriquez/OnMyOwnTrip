// Datos de Berlín — cargado bajo demanda por app.js (loadCityData) al elegir esta ciudad.
CITIES.berlin.pois = [
      {
        id: 'puerta-brandeburgo',
        name: {
          adult: 'Puerta de Brandeburgo',
          kids: 'Puerta de Brandeburgo — ¡La Puerta del Carro de Oro! 🐎'
        },
        subtitle: {
          adult: 'De arco triunfal neoclásico a símbolo de la reunificación',
          kids: '¡La puerta que vio caer un muro entero!'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'main', order: 1 },
        coords: [52.516272, 13.377722],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Brandenburger_Tor%2C_Berlin%2C_Germany.jpg/330px-Brandenburger_Tor%2C_Berlin%2C_Germany.jpg',
        audio: {
          duration: 145,
          title: {
            adult: 'Audioguía: Puerta de Brandeburgo',
            kids: '¡Aventura Sonora: La Puerta del Carro de Oro!'
          }
        },
        visitInfo: {
          hours: { adult: 'Acceso libre las 24 horas; es una plaza y monumento al aire libre.', kids: '¡Se puede ver a cualquier hora, de día o de noche!' },
          price: { adult: 'Gratis.', kids: '¡Gratis!' }
        },
        tabs: {
          history: {
            adult: 'Construida entre 1788 y 1791 por encargo del rey Federico Guillermo II, el arquitecto Carl Gotthard Langhans la diseñó inspirándose en los Propileos de la Acrópolis de Atenas, como puerta de entrada monumental a la avenida Unter den Linden. Durante el siglo XX se convirtió en testigo de la historia más convulsa de Alemania: desfiles nazis, ruinas de la Segunda Guerra Mundial y, tras 1961, quedó atrapada en tierra de nadie, pegada al Muro de Berlín, cerrada al público durante casi 30 años. Solo volvió a abrirse el 22 de diciembre de 1989, semanas después de la caída del Muro, en un acto que se convirtió en símbolo mundial de la reunificación alemana.',
            kids: '¡Esta puerta tiene más de 230 años! 🏛️ La construyeron copiando la entrada de un templo griego muy famoso. Durante mucho tiempo estuvo pegada al Muro de Berlín y nadie podía pasar por ella. ¡Cuando el muro cayó en 1989, miles de personas la cruzaron llorando de alegría!'
          },
          legends: {
            adult: 'Sobre la puerta corona una cuadriga de bronce —un carro tirado por cuatro caballos— con la diosa Victoria, obra de Johann Gottfried Schadow. En 1806, tras derrotar a Prusia, Napoleón ordenó desmontarla y trasladarla a París como trofeo de guerra. Permaneció allí ocho años, hasta que Prusia derrotó a Napoleón en 1814 y la recuperó. Al devolverla, el arquitecto Karl Friedrich Schinkel añadió a la diosa una cruz de hierro coronada con un águila prusiana, transformando a la Victoria original en una diosa de la paz armada: desde entonces mira hacia el este, hacia el centro de Berlín, en lugar de hacia el oeste como al principio.',
            kids: '¡Mira arriba! Hay un carro de oro con cuatro caballos y una diosa 🐎. Napoleón se lo llevó a Francia como trofeo cuando ganó una guerra, ¡y estuvo ocho años lejos de casa! Cuando Prusia le ganó a él, lo trajeron de vuelta y le añadieron una cruz especial encima como premio.'
          },
          architecture: {
            adult: 'Langhans se inspiró directamente en los Propileos, la monumental entrada de la Acrópolis de Atenas, dentro de la fiebre neoclásica que redescubría Grecia como ideal de belleza en toda Europa. Doce columnas dóricas de arenisca, dispuestas en dos filas de seis, dividen el paso en cinco corredores: el central, más ancho, estaba reservado antiguamente a la familia real. Con casi 26 metros de altura y 65 de anchura, es la única puerta que se conserva de las dieciocho que tuvo antiguamente la muralla aduanera de Berlín. Tras la reunificación, sufrió una restauración integral entre 2000 y 2002 que le devolvió su color original, más claro de lo que muchos recordaban tras décadas de suciedad y contaminación.',
            kids: '¡Esta puerta copia una entrada griega de hace más de 2.000 años! Tiene doce columnas de piedra puestas en dos filas, y forman cinco pasillos: el del medio, más ancho, era solo para la familia del rey. Es la única puerta que queda de las dieciocho que tenía antes toda la muralla de Berlín. Hace unos años la limpiaron entera y descubrieron que su color real era más claro de lo que todos pensaban.'
          },
          deepenFillers: {
            adult: [
              'Cuando conviene señalar un acontecimiento mundial, la puerta se ilumina de distintos colores: se vistió de azul, blanco y rojo tras los atentados de París de 2015, y luce a menudo los colores del arcoíris por el orgullo LGTB.',
              'En 1987, el presidente estadounidense Ronald Reagan pronunció junto a esta puerta su célebre discurso pidiendo la caída del Muro; no hicieron falta ni tres años para que ocurriera de verdad.'
            ],
            kids: [
              '¡Cuando pasa algo importante en el mundo, la puerta se ilumina de colores distintos, como una bandera gigante! A veces es azul, blanco y rojo, y a veces todo un arcoíris. 🌈',
              '¡Un presidente de Estados Unidos dio aquí un discurso muy famoso pidiendo que cayera el Muro! Y no hicieron falta ni tres años para que ocurriera de verdad. 🎤'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Cuántos años estuvo la puerta cerrada al público, pegada al Muro de Berlín?',
            options: ['Casi 30 años', 'Unos 5 años', 'Solo unos meses'],
            correct: 0,
            reveal: '¡Casi 30 años! Quedó atrapada en tierra de nadie desde 1961 y no volvió a abrirse hasta el 22 de diciembre de 1989, semanas después de caer el Muro. 🏛️'
          },
          legends: {
            question: '¿Qué le pasó a la diosa Victoria de la cuadriga en 1806?',
            options: ['Napoleón se la llevó a París como trofeo', 'Se cayó en un terremoto', 'La fundieron para hacer monedas'],
            correct: 0,
            reveal: '¡Napoleón se la llevó a París! Estuvo allí ocho años, hasta que Prusia le ganó la guerra en 1814 y la recuperó, añadiéndole una cruz de hierro nueva. 🐎'
          },
          architecture: {
            question: '¿En qué monumento griego se inspiraron para construir esta puerta?',
            options: ['Los Propileos de la Acrópolis de Atenas', 'El Partenón', 'El Coliseo de Roma'],
            correct: 0,
            reveal: '¡En los Propileos de la Acrópolis de Atenas! Toda Europa estaba fascinada con Grecia antigua cuando se construyó esta puerta, a finales del siglo XVIII.'
          }
        }
      },
      {
        id: 'reichstag',
        name: {
          adult: 'Edificio del Reichstag',
          kids: 'Reichstag — ¡El Parlamento con Cúpula de Cristal! 🔭'
        },
        subtitle: {
          adult: 'Sede del Parlamento alemán, coronada por una cúpula de cristal',
          kids: '¡Puedes ver a los políticos trabajar desde arriba!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'main', order: 2 },
        coords: [52.518611, 13.376111],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Reichstagsgeb%C3%A4ude_in_Berlin.jpg/330px-Reichstagsgeb%C3%A4ude_in_Berlin.jpg',
        audio: {
          duration: 165,
          title: {
            adult: 'Audioguía: Edificio del Reichstag',
            kids: '¡Aventura Sonora: El Parlamento con Cúpula de Cristal!'
          }
        },
        visitInfo: {
          hours: { adult: 'Cúpula abierta todos los días de 8:00 a 24:00 (última entrada 21:45). Es imprescindible registrarse online con antelación, ya que las plazas son limitadas.', kids: 'Se puede subir todos los días, ¡pero hay que apuntarse antes por internet!' },
          price: { adult: 'Gratis.', kids: '¡Gratis!' },
          link: 'https://www.bundestag.de/besuche'
        },
        tabs: {
          history: {
            adult: 'Inaugurado en 1894 según diseño del arquitecto Paul Wallot, albergó el Parlamento alemán hasta la noche del 27 de febrero de 1933, cuando un incendio de origen aún debatido lo dejó calcinado. Los nazis culparon a un joven comunista holandés y usaron el suceso como pretexto para el "Decreto del Incendio del Reichstag", que suspendió las libertades civiles y allanó el camino a la dictadura de Hitler. En 1945, tropas soviéticas fotografiaron su bandera ondeando sobre las ruinas del edificio como símbolo de la caída de Berlín, una de las imágenes más icónicas de la Segunda Guerra Mundial. Permaneció medio en ruinas durante la Guerra Fría, pegado al Muro, hasta que el arquitecto británico Norman Foster lo remodeló entre 1995 y 1999 tras la reunificación.',
            kids: '¡Este edificio tiene una historia con mucho drama! 🔥 En 1933 se incendió y los nazis lo usaron como excusa para quitar libertades a la gente. Después de la Segunda Guerra Mundial quedó medio en ruinas durante muchos años, ¡hasta que lo reconstruyeron con una cúpula de cristal nueva!'
          },
          architecture: {
            adult: 'La gran cúpula de cristal que corona el edificio desde 1999 es la seña de identidad de la Alemania reunificada: una rampa en espiral permite subir hasta arriba y mirar literalmente hacia abajo, al hemiciclo donde se reúnen los diputados, una metáfora arquitectónica deliberada de que el pueblo debe estar por encima de sus representantes. Un gran cono de espejos en el centro refleja luz natural hacia la sala de plenos y ayuda a ventilarla, reduciendo el consumo energético del edificio.',
            kids: '¡La cúpula de cristal es una pasada! 🌀 Subes por una rampa en espiral y al final puedes mirar hacia abajo y ver justo donde trabajan los políticos alemanes. La idea es que la gente esté siempre "por encima" de sus gobernantes. ¡Y un espejo gigante en el centro lleva luz del sol hasta dentro del edificio!'
          },
          legends: {
            adult: 'Durante décadas circuló la leyenda de que la inscripción "DEM DEUTSCHEN VOLKE" ("Al pueblo alemán") de la fachada se fundió con el bronce de cañones franceses capturados como trofeo de guerra, un gesto que el propio káiser Guillermo II vetó personalmente por considerarlo demasiado provocador hacia Francia; la frase no se colocó hasta 1916, en plena Primera Guerra Mundial, cuando el Parlamento aprovechó el ambiente patriótico para imponerla pese a las reticencias imperiales. Otro episodio célebre: en 1995, los artistas búlgaro-marroquí Christo y Jeanne-Claude envolvieron el edificio entero con más de 100.000 metros cuadrados de tela plateada, una obra efímera de solo dos semanas que atrajo a cinco millones de visitantes y se recuerda como uno de los grandes hitos del arte contemporáneo en Berlín.',
            kids: '¡Este edificio tiene una frase gigante en la fachada que dice "Al pueblo alemán"! Al emperador de la época no le gustaba nada esa idea, así que tardaron años en ponerla. Y en 1995, dos artistas envolvieron TODO el edificio con una tela plateada enorme durante dos semanas, ¡y vinieron cinco millones de personas a verlo!'
          },
          deepenFillers: {
            adult: [
              'En algunas paredes interiores todavía pueden verse mensajes escritos en 1945 por soldados soviéticos, en letras cirílicas; se conservaron a propósito durante la restauración de los años 90 como capa histórica del edificio, en vez de borrarlos.',
              'Dentro del hemiciclo cuelga una gran águila federal de aluminio que los propios berlineses apodan cariñosamente "die fette Henne", la gallina gorda, por su forma redondeada.'
            ],
            kids: [
              '¡En algunas paredes de dentro todavía se ven mensajes que escribieron soldados soviéticos en 1945, en letras rusas! Los dejaron a propósito para no olvidar la historia.',
              '¡Dentro hay un águila enorme de metal a la que los berlineses llaman cariñosamente "la gallina gorda", porque tiene una forma bien redondita! 🦅'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Qué pasó con el Reichstag la noche del 27 de febrero de 1933?',
            options: ['Un incendio lo dejó calcinado', 'Se derrumbó por un terremoto', 'Lo cerraron por obras'],
            correct: 0,
            reveal: '¡Un incendio de origen aún debatido! Los nazis culparon a un joven comunista y usaron el suceso como excusa para quitar libertades y allanar el camino a la dictadura de Hitler. 🔥'
          },
          architecture: {
            question: '¿Qué se puede ver mirando hacia abajo desde la cúpula de cristal?',
            options: ['El hemiciclo donde trabajan los diputados', 'El río Spree', 'Un aparcamiento'],
            correct: 0,
            reveal: '¡El hemiciclo de los diputados! Es una idea a propósito del arquitecto: que la gente esté siempre "por encima" de sus representantes políticos. 🌀'
          },
          legends: {
            question: '¿Qué hicieron dos artistas famosos con este edificio en 1995?',
            options: ['Lo envolvieron entero con una tela plateada', 'Lo pintaron de rosa', 'Le pusieron luces de colores'],
            correct: 0,
            reveal: '¡Lo envolvieron entero! Usaron más de 100.000 metros cuadrados de tela plateada durante solo dos semanas, y vinieron cinco millones de personas a verlo.'
          }
        }
      },
      {
        id: 'monumento-holocausto',
        name: {
          adult: 'Monumento a los Judíos de Europa Asesinados',
          kids: 'Monumento del Holocausto — Un lugar para recordar 🕯️'
        },
        subtitle: {
          adult: 'Un campo de 2.711 bloques de hormigón en pleno centro de Berlín',
          kids: 'Un lugar tranquilo para recordar a millones de personas'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'main', order: 3 },
        coords: [52.513923, 13.378344],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Holocaust_Memorial_Berlin.JPG/330px-Holocaust_Memorial_Berlin.JPG',
        audio: {
          duration: 150,
          title: {
            adult: 'Audioguía: Monumento a los Judíos de Europa Asesinados',
            kids: 'Aventura Sonora: Un lugar para recordar'
          }
        },
        visitInfo: {
          hours: { adult: 'El campo de estelas al aire libre es de acceso libre y permanece siempre abierto. El Centro de Información, bajo tierra, tiene horario propio (normalmente 10:00-18:00, cerrado los lunes) y entrada gratuita.', kids: 'El campo de bloques se puede visitar a cualquier hora. Hay un museo debajo que abre de martes a domingo.' },
          price: { adult: 'Gratis.', kids: '¡Gratis!' }
        },
        tabs: {
          history: {
            adult: 'Inaugurado en 2005 tras casi dos décadas de debate público sobre cómo debía Alemania recordar el asesinato sistemático de seis millones de judíos europeos, este memorial ocupa un terreno de 19.000 metros cuadrados muy cerca de donde estuvo el búnker de Hitler. Su diseño, del arquitecto Peter Eisenman, prescinde deliberadamente de símbolos religiosos o inscripciones explicativas en la superficie: son 2.711 bloques de hormigón de distintas alturas, dispuestos en una cuadrícula sobre un suelo ondulado, pensados para generar una sensación de desorientación e inquietud creciente a medida que uno se adentra en ellos. Bajo el campo de estelas, el Centro de Información documenta con nombres, cartas y fotografías el destino de familias judías asesinadas durante el Holocausto.',
            kids: 'Este lugar recuerda a los millones de personas judías que fueron asesinadas durante la Segunda Guerra Mundial, en la época de los nazis. Son 2.711 bloques grises de distintos tamaños puestos en fila. Si caminas entre ellos, notarás que el suelo sube y baja, y que los bloques se hacen cada vez más altos: está pensado para que sientas algo especial mientras caminas, en silencio y con respeto.'
          },
          legends: {
            adult: 'El proceso de selección del proyecto ganador, tras un primer concurso anulado en 1994 por falta de consenso, se alargó más de una década y estuvo marcado por un intenso debate público sobre qué forma debía tener la memoria de un genocidio: hubo voces que reclamaban un memorial más explicativo, con nombres y fechas visibles, y otras que defendían la abstracción de Eisenman como forma de evitar el kitsch. Una polémica adicional golpeó al proyecto en 2003, cuando se descubrió que Degussa, la empresa encargada de fabricar un recubrimiento antigrafiti para los bloques, había sido matriz de la compañía que produjo el gas Zyklon B usado en las cámaras de gas nazis; tras el escándalo, la construcción se paralizó varias semanas hasta que se decidió continuar con la misma empresa, con el argumento de que casi ninguna gran compañía alemana de la época estuvo libre de vínculos con el régimen nazi.',
            kids: 'Antes de construir este monumento, la gente de Alemania estuvo discutiendo durante más de diez años cómo debía ser: unos querían algo con nombres y fechas escritas, y otros preferían algo más sencillo, sin explicaciones, para que cada persona sintiera lo que quisiera al caminar entre los bloques. Al final ganó la segunda idea, la que ves hoy.'
          },
          architecture: {
            adult: 'El arquitecto Peter Eisenman diseñó una cuadrícula estrictamente ortogonal de 2.711 bloques de hormigón (llamados "estelas"), todos del mismo ancho y largo pero de alturas distintas, desde apenas unos centímetros hasta más de cuatro metros, sobre un suelo que ondula suavemente sin seguir ningún patrón evidente. No hay un recorrido marcado ni una entrada única: se puede acceder por cualquier punto de sus cuatro lados, y deliberadamente no hay inscripciones ni simbolismo religioso explícito en la superficie, dejando que sea la propia experiencia física —el eco de los pasos, la pérdida de perspectiva, el aislamiento entre los bloques más altos— la que transmita la sensación de desorientación.',
            kids: '¡Los 2.711 bloques de hormigón no siguen ningún plan que se pueda adivinar a simple vista! Puedes entrar por cualquier lado, no hay un camino marcado. Cuanto más te metes hacia el centro, más altos se vuelven los bloques y menos ves a la gente de alrededor: está pensado así a propósito, para que sientas algo distinto según por dónde camines.'
          },
          deepenFillers: {
            adult: [
              'En el Centro de Información hay una Sala de los Nombres donde se leen en voz alta, sin descanso, los nombres y breves biografías de las víctimas conocidas del Holocausto; completar el ciclo entero, leyendo día y noche, lleva varios años, y después vuelve a empezar.',
              'En 2017, un artista israelí lanzó en internet una polémica campaña para llamar la atención sobre el comportamiento irrespetuoso de algunos turistas en el memorial, lo que reabrió el debate público sobre cómo se debe visitar un lugar como este.'
            ],
            kids: [
              'Bajo tierra hay una sala donde se leen en voz alta, uno por uno, los nombres de las personas que se sabe que murieron. Se tarda años en terminar de leerlos todos, porque eran muchísimas personas.',
              'Como este es un lugar para recordar con respeto, muchos berlineses piden a quienes visitan que caminen tranquilos entre los bloques, sin jugar ni subirse encima de ellos.'
            ]
          }
        },
        // Sin quiz de "legends": el único hecho contrastado y verificable
        // de ese tab (el escándalo de 2003 de la empresa Degussa) exige
        // nombrar las cámaras de gas nazis para tener sentido, un detalle
        // que el propio texto kids de este tab evita a propósito — mejor
        // no tener pregunta ahí que forzar una que reintroduzca ese dato.
        quiz: {
          'secret-history': {
            question: '¿A cuántas personas judías recuerda este monumento?',
            options: ['A los seis millones asesinados en el Holocausto', 'A mil soldados', 'A una sola familia'],
            correct: 0,
            reveal: 'A los seis millones de judíos europeos asesinados durante el Holocausto. El monumento se inauguró en 2005, tras casi dos décadas de debate sobre cómo recordarlos. 🕯️'
          },
          architecture: {
            question: '¿Hay un camino marcado o una entrada única para recorrer los bloques?',
            options: ['No, se puede entrar por cualquier lado', 'Sí, solo una puerta', 'Solo se puede ver desde fuera'],
            correct: 0,
            reveal: '¡No hay entrada única! Se puede acceder por cualquiera de sus cuatro lados, y no hay ningún camino marcado que seguir.'
          }
        }
      },
      {
        id: 'checkpoint-charlie',
        name: {
          adult: 'Checkpoint Charlie',
          kids: 'Checkpoint Charlie — ¡El Paso Fronterizo Más Famoso! 🚧'
        },
        subtitle: {
          adult: 'El cruce fronterizo más famoso de la Guerra Fría',
          kids: 'Donde tanques de dos países se miraron cara a cara'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'main', order: 4 },
        coords: [52.507792, 13.390544],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Checkpoint_Charlie_Berlin.jpg/330px-Checkpoint_Charlie_Berlin.jpg',
        audio: {
          duration: 140,
          title: {
            adult: 'Audioguía: Checkpoint Charlie',
            kids: '¡Aventura Sonora: El Paso Fronterizo Más Famoso!'
          }
        },
        visitInfo: {
          hours: { adult: 'Acceso libre las 24 horas; es un cruce de calle al aire libre. Hay museos de pago justo al lado para quien quiera profundizar.', kids: '¡Se puede ver a cualquier hora! Al lado hay un museo, ese sí que se paga.' },
          price: { adult: 'Gratis ver el punto; los museos cercanos tienen entrada de pago.', kids: '¡Gratis ver el sitio!' }
        },
        tabs: {
          history: {
            adult: 'Este fue el paso fronterizo más conocido entre Berlín Este y Berlín Oeste durante la Guerra Fría, reservado sobre todo a diplomáticos, militares aliados y extranjeros —los alemanes de a pie tenían otros cruces, mucho más restringidos—. Su nombre viene del alfabeto fonético militar: era el tercer puesto de control aliado tras Alpha (en Helmstedt) y Bravo, de ahí "Charlie". En octubre de 1961, apenas semanas después de levantarse el Muro, aquí se vivió uno de los momentos más tensos de toda la Guerra Fría: diez tanques estadounidenses y diez soviéticos se plantaron a pocos metros unos de otros, con munición real, durante más de 16 horas, en un pulso que estuvo cerca de desatar un conflicto directo entre las dos superpotencias.',
            kids: 'Aquí es donde la gente cruzaba entre las dos partes de Berlín cuando la ciudad estaba dividida por un muro. ¡Se llama "Charlie" porque en el alfabeto que usan los militares para deletrear, la C se dice "Charlie"! En 1961 hubo un momento muy tenso: diez tanques americanos y diez soviéticos se quedaron mirándose fijamente durante más de 16 horas, ¡a punto de empezar una pelea entre dos países enormes!'
          },
          legends: {
            adult: 'La garita original fue retirada en 1990 tras la reunificación y hoy se exhibe en el Museo Aliado de Berlín; la que ves ahora es una reconstrucción. Junto a ella, un cartel bilingüe sigue avisando "YOU ARE LEAVING THE AMERICAN SECTOR", y suele haber actores vestidos de soldados dispuestos a hacerse fotos a cambio de una propina, algo que genera cierto debate entre los propios berlineses sobre si banaliza un lugar tan cargado de historia.',
            kids: 'La caseta que ves hoy no es la original de verdad, ¡es una copia! La de verdad está guardada en un museo. A veces hay personas disfrazadas de soldados que se hacen fotos contigo, aunque a algunos berlineses no les hace mucha gracia, porque este fue un lugar muy serio en su historia.'
          },
          architecture: {
            adult: 'La garita en sí es sencilla, casi anodina: una pequeña caseta blanca de madera con sacos terreros, muy distinta de la solidez que sugiere su fama mundial. Lo que realmente marca el lugar hoy es el conjunto museográfico que la rodea: paneles al aire libre con fotografías históricas de la Guerra Fría, un tramo de adoquines que marca por dónde discurría el Muro, y el cercano Museo del Muro (Mauermuseum), fundado ya en 1962, apenas un año después de levantarse el Muro, por el activista Rainer Hildebrandt, que documentó decenas de intentos, algunos exitosos y otros trágicos, de fuga desde Berlín Este.',
            kids: 'La caseta en sí es pequeñita y sencilla, ¡no como te la imaginas por las películas! Lo importante está alrededor: unos carteles con fotos antiguas que explican cómo era la Guerra Fría, y una línea de adoquines en el suelo que marca por dónde pasaba el Muro de verdad.'
          },
          deepenFillers: {
            adult: [
              'Este cruce fue escenario de fugas ingeniosas: entre otros métodos, hubo personas que lograron pasar escondidas en compartimentos ocultos dentro de coches modificados con dobles fondos.',
              'Para la administración de la RDA, este paso no se llamaba "Charlie": su nombre oficial en alemán era simplemente Grenzübergang Friedrichstraße, el paso fronterizo de la calle Friedrich.'
            ],
            kids: [
              '¡Aquí hubo fugas muy ingeniosas! Algunas personas lograron cruzar escondidas dentro de coches con compartimentos secretos.',
              '¡Para el gobierno de la parte comunista, este sitio ni siquiera se llamaba "Charlie"! Tenía otro nombre oficial en alemán, mucho más aburrido. 🚧'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Por qué se llama "Charlie" este cruce fronterizo?',
            options: ['Por el alfabeto militar: era el tercer puesto de control', 'Por el nombre de un soldado famoso', 'Porque lo construyó un señor llamado Charlie'],
            correct: 0,
            reveal: '¡Por el alfabeto militar! Era el tercer puesto de control aliado, después de Alpha y Bravo. En ese alfabeto, la letra C se dice "Charlie". 🚧'
          },
          legends: {
            question: '¿Qué pasó aquí en octubre de 1961, apenas semanas después de levantarse el Muro?',
            options: ['Diez tanques americanos y diez soviéticos se enfrentaron cara a cara', 'Se celebró un gran concierto', 'Cayó una tormenta histórica'],
            correct: 0,
            reveal: '¡Un momento tensísimo! Diez tanques de cada bando estuvieron a pocos metros durante más de 16 horas, a punto de desatar un conflicto directo entre las dos superpotencias.'
          },
          architecture: {
            question: '¿La garita que se ve hoy es la original de la Guerra Fría?',
            options: ['No, es una reconstrucción', 'Sí, exactamente la misma', 'No, es un dibujo pintado en el suelo'],
            correct: 0,
            reveal: '¡Es una reconstrucción! La original se retiró en 1990 y hoy se exhibe en el Museo Aliado de Berlín.'
          }
        }
      },
      {
        id: 'catedral-berlin',
        name: {
          adult: 'Catedral de Berlín',
          kids: 'Catedral de Berlín — ¡La Iglesia con Tumbas de Reyes! ⛪'
        },
        subtitle: {
          adult: 'La gran catedral protestante de la familia Hohenzollern',
          kids: '¡Debajo duermen casi 100 reyes y princesas!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'main', order: 5 },
        coords: [52.5192, 13.4011],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Berlin_-_Berliner_Dom.jpg/330px-Berlin_-_Berliner_Dom.jpg',
        audio: {
          duration: 150,
          title: {
            adult: 'Audioguía: Catedral de Berlín',
            kids: '¡Aventura Sonora: La Iglesia con Tumbas de Reyes!'
          }
        },
        visitInfo: {
          hours: { adult: 'Lunes a sábado aproximadamente 9:00-19:00/20:00 según temporada; domingos y festivos desde las 12:00. Horarios sujetos a oficios religiosos.', kids: 'Abre casi todos los días, pero por la mañana temprano de los domingos no se puede visitar porque hay misa.' },
          price: { adult: 'Entrada general en torno a 9€ para adultos, incluye acceso a la cúpula (270 escalones) y la cripta.', kids: 'Se paga entrada, pero merece la pena: ¡puedes subir a la cúpula!' }
        },
        tabs: {
          history: {
            adult: 'El edificio actual, inaugurado en 1905, fue un encargo personal del káiser Guillermo II al arquitecto Julius Carl Raschdorff, que lo concibió como una gran catedral protestante capaz de rivalizar en grandiosidad con la Basílica de San Pedro del Vaticano. En este mismo lugar hubo iglesias desde el siglo XV, incluida una versión anterior, más sobria, reformada por Karl Friedrich Schinkel. Un bombardeo aliado en 1944 destruyó la cúpula y gran parte del interior; su reconstrucción se alargó desde 1975 hasta 2002, primero bajo el régimen de la Alemania comunista y después ya con la Alemania reunificada, con un diseño más simplificado que el original.',
            kids: '¡Esta catedral la mandó construir un emperador que quería una iglesia tan grande como las de Roma! Se terminó en 1905. Durante la Segunda Guerra Mundial una bomba destrozó la cúpula, y tardaron casi 30 años en repararla del todo.'
          },
          architecture: {
            adult: 'Bajo la catedral se encuentra la cripta de los Hohenzollern, la dinastía que gobernó Prusia y después el Imperio alemán, con cerca de 90 sarcófagos, entre ellos los del primer rey de Prusia, Federico I, y su esposa Sofía Carlota, en cuyo honor se bautizó el barrio de Charlottenburg. Quien suba los 270 escalones hasta la galería exterior de la cúpula obtiene una de las mejores panorámicas de Berlín, con la Isla de los Museos a los pies.',
            kids: '¡Debajo de la catedral hay casi 90 tumbas de reyes y reinas de una familia muy importante llamada Hohenzollern! Si subes 270 escalones hasta arriba de la cúpula, tienes una de las mejores vistas de toda la ciudad.'
          },
          legends: {
            adult: 'Durante la Segunda Guerra Mundial, un bombardeo aliado en 1944 provocó un incendio que fundió literalmente la linterna de la cúpula, la estructura metálica que remataba lo más alto: la bola y la cruz se precipitaron a través del techo y quedaron empotradas en el suelo del interior, donde permanecieron como testimonio del desastre durante buena parte de la reconstrucción. La Alemania comunista, oficialmente atea, mantuvo el edificio en un estado de ruina parcial durante décadas por falta de interés y de fondos; no fue hasta después de la reunificación, en 1993, cuando se completó por fin la restauración de la cúpula con un diseño deliberadamente más sobrio que el original de 1905, que resultaba excesivamente recargado incluso para el gusto de muchos berlineses de la época.',
            kids: 'Durante la guerra, una bomba hizo que la parte más alta de la cúpula se derritiera y cayera dentro de la catedral. Durante muchos años, mientras Berlín estaba dividido, nadie tuvo dinero ni ganas de arreglarla del todo, ¡así que estuvo medio rota mucho tiempo! No la terminaron de reconstruir hasta después de 1993.'
          },
          deepenFillers: {
            adult: [
              'El órgano Sauer que corona el interior tiene más de 7.000 tubos, uno de los más grandes de Alemania, y todavía se usa en conciertos y oficios religiosos.',
              'Pese a construirse por encargo de la dinastía Hohenzollern, el propio káiser Guillermo II, que impulsó la obra, nunca fue enterrado en la cripta: murió en el exilio en los Países Bajos en 1941 y allí permanece.'
            ],
            kids: [
              '¡Dentro hay un órgano gigante con más de 7.000 tubos! Todavía se usa para tocar música en conciertos y misas. 🎵',
              'El emperador que mandó construir esta catedral nunca llegó a estar enterrado aquí: tuvo que irse a vivir a otro país después de perder una guerra, y allí se quedó para siempre.'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Quién encargó la catedral que se ve hoy?',
            options: ['El káiser Guillermo II', 'Napoleón', 'Un grupo de comerciantes'],
            correct: 0,
            reveal: '¡El káiser Guillermo II! Quería una catedral protestante tan grandiosa como la Basílica de San Pedro del Vaticano. Se terminó en 1905. ⛪'
          },
          legends: {
            question: '¿Qué pasó con la parte más alta de la cúpula durante un bombardeo en 1944?',
            options: ['Se derritió y cayó dentro de la catedral', 'Se convirtió en oro', 'Salió volando y nunca se encontró'],
            correct: 0,
            reveal: '¡Se derritió y cayó dentro! La bola y la cruz de metal se precipitaron por el techo. Tardaron décadas en reconstruir la cúpula del todo.'
          },
          architecture: {
            question: '¿Cuántos escalones hay que subir para llegar a la galería exterior de la cúpula?',
            options: ['270', '50', 'Más de 1.000'],
            correct: 0,
            reveal: '¡270 escalones! Al llegar arriba tienes una de las mejores panorámicas de toda la ciudad, con la Isla de los Museos a tus pies.'
          }
        }
      },
      {
        id: 'museo-pergamo',
        name: {
          adult: 'Museo de Pérgamo',
          kids: 'Museo de Pérgamo — ¡Puertas Gigantes de Hace Miles de Años! 🏺'
        },
        subtitle: {
          adult: 'Uno de los grandes museos arqueológicos del mundo, en la Isla de los Museos',
          kids: '¡Un museo con puertas y templos enteros dentro!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'main', order: 6 },
        coords: [52.521, 13.396],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Pergamonmuseum_Front.jpg/330px-Pergamonmuseum_Front.jpg',
        audio: {
          duration: 155,
          title: {
            adult: 'Audioguía: Museo de Pérgamo',
            kids: '¡Aventura Sonora: Puertas Gigantes de Hace Miles de Años!'
          }
        },
        visitInfo: {
          hours: {
            adult: 'Cerrado por una gran renovación desde octubre de 2023; la reapertura por fases no se espera antes de 2027. Mientras tanto, el edificio solo puede admirarse por fuera, desde el paseo de la Isla de los Museos.',
            kids: 'Ahora mismo está cerrado porque lo están arreglando por dentro. ¡No abrirá del todo hasta dentro de unos años! Pero se puede ver por fuera.'
          },
          price: { adult: 'No aplica mientras dure el cierre.', kids: 'No aplica mientras esté cerrado.' }
        },
        tabs: {
          history: {
            adult: 'Construido entre 1910 y 1930 en la Isla de los Museos —declarada Patrimonio de la Humanidad por la UNESCO—, este museo alberga algunas de las reconstrucciones arqueológicas más espectaculares del mundo: el Altar de Pérgamo, procedente de la actual Turquía, y sobre todo la Puerta de Ishtar de Babilonia, con sus ladrillos vidriados azules y sus dragones y toros originales, junto a la monumental Puerta del Mercado de Mileto. En la actualidad, el museo permanece cerrado por una profunda renovación que comenzó en octubre de 2023 y se prolongará varios años, así que de momento solo puede admirarse su fachada desde el paseo junto al río Spree.',
            kids: 'Dentro de este museo hay puertas gigantes de ciudades antiguas de verdad, ¡trasladadas piedra a piedra hasta Berlín hace más de 100 años! Una de ellas, la Puerta de Ishtar, es azul brillante y tiene dragones y toros dibujados. Ahora mismo está cerrado porque lo están reformando, pero cuando reabra es una visita increíble.'
          },
          legends: {
            adult: 'La Puerta de Ishtar original medía el doble de lo que se expone hoy: por falta de espacio en la sala, solo se reconstruyó la fachada delantera, más pequeña, mientras que la estructura completa —con una segunda puerta más alta situada detrás— permanece almacenada. Los arqueólogos alemanes que excavaron Babilonia entre 1899 y 1917, dirigidos por Robert Koldewey, se llevaron los fragmentos de ladrillo vidriado por autorización del Imperio Otomano, entonces soberano de la región, en un reparto de hallazgos habitual en la arqueología de la época; hoy ese tipo de traslados masivos de patrimonio genera un intenso debate internacional sobre restitución que también afecta a otras piezas del museo, como el Altar de Pérgamo, reclamado en ocasiones por Turquía.',
            kids: '¡La Puerta de Ishtar de verdad era el doble de grande de lo que se ve en el museo! No cabía entera en la sala. Los arqueólogos alemanes la encontraron en Babilonia (en el actual Irak) hace más de 100 años y se la llevaron a Berlín, algo que hoy en día genera bastante debate sobre si esas piezas deberían volver a su país de origen.'
          },
          architecture: {
            adult: 'El edificio, obra de los arquitectos Alfred Messel y Ludwig Hoffmann, se construyó específicamente alrededor de sus piezas estrella, con salas de grandes dimensiones diseñadas para alojar el Altar de Pérgamo —un altar helenístico del siglo II a.C. procedente de la actual Turquía, con un friso de mármol de 113 metros de longitud que narra la batalla mítica entre dioses y gigantes— y la monumental Puerta del Mercado de Mileto, de época romana. La renovación integral en curso desde 2023 busca modernizar la climatización y accesibilidad del edificio, además de construir por primera vez una cuarta ala que unirá todo el complejo de la Isla de los Museos bajo un mismo recorrido cubierto.',
            kids: 'Este museo se construyó especialmente para que cupieran dentro piezas gigantescas, ¡como un altar griego con una pared de mármol de más de 100 metros de largo con dibujos de dioses peleando contra gigantes! Ahora están arreglando el edificio entero y hasta van a construir un pasillo nuevo para conectarlo con los otros museos de la isla.'
          },
          deepenFillers: {
            adult: [
              'Entre sus piezas menos conocidas se encuentra la fachada de Mshatta, un palacio omeya del siglo VIII procedente de la actual Jordania, que el sultán otomano regaló al káiser Guillermo II en 1903.',
              'Antes de cerrar por reformas en 2023, era uno de los museos más visitados de toda Alemania, con cientos de miles de visitas cada año.'
            ],
            kids: [
              '¡Aquí también hay un trozo de un palacio árabe de hace 1.300 años, que vino de Jordania! Un sultán se lo regaló a un emperador alemán hace más de 100 años.',
              '¡Antes de cerrar por reformas, este era uno de los museos más visitados de toda Alemania, con muchísima gente entrando cada año!'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿De qué ciudad antigua viene la famosa Puerta de Ishtar?',
            options: ['Babilonia', 'Roma', 'Atenas'],
            correct: 0,
            reveal: '¡De Babilonia, en el actual Irak! Arqueólogos alemanes la trasladaron piedra a piedra hasta Berlín hace más de 100 años. 🏺'
          },
          legends: {
            question: '¿La Puerta de Ishtar que se expone es del mismo tamaño que la original?',
            options: ['No, la original era el doble de grande', 'Sí, exactamente igual', 'La original era mucho más pequeña'],
            correct: 0,
            reveal: '¡No! La original medía el doble. Por falta de espacio solo se reconstruyó la fachada delantera; el resto sigue almacenado.'
          },
          architecture: {
            question: '¿Hasta cuándo estará cerrado este museo por reformas?',
            options: ['No reabrirá antes de 2027', 'Ya ha reabierto', 'Cerrará para siempre'],
            correct: 0,
            reveal: 'La reapertura por fases no se espera antes de 2027. Mientras tanto, solo se puede admirar el edificio desde fuera.'
          }
        }
      },
      {
        id: 'torre-television',
        name: {
          adult: 'Torre de Televisión de Berlín',
          kids: 'Fernsehturm — ¡La Torre Más Alta de Alemania! 🗼'
        },
        subtitle: {
          adult: 'La estructura más alta de Alemania, con vistas de 360°',
          kids: '¡368 metros con las mejores vistas de la ciudad!'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'main', order: 7 },
        coords: [52.520833, 13.409444],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Fernsehturm%2C_Alexanderplatz%2C_Berlin.jpg/330px-Fernsehturm%2C_Alexanderplatz%2C_Berlin.jpg',
        audio: {
          duration: 130,
          title: {
            adult: 'Audioguía: Torre de Televisión de Berlín',
            kids: '¡Aventura Sonora: La Torre Más Alta de Alemania!'
          }
        },
        visitInfo: {
          hours: { adult: 'Marzo a octubre 9:00-24:00; noviembre a febrero 10:00-24:00. Abierta prácticamente todo el año.', kids: 'Abre todos los días, ¡hasta bien entrada la noche!' },
          price: { adult: 'Desde unos 24,50€ para adultos, con precio dinámico según fecha y hora; recomendable reservar entrada online con antelación.', kids: 'Se paga entrada, y cuanto antes la compres por internet, más barata suele salir.' },
          link: 'https://tv-turm.de/'
        },
        tabs: {
          history: {
            adult: 'Construida entre 1965 y 1969 por el gobierno de la Alemania comunista (RDA) junto a la Alexanderplatz, la torre pretendía ser una demostración de progreso tecnológico socialista además de mejorar la cobertura de radio y televisión. Con 368 metros, sigue siendo hoy la estructura más alta de Alemania. Tiene un mirador y un restaurante giratorio a 203 metros de altura, desde donde en un día despejado se puede ver hasta 40 kilómetros a la redonda.',
            kids: '¡Esta torre la construyó el gobierno de la parte comunista de Alemania para presumir de tecnología! Con 368 metros, sigue siendo el edificio más alto de todo el país. Arriba hay un restaurante que gira poco a poco mientras comes, ¡así ves toda la ciudad sin moverte de la silla!'
          },
          legends: {
            adult: 'La bola metálica que corona la torre tiene un efecto curioso, apodado por los propios berlineses "la venganza del Papa": cuando el sol la ilumina en cierto ángulo, sus paneles reflejan una gran cruz de luz, visible desde buena parte de la ciudad. La ironía no pasó desapercibida en su momento, ya que la RDA promovía oficialmente el ateísmo y había intentado, sin éxito, eliminar este reflejo rediseñando el revestimiento.',
            kids: '¡La bola de arriba de la torre tiene un secreto curioso! Cuando le da el sol de cierta manera, refleja una cruz de luz gigante que se ve desde toda la ciudad. Como el gobierno que construyó la torre no quería nada relacionado con religión, a la gente le hizo mucha gracia, ¡y hasta le pusieron un mote divertido!'
          },
          architecture: {
            adult: 'La estructura se inspira en los satélites Sputnik, muy en línea con la fascinación soviética de la época por la carrera espacial: un fuste de hormigón de 250 metros sostiene una esfera metálica revestida de acero inoxidable, donde se encuentran el mirador y el restaurante giratorio, y sobre ella un mástil de antenas de telecomunicaciones eleva el total hasta los 368 metros. El ascensor tarda unos 40 segundos en recorrer los 203 metros hasta la esfera, a una velocidad de unos 6 metros por segundo, una de las más rápidas de Europa en su momento de construcción.',
            kids: '¡La forma de bola de la torre está inspirada en los satélites espaciales de la época, como el Sputnik! El ascensor sube tan rápido que en unos 40 segundos ya estás arriba del todo, a 203 metros de altura. ¡Es uno de los ascensores más veloces que había en toda Europa cuando se construyó!'
          },
          deepenFillers: {
            adult: [
              'El restaurante giratorio completa una vuelta entera cada media hora aproximadamente, así que en poco más de treinta minutos se puede ver la panorámica completa de la ciudad sin moverse de la mesa.',
              'Pese a representar en su día el poder del régimen comunista, la torre recibe hoy más de un millón de visitas al año y es uno de los monumentos con más visitantes de toda Alemania.'
            ],
            kids: [
              '¡El restaurante da una vuelta entera cada media hora más o menos! Si te quedas sentado el tiempo suficiente, ves toda la ciudad sin moverte de la silla. 🍽️',
              '¡Aunque la construyó un gobierno que ya no existe, hoy más de un millón de personas la visitan cada año! Es uno de los monumentos más populares de Alemania.'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Quién construyó esta torre y por qué?',
            options: ['El gobierno comunista de la RDA, para presumir de tecnología', 'Un empresario privado', 'El ejército soviético, como fortaleza'],
            correct: 0,
            reveal: '¡El gobierno de la Alemania comunista! Quería demostrar su progreso tecnológico y mejorar la señal de radio y televisión. Con 368 metros, sigue siendo el edificio más alto del país. 🗼'
          },
          legends: {
            question: '¿Cómo se llama el curioso reflejo de luz que aparece a veces en la bola de la torre?',
            options: ['"La venganza del Papa"', '"El ojo de Berlín"', '"La estrella roja"'],
            correct: 0,
            reveal: '¡"La venganza del Papa"! Cuando el sol la ilumina de cierta manera, refleja una gran cruz de luz, algo irónico porque el gobierno que la construyó promovía el ateísmo.'
          },
          architecture: {
            question: '¿En qué se inspiraron para darle esa forma de bola a la torre?',
            options: ['En los satélites espaciales, como el Sputnik', 'En un balón de fútbol', 'En la Luna'],
            correct: 0,
            reveal: '¡En los satélites espaciales! Fue construida en plena carrera espacial entre Estados Unidos y la Unión Soviética.'
          }
        }
      },
      {
        id: 'east-side-gallery',
        name: {
          adult: 'East Side Gallery',
          kids: 'East Side Gallery — ¡El Muro Convertido en Museo! 🎨'
        },
        subtitle: {
          adult: 'El tramo pintado más largo que queda del Muro de Berlín',
          kids: '¡Un trozo del muro pintado por 118 artistas!'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'muro', order: 5 },
        coords: [52.503056, 13.444722],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/East_Side_Gallery_-_Dmitri_Vrubel_-_Le_baiser_%28Berlin%29.jpg/330px-East_Side_Gallery_-_Dmitri_Vrubel_-_Le_baiser_%28Berlin%29.jpg',
        audio: {
          duration: 140,
          title: {
            adult: 'Audioguía: East Side Gallery',
            kids: '¡Aventura Sonora: El Muro Convertido en Museo!'
          }
        },
        visitInfo: {
          hours: { adult: 'Acceso libre las 24 horas; es un paseo al aire libre junto al río Spree.', kids: '¡Se puede ver a cualquier hora del día!' },
          price: { adult: 'Gratis.', kids: '¡Gratis!' }
        },
        tabs: {
          history: {
            adult: 'Este es el tramo continuo más largo que se conserva del Muro de Berlín: 1,3 kilómetros junto al río Spree, en el barrio de Friedrichshain. En 1990, apenas caído el Muro, 118 artistas de 21 países lo cubrieron de murales, convirtiéndolo en la galería de arte al aire libre más grande del mundo. El deterioro por el clima y el vandalismo obligó a restaurarlo por completo en 2009, repintado en gran parte por los mismos artistas originales.',
            kids: '¡Este es el trozo más largo que queda del Muro de Berlín, más de un kilómetro! Cuando el muro cayó, 118 artistas de 21 países distintos lo llenaron de pinturas de colores. ¡Así se convirtió en la galería de arte al aire libre más grande del mundo!'
          },
          legends: {
            adult: 'El mural más fotografiado de todo el conjunto es "Mi Dios, ayúdame a sobrevivir a este amor mortal", del artista ruso Dmitri Vrubel: recrea el sonoro beso entre el líder soviético Leonid Brézhnev y el líder de la Alemania comunista Erich Honecker, inmortalizado en una fotografía real de 1979 durante una celebración oficial. El "beso fraternal" era un gesto protocolario habitual entre líderes comunistas, pero aquí, pintado sobre el propio Muro, se convirtió en un símbolo irónico de toda una época.',
            kids: '¡El dibujo más famoso de todos es un beso entre dos líderes de países comunistas! Se basa en una foto real de 1979: en aquella época, algunos líderes se saludaban así, ¡dándose un beso en la boca! Pintado sobre el muro, se convirtió en una de las imágenes más famosas de Berlín.'
          },
          architecture: {
            adult: 'A diferencia del resto del Muro, que en su lado oriental era liso y estaba fuertemente vigilado (pintarlo suponía un riesgo real durante la Guerra Fría), este tramo formaba parte de la llamada "franja de la muerte" pero quedó accesible por el lado este solo tras la caída del régimen, lo que permitió a los artistas trabajar directamente sobre el hormigón original de 3,6 metros de altura. La restauración de 2009 usó pinturas resistentes a la intemperie y sistemas antigrafiti, aunque el deterioro por el clima berlinés y el propio desgaste turístico obligan a retoques periódicos; varios tramos han tenido que restaurarse más de una vez desde entonces.',
            kids: 'Este trozo de muro es de hormigón de verdad, de más de 3 metros de alto, ¡el mismo material que separaba la ciudad en dos! Antes de que cayera el Muro, nadie podía pintar aquí porque estaba muy vigilado. Como el clima de Berlín desgasta las pinturas, de vez en cuando hay que repintar algunas partes.'
          },
          deepenFillers: {
            adult: [
              'En 2013, la construcción de un edificio junto al río obligó a retirar un tramo del muro pintado, lo que provocó protestas multitudinarias de berlineses que se encadenaron a los bloques para impedirlo.',
              'Cada mural pertenece legalmente a su artista, lo que ha generado disputas sobre derechos de reproducción cuando las imágenes se usan de forma comercial, por ejemplo en postales o camisetas.'
            ],
            kids: [
              '¡En 2013 casi quitan un trozo de este muro pintado para construir un edificio nuevo! Mucha gente de Berlín protestó y se abrazó a los bloques para protegerlos.',
              'Cada dibujo pertenece al artista que lo pintó, así que si alguien quiere usarlo en postales o camisetas, ¡tiene que pedir permiso primero! 🎨'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Cuántos artistas pintaron este tramo del Muro en 1990?',
            options: ['118 artistas de 21 países', '5 artistas alemanes', 'Solo un artista'],
            correct: 0,
            reveal: '¡118 artistas de 21 países distintos! Así se convirtió en la galería de arte al aire libre más larga del mundo, con 1,3 kilómetros de murales. 🎨'
          },
          legends: {
            question: '¿Qué muestra el mural más famoso de todo el tramo?',
            options: ['Un beso entre dos líderes comunistas', 'Un paisaje de montañas', 'Un retrato de la reina de Inglaterra'],
            correct: 0,
            reveal: '¡Un beso real de 1979 entre Brézhnev y Honecker! Era un saludo protocolario habitual entre líderes comunistas de la época.'
          },
          architecture: {
            question: '¿De qué material está hecho este tramo de muro?',
            options: ['Hormigón original de más de 3 metros de alto', 'Ladrillo pintado', 'Madera'],
            correct: 0,
            reveal: '¡Hormigón original, el mismo material que separaba la ciudad! Por eso hay que restaurarlo de vez en cuando: el clima de Berlín desgasta la pintura.'
          }
        }
      },
      {
        id: 'iglesia-memorial-kaiser',
        name: {
          adult: 'Iglesia Memorial del Káiser Guillermo',
          kids: 'Iglesia del Káiser Guillermo — ¡El Diente Roto de Berlín! 🦷'
        },
        subtitle: {
          adult: 'Una torre en ruinas conservada a propósito, como aviso contra la guerra',
          kids: 'Los berlineses la llaman "el diente hueco"'
        },
        category: CATEGORIES.HISTORY,
        coords: [52.504722, 13.335278],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Ged%C3%A4chtniskirche1.JPG/330px-Ged%C3%A4chtniskirche1.JPG',
        audio: {
          duration: 145,
          title: {
            adult: 'Audioguía: Iglesia Memorial del Káiser Guillermo',
            kids: '¡Aventura Sonora: El Diente Roto de Berlín!'
          }
        },
        visitInfo: {
          hours: { adult: 'Aproximadamente 10:00-18:00 todos los días, tanto la torre-ruina memorial como la iglesia nueva.', kids: 'Abre todos los días, mañana y tarde.' },
          price: { adult: 'Gratis.', kids: '¡Gratis!' }
        },
        tabs: {
          history: {
            adult: 'La iglesia original, de estilo neorrománico, se construyó entre 1891 y 1895 en honor al káiser Guillermo I. Un bombardeo aliado en noviembre de 1943 la destruyó casi por completo, dejando en pie solo el chapitel truncado de su torre principal, reducido de 113 a poco más de 60 metros. Tras la guerra hubo un intenso debate sobre si demoler del todo la ruina o conservarla: se optó por dejarla en pie como recuerdo permanente de los horrores de la guerra, y hoy los propios berlineses la apodan cariñosamente "Der hohle Zahn", el diente hueco.',
            kids: '¡Esta torre está rota a propósito! Una bomba la destrozó casi entera durante la Segunda Guerra Mundial, y cuando terminó la guerra, la gente decidió no arreglarla del todo, sino dejarla así para recordar lo malas que son las guerras. Por eso los berlineses la llaman "el diente hueco", ¡porque parece un diente partido!'
          },
          architecture: {
            adult: 'Junto a la torre en ruinas se construyó, entre 1959 y 1963, una nueva iglesia moderna diseñada por el arquitecto Egon Eiermann: una sala octogonal cuyos muros están formados por miles de piezas de vidrio azul, procedente en parte de los mismos talleres franceses de Chartres, que crean un ambiente casi submarino cuando entra la luz. Junto a ella se alza un campanario hexagonal independiente. Dentro de la torre antigua sobreviven mosaicos originales y algunos objetos dañados por la guerra, conservados como pequeño museo.',
            kids: '¡Al lado de la torre rota construyeron una iglesia nueva totalmente distinta! Sus paredes están hechas de miles de trocitos de cristal azul, así que cuando entra el sol parece que estás dentro del mar. Dentro de la torre vieja se guardan algunos objetos que sobrevivieron a la guerra.'
          },
          legends: {
            adult: 'Entre los objetos que sobrevivieron al bombardeo de 1943 se conserva un gran crucifijo de clavos, conocido como la "Cruz de Coventry", réplica de otro fabricado con clavos rescatados de las ruinas de la catedral inglesa de Coventry, arrasada por la aviación nazi en 1940: el gesto, donado por la propia diócesis británica en los años 60, se convirtió en un símbolo internacional de reconciliación entre antiguos enemigos de guerra, y hoy existe toda una red mundial de "Comunidad de la Cruz de Clavos" que une lugares destruidos por conflictos armados. Otro objeto que sobrevivió casi de milagro es la imagen de un Cristo con los brazos amputados por la onda expansiva, que los propios berlineses apodaron con humor negro "el manco de Berlín".',
            kids: '¡Dentro de la torre vieja hay una cruz especial hecha con clavos que vinieron de otra iglesia en Inglaterra, la de Coventry, que también fue destruida en la guerra! Es un símbolo de que dos países que fueron enemigos ahora son amigos. También sobrevivió una estatua de Jesús sin brazos, ¡a la que los berlineses le pusieron un mote curioso!'
          },
          deepenFillers: {
            adult: [
              'Los berlineses también apodaron con humor al conjunto moderno de al lado: llaman "la polvera" a la iglesia octogonal de cristal azul y "la barra de labios" al campanario hexagonal, por sus formas.',
              'Los mosaicos que sobreviven dentro de la torre en ruinas representan la genealogía de la familia Hohenzollern, uno de los pocos conjuntos decorativos completos que resistió el bombardeo de 1943.'
            ],
            kids: [
              '¡A los edificios modernos de al lado también les pusieron motes graciosos! A la iglesia nueva la llaman "la polvera" y a la torre del campanario "la barra de labios", por su forma.',
              'Dentro de la torre rota se conservan dibujos hechos con trocitos de piedra y cristal (mosaicos) que muestran el árbol genealógico de una familia real muy importante.'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Por qué quedó esta torre en ruinas, sin reconstruir del todo?',
            options: ['Se decidió dejarla así, como recuerdo de la guerra', 'No había dinero para nada', 'Estaba embrujada, según la leyenda'],
            correct: 0,
            reveal: 'Tras un intenso debate, se decidió conservarla en ruinas a propósito, como recuerdo permanente de los horrores de la guerra. Los berlineses la llaman "el diente hueco". 🦷'
          },
          legends: {
            question: '¿Qué representa la cruz de clavos que se conserva dentro de la torre vieja?',
            options: ['La reconciliación con Inglaterra tras la guerra', 'La victoria militar alemana', 'Un antiguo tesoro real'],
            correct: 0,
            reveal: '¡La reconciliación! Es una réplica de una cruz hecha con clavos de la catedral de Coventry, en Inglaterra, destruida por los nazis en 1940. Hoy simboliza la paz entre antiguos enemigos.'
          },
          architecture: {
            question: '¿De qué están hechas las paredes de la iglesia nueva, construida junto a la torre en ruinas?',
            options: ['De miles de piezas de vidrio azul', 'De madera tallada', 'De mármol blanco'],
            correct: 0,
            reveal: '¡De vidrio azul! Miles de piezas crean un ambiente casi submarino cuando entra la luz del sol.'
          }
        }
      },
      {
        id: 'palacio-charlottenburg',
        name: {
          adult: 'Palacio de Charlottenburg',
          kids: 'Palacio de Charlottenburg — ¡El Palacio de la Reina Carlota! 👑'
        },
        subtitle: {
          adult: 'El mayor palacio real que se conserva en Berlín',
          kids: '¡Un palacio con jardines enormes para perderse!'
        },
        category: CATEGORIES.HISTORY,
        coords: [52.521111, 13.295833],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Schloss_Charlottenburg_2025.jpg/330px-Schloss_Charlottenburg_2025.jpg',
        audio: {
          duration: 160,
          title: {
            adult: 'Audioguía: Palacio de Charlottenburg',
            kids: '¡Aventura Sonora: El Palacio de la Reina Carlota!'
          }
        },
        visitInfo: {
          hours: { adult: 'Abril a octubre, martes a domingo 10:00-18:00; noviembre a marzo 10:00-17:00. Cerrado los lunes. Los jardines son de acceso libre y abren todo el año.', kids: 'Abre de martes a domingo (¡los lunes descansa!). Los jardines de fuera se pueden visitar siempre, gratis.' },
          price: { adult: 'Entrada general en torno a 12€ para adultos, 9€ reducida; gratis para menores de 7 años. Los jardines son gratuitos.', kids: 'Se paga para entrar al palacio, pero los jardines de fuera son gratis.' },
          link: 'https://www.spsg.de/'
        },
        tabs: {
          history: {
            adult: 'Levantado a partir de 1695 como residencia de verano por encargo de Sofía Carlota, esposa del elector Federico III (más tarde Federico I, primer rey en Prusia), el edificio original era mucho más modesto de lo que es hoy. Tras la muerte de la reina en 1705, el palacio pasó a llevar su nombre en su honor, y a lo largo del siglo XVIII fue ampliándose considerablemente, primero bajo Federico I y después con el Ala Nueva añadida por Federico el Grande. Gravemente dañado durante la Segunda Guerra Mundial, fue reconstruido con enorme minuciosidad en las décadas posteriores.',
            kids: '¡Este palacio empezó siendo más pequeño y se hizo cada vez más grande! Lo construyeron para una reina llamada Sofía Carlota, y cuando ella murió, le pusieron su nombre al palacio: por eso se llama Charlottenburg, "el pueblo de Carlota". Durante la guerra quedó muy dañado, pero lo reconstruyeron con muchísimo cuidado.'
          },
          architecture: {
            adult: 'El palacio combina el barroco original con ampliaciones rococó del siglo XVIII, y conserva colecciones de porcelana, retratos reales y las antiguas joyas de la corona prusiana. Detrás del edificio se extiende un extenso jardín que combina un sector barroco geométrico, a la francesa, con una zona ajardinada de estilo inglés más naturalista, salpicada de pabellones y un pequeño mausoleo real.',
            kids: 'Detrás del palacio hay un jardín gigantesco donde te puedes perder: una parte tiene setos cortados en formas perfectas, como en Francia, y otra parte parece un bosque más salvaje, como en Inglaterra. ¡Dentro del palacio se guardan platos y tazas de porcelana carísimos, y hasta joyas que llevaron reyes de verdad!'
          },
          legends: {
            adult: 'En el extremo del parque, medio escondido entre los árboles, se levanta el Mausoleo real, construido en 1810 por orden de Federico Guillermo III tras la muerte repentina de su esposa, la reina Luisa, todavía hoy una de las figuras más queridas de la historia prusiana por su papel durante la ocupación napoleónica: se dice que se plantó personalmente ante Napoleón para suplicarle clemencia para Prusia tras la derrota de 1806, sin éxito. Su tumba, con una escultura yacente de mármol blanco obra de Christian Daniel Rauch considerada una obra maestra del neoclasicismo, muestra a la reina como dormida en lugar de muerta, un gesto artístico deliberado que conmovió profundamente a generaciones de visitantes del siglo XIX.',
            kids: 'Escondido entre los árboles del jardín hay un pequeño edificio donde está enterrada una reina que todo el mundo quería mucho, la reina Luisa. Cuenta la leyenda que se plantó delante del mismísimo Napoleón para pedirle que fuera bueno con Prusia. Su estatua dentro la muestra como si estuviera dormida, no muerta, ¡para que pareciera más tierna!'
          },
          deepenFillers: {
            adult: [
              'El famoso "Gabinete de Ámbar", un fastuoso salón revestido de ámbar tallado que después se hizo célebre en Rusia, se creó originalmente para la corte prusiana antes de ser regalado al zar Pedro el Grande en 1716; su paradero final, tras desaparecer durante la Segunda Guerra Mundial, sigue sin resolverse del todo.',
              'El palacio también acoge la Cámara de Porcelana, una sala cubierta de suelo a techo con piezas de porcelana china y japonesa, uno de los interiores más singulares de toda la corte prusiana.'
            ],
            kids: [
              '¡Una sala famosísima llena de ámbar tallado, que después acabó en Rusia y se hizo mundialmente famosa, se creó primero aquí, como regalo para un zar ruso! Todavía nadie sabe dónde acabó esa sala después de la guerra.',
              'Hay una habitación entera del palacio cubierta de arriba abajo con platos y jarrones de porcelana china y japonesa, ¡como si las paredes fueran de porcelana en vez de piedra! 🏺'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Para quién se construyó originalmente este palacio?',
            options: ['Para la reina Sofía Carlota, como residencia de verano', 'Para un ejército extranjero', 'Para guardar el tesoro real'],
            correct: 0,
            reveal: '¡Para la reina Sofía Carlota! Se construyó a partir de 1695, y tras su muerte en 1705 el palacio pasó a llevar su nombre en su honor. 👑'
          },
          legends: {
            question: '¿Qué hizo, según cuenta la leyenda, la reina Luisa para intentar proteger a Prusia?',
            options: ['Se plantó ante Napoleón para pedirle clemencia', 'Escondió el tesoro real en el jardín', 'Se disfrazó de soldado'],
            correct: 0,
            reveal: '¡Se plantó ante el mismísimo Napoleón! Le pidió clemencia para Prusia tras la derrota de 1806, aunque no lo consiguió. Hoy sigue siendo una de las reinas más queridas de la historia prusiana.'
          },
          architecture: {
            question: '¿Qué dos estilos de jardín conviven detrás del palacio?',
            options: ['Uno geométrico a la francesa y otro más salvaje a la inglesa', 'Uno japonés y otro egipcio', 'Uno tropical y otro desértico'],
            correct: 0,
            reveal: '¡Uno a la francesa, con setos geométricos, y otro a la inglesa, más natural! Además del palacio, guarda colecciones de porcelana y joyas de la corona prusiana.'
          }
        }
      },
      {
        id: 'bebelplatz-neue-wache',
        name: {
          adult: 'Bebelplatz y Neue Wache',
          kids: 'Bebelplatz y Neue Wache — ¡La Biblioteca Invisible! 📚'
        },
        subtitle: {
          adult: 'Una plaza que recuerda la quema de libros nazi, junto al monumento a las víctimas de la guerra',
          kids: '¡Una biblioteca vacía escondida bajo el suelo de la plaza!'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'museos', order: 1 },
        coords: [52.5169, 13.3934],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Neue_Wache%2C_Unter_den_Linden%2C_Berlin-Mitte%2C_Nacht_%28HDR%29.jpg/330px-Neue_Wache%2C_Unter_den_Linden%2C_Berlin-Mitte%2C_Nacht_%28HDR%29.jpg',
        audio: { duration: 140, title: { adult: 'Audioguía: Bebelplatz y Neue Wache', kids: '¡Aventura Sonora: La Biblioteca Invisible!' } },
        visitInfo: {
          hours: { adult: 'Acceso libre las 24 horas; ambos son espacios y monumentos al aire libre.', kids: '¡Se puede visitar a cualquier hora del día!' },
          price: { adult: 'Gratis.', kids: '¡Gratis!' }
        },
        tabs: {
          history: {
            adult: 'El 10 de mayo de 1933, estudiantes universitarios afines al nazismo quemaron aquí unos 20.000 libros de autores judíos, socialistas, pacifistas o simplemente incómodos para el régimen —entre ellos Heinrich Heine, Sigmund Freud, Karl Marx, Bertolt Brecht o Albert Einstein—, instigados por el ministro de propaganda Joseph Goebbels. Muy cerca, la Neue Wache, construida por Karl Friedrich Schinkel entre 1816 y 1818 como caseta de guardia real, se convirtió tras la reunificación alemana en el monumento central del país a las víctimas de la guerra y la dictadura.',
            kids: 'En esta plaza, en 1933, un grupo de estudiantes que apoyaban a los nazis quemó miles de libros de autores que no les gustaban, ¡solo por lo que habían escrito! Cerca hay un pequeño edificio que antes vigilaba a soldados y hoy es un monumento para recordar a todas las víctimas de las guerras.'
          },
          legends: {
            adult: 'El memorial que recuerda la quema de libros, obra del escultor israelí Micha Ullman e inaugurado en 1995, es casi invisible a simple vista: una placa de cristal en el suelo de la plaza deja ver una sala subterránea con estanterías completamente vacías, con capacidad exacta para los 20.000 libros quemados. Junto a ella, una placa recuerda una frase del propio Heine, escrita ya en 1820, más de un siglo antes de la quema: "Allí donde se queman libros, se acaba quemando también a personas", una advertencia que resultó trágicamente profética.',
            kids: '¡Mira al suelo! Hay un cristal por el que se ve una habitación subterránea con estanterías completamente vacías, justo con espacio para los 20.000 libros que se quemaron. Un escritor había escrito, más de 100 años antes de que pasara esto, una frase que daba mucho miedo: "quien quema libros, acaba quemando personas".'
          },
          architecture: {
            adult: 'En el interior de la Neue Wache, bajo una abertura circular abierta directamente al cielo, se encuentra desde 1993 una única escultura: una versión ampliada de "Madre con su hijo muerto", de la artista Käthe Kollwitz, que había perdido a su propio hijo en la Primera Guerra Mundial. La lluvia y la nieve caen directamente sobre la estatua a través del óculo, un gesto arquitectónico deliberado que simboliza la exposición constante al sufrimiento de la guerra.',
            kids: '¡Dentro de este pequeño edificio hay un agujero redondo en el techo, abierto de verdad al cielo! Cuando llueve o nieva, cae directamente sobre una estatua de una madre abrazando a su hijo. Lo dejaron así a propósito, para recordar que la guerra no protege a nadie.'
          },
          deepenFillers: {
            adult: [
              'La plaza se llamó durante mucho tiempo Opernplatz, por la Ópera Estatal que la bordea, y no adoptó su nombre actual, en honor al político socialista August Bebel, hasta después de la Segunda Guerra Mundial.',
              'Frente a la plaza se alza la cúpula verde de la Catedral de Santa Eduviges, la primera iglesia católica construida en Berlín tras la Reforma protestante, encargada también por Federico el Grande como gesto de tolerancia religiosa.'
            ],
            kids: [
              '¡Esta plaza no siempre se llamó así! Antes se llamaba "Plaza de la Ópera", por el gran teatro que tiene al lado.',
              'Justo enfrente hay una catedral con una cúpula verde muy bonita: fue la primera iglesia católica que se construyó en Berlín después de que la ciudad se hiciera protestante. ⛪'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Qué pasó en esta plaza el 10 de mayo de 1933?',
            options: ['Estudiantes nazis quemaron miles de libros', 'Se celebró una gran boda real', 'Se inauguró el primer tranvía de Berlín'],
            correct: 0,
            reveal: '¡Se quemaron unos 20.000 libros! Eran de autores judíos, socialistas o simplemente incómodos para los nazis, como Einstein o Freud. 📚'
          },
          legends: {
            question: '¿Qué se puede ver a través del cristal en el suelo de la plaza?',
            options: ['Una biblioteca subterránea con estanterías vacías', 'Un río escondido', 'Restos de un castillo medieval'],
            correct: 0,
            reveal: '¡Estanterías completamente vacías! Tienen capacidad exacta para los 20.000 libros que se quemaron aquí en 1933.'
          },
          architecture: {
            question: '¿Qué tiene de especial el techo de la Neue Wache, el pequeño monumento junto a la plaza?',
            options: ['Tiene un agujero abierto al cielo', 'Está pintado de dorado', 'Tiene forma de pirámide'],
            correct: 0,
            reveal: '¡Un agujero circular abierto de verdad al cielo! La lluvia y la nieve caen directamente sobre la estatua de una madre con su hijo, a propósito.'
          }
        }
      },
      {
        id: 'humboldt-forum',
        name: {
          adult: 'Humboldt Forum (Palacio de Berlín)',
          kids: 'Humboldt Forum — ¡El Palacio que Desapareció y Volvió! 🏰'
        },
        subtitle: {
          adult: 'El antiguo palacio real de Prusia, reconstruido piedra a piedra tras la reunificación',
          kids: '¡Un palacio que desapareció del todo y lo volvieron a construir!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'museos', order: 2 },
        coords: [52.5169, 13.4016],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Berlin-BerlinerSchloss-6-Asio.JPG/330px-Berlin-BerlinerSchloss-6-Asio.JPG',
        audio: { duration: 160, title: { adult: 'Audioguía: Humboldt Forum', kids: '¡Aventura Sonora: El Palacio que Desapareció y Volvió!' } },
        visitInfo: {
          hours: { adult: 'Miércoles a lunes 10:30-18:30; cerrado los martes.', kids: 'Abre casi todos los días, ¡menos los martes!' },
          price: { adult: 'Entrada a las exposiciones en torno a 9€; menores de 19 años entran gratis, y varias zonas del edificio son de acceso gratuito.', kids: 'Si tienes menos de 19 años, ¡entras gratis!' },
          link: 'https://www.humboldtforum.org/en/'
        },
        tabs: {
          history: {
            adult: 'En este lugar hubo un palacio real desde 1443, residencia de los príncipes de Brandeburgo y después de los reyes de Prusia y los emperadores alemanes. Gravemente dañado en la Segunda Guerra Mundial, el gobierno comunista de la RDA decidió demolerlo por completo en 1950, considerándolo un símbolo del pasado imperial que no encajaba con el nuevo régimen, y construyó en su lugar el Palacio de la República, sede del Parlamento comunista, que a su vez fue demolido en 2008 por estar contaminado de amianto. En 2002 el Parlamento alemán ya reunificado votó reconstruir el antiguo palacio como un nuevo espacio cultural, el Humboldt Forum, inaugurado por fases a partir de 2020.',
            kids: '¡Aquí hubo un palacio real desde hace casi 600 años! Después de la guerra, el gobierno comunista lo derribó entero porque no les gustaba lo que representaba, y construyeron otro edificio distinto. Décadas después, ese otro edificio también se derribó, ¡y reconstruyeron el palacio antiguo tal y como era antes!'
          },
          legends: {
            adult: 'La reconstrucción generó un intenso debate en Alemania: muchos criticaron que se recreara la fachada barroca de un antiguo palacio imperial en pleno siglo XXI, mientras que dentro se exhiben, entre otras cosas, importantes colecciones etnológicas procedentes de antiguas colonias alemanas en África, Asia y Oceanía, algunas de ellas obtenidas en circunstancias hoy consideradas coloniales y actualmente en proceso de revisión y, en algunos casos, restitución a sus países de origen —como los famosos Bronces de Benín, devueltos parcialmente a Nigeria en 2022.',
            kids: 'Dentro de este palacio hay objetos que trajeron desde países de África, Asia y Oceanía hace muchísimos años, cuando Alemania tenía colonias en esos lugares. Hoy en día se está decidiendo qué objetos deberían devolverse a sus países de origen, ¡algunos ya se han devuelto!'
          },
          architecture: {
            adult: 'El arquitecto italiano Franco Stella reconstruyó con máxima fidelidad tres de las fachadas barrocas originales del siglo XVIII, incluida la cúpula, mientras que la fachada este, la que mira al río Spree, es una creación completamente nueva y moderna, en un contraste deliberado entre pasado y presente. Por dentro, el edificio no reproduce las antiguas salas reales, sino que alberga espacios museísticos contemporáneos, auditorios y una gran plaza cubierta pensada como punto de encuentro ciudadano.',
            kids: '¡Por fuera este palacio parece exactamente igual que el original de hace siglos! Pero por dentro es totalmente moderno, con museos y salas nuevas. Solo la parte que mira al río es distinta por fuera también, hecha a propósito con un estilo actual.'
          },
          deepenFillers: {
            adult: [
              'El nombre del edificio rinde homenaje a los hermanos Alexander y Wilhelm von Humboldt, el naturalista explorador y el lingüista y reformador educativo, ambos figuras clave de la ciencia y la cultura alemanas del siglo XIX.',
              'Bajo la plaza cubierta se conservan visibles restos arqueológicos del antiguo Palacio de la República comunista, así como vestigios medievales anteriores incluso al primer palacio real, descubiertos durante las obras de reconstrucción.'
            ],
            kids: [
              '¡El edificio se llama así en honor a dos hermanos alemanes muy famosos, Alexander y Wilhelm von Humboldt! Uno era explorador y el otro un experto en idiomas y educación.',
              'Mientras construían el edificio de hoy, encontraron restos escondidos bajo tierra de construcciones todavía más antiguas, ¡de antes incluso del primer palacio!'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Qué pasó con el palacio original en 1950?',
            options: ['El gobierno comunista lo derribó entero', 'Se quemó por accidente', 'Lo vendió Alemania a otro país'],
            correct: 0,
            reveal: '¡Lo derribaron entero! El gobierno comunista de la RDA lo consideraba un símbolo del pasado imperial y construyó otro edificio en su lugar. 🏰'
          },
          legends: {
            question: '¿Qué tipo de objetos polémicos se exhiben en algunas colecciones de este edificio?',
            options: ['Objetos traídos de antiguas colonias alemanas', 'Joyas robadas a otros reyes europeos', 'Dinosaurios'],
            correct: 0,
            reveal: 'Colecciones etnológicas de África, Asia y Oceanía, algunas obtenidas en la época colonial. Hoy se debate devolver varias piezas a sus países de origen.'
          },
          architecture: {
            question: '¿Todas las fachadas del edificio son reconstrucciones del palacio original?',
            options: ['No, la que mira al río es completamente nueva y moderna', 'Sí, las cuatro son idénticas al original', 'No, todo el edificio es moderno'],
            correct: 0,
            reveal: '¡La fachada que mira al río Spree es moderna! Las otras tres sí recrean fielmente el palacio barroco original del siglo XVIII.'
          }
        }
      },
      {
        id: 'altes-museum',
        name: { adult: 'Altes Museum', kids: 'Altes Museum — ¡El Primer Museo Público de Prusia! 🏛️' },
        subtitle: {
          adult: 'El museo más antiguo de la Isla de los Museos, con antigüedades griegas y romanas',
          kids: '¡El museo más viejo de toda la isla, con tesoros griegos!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'museos', order: 3 },
        coords: [52.5194, 13.3976],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Altes_Museum_%28Berlin%29_%286339770591%29.jpg/330px-Altes_Museum_%28Berlin%29_%286339770591%29.jpg',
        audio: { duration: 145, title: { adult: 'Audioguía: Altes Museum', kids: '¡Aventura Sonora: El Primer Museo Público de Prusia!' } },
        visitInfo: {
          hours: { adult: 'Martes a domingo 10:00-17:00 (18:00 en fin de semana); cerrado los lunes.', kids: 'Abre casi todos los días, ¡menos los lunes!' },
          price: { adult: 'Entrada individual en torno a 14€; abono de un día para los cinco museos de la isla, unos 24€.', kids: 'Se paga entrada, pero hay un pase para ver varios museos el mismo día.' },
          link: 'https://www.smb.museum/en/museums-institutions/altes-museum/home/'
        },
        tabs: {
          history: {
            adult: 'Inaugurado en 1830 por encargo del rey Federico Guillermo III, fue diseñado por el gran arquitecto Karl Friedrich Schinkel como el primer museo público de Prusia, pensado desde el principio para que cualquier ciudadano —no solo la nobleza— pudiera contemplar las colecciones reales de arte y antigüedades. Con este edificio arrancó la propia idea de la Isla de los Museos, que fue creciendo durante el siglo siguiente hasta reunir los cinco grandes museos que la componen hoy.',
            kids: '¡Este fue el primer museo de toda Prusia abierto a cualquier persona, no solo a los reyes! Se construyó en 1830, y con él empezó la idea de reunir varios museos juntos en esta misma isla, que hoy tiene cinco.'
          },
          legends: {
            adult: 'La colección permanente reúne una de las mayores colecciones de antigüedades griegas, etruscas y romanas de Alemania, incluyendo cerámica griega decorada, esculturas clásicas y una notable colección de objetos etruscos poco conocida fuera de círculos especializados. Durante la Segunda Guerra Mundial, buena parte de las piezas más valiosas se trasladaron a refugios antiaéreos y minas de sal para protegerlas de los bombardeos, una operación de rescate que salvó gran parte de la colección que hoy se puede admirar.',
            kids: 'Dentro hay vasijas griegas pintadas con dibujos de hace más de 2.000 años, y estatuas de la antigua Roma y Grecia. Durante la guerra, escondieron las piezas más valiosas en minas subterráneas para que las bombas no las destrozaran, ¡y funcionó!'
          },
          architecture: {
            adult: 'La fachada, con sus dieciocho columnas jónicas formando una gran columnata abierta de 87 metros de largo, se considera una de las obras maestras del neoclasicismo alemán y se inspiró directamente en la arquitectura de los templos griegos. En el interior, una gran rotonda circular coronada por una cúpula, inspirada a su vez en el Panteón de Roma, alberga esculturas clásicas bajo una luz cenital que Schinkel diseñó específicamente para realzarlas.',
            kids: '¡La entrada tiene dieciocho columnas enormes, copiando los templos griegos antiguos! Dentro hay una sala redonda con una cúpula, parecida a un templo romano muy famoso, donde la luz entra desde arriba para iluminar las estatuas.'
          },
          deepenFillers: {
            adult: [
              'La gran columnata abierta del Altes Museum, pensada por Schinkel como un espacio de encuentro ciudadano y no solo como fachada, ha sido durante generaciones lugar de conciertos, actos públicos y manifestaciones en pleno centro de Berlín.',
              'Frente a la fachada se extiende el Lustgarten, un jardín que ha cambiado radicalmente de función a lo largo de los siglos: fue huerto real, luego plaza de desfiles militares y hoy es de nuevo un tranquilo espacio verde.'
            ],
            kids: [
              '¡La gran entrada con columnas de este museo no es solo decoración! Está pensada como un sitio de encuentro, y durante años se han hecho aquí conciertos y actos importantes.',
              'El jardín de delante del museo, el Lustgarten, ha sido de todo un poco a lo largo de la historia: huerto, plaza para desfiles militares ¡y hoy un parque tranquilo!'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Para quién se pensó este museo cuando se construyó en 1830?',
            options: ['Para cualquier ciudadano, no solo la nobleza', 'Solo para la familia real', 'Solo para estudiantes de arte'],
            correct: 0,
            reveal: '¡Para cualquier ciudadano! Fue el primer museo público de Prusia, y con él empezó la propia idea de la Isla de los Museos. 🏛️'
          },
          legends: {
            question: '¿Dónde escondieron las piezas más valiosas durante la Segunda Guerra Mundial?',
            options: ['En minas de sal y refugios antiaéreos', 'Las enterraron en el jardín', 'Las mandaron a otro país en barco'],
            correct: 0,
            reveal: '¡En minas de sal y refugios antiaéreos! Esa operación de rescate salvó gran parte de la colección que hoy se puede ver.'
          },
          architecture: {
            question: '¿En qué se inspiró el arquitecto para la fachada de columnas?',
            options: ['En los templos griegos antiguos', 'En las mezquitas árabes', 'En los rascacielos modernos'],
            correct: 0,
            reveal: '¡En los templos griegos! Sus dieciocho columnas jónicas forman una columnata de 87 metros, una obra maestra del estilo neoclásico.'
          }
        }
      },
      {
        id: 'neues-museum',
        name: { adult: 'Neues Museum', kids: 'Neues Museum — ¡Aquí Vive Nefertiti! 👑' },
        subtitle: {
          adult: 'Hogar del famoso busto de la reina egipcia Nefertiti',
          kids: '¡El busto de una reina egipcia de más de 3.300 años!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'museos', order: 4 },
        coords: [52.5210, 13.3976],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Berlin_Neues_Museum_001.JPG/250px-Berlin_Neues_Museum_001.JPG',
        audio: { duration: 155, title: { adult: 'Audioguía: Neues Museum', kids: '¡Aventura Sonora: Aquí Vive Nefertiti!' } },
        visitInfo: {
          hours: { adult: 'Martes a domingo 10:00-18:00; cerrado los lunes.', kids: 'Abre casi todos los días, ¡menos los lunes!' },
          price: { adult: 'Entrada individual en torno a 14€; incluida en el abono de un día de la Isla de los Museos.', kids: 'Se paga entrada, aunque hay un pase para varios museos juntos.' },
          link: 'https://www.smb.museum/en/museums-institutions/neues-museum/home/'
        },
        tabs: {
          history: {
            adult: 'Construido entre 1843 y 1855, el edificio quedó gravemente destruido por los bombardeos de 1943 y permaneció en ruinas durante toda la Guerra Fría, ya que la RDA no tenía fondos ni interés en reconstruirlo. No fue hasta 1997, tras la reunificación, cuando el arquitecto británico David Chipperfield asumió el reto de restaurarlo, con un criterio muy particular: en vez de disimular los daños, decidió dejar visibles muchas de las cicatrices de la guerra, integrando ladrillo nuevo junto a los muros originales agujereados por la metralla, un proyecto que se inauguró finalmente en 2009.',
            kids: 'Este museo quedó casi destruido por las bombas durante la Segunda Guerra Mundial, ¡y estuvo así, en ruinas, durante más de 50 años! Cuando por fin lo arreglaron, decidieron dejar a la vista algunas de las paredes rotas, para que se notara su historia.'
          },
          legends: {
            adult: 'La pieza estrella del museo es el busto de la reina egipcia Nefertiti, de hace unos 3.300 años, hallado en 1912 por un equipo de arqueólogos alemanes en Amarna, Egipto. Su salida de Egipto sigue siendo objeto de disputa diplomática: el gobierno egipcio reclama su devolución desde los años 30, alegando que el reparto original de hallazgos, autorizado en su momento, infravaloró deliberadamente la pieza para quedársela; Alemania sostiene que la exportación fue legal según las leyes vigentes en 1913 y se ha negado hasta ahora a devolverla.',
            kids: '¡El busto de Nefertiti tiene más de 3.300 años y sigue perfecto! Egipto lleva casi 100 años pidiendo que se lo devuelvan, pero Alemania dice que se lo llevaron de forma legal en su momento. ¡Es una de las disputas de museos más famosas del mundo!'
          },
          architecture: {
            adult: 'La restauración de Chipperfield, muy premiada mundialmente, combina el mármol, el ladrillo visto y el hormigón pulido con los frescos y relieves originales del siglo XIX que sobrevivieron parcialmente al bombardeo, creando un diálogo visual constante entre lo antiguo y lo nuevo. La gran escalera central, reconstruida por completo con un diseño depurado y moderno, sustituye a la original neoclásica, que desapareció por completo en la guerra.',
            kids: 'Dentro puedes ver claramente qué partes son originales de hace casi 200 años y cuáles son nuevas: mezclan a propósito ladrillo nuevo con las pinturas antiguas que sobrevivieron. ¡Así el propio edificio te cuenta su historia!'
          },
          deepenFillers: {
            adult: [
              'El busto de Nefertiti es tan frágil que prácticamente nunca sale del museo: desde que llegó a Berlín se ha prestado a exposiciones fuera de Alemania en contadísimas ocasiones.',
              'El arqueólogo alemán Ludwig Borchardt dirigió la excavación en la que se halló el busto en 1912, en lo que había sido el taller de un escultor real egipcio.'
            ],
            kids: [
              '¡El busto de Nefertiti es tan delicado que casi nunca viaja a otros museos! Se queda aquí protegido casi todo el tiempo.',
              'Lo encontró un arqueólogo alemán en 1912, dentro del taller de un escultor egipcio que trabajaba para la propia reina. 👑'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Qué le pasó a este edificio durante la Segunda Guerra Mundial?',
            options: ['Quedó gravemente destruido y en ruinas más de 50 años', 'No sufrió ningún daño', 'Lo usaron como hospital'],
            correct: 0,
            reveal: '¡Quedó en ruinas! La RDA no tuvo fondos ni interés en reconstruirlo hasta después de la reunificación, en 1997. Reabrió por fin en 2009. 🏛️'
          },
          legends: {
            question: '¿Cuántos años tiene aproximadamente el busto de Nefertiti?',
            options: ['Unos 3.300 años', 'Unos 300 años', 'Unos 30.000 años'],
            correct: 0,
            reveal: '¡Unos 3.300 años! Y sigue en un estado de conservación increíble. Egipto lleva casi un siglo pidiendo que Alemania se lo devuelva. 👑'
          },
          architecture: {
            question: '¿Qué decidió hacer el arquitecto de la restauración con las cicatrices de la guerra?',
            options: ['Dejarlas visibles a propósito', 'Ocultarlas todas con pintura', 'Reconstruir el edificio exactamente igual que antes'],
            correct: 0,
            reveal: '¡Las dejó visibles! Mezcló ladrillo nuevo con los muros originales agujereados por la metralla, para que el edificio contara su propia historia.'
          }
        }
      },
      {
        id: 'alte-nationalgalerie',
        name: { adult: 'Alte Nationalgalerie', kids: 'Alte Nationalgalerie — ¡El Templo de la Pintura! 🎨' },
        subtitle: {
          adult: 'Pintura y escultura alemana del siglo XIX, del Romanticismo al Impresionismo',
          kids: '¡Un museo con forma de templo griego, lleno de cuadros!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'museos', order: 5 },
        coords: [52.5211, 13.3965],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/AlteNationalgalerie_1a.jpg/330px-AlteNationalgalerie_1a.jpg',
        audio: { duration: 145, title: { adult: 'Audioguía: Alte Nationalgalerie', kids: '¡Aventura Sonora: El Templo de la Pintura!' } },
        visitInfo: {
          hours: { adult: 'Martes a domingo 10:00-18:00; cerrado los lunes.', kids: 'Abre casi todos los días, ¡menos los lunes!' },
          price: { adult: 'Entrada individual en torno a 14€; incluida en el abono de un día de la Isla de los Museos.', kids: 'Se paga entrada, aunque hay un pase para varios museos juntos.' }
        },
        tabs: {
          history: {
            adult: 'Inaugurada en 1876 por orden del káiser Guillermo I, se concibió desde el principio como un templo dedicado al arte nacional alemán del siglo XIX, en un momento en que Alemania buscaba reforzar su identidad cultural tras la unificación del país en 1871. Sobre la escalinata de entrada, una gran estatua ecuestre del propio Guillermo I recibe a los visitantes, subrayando el vínculo original entre este museo y el proyecto de construcción nacional del nuevo Imperio alemán.',
            kids: 'Este museo se abrió en 1876 para presumir del mejor arte alemán del siglo XIX, justo cuando Alemania se acababa de unir como un solo país. A la entrada hay una estatua enorme a caballo del emperador que lo mandó construir.'
          },
          legends: {
            adult: 'La colección incluye obras del Romanticismo alemán, como los célebres paisajes de Caspar David Friedrich, y una notable representación del Impresionismo francés —Monet, Renoir, Manet— adquirida a comienzos del siglo XX gracias al director Hugo von Tschudi, quien desafió abiertamente al káiser, que despreciaba el arte moderno francés por considerarlo decadente. Durante el régimen nazi, cientos de obras consideradas "arte degenerado" fueron confiscadas y en muchos casos vendidas o destruidas, una herida en la colección que el museo sigue documentando e investigando hoy.',
            kids: '¡Aquí hay cuadros de artistas alemanes muy famosos y también de pintores franceses impresionistas! Un director muy valiente los compró aunque al emperador no le gustaban nada. Durante la época nazi, quitaron muchos cuadros del museo porque los consideraban "raros", y algunos se perdieron para siempre.'
          },
          architecture: {
            adult: 'El edificio, con forma de templo clásico elevado sobre un gran podio de piedra al que se accede por una monumental escalinata, fue diseñado por Friedrich August Stüler siguiendo bocetos del propio rey Federico Guillermo IV, un monarca con inquietudes artísticas que soñaba con crear en Berlín un santuario dedicado a las musas. Una profunda renovación entre 1998 y 2001 modernizó por completo sus salas interiores sin alterar la fachada histórica.',
            kids: '¡Este museo tiene forma de templo griego, con una escalera enorme para subir hasta la entrada! Lo diseñó siguiendo las ideas de un rey al que le encantaba el arte y quería un templo dedicado a él en Berlín.'
          },
          deepenFillers: {
            adult: [
              'Entre los Friedrich que se conservan aquí está "El monje junto al mar", un cuadro tan vacío y minimalista para su época (1810) que sorprendió profundamente al público de entonces, acostumbrado a paisajes mucho más poblados de detalles.',
              'El museo fue de los primeros en Europa en comprar obras de artistas impresionistas franceses todavía vivos, una apuesta arriesgada en su momento que hoy resulta en una de las colecciones de Monet y Manet más importantes fuera de Francia.'
            ],
            kids: [
              '¡Uno de los cuadros más famosos de aquí es "El monje junto al mar", tan vacío y sencillo para su época que sorprendió muchísimo a la gente que lo vio por primera vez, hace más de 200 años!',
              'Este museo fue de los primeros en Europa en comprar cuadros de pintores franceses que todavía estaban vivos, ¡una apuesta que en su momento parecía muy arriesgada!'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Para qué se construyó este museo en 1876?',
            options: ['Para reforzar la identidad cultural del nuevo Imperio alemán', 'Para guardar el tesoro de la corona', 'Como regalo de boda para una princesa'],
            correct: 0,
            reveal: 'Se construyó justo después de la unificación de Alemania en 1871, como templo dedicado al arte nacional alemán del siglo XIX. 🎨'
          },
          legends: {
            question: '¿Qué pasó con muchas obras del museo durante el régimen nazi?',
            options: ['Fueron confiscadas por considerarse "arte degenerado"', 'Se donaron a otro país como regalo', 'Se restauraron todas ellas'],
            correct: 0,
            reveal: '¡Fueron confiscadas! Los nazis las consideraban demasiado modernas o "degeneradas". Muchas se vendieron o se perdieron para siempre.'
          },
          architecture: {
            question: '¿A qué tipo de edificio antiguo se parece este museo por fuera?',
            options: ['A un templo griego clásico', 'A un castillo medieval', 'A una mezquita'],
            correct: 0,
            reveal: '¡A un templo griego! Está elevado sobre un gran podio de piedra, al que se sube por una escalinata monumental.'
          }
        }
      },
      {
        id: 'bode-museum',
        name: { adult: 'Bode Museum', kids: 'Bode Museum — ¡La Punta de la Isla! 🗿' },
        subtitle: {
          adult: 'Escultura europea, arte bizantino y una imponente colección de monedas',
          kids: '¡Un museo en la puntita de la isla, con esculturas y monedas antiguas!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'museos', order: 6 },
        coords: [52.5218, 13.3958],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Bodemuseum_-_Front.jpeg/330px-Bodemuseum_-_Front.jpeg',
        audio: { duration: 140, title: { adult: 'Audioguía: Bode Museum', kids: '¡Aventura Sonora: La Punta de la Isla!' } },
        visitInfo: {
          hours: { adult: 'Martes a domingo 10:00-17:00 (18:00 en fin de semana); cerrado los lunes.', kids: 'Abre casi todos los días, ¡menos los lunes!' },
          price: { adult: 'Entrada individual en torno a 14€; incluida en el abono de un día de la Isla de los Museos.', kids: 'Se paga entrada, aunque hay un pase para varios museos juntos.' }
        },
        tabs: {
          history: {
            adult: 'Inaugurado en 1904 en la punta norte de la Isla de los Museos, donde el río Spree se divide en dos brazos, tomó su nombre actual en 1956 en honor a Wilhelm von Bode, el historiador de arte que dirigió los museos berlineses durante décadas y reunió gran parte de sus colecciones. Durante la Segunda Guerra Mundial sufrió graves daños, y varias de sus piezas más valiosas se perdieron cuando un incendio arrasó la torre antiaérea de Friedrichshain donde se guardaban a resguardo de los bombardeos.',
            kids: 'Este museo está en la punta más estrecha de la isla, donde el río se divide en dos. Le pusieron el nombre de un famoso experto en arte que ayudó a reunir todas las colecciones de los museos de Berlín.'
          },
          legends: {
            adult: 'Su colección de escultura europea, desde la Edad Media hasta el siglo XVIII, es una de las más importantes del mundo, con obras de Donatello y otros grandes maestros italianos. El museo alberga también el Gabinete Numismático, con más de 800.000 monedas y medallas de todas las épocas, una de las colecciones de este tipo más extensas del planeta, aunque poco conocida frente a las grandes piezas escultóricas de las salas principales.',
            kids: '¡Aquí se guardan más de 800.000 monedas antiguas de todas las épocas! Es una de las colecciones de monedas más grandes del mundo entero, aunque casi nadie habla de ella porque las esculturas gigantes se llevan toda la atención.'
          },
          architecture: {
            adult: 'El arquitecto Ernst von Ihne diseñó el edificio con una llamativa cúpula barroca que remata su fachada triangular, adaptada a la forma puntiaguda del terreno donde se asienta, en la confluencia de los dos brazos del Spree. En el vestíbulo principal, bajo la cúpula, se exhibe una réplica de la estatua ecuestre del Gran Elector, mientras que la original, en bronce, se conserva en el patio del Palacio de Charlottenburg.',
            kids: '¡Este museo tiene una cúpula preciosa y una forma triangular puntiaguda, porque se construyó justo en la punta de la isla! Dentro hay una copia de una estatua a caballo enorme; la de verdad está en el Palacio de Charlottenburg.'
          },
          deepenFillers: {
            adult: [
              'El Gabinete Numismático del museo hunde sus raíces en la antigua Kunstkammer de los príncipes electores de Brandeburgo, del siglo XVII, mucho antes de que existiera el edificio actual, lo que la convierte en una de las colecciones de monedas más antiguas de Europa.',
              'Frente al museo, en la punta de la isla, el río Spree se estrecha tanto que desde el puente cercano se ve con claridad cómo el agua se divide en dos brazos distintos que rodean toda la Isla de los Museos.'
            ],
            kids: [
              '¡La colección de monedas de este museo empezó hace más de 300 años, mucho antes de que se construyera el edificio que ves hoy! Es una de las colecciones de monedas más antiguas de toda Europa.',
              'Desde el puente que hay al lado del museo se ve clarísimo cómo el río se separa en dos brazos distintos, ¡abrazando toda la isla de los museos!'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Dónde está situado este museo dentro de la Isla de los Museos?',
            options: ['En la punta norte, donde el río se divide en dos', 'En el centro exacto de la isla', 'Fuera de la isla, al otro lado del río'],
            correct: 0,
            reveal: '¡En la punta norte! Justo donde el río Spree se divide en dos brazos distintos. 🗿'
          },
          legends: {
            question: '¿Cuántas monedas y medallas guarda aproximadamente su colección numismática?',
            options: ['Más de 800.000', 'Unas 100', 'Unos 5.000'],
            correct: 0,
            reveal: '¡Más de 800.000! Es una de las colecciones de monedas más grandes del mundo, aunque menos famosa que las esculturas del museo.'
          },
          architecture: {
            question: '¿Por qué tiene el edificio esa forma triangular tan particular?',
            options: ['Se adapta a la forma puntiaguda del terreno donde se construyó', 'Fue un error del arquitecto', 'Copia la forma de una pirámide egipcia'],
            correct: 0,
            reveal: '¡Se adapta al terreno! Se construyó justo en la confluencia de los dos brazos del río Spree, en la punta de la isla.'
          }
        }
      },
      {
        id: 'hackesche-hofe',
        name: { adult: 'Hackesche Höfe', kids: 'Hackesche Höfe — ¡Los Ocho Patios Secretos! 🎭' },
        subtitle: {
          adult: 'El mayor complejo de patios interconectados de Alemania, con fachada modernista',
          kids: '¡Ocho patios escondidos, uno detrás de otro!'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'museos', order: 7 },
        coords: [52.5232, 13.4021],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Hackesche_h%C3%B6fe_berlin.jpg/330px-Hackesche_h%C3%B6fe_berlin.jpg',
        audio: { duration: 135, title: { adult: 'Audioguía: Hackesche Höfe', kids: '¡Aventura Sonora: Los Ocho Patios Secretos!' } },
        visitInfo: {
          hours: { adult: 'Acceso libre las 24 horas a los patios; las tiendas, cafés y el teatro tienen su propio horario.', kids: '¡Los patios se pueden visitar a cualquier hora!' },
          price: { adult: 'Gratis pasear por los patios; se paga en las tiendas, restaurantes y espectáculos.', kids: '¡Gratis pasear! Solo se paga si compras algo.' }
        },
        tabs: {
          history: {
            adult: 'Este barrio se llamó durante siglos Scheunenviertel, "el barrio de los graneros", porque en el siglo XVIII se obligó a instalar aquí, fuera entonces de las murallas de la ciudad, los graneros de paja que suponían un riesgo de incendio. En 1906, tras un proceso de urbanización del área, se inauguraron los Hackesche Höfe: ocho patios interconectados diseñados por el arquitecto Kurt Berndt como el mayor complejo residencial y comercial de patios de toda Alemania, combinando desde el principio viviendas, talleres y locales de ocio en un mismo conjunto.',
            kids: 'Hace mucho tiempo, este barrio se llamaba "el barrio de los graneros", porque aquí se guardaba la paja fuera de las murallas de la ciudad, por si acaso se incendiaba. En 1906 construyeron ocho patios conectados entre sí, con casas, tiendas y talleres, ¡todo junto!'
          },
          legends: {
            adult: 'Durante la Segunda Guerra Mundial los patios sufrieron daños considerables, y durante la época de la RDA se deterioraron aún más por la falta de mantenimiento, hasta el punto de estar a punto de ser demolidos en los años 70. Tras la reunificación se acometió una restauración integral, finalizada en 1996 con una inversión de unos 80 millones de marcos, que devolvió a los patios su antiguo esplendor y los convirtió en uno de los puntos de encuentro nocturno más animados del Berlín reunificado.',
            kids: 'Durante muchos años, mientras Berlín estaba dividido, estos patios se fueron estropeando poco a poco, ¡y hasta estuvieron a punto de derribarlos! Por suerte, después de la reunificación los arreglaron enteros, y hoy son uno de los sitios más animados de la ciudad por las noches.'
          },
          architecture: {
            adult: 'El primer patio, el más fotografiado, luce una espectacular fachada de estilo modernista (Jugendstil) diseñada por August Endell, revestida de azulejos de cerámica vidriada en tonos azules, verdes y dorados con motivos geométricos y florales, restaurada con gran fidelidad al original de 1907. Los siguientes patios, de estética más sobria e industrial, alojaban originalmente talleres y almacenes, y hoy combinan tiendas de diseño, galerías de arte y el histórico teatro de variedades Chamäleon, especializado en circo contemporáneo.',
            kids: '¡El primer patio tiene una fachada preciosa cubierta de azulejos de colores, con dibujos geométricos! Los siguientes patios son más sencillos, porque antes eran talleres, y hoy tienen tiendas, arte y hasta un teatro de circo moderno.'
          },
          deepenFillers: {
            adult: [
              'Muy cerca de aquí, en el mismo barrio, el empresario alemán Otto Weidt escondió y protegió durante el nazismo a varios trabajadores judíos ciegos y sordos de su pequeño taller de cepillos y escobas, salvándoles la vida; hoy ese taller es un pequeño museo dedicado a su memoria.',
              'El nombre "Scheunenviertel" cayó en desuso durante décadas, pero hoy vuelve a emplearse de forma habitual para referirse a esta zona, uno de los barrios con más vida nocturna de todo Berlín.'
            ],
            kids: [
              'Cerca de aquí hay un pequeño taller que hoy es un museo: perteneció a un hombre llamado Otto Weidt, que durante una época muy difícil escondió y protegió a trabajadores que corrían peligro, ¡y consiguió salvarles la vida!',
              '¡El nombre antiguo del barrio, "el barrio de los graneros", casi se olvidó durante mucho tiempo! Hoy la gente vuelve a usarlo para hablar de esta zona tan animada, sobre todo de noche.'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Cómo se llamaba este barrio antiguamente y por qué?',
            options: ['Scheunenviertel, "el barrio de los graneros"', 'Königsviertel, "el barrio del rey"', 'Goldviertel, "el barrio del oro"'],
            correct: 0,
            reveal: '¡Scheunenviertel! Aquí se guardaba la paja fuera de las murallas de la ciudad, para evitar el riesgo de incendio dentro. 🎭'
          },
          legends: {
            question: '¿Qué estuvo a punto de pasarle a estos patios en los años 70?',
            options: ['Estuvieron a punto de ser derribados', 'Los convirtieron en una fábrica', 'Los cerraron para siempre'],
            correct: 0,
            reveal: '¡Estuvieron a punto de derribarlos! Se habían deteriorado mucho durante la época comunista. Los restauraron por completo después de la reunificación.'
          },
          architecture: {
            question: '¿De qué está cubierta la espectacular fachada del primer patio?',
            options: ['De azulejos de cerámica vidriada de colores', 'De espejos', 'De madera tallada'],
            correct: 0,
            reveal: '¡De azulejos de colores! Con motivos geométricos y florales, en un estilo modernista llamado Jugendstil, típico de principios del siglo XX.'
          }
        }
      },
      {
        id: 'nikolaiviertel',
        name: { adult: 'Nikolaiviertel', kids: 'Nikolaiviertel — ¡Donde Nació Berlín! 🐣' },
        subtitle: {
          adult: 'El barrio más antiguo de Berlín, reconstruido para el 750 aniversario de la ciudad',
          kids: '¡El barrio donde nació Berlín hace más de 800 años!'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'museos', order: 8 },
        coords: [52.5169, 13.4077],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Blue_Hour_in_Berlin.jpg/330px-Blue_Hour_in_Berlin.jpg',
        audio: { duration: 140, title: { adult: 'Audioguía: Nikolaiviertel', kids: '¡Aventura Sonora: Donde Nació Berlín!' } },
        visitInfo: {
          hours: { adult: 'Acceso libre las 24 horas; es un barrio de calles y plazas al aire libre.', kids: '¡Se puede visitar a cualquier hora!' },
          price: { adult: 'Gratis pasear; se paga en tiendas, restaurantes y la propia iglesia de San Nicolás.', kids: '¡Gratis pasear! Solo se paga si entras a algún sitio.' }
        },
        tabs: {
          history: {
            adult: 'Este barrio ocupa el lugar exacto donde, alrededor del año 1200, se fundaron los dos asentamientos originales de Berlín y Cölln, a ambas orillas del río Spree, cuya unión daría origen a la ciudad tal y como la conocemos. En su centro se alza la Nikolaikirche, la iglesia más antigua de Berlín, construida en torno a esa misma fecha fundacional y que da nombre a todo el barrio.',
            kids: '¡Aquí nació Berlín de verdad! Hace más de 800 años, dos pueblos pequeños a ambos lados del río se unieron y formaron la ciudad. En el centro está la iglesia más antigua de todo Berlín.'
          },
          legends: {
            adult: 'Aunque el barrio conserva un aspecto marcadamente medieval, con callejuelas estrechas y casas de entramado de madera, la inmensa mayoría de lo que se ve hoy es en realidad una reconstrucción del gobierno de la RDA para 1987, con motivo del 750 aniversario de la fundación de Berlín: el barrio original quedó prácticamente arrasado por los bombardeos de 1945, y el régimen comunista aprovechó la efeméride para recrear, con licencias arquitectónicas y algunos anacronismos deliberados, una imagen idealizada del "viejo Berlín" que nunca existió exactamente así.',
            kids: '¡Casi todas estas casas que parecen tan antiguas en realidad se construyeron hace solo unas décadas! El barrio original se destruyó en la guerra, y el gobierno lo reconstruyó copiando el estilo antiguo para celebrar los 750 años de Berlín, en 1987.'
          },
          architecture: {
            adult: 'La Nikolaikirche, con sus dos torres góticas gemelas reconstruidas tras la guerra, conserva en su interior elementos originales medievales y renacentistas que sí sobrevivieron a los bombardeos, incluyendo una pila bautismal de bronce del siglo XIV. Hoy funciona como museo dependiente de la Fundación Stadtmuseum Berlin, dedicado a la historia temprana de la ciudad.',
            kids: 'La iglesia del centro tiene dos torres puntiagudas iguales, reconstruidas después de la guerra. Dentro guarda algunas piezas que sí son originales de verdad, de hace más de 600 años, ¡y hoy es un museo sobre los primeros años de Berlín!'
          },
          deepenFillers: {
            adult: [
              'La fecha exacta de fundación de Berlín no se conoce con precisión: la primera mención documental de Cölln es de 1237, mientras que Berlín aparece por escrito por primera vez en 1244; la celebración de 1987 tomó como referencia la fecha más antigua.',
              'Muchas de las casas del barrio, aunque reconstruidas en los años 80, incorporan elementos y fragmentos originales medievales rescatados de otros edificios demolidos en distintas partes de la ciudad.'
            ],
            kids: [
              '¡Nadie sabe con total seguridad el año exacto en que nació Berlín! El primer papel donde se menciona el pueblo de Cölln es de 1237, y el de Berlín es de 1244, unos años después.',
              'Aunque estas casas se construyeron de nuevo en los años 80, muchas tienen trocitos de verdad de edificios antiguos, rescatados de otras partes de la ciudad antes de que los derribaran.'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Qué pasó en este lugar alrededor del año 1200?',
            options: ['Se fundaron los dos asentamientos que dieron origen a Berlín', 'Se libró una gran batalla', 'Se construyó el primer castillo de la ciudad'],
            correct: 0,
            reveal: '¡Aquí nació Berlín! Dos pueblos, Berlín y Cölln, se fundaron a ambos lados del río Spree y con el tiempo se unieron en una sola ciudad. 🐣'
          },
          legends: {
            question: '¿Son estas casas realmente medievales, de hace 800 años?',
            options: ['No, casi todas se reconstruyeron en 1987', 'Sí, todas son originales', 'Solo la mitad son originales'],
            correct: 0,
            reveal: '¡No! El barrio original quedó destruido en la guerra. Lo que ves hoy se reconstruyó en 1987 para celebrar el 750 aniversario de Berlín.'
          },
          architecture: {
            question: '¿Cómo se llama la iglesia más antigua de Berlín, en el centro del barrio?',
            options: ['Nikolaikirche', 'Catedral de Berlín', 'Iglesia de San Pedro'],
            correct: 0,
            reveal: '¡Nikolaikirche! Tiene dos torres góticas gemelas y hoy funciona como museo sobre los primeros años de la ciudad.'
          }
        }
      },
      {
        id: 'rotes-rathaus',
        name: { adult: 'Rotes Rathaus (Ayuntamiento Rojo)', kids: 'Rotes Rathaus — ¡El Ayuntamiento de Ladrillo Rojo! 🧱' },
        subtitle: {
          adult: 'La sede del gobierno de Berlín desde el siglo XIX, famosa por su color',
          kids: '¡Un ayuntamiento enorme, rojo por fuera de verdad!'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'museos', order: 9 },
        coords: [52.5186, 13.4090],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/2009-07-26-berlin-by-RalfR-36.jpg/330px-2009-07-26-berlin-by-RalfR-36.jpg',
        audio: { duration: 130, title: { adult: 'Audioguía: Rotes Rathaus', kids: '¡Aventura Sonora: El Ayuntamiento de Ladrillo Rojo!' } },
        visitInfo: {
          hours: { adult: 'Fachada y exterior visibles a cualquier hora; el interior solo se visita en contadas jornadas de puertas abiertas.', kids: 'Por fuera se puede ver siempre; por dentro solo se puede entrar algunos días especiales.' },
          price: { adult: 'Gratis ver el exterior.', kids: '¡Gratis verlo por fuera!' }
        },
        tabs: {
          history: {
            adult: 'Construido entre 1861 y 1869 según diseño del arquitecto Hermann Friedrich Waesemann, ha sido la sede del gobierno de la ciudad de Berlín casi ininterrumpidamente desde entonces, salvo durante la división de la Guerra Fría, cuando quedó en la parte oriental y sirvió como ayuntamiento de Berlín Este, mientras que Berlín Oeste instaló el suyo en el barrio de Schöneberg. Tras la reunificación en 1990, volvió a convertirse en la sede única del alcalde y el gobierno de toda la ciudad.',
            kids: 'Este edificio lleva siendo la sede del gobierno de Berlín desde 1869, ¡hace más de 150 años! Durante la época en que la ciudad estaba dividida, solo gobernaba la parte del este; cuando se reunificó Berlín, volvió a ser el ayuntamiento de toda la ciudad.'
          },
          legends: {
            adult: 'El apodo "Rathaus Rojo" no tiene ningún origen político, pese a lo que muchos visitantes asumen al pensar en la Alemania comunista: se debe simplemente al color de los ladrillos con los que está construido, un rojo intenso característico de la arquitectura del norte de Alemania de la época. La confusión ha dado pie a más de un malentendido turístico a lo largo de los años, especialmente entre quienes visitan la ciudad sin conocer su historia con antelación.',
            kids: '¡Aunque parezca que tiene ese nombre por ser un edificio comunista, no es así! Se llama "rojo" simplemente por el color de sus ladrillos. Mucha gente se confunde con esto la primera vez que lo visita.'
          },
          architecture: {
            adult: 'El edificio combina el estilo neorrenacentista con una torre central de 74 metros de altura, inspirada en los campanarios de las catedrales góticas del norte de Europa. Una característica única es el friso de terracota que recorre toda la fachada a la altura del primer piso, conocido como la "Steinerne Chronik" (Crónica de Piedra): 36 paneles esculpidos que narran, en imágenes, la historia de Berlín desde sus orígenes hasta el siglo XIX.',
            kids: '¡Fíjate en la franja que rodea todo el edificio a media altura! Son 36 dibujos hechos en piedra que cuentan, como un cómic gigante, toda la historia de Berlín desde que se fundó hasta hace unos 150 años.'
          },
          deepenFillers: {
            adult: [
              'Mientras este edificio gobernaba Berlín Este, el ayuntamiento de Berlín Oeste, el Rathaus Schöneberg, fue el lugar donde el presidente estadounidense John F. Kennedy pronunció en 1963 su famoso discurso "Ich bin ein Berliner".',
              'La torre central alberga un carillón con campanas de porcelana de Meissen que suena varias veces al día, un detalle poco conocido frente a la fama del friso de piedra.'
            ],
            kids: [
              '¡En el otro ayuntamiento de Berlín, el de la parte occidental, un presidente de Estados Unidos dio un discurso súper famoso en 1963 diciendo "Yo soy berlinés"! 🎤',
              '¡En la torre de este ayuntamiento suena un carillón hecho con campanas de porcelana varias veces al día! Es un detalle curioso que casi nadie conoce.'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Desde cuándo es este edificio la sede del gobierno de Berlín?',
            options: ['Desde 1869, casi sin interrupción', 'Desde el año 2000', 'Desde la Edad Media'],
            correct: 0,
            reveal: '¡Desde 1869! Solo dejó de gobernar toda la ciudad durante la división de la Guerra Fría, cuando quedó en la parte oriental. 🧱'
          },
          legends: {
            question: '¿Por qué se llama "Ayuntamiento Rojo"?',
            options: ['Por el color de sus ladrillos', 'Porque fue construido por el gobierno comunista', 'Porque antes era una fábrica de tinte rojo'],
            correct: 0,
            reveal: '¡Por el color de sus ladrillos! No tiene nada que ver con la política, aunque mucha gente se confunde al pensar en la Alemania comunista.'
          },
          architecture: {
            question: '¿Qué es la "Crónica de Piedra" que rodea el edificio?',
            options: ['36 paneles esculpidos que narran la historia de Berlín', 'Una lista de todos los alcaldes', 'Un mapa antiguo de la ciudad'],
            correct: 0,
            reveal: '¡36 paneles de terracota! Cuentan en imágenes la historia de Berlín desde sus orígenes hasta el siglo XIX, como un cómic gigante en piedra.'
          }
        }
      },
      {
        id: 'ddr-museum',
        name: { adult: 'DDR Museum', kids: 'DDR Museum — ¡Toca la Historia con tus Manos! ✋' },
        subtitle: {
          adult: 'Un museo interactivo sobre la vida cotidiana en la Alemania comunista',
          kids: '¡Un museo donde puedes tocar y probar todo, no como los demás!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'museos', order: 10 },
        coords: [52.5192, 13.4023],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/DDR-Museum_%28Berlin%29_Schriftzug.jpg/250px-DDR-Museum_%28Berlin%29_Schriftzug.jpg',
        audio: { duration: 145, title: { adult: 'Audioguía: DDR Museum', kids: '¡Aventura Sonora: Toca la Historia con tus Manos!' } },
        visitInfo: {
          hours: { adult: 'Todos los días 9:00-21:00 (cierra a las 16:00 el 24 y 31 de diciembre).', kids: '¡Abre todos los días de la semana!' },
          price: { adult: 'Entrada general en torno a 13,50€; reducida unos 8€.', kids: 'Se paga entrada, algo más barata si eres estudiante o niño.' },
          link: 'https://www.ddr-museum.de/en/visit'
        },
        tabs: {
          history: {
            adult: 'Fundado por el etnólogo Peter Kenzelmann e inaugurado en 2006, este museo privado nació con una idea muy clara: "historia que se puede tocar". A diferencia de casi cualquier otro museo, sus objetos no están protegidos por vitrinas, sino disponibles para que los visitantes los abran, se sienten en ellos o los manipulen directamente, recreando de forma inmersiva cómo era la vida diaria en la Alemania comunista (RDA) entre 1949 y 1990: desde un piso completo amueblado al estilo de la época hasta un simulador de conducción del mítico coche Trabant.',
            kids: '¡Este museo es diferente a todos los demás! Aquí SÍ puedes tocar las cosas: sentarte en los sofás, abrir los armarios y hasta conducir un coche antiguo de mentira. Todo está pensado para que sientas cómo vivía la gente en la Alemania comunista.'
          },
          legends: {
            adult: 'Una de las piezas más visitadas es la recreación de un dormitorio de bloque de pisos prefabricado (Plattenbau), el tipo de vivienda estándar en la que llegó a vivir la mayoría de la población de la RDA, con un nivel de detalle tan minucioso que muchos antiguos ciudadanos de Alemania del Este aseguran sentir una intensa nostalgia, un fenómeno tan extendido que tiene nombre propio en alemán: "Ostalgie" (nostalgia del Este), la añoranza por ciertos aspectos de la vida cotidiana bajo el antiguo régimen, más allá de la valoración política del sistema.',
            kids: 'Hay una habitación reconstruida exactamente igual a como eran las casas normales de la época, ¡con tanto detalle que la gente que vivió allí de verdad se emociona al verla! A esa sensación de añorar cosas de esa época, aunque no fuera perfecta, los alemanes la llaman "Ostalgie".'
          },
          architecture: {
            adult: 'El museo ocupa un edificio junto al río Spree, frente al Humboldt Forum, y organiza su recorrido en pequeñas cápsulas temáticas —vivienda, trabajo, vacaciones, vigilancia estatal— que el visitante explora abriendo cajones y paneles físicos, una museografía deliberadamente táctil y muy alejada de los recorridos lineales habituales, pensada para fomentar el descubrimiento activo antes que la simple contemplación.',
            kids: '¡El museo está organizado como un montón de cajitas y cajones que tú mismo abres para descubrir cosas! No hay un camino fijo que seguir: puedes explorar en el orden que quieras, como si fuera una búsqueda del tesoro.'
          },
          deepenFillers: {
            adult: [
              'El simulador del Trabant no es solo un coche estático: tiene una pantalla delante que proyecta una calle de la Berlín comunista, para que el visitante sienta que conduce de verdad por sus calles.',
              'Pese a ser un museo privado y de pago, se ha convertido en una de las atracciones más visitadas de todo Berlín, comparable en popularidad a museos estatales mucho más grandes.'
            ],
            kids: [
              '¡El simulador del Trabant tiene una pantalla delante que muestra una calle de verdad de la época, para que sientas que estás conduciendo por Berlín Este! 🚗',
              'Aunque es un museo pequeño y privado, ¡se ha convertido en uno de los más visitados de toda la ciudad!'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Qué es lo más especial de este museo, comparado con otros?',
            options: ['Se puede tocar y manipular casi todo', 'Es el museo más grande de Berlín', 'Solo se puede visitar de noche'],
            correct: 0,
            reveal: '¡Se puede tocar casi todo! A diferencia de la mayoría de museos, aquí puedes abrir armarios, sentarte en los sofás y hasta "conducir" un coche antiguo. ✋'
          },
          legends: {
            question: '¿Cómo se llama en alemán la nostalgia por la vida cotidiana de la antigua Alemania del Este?',
            options: ['"Ostalgie"', '"Kaffeepause"', '"Wanderlust"'],
            correct: 0,
            reveal: '¡"Ostalgie"! Mezcla las palabras "Este" y "nostalgia". Muchos antiguos ciudadanos de la RDA sienten esta añoranza al ver las recreaciones del museo.'
          },
          architecture: {
            question: '¿Cómo tienes que explorar las salas de este museo?',
            options: ['Abriendo cajones y paneles tú mismo', 'Siguiendo flechas en el suelo', 'Con un guía obligatorio'],
            correct: 0,
            reveal: '¡Abriendo cajones y paneles! No hay un camino fijo: puedes explorar el museo en el orden que prefieras, como una búsqueda del tesoro.'
          }
        }
      },
      {
        id: 'gendarmenmarkt',
        name: { adult: 'Gendarmenmarkt', kids: 'Gendarmenmarkt — ¡La Plaza de las Dos Catedrales Gemelas! ⛪⛪' },
        subtitle: {
          adult: 'Considerada la plaza más bella de Berlín, con dos catedrales casi gemelas',
          kids: '¡Una plaza con dos iglesias que parecen mellizas!'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'museos', order: 11 },
        coords: [52.5138, 13.3925],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Gendarmenmarkt_Panorama.jpg/330px-Gendarmenmarkt_Panorama.jpg',
        audio: { duration: 150, title: { adult: 'Audioguía: Gendarmenmarkt', kids: '¡Aventura Sonora: La Plaza de las Dos Catedrales Gemelas!' } },
        visitInfo: {
          hours: { adult: 'La plaza es de acceso libre las 24 horas; el interior de las catedrales y el Konzerthaus tienen su propio horario y suelen requerir entrada.', kids: '¡La plaza se puede visitar a cualquier hora!' },
          price: { adult: 'Gratis pasear por la plaza; museo del Deutscher Dom y conciertos con entrada de pago.', kids: '¡Gratis pasear! Solo se paga para entrar a algunos sitios.' }
        },
        tabs: {
          history: {
            adult: 'Esta plaza se formó a finales del siglo XVII cuando el elector Federico Guillermo I ofreció refugio en Prusia a los hugonotes, protestantes franceses perseguidos en su propio país, a través del Edicto de Potsdam de 1685. Miles de ellos se instalaron en este barrio y construyeron su propia iglesia, la Französischer Dom, terminada en 1705. El nombre actual de la plaza, "mercado de los gendarmes", proviene de un regimiento de caballería que tuvo aquí sus cuadras a finales del siglo XVIII.',
            kids: 'Hace más de 300 años, muchos protestantes franceses llamados hugonotes tuvieron que huir de su país porque los perseguían, ¡y el rey de Prusia los acogió aquí! Construyeron su propia iglesia en esta plaza, que hoy sigue en pie.'
          },
          legends: {
            adult: 'Las dos catedrales que flanquean la plaza, la Französischer Dom y la Deutscher Dom, son casi gemelas por fuera pero no lo eran en origen: sus torres idénticas se añadieron ya en 1785 por el arquitecto Carl von Gontard, mucho después de construirse ambas iglesias, con el único propósito de crear una simetría visual perfecta entre el templo francés y el alemán. Ambos edificios quedaron completamente arrasados por los bombardeos de 1945, y la Deutscher Dom no se restauró del todo hasta 1996, más de 50 años después.',
            kids: '¡Las dos iglesias parecen gemelas por fuera, pero al principio no lo eran! Le añadieron las mismas torres a las dos, muchos años después de construirlas, solo para que se vieran igual de bonitas. Las dos quedaron destruidas en la guerra y tardaron décadas en arreglarlas.'
          },
          architecture: {
            adult: 'Entre ambas catedrales se alza el Konzerthaus, la sala de conciertos diseñada por Karl Friedrich Schinkel en 1821 sobre las ruinas de un teatro anterior destruido por un incendio, hoy sede de la Orquesta Sinfónica de Berlín. El conjunto de los tres edificios, con sus escalinatas monumentales y sus columnatas clásicas, es considerado por muchos berlineses la plaza más armoniosa y elegante de toda la ciudad, especialmente iluminada por la noche.',
            kids: 'En medio de las dos iglesias hay una sala de conciertos muy famosa, construida sobre las ruinas de un teatro que se quemó. Los tres edificios juntos, con sus escaleras y columnas, hacen que mucha gente diga que esta es la plaza más bonita de todo Berlín.'
          },
          deepenFillers: {
            adult: [
              'Delante del Konzerthaus se alza una estatua de mármol del gran poeta alemán Friedrich Schiller, que llegó a ser retirada de la plaza durante buena parte del siglo XX antes de regresar a su emplazamiento original.',
              'Cada diciembre, la plaza acoge uno de los mercadillos navideños más elegantes de Berlín, uno de los pocos de la ciudad que cobra entrada, gracias a su cuidada decoración y ambiente.'
            ],
            kids: [
              '¡Delante de la sala de conciertos hay una estatua de un poeta alemán muy famoso, Friedrich Schiller! Durante un tiempo la quitaron de la plaza, pero después la volvieron a poner en su sitio.',
              '¡Cada diciembre esta plaza se llena de un mercadillo navideño precioso! Es uno de los pocos de Berlín donde hay que pagar una pequeña entrada, porque está muy bien decorado. 🎄'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Quiénes construyeron la primera iglesia de esta plaza, la Französischer Dom?',
            options: ['Protestantes franceses refugiados en Prusia', 'Comerciantes italianos', 'Monjes españoles'],
            correct: 0,
            reveal: '¡Hugonotes franceses! El rey de Prusia los acogió cuando huían de la persecución en Francia, a finales del siglo XVII. ⛪'
          },
          legends: {
            question: '¿Por qué se parecen tanto las dos catedrales de la plaza?',
            options: ['Les añadieron las mismas torres años después, para que hicieran juego', 'Las construyó el mismo arquitecto desde el principio', 'Es pura casualidad'],
            correct: 0,
            reveal: '¡Les añadieron torres idénticas en 1785, mucho después de construirlas! El objetivo era crear una simetría visual perfecta entre las dos iglesias.'
          },
          architecture: {
            question: '¿Qué edificio se encuentra justo en medio de las dos catedrales?',
            options: ['El Konzerthaus, una sala de conciertos', 'Un mercado de flores', 'La casa del alcalde'],
            correct: 0,
            reveal: '¡El Konzerthaus! Diseñado por Schinkel en 1821, hoy es la sede de la Orquesta Sinfónica de Berlín.'
          }
        }
      },
      {
        id: 'topographie-des-terrors',
        name: { adult: 'Topografía del Terror', kids: 'Topografía del Terror — Un Lugar para Aprender y no Olvidar 📖' },
        subtitle: {
          adult: 'Museo al aire libre sobre el antiguo cuartel general de la Gestapo y las SS',
          kids: 'Aquí se aprende, sin miedo, por qué nunca se debe repetir la historia'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'muro', order: 1 },
        coords: [52.5062, 13.3830],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Topographie_des_Terrors_Neubau.jpg/330px-Topographie_des_Terrors_Neubau.jpg',
        audio: { duration: 150, title: { adult: 'Audioguía: Topografía del Terror', kids: '¡Aventura Sonora: Un Lugar para Aprender y no Olvidar!' } },
        visitInfo: {
          hours: { adult: 'Todos los días 10:00-20:00. Cerrado el 24, 25 y 31 de diciembre y el 1 de enero.', kids: 'Abre todos los días.' },
          price: { adult: 'Gratis.', kids: '¡Gratis!' },
          link: 'https://www.topographie.de/en/'
        },
        tabs: {
          history: {
            adult: 'Este solar, hoy convertido en centro de documentación al aire libre, albergó entre 1933 y 1945 las sedes centrales de la Gestapo (la policía secreta nazi), las SS y el Servicio de Seguridad del Reich: el auténtico corazón administrativo del terror nazi, desde donde se planificaron la persecución política, la deportación y el exterminio de millones de personas. Los edificios originales quedaron destruidos por los bombardeos aliados, y sus ruinas se demolieron casi por completo tras la guerra; durante décadas el solar permaneció como un descampado, casi olvidado, pegado al propio trazado del Muro de Berlín.',
            kids: 'Aquí estuvieron, hace muchos años, las oficinas centrales de la policía secreta más temida de los nazis. Desde este lugar se planeó hacer mucho daño a millones de personas. Los edificios se destruyeron en la guerra, y durante mucho tiempo el terreno quedó abandonado, casi olvidado.'
          },
          legends: {
            adult: 'Durante décadas tras la guerra, tanto en la Alemania Occidental como en la Oriental hubo una notable falta de voluntad institucional para señalar y explicar este lugar concreto, en parte por la incomodidad que generaba confrontar de forma tan directa y localizada la maquinaria administrativa del régimen. No fue hasta 1987, con motivo del 750 aniversario de Berlín, cuando se instaló una primera exposición temporal al aire libre que, ante el enorme interés del público, acabó convirtiéndose en permanente; el actual centro de documentación no se inauguró en su forma definitiva hasta 2010.',
            kids: 'Durante muchísimos años, casi nadie quiso explicar bien qué había pasado exactamente en este lugar, porque resultaba muy incómodo de recordar. No fue hasta 1987 cuando empezaron a explicarlo con una exposición, ¡y no se terminó del todo como lo ves hoy hasta el año 2010!'
          },
          architecture: {
            adult: 'El centro de documentación actual, diseñado por la arquitecta Ursula Wilms e inaugurado en 2010, es un edificio deliberadamente austero de líneas rectas y fachada de malla metálica gris, pensado para no competir visualmente ni añadir ningún tipo de grandiosidad al lugar. Junto a él se conserva expuesto uno de los tramos más largos y mejor conservados del Muro de Berlín que aún quedan en pie, ya que este solar formaba parte de la propia franja fronteriza durante la Guerra Fría.',
            kids: 'El edificio de hoy es muy sencillo a propósito, sin nada llamativo, para no quitarle importancia a lo que pasó aquí. Al lado se conserva un trozo largo y original del Muro de Berlín, porque este mismo terreno formaba parte de la frontera durante la Guerra Fría.'
          },
          deepenFillers: {
            adult: [
              'Excavaciones realizadas en los años 80 sacaron a la luz los cimientos originales de los sótanos del edificio, incluidas las celdas donde se retenía a los detenidos; hoy se conservan visibles y protegidos por una pasarela elevada.',
              'El centro de documentación es de entrada gratuita y ofrece explicaciones en varios idiomas, con el objetivo declarado de que cualquier visitante pueda comprender cómo una administración ordinaria se puso al servicio de un régimen criminal.'
            ],
            kids: [
              'Hace años, unos arqueólogos excavaron el terreno y encontraron los cimientos originales escondidos bajo tierra del edificio que hubo aquí; hoy se pueden ver protegidos, cubiertos por un pasillo elevado.',
              'Este centro se puede visitar gratis y explica la historia en varios idiomas, para que cualquier persona que venga de visita pueda entenderla bien.'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Qué organizaciones tuvieron su sede central en este lugar entre 1933 y 1945?',
            options: ['La Gestapo y las SS', 'El ejército francés', 'La policía de tráfico de Berlín'],
            correct: 0,
            reveal: '¡La Gestapo y las SS! Desde aquí se planificó buena parte de la persecución y el terror del régimen nazi. 📖'
          },
          legends: {
            question: '¿Cuándo se inauguró el centro de documentación en su forma actual?',
            options: ['En 2010, más de 60 años después de la guerra', 'En 1946, justo tras la guerra', 'En 1961, cuando se construyó el Muro'],
            correct: 0,
            reveal: '¡En 2010! Durante décadas costó mucho encontrar la voluntad institucional para explicar bien este lugar tan concreto.'
          },
          architecture: {
            question: '¿Qué se conserva junto al edificio del centro de documentación?',
            options: ['Un tramo largo y original del Muro de Berlín', 'Un antiguo tanque soviético', 'Los restos de una catedral'],
            correct: 0,
            reveal: '¡Un tramo original del Muro! Este solar formaba parte de la propia frontera durante la Guerra Fría, así que aún se conserva ese tramo en pie.'
          }
        }
      },
      {
        id: 'potsdamer-platz',
        name: { adult: 'Potsdamer Platz', kids: 'Potsdamer Platz — ¡La Plaza que Renació de la Nada! 🏙️' },
        subtitle: {
          adult: 'De plaza más transitada de Europa a tierra de nadie, y de vuelta a la vida',
          kids: '¡Una plaza que estuvo vacía 40 años y hoy está llena de rascacielos!'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'muro', order: 2 },
        coords: [52.5096, 13.3759],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Berlin_-_Potsdamer_Platz_-_2016.jpg/330px-Berlin_-_Potsdamer_Platz_-_2016.jpg',
        audio: { duration: 140, title: { adult: 'Audioguía: Potsdamer Platz', kids: '¡Aventura Sonora: La Plaza que Renació de la Nada!' } },
        visitInfo: {
          hours: { adult: 'Acceso libre las 24 horas; es una plaza y zona comercial al aire libre.', kids: '¡Se puede visitar a cualquier hora!' },
          price: { adult: 'Gratis pasear; el mirador de la Torre Kollhoff y otras atracciones tienen entrada de pago.', kids: '¡Gratis pasear! Solo se paga para subir a algún mirador.' }
        },
        tabs: {
          history: {
            adult: 'A comienzos del siglo XX, gracias a la llegada del ferrocarril, Potsdamer Platz se convirtió en la plaza más transitada de toda Europa, con la primera instalación de semáforos del continente para controlar el tráfico. La Segunda Guerra Mundial la dejó prácticamente arrasada, y en 1961 el trazado del Muro de Berlín la partió literalmente en dos, dejando la plaza entera convertida en un vacío urbano, tierra de nadie custodiada por ambos bandos durante casi 30 años.',
            kids: '¡Esta plaza fue en su día la más transitada de toda Europa! Pero la guerra la destruyó casi entera, y después el Muro de Berlín la partió justo por la mitad. Durante casi 30 años, aquí no vivía ni pasaba nadie.'
          },
          legends: {
            adult: 'Tras la caída del Muro en 1989, este enorme solar vacío en pleno centro de la ciudad se convirtió en objeto de uno de los mayores proyectos de construcción urbana de toda Europa durante los años 90: siete estudios de arquitectura internacionales, entre ellos los de Renzo Piano y Helmut Jahn, trabajaron de forma coordinada para levantar de la nada un distrito entero en apenas una década, un proceso tan intenso que la propia plaza llegó a ser conocida como "la mayor obra de Europa".',
            kids: 'Cuando cayó el Muro, este solar gigante y vacío se convirtió en una de las obras de construcción más grandes de toda Europa. Varios arquitectos famosos de distintos países trabajaron juntos para construir un barrio entero nuevo en solo diez años.'
          },
          architecture: {
            adult: 'El conjunto reúne estilos muy distintos: la Torre Kollhoff, de ladrillo rojo y 103 metros de altura, ofrece el mirador Panoramapunkt, accesible por el ascensor más rápido de Europa en el momento de su construcción; y el cercano Sony Center, obra del arquitecto Helmut Jahn, luce una espectacular cubierta acristalada en forma de tienda de campaña, inspirada en el monte Fuji japonés, que ilumina de colores cambiantes toda la plaza interior por la noche.',
            kids: '¡Hay dos edificios muy distintos y muy famosos! Una torre de ladrillo rojo con un mirador al que se sube en un ascensor rapidísimo, y un edificio con un techo de cristal en forma de tienda de campaña que se ilumina de colores por la noche.'
          },
          deepenFillers: {
            adult: [
              'En medio de la plaza se conserva una réplica de la histórica torre semafórica de los años 20, un pequeño homenaje al primer sistema de tráfico automatizado de Europa continental que existió aquí.',
              'El Weinhaus Huth, una antigua bodega de antes de la guerra, es el único edificio original que sobrevivió intacto en la plaza a los bombardeos, y hoy sigue en pie rodeado de rascacielos modernos.'
            ],
            kids: [
              '¡En medio de la plaza hay una copia de la torre de semáforos de hace 100 años! Recuerda que aquí estuvo el primer sistema de tráfico automático de toda Europa.',
              'Hay un edificio antiguo, una bodega de antes de la guerra, que es el único que sobrevivió entero a las bombas en toda la plaza. ¡Hoy está rodeado de rascacielos modernos!'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Qué fue esta plaza a comienzos del siglo XX?',
            options: ['La plaza más transitada de toda Europa', 'Un parque tranquilo', 'Un campo de cultivo'],
            correct: 0,
            reveal: '¡La más transitada de Europa! Tuvo incluso la primera instalación de semáforos de todo el continente. 🏙️'
          },
          legends: {
            question: '¿Qué pasó con esta plaza durante casi 30 años, tras 1961?',
            options: ['Quedó vacía, partida en dos por el Muro de Berlín', 'Se convirtió en un gran parque de atracciones', 'Se llenó de rascacielos'],
            correct: 0,
            reveal: '¡Quedó vacía! El Muro la partió literalmente en dos, y se convirtió en tierra de nadie hasta la reunificación en 1989.'
          },
          architecture: {
            question: '¿Qué forma tiene la espectacular cubierta de cristal del Sony Center?',
            options: ['Una tienda de campaña, inspirada en el monte Fuji', 'Una ola de mar', 'Una flor gigante'],
            correct: 0,
            reveal: '¡Una tienda de campaña! Se inspira en el monte Fuji de Japón y se ilumina de colores cambiantes por la noche.'
          }
        }
      },
      {
        id: 'muro-bernauer-strasse',
        name: { adult: 'Memorial del Muro de Berlín (Bernauer Straße)', kids: 'Memorial del Muro — ¡Aquí se Ve el Muro de Verdad! 🧱' },
        subtitle: {
          adult: 'El lugar que mejor conserva cómo era realmente la frontera entre las dos Alemanias',
          kids: '¡El sitio donde mejor se entiende cómo era el muro de verdad!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'muro', order: 3 },
        coords: [52.5350, 13.3890],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Mauer-Gedenkst%C3%A4tte.jpg/330px-Mauer-Gedenkst%C3%A4tte.jpg',
        audio: { duration: 155, title: { adult: 'Audioguía: Memorial del Muro de Berlín', kids: '¡Aventura Sonora: Aquí se Ve el Muro de Verdad!' } },
        visitInfo: {
          hours: { adult: 'Zona exterior y memorial: todos los días 8:00-22:00. Centro de documentación y mirador: martes a domingo 10:00-18:00.', kids: 'La zona exterior abre todos los días; el museo abre de martes a domingo.' },
          price: { adult: 'Gratis en todas sus zonas.', kids: '¡Gratis del todo!' },
          link: 'https://www.stiftung-berliner-mauer.de/en/berlin-wall-memorial/visit/information'
        },
        tabs: {
          history: {
            adult: 'La calle Bernauer Straße vivió algunas de las escenas más dramáticas de la construcción del Muro en 1961: la frontera entre los dos Berlines pasaba exactamente por la línea de las fachadas de esta calle, de modo que los edificios quedaban en Berlín Este mientras la propia acera pertenecía a Berlín Oeste. Numerosos vecinos intentaron huir saltando literalmente desde las ventanas de sus propios pisos, en algunos casos con ayuda de bomberos del lado occidental que sujetaban lonas para amortiguar la caída, hasta que las autoridades del Este tapiaron todas las ventanas y, finalmente, demolieron los edificios enteros para ampliar la zona de seguridad.',
            kids: '¡En esta calle, la frontera pasaba justo por la fachada de las casas! Algunos vecinos intentaron escapar saltando por la ventana de su propia casa hacia el otro lado, ¡a veces con bomberos abajo sujetando lonas para que no se hicieran daño! Después tapiaron todas las ventanas.'
          },
          legends: {
            adult: 'Este es el único tramo donde se conserva la estructura completa y original del sistema fronterizo, con sus dos muros paralelos —el interior y el exterior— separados por la llamada "franja de la muerte", una zona vigilada con torres de observación, luces y patrullas caninas donde decenas de personas murieron a tiros al intentar cruzar. La Capilla de la Reconciliación, un pequeño edificio ovalado de tapial construido en el año 2000, se levanta sobre el solar donde antes se alzaba una iglesia del siglo XIX que las autoridades de la RDA dinamitaron en 1985 por encontrarse, precisamente, en plena franja fronteriza.',
            kids: 'Este es el único trozo donde se conserva el sistema completo de la frontera de verdad: dos muros con un espacio vigilado en medio, con torres de vigilancia. Hay una capilla pequeña y curiosa, construida donde antes había una iglesia que el gobierno comunista destruyó, ¡porque estaba justo en medio de la frontera!'
          },
          architecture: {
            adult: 'El centro de documentación, un edificio moderno de acero corten oxidado diseñado para integrarse visualmente con el entorno, incluye una torre-mirador desde la que se observa, desde arriba, la disposición completa y original de ambos muros y la franja intermedia, algo que no es posible apreciar de la misma forma en ningún otro punto de la ciudad. A lo largo de toda la calle, unas siluetas metálicas marcan la ubicación exacta de las casas demolidas y los túneles de fuga que se excavaron bajo tierra.',
            kids: '¡Desde una torre-mirador puedes ver desde arriba cómo era la frontera completa, con los dos muros! Por toda la calle hay siluetas de metal que marcan dónde estaban las casas que derribaron, y hasta por dónde pasaban túneles secretos de escape.'
          },
          deepenFillers: {
            adult: [
              'En el memorial hay un muro curvo llamado "Ventana del Recuerdo" (Fenster des Gedenkens), con fotografías de las personas que murieron tratando de cruzar la frontera en este tramo, para que cada víctima tenga rostro y nombre propios.',
              'La Capilla de la Reconciliación, construida con tapial en el año 2000, celebra un breve servicio diario al mediodía en recuerdo de las víctimas del Muro.'
            ],
            kids: [
              'En el memorial hay una pared curva con fotos de las personas que no lograron cruzar a salvo, para recordarlas con su nombre y su cara, no solo como un número.',
              'En la pequeña capilla del memorial se hace cada día, al mediodía, un momento tranquilo para recordar a las personas afectadas por el Muro.'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Qué tenía de especial la frontera en la calle Bernauer Straße?',
            options: ['Pasaba justo por la fachada de las casas', 'Era la única calle sin vigilancia', 'Tenía un puente de madera'],
            correct: 0,
            reveal: '¡Pasaba por la fachada! Los edificios quedaban en el Este mientras la acera pertenecía al Oeste. Algunos vecinos escaparon saltando por la ventana. 🧱'
          },
          legends: {
            question: '¿Por qué es especial este tramo del Muro comparado con otros de la ciudad?',
            options: ['Conserva el sistema fronterizo completo y original', 'Es el tramo más largo que existió', 'Fue el primero en construirse'],
            correct: 0,
            reveal: '¡Conserva el sistema completo! Es el único lugar con los dos muros originales y la "franja de la muerte" entre ellos, tal y como era de verdad.'
          },
          architecture: {
            question: '¿Qué marcan las siluetas metálicas repartidas por toda la calle?',
            options: ['Dónde estaban las casas demolidas y los túneles de fuga', 'Dónde vivían personas famosas', 'Los límites del barrio actual'],
            correct: 0,
            reveal: '¡Casas demolidas y túneles secretos! Marcan la ubicación exacta de edificios que ya no existen y de los túneles que se excavaron para escapar.'
          }
        }
      },
      {
        id: 'mauerpark',
        name: { adult: 'Mauerpark', kids: 'Mauerpark — ¡El Parque del Karaoke Gigante! 🎤' },
        subtitle: {
          adult: 'Un parque construido sobre la antigua "franja de la muerte" del Muro',
          kids: '¡Un parque construido justo encima de donde estaba el Muro!'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'muro', order: 4 },
        coords: [52.5441, 13.4022],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Berlin_Mauerpark_2022.jpg/330px-Berlin_Mauerpark_2022.jpg',
        audio: { duration: 130, title: { adult: 'Audioguía: Mauerpark', kids: '¡Aventura Sonora: El Parque del Karaoke Gigante!' } },
        visitInfo: {
          hours: { adult: 'Acceso libre las 24 horas; el mercadillo de los domingos abre aproximadamente de 9:00 a 18:00.', kids: '¡El parque se puede visitar siempre! El mercadillo solo abre los domingos.' },
          price: { adult: 'Gratis; el mercadillo y el karaoke no cobran entrada.', kids: '¡Gratis del todo!' }
        },
        tabs: {
          history: {
            adult: 'El nombre "Mauerpark" significa literalmente "parque del muro", y no es casualidad: este terreno, hoy uno de los parques más populares de Berlín, ocupaba antes buena parte de la llamada "franja de la muerte", la tierra de nadie vigilada entre los dos muros que dividían la ciudad. Tras la reunificación, el espacio permaneció baldío durante años hasta que se transformó en zona verde pública, inaugurada por fases entre 1994 y 2010.',
            kids: '¡"Mauerpark" significa "parque del muro"! Y es que este parque tan alegre está construido justo encima de donde antes vigilaban los soldados, en la zona más peligrosa de la frontera entre las dos Alemanias.'
          },
          legends: {
            adult: 'Cada domingo por la tarde, en el anfiteatro natural del parque se celebra desde 2009 el célebre "Bearpit Karaoke", una sesión de karaoke al aire libre completamente espontánea que arrancó cuando el irlandés Joe Hatchiban empezó a pasear con un altavoz portátil animando a la gente a cantar, y que hoy reúne a cientos de personas cada semana, entre cantantes y público, en uno de los espectáculos más genuinamente berlineses que existen. El mismo domingo, el parque acoge también uno de los mercadillos más grandes y variados de la ciudad, con unos 3.000 puestos de ropa vintage, objetos de la antigua RDA y comida callejera.',
            kids: '¡Cada domingo por la tarde, cientos de personas se juntan aquí para cantar karaoke al aire libre, sin ensayar nada! Empezó un señor irlandés que se paseaba con un altavoz animando a la gente. El mismo día también hay un mercadillo gigante, ¡con casi 3.000 puestos!'
          },
          architecture: {
            adult: 'El parque conserva junto a uno de sus laterales un pequeño tramo del Muro original, hoy convertido en muro libre para el grafiti legal, donde cualquier visitante puede pintar con espray sus propios diseños, en un contraste deliberado con la seriedad del Memorial de Bernauer Straße, situado a poca distancia. El diseño paisajístico combina praderas abiertas, un anfiteatro natural excavado en una ladera y pistas deportivas, aprovechando la topografía irregular que dejó la antigua frontera.',
            kids: '¡Aquí hay un trozo de muro donde SÍ está permitido pintar grafitis libremente! Cualquiera puede coger un espray y dejar su dibujo. El parque tiene también un anfiteatro natural en una cuesta, donde se sienta la gente a ver el karaoke.'
          },
          deepenFillers: {
            adult: [
              'El parque se ha ido ampliando por fases desde los años 90 hasta hoy, incorporando progresivamente antiguos terrenos ferroviarios y militares que quedaron abandonados tras la caída del Muro.',
              'Muy cerca del anfiteatro se alza un tobogán gigante en forma de dragón, uno de los juegos infantiles más fotografiados de Berlín, instalado ya en una de las fases más recientes del parque.'
            ],
            kids: [
              '¡El parque se ha ido haciendo cada vez más grande poco a poco desde los años 90! Antes había vías de tren y terrenos militares donde ahora hay césped.',
              '¡Cerca del anfiteatro hay un tobogán gigante con forma de dragón! Es uno de los juegos más fotografiados de todo Berlín. 🐉'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Qué significa el nombre "Mauerpark"?',
            options: ['"Parque del muro"', '"Parque de las flores"', '"Parque del oso"'],
            correct: 0,
            reveal: '¡"Parque del muro"! Este terreno formaba parte de la antigua "franja de la muerte" entre los dos muros que dividían Berlín. 🎤'
          },
          legends: {
            question: '¿Qué actividad muy famosa se celebra aquí cada domingo por la tarde?',
            options: ['Un karaoke al aire libre llamado "Bearpit Karaoke"', 'Un desfile de moda', 'Una carrera de bicicletas'],
            correct: 0,
            reveal: '¡El "Bearpit Karaoke"! Empezó con un solo hombre y un altavoz, y hoy reúne a cientos de personas cada domingo para cantar juntas al aire libre.'
          },
          architecture: {
            question: '¿Qué se puede hacer en el tramo de muro que se conserva en el parque?',
            options: ['Pintar grafitis libremente', 'Solo mirarlo, está prohibido tocarlo', 'Subirse encima con una escalera'],
            correct: 0,
            reveal: '¡Pintar grafitis! Es un muro libre para el arte urbano, donde cualquier visitante puede dejar su propio diseño con spray.'
          }
        }
      },
      {
        id: 'oberbaumbruecke-molecule-man',
        name: { adult: 'Puente de Oberbaum y Molecule Man', kids: 'Puente de Oberbaum — ¡Tres Gigantes de Metal sobre el Río! 🌉' },
        subtitle: {
          adult: 'El puente más bonito de Berlín, con una escultura gigante flotando en el río',
          kids: '¡Un puente precioso y tres figuras enormes de metal en medio del río!'
        },
        category: CATEGORIES.HIDDEN,
        essential: { route: 'muro', order: 6 },
        coords: [52.5017, 13.4444],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Oberbaumbr%C3%BCcke_mit_U-Bahn.jpg/330px-Oberbaumbr%C3%BCcke_mit_U-Bahn.jpg',
        audio: { duration: 140, title: { adult: 'Audioguía: Puente de Oberbaum y Molecule Man', kids: '¡Aventura Sonora: Tres Gigantes de Metal sobre el Río!' } },
        visitInfo: {
          hours: { adult: 'Acceso libre las 24 horas; es un puente y una escultura al aire libre.', kids: '¡Se puede ver a cualquier hora!' },
          price: { adult: 'Gratis.', kids: '¡Gratis!' }
        },
        tabs: {
          history: {
            adult: 'El primer puente en este punto, construido en 1724, era una sencilla barrera de madera donde los barcos pagaban un peaje de aduana antes de entrar en la ciudad; su nombre, "puente de la viga superior", recuerda precisamente esa función. El puente actual, de ladrillo rojo neogótico con dos torres almenadas que recuerdan a puertas de castillo medieval, se construyó entre 1894 y 1896 obra del arquitecto Otto Stahn, y durante la Guerra Fría se convirtió en uno de los pocos pasos peatonales autorizados entre Berlín Este y Berlín Oeste, aunque con controles fronterizos extremadamente estrictos.',
            kids: '¡El primer puente aquí era de madera, del año 1724, y los barcos pagaban un peaje al pasar! El puente rojo que ves hoy, con sus dos torres que parecen de castillo, se construyó hace más de 125 años. Durante la Guerra Fría, era uno de los pocos sitios por donde se podía cruzar caminando entre las dos partes de la ciudad.'
          },
          legends: {
            adult: 'En el río, justo entre este puente y el cercano puente de Elsen, se alza desde 1999 el "Molecule Man", una escultura de 30 metros de altura del artista estadounidense Jonathan Borofsky que representa tres siluetas humanas perforadas por miles de agujeros, inclinadas unas hacia otras hasta casi tocarse en el centro. Según el propio artista, los agujeros simbolizan las moléculas que compartimos todos los seres humanos, y la ubicación exacta de la obra, justo en el punto donde confluían los antiguos distritos de Kreuzberg, Friedrichshain y Treptow —uno occidental y dos orientales—, fue una elección deliberada como símbolo de reunificación.',
            kids: '¡En medio del río hay tres figuras gigantes de metal, de 30 metros de altura, llenas de agujeros! Según el artista que las hizo, los agujeros representan las moléculas que todos compartimos como seres humanos. Las puso justo donde antes se juntaban un barrio del oeste y dos del este, como símbolo de que la ciudad volvió a unirse.'
          },
          architecture: {
            adult: 'El puente combina dos niveles: uno inferior para tráfico rodado y peatonal, y uno superior por el que circula la línea U1 del metro de Berlín, una disposición poco habitual que convierte el cruce del puente en tren en una de las postales más fotografiadas de la ciudad. Sus torres góticas, inspiradas en la arquitectura del Ordenanza Teutónica, no tienen función defensiva real: son puramente decorativas, un capricho estético muy propio del gusto historicista alemán de finales del siglo XIX.',
            kids: '¡Este puente tiene dos pisos! Por abajo pasan coches y gente andando, y por arriba pasa un tren de metro, ¡así que puedes ver el tren cruzando el río por encima de tu cabeza! Sus torres parecen de castillo, pero son solo decorativas, no sirven para defenderse de nadie.'
          },
          deepenFillers: {
            adult: [
              'Durante los últimos días de la Segunda Guerra Mundial, en 1945, tropas alemanas en retirada volaron parte del puente para frenar el avance soviético; el tramo central se reconstruyó después con un diseño de acero visiblemente distinto del ladrillo original, una diferencia que aún hoy se aprecia a simple vista.',
              'Durante la división de la ciudad, el tramo central del puente se cerró casi por completo al tráfico y solo unos pocos peatones autorizados podían cruzarlo a pie, bajo estricta vigilancia.'
            ],
            kids: [
              '¡Al final de la Segunda Guerra Mundial, soldados alemanes hicieron explotar parte de este puente! Cuando lo repararon, pusieron un trozo de metal en el centro que se nota distinto del ladrillo antiguo.',
              'Durante muchos años el centro del puente estuvo casi cerrado: solo unas pocas personas podían cruzarlo caminando, y con mucha vigilancia.'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Para qué servía el primer puente que hubo en este lugar, en 1724?',
            options: ['Los barcos pagaban un peaje de aduana', 'Era solo decorativo', 'Servía de mercado de pescado'],
            correct: 0,
            reveal: '¡Un peaje de aduana! Los barcos pagaban antes de entrar en la ciudad. De ahí viene su nombre, "puente de la viga superior". 🌉'
          },
          legends: {
            question: '¿Qué representan, según el artista, los agujeros del Molecule Man?',
            options: ['Las moléculas que compartimos todos los seres humanos', 'Las balas de la guerra', 'Las estrellas del cielo'],
            correct: 0,
            reveal: '¡Las moléculas de todos los seres humanos! El artista eligió este punto a propósito, donde antes se juntaban un barrio del oeste y dos del este, como símbolo de reunificación.'
          },
          architecture: {
            question: '¿Qué tiene de especial este puente, con sus dos niveles?',
            options: ['Por arriba pasa el metro, por abajo coches y peatones', 'Solo se puede cruzar en barca', 'Cambia de altura según la marea del río'],
            correct: 0,
            reveal: '¡Tiene dos pisos! Por el nivel superior circula la línea U1 del metro, así que puedes ver el tren cruzando el río justo por encima.'
          }
        }
      },
      {
        id: 'markthalle-neun',
        name: { adult: 'Markthalle Neun', kids: 'Markthalle Neun — ¡El Mercado que Casi Desaparece! 🍔' },
        subtitle: {
          adult: 'Un mercado histórico de 1891, hoy templo del street food berlinés',
          kids: '¡Un mercado de hace más de 130 años, lleno de comida de todo el mundo!'
        },
        category: CATEGORIES.GASTRONOMY,
        coords: [52.5019, 13.4344],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Berlin%2C_Kreuzberg%2C_Eisenbahnstrasse_42-43%2C_Markthalle_IX.jpg/330px-Berlin%2C_Kreuzberg%2C_Eisenbahnstrasse_42-43%2C_Markthalle_IX.jpg',
        audio: { duration: 135, title: { adult: 'Audioguía: Markthalle Neun', kids: '¡Aventura Sonora: El Mercado que Casi Desaparece!' } },
        visitInfo: {
          hours: { adult: 'Mercado general: lunes a sábado, horario variable según puesto. "Street Food Thursday": jueves 17:00-22:00.', kids: 'Abre casi todos los días. ¡Los jueves por la tarde-noche hay comida callejera de todo el mundo!' },
          price: { adult: 'Gratis entrar; solo se paga lo que compres.', kids: 'Entrar es gratis, ¡solo se paga lo que quieras comer!' },
          link: 'https://markthalleneun.de/en/'
        },
        tabs: {
          history: {
            adult: 'Inaugurado en 1891, este mercado de hierro y ladrillo fue uno de los muchos mercados cubiertos que se construyeron en Berlín a finales del siglo XIX para modernizar el comercio de alimentos. Con el paso de las décadas fue perdiendo actividad, y en 2011 estuvo a punto de venderse a un inversor privado que planeaba derribarlo para construir un supermercado genérico, hasta que tres vecinos del barrio, Florian Niedermeier, Bernd Maier y Nikolaus Driessen, se organizaron para comprarlo ellos mismos y reabrirlo, exactamente 120 años después de su inauguración original.',
            kids: '¡Este mercado se abrió hace más de 130 años! Con el tiempo fue quedándose casi vacío, y en 2011 estuvo a punto de convertirse en un supermercado cualquiera. Por suerte, tres vecinos del barrio se unieron para comprarlo y salvarlo, ¡justo 120 años después de que se abriera por primera vez!'
          },
          legends: {
            adult: 'Desde 2013, cada jueves por la tarde el mercado se transforma en el "Street Food Thursday", el primer mercado de comida callejera de toda Alemania, impulsado por Kavita Meelu, Anna Lai y Tobias Bürger: una plataforma pensada específicamente para cocineros sin restaurante propio pero con talento e ideas, que sirvió de modelo para decenas de mercados similares en otras ciudades alemanas y que hoy reúne cada semana propuestas gastronómicas de todo el mundo, mucho más allá de la clásica currywurst berlinesa.',
            kids: 'Desde 2013, cada jueves este mercado se llena de puestos de comida de todo el mundo, ¡fue el primer mercado de este tipo en toda Alemania! La idea era dar una oportunidad a cocineros con talento que todavía no tenían su propio restaurante.'
          },
          architecture: {
            adult: 'El edificio conserva su estructura original de columnas de hierro fundido y grandes claraboyas cenitales que inundan de luz natural todo el interior, un tipo de arquitectura industrial típica de los mercados europeos de finales del siglo XIX, muy similar en concepto a los mercados de abastos que se conservan en otras grandes capitales del continente.',
            kids: '¡Las columnas de hierro y las ventanas del techo son las originales, de hace más de 130 años! Dejan entrar mucha luz natural, algo típico de los mercados que se construían en esa época en toda Europa.'
          },
          deepenFillers: {
            adult: [
              'En su día hubo hasta 14 mercados cubiertos como este repartidos por Berlín, construidos en la misma oleada de modernización de finales del siglo XIX; hoy Markthalle Neun es uno de los pocos que sigue funcionando como mercado.',
              'Además del Street Food Thursday, el mercado organiza también ferias específicas dedicadas al queso, el chocolate o la cerveza artesanal a lo largo del año.'
            ],
            kids: [
              '¡Antes había hasta 14 mercados como este por toda la ciudad! Casi todos desaparecieron con el tiempo, y este es uno de los pocos que sigue abierto.',
              '¡Aquí no solo hay comida callejera los jueves! También organizan ferias especiales de queso, chocolate o cerveza artesanal durante el año. 🧀'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Qué estuvo a punto de pasarle a este mercado en 2011?',
            options: ['Iban a venderlo para construir un supermercado genérico', 'Iba a convertirse en un museo', 'Iban a demolerlo para hacer un parque'],
            correct: 0,
            reveal: '¡Iban a convertirlo en supermercado! Tres vecinos del barrio se unieron para comprarlo y salvarlo, reabriéndolo justo 120 años después de su inauguración. 🍔'
          },
          legends: {
            question: '¿Qué evento gastronómico muy famoso se celebra aquí cada jueves desde 2013?',
            options: ['"Street Food Thursday", el primero de su tipo en Alemania', 'Un concurso de repostería', 'Una feria de vinos'],
            correct: 0,
            reveal: '¡"Street Food Thursday"! Fue el primer mercado de comida callejera de toda Alemania, pensado para dar una oportunidad a cocineros sin restaurante propio.'
          },
          architecture: {
            question: '¿Qué deja entrar tanta luz natural dentro del mercado?',
            options: ['Grandes claraboyas en el techo', 'Paredes de cristal', 'No entra luz natural, todo es artificial'],
            correct: 0,
            reveal: '¡Grandes claraboyas cenitales! Junto con las columnas de hierro fundido, son parte de la estructura original de hace más de 130 años.'
          }
        }
      },
      {
        id: 'kadewe',
        name: { adult: 'KaDeWe', kids: 'KaDeWe — ¡El Palacio de las Compras! 🛍️' },
        subtitle: {
          adult: 'Los grandes almacenes más grandes de Europa continental',
          kids: '¡Unos grandes almacenes tan enormes que tienen su propio piso solo de comida!'
        },
        category: CATEGORIES.GASTRONOMY,
        coords: [52.5019, 13.3389],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Berlin%2C_Schoeneberg%2C_Tauentzienstrasse_21-24%2C_KaDeWe.jpg/330px-Berlin%2C_Schoeneberg%2C_Tauentzienstrasse_21-24%2C_KaDeWe.jpg',
        audio: { duration: 130, title: { adult: 'Audioguía: KaDeWe', kids: '¡Aventura Sonora: El Palacio de las Compras!' } },
        visitInfo: {
          hours: { adult: 'Lunes a sábado, aproximadamente 10:00-20:00 (horario puede variar por planta).', kids: 'Abre de lunes a sábado, ¡los domingos descansa!' },
          price: { adult: 'Entrada libre; solo se paga lo que compres.', kids: 'Entrar es gratis, ¡solo se paga lo que quieras llevarte!' }
        },
        tabs: {
          history: {
            adult: 'Sus siglas significan "Kaufhaus des Westens" ("grandes almacenes de Occidente"), y se inauguraron en 1907 por el comerciante Adolf Jandorf con una ambición clara: crear el gran almacén de referencia del oeste de Berlín. Gravemente dañado en la Segunda Guerra Mundial, se reconstruyó y reabrió en 1950, y durante la Guerra Fría se convirtió en un auténtico escaparate del "milagro económico" de Alemania Occidental, visitado incluso por muchos berlineses del Este que cruzaban al oeste, cuando podían, solo para verlo.',
            kids: 'Su nombre significa "grandes almacenes de Occidente", ¡y se abrió hace más de 100 años! Durante la Guerra Fría, cuando la ciudad estaba dividida, este edificio era como un escaparate de todo lo que se podía comprar en la parte occidental, algo que fascinaba a la gente del otro lado.'
          },
          legends: {
            adult: 'La sexta planta alberga la legendaria "Feinschmeckeretage", el "piso de los gourmets": con más de 30.000 productos y más de 30 puestos de degustación, es una de las mayores plantas de alimentación gourmet de Europa, con un mostrador de ostras y champán que se ha convertido en parada casi obligada para muchos visitantes. Una gran cúpula de cristal remata el edificio sobre esta planta, bajo la que se puede comer con vistas panorámicas a toda la ciudad.',
            kids: '¡La sexta planta es solo de comida, con más de 30.000 productos distintos! Puedes probar cosas antes de comprarlas en más de 30 puestos diferentes. Arriba del todo hay una cúpula de cristal desde donde se come con vistas a toda la ciudad.'
          },
          architecture: {
            adult: 'Con unos 60.000 metros cuadrados de superficie de ventas repartidos en ocho plantas, es el mayor centro comercial de la Europa continental, solo superado en todo el continente por Harrods en Londres. El edificio actual, reconstruido tras la guerra en un estilo funcional propio de los años 50, ha sido ampliado y modernizado varias veces desde entonces, la última con una espectacular reforma de fachada e interiores finalizada en 2019.',
            kids: '¡Con sus ocho plantas y 60.000 metros cuadrados, es el centro comercial más grande de toda la Europa continental! Solo unos grandes almacenes de Londres son todavía más grandes que este.'
          },
          deepenFillers: {
            adult: [
              'Su fundador, Adolf Jandorf, era judío y vendió el negocio en 1927; años después, ya bajo el régimen nazi, la empresa que entonces lo gestionaba pasó por el proceso de "arianización" forzosa que sufrieron numerosos comercios de propietarios judíos en toda Alemania.',
              'Cada Navidad, sus escaparates se convierten en una de las atracciones más visitadas de Berlín, con decoraciones e instalaciones mecánicas que se preparan con meses de antelación.'
            ],
            kids: [
              '¡Cada Navidad, los escaparates de esta tienda se llenan de decoraciones tan bonitas que la gente viene solo a verlos, aunque no vaya a comprar nada! 🎄',
              'En sus más de 100 años de historia, esta tienda ha pasado por muchos dueños distintos y ha tenido que reinventarse varias veces para seguir siendo la más grande de Europa.'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Qué significan las siglas "KaDeWe"?',
            options: ['"Grandes almacenes de Occidente"', '"Casa de las delicias"', '"Katedral del Este"'],
            correct: 0,
            reveal: '¡"Kaufhaus des Westens", grandes almacenes de Occidente! Se inauguraron en 1907 y durante la Guerra Fría fueron un escaparate del oeste de la ciudad. 🛍️'
          },
          legends: {
            question: '¿Qué hay de especial en la sexta planta de este edificio?',
            options: ['Una planta gourmet con más de 30.000 productos de comida', 'Una pista de patinaje sobre hielo', 'Un cine'],
            correct: 0,
            reveal: '¡Una planta gourmet enorme! Tiene más de 30 puestos de degustación y una cúpula de cristal con vistas a toda la ciudad.'
          },
          architecture: {
            question: '¿Cómo de grande es este centro comercial comparado con el resto de Europa?',
            options: ['Es el más grande de la Europa continental', 'Es de tamaño mediano', 'Es de los más pequeños de Alemania'],
            correct: 0,
            reveal: '¡El más grande de toda la Europa continental! Solo unos grandes almacenes de Londres son todavía más grandes.'
          }
        }
      },
      {
        id: 'curry-36',
        name: { adult: 'Curry 36', kids: 'Curry 36 — ¡La Cuna de la Currywurst! 🌭' },
        subtitle: {
          adult: 'Uno de los puestos de currywurst más famosos de Berlín, abierto casi toda la noche',
          kids: '¡El plato más típico de Berlín, en uno de sus puestos más famosos!'
        },
        category: CATEGORIES.GASTRONOMY,
        coords: [52.4933, 13.3903],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/20220430_currywurst.jpg/330px-20220430_currywurst.jpg',
        audio: { duration: 115, title: { adult: 'Audioguía: Curry 36', kids: '¡Aventura Sonora: La Cuna de la Currywurst!' } },
        visitInfo: {
          hours: { adult: 'Todos los días, hasta aproximadamente las 5:00 de la madrugada.', kids: '¡Abre hasta muy tarde, casi toda la noche!' },
          price: { adult: 'Una currywurst con patatas fritas cuesta en torno a 5-6€.', kids: 'Un plato de currywurst con patatas cuesta pocos euros.' }
        },
        tabs: {
          history: {
            adult: 'Este puesto nació en Kreuzberg como un pequeño carrito de madera en la entrada de un edificio, conocido entonces como "Wurstmaxe". En 1981, el matrimonio berlinés formado por Vera y Lutz Stenschke se hizo cargo del negocio y lo convirtió, con los años, en uno de los puestos de currywurst más reconocidos de toda la ciudad, hasta el punto de abrir varias sucursales, aunque la original en Mehringdamm sigue siendo, con diferencia, la más popular.',
            kids: '¡Este puesto empezó siendo un pequeño carrito de madera! En 1981, un matrimonio de Berlín se hizo cargo del negocio y, con los años, lo convirtió en uno de los puestos de currywurst más famosos de toda la ciudad.'
          },
          legends: {
            adult: 'La currywurst, la salchicha bañada en salsa de tomate especiada con curry, es posiblemente el plato callejero más emblemático de Berlín: se atribuye su invención a Herta Heuwer, una vendedora ambulante berlinesa que en 1949 mezcló salsa de tomate con curry en polvo, un condimento entonces exótico que consiguió, según cuenta la leyenda, de soldados británicos estacionados en la ciudad. Hoy se calcula que solo en este puesto se venden varios miles de currywurst cada día, con o sin piel según prefiera el cliente.',
            kids: '¡La currywurst la inventó una vendedora de Berlín en 1949! Mezcló salsa de tomate con curry en polvo, un ingrediente raro en esa época, que consiguió gracias a unos soldados. ¡Hoy en día se venden miles de currywurst cada día solo en este puesto!'
          },
          architecture: {
            adult: 'El local original es deliberadamente sencillo: un pequeño puesto callejero con barra alta para comer de pie, sin apenas asientos, en línea con la tradición del "Imbiss" alemán, el puesto de comida rápida pensado para un consumo veloz. Su salsa casera, elaborada con un 87% de puré de tomate y una mezcla propia de especias, es la clave de su fama y se guarda como secreto comercial.',
            kids: '¡Es un puesto muy sencillo, para comer de pie y rápido, como es tradición en Alemania! Su salsa secreta, hecha con mucho tomate y una mezcla especial de especias, es la razón por la que tanta gente viene aquí.'
          },
          deepenFillers: {
            adult: [
              'Berlín llegó a tener un Currywurst Museum dedicado enteramente a este plato, abierto entre 2009 y 2018 cerca de Checkpoint Charlie, aunque acabó cerrando por falta de rentabilidad.',
              'Por sus horarios de madrugada, el puesto se ha convertido en parada habitual de la vida nocturna berlinesa: no es raro ver colas de gente que sale de discotecas cercanas en busca de una currywurst antes de volver a casa.'
            ],
            kids: [
              '¡Berlín llegó a tener un museo dedicado solo a la currywurst! Estuvo abierto durante varios años, aunque ya ha cerrado.',
              'Como este puesto abre hasta la madrugada, mucha gente que sale de fiesta viene aquí a comer algo antes de irse a casa, ¡así que a veces hay colas muy largas de noche! 🌭'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Cómo empezó este famoso puesto de currywurst?',
            options: ['Como un pequeño carrito de madera', 'Como un restaurante de lujo', 'Como parte de un gran supermercado'],
            correct: 0,
            reveal: '¡Como un carrito de madera! En 1981, un matrimonio berlinés se hizo cargo del negocio y lo convirtió en uno de los más famosos de la ciudad. 🌭'
          },
          legends: {
            question: '¿Quién inventó la currywurst, según cuenta la leyenda?',
            options: ['Una vendedora ambulante berlinesa, en 1949', 'Un cocinero francés', 'Un rey de Prusia'],
            correct: 0,
            reveal: '¡Herta Heuwer, en 1949! Mezcló salsa de tomate con curry en polvo, un ingrediente exótico que consiguió gracias a soldados británicos.'
          },
          architecture: {
            question: '¿Cómo es tradicionalmente un "Imbiss" alemán, como este puesto?',
            options: ['Sencillo, para comer de pie y rápido', 'Un restaurante muy elegante con manteles', 'Un lugar solo para llevar comida a casa'],
            correct: 0,
            reveal: '¡Sencillo y rápido! Los Imbiss alemanes están pensados para comer de pie, sin apenas asientos, típico de la comida callejera del país.'
          }
        }
      },
      {
        id: 'tempelhofer-feld',
        name: { adult: 'Tempelhofer Feld', kids: 'Tempelhofer Feld — ¡El Aeropuerto Convertido en Parque! ✈️' },
        subtitle: {
          adult: 'El antiguo aeropuerto de Berlín, hoy el mayor parque urbano de la ciudad',
          kids: '¡Un aeropuerto de verdad convertido en el parque más grande de Berlín!'
        },
        category: CATEGORIES.HIDDEN,
        coords: [52.4728, 13.4034],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Berlin_-_Flughafen_Tempelhof_-_2016.jpg/330px-Berlin_-_Flughafen_Tempelhof_-_2016.jpg',
        audio: { duration: 145, title: { adult: 'Audioguía: Tempelhofer Feld', kids: '¡Aventura Sonora: El Aeropuerto Convertido en Parque!' } },
        visitInfo: {
          hours: { adult: 'El parque abre todos los días, aproximadamente desde el amanecer hasta el anochecer (horario exacto según temporada).', kids: '¡Se puede visitar todos los días, aunque cierra al anochecer!' },
          price: { adult: 'Gratis.', kids: '¡Gratis!' }
        },
        tabs: {
          history: {
            adult: 'Este terreno lleva más de 700 años de historia, y su nombre recuerda a los Caballeros Templarios, que tuvieron aquí una de sus sedes en la Edad Media; durante siglos funcionó como campo de instrucción militar y desfiles del ejército prusiano. En 1923 se convirtió oficialmente en aeropuerto, y hacia 1930 ya era el más transitado de toda Europa. Se hizo mundialmente célebre durante el Bloqueo de Berlín de 1948-1949, cuando aviones aliados realizaron aquí el histórico Puente Aéreo, aterrizando cada pocos minutos para abastecer de alimentos y combustible a la parte occidental de la ciudad, bloqueada por la Unión Soviética.',
            kids: '¡Este terreno tiene más de 700 años de historia! Primero fue un campo militar, y en 1923 se convirtió en aeropuerto. En 1948, cuando la Unión Soviética bloqueó Berlín Oeste, aviones de los países aliados aterrizaban aquí cada pocos minutos para traer comida, ¡en lo que se llamó el Puente Aéreo!'
          },
          legends: {
            adult: 'Tras el cierre definitivo del aeropuerto en 2008, el gobierno de la ciudad planeó urbanizar buena parte del terreno con nuevas viviendas, pero en 2014 los propios berlineses rechazaron ese plan en un referéndum popular, votando de forma abrumadora por conservar todo el espacio como parque público abierto, sin construcciones. Hoy, sus antiguas pistas de aterrizaje, de más de dos kilómetros de longitud, se han convertido en uno de los espacios más singulares de patinaje, ciclismo y windsurf urbano de toda Europa.',
            kids: '¡Cuando el aeropuerto cerró, el gobierno quería construir casas nuevas aquí! Pero en 2014 los propios habitantes de Berlín votaron en contra, ¡y ganaron! Por eso hoy sigue siendo un parque enorme y libre, con las antiguas pistas de aterrizaje usadas para patinar y montar en bici.'
          },
          architecture: {
            adult: 'La terminal del aeropuerto, obra del arquitecto nazi Ernst Sagebiel y terminada en 1941, fue en su día uno de los edificios más grandes del mundo por superficie construida, con una fachada curva de más de 1,2 kilómetros de longitud pensada, según algunos historiadores, para servir de escaparate monumental del régimen. Considerado hoy un ejemplo relevante de la arquitectura del período, tan controvertido como fascinante, el edificio se usa actualmente para eventos, ferias y, ocasionalmente, como alojamiento de emergencia.',
            kids: '¡El edificio del aeropuerto es gigantesco, con una fachada curva de más de un kilómetro de largo! Lo construyeron durante la época nazi para impresionar a todo el mundo. Hoy se usa para ferias, conciertos y otros eventos.'
          },
          deepenFillers: {
            adult: [
              'Durante el Puente Aéreo, los aviones recibieron el apodo cariñoso de "Rosinenbomber" (bombarderos de pasas), sobre todo después de que el piloto estadounidense Gail Halvorsen empezara a lanzar caramelos atados a pequeños paracaídas de pañuelo para los niños que esperaban junto a la pista.',
              'Hoy, en algunas zonas se ha dejado que el antiguo asfalto de las pistas se degrade de forma deliberada, permitiendo que la naturaleza recupere terreno y convirtiendo el parque en un refugio urbano para aves y plantas poco comunes en la ciudad.'
            ],
            kids: [
              '¡Durante el Puente Aéreo, los aviones se ganaron el apodo de "bombarderos de pasas"! Un piloto americano lanzaba caramelos atados a pequeños paracaídas de pañuelo para los niños de Berlín que esperaban junto a la pista. 🍬',
              'Hoy en día, en algunas zonas del parque dejan que la naturaleza crezca libremente sobre el asfalto viejo, ¡así que viven allí pájaros y plantas que casi no se ven en el resto de la ciudad!'
            ]
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Qué pasó aquí durante el Bloqueo de Berlín de 1948-1949?',
            options: ['Aviones aliados trajeron comida sin parar, el "Puente Aéreo"', 'Se libró una gran batalla', 'Se construyó el primer tramo del Muro'],
            correct: 0,
            reveal: '¡El famoso Puente Aéreo! Aviones aliados aterrizaban aquí cada pocos minutos para abastecer de comida a Berlín Oeste, bloqueado por la Unión Soviética. ✈️'
          },
          legends: {
            question: '¿Qué votaron los berlineses en el referéndum de 2014 sobre este terreno?',
            options: ['Conservarlo entero como parque público, sin construir', 'Construir viviendas nuevas', 'Convertirlo en un centro comercial'],
            correct: 0,
            reveal: '¡Votaron conservarlo como parque! Rechazaron de forma abrumadora el plan del gobierno de construir viviendas nuevas en el terreno.'
          },
          architecture: {
            question: '¿Cómo era de grande la fachada curva de la antigua terminal?',
            options: ['Más de 1,2 kilómetros de longitud', 'Unos 50 metros', 'Medio kilómetro'],
            correct: 0,
            reveal: '¡Más de 1,2 kilómetros! Fue en su día uno de los edificios más grandes del mundo por superficie construida.'
          }
        }
      }
];
