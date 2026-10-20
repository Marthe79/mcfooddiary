/* MC Food Diary · cocina de Portugal 🇵🇹. Formato y normas: recetas/GUIA-RECETAS.md */

MC_ADD_ING({
  col_rizada: ['Col rizada o kale', 'fruteria', 6, 'kg'],
  grelos: ['Grelos', 'fruteria', 4, 'kg', 0, 'col rizada o espinacas'],
  jurel: ['Jurel', 'pescaderia', 4.5, 'kg'],
  cazon: ['Cazón', 'pescaderia', 9, 'kg'],
  pato_muslos: ['Muslos de pato', 'carniceria', 12, 'kg', 0, 'contramuslos de pollo'],
  jamon_lonchas: ['Jamón serrano en lonchas', 'charcuteria', 16, 'kg']
});

/* ---- Bacalao y sopas ---- */
MC_ADD('pt', [
  {
    id: 'pt-bacalao-bras', n: 'Bacalao a Brás', e: '🐟', tipo: 'cena', tags: ['pescado', 'rapida'],
    ing: [['bacalao', 500], ['patata', 600], ['cebolla', 250], ['ajo', 2], ['huevo', 6], ['aceitunas', 50], ['perejil_fresco', 1], ['aceite', 60], ['aceite_girasol', 300], ['sal', 2], ['pimienta', 1]],
    m: {
      fuego: [30, ['Corta las patatas en paja muy fina y fríelas en el aceite de girasol hasta que estén doradas. Escúrrelas.', 'Pocha la cebolla en juliana y el ajo en el aceite de oliva 8 min. Añade el bacalao desmigado y cocina 3 min.', 'Incorpora las patatas y, a fuego suave, los huevos batidos con pimienta, removiendo hasta que cuajen jugosos.', 'Sirve con perejil picado y aceitunas negras.']],
      airfryer: [30, ['Mezcla las patatas en paja con 1 cucharada de aceite y cocínalas 15 min a 190 °C, removiendo cada 5 min.', 'Pocha la cebolla y el ajo en una sartén y añade el bacalao.', 'Incorpora las patatas y los huevos batidos y cuaja a fuego suave. Termina con perejil y aceitunas.']]
    }
  },
  {
    id: 'pt-gomes-sa', n: 'Bacalao a Gomes de Sá', e: '🐟', tipo: 'comida', tags: ['pescado'],
    ing: [['bacalao', 600], ['patata', 800], ['cebolla', 300], ['ajo', 3], ['huevo', 4], ['aceitunas', 60], ['leche', 300], ['perejil_fresco', 1], ['aceite', 100], ['sal', 3]],
    m: {
      horno: [60, ['Escalfa el bacalao en la leche caliente 5 min sin que hierva y desmígalo. Cuece las patatas con piel 20 min, pélalas y córtalas en rodajas.', 'Pocha la cebolla en aros y el ajo en el aceite 10 min.', 'Mezcla en una fuente las patatas, el bacalao y la cebolla con su aceite.', 'Hornea 15 min a 200 °C. Sirve con huevo cocido, aceitunas y perejil.']],
      fuego: [45, ['Escalfa el bacalao en la leche y cuece las patatas.', 'Pocha la cebolla y el ajo en abundante aceite.', 'Añade las patatas en rodajas y el bacalao y mezcla a fuego suave 5 min. Sirve con huevo cocido, aceitunas y perejil.']]
    }
  },
  {
    id: 'pt-bacalao-natas', n: 'Bacalao con nata (bacalhau com natas)', e: '🐟', tipo: 'comida', tags: ['pescado', 'niños'],
    ing: [['bacalao', 500], ['patata', 700], ['cebolla', 200], ['ajo', 2], ['nata', 300], ['leche', 400], ['harina', 30], ['mantequilla', 30], ['queso_rallado', 60], ['nuez_moscada', 1], ['aceite', 40], ['aceite_girasol', 300], ['sal', 2]],
    m: {
      horno: [60, ['Corta las patatas en dados pequeños y fríelas hasta que estén doradas, o ásalas con un poco de aceite 25 min a 210 °C.', 'Pocha la cebolla y el ajo en el aceite de oliva, añade el bacalao desmigado y cocina 3 min.', 'Haz una bechamel con mantequilla, harina, leche y nuez moscada y mézclala con la nata.', 'Junta todo en una fuente, cubre con queso y gratina 20 min a 200 °C.']],
      airfryer: [55, ['Cocina las patatas en dados con 1 cucharada de aceite 18 min a 200 °C.', 'Prepara el bacalao con la cebolla y la bechamel con nata en el fuego.', 'Mezcla en un molde apto con queso por encima y cocina 12 min a 180 °C.']]
    }
  },
  {
    id: 'pt-pataniscas', n: 'Pataniscas de bacalao con arroz de alubias', e: '🐟', tipo: 'comida', tags: ['pescado', 'legumbres'],
    ing: [['bacalao', 400], ['harina', 150], ['huevo', 2], ['leche', 150], ['cebolla', 150], ['perejil_fresco', 1], ['arroz', 250], ['alubias_rojas', 400], ['tomate', 150], ['ajo', 1], ['aceite', 30], ['aceite_girasol', 300], ['sal', 4]],
    m: {
      fuego: [45, ['Para el arroz, sofríe la mitad de la cebolla, el ajo y el tomate en el aceite, añade el arroz, 750 ml de agua, sal y las alubias y cuece 18 min.', 'Mezcla la harina con los huevos y la leche hasta tener una masa espesa. Añade el bacalao desmigado, el resto de la cebolla muy picada y el perejil.', 'Fríe cucharadas de masa aplanadas en el aceite de girasol 2 min por lado.', 'Sirve las pataniscas con el arroz caldoso.']]
    }
  },
  {
    id: 'pt-bacalao-grao', n: 'Bacalao con garbanzos y huevo', e: '🐟', tipo: 'comida', tags: ['pescado', 'legumbres', 'ligera'],
    ing: [['bacalao', 600], ['garbanzos', 800], ['patata', 400], ['huevo', 4], ['cebolla', 100], ['ajo', 2], ['perejil_fresco', 1], ['vinagre', 20], ['aceite', 80], ['sal', 3]],
    m: {
      fuego: [35, ['Cuece las patatas en trozos 15 min; añade el bacalao los últimos 6 min. Cuece los huevos 10 min.', 'Calienta los garbanzos escurridos en un poco de agua.', 'Monta en una fuente el bacalao en lascas, las patatas, los garbanzos y los huevos en cuartos.', 'Riega con aceite, vinagre, ajo y cebolla picados y perejil.']]
    }
  },
  {
    id: 'pt-bacalao-lagareiro', n: 'Bacalao a lagareiro con patatas a murro', e: '🐟', tipo: 'comida', tags: ['pescado'],
    ing: [['bacalao', 800], ['patata', 1000], ['ajo', 6], ['grelos', 400], ['aceite', 150], ['sal', 6]],
    m: {
      horno: [60, ['Lava las patatas pequeñas con piel, sálalas y ásalas 30 min a 210 °C. Dales un golpe con el puño para abrirlas.', 'Pon el bacalao en una fuente, rodéalo de las patatas y riega todo con el aceite caliente con los ajos laminados.', 'Hornea 15 min a 200 °C.', 'Saltea los grelos (o espinacas) con un poco del aceite y sirve aparte.']],
      airfryer: [50, ['Cocina las patatas pequeñas con piel y sal 25 min a 200 °C y aplástalas.', 'Cocina el bacalao untado en aceite 10 min a 190 °C.', 'Riega con aceite y ajo dorados y sirve con los grelos salteados.']]
    }
  },
  {
    id: 'pt-pasteis-bacalao', n: 'Pasteles de bacalao (croquetas)', e: '🐟', tipo: 'cena', tags: ['pescado', 'niños'],
    ing: [['bacalao', 400], ['patata', 500], ['cebolla', 80], ['huevo', 3], ['perejil_fresco', 1], ['aceite_girasol', 400], ['lechuga', 1], ['tomate', 300], ['sal', 2], ['pimienta', 1]],
    m: {
      fuego: [50, ['Cuece las patatas peladas 20 min y hazlas puré.', 'Cuece el bacalao 5 min y desmígalo muy fino.', 'Mezcla el puré con el bacalao, la cebolla y el perejil muy picados, los huevos y pimienta. Forma quenelles con dos cucharas.', 'Fríelas en el aceite bien caliente hasta que estén doradas. Sirve con ensalada.']],
      airfryer: [45, ['Prepara la masa y forma las croquetas.', 'Pulverízalas con aceite.', 'Cocina 12 min a 200 °C, girándolas a mitad.']]
    }
  },
  {
    id: 'pt-ze-do-pipo', n: 'Bacalao a Zé do Pipo', e: '🐟', tipo: 'comida', tags: ['pescado'],
    ing: [['bacalao', 700], ['leche', 500], ['cebolla', 300], ['ajo', 2], ['patata', 800], ['mantequilla', 40], ['mayonesa', 200], ['aceitunas', 50], ['laurel', 1], ['aceite', 50], ['sal', 4]],
    m: {
      horno: [60, ['Escalfa el bacalao en la leche con el laurel 6 min.', 'Cuece las patatas y haz un puré con la mantequilla y un poco de la leche.', 'Pocha la cebolla en aros y el ajo en el aceite 10 min y ponlos en una fuente con el bacalao en lomos encima.', 'Rodea con el puré, cubre el bacalao con la mayonesa y gratina 15 min a 220 °C. Decora con aceitunas.']]
    }
  },
  {
    id: 'pt-bacalao-espiritual', n: 'Bacalao espiritual (gratén con zanahoria)', e: '🥕', tipo: 'comida', tags: ['pescado', 'niños'],
    ing: [['bacalao', 500], ['zanahoria', 300], ['cebolla', 150], ['ajo', 2], ['pan_molde', 1], ['leche', 600], ['harina', 40], ['mantequilla', 40], ['nata', 200], ['queso_rallado', 80], ['nuez_moscada', 1], ['aceite', 30], ['sal', 2]],
    m: {
      horno: [60, ['Remoja 2 rebanadas de pan en un poco de leche. Pocha la cebolla y el ajo en el aceite y añade la zanahoria rallada 5 min.', 'Mezcla con el bacalao desmigado y el pan.', 'Haz una bechamel con la mantequilla, la harina, el resto de la leche y la nuez moscada; añade la nata.', 'Mezcla la mitad con el bacalao, pásalo a una fuente, cubre con el resto y el queso y hornea 25 min a 200 °C.']]
    }
  },
  {
    id: 'pt-caldo-verde', n: 'Caldo verde', e: '🥬', tipo: 'cena', tags: ['carne', 'ligera'],
    ing: [['patata', 700], ['col_rizada', 250], ['cebolla', 150], ['ajo', 2], ['chorizo', 120], ['aceite', 50], ['sal', 6]],
    m: {
      fuego: [40, ['Cuece la patata, la cebolla y el ajo en 1,5 l de agua con sal 20 min y tritúralo.', 'Corta la col en tiras muy finas (como hilos) y añádela al caldo. Cuece 5 min.', 'Dora el chorizo en rodajas en una sartén sin aceite.', 'Sirve con unas rodajas de chorizo y un buen chorro de aceite crudo.']],
      robot: [35, ['Pon patata, cebolla, ajo, sal y 1,2 l de agua: 20 min/100 °C/vel. 1. Tritura 1 min/vel. 5-10 progresivo.', 'Añade la col en tiras finas: 5 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con chorizo dorado y aceite.']]
    }
  },
  {
    id: 'pt-sopa-pedra', n: 'Sopa de piedra (alubias con chorizo)', e: '🫘', tipo: 'comida', tags: ['carne', 'legumbres'],
    ing: [['alubias_rojas', 800], ['chorizo', 150], ['panceta', 150], ['morcilla', 150], ['patata', 400], ['cebolla', 150], ['zanahoria', 150], ['ajo', 2], ['cilantro', 1], ['laurel', 1], ['macarron', 80], ['sal', 4]],
    m: {
      fuego: [60, ['Cuece el chorizo, la panceta y la morcilla en 1,8 l de agua con la cebolla, el ajo y el laurel 25 min.', 'Saca las carnes y córtalas en trozos. Añade al caldo la patata y la zanahoria en dados y cuece 15 min.', 'Añade las alubias escurridas y la pasta y cuece 10 min.', 'Vuelve a poner las carnes y sirve con cilantro picado.']],
      robot: [55, ['Pon carnes, cebolla, ajo, laurel y 1,3 l de agua: 25 min/100 °C/giro inverso/vel. cuchara. Saca y trocea las carnes.', 'Añade patata y zanahoria: 15 min/100 °C/giro inverso/vel. cuchara.', 'Añade alubias, pasta y carnes: 10 min/100 °C/giro inverso/vel. cuchara. Sirve con cilantro.']]
    }
  },
  {
    id: 'pt-canja', n: 'Canja (sopa de pollo con arroz y hierbabuena)', e: '🍲', tipo: 'cena', tags: ['carne', 'ligera', 'niños'],
    ing: [['pollo_muslos', 600], ['arroz', 120], ['cebolla', 100], ['zanahoria', 100], ['limon', 1], ['hierbabuena', 1], ['sal', 6]],
    m: {
      fuego: [50, ['Cuece el pollo con la cebolla y la zanahoria en 1,8 l de agua con sal 30 min. Desmenuza la carne.', 'Añade el arroz al caldo y cuece 15 min.', 'Vuelve a poner el pollo y sirve con hierbabuena picada y unas gotas de limón.']],
      robot: [45, ['Pon pollo, cebolla, zanahoria, sal y 1,4 l de agua: 25 min/100 °C/giro inverso/vel. cuchara. Desmenuza el pollo.', 'Añade el arroz: 15 min/100 °C/giro inverso/vel. cuchara.', 'Añade el pollo y sirve con hierbabuena y limón.']]
    }
  },
  {
    id: 'pt-sopa-legumes', n: 'Sopa portuguesa de verduras', e: '🥣', tipo: 'cena', tags: ['vegetariano', 'ligera'],
    ing: [['patata', 400], ['zanahoria', 200], ['calabaza', 300], ['cebolla', 150], ['puerro', 1], ['judias_verdes', 200], ['ajo', 2], ['aceite', 40], ['sal', 6]],
    m: {
      fuego: [40, ['Cuece la patata, la zanahoria, la calabaza, la cebolla, el puerro y el ajo troceados en 1,5 l de agua con sal 25 min.', 'Tritura hasta tener un puré ligero.', 'Añade las judías verdes en trocitos y cuece 8 min más. Termina con un chorro de aceite crudo.']],
      robot: [35, ['Pon patata, zanahoria, calabaza, cebolla, puerro, ajo, sal y 1,2 l de agua: 25 min/100 °C/vel. 1.', 'Tritura 1 min/vel. 5-10 progresivo.', 'Añade las judías verdes: 8 min/100 °C/giro inverso/vel. cuchara. Termina con aceite.']]
    }
  },
  {
    id: 'pt-sopa-peixe', n: 'Sopa de pescado portuguesa', e: '🍲', tipo: 'cena', tags: ['pescado', 'ligera'],
    ing: [['pescado_blanco', 500], ['gambas', 150], ['patata', 300], ['tomate', 300], ['cebolla', 150], ['pimiento_verde', 100], ['ajo', 2], ['cilantro', 1], ['caldo_pescado', 1200], ['fideos', 60], ['aceite', 40], ['sal', 4]],
    m: {
      fuego: [40, ['Sofríe la cebolla, el pimiento y el ajo picados en el aceite 6 min. Añade el tomate rallado y cocina 4 min.', 'Agrega la patata en dados y el caldo y cuece 15 min.', 'Añade el pescado en trozos, las gambas y los fideos y cuece 5 min.', 'Sirve con cilantro picado.']],
      robot: [35, ['Pica cebolla, pimiento y ajo 4 seg/vel. 5 y sofríe con aceite 5 min/120 °C/vel. 1.', 'Añade tomate, patata y caldo: 15 min/100 °C/giro inverso/vel. cuchara.', 'Añade pescado, gambas y fideos: 5 min/100 °C/giro inverso/vel. cuchara. Sirve con cilantro.']]
    }
  },
  {
    id: 'pt-acorda-alentejana', n: 'Açorda alentejana (sopa de pan, ajo y huevo)', e: '🥖', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['pan_barra', 2], ['ajo', 5], ['cilantro', 2], ['huevo', 4], ['caldo_verduras', 1200], ['aceite', 60], ['sal', 4]],
    m: {
      fuego: [20, ['Machaca los ajos con el cilantro y la sal en un mortero y añade el aceite.', 'Hierve el caldo y escalfa en él los huevos 3–4 min. Sácalos.', 'Pon el majado en una sopera con el pan del día anterior en rebanadas y vierte encima el caldo hirviendo.', 'Coloca un huevo en cada plato y sirve.']]
    }
  },
  {
    id: 'pt-acorda-marisco', n: 'Açorda de gambas', e: '🦐', tipo: 'cena', tags: ['pescado', 'rapida'],
    ing: [['gambas', 500], ['pan_barra', 2], ['ajo', 4], ['cilantro', 1], ['guindilla', 1], ['caldo_pescado', 700], ['huevo', 4], ['aceite', 60], ['sal', 3]],
    m: {
      fuego: [25, ['Remoja el pan troceado en el caldo caliente.', 'Dora el ajo y la guindilla en el aceite y saltea las gambas 2 min. Resérvalas.', 'Añade el pan con el caldo a la sartén y remueve a fuego medio hasta tener una papilla espesa.', 'Fuera del fuego incorpora los huevos, las gambas y el cilantro picado y remueve hasta que cuajen.']]
    }
  },
  {
    id: 'pt-caldeirada', n: 'Caldeirada de pescado', e: '🐟', tipo: 'comida', tags: ['pescado'],
    ing: [['merluza', 500], ['rape', 300], ['calamar', 300], ['patata', 700], ['tomate', 500], ['pimiento_rojo', 150], ['pimiento_verde', 150], ['cebolla', 250], ['ajo', 3], ['vino_blanco', 150], ['laurel', 1], ['pimenton', 3], ['perejil_fresco', 1], ['aceite', 80], ['sal', 7]],
    m: {
      fuego: [50, ['En una cazuela ancha, haz capas de cebolla, pimientos y tomate en rodajas, patata en rodajas y el pescado y el calamar en trozos, salando cada capa.', 'Repite las capas y termina con verduras, ajo laminado, laurel, pimentón y perejil.', 'Riega con el aceite y el vino, tapa y cuece a fuego suave 35 min sin remover, moviendo la cazuela de vez en cuando.']],
      horno: [60, ['Monta las capas en una fuente honda.', 'Riega con aceite y vino y tapa con aluminio.', 'Hornea 45 min a 190 °C.']]
    }
  }
]);

/* ---- Arroces y carnes ---- */
MC_ADD('pt', [
  {
    id: 'pt-arroz-marisco', n: 'Arroz de marisco', e: '🦐', tipo: 'comida', tags: ['pescado'],
    ing: [['arroz', 320], ['gambas', 300], ['mejillones', 500], ['almejas', 300], ['calamar', 250], ['tomate', 300], ['cebolla', 150], ['pimiento_rojo', 100], ['ajo', 3], ['vino_blanco', 100], ['caldo_pescado', 1400], ['cilantro', 1], ['guindilla', 1], ['aceite', 50], ['sal', 4]],
    m: {
      fuego: [45, ['Abre los mejillones y las almejas con el vino en una olla tapada y cuela el líquido sobre el caldo.', 'Sofríe la cebolla, el pimiento, el ajo y la guindilla 6 min. Añade el calamar y el tomate rallado y cocina 5 min.', 'Añade el arroz y el caldo caliente (debe quedar caldoso) y cuece 16 min.', 'Incorpora las gambas y el marisco los últimos 3 min y sirve enseguida con cilantro.']],
      robot: [40, ['Pica cebolla, pimiento y ajo 4 seg/vel. 5 y sofríe con aceite y calamar 6 min/120 °C/giro inverso/vel. cuchara.', 'Añade tomate, arroz y 1,2 l de caldo: 15 min/100 °C/giro inverso/vel. cuchara.', 'Añade gambas y marisco ya abierto: 3 min/100 °C/giro inverso/vel. cuchara. Sirve con cilantro.']]
    }
  },
  {
    id: 'pt-arroz-pato', n: 'Arroz de pato al horno', e: '🦆', tipo: 'comida', tags: ['carne'],
    ing: [['pato_muslos', 1000], ['arroz', 320], ['chorizo', 150], ['bacon', 80], ['cebolla', 150], ['zanahoria', 100], ['laurel', 1], ['naranja', 200], ['sal', 6]],
    m: {
      horno: [100, ['Cuece los muslos de pato (o contramuslos de pollo) con la cebolla, la zanahoria, el laurel, la sal y 1,5 l de agua 45 min. Desmenuza la carne y cuela el caldo.', 'Rehoga el arroz en 2 cucharadas de la grasa del caldo y añade 750 ml del caldo caliente. Cuece 8 min.', 'Pásalo a una fuente, mezcla con la carne y cubre con rodajas de chorizo y bacon.', 'Hornea 20 min a 200 °C hasta que se dore. Sirve con gajos de naranja.']]
    }
  },
  {
    id: 'pt-arroz-polvo', n: 'Arroz de pulpo', e: '🐙', tipo: 'comida', tags: ['pescado'],
    ing: [['pulpo', 600], ['arroz', 320], ['cebolla', 150], ['pimiento_verde', 100], ['tomate', 250], ['ajo', 3], ['vino_tinto', 100], ['caldo_pescado', 1300], ['cilantro', 1], ['laurel', 1], ['aceite', 50], ['sal', 4]],
    m: {
      fuego: [40, ['Sofríe la cebolla, el pimiento y el ajo picados en el aceite 6 min. Añade el tomate rallado y el laurel 4 min.', 'Riega con el vino, añade el caldo y el arroz y cuece 15 min (debe quedar meloso).', 'Añade el pulpo en trozos 3 min antes de terminar y sirve con cilantro.']],
      robot: [35, ['Pica cebolla, pimiento y ajo 4 seg/vel. 5 y sofríe con aceite 6 min/120 °C/vel. 1.', 'Añade tomate, vino, arroz y 1,1 l de caldo: 15 min/100 °C/giro inverso/vel. cuchara.', 'Añade el pulpo: 3 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'pt-arroz-tamboril', n: 'Arroz de rape (arroz de tamboril)', e: '🐟', tipo: 'comida', tags: ['pescado'],
    ing: [['rape', 600], ['gambas', 200], ['arroz', 320], ['tomate', 300], ['cebolla', 150], ['pimiento_rojo', 100], ['ajo', 3], ['vino_blanco', 100], ['caldo_pescado', 1400], ['cilantro', 1], ['aceite', 50], ['sal', 4]],
    m: {
      fuego: [40, ['Sofríe la cebolla, el pimiento y el ajo picados 6 min y añade el tomate rallado 5 min.', 'Riega con el vino, añade el caldo y cuando hierva el arroz. Cuece 10 min.', 'Añade el rape en dados y las gambas y cuece 6 min más, caldoso.', 'Sirve enseguida con cilantro.']],
      robot: [35, ['Pica cebolla, pimiento y ajo 4 seg/vel. 5 y sofríe con aceite 6 min/120 °C/vel. 1.', 'Añade tomate, vino, arroz y 1,2 l de caldo: 10 min/100 °C/giro inverso/vel. cuchara.', 'Añade rape y gambas: 6 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'pt-jurel-arroz-tomate', n: 'Jurel frito con arroz de tomate', e: '🐟', tipo: 'comida', tags: ['pescado'],
    ing: [['jurel', 1000], ['harina', 60], ['limon', 1], ['arroz', 300], ['tomate', 500], ['cebolla', 120], ['ajo', 2], ['laurel', 1], ['cilantro', 1], ['aceite', 40], ['aceite_girasol', 300], ['sal', 7]],
    m: {
      fuego: [45, ['Sofríe la cebolla y el ajo en el aceite de oliva, añade el tomate rallado y el laurel y cocina 8 min.', 'Añade el arroz, 900 ml de agua y sal y cuece 18 min, que quede meloso. Termina con cilantro.', 'Limpia los jureles, sálalos, rocíalos con limón y pásalos por harina.', 'Fríelos en el aceite de girasol 3–4 min por lado y sirve con el arroz.']],
      airfryer: [40, ['Prepara el arroz de tomate en el fuego.', 'Sala los jureles, pásalos por harina y pulverízalos con aceite.', 'Cocínalos 12 min a 200 °C, girándolos a mitad.']]
    }
  },
  {
    id: 'pt-arroz-grelos', n: 'Arroz de grelos con chorizo', e: '🥬', tipo: 'comida', tags: ['carne'],
    ing: [['arroz', 320], ['grelos', 500], ['chorizo', 150], ['cebolla', 120], ['ajo', 3], ['caldo_pollo', 1100], ['aceite', 40], ['sal', 4]],
    m: {
      fuego: [35, ['Dora el chorizo en rodajas en el aceite y resérvalo.', 'Pocha la cebolla y el ajo en esa grasa 5 min y añade los grelos troceados 3 min.', 'Agrega el arroz y el caldo caliente y cuece 17 min, que quede meloso.', 'Sirve con el chorizo por encima.']],
      robot: [32, ['Dora el chorizo en el vaso con aceite 3 min/120 °C/giro inverso/vel. cuchara y resérvalo.', 'Pica cebolla y ajo 3 seg/vel. 5 y sofríe 4 min/120 °C/vel. 1. Añade grelos, arroz y 1 l de caldo: 16 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con el chorizo.']]
    }
  },
  {
    id: 'pt-feijoada', n: 'Feijoada a la transmontana', e: '🫘', tipo: 'comida', tags: ['carne', 'legumbres'],
    ing: [['alubias_rojas', 1000], ['cerdo_costillas', 500], ['chorizo', 150], ['morcilla', 150], ['panceta', 150], ['repollo', 300], ['zanahoria', 150], ['cebolla', 150], ['ajo', 3], ['tomate_concentrado', 20], ['laurel', 1], ['arroz_largo', 250], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [90, ['Cuece las costillas, el chorizo, la morcilla y la panceta en 1,5 l de agua con laurel 45 min. Trocea las carnes y guarda el caldo.', 'Sofríe la cebolla y el ajo en el aceite, añade el concentrado, la zanahoria en rodajas y el repollo en tiras.', 'Añade las alubias, las carnes y 700 ml del caldo y cuece 25 min.', 'Sirve con arroz blanco.']],
      robot: [75, ['Pon las carnes con laurel y 1,2 l de agua: 40 min/100 °C/giro inverso/vel. cuchara. Trocéalas y guarda el caldo.', 'Pica cebolla y ajo 3 seg/vel. 5 y sofríe con aceite 5 min/120 °C/vel. 1.', 'Añade concentrado, zanahoria, repollo, alubias, carnes y 600 ml de caldo: 25 min/100 °C/giro inverso/vel. cuchara. Sirve con arroz.']]
    }
  },
  {
    id: 'pt-porco-alentejana', n: 'Cerdo a la alentejana con almejas', e: '🐖', tipo: 'comida', tags: ['carne', 'pescado'],
    ing: [['cerdo_guisar', 700], ['almejas', 600], ['patata', 600], ['ajo', 4], ['pimenton', 6], ['vino_blanco', 200], ['laurel', 1], ['cilantro', 1], ['limon', 1], ['aceite', 60], ['aceite_girasol', 300], ['sal', 6]],
    m: {
      fuego: [50, ['Marina el cerdo en dados con el vino, el ajo machacado, el pimentón, el laurel y la sal al menos 1 h.', 'Fríe la patata en dados en el aceite de girasol y resérvala.', 'Escurre el cerdo y dóralo en el aceite de oliva 8 min. Añade la marinada y cuece 10 min.', 'Agrega las almejas, tapa hasta que se abran y mezcla con las patatas. Sirve con cilantro y limón.']],
      airfryer: [50, ['Marina el cerdo.', 'Cocina la patata en dados con 1 cucharada de aceite 18 min a 200 °C.', 'Cocina el cerdo y las almejas en una sartén como en la versión tradicional y mezcla con la patata.']]
    }
  },
  {
    id: 'pt-rojoes', n: 'Rojões a la minhota (cerdo al vino con patatas)', e: '🐖', tipo: 'comida', tags: ['carne'],
    ing: [['cerdo_guisar', 900], ['vino_blanco', 300], ['ajo', 5], ['pimenton', 5], ['comino', 2], ['laurel', 2], ['patata', 700], ['limon', 1], ['aceite', 30], ['aceite_girasol', 300], ['sal', 7]],
    m: {
      fuego: [70, ['Marina la carne en dados con el vino, el ajo, el pimentón, el comino, el laurel y la sal 2 h (o la noche anterior).', 'Escurre la carne y dórala en el aceite de oliva a fuego vivo. Añade la marinada y cuece tapado 35 min hasta que se reduzca.', 'Fríe las patatas en dados en el aceite de girasol.', 'Mezcla con la carne y sirve con rodajas de limón.']],
      horno: [75, ['Marina la carne.', 'Ponla en una fuente con la marinada y las patatas en dados con un poco de aceite.', 'Hornea 50 min a 200 °C, removiendo un par de veces.']]
    }
  },
  {
    id: 'pt-bifanas', n: 'Bifanas (bocadillo de lomo en salsa)', e: '🥪', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['cerdo_lomo', 600], ['pan_barra', 2], ['ajo', 4], ['vino_blanco', 150], ['pimenton', 4], ['laurel', 1], ['mostaza', 30], ['aceite', 30], ['sal', 4], ['lechuga', 1]],
    m: {
      fuego: [25, ['Aplana los filetes de lomo y marínalos 15 min con el vino, el ajo picado, el pimentón, el laurel y la sal.', 'Escúrrelos y márcalos en el aceite 1 min por lado.', 'Añade la marinada y cuece 5 min hasta que la salsa reduzca.', 'Rellena los panes con la carne, un poco de salsa y mostaza. Sirve con ensalada.']]
    }
  },
  {
    id: 'pt-prego', n: 'Prego no pão (bocadillo de ternera al ajo)', e: '🥖', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['ternera_filetes', 500], ['pan_barra', 2], ['ajo', 4], ['laurel', 1], ['mantequilla', 20], ['mostaza', 20], ['vino_blanco', 50], ['lechuga', 1], ['tomate', 200], ['aceite', 20], ['sal', 3]],
    m: {
      fuego: [20, ['Machaca los ajos con sal y unta los filetes. Déjalos 10 min con el laurel.', 'Márcalos en una sartén muy caliente con el aceite y la mantequilla 1 min por lado.', 'Desglasa con el vino y reduce 1 min.', 'Mete cada filete en un pan con su jugo y mostaza. Sirve con tomate y lechuga.']]
    }
  },
  {
    id: 'pt-francesinha', n: 'Francesinha', e: '🥪', tipo: 'comida', tags: ['carne'],
    ing: [['pan_molde', 1], ['ternera_filetes', 400], ['salchichas', 300], ['jamon_cocido', 150], ['queso_lonchas', 300], ['huevo', 4], ['tomate_frito', 200], ['cerveza', 330], ['caldo_carne', 200], ['maicena', 15], ['guindilla', 1], ['laurel', 1], ['patata', 600], ['aceite', 30], ['sal', 4]],
    m: {
      horno: [50, ['Para la salsa, cuece el tomate frito con la cerveza, el caldo, la guindilla y el laurel 15 min y espesa con la maicena disuelta.', 'Haz a la plancha los filetes y las salchichas abiertas por la mitad.', 'Monta 4 sándwiches: pan, jamón, filete, salchicha, pan. Cubre cada uno con lonchas de queso.', 'Gratina 6 min a 220 °C, pon encima un huevo frito y baña con la salsa caliente. Sirve con patatas fritas.']]
    }
  },
  {
    id: 'pt-frango-piri', n: 'Pollo piri-piri con patatas', e: '🌶️', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_entero', 1400], ['guindilla', 4], ['ajo', 4], ['limon', 2], ['pimenton', 5], ['vinagre', 20], ['patata', 800], ['lechuga', 1], ['tomate', 300], ['aceite', 60], ['sal', 7]],
    m: {
      horno: [65, ['Tritura la guindilla, el ajo, el zumo de limón, el pimentón, el vinagre, el aceite y la sal para hacer la salsa piri-piri.', 'Unta el pollo con la mitad de la salsa y déjalo 20 min.', 'Hornéalo con las patatas en gajos 50 min a 210 °C, pintándolo con más salsa a mitad.', 'Sirve con ensalada y el resto de la salsa.']],
      airfryer: [50, ['Prepara la salsa y marina el pollo en trozos.', 'Cocina las patatas en gajos 12 min a 200 °C.', 'Añade el pollo y cocina 25 min más a 190 °C, girándolo a mitad. Hazlo en dos tandas si no cabe.']],
      fuego: [50, ['Marina el pollo abierto en mariposa con la salsa.', 'Hazlo en una plancha o parrilla a fuego medio 20 min por lado, pintando con salsa.', 'Sirve con patatas fritas y ensalada.']]
    }
  },
  {
    id: 'pt-espetada', n: 'Espetada (brochetas de ternera al laurel)', e: '🍢', tipo: 'cena', tags: ['carne'],
    ing: [['ternera_filetes', 800], ['ajo', 4], ['laurel', 6], ['sal', 6], ['pimienta', 1], ['pan_barra', 1], ['mantequilla', 30], ['lechuga', 1], ['tomate', 300], ['aceite', 30]],
    m: {
      fuego: [30, ['Corta la carne en dados grandes y frótala con ajo machacado, sal gorda y pimienta.', 'Ensártala en brochetas alternando con hojas de laurel.', 'Hazlas a la plancha muy caliente 8–10 min, girándolas.', 'Sirve con pan tostado con mantequilla y ajo, y ensalada.']],
      airfryer: [25, ['Prepara las brochetas.', 'Úntalas con un poco de aceite.', 'Cocina 10 min a 200 °C, girándolas a mitad.']],
      horno: [30, ['Prepara las brochetas.', 'Ponlas en una bandeja con rejilla.', 'Hornea con el grill 15 min a 230 °C, girándolas a mitad.']]
    }
  },
  {
    id: 'pt-lombo-assado', n: 'Lomo de cerdo asado a la portuguesa', e: '🐖', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['cerdo_lomo', 1000], ['patata', 800], ['cebolla', 200], ['ajo', 5], ['vino_blanco', 200], ['pimenton', 5], ['laurel', 2], ['limon', 1], ['aceite', 50], ['sal', 7]],
    m: {
      horno: [80, ['Unta la carne con una pasta de ajo, pimentón, sal, zumo de limón y aceite y déjala 30 min con el vino y el laurel.', 'Ponla en una fuente con las patatas pequeñas y la cebolla en cuartos.', 'Hornea 1 h a 190 °C, regando con la marinada.', 'Deja reposar 10 min antes de cortar.']],
      airfryer: [55, ['Marina el lomo cortado en dos piezas.', 'Cocina las patatas 15 min a 190 °C.', 'Añade la carne y cocina 25 min más, girándola a mitad.']]
    }
  },
  {
    id: 'pt-pica-pau', n: 'Pica-pau (ternera salteada con pepinillos)', e: '🥩', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['ternera_filetes', 700], ['ajo', 4], ['cerveza', 200], ['mostaza', 20], ['pepinillos', 100], ['aceitunas', 60], ['laurel', 1], ['mantequilla', 30], ['pan_barra', 1], ['sal', 4]],
    m: {
      fuego: [25, ['Corta la carne en dados pequeños y sálala.', 'Dórala a fuego vivo en la mantequilla con el ajo laminado y el laurel 4 min.', 'Añade la cerveza y la mostaza y cuece 5 min.', 'Agrega los pepinillos en rodajas y las aceitunas y sirve con pan para mojar.']]
    }
  },
  {
    id: 'pt-bifes-portuguesa', n: 'Filetes a la portuguesa con jamón y huevo', e: '🥩', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_filetes', 600], ['jamon_lonchas', 80], ['huevo', 4], ['ajo', 4], ['vino_blanco', 100], ['laurel', 1], ['mantequilla', 30], ['patata', 700], ['aceite_girasol', 300], ['sal', 5]],
    m: {
      fuego: [35, ['Unta los filetes con ajo machacado, sal y laurel. Fríe las patatas en rodajas en el aceite de girasol.', 'Marca los filetes en la mantequilla 1 min por lado y resérvalos.', 'Pasa el jamón por la misma sartén, añade el vino y reduce 2 min.', 'Sirve cada filete con jamón, un huevo frito, la salsa y las patatas.']],
      airfryer: [35, ['Cocina las patatas en rodajas con 1 cucharada de aceite 18 min a 200 °C.', 'Haz los filetes y la salsa en la sartén.', 'Sirve con jamón, huevo frito y patatas.']]
    }
  }
]);

/* ---- Pescados, mariscos, legumbres y cenas ---- */
MC_ADD('pt', [
  {
    id: 'pt-frango-estufado', n: 'Pollo estofado con guisantes', e: '🍗', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['pollo_muslos', 1000], ['guisantes', 300], ['zanahoria', 200], ['cebolla', 150], ['tomate', 300], ['ajo', 3], ['vino_blanco', 150], ['laurel', 1], ['pimenton', 3], ['patata', 500], ['aceite', 40], ['sal', 6]],
    m: {
      fuego: [55, ['Dora el pollo salado en el aceite y resérvalo.', 'Sofríe la cebolla y el ajo 5 min, añade el tomate rallado y el pimentón.', 'Vuelve a poner el pollo con el vino, el laurel, la zanahoria y la patata en trozos y 300 ml de agua. Cuece tapado 30 min.', 'Añade los guisantes los últimos 8 min.']],
      robot: [50, ['Dora el pollo en una sartén.', 'Pica cebolla y ajo 3 seg/vel. 5 y sofríe con aceite 5 min/120 °C/vel. 1. Añade tomate y pimentón 3 min/120 °C/vel. 1.', 'Añade pollo, vino, laurel, zanahoria, patata y 200 ml de agua: 30 min/100 °C/giro inverso/vel. cuchara. Añade guisantes: 8 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'pt-ervilhas-ovos', n: 'Guisantes con chorizo y huevos escalfados', e: '🟢', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['guisantes', 800], ['chorizo', 120], ['cebolla', 150], ['ajo', 2], ['tomate', 200], ['cilantro', 1], ['huevo', 4], ['aceite', 30], ['sal', 4]],
    m: {
      fuego: [30, ['Sofríe la cebolla, el ajo y el chorizo en rodajas en el aceite 6 min. Añade el tomate rallado 3 min.', 'Agrega los guisantes y 200 ml de agua y cuece 12 min.', 'Casca los huevos encima, tapa y cocina 5 min hasta que cuajen. Termina con cilantro.']]
    }
  },
  {
    id: 'pt-favas', n: 'Habas a la portuguesa con chorizo', e: '🫛', tipo: 'comida', tags: ['carne', 'legumbres'],
    ing: [['habas', 800], ['chorizo', 120], ['panceta', 100], ['cebolla', 150], ['ajo', 3], ['cilantro', 1], ['vino_blanco', 100], ['laurel', 1], ['aceite', 30], ['sal', 4]],
    m: {
      fuego: [35, ['Dora la panceta y el chorizo en el aceite. Añade la cebolla y el ajo y pocha 6 min.', 'Agrega las habas, el vino, el laurel y 200 ml de agua y cuece tapado 15 min.', 'Termina con cilantro picado.']],
      robot: [30, ['Pica cebolla y ajo 3 seg/vel. 5. Añade aceite, panceta y chorizo: 6 min/120 °C/giro inverso/vel. cuchara.', 'Añade habas, vino, laurel y 150 ml de agua: 15 min/100 °C/giro inverso/vel. cuchara.', 'Termina con cilantro.']]
    }
  },
  {
    id: 'pt-peixinhos-horta', n: 'Peixinhos da horta (judías verdes rebozadas)', e: '🫛', tipo: 'cena', tags: ['vegetariano', 'niños'],
    ing: [['judias_verdes', 600], ['harina', 150], ['huevo', 2], ['leche', 150], ['ajo', 1], ['arroz_largo', 250], ['tomate', 300], ['aceite_girasol', 400], ['sal', 5]],
    m: {
      fuego: [35, ['Cuece el arroz en agua con sal 15 min. Cuece las judías enteras 5 min y escúrrelas bien.', 'Bate la harina con los huevos, la leche, el ajo picado y sal hasta tener una masa fluida.', 'Pasa las judías en grupos de 3 por la masa y fríelas en el aceite caliente hasta que estén doradas.', 'Sirve con el arroz y tomate en rodajas.']],
      airfryer: [35, ['Cuece las judías 5 min y pásalas por la masa de harina y huevo.', 'Pulverízalas con aceite.', 'Cocina 10 min a 200 °C. Sirve con arroz y tomate.']]
    }
  },
  {
    id: 'pt-salada-polvo', n: 'Ensalada de pulpo', e: '🐙', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['pulpo', 500], ['cebolla_morada', 120], ['pimiento_rojo', 150], ['pimiento_verde', 100], ['cilantro', 1], ['ajo', 1], ['vinagre', 30], ['aceite', 60], ['sal', 3], ['patata', 400]],
    m: {
      sin: [15, ['Corta el pulpo cocido en trozos pequeños.', 'Pica la cebolla, los pimientos, el ajo y el cilantro.', 'Mezcla todo con el aceite, el vinagre y la sal y deja reposar 10 min en la nevera.']],
      fuego: [30, ['Cuece las patatas en dados 12 min y enfríalas.', 'Prepara la ensalada de pulpo con las verduras picadas.', 'Mezcla con las patatas y aliña.']]
    }
  },
  {
    id: 'pt-polvo-lagareiro', n: 'Pulpo a lagareiro', e: '🐙', tipo: 'comida', tags: ['pescado'],
    ing: [['pulpo', 800], ['patata', 800], ['ajo', 6], ['perejil_fresco', 1], ['aceite', 150], ['sal', 6]],
    m: {
      horno: [55, ['Asa las patatas pequeñas con piel y sal 35 min a 210 °C y dales un golpe para abrirlas.', 'Pon el pulpo cocido en una fuente con las patatas.', 'Calienta el aceite con los ajos laminados hasta que se doren y viértelo por encima.', 'Hornea 10 min a 220 °C y termina con perejil.']],
      airfryer: [45, ['Cocina las patatas pequeñas con piel 25 min a 200 °C y aplástalas.', 'Añade el pulpo pintado con aceite y cocina 6 min.', 'Riega con el aceite con ajo dorado y perejil.']]
    }
  },
  {
    id: 'pt-lulas-guisadas', n: 'Calamares guisados con patatas', e: '🦑', tipo: 'comida', tags: ['pescado'],
    ing: [['calamar', 800], ['patata', 700], ['cebolla', 200], ['tomate', 300], ['pimiento_verde', 100], ['ajo', 3], ['vino_blanco', 150], ['laurel', 1], ['pimenton', 3], ['perejil_fresco', 1], ['aceite', 50], ['sal', 6]],
    m: {
      fuego: [60, ['Sofríe la cebolla, el pimiento y el ajo en el aceite 8 min. Añade el tomate rallado y el pimentón.', 'Agrega el calamar en anillas, el vino y el laurel y cuece tapado 25 min.', 'Añade la patata en trozos y 300 ml de agua y cuece 20 min más. Termina con perejil.']],
      robot: [55, ['Pica cebolla, pimiento y ajo 4 seg/vel. 5 y sofríe con aceite 7 min/120 °C/vel. 1.', 'Añade tomate, pimentón, calamar, vino y laurel: 25 min/100 °C/giro inverso/vel. cuchara.', 'Añade la patata y 200 ml de agua: 20 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'pt-choco-frito', n: 'Sepia frita a la Setúbal', e: '🦑', tipo: 'cena', tags: ['pescado', 'rapida'],
    ing: [['sepia', 800], ['ajo', 3], ['limon', 2], ['vino_blanco', 50], ['harina', 80], ['patata', 600], ['lechuga', 1], ['aceite_girasol', 400], ['sal', 6]],
    m: {
      fuego: [30, ['Corta la sepia en tiras y marínala 15 min con el ajo, el zumo de limón, el vino y la sal.', 'Fríe las patatas en bastones y resérvalas.', 'Escurre la sepia, pásala por harina y fríela en el aceite caliente 3 min.', 'Sirve con las patatas, ensalada y limón.']],
      airfryer: [30, ['Marina la sepia.', 'Pásala por harina y pulverízala con aceite.', 'Cocina 10 min a 200 °C, removiendo a mitad. Sirve con patatas y ensalada.']]
    }
  },
  {
    id: 'pt-sardinhas-assadas', n: 'Sardinas asadas con ensalada de pimientos', e: '🐟', tipo: 'comida', tags: ['pescado'],
    ing: [['sardinas', 1200], ['pimiento_rojo', 400], ['pimiento_verde', 200], ['cebolla', 100], ['patata', 600], ['ajo', 1], ['vinagre', 20], ['aceite', 60], ['sal', 10], ['pan_barra', 1]],
    m: {
      fuego: [40, ['Asa los pimientos enteros a la plancha o al fuego, pélalos y córtalos en tiras. Aliña con cebolla, ajo, aceite, vinagre y sal.', 'Cuece las patatas con piel 20 min.', 'Sala las sardinas enteras con sal gorda y hazlas a la plancha muy caliente 3–4 min por lado.', 'Sirve sobre rebanadas de pan con las patatas y los pimientos.']],
      horno: [45, ['Asa los pimientos 35 min a 210 °C, pélalos y alíñalos.', 'Hornea las sardinas saladas 12 min a 220 °C con el grill.', 'Sirve con patatas cocidas y pan.']],
      airfryer: [30, ['Asa los pimientos 20 min a 200 °C y alíñalos.', 'Cocina las sardinas saladas 9 min a 200 °C.', 'Sirve con patatas cocidas y pan.']]
    }
  },
  {
    id: 'pt-pescada-cozida', n: 'Merluza cocida con verduras y huevo', e: '🐟', tipo: 'cena', tags: ['pescado', 'ligera'],
    ing: [['merluza', 800], ['patata', 600], ['judias_verdes', 300], ['zanahoria', 200], ['brocoli', 300], ['huevo', 4], ['cebolla', 100], ['laurel', 1], ['vinagre', 20], ['aceite', 60], ['sal', 7]],
    m: {
      fuego: [35, ['Cuece en agua con sal, laurel y la cebolla las patatas y las zanahorias 12 min.', 'Añade las judías, el brócoli y los huevos y cuece 8 min.', 'Añade la merluza y cuece 5 min más a fuego suave.', 'Sirve todo junto aliñado con aceite y vinagre.']],
      robot: [35, ['Pon 1 l de agua con sal y laurel en el vaso, patata y zanahoria dentro y el resto de verduras, huevos y merluza en el recipiente de vapor.', 'Programa 25 min/Varoma/vel. 1.', 'Sirve aliñado con aceite y vinagre.']]
    }
  },
  {
    id: 'pt-ameijoas-bulhao', n: 'Almejas a Bulhão Pato', e: '🐚', tipo: 'cena', tags: ['pescado', 'rapida', 'ligera'],
    ing: [['almejas', 1200], ['ajo', 6], ['cilantro', 2], ['limon', 2], ['vino_blanco', 80], ['aceite', 70], ['pan_barra', 1], ['sal', 2]],
    m: {
      fuego: [20, ['Deja las almejas 30 min en agua con sal para que suelten la arena.', 'Dora el ajo laminado en el aceite, añade las almejas y el vino y tapa.', 'Cuando se abran (3–4 min), añade el cilantro picado y el zumo de limón.', 'Sirve con pan para mojar.']]
    }
  },
  {
    id: 'pt-atum-cebolada', n: 'Atún encebollado a la portuguesa', e: '🐟', tipo: 'comida', tags: ['pescado'],
    ing: [['atun_fresco', 700], ['cebolla', 600], ['ajo', 3], ['tomate', 200], ['vino_blanco', 100], ['laurel', 1], ['pimenton', 3], ['patata', 600], ['aceite', 70], ['sal', 6]],
    m: {
      fuego: [45, ['Cuece las patatas en agua con sal 18 min.', 'Pocha la cebolla en aros y el ajo en el aceite con el laurel 20 min a fuego suave. Añade el tomate y el pimentón.', 'Riega con el vino y coloca los filetes de atún salados encima. Tapa y cocina 6 min.', 'Sirve con las patatas.']],
      robot: [40, ['Sofríe la cebolla en aros y el ajo con aceite y laurel 15 min/120 °C/giro inverso/vel. cuchara.', 'Añade tomate, pimentón y vino: 5 min/100 °C/giro inverso/vel. cuchara.', 'Añade el atún en tacos: 5 min/100 °C/giro inverso/vel. cuchara. Sirve con patatas cocidas.']]
    }
  },
  {
    id: 'pt-massada-peixe', n: 'Massada de pescado (pasta caldosa)', e: '🍝', tipo: 'comida', tags: ['pescado'],
    ing: [['pescado_blanco', 500], ['gambas', 200], ['macarron', 300], ['tomate', 300], ['cebolla', 150], ['pimiento_verde', 100], ['ajo', 2], ['caldo_pescado', 1200], ['cilantro', 1], ['laurel', 1], ['aceite', 40], ['sal', 4]],
    m: {
      fuego: [35, ['Sofríe la cebolla, el pimiento y el ajo en el aceite 6 min. Añade el tomate rallado y el laurel 4 min.', 'Vierte el caldo y, cuando hierva, añade la pasta. Cuece hasta 4 min antes del tiempo del paquete.', 'Añade el pescado en trozos y las gambas y cuece 4 min más, que quede caldoso.', 'Sirve con cilantro picado.']],
      robot: [30, ['Pica cebolla, pimiento y ajo 4 seg/vel. 5 y sofríe con aceite 6 min/120 °C/vel. 1.', 'Añade tomate, laurel, caldo y pasta: tiempo del paquete/100 °C/giro inverso/vel. cuchara.', 'A falta de 4 min añade pescado y gambas.']]
    }
  },
  {
    id: 'pt-salada-feijao', n: 'Ensalada de alubias con atún y huevo', e: '🥗', tipo: 'cena', tags: ['pescado', 'legumbres', 'ligera', 'rapida'],
    ing: [['alubias', 800], ['atun', 3], ['huevo', 4], ['cebolla_morada', 100], ['pimiento_verde', 100], ['tomate', 300], ['perejil_fresco', 1], ['vinagre', 25], ['aceite', 60], ['sal', 4]],
    m: {
      fuego: [20, ['Cuece los huevos 10 min, pélalos y córtalos.', 'Enjuaga y escurre las alubias.', 'Mezcla con el atún, la cebolla, el pimiento y el tomate picados y el perejil.', 'Aliña con aceite, vinagre y sal y corona con el huevo.']],
      sin: [10, ['Usa huevos ya cocidos.', 'Mezcla las alubias escurridas con atún y verduras picadas.', 'Aliña y sirve con el huevo.']]
    }
  },
  {
    id: 'pt-rancho', n: 'Rancho minhoto (garbanzos con pasta y carnes)', e: '🥘', tipo: 'comida', tags: ['carne', 'legumbres'],
    ing: [['garbanzos', 800], ['pollo_muslos', 400], ['chorizo', 120], ['panceta', 120], ['macarron', 150], ['patata', 300], ['repollo', 250], ['cebolla', 150], ['ajo', 2], ['tomate_concentrado', 20], ['pimenton', 3], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [70, ['Cuece el pollo, el chorizo y la panceta en 1,5 l de agua 30 min. Trocea las carnes y guarda el caldo.', 'Sofríe la cebolla y el ajo en el aceite, añade el concentrado y el pimentón.', 'Añade el caldo, la patata en dados y el repollo en tiras y cuece 15 min.', 'Incorpora los garbanzos, la pasta y las carnes y cuece el tiempo de la pasta.']],
      robot: [60, ['Cuece las carnes con 1,2 l de agua: 30 min/100 °C/giro inverso/vel. cuchara. Trocéalas y guarda el caldo.', 'Sofríe cebolla y ajo picados con aceite, concentrado y pimentón 5 min/120 °C/vel. 1.', 'Añade caldo, patata y repollo: 15 min/100 °C/giro inverso/vel. cuchara. Añade garbanzos, pasta y carnes: tiempo de la pasta/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'pt-sopa-cazon', n: 'Sopa de cazón alentejana', e: '🐟', tipo: 'cena', tags: ['pescado'],
    ing: [['cazon', 700], ['ajo', 4], ['cilantro', 2], ['vinagre', 30], ['harina', 15], ['pan_barra', 1], ['laurel', 1], ['aceite', 50], ['sal', 6]],
    m: {
      fuego: [35, ['Cuece el cazón en rodajas en 1,5 l de agua con sal y laurel 10 min. Sácalo y reserva el caldo.', 'Dora el ajo picado en el aceite, añade la harina y remueve 1 min. Vierte el caldo y el vinagre y cuece 5 min.', 'Vuelve a poner el cazón y el cilantro picado.', 'Sirve sobre rebanadas de pan.']],
      robot: [30, ['Pon el cazón, el laurel, sal y 1,2 l de agua: 10 min/100 °C/giro inverso/vel. cuchara. Saca el cazón.', 'En otro recipiente o en el vaso vacío sofríe ajo con aceite y harina 3 min/120 °C/vel. 1; añade el caldo y el vinagre: 5 min/100 °C/vel. 2.', 'Añade el cazón y el cilantro y sirve sobre pan.']]
    }
  },
  {
    id: 'pt-bacalao-broa', n: 'Bacalao con costra de pan de maíz', e: '🐟', tipo: 'comida', tags: ['pescado'],
    ing: [['bacalao', 800], ['pan_rallado', 80], ['harina_maiz', 60], ['ajo', 4], ['perejil_fresco', 1], ['grelos', 400], ['patata', 800], ['aceite', 120], ['sal', 5]],
    m: {
      horno: [55, ['Asa las patatas pequeñas con piel y sal 30 min a 210 °C.', 'Mezcla el pan rallado con la harina de maíz, el ajo y el perejil picados y la mitad del aceite.', 'Cubre los lomos de bacalao con la mezcla y hornéalos 15 min a 200 °C junto a las patatas.', 'Saltea los grelos con el resto del aceite y un ajo y sirve.']],
      airfryer: [45, ['Cocina las patatas 20 min a 200 °C.', 'Cubre el bacalao con la costra y cocínalo 10 min a 180 °C.', 'Sirve con los grelos salteados.']]
    }
  }
]);
