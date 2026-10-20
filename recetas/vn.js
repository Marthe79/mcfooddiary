/* MC Food Diary · cocina de Vietnam 🇻🇳. Formato y normas: recetas/GUIA-RECETAS.md */

MC_ADD_ING({
  hierba_limon: ['Hierba limón (citronela)', 'fruteria', 0.8, 'ud', 0, 'ralladura de 1 lima por tallo'],
  guindilla_fresca: ['Guindilla fresca', 'fruteria', 10, 'kg'],
  arroz_jazmin: ['Arroz jazmín', 'despensa', 3, 'kg'],
  cerdo_picado: ['Carne picada de cerdo', 'carniceria', 6.5, 'kg'],
  harina_arroz: ['Harina de arroz', 'despensa', 3.5, 'kg'],
  pomelo: ['Pomelo', 'fruteria', 2, 'kg']
});

MC_ADD('vn', [
  {
    id: 'pho', n: 'Pho de ternera', e: '🍜', tipo: 'cena', tags: ['carne', 'ligera'],
    ing: [['fideos_arroz', 250], ['ternera_filetes', 350], ['caldo_carne', 1500], ['cebolla', 150], ['jengibre', 30], ['salsa_pescado', 30], ['lima', 2], ['cilantro', 1], ['cebolleta', 2], ['azucar', 5]],
    m: {
      fuego: [35, ['Tuesta la cebolla partida y el jengibre en láminas en una sartén sin aceite hasta que se doren.', 'Cuécelos en el caldo con la salsa de pescado y el azúcar 20 min. Cuela.', 'Hidrata los fideos en agua caliente y repártelos en cuencos con la ternera cruda en láminas muy finas.', 'Vierte el caldo hirviendo encima (cocina la carne) y sirve con cilantro, cebolleta y lima.']]
    }
  },
  {
    id: 'rollitos-frescos', n: 'Rollitos frescos de gambas', e: '🥬', tipo: 'cena', tags: ['pescado', 'ligera'],
    ing: [['papel_arroz', 1], ['fideos_arroz', 100], ['gambas', 300], ['lechuga', 1], ['zanahoria', 150], ['pepino', 200], ['cilantro', 1], ['salsa_soja', 40], ['lima', 1], ['miel', 10], ['cacahuetes', 30]],
    m: {
      sin: [30, ['Hidrata los fideos en agua caliente y escúrrelos. Usa gambas ya cocidas (o cuécelas 2 min).', 'Corta zanahoria y pepino en bastones finos.', 'Moja cada oblea 5 segundos en agua templada y rellénala con lechuga, fideos, verduras, gambas y cilantro. Enróllala apretando.', 'Sirve con una salsa de soja, lima, miel y cacahuetes picados.']]
    }
  },
  {
    id: 'bun-cerdo', n: 'Ensalada de fideos con cerdo (bún)', e: '🥗', tipo: 'comida', tags: ['carne', 'ligera'],
    ing: [['fideos_arroz', 250], ['cerdo_lomo', 450], ['lechuga', 1], ['zanahoria', 150], ['pepino', 200], ['cacahuetes', 50], ['cilantro', 1], ['salsa_pescado', 40], ['azucar', 25], ['lima', 2], ['ajo', 2], ['aceite', 15]],
    m: {
      fuego: [25, ['Marina el cerdo en tiras con ajo, un poco de salsa de pescado y azúcar.', 'Hazlo a la plancha muy caliente 4 min.', 'Hidrata los fideos y monta los cuencos con lechuga, zanahoria y pepino en tiras, fideos y cerdo.', 'Aliña con salsa de pescado, azúcar, lima y agua, y termina con cacahuetes y cilantro.']],
      airfryer: [25, ['Marina el cerdo y cocínalo 10 min a 200 °C.', 'Monta los cuencos y aliña como en la receta tradicional.']]
    }
  },
  {
    id: 'vn-pho-ga', n: 'Pho ga (sopa de fideos con pollo)', e: '🍜', tipo: 'cena', tags: ['carne', 'ligera'],
    ing: [['fideos_arroz', 250], ['pollo_muslos', 600], ['caldo_pollo', 1500], ['cebolla', 150], ['jengibre', 40], ['canela', 1], ['clavo', 3], ['cilantro_molido', 2], ['salsa_pescado', 35], ['azucar', 5], ['brotes_soja', 150], ['cebolleta', 2], ['cilantro', 1], ['lima', 2]],
    m: {
      fuego: [50, ['Tuesta la cebolla partida y el jengibre en láminas en una sartén sin aceite hasta que se doren. Tuesta también la canela, el clavo y el cilantro molido 1 min.', 'Cuece el pollo en el caldo con la cebolla, el jengibre y las especias 30 min a fuego suave. Saca el pollo, desmenúzalo y cuela el caldo.', 'Sazona con salsa de pescado y azúcar. Hidrata los fideos en agua caliente.', 'Reparte fideos y pollo en cuencos, vierte el caldo hirviendo y sirve con brotes de soja, cebolleta, cilantro y lima.']],
      robot: [45, ['Pon caldo, pollo, cebolla y jengibre tostados y especias: 30 min/100 °C/giro inverso/vel. cuchara.', 'Saca el pollo, desmenúzalo y cuela el caldo. Sazona con salsa de pescado y azúcar.', 'Sirve sobre los fideos hidratados con brotes de soja, hierbas y lima.']]
    }
  },
  {
    id: 'vn-bun-cha', n: 'Bún chả (albóndigas de cerdo a la parrilla con fideos)', e: '🥢', tipo: 'comida', tags: ['carne'],
    ing: [['cerdo_picado', 500], ['cerdo_lomo', 250], ['fideos_arroz', 300], ['ajo', 4], ['chalota', 60], ['salsa_pescado', 70], ['azucar', 50], ['vinagre_arroz', 40], ['zanahoria', 100], ['lechuga', 1], ['hierbabuena', 1], ['cilantro', 1], ['lima', 1], ['guindilla_fresca', 5]],
    m: {
      fuego: [40, ['Mezcla el cerdo picado y el lomo en láminas finas con ajo y chalota picados, 30 ml de salsa de pescado, 15 g de azúcar y pimienta. Forma hamburguesitas con la picada.', 'Hazlas a la plancha muy caliente con el lomo, 4 min por lado.', 'Para el caldo-aliño, mezcla 300 ml de agua tibia con el resto de salsa de pescado y azúcar, el vinagre, la lima, la guindilla y la zanahoria en láminas finas.', 'Hidrata los fideos. Sirve la carne dentro del aliño, con los fideos, la lechuga y las hierbas aparte para ir mojando.']],
      horno: [40, ['Prepara la carne marinada y forma las hamburguesitas.', 'Ásalas con el lomo en la bandeja alta del horno 15 min a 230 °C con grill, girando a mitad.', 'Sírvelas en el caldo-aliño con fideos, lechuga y hierbas.']],
      airfryer: [35, ['Prepara la carne marinada.', 'Cocínala 12 min a 200 °C, girándola a mitad.', 'Sirve en el caldo-aliño con fideos y hierbas.']]
    }
  },
  {
    id: 'vn-banh-mi-cerdo', n: 'Bánh mì de cerdo con hierba limón', e: '🥖', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['pan_barra', 2], ['cerdo_lomo', 450], ['hierba_limon', 1], ['ajo', 2], ['salsa_pescado', 20], ['azucar', 25], ['zanahoria', 200], ['pepino', 200], ['vinagre_arroz', 60], ['mayonesa', 60], ['cilantro', 1], ['guindilla_fresca', 5], ['aceite', 15]],
    m: {
      fuego: [30, ['Ralla la zanahoria en tiras y mézclala con el vinagre, 15 g de azúcar y una pizca de sal; deja 15 min.', 'Marina el cerdo en láminas finas con la hierba limón y el ajo picados, la salsa de pescado y el resto del azúcar 10 min.', 'Hazlo en una sartén muy caliente con el aceite 4 min.', 'Abre el pan en 4 trozos, úntalo de mayonesa y rellena con cerdo, zanahoria escurrida, pepino en bastones, cilantro y guindilla.']],
      airfryer: [28, ['Prepara el encurtido y marina el cerdo.', 'Cocina el cerdo 8 min a 200 °C. Tuesta el pan 2 min.', 'Rellena el pan con mayonesa, cerdo, encurtido, pepino y cilantro.']]
    }
  },
  {
    id: 'vn-banh-mi-tofu', n: 'Bánh mì de tofu caramelizado', e: '🥖', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['pan_barra', 2], ['tofu', 400], ['salsa_soja', 40], ['azucar_moreno', 20], ['ajo', 2], ['zanahoria', 200], ['pepino', 200], ['vinagre_arroz', 60], ['azucar', 15], ['mayonesa', 60], ['cilantro', 1], ['guindilla_fresca', 5], ['aceite', 25]],
    m: {
      fuego: [30, ['Encurte la zanahoria rallada con el vinagre, el azúcar y una pizca de sal 15 min.', 'Corta el tofu en lonchas, sécalo y dóralo en el aceite 3 min por lado.', 'Añade la soja, el azúcar moreno y el ajo picado y deja que caramelice 1 min.', 'Rellena el pan con mayonesa, tofu, encurtido, pepino, cilantro y guindilla.']],
      airfryer: [28, ['Marina el tofu en lonchas con soja, azúcar moreno y ajo.', 'Cocínalo 12 min a 200 °C, girando a mitad.', 'Rellena el pan con mayonesa, tofu, encurtido, pepino y cilantro.']]
    }
  },
  {
    id: 'vn-cha-gio', n: 'Chả giò (rollitos vietnamitas crujientes)', e: '🌯', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['papel_arroz', 1], ['cerdo_picado', 400], ['gambas', 150], ['fideos_arroz', 50], ['zanahoria', 100], ['setas', 80], ['cebolla', 80], ['huevo', 1], ['salsa_pescado', 50], ['azucar', 25], ['lima', 1], ['lechuga', 1], ['hierbabuena', 1], ['aceite_girasol', 400]],
    m: {
      fuego: [50, ['Hidrata los fideos y córtalos. Mézclalos con el cerdo, las gambas picadas, la zanahoria rallada, las setas y la cebolla picadas, el huevo, 15 ml de salsa de pescado y pimienta.', 'Moja cada oblea de papel de arroz, pon una cucharada de relleno y enrolla apretando, cerrando los lados.', 'Fríe los rollitos en aceite a fuego medio 8 min, hasta que estén dorados.', 'Sirve con lechuga y hierbabuena para envolver y una salsa de salsa de pescado, azúcar, lima y agua.']],
      airfryer: [40, ['Prepara los rollitos.', 'Píntalos con aceite y cocínalos 16 min a 200 °C, girándolos a mitad.', 'Sirve con lechuga, hierbas y la salsa.']],
      horno: [45, ['Prepara los rollitos y colócalos en una bandeja con papel.', 'Píntalos con aceite y hornea 25 min a 210 °C, girándolos a mitad.', 'Sirve con lechuga, hierbas y la salsa.']]
    }
  },
  {
    id: 'vn-com-tam', n: 'Cơm tấm (arroz con chuleta de cerdo y huevo)', e: '🍚', tipo: 'comida', tags: ['carne'],
    ing: [['chuletas_cerdo', 800], ['arroz_jazmin', 300], ['huevo', 4], ['hierba_limon', 1], ['ajo', 3], ['salsa_pescado', 50], ['azucar', 40], ['miel', 15], ['pepino', 250], ['tomate', 250], ['cebolleta', 3], ['lima', 1], ['aceite', 30]],
    m: {
      fuego: [45, ['Marina las chuletas con la hierba limón y el ajo picados, 25 ml de salsa de pescado, 15 g de azúcar, la miel y pimienta al menos 20 min.', 'Cuece el arroz. Pica la cebolleta y mézclala con 2 cucharadas de aceite caliente.', 'Haz las chuletas a la plancha 5 min por lado y fríe los huevos.', 'Sirve con arroz, el aceite de cebolleta, pepino, tomate y una salsa de salsa de pescado, azúcar, lima y agua.']],
      airfryer: [40, ['Marina las chuletas.', 'Cocínalas 14 min a 200 °C, girándolas a mitad.', 'Sirve con arroz, huevo frito, verduras y la salsa.']],
      horno: [45, ['Marina las chuletas.', 'Hornéalas 20 min a 220 °C con grill los últimos 3 min.', 'Sirve con arroz, huevo frito, verduras y la salsa.']]
    }
  },
  {
    id: 'vn-thit-kho', n: 'Thịt kho (cerdo al caramelo con huevos)', e: '🥚', tipo: 'comida', tags: ['carne'],
    ing: [['cerdo_guisar', 800], ['huevo', 6], ['azucar', 50], ['salsa_pescado', 60], ['chalota', 80], ['ajo', 4], ['pimienta', 3], ['leche_coco', 200], ['arroz_jazmin', 250], ['pepino', 250]],
    m: {
      fuego: [90, ['Cuece los huevos 9 min y pélalos. Marina el cerdo en trozos con la salsa de pescado, la chalota y el ajo picados y la pimienta.', 'Haz un caramelo oscuro con el azúcar y 2 cucharadas de agua. Añade el cerdo y dóralo en el caramelo 4 min.', 'Agrega la leche de coco y 500 ml de agua, tapa y cuece a fuego suave 50 min.', 'Añade los huevos y cuece 20 min más destapado hasta que la salsa se reduzca. Sirve con arroz y pepino.']],
      robot: [75, ['Haz el caramelo en un cazo aparte y viértelo en el vaso con el cerdo marinado.', 'Añade la leche de coco y 400 ml de agua: 55 min/100 °C/giro inverso/vel. cuchara.', 'Añade los huevos pelados: 15 min/Varoma/giro inverso/vel. cuchara sin cubilete para reducir. Sirve con arroz.']]
    }
  },
  {
    id: 'vn-ca-kho', n: 'Cá kho (salmón al caramelo con pimienta)', e: '🐟', tipo: 'comida', tags: ['pescado'],
    ing: [['salmon', 700], ['azucar', 40], ['salsa_pescado', 50], ['ajo', 3], ['chalota', 60], ['jengibre', 15], ['pimienta', 3], ['cebolleta', 2], ['guindilla_fresca', 5], ['arroz_jazmin', 250], ['judias_verdes', 300], ['aceite', 15]],
    m: {
      fuego: [35, ['Corta el salmón en trozos grandes y marínalo con la salsa de pescado, el ajo, la chalota y el jengibre picados y la pimienta 10 min.', 'Haz un caramelo oscuro con el azúcar y el aceite en una cazuela baja.', 'Añade el salmón con su marinada y 150 ml de agua, tapa y cuece a fuego suave 15 min, dándole la vuelta a mitad.', 'Destapa, reduce la salsa 3 min y sirve con cebolleta, guindilla, judías verdes cocidas y arroz.']]
    }
  },
  {
    id: 'vn-ga-kho-gung', n: 'Gà kho gừng (pollo al caramelo con jengibre)', e: '🍗', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['pollo_muslos', 800], ['jengibre', 50], ['azucar', 40], ['salsa_pescado', 50], ['ajo', 3], ['chalota', 60], ['cebolleta', 2], ['pimienta', 2], ['brocoli', 400], ['arroz_jazmin', 250], ['aceite', 15]],
    m: {
      fuego: [45, ['Marina el pollo en trozos con la salsa de pescado, el ajo y la chalota picados y la pimienta 10 min.', 'Haz un caramelo con el azúcar y el aceite, añade el jengibre en tiras finas y el pollo y dóralo 5 min.', 'Agrega 200 ml de agua, tapa y cuece 25 min. Destapa y reduce hasta que la salsa brille.', 'Sirve con cebolleta, brócoli al vapor y arroz.']],
      robot: [40, ['Haz el caramelo en un cazo y viértelo en el vaso con el pollo marinado y el jengibre.', 'Añade 150 ml de agua: 25 min/100 °C/giro inverso/vel. cuchara.', 'Reduce 5 min/Varoma/giro inverso/vel. cuchara sin cubilete. Sirve con brócoli y arroz.']]
    }
  },
  {
    id: 'vn-canh-chua', n: 'Canh chua (sopa agria de pescado con piña)', e: '🍲', tipo: 'cena', tags: ['pescado', 'ligera'],
    ing: [['merluza', 500], ['pina', 1], ['tomate', 300], ['brotes_soja', 200], ['apio', 100], ['pasta_tamarindo', 30], ['caldo_pescado', 1200], ['salsa_pescado', 30], ['azucar', 15], ['ajo', 3], ['albahaca', 1], ['cilantro', 1], ['arroz_jazmin', 200], ['aceite', 15]],
    m: {
      fuego: [30, ['Dora el ajo picado en el aceite y resérvalo.', 'Calienta el caldo con el tamarindo, la salsa de pescado y el azúcar.', 'Añade la piña en trozos, el tomate en gajos y el apio en láminas y cuece 5 min. Agrega la merluza en trozos y cuece 4 min.', 'Añade los brotes de soja 1 min y sirve con el ajo frito, albahaca, cilantro y arroz aparte.']],
      robot: [25, ['Pon caldo, tamarindo, salsa de pescado, azúcar, piña, tomate y apio: 8 min/100 °C/vel. 1.', 'Añade la merluza: 5 min/90 °C/giro inverso/vel. cuchara. Añade los brotes 1 min más.', 'Sirve con ajo frito, hierbas y arroz.']]
    }
  },
  {
    id: 'vn-bo-luc-lac', n: 'Bò lúc lắc (dados de ternera salteados con ensalada)', e: '🥩', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['ternera_entrecot', 600], ['cebolla_morada', 150], ['pimiento_rojo', 150], ['ajo', 4], ['salsa_ostras', 30], ['salsa_soja', 20], ['salsa_pescado', 10], ['azucar', 10], ['mantequilla', 20], ['rucula', 100], ['tomate', 300], ['lima', 1], ['aceite', 20]],
    m: {
      fuego: [25, ['Corta la ternera en dados de 2–3 cm y marínala con las salsas, el azúcar y pimienta 10 min.', 'Saltéala en una sartén muy caliente con el aceite 3 min, sacudiendo la sartén, sin removerla demasiado.', 'Añade la mantequilla, el ajo picado, la cebolla y el pimiento en cuadrados y saltea 2 min.', 'Sirve sobre rúcula y tomate, con un aliño de lima, sal y pimienta.']]
    }
  },
  {
    id: 'vn-ga-xao-sa-ot', n: 'Gà xào sả ớt (pollo con hierba limón y guindilla)', e: '🌶️', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['pollo_muslos', 650], ['hierba_limon', 3], ['guindilla_fresca', 10], ['ajo', 4], ['chalota', 60], ['curcuma', 2], ['salsa_pescado', 35], ['azucar', 20], ['cebolla', 150], ['cilantro', 1], ['arroz_jazmin', 250], ['aceite', 30]],
    m: {
      fuego: [25, ['Pica muy fina la parte tierna de la hierba limón, el ajo, la chalota y la guindilla.', 'Marina el pollo en dados con la mitad del picado, la cúrcuma, la salsa de pescado y la mitad del azúcar 10 min.', 'Sofríe el resto del picado 1 min, añade el pollo y dóralo 6 min. Añade el resto del azúcar y deja que caramelice ligeramente.', 'Agrega la cebolla en gajos 2 min y sirve con cilantro y arroz.']],
      airfryer: [25, ['Marina el pollo con todo el picado, la cúrcuma, la salsa de pescado y el azúcar.', 'Cocínalo con la cebolla 14 min a 200 °C, removiendo a mitad.', 'Sirve con cilantro y arroz.']]
    }
  },
  {
    id: 'vn-chao-ga', n: 'Cháo gà (gachas de arroz con pollo y jengibre)', e: '🥣', tipo: 'cena', tags: ['carne', 'ligera', 'niños'],
    ing: [['arroz_jazmin', 180], ['pollo_pechuga', 400], ['caldo_pollo', 1800], ['jengibre', 30], ['chalota', 60], ['salsa_pescado', 25], ['cebolleta', 2], ['cilantro', 1], ['pimienta', 2], ['lima', 1], ['aceite', 20]],
    m: {
      fuego: [55, ['Tuesta el arroz lavado en una sartén seca 3 min.', 'Cuécelo en el caldo con el jengibre en láminas y el pollo entero a fuego suave 15 min. Saca el pollo y desmenúzalo.', 'Sigue cociendo el arroz 25 min más, removiendo, hasta que quede como unas gachas. Sazona con salsa de pescado.', 'Fríe la chalota en láminas en el aceite. Sirve con el pollo, la chalota crujiente, cebolleta, cilantro, pimienta y lima.']],
      robot: [50, ['Pon el arroz, el caldo, el jengibre y el pollo: 15 min/100 °C/giro inverso/vel. cuchara. Saca el pollo y desmenúzalo.', 'Continúa 25 min/100 °C/giro inverso/vel. cuchara. Sazona con salsa de pescado.', 'Sirve con el pollo, chalota frita, hierbas y lima.']]
    }
  },
  {
    id: 'vn-banh-xeo', n: 'Bánh xèo (crepes crujientes con gambas y cerdo)', e: '🥞', tipo: 'cena', tags: ['carne', 'pescado'],
    ing: [['harina_arroz', 200], ['leche_coco', 200], ['curcuma', 3], ['cebolleta', 3], ['cerdo_lomo', 250], ['gambas', 250], ['brotes_soja', 200], ['cebolla', 100], ['lechuga', 1], ['hierbabuena', 1], ['salsa_pescado', 40], ['azucar', 30], ['lima', 1], ['aceite', 60]],
    m: {
      fuego: [45, ['Mezcla la harina de arroz con la leche de coco, la cúrcuma, 300 ml de agua, una pizca de sal y la cebolleta picada. Deja reposar 15 min.', 'Saltea el cerdo en láminas finas, las gambas y la cebolla en un poco de aceite 3 min.', 'En una sartén grande con aceite muy caliente, pon un poco de relleno, vierte un cucharón de masa extendiéndola fina, añade brotes de soja, tapa 2 min y cuece destapado hasta que esté crujiente. Dobla.', 'Sirve envolviendo trozos en lechuga con hierbabuena y moja en salsa de pescado, azúcar, lima y agua.']]
    }
  },
  {
    id: 'vn-cari-ga', n: 'Cà ri gà (curry vietnamita de pollo y boniato)', e: '🍛', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_muslos', 700], ['boniato', 500], ['zanahoria', 150], ['cebolla', 150], ['leche_coco', 400], ['caldo_pollo', 300], ['hierba_limon', 2], ['curry', 15], ['ajo', 3], ['salsa_pescado', 30], ['azucar', 10], ['pan_barra', 1], ['aceite', 25]],
    m: {
      fuego: [50, ['Marina el pollo en trozos con la mitad del curry, el ajo picado y la salsa de pescado 15 min.', 'Sofríe la cebolla, la hierba limón machacada y el resto del curry 3 min; añade el pollo y dóralo 5 min.', 'Agrega el boniato y la zanahoria en trozos, la leche de coco y el caldo y cuece 25 min.', 'Sazona con el azúcar, retira la hierba limón y sirve con pan de barra para mojar (o con arroz).']],
      robot: [45, ['Sofríe la cebolla con aceite, curry y hierba limón 4 min/120 °C/vel. 1.', 'Añade pollo marinado, boniato, zanahoria, leche de coco, caldo y azúcar: 25 min/100 °C/giro inverso/vel. cuchara.', 'Retira la hierba limón y sirve con pan o arroz.']]
    }
  },
  {
    id: 'vn-bo-kho', n: 'Bò kho (estofado de ternera con hierba limón)', e: '🥕', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_guisar', 800], ['zanahoria', 400], ['tomate_concentrado', 40], ['cebolla', 150], ['hierba_limon', 2], ['ajo', 4], ['jengibre', 20], ['canela', 1], ['clavo', 3], ['curry', 6], ['salsa_pescado', 40], ['azucar_moreno', 15], ['caldo_carne', 800], ['pan_barra', 1], ['aceite', 25]],
    m: {
      fuego: [120, ['Marina la ternera en dados con el curry, la salsa de pescado, el ajo y el jengibre picados 20 min.', 'Dórala en el aceite, añade la cebolla, la hierba limón machacada, la canela, el clavo y el tomate concentrado y rehoga 3 min.', 'Vierte el caldo y el azúcar, tapa y cuece a fuego suave 75 min.', 'Añade la zanahoria en trozos y cuece 25 min más. Sirve con pan de barra.']],
      robot: [100, ['Sofríe la cebolla con aceite, hierba limón y especias 4 min/120 °C/vel. 1.', 'Añade la ternera marinada, tomate concentrado, caldo y azúcar: 70 min/100 °C/giro inverso/vel. cuchara.', 'Añade la zanahoria: 25 min/100 °C/giro inverso/vel. cuchara. Sirve con pan.']]
    }
  },
  {
    id: 'vn-hu-tieu', n: 'Hủ tiếu (sopa de fideos con cerdo y gambas)', e: '🍜', tipo: 'cena', tags: ['carne', 'pescado', 'ligera'],
    ing: [['fideos_arroz', 250], ['cerdo_lomo', 300], ['gambas', 250], ['caldo_pollo', 1500], ['cebolla', 100], ['brotes_soja', 150], ['lechuga', 1], ['ajo', 3], ['salsa_pescado', 30], ['azucar', 10], ['cebolleta', 2], ['cilantro', 1], ['lima', 1], ['aceite', 15]],
    m: {
      fuego: [35, ['Cuece el lomo entero en el caldo con la cebolla tostada 15 min. Sácalo y córtalo en lonchas finas.', 'Sazona el caldo con salsa de pescado y azúcar y cuece las gambas 2 min.', 'Dora el ajo picado en el aceite. Hidrata los fideos.', 'Reparte fideos, cerdo, gambas, lechuga y brotes en cuencos, vierte el caldo hirviendo y termina con ajo frito, cebolleta, cilantro y lima.']],
      robot: [32, ['Pon caldo, cebolla y lomo: 15 min/100 °C/vel. 1. Saca el lomo y córtalo.', 'Añade salsa de pescado, azúcar y gambas: 3 min/100 °C/giro inverso/vel. cuchara.', 'Sirve sobre los fideos con el cerdo, los brotes, ajo frito y hierbas.']]
    }
  },
  {
    id: 'vn-goi-ga', n: 'Gỏi gà (ensalada de pollo y repollo)', e: '🥗', tipo: 'cena', tags: ['carne', 'ligera', 'rapida'],
    ing: [['pollo_pechuga', 500], ['repollo', 400], ['zanahoria', 150], ['cebolla_morada', 100], ['hierbabuena', 1], ['cilantro', 1], ['cacahuetes', 50], ['lima', 3], ['salsa_pescado', 40], ['azucar', 25], ['ajo', 2], ['guindilla_fresca', 5]],
    m: {
      fuego: [25, ['Cuece la pechuga en agua con sal 15 min, déjala templar y desmenúzala.', 'Corta el repollo en juliana muy fina, ralla la zanahoria y corta la cebolla morada en plumas.', 'Mezcla el zumo de lima, la salsa de pescado, el azúcar, el ajo y la guindilla picados.', 'Junta todo con las hierbas, aliña y sirve con cacahuetes picados.']],
      sin: [20, ['Usa pollo asado o cocido que tengas ya hecho, desmenuzado.', 'Corta las verduras finas y prepara el aliño de lima y salsa de pescado.', 'Mezcla todo con las hierbas y sirve con cacahuetes.']]
    }
  },
  {
    id: 'vn-tofu-tomate', n: 'Đậu hũ sốt cà chua (tofu en salsa de tomate)', e: '🍅', tipo: 'cena', tags: ['vegetariano', 'rapida', 'ligera'],
    ing: [['tofu', 600], ['tomate', 600], ['cebolleta', 3], ['ajo', 3], ['salsa_soja', 40], ['azucar', 10], ['pimienta', 2], ['arroz_jazmin', 250], ['aceite', 40]],
    m: {
      fuego: [25, ['Corta el tofu en dados grandes, sécalo y dóralo en el aceite por todos los lados. Resérvalo.', 'En el mismo aceite, sofríe el ajo y la parte blanca de la cebolleta 1 min y añade el tomate picado. Cuece 8 min hasta que se deshaga.', 'Añade la soja, el azúcar, la pimienta y 80 ml de agua y vuelve a poner el tofu 3 min.', 'Sirve con la cebolleta verde y arroz.']],
      airfryer: [28, ['Rocía el tofu en dados con aceite y cocínalo 14 min a 200 °C, agitando a mitad.', 'Prepara la salsa de tomate en el fuego.', 'Mezcla el tofu con la salsa 2 min y sirve con arroz.']]
    }
  },
  {
    id: 'vn-pescado-tomate', n: 'Cá chiên sốt cà chua (pescado frito en salsa de tomate)', e: '🐟', tipo: 'comida', tags: ['pescado', 'niños'],
    ing: [['merluza', 700], ['tomate', 600], ['cebolleta', 3], ['ajo', 3], ['salsa_pescado', 30], ['azucar', 10], ['maicena', 30], ['eneldo', 2], ['arroz_jazmin', 250], ['aceite', 50]],
    m: {
      fuego: [30, ['Seca la merluza en trozos, sálala y pásala por maicena. Dórala en el aceite 3 min por lado y resérvala.', 'Sofríe el ajo y la cebolleta blanca 1 min, añade el tomate picado y cuece 8 min.', 'Sazona con salsa de pescado, azúcar y el eneldo, y añade 80 ml de agua.', 'Vuelve a poner el pescado 4 min y sirve con la cebolleta verde y arroz.']],
      horno: [30, ['Prepara la salsa de tomate en el fuego.', 'Ponla en una fuente con la merluza encima y hornea 15 min a 200 °C.', 'Sirve con cebolleta y arroz.']],
      airfryer: [28, ['Enharina la merluza, rocía con aceite y cocínala 10 min a 200 °C.', 'Prepara la salsa en el fuego y napa el pescado.', 'Sirve con arroz.']]
    }
  },
  {
    id: 'vn-tom-rim', n: 'Tôm rim (gambas caramelizadas)', e: '🦐', tipo: 'cena', tags: ['pescado', 'rapida'],
    ing: [['gambas', 600], ['azucar', 30], ['salsa_pescado', 35], ['ajo', 4], ['chalota', 60], ['pimienta', 3], ['cebolleta', 2], ['pepino', 250], ['arroz_jazmin', 250], ['aceite', 25]],
    m: {
      fuego: [20, ['Mezcla las gambas con la salsa de pescado, la pimienta y la chalota picada.', 'Dora el ajo picado en el aceite 1 min y añade el azúcar hasta que se haga un caramelo claro.', 'Añade las gambas con su marinada y cocínalas a fuego fuerte 4 min, hasta que estén glaseadas.', 'Sirve con cebolleta, pepino y arroz.']]
    }
  },
  {
    id: 'vn-muc-xao', n: 'Calamares salteados con piña y verduras', e: '🦑', tipo: 'cena', tags: ['pescado', 'rapida', 'ligera'],
    ing: [['calamar', 600], ['pina', 1], ['tomate', 200], ['pimiento_verde', 150], ['cebolla', 150], ['apio', 100], ['ajo', 3], ['salsa_pescado', 25], ['salsa_ostras', 20], ['azucar', 5], ['arroz_jazmin', 250], ['aceite', 30]],
    m: {
      fuego: [20, ['Corta el calamar en trozos con cortes en rombo.', 'Saltea el ajo, la cebolla, el pimiento y el apio a fuego fuerte 3 min.', 'Añade el calamar 2 min, luego la piña en trozos y el tomate en gajos 2 min.', 'Sazona con las salsas y el azúcar y sirve con arroz.']]
    }
  },
  {
    id: 'vn-canh-bi-do', n: 'Canh bí đỏ (sopa de calabaza con cerdo)', e: '🎃', tipo: 'cena', tags: ['carne', 'ligera'],
    ing: [['calabaza', 700], ['cerdo_picado', 250], ['caldo_pollo', 1200], ['chalota', 60], ['salsa_pescado', 25], ['pimienta', 2], ['cebolleta', 2], ['cilantro', 1], ['arroz_jazmin', 200], ['aceite', 15]],
    m: {
      fuego: [30, ['Sofríe la chalota picada en el aceite, añade el cerdo picado con pimienta y dóralo 4 min.', 'Añade el caldo y la calabaza en dados y cuece 15 min, hasta que esté tierna pero entera.', 'Sazona con salsa de pescado.', 'Sirve con cebolleta y cilantro, y arroz aparte.']],
      robot: [28, ['Sofríe la chalota con aceite 3 min/120 °C/vel. 1. Añade el cerdo: 4 min/120 °C/giro inverso/vel. cuchara.', 'Añade caldo, calabaza y salsa de pescado: 15 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con cebolleta y cilantro.']]
    }
  },
  {
    id: 'vn-canh-rau-tom', n: 'Sopa de espinacas con gambas (canh rau)', e: '🥬', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['gambas', 300], ['espinacas', 400], ['tomate', 200], ['caldo_pescado', 1200], ['chalota', 50], ['ajo', 2], ['salsa_pescado', 25], ['pimienta', 2], ['tofu', 300], ['aceite', 15]],
    m: {
      fuego: [20, ['Pica las gambas groseramente y mézclalas con pimienta y un poco de salsa de pescado.', 'Sofríe la chalota y el ajo, añade las gambas 1 min y el tomate en gajos 2 min.', 'Vierte el caldo y el tofu en dados y cuece 5 min.', 'Añade las espinacas, cuece 1 min y sazona con la salsa de pescado.']],
      robot: [20, ['Sofríe chalota y ajo con aceite 3 min/120 °C/vel. 1.', 'Añade caldo, tomate, tofu y gambas: 7 min/100 °C/giro inverso/vel. cuchara.', 'Añade espinacas y salsa de pescado: 2 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'vn-bo-xao-dau', n: 'Ternera salteada con judías verdes', e: '🫛', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['ternera_filetes', 450], ['judias_verdes', 450], ['ajo', 4], ['cebolla', 100], ['salsa_ostras', 30], ['salsa_pescado', 15], ['salsa_soja', 15], ['azucar', 5], ['maicena', 10], ['pimienta', 2], ['arroz_jazmin', 250], ['aceite', 35]],
    m: {
      fuego: [22, ['Corta la ternera en tiras finas y mézclala con la maicena, la soja y la pimienta.', 'Cuece las judías en trozos 3 min en agua hirviendo y escúrrelas.', 'Saltea la ternera con la mitad del ajo a fuego muy fuerte 2 min y resérvala.', 'Saltea las judías con la cebolla y el resto del ajo 3 min, vuelve a poner la carne con las salsas y el azúcar y sirve con arroz.']]
    }
  },
  {
    id: 'vn-berenjena-cebolleta', n: 'Berenjena asada con aceite de cebolleta y cerdo', e: '🍆', tipo: 'cena', tags: ['carne', 'ligera'],
    ing: [['berenjena', 900], ['cerdo_picado', 250], ['cebolleta', 4], ['ajo', 3], ['salsa_pescado', 35], ['azucar', 15], ['lima', 1], ['guindilla_fresca', 5], ['cacahuetes', 30], ['arroz_jazmin', 250], ['aceite', 50]],
    m: {
      horno: [45, ['Asa las berenjenas enteras pinchadas 35 min a 220 °C. Pélalas y ábrelas en tiras.', 'Calienta el aceite y viértelo sobre la cebolleta picada.', 'Saltea el cerdo con el ajo 5 min y sazona con un poco de salsa de pescado.', 'Pon el cerdo y el aceite de cebolleta sobre la berenjena, riega con salsa de pescado, azúcar, lima y guindilla y termina con cacahuetes. Sirve con arroz.']],
      fuego: [35, ['Asa las berenjenas en una plancha o directamente sobre la llama, girándolas, 15 min. Pélalas.', 'Prepara el aceite de cebolleta y saltea el cerdo con ajo.', 'Monta el plato y aliña con salsa de pescado, azúcar, lima y guindilla.']],
      airfryer: [35, ['Parte las berenjenas a lo largo y cocínalas 22 min a 200 °C.', 'Prepara el aceite de cebolleta y el cerdo salteado.', 'Monta el plato con el aliño y cacahuetes.']]
    }
  },
  {
    id: 'vn-cha-trung', n: 'Chả trứng (pastel de huevo y cerdo)', e: '🥚', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['huevo', 6], ['cerdo_picado', 350], ['fideos_arroz', 40], ['setas', 80], ['zanahoria', 80], ['chalota', 50], ['salsa_pescado', 25], ['pimienta', 2], ['pepino', 250], ['tomate', 250], ['arroz_jazmin', 250]],
    m: {
      horno: [45, ['Hidrata los fideos y córtalos. Pica las setas, la zanahoria y la chalota.', 'Mezcla el cerdo con 5 huevos, los fideos, las verduras, la salsa de pescado y la pimienta.', 'Pon la mezcla en un molde engrasado y hornea al baño maría 30 min a 180 °C. Pinta por encima con la yema restante y gratina 3 min.', 'Corta en porciones y sirve con arroz, pepino y tomate.']],
      fuego: [40, ['Prepara la mezcla de cerdo, huevos, fideos y verduras.', 'Ponla en un recipiente resistente al calor y cuécela al vapor, tapada, 25 min.', 'Pinta con yema, deja 2 min más y sirve con arroz y verduras.']],
      airfryer: [35, ['Prepara la mezcla en un molde que quepa en la cesta.', 'Cocina 22 min a 160 °C, cubierto con papel de aluminio los primeros 15 min.', 'Sirve en porciones con arroz.']]
    }
  },
  {
    id: 'vn-cha-ca', n: 'Chả cá (pescado con cúrcuma y eneldo con fideos)', e: '🐟', tipo: 'cena', tags: ['pescado'],
    ing: [['pescado_blanco', 700], ['curcuma', 5], ['jengibre', 20], ['ajo', 2], ['salsa_pescado', 30], ['eneldo', 4], ['cebolleta', 4], ['fideos_arroz', 250], ['cacahuetes', 40], ['lima', 1], ['azucar', 15], ['hierbabuena', 1], ['aceite', 40]],
    m: {
      fuego: [35, ['Marina el pescado en trozos con la cúrcuma, el jengibre y el ajo rallados y 15 ml de salsa de pescado 15 min.', 'Dóralo en una sartén con el aceite 3 min por lado.', 'Añade la cebolleta en trozos largos y el eneldo y saltea 1 min, hasta que se ablanden.', 'Sirve sobre los fideos hidratados con cacahuetes, hierbabuena y una salsa de salsa de pescado, lima, azúcar y agua.']],
      airfryer: [30, ['Marina el pescado y cocínalo 10 min a 200 °C.', 'Saltea la cebolleta con el eneldo y mézclalos.', 'Sirve sobre fideos con cacahuetes y la salsa.']],
      horno: [30, ['Marina el pescado y hornéalo 12 min a 210 °C.', 'Añade la cebolleta y el eneldo y hornea 3 min más.', 'Sirve con fideos, cacahuetes y la salsa.']]
    }
  },
  {
    id: 'vn-dorada-jengibre', n: 'Dorada al vapor con jengibre y cebolleta', e: '🐠', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['dorada', 1000], ['jengibre', 40], ['cebolleta', 4], ['salsa_soja', 40], ['salsa_pescado', 10], ['azucar', 5], ['setas', 150], ['aceite', 30], ['brocoli', 400], ['arroz_jazmin', 250]],
    m: {
      fuego: [25, ['Pide las doradas limpias o en lomos. Ponlas en un plato con la mitad del jengibre en tiras y las setas.', 'Cuécelas al vapor 10 min (enteras) o 6 min (lomos).', 'Cubre con el resto del jengibre y la cebolleta en tiras finas y vierte por encima el aceite muy caliente.', 'Riega con la soja, la salsa de pescado y el azúcar disueltos en 2 cucharadas de agua. Sirve con brócoli y arroz.']],
      horno: [25, ['Pon el pescado en papel de horno con el jengibre, las setas, la soja, la salsa de pescado y el azúcar y cierra el paquete.', 'Hornea 15 min a 200 °C.', 'Abre, añade la cebolleta y el aceite caliente y sirve con brócoli y arroz.']]
    }
  },
  {
    id: 'vn-nem-nuong', n: 'Nem nướng (brochetas de cerdo con fideos y hierbas)', e: '🍢', tipo: 'cena', tags: ['carne'],
    ing: [['cerdo_picado', 600], ['ajo', 4], ['chalota', 50], ['salsa_pescado', 30], ['azucar', 20], ['miel', 15], ['maicena', 15], ['fideos_arroz', 200], ['lechuga', 1], ['pepino', 200], ['hierbabuena', 1], ['cacahuetes', 40], ['salsa_ostras', 30], ['aceite', 15]],
    m: {
      fuego: [35, ['Mezcla el cerdo con ajo y chalota picados, la salsa de pescado, el azúcar, la maicena y pimienta y amasa bien. Forma cilindros alrededor de brochetas.', 'Hazlas a la plancha 10 min, girándolas y pintándolas con miel y aceite.', 'Calienta la salsa de ostras con 100 ml de agua y los cacahuetes picados para la salsa.', 'Sirve con fideos hidratados, lechuga, pepino y hierbabuena para envolver.']],
      horno: [35, ['Prepara las brochetas.', 'Hornéalas 15 min a 220 °C, pintándolas con miel a mitad.', 'Sirve con fideos, verduras, hierbas y la salsa de cacahuete.']],
      airfryer: [30, ['Prepara las brochetas.', 'Cocínalas 12 min a 200 °C, pintándolas con miel a mitad.', 'Sirve con fideos, verduras y la salsa.']]
    }
  },
  {
    id: 'vn-bun-bo-hue', n: 'Bún bò Huế (sopa picante de ternera y hierba limón)', e: '🌶️', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_guisar', 500], ['cerdo_costillas', 400], ['fideos_arroz', 300], ['hierba_limon', 4], ['caldo_carne', 1500], ['cebolla', 150], ['pimenton', 6], ['pimenton_picante', 3], ['ajo', 4], ['salsa_pescado', 40], ['azucar', 15], ['brotes_soja', 150], ['lima', 2], ['cilantro', 1], ['aceite', 30]],
    m: {
      fuego: [120, ['Cuece la ternera en un trozo y las costillas en el caldo con 600 ml de agua, la cebolla y 3 tallos de hierba limón machacados 90 min a fuego suave.', 'Sofríe el ajo y el último tallo de hierba limón picados en el aceite con los pimentones 1 min, sin quemar. Añádelo al caldo.', 'Saca la ternera, córtala en lonchas finas y sazona el caldo con salsa de pescado y azúcar.', 'Sirve sobre fideos hidratados con la carne, las costillas, brotes de soja, cilantro y lima.']],
      robot: [100, ['Pon caldo, 400 ml de agua, ternera, costillas, cebolla y hierba limón: 80 min/100 °C/giro inverso/vel. cuchara.', 'Prepara el aceite de ajo, hierba limón y pimentón en una sartén y añádelo al vaso con la salsa de pescado y el azúcar.', 'Sirve sobre los fideos con la carne en lonchas, brotes, cilantro y lima.']]
    }
  },
  {
    id: 'vn-tofu-hierba-limon', n: 'Tofu frito con hierba limón y guindilla', e: '🌿', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['tofu', 600], ['hierba_limon', 3], ['guindilla_fresca', 10], ['ajo', 3], ['salsa_soja', 40], ['azucar', 10], ['curcuma', 2], ['cebolleta', 2], ['pepino', 250], ['arroz_jazmin', 250], ['aceite', 50]],
    m: {
      fuego: [25, ['Corta el tofu en dados, sécalo y fríelo en el aceite hasta que esté dorado. Resérvalo.', 'Pica muy fina la hierba limón con el ajo y la guindilla.', 'Sofríe el picado con la cúrcuma 2 min hasta que esté aromático y algo crujiente.', 'Añade el tofu, la soja y el azúcar, saltea 1 min y sirve con cebolleta, pepino y arroz.']],
      airfryer: [25, ['Aliña el tofu en dados con aceite y cúrcuma y cocínalo 15 min a 200 °C.', 'Sofríe el picado de hierba limón, ajo y guindilla en una sartén.', 'Mezcla con el tofu, la soja y el azúcar y sirve con arroz.']]
    }
  },
  {
    id: 'vn-tofu-setas', n: 'Tofu salteado con setas y cebolleta', e: '🍄', tipo: 'cena', tags: ['vegetariano', 'rapida', 'ligera'],
    ing: [['tofu', 400], ['setas', 400], ['champinon', 200], ['cebolleta', 3], ['ajo', 3], ['salsa_soja', 50], ['azucar', 5], ['maicena', 10], ['pimienta', 2], ['arroz_jazmin', 250], ['aceite', 35]],
    m: {
      fuego: [22, ['Dora el tofu en dados en la mitad del aceite y resérvalo.', 'Saltea el ajo, las setas y los champiñones a fuego fuerte 5 min.', 'Añade el tofu, la soja, el azúcar, la pimienta y la maicena disuelta en 60 ml de agua.', 'Saltea 1 min hasta que la salsa brille, añade la cebolleta y sirve con arroz.']]
    }
  },
  {
    id: 'vn-rollos-repollo', n: 'Sopa de rollitos de repollo rellenos de cerdo', e: '🥬', tipo: 'cena', tags: ['carne', 'ligera'],
    ing: [['repollo', 600], ['cerdo_picado', 400], ['cebolleta', 4], ['chalota', 50], ['salsa_pescado', 30], ['pimienta', 2], ['caldo_pollo', 1200], ['tomate', 200], ['cilantro', 1], ['arroz_jazmin', 200]],
    m: {
      fuego: [40, ['Escalda 12 hojas de repollo 1 min para que se ablanden. Escalda también la parte verde de la cebolleta para usarla como cordel.', 'Mezcla el cerdo con la chalota y la cebolleta blanca picadas, la mitad de la salsa de pescado y la pimienta.', 'Rellena cada hoja, enróllala cerrando los lados y átala con una tira de cebolleta.', 'Cuece los rollitos en el caldo con el tomate en gajos 20 min a fuego suave. Sazona con el resto de salsa de pescado y sirve con cilantro y arroz.']],
      robot: [40, ['Prepara los rollitos y colócalos en el recipiente de vapor.', 'Pon el caldo y el tomate en el vaso y cuece los rollitos 25 min/Varoma/vel. 1.', 'Sirve los rollitos en el caldo con salsa de pescado, cilantro y arroz.']]
    }
  },
  {
    id: 'vn-suon-ram', n: 'Sườn ram (costillas de cerdo caramelizadas)', e: '🍖', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['cerdo_costillas', 1000], ['azucar', 40], ['salsa_pescado', 45], ['ajo', 5], ['chalota', 60], ['vinagre', 15], ['pimienta', 2], ['cebolleta', 2], ['pepino', 250], ['arroz_jazmin', 250], ['aceite', 15]],
    m: {
      fuego: [60, ['Pide las costillas troceadas pequeñas. Escáldalas 3 min y escúrrelas.', 'Dóralas en el aceite 6 min con el ajo y la chalota picados.', 'Añade el azúcar, la salsa de pescado, el vinagre, la pimienta y 300 ml de agua. Tapa y cuece 35 min.', 'Destapa y reduce hasta que queden glaseadas. Sirve con cebolleta, pepino y arroz.']],
      horno: [60, ['Marina las costillas con el azúcar, la salsa de pescado, el vinagre, el ajo y la chalota.', 'Hornéalas tapadas con 100 ml de agua 35 min a 190 °C.', 'Destapa y hornea 15 min más a 210 °C, pintándolas con su jugo. Sirve con arroz.']],
      airfryer: [45, ['Marina las costillas.', 'Cocínalas 25 min a 180 °C, girándolas a mitad.', 'Reduce la marinada en una sartén, glasea las costillas y sirve con arroz.']]
    }
  },
  {
    id: 'vn-mi-quang', n: 'Mì Quảng (fideos con cúrcuma, cerdo y gambas)', e: '🍜', tipo: 'comida', tags: ['carne', 'pescado'],
    ing: [['fideos_arroz', 300], ['cerdo_lomo', 300], ['gambas', 300], ['huevo', 4], ['caldo_pollo', 700], ['curcuma', 4], ['chalota', 60], ['ajo', 3], ['salsa_pescado', 35], ['azucar', 10], ['cacahuetes', 50], ['lechuga', 1], ['hierbabuena', 1], ['lima', 1], ['aceite', 25]],
    m: {
      fuego: [40, ['Cuece los huevos 9 min y pélalos. Corta el cerdo en láminas finas.', 'Sofríe la chalota y el ajo con la cúrcuma 1 min, añade el cerdo 3 min y las gambas 2 min.', 'Vierte el caldo con la salsa de pescado y el azúcar y cuece 5 min: debe quedar poco caldo, como una salsa.', 'Sirve sobre los fideos hidratados con medio huevo, cacahuetes, lechuga, hierbabuena y lima.']]
    }
  },
  {
    id: 'vn-bo-xao-can', n: 'Ternera salteada con apio y tomate', e: '🥩', tipo: 'cena', tags: ['carne', 'rapida', 'ligera'],
    ing: [['ternera_filetes', 450], ['apio', 300], ['tomate', 300], ['cebolla', 150], ['ajo', 3], ['salsa_pescado', 20], ['salsa_ostras', 25], ['azucar', 5], ['pimienta', 2], ['arroz_jazmin', 250], ['aceite', 30]],
    m: {
      fuego: [20, ['Corta la ternera en tiras finas y marínala con la pimienta y la mitad de la salsa de pescado.', 'Saltéala a fuego muy fuerte con la mitad del ajo 2 min y resérvala.', 'Saltea la cebolla, el apio en bastones y el resto del ajo 3 min; añade el tomate en gajos 2 min.', 'Vuelve a poner la carne con la salsa de ostras, el resto de salsa de pescado y el azúcar y sirve con arroz.']]
    }
  },
  {
    id: 'vn-sup-ga-ngo', n: 'Súp gà (sopa de pollo, maíz y huevo)', e: '🌽', tipo: 'cena', tags: ['carne', 'ligera', 'rapida', 'niños'],
    ing: [['pollo_pechuga', 350], ['maiz', 2], ['huevo', 2], ['setas', 100], ['zanahoria', 100], ['caldo_pollo', 1300], ['maicena', 30], ['salsa_pescado', 20], ['pimienta', 2], ['cebolleta', 2], ['cilantro', 1]],
    m: {
      fuego: [25, ['Cuece la pechuga en el caldo 12 min, sácala y desmenúzala.', 'Añade al caldo el maíz escurrido, las setas picadas y la zanahoria rallada y cuece 5 min.', 'Espesa con la maicena disuelta en agua fría y vuelve a poner el pollo. Sazona con salsa de pescado.', 'Vierte los huevos batidos en hilo removiendo suavemente y sirve con pimienta, cebolleta y cilantro.']],
      robot: [25, ['Pon caldo y pollo: 12 min/100 °C/vel. 1. Saca el pollo y desmenúzalo.', 'Añade maíz, setas, zanahoria, maicena disuelta y salsa de pescado: 6 min/100 °C/vel. 2.', 'Añade el pollo y los huevos batidos por el bocal: 2 min/90 °C/giro inverso/vel. 1. Sirve con hierbas.']]
    }
  },
  {
    id: 'vn-rollitos-tofu', n: 'Rollitos frescos de tofu y mango', e: '🥭', tipo: 'cena', tags: ['vegetariano', 'ligera'],
    ing: [['papel_arroz', 1], ['tofu', 350], ['mango', 1], ['fideos_arroz', 100], ['lechuga', 1], ['zanahoria', 150], ['pepino', 200], ['hierbabuena', 1], ['cilantro', 1], ['cacahuetes', 60], ['salsa_soja', 40], ['lima', 1], ['miel', 15], ['aceite', 15]],
    m: {
      sin: [30, ['Usa tofu ahumado o marinado listo para comer, en tiras. Hidrata los fideos en agua caliente y escúrrelos.', 'Corta el mango, la zanahoria y el pepino en bastones finos.', 'Moja cada oblea 5 segundos y rellénala con lechuga, fideos, tofu, mango, verduras y hierbas. Enróllala apretando.', 'Sirve con una salsa de cacahuetes picados, soja, lima, miel y agua.']],
      fuego: [35, ['Dora el tofu en tiras en el aceite con un poco de soja 5 min.', 'Prepara el resto de ingredientes y monta los rollitos.', 'Sirve con la salsa de cacahuete.']]
    }
  },
  {
    id: 'vn-ga-roti', n: 'Gà rô ti (pollo glaseado con soja y mantequilla)', e: '🍗', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['pollo_muslos', 1000], ['salsa_soja', 50], ['salsa_ostras', 20], ['miel', 30], ['ajo', 5], ['canela', 1], ['mantequilla', 30], ['caldo_pollo', 200], ['pepino', 250], ['tomate', 250], ['arroz_jazmin', 250]],
    m: {
      fuego: [50, ['Marina el pollo con la soja, la salsa de ostras, la miel y el ajo picado 20 min.', 'Dóralo en la mantequilla 8 min por todos los lados.', 'Añade la marinada, la canela y el caldo, tapa y cuece 25 min.', 'Destapa y reduce hasta que la salsa glasee el pollo. Sirve con arroz, pepino y tomate.']],
      horno: [55, ['Marina el pollo.', 'Hornéalo con la marinada y la mantequilla en trocitos 40 min a 200 °C, regándolo con su jugo cada 10 min.', 'Sirve con arroz y ensalada.']],
      airfryer: [40, ['Marina el pollo.', 'Cocínalo 25 min a 190 °C, pintándolo con la marinada y mantequilla fundida a mitad.', 'Sirve con arroz y ensalada.']]
    }
  },
  {
    id: 'vn-bo-bit-tet', n: 'Bò bít tết (bistec vietnamita con huevo y patatas)', e: '🍳', tipo: 'cena', tags: ['carne'],
    ing: [['ternera_filetes', 600], ['huevo', 4], ['patata', 600], ['cebolla', 150], ['tomate', 300], ['ajo', 3], ['salsa_ostras', 30], ['salsa_soja', 20], ['mantequilla', 30], ['pimienta', 3], ['pan_barra', 1], ['aceite', 30]],
    m: {
      fuego: [35, ['Marina los filetes con la salsa de ostras, la soja, el ajo picado y la pimienta 10 min.', 'Fríe o saltea la patata en bastones con el aceite hasta que esté dorada.', 'En una sartén muy caliente, haz la carne con la mantequilla y la cebolla en aros 2 min por lado; fríe un huevo por persona al lado.', 'Sirve con las patatas, el tomate y pan de barra para mojar en el jugo.']],
      airfryer: [35, ['Cocina las patatas en bastones con un poco de aceite 20 min a 200 °C.', 'Haz la carne marinada y los huevos en una sartén.', 'Sirve todo junto con tomate y pan.']]
    }
  },
  {
    id: 'vn-xiu-mai', n: 'Xíu mại (albóndigas en salsa de tomate)', e: '🍅', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['cerdo_picado', 600], ['chalota', 60], ['ajo', 3], ['maicena', 20], ['salsa_pescado', 30], ['azucar', 10], ['tomate', 600], ['tomate_concentrado', 30], ['cebolleta', 2], ['pan_barra', 2]],
    m: {
      fuego: [40, ['Mezcla el cerdo con la chalota y la mitad del ajo picados, la maicena, la mitad de la salsa de pescado y pimienta. Forma 20 albóndigas.', 'Dóralas en una cazuela con un poco de aceite y resérvalas.', 'Sofríe el resto del ajo, añade el tomate picado y el concentrado y cuece 8 min con 150 ml de agua, el azúcar y el resto de salsa de pescado.', 'Cuece las albóndigas en la salsa 15 min y sírvelas con cebolleta y pan de barra.']],
      robot: [40, ['Forma las albóndigas y colócalas en el recipiente de vapor.', 'Pica ajo, tomate y concentrado 5 seg/vel. 5; añade 150 ml de agua, azúcar y salsa de pescado y cuece las albóndigas encima 25 min/Varoma/vel. 1.', 'Junta albóndigas y salsa y sirve con pan.']],
      horno: [40, ['Forma las albóndigas y hornéalas 15 min a 200 °C.', 'Prepara la salsa de tomate en el fuego.', 'Mezcla y hornea 10 min más. Sirve con pan.']]
    }
  },
  {
    id: 'vn-alitas-nuoc-mam', n: 'Alitas con salsa de pescado y ajo (gà chiên nước mắm)', e: '🍗', tipo: 'cena', tags: ['carne'],
    ing: [['pollo_alitas', 1200], ['maicena', 50], ['salsa_pescado', 50], ['azucar', 40], ['ajo', 6], ['guindilla_fresca', 5], ['lima', 1], ['lechuga', 1], ['pepino', 250], ['aceite_girasol', 500]],
    m: {
      fuego: [45, ['Seca las alitas, sálalas ligeramente y pásalas por maicena.', 'Fríelas en aceite a fuego medio 12 min, hasta que estén crujientes. Escurre.', 'Dora el ajo picado en 2 cucharadas de aceite, añade la salsa de pescado, el azúcar, la guindilla y 2 cucharadas de agua y reduce 2 min.', 'Saltea las alitas en la salsa 1 min y sirve con lima, lechuga y pepino.']],
      airfryer: [40, ['Pasa las alitas por maicena y cocínalas 24 min a 190 °C, girándolas a mitad.', 'Prepara la salsa de ajo y salsa de pescado en una sartén.', 'Mezcla y sirve con ensalada.']],
      horno: [50, ['Pasa las alitas por maicena, rocía con aceite y hornea 40 min a 210 °C, girándolas a mitad.', 'Prepara la salsa en una sartén.', 'Mezcla y sirve.']]
    }
  },
  {
    id: 'vn-bo-sot-vang', n: 'Bò sốt vang (ternera guisada al vino tinto)', e: '🍷', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_guisar', 800], ['vino_tinto', 250], ['tomate_triturado', 300], ['zanahoria', 300], ['cebolla', 200], ['ajo', 4], ['hierba_limon', 1], ['canela', 1], ['salsa_pescado', 30], ['azucar', 10], ['pan_barra', 1], ['aceite', 25]],
    m: {
      fuego: [120, ['Marina la ternera en dados con la salsa de pescado, el ajo picado y pimienta 15 min.', 'Dórala en el aceite, añade la cebolla en trozos y rehoga 5 min.', 'Agrega el vino, el tomate, la canela, la hierba limón machacada, el azúcar y 300 ml de agua. Cuece tapado 70 min.', 'Añade la zanahoria en trozos y cuece 25 min más. Sirve con pan de barra.']],
      robot: [100, ['Sofríe la cebolla con aceite 5 min/120 °C/vel. 1.', 'Añade la ternera marinada, vino, tomate, especias, azúcar y 200 ml de agua: 70 min/100 °C/giro inverso/vel. cuchara.', 'Añade la zanahoria: 25 min/100 °C/giro inverso/vel. cuchara. Sirve con pan.']]
    }
  },
  {
    id: 'vn-calabacin-gambas', n: 'Calabacín salteado con gambas', e: '🦐', tipo: 'cena', tags: ['pescado', 'rapida', 'ligera'],
    ing: [['calabacin', 800], ['gambas', 350], ['ajo', 3], ['chalota', 50], ['salsa_pescado', 25], ['azucar', 5], ['pimienta', 2], ['cebolleta', 2], ['arroz_jazmin', 250], ['aceite', 25]],
    m: {
      fuego: [20, ['Corta el calabacín en medias lunas gruesas.', 'Saltea la chalota y el ajo picados 1 min, añade las gambas con pimienta y saltea 2 min. Resérvalas.', 'Saltea el calabacín a fuego fuerte 4 min, con 3 cucharadas de agua al final.', 'Vuelve a poner las gambas, sazona con salsa de pescado y azúcar y sirve con cebolleta y arroz.']]
    }
  },
  {
    id: 'vn-bun-rieu', n: 'Sopa de fideos con tomate, tofu y cerdo (estilo bún riêu)', e: '🍲', tipo: 'cena', tags: ['carne', 'pescado'],
    ing: [['fideos_arroz', 250], ['cerdo_picado', 300], ['gambas', 200], ['huevo', 2], ['tofu', 250], ['tomate', 500], ['caldo_pollo', 1500], ['chalota', 60], ['pasta_tamarindo', 15], ['salsa_pescado', 35], ['brotes_soja', 150], ['lechuga', 1], ['hierbabuena', 1], ['lima', 1], ['aceite', 25]],
    m: {
      fuego: [40, ['Pica las gambas y mézclalas con el cerdo, los huevos, la mitad de la chalota y pimienta.', 'Sofríe el resto de chalota y el tomate en gajos 5 min; añade el caldo, el tamarindo y la salsa de pescado y lleva a hervor.', 'Añade la mezcla de carne a cucharadas, que flote formando grumos, y el tofu en dados dorado. Cuece 10 min a fuego suave.', 'Sirve sobre fideos hidratados con brotes de soja, lechuga, hierbabuena y lima.']]
    }
  },
  {
    id: 'vn-goi-buoi', n: 'Gỏi bưởi (ensalada de pomelo con gambas)', e: '🍊', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['pomelo', 800], ['langostinos', 400], ['zanahoria', 100], ['pepino', 200], ['cebolla_morada', 60], ['hierbabuena', 1], ['cilantro', 1], ['cacahuetes', 50], ['lima', 1], ['salsa_pescado', 30], ['azucar', 15], ['guindilla_fresca', 5]],
    m: {
      sin: [20, ['Pela los pomelos a vivo y separa los gajos en trozos.', 'Corta la zanahoria y el pepino en tiras finas y la cebolla morada en plumas.', 'Mezcla la salsa de pescado, el azúcar, el zumo de lima y la guindilla picada.', 'Junta todo con los langostinos pelados y las hierbas, aliña y sirve con cacahuetes.']]
    }
  },
  {
    id: 'vn-bun-chay', n: 'Bún chay (ensalada de fideos con tofu y verduras)', e: '🥗', tipo: 'comida', tags: ['vegetariano', 'ligera'],
    ing: [['fideos_arroz', 250], ['tofu', 400], ['setas', 200], ['lechuga', 1], ['zanahoria', 150], ['pepino', 200], ['brotes_soja', 150], ['hierbabuena', 1], ['cacahuetes', 50], ['salsa_soja', 50], ['azucar', 25], ['lima', 2], ['ajo', 2], ['aceite', 30]],
    m: {
      fuego: [25, ['Dora el tofu en tiras y las setas con el aceite y un chorrito de soja 8 min.', 'Hidrata los fideos y escúrrelos.', 'Prepara el aliño con el resto de la soja, el azúcar, la lima, el ajo picado y 100 ml de agua.', 'Monta los cuencos con lechuga, fideos, verduras en tiras, brotes, tofu y setas, y sirve con hierbabuena, cacahuetes y el aliño.']],
      airfryer: [25, ['Cocina el tofu y las setas aliñados con aceite y soja 12 min a 200 °C.', 'Monta los cuencos y aliña como en la receta tradicional.']]
    }
  },
  {
    id: 'vn-pho-xao', n: 'Phở xào (fideos de arroz salteados con ternera)', e: '🥢', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['fideos_arroz', 300], ['ternera_filetes', 400], ['brotes_soja', 200], ['cebolla', 150], ['cebolleta', 3], ['repollo', 200], ['ajo', 3], ['salsa_soja', 30], ['salsa_ostras', 30], ['salsa_pescado', 10], ['pimienta', 2], ['aceite', 40]],
    m: {
      fuego: [25, ['Hidrata los fideos y escúrrelos bien.', 'Saltea la ternera en tiras finas con la mitad del ajo a fuego muy fuerte 2 min y resérvala.', 'Saltea la cebolla, el repollo en tiras y el resto del ajo 3 min. Añade los fideos y las salsas y saltea 2 min, dejando que se tuesten.', 'Añade la ternera, los brotes de soja y la cebolleta, saltea 1 min y sirve con pimienta.']]
    }
  }
]);
