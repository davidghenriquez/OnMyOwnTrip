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
          }
        }
      }
];
