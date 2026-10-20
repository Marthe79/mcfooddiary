/* MC Food Diary · cocina de Marruecos 🇲🇦. Formato y normas: recetas/GUIA-RECETAS.md */

MC_ADD_ING({
  limon_confitado: ['Limón confitado en sal', 'despensa', 15, 'kg', 0, 'piel de 1 limón rallada con una pizca de sal'],
  ciruelas_pasas: ['Ciruelas pasas sin hueso', 'despensa', 7, 'kg'],
  merguez: ['Salchichas merguez', 'carniceria', 11, 'kg', 0, 'salchichas frescas con comino y pimentón picante'],
  habas_secas: ['Habas secas peladas', 'despensa', 4, 'kg', 0, 'guisantes secos partidos o habas baby congeladas'],
  membrillo: ['Membrillo (fruta)', 'fruteria', 2.5, 'kg']
});

MC_ADD('ma', [
  {
    id: 'cuscus-pollo', n: 'Cuscús con pollo y verduras', e: '🍲', tipo: 'comida', tags: ['carne', 'rapida'],
    ing: [['cuscus', 300], ['pollo_pechuga', 400], ['calabacin', 200], ['zanahoria', 150], ['pimiento_rojo', 100], ['caldo_pollo', 330], ['comino', 2], ['aceite', 30], ['sal', 4]],
    m: {
      fuego: [25, ['Saltea el pollo en dados y las verduras troceadas con comino y sal 10 min.', 'Hierve el caldo, viértelo sobre el cuscús con un chorrito de aceite y tápalo 5 min.', 'Suelta el cuscús con un tenedor y mézclalo con el salteado.']],
      robot: [25, ['Trocea las verduras 4 seg/vel. 4 y sofríe con el pollo y aceite 10 min/120 °C/giro inverso/vel. cuchara.', 'Añade el caldo y el comino: 4 min/100 °C/vel. 1.', 'Añade el cuscús, mezcla 10 seg/giro inverso/vel. 1 y deja reposar 5 min.']]
    }
  },
  {
    id: 'ma-tajin-pollo-limon', n: 'Tajín de pollo con limón confitado y aceitunas', e: '🍋', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_muslos', 1000], ['cebolla', 300], ['ajo', 3], ['limon_confitado', 60], ['aceitunas', 120], ['jengibre_molido', 3], ['curcuma', 3], ['azafran', 1], ['cilantro', 1], ['perejil_fresco', 1], ['aceite', 50], ['sal', 6], ['pimienta', 2]],
    m: {
      fuego: [60, ['Mezcla el pollo con el ajo, las especias, la mitad del cilantro y perejil picados, aceite y sal; deja reposar 15 min.', 'Pocha la cebolla rallada en una cazuela 5 min, añade el pollo y dóralo 5 min.', 'Cubre con 250 ml de agua, tapa y cuece a fuego suave 35 min.', 'Añade el limón confitado en tiras y las aceitunas y cuece 10 min más sin tapa para espesar la salsa. Termina con el resto de hierbas.']],
      horno: [70, ['Marina el pollo con ajo, especias, hierbas, aceite y sal 15 min.', 'Pon la cebolla en láminas en una fuente, el pollo encima y 200 ml de agua; tapa con papel de aluminio.', 'Hornea 40 min a 190 °C, destapa, añade limón confitado y aceitunas y hornea 15 min más.']],
      robot: [50, ['Trocea la cebolla y el ajo 5 seg/vel. 5 y sofríe con el aceite 6 min/120 °C/vel. 1.', 'Añade el pollo, las especias, sal y 200 ml de agua: 30 min/100 °C/giro inverso/vel. cuchara.', 'Incorpora limón confitado y aceitunas: 8 min/Varoma/giro inverso/vel. cuchara con el cubilete fuera. Sirve con las hierbas.']]
    }
  },
  {
    id: 'ma-tajin-cordero-ciruelas', n: 'Tajín de cordero con ciruelas y almendras', e: '🍖', tipo: 'comida', tags: ['carne'],
    ing: [['cordero', 1000], ['cebolla', 300], ['ciruelas_pasas', 200], ['almendras', 60], ['miel', 30], ['canela', 4], ['jengibre_molido', 3], ['azafran', 1], ['sesamo', 10], ['aceite', 40], ['sal', 6], ['pimienta', 2]],
    m: {
      fuego: [105, ['Dora el cordero con aceite, añade la cebolla picada, el jengibre, el azafrán, la mitad de la canela, sal y pimienta.', 'Cubre con agua a ras, tapa y cuece a fuego suave 1 h 15 min, hasta que la carne esté tierna.', 'Cuece aparte las ciruelas 10 min con un cazo de salsa, la miel y el resto de canela.', 'Sirve el cordero con las ciruelas por encima, las almendras tostadas y el sésamo.']],
      horno: [130, ['Dora el cordero en una cazuela apta para horno con la cebolla y las especias.', 'Añade 400 ml de agua, tapa y hornea 1 h 45 min a 170 °C.', 'Añade las ciruelas y la miel los últimos 20 min. Sirve con almendras tostadas y sésamo.']],
      robot: [85, ['Sofríe la cebolla troceada con aceite 6 min/120 °C/vel. 1.', 'Añade el cordero, las especias, sal y 300 ml de agua: 70 min/100 °C/giro inverso/vel. cuchara.', 'Añade las ciruelas y la miel: 10 min/100 °C/giro inverso/vel. cuchara. Sirve con almendras y sésamo.']]
    }
  },
  {
    id: 'ma-tajin-kefta-huevo', n: 'Tajín de kefta con tomate y huevos', e: '🍳', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['carne_picada_ternera', 500], ['cebolla', 100], ['tomate_triturado', 600], ['huevo', 4], ['ajo', 2], ['comino', 4], ['pimenton', 4], ['canela', 1], ['cilantro', 1], ['perejil_fresco', 1], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [40, ['Mezcla la carne con la cebolla rallada, la mitad del comino y pimentón, la canela, hierbas picadas y sal; forma bolitas pequeñas.', 'Sofríe el ajo en aceite, añade el tomate con el resto de especias y cuece 10 min.', 'Mete las albóndigas en la salsa, tapa y cuece 15 min.', 'Casca los huevos encima, tapa y deja 5 min hasta que cuaje la clara.']],
      horno: [40, ['Prepara las albóndigas y colócalas en una fuente con el tomate especiado.', 'Hornea 20 min a 200 °C.', 'Casca los huevos encima y hornea 8 min más.']]
    }
  },
  {
    id: 'ma-harira', n: 'Harira (sopa de legumbres)', e: '🥣', tipo: 'cena', tags: ['legumbres', 'carne'],
    ing: [['cordero', 250], ['lentejas', 150], ['garbanzos', 400], ['tomate_triturado', 400], ['tomate_concentrado', 30], ['cebolla', 150], ['apio', 100], ['cilantro', 1], ['perejil_fresco', 1], ['fideos', 60], ['harina', 30], ['jengibre_molido', 3], ['curcuma', 3], ['canela', 1], ['limon', 1], ['aceite', 30], ['sal', 7], ['pimienta', 2]],
    m: {
      fuego: [70, ['Sofríe el cordero en dados pequeños con la cebolla, el apio y las hierbas picadas y las especias 8 min.', 'Añade el tomate, el concentrado, las lentejas y 1,5 l de agua; cuece tapado 40 min.', 'Agrega los garbanzos y los fideos y cuece 8 min.', 'Diluye la harina en un vaso de agua, viértela removiendo y cuece 3 min. Sirve con limón.']],
      robot: [60, ['Pica cebolla, apio y hierbas 5 seg/vel. 5 y sofríe con aceite y el cordero 8 min/120 °C/giro inverso/vel. cuchara.', 'Añade tomate, concentrado, lentejas, especias y 1,2 l de agua: 35 min/100 °C/giro inverso/vel. cuchara.', 'Añade garbanzos, fideos y la harina disuelta: 8 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'ma-bissara', n: 'Bissara (crema de habas secas)', e: '🫛', tipo: 'cena', tags: ['legumbres', 'vegetariano', 'ligera'],
    ing: [['habas_secas', 300], ['ajo', 4], ['comino', 4], ['pimenton', 3], ['aceite', 60], ['limon', 1], ['sal', 6], ['pan_barra', 1]],
    m: {
      fuego: [60, ['Remoja las habas la noche anterior y escúrrelas.', 'Cuécelas con el ajo y 1,2 l de agua 45 min, hasta que se deshagan.', 'Tritura con sal y la mitad del comino hasta tener una crema.', 'Sirve con un chorro de aceite, comino, pimentón, limón y pan.']],
      robot: [50, ['Pon las habas remojadas, el ajo y 1 l de agua: 40 min/100 °C/vel. 1.', 'Añade sal y comino y tritura 1 min/vel. 5-10 progresivo.', 'Sirve con aceite, pimentón, limón y pan.']]
    }
  },
  {
    id: 'ma-pastela-pollo', n: 'Pastela de pollo', e: '🥧', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_muslos', 800], ['cebolla', 400], ['huevo', 4], ['almendras', 100], ['masa_filo', 1], ['mantequilla', 80], ['canela', 5], ['jengibre_molido', 3], ['azafran', 1], ['azucar', 20], ['cilantro', 1], ['perejil_fresco', 1], ['sal', 6], ['pimienta', 2]],
    m: {
      horno: [100, ['Cuece el pollo con la cebolla picada, las especias, las hierbas, sal y 300 ml de agua 40 min. Desmenuza la carne.', 'Reduce la salsa, añade los huevos batidos y remueve hasta cuajarlos.', 'Tritura las almendras tostadas con el azúcar y la mitad de la canela.', 'Forra un molde con hojas de filo pintadas con mantequilla, rellena con almendra, pollo y huevo, cierra con más filo y hornea 25 min a 190 °C. Espolvorea canela.']],
      airfryer: [90, ['Prepara el relleno de pollo, huevo y almendras como en el horno.', 'Monta la pastela en un molde de 20 cm con hojas de filo pintadas con mantequilla.', 'Cocina 15 min a 170 °C, hasta que esté dorada. Espolvorea canela.']]
    }
  },
  {
    id: 'ma-pollo-mhammar', n: 'Pollo asado con especias marroquíes', e: '🍗', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['pollo_entero', 1400], ['patata', 800], ['ajo', 4], ['mantequilla', 40], ['pimenton', 6], ['comino', 4], ['curcuma', 3], ['azafran', 1], ['limon', 1], ['cilantro', 1], ['aceite', 40], ['sal', 8]],
    m: {
      horno: [75, ['Mezcla la mantequilla blanda con ajo picado, especias, cilantro, zumo de limón y sal; unta bien el pollo.', 'Coloca el pollo sobre las patatas en gajos aliñadas con aceite y sal.', 'Hornea 60 min a 200 °C, regando con el jugo a mitad de cocción.']],
      airfryer: [45, ['Unta el pollo troceado con la mantequilla de especias.', 'Cocina las patatas en gajos 10 min a 190 °C.', 'Añade el pollo y cocina 25 min a 190 °C, girándolo a mitad.']],
      fuego: [55, ['Unta el pollo troceado con la mezcla de especias y dóralo en una cazuela.', 'Añade 200 ml de agua, tapa y cuece 30 min.', 'Agrega las patatas fritas o cocidas aparte y deja reducir la salsa 10 min.']]
    }
  },
  {
    id: 'ma-cuscus-siete-verduras', n: 'Cuscús de siete verduras', e: '🥕', tipo: 'comida', tags: ['vegetariano', 'legumbres'],
    ing: [['cuscus', 350], ['zanahoria', 250], ['calabacin', 250], ['calabaza', 300], ['repollo', 250], ['cebolla', 150], ['tomate', 250], ['garbanzos', 400], ['caldo_verduras', 1200], ['pasas', 50], ['ras_el_hanout', 6], ['curcuma', 3], ['cilantro', 1], ['mantequilla', 30], ['aceite', 30], ['sal', 7]],
    m: {
      fuego: [60, ['Sofríe la cebolla y el tomate troceados con aceite y especias 5 min.', 'Añade el caldo, zanahoria y repollo en trozos grandes y cuece 15 min.', 'Agrega calabaza, calabacín, garbanzos y pasas y cuece 15 min más.', 'Hidrata el cuscús con 350 ml del caldo hirviendo y la mantequilla 5 min. Sirve las verduras encima con cilantro.']],
      robot: [55, ['Sofríe cebolla y tomate troceados con aceite 5 min/120 °C/vel. 1.', 'Añade 1 l de caldo, especias, zanahoria y repollo: 15 min/100 °C/giro inverso/vel. cuchara.', 'Pon calabaza y calabacín en el recipiente Varoma y añade garbanzos y pasas al vaso: 20 min/Varoma/giro inverso/vel. cuchara.', 'Hidrata el cuscús aparte con caldo caliente y mantequilla y sirve todo junto.']]
    }
  },
  {
    id: 'ma-tajin-pescado', n: 'Tajín de pescado con chermoula', e: '🐟', tipo: 'comida', tags: ['pescado'],
    ing: [['merluza', 700], ['patata', 500], ['tomate', 300], ['pimiento_verde', 150], ['pimiento_rojo', 150], ['ajo', 4], ['cilantro', 1], ['perejil_fresco', 1], ['limon', 1], ['comino', 4], ['pimenton', 5], ['aceitunas', 80], ['aceite', 60], ['sal', 6]],
    m: {
      fuego: [45, ['Tritura ajo, cilantro, perejil, comino, pimentón, zumo de limón, aceite y sal para la chermoula; unta el pescado con la mitad.', 'Pon en una cazuela las patatas en rodajas finas, los pimientos en tiras y el tomate en rodajas con la chermoula restante.', 'Añade 150 ml de agua, tapa y cuece 20 min.', 'Coloca el pescado encima con las aceitunas, tapa y cuece 10 min más.']],
      horno: [50, ['Prepara la chermoula y marina el pescado.', 'Hornea las patatas, pimientos y tomate con la mitad de la chermoula y 100 ml de agua 25 min a 200 °C.', 'Añade el pescado y las aceitunas y hornea 12 min más.']]
    }
  },
  {
    id: 'ma-tajin-ternera-guisantes', n: 'Tajín de ternera con guisantes y alcachofas', e: '🫛', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_guisar', 800], ['guisantes', 300], ['alcachofa', 500], ['cebolla', 200], ['ajo', 3], ['limon_confitado', 40], ['jengibre_molido', 3], ['curcuma', 3], ['cilantro', 1], ['aceite', 40], ['sal', 6], ['pimienta', 2]],
    m: {
      fuego: [100, ['Dora la ternera con aceite, añade la cebolla picada, el ajo y las especias.', 'Cubre con agua, tapa y cuece 1 h a fuego suave.', 'Limpia las alcachofas, córtalas en cuartos y añádelas con los guisantes y el limón confitado.', 'Cuece 20 min más, hasta que la salsa espese. Termina con cilantro.']],
      robot: [80, ['Sofríe cebolla y ajo troceados con aceite 6 min/120 °C/vel. 1.', 'Añade la ternera, especias, sal y 300 ml de agua: 50 min/100 °C/giro inverso/vel. cuchara.', 'Añade alcachofas, guisantes y limón confitado: 18 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'ma-lentejas-marroquies', n: 'Lentejas a la marroquí', e: '🍲', tipo: 'comida', tags: ['legumbres', 'vegetariano'],
    ing: [['lentejas', 350], ['cebolla', 150], ['tomate', 300], ['ajo', 3], ['pimenton', 5], ['comino', 4], ['curcuma', 2], ['cilantro', 1], ['perejil_fresco', 1], ['aceite', 50], ['sal', 7]],
    m: {
      fuego: [45, ['Pon en la olla las lentejas, la cebolla y el tomate rallados, el ajo picado, especias, hierbas picadas y aceite.', 'Cubre con 1,2 l de agua y cuece tapado 35 min a fuego medio.', 'Ajusta de sal y deja reducir hasta que el caldo quede espeso.']],
      robot: [45, ['Trocea cebolla, tomate, ajo y hierbas 5 seg/vel. 5.', 'Añade lentejas, especias, aceite, sal y 1 l de agua.', 'Cocina 40 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'ma-loubia', n: 'Loubia (alubias blancas guisadas)', e: '🫘', tipo: 'comida', tags: ['legumbres', 'vegetariano', 'rapida'],
    ing: [['alubias', 800], ['tomate_triturado', 400], ['cebolla', 150], ['ajo', 3], ['pimenton', 5], ['comino', 4], ['jengibre_molido', 2], ['cilantro', 1], ['perejil_fresco', 1], ['aceite', 50], ['sal', 5]],
    m: {
      fuego: [30, ['Sofríe la cebolla y el ajo picados con aceite 5 min.', 'Añade el tomate, las especias y las hierbas picadas y cuece 10 min.', 'Agrega las alubias escurridas y 200 ml de agua y cuece 10 min a fuego suave.']],
      robot: [28, ['Trocea cebolla, ajo y hierbas 5 seg/vel. 5 y sofríe con aceite 5 min/120 °C/vel. 1.', 'Añade tomate y especias: 10 min/100 °C/vel. 1.', 'Añade alubias y 150 ml de agua: 10 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'ma-brochetas-kefta', n: 'Brochetas de kefta de cordero', e: '🍢', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['cordero_picado', 600], ['cebolla', 80], ['perejil_fresco', 1], ['cilantro', 1], ['comino', 4], ['pimenton', 4], ['canela', 1], ['tomate', 300], ['pepino', 300], ['pan_pita', 4], ['aceite', 20], ['sal', 6]],
    m: {
      fuego: [25, ['Mezcla la carne con cebolla rallada, hierbas picadas, especias y sal; forma rulos alargados en brochetas.', 'Hazlas a la plancha caliente con un poco de aceite 8 min, girándolas.', 'Sirve con ensalada de tomate y pepino y pan de pita.']],
      airfryer: [20, ['Prepara las brochetas de kefta.', 'Cocina 10 min a 200 °C, girándolas a mitad.', 'Sirve con ensalada de tomate y pepino y pan.']],
      horno: [25, ['Prepara las brochetas y colócalas en una bandeja con papel.', 'Hornea 15 min a 220 °C con grill los últimos 3 min.', 'Sirve con ensalada y pan.']]
    }
  },
  {
    id: 'ma-tanjia', n: 'Tanjia de ternera con limón confitado', e: '🏺', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_guisar', 1000], ['ajo', 8], ['limon_confitado', 50], ['comino', 5], ['azafran', 1], ['curcuma', 2], ['mantequilla', 40], ['aceite', 40], ['sal', 6], ['pan_barra', 1]],
    m: {
      horno: [200, ['Mezcla la carne con los ajos enteros, el limón confitado troceado, las especias, la mantequilla, el aceite y sal.', 'Ponla en una cazuela de barro o una olla apta para horno con 200 ml de agua y tapa bien.', 'Hornea 3 h a 150 °C sin abrir, hasta que la carne se deshaga. Sirve con pan.']],
      fuego: [150, ['Mezcla la carne con ajos, limón confitado, especias, mantequilla, aceite y sal.', 'Ponla en una olla de fondo grueso con 300 ml de agua y tapa.', 'Cuece a fuego mínimo 2 h 20 min, removiendo de vez en cuando. Sirve con pan.']]
    }
  },
  {
    id: 'ma-dorada-chermoula', n: 'Dorada al horno con chermoula', e: '🐠', tipo: 'cena', tags: ['pescado', 'ligera'],
    ing: [['dorada', 1200], ['tomate', 300], ['limon', 2], ['ajo', 3], ['cilantro', 1], ['perejil_fresco', 1], ['comino', 3], ['pimenton', 4], ['aceite', 50], ['sal', 6]],
    m: {
      horno: [35, ['Tritura ajo, hierbas, comino, pimentón, zumo de 1 limón, aceite y sal.', 'Unta las doradas por dentro y por fuera y colócalas sobre rodajas de tomate y limón.', 'Hornea 22 min a 200 °C.']],
      airfryer: [25, ['Unta las doradas (o sus lomos) con la chermoula.', 'Coloca rodajas de tomate debajo.', 'Cocina 14 min a 190 °C.']]
    }
  },
  {
    id: 'ma-sardinas-kefta', n: 'Albóndigas de sardina en salsa de tomate', e: '🐟', tipo: 'comida', tags: ['pescado'],
    ing: [['sardinas', 800], ['arroz', 40], ['tomate_triturado', 500], ['ajo', 4], ['cilantro', 1], ['perejil_fresco', 1], ['comino', 4], ['pimenton', 5], ['limon', 1], ['aceite', 40], ['sal', 6]],
    m: {
      fuego: [45, ['Limpia las sardinas, quítales la espina y pica la carne con la mitad del ajo, hierbas, especias, el arroz crudo y sal.', 'Forma bolitas del tamaño de una nuez.', 'Cuece el tomate con el resto de ajo, especias y aceite 10 min, añade las albóndigas y cuece tapado 20 min. Sirve con limón.']],
      robot: [40, ['Pica la carne de sardina con ajo, hierbas, especias y sal 10 seg/vel. 5; mezcla con el arroz y forma bolitas.', 'Pon en el vaso el tomate, ajo, aceite y especias: 8 min/100 °C/vel. 1.', 'Coloca las bolitas en el Varoma y cocina 20 min/Varoma/vel. 1. Júntalas con la salsa.']]
    }
  },
  {
    id: 'ma-tajin-pollo-orejones', n: 'Tajín de pollo con orejones y almendras', e: '🍑', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_muslos', 1000], ['cebolla', 300], ['orejones', 150], ['almendras', 60], ['miel', 20], ['canela', 3], ['jengibre_molido', 3], ['ras_el_hanout', 4], ['azafran', 1], ['aceite', 40], ['sal', 6]],
    m: {
      fuego: [55, ['Dora el pollo con aceite, añade la cebolla picada y las especias y rehoga 5 min.', 'Añade 250 ml de agua, tapa y cuece 30 min.', 'Agrega los orejones y la miel y cuece 10 min destapado. Sirve con almendras tostadas.']],
      horno: [60, ['Pon en una fuente el pollo marinado con especias y aceite sobre la cebolla en láminas.', 'Añade 200 ml de agua, tapa y hornea 35 min a 190 °C.', 'Añade orejones y miel y hornea 15 min sin tapar. Sirve con almendras.']],
      robot: [45, ['Sofríe la cebolla troceada con aceite 6 min/120 °C/vel. 1.', 'Añade pollo, especias, sal y 200 ml de agua: 25 min/100 °C/giro inverso/vel. cuchara.', 'Añade orejones y miel: 8 min/100 °C/giro inverso/vel. cuchara. Sirve con almendras.']]
    }
  },
  {
    id: 'ma-tajin-cordero-judias', n: 'Tajín de cordero con judías verdes', e: '🫛', tipo: 'comida', tags: ['carne'],
    ing: [['cordero', 900], ['judias_verdes', 500], ['tomate', 400], ['cebolla', 200], ['ajo', 3], ['jengibre_molido', 3], ['pimenton', 4], ['curcuma', 2], ['cilantro', 1], ['aceite', 40], ['sal', 6], ['pimienta', 2]],
    m: {
      fuego: [95, ['Dora el cordero con aceite, añade la cebolla y el ajo picados y las especias.', 'Agrega el tomate rallado y 400 ml de agua, tapa y cuece 1 h a fuego suave.', 'Añade las judías verdes troceadas y cuece 20 min más. Termina con cilantro picado.']],
      robot: [80, ['Sofríe cebolla y ajo troceados con aceite 6 min/120 °C/vel. 1.', 'Añade cordero, tomate troceado, especias, sal y 250 ml de agua: 55 min/100 °C/giro inverso/vel. cuchara.', 'Añade las judías: 18 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'ma-tajin-verduras', n: 'Tajín de verduras con aceitunas', e: '🥔', tipo: 'ambos', tags: ['vegetariano', 'ligera'],
    ing: [['patata', 500], ['zanahoria', 300], ['calabacin', 300], ['pimiento_rojo', 200], ['tomate', 300], ['guisantes', 200], ['cebolla', 150], ['aceitunas', 80], ['limon_confitado', 30], ['ras_el_hanout', 5], ['curcuma', 2], ['cilantro', 1], ['aceite', 50], ['sal', 6]],
    m: {
      fuego: [50, ['Pocha la cebolla en láminas con aceite y las especias 5 min.', 'Coloca por capas patata y zanahoria en bastones, pimiento, calabacín y tomate en rodajas.', 'Añade 200 ml de agua, tapa y cuece a fuego suave 35 min.', 'Agrega guisantes, aceitunas y limón confitado y cuece 8 min más. Sirve con cilantro.']],
      horno: [60, ['Mezcla todas las verduras troceadas con aceite, especias y sal en una fuente.', 'Añade 150 ml de agua, tapa con aluminio y hornea 40 min a 200 °C.', 'Destapa, añade guisantes, aceitunas y limón confitado y hornea 15 min más.']],
      robot: [45, ['Sofríe la cebolla con aceite 5 min/120 °C/vel. 1.', 'Añade patata, zanahoria, tomate, especias, sal y 200 ml de agua y pon el resto de verduras en el Varoma: 30 min/Varoma/giro inverso/vel. cuchara.', 'Junta todo con aceitunas y limón confitado.']]
    }
  },
  {
    id: 'ma-cuscus-cordero-tfaya', n: 'Cuscús de cordero con tfaya', e: '🧅', tipo: 'comida', tags: ['carne'],
    ing: [['cuscus', 350], ['cordero', 800], ['cebolla', 700], ['pasas', 100], ['garbanzos', 400], ['miel', 40], ['canela', 4], ['jengibre_molido', 3], ['curcuma', 2], ['azafran', 1], ['almendras', 50], ['mantequilla', 40], ['aceite', 40], ['sal', 7]],
    m: {
      fuego: [100, ['Dora el cordero con aceite, 200 g de cebolla picada, jengibre, cúrcuma, azafrán y sal; cubre con 1 l de agua y cuece tapado 1 h 10 min.', 'Para la tfaya, pocha el resto de cebolla en juliana con mantequilla 25 min, añade pasas, miel y canela y caramelízala 10 min.', 'Añade los garbanzos al cordero los últimos 10 min.', 'Hidrata el cuscús con 350 ml del caldo caliente 5 min. Sirve con el cordero, la tfaya y las almendras.']],
      robot: [90, ['Sofríe 200 g de cebolla con aceite 5 min/120 °C/vel. 1, añade cordero, especias, sal y 600 ml de agua: 60 min/100 °C/giro inverso/vel. cuchara.', 'Añade garbanzos: 5 min/100 °C/giro inverso/vel. cuchara. Reserva y limpia el vaso.', 'Pon el resto de cebolla en juliana con mantequilla: 20 min/120 °C/giro inverso/vel. cuchara; añade pasas, miel y canela: 10 min/Varoma/giro inverso/vel. cuchara.', 'Hidrata el cuscús con caldo caliente y sirve con cordero, tfaya y almendras.']]
    }
  },
  {
    id: 'ma-cuscus-pescado', n: 'Cuscús de pescado', e: '🐟', tipo: 'comida', tags: ['pescado'],
    ing: [['cuscus', 350], ['merluza', 600], ['gambas', 200], ['tomate', 300], ['zanahoria', 200], ['calabacin', 250], ['pimiento_rojo', 150], ['cebolla', 150], ['caldo_pescado', 800], ['ajo', 3], ['cilantro', 1], ['comino', 3], ['pimenton', 4], ['curcuma', 2], ['aceite', 50], ['sal', 6]],
    m: {
      fuego: [50, ['Sofríe cebolla, ajo y tomate picados con aceite y especias 8 min.', 'Añade el caldo, la zanahoria y el pimiento y cuece 15 min; agrega el calabacín y cuece 5 min.', 'Incorpora la merluza en trozos y las gambas y cuece 6 min.', 'Hidrata el cuscús con 350 ml del caldo hirviendo 5 min y sirve con el pescado, las verduras y cilantro.']],
      robot: [45, ['Sofríe cebolla, ajo y tomate troceados con aceite 6 min/120 °C/vel. 1.', 'Añade caldo, especias, zanahoria y pimiento: 15 min/100 °C/giro inverso/vel. cuchara.', 'Pon calabacín, merluza y gambas en el Varoma: 12 min/Varoma/giro inverso/vel. cuchara.', 'Hidrata el cuscús con el caldo y sirve.']]
    }
  },
  {
    id: 'ma-pastela-pescado', n: 'Pastela de pescado y gambas', e: '🦐', tipo: 'comida', tags: ['pescado'],
    ing: [['merluza', 500], ['gambas', 300], ['calamar', 200], ['fideos_arroz', 100], ['masa_filo', 1], ['ajo', 4], ['cilantro', 1], ['perejil_fresco', 1], ['limon', 1], ['comino', 3], ['pimenton', 4], ['mantequilla', 60], ['aceite', 40], ['sal', 6]],
    m: {
      horno: [60, ['Hidrata los fideos de arroz en agua caliente 5 min y córtalos.', 'Saltea con aceite el ajo, el calamar en trozos, las gambas y la merluza en dados con especias, hierbas, limón y sal 6 min; mezcla con los fideos.', 'Forra un molde con filo pintada con mantequilla, rellena y cierra con más hojas.', 'Hornea 25 min a 190 °C.']],
      airfryer: [50, ['Prepara el relleno de pescado y fideos como en el horno.', 'Monta en un molde de 20 cm con filo pintada con mantequilla.', 'Cocina 15 min a 170 °C, hasta que se dore.']]
    }
  },
  {
    id: 'ma-chorba-verduras', n: 'Chorba de verduras y fideos', e: '🥣', tipo: 'cena', tags: ['vegetariano', 'ligera'],
    ing: [['zanahoria', 200], ['calabacin', 250], ['patata', 250], ['tomate', 300], ['cebolla', 150], ['apio', 80], ['fideos', 80], ['caldo_verduras', 1500], ['cilantro', 1], ['comino', 3], ['curcuma', 2], ['pimenton', 3], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [40, ['Sofríe la cebolla y el apio picados con aceite y especias 5 min.', 'Añade el tomate rallado, las verduras en dados pequeños y el caldo; cuece 20 min.', 'Agrega los fideos y cuece 5 min. Sirve con cilantro picado.']],
      robot: [35, ['Trocea cebolla, apio y tomate 5 seg/vel. 5 y sofríe con aceite 5 min/120 °C/vel. 1.', 'Añade las verduras en dados, especias y caldo: 20 min/100 °C/giro inverso/vel. cuchara.', 'Añade los fideos: 5 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'ma-tajin-cordero-membrillo', n: 'Tajín de cordero con membrillo', e: '🍐', tipo: 'comida', tags: ['carne'],
    ing: [['cordero', 900], ['membrillo', 600], ['cebolla', 300], ['miel', 30], ['mantequilla', 30], ['canela', 4], ['jengibre_molido', 3], ['azafran', 1], ['sesamo', 10], ['aceite', 30], ['sal', 6], ['pimienta', 2]],
    m: {
      fuego: [110, ['Dora el cordero con aceite, añade la cebolla picada, el jengibre, el azafrán, la mitad de la canela, sal y pimienta.', 'Cubre con agua a ras, tapa y cuece 1 h 15 min a fuego suave.', 'Pela el membrillo, córtalo en gajos y dóralo en la mantequilla con la miel y el resto de canela 10 min.', 'Añádelo al tajín los últimos 10 min y sirve con sésamo tostado.']],
      horno: [130, ['Dora el cordero con la cebolla y las especias en una cazuela apta para horno.', 'Añade 400 ml de agua, tapa y hornea 1 h 30 min a 170 °C.', 'Añade el membrillo caramelizado con miel y mantequilla y hornea 20 min más. Sirve con sésamo.']]
    }
  },
  {
    id: 'ma-zaalouk-huevos', n: 'Zaalouk de berenjena con huevos', e: '🍆', tipo: 'cena', tags: ['vegetariano', 'ligera'],
    ing: [['berenjena', 800], ['tomate', 500], ['ajo', 3], ['huevo', 4], ['comino', 4], ['pimenton', 4], ['cilantro', 1], ['perejil_fresco', 1], ['limon', 1], ['aceite', 50], ['sal', 6], ['pan_barra', 1]],
    m: {
      fuego: [40, ['Pela la berenjena a tiras, trocéala y cuécela al vapor o hervida 10 min; escurre.', 'Rehoga el ajo con aceite, añade el tomate rallado y las especias y cuece 8 min.', 'Agrega la berenjena, aplástala con un tenedor y cuece 10 min con las hierbas y el limón.', 'Haz huecos, casca los huevos, tapa y cuaja 5 min. Sirve con pan.']],
      horno: [50, ['Asa las berenjenas enteras 35 min a 220 °C, pélalas y pícalas.', 'Mézclalas con el tomate sofrito con ajo, especias, hierbas y limón en una fuente.', 'Casca los huevos encima y hornea 8 min.']]
    }
  },
  {
    id: 'ma-maakouda', n: 'Maakouda (tortitas de patata especiadas)', e: '🥔', tipo: 'cena', tags: ['vegetariano', 'niños'],
    ing: [['patata', 800], ['huevo', 2], ['ajo', 2], ['perejil_fresco', 1], ['cilantro', 1], ['comino', 3], ['curcuma', 2], ['harina', 40], ['aceite_girasol', 150], ['lechuga', 1], ['tomate', 300], ['sal', 6]],
    m: {
      fuego: [40, ['Cuece las patatas peladas 20 min y aplástalas.', 'Mezcla con huevo, ajo y hierbas picados, especias y sal; forma tortitas y pásalas por harina.', 'Fríelas en aceite caliente 3 min por lado. Sirve con ensalada de lechuga y tomate.']],
      airfryer: [35, ['Prepara la masa de patata y forma las tortitas.', 'Pincélalas con aceite y cocina 12 min a 200 °C, girándolas a mitad.', 'Sirve con ensalada.']]
    }
  },
  {
    id: 'ma-merguez-verduras', n: 'Merguez con verduras asadas y cuscús', e: '🌭', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['merguez', 600], ['cuscus', 250], ['calabacin', 300], ['pimiento_rojo', 200], ['cebolla_morada', 150], ['tomate_cherry', 200], ['comino', 3], ['harissa', 20], ['aceite', 40], ['sal', 4]],
    m: {
      horno: [30, ['Pon en una bandeja las verduras troceadas con aceite, comino y sal y las merguez encima.', 'Hornea 22 min a 210 °C.', 'Hidrata el cuscús con 250 ml de agua hirviendo, sal y aceite 5 min y sirve con las merguez, las verduras y la harissa.']],
      airfryer: [25, ['Cocina las verduras troceadas con aceite y comino 8 min a 200 °C.', 'Añade las merguez y cocina 10 min más.', 'Sirve con el cuscús hidratado y harissa.']],
      fuego: [25, ['Dora las merguez en una sartén 8 min y resérvalas.', 'Saltea las verduras en la misma grasa 8 min con comino.', 'Sirve con el cuscús hidratado y harissa.']]
    }
  },
  {
    id: 'ma-pollo-kdra', n: 'Pollo kdra con garbanzos y cebolla', e: '🧅', tipo: 'comida', tags: ['carne', 'legumbres'],
    ing: [['pollo_muslos', 1000], ['cebolla', 600], ['garbanzos', 400], ['mantequilla', 40], ['azafran', 1], ['curcuma', 2], ['canela', 2], ['pimienta', 3], ['perejil_fresco', 1], ['almendras', 50], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [60, ['Pon en una cazuela el pollo con 200 g de cebolla rallada, la mantequilla, el aceite, las especias y sal; rehoga 5 min.', 'Cubre con 400 ml de agua, tapa y cuece 25 min.', 'Añade el resto de cebolla en juliana y los garbanzos y cuece 20 min, hasta que la cebolla esté muy tierna.', 'Sirve con perejil y almendras tostadas.']],
      robot: [55, ['Trocea 200 g de cebolla 5 seg/vel. 5 y sofríe con mantequilla y aceite 5 min/120 °C/vel. 1.', 'Añade pollo, especias, sal y 300 ml de agua: 25 min/100 °C/giro inverso/vel. cuchara.', 'Añade la cebolla en juliana y los garbanzos: 18 min/100 °C/giro inverso/vel. cuchara. Sirve con perejil y almendras.']]
    }
  },
  {
    id: 'ma-tajin-cordero-berenjenas', n: 'Tajín de cordero con berenjenas', e: '🍆', tipo: 'comida', tags: ['carne'],
    ing: [['cordero', 900], ['berenjena', 700], ['tomate', 400], ['cebolla', 200], ['ajo', 4], ['comino', 4], ['pimenton', 5], ['jengibre_molido', 2], ['cilantro', 1], ['aceite', 80], ['sal', 7]],
    m: {
      fuego: [100, ['Dora el cordero con aceite, la cebolla y el ajo picados y las especias.', 'Añade el tomate rallado y 400 ml de agua, tapa y cuece 1 h 10 min.', 'Fríe o asa la berenjena en rodajas gruesas y añádela al guiso los últimos 10 min. Sirve con cilantro.']],
      horno: [110, ['Dora el cordero con cebolla, ajo y especias en una cazuela apta para horno.', 'Añade tomate y 300 ml de agua, tapa y hornea 1 h 15 min a 175 °C.', 'Añade la berenjena en rodajas pincelada con aceite y hornea 20 min destapado.']]
    }
  },
  {
    id: 'ma-mechoui', n: 'Paletilla de cordero asada al comino (mechoui)', e: '🍖', tipo: 'comida', tags: ['carne'],
    ing: [['cordero', 1400], ['mantequilla', 60], ['ajo', 4], ['comino', 8], ['pimenton', 5], ['patata', 800], ['aceite', 30], ['sal', 10]],
    m: {
      horno: [160, ['Mezcla la mantequilla blanda con ajo machacado, la mitad del comino, pimentón y sal; unta la paletilla (o el cordero en trozos grandes).', 'Ponla sobre las patatas en rodajas con aceite y 200 ml de agua; tapa con aluminio y hornea 2 h a 160 °C.', 'Destapa y dora 20 min a 210 °C. Sirve con el resto de comino mezclado con sal para mojar.']],
      airfryer: [70, ['Unta el cordero troceado con la mantequilla especiada.', 'Cocina 45 min a 160 °C, girándolo a mitad.', 'Sube a 200 °C 10 min para dorarlo. Sirve con comino y sal.']]
    }
  },
  {
    id: 'ma-brochetas-pollo', n: 'Brochetas de pollo a la marroquí', e: '🍢', tipo: 'cena', tags: ['carne', 'rapida', 'niños'],
    ing: [['pollo_pechuga', 700], ['yogur', 1], ['ajo', 2], ['ras_el_hanout', 5], ['curcuma', 2], ['limon', 1], ['cebolla_morada', 100], ['tomate', 300], ['pepino', 300], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [25, ['Marina el pollo en dados con yogur, ajo, especias, zumo de limón, aceite y sal 15 min.', 'Ensártalo en brochetas y hazlo a la plancha 8–10 min, girándolo.', 'Sirve con ensalada de tomate, pepino y cebolla.']],
      airfryer: [25, ['Marina el pollo 15 min y ensártalo.', 'Cocina 12 min a 200 °C, girando a mitad.', 'Sirve con la ensalada.']],
      horno: [30, ['Marina el pollo 15 min y ensártalo.', 'Hornea 15 min a 220 °C con grill los últimos minutos.', 'Sirve con la ensalada.']]
    }
  },
  {
    id: 'ma-tajin-calamares', n: 'Tajín de calamares con tomate', e: '🦑', tipo: 'comida', tags: ['pescado'],
    ing: [['calamar', 800], ['tomate_triturado', 500], ['pimiento_verde', 150], ['cebolla', 150], ['ajo', 4], ['aceitunas', 60], ['cilantro', 1], ['perejil_fresco', 1], ['comino', 3], ['pimenton', 5], ['aceite', 40], ['sal', 6]],
    m: {
      fuego: [50, ['Sofríe cebolla, pimiento y ajo picados con aceite 8 min.', 'Añade el calamar en anillas y rehoga 5 min.', 'Incorpora tomate, especias y la mitad de las hierbas, tapa y cuece 30 min a fuego suave.', 'Añade las aceitunas y el resto de hierbas y cuece 5 min.']],
      robot: [45, ['Trocea cebolla, pimiento y ajo 5 seg/vel. 5 y sofríe con aceite 7 min/120 °C/vel. 1.', 'Añade calamar, tomate, especias y hierbas: 30 min/100 °C/giro inverso/vel. cuchara.', 'Añade aceitunas: 3 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'ma-sopa-pescado', n: 'Sopa de pescado a la marroquí', e: '🍲', tipo: 'cena', tags: ['pescado', 'ligera'],
    ing: [['merluza', 400], ['gambas', 200], ['tomate', 300], ['cebolla', 150], ['pimiento_rojo', 100], ['fideos', 80], ['caldo_pescado', 1500], ['ajo', 3], ['cilantro', 1], ['comino', 3], ['pimenton', 4], ['limon', 1], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [35, ['Sofríe cebolla, pimiento y ajo picados con aceite 6 min, añade el tomate rallado y las especias y cuece 5 min.', 'Agrega el caldo y cuece 10 min.', 'Añade los fideos y, a los 3 min, la merluza en trozos y las gambas; cuece 4 min. Sirve con cilantro y limón.']],
      robot: [32, ['Trocea cebolla, pimiento, ajo y tomate 5 seg/vel. 5 y sofríe con aceite 7 min/120 °C/vel. 1.', 'Añade caldo y especias: 10 min/100 °C/vel. 1.', 'Añade fideos, merluza y gambas: 6 min/100 °C/giro inverso/vel. cuchara. Sirve con cilantro y limón.']]
    }
  },
  {
    id: 'ma-ensalada-marroqui-atun', n: 'Ensalada marroquí con atún y huevo', e: '🥗', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['tomate', 600], ['pepino', 300], ['pimiento_verde', 150], ['cebolla_morada', 100], ['atun', 3], ['huevo', 4], ['aceitunas', 60], ['perejil_fresco', 1], ['comino', 2], ['limon', 1], ['aceite', 50], ['sal', 4]],
    m: {
      sin: [20, ['Pica en dados pequeños el tomate, el pepino, el pimiento y la cebolla.', 'Aliña con aceite, zumo de limón, comino, perejil picado y sal.', 'Sirve con el atún escurrido, los huevos cocidos en cuartos y las aceitunas.']],
      fuego: [20, ['Cuece los huevos 10 min y enfríalos.', 'Pica y aliña las verduras con aceite, limón, comino, perejil y sal.', 'Sirve con atún, huevo y aceitunas.']]
    }
  },
  {
    id: 'ma-briouats-kefta', n: 'Briouats de kefta con ensalada', e: '🥟', tipo: 'cena', tags: ['carne'],
    ing: [['carne_picada_ternera', 400], ['cebolla', 100], ['huevo', 1], ['masa_filo', 1], ['mantequilla', 50], ['perejil_fresco', 1], ['cilantro', 1], ['comino', 3], ['pimenton', 3], ['canela', 1], ['lechuga', 1], ['tomate', 300], ['aceite', 20], ['sal', 5]],
    m: {
      horno: [45, ['Sofríe la cebolla picada con aceite, añade la carne, las especias y sal y cocina 8 min; fuera del fuego mezcla con las hierbas y el huevo batido.', 'Corta la filo en tiras anchas, pon una cucharada de relleno y dobla en triángulos; pinta con mantequilla derretida.', 'Hornea 15 min a 200 °C. Sirve con ensalada de lechuga y tomate.']],
      airfryer: [35, ['Prepara el relleno y forma los triángulos pintados con mantequilla.', 'Cocina 8 min a 190 °C, girándolos a mitad.', 'Sirve con ensalada.']]
    }
  },
  {
    id: 'ma-tajin-ternera-zanahorias', n: 'Tajín de ternera con zanahorias', e: '🥕', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_guisar', 900], ['zanahoria', 700], ['cebolla', 200], ['ajo', 3], ['comino', 4], ['pimenton', 4], ['jengibre_molido', 2], ['curcuma', 2], ['perejil_fresco', 1], ['cilantro', 1], ['aceitunas', 60], ['aceite', 40], ['sal', 6]],
    m: {
      fuego: [105, ['Dora la ternera con aceite, la cebolla y el ajo picados y las especias.', 'Cubre con agua, tapa y cuece 1 h 10 min.', 'Añade las zanahorias en bastones, las hierbas picadas y las aceitunas y cuece 25 min más.']],
      robot: [85, ['Sofríe cebolla y ajo troceados con aceite 6 min/120 °C/vel. 1.', 'Añade ternera, especias, sal y 300 ml de agua: 55 min/100 °C/giro inverso/vel. cuchara.', 'Añade zanahorias, hierbas y aceitunas: 22 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'ma-tajin-pollo-patatas', n: 'Tajín de pollo con patatas y guisantes', e: '🍗', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['pollo_muslos', 900], ['patata', 600], ['guisantes', 250], ['cebolla', 200], ['tomate', 200], ['ajo', 3], ['aceitunas', 80], ['jengibre_molido', 2], ['curcuma', 3], ['pimenton', 3], ['perejil_fresco', 1], ['aceite', 40], ['sal', 7]],
    m: {
      fuego: [60, ['Dora el pollo con aceite, la cebolla y el ajo picados y las especias.', 'Añade el tomate rallado y 300 ml de agua y cuece tapado 15 min.', 'Agrega las patatas en gajos, tapa y cuece 25 min.', 'Añade guisantes y aceitunas y cuece 8 min. Sirve con perejil.']],
      horno: [65, ['Mezcla en una fuente pollo, patatas en gajos, cebolla en láminas, tomate rallado, ajo, especias, aceite y sal.', 'Añade 200 ml de agua, tapa y hornea 35 min a 200 °C.', 'Destapa, añade guisantes y aceitunas y hornea 15 min más.']],
      robot: [50, ['Sofríe cebolla, ajo y tomate troceados con aceite 6 min/120 °C/vel. 1.', 'Añade pollo, especias, sal y 250 ml de agua y pon las patatas en el cestillo: 30 min/100 °C/giro inverso/vel. cuchara.', 'Junta todo con guisantes y aceitunas: 6 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'ma-kamounia', n: 'Kamounia (guiso de ternera al comino)', e: '🥘', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_guisar', 900], ['cebolla', 200], ['ajo', 5], ['tomate_triturado', 200], ['comino', 10], ['pimenton', 5], ['perejil_fresco', 1], ['cilantro', 1], ['aceite', 50], ['sal', 6], ['pan_barra', 1]],
    m: {
      fuego: [100, ['Dora la ternera en dados con aceite y retira.', 'Rehoga la cebolla y el ajo picados, añade el comino, el pimentón y el tomate.', 'Vuelve la carne, cubre con agua, tapa y cuece 1 h 15 min, hasta que la salsa quede espesa.', 'Termina con las hierbas picadas y sirve con pan.']],
      robot: [80, ['Sofríe cebolla y ajo troceados con aceite 6 min/120 °C/vel. 1.', 'Añade la ternera, especias, tomate, sal y 300 ml de agua: 70 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con las hierbas picadas y pan.']]
    }
  },
  {
    id: 'ma-sardinas-rellenas', n: 'Sardinas rellenas de chermoula', e: '🐟', tipo: 'cena', tags: ['pescado'],
    ing: [['sardinas', 1000], ['ajo', 3], ['cilantro', 1], ['perejil_fresco', 1], ['comino', 3], ['pimenton', 4], ['limon', 2], ['harina', 60], ['aceite', 60], ['tomate', 300], ['sal', 6]],
    m: {
      fuego: [35, ['Abre las sardinas en libro y quita la espina.', 'Tritura ajo, hierbas, especias, zumo de 1 limón, 2 cucharadas de aceite y sal; unta una sardina, cubre con otra y presiona.', 'Pásalas por harina y fríelas 2 min por lado. Sirve con ensalada de tomate y limón.']],
      airfryer: [25, ['Prepara las sardinas rellenas de chermoula.', 'Pincélalas con aceite y cocina 8 min a 200 °C.', 'Sirve con tomate y limón.']],
      horno: [30, ['Prepara las sardinas rellenas y colócalas en una bandeja con aceite.', 'Hornea 12 min a 210 °C.', 'Sirve con tomate y limón.']]
    }
  },
  {
    id: 'ma-tajin-gambas', n: 'Tajín de gambas con tomate y pimientos', e: '🦐', tipo: 'cena', tags: ['pescado', 'rapida'],
    ing: [['gambas', 600], ['tomate_triturado', 400], ['pimiento_rojo', 150], ['pimiento_verde', 150], ['ajo', 5], ['guindilla', 1], ['cilantro', 1], ['comino', 3], ['pimenton', 4], ['aceite', 50], ['sal', 5], ['pan_barra', 1]],
    m: {
      fuego: [25, ['Sofríe los pimientos en tiras y el ajo laminado con aceite y la guindilla 8 min.', 'Añade el tomate y las especias y cuece 8 min.', 'Agrega las gambas, tapa y cocina 4 min. Sirve con cilantro y pan.']],
      horno: [30, ['Mezcla en una fuente los pimientos, el ajo, el tomate, las especias y el aceite.', 'Hornea 15 min a 210 °C.', 'Añade las gambas y hornea 7 min más. Sirve con cilantro.']]
    }
  },
  {
    id: 'ma-tajin-pollo-calabaza', n: 'Tajín de pollo con calabaza y canela', e: '🎃', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_muslos', 900], ['calabaza', 700], ['cebolla', 250], ['ajo', 2], ['miel', 20], ['canela', 4], ['jengibre_molido', 2], ['curcuma', 2], ['sesamo', 10], ['aceite', 40], ['sal', 6], ['pimienta', 2]],
    m: {
      fuego: [60, ['Dora el pollo con aceite, añade la cebolla y el ajo picados y las especias.', 'Añade 300 ml de agua, tapa y cuece 25 min.', 'Coloca la calabaza en trozos grandes encima, rocía con la miel, tapa y cuece 20 min. Sirve con sésamo.']],
      horno: [60, ['Pon el pollo y la cebolla con especias, aceite y 200 ml de agua en una fuente; hornea 25 min a 200 °C.', 'Añade la calabaza en trozos con la miel.', 'Hornea 25 min más y sirve con sésamo.']]
    }
  },
  {
    id: 'ma-bocadillo-kefta', n: 'Bocadillo de kefta con tomate y huevo', e: '🥪', tipo: 'cena', tags: ['carne', 'rapida', 'niños'],
    ing: [['carne_picada_ternera', 400], ['pan_barra', 2], ['huevo', 4], ['tomate', 300], ['cebolla', 80], ['perejil_fresco', 1], ['comino', 3], ['pimenton', 3], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [25, ['Mezcla la carne con cebolla rallada, perejil picado, especias y sal y forma albóndigas planas.', 'Dóralas en una sartén 6 min, añade el tomate rallado y cocina 5 min; casca los huevos encima y deja que cuajen.', 'Rellena el pan abierto con la kefta, el tomate y el huevo.']],
      airfryer: [20, ['Forma las kefta planas y cocínalas 8 min a 200 °C.', 'Cuaja los huevos en la sartén o en un molde en la freidora 5 min a 180 °C.', 'Rellena el pan con kefta, tomate en rodajas y huevo.']]
    }
  },
  {
    id: 'ma-tajin-alcachofas-habas', n: 'Tajín de alcachofas y habas', e: '🌿', tipo: 'comida', tags: ['vegetariano', 'ligera'],
    ing: [['alcachofa', 800], ['habas', 400], ['patata', 300], ['cebolla', 150], ['ajo', 2], ['limon_confitado', 40], ['limon', 1], ['curcuma', 2], ['jengibre_molido', 2], ['cilantro', 1], ['aceite', 50], ['sal', 6]],
    m: {
      fuego: [45, ['Limpia las alcachofas, córtalas en cuartos y déjalas en agua con limón.', 'Pocha la cebolla y el ajo con aceite y especias, añade las patatas en dados y 300 ml de agua y cuece 10 min.', 'Agrega alcachofas, habas y limón confitado, tapa y cuece 20 min. Sirve con cilantro.']],
      robot: [40, ['Sofríe cebolla y ajo troceados con aceite 5 min/120 °C/vel. 1.', 'Añade patata, alcachofas, habas, especias, limón confitado, sal y 250 ml de agua.', 'Cocina 25 min/100 °C/giro inverso/vel. cuchara. Sirve con cilantro.']]
    }
  },
  {
    id: 'ma-albondigas-pollo-limon', n: 'Albóndigas de pollo al limón y cúrcuma', e: '🍋', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['pollo_pechuga', 600], ['cebolla', 250], ['huevo', 1], ['pan_rallado', 40], ['limon', 2], ['ajo', 2], ['curcuma', 3], ['jengibre_molido', 2], ['perejil_fresco', 1], ['arroz_largo', 300], ['aceite', 40], ['sal', 7]],
    m: {
      fuego: [45, ['Pica el pollo y mézclalo con 50 g de cebolla rallada, huevo, pan rallado, perejil, la mitad de la cúrcuma y sal; forma albóndigas.', 'Pocha el resto de cebolla y el ajo con aceite y especias, añade 400 ml de agua y el zumo de los limones.', 'Cuece las albóndigas en la salsa tapadas 20 min. Sirve con arroz cocido.']],
      robot: [40, ['Tritura el pollo con cebolla, ajo, perejil, huevo, pan, especias y sal 15 seg/vel. 5; forma albóndigas.', 'Sofríe la cebolla restante con aceite 5 min/120 °C/vel. 1; añade agua, limón y cúrcuma.', 'Pon las albóndigas en el Varoma: 20 min/Varoma/vel. 1. Sírvelas con la salsa y arroz.']]
    }
  },
  {
    id: 'ma-boquerones-chermoula', n: 'Boquerones fritos a la chermoula', e: '🐟', tipo: 'cena', tags: ['pescado', 'rapida'],
    ing: [['boquerones', 800], ['ajo', 3], ['cilantro', 1], ['perejil_fresco', 1], ['comino', 3], ['pimenton', 4], ['limon', 2], ['harina', 100], ['aceite_girasol', 200], ['lechuga', 1], ['sal', 6]],
    m: {
      fuego: [30, ['Limpia los boquerones y márinalos 15 min con ajo y hierbas picados, especias, zumo de limón y sal.', 'Escúrrelos, enharínalos y fríelos en tandas en aceite caliente 2 min.', 'Sirve con lechuga y limón.']],
      airfryer: [30, ['Marina los boquerones con la chermoula 15 min.', 'Enharínalos ligeramente y pincélalos con aceite.', 'Cocina 8 min a 200 °C en una sola capa. Sirve con limón.']]
    }
  },
  {
    id: 'ma-calamares-rellenos', n: 'Calamares rellenos de arroz y chermoula', e: '🦑', tipo: 'comida', tags: ['pescado'],
    ing: [['calamar', 900], ['arroz', 120], ['gambas', 150], ['tomate_triturado', 400], ['cebolla', 100], ['ajo', 3], ['cilantro', 1], ['perejil_fresco', 1], ['comino', 3], ['pimenton', 4], ['aceite', 40], ['sal', 6]],
    m: {
      fuego: [60, ['Pica los tentáculos y las gambas y saltéalos con la cebolla, ajo, hierbas y especias; mezcla con el arroz crudo.', 'Rellena los calamares hasta la mitad y ciérralos con un palillo.', 'Cuécelos en el tomate con 200 ml de agua, tapados, 40 min a fuego suave.']],
      horno: [65, ['Prepara el relleno y rellena los calamares.', 'Colócalos en una fuente con el tomate, aceite y 200 ml de agua y tapa.', 'Hornea 45 min a 180 °C.']]
    }
  },
  {
    id: 'ma-tajin-ternera-coliflor', n: 'Tajín de ternera con coliflor', e: '🥦', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_guisar', 800], ['coliflor', 700], ['cebolla', 200], ['tomate', 300], ['ajo', 3], ['curcuma', 3], ['jengibre_molido', 2], ['pimenton', 3], ['cilantro', 1], ['perejil_fresco', 1], ['aceite', 40], ['sal', 6]],
    m: {
      fuego: [100, ['Dora la ternera con aceite, la cebolla y el ajo picados y las especias.', 'Añade el tomate rallado, cubre con agua, tapa y cuece 1 h 10 min.', 'Agrega la coliflor en ramilletes y las hierbas y cuece 15 min, hasta que esté tierna.']],
      robot: [85, ['Sofríe cebolla, ajo y tomate troceados con aceite 6 min/120 °C/vel. 1.', 'Añade ternera, especias, sal y 300 ml de agua: 60 min/100 °C/giro inverso/vel. cuchara.', 'Pon la coliflor en el Varoma: 18 min/Varoma/giro inverso/vel. cuchara. Junta todo con las hierbas.']]
    }
  },
  {
    id: 'ma-seffa-pollo', n: 'Seffa de fideos con pollo', e: '🍜', tipo: 'comida', tags: ['carne'],
    ing: [['fideos_arroz', 400], ['pollo_muslos', 800], ['cebolla', 300], ['almendras', 80], ['mantequilla', 50], ['azafran', 1], ['jengibre_molido', 2], ['curcuma', 2], ['canela', 4], ['azucar', 20], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [60, ['Cuece el pollo con la cebolla picada, las especias (salvo la canela), aceite, sal y 500 ml de agua 40 min; desmenúzalo y reduce la salsa.', 'Hidrata los fideos de arroz en agua caliente 5 min, escúrrelos y mézclalos con la mantequilla.', 'Haz una montaña de fideos con el pollo escondido dentro.', 'Cubre con almendras tostadas picadas con azúcar y canela. Sirve con la salsa aparte.']],
      robot: [55, ['Sofríe la cebolla con aceite 5 min/120 °C/vel. 1, añade pollo, especias, sal y 400 ml de agua: 35 min/100 °C/giro inverso/vel. cuchara.', 'Desmenuza el pollo y reserva la salsa.', 'Hidrata los fideos con agua caliente y mantequilla, monta con el pollo dentro y decora con almendra, azúcar y canela.']]
    }
  },
  {
    id: 'ma-tajin-patatas-huevo', n: 'Tajín de patatas y huevos al comino', e: '🥚', tipo: 'cena', tags: ['vegetariano', 'niños'],
    ing: [['patata', 800], ['huevo', 6], ['tomate', 300], ['cebolla', 150], ['ajo', 2], ['comino', 4], ['pimenton', 4], ['curcuma', 2], ['perejil_fresco', 1], ['aceite', 50], ['sal', 6]],
    m: {
      fuego: [40, ['Pocha la cebolla y el ajo picados con aceite y las especias, añade el tomate rallado y cuece 5 min.', 'Agrega las patatas en rodajas y 250 ml de agua, tapa y cuece 20 min.', 'Haz huecos, casca los huevos, espolvorea comino y perejil, tapa y cuaja 6 min.']],
      horno: [50, ['Mezcla las patatas en rodajas con el sofrito de cebolla, tomate y especias en una fuente con 150 ml de agua.', 'Hornea tapado 30 min a 200 °C.', 'Casca los huevos encima y hornea 8 min más. Termina con perejil.']]
    }
  }
]);
