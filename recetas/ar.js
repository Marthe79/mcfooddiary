/* MC Food Diary · cocina de Argentina 🇦🇷. Formato y normas: recetas/GUIA-RECETAS.md */

MC_ADD_ING({
  ternera_falda: ['Falda de ternera', 'carniceria', 10, 'kg'],
  chorizo_fresco: ['Chorizo fresco para barbacoa', 'carniceria', 7, 'kg'],
  aguja_cerdo: ['Aguja de cerdo (bondiola)', 'carniceria', 7, 'kg'],
  trucha: ['Trucha', 'pescaderia', 7, 'kg'],
  acelgas: ['Acelgas', 'fruteria', 2.5, 'kg'],
  queso_provolone: ['Queso provolone', 'lacteos', 14, 'kg'],
  mazorca: ['Mazorca de maíz cocida', 'fruteria', 1, 'ud'],
  maiz_blanco: ['Maíz blanco cocido (pozolero o mote, bote)', 'despensa', 6, 'kg', 0, 'garbanzos cocidos'],
  mezcla_marisco: ['Mezcla de marisco congelada', 'congelados', 7, 'kg']
});

MC_ADD('ar', [
{
    id: 'ar-milanesa-napolitana', n: 'Milanesa a la napolitana', e: '🥩', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['ternera_filetes', 700], ['huevo', 2], ['pan_rallado', 200], ['ajo', 2], ['perejil_fresco', 1], ['tomate_frito', 200], ['jamon_cocido', 120], ['mozzarella', 200], ['oregano', 1], ['patata', 800], ['aceite_girasol', 400], ['sal', 6]],
    m: {
      fuego: [45, ['Bate los huevos con ajo y perejil picados y sal. Pasa los filetes aplanados por el huevo y el pan rallado, apretando bien.', 'Fríelos en aceite caliente 2 min por lado y escúrrelos. Fríe también la patata en bastones.', 'Coloca las milanesas en una bandeja, cúbrelas con tomate frito, jamón, queso y orégano.', 'Gratínalas en el horno 5 min a 220 °C hasta que el queso se funda y sirve con las patatas.']],
      horno: [45, ['Empana los filetes, colócalos en una bandeja con papel y píntalos con aceite.', 'Hornea 12 min a 220 °C, dándoles la vuelta a mitad. Asa a la vez la patata en gajos.', 'Cubre con tomate, jamón, queso y orégano y gratina 5 min.']],
      airfryer: [40, ['Empana los filetes y pulverízalos con aceite.', 'Cocínalos 10 min a 200 °C, girando a mitad.', 'Cubre con tomate, jamón y queso y cocina 3 min más a 180 °C. Haz las patatas 20 min a 200 °C.']]
    }
  },
  {
    id: 'ar-milanesa-pollo-pure', n: 'Milanesas de pollo con puré', e: '🍗', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['pollo_pechuga', 700], ['huevo', 2], ['pan_rallado', 200], ['ajo', 1], ['perejil_fresco', 1], ['patata', 900], ['leche', 150], ['mantequilla', 40], ['nuez_moscada', 1], ['limon', 1], ['aceite_girasol', 400], ['sal', 6]],
    m: {
      fuego: [40, ['Corta la pechuga en filetes finos. Pásalos por huevo batido con ajo, perejil y sal y luego por pan rallado.', 'Cuece las patatas 20 min y haz un puré con la leche caliente, la mantequilla, nuez moscada y sal.', 'Fríe las milanesas 2 min por lado y escúrrelas.', 'Sirve con el puré y gajos de limón.']],
      horno: [40, ['Empana los filetes, píntalos con aceite y hornéalos 15 min a 220 °C, girando a mitad.', 'Prepara el puré mientras tanto.', 'Sirve con limón.']],
      airfryer: [35, ['Empana los filetes y pulverízalos con aceite.', 'Cocínalos 10 min a 200 °C, girando a mitad.', 'Sirve con el puré y limón.']]
    }
  },
  {
    id: 'ar-empanadas-carne', n: 'Empanadas de carne', e: '🥟', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['obleas_empanadilla', 2], ['carne_picada_ternera', 500], ['cebolla', 300], ['cebolleta', 2], ['pimiento_rojo', 100], ['huevo', 3], ['aceitunas', 50], ['comino', 2], ['pimenton', 4], ['guindilla', 1], ['aceite', 30], ['sal', 6]],
    m: {
      horno: [50, ['Pocha la cebolla, la cebolleta y el pimiento picados 10 min. Añade la carne, el pimentón, el comino, la guindilla y la sal y cocina 6 min. Deja enfriar. Cuece 2 huevos.', 'Mezcla el relleno con el huevo duro y las aceitunas picados.', 'Rellena las obleas, ciérralas haciendo el repulgue y píntalas con huevo batido.', 'Hornea 18 min a 210 °C hasta que estén doradas.']],
      airfryer: [45, ['Prepara el relleno y forma las empanadas como en la receta de horno.', 'Píntalas con huevo y cocínalas por tandas 10 min a 180 °C.']],
      fuego: [45, ['Prepara el relleno y forma las empanadas.', 'Fríelas en aceite caliente 2 min por lado y escúrrelas.']]
    }
  },
  {
    id: 'ar-empanadas-jyq', n: 'Empanadas de jamón y queso', e: '🥟', tipo: 'cena', tags: ['carne', 'niños', 'rapida'],
    ing: [['obleas_empanadilla', 2], ['jamon_cocido', 250], ['mozzarella', 300], ['huevo', 1], ['oregano', 1], ['lechuga', 1], ['tomate', 300], ['aceite', 20], ['sal', 2]],
    m: {
      horno: [30, ['Corta el jamón y el queso en tiras y mézclalos con orégano.', 'Rellena las obleas, ciérralas con un tenedor y píntalas con huevo batido.', 'Hornea 15 min a 210 °C.', 'Sirve con ensalada de lechuga y tomate.']],
      airfryer: [25, ['Rellena y cierra las empanadas y píntalas con huevo.', 'Cocínalas por tandas 8 min a 180 °C.', 'Sirve con ensalada.']]
    }
  },
  {
    id: 'ar-empanadas-humita', n: 'Empanadas de humita', e: '🌽', tipo: 'cena', tags: ['vegetariano', 'niños'],
    ing: [['obleas_empanadilla', 2], ['maiz', 3], ['cebolla', 200], ['pimiento_rojo', 100], ['leche', 200], ['harina', 25], ['mantequilla', 30], ['queso_fresco', 150], ['nuez_moscada', 1], ['huevo', 1], ['pimenton', 2], ['sal', 4]],
    m: {
      horno: [45, ['Pocha la cebolla y el pimiento picados en la mantequilla 8 min con el pimentón.', 'Añade la harina 1 min, la leche y el maíz escurrido (tritura la mitad) y cuece 5 min hasta que espese. Sala, añade nuez moscada y deja enfriar.', 'Mezcla con el queso en dados, rellena las obleas, ciérralas y píntalas con huevo.', 'Hornea 18 min a 210 °C.']],
      airfryer: [40, ['Prepara el relleno y forma las empanadas como en la receta de horno.', 'Píntalas con huevo y cocínalas por tandas 10 min a 180 °C.']]
    }
  },
  {
    id: 'ar-empanadas-pollo', n: 'Empanadas de pollo', e: '🥟', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['obleas_empanadilla', 2], ['pollo_pechuga', 500], ['cebolla', 250], ['pimiento_rojo', 120], ['cebolleta', 2], ['huevo', 3], ['aceitunas', 40], ['pimenton', 4], ['comino', 1], ['aceite', 30], ['sal', 6]],
    m: {
      horno: [55, ['Cuece el pollo en agua con sal 15 min y desmenúzalo. Cuece 2 huevos.', 'Pocha la cebolla, el pimiento y la cebolleta 10 min con pimentón y comino. Mezcla con el pollo, el huevo picado y las aceitunas y deja enfriar.', 'Rellena las obleas, ciérralas y píntalas con huevo batido.', 'Hornea 18 min a 210 °C.']],
      airfryer: [50, ['Prepara el relleno y las empanadas como en la receta de horno.', 'Cocínalas por tandas 10 min a 180 °C.']]
    }
  },
  {
    id: 'ar-locro', n: 'Locro', e: '🍲', tipo: 'comida', tags: ['carne', 'legumbres'],
    ing: [['maiz_blanco', 600], ['alubias', 400], ['calabaza', 600], ['ternera_guisar', 400], ['panceta', 150], ['chorizo_fresco', 250], ['cebolla', 150], ['cebolleta', 2], ['pimenton', 5], ['comino', 2], ['guindilla', 1], ['aceite', 40], ['sal', 8]],
    m: {
      fuego: [120, ['Cuece la ternera y la panceta en dados con 2 l de agua 45 min.', 'Añade la calabaza en dados y el chorizo en rodajas y cuece 40 min, hasta que la calabaza se deshaga.', 'Agrega el maíz y las alubias escurridos y cuece 20 min más, removiendo para que espese. Sala.', 'Sirve con una salsa de cebolleta picada frita en aceite con pimentón, comino y guindilla.']],
      robot: [90, ['Pon la ternera, la panceta, el chorizo, la calabaza, 1,2 l de agua y la sal: 60 min/100 °C/giro inverso/vel. cuchara.', 'Añade el maíz y las alubias: 20 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con la salsa de cebolleta, pimentón, comino y guindilla hecha en sartén.']]
    }
  },
  {
    id: 'ar-carbonada', n: 'Carbonada criolla', e: '🎃', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_guisar', 700], ['calabaza', 500], ['patata', 400], ['boniato', 300], ['mazorca', 2], ['orejones', 80], ['tomate', 300], ['cebolla', 150], ['pimiento_rojo', 100], ['caldo_carne', 800], ['oregano', 1], ['laurel', 2], ['aceite', 30], ['sal', 7]],
    m: {
      fuego: [100, ['Dora la carne en dados con sal y resérvala.', 'Sofríe la cebolla, el pimiento y el tomate picados 8 min. Añade la carne, el caldo, el laurel y el orégano y cuece 45 min.', 'Agrega la calabaza, la patata y el boniato en dados y la mazorca en rodajas y cuece 20 min.', 'Incorpora los orejones troceados 5 min y sirve.']],
      robot: [80, ['Pica cebolla, pimiento y tomate 4 seg/vel. 5 y sofríe con aceite 7 min/120 °C/vel. 1.', 'Añade la carne, el caldo, el laurel, el orégano y la sal: 45 min/100 °C/giro inverso/vel. cuchara.', 'Agrega calabaza, patata, boniato, mazorca y orejones: 20 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'ar-puchero', n: 'Puchero', e: '🍲', tipo: 'comida', tags: ['carne', 'legumbres'],
    ing: [['ternera_guisar', 600], ['pollo_muslos', 500], ['chorizo', 150], ['garbanzos', 400], ['patata', 400], ['boniato', 300], ['calabaza', 300], ['zanahoria', 200], ['repollo', 300], ['mazorca', 2], ['cebolla', 150], ['puerro', 1], ['sal', 9]],
    m: {
      fuego: [120, ['Cuece la ternera con la cebolla, el puerro y 3 l de agua 1 h, quitando la espuma.', 'Añade el pollo y el chorizo y cuece 20 min.', 'Agrega la patata, el boniato, la calabaza, la zanahoria, el repollo y la mazorca en trozos grandes y cuece 25 min. Añade los garbanzos al final.', 'Sirve el caldo aparte y las carnes y verduras en una fuente, con aceite y sal.']],
      robot: [100, ['Pon la ternera, la cebolla, el puerro, 1,5 l de agua y la sal: 50 min/100 °C/giro inverso/vel. cuchara.', 'Añade el pollo, el chorizo, la zanahoria y la mazorca y pon patata, boniato, calabaza y repollo en el Varoma: 30 min/Varoma/giro inverso/vel. cuchara.', 'Agrega los garbanzos 3 min y sirve el caldo aparte.']]
    }
  },
  {
    id: 'ar-guiso-lentejas', n: 'Guiso de lentejas argentino', e: '🍲', tipo: 'comida', tags: ['legumbres', 'carne'],
    ing: [['lentejas', 350], ['chorizo_fresco', 250], ['panceta', 100], ['calabaza', 300], ['patata', 300], ['zanahoria', 150], ['cebolla', 150], ['pimiento_rojo', 100], ['tomate_triturado', 200], ['pimenton', 4], ['laurel', 2], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [70, ['Dora el chorizo en rodajas y la panceta en dados. Sofríe la cebolla y el pimiento picados 8 min.', 'Añade el pimentón, el tomate y las lentejas con 1,4 l de agua y el laurel.', 'Cuece 25 min, agrega la calabaza, la patata y la zanahoria en dados y cuece 20 min más.', 'Sala y sirve espeso.']],
      robot: [55, ['Pica cebolla y pimiento 4 seg/vel. 5. Añade chorizo, panceta y aceite: 7 min/120 °C/giro inverso/vel. cuchara.', 'Agrega pimentón, tomate, lentejas, verduras, laurel, 1,1 l de agua y sal: 45 min/100 °C/giro inverso/vel. cuchara.', 'Reposa 5 min y sirve.']]
    }
  },
  {
    id: 'ar-pastel-papas', n: 'Pastel de papas', e: '🥧', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['carne_picada_ternera', 600], ['patata', 1000], ['cebolla', 200], ['pimiento_rojo', 100], ['huevo', 3], ['aceitunas', 50], ['pasas', 30], ['leche', 150], ['mantequilla', 40], ['comino', 1], ['pimenton', 3], ['queso_rallado', 60], ['aceite', 20], ['sal', 7]],
    m: {
      horno: [70, ['Cuece las patatas 20 min y haz un puré con la leche, la mantequilla, una yema y sal. Cuece 2 huevos.', 'Sofríe la cebolla y el pimiento 8 min, añade la carne con comino, pimentón y sal y dórala 8 min. Mezcla con aceitunas, pasas y huevo picado.', 'Extiende la carne en una fuente, cúbrela con el puré y espolvorea queso.', 'Hornea 20 min a 200 °C y gratina 5 min.']],
      airfryer: [60, ['Prepara el relleno y el puré como en la receta de horno.', 'Monta el pastel en un molde que quepa en la freidora.', 'Cocina 15 min a 180 °C hasta que se dore.']]
    }
  },
  {
    id: 'ar-matambre-pizza', n: 'Matambre a la pizza', e: '🍕', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_falda', 1000], ['leche', 500], ['tomate_frito', 250], ['mozzarella', 250], ['aceitunas', 40], ['pimiento_rojo', 100], ['ajo', 2], ['oregano', 2], ['patata', 800], ['aceite', 30], ['sal', 7]],
    m: {
      horno: [100, ['Pon la falda (en una pieza fina) en una fuente, sálala, cúbrela con la leche y el ajo y hornea tapada 1 h a 180 °C, hasta que esté tierna.', 'Retira la leche, cubre la carne con tomate, queso, pimiento en tiras, aceitunas y orégano.', 'Gratina 10 min a 220 °C.', 'Sirve con patatas asadas a la vez en otra bandeja.']],
      fuego: [90, ['Cuece la falda en leche con ajo y sal tapada 1 h a fuego suave.', 'Márcala en una plancha 3 min por lado y pásala a una fuente.', 'Cubre con tomate, queso, pimiento, aceitunas y orégano y gratina 8 min. Sirve con patatas.']]
    }
  },
  {
    id: 'ar-matambre-arrollado', n: 'Matambre arrollado', e: '🥩', tipo: 'cena', tags: ['carne'],
    ing: [['ternera_falda', 1000], ['huevo', 4], ['zanahoria', 200], ['pimiento_rojo', 150], ['espinacas', 100], ['ajo', 3], ['perejil_fresco', 1], ['oregano', 2], ['pimenton', 3], ['lechuga', 1], ['tomate', 300], ['sal', 8]],
    m: {
      fuego: [130, ['Extiende la falda abierta y fina, sálala y unta con ajo, perejil, orégano y pimentón picados. Cuece 3 huevos.', 'Cubre con espinacas, tiras de zanahoria y pimiento y los huevos en cuartos. Enróllala apretada y átala con hilo de cocina.', 'Cuécela en agua con sal a fuego suave 1 h 45 min. Déjala enfriar con peso encima y luego en la nevera.', 'Córtala en rodajas y sírvela fría con ensalada.']],
      horno: [120, ['Prepara y ata el arrollado como en la receta tradicional.', 'Envuélvelo en papel de aluminio y hornea 1 h 45 min a 170 °C.', 'Enfría, corta en rodajas y sirve con ensalada.']],
      robot: [110, ['Prepara el arrollado y envuélvelo en film apto para cocción.', 'Ponlo en el Varoma con 1,5 l de agua en el vaso: 90 min/Varoma/vel. 1 (añade agua a mitad si hace falta).', 'Enfría, corta y sirve con ensalada.']]
    }
  },
  {
    id: 'ar-choripan', n: 'Choripán con chimichurri', e: '🌭', tipo: 'cena', tags: ['carne', 'rapida', 'niños'],
    ing: [['chorizo_fresco', 600], ['pan_barra', 2], ['perejil_fresco', 1], ['ajo', 3], ['oregano', 2], ['pimenton', 2], ['guindilla', 1], ['vinagre', 30], ['aceite', 80], ['lechuga', 1], ['tomate', 300], ['cebolla_morada', 80], ['sal', 4]],
    m: {
      fuego: [25, ['Prepara el chimichurri: perejil y ajo muy picados con orégano, pimentón, guindilla, vinagre, aceite, sal y un poco de agua. Deja reposar.', 'Abre los chorizos en mariposa y hazlos en la plancha 5 min por lado.', 'Tuesta el pan abierto en trozos.', 'Rellénalo con el chorizo y chimichurri y sirve con ensalada de tomate y cebolla.']],
      airfryer: [22, ['Prepara el chimichurri.', 'Cocina los chorizos abiertos 12 min a 200 °C, girando a mitad.', 'Sirve en el pan tostado con chimichurri y ensalada.']],
      horno: [30, ['Prepara el chimichurri.', 'Asa los chorizos 20 min a 210 °C, girándolos a mitad.', 'Sirve en pan con chimichurri y ensalada.']]
    }
  },
  {
    id: 'ar-bife-chimichurri', n: 'Bife de chorizo con chimichurri', e: '🥩', tipo: 'comida', tags: ['carne', 'rapida'],
    ing: [['ternera_entrecot', 900], ['perejil_fresco', 1], ['ajo', 3], ['oregano', 2], ['pimenton', 2], ['guindilla', 1], ['vinagre', 30], ['aceite', 80], ['patata', 800], ['lechuga', 1], ['tomate', 300], ['sal', 6]],
    m: {
      fuego: [30, ['Prepara el chimichurri con perejil y ajo picados, orégano, pimentón, guindilla, vinagre, aceite, sal y un chorrito de agua.', 'Saca la carne de la nevera 20 min antes. Hazla en una plancha muy caliente 3-4 min por lado y sala al final.', 'Déjala reposar 5 min.', 'Sirve con chimichurri, patatas fritas o asadas y ensalada.']],
      airfryer: [30, ['Cocina las patatas en gajos 20 min a 200 °C.', 'Cocina el entrecot 8-10 min a 200 °C, girando a mitad.', 'Reposa y sirve con chimichurri y ensalada.']]
    }
  },
  {
    id: 'ar-vacio-horno', n: 'Vacío al horno con papas', e: '🥩', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_falda', 1200], ['patata', 1000], ['ajo', 4], ['romero', 1], ['oregano', 1], ['pimenton', 3], ['vino_blanco', 150], ['perejil_fresco', 1], ['vinagre', 20], ['aceite', 80], ['sal', 9]],
    m: {
      horno: [130, ['Unta la pieza de falda (vacío) con sal gruesa, ajo, pimentón y aceite.', 'Ásala en una fuente con el vino 1 h 30 min a 170 °C, dándole la vuelta a mitad.', 'Añade las patatas en gajos con romero y aceite los últimos 45 min y sube a 210 °C los 15 finales.', 'Sirve en tiras con un chimichurri rápido de perejil, ajo, orégano, vinagre y aceite.']],
      fuego: [120, ['Cuece la falda tapada a fuego muy suave con el vino y el ajo 1 h 30 min.', 'Dórala en plancha muy caliente 4 min por lado.', 'Sirve con patatas fritas y chimichurri.']]
    }
  },
  {
    id: 'ar-pollo-disco', n: 'Pollo al disco', e: '🍗', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_entero', 1500], ['patata', 600], ['cebolla', 250], ['pimiento_rojo', 150], ['pimiento_verde', 150], ['zanahoria', 150], ['champinon', 200], ['vino_blanco', 200], ['ajo', 4], ['pimenton', 3], ['laurel', 2], ['aceite', 50], ['sal', 8]],
    m: {
      fuego: [70, ['Dora el pollo troceado y salado en una cazuela ancha o disco 10 min.', 'Añade la cebolla, los pimientos y el ajo en tiras y sofríe 8 min. Agrega el pimentón y el vino.', 'Incorpora la zanahoria, el laurel y 200 ml de agua y cuece tapado 20 min.', 'Añade la patata en dados y los champiñones y cuece 20 min más.']],
      horno: [75, ['Dora el pollo en sartén y colócalo en una fuente con las verduras en tiras, la patata y los champiñones.', 'Riega con el vino y 100 ml de agua, añade pimentón, laurel y sal.', 'Hornea 55 min a 190 °C, removiendo a mitad.']]
    }
  },
  {
    id: 'ar-pollo-portuguesa', n: 'Pollo a la portuguesa', e: '🍗', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_muslos', 1000], ['tomate_triturado', 400], ['cebolla', 200], ['pimiento_rojo', 150], ['pimiento_verde', 100], ['ajo', 3], ['vino_blanco', 150], ['laurel', 2], ['pimenton', 3], ['patata', 800], ['aceite', 40], ['aceite_girasol', 300], ['sal', 7]],
    m: {
      fuego: [60, ['Dora los contramuslos salados y resérvalos.', 'Sofríe la cebolla, los pimientos y el ajo en tiras 10 min con el pimentón.', 'Añade el vino, el tomate, el laurel y el pollo y cuece tapado 30 min.', 'Sirve con patatas fritas en dados.']],
      robot: [55, ['Pica cebolla, pimientos y ajo 4 seg/vel. 4 y sofríe con aceite y pimentón 8 min/120 °C/vel. 1.', 'Añade el pollo, el vino, el tomate, el laurel y la sal: 30 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con patatas fritas o hechas en la freidora de aire.']]
    }
  },
  {
    id: 'ar-tarta-acelga', n: 'Tarta pascualina de acelga', e: '🥧', tipo: 'cena', tags: ['vegetariano'],
    ing: [['masa_quebrada', 2], ['acelgas', 1000], ['cebolla', 200], ['ajo', 1], ['ricotta', 250], ['queso_rallado', 80], ['huevo', 6], ['nuez_moscada', 1], ['aceite', 30], ['sal', 6]],
    m: {
      horno: [65, ['Hierve las acelgas picadas 5 min, escúrrelas muy bien y saltéalas con la cebolla y el ajo pochados 10 min.', 'Mezcla con la ricotta, el queso, 2 huevos, nuez moscada y sal.', 'Forra un molde con una masa, añade el relleno, haz 4 huecos y casca un huevo en cada uno. Tapa con la otra masa y sella.', 'Pinta con aceite y hornea 35 min a 190 °C.']],
      airfryer: [55, ['Prepara el relleno como en la receta de horno.', 'Monta la tarta en un molde que quepa en la freidora.', 'Cocina 25 min a 170 °C y 5 min más a 190 °C para dorar.']]
    }
  },
  {
    id: 'ar-tarta-choclo', n: 'Tarta de choclo', e: '🌽', tipo: 'cena', tags: ['vegetariano', 'niños'],
    ing: [['masa_quebrada', 1], ['maiz', 3], ['cebolla', 200], ['pimiento_rojo', 100], ['leche', 300], ['harina', 30], ['mantequilla', 30], ['huevo', 3], ['queso_rallado', 100], ['nuez_moscada', 1], ['sal', 5]],
    m: {
      horno: [55, ['Pocha la cebolla y el pimiento picados en la mantequilla 8 min. Añade la harina 1 min y la leche y cuece hasta que espese.', 'Agrega el maíz (con la mitad triturado), la nuez moscada y la sal y deja templar. Incorpora los huevos y el queso.', 'Forra un molde con la masa y vierte el relleno.', 'Hornea 35 min a 180 °C hasta que cuaje y se dore.']],
      airfryer: [50, ['Prepara el relleno y forra un molde pequeño con la masa.', 'Cocina 30 min a 160 °C.', 'Dora 5 min a 180 °C.']]
    }
  },
/* ---- Tanda 2 ---- */
  {
    id: 'ar-tarta-jyq', n: 'Tarta de jamón y queso', e: '🥧', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['masa_quebrada', 1], ['jamon_cocido', 200], ['mozzarella', 200], ['cebolla', 150], ['huevo', 4], ['nata', 200], ['leche', 100], ['nuez_moscada', 1], ['lechuga', 1], ['tomate', 300], ['aceite', 15], ['sal', 3]],
    m: {
      horno: [50, ['Pocha la cebolla en juliana 8 min.', 'Bate los huevos con la nata, la leche, nuez moscada y sal.', 'Forra un molde con la masa, reparte la cebolla, el jamón en tiras y el queso y vierte el batido.', 'Hornea 30 min a 180 °C y sirve con ensalada.']],
      airfryer: [45, ['Prepara el relleno y forra un molde pequeño con la masa.', 'Cocina 25 min a 160 °C y 5 min a 180 °C.', 'Sirve con ensalada.']]
    }
  },
  {
    id: 'ar-zapallitos-rellenos', n: 'Zapallitos rellenos', e: '🥒', tipo: 'cena', tags: ['carne', 'ligera'],
    ing: [['calabacin', 1000], ['carne_picada_ternera', 350], ['cebolla', 150], ['pimiento_rojo', 80], ['huevo', 1], ['pan_rallado', 30], ['queso_rallado', 80], ['oregano', 1], ['pimenton', 2], ['aceite', 30], ['sal', 6]],
    m: {
      horno: [45, ['Corta los calabacines (mejor redondos) por la mitad, vacíalos con una cuchara y pica la pulpa.', 'Sofríe la cebolla, el pimiento y la pulpa 8 min; añade la carne con pimentón, orégano y sal y dórala 6 min. Mezcla con el huevo.', 'Rellena los calabacines, cubre con pan rallado y queso.', 'Hornea 25 min a 200 °C.']],
      airfryer: [40, ['Prepara los calabacines rellenos como en la receta de horno.', 'Cocínalos 18 min a 180 °C, hasta que se doren.']]
    }
  },
  {
    id: 'ar-noquis-tuco', n: 'Ñoquis con tuco', e: '🥔', tipo: 'comida', tags: ['vegetariano', 'niños', 'rapida'],
    ing: [['gnocchi', 2], ['tomate_triturado', 600], ['cebolla', 150], ['pimiento_rojo', 80], ['zanahoria', 80], ['ajo', 2], ['laurel', 1], ['oregano', 1], ['azucar', 5], ['queso_rallado', 60], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [30, ['Sofríe la cebolla, el pimiento, la zanahoria y el ajo muy picados 8 min.', 'Añade el tomate, el laurel, el orégano, el azúcar y la sal y cuece el tuco 15 min.', 'Cuece los ñoquis en agua hirviendo con sal hasta que floten y escúrrelos.', 'Mézclalos con el tuco y sirve con queso rallado.']],
      robot: [30, ['Pica cebolla, pimiento, zanahoria y ajo 5 seg/vel. 5 y sofríe con aceite 7 min/120 °C/vel. 1.', 'Añade tomate, laurel, orégano, azúcar y sal: 15 min/100 °C/vel. 1.', 'Cuece los ñoquis aparte, mézclalos con el tuco y sirve con queso.']]
    }
  },
  {
    id: 'ar-ravioles-estofado', n: 'Ravioles con estofado', e: '🥟', tipo: 'comida', tags: ['carne'],
    ing: [['pasta_rellena', 600], ['ternera_guisar', 500], ['tomate_triturado', 500], ['cebolla', 150], ['zanahoria', 100], ['pimiento_rojo', 80], ['ajo', 2], ['vino_tinto', 100], ['laurel', 2], ['champinon', 150], ['queso_rallado', 60], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [100, ['Dora la carne en dados con sal y resérvala.', 'Sofríe cebolla, zanahoria, pimiento y ajo picados 8 min. Añade el vino y deja evaporar.', 'Agrega el tomate, el laurel, la carne y 200 ml de agua y cuece tapado 1 h 15 min. Añade los champiñones los últimos 15 min.', 'Cuece la pasta, mézclala con el estofado y sirve con queso.']],
      robot: [80, ['Pica cebolla, zanahoria, pimiento y ajo 5 seg/vel. 5 y sofríe con aceite 7 min/120 °C/vel. 1.', 'Añade la carne, el vino, el tomate, el laurel, 150 ml de agua y la sal: 60 min/100 °C/giro inverso/vel. cuchara. Añade los champiñones los últimos 10 min.', 'Cuece la pasta aparte y sirve con el estofado y queso.']]
    }
  },
  {
    id: 'ar-canelones-verdura', n: 'Canelones de verdura con salsa blanca', e: '🫕', tipo: 'comida', tags: ['vegetariano'],
    ing: [['canelones', 200], ['acelgas', 800], ['ricotta', 250], ['cebolla', 150], ['queso_rallado', 100], ['huevo', 1], ['leche', 600], ['harina', 50], ['mantequilla', 50], ['tomate_frito', 300], ['nuez_moscada', 1], ['sal', 6]],
    m: {
      horno: [65, ['Hidrata las placas según el envase. Hierve las acelgas picadas 5 min, escúrrelas muy bien y saltéalas con la cebolla pochada.', 'Mezcla con la ricotta, la mitad del queso, el huevo, nuez moscada y sal. Rellena y enrolla los canelones.', 'Haz una bechamel con la mantequilla, la harina y la leche. Pon los canelones en una fuente con el tomate debajo y cúbrelos con bechamel y queso.', 'Hornea 25 min a 200 °C y gratina.']],
      robot: [65, ['Prepara el relleno de acelga y los canelones como en la receta de horno.', 'Bechamel: leche, harina, mantequilla, nuez moscada y sal 7 min/90 °C/vel. 4.', 'Monta en la fuente con el tomate y la bechamel y hornea 25 min a 200 °C.']]
    }
  },
  {
    id: 'ar-guiso-arroz', n: 'Guiso de arroz con carne', e: '🍚', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['arroz', 300], ['ternera_guisar', 500], ['cebolla', 150], ['pimiento_rojo', 100], ['zanahoria', 100], ['tomate_triturado', 300], ['guisantes', 100], ['pimenton', 4], ['caldo_carne', 900], ['laurel', 1], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [70, ['Dora la carne en dados pequeños y resérvala.', 'Sofríe la cebolla, el pimiento y la zanahoria picados 8 min, añade el pimentón y el tomate.', 'Devuelve la carne con el caldo y el laurel y cuece 30 min.', 'Agrega el arroz y los guisantes y cuece 18 min. Debe quedar caldoso.']],
      robot: [60, ['Pica cebolla, pimiento y zanahoria 4 seg/vel. 5 y sofríe con aceite 7 min/120 °C/vel. 1.', 'Añade carne, pimentón, tomate, caldo, laurel y sal: 30 min/100 °C/giro inverso/vel. cuchara.', 'Agrega arroz y guisantes: 16 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'ar-polenta-tuco', n: 'Polenta con tuco y queso', e: '🌽', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['polenta', 250], ['leche', 300], ['mantequilla', 30], ['queso_rallado', 100], ['tomate_triturado', 500], ['cebolla', 120], ['ajo', 2], ['oregano', 1], ['mozzarella', 150], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [30, ['Haz un tuco: sofríe la cebolla y el ajo picados 6 min, añade el tomate, el orégano y la sal y cuece 15 min.', 'Hierve 700 ml de agua con la leche y la sal, añade la polenta en lluvia y remueve 5 min hasta que espese.', 'Incorpora la mantequilla y el queso rallado.', 'Sirve la polenta con el tuco y mozzarella en dados por encima.']],
      robot: [30, ['Sofríe cebolla y ajo picados con aceite 5 min/120 °C/vel. 1. Añade tomate, orégano y sal: 15 min/100 °C/vel. 1. Reserva.', 'Pon 700 ml de agua, la leche y sal: 8 min/100 °C/vel. 1. Añade la polenta por la boca: 5 min/90 °C/vel. 3.', 'Mezcla con mantequilla y queso y sirve con el tuco y mozzarella.']]
    }
  },
  {
    id: 'ar-revuelto-gramajo', n: 'Revuelto gramajo', e: '🍳', tipo: 'cena', tags: ['carne', 'rapida', 'niños'],
    ing: [['patata', 600], ['huevo', 8], ['jamon_cocido', 150], ['cebolla', 150], ['guisantes', 100], ['perejil_fresco', 1], ['aceite_girasol', 300], ['sal', 5]],
    m: {
      fuego: [25, ['Corta la patata en bastones muy finos (paja) y fríela hasta que esté crujiente.', 'Pocha la cebolla en juliana 6 min, añade el jamón en tiras y los guisantes 2 min.', 'Echa los huevos batidos con sal y remueve a fuego suave.', 'Cuando estén casi cuajados, añade las patatas, mezcla y sirve con perejil.']],
      airfryer: [30, ['Cocina las patatas en bastones finos con un poco de aceite 18 min a 200 °C.', 'Haz el revuelto en sartén con cebolla, jamón, guisantes y huevo.', 'Mezcla con las patatas y sirve.']]
    }
  },
  {
    id: 'ar-fugazzeta', n: 'Fugazzeta', e: '🍕', tipo: 'cena', tags: ['vegetariano', 'niños'],
    ing: [['masa_pizza', 2], ['mozzarella', 400], ['cebolla', 500], ['oregano', 2], ['queso_rallado', 60], ['aceite', 40], ['sal', 3]],
    m: {
      horno: [40, ['Corta la cebolla en juliana fina, sálala y déjala escurrir 10 min.', 'Extiende una masa en un molde aceitado, cubre con la mozzarella en lonchas y tapa con la otra masa, sellando los bordes.', 'Cubre con la cebolla, el orégano, el queso rallado y un hilo de aceite.', 'Hornea 25 min a 220 °C.']],
      airfryer: [35, ['Monta la fugazzeta en un molde que quepa en la freidora (puedes hacer dos).', 'Cocina 15 min a 180 °C.', 'Sube a 200 °C 3 min para dorar la cebolla.']]
    }
  },
  {
    id: 'ar-provoleta', n: 'Provoleta con ensalada criolla', e: '🧀', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['queso_provolone', 500], ['oregano', 2], ['guindilla', 1], ['tomate', 400], ['cebolla_morada', 100], ['pimiento_verde', 100], ['lechuga', 1], ['pan_barra', 1], ['vinagre', 20], ['aceite', 50], ['sal', 3]],
    m: {
      fuego: [15, ['Corta el provolone en rodajas de 2 cm y espolvorea orégano y guindilla.', 'Dóralo en una sartén o plancha muy caliente 2 min por lado, hasta que forme costra y se funda por dentro.', 'Prepara la ensalada criolla: tomate, cebolla y pimiento picados con lechuga, vinagre, aceite y sal.', 'Sirve la provoleta caliente con pan tostado y la ensalada.']],
      horno: [15, ['Pon el queso en una fuente pequeña con orégano y guindilla.', 'Hornea 8 min a 230 °C hasta que burbujee.', 'Sirve con pan tostado y ensalada criolla.']],
      airfryer: [12, ['Pon el queso en un molde pequeño con orégano y guindilla.', 'Cocina 6 min a 200 °C.', 'Sirve con pan y ensalada.']]
    }
  },
  {
    id: 'ar-pollo-verdeo', n: 'Pollo al verdeo', e: '🍗', tipo: 'comida', tags: ['carne', 'rapida'],
    ing: [['pollo_pechuga', 700], ['cebolleta', 4], ['nata', 250], ['vino_blanco', 100], ['mantequilla', 20], ['harina', 20], ['caldo_pollo', 100], ['patata', 800], ['nuez_moscada', 1], ['aceite', 20], ['sal', 6]],
    m: {
      fuego: [30, ['Cuece las patatas para puré o en dados.', 'Corta el pollo en tiras, sálalo, enharínalo ligeramente y dóralo en mantequilla y aceite 5 min.', 'Añade la cebolleta picada (con su parte verde) y saltea 3 min. Agrega el vino y deja evaporar.', 'Incorpora la nata, el caldo y la nuez moscada y cuece 5 min. Sirve con las patatas.']],
      robot: [30, ['Pica la cebolleta 3 seg/vel. 4 y sofríe con mantequilla 4 min/120 °C/vel. 1.', 'Añade el pollo en tiras y el vino: 6 min/100 °C/giro inverso/vel. cuchara.', 'Agrega nata, caldo, nuez moscada y sal: 6 min/100 °C/giro inverso/vel. cuchara. Sirve con patatas.']]
    }
  },
  {
    id: 'ar-lomo-champignon', n: 'Lomo al champiñón', e: '🍄', tipo: 'comida', tags: ['carne', 'rapida'],
    ing: [['cerdo_solomillo', 800], ['champinon', 400], ['cebolla', 100], ['ajo', 2], ['vino_blanco', 100], ['nata', 200], ['mantequilla', 20], ['patata', 800], ['perejil_fresco', 1], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [35, ['Corta el solomillo en medallones, sálalos y dóralos 2 min por lado. Reserva.', 'Saltea la cebolla y el ajo picados en la mantequilla 3 min, añade los champiñones y cocina 6 min.', 'Agrega el vino, deja reducir y añade la nata. Cuece 4 min y devuelve la carne 3 min.', 'Sirve con patatas y perejil.']],
      horno: [40, ['Asa el solomillo entero salado 20 min a 200 °C.', 'Haz la salsa de champiñones en sartén como en la receta tradicional.', 'Corta en medallones, napa con la salsa y sirve con patatas.']]
    }
  },
  {
    id: 'ar-bondiola-braseada', n: 'Bondiola braseada con puré de calabaza', e: '🐖', tipo: 'comida', tags: ['carne'],
    ing: [['aguja_cerdo', 1000], ['cebolla', 250], ['zanahoria', 150], ['ajo', 3], ['cerveza', 330], ['miel', 30], ['mostaza', 20], ['laurel', 2], ['calabaza', 800], ['mantequilla', 30], ['aceite', 30], ['sal', 8]],
    m: {
      fuego: [150, ['Sala la aguja de cerdo y dórala entera por todos los lados.', 'Añade la cebolla, la zanahoria y el ajo troceados, la cerveza, la miel, la mostaza y el laurel.', 'Cuece tapado a fuego suave 2 h, girando la pieza a mitad. Tritura las verduras con el jugo para la salsa.', 'Cuece la calabaza 15 min, cháfala con mantequilla y sal y sirve con la carne en lonchas.']],
      horno: [160, ['Dora la pieza y colócala en una fuente con las verduras, la cerveza, la miel, la mostaza y el laurel.', 'Hornea tapada 2 h 15 min a 170 °C.', 'Tritura la salsa y sirve con el puré de calabaza.']],
      robot: [110, ['Dora la carne en sartén y córtala en 4 trozos.', 'Pica cebolla, zanahoria y ajo 4 seg/vel. 5 y sofríe 5 min/120 °C/vel. 1. Añade la carne, la cerveza, la miel, la mostaza, el laurel y la sal: 90 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con el puré de calabaza.']]
    }
  },
  {
    id: 'ar-chorizo-pomarola', n: 'Chorizos a la pomarola', e: '🌭', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['chorizo_fresco', 700], ['tomate_triturado', 500], ['cebolla', 150], ['pimiento_rojo', 100], ['ajo', 2], ['oregano', 1], ['laurel', 1], ['patata', 800], ['leche', 150], ['mantequilla', 30], ['aceite', 20], ['sal', 5]],
    m: {
      fuego: [45, ['Pincha los chorizos y dóralos en una cazuela 8 min. Retíralos.', 'Sofríe la cebolla, el pimiento y el ajo picados 8 min. Añade el tomate, el orégano y el laurel.', 'Devuelve los chorizos y cuece 20 min tapado.', 'Sirve con puré de patata.']],
      robot: [45, ['Dora los chorizos en sartén.', 'Pica cebolla, pimiento y ajo 4 seg/vel. 5 y sofríe con aceite 7 min/120 °C/vel. 1. Añade tomate, especias y sal y los chorizos: 20 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con puré de patata.']]
    }
  },
  {
    id: 'ar-albondigas-pure', n: 'Albóndigas con puré', e: '🧆', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['carne_picada', 600], ['pan_molde', 1], ['leche', 300], ['huevo', 1], ['ajo', 2], ['perejil_fresco', 1], ['queso_rallado', 40], ['tomate_triturado', 500], ['cebolla', 150], ['patata', 900], ['mantequilla', 30], ['aceite', 30], ['sal', 7]],
    m: {
      fuego: [55, ['Remoja 2 rebanadas de pan en 100 ml de leche y mézclalas con la carne, el huevo, ajo, perejil, queso y sal. Forma albóndigas.', 'Dóralas en aceite y resérvalas. Sofríe la cebolla picada 6 min, añade el tomate y cuece 5 min.', 'Mete las albóndigas en la salsa y cuece tapado 20 min.', 'Haz un puré con las patatas cocidas, el resto de la leche y la mantequilla y sirve con las albóndigas.']],
      horno: [55, ['Forma las albóndigas y hornéalas 12 min a 200 °C.', 'Cúbrelas con la salsa de tomate y cebolla y hornea 20 min a 180 °C.', 'Sirve con puré.']]
    }
  },
  {
    id: 'ar-ninos-envueltos', n: 'Niños envueltos de repollo', e: '🥬', tipo: 'comida', tags: ['carne'],
    ing: [['repollo', 1000], ['carne_picada', 500], ['arroz', 100], ['cebolla', 200], ['ajo', 2], ['huevo', 1], ['tomate_triturado', 500], ['pimenton', 3], ['laurel', 1], ['caldo_carne', 300], ['aceite', 30], ['sal', 7]],
    m: {
      fuego: [80, ['Escalda las hojas grandes del repollo 3 min para que se ablanden.', 'Mezcla la carne con el arroz crudo, la mitad de la cebolla picada, el ajo, el huevo, el pimentón y la sal.', 'Pon una porción en cada hoja y enróllala cerrando los lados.', 'Sofríe el resto de la cebolla, añade el tomate, el caldo y el laurel, coloca los envueltos y cuece tapado 45 min a fuego suave.']],
      horno: [85, ['Prepara los envueltos como en la receta tradicional.', 'Colócalos en una fuente con la salsa de tomate y caldo.', 'Hornea tapado 55 min a 180 °C.']]
    }
  },
  {
    id: 'ar-budin-zapallitos', n: 'Budín de zapallitos', e: '🥒', tipo: 'cena', tags: ['vegetariano', 'ligera'],
    ing: [['calabacin', 1000], ['cebolla', 150], ['huevo', 5], ['queso_rallado', 100], ['pan_rallado', 50], ['leche', 100], ['nuez_moscada', 1], ['lechuga', 1], ['tomate', 300], ['aceite', 30], ['sal', 6]],
    m: {
      horno: [55, ['Ralla el calabacín, sálalo y escúrrelo bien apretando con las manos.', 'Saltéalo con la cebolla picada 8 min hasta que se seque.', 'Mezcla con los huevos batidos, la leche, el queso, el pan rallado y la nuez moscada y pásalo a un molde aceitado.', 'Hornea al baño maría 35 min a 180 °C. Sirve tibio con ensalada.']],
      airfryer: [45, ['Prepara la mezcla como en la receta de horno y vuélcala en un molde pequeño.', 'Cocina 25 min a 160 °C hasta que cuaje.', 'Sirve con ensalada.']]
    }
  },
  {
    id: 'ar-humita-olla', n: 'Humita en olla', e: '🌽', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['maiz', 4], ['calabaza', 300], ['cebolla', 150], ['pimiento_rojo', 100], ['leche', 300], ['queso_fresco', 200], ['pimenton', 3], ['comino', 1], ['albahaca', 1], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [30, ['Sofríe la cebolla y el pimiento picados con el pimentón y el comino 8 min.', 'Añade la calabaza rallada y cocina 5 min.', 'Agrega el maíz triturado con la leche y cuece 10 min, removiendo, hasta que espese. Sala.', 'Añade el queso en dados y la albahaca y sirve caliente.']],
      robot: [30, ['Tritura el maíz con la leche 30 seg/vel. 6 y reserva.', 'Pica cebolla y pimiento 4 seg/vel. 5 y sofríe con aceite y especias 6 min/120 °C/vel. 1. Añade la calabaza: 5 min/100 °C/vel. 1.', 'Agrega el maíz con leche y la sal: 12 min/100 °C/vel. 2.', 'Sirve con queso y albahaca.']]
    }
  },
  {
    id: 'ar-guiso-carrero', n: 'Guiso carrero', e: '🍲', tipo: 'comida', tags: ['carne', 'legumbres'],
    ing: [['ternera_guisar', 500], ['chorizo_fresco', 200], ['arroz', 150], ['garbanzos', 400], ['patata', 300], ['calabaza', 300], ['cebolla', 150], ['pimiento_rojo', 100], ['tomate_triturado', 300], ['pimenton', 4], ['comino', 1], ['caldo_carne', 1000], ['aceite', 30], ['sal', 7]],
    m: {
      fuego: [80, ['Dora la carne y el chorizo troceados y resérvalos.', 'Sofríe la cebolla y el pimiento 8 min con el pimentón y el comino, añade el tomate.', 'Devuelve la carne con el caldo y cuece 35 min. Agrega patata y calabaza en dados y el arroz y cuece 18 min.', 'Incorpora los garbanzos 3 min y sirve.']],
      robot: [65, ['Pica cebolla y pimiento 4 seg/vel. 5 y sofríe con aceite y especias 6 min/120 °C/vel. 1.', 'Añade carne, chorizo, tomate, caldo y sal: 35 min/100 °C/giro inverso/vel. cuchara.', 'Agrega patata, calabaza y arroz: 16 min/100 °C/giro inverso/vel. cuchara. Añade los garbanzos al final.']]
    }
  },
  {
    id: 'ar-merluza-romana', n: 'Filet de merluza a la romana con puré', e: '🐟', tipo: 'cena', tags: ['pescado', 'niños', 'rapida'],
    ing: [['merluza', 700], ['harina', 120], ['huevo', 2], ['leche', 250], ['patata', 800], ['mantequilla', 30], ['limon', 1], ['aceite_girasol', 400], ['sal', 6]],
    m: {
      fuego: [30, ['Cuece las patatas 20 min y haz un puré con la leche y la mantequilla.', 'Sala los filetes de merluza, pásalos por harina y huevo batido.', 'Fríelos en aceite caliente 2 min por lado y escúrrelos.', 'Sirve con el puré y limón.']],
      airfryer: [30, ['Pasa el pescado por harina, huevo y un poco de pan rallado y pulverízalo con aceite.', 'Cocina 10 min a 200 °C.', 'Sirve con puré y limón.']]
    }
  },
/* ---- Tanda 3 ---- */
  {
    id: 'ar-merluza-provenzal', n: 'Merluza a la provenzal con papas', e: '🐟', tipo: 'cena', tags: ['pescado', 'ligera'],
    ing: [['merluza', 700], ['patata', 700], ['ajo', 5], ['perejil_fresco', 1], ['limon', 1], ['pimenton', 2], ['aceite', 70], ['sal', 6]],
    m: {
      horno: [45, ['Corta la patata en rodajas finas, alíñala con aceite y sal y hornea 25 min a 200 °C.', 'Pica muy fino el ajo y el perejil y mézclalos con aceite (provenzal).', 'Coloca el pescado salado sobre las patatas, cúbrelo con la provenzal y el pimentón.', 'Hornea 12 min más y sirve con limón.']],
      fuego: [35, ['Fríe o saltea la patata en dados hasta que esté dorada y tierna.', 'Haz el pescado a la plancha 3 min por lado.', 'Echa la provenzal de ajo y perejil por encima del pescado y las patatas y sirve con limón.']],
      airfryer: [35, ['Cocina la patata en dados con aceite 20 min a 200 °C.', 'Añade el pescado con la provenzal encima y cocina 8 min a 190 °C.', 'Sirve con limón.']]
    }
  },
  {
    id: 'ar-cazuela-mariscos', n: 'Cazuela de mariscos', e: '🦐', tipo: 'comida', tags: ['pescado'],
    ing: [['mezcla_marisco', 600], ['merluza', 300], ['mejillones', 500], ['tomate_triturado', 400], ['cebolla', 150], ['pimiento_rojo', 120], ['ajo', 3], ['vino_blanco', 150], ['caldo_pescado', 400], ['pimenton', 3], ['perejil_fresco', 1], ['pan_barra', 1], ['aceite', 40], ['sal', 5]],
    m: {
      fuego: [40, ['Sofríe la cebolla, el pimiento y el ajo picados 8 min con el pimentón.', 'Añade el vino 2 min, el tomate y el caldo y cuece 10 min.', 'Incorpora el marisco, los mejillones y la merluza en trozos y cuece 6 min tapado.', 'Sirve con perejil y pan tostado.']],
      robot: [40, ['Pica cebolla, pimiento y ajo 4 seg/vel. 5 y sofríe con aceite y pimentón 7 min/120 °C/vel. 1.', 'Añade vino, tomate y caldo: 10 min/100 °C/vel. 1.', 'Agrega marisco, mejillones y merluza: 7 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con perejil y pan.']]
    }
  },
  {
    id: 'ar-trucha-manteca', n: 'Trucha a la manteca con almendras', e: '🐟', tipo: 'cena', tags: ['pescado', 'rapida'],
    ing: [['trucha', 1000], ['harina', 40], ['mantequilla', 60], ['almendras', 50], ['limon', 2], ['perejil_fresco', 1], ['patata', 600], ['sal', 5]],
    m: {
      fuego: [30, ['Cuece las patatas pequeñas o en trozos 18 min.', 'Sala las truchas limpias, enharínalas y dóralas en la mitad de la mantequilla 4 min por lado.', 'En la misma sartén dora las almendras laminadas con el resto de la mantequilla y añade el zumo de un limón.', 'Napa las truchas con la salsa, espolvorea perejil y sirve con las patatas.']],
      horno: [30, ['Pon las truchas saladas en una fuente con trozos de mantequilla y limón.', 'Hornea 18 min a 200 °C.', 'Cubre con almendras doradas en mantequilla y sirve con patatas.']],
      airfryer: [25, ['Pinta las truchas con mantequilla derretida y sálalas.', 'Cocínalas 12 min a 190 °C.', 'Sirve con las almendras doradas, limón y patatas.']]
    }
  },
  {
    id: 'ar-salpicon-ave', n: 'Salpicón de ave', e: '🥗', tipo: 'cena', tags: ['carne', 'ligera'],
    ing: [['pollo_pechuga', 600], ['patata', 400], ['zanahoria', 150], ['guisantes', 100], ['huevo', 3], ['pimiento_rojo', 100], ['cebolleta', 1], ['lechuga', 1], ['mayonesa', 120], ['limon', 1], ['aceite', 20], ['sal', 5]],
    m: {
      fuego: [40, ['Cuece el pollo en agua con sal 15 min y desmenúzalo. Cuece la patata y la zanahoria en dados 12 min, los guisantes 4 min y los huevos 10 min.', 'Pica el pimiento y la cebolleta.', 'Mezcla todo con la mayonesa, el zumo de limón y un hilo de aceite.', 'Sirve frío sobre hojas de lechuga con huevo duro.']],
      robot: [40, ['Pon el pollo y las verduras en el Varoma y los huevos en el cestillo con 1 l de agua: 25 min/Varoma/vel. 1.', 'Desmenuza el pollo y pica el resto.', 'Mezcla con mayonesa y limón y sirve frío sobre lechuga.']]
    }
  },
  {
    id: 'ar-pan-carne', n: 'Pan de carne', e: '🍖', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['carne_picada', 800], ['pan_molde', 1], ['leche', 100], ['huevo', 4], ['cebolla', 150], ['zanahoria', 100], ['ajo', 2], ['queso_rallado', 60], ['perejil_fresco', 1], ['tomate_frito', 200], ['patata', 800], ['aceite', 30], ['sal', 8]],
    m: {
      horno: [75, ['Cuece 2 huevos. Remoja 2 rebanadas de pan en la leche.', 'Mezcla la carne con el pan, 2 huevos crudos, la cebolla y la zanahoria ralladas, el ajo, el queso, el perejil y la sal.', 'Extiende la mitad en un molde, pon los huevos duros en el centro y cubre con el resto. Unta con tomate.', 'Hornea 50 min a 180 °C, con la patata en gajos alrededor.']],
      airfryer: [60, ['Prepara el pan de carne en un molde que quepa en la freidora.', 'Cocina 40 min a 170 °C.', 'Sirve con patatas hechas en la freidora.']]
    }
  },
  {
    id: 'ar-peceto-horno', n: 'Peceto al horno con papas', e: '🥩', tipo: 'comida', tags: ['carne'],
    ing: [['redondo_ternera', 1000], ['patata', 900], ['cebolla', 200], ['ajo', 4], ['vino_blanco', 150], ['mostaza', 20], ['romero', 1], ['laurel', 2], ['aceite', 50], ['sal', 8]],
    m: {
      horno: [100, ['Unta el redondo con mostaza, ajo machacado, sal y aceite y dóralo en sartén por todos los lados.', 'Colócalo en una fuente sobre la cebolla en aros, con las patatas en gajos, el romero y el laurel.', 'Riega con el vino y hornea 1 h 15 min a 180 °C, regando de vez en cuando.', 'Deja reposar 10 min, corta en lonchas finas y sirve con su jugo y las patatas.']],
      fuego: [100, ['Dora el redondo en una olla y añade la cebolla, el ajo, el vino, el laurel y 300 ml de agua.', 'Cuece tapado 1 h 20 min, girándolo a mitad.', 'Corta en lonchas y sirve con su salsa y patatas cocidas o fritas.']]
    }
  },
  {
    id: 'ar-estofado-pollo', n: 'Estofado de pollo con papas', e: '🍗', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['pollo_muslos', 1000], ['patata', 700], ['zanahoria', 150], ['champinon', 150], ['tomate_triturado', 400], ['cebolla', 150], ['pimiento_rojo', 100], ['ajo', 2], ['vino_tinto', 100], ['laurel', 2], ['oregano', 1], ['aceite', 30], ['sal', 7]],
    m: {
      fuego: [60, ['Dora el pollo salado y resérvalo.', 'Sofríe la cebolla, el pimiento y el ajo picados 8 min. Añade el vino y el tomate.', 'Devuelve el pollo con la zanahoria, el laurel, el orégano y 200 ml de agua y cuece 20 min.', 'Agrega la patata en trozos y los champiñones y cuece 20 min más.']],
      robot: [55, ['Pica cebolla, pimiento y ajo 4 seg/vel. 5 y sofríe con aceite 7 min/120 °C/vel. 1.', 'Añade el pollo, el vino, el tomate, la zanahoria, las especias, 150 ml de agua y la sal: 20 min/100 °C/giro inverso/vel. cuchara.', 'Agrega patata y champiñones: 20 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'ar-zapallo-relleno', n: 'Calabaza rellena gratinada', e: '🎃', tipo: 'cena', tags: ['vegetariano'],
    ing: [['calabaza', 1500], ['cebolla', 150], ['maiz', 1], ['pimiento_rojo', 100], ['leche', 300], ['harina', 30], ['mantequilla', 30], ['queso_rallado', 100], ['mozzarella', 150], ['nuez_moscada', 1], ['sal', 6]],
    m: {
      horno: [70, ['Parte la calabaza en dos (o en trozos con cavidad), quita las semillas y ásala 40 min a 200 °C.', 'Pocha la cebolla y el pimiento en la mantequilla, añade la harina y la leche y cuece hasta tener una bechamel espesa con el maíz, nuez moscada y sal.', 'Vacía un poco de pulpa, mézclala con la bechamel y rellena la calabaza.', 'Cubre con los quesos y gratina 12 min a 220 °C.']],
      airfryer: [55, ['Asa la calabaza en trozos 25 min a 190 °C.', 'Prepara el relleno en sartén y rellena.', 'Cubre con queso y cocina 6 min a 200 °C.']]
    }
  },
  {
    id: 'ar-pollo-arrollado', n: 'Pollo arrollado con jamón y queso', e: '🍗', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_pechuga', 800], ['jamon_cocido', 150], ['queso_lonchas', 150], ['pimiento_rojo', 100], ['espinacas', 80], ['ajo', 2], ['oregano', 1], ['vino_blanco', 100], ['patata', 800], ['aceite', 40], ['sal', 6]],
    m: {
      horno: [60, ['Abre las pechugas en libro y aplánalas. Sálalas y úntalas con ajo y orégano.', 'Cubre con jamón, queso, espinacas y tiras de pimiento, enrolla y ata con hilo.', 'Dóralos en sartén y pásalos a una fuente con la patata en gajos y el vino.', 'Hornea 35 min a 190 °C, deja reposar y corta en rodajas.']],
      airfryer: [50, ['Prepara los arrollados como en la receta de horno.', 'Cocínalos 25 min a 180 °C, girándolos a mitad.', 'Sirve en rodajas con patatas hechas en la freidora.']],
      robot: [50, ['Prepara los arrollados y envuélvelos en film apto para cocción.', 'Ponlos en el Varoma y la patata en trozos en la bandeja, con 1 l de agua en el vaso: 35 min/Varoma/vel. 1.', 'Dóralos en sartén y sirve en rodajas.']]
    }
  },
  {
    id: 'ar-bife-criolla', n: 'Bifes a la criolla', e: '🥘', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_filetes', 700], ['patata', 800], ['cebolla', 300], ['pimiento_rojo', 150], ['pimiento_verde', 100], ['tomate', 400], ['ajo', 3], ['vino_blanco', 100], ['caldo_carne', 300], ['oregano', 1], ['laurel', 1], ['perejil_fresco', 1], ['aceite', 40], ['sal', 7]],
    m: {
      fuego: [60, ['Pon en una cazuela capas de patata en rodajas, cebolla y pimientos en aros, tomate en rodajas y los filetes salados, con ajo y orégano.', 'Repite las capas y termina con verduras.', 'Riega con el aceite, el vino y el caldo, añade el laurel y cuece tapado a fuego suave 40 min, sin remover.', 'Sirve con perejil picado.']],
      horno: [70, ['Monta las capas en una fuente como en la receta tradicional.', 'Riega con aceite, vino y caldo y tapa con aluminio.', 'Hornea 55 min a 180 °C.']]
    }
  },
  {
    id: 'ar-chupin-pescado', n: 'Chupín de pescado', e: '🍲', tipo: 'comida', tags: ['pescado'],
    ing: [['merluza', 600], ['pescado_blanco', 300], ['patata', 500], ['tomate_triturado', 400], ['cebolla', 200], ['pimiento_rojo', 150], ['ajo', 3], ['vino_blanco', 100], ['caldo_pescado', 600], ['pimenton', 3], ['laurel', 1], ['perejil_fresco', 1], ['aceite', 40], ['sal', 6]],
    m: {
      fuego: [45, ['Sofríe la cebolla, el pimiento y el ajo picados 8 min con el pimentón.', 'Añade el vino, el tomate, el caldo y el laurel y la patata en rodajas y cuece 18 min.', 'Coloca el pescado en trozos encima y cuece tapado 8 min, moviendo la cazuela sin remover.', 'Sirve con perejil.']],
      robot: [40, ['Pica cebolla, pimiento y ajo 4 seg/vel. 5 y sofríe con aceite y pimentón 7 min/120 °C/vel. 1.', 'Añade vino, tomate, caldo, laurel, patata y sal: 18 min/100 °C/giro inverso/vel. cuchara.', 'Agrega el pescado: 8 min/90 °C/giro inverso/vel. cuchara. Sirve con perejil.']]
    }
  },
  {
    id: 'ar-revuelto-zapallitos', n: 'Revuelto de zapallitos', e: '🍳', tipo: 'cena', tags: ['vegetariano', 'rapida', 'ligera'],
    ing: [['calabacin', 800], ['cebolla', 150], ['huevo', 6], ['queso_rallado', 50], ['ajo', 1], ['perejil_fresco', 1], ['pan_barra', 1], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [20, ['Pocha la cebolla y el ajo picados 5 min.', 'Añade el calabacín en dados pequeños y saltea 8 min hasta que esté tierno. Sala.', 'Echa los huevos batidos con el queso y remueve a fuego suave hasta que cuajen.', 'Sirve con perejil y pan tostado.']]
    }
  },
  {
    id: 'ar-pizza-molde', n: 'Pizza de molde de muzzarella', e: '🍕', tipo: 'cena', tags: ['vegetariano', 'niños'],
    ing: [['masa_pizza', 2], ['tomate_triturado', 300], ['mozzarella', 450], ['aceitunas', 50], ['oregano', 2], ['ajo', 1], ['aceite', 30], ['sal', 3]],
    m: {
      horno: [35, ['Extiende la masa en un molde aceitado de bordes altos y deja que suba 15 min.', 'Mezcla el tomate con el ajo rallado, el orégano, un hilo de aceite y sal y unta la masa con una capa generosa.', 'Hornea 10 min a 230 °C, cubre con abundante mozzarella y aceitunas y hornea 10 min más.', 'Termina con orégano y aceite.']],
      airfryer: [30, ['Pon la masa en un molde que quepa en la freidora y unta con la salsa.', 'Cocina 8 min a 190 °C.', 'Añade el queso y las aceitunas y cocina 5 min más.']]
    }
  },
  {
    id: 'ar-milanesa-berenjena', n: 'Milanesas de berenjena', e: '🍆', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['berenjena', 800], ['huevo', 3], ['pan_rallado', 200], ['queso_rallado', 40], ['ajo', 1], ['perejil_fresco', 1], ['lechuga', 1], ['tomate', 300], ['limon', 1], ['aceite_girasol', 400], ['sal', 5]],
    m: {
      fuego: [30, ['Corta la berenjena en rodajas de 1 cm y sálala 10 min. Sécala.', 'Pásala por huevo batido con ajo, perejil y queso y luego por pan rallado.', 'Fríela 2 min por lado y escúrrela.', 'Sirve con ensalada y limón.']],
      horno: [35, ['Empana las rodajas, colócalas en una bandeja con papel y píntalas con aceite.', 'Hornea 20 min a 210 °C, girando a mitad.', 'Sirve con ensalada.']],
      airfryer: [28, ['Empana las rodajas y pulverízalas con aceite.', 'Cocínalas 12 min a 200 °C, girando a mitad.', 'Sirve con ensalada y limón.']]
    }
  }
]);
