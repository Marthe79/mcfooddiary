/* MC Food Diary · cocina de Reino Unido 🇬🇧. Formato y normas: recetas/GUIA-RECETAS.md */

MC_ADD_ING({
  eglefino_ahumado: ['Eglefino ahumado (haddock)', 'pescaderia', 22, 'kg', 0, 'bacalao desalado con una pizca de pimentón ahumado'],
  cebada_perlada: ['Cebada perlada', 'despensa', 3, 'kg', 0, 'arroz redondo'],
  sidra: ['Sidra natural', 'despensa', 2.5, 'l'],
  ternera_solomillo: ['Solomillo de ternera', 'carniceria', 35, 'kg'],
  lacon: ['Lacón cocido', 'charcuteria', 9, 'kg'],
  caballa: ['Caballa', 'pescaderia', 6, 'kg'],
  levadura_quimica: ['Levadura química (sobre)', 'basicos', 0, 'ud', 1],
  salvia: ['Salvia seca', 'basicos', 0, 'kg', 1],
  nabo: ['Nabo', 'fruteria', 2, 'kg'],
  ciruelas_pasas: ['Ciruelas pasas sin hueso', 'despensa', 7, 'kg']
});

MC_ADD('gb', [
  {
    id: 'pastel-carne', n: 'Pastel de carne y puré', e: '🥧', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['carne_picada', 500], ['patata', 900], ['leche', 150], ['mantequilla', 30], ['cebolla', 150], ['zanahoria', 100], ['tomate_frito', 200], ['queso_rallado', 80], ['aceite', 20], ['sal', 6]],
    m: {
      horno: [60, ['Cuece las patatas y hazlas puré con la leche, la mantequilla y sal.', 'Sofríe cebolla y zanahoria picadas, añade la carne y el tomate y cocina 10 min.', 'Pon la carne en una fuente, cubre con el puré y el queso y gratina 15 min a 210 °C.']],
      airfryer: [50, ['Prepara el puré y el relleno de carne como en la receta de horno.', 'Monta en un molde que quepa en la freidora.', 'Cocina 10 min a 180 °C hasta que se dore.']]
    }
  },
  {
    id: 'gb-fish-chips', n: 'Fish and chips con guisantes', e: '🐟', tipo: 'cena', tags: ['pescado', 'niños'],
    ing: [['merluza', 700], ['harina', 200], ['cerveza', 250], ['levadura_quimica', 1], ['patata', 1000], ['guisantes', 300], ['mantequilla', 20], ['hierbabuena', 1], ['limon', 1], ['aceite_girasol', 800], ['pan_rallado', 80], ['vinagre', 20], ['sal', 8]],
    m: {
      fuego: [45, ['Corta las patatas en bastones gruesos y fríelas a 150 °C 6 min; escúrrelas.', 'Bate la harina con la levadura, la sal y la cerveza fría hasta tener un rebozado espeso.', 'Pasa los lomos por harina y por el rebozado y fríelos a 180 °C 5 min. Vuelve a freír las patatas 3 min a 180 °C.', 'Cuece los guisantes y aplástalos con mantequilla y hierbabuena. Sirve con limón y vinagre.']],
      airfryer: [40, ['Cocina las patatas en bastones con un poco de aceite 20 min a 200 °C.', 'Pasa el pescado por harina, luego por la mezcla espesa de harina y cerveza y por último por pan rallado; pulveriza con aceite.', 'Cocina el pescado 10 min a 200 °C. Sirve con los guisantes aplastados.']]
    }
  },
  {
    id: 'gb-fish-pie', n: 'Fish pie (pastel de pescado con puré)', e: '🥧', tipo: 'comida', tags: ['pescado'],
    ing: [['merluza', 400], ['salmon', 250], ['gambas', 150], ['huevo', 3], ['leche', 700], ['harina', 40], ['mantequilla', 80], ['patata', 1000], ['queso_cheddar', 80], ['perejil_fresco', 1], ['laurel', 1], ['sal', 7]],
    m: {
      horno: [70, ['Cuece el pescado en 500 ml de leche con el laurel 5 min; sácalo en trozos y reserva la leche.', 'Haz una bechamel con 40 g de mantequilla, la harina y esa leche; añade perejil, el pescado, las gambas y los huevos duros en cuartos.', 'Cuece las patatas y hazlas puré con el resto de mantequilla y leche.', 'Pon el pescado en una fuente, cubre con el puré y el queso y hornea 25 min a 200 °C.']],
      robot: [60, ['Cuece el pescado en el Varoma 10 min/Varoma/vel. 1 con las patatas en el vaso con agua.', 'Haz el puré en el vaso con mantequilla y leche; reserva. Haz la bechamel: 500 ml de leche, harina, mantequilla y sal 7 min/90 °C/vel. 4.', 'Monta en una fuente con huevo duro y gratina 20 min a 200 °C.']]
    }
  },
  {
    id: 'gb-steak-ale-pie', n: 'Pastel de ternera y cerveza (steak and ale pie)', e: '🍺', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_guisar', 900], ['cerveza', 330], ['caldo_carne', 300], ['cebolla', 200], ['zanahoria', 150], ['champinon', 200], ['harina', 30], ['salsa_worcestershire', 15], ['tomillo', 1], ['laurel', 2], ['masa_hojaldre', 1], ['huevo', 1], ['aceite', 30], ['sal', 8]],
    m: {
      horno: [150, ['Enharina la ternera en dados y dórala con aceite; añade la cebolla, la zanahoria y los champiñones.', 'Vierte la cerveza, el caldo, la Worcestershire y las hierbas, tapa y cuece 1 h 45 min a fuego suave (o al horno a 160 °C).', 'Deja templar, pásalo a una fuente, cubre con el hojaldre y pinta con huevo.', 'Hornea 30 min a 200 °C.']],
      robot: [120, ['Sofríe cebolla y zanahoria con aceite 5 min/120 °C/vel. 1.', 'Añade ternera enharinada, champiñones, cerveza, caldo, Worcestershire y hierbas: 80 min/100 °C/giro inverso/vel. cuchara.', 'Pasa a una fuente, cubre con hojaldre y hornea 30 min a 200 °C.']]
    }
  },
  {
    id: 'gb-bangers-mash', n: 'Salchichas con puré y salsa de cebolla (bangers and mash)', e: '🌭', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['salchichas', 800], ['patata', 1000], ['leche', 150], ['mantequilla', 50], ['cebolla', 400], ['harina', 20], ['caldo_carne', 400], ['salsa_worcestershire', 10], ['guisantes', 300], ['aceite', 20], ['sal', 7]],
    m: {
      fuego: [40, ['Cuece las patatas 20 min y hazlas puré con la leche y la mantequilla.', 'Dora las salchichas en una sartén con aceite 12 min.', 'En la misma sartén pocha la cebolla en juliana 10 min, añade la harina, el caldo y la Worcestershire y cuece 5 min hasta tener una salsa espesa.', 'Sirve las salchichas sobre el puré con la salsa y guisantes.']],
      horno: [45, ['Hornea las salchichas con la cebolla en juliana 25 min a 200 °C.', 'Prepara el puré.', 'Haz la salsa con la cebolla asada, harina y caldo y sirve.']],
      airfryer: [35, ['Cocina las salchichas 12 min a 190 °C.', 'Prepara el puré y la salsa de cebolla al fuego.', 'Sirve con guisantes.']]
    }
  },
  {
    id: 'gb-toad-in-the-hole', n: 'Toad in the hole (salchichas en masa horneada)', e: '🐸', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['salchichas', 600], ['harina', 140], ['huevo', 4], ['leche', 200], ['aceite_girasol', 40], ['cebolla', 300], ['caldo_carne', 400], ['brocoli', 400], ['sal', 5]],
    m: {
      horno: [50, ['Bate la harina con los huevos, la leche y sal y deja reposar la masa 15 min.', 'Pon el aceite y las salchichas en una fuente y hornéalas 10 min a 220 °C.', 'Vierte la masa sobre las salchichas con el aceite muy caliente y hornea 25 min sin abrir el horno.', 'Sirve con salsa de cebolla (cebolla pochada con caldo) y brócoli.']],
      airfryer: [40, ['Prepara la masa.', 'Dora las salchichas con aceite en un molde 8 min a 200 °C.', 'Vierte la masa y cocina 18 min a 190 °C.']]
    }
  },
  {
    id: 'gb-roast-beef', n: 'Rosbif con pudin de Yorkshire', e: '🥩', tipo: 'comida', tags: ['carne'],
    ing: [['redondo_ternera', 1200], ['patata', 800], ['zanahoria', 300], ['harina', 140], ['huevo', 3], ['leche', 200], ['caldo_carne', 400], ['mostaza', 20], ['romero', 1], ['aceite_girasol', 60], ['sal', 10], ['pimienta', 3]],
    m: {
      horno: [100, ['Unta la carne con mostaza, sal y pimienta y dórala en una sartén.', 'Ásala 40 min a 200 °C (punto rosado) con las patatas y zanahorias en trozos con aceite y romero; deja reposar tapada.', 'Bate harina, huevos, leche y sal; reparte aceite en un molde de magdalenas, caliéntalo 10 min a 230 °C, vierte la masa y hornea 20 min sin abrir.', 'Haz la salsa con los jugos de la bandeja y el caldo y sirve la carne en lonchas.']]
    }
  },
  {
    id: 'gb-lancashire-hotpot', n: 'Lancashire hotpot (cordero con patatas laminadas)', e: '🥘', tipo: 'comida', tags: ['carne'],
    ing: [['cordero', 900], ['cebolla', 400], ['zanahoria', 200], ['patata', 900], ['caldo_carne', 500], ['harina', 30], ['salsa_worcestershire', 15], ['tomillo', 1], ['laurel', 2], ['mantequilla', 40], ['aceite', 30], ['sal', 9]],
    m: {
      horno: [150, ['Enharina el cordero y dóralo con aceite; mézclalo con la cebolla en juliana, la zanahoria y las hierbas en una cazuela apta para horno.', 'Añade el caldo y la Worcestershire.', 'Cubre con las patatas en rodajas finas superpuestas y pinta con mantequilla derretida.', 'Tapa y hornea 1 h 30 min a 170 °C; destapa y dora 30 min a 200 °C.']]
    }
  },
  {
    id: 'gb-scotch-broth', n: 'Scotch broth (sopa escocesa de cordero y cebada)', e: '🥣', tipo: 'comida', tags: ['carne'],
    ing: [['cordero', 500], ['cebada_perlada', 100], ['lentejas_rojas', 50], ['zanahoria', 200], ['puerro', 2], ['cebolla', 150], ['repollo', 200], ['apio', 100], ['perejil_fresco', 1], ['sal', 8], ['pimienta', 2]],
    m: {
      fuego: [100, ['Cuece el cordero en 2 l de agua con sal 30 min, quitando la espuma.', 'Añade la cebada y las lentejas lavadas y cuece 30 min.', 'Agrega todas las verduras en dados pequeños y cuece 30 min más.', 'Desmenuza la carne y sirve con perejil.']],
      robot: [85, ['Pon el cordero, la cebada, las lentejas, sal y 1,5 l de agua: 40 min/100 °C/giro inverso/vel. cuchara.', 'Añade las verduras troceadas: 30 min/100 °C/giro inverso/vel. cuchara.', 'Desmenuza la carne y sirve con perejil.']]
    }
  },
  {
    id: 'gb-cullen-skink', n: 'Cullen skink (sopa de pescado ahumado y patata)', e: '🍲', tipo: 'cena', tags: ['pescado'],
    ing: [['eglefino_ahumado', 500], ['patata', 500], ['cebolla', 200], ['leche', 700], ['nata', 100], ['mantequilla', 30], ['laurel', 1], ['cebolleta', 2], ['sal', 3], ['pimienta', 2]],
    m: {
      fuego: [40, ['Cuece el pescado en la leche con el laurel 6 min; sácalo en lascas y reserva la leche.', 'Pocha la cebolla en la mantequilla 8 min, añade la patata en dados y 300 ml de agua y cuece 15 min.', 'Agrega la leche, aplasta parte de la patata, añade la nata y el pescado y calienta. Sirve con cebolleta.']],
      robot: [35, ['Sofríe la cebolla con mantequilla 5 min/120 °C/vel. 1.', 'Añade patata, 300 ml de agua y laurel y pon el pescado en el Varoma: 15 min/Varoma/vel. 1.', 'Añade leche y nata: 5 min/90 °C/giro inverso/vel. cuchara; incorpora el pescado en lascas.']]
    }
  },
  {
    id: 'gb-kedgeree', n: 'Kedgeree (arroz al curry con pescado ahumado y huevo)', e: '🍛', tipo: 'cena', tags: ['pescado'],
    ing: [['eglefino_ahumado', 400], ['arroz_basmati', 300], ['huevo', 4], ['cebolla', 150], ['mantequilla', 50], ['curry', 6], ['curcuma', 2], ['leche', 300], ['limon', 1], ['perejil_fresco', 1], ['sal', 3]],
    m: {
      fuego: [35, ['Cuece el pescado en la leche 6 min y desmenúzalo. Cuece los huevos 8 min.', 'Pocha la cebolla en la mantequilla, añade el curry y la cúrcuma, luego el arroz y 600 ml de agua; tapa y cuece 12 min.', 'Mezcla el arroz con el pescado y los huevos en cuartos, zumo de limón y perejil.']],
      robot: [35, ['Sofríe la cebolla con mantequilla 5 min/120 °C/vel. 1; añade especias, arroz y 700 ml de agua en el cestillo.', 'Pon el pescado y los huevos en el Varoma: 14 min/Varoma/vel. 4.', 'Mezcla arroz, pescado desmenuzado, huevo, limón y perejil.']]
    }
  },
  {
    id: 'gb-coronation-chicken', n: 'Ensalada de pollo coronación', e: '👑', tipo: 'cena', tags: ['carne', 'ligera', 'rapida'],
    ing: [['pollo_pechuga', 600], ['mayonesa', 100], ['yogur_griego', 2], ['curry', 6], ['orejones', 60], ['pasas', 30], ['almendras', 40], ['cebolleta', 2], ['limon', 1], ['lechuga', 1], ['pan_molde', 1], ['sal', 4]],
    m: {
      fuego: [25, ['Cuece el pollo en agua con sal 15 min y desmenúzalo.', 'Tuesta el curry 30 seg en una sartén seca y mézclalo con la mayonesa, el yogur y el limón.', 'Mezcla con el pollo, los orejones picados, las pasas, la cebolleta y las almendras tostadas. Sirve sobre lechuga o en sándwich.']],
      sin: [15, ['Usa pollo asado ya cocinado desmenuzado.', 'Mézclalo con la salsa de mayonesa, yogur, curry y limón.', 'Añade frutas secas, almendras y cebolleta y sirve con lechuga o pan.']]
    }
  },
  {
    id: 'gb-welsh-rarebit', n: 'Welsh rarebit (tostadas de queso a la cerveza)', e: '🧀', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['pan_molde', 1], ['queso_cheddar', 300], ['cerveza', 100], ['mantequilla', 30], ['harina', 20], ['mostaza', 15], ['salsa_worcestershire', 10], ['huevo', 1], ['tomate', 300], ['lechuga', 1]],
    m: {
      horno: [20, ['Derrite la mantequilla, tuesta la harina 1 min y añade la cerveza removiendo.', 'Fuera del fuego añade el cheddar rallado, la mostaza, la Worcestershire y la yema.', 'Unta generosamente el pan tostado y gratina 4 min con el grill a 230 °C. Sirve con ensalada de tomate.']],
      airfryer: [15, ['Prepara la crema de queso al fuego.', 'Unta el pan tostado.', 'Cocina 4 min a 200 °C.']]
    }
  },
  {
    id: 'gb-cornish-pasty', n: 'Cornish pasties (empanadillas de carne y patata)', e: '🥟', tipo: 'comida', tags: ['carne'],
    ing: [['masa_quebrada', 2], ['ternera_filetes', 400], ['patata', 300], ['nabo', 150], ['cebolla', 150], ['mantequilla', 20], ['huevo', 1], ['pimienta', 3], ['sal', 6]],
    m: {
      horno: [70, ['Corta la ternera, la patata, el nabo y la cebolla en dados pequeños y salpimienta generosamente.', 'Corta la masa en 4 círculos grandes, pon el relleno crudo en una mitad con un trocito de mantequilla y cierra rizando el borde.', 'Pinta con huevo y hornea 15 min a 200 °C y 35 min a 170 °C.']],
      airfryer: [55, ['Forma las empanadillas con el relleno crudo.', 'Pinta con huevo.', 'Cocina 35 min a 170 °C.']]
    }
  },
  {
    id: 'gb-beef-wellington', n: 'Solomillo Wellington', e: '🥩', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_solomillo', 900], ['champinon', 500], ['jamon_cocido', 120], ['chalota', 100], ['masa_hojaldre', 1], ['mostaza', 20], ['huevo', 1], ['tomillo', 1], ['mantequilla', 30], ['patata', 600], ['judias_verdes', 300], ['sal', 8], ['pimienta', 3]],
    m: {
      horno: [90, ['Sella el solomillo salpimentado en una sartén muy caliente 1 min por cada lado y úntalo con mostaza.', 'Pica los champiñones y la chalota muy finos y cocínalos con mantequilla y tomillo hasta que no quede líquido.', 'Extiende el jamón sobre film, cubre con los champiñones, pon la carne y enrolla apretando; enfría 15 min. Envuélvelo en hojaldre y pinta con huevo.', 'Hornea 30 min a 210 °C, reposa 10 min y sirve con patatas asadas y judías.']]
    }
  },
  {
    id: 'gb-bubble-squeak', n: 'Bubble and squeak con huevo', e: '🥬', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['patata', 800], ['repollo', 400], ['cebolla', 150], ['coles_bruselas', 200], ['mantequilla', 40], ['huevo', 4], ['sal', 6], ['pimienta', 2]],
    m: {
      fuego: [35, ['Cuece las patatas 20 min y aplástalas; cuece el repollo y las coles troceados 6 min.', 'Pocha la cebolla en la mantequilla, añade el puré y las verduras, salpimienta y aplana en la sartén.', 'Dora a fuego medio 6 min por lado hasta tener costra. Sirve con huevos fritos o escalfados.']],
      airfryer: [35, ['Mezcla el puré con las verduras cocidas y la cebolla pochada y forma tortas.', 'Pincela con mantequilla y cocina 14 min a 200 °C.', 'Sirve con huevos.']]
    }
  },
  {
    id: 'gb-cauliflower-cheese', n: 'Coliflor gratinada con cheddar', e: '🥦', tipo: 'ambos', tags: ['vegetariano', 'niños'],
    ing: [['coliflor', 1200], ['leche', 600], ['harina', 40], ['mantequilla', 40], ['queso_cheddar', 200], ['mostaza', 10], ['nuez_moscada', 1], ['pan_rallado', 30], ['sal', 6]],
    m: {
      horno: [45, ['Cuece la coliflor en ramilletes 6 min y escúrrela bien.', 'Haz una bechamel con mantequilla, harina y leche; añade la mayor parte del cheddar, la mostaza, la nuez moscada y sal.', 'Cubre la coliflor con la salsa, el resto del queso y el pan rallado y gratina 20 min a 200 °C.']],
      robot: [40, ['Cuece la coliflor en el Varoma 15 min/Varoma/vel. 1 con 500 ml de agua.', 'Vacía el vaso y prepara la salsa: leche, harina, mantequilla, nuez moscada y sal 7 min/90 °C/vel. 4; añade queso y mostaza.', 'Monta en una fuente y gratina 12 min a 220 °C.']]
    }
  },
  {
    id: 'gb-guiso-dumplings', n: 'Guiso de ternera con dumplings', e: '🍲', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_guisar', 800], ['cebolla', 200], ['zanahoria', 300], ['nabo', 200], ['caldo_carne', 800], ['tomate_concentrado', 20], ['salsa_worcestershire', 15], ['harina', 230], ['mantequilla', 80], ['levadura_quimica', 1], ['tomillo', 1], ['perejil_fresco', 1], ['aceite', 30], ['sal', 9]],
    m: {
      fuego: [140, ['Enharina la ternera con 30 g de harina y dórala; añade cebolla, zanahoria y nabo.', 'Vierte caldo, concentrado, Worcestershire y tomillo, tapa y cuece 1 h 45 min.', 'Mezcla 200 g de harina con la levadura, sal, perejil, la mantequilla fría rallada y agua hasta formar una masa; haz 8 bolas.', 'Ponlas sobre el guiso, tapa y cuece 20 min sin destapar.']],
      horno: [160, ['Prepara el guiso en una cazuela apta para horno y hornéalo tapado 2 h a 160 °C.', 'Prepara las bolas de masa.', 'Ponlas encima y hornea 25 min destapado a 190 °C.']]
    }
  },
  {
    id: 'gb-pastel-pollo-puerro', n: 'Pastel de pollo, puerro y champiñones', e: '🥧', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_muslos', 700], ['puerro', 3], ['champinon', 250], ['bacon', 100], ['caldo_pollo', 300], ['nata', 150], ['harina', 30], ['mantequilla', 30], ['mostaza', 10], ['tomillo', 1], ['masa_hojaldre', 1], ['huevo', 1], ['sal', 6]],
    m: {
      horno: [65, ['Dora el pollo en dados con la mantequilla y el bacon; añade los puerros en rodajas y los champiñones 6 min.', 'Espolvorea la harina, vierte el caldo y la nata con la mostaza y el tomillo y cuece 10 min.', 'Pasa a una fuente, cubre con hojaldre, pinta con huevo y hornea 25 min a 200 °C.']],
      airfryer: [55, ['Prepara el relleno al fuego.', 'Reparte en cazuelitas, cubre con hojaldre y pinta con huevo.', 'Cocina 12 min a 180 °C.']]
    }
  },
  {
    id: 'gb-cordero-menta', n: 'Pierna de cordero asada con salsa de menta', e: '🌿', tipo: 'comida', tags: ['carne'],
    ing: [['cordero', 1500], ['ajo', 6], ['romero', 2], ['patata', 900], ['zanahoria', 300], ['guisantes', 300], ['hierbabuena', 2], ['vinagre', 40], ['azucar', 15], ['aceite', 40], ['sal', 10], ['pimienta', 3]],
    m: {
      horno: [110, ['Haz cortes en la pierna (o paletilla) e introduce láminas de ajo y romero; unta con aceite, sal y pimienta.', 'Ásala sobre las patatas y zanahorias en trozos 1 h 30 min a 180 °C, regando con el jugo.', 'Pica la hierbabuena muy fina con el azúcar, añade el vinagre y 2 cucharadas de agua caliente.', 'Sirve el cordero con las verduras, guisantes cocidos y la salsa de menta.']],
      airfryer: [60, ['Unta el cordero troceado con ajo, romero, aceite y sal.', 'Cocina 40 min a 170 °C con las patatas, girando a mitad.', 'Sirve con guisantes y salsa de menta.']]
    }
  },
  {
    id: 'gb-cerdo-manzana-sidra', n: 'Chuletas de cerdo con manzana y sidra', e: '🍎', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['chuletas_cerdo', 800], ['manzana', 400], ['cebolla', 150], ['sidra', 250], ['nata', 100], ['mostaza', 15], ['salvia', 1], ['mantequilla', 30], ['patata', 600], ['sal', 7]],
    m: {
      fuego: [30, ['Cuece las patatas en rodajas 12 min. Dora las chuletas salpimentadas en la mantequilla 3 min por lado y resérvalas.', 'En la misma sartén dora la cebolla y la manzana en gajos 5 min.', 'Añade la sidra y redúcela a la mitad; agrega la nata, la mostaza y la salvia.', 'Vuelve las chuletas 4 min y sirve con las patatas.']],
      horno: [35, ['Coloca chuletas, manzana y cebolla en una fuente.', 'Mezcla sidra, mostaza y salvia, vierte por encima y hornea 20 min a 200 °C.', 'Añade la nata los últimos 5 min. Sirve con patatas.']]
    }
  },
  {
    id: 'gb-salmon-hojaldre', n: 'Salmón en hojaldre con espinacas', e: '🐟', tipo: 'comida', tags: ['pescado'],
    ing: [['salmon', 700], ['masa_hojaldre', 1], ['espinacas', 300], ['queso_crema', 120], ['limon', 1], ['eneldo', 1], ['huevo', 1], ['lechuga', 1], ['sal', 6]],
    m: {
      horno: [45, ['Saltea las espinacas hasta que se reduzcan, escúrrelas bien y mézclalas con el queso crema, ralladura de limón, eneldo y sal.', 'Extiende el hojaldre, pon la mitad de la crema, el salmón salpimentado y el resto de crema; envuelve y sella.', 'Pinta con huevo y hornea 30 min a 200 °C. Sirve en rodajas con ensalada.']]
    }
  },
  {
    id: 'gb-fishcakes', n: 'Fishcakes (pastelitos de pescado y patata)', e: '🐟', tipo: 'cena', tags: ['pescado', 'niños'],
    ing: [['merluza', 400], ['salmon', 200], ['patata', 600], ['huevo', 2], ['harina', 40], ['pan_rallado', 100], ['perejil_fresco', 1], ['limon', 1], ['mayonesa', 60], ['pepinillos', 40], ['alcaparras', 15], ['aceite', 40], ['sal', 6]],
    m: {
      fuego: [45, ['Cuece las patatas y hazlas puré; cuece el pescado 5 min y desmenúzalo.', 'Mezcla con perejil, ralladura de limón y sal y forma 8 pastelitos.', 'Pásalos por harina, huevo y pan rallado y dóralos con aceite 4 min por lado.', 'Sirve con mayonesa mezclada con pepinillos y alcaparras picados.']],
      airfryer: [40, ['Prepara y empana los pastelitos.', 'Pulverízalos con aceite y cocina 12 min a 200 °C, girándolos a mitad.', 'Sirve con la salsa tártara.']],
      horno: [45, ['Prepara y empana los pastelitos y colócalos en una bandeja con aceite.', 'Hornea 20 min a 210 °C, girándolos a mitad.', 'Sirve con la salsa tártara.']]
    }
  },
  {
    id: 'gb-scotch-eggs', n: 'Scotch eggs con ensalada', e: '🥚', tipo: 'cena', tags: ['carne'],
    ing: [['huevo', 6], ['salchichas', 400], ['harina', 40], ['pan_rallado', 100], ['mostaza', 15], ['salvia', 1], ['aceite_girasol', 500], ['lechuga', 1], ['tomate', 300], ['sal', 3]],
    m: {
      fuego: [40, ['Cuece 4 huevos 6 min, enfríalos en agua con hielo y pélalos.', 'Saca la carne de las salchichas, mézclala con mostaza y salvia y envuelve cada huevo enharinado con una capa fina.', 'Pásalos por los otros 2 huevos batidos y pan rallado y fríelos a 170 °C 7 min. Sirve con ensalada.']],
      airfryer: [35, ['Prepara y empana los huevos.', 'Pulverízalos con aceite.', 'Cocina 14 min a 190 °C, girándolos a mitad.']],
      horno: [40, ['Prepara y empana los huevos.', 'Colócalos en una bandeja y riega con aceite.', 'Hornea 22 min a 200 °C.']]
    }
  },
  {
    id: 'gb-mince-tatties', n: 'Mince and tatties (carne picada guisada con patatas)', e: '🥔', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['carne_picada_ternera', 600], ['cebolla', 150], ['zanahoria', 200], ['nabo', 150], ['caldo_carne', 400], ['salsa_worcestershire', 15], ['harina', 15], ['guisantes', 150], ['patata', 900], ['mantequilla', 30], ['aceite', 20], ['sal', 8]],
    m: {
      fuego: [50, ['Dora la carne con aceite, añade la cebolla, la zanahoria y el nabo picados 5 min.', 'Espolvorea la harina, vierte el caldo y la Worcestershire, tapa y cuece 30 min; añade los guisantes los últimos 5 min.', 'Cuece las patatas y aplástalas con mantequilla. Sirve juntos.']],
      robot: [45, ['Sofríe cebolla, zanahoria y nabo con aceite 5 min/120 °C/vel. 1.', 'Añade carne, harina, caldo y Worcestershire y pon las patatas en el Varoma: 30 min/Varoma/giro inverso/vel. cuchara.', 'Añade guisantes 5 min/100 °C/giro inverso/vel. cuchara. Aplasta las patatas con mantequilla.']]
    }
  },
  {
    id: 'gb-cawl', n: 'Cawl (guiso galés de cordero y puerro)', e: '🥣', tipo: 'comida', tags: ['carne'],
    ing: [['cordero', 800], ['puerro', 3], ['patata', 500], ['zanahoria', 250], ['nabo', 200], ['cebolla', 150], ['caldo_carne', 1200], ['perejil_fresco', 1], ['tomillo', 1], ['pan_barra', 1], ['queso_cheddar', 100], ['sal', 8]],
    m: {
      fuego: [120, ['Cuece el cordero en el caldo con la cebolla y el tomillo 1 h, quitando la espuma.', 'Añade las patatas, la zanahoria y el nabo en trozos y cuece 30 min.', 'Agrega los puerros en rodajas los últimos 15 min.', 'Sirve con perejil, pan y cheddar.']],
      robot: [100, ['Pon cordero, cebolla, tomillo, sal y 1 l de caldo: 55 min/100 °C/giro inverso/vel. cuchara.', 'Añade patata, zanahoria, nabo y puerro: 30 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con perejil, pan y cheddar.']]
    }
  },
  {
    id: 'gb-glamorgan', n: 'Salchichas vegetarianas de Glamorgan', e: '🧀', tipo: 'cena', tags: ['vegetariano', 'niños'],
    ing: [['queso_cheddar', 200], ['puerro', 1], ['pan_rallado', 180], ['huevo', 3], ['mostaza', 10], ['perejil_fresco', 1], ['tomillo', 1], ['mantequilla', 20], ['aceite', 40], ['tomate', 300], ['patata', 600], ['sal', 5]],
    m: {
      fuego: [40, ['Pocha el puerro picado fino en la mantequilla 6 min.', 'Mezcla con el queso rallado, 140 g de pan rallado, perejil, tomillo, mostaza, 2 huevos y sal; forma 8 salchichas y enfría 15 min.', 'Pásalas por el huevo restante batido y el resto del pan rallado y dóralas con aceite 8 min. Sirve con puré o patatas y tomate.']],
      airfryer: [35, ['Prepara y empana las salchichas.', 'Pulverízalas con aceite.', 'Cocina 10 min a 190 °C, girándolas.']],
      horno: [40, ['Prepara y empana las salchichas y colócalas en una bandeja con aceite.', 'Hornea 18 min a 200 °C.', 'Sirve con patatas y tomate.']]
    }
  },
  {
    id: 'gb-pan-haggerty', n: 'Pan haggerty (gratinado de patata, cebolla y queso)', e: '🥔', tipo: 'comida', tags: ['vegetariano'],
    ing: [['patata', 1000], ['cebolla', 400], ['queso_cheddar', 200], ['mantequilla', 50], ['caldo_verduras', 200], ['tomillo', 1], ['lechuga', 1], ['sal', 7], ['pimienta', 2]],
    m: {
      horno: [70, ['Corta las patatas y la cebolla en rodajas muy finas.', 'Alterna capas en una fuente con mantequilla, queso, tomillo, sal y pimienta, terminando con queso.', 'Vierte el caldo, tapa y hornea 40 min a 190 °C; destapa y dora 15 min. Sirve con ensalada.']],
      fuego: [50, ['Dora la cebolla en la mantequilla en una sartén honda apta para horno.', 'Alterna capas de patata, cebolla y queso, añade el caldo, tapa y cuece 30 min a fuego suave.', 'Gratina 5 min con el grill o dale la vuelta como una tortilla.']]
    }
  },
  {
    id: 'gb-balti-pollo', n: 'Balti de pollo', e: '🍛', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_muslos', 800], ['cebolla', 200], ['pimiento_verde', 150], ['tomate', 400], ['ajo', 3], ['jengibre', 20], ['garam_masala', 5], ['curry', 6], ['comino', 2], ['cilantro', 1], ['aceite', 40], ['pan_naan', 4], ['sal', 7]],
    m: {
      fuego: [40, ['Sofríe la cebolla, el ajo y el jengibre picados con aceite 6 min; añade las especias 1 min.', 'Agrega el pollo en dados y dóralo 5 min.', 'Añade el tomate picado y el pimiento en trozos y cuece a fuego vivo 15 min, hasta que la salsa quede espesa.', 'Termina con cilantro y sirve con naan.']],
      robot: [35, ['Sofríe cebolla, ajo y jengibre con aceite 6 min/120 °C/vel. 1; añade especias 1 min.', 'Añade pollo, tomate, pimiento y sal: 18 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con cilantro y naan.']]
    }
  },
  {
    id: 'gb-pastel-queso-cebolla', n: 'Pastel de queso y cebolla', e: '🧅', tipo: 'comida', tags: ['vegetariano'],
    ing: [['masa_quebrada', 2], ['cebolla', 500], ['patata', 400], ['queso_cheddar', 250], ['mostaza', 15], ['huevo', 1], ['mantequilla', 30], ['lechuga', 1], ['sal', 6]],
    m: {
      horno: [70, ['Cuece la patata en dados 10 min. Pocha la cebolla en la mantequilla 15 min.', 'Mezcla la cebolla, la patata, el queso rallado, la mostaza y sal.', 'Forra un molde con una masa, rellena, tapa con la otra y pinta con huevo.', 'Hornea 35 min a 190 °C. Sirve con ensalada.']]
    }
  },
  {
    id: 'gb-caballa-remolacha', n: 'Caballa a la plancha con patata y remolacha', e: '🐟', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['caballa', 800], ['patata', 600], ['remolacha', 300], ['rucula', 80], ['yogur_griego', 2], ['mostaza', 10], ['limon', 1], ['eneldo', 1], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [30, ['Cuece las patatas pequeñas 15 min y córtalas en mitades.', 'Haz los filetes de caballa con la piel hacia abajo en la plancha 3 min y 1 min por el otro lado.', 'Mezcla el yogur con mostaza, limón y eneldo.', 'Sirve la caballa con patata, remolacha en dados, rúcula y la salsa.']],
      airfryer: [25, ['Cocina las patatas en mitades 15 min a 200 °C.', 'Cocina la caballa 7 min a 200 °C.', 'Sirve con remolacha, rúcula y salsa de yogur.']]
    }
  },
  {
    id: 'gb-guiso-salchichas-alubias', n: 'Guiso de salchichas con alubias', e: '🫘', tipo: 'comida', tags: ['carne', 'legumbres', 'niños'],
    ing: [['salchichas', 600], ['alubias', 800], ['cebolla', 150], ['zanahoria', 150], ['pimiento_rojo', 150], ['tomate_triturado', 400], ['caldo_carne', 200], ['pimenton', 4], ['salsa_worcestershire', 10], ['tomillo', 1], ['aceite', 20], ['sal', 4]],
    m: {
      fuego: [45, ['Dora las salchichas con aceite y resérvalas.', 'Sofríe cebolla, zanahoria y pimiento 6 min; añade pimentón, tomate, caldo, Worcestershire y tomillo.', 'Vuelve las salchichas en trozos y las alubias y cuece 20 min.']],
      horno: [50, ['Dora las salchichas 10 min a 200 °C.', 'Mezcla en una fuente con el resto de ingredientes.', 'Hornea tapado 30 min a 190 °C.']],
      robot: [40, ['Sofríe las verduras con aceite 6 min/120 °C/vel. 1.', 'Añade salchichas en trozos, tomate, caldo y especias: 15 min/100 °C/giro inverso/vel. cuchara.', 'Añade las alubias: 8 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'gb-palitos-pescado', n: 'Palitos de pescado caseros con guisantes', e: '🐠', tipo: 'cena', tags: ['pescado', 'niños', 'rapida'],
    ing: [['merluza', 600], ['harina', 50], ['huevo', 2], ['pan_rallado', 120], ['guisantes', 400], ['patata', 600], ['mantequilla', 20], ['ketchup', 60], ['aceite', 40], ['sal', 6]],
    m: {
      fuego: [30, ['Corta la merluza en bastones y sálala.', 'Pásalos por harina, huevo y pan rallado y dóralos con aceite 2 min por lado.', 'Sirve con guisantes cocidos con mantequilla, puré o patatas y kétchup.']],
      airfryer: [25, ['Empana los bastones y pulverízalos con aceite.', 'Cocina 10 min a 200 °C, girándolos a mitad.', 'Sirve con guisantes y patatas.']],
      horno: [30, ['Empana los bastones y colócalos en una bandeja con aceite.', 'Hornea 15 min a 210 °C.', 'Sirve con guisantes y patatas.']]
    }
  },
  {
    id: 'gb-cock-a-leekie', n: 'Cock-a-leekie (sopa escocesa de pollo y puerro)', e: '🥣', tipo: 'cena', tags: ['carne', 'ligera'],
    ing: [['pollo_muslos', 700], ['puerro', 4], ['zanahoria', 150], ['arroz', 60], ['ciruelas_pasas', 80], ['caldo_pollo', 1500], ['laurel', 2], ['tomillo', 1], ['perejil_fresco', 1], ['sal', 6]],
    m: {
      fuego: [60, ['Cuece el pollo en el caldo con laurel y tomillo 30 min; desmenúzalo.', 'Añade al caldo los puerros en rodajas, la zanahoria y el arroz y cuece 15 min.', 'Devuelve el pollo con las ciruelas en trozos y cuece 5 min. Sirve con perejil.']],
      robot: [55, ['Pon pollo, caldo, laurel y tomillo: 30 min/100 °C/giro inverso/vel. cuchara. Desmenuza el pollo.', 'Añade puerro, zanahoria y arroz: 15 min/100 °C/giro inverso/vel. cuchara.', 'Añade pollo y ciruelas: 5 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'gb-lacon-salsa-perejil', n: 'Lacón con salsa de perejil y patatas', e: '🍖', tipo: 'comida', tags: ['carne'],
    ing: [['lacon', 800], ['patata', 800], ['repollo', 400], ['leche', 500], ['harina', 35], ['mantequilla', 40], ['perejil_fresco', 2], ['mostaza', 15], ['sal', 4]],
    m: {
      fuego: [40, ['Cuece las patatas y el repollo en trozos 18 min.', 'Calienta el lacón en lonchas gruesas en una sartén 2 min por lado.', 'Haz una bechamel ligera con la mantequilla, la harina y la leche y añade mucho perejil picado.', 'Sirve el lacón con la salsa, las patatas, el repollo y mostaza.']],
      robot: [35, ['Cuece patatas y repollo en el Varoma 25 min/Varoma/vel. 1 con 600 ml de agua.', 'Vacía el vaso y haz la salsa: leche, harina, mantequilla y sal 7 min/90 °C/vel. 4; añade perejil.', 'Sirve con el lacón templado.']]
    }
  },
  {
    id: 'gb-desayuno-ingles', n: 'Desayuno inglés completo para cenar', e: '🍳', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['salchichas', 400], ['bacon', 200], ['huevo', 4], ['alubias', 400], ['tomate_frito', 150], ['champinon', 250], ['tomate', 300], ['pan_molde', 1], ['morcilla', 150], ['mantequilla', 20], ['aceite', 20], ['sal', 3]],
    m: {
      fuego: [30, ['Dora las salchichas 12 min y, en la misma sartén, el bacon y la morcilla en rodajas.', 'Saltea los champiñones con mantequilla y marca los tomates partidos.', 'Calienta las alubias con el tomate frito 5 min.', 'Fríe los huevos y sirve todo con pan tostado.']],
      airfryer: [25, ['Cocina las salchichas 8 min a 190 °C; añade bacon, morcilla, champiñones y tomate 6 min más.', 'Calienta las alubias con tomate.', 'Sirve con huevos fritos y tostadas.']],
      horno: [35, ['Hornea las salchichas 10 min a 200 °C; añade bacon, morcilla, champiñones y tomates 12 min más.', 'Calienta las alubias con tomate y fríe los huevos.', 'Sirve con tostadas.']]
    }
  },
  {
    id: 'gb-ploughmans', n: "Plato ploughman's (queso, jamón y encurtidos)", e: '🧀', tipo: 'cena', tags: ['rapida', 'carne'],
    ing: [['queso_cheddar', 250], ['jamon_cocido', 200], ['huevo', 4], ['manzana', 300], ['pepinillos', 100], ['cebolla_morada', 100], ['tomate_cherry', 200], ['lechuga', 1], ['pan_barra', 1], ['mantequilla', 40], ['mostaza', 20]],
    m: {
      sin: [15, ['Corta el cheddar en tacos y la manzana en gajos.', 'Coloca en tablas el queso, el jamón, la manzana, los pepinillos, la cebolla en aros, los tomates y la lechuga.', 'Sirve con pan, mantequilla y mostaza.']],
      fuego: [20, ['Cuece los huevos 10 min y pártelos.', 'Monta las tablas con queso, jamón, manzana, encurtidos y verduras.', 'Sirve con pan, mantequilla y mostaza.']]
    }
  },
  {
    id: 'gb-sopa-lentejas-bacon', n: 'Sopa de lentejas y bacon', e: '🥓', tipo: 'cena', tags: ['legumbres', 'carne'],
    ing: [['lentejas_rojas', 250], ['bacon', 150], ['cebolla', 150], ['zanahoria', 250], ['apio', 100], ['caldo_pollo', 1400], ['tomate_triturado', 200], ['tomillo', 1], ['laurel', 1], ['aceite', 15], ['sal', 4]],
    m: {
      fuego: [40, ['Dora el bacon picado con el aceite; añade la cebolla, la zanahoria y el apio picados 6 min.', 'Agrega las lentejas, el tomate, el caldo y las hierbas y cuece 25 min.', 'Tritura la mitad y mezcla.']],
      robot: [35, ['Sofríe el bacon y las verduras 6 min/120 °C/vel. 1.', 'Añade lentejas, tomate, caldo y hierbas: 25 min/100 °C/vel. 1.', 'Tritura 10 seg/vel. 5 para dejarla con tropezones.']]
    }
  }
]);
