/* MC Food Diary · cocina de Francia 🇫🇷. Formato y normas: recetas/GUIA-RECETAS.md */

MC_ADD_ING({
  queso_azul: ['Queso azul (gorgonzola, roquefort)', 'lacteos', 14, 'kg'],
  queso_brie: ['Queso brie o camembert', 'lacteos', 11, 'kg'],
  col_rizada: ['Col rizada o kale', 'fruteria', 6, 'kg'],
  endivias: ['Endivias', 'fruteria', 4, 'kg'],
  nabo: ['Nabo', 'fruteria', 2, 'kg'],
  hinojo: ['Bulbo de hinojo', 'fruteria', 3.5, 'kg', 0, 'apio en rama'],
  estragon: ['Estragón seco', 'basicos', 0, 'kg', 1],
  pato_muslos: ['Muslos de pato', 'carniceria', 12, 'kg', 0, 'contramuslos de pollo'],
  trucha: ['Trucha', 'pescaderia', 7, 'kg']
});

/* ---- Carnes y guisos ---- */
MC_ADD('fr', [
  {
    id: 'fr-bourguignon', n: 'Boeuf bourguignon', e: '🍷', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_guisar', 900], ['bacon', 120], ['champinon', 250], ['cebolla', 200], ['zanahoria', 200], ['ajo', 2], ['vino_tinto', 500], ['caldo_carne', 300], ['tomate_concentrado', 20], ['harina', 20], ['tomillo', 1], ['laurel', 2], ['aceite', 30], ['sal', 6], ['pimienta', 1]],
    m: {
      fuego: [150, ['Dora el bacon en una cazuela y resérvalo. Dora en esa grasa la carne en tacos salpimentada, por tandas.', 'Sofríe la cebolla y la zanahoria troceadas 6 min, añade el ajo, la harina y el concentrado y remueve 1 min.', 'Vuelve a poner la carne y el bacon, cubre con el vino y el caldo, añade tomillo y laurel y cuece tapado 2 h a fuego muy suave.', 'Saltea los champiñones aparte y añádelos los últimos 15 min.']],
      horno: [170, ['Dora el bacon y la carne en una cazuela apta para horno y haz el sofrito como en la versión tradicional.', 'Añade vino, caldo y hierbas, tapa y hornea 2 h 15 min a 160 °C.', 'Incorpora los champiñones salteados y hornea 15 min más.']],
      robot: [120, ['Dora la carne y el bacon en una sartén.', 'Pica cebolla, zanahoria y ajo 4 seg/vel. 4 y sofríe con aceite 7 min/120 °C/vel. 1.', 'Añade carne, bacon, harina, concentrado, vino, caldo y hierbas: 90 min/100 °C/giro inverso/vel. cuchara.', 'Añade los champiñones: 15 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'fr-coq-au-vin', n: 'Coq au vin (pollo al vino tinto)', e: '🐓', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_entero', 1400], ['bacon', 100], ['champinon', 250], ['cebolla', 150], ['zanahoria', 150], ['ajo', 2], ['vino_tinto', 500], ['caldo_pollo', 200], ['harina', 20], ['tomillo', 1], ['laurel', 1], ['mantequilla', 20], ['aceite', 20], ['sal', 6]],
    m: {
      fuego: [75, ['Dora el bacon y resérvalo. Dora el pollo salado en la misma grasa con el aceite.', 'Añade la cebolla y la zanahoria troceadas y el ajo y sofríe 5 min. Espolvorea la harina.', 'Vierte el vino y el caldo, añade tomillo, laurel y el bacon y cuece tapado 45 min.', 'Saltea los champiñones en la mantequilla y añádelos los últimos 10 min.']],
      horno: [90, ['Dora el pollo y el bacon en una cazuela apta para horno y haz el sofrito.', 'Añade vino, caldo y hierbas y hornea tapado 1 h a 170 °C.', 'Añade los champiñones salteados y hornea 10 min más destapado.']]
    }
  },
  {
    id: 'fr-pollo-mostaza', n: 'Pollo a la mostaza', e: '🍗', tipo: 'comida', tags: ['carne', 'rapida', 'niños'],
    ing: [['pollo_muslos', 800], ['mostaza', 60], ['nata', 200], ['cebolla', 100], ['vino_blanco', 100], ['tomillo', 1], ['arroz_largo', 250], ['aceite', 20], ['sal', 6]],
    m: {
      fuego: [30, ['Cuece el arroz en agua con sal.', 'Dora los contramuslos en trozos con el aceite 6 min. Añade la cebolla picada y pocha 4 min.', 'Riega con el vino, deja reducir y añade la nata con la mostaza y el tomillo. Cuece 10 min.', 'Sirve con el arroz.']],
      horno: [40, ['Unta el pollo con la mostaza, sal y tomillo y ponlo en una fuente con la cebolla en juliana.', 'Hornea 20 min a 200 °C.', 'Añade el vino y la nata y hornea 12 min más. Sirve con arroz.']],
      robot: [30, ['Pica la cebolla 3 seg/vel. 5 y sofríe con aceite 3 min/120 °C/vel. 1.', 'Añade el pollo y el vino: 8 min/120 °C/giro inverso/vel. cuchara.', 'Añade nata, mostaza y tomillo: 10 min/100 °C/giro inverso/vel. cuchara. Sirve con arroz.']]
    }
  },
  {
    id: 'fr-pollo-estragon', n: 'Pechugas al estragón', e: '🌿', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['pollo_pechuga', 600], ['estragon', 2], ['nata', 200], ['chalota', 60], ['vino_blanco', 80], ['judias_verdes', 400], ['mantequilla', 20], ['sal', 5]],
    m: {
      fuego: [25, ['Cuece las judías verdes en agua con sal 8 min.', 'Dora las pechugas fileteadas en la mantequilla 3 min por lado y resérvalas.', 'Pocha la chalota picada, riega con el vino, añade la nata y el estragón y reduce 4 min.', 'Vuelve a poner el pollo 2 min en la salsa y sirve con las judías.']]
    }
  },
  {
    id: 'fr-basquaise', n: 'Pollo a la vasca francesa (poulet basquaise)', e: '🫑', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_muslos', 1000], ['pimiento_rojo', 300], ['pimiento_verde', 200], ['cebolla', 150], ['tomate_triturado', 400], ['ajo', 3], ['jamon', 80], ['vino_blanco', 100], ['pimenton', 3], ['aceite', 40], ['sal', 5]],
    m: {
      fuego: [55, ['Dora el pollo salado en el aceite y resérvalo.', 'Pocha la cebolla, los pimientos en tiras y el ajo 12 min. Añade el jamón y el pimentón.', 'Riega con el vino, añade el tomate y el pollo y cuece tapado 30 min.']],
      horno: [60, ['Pon el pollo y las verduras en tiras en una fuente con aceite y sal.', 'Hornea 25 min a 200 °C.', 'Añade el tomate, el vino, el jamón y el pimentón y hornea 25 min más.']],
      robot: [50, ['Dora el pollo en una sartén.', 'Sofríe cebolla, pimientos y ajo en tiras con aceite 10 min/120 °C/giro inverso/vel. cuchara.', 'Añade jamón, pimentón, vino, tomate y pollo: 30 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'fr-pollo-provenzal', n: 'Pollo a la provenzal', e: '🫒', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_muslos', 1000], ['tomate_cherry', 400], ['cebolla', 150], ['ajo', 4], ['aceitunas', 80], ['hierbas_provenzales', 3], ['vino_blanco', 100], ['patata', 600], ['aceite', 40], ['sal', 6]],
    m: {
      horno: [55, ['Precalienta el horno a 200 °C.', 'Pon en una fuente las patatas en gajos, la cebolla en cuartos y los ajos con aceite y sal.', 'Coloca el pollo encima con las hierbas provenzales y hornea 25 min.', 'Añade los cherrys, las aceitunas y el vino y hornea 20 min más.']],
      airfryer: [40, ['Mezcla el pollo con aceite, sal, ajo y hierbas.', 'Cocina las patatas en gajos 10 min a 190 °C.', 'Añade el pollo, los cherrys y las aceitunas y cocina 22 min más, en dos tandas si no cabe.']]
    }
  },
  {
    id: 'fr-blanquette', n: 'Blanquette de ternera', e: '🍲', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_guisar', 800], ['zanahoria', 250], ['cebolla', 150], ['champinon', 250], ['puerro', 1], ['laurel', 1], ['tomillo', 1], ['nata', 200], ['huevo', 1], ['limon', 1], ['harina', 30], ['mantequilla', 30], ['arroz_largo', 250], ['sal', 6]],
    m: {
      fuego: [120, ['Cubre la carne con agua fría, lleva a ebullición, espuma y añade zanahoria, cebolla, puerro, laurel, tomillo y sal. Cuece 1 h 30 min tapado.', 'Cuela y reserva 600 ml de caldo. Saltea los champiñones en la mantequilla, añade la harina y el caldo y cuece 5 min.', 'Mezcla la yema con la nata y el zumo de limón, añádelo a la salsa fuera del fuego y vuelve a poner la carne y las zanahorias.', 'Sirve con arroz blanco.']],
      robot: [100, ['Pon la carne, la zanahoria, la cebolla, el puerro, las hierbas, sal y agua hasta cubrir: 80 min/100 °C/giro inverso/vel. cuchara.', 'Cuela guardando 600 ml de caldo. Pon en el vaso mantequilla, harina, caldo y champiñones: 8 min/100 °C/vel. 2.', 'Añade la nata con la yema y el limón y la carne: 3 min/80 °C/giro inverso/vel. cuchara. Sirve con arroz.']]
    }
  },
  {
    id: 'fr-navarin', n: 'Navarin de cordero', e: '🐑', tipo: 'comida', tags: ['carne'],
    ing: [['cordero', 1000], ['nabo', 300], ['zanahoria', 250], ['patata', 400], ['guisantes', 200], ['cebolla', 150], ['ajo', 2], ['tomate_concentrado', 30], ['caldo_carne', 700], ['harina', 20], ['tomillo', 1], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [100, ['Dora el cordero salado en el aceite. Añade la cebolla y el ajo picados y la harina y remueve 2 min.', 'Agrega el concentrado, el caldo y el tomillo y cuece tapado 45 min.', 'Añade el nabo, la zanahoria y la patata en trozos y cuece 30 min.', 'Incorpora los guisantes los últimos 8 min.']],
      robot: [85, ['Dora el cordero en una sartén.', 'Pica cebolla y ajo 3 seg/vel. 5 y sofríe con aceite 5 min/120 °C/vel. 1.', 'Añade cordero, harina, concentrado, caldo y tomillo: 40 min/100 °C/giro inverso/vel. cuchara.', 'Añade nabo, zanahoria, patata y guisantes: 30 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'fr-cassoulet', n: 'Cassoulet fácil', e: '🫘', tipo: 'comida', tags: ['carne', 'legumbres'],
    ing: [['alubias', 1000], ['salchichas', 400], ['pato_muslos', 600], ['panceta', 150], ['tomate_triturado', 300], ['cebolla', 150], ['zanahoria', 100], ['ajo', 3], ['caldo_pollo', 400], ['tomillo', 1], ['laurel', 1], ['pan_rallado', 40], ['sal', 4]],
    m: {
      horno: [100, ['Dora los muslos de pato (o contramuslos de pollo) en su propia grasa, luego las salchichas y la panceta. Reserva.', 'En la misma cazuela pocha la cebolla, la zanahoria y el ajo 8 min, añade el tomate y las hierbas.', 'Incorpora las alubias, el caldo y las carnes, espolvorea el pan rallado y hornea 1 h a 170 °C, rompiendo la costra un par de veces.']],
      fuego: [75, ['Dora las carnes por tandas y resérvalas.', 'Haz el sofrito de cebolla, zanahoria, ajo y tomate.', 'Añade alubias, caldo, hierbas y carnes y cuece tapado a fuego muy suave 45 min.']]
    }
  },
  {
    id: 'fr-steak-poivre', n: 'Entrecot a la pimienta con patatas', e: '🥩', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['ternera_entrecot', 800], ['pimienta', 8], ['nata', 200], ['chalota', 40], ['caldo_carne', 80], ['mantequilla', 20], ['patata', 800], ['aceite', 40], ['sal', 6]],
    m: {
      fuego: [30, ['Corta las patatas en bastones y fríelas en aceite o hazlas en el horno.', 'Machaca la pimienta en grano y aprieta los entrecots contra ella. Sálalos.', 'Márcalos en la mantequilla a fuego fuerte 2–3 min por lado y resérvalos.', 'En la misma sartén pocha la chalota, añade el caldo y la nata y reduce 3 min. Sirve la salsa sobre la carne con las patatas.']],
      airfryer: [30, ['Corta las patatas en bastones, mézclalas con 1 cucharada de aceite y sal y cocina 20 min a 200 °C, removiendo.', 'Mientras, marca los entrecots empanados en pimienta en una sartén.', 'Prepara la salsa en la misma sartén con chalota, caldo y nata.']]
    }
  },
  {
    id: 'fr-magret-naranja', n: 'Magret de pato a la naranja', e: '🦆', tipo: 'cena', tags: ['carne'],
    ing: [['magret', 700], ['naranja', 500], ['miel', 30], ['vinagre', 20], ['caldo_pollo', 100], ['patata', 600], ['tomillo', 1], ['sal', 5], ['pimienta', 1]],
    m: {
      fuego: [35, ['Cuece las patatas en rodajas 10 min y dóralas luego en una sartén con un poco de grasa del pato.', 'Haz cortes en rombo en la grasa del magret, salpimiéntalo y cocínalo por el lado de la grasa en frío a fuego medio 8 min. Dale la vuelta 4 min y deja reposar.', 'Quita casi toda la grasa, añade la miel, el vinagre, el zumo de las naranjas y el caldo y reduce 5 min.', 'Corta el magret en lonchas y sírvelo con la salsa y las patatas.']],
      horno: [35, ['Marca el magret por la grasa en sartén 6 min.', 'Termina en el horno 8 min a 200 °C y deja reposar.', 'Haz la salsa en la sartén con miel, vinagre, zumo y caldo y sirve con patatas.']]
    }
  },
  {
    id: 'fr-solomillo-normanda', n: 'Solomillo de cerdo a la normanda', e: '🍎', tipo: 'comida', tags: ['carne'],
    ing: [['cerdo_solomillo', 700], ['manzana', 400], ['cebolla', 100], ['nata', 200], ['mostaza', 15], ['vino_blanco', 100], ['mantequilla', 30], ['patata', 600], ['sal', 6]],
    m: {
      fuego: [35, ['Cuece las patatas en agua con sal 18 min.', 'Corta el solomillo en medallones, sálalos y dóralos en la mantequilla 3 min por lado. Reserva.', 'Saltea la cebolla y la manzana en gajos 5 min, riega con el vino y añade la nata y la mostaza.', 'Vuelve a poner la carne 3 min en la salsa y sirve con las patatas.']],
      horno: [40, ['Dora el solomillo entero en sartén y ponlo en una fuente con la manzana en gajos y la cebolla.', 'Hornea 20 min a 190 °C.', 'Añade el vino, la nata y la mostaza y hornea 5 min más. Sirve con patatas.']]
    }
  },
  {
    id: 'fr-chuletas-charcutiere', n: 'Chuletas de cerdo a la charcutera', e: '🐖', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['chuletas_cerdo', 800], ['cebolla', 150], ['pepinillos', 80], ['mostaza', 30], ['vino_blanco', 100], ['caldo_carne', 150], ['tomate_concentrado', 15], ['patata', 600], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [30, ['Cuece las patatas en agua con sal 15 min.', 'Dora las chuletas saladas en el aceite 3–4 min por lado y resérvalas.', 'Pocha la cebolla picada en la sartén, añade el vino, el caldo y el concentrado y reduce 5 min.', 'Fuera del fuego añade la mostaza y los pepinillos picados y sirve sobre las chuletas.']],
      airfryer: [25, ['Unta las chuletas con aceite y sal y cocínalas 12 min a 200 °C, girándolas a mitad.', 'Mientras, prepara la salsa en una sartén.', 'Sirve con patatas cocidas.']]
    }
  },
  {
    id: 'fr-lentejas-salchichas', n: 'Lentejas con salchichas a la francesa', e: '🌭', tipo: 'comida', tags: ['carne', 'legumbres'],
    ing: [['lentejas', 320], ['salchichas', 500], ['panceta', 100], ['zanahoria', 150], ['cebolla', 120], ['ajo', 2], ['laurel', 1], ['tomillo', 1], ['mostaza', 15], ['aceite', 20], ['sal', 5]],
    m: {
      fuego: [50, ['Dora las salchichas y la panceta en el aceite y resérvalas.', 'Sofríe la cebolla, la zanahoria en rodajas y el ajo 6 min.', 'Añade las lentejas, el laurel, el tomillo y 1,2 l de agua y cuece 25 min.', 'Incorpora las salchichas y la panceta y cuece 10 min más. Termina con la mostaza.']],
      robot: [45, ['Dora salchichas y panceta en una sartén.', 'Pica cebolla y ajo 3 seg/vel. 5 y sofríe con aceite 5 min/120 °C/vel. 1.', 'Añade lentejas, zanahoria, hierbas, sal y 1 l de agua: 25 min/100 °C/giro inverso/vel. cuchara.', 'Añade las carnes: 10 min/100 °C/giro inverso/vel. cuchara. Termina con la mostaza.']]
    }
  },
  {
    id: 'fr-pot-au-feu', n: 'Pot-au-feu', e: '🍲', tipo: 'comida', tags: ['carne', 'ligera'],
    ing: [['ternera_guisar', 1000], ['zanahoria', 300], ['nabo', 300], ['puerro', 2], ['patata', 500], ['cebolla', 150], ['apio', 100], ['laurel', 2], ['tomillo', 1], ['clavo', 2], ['mostaza', 40], ['sal', 8], ['pimienta', 1]],
    m: {
      fuego: [180, ['Pon la carne en una olla grande con agua fría, lleva a ebullición y espuma.', 'Añade la cebolla con los clavos pinchados, el laurel, el tomillo, sal y pimienta. Cuece 2 h a fuego suave.', 'Añade zanahoria, nabo, puerro y apio en trozos grandes y cuece 30 min. Añade las patatas y cuece 20 min más.', 'Sirve primero el caldo y después la carne con las verduras y mostaza.']],
      robot: [130, ['Pon la carne, la cebolla con clavos, las hierbas, sal y agua hasta el máximo: 80 min/100 °C/giro inverso/vel. cuchara.', 'Añade zanahoria, nabo, puerro, apio y patata en trozos (en el cestillo si no caben): 35 min/100 °C/giro inverso/vel. cuchara.', 'Sirve el caldo y luego la carne y las verduras con mostaza.']]
    }
  },
  {
    id: 'fr-choucroute', n: 'Choucroute garnie', e: '🌭', tipo: 'comida', tags: ['carne'],
    ing: [['chucrut', 800], ['salchichas_frankfurt', 400], ['cerdo_costillas', 500], ['panceta', 150], ['patata', 600], ['cebolla', 150], ['vino_blanco', 200], ['laurel', 2], ['mostaza', 40], ['aceite', 20], ['sal', 3]],
    m: {
      fuego: [80, ['Enjuaga y escurre el chucrut. Dora las costillas y la panceta en el aceite y añade la cebolla en juliana.', 'Cubre con el chucrut, el vino, el laurel y 200 ml de agua y cuece tapado 45 min.', 'Añade las patatas peladas enteras y cuece 20 min. Agrega las salchichas los últimos 8 min.', 'Sirve con mostaza.']],
      horno: [90, ['Dora las costillas y la panceta y ponlas en una fuente con la cebolla y el chucrut.', 'Añade vino, agua y laurel, tapa y hornea 50 min a 180 °C.', 'Añade patatas en cuartos y salchichas y hornea 30 min más. Sirve con mostaza.']]
    }
  },
  {
    id: 'fr-tartiflette', n: 'Tartiflette', e: '🧀', tipo: 'comida', tags: ['carne'],
    ing: [['patata', 1000], ['bacon', 200], ['cebolla', 200], ['queso_brie', 350], ['nata', 100], ['vino_blanco', 80], ['lechuga', 1], ['sal', 5], ['pimienta', 1]],
    m: {
      horno: [55, ['Cuece las patatas en rodajas en agua con sal 10 min.', 'Dora el bacon con la cebolla en juliana 8 min y riega con el vino.', 'Mezcla las patatas con el bacon en una fuente, vierte la nata y cubre con el queso cortado en láminas.', 'Hornea 25 min a 200 °C hasta que gratine. Sirve con ensalada.']],
      airfryer: [45, ['Cuece las patatas y prepara el bacon con la cebolla.', 'Monta todo en un molde que quepa en la freidora con la nata y el queso.', 'Cocina 15 min a 180 °C.']]
    }
  },
  {
    id: 'fr-croque-monsieur', n: 'Croque monsieur', e: '🥪', tipo: 'cena', tags: ['carne', 'rapida', 'niños'],
    ing: [['pan_molde', 1], ['jamon_cocido', 200], ['queso_emmental', 200], ['leche', 250], ['harina', 20], ['mantequilla', 40], ['nuez_moscada', 1], ['lechuga', 1], ['sal', 2]],
    m: {
      horno: [25, ['Haz una bechamel espesa con la mitad de la mantequilla, la harina, la leche, sal y nuez moscada.', 'Unta 8 rebanadas con la mantequilla restante. Monta 4 sándwiches con bechamel, jamón y queso.', 'Cubre cada uno con bechamel y queso rallado y hornea 10 min a 220 °C hasta que gratine. Sirve con ensalada.']],
      airfryer: [20, ['Prepara la bechamel y monta los sándwiches.', 'Cúbrelos con bechamel y queso.', 'Cocina 7 min a 190 °C.']],
      fuego: [20, ['Monta los sándwiches con jamón, queso y un poco de bechamel.', 'Dóralos en una sartén con mantequilla 3 min por lado a fuego medio.', 'Sirve con ensalada.']]
    }
  },
  {
    id: 'fr-quiche-lorraine', n: 'Quiche lorraine', e: '🥧', tipo: 'cena', tags: ['carne'],
    ing: [['masa_quebrada', 1], ['bacon', 200], ['huevo', 4], ['nata', 200], ['leche', 100], ['queso_emmental', 100], ['nuez_moscada', 1], ['lechuga', 1], ['sal', 3], ['pimienta', 1]],
    m: {
      horno: [50, ['Forra un molde con la masa, pínchala y hornéala 10 min a 190 °C.', 'Dora el bacon en una sartén sin aceite.', 'Bate los huevos con la nata, la leche, el queso, sal, pimienta y nuez moscada.', 'Reparte el bacon en la base, vierte el relleno y hornea 30 min a 180 °C. Sirve con ensalada.']],
      airfryer: [40, ['Forra un molde apto con la masa y cocínala sola 6 min a 180 °C.', 'Añade el bacon dorado y el relleno de huevo.', 'Cocina 20 min a 160 °C hasta que cuaje.']]
    }
  },
  {
    id: 'fr-quiche-espinacas', n: 'Quiche de espinacas y queso de cabra', e: '🥧', tipo: 'cena', tags: ['vegetariano'],
    ing: [['masa_quebrada', 1], ['espinacas', 300], ['queso_cabra', 150], ['huevo', 4], ['nata', 200], ['cebolla', 80], ['nuez_moscada', 1], ['aceite', 15], ['sal', 3]],
    m: {
      horno: [50, ['Forra un molde con la masa, pínchala y hornéala 10 min a 190 °C.', 'Pocha la cebolla en el aceite y añade las espinacas hasta que se reduzcan. Escúrrelas bien.', 'Bate los huevos con la nata, sal y nuez moscada. Reparte las espinacas y el queso en rodajas en la base y vierte el huevo.', 'Hornea 30 min a 180 °C.']],
      airfryer: [40, ['Cocina la masa sola en un molde apto 6 min a 180 °C.', 'Añade las espinacas, el queso y el huevo batido con la nata.', 'Cocina 20 min a 160 °C.']]
    }
  }
]);

/* ---- Tartas, verduras, sopas y pescados ---- */
MC_ADD('fr', [
  {
    id: 'fr-flamiche', n: 'Tarta de puerros (flamiche)', e: '🥧', tipo: 'cena', tags: ['vegetariano'],
    ing: [['masa_quebrada', 1], ['puerro', 4], ['huevo', 3], ['nata', 200], ['queso_emmental', 80], ['mantequilla', 30], ['nuez_moscada', 1], ['sal', 4]],
    m: {
      horno: [55, ['Forra un molde con la masa, pínchala y hornéala 10 min a 190 °C.', 'Pocha los puerros en rodajas finas con la mantequilla y sal 12 min a fuego suave.', 'Bate los huevos con la nata, el queso y la nuez moscada y mézclalos con los puerros.', 'Rellena la base y hornea 30 min a 180 °C.']],
      airfryer: [45, ['Cocina la masa sola en un molde apto 6 min a 180 °C.', 'Rellena con los puerros pochados y el huevo con nata.', 'Cocina 20 min a 160 °C.']]
    }
  },
  {
    id: 'fr-tarta-tomate', n: 'Tarta de tomate y mostaza', e: '🍅', tipo: 'cena', tags: ['vegetariano', 'ligera'],
    ing: [['masa_quebrada', 1], ['tomate', 600], ['mostaza', 40], ['queso_emmental', 80], ['hierbas_provenzales', 2], ['lechuga', 1], ['aceite', 20], ['sal', 4]],
    m: {
      horno: [45, ['Forra un molde con la masa y pínchala con un tenedor.', 'Unta la base con la mostaza y espolvorea el queso rallado.', 'Cubre con el tomate en rodajas, sal, hierbas y un hilo de aceite.', 'Hornea 35 min a 190 °C. Sirve templada con ensalada.']],
      airfryer: [35, ['Forra un molde apto con la masa y úntala con mostaza y queso.', 'Cubre con el tomate, sal, hierbas y aceite.', 'Cocina 22 min a 170 °C.']]
    }
  },
  {
    id: 'fr-ratatouille', n: 'Ratatouille', e: '🍆', tipo: 'ambos', tags: ['vegetariano', 'ligera'],
    ing: [['berenjena', 400], ['calabacin', 400], ['pimiento_rojo', 250], ['pimiento_verde', 150], ['cebolla', 200], ['tomate', 500], ['ajo', 3], ['hierbas_provenzales', 3], ['aceite', 50], ['sal', 6], ['arroz_largo', 250]],
    m: {
      fuego: [55, ['Corta todas las verduras en dados. Dora la berenjena con parte del aceite y reserva; haz lo mismo con el calabacín.', 'Pocha la cebolla, los pimientos y el ajo 10 min y añade el tomate.', 'Junta todo con las hierbas y la sal y cuece tapado a fuego suave 20 min.', 'Sirve con arroz blanco o solo con pan.']],
      horno: [60, ['Mezcla las verduras en dados con el ajo, el aceite, las hierbas y la sal en una fuente grande.', 'Hornea 45 min a 200 °C, removiendo 2 veces.', 'Sirve con arroz blanco.']],
      robot: [45, ['Pica cebolla, pimientos y ajo 3 seg/vel. 4 y sofríe con aceite 8 min/120 °C/giro inverso/vel. cuchara.', 'Añade berenjena, calabacín y tomate en dados, hierbas y sal: 25 min/100 °C/giro inverso/vel. cuchara, sin cubilete.', 'Sirve con arroz.']]
    }
  },
  {
    id: 'fr-tian', n: 'Tian provenzal de verduras', e: '🥒', tipo: 'cena', tags: ['vegetariano', 'ligera'],
    ing: [['calabacin', 400], ['berenjena', 300], ['tomate', 400], ['patata', 300], ['cebolla', 150], ['ajo', 2], ['queso_cabra', 120], ['hierbas_provenzales', 3], ['aceite', 50], ['sal', 5]],
    m: {
      horno: [65, ['Pocha la cebolla y el ajo picados y extiéndelos en la base de una fuente.', 'Corta las verduras en rodajas finas y colócalas de pie, alternándolas en hileras apretadas.', 'Riega con aceite, sal y hierbas y hornea tapado 30 min a 190 °C.', 'Destapa, añade el queso de cabra en trozos y hornea 20 min más.']],
      airfryer: [45, ['Monta el tian en un molde que quepa en el cesto.', 'Cocina tapado con aluminio 20 min a 170 °C.', 'Destapa, añade el queso y cocina 10 min a 190 °C.']]
    }
  },
  {
    id: 'fr-sopa-cebolla', n: 'Sopa de cebolla gratinada', e: '🧅', tipo: 'cena', tags: ['carne'],
    ing: [['cebolla', 900], ['mantequilla', 50], ['harina', 20], ['vino_blanco', 150], ['caldo_carne', 1200], ['tomillo', 1], ['pan_barra', 1], ['queso_emmental', 150], ['sal', 4], ['pimienta', 1]],
    m: {
      fuego: [70, ['Pocha la cebolla en juliana fina con la mantequilla y sal a fuego suave 40 min, removiendo, hasta que esté muy dorada.', 'Añade la harina, remueve 1 min y riega con el vino. Agrega el caldo y el tomillo y cuece 15 min.', 'Reparte en cuencos aptos, pon encima rebanadas de pan tostado y el queso rallado.', 'Gratina en el horno o con el grill 5 min a 230 °C.']],
      robot: [60, ['Pica la cebolla 4 seg/vel. 4 y sofríe con mantequilla 30 min/120 °C/giro inverso/vel. cuchara, sin cubilete.', 'Añade harina y vino: 2 min/120 °C/giro inverso/vel. cuchara. Añade caldo y tomillo: 15 min/100 °C/giro inverso/vel. cuchara.', 'Sirve en cuencos con pan y queso y gratina 5 min en el horno.']]
    }
  },
  {
    id: 'fr-veloute-champis', n: 'Crema de champiñones (velouté)', e: '🍄', tipo: 'cena', tags: ['vegetariano', 'ligera', 'rapida'],
    ing: [['champinon', 600], ['cebolla', 120], ['patata', 200], ['caldo_verduras', 800], ['nata', 100], ['mantequilla', 20], ['tomillo', 1], ['sal', 5], ['pimienta', 1]],
    m: {
      fuego: [30, ['Pocha la cebolla en la mantequilla 5 min, añade los champiñones y saltéalos 6 min.', 'Agrega la patata en dados, el caldo y el tomillo y cuece 15 min.', 'Tritura con la nata hasta que quede fina y ajusta sal y pimienta.']],
      robot: [28, ['Pica la cebolla 3 seg/vel. 5 y sofríe con mantequilla 3 min/120 °C/vel. 1.', 'Añade champiñones, patata, caldo, tomillo y sal: 20 min/100 °C/vel. 1.', 'Añade la nata y tritura 1 min/vel. 5-10 progresivo.']]
    }
  },
  {
    id: 'fr-garbure', n: 'Garbure (sopa de col y alubias)', e: '🥬', tipo: 'comida', tags: ['carne', 'legumbres'],
    ing: [['col_rizada', 400], ['alubias', 600], ['patata', 400], ['zanahoria', 150], ['puerro', 1], ['cebolla', 100], ['jamon', 100], ['pato_muslos', 400], ['ajo', 2], ['laurel', 1], ['sal', 5]],
    m: {
      fuego: [80, ['Dora los muslos de pato (o pollo) en su grasa, añade la cebolla, el puerro y el ajo y pocha 5 min.', 'Cubre con 1,8 l de agua, añade el jamón y el laurel y cuece 40 min.', 'Añade la patata, la zanahoria, la col en tiras y las alubias y cuece 25 min.', 'Desmenuza la carne del pato, devuélvela a la sopa y sirve.']],
      robot: [65, ['Dora el pato en una sartén. Pica cebolla, puerro y ajo 4 seg/vel. 4 y sofríe 5 min/120 °C/vel. 1.', 'Añade el pato, el jamón, el laurel y 1,5 l de agua: 35 min/100 °C/giro inverso/vel. cuchara.', 'Añade patata, zanahoria, col y alubias: 25 min/100 °C/giro inverso/vel. cuchara. Desmenuza el pato.']]
    }
  },
  {
    id: 'fr-bouillabaisse', n: 'Bullabesa fácil', e: '🐟', tipo: 'comida', tags: ['pescado'],
    ing: [['pescado_blanco', 500], ['rape', 300], ['mejillones', 500], ['gambas', 200], ['hinojo', 200], ['cebolla', 150], ['puerro', 1], ['tomate_triturado', 300], ['ajo', 3], ['azafran', 1], ['caldo_pescado', 1200], ['pan_barra', 1], ['mayonesa', 80], ['aceite', 40], ['sal', 4]],
    m: {
      fuego: [50, ['Sofríe la cebolla, el puerro, el hinojo en láminas y 2 ajos picados en el aceite 10 min.', 'Añade el tomate, el azafrán y el caldo y cuece 15 min.', 'Agrega el rape y el pescado en trozos y cuece 5 min. Añade los mejillones y las gambas y cuece 4 min más.', 'Sirve con pan tostado untado con la mayonesa mezclada con el ajo restante machacado.']],
      robot: [45, ['Pica cebolla, puerro, hinojo y ajo 5 seg/vel. 4 y sofríe con aceite 8 min/120 °C/vel. 1.', 'Añade tomate, azafrán y caldo: 15 min/100 °C/vel. 1.', 'Añade el pescado y el marisco en el recipiente de vapor o en el vaso: 8 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'fr-moules', n: 'Mejillones a la marinera francesa', e: '🦪', tipo: 'cena', tags: ['pescado', 'rapida'],
    ing: [['mejillones', 2000], ['chalota', 80], ['ajo', 2], ['vino_blanco', 200], ['nata', 100], ['mantequilla', 30], ['perejil_fresco', 1], ['patata', 700], ['aceite', 30], ['sal', 4]],
    m: {
      fuego: [30, ['Corta las patatas en bastones y fríelas o hazlas al horno.', 'Limpia los mejillones. Pocha la chalota y el ajo picados en la mantequilla 3 min.', 'Añade los mejillones y el vino, tapa y cuece 5 min a fuego fuerte moviendo la olla.', 'Agrega la nata y el perejil, remueve 1 min y sirve con las patatas.']],
      airfryer: [30, ['Prepara las patatas en bastones con 1 cucharada de aceite: 20 min a 200 °C.', 'Mientras, cocina los mejillones en una olla con chalota, ajo, vino y mantequilla.', 'Termina con nata y perejil.']]
    }
  },
  {
    id: 'fr-salmon-papillote', n: 'Salmón en papillote con puerro', e: '🐟', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['salmon', 600], ['puerro', 2], ['zanahoria', 150], ['limon', 1], ['vino_blanco', 60], ['eneldo', 1], ['mantequilla', 20], ['sal', 4]],
    m: {
      horno: [25, ['Corta el puerro y la zanahoria en tiras finas.', 'Reparte las verduras en 4 hojas de papel de horno, pon encima el salmón con sal, eneldo, una rodaja de limón, una nuez de mantequilla y un chorrito de vino.', 'Cierra los paquetes y hornea 15 min a 200 °C.']],
      airfryer: [20, ['Prepara los paquetes de papel de horno igual que para el horno.', 'Colócalos en el cesto.', 'Cocina 12 min a 180 °C.']],
      fuego: [20, ['Pocha el puerro y la zanahoria en tiras con la mantequilla 5 min.', 'Pon el salmón encima, añade el vino, el limón y el eneldo.', 'Tapa y cocina a fuego suave 8 min.']]
    }
  },
  {
    id: 'fr-trucha-almendras', n: 'Trucha a la almendra', e: '🐟', tipo: 'cena', tags: ['pescado', 'rapida'],
    ing: [['trucha', 1000], ['almendras', 60], ['mantequilla', 50], ['harina', 30], ['limon', 1], ['perejil_fresco', 1], ['patata', 600], ['sal', 5]],
    m: {
      fuego: [30, ['Cuece las patatas en agua con sal 18 min.', 'Pide las truchas limpias y abiertas. Sálalas y pásalas por harina.', 'Dóralas en la mitad de la mantequilla 3–4 min por lado y resérvalas.', 'Tuesta las almendras laminadas en el resto de la mantequilla, añade el zumo de limón y el perejil y vierte sobre las truchas.']],
      horno: [25, ['Pon las truchas saladas en una fuente con un poco de mantequilla.', 'Hornea 12 min a 200 °C.', 'Tuesta las almendras en sartén con mantequilla y limón y viértelas por encima. Sirve con patatas.']]
    }
  },
  {
    id: 'fr-meuniere', n: 'Pescado a la meunière', e: '🍋', tipo: 'cena', tags: ['pescado', 'rapida', 'ligera'],
    ing: [['pescado_blanco', 700], ['harina', 40], ['mantequilla', 60], ['limon', 2], ['perejil_fresco', 1], ['judias_verdes', 400], ['sal', 5]],
    m: {
      fuego: [20, ['Cuece las judías verdes en agua con sal 8 min.', 'Seca bien los filetes, sálalos y pásalos por harina.', 'Dóralos en la mitad de la mantequilla 2–3 min por lado y pásalos a los platos.', 'Funde el resto de la mantequilla hasta que tome color avellana, añade el zumo de limón y el perejil y riega el pescado. Sirve con las judías.']]
    }
  },
  {
    id: 'fr-brandada', n: 'Brandada de bacalao gratinada', e: '🐟', tipo: 'cena', tags: ['pescado'],
    ing: [['bacalao', 500], ['patata', 600], ['leche', 300], ['ajo', 3], ['aceite', 80], ['perejil_fresco', 1], ['queso_rallado', 50], ['laurel', 1], ['lechuga', 1], ['sal', 2]],
    m: {
      horno: [45, ['Cuece las patatas peladas 20 min. Escalfa el bacalao en la leche con el laurel 6 min y desmígalo sin piel ni espinas.', 'Dora los ajos picados en el aceite a fuego suave.', 'Aplasta las patatas con el bacalao, el aceite con ajo, el perejil y leche de la cocción hasta tener un puré.', 'Pásalo a una fuente, cubre con queso y gratina 10 min a 220 °C. Sirve con ensalada.']],
      robot: [40, ['Cuece patata en dados con la leche y el bacalao: 20 min/100 °C/vel. 1 (bacalao en el cestillo si lo tienes).', 'Desmiga el bacalao y ponlo en el vaso con patata, ajo y aceite: 20 seg/vel. 4.', 'Pasa a una fuente con queso y gratina 10 min en el horno.']]
    }
  },
  {
    id: 'fr-salmon-lentejas', n: 'Salmón con lentejas', e: '🐟', tipo: 'comida', tags: ['pescado', 'legumbres'],
    ing: [['salmon', 600], ['lentejas', 250], ['zanahoria', 100], ['chalota', 60], ['laurel', 1], ['mostaza', 20], ['vinagre', 20], ['aceite', 50], ['perejil_fresco', 1], ['sal', 6]],
    m: {
      fuego: [40, ['Cuece las lentejas con la zanahoria en daditos y el laurel en agua 25 min. Escúrrelas.', 'Aliña las lentejas con la chalota picada, la mostaza, el vinagre, la mitad del aceite, sal y perejil.', 'Marca el salmón con sal en una sartén con el resto del aceite, 3 min por lado empezando por la piel.', 'Sirve el salmón sobre las lentejas templadas.']],
      horno: [40, ['Cuece y aliña las lentejas como en la versión tradicional.', 'Hornea el salmón con sal y un hilo de aceite 12 min a 200 °C.', 'Sirve sobre las lentejas.']],
      airfryer: [35, ['Cuece y aliña las lentejas.', 'Cocina el salmón con sal y aceite 9 min a 190 °C.', 'Sirve sobre las lentejas.']]
    }
  },
  {
    id: 'fr-beurre-blanc', n: 'Merluza con salsa de mantequilla blanca', e: '🐟', tipo: 'cena', tags: ['pescado', 'rapida'],
    ing: [['merluza', 700], ['chalota', 60], ['vino_blanco', 100], ['vinagre', 30], ['mantequilla', 100], ['esparragos', 1], ['patata', 500], ['aceite', 20], ['sal', 5]],
    m: {
      fuego: [30, ['Cuece las patatas en agua con sal 15 min. Saltea los espárragos con el aceite 5 min.', 'Reduce la chalota picada con el vino y el vinagre hasta que casi no quede líquido.', 'A fuego mínimo, añade la mantequilla fría en dados batiendo hasta tener una salsa ligada. Sala.', 'Cocina la merluza salada a la plancha 3 min por lado y sirve con la salsa, los espárragos y las patatas.']],
      horno: [30, ['Hornea la merluza y los espárragos con aceite y sal 12 min a 200 °C.', 'Prepara la salsa de mantequilla en un cazo.', 'Sirve con patatas cocidas.']]
    }
  },
  {
    id: 'fr-nicoise', n: 'Ensalada niçoise', e: '🥗', tipo: 'cena', tags: ['pescado', 'ligera'],
    ing: [['lechuga', 1], ['tomate', 400], ['judias_verdes', 250], ['patata', 400], ['huevo', 4], ['atun', 3], ['anchoas', 1], ['aceitunas', 60], ['cebolla_morada', 50], ['vinagre', 20], ['mostaza', 10], ['aceite', 60], ['sal', 4]],
    m: {
      fuego: [30, ['Cuece las patatas en dados 12 min y las judías verdes 7 min. Enfríalas.', 'Cuece los huevos 9 min, pélalos y córtalos en cuartos.', 'Monta la lechuga, el tomate, las patatas, las judías, el atún, las anchoas, las aceitunas y la cebolla.', 'Aliña con una vinagreta de aceite, vinagre, mostaza y sal y corona con el huevo.']]
    }
  },
  {
    id: 'fr-chevre-chaud', n: 'Ensalada de queso de cabra caliente', e: '🧀', tipo: 'cena', tags: ['vegetariano', 'ligera', 'rapida'],
    ing: [['queso_cabra', 250], ['pan_barra', 1], ['lechuga', 1], ['rucula', 80], ['nueces', 50], ['miel', 30], ['tomate_cherry', 200], ['vinagre', 15], ['mostaza', 10], ['aceite', 40], ['sal', 2]],
    m: {
      horno: [15, ['Corta el pan en rebanadas, pon una rodaja de queso en cada una y unas gotas de miel.', 'Hornea 6 min a 220 °C con el grill.', 'Sirve sobre la lechuga, la rúcula, los cherrys y las nueces aliñados con aceite, vinagre, mostaza y sal.']],
      airfryer: [12, ['Prepara las tostas con queso y miel.', 'Cocina 4 min a 200 °C.', 'Sirve sobre la ensalada aliñada.']]
    }
  },
  {
    id: 'fr-lyonnaise', n: 'Ensalada lionesa con huevo poché', e: '🥚', tipo: 'cena', tags: ['carne', 'ligera', 'rapida'],
    ing: [['lechuga', 2], ['bacon', 150], ['huevo', 4], ['pan_barra', 1], ['chalota', 30], ['vinagre', 30], ['mostaza', 10], ['aceite', 40], ['sal', 2]],
    m: {
      fuego: [20, ['Dora el bacon en tiras y resérvalo. Tuesta en su grasa el pan en dados para hacer picatostes.', 'Escalfa los huevos 3 min en agua hirviendo con un chorro de vinagre.', 'Aliña la lechuga con aceite, vinagre, mostaza, la chalota picada y sal.', 'Reparte con el bacon y los picatostes y coloca un huevo encima de cada plato.']]
    }
  },
  {
    id: 'fr-endivias-jamon', n: 'Endivias con jamón gratinadas', e: '🥬', tipo: 'cena', tags: ['carne'],
    ing: [['endivias', 800], ['jamon_cocido', 200], ['leche', 500], ['harina', 40], ['mantequilla', 40], ['queso_emmental', 100], ['nuez_moscada', 1], ['limon', 1], ['sal', 4]],
    m: {
      horno: [50, ['Cuece las endivias enteras en agua con sal y el zumo de limón 15 min y escúrrelas muy bien.', 'Haz una bechamel con la mantequilla, la harina, la leche, sal y nuez moscada.', 'Envuelve cada endivia en una loncha de jamón y colócalas en una fuente.', 'Cubre con la bechamel y el queso y hornea 20 min a 200 °C.']],
      airfryer: [40, ['Cuece y escurre las endivias y prepara la bechamel.', 'Envuélvelas en jamón y ponlas en un molde apto con la bechamel y el queso.', 'Cocina 12 min a 190 °C.']]
    }
  },
  {
    id: 'fr-endivias-queso-azul', n: 'Ensalada de endivias, queso azul y nueces', e: '🥗', tipo: 'cena', tags: ['vegetariano', 'ligera', 'rapida'],
    ing: [['endivias', 500], ['queso_azul', 120], ['nueces', 60], ['manzana', 300], ['rucula', 60], ['mostaza', 10], ['vinagre', 20], ['miel', 10], ['aceite', 40], ['sal', 2]],
    m: {
      sin: [10, ['Separa las hojas de las endivias y córtalas en trozos grandes.', 'Mezcla con la manzana en láminas, la rúcula, el queso desmenuzado y las nueces.', 'Aliña con una vinagreta de aceite, vinagre, mostaza, miel y sal.']]
    }
  }
]);

/* ---- Cenas, huevos y platos de diario ---- */
MC_ADD('fr', [
  {
    id: 'fr-oeufs-cocotte', n: 'Huevos en cocotte con espinacas', e: '🥚', tipo: 'cena', tags: ['vegetariano', 'rapida', 'ligera'],
    ing: [['huevo', 8], ['espinacas', 200], ['nata', 150], ['queso_emmental', 60], ['mantequilla', 15], ['nuez_moscada', 1], ['pan_barra', 1], ['sal', 3]],
    m: {
      horno: [20, ['Saltea las espinacas en la mantequilla 2 min y repártelas en 4 cazuelitas.', 'Casca 2 huevos en cada una, añade la nata, sal, nuez moscada y el queso rallado.', 'Hornea al baño maría 12 min a 180 °C, hasta que la clara cuaje. Sirve con pan tostado.']],
      airfryer: [15, ['Prepara las cazuelitas igual que para el horno.', 'Colócalas en el cesto.', 'Cocina 8–9 min a 160 °C.']]
    }
  },
  {
    id: 'fr-omelette', n: 'Omelette de champiñones y queso', e: '🍳', tipo: 'cena', tags: ['vegetariano', 'rapida', 'ligera', 'niños'],
    ing: [['huevo', 8], ['champinon', 250], ['queso_emmental', 80], ['mantequilla', 30], ['perejil_fresco', 1], ['lechuga', 1], ['sal', 3]],
    m: {
      fuego: [15, ['Saltea los champiñones con la mitad de la mantequilla y sal 5 min.', 'Bate 2 huevos por persona con sal y perejil.', 'Cuaja cada tortilla en una sartén con mantequilla a fuego medio, removiendo al principio. Rellena con champiñones y queso, dobla y sirve con ensalada.']]
    }
  },
  {
    id: 'fr-pissaladiere', n: 'Pissaladière (coca de cebolla y anchoas)', e: '🧅', tipo: 'cena', tags: ['pescado'],
    ing: [['masa_pizza', 1], ['cebolla', 800], ['anchoas', 1], ['aceitunas', 50], ['tomillo', 1], ['aceite', 40], ['sal', 3]],
    m: {
      horno: [55, ['Pocha la cebolla en juliana con el aceite, el tomillo y la sal a fuego suave 30 min, sin que se dore demasiado.', 'Extiende la masa en una bandeja y cúbrela con la cebolla.', 'Decora con las anchoas en rombo y las aceitunas.', 'Hornea 15 min a 220 °C.']]
    }
  },
  {
    id: 'fr-flammekueche', n: 'Flammekueche (tarta flambeada alsaciana)', e: '🥓', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['masa_pizza', 1], ['queso_crema', 150], ['nata', 100], ['bacon', 150], ['cebolla', 200], ['nuez_moscada', 1], ['sal', 2], ['pimienta', 1]],
    m: {
      horno: [25, ['Precalienta el horno a 240 °C.', 'Estira la masa muy fina. Mezcla el queso crema con la nata, sal, pimienta y nuez moscada y úntala por encima.', 'Reparte la cebolla en juliana muy fina y el bacon en tiras.', 'Hornea 10–12 min hasta que los bordes estén dorados.']],
      airfryer: [20, ['Corta la masa en piezas que quepan en el cesto.', 'Cúbrelas con la crema, la cebolla y el bacon.', 'Cocina 7 min a 200 °C.']]
    }
  },
  {
    id: 'fr-coquillettes', n: 'Pasta con jamón y queso gratinada', e: '🧀', tipo: 'cena', tags: ['carne', 'niños', 'rapida'],
    ing: [['macarron', 350], ['jamon_cocido', 200], ['queso_emmental', 150], ['nata', 200], ['leche', 100], ['nuez_moscada', 1], ['sal', 5]],
    m: {
      fuego: [20, ['Cuece la pasta en agua con sal.', 'Calienta la nata con la leche y la nuez moscada y funde en ella la mitad del queso.', 'Mezcla con la pasta y el jamón en dados y sirve con el resto del queso.']],
      horno: [30, ['Cuece la pasta y mézclala con la nata, la leche, el jamón y la mitad del queso.', 'Pásala a una fuente y cubre con el resto del queso.', 'Gratina 10 min a 220 °C.']]
    }
  },
  {
    id: 'fr-ensalada-lentejas', n: 'Ensalada de lentejas a la mostaza', e: '🥗', tipo: 'cena', tags: ['legumbres', 'vegetariano', 'ligera'],
    ing: [['lentejas', 250], ['zanahoria', 100], ['chalota', 50], ['tomate_cherry', 200], ['queso_cabra', 100], ['mostaza', 20], ['vinagre', 25], ['aceite', 50], ['perejil_fresco', 1], ['laurel', 1], ['sal', 5]],
    m: {
      fuego: [35, ['Cuece las lentejas con el laurel 25 min, sin que se deshagan. Escúrrelas y deja templar.', 'Mezcla la zanahoria rallada, la chalota picada, los cherrys partidos y el perejil.', 'Aliña con una vinagreta de mostaza, vinagre, aceite y sal y añade el queso de cabra desmenuzado.']],
      sin: [15, ['Usa lentejas cocidas de bote, enjuagadas.', 'Mezcla con zanahoria, chalota, cherrys y perejil.', 'Aliña con la vinagreta de mostaza y añade el queso.']]
    }
  },
  {
    id: 'fr-gratin-calabacin', n: 'Gratén de calabacín', e: '🥒', tipo: 'cena', tags: ['vegetariano', 'ligera'],
    ing: [['calabacin', 1000], ['cebolla', 100], ['ajo', 1], ['huevo', 2], ['nata', 150], ['queso_emmental', 100], ['hierbas_provenzales', 2], ['aceite', 20], ['sal', 5]],
    m: {
      horno: [45, ['Saltea el calabacín en rodajas con la cebolla, el ajo y el aceite 8 min y ponlo en una fuente.', 'Bate los huevos con la nata, la mitad del queso, las hierbas y la sal.', 'Vierte sobre el calabacín, cubre con el resto del queso y hornea 25 min a 190 °C.']],
      airfryer: [35, ['Saltea el calabacín y ponlo en un molde apto.', 'Cúbrelo con el huevo batido con nata y queso.', 'Cocina 15 min a 170 °C.']]
    }
  },
  {
    id: 'fr-cordon-bleu', n: 'Cordon bleu de pollo', e: '🍗', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['pollo_pechuga', 600], ['jamon_cocido', 100], ['queso_emmental', 100], ['huevo', 2], ['harina', 30], ['pan_rallado', 100], ['lechuga', 1], ['aceite', 50], ['sal', 4]],
    m: {
      fuego: [30, ['Abre las pechugas en libro y aplánalas. Sálalas, rellena con jamón y queso y ciérralas.', 'Pásalas por harina, huevo batido y pan rallado.', 'Fríelas en el aceite a fuego medio 5 min por lado. Sirve con ensalada.']],
      horno: [35, ['Prepara y empana las pechugas rellenas.', 'Colócalas en una bandeja con un hilo de aceite.', 'Hornea 22 min a 200 °C, girándolas a mitad.']],
      airfryer: [25, ['Prepara y empana las pechugas rellenas y úntalas con un poco de aceite.', 'Cocina 15 min a 190 °C, girándolas a mitad.', 'Sirve con ensalada.']]
    }
  },
  {
    id: 'fr-daube', n: 'Daube provenzal (estofado de ternera con aceitunas)', e: '🫒', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_guisar', 900], ['vino_tinto', 400], ['tomate_triturado', 300], ['cebolla', 200], ['zanahoria', 200], ['ajo', 3], ['aceitunas', 80], ['naranja', 200], ['hierbas_provenzales', 3], ['laurel', 1], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [150, ['Marina la carne en el vino con la cebolla, la zanahoria, el ajo, las hierbas y una tira de piel de naranja al menos 2 h (mejor la noche antes).', 'Escurre la carne y dórala en el aceite. Añade las verduras de la marinada y sofríe 5 min.', 'Vierte el vino de la marinada y el tomate, añade el laurel y cuece tapado 2 h a fuego muy suave.', 'Añade las aceitunas los últimos 15 min.']],
      horno: [170, ['Marina y dora la carne como en la versión tradicional en una cazuela apta para horno.', 'Añade el vino, el tomate y el laurel, tapa y hornea 2 h 30 min a 160 °C.', 'Incorpora las aceitunas y hornea 15 min más.']],
      robot: [120, ['Marina la carne como en la versión tradicional y dórala en una sartén.', 'Sofríe las verduras de la marinada con aceite 5 min/120 °C/vel. 1.', 'Añade carne, vino, tomate y laurel: 90 min/100 °C/giro inverso/vel. cuchara. Añade las aceitunas: 10 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'fr-conejo-mostaza', n: 'Conejo a la mostaza', e: '🐇', tipo: 'comida', tags: ['carne'],
    ing: [['conejo', 1200], ['mostaza', 80], ['chalota', 80], ['vino_blanco', 200], ['nata', 200], ['tomillo', 1], ['patata', 600], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [60, ['Unta el conejo con la mitad de la mostaza y sal.', 'Dóralo en el aceite, añade la chalota picada y pocha 3 min.', 'Riega con el vino, añade el tomillo y cuece tapado 35 min.', 'Agrega la nata con el resto de la mostaza y cuece 5 min. Sirve con patatas cocidas.']],
      horno: [65, ['Unta el conejo con mostaza y sal y ponlo en una fuente con la chalota y las patatas en gajos.', 'Hornea 30 min a 190 °C, riega con el vino y hornea 15 min más.', 'Añade la nata con el resto de la mostaza y hornea 10 min.']]
    }
  },
  {
    id: 'fr-galette', n: 'Crepes saladas de jamón, queso y huevo', e: '🥞', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['harina', 200], ['leche', 450], ['huevo', 7], ['jamon_cocido', 200], ['queso_emmental', 150], ['mantequilla', 40], ['lechuga', 1], ['sal', 3]],
    m: {
      fuego: [40, ['Bate la harina con la leche, 3 huevos, sal y la mitad de la mantequilla fundida. Deja reposar la masa 15 min.', 'Haz las crepes en una sartén untada con mantequilla.', 'Pon una crepe en la sartén, añade queso, jamón y un huevo en el centro. Dobla los bordes hacia dentro y tapa hasta que cuaje la clara.', 'Sirve con ensalada.']]
    }
  },
  {
    id: 'fr-petits-farcis', n: 'Petits farcis (tomates y calabacines rellenos)', e: '🍅', tipo: 'comida', tags: ['carne'],
    ing: [['tomate', 800], ['calabacin', 500], ['carne_picada', 400], ['cebolla', 100], ['ajo', 2], ['pan_rallado', 40], ['huevo', 1], ['parmesano', 40], ['hierbas_provenzales', 2], ['aceite', 30], ['sal', 5]],
    m: {
      horno: [60, ['Vacía los tomates y los calabacines partidos por la mitad. Pica la pulpa.', 'Sofríe la cebolla y el ajo, añade la carne y la pulpa y cocina 8 min. Mezcla con el pan rallado, el huevo, el queso y las hierbas.', 'Rellena las verduras, colócalas en una fuente con aceite y hornea 40 min a 190 °C.']],
      airfryer: [45, ['Prepara las verduras y el relleno.', 'Rellénalas y úntalas con aceite.', 'Cocina 25 min a 180 °C, en tandas si no caben.']]
    }
  },
  {
    id: 'fr-du-barry', n: 'Crema de coliflor (crème Du Barry)', e: '🥣', tipo: 'cena', tags: ['vegetariano', 'ligera'],
    ing: [['coliflor', 800], ['puerro', 1], ['patata', 200], ['caldo_verduras', 900], ['nata', 100], ['mantequilla', 20], ['nuez_moscada', 1], ['sal', 5]],
    m: {
      fuego: [35, ['Pocha el puerro en rodajas con la mantequilla 5 min.', 'Añade la coliflor en ramilletes, la patata en dados y el caldo y cuece 20 min.', 'Tritura con la nata y la nuez moscada hasta que quede muy fina.']],
      robot: [30, ['Pica el puerro 3 seg/vel. 5 y sofríe con mantequilla 3 min/120 °C/vel. 1.', 'Añade coliflor, patata, caldo y sal: 22 min/100 °C/vel. 1.', 'Añade la nata y la nuez moscada y tritura 1 min/vel. 5-10 progresivo.']]
    }
  },
  {
    id: 'fr-chasseur', n: 'Pollo a la cazadora francesa (poulet chasseur)', e: '🍄', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_muslos', 1000], ['champinon', 300], ['chalota', 80], ['tomate_triturado', 200], ['vino_blanco', 150], ['caldo_pollo', 150], ['estragon', 1], ['perejil_fresco', 1], ['mantequilla', 20], ['aceite', 20], ['sal', 6]],
    m: {
      fuego: [50, ['Dora el pollo salado en el aceite y la mantequilla y resérvalo.', 'Saltea los champiñones y la chalota picada 5 min.', 'Riega con el vino, añade el tomate, el caldo, el estragón y el pollo y cuece tapado 30 min.', 'Termina con perejil picado.']],
      robot: [45, ['Dora el pollo en una sartén.', 'Pica la chalota 3 seg/vel. 5 y sofríe con champiñones y mantequilla 5 min/120 °C/giro inverso/vel. cuchara.', 'Añade vino, tomate, caldo, estragón y pollo: 30 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'fr-boeuf-carottes', n: 'Ternera con zanahorias (boeuf aux carottes)', e: '🥕', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['ternera_guisar', 800], ['zanahoria', 700], ['cebolla', 200], ['ajo', 2], ['vino_blanco', 200], ['caldo_carne', 500], ['tomillo', 1], ['laurel', 1], ['harina', 15], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [130, ['Dora la carne salada en el aceite, añade la cebolla y el ajo y pocha 5 min. Espolvorea la harina.', 'Riega con el vino y el caldo, añade tomillo y laurel y cuece tapado 1 h 15 min.', 'Añade las zanahorias en rodajas gruesas y cuece 40 min más.']],
      robot: [100, ['Dora la carne en una sartén.', 'Pica cebolla y ajo 3 seg/vel. 5 y sofríe con aceite 5 min/120 °C/vel. 1.', 'Añade carne, harina, vino, caldo y hierbas: 60 min/100 °C/giro inverso/vel. cuchara. Añade las zanahorias: 30 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'fr-pan-bagnat', n: 'Pan bagnat (bocadillo nizardo)', e: '🥖', tipo: 'cena', tags: ['pescado', 'rapida'],
    ing: [['pan_barra', 2], ['atun', 3], ['huevo', 3], ['tomate', 300], ['pimiento_verde', 100], ['cebolla_morada', 50], ['aceitunas', 40], ['anchoas', 1], ['lechuga', 1], ['vinagre', 10], ['aceite', 40], ['sal', 2]],
    m: {
      sin: [20, ['Cuece los huevos 10 min y córtalos en rodajas (o usa huevos cocidos).', 'Abre el pan, quita algo de miga y riégalo con aceite y vinagre.', 'Rellena con lechuga, tomate, pimiento y cebolla en rodajas, atún, huevo, aceitunas y anchoas.', 'Cierra, envuelve en film y presiona 10 min antes de cortar.']]
    }
  },
  {
    id: 'fr-piemontaise', n: 'Ensalada piamontesa de patata', e: '🥔', tipo: 'cena', tags: ['carne', 'ligera'],
    ing: [['patata', 800], ['jamon_cocido', 150], ['huevo', 3], ['tomate', 300], ['pepinillos', 80], ['mayonesa', 120], ['mostaza', 10], ['perejil_fresco', 1], ['sal', 5]],
    m: {
      fuego: [30, ['Cuece las patatas en dados en agua con sal 12 min y los huevos 10 min. Enfría.', 'Corta el jamón, los pepinillos, el tomate y los huevos en dados.', 'Mezcla todo con la mayonesa, la mostaza y el perejil. Sirve fría.']]
    }
  },
  {
    id: 'fr-saint-germain', n: 'Crema de guisantes (potage Saint-Germain)', e: '🟢', tipo: 'cena', tags: ['vegetariano', 'ligera', 'rapida'],
    ing: [['guisantes', 600], ['puerro', 1], ['patata', 150], ['caldo_verduras', 800], ['nata', 80], ['hierbabuena', 1], ['mantequilla', 20], ['sal', 5]],
    m: {
      fuego: [25, ['Pocha el puerro en la mantequilla 5 min.', 'Añade la patata en dados, los guisantes y el caldo y cuece 12 min.', 'Tritura con la nata y unas hojas de hierbabuena.']],
      robot: [25, ['Pica el puerro 3 seg/vel. 5 y sofríe con mantequilla 3 min/120 °C/vel. 1.', 'Añade patata, guisantes, caldo y sal: 15 min/100 °C/vel. 1.', 'Añade nata y hierbabuena y tritura 1 min/vel. 5-10 progresivo.']]
    }
  },
  {
    id: 'fr-bacalao-puerros', n: 'Bacalao con fondue de puerros', e: '🐟', tipo: 'cena', tags: ['pescado', 'ligera'],
    ing: [['bacalao', 700], ['puerro', 4], ['nata', 150], ['vino_blanco', 80], ['mantequilla', 30], ['patata', 500], ['sal', 3], ['pimienta', 1]],
    m: {
      fuego: [35, ['Cuece las patatas en agua con sal 15 min.', 'Pocha los puerros en rodajas finas con la mantequilla 15 min a fuego suave. Riega con el vino y añade la nata.', 'Coloca el bacalao encima, tapa y cocina 8 min a fuego suave.', 'Sirve con las patatas.']],
      horno: [35, ['Prepara la fondue de puerros y extiéndela en una fuente.', 'Coloca el bacalao encima.', 'Hornea 12 min a 200 °C y sirve con patatas.']]
    }
  },
  {
    id: 'fr-oeufs-meurette', n: 'Huevos en salsa de vino tinto (oeufs en meurette)', e: '🍷', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['huevo', 8], ['vino_tinto', 400], ['bacon', 100], ['champinon', 150], ['chalota', 60], ['caldo_carne', 150], ['mantequilla', 30], ['harina', 10], ['pan_barra', 1], ['vinagre', 20], ['sal', 2]],
    m: {
      fuego: [30, ['Dora el bacon y los champiñones con la chalota en la mitad de la mantequilla 5 min.', 'Añade el vino y el caldo y reduce a la mitad 10 min. Liga con la harina amasada con el resto de la mantequilla.', 'Escalfa los huevos 3 min en agua con vinagre, o directamente en la salsa.', 'Sirve los huevos sobre pan tostado, cubiertos con la salsa.']]
    }
  }
]);
