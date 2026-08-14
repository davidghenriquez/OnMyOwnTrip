// Datos de Peñíscola — cargado bajo demanda por app.js (loadCityData) al elegir esta ciudad.
CITIES.peniscola.pois = [
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
        essential: { route: 'main', order: 5 },
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
        },
        quiz: {
          'secret-history': {
            question: '¿Quién construyó este castillo a comienzos del siglo XIV?',
            options: ['Los caballeros templarios', 'Los romanos', 'Los piratas berberiscos'],
            correct: 0,
            reveal: '¡Los caballeros templarios! ⚔️ Lo levantaron sobre una roca metida en el mar, aprovechando restos de una fortaleza árabe anterior.'
          },
          legends: {
            question: '¿De qué dicho popular se dice que viene la tozudez del Papa Luna?',
            options: ['"Mantenerse en sus trece"', '"Írsele el santo al cielo"', '"Estar en las nubes"'],
            correct: 0,
            reveal: '¡"Mantenerse en sus trece"! 📜 Escribió trece razones para no rendirse, y nunca cambió de idea en ninguna.'
          },
          architecture: {
            question: '¿Qué serie de televisión muy famosa rodó escenas en este castillo?',
            options: ['Juego de Tronos', 'Vikingos', 'La Casa de Papel'],
            correct: 0,
            reveal: '¡Juego de Tronos! 🐉 Aquí se filmaron escenas de la ciudad de Meereen, y también de la película "El Cid" en 1961.'
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
        essential: { route: 'main', order: 3 },
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
            adult: 'Se cuenta que, durante una de las incursiones berberiscas del siglo XVI, los vigías de la muralla lograron avistar las velas enemigas al amanecer y hacer sonar las campanas a tiempo para que toda la población se refugiara dentro del recinto amurallado antes del desembarco. Desde entonces, la tradición local recuerda cada año ese aviso con un repique especial de campanas, como homenaje a los centinelas anónimos que salvaron el pueblo. Mucho más recientemente, en 2015, estas mismas calles y murallas sirvieron de escenario a la serie Juego de Tronos, representando la ciudad de Meereen en varios episodios de su sexta temporada.',
            kids: '¡Cuentan que un vigía vio llegar a los piratas justo al amanecer y tocó las campanas a tiempo para avisar a todo el pueblo! 🔔 Gracias a él, todos se pusieron a salvo dentro de la muralla. Cada año, las campanas suenan en su honor. ¡Menos mal que estaba atento! Y en el año 2015, estas mismas calles salieron en la famosa serie Juego de Tronos, haciendo de una ciudad lejana llamada Meereen. ¡A ver si reconoces algún rincón!'
          },
          architecture: {
            adult: 'El trazado sigue el sistema abaluartado propio del siglo XVI, con lienzos de piedra que se adaptan al perfil irregular de la roca y se refuerzan en los puntos más expuestos al oleaje. Varias puertas históricas, como el Portal Fosc o la Puerta de Santa María, permiten aún hoy el acceso al casco antiguo, cuyas calles estrechas y empinadas conservan el trazado medieval original casi sin modificaciones desde su construcción.',
            kids: '¡La muralla no es recta, sigue la forma de la roca! 🪨 Tiene varias puertas antiguas por donde se entra al pueblo, como el Portal Fosc. Las calles de dentro son estrechas y empinadas, ¡casi iguales a como eran hace cientos de años!'
          }
        },
        quiz: {
          'secret-history': {
            question: '¿Quién encargó reforzar las murallas de Peñíscola en el siglo XVI?',
            options: ['El rey Felipe II', 'Los caballeros templarios', 'El Papa Luna'],
            correct: 0,
            reveal: '¡El rey Felipe II! 👑 Se lo encargó a un ingeniero militar italiano para protegerse de los ataques piratas.'
          },
          legends: {
            question: '¿Cómo avisaron los vigías a la población de un ataque pirata al amanecer?',
            options: ['Tocando las campanas', 'Encendiendo hogueras', 'Gritando desde el castillo'],
            correct: 0,
            reveal: '¡Tocando las campanas! 🔔 Gracias a ese aviso, todo el pueblo pudo refugiarse dentro de la muralla a tiempo.'
          },
          architecture: {
            question: '¿Cómo se llama una de las puertas históricas por las que todavía se entra al casco antiguo?',
            options: ['El Portal Fosc', 'La Puerta del Sol', 'El Arco de Triunfo'],
            correct: 0,
            reveal: '¡El Portal Fosc! 🚪 Junto con la Puerta de Santa María, sigue dando acceso al pueblo hoy en día.'
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
        essential: { route: 'main', order: 7 },
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
        },
        quiz: {
          'secret-history': {
            question: '¿Para qué usaban antiguamente los pescadores el sonido de El Bufador?',
            options: ['Para saber que se acercaba mal tiempo', 'Para llamar a los peces', 'Para orientarse de noche'],
            correct: 0,
            reveal: '¡Para saber que se acercaba mal tiempo! ⛈️ Si el Bufador "soplaba" con fuerza, era señal segura de tormenta.'
          },
          legends: {
            question: 'Según la leyenda, ¿qué vive dentro de la grieta de El Bufador?',
            options: ['El aliento de un dragón marino', 'Un pulpo gigante', 'Un tesoro pirata'],
            correct: 0,
            reveal: '¡El aliento de un dragón marino! 🐉 Su resoplido furioso sería, según la tradición, un aviso para los pescadores.'
          },
          architecture: {
            question: '¿Qué es en realidad El Bufador?',
            options: ['Un accidente geológico natural', 'Una construcción templaria', 'Un túnel secreto del castillo'],
            correct: 0,
            reveal: '¡Un accidente geológico! 🪨 Una cavidad kárstica formada por la erosión del mar sobre la roca caliza, sin que nadie la construyera.'
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
        essential: { route: 'main', order: 2 },
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
        },
        quiz: {
          'secret-history': {
            question: '¿Qué significa "Peñíscola", según su origen romano?',
            options: ['"Casi isla"', '"Roca del rey"', '"Playa dorada"'],
            correct: 0,
            reveal: '¡"Casi isla"! 🏝️ Los romanos la llamaron "paene insula", porque la roca del castillo estuvo separada de tierra firme durante siglos.'
          },
          legends: {
            question: 'Según los pescadores más mayores, ¿qué podía pasar con el camino de arena en las peores tormentas?',
            options: ['Podía desaparecer por completo', 'Se volvía de otro color', 'Se llenaba de peces'],
            correct: 0,
            reveal: '¡Podía desaparecer por completo! 🌊 Y la roca del castillo volvía a quedarse sola en el mar, como en la Antigüedad.'
          },
          architecture: {
            question: '¿Cuántos kilómetros de arena tiene hoy la Playa Norte?',
            options: ['Cinco kilómetros', 'Un kilómetro', 'Veinte kilómetros'],
            correct: 0,
            reveal: '¡Cinco kilómetros! 🏖️ Es la playa más larga de toda la provincia de Castellón.'
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
        essential: { route: 'main', order: 4 },
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
        },
        quiz: {
          'secret-history': {
            question: '¿Quién ayudó a pagar la reconstrucción de esta iglesia tras un incendio en el siglo XV?',
            options: ['El papa Eugenio IV', 'El rey de Aragón', 'Los caballeros templarios'],
            correct: 0,
            reveal: '¡El papa Eugenio IV! ⛪ Concedió indulgencias especiales para financiar la reconstrucción, a petición de la reina María de Castilla.'
          },
          legends: {
            question: '¿Qué objetos relacionados con el Papa Luna se conservan en esta iglesia?',
            options: ['Objetos pontificios que le pertenecieron', 'Su corona real', 'Sus armas de guerra'],
            correct: 0,
            reveal: '¡Objetos pontificios que le pertenecieron! 👑 Aunque el Papa Luna vivía en el castillo, parte de su tesoro se guardaba aquí.'
          },
          architecture: {
            question: '¿De qué forma es la planta de esta iglesia?',
            options: ['De cruz latina', 'Circular', 'Cuadrada'],
            correct: 0,
            reveal: '¡De cruz latina! ⛪ Con cuatro tramos de nave y capillas laterales entre los contrafuertes.'
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
        essential: { route: 'main', order: 6 },
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
        },
        quiz: {
          'secret-history': {
            question: '¿Quién mandó construir la ermita actual, entre 1708 y 1714?',
            options: ['Sancho de Echevarría, gobernador militar', 'El Papa Luna', 'Los piratas berberiscos'],
            correct: 0,
            reveal: '¡Sancho de Echevarría! 🏰 La mandó construir en agradecimiento por la fidelidad del pueblo durante la Guerra de Sucesión.'
          },
          legends: {
            question: 'Según la tradición, ¿quién trajo la imagen de la Virgen hasta Peñíscola?',
            options: ['El apóstol Santiago', 'Los templarios', 'El Papa Luna'],
            correct: 0,
            reveal: '¡El apóstol Santiago, según la leyenda! ✨ Durante la dominación musulmana la escondieron en una cueva para protegerla.'
          },
          architecture: {
            question: '¿Qué motivos poco habituales para una ermita aparecen tallados junto a la puerta principal?',
            options: ['Cañones y tambores de guerra', 'Flores y ángeles', 'Peces y barcos'],
            correct: 0,
            reveal: '¡Cañones y tambores de guerra! ⚔️ Un detalle rarísimo, en vez de los símbolos religiosos que cabría esperar.'
          }
        }
      }
];
