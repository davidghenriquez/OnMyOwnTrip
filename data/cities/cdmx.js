// Datos de CDMX — cargado bajo demanda por app.js (loadCityData) al elegir esta ciudad.
CITIES.cdmx.pois = [
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
        visitInfo: {
          hours: { adult: 'Abierta todos los días, aproximadamente de 8:00 a 20:00 (puede variar por celebraciones religiosas).', kids: 'Abre todos los días, por la mañana y por la tarde.' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
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
        },
        quiz: {
          'secret-history': {
            question: '¿Cuántos años tardó en construirse la Catedral Metropolitana?',
            options: ['Unos 20 años', '240 años', 'Unos 100 años'],
            correct: 1,
            reveal: '¡240 años! 🏗️ Se construyó entre 1573 y 1813, ¡a lo largo de once virreyes distintos!'
          },
          legends: {
            question: '¿Por qué dicen que el "Cristo del Veneno" se puso de color oscuro?',
            options: ['Por el humo de las velas', 'Porque absorbió un veneno para salvar a los fieles', 'Porque lo pintaron así a propósito'],
            correct: 1,
            reveal: '¡Según la leyenda, absorbió un veneno para salvar a la gente que lo besaba! 🙏 Desde entonces se oscureció y así se conserva.'
          },
          architecture: {
            question: '¿Cómo se llama la campana más grande de toda América Latina, que está en esta catedral?',
            options: ['La Doña María', 'La Campana de Oro', 'La Gigante'],
            correct: 0,
            reveal: '¡Se llama "La Doña María"! 🔔 Está entre las 25 campanas que guardan las dos torres, de 67 metros de altura.'
          }
        }
      },
      {
        id: 'palacio-nacional-cdmx',
        name: {
          adult: 'Palacio Nacional',
          kids: 'Palacio Nacional — El Palacio de la Campana de la Libertad 🔔🇲🇽'
        },
        subtitle: {
          adult: 'Sede del poder en México desde los tiempos de Moctezuma',
          kids: '¡Aquí vive la campana que anuncia la fiesta más grande de México!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'centro', order: 2 },
        coords: [19.4327, -99.1332],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Puerta_Principal_del_Palacio_Nacional_de_M%C3%A9xico_1.jpg/330px-Puerta_Principal_del_Palacio_Nacional_de_M%C3%A9xico_1.jpg',
        audio: {
          duration: 185,
          title: {
            adult: 'Audioguía: Palacio Nacional',
            kids: '¡Aventura Sonora: El Palacio de la Campana!'
          }
        },
        visitInfo: {
          hours: { adult: 'Martes a domingo 9:00-17:00. Cerrado los lunes. Conviene llegar temprano: los turnos de acceso suelen agotarse después de las 10:30.', kids: 'Abre de martes a domingo por la mañana y hasta media tarde. Los lunes está cerrado.' },
          price: { adult: 'Gratis, tanto para mexicanos como extranjeros. Solo hace falta enseñar una identificación oficial vigente (INE o pasaporte) para registrarte en la entrada.', kids: '¡Es gratis! Pero hay que enseñar una identificación (como el pasaporte) para poder entrar.' }
        },
        tabs: {
          history: {
            adult: 'El Palacio Nacional ocupa, en pleno lado oriental del Zócalo, el mismo solar donde se levantaban las "casas nuevas" de Moctezuma II y, tras la conquista, el palacio virreinal que Hernán Cortés construyó con piedras del recinto sagrado mexica. La Corona española lo compró en 1562 para convertirlo en residencia de los virreyes, y desde la Independencia ha sido sede del poder ejecutivo federal, con más de 200 metros de fachada de cantera roja que lo convierten en uno de los edificios históricos más largos de América.',
            kids: '¡Este palacio está construido justo donde vivía el emperador azteca Moctezuma, hace más de 500 años! Después los españoles hicieron aquí su propio palacio, usando piedras del templo azteca que había al lado. Desde entonces, este ha sido siempre el sitio desde donde se gobierna México. ¡Su fachada mide más de 200 metros, casi como dos campos de fútbol seguidos!'
          },
          legends: {
            adult: 'En el balcón central cuelga la Campana de Dolores, la misma que el cura Miguel Hidalgo hizo repicar en 1810 para llamar al pueblo a las armas contra el dominio español, el célebre "Grito de Dolores". Trasladada aquí en 1896, cada 15 de septiembre a medianoche el presidente de México la hace sonar de nuevo ante la plaza abarrotada, repitiendo el mismo grito que inició la Independencia. Se dice también que bajo el palacio se esconden túneles que conectarían con la Catedral y el Templo Mayor, usados antaño para escapes secretos del poder virreinal.',
            kids: '¡En el balcón principal cuelga la campana de verdad que un cura hizo sonar hace más de 200 años para empezar la lucha por la libertad de México! Cada 15 de septiembre a medianoche, el presidente la toca otra vez delante de miles de personas. ¡También cuentan que hay túneles secretos escondidos bajo el palacio!'
          },
          architecture: {
            adult: 'En la escalera principal y a lo largo del primer piso se despliega "La Historia de México", el mural más ambicioso de Diego Rivera: casi 3.000 años de historia narrados en un friso continuo que va desde las civilizaciones prehispánicas hasta la Revolución Mexicana, pintado entre 1929 y 1951. El edificio, de tres plantas alrededor de amplios patios interiores, combina la estructura virreinal original con ampliaciones del siglo XX, entre ellas el propio tercer piso, añadido en 1926.',
            kids: '¡Por dentro tiene una escalera gigante cubierta de pinturas que cuentan TODA la historia de México, desde los aztecas hasta hace cien años! Las pintó un artista muy famoso, Diego Rivera, y tardó más de 20 años en terminarlas. El edificio tiene patios enormes por dentro, ¡como un laberinto de historia!'
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Sobre qué se construyó el Palacio Nacional?',
            options: ['Sobre el antiguo palacio de Moctezuma', 'Sobre un campo vacío a las afueras', 'Sobre una fábrica colonial'],
            correct: 0,
            reveal: '¡Sobre el palacio de Moctezuma II! 🏛️ La Corona española lo compró en 1562 para convertirlo en residencia de los virreyes.'
          },
          legends: {
            question: '¿Qué campana histórica cuelga del balcón principal del Palacio Nacional?',
            options: ['La Campana de Dolores, del Grito de Independencia', 'Una campana traída de España', 'La campana de la Catedral'],
            correct: 0,
            reveal: '¡La Campana de Dolores! 🔔 Es la misma que hizo sonar el cura Miguel Hidalgo en 1810 para empezar la Independencia.'
          },
          architecture: {
            question: '¿Qué artista pintó el mural "La Historia de México" en la escalera principal?',
            options: ['Diego Rivera', 'Frida Kahlo', 'David Alfaro Siqueiros'],
            correct: 0,
            reveal: '¡Diego Rivera! 🎨 Tardó más de 20 años, entre 1929 y 1951, en terminar este friso de casi 3.000 años de historia.'
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
        essential: { route: 'centro', order: 3 },
        coords: [19.4350, -99.1314],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Partial_view_Templo_Mayor.jpg/330px-Partial_view_Templo_Mayor.jpg',
        audio: {
          duration: 180,
          title: {
            adult: 'Audioguía: Templo Mayor',
            kids: '¡Aventura Sonora: La Pirámide Escondida!'
          }
        },
        visitInfo: {
          hours: {
            adult: 'Martes a domingo 9:00-17:00. Cerrado los lunes.',
            kids: 'Abre de martes a domingo por la mañana y hasta media tarde. Los lunes está cerrado.'
          },
          price: {
            adult: '210 MXN para extranjeros sin residencia; 105 MXN para mexicanos y residentes. Gratis los domingos para nacionales y residentes, y siempre gratis para menores de 13, docentes y personas mayores.',
            kids: '210 pesos, pero es gratis si tienes menos de 13 años, ¡y también los domingos para quienes viven en México!'
          },
          link: 'https://ventadeboletosenlinea.inah.gob.mx/'
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
        },
        quiz: {
          'secret-history': {
            question: '¿Cuántos años estuvo el Templo Mayor escondido bajo tierra?',
            options: ['Unos 50 años', 'Casi 500 años', 'Solo 10 años'],
            correct: 1,
            reveal: '¡Casi 500 años! 🏺 Quedó sepultado bajo la ciudad colonial desde 1521 hasta que se descubrió en 1978.'
          },
          legends: {
            question: '¿Qué señal buscaban los aztecas para fundar su ciudad?',
            options: ['Un águila comiéndose una serpiente sobre un nopal', 'Una estrella fugaz', 'Un río de oro'],
            correct: 0,
            reveal: '¡Un águila devorando una serpiente sobre un nopal! 🦅🐍 La encontraron aquí mismo, y por eso hoy está en la bandera de México.'
          },
          architecture: {
            question: '¿Cómo se descubrió por accidente la piedra de la diosa Coyolxauhqui, en 1978?',
            options: ['Cavando para poner cables de luz', 'Construyendo el metro', 'Durante un terremoto'],
            correct: 0,
            reveal: '¡Cavando para poner cables de luz! ⚡ Ese hallazgo casual desató una excavación que sacó a la luz más de 200 ofrendas rituales.'
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
        essential: { route: 'centro', order: 5 },
        coords: [19.43527778, -99.14138889],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Bellas_Artes_01.jpg/330px-Bellas_Artes_01.jpg',
        audio: {
          duration: 178,
          title: {
            adult: 'Audioguía: Palacio de Bellas Artes',
            kids: '¡Aventura Sonora: El Palacio que Sube y Baja!'
          }
        },
        visitInfo: {
          hours: { adult: 'Martes a domingo 10:00-17:30. Cerrado los lunes.', kids: 'Abre de martes a domingo. Los lunes está cerrado.' },
          price: { adult: '90 MXN entrada general (acceso a los murales y exposiciones temporales). Gratis los domingos, y siempre gratis para estudiantes, docentes y personas mayores (INAPAM).', kids: '90 pesos, ¡pero es gratis los domingos!' }
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
        },
        quiz: {
          'secret-history': {
            question: '¿Cuántos años tardó en terminarse el Palacio de Bellas Artes?',
            options: ['5 años', '30 años', '100 años'],
            correct: 1,
            reveal: '¡30 años! 🏛️ Empezó en 1904 y no se inauguró hasta 1934, con una revolución de por medio que paró las obras.'
          },
          legends: {
            question: '¿Por qué hay que bajar escalones para entrar al Palacio hoy en día?',
            options: ['Porque siempre se diseñó así', 'Porque el edificio se ha hundido varios metros', 'Porque construyeron la calle más alta'],
            correct: 1,
            reveal: '¡Porque el edificio, hecho de pesado mármol, se ha hundido más de cuatro metros! ⬇️ Al principio se construyó al nivel de la calle.'
          },
          architecture: {
            question: '¿Qué forman casi un millón de piezas de cristal en el telón del teatro?',
            options: ['Dos volcanes', 'Un mapa de México', 'Un sol gigante'],
            correct: 0,
            reveal: '¡Los volcanes Popocatépetl e Iztaccíhuatl! 🌋 Es el telón de cristal de Tiffany más grande del mundo.'
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
        essential: { route: 'centro', order: 4 },
        coords: [19.43388889, -99.14055556],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Torre_Latinoamericana_Mexico_City.jpg/330px-Torre_Latinoamericana_Mexico_City.jpg',
        audio: {
          duration: 172,
          title: {
            adult: 'Audioguía: Torre Latinoamericana',
            kids: '¡Aventura Sonora: El Rascacielos que Baila!'
          }
        },
        visitInfo: {
          hours: {
            adult: 'Lunes a viernes 10:00-21:00; sábados y domingos 9:00-22:00.',
            kids: 'Abre todos los días, por la mañana, la tarde y hasta la noche.'
          },
          price: {
            adult: 'Mirador + Museo Bicentenario: 200 MXN adultos, 140 MXN niños de 4 a 11 años.',
            kids: '200 pesos, o solo 140 pesos si tienes entre 4 y 11 años.'
          },
          link: 'https://www.miradortorrelatino.com/boletos'
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
        },
        quiz: {
          'secret-history': {
            question: '¿Qué fue la Torre Latinoamericana durante más de dos décadas?',
            options: ['El edificio más alto de Latinoamérica', 'El primer rascacielos del mundo', 'Un palacio de gobierno'],
            correct: 0,
            reveal: '¡El edificio más alto de toda Latinoamérica! 🏆 182 metros y 44 pisos, inaugurada en 1956.'
          },
          legends: {
            question: '¿Qué le pasó a la torre durante el terremoto de 1957?',
            options: ['Se derrumbó por completo', 'Apenas sufrió daños', 'Se tuvo que cerrar para siempre'],
            correct: 1,
            reveal: '¡Apenas sufrió daños! 🌎 Osciló sin romperse mientras otros edificios caían, y desde entonces la llaman la torre "invencible".'
          },
          architecture: {
            question: '¿Hasta qué profundidad llegan las patas de cemento que sostienen la torre?',
            options: ['33 metros', '5 metros', '100 metros'],
            correct: 0,
            reveal: '¡33 metros! 🦵 361 pilotes clavados hasta encontrar roca firme, para que el edificio "flote" y se mueva en los terremotos en vez de romperse.'
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
        visitInfo: {
          hours: {
            adult: 'Martes a domingo 9:00-17:00. Cerrado los lunes.',
            kids: 'Abre de martes a domingo por la mañana y hasta media tarde. Los lunes está cerrado.'
          },
          price: {
            adult: '210 MXN para extranjeros sin residencia; 105 MXN para mexicanos y residentes. Gratis para menores de 13, mayores de 60, docentes y personas con discapacidad.',
            kids: '210 pesos, pero es gratis si tienes menos de 13 años o más de 60.'
          },
          link: 'https://ventadeboletosenlinea.inah.gob.mx/'
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
        },
        quiz: {
          'secret-history': {
            question: '¿Qué es el Castillo de Chapultepec en todo el continente americano?',
            options: ['El único castillo de auténtico uso real', 'El museo más grande', 'El edificio más alto'],
            correct: 0,
            reveal: '¡El único castillo de uso real que ha existido en América! 👑 Fue residencia del emperador Maximiliano y luego de varios presidentes.'
          },
          legends: {
            question: 'Según la leyenda, ¿qué hizo el cadete Juan Escutia antes de rendirse a los invasores?',
            options: ['Escondió el tesoro del castillo', 'Se envolvió en la bandera de México y saltó al vacío', 'Escapó por un túnel secreto'],
            correct: 1,
            reveal: '¡Se envolvió en la bandera y saltó! 🇲🇽 Es la leyenda de los Niños Héroes, cadetes que resistieron hasta el final en 1847.'
          },
          architecture: {
            question: '¿Cómo se llama el famoso balcón del castillo desde donde se ve toda la ciudad?',
            options: ['El Balcón del Emperador', 'El Mirador Azteca', 'La Terraza Imperial'],
            correct: 0,
            reveal: '¡El Balcón del Emperador! 🏰 Desde ahí se ve el Paseo de la Reforma extendiéndose hacia el horizonte.'
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
        visitInfo: {
          hours: {
            adult: 'Martes, jueves a domingo 10:00-18:00; miércoles 11:00-18:00. Jueves también horario nocturno "Noches Azules" hasta las 21:00.',
            kids: 'Abre de martes a domingo. Los jueves se puede visitar hasta la noche.'
          },
          price: {
            adult: '320 MXN entrada general, con descuentos para residentes, estudiantes y mayores. Gratis para menores de 6 años. La compra es únicamente en línea, con horario asignado: no se vende en taquilla.',
            kids: '320 pesos, pero gratis si tienes menos de 6 años. ¡Ojo! Solo se compra por internet, no se puede pagar en la puerta.'
          },
          link: 'https://boletos.museofridakahlo.org.mx/es/tickets/museo-frida-kahlo-cdmx'
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
        },
        quiz: {
          'secret-history': {
            question: '¿Quién construyó la Casa Azul?',
            options: ['Guillermo Kahlo, el padre de Frida', 'Diego Rivera', 'El gobierno de México'],
            correct: 0,
            reveal: '¡Guillermo Kahlo, el padre de Frida! 📸 La construyó en 1904, y aquí nació y murió su hija.'
          },
          legends: {
            question: '¿Con qué forma es la urna donde están guardadas las cenizas de Frida?',
            options: ['Forma de mariposa', 'Forma de sapo prehispánico', 'Forma de corazón'],
            correct: 1,
            reveal: '¡Forma de sapo prehispánico! 🐸 Así lo pidió ella misma, y sigue en su antigua habitación.'
          },
          architecture: {
            question: '¿De qué color están pintados los muros exteriores de la Casa Azul?',
            options: ['Azul cobalto', 'Verde esmeralda', 'Amarillo mostaza'],
            correct: 0,
            reveal: '¡Azul cobalto, o "azul añil"! 💙 Un color tradicional mexicano que le da nombre a toda la casa.'
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
        visitInfo: {
          hours: { adult: 'Los embarcaderos suelen operar en horario diurno, aproximadamente de 9:00 a 18:00.', kids: 'Se puede pasear en trajinera durante el día.' },
          price: { adult: 'No es una "entrada": se renta la trajinera completa, a razón de 750 MXN por hora (tarifa oficial 2026), para hasta 18 personas por barca.', kids: 'No se paga por persona: se alquila la barca entera, ¡y pueden ir hasta 18 personas juntas!' }
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
        },
        quiz: {
          'secret-history': {
            question: '¿Qué son las "chinampas" que se cultivaban en Xochimilco?',
            options: ['Islas artificiales de tierra fértil flotante', 'Barcos de pesca', 'Templos aztecas'],
            correct: 0,
            reveal: '¡Islas artificiales flotantes! 🌊 Este sistema agrícola llegó a alimentar a toda la ciudad de Tenochtitlan.'
          },
          legends: {
            question: '¿Cómo se llama el espíritu que, según la leyenda, llora junto a los canales buscando a sus hijos?',
            options: ['La Llorona', 'La Catrina', 'La Sirena del Lago'],
            correct: 0,
            reveal: '¡La Llorona! 👻 Dicen que su lamento todavía se escucha en las noches de niebla sobre los canales.'
          },
          architecture: {
            question: '¿Cómo se llaman las coloridas embarcaciones de madera que recorren los canales?',
            options: ['Trajineras', 'Góndolas', 'Piraguas'],
            correct: 0,
            reveal: '¡Trajineras! 🚣‍♀️ Cada una lleva pintado un nombre de mujer y va decorada con arcos florales.'
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
        visitInfo: {
          hours: { adult: 'Abierto todos los días, en torno a 9:00-19:00 (algunos puestos cierran antes o abren más tarde).', kids: 'Abre todos los días, por la mañana y por la tarde.' },
          price: { adult: 'Gratis entrar; solo se paga lo que compres.', kids: 'Entrar es gratis, ¡solo se paga lo que compres!' }
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
        },
        quiz: {
          'secret-history': {
            question: '¿En qué año abrió sus puertas el Mercado de Coyoacán?',
            options: ['1921', '1850', '1990'],
            correct: 0,
            reveal: '¡En 1921! 🏪 Aunque el edificio que ves hoy es de 1956, cuando se modernizaron los mercados públicos de la ciudad.'
          },
          legends: {
            question: '¿Cómo se transmite, según la leyenda, el secreto de las mejores tostadas del mercado?',
            options: ['Se vende en un libro de recetas', 'De madres a hijas, en susurros', 'Lo publican cada año en internet'],
            correct: 1,
            reveal: '¡De madres a hijas, en susurros! 🤫 Dicen que ningún puesto ha logrado copiar la receta exacta de su vecino.'
          },
          architecture: {
            question: '¿Cómo es el edificio del Mercado de Coyoacán?',
            options: ['Rectangular, de dos alturas', 'Circular, de un solo piso', 'Una torre de cristal'],
            correct: 0,
            reveal: '¡Rectangular y de dos alturas! 🏢 Con pasillos estrechos típicos de los mercados populares mexicanos de mediados del siglo XX.'
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
        essential: { route: 'centro', order: 6 },
        coords: [19.43555556, -99.14388889],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Alameda_Central_desde_el_aire_1.jpg/330px-Alameda_Central_desde_el_aire_1.jpg',
        audio: {
          duration: 150,
          title: {
            adult: 'Audioguía: Alameda Central',
            kids: '¡Aventura Sonora: El Parque de las Fuentes de Piedra!'
          }
        },
        visitInfo: {
          hours: { adult: 'Acceso libre, parque público abierto en horario diurno (aproximadamente 6:00-22:00).', kids: '¡Se puede visitar en cualquier momento del día!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
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
        },
        quiz: {
          'secret-history': {
            question: '¿Qué es la Alameda Central en todo el continente americano?',
            options: ['El parque público más antiguo de América', 'El parque más grande del mundo', 'El primer zoológico de México'],
            correct: 0,
            reveal: '¡El parque público más antiguo de América! 🌳 Se creó en 1592, hace más de 400 años.'
          },
          legends: {
            question: '¿Qué pintor incluyó su propio rostro de niño en el famoso mural sobre este parque?',
            options: ['Diego Rivera', 'Frida Kahlo', 'David Alfaro Siqueiros'],
            correct: 0,
            reveal: '¡Diego Rivera! 🖼️ Se dibujó de niño junto a Frida Kahlo y La Catrina en "Sueño de una tarde dominical en la Alameda Central".'
          },
          architecture: {
            question: '¿Cuántas fuentes neoclásicas tiene la Alameda Central?',
            options: ['Ocho', 'Tres', 'Veinte'],
            correct: 0,
            reveal: '¡Ocho fuentes! ⛲ Entre ellas la Fuente de Venus y la Fuente de Neptuno, instaladas hace más de 100 años.'
          }
        }
      },
      {
        id: 'angel-independencia',
        name: {
          adult: 'Ángel de la Independencia',
          kids: 'El Ángel de la Independencia — La Dama Dorada Voladora 👼✨'
        },
        subtitle: {
          adult: 'El monumento más fotografiado de Paseo de la Reforma',
          kids: '¡Una estatua dorada gigante que brilla como el sol!'
        },
        category: CATEGORIES.HISTORY,
        coords: [19.4270, -99.1677],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Angel_de_la_Independencia_Mexico_City.jpg/330px-Angel_de_la_Independencia_Mexico_City.jpg',
        audio: {
          duration: 170,
          title: {
            adult: 'Audioguía: Ángel de la Independencia',
            kids: '¡Aventura Sonora: La Dama Dorada Voladora!'
          }
        },
        visitInfo: {
          hours: { adult: 'La glorieta y el monumento se ven en cualquier momento; el interior y el mirador no están abiertos regularmente al público.', kids: 'Se puede ver siempre desde fuera, ¡pero no se puede subir dentro!' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
        },
        tabs: {
          history: {
            adult: 'Inaugurada el 16 de septiembre de 1910, en pleno centenario del inicio de la Independencia, esta columna conmemorativa fue un encargo del presidente Porfirio Díaz al arquitecto Antonio Rivas Mercado. Sus 36 metros de altura se alzan sobre la glorieta donde confluye el Paseo de la Reforma, la gran avenida trazada en el siglo XIX a imitación de los grandes bulevares europeos, y desde su inauguración se convirtió en el símbolo más reconocible de la capital.',
            kids: '¡Esta columna tan alta se inauguró hace más de 100 años, para celebrar 100 años desde que empezó la lucha por la libertad de México! Mide 36 metros, ¡como un edificio de 12 pisos! Está en una de las avenidas más famosas de la ciudad.'
          },
          legends: {
            adult: 'En su cúspide, una escultura de bronce dorado de casi siete metros representa a la Victoria alada, popularmente conocida como "El Ángel", sosteniendo una corona de laurel y una cadena rota, símbolo de la libertad conquistada. En 1957, un fuerte terremoto derribó la estatua desde lo alto, haciéndola añicos contra el suelo; se reconstruyó con el mismo molde y hoy es, además de monumento, un mausoleo que guarda los restos de héroes de la Independencia como Hidalgo, Morelos y Guerrero. Su base se ha convertido también en el punto de encuentro espontáneo de la ciudad para celebrar grandes victorias, especialmente las de la selección mexicana de fútbol.',
            kids: '¡Arriba del todo hay una estatua dorada de una diosa con alas, a la que todos llaman cariñosamente "El Ángel"! En 1957 un terremoto la tiró al suelo y se rompió en pedazos, ¡pero la reconstruyeron igual que antes! Dentro de la columna descansan los restos de varios héroes que lucharon por la libertad de México. Cuando la selección de fútbol gana un partido importante, ¡miles de personas vienen aquí a celebrar!'
          },
          architecture: {
            adult: 'La columna, de estilo neoclásico y recubierta de mármol, se apoya sobre un pedestal cuadrangular flanqueado por cuatro grupos escultóricos que representan la Ley, la Guerra, la Paz y la Justicia, obra de escultores como Enrique Alciati. En su interior, una escalera de caracol de 200 escalones —hoy cerrada al público por motivos de seguridad— ascendía hasta un mirador bajo los pies del Ángel, desde donde se contemplaba toda la avenida Reforma.',
            kids: '¡La columna está cubierta de mármol y tiene cuatro estatuas grandes en la base que representan ideas importantes, como la paz y la justicia! Por dentro tenía una escalera de caracol con 200 escalones que subía hasta arriba, cerca de los pies del Ángel, ¡para ver toda la avenida desde las alturas!'
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Para conmemorar qué se inauguró la columna en 1910?',
            options: ['El centenario del inicio de la Independencia', 'La fundación de la ciudad', 'El fin de la Revolución Mexicana'],
            correct: 0,
            reveal: '¡El centenario del inicio de la Independencia! 🎉 Se inauguró el 16 de septiembre de 1910, cien años después del Grito de Dolores.'
          },
          legends: {
            question: '¿Qué pasó con la estatua del Ángel durante el terremoto de 1957?',
            options: ['Se rompió en pedazos al caer', 'No sufrió ningún daño', 'Se movió pero no cayó'],
            correct: 0,
            reveal: '¡Se rompió en pedazos al caer desde lo alto! 😲 Se reconstruyó después con el mismo molde original.'
          },
          architecture: {
            question: '¿Cuántos escalones tenía la escalera de caracol que subía hasta el mirador?',
            options: ['200', '50', '1000'],
            correct: 0,
            reveal: '¡200 escalones! 🌀 Hoy está cerrada al público, pero antes llevaba hasta un mirador bajo los pies del Ángel.'
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
        visitInfo: {
          hours: { adult: 'El jardín es de acceso libre en cualquier momento; la parroquia suele abrir en horario de misa, normalmente por la mañana y por la tarde.', kids: 'El jardín se puede visitar siempre; la iglesia abre cuando hay misa.' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
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
        },
        quiz: {
          'secret-history': {
            question: '¿Quién cedió estos terrenos a los frailes franciscanos que construyeron la parroquia?',
            options: ['Hernán Cortés', 'Moctezuma', 'El rey de España'],
            correct: 0,
            reveal: '¡Hernán Cortés! ⛪ Se los cedió a solo ocho años de completada la conquista.'
          },
          legends: {
            question: '¿Qué dicen que trae buena suerte en el Jardín Centenario?',
            options: ['Frotar la cabeza de una de las ranas de bronce', 'Tocar la campana de la iglesia', 'Pisar una piedra especial'],
            correct: 0,
            reveal: '¡Frotar la cabeza de una rana! 🐸 Es un ritual que miles de visitantes repiten cada fin de semana.'
          },
          architecture: {
            question: '¿De qué siglo es el ábside plateresco de la parroquia?',
            options: ['Siglo XVI', 'Siglo XIX', 'Siglo XX'],
            correct: 0,
            reveal: '¡Del siglo XVI! 🕍 Las torres barrocas que ves hoy se añadieron mucho después, en 1804.'
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
        visitInfo: {
          hours: {
            adult: 'Martes a domingo 10:00-17:00. Cerrado los lunes.',
            kids: 'Abre de martes a domingo. Los lunes está cerrado.'
          },
          price: {
            adult: 'Entre 50 y 70 MXN, con descuentos para adultos mayores, docentes y estudiantes con credencial. No hay venta de entradas online: se compran en la recepción del museo.',
            kids: 'Entre 50 y 70 pesos. Se compra en la puerta, no por internet.'
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
        },
        quiz: {
          'secret-history': {
            question: '¿En qué otra casa de esta lista vivió Trotsky antes de mudarse a la que hoy es museo?',
            options: ['La Casa Azul de Frida Kahlo', 'El Castillo de Chapultepec', 'Un hotel del centro'],
            correct: 0,
            reveal: '¡En la Casa Azul! 🏠 Frida Kahlo y Diego Rivera gestionaron su asilo en México y lo alojaron allí primero.'
          },
          legends: {
            question: '¿Qué pasó en el primer atentado contra Trotsky, en mayo de 1940?',
            options: ['Ametrallaron los dormitorios pero él sobrevivió', 'Le robaron todos sus libros', 'Incendiaron la casa'],
            correct: 0,
            reveal: '¡Ametrallaron los dormitorios! 🔫 Se salvó escondiéndose bajo la cama; los agujeros de bala todavía se ven en las paredes.'
          },
          architecture: {
            question: '¿Qué le añadieron a la casa después de ese primer atentado?',
            options: ['Muros altísimos y torretas de vigilancia', 'Una piscina', 'Un segundo piso'],
            correct: 0,
            reveal: '¡Muros de más de tres metros y torretas de vigilancia! 🏰 La convirtieron en una auténtica fortaleza.'
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
        visitInfo: {
          hours: {
            adult: 'Martes a domingo 9:00-18:00. Cerrado los lunes.',
            kids: 'Abre de martes a domingo. Los lunes está cerrado.'
          },
          price: {
            adult: '210 MXN para extranjeros sin residencia; 105 MXN para mexicanos y residentes. Gratis los domingos para nacionales y residentes, y siempre gratis para mayores de 60, menores de 13 y docentes.',
            kids: '210 pesos, pero es gratis si tienes menos de 13 años, ¡y también los domingos para quienes viven en México!'
          },
          link: 'https://ventadeboletosenlinea.inah.gob.mx/'
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
        },
        quiz: {
          'secret-history': {
            question: '¿Cuántas salas tiene el Museo Nacional de Antropología?',
            options: ['23 salas', '5 salas', '100 salas'],
            correct: 0,
            reveal: '¡23 salas! 🏺 Cada una dedicada a una cultura prehispánica distinta: olmecas, mayas, mexicas y muchas más.'
          },
          legends: {
            question: '¿Qué es en realidad la Piedra del Sol, según los arqueólogos del museo?',
            options: ['Un monumento ceremonial dedicado al Sol', 'Un calendario que predice el futuro', 'Una mesa de sacrificios'],
            correct: 0,
            reveal: '¡Un monumento ceremonial dedicado al Sol! ☀️ No es un calendario funcional, aunque mucha gente lo crea.'
          },
          architecture: {
            question: '¿Cómo se llama la gran estructura que cubre el patio central del museo?',
            options: ['El Paraguas', 'La Sombrilla Azteca', 'El Techo del Sol'],
            correct: 0,
            reveal: '¡"El Paraguas"! 🌂 Se sostiene con una sola columna esculpida, y de ella cae una cortina de agua.'
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
        visitInfo: {
          hours: { adult: 'Todos los días 10:30-18:30.', kids: 'Abre todos los días, por la mañana y por la tarde.' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
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
        },
        quiz: {
          'secret-history': {
            question: '¿A quién está dedicado el Museo Soumaya?',
            options: ['A la esposa fallecida de Carlos Slim', 'A un expresidente de México', 'A un pintor famoso'],
            correct: 0,
            reveal: '¡A Soumaya Domit, la esposa de Carlos Slim! 🎟️ El museo, de entrada gratuita, lleva su nombre.'
          },
          legends: {
            question: '¿Con qué apodo conoce la gente a este edificio por su forma curva y brillante?',
            options: ['"La plancha"', '"El huevo"', '"La ballena"'],
            correct: 0,
            reveal: '¡"La plancha"! 🪞 Aunque cada persona ve una forma distinta cuando lo mira, ¡algunos hasta ven una bota gigante!'
          },
          architecture: {
            question: '¿Cuántos paneles hexagonales de aluminio cubren el edificio?',
            options: ['16.000', '1.000', '100.000'],
            correct: 0,
            reveal: '¡16.000 paneles! ✨ Forman una superficie curva sin una sola línea recta, como una armadura brillante.'
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
        visitInfo: {
          hours: {
            adult: 'Martes a viernes 10:00-17:00, sábados 10:00-19:00, domingos 10:00-17:00. Cerrado los lunes.',
            kids: 'Abre de martes a domingo. Los lunes está cerrado.'
          },
          price: {
            adult: '50 MXN general, 30 MXN residentes nacionales. Gratis los domingos, y siempre gratis para menores de 15, estudiantes, docentes y mayores.',
            kids: '50 pesos, ¡pero es gratis los domingos y si tienes menos de 15 años!'
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
        },
        quiz: {
          'secret-history': {
            question: '¿Qué colección alberga el Museo Jumex?',
            options: ['La mayor colección privada de arte contemporáneo de América Latina', 'Arte prehispánico exclusivamente', 'Solo fotografía antigua'],
            correct: 0,
            reveal: '¡La mayor colección privada de arte contemporáneo de toda América Latina! 🎨 Reunida por el empresario Eugenio López Alonso.'
          },
          legends: {
            question: '¿Por qué el arquitecto diseñó un edificio tan sobrio, comparado con su vecino el Soumaya?',
            options: ['Para no competir visualmente con el Soumaya', 'Porque no había presupuesto suficiente', 'Porque así lo pidió el gobierno'],
            correct: 0,
            reveal: '¡Para no competir con el brillo de su vecino! 📐 Una decisión consciente del arquitecto David Chipperfield.'
          },
          architecture: {
            question: '¿En qué material está revestido el Museo Jumex?',
            options: ['Piedra travertino blanca', 'Mármol negro', 'Vidrio espejado'],
            correct: 0,
            reveal: '¡Piedra travertino blanca! 🏢 Cinco niveles con salas diáfanas, sin columnas interiores, para exposiciones flexibles.'
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
        visitInfo: {
          hours: { adult: 'Todos los días, de 6:00 a 21:00.', kids: 'Abre todos los días, desde muy temprano hasta la noche.' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
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
        },
        quiz: {
          'secret-history': {
            question: '¿Por qué se construyó una nueva Basílica de Guadalupe, inaugurada en 1976?',
            options: ['Porque la antigua se estaba hundiendo', 'Porque se quemó la anterior', 'Porque era muy pequeña desde el principio'],
            correct: 0,
            reveal: '¡Porque la antigua se estaba hundiendo peligrosamente! ⛪ El terreno lacustre la hacía inclinarse cada vez más.'
          },
          legends: {
            question: '¿Qué cayó del manto de Juan Diego, según la tradición, cuando apareció la imagen de la Virgen?',
            options: ['Un ramo de rosas de Castilla', 'Monedas de oro', 'Plumas de quetzal'],
            correct: 0,
            reveal: '¡Rosas de Castilla! 🌹 Unas flores imposibles en pleno invierno mexicano, según cuenta la tradición.'
          },
          architecture: {
            question: '¿A cuántos fieles a la vez puede acoger la nueva basílica viendo bien el altar?',
            options: ['10.000', '1.000', '500'],
            correct: 0,
            reveal: '¡10.000 personas a la vez! ⭕ Su planta circular permite que todos vean el altar desde cualquier punto.'
          }
        }
      },
      {
        id: 'antigua-basilica-guadalupe',
        name: {
          adult: 'Antigua Basílica de Guadalupe',
          kids: 'Antigua Basílica de Guadalupe — El Templo que se Hunde de Verdad 📐'
        },
        subtitle: {
          adult: 'La basílica barroca que tuvieron que abandonar por su propio peso',
          kids: '¡Una iglesia tan inclinada que parece a punto de caerse!'
        },
        category: CATEGORIES.HISTORY,
        essential: { route: 'basilica', order: 2 },
        coords: [19.4841, -99.1171],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Antigua_Basilica_de_Guadalupe_18.JPG/330px-Antigua_Basilica_de_Guadalupe_18.JPG',
        audio: {
          duration: 165,
          title: {
            adult: 'Audioguía: Antigua Basílica de Guadalupe',
            kids: '¡Aventura Sonora: El Templo que se Hunde de Verdad!'
          }
        },
        visitInfo: {
          hours: { adult: 'Martes a domingo 10:00-17:00. Cerrado los lunes.', kids: 'Abre de martes a domingo. Los lunes está cerrada.' },
          price: { adult: '10 MXN entrada general, 5 MXN para estudiantes e INAPAM. Gratis para menores de 12 años.', kids: '10 pesos, ¡pero gratis si tienes menos de 12 años!' }
        },
        tabs: {
          history: {
            adult: 'Construida entre 1695 y 1709 según planos del arquitecto Pedro de Arrieta, esta basílica barroca fue durante más de dos siglos y medio el santuario oficial que custodiaba la imagen de la Virgen de Guadalupe, hasta que el hundimiento del terreno obligó a cerrarla al culto en 1974 y trasladar la imagen a la nueva basílica circular contigua, inaugurada en 1976. Desde 1999 alberga el Museo de la Basílica de Guadalupe, con una de las colecciones de arte virreinal religioso más importantes de México.',
            kids: '¡Esta iglesia fue la casa de la Virgen de Guadalupe durante más de 250 años, mucho antes de que existiera la iglesia nueva y redonda de al lado! Se construyó hace más de 300 años. Como se empezó a hundir demasiado, tuvieron que mudar la imagen a un templo nuevo en 1976. Hoy es un museo lleno de arte antiguo.'
          },
          legends: {
            adult: 'El mismo terreno lacustre que ha inclinado la Catedral Metropolitana y el Palacio de Bellas Artes actuó aquí de forma aún más dramática: sus cimientos se hundieron de manera tan desigual que las columnas y arcos interiores llegaron a desviarse visiblemente de la vertical, un fenómeno que puede apreciarse a simple vista recorriendo sus naves. Se cuenta que, durante los últimos años de culto activo, algunos fieles evitaban sentarse bajo ciertas bóvedas por miedo a que el propio edificio, ya tan inclinado, terminara por venirse abajo sobre ellos.',
            kids: '¡El mismo suelo blandito que hace que otros edificios de la ciudad se hundan, aquí hizo que las columnas de dentro se torcieran de verdad! Puedes verlo con tus propios ojos caminando por dentro. Cuentan que, cuando todavía se rezaba aquí, algunas personas evitaban sentarse bajo ciertos techos ¡por si acaso se caían!'
          },
          architecture: {
            adult: 'De planta de cruz latina con cúpula central y una espectacular fachada churrigueresca de cantera labrada, el templo conserva retablos dorados, pinturas coloniales y orfebrería religiosa de los siglos XVII y XVIII. Su torre y fachada, reforzadas en distintas ocasiones para frenar el hundimiento diferencial, muestran hoy una inclinación perceptible que convive, a escasos metros, con la moderna cubierta circular de cobre de la basílica que la sustituyó.',
            kids: '¡Por fuera tiene una fachada tallada en piedra llena de detalles, y por dentro guarda pinturas y objetos de oro de hace más de 300 años! La torre está claramente torcida, aunque la han reforzado varias veces para que no se hunda más. Al lado tiene la iglesia nueva y redonda, ¡las dos una junto a la otra!'
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Hasta qué año fue esta la basílica oficial que custodiaba la imagen de la Virgen de Guadalupe?',
            options: ['1974', '1810', '2000'],
            correct: 0,
            reveal: '¡Hasta 1974! ⛪ Ese año se cerró al culto por el hundimiento del terreno y la imagen se trasladó a la nueva basílica circular.'
          },
          legends: {
            question: '¿Qué se puede apreciar a simple vista dentro de la antigua basílica, por culpa del hundimiento del terreno?',
            options: ['Columnas y arcos claramente inclinados', 'Grietas de fuego', 'Estatuas que faltan'],
            correct: 0,
            reveal: '¡Columnas y arcos claramente inclinados! 📐 El mismo terreno lacustre que afecta a otros edificios del centro actuó aquí de forma aún más dramática.'
          },
          architecture: {
            question: '¿Qué alberga hoy el edificio de la antigua basílica?',
            options: ['El Museo de la Basílica de Guadalupe', 'Oficinas del gobierno', 'Un hotel'],
            correct: 0,
            reveal: '¡El Museo de la Basílica de Guadalupe! 🖼️ Desde 1999, con una de las colecciones de arte virreinal religioso más importantes de México.'
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
        essential: { route: 'basilica', order: 3 },
        coords: [19.48618333, -99.11598056],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Capilla_del_Cerrito_05.jpg/330px-Capilla_del_Cerrito_05.jpg',
        audio: {
          duration: 145,
          title: {
            adult: 'Audioguía: Capilla del Cerrito',
            kids: '¡Aventura Sonora: La Capilla de la Cima!'
          }
        },
        visitInfo: {
          hours: { adult: 'Accesible durante el horario general del conjunto de la Basílica, de 6:00 a 21:00.', kids: 'Se puede subir durante el mismo horario que la Basílica.' },
          price: { adult: 'Gratis, no requiere entrada.', kids: '¡Gratis! No hace falta pagar entrada.' }
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
        },
        quiz: {
          'secret-history': {
            question: '¿Qué recogió Juan Diego, según la tradición, en la cima de esta colina?',
            options: ['Las rosas de Castilla para el obispo', 'Agua bendita', 'Piedras sagradas'],
            correct: 0,
            reveal: '¡Las rosas de Castilla! 🌹 Se las llevó al obispo como prueba de la aparición de la Virgen.'
          },
          legends: {
            question: '¿A qué diosa se dice que ya se rendía culto en este cerro antes de la aparición de la Virgen?',
            options: ['A Tonantzin', 'A Coatlicue', 'A Xochiquetzal'],
            correct: 0,
            reveal: '¡A Tonantzin, diosa madre mexica! 🌵 Se cree que la devoción guadalupana se superpuso a este culto antiguo.'
          },
          architecture: {
            question: '¿Qué cuenta el mural de mosaico en el exterior de la capilla?',
            options: ['El momento en que Juan Diego recoge las rosas', 'La conquista de México', 'La fundación de Tenochtitlan'],
            correct: 0,
            reveal: '¡El momento en que Juan Diego recoge las rosas! 🎨 Está hecho con pequeñas piezas de mosaico.'
          }
        }
      }
];
