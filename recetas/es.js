/* MC Food Diary · cocina de España 🇪🇸. Formato y normas: recetas/GUIA-RECETAS.md */

MC_ADD_ING({
});

MC_ADD('es', [
  {
    id: 'lentejas', n: 'Lentejas estofadas con verduras', e: '🥣', tipo: 'comida', tags: ['legumbres', 'vegetariano'],
    ing: [['lentejas', 320], ['zanahoria', 150], ['patata', 300], ['pimiento_verde', 100], ['cebolla', 150], ['ajo', 2], ['tomate', 150], ['laurel', 1], ['pimenton', 3], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [50, ['Pica la cebolla, el pimiento y el ajo y sofríelos 8 min en una olla con el aceite.', 'Añade el tomate rallado y el pimentón y cocina 2 min más.', 'Incorpora las lentejas lavadas, la zanahoria en rodajas, el laurel y 1,5 l de agua. Cuece 25 min a fuego medio.', 'Añade la patata cascada y la sal. Cuece 15 min más hasta que esté tierna.']],
      robot: [45, ['Tritura cebolla, pimiento y ajo 5 seg/vel. 5. Añade el aceite y sofríe 8 min/120 °C/vel. 1.', 'Añade tomate y pimentón y programa 2 min/120 °C/vel. 1.', 'Coloca la mariposa. Añade lentejas, zanahoria, patata en dados, laurel, sal y 1,2 l de agua.', 'Programa 35 min/100 °C/giro inverso/vel. cuchara. Deja reposar 5 min.']]
    }
  },
  {
    id: 'garbanzos-espinacas', n: 'Garbanzos con espinacas', e: '🥬', tipo: 'comida', tags: ['legumbres', 'vegetariano', 'rapida'],
    ing: [['garbanzos', 800], ['espinacas', 300], ['ajo', 3], ['cebolla', 100], ['comino', 2], ['pimenton', 4], ['caldo_verduras', 250], ['aceite', 30], ['sal', 4]],
    m: {
      fuego: [20, ['Dora el ajo laminado y la cebolla picada en una cazuela con el aceite.', 'Añade el comino y el pimentón, remueve unos segundos y echa las espinacas hasta que se reduzcan.', 'Incorpora los garbanzos escurridos y el caldo. Cuece 8 min a fuego suave y ajusta la sal.']],
      robot: [20, ['Pica ajo y cebolla 4 seg/vel. 5 y sofríe con el aceite 5 min/120 °C/vel. 1.', 'Añade especias y espinacas: 4 min/100 °C/giro inverso/vel. cuchara.', 'Añade garbanzos, caldo y sal: 8 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'pollo-patatas', n: 'Pollo asado con patatas', e: '🍗', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['pollo_muslos', 1000], ['patata', 800], ['cebolla', 200], ['ajo', 4], ['limon', 1], ['vino_blanco', 100], ['oregano', 2], ['aceite', 40], ['sal', 6], ['pimienta', 1]],
    m: {
      horno: [60, ['Precalienta el horno a 200 °C.', 'Corta las patatas en rodajas y la cebolla en juliana y ponlas en la bandeja con sal y un chorro de aceite.', 'Coloca encima el pollo salpimentado, los ajos chafados, el zumo de limón, el vino y el orégano.', 'Hornea 50 min, dando la vuelta al pollo a mitad de tiempo.']],
      airfryer: [40, ['Salpimienta el pollo y úntalo con aceite, ajo picado, limón y orégano.', 'Corta las patatas en gajos y mézclalas con aceite y sal.', 'Cocina las patatas 10 min a 180 °C.', 'Añade el pollo encima y cocina 25 min a 190 °C, girándolo a mitad. Hazlo en dos tandas si no cabe.']]
    }
  },
  {
    id: 'alitas', n: 'Alitas de pollo crujientes', e: '🍗', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['pollo_alitas', 1000], ['pimenton', 5], ['ajo', 2], ['miel', 30], ['salsa_soja', 30], ['lechuga', 1], ['tomate', 300], ['aceite', 20], ['sal', 4]],
    m: {
      horno: [45, ['Precalienta el horno a 210 °C.', 'Mezcla las alitas con aceite, pimentón, ajo picado, sal, miel y soja.', 'Hornea en rejilla 40 min, girándolas a mitad.', 'Sirve con ensalada de lechuga y tomate.']],
      airfryer: [28, ['Mezcla las alitas con aceite, pimentón, ajo picado, sal, miel y soja.', 'Cocina 24 min a 200 °C en una sola capa, agitando el cesto cada 8 min.', 'Sirve con ensalada de lechuga y tomate.']]
    }
  },
  {
    id: 'salmon-verduras', n: 'Salmón con verduras', e: '🐟', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['salmon', 600], ['calabacin', 300], ['pimiento_rojo', 150], ['cebolla_morada', 100], ['limon', 1], ['aceite', 30], ['sal', 4], ['pimienta', 1]],
    m: {
      horno: [25, ['Precalienta el horno a 200 °C.', 'Corta las verduras en tiras, alíñalas con aceite y sal y hornéalas 10 min.', 'Pon el salmón encima con sal, pimienta y limón y hornea 12 min más.']],
      airfryer: [20, ['Corta las verduras en tiras y alíñalas con aceite y sal. Cocínalas 8 min a 190 °C.', 'Añade el salmón salpimentado encima y cocina 10 min a 190 °C.', 'Riega con limón al servir.']],
      fuego: [20, ['Saltea las verduras en tiras en una sartén con aceite 8 min.', 'En otra sartén o plancha, marca el salmón 3–4 min por cada lado empezando por la piel.', 'Sirve con limón.']]
    }
  },
  {
    id: 'merluza-verde', n: 'Merluza en salsa verde', e: '🐟', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['merluza', 700], ['ajo', 4], ['perejil_fresco', 1], ['harina', 10], ['vino_blanco', 100], ['caldo_pescado', 250], ['guisantes', 100], ['aceite', 40], ['sal', 4]],
    m: {
      fuego: [25, ['Dora el ajo laminado en una cazuela con el aceite sin que se queme.', 'Añade la harina, remueve 1 min y vierte el vino. Deja reducir 2 min.', 'Agrega el caldo, el perejil picado y los guisantes, y cuece 5 min.', 'Coloca la merluza salada y cocina 6 min moviendo la cazuela para que ligue la salsa.']],
      robot: [25, ['Pica ajo y perejil 4 seg/vel. 6. Sofríe con el aceite 3 min/120 °C/vel. 1.', 'Añade harina, vino, caldo y guisantes: 6 min/100 °C/vel. 1.', 'Pon la merluza salada en el Varoma, coloca y programa 12 min/Varoma/vel. 1.', 'Sirve la merluza con la salsa por encima.']]
    }
  },
  {
    id: 'tortilla', n: 'Tortilla de patatas', e: '🥚', tipo: 'ambos', tags: ['vegetariano', 'niños'],
    ing: [['huevo', 6], ['patata', 700], ['cebolla', 150], ['aceite', 150], ['sal', 5], ['lechuga', 1]],
    m: {
      fuego: [40, ['Pela y corta las patatas y la cebolla en láminas finas.', 'Confítalas en abundante aceite a fuego medio unos 20 min, hasta que estén tiernas. Escúrrelas.', 'Bate los huevos con sal, mezcla con las patatas y deja reposar 5 min.', 'Cuaja en una sartén con un poco de aceite 3 min por cada lado.']],
      airfryer: [35, ['Corta patata y cebolla en láminas finas y mézclalas con 2 cucharadas de aceite y sal.', 'Cocina 22 min a 170 °C, agitando cada 7 min.', 'Mezcla con los huevos batidos y cuaja en sartén 3 min por lado.']]
    }
  },
  {
    id: 'macarrones', n: 'Macarrones con tomate y chorizo', e: '🍝', tipo: 'comida', tags: ['carne', 'niños', 'rapida'],
    ing: [['macarron', 400], ['chorizo', 120], ['tomate_frito', 400], ['cebolla', 100], ['queso_rallado', 80], ['aceite', 15], ['sal', 6]],
    m: {
      fuego: [25, ['Cuece los macarrones en agua con sal según el paquete.', 'Sofríe la cebolla picada y el chorizo en dados 5 min.', 'Añade el tomate frito y cocina 3 min.', 'Mezcla con la pasta escurrida y sirve con queso.']],
      horno: [35, ['Cuece los macarrones y prepara la salsa con cebolla, chorizo y tomate frito.', 'Mezcla todo en una fuente, cubre con el queso.', 'Gratina 10 min a 220 °C con grill.']],
      robot: [25, ['Pica la cebolla 3 seg/vel. 5 y sofríe con aceite y chorizo 5 min/120 °C/vel. 1.', 'Añade tomate frito: 3 min/100 °C/vel. 1. Reserva.', 'Pon 1,2 l de agua con sal: 10 min/100 °C/vel. 1. Añade la pasta y cuece el tiempo del paquete/100 °C/giro inverso/vel. cuchara.', 'Escurre y mezcla con la salsa y el queso.']]
    }
  },
  {
    id: 'arroz-cubana', n: 'Arroz a la cubana', e: '🍚', tipo: 'ambos', tags: ['vegetariano', 'niños', 'rapida'],
    ing: [['arroz', 300], ['huevo', 4], ['tomate_frito', 350], ['ajo', 1], ['aceite', 60], ['sal', 5]],
    m: {
      fuego: [25, ['Dora el ajo en una olla con un poco de aceite, añade el arroz y nácaralo 1 min.', 'Cubre con 700 ml de agua con sal y cuece 18 min. Deja reposar.', 'Calienta el tomate frito y fríe los huevos.', 'Sirve el arroz en molde con el tomate y el huevo encima.']],
      robot: [25, ['Pon 1,2 l de agua con sal en el vaso y el arroz en el cestillo: 18 min/Varoma/vel. 4.', 'Mientras, calienta el tomate y fríe los huevos en sartén.', 'Sirve el arroz con el tomate y el huevo.']]
    }
  },
  {
    id: 'crema-calabacin', n: 'Crema de calabacín', e: '🥒', tipo: 'cena', tags: ['vegetariano', 'ligera'],
    ing: [['calabacin', 800], ['puerro', 1], ['patata', 150], ['queso_fresco', 80], ['caldo_verduras', 500], ['aceite', 20], ['sal', 5], ['pimienta', 1]],
    m: {
      fuego: [30, ['Rehoga el puerro en rodajas con aceite 5 min.', 'Añade el calabacín y la patata troceados y el caldo. Cuece 20 min.', 'Tritura con el queso fresco hasta que quede fino. Salpimienta.']],
      robot: [28, ['Trocea el puerro 4 seg/vel. 5 y sofríe con aceite 4 min/120 °C/vel. 1.', 'Añade calabacín, patata y caldo: 20 min/100 °C/vel. 1.', 'Añade el queso fresco y tritura 1 min/vel. 5-10 progresivo.']]
    }
  },
  {
    id: 'crema-calabaza', n: 'Crema de calabaza y zanahoria', e: '🎃', tipo: 'cena', tags: ['vegetariano', 'ligera'],
    ing: [['calabaza', 700], ['zanahoria', 200], ['cebolla', 120], ['caldo_verduras', 600], ['nata', 100], ['aceite', 20], ['sal', 5], ['comino', 1]],
    m: {
      fuego: [35, ['Pocha la cebolla en aceite 5 min.', 'Añade calabaza y zanahoria troceadas, el comino y el caldo. Cuece 25 min.', 'Tritura con la nata y ajusta la sal.']],
      horno: [50, ['Asa la calabaza, la zanahoria y la cebolla troceadas con aceite y sal 35 min a 200 °C.', 'Tritúralas con el caldo caliente, el comino y la nata.']],
      robot: [30, ['Pica la cebolla 3 seg/vel. 5 y sofríe 4 min/120 °C/vel. 1.', 'Añade calabaza, zanahoria, comino y caldo: 22 min/100 °C/vel. 1.', 'Añade la nata y tritura 1 min/vel. 5-10 progresivo.']]
    }
  },
  {
    id: 'pisto', n: 'Pisto con huevo', e: '🍳', tipo: 'cena', tags: ['vegetariano', 'ligera'],
    ing: [['calabacin', 400], ['berenjena', 300], ['pimiento_rojo', 150], ['pimiento_verde', 150], ['cebolla', 150], ['tomate_triturado', 400], ['huevo', 4], ['aceite', 40], ['sal', 5], ['azucar', 3]],
    m: {
      fuego: [45, ['Pocha cebolla y pimientos en dados en aceite 10 min.', 'Añade berenjena y calabacín en dados y cocina 10 min.', 'Agrega el tomate, la sal y el azúcar y deja 15 min a fuego suave.', 'Haz huecos, casca los huevos y tapa 4 min hasta que cuajen.']],
      horno: [45, ['Mezcla todas las verduras en dados con aceite y sal en una fuente y hornea 25 min a 200 °C.', 'Añade el tomate, remueve y hornea 10 min.', 'Casca los huevos encima y hornea 6 min más.']],
      robot: [40, ['Trocea cebolla y pimientos 4 seg/vel. 4 y sofríe con aceite 8 min/120 °C/giro inverso/vel. cuchara.', 'Añade calabacín y berenjena en dados: 10 min/120 °C/giro inverso/vel. cuchara.', 'Añade tomate, sal y azúcar: 15 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con huevo frito o a la plancha.']]
    }
  },
  {
    id: 'albondigas', n: 'Albóndigas en salsa', e: '🧆', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['carne_picada', 500], ['huevo', 1], ['pan_rallado', 40], ['ajo', 2], ['perejil', 2], ['cebolla', 150], ['zanahoria', 100], ['tomate_triturado', 400], ['vino_blanco', 100], ['harina', 20], ['arroz', 200], ['aceite', 50], ['sal', 6]],
    m: {
      fuego: [50, ['Mezcla la carne con huevo, pan rallado, ajo y perejil picados y sal. Forma bolas y pásalas por harina.', 'Dóralas en una cazuela con aceite y resérvalas.', 'En el mismo aceite sofríe cebolla y zanahoria 8 min, añade vino y tomate y cuece 10 min. Tritura la salsa.', 'Vuelve a poner las albóndigas y cocina 15 min. Sirve con arroz blanco.']],
      airfryer: [40, ['Forma las albóndigas como en la receta tradicional y úntalas con un poco de aceite.', 'Cocínalas 12 min a 190 °C, agitando a mitad.', 'Prepara la salsa en una cazuela y cuece las albóndigas en ella 10 min.', 'Sirve con arroz blanco.']],
      robot: [45, ['Forma las albóndigas y colócalas en el Varoma.', 'Sofríe cebolla y zanahoria picadas con aceite 8 min/120 °C/vel. 1. Añade vino y tomate y tritura 30 seg/vel. 7.', 'Coloca el Varoma y programa 25 min/Varoma/vel. 1.', 'Mezcla las albóndigas con la salsa. Sirve con arroz.']]
    }
  },
  {
    id: 'lomo-pimientos', n: 'Lomo a la plancha con pimientos', e: '🥩', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['cerdo_lomo', 600], ['pimiento_verde', 300], ['pimiento_rojo', 200], ['ajo', 2], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [20, ['Fríe los pimientos en tiras a fuego medio con aceite y sal 12 min.', 'Haz el lomo salado a la plancha muy caliente 2 min por lado con el ajo picado.', 'Sirve el lomo con los pimientos.']],
      airfryer: [22, ['Cocina los pimientos en tiras con aceite y sal 12 min a 190 °C.', 'Añade el lomo salado con ajo picado y cocina 7 min a 200 °C, girándolo a mitad.']]
    }
  },
  {
    id: 'ensalada-pasta', n: 'Ensalada de pasta con atún', e: '🥗', tipo: 'ambos', tags: ['pescado', 'rapida'],
    ing: [['pasta_corta', 300], ['atun', 3], ['tomate_cherry', 250], ['maiz', 1], ['aceitunas', 80], ['huevo', 2], ['aceite', 40], ['vinagre', 15], ['sal', 5]],
    m: {
      fuego: [20, ['Cuece la pasta y los huevos (10 min). Enfría todo con agua fría.', 'Mezcla la pasta con el atún, los cherrys partidos, el maíz, las aceitunas y el huevo picado.', 'Aliña con aceite, vinagre y sal.']],
      robot: [20, ['Cuece la pasta en el vaso con 1,2 l de agua y sal y los huevos en el Varoma: tiempo del paquete/100 °C/giro inverso/vel. cuchara.', 'Enfría y mezcla con el resto de ingredientes. Aliña.']]
    }
  },
  {
    id: 'revuelto-champis', n: 'Revuelto de champiñones y jamón', e: '🍄', tipo: 'cena', tags: ['ligera', 'rapida'],
    ing: [['huevo', 7], ['champinon', 400], ['jamon', 100], ['ajo', 2], ['aceite', 20], ['sal', 3]],
    m: {
      fuego: [15, ['Saltea el ajo y los champiñones a fuego fuerte 6 min.', 'Añade el jamón 1 min.', 'Baja el fuego, incorpora los huevos batidos con sal y remueve hasta que estén jugosos.']]
    }
  },
  {
    id: 'huevos-rotos', n: 'Huevos rotos con jamón', e: '🍳', tipo: 'cena', tags: ['niños'],
    ing: [['patata', 800], ['huevo', 4], ['jamon', 120], ['aceite', 100], ['sal', 5]],
    m: {
      fuego: [30, ['Fríe las patatas cortadas en bastones en aceite caliente hasta dorarlas. Sala.', 'Fríe los huevos.', 'Sirve las patatas con el jamón y los huevos encima, rómpelos al servir.']],
      airfryer: [30, ['Mezcla las patatas en bastones con 1 cucharada de aceite y sal.', 'Cocina 22 min a 190 °C agitando cada 7 min.', 'Sirve con jamón y huevo frito encima.']],
      horno: [45, ['Hornea las patatas en bastones con aceite y sal 35 min a 210 °C, girándolas a mitad.', 'Casca los huevos encima los últimos 6 min y termina con el jamón.']]
    }
  },
  {
    id: 'berenjenas-rellenas', n: 'Berenjenas rellenas de carne', e: '🍆', tipo: 'comida', tags: ['carne'],
    ing: [['berenjena', 800], ['carne_picada', 350], ['cebolla', 150], ['tomate_frito', 250], ['queso_rallado', 100], ['aceite', 30], ['sal', 5]],
    m: {
      horno: [55, ['Parte las berenjenas por la mitad, hazles cortes y ásalas 25 min a 200 °C con aceite y sal.', 'Vacía la pulpa y sofríela con la cebolla y la carne 10 min. Añade el tomate.', 'Rellena, cubre con queso y gratina 10 min.']],
      airfryer: [40, ['Asa las medias berenjenas con aceite y sal 15 min a 190 °C.', 'Prepara el relleno en sartén con la pulpa, cebolla, carne y tomate.', 'Rellena, cubre con queso y cocina 6 min a 200 °C.']]
    }
  },
  {
    id: 'arroz-pollo', n: 'Arroz con pollo y verduras', e: '🥘', tipo: 'comida', tags: ['carne'],
    ing: [['arroz', 320], ['pollo_muslos', 500], ['pimiento_rojo', 150], ['judias_verdes', 150], ['tomate', 150], ['ajo', 2], ['pimenton', 4], ['caldo_pollo', 900], ['aceite', 40], ['sal', 5]],
    m: {
      fuego: [45, ['Dora el pollo troceado en una paella o cazuela con aceite.', 'Añade el pimiento y las judías troceados y sofríe 5 min. Agrega ajo, tomate rallado y pimentón.', 'Incorpora el arroz, remueve y vierte el caldo caliente. Cuece 18 min sin remover.', 'Deja reposar 5 min tapado.']],
      robot: [40, ['Sofríe el pollo con aceite 8 min/120 °C/giro inverso/vel. cuchara.', 'Añade pimiento, judías, ajo, tomate y pimentón: 5 min/120 °C/giro inverso/vel. cuchara.', 'Añade el arroz y el caldo: 15 min/100 °C/giro inverso/vel. cuchara.', 'Pasa a una fuente y deja reposar 5 min.']]
    }
  },
  {
    id: 'pollo-limon', n: 'Pollo al limón con arroz', e: '🍋', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['pollo_pechuga', 600], ['limon', 2], ['ajo', 2], ['harina', 20], ['caldo_pollo', 200], ['arroz', 200], ['aceite', 30], ['sal', 4]],
    m: {
      fuego: [25, ['Corta el pollo en tiras, sálalo y enharínalo ligeramente.', 'Dóralo en una sartén con aceite y el ajo.', 'Añade el zumo de los limones y el caldo y deja reducir 5 min hasta que espese.', 'Sirve con arroz blanco.']],
      airfryer: [22, ['Marina el pollo en tiras con limón, ajo, sal y aceite 10 min.', 'Cocina 12 min a 200 °C agitando a mitad.', 'Reduce el jugo de la marinada con el caldo en un cazo y riega el pollo. Sirve con arroz.']],
      horno: [35, ['Coloca el pollo en una fuente con limón en rodajas, ajo, sal, aceite y el caldo.', 'Hornea 25 min a 200 °C.', 'Sirve con arroz blanco.']]
    }
  },
  {
    id: 'espaguetis-gambas', n: 'Espaguetis con gambas al ajillo', e: '🦐', tipo: 'comida', tags: ['pescado', 'rapida'],
    ing: [['espagueti', 400], ['gambas', 400], ['ajo', 5], ['perejil_fresco', 1], ['aceite', 60], ['sal', 6]],
    m: {
      fuego: [20, ['Cuece la pasta en agua con sal según el paquete.', 'Dora el ajo laminado en el aceite, añade las gambas y saltéalas 2 min.', 'Mezcla con la pasta escurrida y un poco del agua de cocción. Termina con perejil.']],
      robot: [22, ['Pon 1,2 l de agua con sal: 10 min/100 °C/vel. 1. Añade la pasta y cuece el tiempo del paquete/100 °C/giro inverso/vel. cuchara. Escurre.', 'Sofríe el ajo con el aceite 4 min/120 °C/vel. 1, añade gambas 3 min/120 °C/giro inverso/vel. cuchara.', 'Mezcla con la pasta y el perejil.']]
    }
  },
  {
    id: 'alubias-verduras', n: 'Alubias estofadas con verduras', e: '🫘', tipo: 'comida', tags: ['legumbres', 'vegetariano'],
    ing: [['alubias', 800], ['cebolla', 150], ['pimiento_rojo', 100], ['zanahoria', 150], ['calabacin', 200], ['tomate_triturado', 200], ['pimenton', 3], ['caldo_verduras', 500], ['aceite', 30], ['sal', 4]],
    m: {
      fuego: [30, ['Sofríe cebolla, pimiento y zanahoria picados 10 min.', 'Añade el calabacín, el pimentón y el tomate y cocina 5 min.', 'Incorpora las alubias escurridas y el caldo y cuece 12 min a fuego suave.']],
      robot: [30, ['Trocea cebolla, pimiento y zanahoria 4 seg/vel. 4 y sofríe con aceite 8 min/120 °C/vel. 1.', 'Añade calabacín, pimentón y tomate: 5 min/120 °C/giro inverso/vel. cuchara.', 'Añade alubias, caldo y sal: 12 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'sopa-pollo', n: 'Sopa de pollo con fideos', e: '🍜', tipo: 'cena', tags: ['carne', 'ligera', 'niños'],
    ing: [['pollo_pechuga', 250], ['caldo_pollo', 1500], ['fideos', 150], ['zanahoria', 100], ['puerro', 1], ['huevo', 2], ['sal', 3]],
    m: {
      fuego: [30, ['Cuece el pollo, la zanahoria y el puerro troceados en el caldo 15 min.', 'Desmenuza el pollo y vuelve a echarlo.', 'Añade los fideos y cuece 4 min. Sirve con huevo cocido picado.']],
      robot: [30, ['Pon caldo, pollo, zanahoria y puerro: 15 min/100 °C/giro inverso/vel. cuchara.', 'Saca el pollo, desmenúzalo y devuélvelo.', 'Añade los fideos: 5 min/100 °C/giro inverso/vel. cuchara. Sirve con huevo cocido.']]
    }
  },
  {
    id: 'brocoli-gratinado', n: 'Brócoli gratinado con bechamel', e: '🥦', tipo: 'cena', tags: ['vegetariano', 'ligera'],
    ing: [['brocoli', 800], ['leche', 500], ['harina', 40], ['mantequilla', 40], ['queso_rallado', 100], ['sal', 4], ['pimienta', 1]],
    m: {
      horno: [35, ['Cuece el brócoli en ramitos 5 min y escúrrelo.', 'Haz la bechamel: funde la mantequilla, tuesta la harina 1 min y añade la leche sin dejar de remover hasta que espese.', 'Cubre el brócoli con la bechamel y el queso y gratina 12 min a 220 °C.']],
      airfryer: [25, ['Cuece el brócoli 5 min y prepara la bechamel en un cazo.', 'Pon el brócoli en un molde apto, cubre con bechamel y queso.', 'Cocina 8 min a 190 °C.']],
      robot: [35, ['Cuece el brócoli en el Varoma con 500 ml de agua en el vaso: 15 min/Varoma/vel. 1. Vacía el vaso.', 'Bechamel: leche, harina, mantequilla, sal y pimienta 7 min/90 °C/vel. 4.', 'Cubre el brócoli con la bechamel y el queso y gratina en horno o freidora.']]
    }
  },
  {
    id: 'merluza-panaderas', n: 'Merluza al horno con patatas panaderas', e: '🐟', tipo: 'comida', tags: ['pescado'],
    ing: [['merluza', 700], ['patata', 700], ['cebolla', 200], ['pimiento_verde', 100], ['ajo', 3], ['vino_blanco', 100], ['perejil', 2], ['aceite', 60], ['sal', 6]],
    m: {
      horno: [50, ['Corta patatas, cebolla y pimiento en láminas, sala y hornea con aceite 30 min a 190 °C.', 'Coloca la merluza encima, riega con el vino y un majado de ajo, perejil y aceite.', 'Hornea 12 min más.']],
      airfryer: [38, ['Mezcla patata, cebolla y pimiento en láminas con aceite y sal y cocina 20 min a 180 °C.', 'Pon la merluza encima con el majado de ajo y perejil y cocina 10 min a 190 °C.']]
    }
  },
  {
    id: 'ensalada-garbanzos', n: 'Ensalada de garbanzos', e: '🥗', tipo: 'ambos', tags: ['legumbres', 'vegetariano', 'ligera', 'rapida'],
    ing: [['garbanzos', 800], ['tomate', 300], ['pepino', 250], ['pimiento_rojo', 100], ['cebolla_morada', 80], ['aceitunas', 60], ['aceite', 40], ['vinagre', 15], ['sal', 4], ['comino', 1]],
    m: {
      sin: [10, ['Escurre y lava los garbanzos.', 'Pica tomate, pepino, pimiento y cebolla en dados pequeños.', 'Mezcla todo con las aceitunas y aliña con aceite, vinagre, sal y comino.']]
    }
  },
  {
    id: 'calabacines-atun', n: 'Calabacines rellenos de atún', e: '🥒', tipo: 'cena', tags: ['pescado', 'ligera'],
    ing: [['calabacin', 800], ['atun', 3], ['cebolla', 100], ['tomate_frito', 150], ['queso_rallado', 80], ['aceite', 20], ['sal', 4]],
    m: {
      horno: [40, ['Parte los calabacines a lo largo, vacíalos y ásalos 15 min a 200 °C.', 'Sofríe la cebolla con la pulpa picada, añade el atún y el tomate.', 'Rellena, cubre con queso y gratina 10 min.']],
      airfryer: [30, ['Cocina las barquitas de calabacín 10 min a 190 °C.', 'Prepara el relleno en sartén.', 'Rellena, cubre con queso y cocina 6 min a 200 °C.']]
    }
  },
  {
    id: 'filete-patatas', n: 'Filete de ternera con patatas fritas', e: '🥩', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['ternera_filetes', 600], ['patata', 800], ['ajo', 2], ['lechuga', 1], ['aceite', 100], ['sal', 6]],
    m: {
      fuego: [30, ['Fríe las patatas en bastones en abundante aceite hasta que estén doradas. Sala.', 'Haz los filetes a la plancha muy caliente con ajo picado, 1 min por lado.', 'Sirve con las patatas y lechuga.']],
      airfryer: [32, ['Cocina las patatas en bastones con 1 cucharada de aceite y sal 22 min a 190 °C.', 'Cocina los filetes 4 min a 200 °C o hazlos a la plancha.', 'Sirve con lechuga.']]
    }
  },
  {
    id: 'crema-puerros', n: 'Crema de puerros', e: '🥣', tipo: 'cena', tags: ['vegetariano', 'ligera'],
    ing: [['puerro', 4], ['patata', 300], ['cebolla', 100], ['caldo_verduras', 800], ['nata', 100], ['mantequilla', 20], ['sal', 4], ['pimienta', 1]],
    m: {
      fuego: [35, ['Rehoga el puerro y la cebolla en la mantequilla 8 min.', 'Añade la patata troceada y el caldo y cuece 20 min.', 'Tritura con la nata y salpimienta. Se puede tomar fría.']],
      robot: [30, ['Trocea puerro y cebolla 5 seg/vel. 5 y sofríe con mantequilla 6 min/120 °C/vel. 1.', 'Añade patata y caldo: 20 min/100 °C/vel. 1.', 'Añade la nata y tritura 1 min/vel. 5-10 progresivo.']]
    }
  },
  {
    id: 'judias-patatas', n: 'Judías verdes con patata y huevo', e: '🫛', tipo: 'cena', tags: ['vegetariano', 'ligera'],
    ing: [['judias_verdes', 600], ['patata', 400], ['huevo', 4], ['ajo', 3], ['pimenton', 3], ['aceite', 40], ['sal', 5]],
    m: {
      fuego: [30, ['Cuece judías y patata troceadas en agua con sal 15 min. Cuece los huevos 10 min.', 'Escurre y saltea con ajo laminado dorado en aceite y el pimentón.', 'Sirve con el huevo cocido en cuartos.']],
      robot: [30, ['Pon 600 ml de agua con sal en el vaso, las patatas en el cestillo y judías y huevos en el Varoma: 25 min/Varoma/vel. 1.', 'Sofríe el ajo en sartén con el pimentón y mezcla con las verduras.', 'Sirve con el huevo.']]
    }
  },
  {
    id: 'ensalada-pollo', n: 'Ensalada templada de pollo', e: '🥗', tipo: 'cena', tags: ['carne', 'ligera', 'rapida'],
    ing: [['pollo_pechuga', 400], ['lechuga', 1], ['tomate_cherry', 200], ['aguacate', 1], ['maiz', 1], ['queso_fresco', 120], ['aceite', 40], ['vinagre', 10], ['miel', 10], ['sal', 3]],
    m: {
      fuego: [15, ['Haz el pollo a la plancha con sal y córtalo en tiras.', 'Monta la lechuga con cherrys, aguacate, maíz y queso fresco.', 'Pon el pollo templado encima y aliña con aceite, vinagre y miel.']],
      airfryer: [18, ['Cocina el pollo en tiras con sal y aceite 10 min a 200 °C.', 'Monta la ensalada y pon el pollo encima. Aliña con aceite, vinagre y miel.']]
    }
  },
  {
    id: 'gazpacho-tosta', n: 'Gazpacho con tostas de atún', e: '🍅', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['tomate', 1000], ['pepino', 150], ['pimiento_verde', 80], ['ajo', 1], ['aceite', 60], ['vinagre', 20], ['sal', 6], ['pan_hamburguesa', 4], ['atun', 2]],
    m: {
      sin: [15, ['Trocea los tomates, el pepino, el pimiento y el ajo.', 'Tritura con aceite, vinagre, sal y un vaso de agua fría hasta que esté fino. Enfría.', 'Tuesta el pan y cúbrelo con el atún.']],
      robot: [10, ['Pon todas las verduras troceadas con aceite, vinagre, sal y 150 ml de agua fría.', 'Tritura 2 min/vel. 5-10 progresivo.', 'Sirve muy frío con las tostas de atún.']]
    }
  },
  {
    id: 'es-salmorejo', n: 'Salmorejo con huevo y jamón', e: '🍅', tipo: 'cena', tags: ['ligera', 'rapida'],
    ing: [['tomate', 1000], ['pan_barra', 1], ['ajo', 1], ['huevo', 2], ['jamon', 80], ['aceite', 100], ['vinagre', 10], ['sal', 6]],
    m: {
      sin: [15, ['Cuece los huevos 10 min si no los tienes cocidos (es el único paso con fuego).', 'Tritura los tomates con el pan troceado, el ajo, la sal y el vinagre hasta que quede muy fino.', 'Añade el aceite poco a poco sin dejar de triturar para que emulsione. Enfría.', 'Sirve con huevo cocido picado y taquitos de jamón.']],
      robot: [10, ['Tritura tomate, pan, ajo, sal y vinagre 1 min/vel. 5-10 progresivo.', 'Con la máquina en vel. 5, añade el aceite por la boca en hilo.', 'Sirve frío con el huevo y el jamón.']]
    }
  },
  {
    id: 'es-flamenquin', n: 'Flamenquines con ensalada', e: '🥖', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['cerdo_lomo', 500], ['jamon_cocido', 150], ['queso_lonchas', 120], ['huevo', 2], ['harina', 40], ['pan_rallado', 120], ['lechuga', 1], ['tomate', 250], ['aceite', 150], ['sal', 4]],
    m: {
      fuego: [35, ['Aplana los filetes de lomo, sálalos y cubre cada uno con jamón cocido y queso.', 'Enróllalos apretando y pásalos por harina, huevo y pan rallado.', 'Fríelos en aceite caliente 5–6 min hasta que estén dorados. Escúrrelos.', 'Sirve con ensalada de lechuga y tomate.']],
      airfryer: [30, ['Prepara y empana los flamenquines como en la receta tradicional.', 'Pulverízalos con aceite y cocínalos 14 min a 195 °C, girándolos a mitad.', 'Sirve con ensalada.']],
      horno: [35, ['Prepara y empana los flamenquines y colócalos en una bandeja con papel.', 'Riégalos con un hilo de aceite y hornea 22 min a 210 °C, girándolos a mitad.', 'Sirve con ensalada.']]
    }
  },
  {
    id: 'es-huevos-flamenca', n: 'Huevos a la flamenca', e: '🍳', tipo: 'cena', tags: ['rapida'],
    ing: [['huevo', 8], ['tomate_frito', 400], ['guisantes', 150], ['chorizo', 100], ['jamon', 80], ['cebolla', 100], ['pimiento_rojo', 100], ['aceite', 20], ['sal', 3]],
    m: {
      fuego: [25, ['Sofríe la cebolla y el pimiento picados 6 min. Añade el chorizo en rodajas y el jamón 2 min.', 'Incorpora el tomate y los guisantes y cuece 5 min.', 'Reparte en cazuelitas o en una sartén, casca los huevos encima y tapa 5 min hasta que cuajen las claras.']],
      horno: [30, ['Prepara el sofrito con tomate y guisantes en una sartén.', 'Pásalo a cazuelitas, casca 2 huevos en cada una y hornea 10 min a 200 °C.']]
    }
  },
  {
    id: 'es-pollo-ajillo', n: 'Pollo al ajillo con patatas', e: '🍗', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['pollo_entero', 1200], ['ajo', 10], ['vino_blanco', 150], ['laurel', 1], ['patata', 600], ['perejil', 2], ['aceite', 80], ['sal', 7]],
    m: {
      fuego: [50, ['Sala el pollo troceado y dóralo bien en una cazuela con el aceite. Retíralo.', 'Fríe en el mismo aceite los ajos sin pelar, chafados, 2 min. Vuelve a poner el pollo con el laurel.', 'Riega con el vino, tapa y cuece 25 min a fuego suave.', 'Fríe o asa las patatas en dados aparte y sirve con perejil.']],
      airfryer: [45, ['Mezcla el pollo troceado con sal, aceite, los ajos chafados y el laurel.', 'Cocina 15 min a 180 °C. Añade las patatas en dados aliñadas y cocina 20 min a 190 °C, removiendo a mitad.', 'Riega con el vino caliente y termina con perejil.']],
      horno: [55, ['Coloca el pollo y las patatas en dados en una fuente con ajos chafados, laurel, aceite y sal.', 'Hornea 30 min a 200 °C, riega con el vino y hornea 15 min más.']]
    }
  },
  {
    id: 'es-ajoblanco', n: 'Ajoblanco con uvas y tosta de atún', e: '🥣', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['almendras', 150], ['pan_barra', 1], ['ajo', 1], ['aceite', 80], ['vinagre', 20], ['manzana', 200], ['atun', 2], ['sal', 5]],
    m: {
      sin: [15, ['Remoja medio pan en agua 5 min y escúrrelo.', 'Tritura las almendras con el pan remojado, el ajo, la sal, el vinagre y 700 ml de agua fría.', 'Añade el aceite en hilo sin dejar de triturar. Enfría.', 'Sirve con dados de manzana y acompaña con el resto del pan tostado con atún.']],
      robot: [10, ['Tritura almendras, pan remojado, ajo, sal y vinagre 1 min/vel. 10.', 'Añade 700 ml de agua fría y el aceite en hilo 1 min/vel. 5.', 'Sirve frío con manzana y tostas de atún.']]
    }
  },
  {
    id: 'es-pulpo-feira', n: 'Pulpo a feira con cachelos', e: '🐙', tipo: 'comida', tags: ['pescado', 'rapida'],
    ing: [['pulpo', 600], ['patata', 800], ['pimenton', 6], ['pimenton_picante', 2], ['aceite', 60], ['sal', 8]],
    m: {
      fuego: [30, ['Cuece las patatas con piel en agua con sal 20–25 min. Pélalas y córtalas en rodajas gruesas.', 'Calienta el pulpo cocido 2 min en el agua de las patatas y córtalo en rodajas con tijera.', 'Monta sobre las patatas y aliña con sal gorda, pimentón dulce y picante y buen aceite.']],
      robot: [35, ['Pon 800 ml de agua con sal en el vaso y las patatas cortadas en el Varoma: 25 min/Varoma/vel. 1.', 'Añade el pulpo al Varoma los últimos 3 min para templarlo.', 'Monta y aliña con pimentón, sal y aceite.']]
    }
  },
  {
    id: 'es-caldo-gallego', n: 'Caldo gallego', e: '🥬', tipo: 'comida', tags: ['legumbres', 'carne'],
    ing: [['alubias', 400], ['repollo', 400], ['patata', 500], ['chorizo', 100], ['panceta', 100], ['caldo_carne', 1500], ['sal', 4]],
    m: {
      fuego: [50, ['Cuece el chorizo y la panceta en el caldo 15 min.', 'Añade las patatas cascadas y cuece 15 min.', 'Incorpora el repollo en tiras y las alubias escurridas y cuece 15 min más. Ajusta la sal y deja reposar.']],
      robot: [45, ['Pon caldo, chorizo y panceta: 10 min/100 °C/giro inverso/vel. cuchara.', 'Añade patata en dados y repollo en tiras: 20 min/100 °C/giro inverso/vel. cuchara.', 'Añade las alubias: 5 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'es-merluza-gallega', n: 'Merluza a la gallega', e: '🐟', tipo: 'cena', tags: ['pescado', 'ligera'],
    ing: [['merluza', 700], ['patata', 600], ['cebolla', 100], ['laurel', 1], ['ajo', 4], ['pimenton', 6], ['aceite', 70], ['sal', 6]],
    m: {
      fuego: [30, ['Cuece las patatas en rodajas gruesas con la cebolla y el laurel en agua con sal 15 min.', 'Añade la merluza y cuece 5 min más. Escurre y coloca en una fuente.', 'Dora el ajo laminado en el aceite, aparta del fuego, añade el pimentón y riega el pescado y las patatas.']],
      robot: [30, ['Pon 600 ml de agua con sal y laurel en el vaso, las patatas en el Varoma y cocina 15 min/Varoma/vel. 1.', 'Añade la merluza al Varoma y 8 min más/Varoma/vel. 1.', 'Prepara la ajada en un cazo y riega el plato.']]
    }
  },
  {
    id: 'es-marmitako', n: 'Marmitako de atún', e: '🐟', tipo: 'comida', tags: ['pescado'],
    ing: [['atun_fresco', 500], ['patata', 800], ['cebolla', 150], ['pimiento_verde', 150], ['pimiento_rojo', 100], ['tomate_triturado', 200], ['pimenton', 5], ['caldo_pescado', 900], ['aceite', 40], ['sal', 6]],
    m: {
      fuego: [45, ['Sofríe cebolla y pimientos picados 10 min. Añade el pimentón y el tomate y cocina 5 min.', 'Incorpora las patatas cascadas, rehógalas 2 min y cubre con el caldo. Cuece 20 min.', 'Apaga el fuego, añade el atún en dados con sal y tapa 5 min: se hace con el calor.']],
      robot: [40, ['Pica cebolla y pimientos 4 seg/vel. 4 y sofríe con aceite 8 min/120 °C/vel. 1.', 'Añade pimentón, tomate, patatas cascadas y caldo: 20 min/100 °C/giro inverso/vel. cuchara.', 'Pasa a una cazuela, añade el atún salado y tapa 5 min.']]
    }
  },
  {
    id: 'es-bacalao-vizcaina', n: 'Bacalao a la vizcaína', e: '🐟', tipo: 'comida', tags: ['pescado'],
    ing: [['bacalao', 700], ['cebolla', 300], ['piquillos', 1], ['tomate_triturado', 200], ['ajo', 2], ['pimenton', 6], ['harina', 20], ['arroz', 200], ['aceite', 50], ['sal', 2]],
    m: {
      fuego: [45, ['Pocha la cebolla y el ajo picados a fuego lento 15 min.', 'Añade los piquillos, el pimentón y el tomate, cuece 10 min y tritura la salsa.', 'Enharina el bacalao, dóralo 2 min por lado y ponlo en la salsa 6 min.', 'Sirve con arroz blanco.']],
      horno: [45, ['Prepara la salsa vizcaína en el fuego y ponla en una fuente.', 'Coloca encima el bacalao con la piel hacia arriba y hornea 12 min a 190 °C.', 'Sirve con arroz.']],
      robot: [40, ['Pica cebolla y ajo 4 seg/vel. 5 y sofríe con aceite 12 min/120 °C/vel. 1.', 'Añade piquillos, pimentón y tomate: 8 min/100 °C/vel. 1. Tritura 30 seg/vel. 7.', 'Pon el bacalao en el Varoma y cocina 12 min/Varoma/vel. 1. Sirve con la salsa y arroz.']]
    }
  },
  {
    id: 'es-porrusalda', n: 'Porrusalda', e: '🥣', tipo: 'cena', tags: ['vegetariano', 'ligera'],
    ing: [['puerro', 5], ['patata', 500], ['zanahoria', 200], ['ajo', 2], ['caldo_verduras', 1200], ['aceite', 40], ['sal', 5]],
    m: {
      fuego: [40, ['Rehoga el ajo y el puerro en rodajas en el aceite 6 min.', 'Añade la zanahoria en rodajas y las patatas cascadas y rehoga 2 min.', 'Cubre con el caldo y cuece 25 min a fuego suave. Ajusta la sal.']],
      robot: [35, ['Sofríe ajo y puerro troceados con aceite 6 min/120 °C/giro inverso/vel. cuchara.', 'Añade zanahoria, patata cascada, caldo y sal: 25 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'es-fabada', n: 'Fabada asturiana', e: '🫘', tipo: 'comida', tags: ['legumbres', 'carne'],
    ing: [['alubias', 800], ['chorizo', 150], ['morcilla', 150], ['panceta', 150], ['cebolla', 100], ['ajo', 2], ['azafran', 1], ['pimenton', 3], ['caldo_carne', 800], ['sal', 3]],
    m: {
      fuego: [45, ['Cuece el chorizo, la morcilla y la panceta enteros con la cebolla, el ajo y el caldo 25 min a fuego suave.', 'Retira la cebolla, añade el pimentón, el azafrán y las alubias escurridas.', 'Cuece 15 min más moviendo la olla en vez de remover, para que no se rompan. Corta el compango y sirve.']],
      robot: [40, ['Pon caldo, chorizo, panceta, cebolla y ajo: 20 min/100 °C/giro inverso/vel. cuchara.', 'Añade morcilla, pimentón, azafrán y alubias: 12 min/90 °C/giro inverso/vel. cuchara.', 'Reposa 5 min y sirve con el compango troceado.']]
    }
  },
  {
    id: 'es-cachopo', n: 'Cachopo con patatas', e: '🥩', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['ternera_filetes', 600], ['jamon_cocido', 150], ['queso_lonchas', 150], ['huevo', 2], ['harina', 40], ['pan_rallado', 150], ['patata', 700], ['pimiento_verde', 150], ['aceite', 200], ['sal', 6]],
    m: {
      fuego: [40, ['Haz bocadillos con dos filetes finos salados, jamón y queso en medio.', 'Pásalos por harina, huevo y pan rallado y fríelos 4 min por lado en aceite abundante.', 'Sirve con patatas fritas y pimientos fritos.']],
      airfryer: [40, ['Monta y empana los cachopos como en la receta tradicional y pulverízalos con aceite.', 'Cocina las patatas en bastones 20 min a 190 °C y resérvalas.', 'Cocina los cachopos 12 min a 195 °C, girándolos a mitad.']],
      horno: [45, ['Monta y empana los cachopos y colócalos en una bandeja con papel.', 'Hornea con las patatas en gajos aliñadas 25 min a 210 °C, girando a mitad.']]
    }
  },
  {
    id: 'es-escalivada', n: 'Escalivada con anchoas', e: '🫑', tipo: 'cena', tags: ['ligera', 'pescado'],
    ing: [['berenjena', 600], ['pimiento_rojo', 600], ['cebolla', 300], ['anchoas', 1], ['ajo', 1], ['pan_barra', 1], ['aceite', 60], ['sal', 4]],
    m: {
      horno: [60, ['Asa las berenjenas, los pimientos y las cebollas enteros, untados de aceite, 50 min a 200 °C, girándolos a mitad.', 'Tápalos 10 min para que suden y pélalos.', 'Corta en tiras, aliña con aceite, sal y ajo picado y sirve sobre pan tostado con las anchoas.']],
      airfryer: [45, ['Corta las verduras por la mitad, úntalas de aceite y cocínalas 35 min a 190 °C.', 'Pélalas, córtalas en tiras y aliña. Sirve sobre pan tostado con las anchoas.']]
    }
  },
  {
    id: 'es-espinacas-catalana', n: 'Espinacas a la catalana con huevo', e: '🥬', tipo: 'cena', tags: ['vegetariano', 'ligera', 'rapida'],
    ing: [['espinacas', 800], ['pasas', 50], ['pinones', 30], ['ajo', 2], ['huevo', 4], ['aceite', 30], ['sal', 4]],
    m: {
      fuego: [20, ['Remoja las pasas en agua templada 5 min.', 'Dora el ajo laminado y los piñones en el aceite.', 'Añade las espinacas por tandas y saltéalas hasta que se reduzcan. Incorpora las pasas y la sal.', 'Sirve con un huevo a la plancha o escalfado.']]
    }
  },
  {
    id: 'es-pollo-chilindron', n: 'Pollo al chilindrón', e: '🍗', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_entero', 1200], ['pimiento_rojo', 300], ['cebolla', 200], ['jamon', 80], ['tomate_triturado', 400], ['ajo', 3], ['vino_blanco', 100], ['aceite', 40], ['sal', 7]],
    m: {
      fuego: [60, ['Dora el pollo salado en una cazuela con aceite y retíralo.', 'Sofríe la cebolla, el ajo y el pimiento en tiras 10 min. Añade el jamón.', 'Agrega el vino, el tomate y el pollo. Tapa y cuece 30 min a fuego suave.']],
      robot: [50, ['Sofríe cebolla, ajo y pimiento troceados con aceite 10 min/120 °C/giro inverso/vel. cuchara.', 'Añade el pollo, el jamón, el vino, el tomate y la sal: 30 min/100 °C/giro inverso/vel. cuchara.']],
      horno: [60, ['Coloca el pollo y las verduras en tiras en una fuente con aceite y sal. Hornea 25 min a 200 °C.', 'Añade el tomate, el jamón y el vino, remueve y hornea 25 min más.']]
    }
  },
  {
    id: 'es-paella-valenciana', n: 'Paella valenciana', e: '🥘', tipo: 'comida', tags: ['carne'],
    ing: [['arroz', 400], ['pollo_entero', 700], ['conejo', 400], ['judias_verdes', 250], ['alubias', 150], ['tomate', 150], ['pimenton', 4], ['azafran', 1], ['romero', 1], ['aceite', 60], ['sal', 8]],
    m: {
      fuego: [60, ['Dora bien el pollo y el conejo salados en la paella con el aceite, 15 min.', 'Añade las judías troceadas y sofríe 5 min. Agrega el tomate rallado y el pimentón.', 'Vierte 1,4 l de agua, el azafrán y el romero y cuece 20 min. Ajusta la sal.', 'Reparte el arroz y las alubias, cuece 10 min a fuego fuerte y 8 min a fuego bajo sin remover. Reposa 5 min.']],
      horno: [60, ['Haz el sofrito de carne y verduras y el caldo como en la receta tradicional, en una paella apta para horno.', 'Reparte el arroz y las alubias, deja que hierva 5 min en el fuego.', 'Termina en el horno 15 min a 220 °C y reposa 5 min.']]
    }
  },
  {
    id: 'es-arroz-horno', n: 'Arroz al horno', e: '🥘', tipo: 'comida', tags: ['carne', 'legumbres'],
    ing: [['arroz', 400], ['cerdo_costillas', 400], ['morcilla', 150], ['garbanzos', 300], ['patata', 250], ['tomate', 250], ['ajo', 5], ['pimenton', 4], ['azafran', 1], ['caldo_carne', 900], ['aceite', 50], ['sal', 6]],
    m: {
      horno: [60, ['Dora las costillas saladas, la morcilla y las patatas en rodajas en la cazuela. Retíralas.', 'Sofríe el arroz con el pimentón 1 min y pásalo a una cazuela de barro o fuente.', 'Coloca encima las costillas, la morcilla, los garbanzos, las patatas, el tomate en rodajas y una cabeza de ajos.', 'Vierte el caldo hirviendo con el azafrán y hornea 20 min a 220 °C. Reposa 5 min.']]
    }
  },
  {
    id: 'es-fideua', n: 'Fideuá', e: '🍤', tipo: 'comida', tags: ['pescado'],
    ing: [['fideua', 400], ['gambas', 250], ['calamar', 300], ['tomate', 150], ['ajo', 2], ['pimenton', 4], ['azafran', 1], ['caldo_pescado', 1000], ['aceite', 50], ['sal', 4]],
    m: {
      fuego: [35, ['Dora las gambas y resérvalas. Sofríe el calamar en anillas 3 min.', 'Añade los fideos y tuéstalos 2 min. Incorpora el ajo, el tomate rallado y el pimentón.', 'Vierte el caldo caliente con el azafrán y cuece 10 min a fuego vivo.', 'Coloca las gambas y deja 2 min más. Reposa 3 min y sirve con alioli si quieres.']],
      horno: [35, ['Prepara el sofrito con los fideos y el caldo en una paella apta para horno y cuece 5 min.', 'Coloca las gambas y termina en el horno 8 min a 220 °C, para que los fideos se pongan de punta.']]
    }
  },
  {
    id: 'es-arroz-banda', n: 'Arroz a banda', e: '🥘', tipo: 'comida', tags: ['pescado'],
    ing: [['arroz', 400], ['calamar', 300], ['gambas', 200], ['tomate', 150], ['ajo', 3], ['pimenton', 4], ['azafran', 1], ['caldo_pescado', 1200], ['aceite', 60], ['sal', 4]],
    m: {
      fuego: [40, ['Sofríe el calamar en dados y las gambas en la paella con el aceite. Retira las gambas.', 'Añade el ajo, el tomate rallado y el pimentón y sofríe 3 min. Incorpora el arroz.', 'Vierte el caldo hirviendo con el azafrán y cuece 10 min a fuego fuerte y 8 min a fuego bajo.', 'Pon las gambas encima, reposa 5 min y sirve.']],
      robot: [35, ['Sofríe calamar, ajo, tomate y pimentón con aceite 8 min/120 °C/giro inverso/vel. cuchara.', 'Añade arroz, caldo y azafrán: 15 min/100 °C/giro inverso/vel. cuchara.', 'Pasa a una fuente con las gambas salteadas y reposa 5 min.']]
    }
  },
  {
    id: 'es-sopa-castellana', n: 'Sopa castellana de ajo', e: '🥣', tipo: 'cena', tags: ['ligera', 'rapida'],
    ing: [['pan_barra', 1], ['ajo', 6], ['jamon', 80], ['huevo', 4], ['pimenton', 5], ['caldo_pollo', 1200], ['aceite', 50], ['sal', 3]],
    m: {
      fuego: [25, ['Dora el ajo laminado en el aceite. Añade el jamón y el pan en rebanadas finas y tuéstalo 2 min.', 'Aparta del fuego, añade el pimentón y vierte enseguida el caldo caliente. Cuece 10 min.', 'Casca los huevos en la sopa y deja 3 min hasta que cuajen.']],
      horno: [30, ['Prepara la sopa en el fuego y pásala a cazuelitas de barro.', 'Casca un huevo en cada una y hornea 6 min a 220 °C.']]
    }
  },
  {
    id: 'es-migas', n: 'Migas con chorizo y uvas', e: '🍞', tipo: 'comida', tags: ['carne'],
    ing: [['pan_barra', 3], ['chorizo', 150], ['panceta', 150], ['ajo', 6], ['pimiento_verde', 150], ['pimenton', 3], ['manzana', 300], ['aceite', 80], ['sal', 3]],
    m: {
      fuego: [40, ['La noche antes (o 1 hora antes) corta el pan del día anterior en dados pequeños y humedécelo con agua con sal, tapado con un paño.', 'Fríe el chorizo, la panceta y el pimiento en tiras. Retíralos.', 'En el mismo aceite dora los ajos, añade el pan y el pimentón y remueve sin parar 15–20 min hasta que las migas queden sueltas y doradas.', 'Mezcla con el chorizo y la panceta y sirve con fruta en dados.']]
    }
  },
  {
    id: 'es-cocido', n: 'Cocido madrileño', e: '🍲', tipo: 'comida', tags: ['carne', 'legumbres'],
    ing: [['garbanzos', 800], ['ternera_guisar', 400], ['pollo_muslos', 400], ['chorizo', 120], ['morcilla', 120], ['panceta', 100], ['zanahoria', 200], ['patata', 400], ['repollo', 400], ['fideos', 100], ['caldo_carne', 2000], ['ajo', 2], ['sal', 5]],
    m: {
      fuego: [120, ['Cuece la ternera, el pollo y la panceta en el caldo con la zanahoria 75 min a fuego suave, desespumando.', 'Añade las patatas, el chorizo y la morcilla y cuece 20 min. Agrega los garbanzos escurridos 10 min.', 'Cuece el repollo aparte y saltéalo con ajo.', 'Cuela parte del caldo y cuece en él los fideos para la sopa. Sirve la sopa primero y luego los garbanzos, las verduras y las carnes.']],
      robot: [90, ['Pon ternera, pollo, panceta, zanahoria y caldo en el vaso: 50 min/100 °C/giro inverso/vel. cuchara.', 'Pon patatas, chorizo, morcilla y repollo en el Varoma y cocina 25 min/Varoma/giro inverso/vel. cuchara.', 'Añade los garbanzos al vaso 5 min/100 °C/giro inverso/vel. cuchara.', 'Cuela caldo y cuece los fideos aparte para la sopa.']]
    }
  },
  {
    id: 'es-patatas-revolconas', n: 'Patatas revolconas con torreznos', e: '🥔', tipo: 'cena', tags: ['carne'],
    ing: [['patata', 1000], ['panceta', 250], ['ajo', 3], ['pimenton', 8], ['laurel', 1], ['aceite', 50], ['sal', 7]],
    m: {
      fuego: [40, ['Cuece las patatas troceadas con el laurel y sal 20 min. Guarda un vaso del agua.', 'Fríe la panceta en dados hasta que esté crujiente. Retírala.', 'Dora el ajo en esa grasa, aparta del fuego y añade el pimentón.', 'Machaca las patatas con la grasa y un poco del agua hasta tener un puré rústico. Sirve con la panceta encima.']],
      robot: [35, ['Pon 600 ml de agua con sal y laurel, las patatas en el cestillo: 20 min/100 °C/vel. 1.', 'Dora la panceta y el ajo en sartén y añade el pimentón fuera del fuego.', 'Machaca las patatas con la grasa y sirve con la panceta.']]
    }
  },
  {
    id: 'es-zarangollo', n: 'Zarangollo murciano', e: '🥒', tipo: 'cena', tags: ['vegetariano', 'ligera', 'rapida'],
    ing: [['calabacin', 800], ['cebolla', 300], ['huevo', 6], ['aceite', 50], ['sal', 5], ['oregano', 1]],
    m: {
      fuego: [30, ['Pocha la cebolla en juliana en el aceite 8 min.', 'Añade el calabacín en láminas finas y cocina 15 min a fuego medio hasta que esté tierno. Sala.', 'Incorpora los huevos batidos y remueve hasta que cuajen, jugosos. Termina con orégano.']],
      airfryer: [28, ['Mezcla cebolla y calabacín en láminas con aceite y sal en un molde apto y cocina 18 min a 180 °C, removiendo.', 'Añade los huevos batidos, remueve y cocina 4 min más.']]
    }
  },
  {
    id: 'es-papas-mojo', n: 'Papas arrugadas con mojo y huevos', e: '🥔', tipo: 'cena', tags: ['vegetariano'],
    ing: [['patata', 1000], ['huevo', 4], ['pimiento_rojo', 100], ['ajo', 4], ['comino', 2], ['pimenton_picante', 3], ['pimenton', 3], ['vinagre', 30], ['aceite', 100], ['sal', 30]],
    m: {
      fuego: [35, ['Cuece las patatas pequeñas con piel en agua justa con mucha sal (unos 30 g) 20 min.', 'Tira el agua y deja las patatas en la olla a fuego bajo moviéndolas hasta que se arruguen.', 'Tritura ajo, comino, pimentones, pimiento, vinagre, aceite y una pizca de sal para el mojo.', 'Sirve las papas con el mojo y huevo cocido o a la plancha.']],
      airfryer: [35, ['Cuece las patatas en agua con sal 15 min, escúrrelas y termínalas 10 min a 200 °C para que se arruguen.', 'Prepara el mojo triturado y sirve con huevo.']]
    }
  },
  {
    id: 'es-potaje-canario', n: 'Potaje canario de verduras', e: '🥣', tipo: 'comida', tags: ['legumbres', 'vegetariano'],
    ing: [['alubias', 400], ['calabaza', 400], ['patata', 400], ['judias_verdes', 200], ['zanahoria', 150], ['maiz', 1], ['cebolla', 150], ['ajo', 2], ['tomate', 150], ['comino', 2], ['azafran', 1], ['caldo_verduras', 1500], ['aceite', 30], ['sal', 4]],
    m: {
      fuego: [50, ['Sofríe cebolla, ajo y tomate picados 8 min. Añade comino y azafrán.', 'Agrega la calabaza, la patata y la zanahoria troceadas, las judías y el caldo. Cuece 30 min.', 'Incorpora las alubias y el maíz y cuece 5 min. Aplasta un poco de calabaza para espesar.']],
      robot: [45, ['Pica cebolla, ajo y tomate 4 seg/vel. 5 y sofríe con aceite 6 min/120 °C/vel. 1.', 'Añade verduras troceadas, especias y caldo: 30 min/100 °C/giro inverso/vel. cuchara.', 'Añade alubias y maíz: 5 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'es-caldereta-cordero', n: 'Caldereta de cordero', e: '🍖', tipo: 'comida', tags: ['carne'],
    ing: [['cordero', 1000], ['cebolla', 200], ['pimiento_verde', 150], ['pimiento_rojo', 100], ['ajo', 4], ['tomate_triturado', 200], ['pimenton', 6], ['laurel', 2], ['vino_blanco', 200], ['patata', 600], ['aceite', 50], ['sal', 8]],
    m: {
      fuego: [90, ['Dora el cordero salado en una cazuela con aceite y retíralo.', 'Sofríe cebolla, pimientos y ajo picados 10 min. Añade pimentón, tomate y laurel.', 'Vuelve a poner el cordero, riega con el vino y agua hasta cubrir. Cuece tapado 50 min.', 'Añade las patatas cascadas y cuece 20 min más.']],
      robot: [80, ['Sofríe cebolla, pimientos y ajo troceados con aceite 8 min/120 °C/vel. 1.', 'Añade cordero, pimentón, tomate, laurel, vino y sal: 45 min/100 °C/giro inverso/vel. cuchara.', 'Añade las patatas cascadas: 20 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'es-patatas-riojana', n: 'Patatas a la riojana', e: '🥔', tipo: 'comida', tags: ['carne'],
    ing: [['patata', 1000], ['chorizo', 200], ['cebolla', 150], ['pimiento_verde', 100], ['ajo', 2], ['pimenton', 8], ['laurel', 1], ['caldo_carne', 1000], ['aceite', 40], ['sal', 5]],
    m: {
      fuego: [45, ['Sofríe la cebolla, el pimiento y el ajo picados 8 min. Añade el chorizo en rodajas 2 min.', 'Incorpora las patatas cascadas y el pimentón y remueve 1 min.', 'Cubre con el caldo, añade el laurel y cuece 25 min. Deja reposar 5 min.']],
      robot: [40, ['Pica cebolla, pimiento y ajo 4 seg/vel. 4 y sofríe con aceite y chorizo 8 min/120 °C/vel. 1.', 'Añade patatas cascadas, pimentón, laurel, caldo y sal: 25 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'es-menestra', n: 'Menestra de verduras', e: '🥕', tipo: 'cena', tags: ['ligera'],
    ing: [['alcachofa', 500], ['judias_verdes', 250], ['guisantes', 150], ['habas', 150], ['zanahoria', 150], ['esparragos', 1], ['jamon', 80], ['cebolla', 100], ['ajo', 2], ['harina', 10], ['caldo_verduras', 250], ['aceite', 40], ['sal', 4]],
    m: {
      fuego: [40, ['Cuece por separado alcachofas limpias, judías, zanahoria, guisantes y habas en agua con sal, cada una su tiempo (5–12 min). Guarda un poco de agua.', 'Sofríe cebolla, ajo y jamón en el aceite. Añade la harina 1 min y el caldo.', 'Incorpora todas las verduras y los espárragos troceados y cuece 5 min para que se mezclen los sabores.']],
      robot: [35, ['Pon 500 ml de agua con sal en el vaso y las verduras en el Varoma (las más duras abajo): 20 min/Varoma/vel. 1.', 'Sofríe cebolla, ajo y jamón en sartén, añade harina y caldo y mezcla con las verduras.']]
    }
  },
  {
    id: 'es-pollo-pepitoria', n: 'Pollo en pepitoria', e: '🍗', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_entero', 1200], ['cebolla', 200], ['ajo', 3], ['almendras', 50], ['huevo', 2], ['azafran', 1], ['vino_blanco', 150], ['caldo_pollo', 300], ['laurel', 1], ['harina', 20], ['arroz', 200], ['aceite', 50], ['sal', 7]],
    m: {
      fuego: [60, ['Sala y enharina el pollo y dóralo en una cazuela. Retíralo.', 'Fríe el ajo y las almendras y resérvalos. Pocha la cebolla 10 min.', 'Vuelve a poner el pollo con el laurel, el vino y el caldo y cuece 30 min.', 'Machaca almendras, ajo, azafrán y las yemas cocidas con un poco de caldo, añádelo a la salsa y cuece 5 min. Sirve con arroz y la clara picada.']],
      robot: [50, ['Pica cebolla 3 seg/vel. 5 y sofríe con aceite 6 min/120 °C/vel. 1.', 'Añade el pollo dorado, vino, caldo y laurel: 30 min/100 °C/giro inverso/vel. cuchara.', 'Añade el majado de almendras, ajo, azafrán y yemas: 5 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'es-san-jacobos', n: 'San Jacobos caseros con ensalada', e: '🧀', tipo: 'cena', tags: ['carne', 'niños', 'rapida'],
    ing: [['jamon_cocido', 300], ['queso_lonchas', 250], ['huevo', 2], ['harina', 40], ['pan_rallado', 120], ['lechuga', 1], ['tomate', 250], ['aceite', 150], ['sal', 3]],
    m: {
      fuego: [20, ['Monta los San Jacobos con 2 lonchas de jamón y queso en medio.', 'Pásalos por harina, huevo y pan rallado.', 'Fríelos 2 min por lado en aceite caliente y sirve con ensalada.']],
      airfryer: [18, ['Monta y empana los San Jacobos y pulverízalos con aceite.', 'Cocina 8 min a 200 °C, girándolos a mitad. Sirve con ensalada.']]
    }
  },
  {
    id: 'es-empanadillas-atun', n: 'Empanadillas de atún', e: '🥟', tipo: 'cena', tags: ['pescado', 'niños'],
    ing: [['obleas_empanadilla', 2], ['atun', 4], ['tomate_frito', 200], ['huevo', 3], ['cebolla', 100], ['lechuga', 1], ['aceite', 30], ['sal', 2]],
    m: {
      horno: [35, ['Cuece 2 huevos 10 min. Sofríe la cebolla picada y mézclala con el atún, el tomate y el huevo picado.', 'Rellena las obleas, ciérralas con un tenedor y píntalas con el huevo restante batido.', 'Hornea 15 min a 200 °C. Sirve con ensalada.']],
      airfryer: [30, ['Prepara y cierra las empanadillas como en la receta de horno y píntalas con huevo.', 'Cocina por tandas 8 min a 180 °C.']],
      fuego: [30, ['Prepara las empanadillas como en la receta de horno.', 'Fríelas en aceite caliente 2 min por lado y escúrrelas.']]
    }
  },
  {
    id: 'es-calamares-encebollados', n: 'Calamares encebollados con arroz', e: '🦑', tipo: 'comida', tags: ['pescado'],
    ing: [['calamar', 700], ['cebolla', 500], ['ajo', 2], ['vino_blanco', 100], ['laurel', 1], ['arroz', 250], ['aceite', 50], ['sal', 5]],
    m: {
      fuego: [45, ['Pocha la cebolla en juliana con el ajo a fuego lento 15 min.', 'Añade los calamares en anillas, sube el fuego y saltea 3 min.', 'Riega con el vino, añade el laurel y cuece tapado 20 min a fuego suave.', 'Sirve con arroz blanco.']],
      robot: [40, ['Trocea la cebolla 3 seg/vel. 4 y sofríe con aceite y ajo 12 min/120 °C/giro inverso/vel. cuchara.', 'Añade calamar, vino, laurel y sal: 20 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con arroz.']]
    }
  },
  {
    id: 'es-dorada-espalda', n: 'Dorada a la espalda con patatas', e: '🐟', tipo: 'cena', tags: ['pescado', 'ligera'],
    ing: [['dorada', 1600], ['patata', 600], ['ajo', 4], ['vinagre', 15], ['perejil', 2], ['guindilla', 1], ['aceite', 80], ['sal', 6]],
    m: {
      horno: [40, ['Hornea las patatas en rodajas finas con aceite y sal 20 min a 200 °C.', 'Coloca encima las doradas abiertas en libro (pídelo en la pescadería), saladas, y hornea 12 min.', 'Dora el ajo laminado con la guindilla en el aceite, añade el vinagre fuera del fuego y riega el pescado. Termina con perejil.']],
      airfryer: [32, ['Cocina las patatas en rodajas con aceite y sal 15 min a 180 °C.', 'Pon las doradas abiertas encima y cocina 10 min a 200 °C.', 'Riega con la ajada de ajo, guindilla y vinagre.']]
    }
  },
  {
    id: 'es-sardinas', n: 'Sardinas asadas con pimientos', e: '🐟', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['sardinas', 1000], ['pimiento_rojo', 400], ['pan_barra', 1], ['aceite', 40], ['sal', 10]],
    m: {
      fuego: [25, ['Asa los pimientos en tiras en una plancha o sartén con aceite 15 min.', 'Sala las sardinas con sal gorda y hazlas a la plancha muy caliente 2–3 min por lado.', 'Sirve con los pimientos y pan.']],
      horno: [25, ['Asa los pimientos en tiras 15 min a 220 °C.', 'Añade las sardinas saladas a la bandeja y hornea con grill 8 min.']],
      airfryer: [20, ['Cocina los pimientos en tiras 10 min a 200 °C.', 'Añade las sardinas saladas en una capa y cocina 7 min a 200 °C.']]
    }
  },
  {
    id: 'es-mejillones-marinera', n: 'Mejillones a la marinera', e: '🦪', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['mejillones', 1500], ['cebolla', 150], ['ajo', 2], ['tomate_triturado', 200], ['pimenton', 3], ['harina', 10], ['vino_blanco', 150], ['laurel', 1], ['pan_barra', 1], ['aceite', 30], ['sal', 2]],
    m: {
      fuego: [25, ['Abre los mejillones limpios en una olla tapada con el vino y el laurel, 4 min. Cuela y guarda el caldo.', 'Sofríe la cebolla y el ajo picados 6 min. Añade harina, pimentón y tomate.', 'Vierte el caldo de los mejillones, cuece 5 min y añade los mejillones. Sirve con pan.']],
      robot: [25, ['Pica cebolla y ajo 3 seg/vel. 5 y sofríe con aceite 6 min/120 °C/vel. 1.', 'Añade harina, pimentón, tomate, vino y laurel: 5 min/100 °C/vel. 1.', 'Pon los mejillones en el Varoma: 10 min/Varoma/vel. 1. Mézclalos con la salsa.']]
    }
  },
  {
    id: 'es-ensaladilla', n: 'Ensaladilla rusa', e: '🥗', tipo: 'cena', tags: ['pescado', 'niños'],
    ing: [['patata', 800], ['zanahoria', 150], ['guisantes', 100], ['huevo', 3], ['atun', 3], ['aceitunas', 60], ['piquillos', 1], ['mayonesa', 250], ['sal', 6]],
    m: {
      fuego: [35, ['Cuece las patatas y la zanahoria en dados en agua con sal 15 min, los guisantes los últimos 4 min y los huevos 10 min aparte.', 'Deja enfriar.', 'Mezcla las verduras con el atún, el huevo picado, las aceitunas y la mayonesa. Decora con tiras de piquillo.']],
      robot: [30, ['Pon 600 ml de agua con sal en el vaso, patata y zanahoria en el cestillo y huevos y guisantes en el Varoma: 22 min/Varoma/vel. 1.', 'Enfría y mezcla con el resto de ingredientes.']]
    }
  },
  {
    id: 'es-piquillos-rellenos', n: 'Pimientos del piquillo rellenos de atún', e: '🫑', tipo: 'cena', tags: ['pescado', 'ligera'],
    ing: [['piquillos', 2], ['atun', 3], ['huevo', 2], ['cebolla', 80], ['leche', 300], ['harina', 25], ['mantequilla', 25], ['lechuga', 1], ['sal', 3]],
    m: {
      horno: [30, ['Cuece los huevos 10 min. Sofríe la cebolla y mézclala con el atún y el huevo picado.', 'Haz una bechamel ligera con la mantequilla, la harina y la leche; mezcla la mitad con el relleno.', 'Rellena los pimientos, cúbrelos con el resto de la bechamel y gratina 10 min a 220 °C. Sirve con ensalada.']],
      airfryer: [25, ['Prepara el relleno y la bechamel como en la receta de horno.', 'Rellena los pimientos en un molde apto, cubre con bechamel y cocina 6 min a 200 °C.']],
      fuego: [25, ['Prepara el relleno con la bechamel.', 'Rellena los pimientos y caliéntalos 5 min en una sartén tapada con un poco de la bechamel diluida.']]
    }
  },
  {
    id: 'es-potaje-vigilia', n: 'Potaje de vigilia', e: '🥣', tipo: 'comida', tags: ['legumbres', 'pescado'],
    ing: [['garbanzos', 800], ['bacalao', 300], ['espinacas', 300], ['huevo', 2], ['cebolla', 100], ['ajo', 3], ['tomate', 150], ['pimenton', 4], ['laurel', 1], ['caldo_verduras', 800], ['aceite', 40], ['sal', 2]],
    m: {
      fuego: [40, ['Cuece los huevos 10 min. Sofríe cebolla, ajo y tomate picados 8 min y añade el pimentón.', 'Incorpora el caldo, el laurel y los garbanzos y cuece 10 min.', 'Añade las espinacas y el bacalao desmigado y cuece 6 min. Sirve con el huevo picado.']],
      robot: [35, ['Pica cebolla, ajo y tomate 4 seg/vel. 5 y sofríe con aceite 6 min/120 °C/vel. 1.', 'Añade pimentón, caldo, laurel y garbanzos: 10 min/100 °C/giro inverso/vel. cuchara.', 'Añade espinacas y bacalao: 6 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'es-conejo-ajillo', n: 'Conejo al ajillo', e: '🍖', tipo: 'comida', tags: ['carne'],
    ing: [['conejo', 1200], ['ajo', 10], ['vino_blanco', 150], ['tomillo', 1], ['laurel', 1], ['guindilla', 1], ['patata', 600], ['aceite', 80], ['sal', 7]],
    m: {
      fuego: [50, ['Sala el conejo y dóralo a fuego fuerte en el aceite. Retíralo.', 'Fríe los ajos chafados con la guindilla, vuelve a poner el conejo con el tomillo y el laurel.', 'Riega con el vino, tapa y cuece 25 min. Sirve con patatas fritas o asadas.']],
      horno: [55, ['Coloca el conejo y las patatas en dados en una fuente con ajos chafados, hierbas, guindilla, aceite y sal.', 'Hornea 30 min a 200 °C, riega con el vino y hornea 15 min más.']],
      airfryer: [45, ['Mezcla el conejo con ajos chafados, hierbas, aceite y sal y cocina 20 min a 190 °C.', 'Añade las patatas en dados y cocina 18 min más, removiendo. Riega con el vino caliente.']]
    }
  },
  {
    id: 'es-costillas-horno', n: 'Costillas al horno con patatas', e: '🍖', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['cerdo_costillas', 1200], ['patata', 800], ['ajo', 4], ['pimenton', 6], ['tomillo', 1], ['miel', 30], ['vino_blanco', 100], ['aceite', 40], ['sal', 8]],
    m: {
      horno: [80, ['Unta las costillas con ajo picado, pimentón, tomillo, sal y aceite.', 'Colócalas sobre las patatas en rodajas, riega con el vino y tapa con papel de aluminio. Hornea 45 min a 180 °C.', 'Destapa, pinta con la miel y hornea 20 min a 210 °C hasta que se doren.']],
      airfryer: [50, ['Adoba las costillas troceadas y cocínalas 25 min a 170 °C.', 'Añade las patatas en gajos aliñadas, pinta las costillas con miel y cocina 18 min a 195 °C.']]
    }
  },
  {
    id: 'es-lentejas-chorizo', n: 'Lentejas con chorizo', e: '🥣', tipo: 'comida', tags: ['legumbres', 'carne'],
    ing: [['lentejas', 320], ['chorizo', 150], ['zanahoria', 150], ['patata', 250], ['cebolla', 120], ['pimiento_verde', 80], ['ajo', 2], ['tomate', 120], ['pimenton', 4], ['laurel', 1], ['aceite', 25], ['sal', 4]],
    m: {
      fuego: [55, ['Sofríe cebolla, pimiento y ajo picados 8 min. Añade el tomate rallado, el pimentón y el chorizo en rodajas.', 'Incorpora las lentejas, la zanahoria, el laurel y 1,5 l de agua. Cuece 30 min.', 'Añade la patata cascada y la sal y cuece 15 min más.']],
      robot: [45, ['Pica cebolla, pimiento y ajo 4 seg/vel. 5 y sofríe con aceite 6 min/120 °C/vel. 1.', 'Añade tomate, pimentón y chorizo: 3 min/120 °C/vel. cuchara.', 'Añade lentejas, zanahoria, patata, laurel, sal y 1,2 l de agua: 35 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'es-alubias-almejas', n: 'Alubias con almejas', e: '🫘', tipo: 'comida', tags: ['legumbres', 'pescado'],
    ing: [['alubias', 800], ['almejas', 400], ['cebolla', 120], ['ajo', 3], ['pimenton', 3], ['harina', 10], ['vino_blanco', 100], ['caldo_pescado', 500], ['perejil_fresco', 1], ['aceite', 40], ['sal', 3]],
    m: {
      fuego: [30, ['Pon las almejas en agua con sal 20 min para que suelten la arena.', 'Sofríe la cebolla y el ajo picados 8 min. Añade harina y pimentón y riega con el vino.', 'Incorpora el caldo y las alubias y cuece 10 min.', 'Añade las almejas y el perejil y cuece tapado 3 min, hasta que se abran.']],
      robot: [30, ['Pica cebolla y ajo 3 seg/vel. 5 y sofríe con aceite 6 min/120 °C/vel. 1.', 'Añade harina, pimentón, vino, caldo y alubias: 10 min/100 °C/giro inverso/vel. cuchara.', 'Pon las almejas en el Varoma 6 min/Varoma/vel. 1 y mézclalas con las alubias y el perejil.']]
    }
  },
  {
    id: 'es-merluza-rebozada', n: 'Merluza rebozada con pimientos', e: '🐟', tipo: 'cena', tags: ['pescado', 'niños', 'rapida'],
    ing: [['merluza', 700], ['huevo', 2], ['harina', 60], ['pimiento_verde', 300], ['limon', 1], ['aceite', 150], ['sal', 5]],
    m: {
      fuego: [25, ['Fríe los pimientos enteros o en tiras a fuego medio con sal.', 'Sala la merluza, pásala por harina y huevo batido.', 'Fríela en aceite caliente 2–3 min por lado. Sirve con los pimientos y limón.']],
      airfryer: [22, ['Pasa la merluza salada por huevo y pan rallado o harina de rebozar y pulverízala con aceite.', 'Cocina 10 min a 200 °C con los pimientos alrededor, girando a mitad.', 'Sirve con limón.']]
    }
  },
  {
    id: 'es-tortilla-calabacin', n: 'Tortilla de calabacín y cebolla', e: '🥚', tipo: 'cena', tags: ['vegetariano', 'ligera'],
    ing: [['calabacin', 600], ['cebolla', 200], ['huevo', 7], ['queso_rallado', 40], ['aceite', 40], ['sal', 5]],
    m: {
      fuego: [30, ['Pocha la cebolla y el calabacín en dados con aceite y sal 15 min.', 'Mézclalos con los huevos batidos y el queso.', 'Cuaja en sartén 4 min por lado.']],
      airfryer: [30, ['Cocina el calabacín y la cebolla en dados con aceite 12 min a 180 °C en un molde apto.', 'Vierte los huevos batidos con el queso y cocina 12 min a 160 °C.']],
      horno: [35, ['Asa el calabacín y la cebolla en dados 15 min a 200 °C.', 'Mezcla con el huevo y el queso en un molde y hornea 15 min a 180 °C.']]
    }
  },
  {
    id: 'es-duelos-quebrantos', n: 'Duelos y quebrantos', e: '🍳', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['huevo', 8], ['chorizo', 150], ['panceta', 150], ['pan_barra', 1], ['aceite', 10], ['sal', 2]],
    m: {
      fuego: [15, ['Dora la panceta en dados y el chorizo en una sartén sin apenas aceite, 5 min.', 'Baja el fuego, añade los huevos batidos con poca sal y remueve hasta que cuajen jugosos.', 'Sirve con pan tostado.']]
    }
  },
  {
    id: 'es-chuletas-patatas', n: 'Chuletas de cerdo con patatas al ajo', e: '🥩', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['chuletas_cerdo', 900], ['patata', 800], ['ajo', 4], ['perejil', 2], ['tomillo', 1], ['aceite', 60], ['sal', 7]],
    m: {
      fuego: [35, ['Corta las patatas en rodajas y fríelas a fuego medio 15 min. Añade ajo y perejil picados al final.', 'Sala las chuletas con tomillo y hazlas a la plancha 3–4 min por lado.']],
      airfryer: [35, ['Cocina las patatas en dados con aceite y sal 18 min a 190 °C.', 'Añade el ajo y el perejil, pon las chuletas con tomillo encima y cocina 10 min a 200 °C, girándolas a mitad.']],
      horno: [45, ['Hornea las patatas con ajo, perejil, aceite y sal 25 min a 200 °C.', 'Añade las chuletas y hornea 15 min más, girándolas a mitad.']]
    }
  },
  {
    id: 'es-estofado-ternera', n: 'Estofado de ternera con patatas', e: '🍲', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_guisar', 800], ['patata', 600], ['zanahoria', 200], ['cebolla', 200], ['guisantes', 150], ['ajo', 3], ['tomate_triturado', 200], ['vino_tinto', 150], ['laurel', 1], ['harina', 20], ['caldo_carne', 600], ['aceite', 40], ['sal', 7]],
    m: {
      fuego: [100, ['Sala y enharina la carne y dórala en una olla. Retírala.', 'Sofríe la cebolla, el ajo y la zanahoria 8 min. Añade el tomate y el vino y deja reducir 3 min.', 'Vuelve a poner la carne con el laurel y el caldo y cuece tapado 60 min a fuego suave.', 'Añade las patatas cascadas y los guisantes y cuece 20 min más.']],
      robot: [85, ['Sofríe cebolla, ajo y zanahoria troceados con aceite 8 min/120 °C/vel. 1.', 'Añade la carne enharinada, tomate, vino, laurel, caldo y sal: 50 min/100 °C/giro inverso/vel. cuchara.', 'Añade patatas y guisantes: 20 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'es-carrilleras', n: 'Carrilleras al vino tinto con puré', e: '🍷', tipo: 'comida', tags: ['carne'],
    ing: [['cerdo_guisar', 900], ['cebolla', 200], ['zanahoria', 150], ['ajo', 3], ['vino_tinto', 300], ['caldo_carne', 400], ['laurel', 1], ['tomillo', 1], ['patata', 700], ['leche', 150], ['mantequilla', 30], ['aceite', 40], ['sal', 8]],
    m: {
      fuego: [130, ['Dora la carne salada en una olla y retírala.', 'Sofríe cebolla, zanahoria y ajo 10 min. Añade el vino y deja que reduzca a la mitad.', 'Vuelve a poner la carne con el caldo y las hierbas y cuece tapado 90 min a fuego muy suave. Tritura la salsa.', 'Sirve con puré de patata hecho con la leche y la mantequilla.']],
      robot: [100, ['Sofríe cebolla, zanahoria y ajo troceados con aceite 8 min/120 °C/vel. 1.', 'Añade carne, vino, caldo, hierbas y sal: 80 min/100 °C/giro inverso/vel. cuchara.', 'Saca la carne y tritura la salsa 30 seg/vel. 7. Sirve con puré.']],
      horno: [150, ['Dora la carne y prepara el sofrito con el vino en una cazuela apta para horno.', 'Añade el caldo y las hierbas, tapa y hornea 2 horas a 160 °C.', 'Tritura la salsa y sirve con puré.']]
    }
  },
  {
    id: 'es-bacalao-tomate', n: 'Bacalao con tomate', e: '🐟', tipo: 'cena', tags: ['pescado'],
    ing: [['bacalao', 700], ['tomate_triturado', 600], ['cebolla', 200], ['pimiento_verde', 100], ['ajo', 2], ['harina', 30], ['azucar', 5], ['aceite', 60], ['sal', 2]],
    m: {
      fuego: [40, ['Haz un sofrito de cebolla, pimiento y ajo 10 min. Añade el tomate y el azúcar y cuece 15 min.', 'Enharina el bacalao, fríelo 2 min por lado y escúrrelo.', 'Ponlo en la salsa y cuece 5 min.']],
      horno: [40, ['Prepara la salsa de tomate en el fuego y ponla en una fuente.', 'Coloca el bacalao encima y hornea 15 min a 190 °C.']],
      robot: [35, ['Pica cebolla, pimiento y ajo 4 seg/vel. 5 y sofríe con aceite 8 min/120 °C/vel. 1.', 'Añade tomate y azúcar: 12 min/100 °C/vel. 1.', 'Pon el bacalao en el Varoma: 12 min/Varoma/vel. 1. Sirve con la salsa.']]
    }
  },
  {
    id: 'es-calamares-romana', n: 'Calamares a la romana con ensalada', e: '🦑', tipo: 'cena', tags: ['pescado', 'niños'],
    ing: [['calamar', 700], ['harina', 100], ['huevo', 2], ['limon', 1], ['lechuga', 1], ['tomate', 250], ['aceite', 200], ['sal', 5]],
    m: {
      fuego: [25, ['Corta los calamares en anillas, sécalos y sálalos.', 'Pásalos por harina y huevo batido.', 'Fríelos por tandas en aceite muy caliente 1–2 min. Sirve con limón y ensalada.']],
      airfryer: [25, ['Pasa las anillas por huevo y pan rallado fino o harina de rebozar y pulverízalas con aceite.', 'Cocina por tandas 8 min a 200 °C, agitando a mitad. Sirve con limón y ensalada.']]
    }
  },
  {
    id: 'es-pescado-adobo', n: 'Pescado en adobo', e: '🐟', tipo: 'cena', tags: ['pescado', 'niños'],
    ing: [['pescado_blanco', 700], ['ajo', 3], ['vinagre', 60], ['comino', 2], ['oregano', 2], ['pimenton', 5], ['harina', 80], ['lechuga', 1], ['aceite', 150], ['sal', 5]],
    m: {
      fuego: [30, ['Corta el pescado en tacos y adóbalo con ajo machacado, vinagre, comino, orégano, pimentón, sal y un poco de agua. Deja al menos 30 min (mejor de víspera).', 'Escúrrelo, pásalo por harina y fríelo en aceite caliente 3 min.', 'Sirve con ensalada.']],
      airfryer: [25, ['Adoba el pescado como en la receta tradicional y escúrrelo.', 'Pásalo por harina, pulverízalo con aceite y cocina 10 min a 200 °C, agitando a mitad.']]
    }
  },
  {
    id: 'es-sopa-picadillo', n: 'Sopa de picadillo', e: '🍜', tipo: 'cena', tags: ['ligera', 'rapida', 'niños'],
    ing: [['caldo_pollo', 1500], ['fideos', 120], ['jamon', 80], ['huevo', 2], ['pollo_pechuga', 150], ['hierbabuena', 1], ['sal', 2]],
    m: {
      fuego: [25, ['Cuece los huevos 10 min y pícalos.', 'Calienta el caldo con el pollo en dados 10 min.', 'Añade los fideos y cuece 4 min. Sirve con el jamón, el huevo picado y unas hojas de hierbabuena.']],
      robot: [22, ['Pon el caldo y el pollo en dados: 10 min/100 °C/giro inverso/vel. cuchara.', 'Añade los fideos: 5 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con jamón, huevo cocido y hierbabuena.']]
    }
  },
  {
    id: 'es-arroz-caldoso', n: 'Arroz caldoso de pollo y verduras', e: '🍲', tipo: 'comida', tags: ['carne'],
    ing: [['arroz', 300], ['pollo_muslos', 500], ['pimiento_rojo', 150], ['judias_verdes', 150], ['alcachofa', 300], ['tomate', 150], ['ajo', 2], ['pimenton', 4], ['azafran', 1], ['caldo_pollo', 1600], ['aceite', 40], ['sal', 5]],
    m: {
      fuego: [45, ['Dora el pollo troceado y salado en la cazuela.', 'Añade las verduras troceadas y sofríe 5 min. Incorpora ajo, tomate rallado y pimentón.', 'Vierte el caldo con el azafrán y cuece 10 min. Añade el arroz y cuece 17 min. Debe quedar meloso y con caldo.']],
      robot: [40, ['Sofríe el pollo y las verduras con aceite 10 min/120 °C/giro inverso/vel. cuchara.', 'Añade ajo, tomate, pimentón, azafrán y caldo: 8 min/100 °C/giro inverso/vel. cuchara.', 'Añade el arroz: 16 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'es-pimientos-rellenos', n: 'Pimientos rellenos de carne y arroz', e: '🫑', tipo: 'comida', tags: ['carne'],
    ing: [['pimiento_rojo', 1000], ['carne_picada', 400], ['arroz', 120], ['cebolla', 150], ['ajo', 2], ['tomate_frito', 250], ['queso_rallado', 60], ['aceite', 30], ['sal', 6]],
    m: {
      horno: [70, ['Cuece el arroz 10 min (quedará a medias). Sofríe la cebolla y el ajo, añade la carne y dórala.', 'Mezcla la carne con el arroz y la mitad del tomate. Rellena los pimientos vaciados.', 'Cubre con el resto del tomate y el queso y hornea 45 min a 180 °C.']],
      airfryer: [55, ['Prepara el relleno como en la receta de horno.', 'Rellena los pimientos, colócalos en el cesto y cocina 30 min a 170 °C. Añade el queso y 3 min más a 200 °C.']]
    }
  },
  {
    id: 'es-judias-jamon', n: 'Judías verdes rehogadas con jamón', e: '🫛', tipo: 'cena', tags: ['ligera', 'rapida'],
    ing: [['judias_verdes', 800], ['jamon', 120], ['ajo', 3], ['patata', 300], ['pimenton', 3], ['aceite', 40], ['sal', 5]],
    m: {
      fuego: [25, ['Cuece las judías troceadas y la patata en dados en agua con sal 12 min. Escurre.', 'Dora el ajo laminado y el jamón en el aceite.', 'Añade las verduras y el pimentón y saltea 3 min.']],
      robot: [25, ['Pon 600 ml de agua con sal en el vaso y judías y patata en el Varoma: 20 min/Varoma/vel. 1.', 'Saltea en sartén con ajo, jamón y pimentón.']]
    }
  },
  {
    id: 'es-coliflor-ajoarriero', n: 'Coliflor al ajoarriero', e: '🥦', tipo: 'cena', tags: ['vegetariano', 'ligera'],
    ing: [['coliflor', 1000], ['ajo', 5], ['pimenton', 5], ['vinagre', 20], ['huevo', 4], ['aceite', 50], ['sal', 6]],
    m: {
      fuego: [30, ['Cuece la coliflor en ramitos en agua con sal 10 min. Escúrrela.', 'Dora el ajo laminado en el aceite, aparta, añade el pimentón y el vinagre.', 'Saltea la coliflor con la ajada 2 min y sirve con huevo cocido o escalfado.']],
      robot: [25, ['Pon 500 ml de agua con sal en el vaso y la coliflor en el Varoma: 15 min/Varoma/vel. 1.', 'Prepara la ajada en un cazo y riega la coliflor.']],
      airfryer: [25, ['Aliña los ramitos de coliflor con aceite y sal y cocínalos 18 min a 190 °C.', 'Riega con la ajada de ajo, pimentón y vinagre y sirve con huevo.']]
    }
  },
  {
    id: 'es-alcachofas-jamon', n: 'Alcachofas salteadas con jamón', e: '🌿', tipo: 'cena', tags: ['ligera', 'rapida'],
    ing: [['alcachofa', 1200], ['jamon', 120], ['ajo', 3], ['limon', 1], ['vino_blanco', 80], ['aceite', 40], ['sal', 4]],
    m: {
      fuego: [30, ['Limpia las alcachofas, córtalas en cuartos y ponlas en agua con limón.', 'Cuécelas 10 min en agua con sal y escúrrelas.', 'Saltea el ajo y el jamón, añade las alcachofas y el vino y deja 5 min a fuego medio.']],
      airfryer: [30, ['Aliña las alcachofas cocidas en cuartos con aceite y ajo y cocínalas 12 min a 190 °C.', 'Añade el jamón los últimos 3 min.']],
      horno: [40, ['Asa las alcachofas cocidas con ajo y aceite 20 min a 200 °C. Añade el jamón los últimos 5 min.']]
    }
  },
  {
    id: 'es-pinchos-morunos', n: 'Pinchos morunos con ensalada', e: '🍢', tipo: 'cena', tags: ['carne'],
    ing: [['cerdo_lomo', 700], ['comino', 3], ['pimenton', 6], ['curry', 3], ['oregano', 2], ['ajo', 2], ['limon', 1], ['lechuga', 1], ['tomate', 300], ['cebolla_morada', 80], ['aceite', 40], ['sal', 5]],
    m: {
      fuego: [30, ['Corta el lomo en dados y adóbalo con las especias, ajo, limón, aceite y sal (mínimo 30 min).', 'Ensarta en brochetas y hazlas a la plancha 8 min, girándolas.', 'Sirve con ensalada de lechuga, tomate y cebolla.']],
      airfryer: [25, ['Adoba la carne y ensártala en brochetas cortas.', 'Cocina 12 min a 200 °C, girando a mitad.']],
      horno: [30, ['Adoba la carne, ensártala y hornea con grill 15 min a 220 °C, girando a mitad.']]
    }
  },
  {
    id: 'es-revuelto-setas', n: 'Revuelto de setas y gambas', e: '🍄', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['huevo', 7], ['setas', 400], ['gambas', 200], ['ajo', 2], ['perejil_fresco', 1], ['aceite', 30], ['sal', 4]],
    m: {
      fuego: [20, ['Saltea el ajo y las setas troceadas a fuego fuerte 6 min.', 'Añade las gambas 2 min.', 'Baja el fuego, incorpora los huevos batidos con sal y remueve hasta que cuajen jugosos. Termina con perejil.']]
    }
  },
  {
    id: 'es-huevos-rellenos', n: 'Huevos rellenos de atún', e: '🥚', tipo: 'cena', tags: ['pescado', 'niños', 'rapida'],
    ing: [['huevo', 8], ['atun', 3], ['tomate_frito', 60], ['mayonesa', 150], ['aceitunas', 40], ['lechuga', 1], ['sal', 3]],
    m: {
      fuego: [25, ['Cuece los huevos 11 min, enfríalos y pélalos.', 'Pártelos por la mitad y mezcla las yemas con el atún, el tomate y una parte de la mayonesa.', 'Rellena las claras, cubre con el resto de la mayonesa y decora con aceitunas. Sirve sobre lechuga.']],
      robot: [25, ['Cuece los huevos en el Varoma con 500 ml de agua en el vaso: 15 min/Varoma/vel. 1.', 'Prepara el relleno y monta como en la receta tradicional.']]
    }
  },
  {
    id: 'es-salpicon', n: 'Salpicón de marisco', e: '🦐', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['langostinos', 300], ['mejillones', 600], ['pulpo', 200], ['pimiento_rojo', 120], ['pimiento_verde', 100], ['cebolla', 100], ['tomate', 200], ['vinagre', 30], ['aceite', 70], ['sal', 4]],
    m: {
      sin: [20, ['Pica muy fino los pimientos, la cebolla y el tomate.', 'Pela los langostinos y trocea el pulpo cocido. Usa mejillones cocidos (o ábrelos al vapor 4 min).', 'Mézclalo todo con aceite, vinagre y sal y deja enfriar al menos 30 min en la nevera.']]
    }
  },
  {
    id: 'es-ensalada-lentejas', n: 'Ensalada de lentejas', e: '🥗', tipo: 'ambos', tags: ['legumbres', 'vegetariano', 'ligera', 'rapida'],
    ing: [['lentejas', 250], ['tomate', 250], ['pimiento_rojo', 120], ['pepino', 200], ['cebolla_morada', 80], ['huevo', 3], ['aceite', 50], ['vinagre', 20], ['sal', 5]],
    m: {
      fuego: [35, ['Cuece las lentejas 20–25 min en agua con sal, sin que se deshagan, y los huevos 10 min. Enfría.', 'Pica las verduras en dados pequeños.', 'Mezcla todo y aliña con aceite, vinagre y sal.']],
      sin: [15, ['Usa un bote de lentejas cocidas (unos 600 g) bien lavadas en lugar de lentejas secas.', 'Pica las verduras, añade huevo cocido y aliña con aceite, vinagre y sal.']]
    }
  },
  {
    id: 'es-bonito-tomate', n: 'Bonito con tomate', e: '🐟', tipo: 'comida', tags: ['pescado'],
    ing: [['atun_fresco', 600], ['tomate_triturado', 600], ['cebolla', 200], ['pimiento_verde', 100], ['ajo', 2], ['azucar', 5], ['patata', 500], ['aceite', 60], ['sal', 5]],
    m: {
      fuego: [40, ['Haz un sofrito de cebolla, pimiento y ajo 10 min. Añade el tomate y el azúcar y cuece 15 min.', 'Sala el bonito en tacos y añádelo a la salsa. Apaga a los 3 min para que no quede seco.', 'Sirve con patatas fritas o cocidas.']],
      robot: [35, ['Pica cebolla, pimiento y ajo 4 seg/vel. 5 y sofríe con aceite 8 min/120 °C/vel. 1.', 'Añade tomate y azúcar: 15 min/100 °C/vel. 1.', 'Añade el bonito: 3 min/90 °C/giro inverso/vel. cuchara. Sirve con patatas.']]
    }
  },
  {
    id: 'es-boquerones-fritos', n: 'Boquerones fritos con ensalada', e: '🐟', tipo: 'cena', tags: ['pescado', 'rapida'],
    ing: [['boquerones', 700], ['harina', 100], ['limon', 1], ['lechuga', 1], ['tomate', 250], ['aceite', 200], ['sal', 6]],
    m: {
      fuego: [25, ['Limpia los boquerones, sálalos y pásalos por harina sacudiendo el sobrante.', 'Fríelos por tandas en aceite muy caliente 2 min.', 'Sirve con limón y ensalada.']],
      airfryer: [22, ['Enharina los boquerones salados y pulverízalos con aceite.', 'Cocina por tandas 8 min a 200 °C en una sola capa. Sirve con limón y ensalada.']]
    }
  },
  {
    id: 'es-sepia-guisantes', n: 'Sepia con guisantes', e: '🦑', tipo: 'comida', tags: ['pescado'],
    ing: [['sepia', 700], ['guisantes', 300], ['cebolla', 200], ['ajo', 2], ['tomate_triturado', 200], ['vino_blanco', 100], ['pimenton', 3], ['patata', 400], ['aceite', 40], ['sal', 5]],
    m: {
      fuego: [50, ['Sofríe la cebolla y el ajo 8 min. Añade la sepia troceada y rehoga 5 min.', 'Agrega el pimentón, el tomate y el vino y cuece 10 min.', 'Añade las patatas cascadas, los guisantes y agua hasta cubrir. Cuece 20 min.']],
      robot: [45, ['Pica cebolla y ajo 3 seg/vel. 5 y sofríe con aceite 6 min/120 °C/vel. 1.', 'Añade sepia, pimentón, tomate y vino: 12 min/100 °C/giro inverso/vel. cuchara.', 'Añade patatas, guisantes, sal y 300 ml de agua: 20 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'es-arroz-costillas', n: 'Arroz con costillas y verduras', e: '🥘', tipo: 'comida', tags: ['carne'],
    ing: [['arroz', 350], ['cerdo_costillas', 600], ['alcachofa', 300], ['pimiento_rojo', 150], ['judias_verdes', 150], ['tomate', 150], ['ajo', 3], ['pimenton', 4], ['azafran', 1], ['caldo_carne', 1200], ['aceite', 50], ['sal', 6]],
    m: {
      fuego: [55, ['Dora las costillas troceadas y saladas en la paella o cazuela.', 'Añade las verduras troceadas y sofríe 6 min. Incorpora ajo, tomate rallado y pimentón.', 'Vierte el caldo con el azafrán y cuece 15 min. Añade el arroz y cuece 18 min sin remover. Reposa 5 min.']],
      robot: [50, ['Sofríe costillas y verduras con aceite 10 min/120 °C/giro inverso/vel. cuchara.', 'Añade ajo, tomate, pimentón, azafrán y caldo: 15 min/100 °C/giro inverso/vel. cuchara.', 'Añade el arroz: 15 min/100 °C/giro inverso/vel. cuchara. Reposa en una fuente 5 min.']]
    }
  }
]);
