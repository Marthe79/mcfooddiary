/* MC Food Diary · cocina de Colombia 🇨🇴. Formato y normas: recetas/GUIA-RECETAS.md */

MC_ADD_ING({
  platano_macho: ['Plátano macho', 'fruteria', 2.5, 'kg'],
  yuca: ['Yuca congelada', 'congelados', 3.5, 'kg', 0, 'patata'],
  mazorca: ['Mazorca de maíz cocida', 'fruteria', 1, 'ud'],
  maiz_blanco: ['Maíz blanco cocido (pozolero o mote, bote)', 'despensa', 6, 'kg', 0, 'garbanzos cocidos'],
  ternera_falda: ['Falda de ternera', 'carniceria', 10, 'kg'],
  chorizo_fresco: ['Chorizo fresco para barbacoa', 'carniceria', 7, 'kg'],
  mezcla_marisco: ['Mezcla de marisco congelada', 'congelados', 7, 'kg'],
  higado: ['Hígado de ternera', 'carniceria', 8, 'kg'],
  coco_rallado: ['Coco rallado', 'despensa', 9, 'kg'],
  guascas: ['Guascas secas', 'despensa', 40, 'kg', 0, 'orégano seco con una hoja de laurel'],
  panela: ['Panela', 'despensa', 4, 'kg', 0, 'azúcar moreno'],
});

MC_ADD('co', [
{
    id: 'co-ajiaco', n: 'Ajiaco santafereño', e: '🍲', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_pechuga', 700], ['patata', 1200], ['mazorca', 2], ['guascas', 5], ['cebolleta', 2], ['ajo', 2], ['caldo_pollo', 2000], ['nata', 150], ['alcaparras', 30], ['aguacate', 2], ['arroz_largo', 200], ['sal', 7]],
    m: {
      fuego: [80, ['Cuece el pollo en el caldo con la cebolleta y el ajo 20 min. Sácalo y desmenúzalo.', 'Añade al caldo la patata pelada en rodajas finas (la mitad se deshará y espesará la sopa) y la mazorca en trozos y cuece 40 min.', 'Agrega las guascas los últimos 10 min y vuelve a poner el pollo. Sala.', 'Sirve con nata, alcaparras, aguacate y arroz blanco aparte.']],
      robot: [70, ['Pon el pollo, la cebolleta, el ajo y 1,5 l de caldo: 20 min/100 °C/giro inverso/vel. cuchara. Saca el pollo y desmenúzalo.', 'Añade la patata en rodajas y la mazorca: 30 min/100 °C/giro inverso/vel. cuchara.', 'Agrega guascas, el pollo y la sal: 8 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con nata, alcaparras, aguacate y arroz.']]
    }
  },
  {
    id: 'co-sancocho-gallina', n: 'Sancocho de pollo', e: '🍲', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_entero', 1400], ['yuca', 500], ['platano_macho', 400], ['patata', 400], ['mazorca', 2], ['cebolleta', 3], ['ajo', 3], ['tomate', 200], ['cilantro', 2], ['comino', 1], ['arroz_largo', 250], ['aguacate', 2], ['sal', 9]],
    m: {
      fuego: [90, ['Cuece el pollo troceado con la cebolleta, el ajo, el tomate, el comino, medio manojo de cilantro y 3 l de agua 30 min.', 'Añade el plátano verde en trozos (partido con la mano) y la mazorca y cuece 15 min.', 'Agrega la yuca y la patata en trozos grandes y cuece 25 min. Sala.', 'Sirve con cilantro picado, arroz blanco y aguacate.']],
      robot: [75, ['Pon el pollo, la cebolleta, el ajo, el tomate, el comino, el cilantro, 1,5 l de agua y la sal: 25 min/100 °C/giro inverso/vel. cuchara.', 'Añade plátano y mazorca: 10 min/100 °C/giro inverso/vel. cuchara.', 'Agrega yuca y patata: 25 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con cilantro, arroz y aguacate.']]
    }
  },
  {
    id: 'co-sancocho-pescado', n: 'Sancocho de pescado', e: '🐟', tipo: 'comida', tags: ['pescado'],
    ing: [['merluza', 800], ['yuca', 500], ['platano_macho', 400], ['patata', 300], ['leche_coco', 400], ['cebolleta', 3], ['tomate', 200], ['ajo', 3], ['pimiento_rojo', 100], ['cilantro', 1], ['comino', 1], ['caldo_pescado', 1200], ['lima', 2], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [55, ['Sofríe la cebolleta, el tomate, el ajo y el pimiento picados con el comino 8 min (hogao).', 'Añade el caldo, la yuca, el plátano y la patata en trozos y cuece 25 min.', 'Agrega la leche de coco y el pescado en trozos y cuece 8 min sin remover fuerte.', 'Sirve con cilantro y lima.']],
      robot: [50, ['Pica cebolleta, tomate, ajo y pimiento 4 seg/vel. 5 y sofríe con aceite y comino 7 min/120 °C/vel. 1.', 'Añade caldo, yuca, plátano, patata y sal: 25 min/100 °C/giro inverso/vel. cuchara.', 'Agrega leche de coco y pescado: 8 min/90 °C/giro inverso/vel. cuchara.', 'Sirve con cilantro y lima.']]
    }
  },
  {
    id: 'co-bandeja-paisa', n: 'Bandeja paisa', e: '🍛', tipo: 'comida', tags: ['carne', 'legumbres'],
    ing: [['alubias_rojas', 600], ['carne_picada_ternera', 400], ['panceta', 400], ['chorizo_fresco', 300], ['arroz_largo', 250], ['huevo', 4], ['platano_macho', 400], ['aguacate', 2], ['tomate', 200], ['cebolleta', 2], ['comino', 1], ['pimenton', 2], ['aceite', 40], ['sal', 7]],
    m: {
      fuego: [60, ['Haz un hogao con la cebolleta y el tomate picados 8 min. Añade la mitad a las alubias con 200 ml de agua y cuece 15 min.', 'Saltea la carne picada con el comino, el pimentón y sal hasta que quede suelta y seca (carne en polvo).', 'Dora la panceta en tiras hasta que esté crujiente y el chorizo. Fríe el plátano maduro en rodajas y los huevos.', 'Sirve en cada plato arroz, alubias, carne, panceta, chorizo, plátano, huevo, aguacate y el resto del hogao.']],
      airfryer: [60, ['Cocina la panceta en tiras 15 min a 200 °C y el chorizo 12 min a 200 °C. El plátano, 10 min a 190 °C.', 'Prepara las alubias con hogao y la carne en sartén.', 'Fríe los huevos y monta las bandejas con arroz y aguacate.']]
    }
  },
  {
    id: 'co-arroz-con-pollo', n: 'Arroz con pollo colombiano', e: '🍚', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['arroz_largo', 350], ['pollo_pechuga', 600], ['zanahoria', 150], ['guisantes', 120], ['judias_verdes', 100], ['pimiento_rojo', 120], ['cebolleta', 2], ['ajo', 2], ['azafran', 1], ['salsa_worcestershire', 20], ['caldo_pollo', 800], ['aceite', 40], ['sal', 6]],
    m: {
      fuego: [50, ['Cuece el pollo en el caldo 15 min y desmenúzalo. Guarda el caldo.', 'Sofríe la cebolleta, el ajo y el pimiento picados 6 min, añade la zanahoria en dados y las judías troceadas.', 'Agrega el arroz, el colorante, 700 ml del caldo y la salsa inglesa y cuece 15 min.', 'Incorpora el pollo y los guisantes, tapa y cocina 5 min más a fuego bajo.']],
      robot: [45, ['Pon el pollo con 900 ml de caldo: 15 min/100 °C/giro inverso/vel. cuchara. Desmenúzalo y reserva el caldo.', 'Pica cebolleta, ajo y pimiento 4 seg/vel. 5 y sofríe con aceite 6 min/120 °C/vel. 1.', 'Añade zanahoria, judías, guisantes, colorante, salsa, 700 ml de caldo y arroz: 16 min/100 °C/giro inverso/vel. cuchara.', 'Mezcla con el pollo y reposa 5 min.']]
    }
  },
  {
    id: 'co-arroz-atollado', n: 'Arroz atollado', e: '🍚', tipo: 'comida', tags: ['carne'],
    ing: [['arroz', 300], ['pollo_muslos', 500], ['cerdo_costillas', 400], ['chorizo', 150], ['patata', 400], ['tomate', 300], ['cebolleta', 2], ['pimiento_rojo', 100], ['ajo', 3], ['azafran', 1], ['comino', 1], ['caldo_pollo', 1200], ['aceite', 30], ['sal', 7]],
    m: {
      fuego: [70, ['Dora el pollo, las costillas troceadas y el chorizo en rodajas y resérvalos.', 'Haz un hogao con la cebolleta, el tomate, el pimiento y el ajo 8 min con comino y colorante.', 'Devuelve las carnes con el caldo y cuece 25 min. Añade la patata en dados y el arroz.', 'Cuece 20 min removiendo de vez en cuando: debe quedar meloso, a medio camino entre arroz y sopa.']],
      robot: [60, ['Pica cebolleta, tomate, pimiento y ajo 4 seg/vel. 5 y sofríe con aceite y especias 7 min/120 °C/vel. 1.', 'Añade las carnes troceadas, el caldo y la sal: 25 min/100 °C/giro inverso/vel. cuchara.', 'Agrega patata y arroz: 18 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'co-frijoles-antioquenos', n: 'Frijoles antioqueños', e: '🫘', tipo: 'comida', tags: ['legumbres', 'carne'],
    ing: [['alubias_rojas', 800], ['panceta', 200], ['platano_macho', 300], ['zanahoria', 120], ['tomate', 250], ['cebolleta', 2], ['ajo', 2], ['comino', 1], ['arroz_largo', 250], ['aguacate', 2], ['aceite', 20], ['sal', 6]],
    m: {
      fuego: [50, ['Pon las alubias con su líquido, 500 ml de agua, la zanahoria rallada y el plátano verde en trozos pequeños y cuece 25 min (el plátano espesa el caldo).', 'Dora la panceta en dados y resérvala. En su grasa haz un hogao con la cebolleta, el tomate, el ajo y el comino 8 min.', 'Añade el hogao a las alubias y cuece 10 min más. Sala.', 'Sirve con arroz, la panceta crujiente y aguacate.']],
      robot: [45, ['Pica cebolleta, tomate y ajo 4 seg/vel. 5 y sofríe con aceite y comino 7 min/120 °C/vel. 1.', 'Añade alubias, 400 ml de agua, zanahoria, plátano y sal: 30 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con arroz, panceta dorada en sartén y aguacate.']]
    }
  },
  {
    id: 'co-lentejas', n: 'Lentejas colombianas', e: '🍲', tipo: 'comida', tags: ['legumbres', 'vegetariano'],
    ing: [['lentejas', 350], ['patata', 300], ['zanahoria', 120], ['tomate', 250], ['cebolleta', 2], ['ajo', 2], ['pimiento_rojo', 100], ['comino', 1], ['azafran', 1], ['cilantro', 1], ['arroz_largo', 250], ['platano_macho', 400], ['aceite', 40], ['sal', 6]],
    m: {
      fuego: [50, ['Cuece las lentejas con la zanahoria en 1,2 l de agua 20 min.', 'Haz un hogao con la cebolleta, el tomate, el pimiento y el ajo 8 min con comino y colorante.', 'Añade el hogao y la patata en dados y cuece 20 min. Sala y termina con cilantro.', 'Sirve con arroz y plátano maduro frito.']],
      robot: [45, ['Pica cebolleta, tomate, pimiento y ajo 4 seg/vel. 5 y sofríe con aceite y especias 7 min/120 °C/vel. 1.', 'Añade lentejas, zanahoria, patata, 1 l de agua y sal: 35 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con cilantro, arroz y plátano frito.']]
    }
  },
  {
    id: 'co-pollo-sudado', n: 'Pollo sudado', e: '🍗', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_muslos', 1000], ['patata', 600], ['yuca', 400], ['tomate', 400], ['cebolleta', 3], ['ajo', 3], ['pimiento_rojo', 100], ['comino', 1], ['azafran', 1], ['cilantro', 1], ['arroz_largo', 250], ['aceite', 30], ['sal', 7]],
    m: {
      fuego: [60, ['Haz un hogao con la cebolleta, el tomate, el pimiento y el ajo picados 8 min con comino y colorante.', 'Añade el pollo salado y remueve 3 min. Tapa y cuece en su jugo 15 min.', 'Agrega la patata y la yuca en trozos y 200 ml de agua y cuece tapado 25 min.', 'Termina con cilantro y sirve con arroz.']],
      robot: [55, ['Pica cebolleta, tomate, pimiento y ajo 4 seg/vel. 5 y sofríe con aceite y especias 7 min/120 °C/vel. 1.', 'Añade el pollo, la patata, la yuca, 150 ml de agua y la sal: 35 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con cilantro y arroz.']]
    }
  },
  {
    id: 'co-sobrebarriga', n: 'Sobrebarriga en salsa criolla', e: '🥩', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_falda', 1000], ['cerveza', 330], ['tomate', 400], ['cebolleta', 3], ['cebolla', 100], ['ajo', 4], ['pimiento_rojo', 100], ['comino', 1], ['laurel', 2], ['tomillo', 1], ['patata', 800], ['aceite', 30], ['sal', 8]],
    m: {
      fuego: [150, ['Cuece la falda entera con la cebolla, 2 ajos, el laurel, el tomillo, la cerveza y agua para cubrir 2 h, hasta que esté tierna.', 'Haz un hogao con la cebolleta, el tomate, el pimiento, el resto del ajo y el comino 10 min. Añade 200 ml del caldo de cocción.', 'Corta la carne en porciones y cuécela en la salsa 10 min.', 'Sirve con patatas cocidas o doradas.']],
      horno: [160, ['Cuece la falda como en la receta tradicional 1 h 45 min.', 'Pásala a una fuente, cúbrela con el hogao y hornea 25 min a 200 °C hasta que se dore.', 'Sirve con patatas.']],
      robot: [110, ['Pon la falda en trozos con cebolla, ajo, laurel, tomillo, cerveza, 400 ml de agua y sal: 90 min/100 °C/giro inverso/vel. cuchara.', 'Haz el hogao en sartén y mézclalo con la carne y un poco de caldo.', 'Sirve con patatas.']]
    }
  },
  {
    id: 'co-posta-negra', n: 'Posta negra cartagenera', e: '🥩', tipo: 'comida', tags: ['carne'],
    ing: [['redondo_ternera', 1000], ['panela', 100], ['salsa_worcestershire', 40], ['salsa_soja', 30], ['cebolla', 200], ['ajo', 4], ['tomate', 200], ['laurel', 2], ['clavo', 3], ['arroz_largo', 200], ['coco_rallado', 40], ['leche_coco', 400], ['aceite', 30], ['sal', 7]],
    m: {
      fuego: [130, ['Adoba el redondo con ajo, sal y la salsa inglesa 30 min. Dóralo en una olla.', 'Añade la panela troceada y deja que se caramelice alrededor de la carne 3 min sin quemarse.', 'Agrega la cebolla y el tomate picados, la soja, el laurel, el clavo y agua hasta media altura y cuece tapado 1 h 30 min, girando la pieza.', 'Corta en lonchas con la salsa oscura reducida. Sirve con arroz con coco (arroz cocido en leche de coco con coco rallado tostado).']],
      robot: [100, ['Dora la carne en sartén con la panela hasta caramelizar y córtala en 4 trozos.', 'Ponla en el vaso con cebolla, tomate, salsas, especias, 300 ml de agua y sal: 80 min/100 °C/giro inverso/vel. cuchara.', 'Sirve en lonchas con la salsa y arroz con coco.']]
    }
  },
  {
    id: 'co-carne-desmechada', n: 'Carne desmechada', e: '🥩', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_falda', 800], ['tomate', 400], ['cebolleta', 3], ['cebolla', 100], ['pimiento_rojo', 150], ['ajo', 3], ['comino', 1], ['azafran', 1], ['laurel', 2], ['arroz_largo', 250], ['platano_macho', 400], ['aceite', 40], ['sal', 7]],
    m: {
      fuego: [120, ['Cuece la falda con la cebolla, un ajo, el laurel y agua con sal 1 h 30 min. Déjala templar y desmenúzala en hebras.', 'Haz un hogao con la cebolleta, el tomate, el pimiento, el ajo, el comino y el colorante 10 min.', 'Mezcla la carne con el hogao y un poco de caldo y cocina 10 min.', 'Sirve con arroz y patacones o plátano frito.']],
      robot: [100, ['Cuece la falda con cebolla, ajo, laurel, 1 l de agua y sal: 75 min/100 °C/giro inverso/vel. cuchara. Desmenúzala.', 'Pica cebolleta, tomate, pimiento y ajo 4 seg/vel. 5 y sofríe con aceite y especias 8 min/120 °C/vel. 1.', 'Añade la carne y 100 ml de caldo: 8 min/100 °C/giro inverso/vel. cuchara. Sirve con arroz y plátano.']]
    }
  },
  {
    id: 'co-arepas-queso', n: 'Arepas de queso', e: '🫓', tipo: 'cena', tags: ['vegetariano', 'rapida', 'niños'],
    ing: [['harina_maiz', 400], ['mozzarella', 200], ['queso_fresco', 100], ['mantequilla', 40], ['aguacate', 2], ['tomate', 300], ['sal', 5]],
    m: {
      fuego: [30, ['Mezcla la harina con 500 ml de agua templada, la sal, la mitad de la mantequilla y la mozzarella rallada y amasa 2 min.', 'Forma 8 arepas de 1,5 cm de grosor.', 'Ásalas en una sartén con un poco de mantequilla a fuego medio 6 min por lado.', 'Ábrelas, rellénalas con queso fresco y sirve con aguacate y tomate.']],
      airfryer: [28, ['Prepara la masa y forma las arepas.', 'Píntalas con mantequilla y cocínalas 16 min a 190 °C, girando a mitad.', 'Sirve con queso, aguacate y tomate.']],
      horno: [35, ['Forma las arepas y márcalas 2 min por lado en sartén.', 'Termínalas 15 min en el horno a 200 °C.', 'Rellénalas de queso y sirve con aguacate.']]
    }
  },
  {
    id: 'co-arepas-pericos', n: 'Arepas con huevos pericos', e: '🍳', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['harina_maiz', 300], ['huevo', 8], ['tomate', 300], ['cebolleta', 3], ['mantequilla', 30], ['queso_fresco', 120], ['aceite', 20], ['sal', 6]],
    m: {
      fuego: [25, ['Amasa la harina con 380 ml de agua templada y sal y forma 6 arepas. Ásalas en sartén 5 min por lado.', 'Sofríe la cebolleta y el tomate picados en la mantequilla 5 min.', 'Añade los huevos batidos con sal y remueve a fuego suave hasta que cuajen jugosos.', 'Sirve los pericos con las arepas y queso fresco.']],
      airfryer: [25, ['Forma las arepas, píntalas con aceite y cocínalas 15 min a 190 °C.', 'Haz los pericos en sartén.', 'Sirve con queso fresco.']]
    }
  },
  {
    id: 'co-empanadas', n: 'Empanadas colombianas de carne y papa', e: '🥟', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['harina_maiz', 400], ['carne_picada', 300], ['patata', 400], ['tomate', 200], ['cebolleta', 2], ['ajo', 2], ['comino', 1], ['azafran', 1], ['lima', 2], ['cilantro', 1], ['aceite_girasol', 400], ['sal', 7]],
    m: {
      fuego: [60, ['Cuece la patata en dados 15 min. Haz un hogao con cebolleta, tomate, ajo, comino y colorante y dora en él la carne. Mezcla con la patata un poco chafada.', 'Amasa la harina con 500 ml de agua templada, sal y una pizca de colorante.', 'Estira bolitas de masa entre dos plásticos, rellénalas, dóblalas y corta con un vaso.', 'Fríelas en aceite caliente hasta que estén crujientes. Sirve con ají de cilantro, cebolleta y lima.']],
      airfryer: [55, ['Prepara el relleno y las empanadas como en la receta tradicional.', 'Píntalas con aceite y cocínalas por tandas 14 min a 200 °C, girando a mitad.', 'Sirve con ají de cilantro y lima.']]
    }
  },
  {
    id: 'co-patacones-hogao', n: 'Patacones con hogao y queso', e: '🍌', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['platano_macho', 1000], ['tomate', 400], ['cebolleta', 3], ['ajo', 1], ['comino', 1], ['queso_fresco', 200], ['aguacate', 2], ['lima', 1], ['aceite_girasol', 300], ['sal', 5]],
    m: {
      fuego: [30, ['Pela los plátanos verdes y córtalos en trozos de 4 cm. Fríelos 4 min a fuego medio.', 'Aplástalos con un plato hasta dejarlos de 1 cm y vuelve a freírlos 2 min hasta que estén crujientes. Sala.', 'Haz un hogao con la cebolleta, el tomate, el ajo y el comino 10 min.', 'Sirve los patacones con hogao, queso desmenuzado y aguacate con lima.']],
      airfryer: [30, ['Cocina los trozos de plátano con un poco de aceite 10 min a 190 °C.', 'Aplástalos, píntalos con aceite y cocina 8 min más a 200 °C.', 'Sirve con hogao, queso y aguacate.']]
    }
  },
  {
    id: 'co-changua', n: 'Changua', e: '🥣', tipo: 'cena', tags: ['vegetariano', 'rapida', 'ligera'],
    ing: [['leche', 800], ['huevo', 4], ['cebolleta', 2], ['cilantro', 1], ['pan_barra', 1], ['queso_fresco', 100], ['sal', 4]],
    m: {
      fuego: [15, ['Calienta la leche con 400 ml de agua, la cebolleta picada y la sal.', 'Cuando hierva, baja el fuego y casca los huevos uno a uno; deja que cuajen 3-4 min sin hervir fuerte.', 'Pon en cada cuenco pan tostado en dados y queso.', 'Sirve la changua con un huevo por cuenco y cilantro picado.']]
    }
  },
  {
    id: 'co-caldo-costilla', n: 'Caldo de costilla', e: '🍲', tipo: 'cena', tags: ['carne'],
    ing: [['cerdo_costillas', 800], ['patata', 700], ['cebolleta', 3], ['ajo', 3], ['cilantro', 1], ['comino', 1], ['pan_barra', 1], ['sal', 8]],
    m: {
      fuego: [70, ['Cuece las costillas troceadas con la cebolleta, el ajo, el comino y 2,5 l de agua 40 min, quitando la espuma.', 'Añade la patata en trozos y cuece 20 min. Sala.', 'Termina con cilantro picado.', 'Sirve muy caliente con pan.']],
      robot: [60, ['Pon las costillas, la cebolleta, el ajo, el comino, 1,5 l de agua y la sal: 40 min/100 °C/giro inverso/vel. cuchara.', 'Añade la patata: 18 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con cilantro y pan.']]
    }
  },
  {
    id: 'co-cazuela-mariscos', n: 'Cazuela de mariscos con coco', e: '🥥', tipo: 'comida', tags: ['pescado'],
    ing: [['mezcla_marisco', 600], ['gambas', 300], ['merluza', 300], ['leche_coco', 400], ['nata', 100], ['tomate', 300], ['cebolleta', 3], ['pimiento_rojo', 120], ['ajo', 3], ['vino_blanco', 100], ['caldo_pescado', 300], ['cilantro', 1], ['arroz_largo', 250], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [40, ['Sofríe la cebolleta, el pimiento, el tomate y el ajo picados 8 min.', 'Añade el vino 2 min, el caldo y la leche de coco y cuece 8 min.', 'Incorpora el marisco, las gambas y el pescado en trozos y la nata y cuece 6 min.', 'Sirve con cilantro y arroz blanco.']],
      robot: [40, ['Pica cebolleta, pimiento, tomate y ajo 4 seg/vel. 5 y sofríe con aceite 7 min/120 °C/vel. 1.', 'Añade vino, caldo y leche de coco: 8 min/100 °C/vel. 1.', 'Agrega marisco, gambas, pescado y nata: 7 min/90 °C/giro inverso/vel. cuchara.', 'Sirve con cilantro y arroz.']]
    }
  },
  {
    id: 'co-pescado-arroz-coco', n: 'Pescado frito con arroz con coco', e: '🐠', tipo: 'comida', tags: ['pescado'],
    ing: [['dorada', 1600], ['harina', 50], ['lima', 3], ['ajo', 3], ['arroz_largo', 300], ['leche_coco', 400], ['coco_rallado', 40], ['azucar', 10], ['platano_macho', 600], ['tomate', 200], ['cebolla_morada', 80], ['aceite_girasol', 500], ['sal', 7]],
    m: {
      fuego: [50, ['Arroz con coco: tuesta el coco rallado con el azúcar en la olla hasta que se dore, añade la leche de coco, 300 ml de agua, la sal y el arroz y cuece tapado 18 min.', 'Haz cortes a las doradas, adóbalas con ajo, lima y sal 10 min y enharínalas.', 'Fríelas en aceite caliente 5 min por lado. Fríe también el plátano verde en patacones.', 'Sirve con el arroz, los patacones y una ensalada de tomate y cebolla con lima.']],
      airfryer: [45, ['Prepara el arroz con coco en una olla.', 'Adoba las doradas, píntalas con aceite y cocínalas 15 min a 200 °C, girando a mitad.', 'Cocina los patacones 15 min a 200 °C y sirve con ensalada.']],
      horno: [50, ['Prepara el arroz con coco en una olla.', 'Adoba las doradas y hornéalas 25 min a 210 °C.', 'Sirve con patacones y ensalada.']]
    }
  },
/* ---- Tanda 2 ---- */
  {
    id: 'co-carne-bistec', n: 'Carne en bistec', e: '🥩', tipo: 'comida', tags: ['carne', 'rapida'],
    ing: [['ternera_filetes', 700], ['tomate', 400], ['cebolla', 250], ['ajo', 3], ['comino', 1], ['salsa_worcestershire', 20], ['arroz_largo', 250], ['patata', 500], ['aceite', 40], ['sal', 6]],
    m: {
      fuego: [30, ['Adoba los filetes con ajo, comino, salsa inglesa y sal 10 min. Cuece el arroz y la patata en rodajas.', 'Dora los filetes en sartén muy caliente 1 min por lado y resérvalos.', 'En la misma sartén pocha la cebolla en aros y el tomate en gajos 6 min con un chorrito de agua.', 'Devuelve los filetes 3 min a la salsa y sirve con arroz y patata.']],
      robot: [30, ['Dora los filetes adobados en sartén.', 'Sofríe cebolla en aros y tomate troceado con aceite 6 min/120 °C/giro inverso/vel. cuchara.', 'Añade los filetes y 50 ml de agua: 4 min/100 °C/giro inverso/vel. cuchara. Sirve con arroz y patata.']]
    }
  },
  {
    id: 'co-sopa-platano', n: 'Sopa de plátano', e: '🍌', tipo: 'cena', tags: ['carne'],
    ing: [['platano_macho', 600], ['carne_picada_ternera', 250], ['patata', 300], ['tomate', 200], ['cebolleta', 2], ['ajo', 2], ['comino', 1], ['caldo_carne', 1500], ['cilantro', 1], ['aguacate', 1], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [45, ['Ralla el plátano verde grueso (o córtalo en láminas finas) y fríelo ligeramente hasta que esté dorado.', 'Haz un hogao con la cebolleta, el tomate, el ajo y el comino 6 min y dora la carne en él.', 'Añade el caldo y la patata en dados y cuece 15 min. Agrega el plátano y cuece 10 min más.', 'Sirve con cilantro y aguacate.']],
      robot: [40, ['Pica cebolleta, tomate y ajo 4 seg/vel. 5 y sofríe con aceite y comino 6 min/120 °C/vel. 1. Añade la carne 4 min/120 °C/giro inverso/vel. cuchara.', 'Agrega caldo, patata y sal: 15 min/100 °C/giro inverso/vel. cuchara.', 'Añade el plátano rallado y dorado en sartén: 10 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con cilantro y aguacate.']]
    }
  },
  {
    id: 'co-cuchuco', n: 'Cuchuco de trigo con costilla', e: '🍲', tipo: 'comida', tags: ['carne'],
    ing: [['bulgur', 200], ['cerdo_costillas', 700], ['patata', 400], ['habas', 150], ['guisantes', 100], ['repollo', 200], ['cebolleta', 3], ['ajo', 3], ['comino', 1], ['cilantro', 1], ['sal', 8]],
    m: {
      fuego: [80, ['Cuece las costillas troceadas con la cebolleta, el ajo, el comino y 2,5 l de agua 40 min.', 'Añade el bulgur y la patata en dados y cuece 15 min, removiendo para que no se pegue.', 'Agrega las habas, los guisantes y el repollo en tiras y cuece 10 min más. Sala.', 'Sirve espeso con cilantro.']],
      robot: [70, ['Pon las costillas, la cebolleta, el ajo, el comino, 1,5 l de agua y la sal: 40 min/100 °C/giro inverso/vel. cuchara.', 'Añade el bulgur y la patata: 15 min/100 °C/giro inverso/vel. cuchara.', 'Agrega habas, guisantes y repollo: 10 min/100 °C/giro inverso/vel. cuchara. Sirve con cilantro.']]
    }
  },
  {
    id: 'co-chuleta-valluna', n: 'Chuleta valluna', e: '🥩', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['cerdo_lomo', 700], ['huevo', 2], ['pan_rallado', 150], ['harina', 50], ['ajo', 2], ['comino', 1], ['mostaza', 15], ['arroz_largo', 250], ['alubias_rojas', 400], ['tomate', 300], ['cebolla_morada', 80], ['lima', 2], ['aceite_girasol', 400], ['sal', 6]],
    m: {
      fuego: [40, ['Aplana bien los filetes y adóbalos con ajo, comino, mostaza y sal 10 min.', 'Pásalos por harina, huevo batido y pan rallado.', 'Fríelos en aceite caliente 3 min por lado y escúrrelos.', 'Sirve con arroz, alubias calientes y ensalada de tomate y cebolla con lima.']],
      airfryer: [35, ['Empana los filetes y pulverízalos con aceite.', 'Cocínalos 12 min a 200 °C, girando a mitad.', 'Sirve con arroz, alubias y ensalada.']],
      horno: [40, ['Empana los filetes y colócalos en una bandeja con papel, pintados con aceite.', 'Hornea 18 min a 210 °C, girando a mitad.', 'Sirve con arroz, alubias y ensalada.']]
    }
  },
  {
    id: 'co-calentado', n: 'Calentado paisa', e: '🍳', tipo: 'cena', tags: ['legumbres', 'carne', 'rapida'],
    ing: [['arroz_largo', 200], ['alubias_rojas', 500], ['chorizo_fresco', 250], ['huevo', 4], ['tomate', 200], ['cebolleta', 2], ['ajo', 1], ['comino', 1], ['harina_maiz', 200], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [30, ['Cuece el arroz (o usa el sobrante del día anterior).', 'Dora el chorizo en rodajas y haz en su grasa un hogao con la cebolleta, el tomate, el ajo y el comino 5 min.', 'Añade las alubias escurridas y el arroz y saltea 5 min hasta que estén bien calientes y algo tostados.', 'Sirve con un huevo frito encima y arepas asadas (harina amasada con agua y sal).']]
    }
  },
  {
    id: 'co-mazorcada', n: 'Mazorcada', e: '🌽', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['maiz', 3], ['pollo_pechuga', 400], ['bacon', 150], ['jamon_cocido', 100], ['mozzarella', 250], ['patata', 400], ['ketchup', 60], ['mayonesa', 60], ['aceite_girasol', 300], ['sal', 4]],
    m: {
      fuego: [30, ['Corta la patata en paja y fríela hasta que esté crujiente.', 'Dora el bacon en tiras y el pollo en dados con sal.', 'Saltea el maíz escurrido y el jamón en dados 2 min con el pollo y el bacon.', 'Pon todo en una fuente, cubre con la mozzarella, tapa para que se funda y sirve con las patatas, kétchup y mayonesa por encima.']],
      horno: [35, ['Saltea el pollo, el bacon, el jamón y el maíz.', 'Ponlos en una fuente, cubre con mozzarella y gratina 8 min a 220 °C.', 'Sirve con patatas paja y las salsas.']]
    }
  },
  {
    id: 'co-pechuga-gratinada', n: 'Pechuga gratinada', e: '🍗', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['pollo_pechuga', 800], ['champinon', 200], ['nata', 250], ['mozzarella', 200], ['jamon_cocido', 100], ['ajo', 2], ['cebolla', 80], ['mantequilla', 20], ['patata', 700], ['lechuga', 1], ['sal', 6]],
    m: {
      horno: [45, ['Abre las pechugas en filetes gruesos, sálalos y dóralos en sartén 2 min por lado. Colócalos en una fuente.', 'Saltea la cebolla, el ajo y los champiñones en mantequilla 5 min, añade la nata y cuece 3 min.', 'Cubre el pollo con jamón, la salsa y la mozzarella.', 'Gratina 15 min a 210 °C y sirve con patatas y ensalada.']],
      airfryer: [40, ['Dora las pechugas y prepara la salsa en sartén.', 'Monta en un molde que quepa en la freidora con jamón, salsa y queso.', 'Cocina 10 min a 190 °C.']]
    }
  },
  {
    id: 'co-papas-chorreadas', n: 'Papas chorreadas', e: '🥔', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['patata', 1000], ['tomate', 400], ['cebolleta', 3], ['ajo', 1], ['nata', 150], ['mozzarella', 200], ['comino', 1], ['mantequilla', 20], ['lechuga', 1], ['sal', 6]],
    m: {
      fuego: [30, ['Cuece las patatas pequeñas (o en trozos) con piel en agua con sal 20 min.', 'Sofríe la cebolleta y el ajo en mantequilla 4 min, añade el tomate picado y el comino y cocina 6 min.', 'Incorpora la nata y el queso rallado y remueve hasta que se funda.', 'Chorrea la salsa sobre las patatas y sirve con ensalada.']],
      robot: [30, ['Pon las patatas en el Varoma con 1 l de agua en el vaso: 25 min/Varoma/vel. 1.', 'Con el vaso limpio, pica cebolleta y ajo 3 seg/vel. 5, añade mantequilla, tomate y comino: 7 min/100 °C/vel. 1.', 'Agrega nata y queso: 3 min/90 °C/vel. 2. Vierte sobre las patatas.']]
    }
  },
  {
    id: 'co-viudo-pescado', n: 'Viudo de pescado', e: '🐟', tipo: 'comida', tags: ['pescado'],
    ing: [['merluza', 800], ['yuca', 400], ['platano_macho', 400], ['patata', 400], ['mazorca', 2], ['tomate', 300], ['cebolleta', 3], ['ajo', 3], ['comino', 1], ['azafran', 1], ['lima', 2], ['aceite', 30], ['sal', 7]],
    m: {
      fuego: [50, ['Cuece la yuca, el plátano, la patata y la mazorca en trozos en agua con sal 25 min.', 'Haz un hogao con la cebolleta, el tomate, el ajo, el comino y el colorante 8 min con un poco del caldo.', 'Coloca el pescado salado con lima sobre las verduras, tapa y cuece al vapor 10 min.', 'Sirve las verduras y el pescado bañados con el hogao.']],
      robot: [50, ['Pon yuca, patata y mazorca en el Varoma y el plátano en la bandeja con 1 l de agua y sal en el vaso: 25 min/Varoma/vel. 1.', 'Añade el pescado a la bandeja: 12 min/Varoma/vel. 1.', 'Haz el hogao en sartén y sirve todo bañado con él.']]
    }
  },
  {
    id: 'co-mute', n: 'Mute santandereano', e: '🍲', tipo: 'comida', tags: ['carne', 'legumbres'],
    ing: [['cerdo_costillas', 600], ['ternera_guisar', 300], ['maiz_blanco', 500], ['garbanzos', 300], ['patata', 400], ['calabaza', 300], ['cebolleta', 3], ['tomate', 200], ['ajo', 3], ['comino', 1], ['cilantro', 1], ['sal', 8]],
    m: {
      fuego: [100, ['Cuece las costillas y la ternera en trozos con la cebolleta, el ajo, el tomate, el comino y 2,5 l de agua 1 h.', 'Añade el maíz blanco escurrido, la patata y la calabaza en dados y cuece 25 min.', 'Agrega los garbanzos 5 min y sala.', 'Sirve con cilantro picado.']],
      robot: [85, ['Pon costillas, ternera, cebolleta, ajo, tomate, comino, 1,5 l de agua y la sal: 50 min/100 °C/giro inverso/vel. cuchara.', 'Añade maíz, patata y calabaza: 20 min/100 °C/giro inverso/vel. cuchara.', 'Agrega garbanzos: 3 min/100 °C/giro inverso/vel. cuchara. Sirve con cilantro.']]
    }
  },
  {
    id: 'co-garbanzos-cerdo', n: 'Garbanzos guisados con cerdo', e: '🫘', tipo: 'comida', tags: ['legumbres', 'carne'],
    ing: [['garbanzos', 800], ['cerdo_guisar', 400], ['chorizo', 100], ['patata', 300], ['zanahoria', 120], ['tomate', 300], ['cebolleta', 3], ['ajo', 3], ['comino', 1], ['azafran', 1], ['arroz_largo', 250], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [60, ['Dora el cerdo en dados y el chorizo en rodajas.', 'Haz un hogao con la cebolleta, el tomate, el ajo, el comino y el colorante 8 min.', 'Añade 600 ml de agua, la patata y la zanahoria en dados y cuece 30 min.', 'Agrega los garbanzos escurridos y cuece 10 min más. Sirve con arroz.']],
      robot: [50, ['Pica cebolleta, tomate y ajo 4 seg/vel. 5 y sofríe con aceite y especias 7 min/120 °C/vel. 1.', 'Añade cerdo, chorizo, patata, zanahoria, 500 ml de agua y sal: 30 min/100 °C/giro inverso/vel. cuchara.', 'Agrega garbanzos: 8 min/100 °C/giro inverso/vel. cuchara. Sirve con arroz.']]
    }
  },
  {
    id: 'co-arvejas-zanahoria', n: 'Guiso de arvejas con zanahoria y huevo', e: '🫛', tipo: 'cena', tags: ['vegetariano', 'rapida', 'ligera'],
    ing: [['guisantes', 600], ['zanahoria', 300], ['patata', 300], ['tomate', 250], ['cebolleta', 2], ['ajo', 1], ['comino', 1], ['huevo', 4], ['arroz_largo', 200], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [30, ['Haz un hogao con la cebolleta, el tomate, el ajo y el comino 6 min.', 'Añade la zanahoria y la patata en dados pequeños y 300 ml de agua y cuece 12 min.', 'Agrega los guisantes y cuece 6 min más. Sala.', 'Sirve con arroz y un huevo escalfado o frito.']],
      robot: [30, ['Pica cebolleta, tomate y ajo 4 seg/vel. 5 y sofríe con aceite y comino 6 min/120 °C/vel. 1.', 'Añade zanahoria, patata, 250 ml de agua y sal: 12 min/100 °C/giro inverso/vel. cuchara.', 'Agrega guisantes: 6 min/100 °C/giro inverso/vel. cuchara. Sirve con arroz y huevo.']]
    }
  },
  {
    id: 'co-arepas-pollo', n: 'Arepas rellenas de pollo desmechado', e: '🫓', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['harina_maiz', 400], ['pollo_pechuga', 500], ['tomate', 250], ['cebolleta', 2], ['ajo', 1], ['comino', 1], ['mozzarella', 150], ['aguacate', 2], ['mantequilla', 20], ['sal', 7]],
    m: {
      fuego: [40, ['Cuece el pollo en agua con sal 15 min y desmenúzalo.', 'Haz un hogao con la cebolleta, el tomate, el ajo y el comino 6 min y mezcla con el pollo.', 'Amasa la harina con 500 ml de agua templada y sal, forma 8 arepas y ásalas en sartén con mantequilla 6 min por lado.', 'Ábrelas y rellénalas con el pollo, queso y aguacate.']],
      airfryer: [40, ['Prepara el relleno de pollo.', 'Forma las arepas, píntalas con mantequilla y cocínalas 16 min a 190 °C.', 'Rellénalas con pollo, queso y aguacate.']]
    }
  },
  {
    id: 'co-albondigas-criolla', n: 'Albóndigas en salsa criolla', e: '🧆', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['carne_picada', 600], ['huevo', 1], ['pan_rallado', 50], ['ajo', 3], ['cebolleta', 3], ['tomate', 500], ['pimiento_rojo', 100], ['comino', 1], ['azafran', 1], ['arroz_largo', 250], ['patata', 400], ['aceite', 30], ['sal', 7]],
    m: {
      fuego: [50, ['Mezcla la carne con el huevo, el pan rallado, un ajo picado, cebolleta picada y sal. Forma albóndigas y dóralas.', 'Haz un hogao con el resto de la cebolleta, el tomate, el pimiento, el ajo, el comino y el colorante 8 min.', 'Añade 250 ml de agua, las albóndigas y la patata en dados y cuece 25 min.', 'Sirve con arroz.']],
      robot: [45, ['Pica cebolleta, tomate, pimiento y ajo 4 seg/vel. 5 y sofríe con aceite y especias 7 min/120 °C/vel. 1.', 'Añade 200 ml de agua, las albóndigas formadas y la patata: 25 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con arroz.']]
    }
  },
  {
    id: 'co-pollo-champinones', n: 'Pollo en salsa de champiñones', e: '🍄', tipo: 'comida', tags: ['carne', 'rapida'],
    ing: [['pollo_pechuga', 700], ['champinon', 300], ['cebolla', 100], ['ajo', 2], ['nata', 250], ['caldo_pollo', 100], ['mantequilla', 20], ['arroz_largo', 250], ['platano_macho', 400], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [30, ['Corta el pollo en dados, sálalo y dóralo 5 min. Reserva.', 'Saltea la cebolla y el ajo en mantequilla 3 min, añade los champiñones y cocina 5 min.', 'Agrega la nata y el caldo, devuelve el pollo y cuece 5 min.', 'Sirve con arroz y plátano maduro frito.']],
      robot: [30, ['Pica cebolla y ajo 3 seg/vel. 5 y sofríe con mantequilla 3 min/120 °C/vel. 1.', 'Añade pollo y champiñones: 8 min/120 °C/giro inverso/vel. cuchara.', 'Agrega nata, caldo y sal: 6 min/100 °C/giro inverso/vel. cuchara. Sirve con arroz y plátano.']]
    }
  },
  {
    id: 'co-carne-sudada', n: 'Carne sudada con papas', e: '🥘', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_guisar', 800], ['patata', 600], ['yuca', 300], ['tomate', 400], ['cebolleta', 3], ['cebolla', 100], ['ajo', 3], ['comino', 1], ['azafran', 1], ['laurel', 2], ['arroz_largo', 250], ['aceite', 30], ['sal', 7]],
    m: {
      fuego: [100, ['Haz un hogao con la cebolleta, la cebolla, el tomate, el ajo, el comino y el colorante 10 min.', 'Añade la carne en trozos y el laurel, tapa y deja que se cocine en su jugo a fuego suave 50 min (añade un poco de agua si hace falta).', 'Agrega la patata y la yuca en trozos y 300 ml de agua y cuece 30 min.', 'Sirve con arroz.']],
      robot: [80, ['Pica cebolleta, cebolla, tomate y ajo 4 seg/vel. 5 y sofríe con aceite y especias 8 min/120 °C/vel. 1.', 'Añade la carne, el laurel, 200 ml de agua y la sal: 45 min/100 °C/giro inverso/vel. cuchara.', 'Agrega patata y yuca: 25 min/100 °C/giro inverso/vel. cuchara. Sirve con arroz.']]
    }
  },
  {
    id: 'co-pastel-pollo', n: 'Pastel de pollo', e: '🥧', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['masa_hojaldre', 2], ['pollo_pechuga', 500], ['guisantes', 100], ['zanahoria', 100], ['cebolla', 120], ['ajo', 1], ['leche', 250], ['harina', 25], ['mantequilla', 30], ['pasas', 30], ['huevo', 1], ['lechuga', 1], ['sal', 5]],
    m: {
      horno: [55, ['Cuece el pollo 15 min y desmenúzalo. Cuece la zanahoria en dados y los guisantes 6 min.', 'Pocha la cebolla y el ajo en la mantequilla, añade la harina y la leche y cuece hasta espesar. Mezcla con el pollo, las verduras, las pasas y sal.', 'Forra un molde con una lámina de hojaldre, rellena y tapa con la otra. Pinta con huevo.', 'Hornea 30 min a 200 °C y sirve con ensalada.']],
      airfryer: [50, ['Prepara el relleno y monta el pastel en un molde que quepa en la freidora.', 'Píntalo con huevo y cocina 22 min a 180 °C.', 'Sirve con ensalada.']]
    }
  },
  {
    id: 'co-carne-asada', n: 'Carne asada con papa salada y ají', e: '🥩', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_entrecot', 800], ['patata', 800], ['cebolleta', 2], ['tomate', 150], ['cilantro', 1], ['guindilla', 1], ['vinagre', 30], ['lima', 1], ['aguacate', 2], ['ajo', 2], ['comino', 1], ['aceite', 20], ['sal', 30]],
    m: {
      fuego: [45, ['Cuece las patatas pequeñas enteras con piel en agua con mucha sal (unos 25 g) hasta que se evapore el agua y queden con costra blanca, unos 30 min.', 'Prepara el ají: cebolleta, tomate, cilantro y guindilla muy picados con vinagre, lima, un poco de agua y sal.', 'Adoba la carne con ajo, comino y sal y hazla en plancha muy caliente 3-4 min por lado.', 'Sirve con las papas saladas, el ají y aguacate.']],
      airfryer: [40, ['Cocina las patatas en trozos con aceite y sal 20 min a 200 °C.', 'Cocina la carne adobada 10 min a 200 °C, girando a mitad.', 'Sirve con el ají y aguacate.']]
    }
  },
  {
    id: 'co-lomo-pina', n: 'Lomo de cerdo en salsa de piña', e: '🍍', tipo: 'comida', tags: ['carne'],
    ing: [['cerdo_solomillo', 800], ['pina', 1], ['panela', 30], ['salsa_soja', 30], ['ajo', 2], ['cebolla', 100], ['maicena', 10], ['arroz_largo', 250], ['platano_macho', 400], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [40, ['Corta el solomillo en medallones, sálalos y dóralos 3 min por lado. Reserva.', 'Sofríe la cebolla y el ajo picados 4 min. Añade la piña en dados con su jugo, la panela y la soja y cuece 8 min.', 'Espesa con la maicena disuelta en agua, devuelve la carne y cuece 4 min.', 'Sirve con arroz y plátano frito.']],
      horno: [45, ['Asa el solomillo entero salado 20 min a 200 °C.', 'Prepara la salsa de piña en sartén.', 'Corta en medallones, napa con la salsa y sirve con arroz y plátano.']]
    }
  },
/* ---- Tanda 3 ---- */
  {
    id: 'co-arroz-camarones', n: 'Arroz con camarones', e: '🦐', tipo: 'comida', tags: ['pescado'],
    ing: [['arroz_largo', 350], ['gambas', 500], ['pimiento_rojo', 120], ['cebolleta', 3], ['tomate', 200], ['ajo', 3], ['guisantes', 100], ['azafran', 1], ['salsa_worcestershire', 15], ['caldo_pescado', 750], ['cilantro', 1], ['platano_macho', 400], ['aceite', 40], ['sal', 5]],
    m: {
      fuego: [40, ['Saltea las gambas 2 min y resérvalas.', 'Sofríe la cebolleta, el pimiento, el tomate y el ajo picados 6 min con el colorante.', 'Añade el arroz, el caldo, la salsa inglesa y los guisantes y cuece 18 min.', 'Incorpora las gambas y el cilantro, reposa 3 min y sirve con patacones.']],
      robot: [40, ['Pica cebolleta, pimiento, tomate y ajo 4 seg/vel. 5 y sofríe con aceite y colorante 6 min/120 °C/vel. 1.', 'Añade caldo, salsa, guisantes, arroz y sal: 16 min/100 °C/giro inverso/vel. cuchara.', 'Agrega las gambas: 3 min/100 °C/giro inverso/vel. cuchara. Sirve con cilantro y patacones.']]
    }
  },
  {
    id: 'co-crema-ahuyama', n: 'Crema de ahuyama con queso', e: '🎃', tipo: 'cena', tags: ['vegetariano', 'ligera', 'rapida'],
    ing: [['calabaza', 900], ['cebolleta', 2], ['ajo', 1], ['caldo_verduras', 700], ['leche', 200], ['comino', 1], ['queso_fresco', 120], ['cilantro', 1], ['mantequilla', 20], ['sal', 5]],
    m: {
      fuego: [30, ['Pocha la cebolleta y el ajo en la mantequilla 4 min.', 'Añade la calabaza en dados, el comino y el caldo y cuece 18 min.', 'Tritura con la leche hasta que quede fina y sala.', 'Sirve con queso fresco en dados y cilantro.']],
      robot: [30, ['Pica cebolleta y ajo 3 seg/vel. 5 y sofríe con mantequilla 4 min/120 °C/vel. 1.', 'Añade calabaza, comino, caldo y sal: 20 min/100 °C/vel. 1.', 'Agrega la leche y tritura 1 min/vel. 5-10 progresivo. Sirve con queso y cilantro.']]
    }
  },
  {
    id: 'co-cazuela-frijoles', n: 'Cazuela de frijoles', e: '🫘', tipo: 'comida', tags: ['legumbres', 'carne'],
    ing: [['alubias_rojas', 800], ['chorizo_fresco', 250], ['panceta', 150], ['carne_picada_ternera', 200], ['platano_macho', 300], ['arroz_largo', 150], ['tomate', 250], ['cebolleta', 2], ['ajo', 2], ['comino', 1], ['aguacate', 2], ['aceite', 20], ['sal', 6]],
    m: {
      fuego: [50, ['Cuece el arroz. Dora la panceta en dados, el chorizo en rodajas y la carne picada.', 'Haz un hogao con la cebolleta, el tomate, el ajo y el comino 6 min y añade las alubias con su líquido. Cuece 15 min.', 'Mezcla las alubias con el arroz y la mitad de las carnes en una cazuela de barro y cubre con el resto.', 'Sirve con plátano maduro frito en dados y aguacate.']],
      horno: [55, ['Prepara las alubias, las carnes y el arroz como en la receta tradicional.', 'Monta todo en una cazuela apta para horno y cubre con las carnes y el plátano en dados.', 'Hornea 15 min a 200 °C y sirve con aguacate.']]
    }
  },
  {
    id: 'co-ceviche-camaron', n: 'Ceviche de camarón cartagenero', e: '🍤', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['langostinos', 500], ['ketchup', 100], ['mayonesa', 40], ['lima', 4], ['naranja', 300], ['cebolla_morada', 100], ['tomate', 200], ['cilantro', 1], ['aguacate', 2], ['nachos', 120], ['sal', 3]],
    m: {
      sin: [15, ['Pela los langostinos.', 'Mezcla el kétchup con la mayonesa, el zumo de las limas y de la naranja y la sal.', 'Añade los langostinos, la cebolla, el tomate y el cilantro picados.', 'Reposa 5 min en la nevera y sirve con aguacate y totopos o galletas saladas.']]
    }
  },
  {
    id: 'co-arepas-choclo', n: 'Arepas de choclo con queso', e: '🌽', tipo: 'cena', tags: ['vegetariano', 'rapida', 'niños'],
    ing: [['maiz', 3], ['harina_maiz', 150], ['azucar', 15], ['leche', 80], ['mantequilla', 40], ['mozzarella', 200], ['lechuga', 1], ['tomate', 300], ['sal', 4]],
    m: {
      fuego: [30, ['Tritura el maíz escurrido con la leche, el azúcar y la sal y mezcla con la harina hasta tener una masa blanda.', 'Pon cucharadas de masa en una sartén con mantequilla y aplánalas. Cocina 4 min por lado a fuego medio-bajo.', 'Coloca una loncha de mozzarella sobre la mitad y dobla o cubre con otra arepa.', 'Sirve con ensalada.']],
      robot: [30, ['Tritura maíz, leche, azúcar y sal 20 seg/vel. 6. Añade la harina 15 seg/vel. 4.', 'Cocina las arepas en sartén con mantequilla 4 min por lado.', 'Rellénalas de queso y sirve con ensalada.']]
    }
  },
  {
    id: 'co-higado-encebollado', n: 'Hígado encebollado', e: '🧅', tipo: 'comida', tags: ['carne', 'rapida'],
    ing: [['higado', 600], ['cebolla', 400], ['tomate', 200], ['ajo', 2], ['comino', 1], ['vinagre', 15], ['arroz_largo', 250], ['patata', 500], ['aceite', 40], ['sal', 5]],
    m: {
      fuego: [30, ['Corta el hígado en filetes finos y adóbalo con ajo, comino y vinagre 10 min.', 'Pocha la cebolla en aros y el tomate en gajos 8 min.', 'Dora el hígado a fuego fuerte 1 min por lado (no lo pases o se endurece) y sálalo al final.', 'Mézclalo con la cebolla y sirve con arroz y patata cocida.']]
    }
  },
  {
    id: 'co-picada', n: 'Picada colombiana', e: '🍖', tipo: 'cena', tags: ['carne'],
    ing: [['chorizo_fresco', 300], ['morcilla', 200], ['panceta', 300], ['pollo_pechuga', 300], ['patata', 600], ['platano_macho', 400], ['mazorca', 2], ['lima', 3], ['tomate', 150], ['cebolleta', 1], ['cilantro', 1], ['aceite_girasol', 300], ['sal', 6]],
    m: {
      fuego: [50, ['Cuece las patatas pequeñas 15 min. Haz el plátano en patacones.', 'Dora en la plancha el chorizo, la morcilla, la panceta en trozos y el pollo en dados con sal.', 'Fríe o dora las patatas cocidas partidas y la mazorca en rodajas.', 'Sirve todo troceado en una fuente con lima y ají de tomate, cebolleta y cilantro.']],
      airfryer: [50, ['Cocina las carnes por tandas 12-15 min a 200 °C.', 'Cocina las patatas cocidas y el plátano 15 min a 200 °C.', 'Sirve en una fuente con mazorca, lima y ají.']],
      horno: [55, ['Pon en bandejas las carnes, las patatas cocidas, el plátano y la mazorca con un poco de aceite.', 'Hornea 30 min a 210 °C, girando a mitad.', 'Sirve con lima y ají.']]
    }
  },
  {
    id: 'co-salchipapa', n: 'Salchipapa', e: '🍟', tipo: 'cena', tags: ['carne', 'niños', 'rapida'],
    ing: [['patata', 1000], ['salchichas_frankfurt', 400], ['queso_rallado', 80], ['ketchup', 80], ['mayonesa', 80], ['mostaza', 30], ['lechuga', 1], ['aceite_girasol', 400], ['sal', 5]],
    m: {
      fuego: [30, ['Corta las patatas en bastones y fríelas en dos tandas hasta que estén crujientes. Sala.', 'Corta las salchichas en rodajas al bies y dóralas en sartén 4 min.', 'Mezcla las patatas con las salchichas en una fuente.', 'Cubre con queso y las salsas al gusto y sirve con lechuga.']],
      airfryer: [30, ['Cocina las patatas en bastones con una cucharada de aceite 20 min a 200 °C.', 'Añade las salchichas y cocina 5 min más.', 'Sirve con queso y salsas.']]
    }
  },
  {
    id: 'co-caldo-papa', n: 'Caldo de papa con huevo', e: '🥣', tipo: 'cena', tags: ['vegetariano', 'ligera', 'rapida'],
    ing: [['patata', 700], ['caldo_verduras', 1500], ['cebolleta', 3], ['ajo', 2], ['leche', 200], ['huevo', 4], ['cilantro', 1], ['comino', 1], ['pan_barra', 1], ['sal', 5]],
    m: {
      fuego: [30, ['Cuece la patata en dados con el caldo, la cebolleta picada, el ajo y el comino 18 min.', 'Añade la leche y lleva a ebullición suave.', 'Casca los huevos dentro y deja que cuajen 4 min.', 'Sirve con cilantro y pan.']],
      robot: [30, ['Pon patata, caldo, cebolleta, ajo, comino y sal: 18 min/100 °C/giro inverso/vel. cuchara.', 'Añade la leche y los huevos: 5 min/90 °C/giro inverso/vel. cuchara.', 'Sirve con cilantro y pan.']]
    }
  },
  {
    id: 'co-pescado-encocado', n: 'Pescado encocado del Pacífico', e: '🥥', tipo: 'comida', tags: ['pescado'],
    ing: [['merluza', 800], ['leche_coco', 400], ['tomate', 300], ['cebolleta', 3], ['pimiento_rojo', 120], ['ajo', 3], ['comino', 1], ['azafran', 1], ['lima', 2], ['cilantro', 1], ['arroz_largo', 250], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [35, ['Adoba el pescado con ajo, lima y sal 10 min.', 'Sofríe la cebolleta, el pimiento y el tomate picados con el comino y el colorante 8 min.', 'Añade la leche de coco y cuece 5 min. Coloca el pescado y cuece tapado 8 min.', 'Sirve con cilantro y arroz.']],
      robot: [35, ['Pica cebolleta, pimiento, tomate y ajo 4 seg/vel. 5 y sofríe con aceite y especias 7 min/120 °C/vel. 1.', 'Añade la leche de coco: 5 min/100 °C/vel. 1.', 'Pon el pescado en el Varoma: 12 min/Varoma/vel. 1. Sirve con la salsa, cilantro y arroz.']]
    }
  },
  {
    id: 'co-sopa-arroz', n: 'Sopa de arroz con carne', e: '🍲', tipo: 'cena', tags: ['carne'],
    ing: [['ternera_guisar', 400], ['arroz', 120], ['patata', 300], ['zanahoria', 120], ['guisantes', 100], ['tomate', 200], ['cebolleta', 2], ['ajo', 2], ['comino', 1], ['azafran', 1], ['cilantro', 1], ['aceite', 20], ['sal', 7]],
    m: {
      fuego: [70, ['Cuece la carne en dados pequeños con 2 l de agua y sal 35 min.', 'Haz un hogao con la cebolleta, el tomate, el ajo, el comino y el colorante 6 min y añádelo.', 'Agrega la patata y la zanahoria en dados y el arroz y cuece 18 min.', 'Añade los guisantes 4 min y sirve con cilantro.']],
      robot: [60, ['Pica cebolleta, tomate y ajo 4 seg/vel. 5 y sofríe con aceite y especias 6 min/120 °C/vel. 1.', 'Añade la carne, 1,3 l de agua y la sal: 30 min/100 °C/giro inverso/vel. cuchara.', 'Agrega patata, zanahoria, arroz y guisantes: 18 min/100 °C/giro inverso/vel. cuchara. Sirve con cilantro.']]
    }
  },
  {
    id: 'co-sopa-pasta', n: 'Sopa de pasta con pollo', e: '🍜', tipo: 'cena', tags: ['carne', 'niños', 'rapida'],
    ing: [['pollo_pechuga', 350], ['fideos', 150], ['patata', 250], ['zanahoria', 100], ['tomate', 150], ['cebolleta', 2], ['ajo', 1], ['caldo_pollo', 1500], ['comino', 1], ['cilantro', 1], ['sal', 4]],
    m: {
      fuego: [30, ['Cuece la pechuga en el caldo 12 min con la cebolleta, el ajo, el tomate y el comino. Sácala y desmenúzala.', 'Añade la patata y la zanahoria en dados y cuece 10 min.', 'Agrega la pasta y cuece 5 min. Devuelve el pollo.', 'Sirve con cilantro.']],
      robot: [30, ['Pon caldo, pechuga, cebolleta, ajo, tomate y comino: 12 min/100 °C/giro inverso/vel. cuchara. Desmenuza el pollo.', 'Añade patata y zanahoria: 10 min/100 °C/giro inverso/vel. cuchara.', 'Agrega la pasta y el pollo: 6 min/100 °C/giro inverso/vel. cuchara. Sirve con cilantro.']]
    }
  }
]);
