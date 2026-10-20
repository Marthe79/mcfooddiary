/* MC Food Diary · cocina de Perú 🇵🇪. Formato y normas: recetas/GUIA-RECETAS.md */

MC_ADD_ING({
  aji_panca: ['Pasta de ají panca', 'despensa', 15, 'kg', 0, 'pimentón dulce con una ñora triturada'],
  leche_evaporada: ['Leche evaporada', 'lacteos', 3.5, 'l'],
  mazorca: ['Mazorca de maíz cocida', 'fruteria', 1, 'ud'],
  yuca: ['Yuca congelada', 'congelados', 3.5, 'kg', 0, 'patata'],
  mezcla_marisco: ['Mezcla de marisco congelada', 'congelados', 7, 'kg'],
  judiones: ['Judiones cocidos (bote)', 'despensa', 3.5, 'kg'],
  platano_macho: ['Plátano macho', 'fruteria', 2.5, 'kg'],
  guindilla_fresca: ['Guindilla fresca', 'fruteria', 10, 'kg']
});

MC_ADD('pe', [
{
    id: 'pe-ceviche', n: 'Ceviche de pescado', e: '🐟', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['lubina', 700], ['lima', 10], ['cebolla_morada', 150], ['aji_amarillo', 20], ['guindilla_fresca', 10], ['ajo', 1], ['cilantro', 1], ['boniato', 400], ['mazorca', 2], ['lechuga', 1], ['sal', 6]],
    m: {
      sin: [30, ['Cuece el boniato en rodajas 15 min y las mazorcas en trozos (puedes hacerlo con antelación). Usa pescado congelado previamente o comprado ya ultracongelado.', 'Corta el pescado sin piel en dados de 2 cm, sálalo y mézclalo con el ajo rallado, la pasta de ají y la guindilla picada.', 'Exprime las limas directamente sobre el pescado, sin apretar demasiado, añade cilantro picado y mezcla 2 min.', 'Agrega la cebolla en pluma fina y sirve al momento sobre lechuga con boniato y maíz.']]
    }
  },
  {
    id: 'pe-lomo-saltado', n: 'Lomo saltado', e: '🥩', tipo: 'comida', tags: ['carne', 'rapida'],
    ing: [['ternera_entrecot', 600], ['cebolla_morada', 200], ['tomate', 300], ['aji_amarillo', 20], ['ajo', 3], ['salsa_soja', 40], ['vinagre', 20], ['cilantro', 1], ['patata', 600], ['arroz_largo', 250], ['aceite', 40], ['aceite_girasol', 300], ['comino', 1], ['sal', 6]],
    m: {
      fuego: [30, ['Cuece el arroz y fríe la patata en bastones.', 'Saltea la carne en tiras con sal y comino en un wok muy caliente 2 min, por tandas. Reserva.', 'Saltea la cebolla en gajos, el ajo y la pasta de ají 1 min; añade el tomate en gajos, la soja y el vinagre 1 min.', 'Devuelve la carne, añade cilantro y las patatas fritas, mezcla y sirve con arroz.']],
      airfryer: [35, ['Cocina las patatas en bastones con una cucharada de aceite 20 min a 200 °C.', 'Saltea la carne y las verduras en wok como en la receta tradicional.', 'Mezcla con las patatas y sirve con arroz.']]
    }
  },
  {
    id: 'pe-aji-gallina', n: 'Ají de gallina', e: '🍗', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_pechuga', 700], ['aji_amarillo', 60], ['leche_evaporada', 300], ['pan_molde', 1], ['cebolla', 200], ['ajo', 3], ['nueces', 40], ['parmesano', 40], ['patata', 600], ['huevo', 2], ['aceitunas', 40], ['arroz_largo', 250], ['aceite', 40], ['sal', 6]],
    m: {
      fuego: [55, ['Cuece el pollo en agua con sal 20 min; desmenúzalo y guarda 300 ml del caldo. Cuece las patatas y los huevos.', 'Remoja 4 rebanadas de pan en la leche evaporada y tritúralo con las nueces.', 'Sofríe la cebolla y el ajo picados 8 min, añade el ají 2 min y luego la crema de pan y el caldo. Cuece 5 min removiendo.', 'Agrega el pollo y el queso, y sirve sobre patata cocida con arroz, huevo y aceitunas.']],
      robot: [50, ['Pon el pollo en el Varoma y 600 ml de agua con sal en el vaso: 25 min/Varoma/vel. 1. Desmenuza y reserva 300 ml de caldo.', 'Sofríe cebolla y ajo picados con aceite 6 min/120 °C/vel. 1. Añade el ají, el pan, la leche, las nueces y el caldo y tritura 30 seg/vel. 8.', 'Cuece 6 min/100 °C/vel. 2, añade pollo y queso: 2 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con patata cocida, arroz, huevo y aceitunas.']]
    }
  },
  {
    id: 'pe-arroz-con-pollo', n: 'Arroz con pollo a la peruana', e: '🍚', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_muslos', 900], ['arroz_largo', 350], ['cilantro', 2], ['espinacas', 80], ['aji_amarillo', 20], ['cerveza', 200], ['caldo_pollo', 600], ['guisantes', 120], ['zanahoria', 120], ['pimiento_rojo', 100], ['cebolla', 150], ['ajo', 3], ['aceite', 40], ['sal', 7]],
    m: {
      fuego: [60, ['Dora los contramuslos salados en una cazuela y resérvalos.', 'Tritura el cilantro y las espinacas con un poco de caldo. Sofríe la cebolla, el ajo y el ají 6 min y añade el puré verde 3 min.', 'Agrega la cerveza, el caldo, el pollo, la zanahoria en dados y los guisantes. Cuando hierva, añade el arroz.', 'Cuece tapado a fuego bajo 20 min y sirve con tiras de pimiento rojo.']],
      robot: [50, ['Tritura cilantro y espinacas con 200 ml de caldo 20 seg/vel. 8. Reserva.', 'Pica cebolla y ajo 3 seg/vel. 5 y sofríe con aceite y ají 6 min/120 °C/vel. 1. Añade el pollo: 5 min/120 °C/giro inverso/vel. cuchara.', 'Agrega el puré verde, la cerveza, el resto del caldo, la zanahoria, los guisantes y la sal: 10 min/100 °C/giro inverso/vel. cuchara.', 'Añade el arroz: 15 min/100 °C/giro inverso/vel. cuchara. Reposa 5 min.']]
    }
  },
  {
    id: 'pe-causa-atun', n: 'Causa limeña de atún', e: '🥔', tipo: 'cena', tags: ['pescado'],
    ing: [['patata', 1000], ['aji_amarillo', 40], ['lima', 3], ['atun', 3], ['mayonesa', 120], ['cebolla_morada', 60], ['aguacate', 2], ['huevo', 2], ['aceitunas', 40], ['aceite', 50], ['sal', 7]],
    m: {
      fuego: [45, ['Cuece las patatas con piel 25 min, pélalas y pásalas por el pasapurés en caliente. Cuece los huevos 10 min.', 'Amasa el puré frío con la pasta de ají, el zumo de lima, el aceite y la sal.', 'Mezcla el atún escurrido con la mayonesa y la cebolla muy picada.', 'Monta capas en un molde: puré, atún, aguacate en láminas y puré. Decora con huevo y aceitunas y enfría 15 min.']],
      robot: [45, ['Pon las patatas peladas en trozos en el Varoma con 1 l de agua en el vaso: 30 min/Varoma/vel. 1.', 'Pásalas al vaso limpio con ají, lima, aceite y sal: 20 seg/vel. 3, ayudando con la espátula.', 'Monta las capas con el relleno de atún y aguacate y decora con huevo y aceitunas.']]
    }
  },
  {
    id: 'pe-papa-huancaina', n: 'Papa a la huancaína', e: '🥔', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['patata', 1000], ['aji_amarillo', 60], ['queso_fresco', 250], ['leche_evaporada', 200], ['pan_molde', 1], ['ajo', 1], ['huevo', 4], ['lechuga', 1], ['aceitunas', 50], ['aceite', 40], ['sal', 5]],
    m: {
      fuego: [30, ['Cuece las patatas 20 min y los huevos 10 min.', 'Tritura el queso, la pasta de ají, la leche evaporada, 2 rebanadas de pan, el ajo, el aceite y una pizca de sal hasta tener una salsa espesa y cremosa.', 'Corta las patatas en rodajas gruesas y colócalas sobre hojas de lechuga.', 'Cubre con la salsa y decora con huevo duro y aceitunas.']],
      robot: [30, ['Pon las patatas en el Varoma y los huevos en el cestillo con 1 l de agua: 25 min/Varoma/vel. 1.', 'Con el vaso limpio, tritura queso, ají, leche, pan, ajo, aceite y sal 40 seg/vel. 8.', 'Sirve las patatas en rodajas sobre lechuga, cubiertas de salsa, con huevo y aceitunas.']]
    }
  },
  {
    id: 'pe-seco-res', n: 'Seco de ternera con frejoles', e: '🍲', tipo: 'comida', tags: ['carne', 'legumbres'],
    ing: [['ternera_guisar', 800], ['cilantro', 2], ['cerveza', 330], ['aji_amarillo', 30], ['cebolla', 200], ['ajo', 4], ['zanahoria', 150], ['guisantes', 100], ['alubias', 400], ['arroz_largo', 250], ['comino', 1], ['aceite', 40], ['sal', 7]],
    m: {
      fuego: [120, ['Dora la carne en dados salada y resérvala.', 'Sofríe la cebolla y el ajo 8 min, añade el ají, el comino y el cilantro triturado con la cerveza.', 'Devuelve la carne con 300 ml de agua y cuece tapado 1 h 30 min. Añade zanahoria y guisantes los últimos 20 min.', 'Sirve con arroz y las alubias calentadas con un poco de sofrito.']],
      robot: [90, ['Tritura el cilantro con la cerveza 20 seg/vel. 8 y reserva.', 'Pica cebolla y ajo 3 seg/vel. 5 y sofríe con aceite, ají y comino 6 min/120 °C/vel. 1.', 'Añade la carne, el puré de cilantro, 150 ml de agua y la sal: 70 min/100 °C/giro inverso/vel. cuchara. Agrega zanahoria y guisantes los últimos 15 min.', 'Sirve con arroz y alubias calientes.']]
    }
  },
  {
    id: 'pe-tacu-tacu', n: 'Tacu tacu con huevo', e: '🍳', tipo: 'cena', tags: ['legumbres', 'vegetariano', 'rapida'],
    ing: [['arroz_largo', 200], ['alubias', 500], ['cebolla', 150], ['ajo', 3], ['aji_amarillo', 30], ['oregano', 1], ['huevo', 4], ['platano_macho', 400], ['tomate', 200], ['aceite', 50], ['sal', 5]],
    m: {
      fuego: [30, ['Cuece el arroz (o usa arroz de la víspera).', 'Sofríe la cebolla, el ajo y el ají 6 min. Añade las alubias chafadas, el arroz y el orégano y mezcla bien.', 'Dora la mezcla en una sartén con aceite, dándole forma de tortilla alargada, 4 min por lado.', 'Sirve con huevo frito, plátano frito y salsa criolla de cebolla y tomate.']],
      airfryer: [30, ['Prepara la mezcla de arroz y alubias y forma 4 tortas.', 'Píntalas con aceite y cocínalas 12 min a 200 °C con el plátano en rodajas al lado.', 'Sirve con huevo frito y salsa criolla.']]
    }
  },
  {
    id: 'pe-arroz-chaufa', n: 'Arroz chaufa de pollo', e: '🍳', tipo: 'cena', tags: ['carne', 'rapida', 'niños'],
    ing: [['arroz_largo', 300], ['pollo_pechuga', 400], ['huevo', 3], ['cebolleta', 3], ['pimiento_rojo', 100], ['jengibre', 15], ['ajo', 2], ['salsa_soja', 50], ['aceite_sesamo', 10], ['aceite_girasol', 40], ['sal', 3]],
    m: {
      fuego: [30, ['Cuece el arroz y déjalo enfriar (mejor del día anterior).', 'Haz una tortilla fina con los huevos y córtala en tiras.', 'Saltea el pollo en dados en el wok muy caliente 4 min; añade ajo, jengibre, pimiento y la parte blanca de la cebolleta 2 min.', 'Incorpora el arroz y la soja y saltea 3 min. Termina con la tortilla, la cebolleta verde y el aceite de sésamo.']]
    }
  },
  {
    id: 'pe-tallarines-verdes', n: 'Tallarines verdes con bistec', e: '🍝', tipo: 'comida', tags: ['carne'],
    ing: [['tallarines', 400], ['espinacas', 200], ['albahaca', 1], ['queso_fresco', 150], ['leche_evaporada', 150], ['nueces', 30], ['ajo', 2], ['cebolla', 80], ['ternera_filetes', 500], ['aceite', 50], ['sal', 6]],
    m: {
      fuego: [30, ['Escalda las espinacas y la albahaca 30 seg y enfríalas en agua con hielo.', 'Tritúralas con el queso, la leche evaporada, las nueces, el ajo, la cebolla sofrita y el aceite.', 'Cuece la pasta, escúrrela y mézclala con la salsa en la olla a fuego suave 2 min.', 'Sirve con los filetes hechos a la plancha.']],
      robot: [30, ['Sofríe la cebolla y el ajo con aceite 4 min/120 °C/vel. 1. Añade espinacas y albahaca 1 min/100 °C/vel. 1.', 'Agrega el queso, la leche y las nueces y tritura 40 seg/vel. 8.', 'Cuece la pasta aparte y mézclala con la salsa. Sirve con los filetes a la plancha.']]
    }
  },
  {
    id: 'pe-tallarines-rojos', n: 'Tallarines rojos con pollo', e: '🍝', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['tallarines', 400], ['pollo_muslos', 600], ['tomate_triturado', 500], ['aji_panca', 20], ['zanahoria', 100], ['cebolla', 150], ['ajo', 3], ['laurel', 2], ['oregano', 1], ['parmesano', 40], ['aceite', 40], ['sal', 6]],
    m: {
      fuego: [50, ['Dora los contramuslos troceados con sal y resérvalos.', 'Sofríe la cebolla, el ajo y la zanahoria rallada 8 min; añade el ají panca 2 min.', 'Agrega el tomate, el laurel, el orégano y el pollo con 150 ml de agua y cuece 25 min.', 'Mezcla con la pasta cocida y sirve con queso rallado.']],
      robot: [45, ['Pica cebolla, ajo y zanahoria 4 seg/vel. 5 y sofríe con aceite 7 min/120 °C/vel. 1. Añade el ají 1 min.', 'Agrega el pollo troceado, el tomate, las especias, 100 ml de agua y la sal: 25 min/100 °C/giro inverso/vel. cuchara.', 'Cuece la pasta aparte, mézclala con la salsa y sirve con queso.']]
    }
  },
  {
    id: 'pe-pollo-brasa', n: 'Pollo a la brasa', e: '🍗', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['pollo_entero', 1600], ['salsa_soja', 50], ['aji_panca', 30], ['cerveza', 100], ['ajo', 5], ['comino', 3], ['pimenton', 3], ['oregano', 2], ['lima', 2], ['patata', 1000], ['lechuga', 1], ['tomate', 200], ['aceite', 40], ['sal', 8]],
    m: {
      horno: [90, ['Tritura la soja, el ají panca, la cerveza, el ajo, las especias, el zumo de lima, el aceite y la sal. Adoba el pollo troceado al menos 2 h.', 'Hornea el pollo sobre una rejilla 55 min a 200 °C, dándole la vuelta a mitad y regándolo con el adobo.', 'Hornea a la vez las patatas en bastones, o fríelas.', 'Sirve con las patatas y ensalada de lechuga y tomate.']],
      airfryer: [70, ['Adoba el pollo como en la receta de horno.', 'Cocínalo en dos tandas 25 min a 190 °C, girándolo a mitad.', 'Cocina las patatas en bastones 20 min a 200 °C y sirve con ensalada.']]
    }
  },
  {
    id: 'pe-anticuchos', n: 'Anticuchos de ternera con papas', e: '🍢', tipo: 'cena', tags: ['carne'],
    ing: [['ternera_filetes', 700], ['aji_panca', 40], ['vinagre', 50], ['ajo', 4], ['comino', 2], ['oregano', 1], ['patata', 600], ['mazorca', 2], ['aceite', 40], ['sal', 6]],
    m: {
      fuego: [40, ['Corta la carne en dados de 3 cm y adóbala con el ají, el vinagre, el ajo machacado, las especias, el aceite y la sal al menos 1 h.', 'Ensártala en brochetas.', 'Cocínalas en una plancha muy caliente 3 min por lado, pintándolas con el adobo.', 'Sirve con patatas cocidas y doradas y trozos de mazorca.']],
      horno: [40, ['Adoba y ensarta la carne como en la receta tradicional.', 'Ásala en la parte alta del horno con grill a 230 °C, 10 min, girando a mitad.', 'Sirve con patatas y mazorca.']],
      airfryer: [35, ['Adoba y ensarta la carne.', 'Cocina las brochetas 10 min a 200 °C, girándolas a mitad.', 'Sirve con patatas y mazorca.']]
    }
  },
  {
    id: 'pe-aguadito', n: 'Aguadito de pollo', e: '🍲', tipo: 'cena', tags: ['carne'],
    ing: [['pollo_muslos', 700], ['arroz', 150], ['cilantro', 2], ['aji_amarillo', 30], ['caldo_pollo', 1500], ['guisantes', 120], ['zanahoria', 120], ['pimiento_rojo', 100], ['patata', 300], ['cebolla', 120], ['ajo', 3], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [50, ['Dora el pollo troceado y resérvalo. Sofríe cebolla, ajo y ají 6 min.', 'Tritura el cilantro con un poco de caldo y añádelo al sofrito 2 min.', 'Agrega el caldo, el pollo, la patata en dados y la zanahoria y cuece 15 min.', 'Añade el arroz, los guisantes y el pimiento y cuece 15 min más. Debe quedar caldoso.']],
      robot: [45, ['Tritura cilantro con 200 ml de caldo 20 seg/vel. 8 y reserva.', 'Sofríe cebolla y ajo picados con aceite y ají 6 min/120 °C/vel. 1.', 'Añade el pollo, el puré verde, el resto del caldo, la patata, la zanahoria y la sal: 15 min/100 °C/giro inverso/vel. cuchara.', 'Agrega arroz, guisantes y pimiento: 15 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'pe-chupe-camarones', n: 'Chupe de gambas', e: '🦐', tipo: 'comida', tags: ['pescado'],
    ing: [['gambas', 500], ['caldo_pescado', 1200], ['patata', 400], ['arroz', 80], ['mazorca', 2], ['guisantes', 100], ['leche_evaporada', 200], ['queso_fresco', 120], ['huevo', 4], ['aji_panca', 20], ['cebolla', 150], ['ajo', 3], ['oregano', 1], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [45, ['Sofríe la cebolla, el ajo y el ají panca 8 min.', 'Añade el caldo, la patata en dados, el arroz y la mazorca en rodajas y cuece 15 min.', 'Incorpora los guisantes, las gambas y la leche evaporada y cuece 4 min.', 'Casca los huevos dentro, deja que cuajen 3 min y añade el queso en dados y el orégano. Sirve enseguida.']],
      robot: [40, ['Pica cebolla y ajo 3 seg/vel. 5 y sofríe con aceite y ají 6 min/120 °C/vel. 1.', 'Añade caldo, patata, arroz, mazorca y sal: 15 min/100 °C/giro inverso/vel. cuchara.', 'Agrega guisantes, gambas, leche y huevos batidos: 5 min/90 °C/giro inverso/vel. cuchara.', 'Sirve con el queso en dados y orégano.']]
    }
  },
  {
    id: 'pe-parihuela', n: 'Parihuela', e: '🦀', tipo: 'comida', tags: ['pescado'],
    ing: [['merluza', 400], ['mezcla_marisco', 400], ['mejillones', 500], ['caldo_pescado', 1200], ['tomate', 300], ['aji_panca', 30], ['aji_amarillo', 20], ['cebolla', 150], ['ajo', 4], ['vino_blanco', 100], ['cilantro', 1], ['aceite', 40], ['sal', 5]],
    m: {
      fuego: [40, ['Sofríe la cebolla, el ajo y el tomate picados 8 min con los dos ajíes.', 'Añade el vino 2 min y el caldo y cuece 10 min.', 'Incorpora la mezcla de marisco y los mejillones limpios 4 min, y el pescado en trozos 4 min más.', 'Sala y sirve con cilantro picado.']],
      robot: [40, ['Tritura cebolla, ajo y tomate 10 seg/vel. 5 y sofríe con aceite y ajíes 8 min/120 °C/vel. 1.', 'Añade vino y caldo: 10 min/100 °C/vel. 1.', 'Agrega marisco, mejillones y pescado: 8 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con cilantro.']]
    }
  },
  {
    id: 'pe-sudado-pescado', n: 'Sudado de pescado', e: '🐟', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['merluza', 800], ['tomate', 400], ['cebolla_morada', 200], ['aji_amarillo', 30], ['ajo', 3], ['cerveza', 150], ['cilantro', 1], ['lima', 1], ['yuca', 600], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [30, ['Cuece la yuca en agua con sal 20 min (o patata).', 'Sofríe el ajo y el ají 2 min. Pon encima el pescado salado y cúbrelo con la cebolla en gajos gruesos y el tomate en gajos.', 'Riega con la cerveza y un chorrito de lima, tapa y cuece 10 min a fuego medio.', 'Termina con cilantro y sirve con la yuca.']],
      robot: [30, ['Pon la yuca en trozos en el cestillo y 500 ml de agua con sal en el vaso.', 'Coloca el pescado con cebolla, tomate, ajo, ají y cerveza en el Varoma tapado: 20 min/Varoma/vel. 1.', 'Sirve con cilantro, lima y la yuca.']]
    }
  },
  {
    id: 'pe-pescado-macho', n: 'Pescado a lo macho', e: '🐟', tipo: 'comida', tags: ['pescado'],
    ing: [['merluza', 700], ['mezcla_marisco', 400], ['harina', 50], ['aji_amarillo', 30], ['aji_panca', 15], ['cebolla', 120], ['ajo', 3], ['vino_blanco', 100], ['leche_evaporada', 100], ['caldo_pescado', 300], ['arroz_largo', 250], ['aceite', 50], ['sal', 6]],
    m: {
      fuego: [40, ['Sala el pescado, enharínalo y dóralo en sartén 3 min por lado. Reserva.', 'Sofríe la cebolla y el ajo picados 5 min con los ajíes. Añade el vino y deja evaporar.', 'Agrega el caldo y la leche evaporada, cuece 5 min y añade el marisco 4 min.', 'Napa el pescado con la salsa y sirve con arroz blanco.']],
      horno: [40, ['Prepara la salsa con el marisco como en la receta tradicional.', 'Pon el pescado salado en una fuente, cúbrelo con la salsa y hornea 15 min a 190 °C.', 'Sirve con arroz.']]
    }
  },
  {
    id: 'pe-tiradito', n: 'Tiradito de salmón al ají amarillo', e: '🍣', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['salmon', 500], ['lima', 6], ['aji_amarillo', 30], ['jengibre', 10], ['ajo', 1], ['cebolleta', 2], ['maiz', 1], ['boniato', 400], ['cilantro', 1], ['sal', 4]],
    m: {
      sin: [25, ['Usa salmón previamente congelado. Córtalo en láminas finas y colócalas en una fuente.', 'Tritura el zumo de lima con la pasta de ají, el jengibre, el ajo y la sal.', 'Vierte la salsa sobre el pescado justo antes de servir.', 'Decora con cebolleta, cilantro y maíz y acompaña con boniato cocido (15 min en agua).']]
    }
  },
  {
    id: 'pe-arroz-mariscos', n: 'Arroz con mariscos', e: '🥘', tipo: 'comida', tags: ['pescado'],
    ing: [['arroz_largo', 350], ['mezcla_marisco', 600], ['gambas', 200], ['caldo_pescado', 800], ['aji_panca', 30], ['aji_amarillo', 20], ['pimiento_rojo', 120], ['guisantes', 100], ['cebolla', 150], ['ajo', 4], ['vino_blanco', 100], ['parmesano', 30], ['cilantro', 1], ['aceite', 40], ['sal', 6]],
    m: {
      fuego: [40, ['Saltea el marisco y las gambas 3 min en aceite y resérvalos.', 'Sofríe la cebolla, el ajo y el pimiento picados 6 min con los ajíes. Añade el vino.', 'Agrega el arroz, el caldo caliente y los guisantes y cuece 18 min. Debe quedar meloso.', 'Incorpora el marisco, el queso y el cilantro y sirve.']],
      robot: [40, ['Pica cebolla, ajo y pimiento 4 seg/vel. 5 y sofríe con aceite y ajíes 6 min/120 °C/vel. 1.', 'Añade el vino 2 min/120 °C/vel. 1, luego el arroz, el caldo, los guisantes y la sal: 14 min/100 °C/giro inverso/vel. cuchara.', 'Agrega el marisco y las gambas: 4 min/100 °C/giro inverso/vel. cuchara.', 'Termina con queso y cilantro.']]
    }
  },
/* ---- Tanda 2 ---- */
  {
    id: 'pe-causa-pollo', n: 'Causa rellena de pollo', e: '🥔', tipo: 'cena', tags: ['carne'],
    ing: [['patata', 1000], ['aji_amarillo', 40], ['lima', 3], ['pollo_pechuga', 350], ['mayonesa', 120], ['apio', 60], ['maiz', 1], ['aguacate', 2], ['huevo', 2], ['aceitunas', 40], ['aceite', 50], ['sal', 7]],
    m: {
      fuego: [50, ['Cuece las patatas con piel 25 min y el pollo en agua con sal 15 min. Cuece los huevos 10 min.', 'Pasa las patatas peladas por el pasapurés y amasa en frío con el ají, la lima, el aceite y la sal.', 'Desmenuza el pollo y mézclalo con mayonesa, apio picado y maíz.', 'Monta capas en un molde (puré, pollo, aguacate, puré), decora con huevo y aceitunas y enfría 15 min.']],
      robot: [50, ['Pon las patatas en trozos en el Varoma y la pechuga en la bandeja con 1 l de agua en el vaso: 30 min/Varoma/vel. 1.', 'Con el vaso limpio, mezcla las patatas con ají, lima, aceite y sal 20 seg/vel. 3.', 'Prepara el relleno de pollo y monta la causa como en la receta tradicional.']]
    }
  },
  {
    id: 'pe-escabeche-pollo', n: 'Escabeche de pollo', e: '🍗', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_muslos', 1000], ['cebolla_morada', 500], ['aji_panca', 30], ['aji_amarillo', 20], ['vinagre', 100], ['ajo', 4], ['comino', 2], ['oregano', 1], ['laurel', 2], ['boniato', 500], ['huevo', 4], ['aceitunas', 50], ['aceite', 50], ['sal', 7]],
    m: {
      fuego: [60, ['Dora los contramuslos salados con comino y resérvalos.', 'Sofríe el ajo y los ajíes 2 min, añade la cebolla en gajos gruesos, el vinagre, el laurel y el orégano y cocina 5 min (la cebolla debe quedar crujiente).', 'Devuelve el pollo con 200 ml de agua y cuece tapado 25 min.', 'Sirve tibio con boniato cocido, huevo duro y aceitunas.']],
      horno: [65, ['Dora el pollo y prepara el escabeche de cebolla como en la receta tradicional.', 'Pon todo en una fuente con 150 ml de agua, tapado, y hornea 35 min a 180 °C.', 'Sirve con boniato, huevo y aceitunas.']]
    }
  },
  {
    id: 'pe-estofado-pollo', n: 'Estofado de pollo a la peruana', e: '🥘', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['pollo_muslos', 900], ['tomate_triturado', 400], ['patata', 500], ['zanahoria', 200], ['guisantes', 150], ['cebolla', 150], ['ajo', 3], ['aji_panca', 20], ['vino_tinto', 100], ['laurel', 2], ['arroz_largo', 250], ['aceite', 30], ['sal', 7]],
    m: {
      fuego: [60, ['Dora el pollo troceado con sal y resérvalo.', 'Sofríe la cebolla y el ajo picados 6 min con el ají; añade el vino y el tomate y cuece 5 min.', 'Devuelve el pollo con la zanahoria en rodajas, el laurel y 300 ml de agua y cuece 20 min.', 'Añade la patata en trozos y los guisantes y cuece 20 min más. Sirve con arroz.']],
      robot: [55, ['Pica cebolla y ajo 3 seg/vel. 5 y sofríe con aceite y ají 6 min/120 °C/vel. 1.', 'Añade el pollo, el vino, el tomate, la zanahoria, el laurel, 200 ml de agua y la sal: 20 min/100 °C/giro inverso/vel. cuchara.', 'Agrega patata y guisantes: 20 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con arroz.']]
    }
  },
  {
    id: 'pe-adobo-cerdo', n: 'Adobo de cerdo arequipeño', e: '🐖', tipo: 'comida', tags: ['carne'],
    ing: [['cerdo_guisar', 900], ['aji_panca', 50], ['vinagre', 80], ['cebolla_morada', 400], ['ajo', 6], ['comino', 2], ['oregano', 2], ['laurel', 2], ['cerveza', 200], ['boniato', 600], ['aceite', 30], ['sal', 8]],
    m: {
      fuego: [130, ['Adoba el cerdo en trozos con el ají, el vinagre, el ajo machacado, el comino, el orégano y la sal toda la noche o al menos 2 h.', 'Pon en una olla la carne con su adobo, la cebolla en gajos grandes, el laurel, la cerveza y agua justa para cubrir.', 'Cuece tapado a fuego suave 1 h 45 min, hasta que la carne esté tierna y la salsa espesa.', 'Sirve con boniato cocido.']],
      robot: [100, ['Adoba el cerdo como en la receta tradicional.', 'Ponlo en el vaso con el adobo, la cebolla, el laurel, la cerveza y 200 ml de agua: 80 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con boniato cocido.']],
      horno: [150, ['Adoba el cerdo y colócalo en una cazuela con la cebolla, el laurel, la cerveza y 200 ml de agua.', 'Hornea tapado 2 h a 170 °C.', 'Sirve con boniato.']]
    }
  },
  {
    id: 'pe-choros-chalaca', n: 'Mejillones a la chalaca', e: '🦪', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['mejillones', 1500], ['cebolla_morada', 150], ['tomate', 250], ['maiz', 1], ['guindilla_fresca', 10], ['aji_amarillo', 15], ['lima', 5], ['cilantro', 1], ['aceite', 20], ['sal', 3]],
    m: {
      fuego: [25, ['Limpia los mejillones y ábrelos al vapor en una olla tapada 4 min. Retira media concha y deja que se enfríen.', 'Mezcla la cebolla, el tomate y la guindilla muy picados con el maíz, el cilantro, la pasta de ají, el zumo de lima, el aceite y la sal.', 'Reposa la mezcla 5 min.', 'Cubre cada mejillón con una cucharada de la mezcla y sirve frío.']],
      robot: [25, ['Pon los mejillones en el Varoma y 500 ml de agua en el vaso: 10 min/Varoma/vel. 1.', 'Prepara la mezcla chalaca como en la receta tradicional.', 'Cubre cada mejillón con la mezcla y sirve frío.']]
    }
  },
  {
    id: 'pe-solterito', n: 'Solterito de queso', e: '🥗', tipo: 'cena', tags: ['vegetariano', 'legumbres', 'ligera', 'rapida'],
    ing: [['judiones', 400], ['habas', 200], ['maiz', 1], ['queso_fresco', 200], ['tomate', 300], ['cebolla_morada', 100], ['aceitunas', 60], ['guindilla_fresca', 10], ['perejil_fresco', 1], ['vinagre', 30], ['aceite', 50], ['sal', 4]],
    m: {
      fuego: [20, ['Cuece las habas 5 min y enfríalas. Escurre y enjuaga los judiones y el maíz.', 'Corta el queso y el tomate en dados y la cebolla y la guindilla muy picadas.', 'Mezcla todo con las aceitunas y el perejil.', 'Aliña con vinagre, aceite y sal y sirve frío.']],
      sin: [15, ['Usa habas ya cocidas o descongeladas en agua caliente. Escurre judiones y maíz.', 'Corta queso, tomate, cebolla y guindilla.', 'Mezcla todo con aceitunas y perejil y aliña con vinagre, aceite y sal.']]
    }
  },
  {
    id: 'pe-quinoa-atamalada', n: 'Quinoa atamalada', e: '🥣', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['quinoa', 300], ['aji_amarillo', 40], ['cebolla', 120], ['ajo', 2], ['caldo_verduras', 750], ['leche_evaporada', 100], ['queso_fresco', 200], ['huevo', 4], ['perejil_fresco', 1], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [30, ['Lava bien la quinoa.', 'Sofríe la cebolla y el ajo picados 5 min con el ají.', 'Añade la quinoa y el caldo y cuece 18 min, removiendo de vez en cuando, hasta que quede cremosa.', 'Agrega la leche y el queso en dados y sirve con un huevo escalfado o frito y perejil.']],
      robot: [30, ['Pica cebolla y ajo 3 seg/vel. 5 y sofríe con aceite y ají 5 min/120 °C/vel. 1.', 'Añade la quinoa lavada, el caldo y la sal: 18 min/100 °C/giro inverso/vel. cuchara.', 'Agrega leche y queso: 2 min/90 °C/giro inverso/vel. cuchara. Sirve con huevo y perejil.']]
    }
  },
  {
    id: 'pe-quinotto', n: 'Quinotto de setas', e: '🍄', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['quinoa', 300], ['setas', 300], ['champinon', 200], ['cebolla', 100], ['ajo', 2], ['vino_blanco', 80], ['caldo_verduras', 800], ['parmesano', 60], ['mantequilla', 30], ['perejil_fresco', 1], ['aceite', 20], ['sal', 4]],
    m: {
      fuego: [30, ['Saltea las setas y los champiñones con ajo 6 min. Reserva.', 'Sofríe la cebolla picada en aceite 4 min, añade la quinoa lavada 1 min y el vino.', 'Agrega el caldo caliente poco a poco durante 18 min, removiendo como un risotto.', 'Incorpora las setas, la mantequilla y el queso, y sirve con perejil.']],
      robot: [30, ['Pica cebolla y ajo 3 seg/vel. 5 y sofríe con aceite 4 min/120 °C/vel. 1.', 'Añade las setas: 5 min/120 °C/giro inverso/vel. cuchara. Agrega la quinoa y el vino 1 min.', 'Añade el caldo: 18 min/100 °C/giro inverso/vel. cuchara.', 'Mezcla con mantequilla y queso y sirve con perejil.']]
    }
  },
  {
    id: 'pe-locro-zapallo', n: 'Locro de zapallo', e: '🎃', tipo: 'cena', tags: ['vegetariano'],
    ing: [['calabaza', 1000], ['patata', 400], ['maiz', 1], ['habas', 150], ['aji_amarillo', 30], ['cebolla', 150], ['ajo', 3], ['oregano', 1], ['leche_evaporada', 150], ['queso_fresco', 200], ['arroz_largo', 250], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [45, ['Sofríe la cebolla, el ajo y el ají 6 min.', 'Añade la calabaza en trozos, la patata en dados, el orégano y 250 ml de agua y cuece tapado 25 min, hasta que la calabaza se deshaga.', 'Incorpora el maíz, las habas y la leche y cuece 5 min. Añade el queso en dados.', 'Sirve con arroz blanco.']],
      robot: [40, ['Pica cebolla y ajo 3 seg/vel. 5 y sofríe con aceite y ají 5 min/120 °C/vel. 1.', 'Añade calabaza, patata, orégano, 200 ml de agua y sal: 25 min/100 °C/giro inverso/vel. cuchara.', 'Agrega maíz, habas y leche: 5 min/100 °C/giro inverso/vel. cuchara. Añade el queso.', 'Sirve con arroz.']]
    }
  },
  {
    id: 'pe-sopa-minuta', n: 'Sopa a la minuta', e: '🍜', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['carne_picada_ternera', 300], ['fideos', 150], ['tomate', 300], ['cebolla', 100], ['ajo', 2], ['aji_panca', 15], ['caldo_carne', 1200], ['leche_evaporada', 150], ['huevo', 4], ['oregano', 1], ['aceite', 30], ['sal', 4]],
    m: {
      fuego: [25, ['Sofríe la cebolla, el ajo y el tomate picados con el ají 5 min.', 'Añade la carne y dórala 4 min.', 'Agrega el caldo y los fideos y cuece 6 min.', 'Incorpora la leche y casca los huevos dentro; deja que cuajen 3 min. Sirve con orégano.']],
      robot: [25, ['Pica cebolla y ajo 3 seg/vel. 5 y sofríe con aceite, tomate y ají 5 min/120 °C/vel. 1.', 'Añade la carne: 4 min/120 °C/giro inverso/vel. cuchara.', 'Agrega el caldo y los fideos: 7 min/100 °C/giro inverso/vel. cuchara.', 'Añade la leche y los huevos: 3 min/90 °C/giro inverso/vel. cuchara. Sirve con orégano.']]
    }
  },
  {
    id: 'pe-menestron', n: 'Menestrón', e: '🍲', tipo: 'comida', tags: ['carne', 'legumbres'],
    ing: [['ternera_guisar', 400], ['alubias', 400], ['macarron', 120], ['patata', 300], ['zanahoria', 150], ['calabaza', 200], ['repollo', 200], ['judias_verdes', 150], ['maiz', 1], ['albahaca', 1], ['espinacas', 100], ['queso_fresco', 120], ['cebolla', 100], ['ajo', 3], ['aceite', 40], ['sal', 7]],
    m: {
      fuego: [100, ['Cuece la ternera en dados en 2,5 l de agua con sal 50 min.', 'Añade patata, zanahoria, calabaza, repollo y judías troceados y cuece 20 min.', 'Agrega la pasta, el maíz y las alubias y cuece 10 min.', 'Tritura la albahaca y las espinacas con el ajo, la cebolla sofrita, el queso y el aceite, y añade este pesto a la sopa al final.']],
      robot: [80, ['Pon la ternera en dados con 1,5 l de agua y la sal: 45 min/100 °C/giro inverso/vel. cuchara.', 'Añade las verduras troceadas: 15 min/100 °C/giro inverso/vel. cuchara.', 'Agrega la pasta, el maíz y las alubias: 10 min/100 °C/giro inverso/vel. cuchara.', 'Mezcla con el pesto de albahaca, espinacas y queso hecho aparte.']]
    }
  },
  {
    id: 'pe-carapulcra', n: 'Carapulcra con patata', e: '🥘', tipo: 'comida', tags: ['carne'],
    ing: [['cerdo_guisar', 600], ['patata', 800], ['aji_panca', 40], ['cacahuetes', 60], ['cebolla', 200], ['ajo', 4], ['comino', 2], ['caldo_pollo', 600], ['canela', 1], ['clavo', 2], ['arroz_largo', 250], ['aceite', 40], ['sal', 7]],
    m: {
      fuego: [80, ['Dora el cerdo en dados con sal y comino y resérvalo.', 'Sofríe la cebolla y el ajo picados 8 min con el ají panca.', 'Añade el cerdo, el caldo, la canela, el clavo y los cacahuetes triturados y cuece 30 min.', 'Agrega la patata en dados pequeños y cuece 25 min, hasta que espese. Sirve con arroz.']],
      robot: [70, ['Tritura los cacahuetes 10 seg/vel. 9 y reserva.', 'Pica cebolla y ajo 3 seg/vel. 5 y sofríe con aceite y ají 6 min/120 °C/vel. 1.', 'Añade el cerdo, el caldo, las especias, los cacahuetes y la sal: 30 min/100 °C/giro inverso/vel. cuchara.', 'Agrega la patata: 25 min/100 °C/giro inverso/vel. cuchara. Sirve con arroz.']]
    }
  },
  {
    id: 'pe-pollo-saltado', n: 'Pollo saltado', e: '🍗', tipo: 'cena', tags: ['carne', 'rapida', 'niños'],
    ing: [['pollo_pechuga', 600], ['cebolla_morada', 200], ['tomate', 300], ['aji_amarillo', 15], ['ajo', 3], ['salsa_soja', 40], ['vinagre', 15], ['cilantro', 1], ['patata', 600], ['arroz_largo', 250], ['aceite', 40], ['aceite_girasol', 300], ['sal', 5]],
    m: {
      fuego: [30, ['Cuece el arroz y fríe la patata en bastones.', 'Saltea el pollo en tiras con sal en el wok muy caliente 4 min. Reserva.', 'Saltea la cebolla en gajos, el ajo y el ají 1 min; añade el tomate en gajos, la soja y el vinagre 1 min.', 'Devuelve el pollo, añade cilantro y las patatas y sirve con arroz.']],
      airfryer: [35, ['Cocina las patatas en bastones con una cucharada de aceite 20 min a 200 °C.', 'Saltea el pollo y las verduras en wok.', 'Mezcla con las patatas y sirve con arroz.']]
    }
  },
  {
    id: 'pe-tallarin-saltado', n: 'Tallarín saltado de ternera', e: '🍜', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['tallarines', 350], ['ternera_filetes', 450], ['cebolla_morada', 150], ['tomate', 250], ['pimiento_rojo', 120], ['cebolleta', 2], ['ajo', 3], ['jengibre', 10], ['salsa_soja', 50], ['salsa_ostras', 20], ['aceite_girasol', 40], ['sal', 4]],
    m: {
      fuego: [25, ['Cuece la pasta al dente y escúrrela.', 'Saltea la carne en tiras en el wok muy caliente 2 min y resérvala.', 'Saltea ajo, jengibre, cebolla, pimiento y tomate en gajos 2 min.', 'Añade la pasta, la carne, la soja y la salsa de ostras, saltea 2 min y termina con cebolleta.']]
    }
  },
  {
    id: 'pe-saltado-verduras', n: 'Saltado de verduras con tofu', e: '🥦', tipo: 'cena', tags: ['vegetariano', 'rapida', 'ligera'],
    ing: [['tofu', 400], ['brocoli', 300], ['champinon', 200], ['pimiento_rojo', 150], ['cebolla_morada', 150], ['tomate', 200], ['ajo', 2], ['jengibre', 10], ['salsa_soja', 50], ['vinagre', 15], ['arroz_largo', 250], ['aceite_girasol', 40], ['sal', 3]],
    m: {
      fuego: [25, ['Cuece el arroz. Corta el tofu en dados, sécalo y dóralo en el wok 5 min. Reserva.', 'Saltea el brócoli en ramilletes pequeños 3 min con un chorrito de agua.', 'Añade ajo, jengibre, champiñones, pimiento, cebolla y tomate y saltea 3 min a fuego fuerte.', 'Incorpora el tofu, la soja y el vinagre, mezcla y sirve con arroz.']],
      airfryer: [25, ['Cocina el tofu en dados con un poco de aceite 12 min a 200 °C.', 'Saltea las verduras en wok como en la receta tradicional.', 'Mezcla con el tofu y la salsa y sirve con arroz.']]
    }
  },
  {
    id: 'pe-bistec-pobre', n: 'Bistec a lo pobre', e: '🍳', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_filetes', 600], ['huevo', 4], ['platano_macho', 400], ['patata', 600], ['arroz_largo', 250], ['ajo', 2], ['comino', 1], ['aceite_girasol', 300], ['sal', 6]],
    m: {
      fuego: [35, ['Cuece el arroz. Fríe la patata en bastones y el plátano en rodajas al bies.', 'Adoba los filetes con ajo machacado, comino y sal y hazlos a la plancha muy caliente 1-2 min por lado.', 'Fríe los huevos.', 'Sirve cada filete con arroz, patatas, plátano y un huevo encima.']],
      airfryer: [40, ['Cocina las patatas en bastones 20 min a 200 °C y el plátano 10 min a 190 °C.', 'Haz los filetes a la plancha y fríe los huevos.', 'Monta los platos con arroz, patatas, plátano, filete y huevo.']]
    }
  },
  {
    id: 'pe-pescado-chorrillana', n: 'Pescado a la chorrillana', e: '🐟', tipo: 'cena', tags: ['pescado', 'rapida', 'ligera'],
    ing: [['merluza', 700], ['harina', 40], ['cebolla_morada', 250], ['tomate', 300], ['aji_amarillo', 20], ['ajo', 3], ['vinagre', 20], ['oregano', 1], ['caldo_pescado', 150], ['arroz_largo', 250], ['aceite', 40], ['sal', 5]],
    m: {
      fuego: [30, ['Sala el pescado, enharínalo y dóralo 3 min por lado. Reserva.', 'Saltea el ajo y el ají 1 min, añade la cebolla en gajos y el tomate en gajos y saltea 3 min.', 'Agrega el vinagre, el orégano y el caldo y cuece 2 min. Mete el pescado 3 min en la salsa.', 'Sirve con arroz blanco.']],
      horno: [30, ['Prepara la salsa chorrillana como en la receta tradicional.', 'Pon el pescado salado en una fuente, cúbrelo con la salsa y hornea 15 min a 190 °C.', 'Sirve con arroz.']]
    }
  },
  {
    id: 'pe-pallares', n: 'Judiones guisados a la peruana', e: '🫘', tipo: 'comida', tags: ['legumbres', 'vegetariano'],
    ing: [['judiones', 800], ['cebolla', 150], ['ajo', 3], ['aji_amarillo', 30], ['tomate', 200], ['comino', 1], ['oregano', 1], ['leche_evaporada', 100], ['queso_fresco', 120], ['arroz_largo', 250], ['huevo', 4], ['aceite', 40], ['sal', 5]],
    m: {
      fuego: [35, ['Sofríe la cebolla, el ajo y el tomate picados 8 min con el ají y el comino.', 'Añade los judiones escurridos, el orégano y 250 ml de agua y cuece 12 min a fuego suave. Chafa unos pocos para espesar.', 'Agrega la leche y el queso en dados y cocina 2 min.', 'Sirve con arroz y un huevo frito.']],
      robot: [30, ['Pica cebolla, ajo y tomate 4 seg/vel. 5 y sofríe con aceite, ají y comino 7 min/120 °C/vel. 1.', 'Añade judiones, orégano, 200 ml de agua y sal: 12 min/100 °C/giro inverso/vel. cuchara.', 'Agrega leche y queso: 2 min/90 °C/giro inverso/vel. cuchara. Sirve con arroz y huevo.']]
    }
  },
  {
    id: 'pe-lentejas', n: 'Lentejas a la peruana con arroz', e: '🍲', tipo: 'comida', tags: ['legumbres', 'vegetariano'],
    ing: [['lentejas', 350], ['cebolla', 150], ['ajo', 3], ['aji_amarillo', 20], ['aji_panca', 15], ['tomate', 200], ['zanahoria', 120], ['comino', 1], ['oregano', 1], ['arroz_largo', 250], ['cebolla_morada', 100], ['lima', 1], ['aceite', 40], ['sal', 6]],
    m: {
      fuego: [55, ['Cuece las lentejas con la zanahoria en dados en 1,2 l de agua 30 min.', 'Sofríe la cebolla, el ajo y el tomate picados 8 min con los ajíes y el comino.', 'Añade el sofrito a las lentejas con el orégano y cuece 15 min más, hasta que queden espesas.', 'Sirve con arroz y salsa criolla (cebolla morada en pluma con lima y sal).']],
      robot: [45, ['Pica cebolla, ajo y tomate 4 seg/vel. 5 y sofríe con aceite, ajíes y comino 7 min/120 °C/vel. 1.', 'Añade lentejas, zanahoria, orégano, 1 l de agua y sal: 40 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con arroz y salsa criolla.']]
    }
  },
  {
    id: 'pe-papa-rellena', n: 'Papas rellenas de carne', e: '🥔', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['patata', 1000], ['carne_picada_ternera', 350], ['cebolla', 150], ['ajo', 2], ['aji_panca', 15], ['pasas', 30], ['aceitunas', 40], ['huevo', 3], ['harina', 60], ['comino', 1], ['cebolla_morada', 100], ['lima', 1], ['aceite_girasol', 300], ['sal', 7]],
    m: {
      fuego: [60, ['Cuece las patatas 25 min, haz un puré seco sin leche y sálalo. Cuece 1 huevo.', 'Sofríe la cebolla, el ajo y el ají 6 min, añade la carne con comino y sal y dórala 6 min. Agrega pasas, aceitunas y huevo picados.', 'Coge porciones de puré con las manos enharinadas, rellénalas de carne y dales forma de patata.', 'Pásalas por huevo batido y harina y fríelas hasta dorar. Sirve con salsa criolla de cebolla morada y lima.']],
      airfryer: [55, ['Prepara el puré y el relleno y forma las papas como en la receta tradicional.', 'Pásalas por huevo y harina, píntalas con aceite y cocínalas 15 min a 200 °C, girándolas a mitad.', 'Sirve con salsa criolla.']],
      horno: [60, ['Forma las papas rellenas y colócalas en una bandeja con papel.', 'Píntalas con huevo y hornea 20 min a 220 °C.', 'Sirve con salsa criolla.']]
    }
  },
/* ---- Tanda 3 ---- */
  {
    id: 'pe-frejoles-guisados', n: 'Frejoles guisados con seco de cerdo', e: '🫘', tipo: 'comida', tags: ['legumbres', 'carne'],
    ing: [['alubias', 800], ['panceta', 150], ['cebolla', 150], ['ajo', 3], ['aji_panca', 20], ['comino', 1], ['oregano', 1], ['arroz_largo', 250], ['cebolla_morada', 100], ['lima', 1], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [40, ['Dora la panceta en dados en una olla 5 min.', 'Añade la cebolla y el ajo picados con el ají y el comino y sofríe 6 min.', 'Agrega las alubias con la mitad de su líquido, el orégano y 200 ml de agua y cuece 20 min. Chafa una parte para que quede cremoso.', 'Sirve con arroz blanco y salsa criolla de cebolla morada y lima.']],
      robot: [35, ['Pica cebolla y ajo 3 seg/vel. 5. Añade la panceta, el aceite, el ají y el comino: 7 min/120 °C/vel. 1.', 'Agrega alubias, orégano, 200 ml de agua y sal: 20 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con arroz y salsa criolla.']]
    }
  },
  {
    id: 'pe-sopa-criolla', n: 'Sopa criolla', e: '🍜', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['ternera_filetes', 300], ['fideos', 150], ['tomate', 300], ['cebolla', 100], ['ajo', 2], ['aji_panca', 20], ['caldo_carne', 1200], ['leche_evaporada', 150], ['huevo', 4], ['pan_barra', 1], ['oregano', 1], ['aceite', 30], ['sal', 4]],
    m: {
      fuego: [30, ['Corta la ternera en tiras finas y dórala en la olla 3 min. Reserva.', 'Sofríe la cebolla, el ajo y el tomate picados con el ají 6 min.', 'Añade el caldo, la carne y los fideos y cuece 6 min. Agrega la leche y casca los huevos dentro 3 min.', 'Sirve con orégano y pan tostado.']],
      robot: [30, ['Pica cebolla, ajo y tomate 4 seg/vel. 5 y sofríe con aceite y ají 6 min/120 °C/vel. 1.', 'Añade caldo, carne en tiras y fideos: 8 min/100 °C/giro inverso/vel. cuchara.', 'Agrega leche y huevos: 3 min/90 °C/giro inverso/vel. cuchara. Sirve con orégano y pan tostado.']]
    }
  },
  {
    id: 'pe-chicharron-pollo', n: 'Chicharrón de pollo', e: '🍗', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['pollo_muslos', 900], ['salsa_soja', 50], ['jengibre', 15], ['ajo', 3], ['lima', 3], ['maicena', 80], ['harina', 60], ['huevo', 1], ['patata', 600], ['aceite_girasol', 400], ['sal', 5]],
    m: {
      fuego: [45, ['Corta los contramuslos en trozos y adóbalos con soja, jengibre y ajo rallados y zumo de una lima 20 min.', 'Mézclalos con el huevo y luego con la maicena y la harina.', 'Fríelos en aceite caliente 6 min hasta que estén crujientes y escúrrelos.', 'Sirve con lima y patatas cocidas o fritas.']],
      airfryer: [40, ['Adoba y reboza el pollo como en la receta tradicional.', 'Pulverízalo con aceite y cocina 18 min a 200 °C, agitando a mitad.', 'Sirve con lima y patatas.']]
    }
  },
  {
    id: 'pe-arroz-tapado', n: 'Arroz tapado', e: '🍚', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['arroz_largo', 350], ['carne_picada_ternera', 400], ['cebolla', 150], ['tomate', 200], ['ajo', 3], ['aji_panca', 15], ['pasas', 30], ['aceitunas', 40], ['huevo', 2], ['comino', 1], ['platano_macho', 400], ['aceite', 40], ['sal', 6]],
    m: {
      fuego: [40, ['Cuece el arroz con ajo y sal. Cuece los huevos 10 min.', 'Sofríe la cebolla, el ajo y el tomate picados con el ají y el comino 6 min. Añade la carne y dórala 8 min con las pasas.', 'Engrasa un cuenco, pon una capa de arroz, el picadillo con aceitunas y huevo picado y otra capa de arroz. Aprieta.', 'Desmolda en el plato y sirve con plátano frito.']],
      robot: [40, ['Pica cebolla, ajo y tomate 4 seg/vel. 5 y sofríe con aceite, ají y comino 6 min/120 °C/vel. 1.', 'Añade la carne y las pasas: 8 min/120 °C/giro inverso/vel. cuchara.', 'Monta en moldes con el arroz cocido, aceitunas y huevo y desmolda. Sirve con plátano frito.']]
    }
  },
  {
    id: 'pe-picante-mariscos', n: 'Picante de mariscos', e: '🦐', tipo: 'comida', tags: ['pescado'],
    ing: [['mezcla_marisco', 500], ['gambas', 300], ['aji_panca', 30], ['aji_amarillo', 20], ['leche_evaporada', 200], ['pan_molde', 1], ['queso_fresco', 100], ['cebolla', 150], ['ajo', 3], ['caldo_pescado', 300], ['patata', 600], ['arroz_largo', 250], ['aceite', 40], ['sal', 5]],
    m: {
      fuego: [40, ['Cuece las patatas en rodajas gruesas 15 min y el arroz.', 'Sofríe la cebolla y el ajo picados con los dos ajíes 6 min.', 'Tritura 2 rebanadas de pan con la leche y el queso, añádelo al sofrito con el caldo y cuece 5 min removiendo.', 'Incorpora el marisco y las gambas 4 min y sirve sobre las patatas con arroz.']],
      robot: [40, ['Pica cebolla y ajo 3 seg/vel. 5 y sofríe con aceite y ajíes 6 min/120 °C/vel. 1.', 'Añade pan, leche, queso y caldo y tritura 30 seg/vel. 8. Cuece 5 min/100 °C/vel. 2.', 'Agrega el marisco y las gambas: 5 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con patata cocida y arroz.']]
    }
  },
  {
    id: 'pe-ensalada-quinoa', n: 'Ensalada de quinoa a la peruana', e: '🥗', tipo: 'cena', tags: ['vegetariano', 'ligera', 'rapida'],
    ing: [['quinoa', 250], ['maiz', 1], ['tomate', 300], ['pepino', 200], ['cebolla_morada', 80], ['aguacate', 2], ['queso_fresco', 150], ['aji_amarillo', 15], ['lima', 3], ['cilantro', 1], ['hierbabuena', 1], ['aceite', 50], ['sal', 4]],
    m: {
      fuego: [25, ['Lava la quinoa y cuécela en el doble de agua con sal 15 min. Enfríala.', 'Corta tomate, pepino, cebolla, aguacate y queso en dados.', 'Bate el zumo de lima con la pasta de ají, el aceite y la sal.', 'Mezcla todo con el maíz, el cilantro y la hierbabuena picados y aliña.']],
      robot: [25, ['Pon la quinoa lavada en el cestillo con 1 l de agua en el vaso: 15 min/100 °C/vel. 4. Enfríala.', 'Corta las verduras y el queso en dados.', 'Mezcla todo y aliña con lima, ají, aceite y sal.']]
    }
  },
  {
    id: 'pe-chaufa-quinoa', n: 'Chaufa de quinoa con verduras', e: '🍳', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['quinoa', 300], ['huevo', 3], ['pimiento_rojo', 120], ['zanahoria', 100], ['cebolleta', 3], ['brotes_soja', 150], ['jengibre', 15], ['ajo', 2], ['salsa_soja', 50], ['aceite_sesamo', 10], ['aceite_girasol', 30], ['sal', 2]],
    m: {
      fuego: [30, ['Cuece la quinoa lavada 15 min, escúrrela y déjala secar extendida.', 'Haz una tortilla fina y córtala en tiras.', 'Saltea ajo, jengibre, zanahoria, pimiento y cebolleta en el wok 3 min. Añade los brotes 1 min.', 'Incorpora la quinoa, la soja y la tortilla, saltea 2 min y termina con aceite de sésamo.']]
    }
  },
  {
    id: 'pe-chicharron-pescado', n: 'Chicharrón de pescado con yuca', e: '🐟', tipo: 'cena', tags: ['pescado'],
    ing: [['pescado_blanco', 700], ['harina', 100], ['maicena', 40], ['ajo', 2], ['lima', 4], ['comino', 1], ['yuca', 600], ['cebolla_morada', 120], ['aji_amarillo', 15], ['cilantro', 1], ['aceite_girasol', 400], ['sal', 6]],
    m: {
      fuego: [40, ['Cuece la yuca en agua con sal 20 min, córtala en bastones y fríela hasta dorar.', 'Adoba el pescado en dados con ajo, comino, zumo de una lima y sal 10 min. Pásalo por harina y maicena.', 'Fríelo en aceite caliente 3 min y escúrrelo.', 'Sirve con la yuca y salsa criolla (cebolla morada, ají, cilantro, lima y sal).']],
      airfryer: [40, ['Cuece la yuca, córtala en bastones y cocínala con aceite 15 min a 200 °C.', 'Adoba y enharina el pescado, pulverízalo con aceite y cocina 10 min a 200 °C.', 'Sirve con la yuca y salsa criolla.']]
    }
  },
  {
    id: 'pe-pastel-papa', n: 'Pastel de papa arequipeño', e: '🥔', tipo: 'cena', tags: ['vegetariano'],
    ing: [['patata', 1000], ['leche_evaporada', 300], ['huevo', 3], ['queso_fresco', 200], ['mozzarella', 100], ['cebolla', 100], ['ajo', 1], ['aji_amarillo', 15], ['nuez_moscada', 1], ['mantequilla', 30], ['lechuga', 1], ['sal', 6]],
    m: {
      horno: [70, ['Pela las patatas y córtalas en láminas finas.', 'Bate la leche con los huevos, la pasta de ají, el ajo rallado, la nuez moscada y la sal.', 'Engrasa una fuente y monta capas de patata, cebolla en juliana fina y quesos, mojando cada capa con la mezcla.', 'Hornea tapado 35 min a 180 °C y destapado 15 min más. Sirve con ensalada.']],
      airfryer: [55, ['Prepara las capas en un molde que quepa en la freidora.', 'Cocina tapado con aluminio 30 min a 170 °C.', 'Destapa y dora 10 min a 180 °C. Sirve con ensalada.']]
    }
  },
  {
    id: 'pe-cau-cau-pollo', n: 'Cau cau de pollo', e: '🍛', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_pechuga', 600], ['patata', 600], ['aji_amarillo', 40], ['curcuma', 3], ['cebolla', 150], ['ajo', 3], ['hierbabuena', 1], ['guisantes', 100], ['caldo_pollo', 500], ['arroz_largo', 250], ['comino', 1], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [40, ['Sofríe la cebolla y el ajo picados con el ají, la cúrcuma y el comino 6 min.', 'Añade el pollo en dados y dóralo 4 min.', 'Agrega la patata en dados pequeños y el caldo y cuece 20 min, hasta que la patata empiece a deshacerse.', 'Añade los guisantes y la hierbabuena picada 3 min y sirve con arroz.']],
      robot: [35, ['Pica cebolla y ajo 3 seg/vel. 5 y sofríe con aceite, ají, cúrcuma y comino 6 min/120 °C/vel. 1.', 'Añade pollo, patata, caldo y sal: 20 min/100 °C/giro inverso/vel. cuchara.', 'Agrega guisantes y hierbabuena: 3 min/100 °C/giro inverso/vel. cuchara. Sirve con arroz.']]
    }
  },
  {
    id: 'pe-sopa-quinua', n: 'Sopa de quinoa', e: '🥣', tipo: 'cena', tags: ['vegetariano', 'ligera'],
    ing: [['quinoa', 150], ['patata', 300], ['zanahoria', 150], ['calabaza', 200], ['habas', 100], ['maiz', 1], ['cebolla', 100], ['ajo', 2], ['aji_amarillo', 15], ['caldo_verduras', 1500], ['queso_fresco', 120], ['hierbabuena', 1], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [40, ['Sofríe la cebolla y el ajo con el ají 5 min.', 'Añade el caldo, la quinoa lavada, la patata, la zanahoria y la calabaza en dados y cuece 20 min.', 'Agrega las habas y el maíz y cuece 5 min más.', 'Sirve con queso en dados y hierbabuena picada.']],
      robot: [35, ['Pica cebolla y ajo 3 seg/vel. 5 y sofríe con aceite y ají 5 min/120 °C/vel. 1.', 'Añade caldo, quinoa, patata, zanahoria, calabaza y sal: 20 min/100 °C/giro inverso/vel. cuchara.', 'Agrega habas y maíz: 5 min/100 °C/giro inverso/vel. cuchara. Sirve con queso y hierbabuena.']]
    }
  },
  {
    id: 'pe-pulpo-olivo', n: 'Pulpo al olivo', e: '🐙', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['pulpo', 500], ['aceitunas', 120], ['mayonesa', 150], ['lima', 2], ['aceite', 30], ['lechuga', 1], ['tomate_cherry', 200], ['pan_barra', 1], ['sal', 2]],
    m: {
      sin: [15, ['Tritura las aceitunas (mejor negras) con la mayonesa, el aceite y el zumo de una lima hasta tener una salsa morada y lisa.', 'Corta el pulpo cocido en láminas finas y repártelo en los platos.', 'Napa con la salsa de aceitunas.', 'Sirve con lechuga, tomates cherry y pan tostado.']]
    }
  },
  {
    id: 'pe-escabeche-pescado', n: 'Escabeche de pescado', e: '🐟', tipo: 'cena', tags: ['pescado'],
    ing: [['merluza', 700], ['harina', 50], ['cebolla_morada', 500], ['aji_panca', 25], ['aji_amarillo', 15], ['vinagre', 100], ['ajo', 3], ['comino', 1], ['oregano', 1], ['boniato', 500], ['huevo', 4], ['aceitunas', 50], ['aceite', 60], ['sal', 6]],
    m: {
      fuego: [40, ['Cuece el boniato en rodajas 15 min y los huevos 10 min.', 'Sala y enharina el pescado y dóralo 3 min por lado. Colócalo en una fuente.', 'Sofríe el ajo y los ajíes 2 min, añade la cebolla en gajos gruesos, el vinagre, el comino y el orégano y cocina 4 min.', 'Cubre el pescado con el escabeche y sirve tibio o frío con boniato, huevo y aceitunas.']],
      airfryer: [35, ['Pinta el pescado enharinado con aceite y cocínalo 10 min a 200 °C.', 'Prepara el escabeche de cebolla en sartén.', 'Cubre el pescado y sirve con boniato, huevo y aceitunas.']]
    }
  },
  {
    id: 'pe-seco-pollo', n: 'Seco de pollo con frejoles', e: '🍗', tipo: 'comida', tags: ['carne', 'legumbres'],
    ing: [['pollo_muslos', 1000], ['cilantro', 2], ['espinacas', 80], ['cerveza', 200], ['aji_amarillo', 30], ['cebolla', 150], ['ajo', 4], ['guisantes', 100], ['patata', 400], ['alubias_rojas', 400], ['arroz_largo', 250], ['comino', 1], ['aceite', 40], ['sal', 7]],
    m: {
      fuego: [55, ['Dora el pollo con sal y comino y resérvalo.', 'Tritura el cilantro y las espinacas con la cerveza. Sofríe la cebolla, el ajo y el ají 6 min y añade el puré verde.', 'Devuelve el pollo con la patata en trozos y 150 ml de agua y cuece tapado 30 min. Añade los guisantes al final.', 'Sirve con arroz y las alubias calientes.']],
      robot: [50, ['Tritura cilantro y espinacas con la cerveza 20 seg/vel. 8 y reserva.', 'Sofríe cebolla y ajo picados con aceite, ají y comino 6 min/120 °C/vel. 1.', 'Añade el pollo, el puré verde, la patata y la sal: 30 min/100 °C/giro inverso/vel. cuchara. Agrega los guisantes los últimos 5 min.', 'Sirve con arroz y alubias.']]
    }
  },
  {
    id: 'pe-jalea', n: 'Jalea de pescado y marisco', e: '🍤', tipo: 'cena', tags: ['pescado'],
    ing: [['pescado_blanco', 500], ['calamar', 300], ['gambas', 200], ['harina', 120], ['maicena', 40], ['yuca', 500], ['cebolla_morada', 150], ['tomate', 150], ['lima', 4], ['cilantro', 1], ['aji_amarillo', 15], ['aceite_girasol', 500], ['sal', 6]],
    m: {
      fuego: [45, ['Cuece la yuca 20 min, córtala en bastones y fríela.', 'Sala el pescado en dados, el calamar en anillas y las gambas y pásalos por harina con maicena.', 'Fríelos por tandas en aceite muy caliente 2-3 min y escúrrelos.', 'Sirve con la yuca y una salsa criolla de cebolla, tomate, ají, cilantro, lima y sal por encima.']],
      airfryer: [40, ['Cuece la yuca y cocínala en bastones 15 min a 200 °C.', 'Enharina el pescado y el marisco, pulverízalos con aceite y cocínalos 10 min a 200 °C, agitando a mitad.', 'Sirve con la yuca y la salsa criolla.']]
    }
  },
  {
    id: 'pe-ocopa', n: 'Ocopa con patatas y huevo', e: '🥔', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['patata', 1000], ['aji_amarillo', 40], ['cacahuetes', 60], ['queso_fresco', 200], ['leche_evaporada', 150], ['cebolla', 100], ['ajo', 2], ['hierbabuena', 1], ['cilantro', 1], ['pan_molde', 1], ['huevo', 4], ['lechuga', 1], ['aceitunas', 40], ['aceite', 40], ['sal', 5]],
    m: {
      fuego: [30, ['Cuece las patatas 20 min y los huevos 10 min.', 'Dora la cebolla y el ajo en el aceite 5 min con el ají.', 'Tritúralo con los cacahuetes, el queso, la leche, 2 rebanadas de pan, unas hojas de hierbabuena y cilantro y la sal.', 'Sirve las patatas en rodajas sobre lechuga, cubiertas con la salsa, con huevo y aceitunas.']],
      robot: [30, ['Pon las patatas en el Varoma y los huevos en el cestillo con 1 l de agua: 25 min/Varoma/vel. 1.', 'Con el vaso limpio, sofríe cebolla y ajo con aceite y ají 5 min/120 °C/vel. 1.', 'Añade cacahuetes, queso, leche, pan, hierbas y sal y tritura 40 seg/vel. 8.', 'Sirve las patatas con la salsa, huevo y aceitunas.']]
    }
  }
]);
