/* MC Food Diary · cocina de Grecia 🇬🇷. Formato y normas: recetas/GUIA-RECETAS.md */

MC_ADD_ING({
  orzo: ['Pasta orzo (piñones)', 'despensa', 2.8, 'kg'],
  judiones: ['Judiones cocidos (bote)', 'despensa', 3.5, 'kg']
});

/* ---- Carnes ---- */
MC_ADD('gr', [
  {
    id: 'gr-moussaka', n: 'Moussaka', e: '🍆', tipo: 'comida', tags: ['carne'],
    ing: [['berenjena', 900], ['patata', 400], ['carne_picada', 500], ['cebolla', 150], ['ajo', 2], ['tomate_triturado', 400], ['vino_tinto', 100], ['canela', 2], ['leche', 600], ['harina', 50], ['mantequilla', 50], ['huevo', 1], ['queso_rallado', 80], ['nuez_moscada', 1], ['aceite', 50], ['sal', 7]],
    m: {
      horno: [90, ['Corta berenjenas y patatas en rodajas, úntalas con aceite y sal y ásalas 20 min a 210 °C.', 'Sofríe la cebolla y el ajo, dora la carne, añade el vino, el tomate y la canela y cuece 15 min.', 'Haz una bechamel con mantequilla, harina y leche; fuera del fuego añade el huevo, la mitad del queso y la nuez moscada.', 'Monta capas de patata, berenjena, carne y berenjena. Cubre con la bechamel y el queso y hornea 40 min a 180 °C. Reposa 15 min.']],
      airfryer: [80, ['Cocina las rodajas de berenjena y patata con un poco de aceite 12 min a 200 °C, en tandas.', 'Prepara la carne y la bechamel en el fuego.', 'Monta en un molde apto y cocina tapado 20 min a 170 °C. Destapa y dora 8 min a 190 °C.']]
    }
  },
  {
    id: 'gr-pastitsio', n: 'Pastitsio (pasta gratinada griega)', e: '🧀', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['macarron', 400], ['carne_picada', 500], ['cebolla', 150], ['tomate_triturado', 400], ['canela', 2], ['clavo', 1], ['leche', 700], ['harina', 60], ['mantequilla', 60], ['huevo', 2], ['queso_rallado', 120], ['nuez_moscada', 1], ['aceite', 20], ['sal', 7]],
    m: {
      horno: [80, ['Sofríe la cebolla, dora la carne y añade el tomate, la canela y el clavo. Cuece 15 min.', 'Cuece la pasta 3 min menos de lo indicado y mézclala con 1 huevo y un tercio del queso.', 'Prepara una bechamel espesa con mantequilla, harina y leche; añade el otro huevo, la nuez moscada y otro tercio del queso.', 'Pon en una fuente la mitad de la pasta, la carne, el resto de la pasta y la bechamel. Espolvorea el queso y hornea 40 min a 180 °C.']]
    }
  },
  {
    id: 'gr-souvlaki-cerdo', n: 'Souvlaki de cerdo con tzatziki', e: '🍢', tipo: 'cena', tags: ['carne'],
    ing: [['cerdo_lomo', 700], ['limon', 2], ['ajo', 3], ['oregano', 3], ['yogur_griego', 3], ['pepino', 250], ['eneldo', 1], ['tomate', 300], ['cebolla_morada', 80], ['pan_pita', 4], ['aceite', 50], ['sal', 6]],
    m: {
      fuego: [35, ['Corta la carne en dados y márinala 20 min con aceite, zumo de limón, 2 ajos, orégano y sal. Ensártala en brochetas.', 'Para el tzatziki, ralla el pepino, escúrrelo bien y mézclalo con el yogur, el ajo restante, eneldo, sal y un hilo de aceite.', 'Haz las brochetas en una plancha caliente 8–10 min, girándolas.', 'Sirve con pan de pita, tomate, cebolla y tzatziki.']],
      airfryer: [30, ['Marina la carne y prepara el tzatziki.', 'Cocina las brochetas 12 min a 200 °C, girándolas a mitad.', 'Sirve con pita, tomate, cebolla y tzatziki.']],
      horno: [35, ['Marina la carne y prepara el tzatziki.', 'Hornea las brochetas 18 min a 220 °C con el grill, girándolas a mitad.', 'Sirve con pita, tomate, cebolla y tzatziki.']]
    }
  },
  {
    id: 'gr-souvlaki-pollo', n: 'Brochetas de pollo al limón y orégano con arroz', e: '🍢', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['pollo_pechuga', 700], ['limon', 2], ['ajo', 2], ['oregano', 3], ['pimiento_rojo', 200], ['cebolla', 150], ['arroz_largo', 250], ['yogur_griego', 2], ['aceite', 50], ['sal', 6]],
    m: {
      fuego: [35, ['Marina el pollo en dados con aceite, limón, ajo, orégano y sal 20 min. Ensártalo con el pimiento y la cebolla.', 'Cuece el arroz en agua con sal 15 min.', 'Haz las brochetas a la plancha 10 min, girándolas.', 'Sirve con el arroz y el yogur con un poco de sal y limón.']],
      airfryer: [30, ['Marina y monta las brochetas.', 'Cocina 12 min a 200 °C, girándolas a mitad.', 'Sirve con arroz y yogur.']],
      horno: [35, ['Marina y monta las brochetas.', 'Hornea 20 min a 220 °C, girándolas a mitad.', 'Sirve con arroz y yogur.']]
    }
  },
  {
    id: 'gr-gyros-pollo', n: 'Gyros de pollo en pita', e: '🌯', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['pollo_muslos', 700], ['pan_pita', 4], ['yogur_griego', 3], ['pepino', 200], ['tomate', 300], ['cebolla_morada', 80], ['patata', 500], ['ajo', 2], ['pimenton', 3], ['oregano', 2], ['comino', 1], ['limon', 1], ['aceite', 40], ['sal', 6]],
    m: {
      fuego: [40, ['Marina los contramuslos con pimentón, orégano, comino, ajo, limón, aceite y sal 20 min.', 'Corta las patatas en bastones y fríelas o hazlas al horno.', 'Cocina el pollo en una sartén 6 min por lado y córtalo en tiras.', 'Rellena las pitas con pollo, tomate, cebolla, unas patatas y yogur con pepino rallado.']],
      airfryer: [35, ['Marina el pollo.', 'Cocina las patatas en bastones 18 min a 200 °C y resérvalas.', 'Cocina el pollo 14 min a 190 °C, córtalo en tiras y monta las pitas.']],
      horno: [45, ['Marina el pollo y ponlo en una bandeja con las patatas en bastones.', 'Hornea 30 min a 210 °C.', 'Corta el pollo en tiras y monta las pitas.']]
    }
  },
  {
    id: 'gr-keftedes', n: 'Keftedes (albóndigas griegas con hierbabuena)', e: '🧆', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['carne_picada', 600], ['cebolla', 100], ['ajo', 1], ['pan_molde', 1], ['huevo', 1], ['hierbabuena', 1], ['oregano', 2], ['harina', 30], ['yogur_griego', 2], ['tomate', 300], ['pepino', 200], ['aceite', 60], ['sal', 6]],
    m: {
      fuego: [35, ['Remoja 2 rebanadas de pan en agua y escúrrelo. Mézclalo con la carne, la cebolla rallada, el ajo, el huevo, la hierbabuena picada, el orégano y la sal.', 'Forma albóndigas algo aplanadas y pásalas por harina.', 'Fríelas en el aceite a fuego medio 8 min, girándolas.', 'Sirve con yogur y una ensalada de tomate y pepino.']],
      airfryer: [25, ['Prepara la masa y forma las albóndigas.', 'Úntalas con un poco de aceite y cocínalas 12 min a 190 °C, girándolas a mitad.', 'Sirve con yogur y ensalada.']],
      horno: [30, ['Prepara las albóndigas y ponlas en una bandeja con un hilo de aceite.', 'Hornea 18 min a 200 °C.', 'Sirve con yogur y ensalada.']]
    }
  },
  {
    id: 'gr-soutzoukakia', n: 'Soutzoukakia (albóndigas al comino en tomate)', e: '🍅', tipo: 'comida', tags: ['carne'],
    ing: [['carne_picada', 600], ['pan_molde', 1], ['huevo', 1], ['ajo', 3], ['comino', 3], ['canela', 1], ['tomate_triturado', 500], ['vino_tinto', 80], ['arroz_largo', 250], ['aceite', 40], ['sal', 6]],
    m: {
      fuego: [45, ['Mezcla la carne con 2 rebanadas de pan remojadas, el huevo, 2 ajos, el comino y la sal. Forma croquetas alargadas.', 'Dóralas en el aceite y resérvalas.', 'Sofríe el ajo restante, añade el vino, el tomate y la canela y cuece 10 min. Añade las albóndigas y cuece 15 min.', 'Sirve con arroz blanco.']],
      horno: [50, ['Forma las albóndigas y hornéalas 15 min a 200 °C.', 'Prepara la salsa de tomate con ajo, vino y canela.', 'Cubre las albóndigas con la salsa y hornea 20 min más. Sirve con arroz.']]
    }
  },
  {
    id: 'gr-biftekia', n: 'Biftekia rellenos de feta', e: '🍔', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['carne_picada', 700], ['queso_feta', 120], ['cebolla', 100], ['pan_molde', 1], ['oregano', 2], ['perejil_fresco', 1], ['patata', 700], ['limon', 1], ['aceite', 40], ['sal', 6]],
    m: {
      horno: [45, ['Mezcla la carne con la cebolla rallada, 2 rebanadas de pan remojadas, orégano, perejil y sal.', 'Forma 8 hamburguesas, pon feta en el centro de cada una y ciérralas bien.', 'Ponlas en una bandeja con las patatas en gajos, aceite, limón y sal.', 'Hornea 35 min a 200 °C, girándolas a mitad.']],
      airfryer: [35, ['Prepara los biftekia rellenos.', 'Cocina las patatas en gajos 12 min a 200 °C.', 'Añade la carne y cocina 12 min más a 190 °C.']],
      fuego: [30, ['Prepara los biftekia rellenos.', 'Cocínalos en una plancha a fuego medio 5 min por lado.', 'Sirve con patatas cocidas con limón y orégano.']]
    }
  },
  {
    id: 'gr-stifado', n: 'Stifado (estofado de ternera con cebollitas)', e: '🧅', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_guisar', 900], ['cebolla', 700], ['tomate_triturado', 300], ['ajo', 3], ['vino_tinto', 200], ['vinagre', 30], ['canela', 2], ['clavo', 2], ['laurel', 2], ['aceite', 50], ['sal', 6], ['arroz_largo', 250]],
    m: {
      fuego: [130, ['Dora la carne salada en el aceite y resérvala.', 'Dora las cebollas peladas enteras (o en cuartos si son grandes) en la misma cazuela 8 min.', 'Añade el ajo, el vino, el vinagre, el tomate, las especias y la carne. Cubre con agua, tapa y cuece 1 h 45 min a fuego suave.', 'Sirve con arroz o puré.']],
      robot: [100, ['Dora la carne y las cebollas en una sartén.', 'Ponlo todo en el vaso con ajo, vino, vinagre, tomate, especias y 200 ml de agua.', 'Programa 80 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'gr-kleftiko', n: 'Kleftiko (cordero en papillote con patatas)', e: '🐑', tipo: 'comida', tags: ['carne'],
    ing: [['cordero', 1200], ['patata', 800], ['cebolla', 150], ['pimiento_verde', 150], ['tomate', 300], ['ajo', 5], ['limon', 1], ['oregano', 3], ['queso_feta', 150], ['aceite', 50], ['sal', 7]],
    m: {
      horno: [150, ['Marina el cordero con el ajo, el zumo de limón, el orégano, el aceite y la sal.', 'Pon en una bandeja forrada con papel de horno y aluminio las patatas en gajos, la cebolla, el pimiento y el tomate y encima el cordero.', 'Añade el feta en dados, cierra bien el paquete y hornea 2 h a 170 °C.', 'Abre el paquete y dora 15 min a 210 °C.']]
    }
  },
  {
    id: 'gr-giouvetsi', n: 'Giouvetsi de cordero con orzo', e: '🍝', tipo: 'comida', tags: ['carne'],
    ing: [['cordero', 900], ['orzo', 350], ['tomate_triturado', 400], ['cebolla', 150], ['ajo', 2], ['vino_tinto', 100], ['canela', 2], ['laurel', 1], ['queso_rallado', 60], ['aceite', 40], ['sal', 7]],
    m: {
      horno: [120, ['Dora el cordero salado en el aceite con la cebolla y el ajo.', 'Añade el vino, el tomate, la canela, el laurel y 500 ml de agua. Pásalo a una fuente y hornea tapado 1 h 15 min a 180 °C.', 'Añade el orzo y 600 ml de agua caliente, remueve y hornea 25 min más destapado, removiendo a mitad.', 'Sirve con queso rallado.']],
      fuego: [100, ['Dora el cordero con la cebolla y el ajo.', 'Añade vino, tomate, especias y 800 ml de agua y cuece tapado 1 h.', 'Añade el orzo y 400 ml de agua caliente y cuece 12 min removiendo. Sirve con queso.']]
    }
  },
  {
    id: 'gr-kritharaki-pollo', n: 'Pollo con orzo al horno', e: '🍗', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['pollo_muslos', 900], ['orzo', 350], ['tomate_triturado', 300], ['cebolla', 120], ['ajo', 2], ['caldo_pollo', 800], ['oregano', 2], ['canela', 1], ['limon', 1], ['queso_feta', 80], ['aceite', 30], ['sal', 6]],
    m: {
      horno: [60, ['Unta el pollo con aceite, orégano, limón y sal y hornéalo 25 min a 200 °C en una fuente.', 'Mientras, sofríe la cebolla y el ajo y añade el tomate y la canela.', 'Añade a la fuente el sofrito, el orzo y el caldo caliente, remueve y coloca el pollo encima.', 'Hornea 25 min más, removiendo una vez. Sirve con feta desmenuzado.']],
      fuego: [45, ['Dora el pollo en una cazuela y resérvalo.', 'Sofríe cebolla y ajo, añade el tomate, la canela y el caldo y vuelve a poner el pollo 15 min.', 'Añade el orzo y cuece 12 min, removiendo. Sirve con feta.']]
    }
  },
  {
    id: 'gr-kokkinisto', n: 'Pollo kokkinisto (guisado en tomate y canela)', e: '🍗', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_entero', 1400], ['tomate_triturado', 500], ['cebolla', 200], ['ajo', 3], ['vino_tinto', 150], ['canela', 2], ['clavo', 2], ['laurel', 1], ['macarron', 350], ['queso_rallado', 60], ['aceite', 50], ['sal', 6]],
    m: {
      fuego: [70, ['Dora el pollo salado en el aceite y resérvalo.', 'Pocha la cebolla y el ajo 6 min, riega con el vino y añade el tomate, las especias, 300 ml de agua y el pollo.', 'Cuece tapado 45 min a fuego suave.', 'Sirve con la pasta cocida, la salsa por encima y queso rallado.']],
      robot: [60, ['Dora el pollo en una sartén.', 'Pica cebolla y ajo 4 seg/vel. 5 y sofríe con aceite 6 min/120 °C/vel. 1.', 'Añade vino, tomate, especias, 200 ml de agua y el pollo: 40 min/100 °C/giro inverso/vel. cuchara. Sirve con pasta.']]
    }
  },
  {
    id: 'gr-giouvarlakia', n: 'Giouvarlakia (sopa de albóndigas al limón)', e: '🍲', tipo: 'cena', tags: ['carne'],
    ing: [['carne_picada', 500], ['arroz', 100], ['cebolla', 100], ['huevo', 3], ['limon', 2], ['perejil_fresco', 1], ['eneldo', 1], ['caldo_pollo', 1500], ['maicena', 10], ['sal', 5]],
    m: {
      fuego: [50, ['Mezcla la carne con el arroz, la cebolla rallada, 1 huevo, perejil, eneldo y sal. Forma albóndigas pequeñas.', 'Hierve el caldo, echa las albóndigas y cuece tapado 30 min a fuego suave.', 'Bate 2 huevos con el zumo de los limones y la maicena; añade poco a poco un cazo de caldo caliente sin dejar de batir.', 'Vierte la mezcla en la olla fuera del fuego, mueve con cuidado y sirve.']],
      robot: [45, ['Forma las albóndigas.', 'Calienta el caldo: 10 min/100 °C/vel. 1. Añade las albóndigas: 30 min/100 °C/giro inverso/vel. cuchara.', 'Bate los huevos con limón y maicena, templa con caldo y añádelo con el robot a 80 °C/giro inverso/vel. cuchara 2 min.']]
    }
  },
  {
    id: 'gr-avgolemono', n: 'Sopa avgolemono de pollo y arroz', e: '🍋', tipo: 'cena', tags: ['carne', 'ligera'],
    ing: [['pollo_pechuga', 400], ['arroz', 120], ['caldo_pollo', 1600], ['zanahoria', 100], ['huevo', 3], ['limon', 2], ['eneldo', 1], ['sal', 3], ['pimienta', 1]],
    m: {
      fuego: [40, ['Cuece la pechuga con la zanahoria en el caldo 20 min. Sácala y desmenúzala.', 'Añade el arroz al caldo y cuece 15 min.', 'Bate los huevos con el zumo de limón y templa la mezcla con un par de cazos de caldo caliente.', 'Viértela en la olla fuera del fuego, vuelve a poner el pollo y sirve con eneldo y pimienta.']],
      robot: [35, ['Pon el caldo, la zanahoria y el pollo: 20 min/100 °C/vel. 1. Saca el pollo y desmenúzalo.', 'Añade el arroz: 15 min/100 °C/giro inverso/vel. cuchara.', 'Bate huevos y limón, templa con caldo y añádelos con el pollo: 2 min/80 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'gr-fasolada', n: 'Fasolada (sopa griega de alubias)', e: '🫘', tipo: 'comida', tags: ['legumbres', 'vegetariano'],
    ing: [['alubias', 800], ['tomate_triturado', 300], ['cebolla', 150], ['zanahoria', 200], ['apio', 150], ['ajo', 2], ['tomate_concentrado', 20], ['laurel', 1], ['oregano', 1], ['aceite', 60], ['sal', 5], ['limon', 1]],
    m: {
      fuego: [45, ['Pocha la cebolla, la zanahoria y el apio en rodajas y el ajo en el aceite 10 min.', 'Añade el concentrado, el tomate, el laurel, el orégano y 1 l de agua. Cuece 15 min.', 'Agrega las alubias escurridas y cuece 15 min más. Sirve con un chorrito de limón y aceite crudo.']],
      robot: [40, ['Pica cebolla, zanahoria, apio y ajo 4 seg/vel. 4 y sofríe con aceite 8 min/120 °C/vel. 1.', 'Añade tomate, concentrado, hierbas y 900 ml de agua: 15 min/100 °C/vel. 1.', 'Añade las alubias: 12 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'gr-fakes', n: 'Fakes (lentejas griegas con vinagre)', e: '🥣', tipo: 'comida', tags: ['legumbres', 'vegetariano'],
    ing: [['lentejas', 320], ['cebolla', 150], ['ajo', 3], ['zanahoria', 100], ['tomate_triturado', 250], ['laurel', 2], ['oregano', 2], ['vinagre', 30], ['aceite', 50], ['queso_feta', 100], ['sal', 5]],
    m: {
      fuego: [45, ['Sofríe la cebolla, la zanahoria y el ajo picados en el aceite 6 min.', 'Añade las lentejas, el tomate, el laurel, el orégano y 1,2 l de agua y cuece 35 min.', 'Sala, añade el vinagre y cuece 2 min. Sirve con feta desmenuzado.']],
      robot: [45, ['Pica cebolla, zanahoria y ajo 4 seg/vel. 5 y sofríe con aceite 6 min/120 °C/vel. 1.', 'Añade lentejas, tomate, hierbas y 1 l de agua: 35 min/100 °C/giro inverso/vel. cuchara.', 'Añade sal y vinagre: 2 min/100 °C/giro inverso/vel. cuchara. Sirve con feta.']]
    }
  }
]);

/* ---- Legumbres, verduras, ensaladas y pescados ---- */
MC_ADD('gr', [
  {
    id: 'gr-revithada', n: 'Revithada (garbanzos al horno con limón)', e: '🥘', tipo: 'comida', tags: ['legumbres', 'vegetariano'],
    ing: [['garbanzos', 1000], ['cebolla', 300], ['ajo', 2], ['limon', 1], ['romero', 1], ['laurel', 1], ['caldo_verduras', 500], ['aceite', 70], ['sal', 5], ['pan_barra', 1]],
    m: {
      horno: [70, ['Pocha la cebolla en juliana en el aceite 10 min con el ajo.', 'Pásala a una cazuela de barro o fuente con los garbanzos escurridos, el romero, el laurel, el caldo y la sal.', 'Tapa y hornea 50 min a 180 °C, hasta que el caldo espese.', 'Añade el zumo de limón al sacar y sirve con pan.']],
      fuego: [40, ['Pocha la cebolla y el ajo en el aceite 10 min.', 'Añade los garbanzos, el caldo y las hierbas y cuece tapado 25 min a fuego muy suave.', 'Termina con zumo de limón.']]
    }
  },
  {
    id: 'gr-gigantes', n: 'Gigantes plaki (judiones al horno con tomate)', e: '🫘', tipo: 'comida', tags: ['legumbres', 'vegetariano'],
    ing: [['judiones', 800], ['tomate_triturado', 500], ['cebolla', 150], ['zanahoria', 100], ['apio', 80], ['ajo', 3], ['perejil_fresco', 1], ['oregano', 2], ['queso_feta', 100], ['aceite', 60], ['sal', 5]],
    m: {
      horno: [55, ['Sofríe la cebolla, la zanahoria, el apio y el ajo picados en el aceite 10 min.', 'Añade el tomate, el orégano, la sal y 150 ml de agua y cuece 5 min.', 'Mezcla con los judiones escurridos en una fuente y hornea 35 min a 190 °C.', 'Sirve con perejil picado y feta desmenuzado.']],
      fuego: [35, ['Sofríe las verduras picadas en el aceite.', 'Añade tomate, orégano, sal y agua y cuece 5 min.', 'Agrega los judiones y cuece tapado 20 min a fuego suave. Sirve con perejil y feta.']]
    }
  },
  {
    id: 'gr-fasolakia', n: 'Fasolakia (judías verdes guisadas con tomate)', e: '🫛', tipo: 'comida', tags: ['vegetariano'],
    ing: [['judias_verdes', 800], ['patata', 400], ['cebolla', 150], ['ajo', 2], ['tomate_triturado', 400], ['perejil_fresco', 1], ['aceite', 70], ['queso_feta', 120], ['sal', 6]],
    m: {
      fuego: [50, ['Pocha la cebolla y el ajo en el aceite 6 min.', 'Añade las judías troceadas, la patata en trozos, el tomate, la sal y 200 ml de agua.', 'Tapa y cuece 35 min a fuego suave hasta que todo esté muy tierno.', 'Sirve con perejil y feta.']],
      robot: [45, ['Pica cebolla y ajo 3 seg/vel. 5 y sofríe con aceite 5 min/120 °C/vel. 1.', 'Añade judías, patata, tomate, sal y 100 ml de agua.', 'Programa 35 min/100 °C/giro inverso/vel. cuchara. Sirve con feta.']]
    }
  },
  {
    id: 'gr-briam', n: 'Briam (verduras al horno a la griega)', e: '🥔', tipo: 'comida', tags: ['vegetariano', 'ligera'],
    ing: [['patata', 600], ['calabacin', 500], ['berenjena', 300], ['pimiento_rojo', 200], ['cebolla', 200], ['tomate', 500], ['ajo', 3], ['oregano', 3], ['perejil_fresco', 1], ['queso_feta', 150], ['aceite', 80], ['sal', 7]],
    m: {
      horno: [80, ['Corta todas las verduras en rodajas o trozos y el tomate rallado.', 'Mézclalas en una fuente con el ajo, el orégano, el perejil, la sal, el aceite y 100 ml de agua.', 'Hornea tapado 40 min a 200 °C y destapado 25 min más, removiendo una vez.', 'Sirve con feta.']],
      airfryer: [50, ['Corta las verduras en dados y mézclalas con ajo, orégano, sal y 2 cucharadas de aceite.', 'Cocínalas en un molde apto 35 min a 180 °C, removiendo cada 10 min y añadiendo el tomate a mitad.', 'Sirve con feta.']]
    }
  },
  {
    id: 'gr-gemista', n: 'Gemista (tomates y pimientos rellenos de arroz)', e: '🍅', tipo: 'comida', tags: ['vegetariano'],
    ing: [['tomate', 1000], ['pimiento_verde', 400], ['arroz', 200], ['cebolla', 150], ['calabacin', 150], ['hierbabuena', 1], ['perejil_fresco', 1], ['patata', 500], ['tomate_concentrado', 20], ['aceite', 80], ['sal', 7]],
    m: {
      horno: [90, ['Corta la tapa de los tomates y los pimientos y vacíalos. Tritura la pulpa de los tomates.', 'Sofríe la cebolla y el calabacín rallado, añade el arroz, la pulpa, el concentrado, las hierbas picadas y sal y cuece 5 min.', 'Rellena las verduras (sin llenar del todo), tápalas y colócalas en una fuente con las patatas en gajos.', 'Riega con aceite y 150 ml de agua y hornea 1 h 10 min a 190 °C.']]
    }
  },
  {
    id: 'gr-spanakopita', n: 'Spanakopita (empanada de espinacas y feta)', e: '🥬', tipo: 'cena', tags: ['vegetariano'],
    ing: [['masa_filo', 1], ['espinacas_congeladas', 600], ['queso_feta', 250], ['huevo', 2], ['cebolleta', 3], ['eneldo', 2], ['nuez_moscada', 1], ['aceite', 60], ['sal', 2]],
    m: {
      horno: [60, ['Descongela las espinacas y escúrrelas muy bien. Pocha la cebolleta picada en un poco de aceite.', 'Mezcla las espinacas con la cebolleta, el feta desmenuzado, los huevos, el eneldo y la nuez moscada.', 'Forra un molde con la mitad de las hojas de filo pintadas con aceite, rellena y cubre con el resto, pintando cada hoja.', 'Marca porciones con un cuchillo y hornea 40 min a 180 °C.']],
      airfryer: [45, ['Prepara la spanakopita en un molde que quepa en la freidora.', 'Pinta bien la superficie con aceite.', 'Cocina 25 min a 165 °C hasta que esté dorada.']]
    }
  },
  {
    id: 'gr-spanakorizo', n: 'Spanakorizo (arroz con espinacas y limón)', e: '🍚', tipo: 'cena', tags: ['vegetariano', 'ligera', 'rapida'],
    ing: [['arroz', 250], ['espinacas', 500], ['cebolleta', 3], ['eneldo', 2], ['limon', 1], ['caldo_verduras', 700], ['queso_feta', 120], ['aceite', 50], ['sal', 4]],
    m: {
      fuego: [30, ['Pocha la cebolleta picada en el aceite 4 min y añade el arroz.', 'Agrega las espinacas troceadas poco a poco hasta que se reduzcan.', 'Vierte el caldo caliente con el eneldo y cuece 18 min a fuego suave.', 'Termina con zumo de limón y sirve con feta.']],
      robot: [28, ['Pica la cebolleta 3 seg/vel. 5 y sofríe con aceite 3 min/120 °C/vel. 1.', 'Añade arroz, espinacas, caldo, eneldo y sal: 17 min/100 °C/giro inverso/vel. cuchara.', 'Añade el zumo de limón y sirve con feta.']]
    }
  },
  {
    id: 'gr-arakas', n: 'Arakas (guisantes guisados con tomate y eneldo)', e: '🟢', tipo: 'comida', tags: ['vegetariano', 'legumbres'],
    ing: [['guisantes', 800], ['patata', 400], ['zanahoria', 150], ['cebolla', 150], ['tomate_triturado', 300], ['eneldo', 2], ['aceite', 60], ['pan_barra', 1], ['queso_feta', 100], ['sal', 6]],
    m: {
      fuego: [40, ['Pocha la cebolla en el aceite 5 min.', 'Añade la patata y la zanahoria en trozos, los guisantes, el tomate, el eneldo, sal y 200 ml de agua.', 'Cuece tapado 25 min a fuego suave. Sirve con pan y feta.']],
      robot: [35, ['Pica la cebolla 3 seg/vel. 5 y sofríe con aceite 4 min/120 °C/vel. 1.', 'Añade patata, zanahoria, guisantes, tomate, eneldo, sal y 100 ml de agua.', 'Programa 25 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'gr-horiatiki', n: 'Ensalada griega (horiatiki)', e: '🥗', tipo: 'cena', tags: ['vegetariano', 'ligera', 'rapida'],
    ing: [['tomate', 800], ['pepino', 400], ['pimiento_verde', 150], ['cebolla_morada', 100], ['queso_feta', 250], ['aceitunas', 100], ['oregano', 2], ['vinagre', 15], ['aceite', 60], ['sal', 3], ['pan_pita', 4]],
    m: {
      sin: [15, ['Corta el tomate en gajos, el pepino en medias lunas, el pimiento y la cebolla en aros.', 'Mezcla con las aceitunas, sal, vinagre y aceite.', 'Coloca el feta en bloque encima, espolvorea orégano y sirve con pan de pita.']]
    }
  },
  {
    id: 'gr-ensalada-orzo', n: 'Ensalada de orzo con feta y verduras', e: '🥗', tipo: 'cena', tags: ['vegetariano', 'ligera', 'rapida'],
    ing: [['orzo', 300], ['tomate_cherry', 300], ['pepino', 250], ['pimiento_rojo', 150], ['cebolla_morada', 60], ['queso_feta', 150], ['aceitunas', 60], ['hierbabuena', 1], ['limon', 1], ['oregano', 1], ['aceite', 50], ['sal', 5]],
    m: {
      fuego: [20, ['Cuece el orzo en agua con sal el tiempo del paquete, escúrrelo y enfríalo bajo el grifo.', 'Corta las verduras en dados pequeños.', 'Mezcla con el orzo, el feta, las aceitunas y la hierbabuena picada y aliña con limón, aceite, orégano y sal.']]
    }
  },
  {
    id: 'gr-dakos', n: 'Dakos (tostas cretenses de tomate y feta)', e: '🍅', tipo: 'cena', tags: ['vegetariano', 'ligera', 'rapida'],
    ing: [['pan_barra', 2], ['tomate', 600], ['queso_feta', 200], ['aceitunas', 60], ['alcaparras', 15], ['oregano', 2], ['aceite', 50], ['sal', 2], ['lechuga', 1]],
    m: {
      horno: [15, ['Corta el pan en rebanadas gruesas y tuéstalas 8 min a 200 °C hasta que estén crujientes.', 'Ralla los tomates y mézclalos con sal y la mitad del aceite.', 'Cubre las tostas con el tomate, el feta desmenuzado, las aceitunas, las alcaparras, orégano y el resto del aceite. Sirve con ensalada.']],
      sin: [10, ['Usa pan tostado o biscotes.', 'Cúbrelos con tomate rallado aliñado, feta, aceitunas, alcaparras y orégano.', 'Riega con aceite y sirve.']]
    }
  },
  {
    id: 'gr-gambas-saganaki', n: 'Gambas saganaki (con tomate y feta)', e: '🦐', tipo: 'cena', tags: ['pescado', 'rapida'],
    ing: [['gambas', 500], ['tomate_triturado', 400], ['cebolla', 100], ['ajo', 2], ['guindilla', 1], ['vino_blanco', 80], ['queso_feta', 150], ['perejil_fresco', 1], ['pan_barra', 1], ['aceite', 40], ['sal', 3]],
    m: {
      fuego: [25, ['Pocha la cebolla y el ajo en el aceite 5 min con la guindilla.', 'Riega con el vino, añade el tomate y cuece 10 min.', 'Añade las gambas y el feta desmenuzado, tapa y cocina 4 min.', 'Termina con perejil y sirve con pan.']],
      horno: [25, ['Prepara la salsa de tomate en el fuego.', 'Pásala a una fuente, añade las gambas y el feta.', 'Hornea 10 min a 210 °C y sirve con perejil y pan.']]
    }
  },
  {
    id: 'gr-pulpo-pasta', n: 'Pulpo con pasta en salsa de tomate', e: '🐙', tipo: 'comida', tags: ['pescado'],
    ing: [['pulpo', 500], ['macarron', 350], ['tomate_triturado', 400], ['cebolla', 150], ['ajo', 2], ['vino_tinto', 100], ['canela', 1], ['laurel', 1], ['aceite', 50], ['sal', 5]],
    m: {
      fuego: [40, ['Pocha la cebolla y el ajo en el aceite 6 min.', 'Añade el pulpo cocido en trozos, el vino, el tomate, la canela, el laurel y 600 ml de agua. Cuece 10 min.', 'Echa la pasta y cuécela en la salsa el tiempo del paquete, removiendo y añadiendo agua si hace falta.']],
      robot: [35, ['Pica cebolla y ajo 3 seg/vel. 5 y sofríe con aceite 5 min/120 °C/vel. 1.', 'Añade pulpo, vino, tomate, especias y 600 ml de agua: 8 min/100 °C/giro inverso/vel. cuchara.', 'Añade la pasta: tiempo del paquete + 2 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'gr-calamares-rellenos', n: 'Calamares rellenos de arroz y hierbas', e: '🦑', tipo: 'comida', tags: ['pescado'],
    ing: [['calamar', 1000], ['arroz', 120], ['cebolla', 150], ['ajo', 2], ['tomate_triturado', 400], ['perejil_fresco', 1], ['hierbabuena', 1], ['pasas', 30], ['vino_blanco', 100], ['aceite', 50], ['sal', 5]],
    m: {
      horno: [70, ['Separa los tentáculos de los cuerpos y pícalos.', 'Sofríe la cebolla y el ajo, añade los tentáculos, el arroz, las pasas, las hierbas picadas, sal y 100 ml de agua y cocina 5 min.', 'Rellena los cuerpos hasta la mitad y ciérralos con un palillo.', 'Ponlos en una fuente con el tomate y el vino y hornea 45 min a 180 °C.']],
      fuego: [60, ['Prepara y rellena los calamares.', 'Dóralos en el aceite y añade el tomate y el vino.', 'Cuece tapado 40 min a fuego suave.']]
    }
  },
  {
    id: 'gr-kalamarakia', n: 'Calamares rebozados a la griega con ensalada', e: '🦑', tipo: 'cena', tags: ['pescado', 'rapida'],
    ing: [['calamar', 700], ['harina', 100], ['limon', 2], ['oregano', 1], ['tomate', 300], ['pepino', 200], ['cebolla_morada', 50], ['aceite_girasol', 300], ['aceite', 20], ['sal', 5]],
    m: {
      fuego: [20, ['Corta los calamares en anillas, sécalos y pásalos por harina con sal.', 'Fríelos en el aceite de girasol bien caliente 2 min, por tandas.', 'Sirve con limón, orégano y una ensalada de tomate, pepino y cebolla aliñada con aceite.']],
      airfryer: [20, ['Pasa las anillas por harina con sal y pulverízalas con un poco de aceite.', 'Cocínalas 8 min a 200 °C, removiendo a mitad.', 'Sirve con limón, orégano y ensalada.']]
    }
  },
  {
    id: 'gr-sardinas-horno', n: 'Sardinas al horno con limón y orégano', e: '🐟', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['sardinas', 1000], ['limon', 2], ['ajo', 3], ['oregano', 3], ['tomate', 400], ['patata', 500], ['aceite', 50], ['sal', 5]],
    m: {
      horno: [30, ['Limpia las sardinas y ponlas en una fuente con rodajas de tomate.', 'Rocía con el zumo de limón, el ajo picado, el orégano, la sal y el aceite.', 'Hornea 15 min a 210 °C. Sirve con patatas cocidas.']],
      airfryer: [25, ['Aliña las sardinas con limón, ajo, orégano, sal y aceite.', 'Cocínalas 10 min a 200 °C.', 'Sirve con patatas cocidas y tomate.']]
    }
  },
  {
    id: 'gr-dorada-ladolemono', n: 'Dorada a la plancha con aliño de limón', e: '🐟', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['dorada', 1200], ['limon', 2], ['oregano', 2], ['aceite', 60], ['espinacas', 300], ['ajo', 1], ['sal', 5]],
    m: {
      fuego: [20, ['Pide la dorada en lomos. Bate el aceite con el zumo de limón, orégano y sal (ladolemono).', 'Marca los lomos a la plancha por la piel 4 min y 1 min por el otro lado.', 'Saltea las espinacas con el ajo 2 min.', 'Sirve el pescado con las espinacas y el aliño por encima.']],
      horno: [25, ['Pon los lomos en una fuente con un poco del aliño.', 'Hornea 12 min a 200 °C.', 'Sirve con espinacas salteadas y el resto del aliño.']],
      airfryer: [20, ['Unta los lomos con un poco del aliño.', 'Cocínalos 9 min a 190 °C.', 'Sirve con espinacas salteadas y el aliño.']]
    }
  }
]);

/* ---- Más pescados, empanadas y cenas ---- */
MC_ADD('gr', [
  {
    id: 'gr-plaki', n: 'Pescado plaki (al horno con tomate y cebolla)', e: '🐟', tipo: 'comida', tags: ['pescado'],
    ing: [['merluza', 800], ['tomate', 500], ['cebolla', 250], ['ajo', 3], ['perejil_fresco', 1], ['patata', 600], ['vino_blanco', 80], ['oregano', 2], ['aceite', 70], ['sal', 6]],
    m: {
      horno: [55, ['Pocha la cebolla en juliana y el ajo en el aceite 10 min. Añade el tomate en dados, el vino y el perejil.', 'Pon las patatas en rodajas finas en una fuente con sal y hornéalas 20 min a 200 °C.', 'Coloca el pescado salado encima, cúbrelo con el sofrito y el orégano.', 'Hornea 15 min más.']]
    }
  },
  {
    id: 'gr-bakaliaros', n: 'Bacalao frito con skordalia', e: '🐟', tipo: 'comida', tags: ['pescado'],
    ing: [['bacalao', 700], ['harina', 120], ['cerveza', 150], ['patata', 500], ['ajo', 4], ['almendras', 40], ['vinagre', 20], ['aceite', 100], ['aceite_girasol', 300], ['remolacha', 300], ['sal', 2]],
    m: {
      fuego: [40, ['Para la skordalia, cuece las patatas y cháfalas con el ajo machacado, las almendras molidas, el vinagre, el aceite de oliva y sal hasta tener un puré.', 'Mezcla la harina con la cerveza para hacer una masa de rebozar.', 'Corta el bacalao en trozos, sécalo, pásalo por la masa y fríelo en el aceite de girasol 4 min.', 'Sirve con la skordalia y la remolacha en rodajas.']],
      airfryer: [35, ['Prepara la skordalia.', 'Pasa el bacalao por harina, pulverízalo con aceite y cocínalo 10 min a 200 °C.', 'Sirve con la skordalia y la remolacha.']]
    }
  },
  {
    id: 'gr-mejillones-saganaki', n: 'Mejillones saganaki', e: '🦪', tipo: 'cena', tags: ['pescado', 'rapida'],
    ing: [['mejillones', 1500], ['tomate', 300], ['pimiento_verde', 100], ['ajo', 2], ['guindilla', 1], ['mostaza', 10], ['vino_blanco', 100], ['queso_feta', 150], ['perejil_fresco', 1], ['pan_barra', 1], ['aceite', 40]],
    m: {
      fuego: [25, ['Limpia los mejillones. Sofríe el pimiento, el ajo y la guindilla en el aceite 4 min.', 'Añade el tomate en dados y la mostaza y cocina 3 min.', 'Echa los mejillones y el vino, tapa y cuece 5 min hasta que se abran.', 'Añade el feta desmenuzado y el perejil, tapa 1 min y sirve con pan.']]
    }
  },
  {
    id: 'gr-makaronia-kima', n: 'Espaguetis con carne picada a la griega', e: '🍝', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['espagueti', 400], ['carne_picada', 500], ['cebolla', 150], ['ajo', 2], ['tomate_triturado', 500], ['vino_tinto', 100], ['canela', 2], ['clavo', 1], ['laurel', 1], ['queso_rallado', 80], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [45, ['Sofríe la cebolla y el ajo en el aceite 5 min. Añade la carne y dórala.', 'Riega con el vino, añade el tomate, la canela, el clavo y el laurel y cuece 25 min a fuego suave.', 'Cuece la pasta, escúrrela y sírvela con la salsa y queso rallado.']],
      robot: [40, ['Pica cebolla y ajo 4 seg/vel. 5 y sofríe con aceite 5 min/120 °C/vel. 1.', 'Añade la carne: 5 min/120 °C/giro inverso/vel. cuchara.', 'Añade vino, tomate y especias: 25 min/100 °C/giro inverso/vel. cuchara. Sirve con la pasta cocida aparte y queso.']]
    }
  },
  {
    id: 'gr-kolokithokeftedes', n: 'Buñuelos de calabacín y feta', e: '🥒', tipo: 'cena', tags: ['vegetariano', 'niños'],
    ing: [['calabacin', 700], ['queso_feta', 200], ['cebolleta', 3], ['huevo', 2], ['harina', 100], ['hierbabuena', 1], ['eneldo', 1], ['yogur_griego', 2], ['aceite', 60], ['sal', 3], ['tomate', 300]],
    m: {
      fuego: [40, ['Ralla el calabacín, sálalo y déjalo escurrir 15 min. Exprímelo muy bien.', 'Mézclalo con el feta, la cebolleta, los huevos, la harina y las hierbas picadas.', 'Fríe cucharadas de masa aplanadas en el aceite 3 min por lado.', 'Sirve con yogur y ensalada de tomate.']],
      horno: [40, ['Prepara la masa.', 'Forma tortitas en una bandeja con papel y píntalas con aceite.', 'Hornea 20 min a 210 °C, girándolas a mitad.']],
      airfryer: [35, ['Prepara la masa y forma tortitas.', 'Píntalas con aceite.', 'Cocina 12 min a 190 °C, girándolas a mitad.']]
    }
  },
  {
    id: 'gr-calabacines-avgolemono', n: 'Calabacines rellenos de carne con salsa de limón', e: '🥒', tipo: 'comida', tags: ['carne'],
    ing: [['calabacin', 1200], ['carne_picada', 400], ['arroz', 100], ['cebolla', 100], ['hierbabuena', 1], ['eneldo', 1], ['caldo_pollo', 500], ['huevo', 2], ['limon', 2], ['maicena', 10], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [60, ['Corta los calabacines en trozos de 6 cm y vacíalos con una cucharilla.', 'Mezcla la carne con el arroz, la cebolla rallada, las hierbas, la sal y el aceite y rellena los calabacines.', 'Colócalos de pie en una olla, cubre con el caldo y cuece tapado 40 min a fuego suave.', 'Bate los huevos con el zumo de limón y la maicena, templa con caldo y viértelo en la olla fuera del fuego, moviéndola.']]
    }
  },
  {
    id: 'gr-tiropita', n: 'Tiropita (empanada de queso)', e: '🧀', tipo: 'cena', tags: ['vegetariano', 'niños'],
    ing: [['masa_filo', 1], ['queso_feta', 300], ['ricotta', 200], ['huevo', 3], ['yogur_griego', 1], ['pimienta', 1], ['aceite', 60], ['lechuga', 1], ['tomate', 300]],
    m: {
      horno: [55, ['Mezcla el feta desmenuzado con la ricotta, los huevos, el yogur y la pimienta.', 'Forra un molde con la mitad de las hojas de filo pintadas con aceite, añade el relleno y cubre con el resto.', 'Marca las porciones y hornea 40 min a 180 °C.', 'Sirve con ensalada.']],
      airfryer: [40, ['Prepara la tiropita en un molde que quepa en el cesto.', 'Pinta bien con aceite.', 'Cocina 25 min a 165 °C.']]
    }
  },
  {
    id: 'gr-kotopita', n: 'Kotopita (empanada de pollo en hojaldre filo)', e: '🥧', tipo: 'cena', tags: ['carne'],
    ing: [['masa_filo', 1], ['pollo_pechuga', 600], ['cebolla', 200], ['pimiento_rojo', 150], ['queso_feta', 150], ['queso_rallado', 60], ['huevo', 2], ['leche', 100], ['oregano', 2], ['aceite', 60], ['sal', 5]],
    m: {
      horno: [70, ['Cuece el pollo en agua con sal 15 min y desmenúzalo.', 'Pocha la cebolla y el pimiento en un poco de aceite 10 min.', 'Mezcla el pollo con las verduras, los quesos, los huevos, la leche y el orégano.', 'Monta la empanada con capas de filo pintadas con aceite, rellena, cubre y hornea 40 min a 180 °C.']]
    }
  },
  {
    id: 'gr-cerdo-apio', n: 'Cerdo con apio y salsa de huevo y limón', e: '🐖', tipo: 'comida', tags: ['carne'],
    ing: [['cerdo_guisar', 900], ['apio', 500], ['cebolleta', 4], ['eneldo', 1], ['huevo', 2], ['limon', 2], ['maicena', 10], ['vino_blanco', 100], ['aceite', 40], ['sal', 6]],
    m: {
      fuego: [90, ['Dora la carne salada en el aceite, añade la cebolleta picada y pocha 4 min.', 'Riega con el vino, cubre con agua y cuece tapado 50 min.', 'Añade el apio en trozos y el eneldo y cuece 20 min más.', 'Bate los huevos con el zumo de limón y la maicena, templa con caldo y añádelo fuera del fuego, moviendo la cazuela.']],
      robot: [80, ['Sofríe la cebolleta con aceite 3 min/120 °C/vel. 1. Añade la carne y el vino: 5 min/120 °C/giro inverso/vel. cuchara.', 'Añade 500 ml de agua: 45 min/100 °C/giro inverso/vel. cuchara. Añade apio y eneldo: 20 min/100 °C/giro inverso/vel. cuchara.', 'Añade el huevo batido con limón y maicena, templado con caldo: 2 min/80 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'gr-brizola', n: 'Chuletas de cerdo al orégano con patatas al limón', e: '🐖', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['chuletas_cerdo', 900], ['patata', 900], ['limon', 2], ['ajo', 3], ['oregano', 4], ['caldo_pollo', 200], ['mostaza', 10], ['aceite', 60], ['sal', 7]],
    m: {
      horno: [60, ['Corta las patatas en gajos y mézclalas con el zumo de un limón, el ajo, el orégano, la mostaza, la mitad del aceite, sal y el caldo.', 'Hornea las patatas 30 min a 210 °C.', 'Unta las chuletas con el resto del aceite, el otro limón, orégano y sal, ponlas sobre las patatas y hornea 20 min más.']],
      airfryer: [40, ['Aliña las patatas en gajos y cocínalas 18 min a 200 °C.', 'Añade las chuletas aliñadas.', 'Cocina 12 min más, girándolas a mitad.']],
      fuego: [35, ['Cuece las patatas en gajos y dóralas en sartén con aceite, limón y orégano.', 'Haz las chuletas aliñadas a la plancha 4 min por lado.', 'Sirve juntas.']]
    }
  },
  {
    id: 'gr-pasta-feta', n: 'Pasta con feta al horno y tomates cherry', e: '🧀', tipo: 'cena', tags: ['vegetariano', 'rapida', 'niños'],
    ing: [['pasta_corta', 400], ['queso_feta', 200], ['tomate_cherry', 600], ['ajo', 3], ['oregano', 2], ['albahaca', 1], ['aceite', 60], ['sal', 5]],
    m: {
      horno: [30, ['Pon los cherrys y los ajos en una fuente con el aceite, sal y orégano y el bloque de feta en el centro.', 'Hornea 25 min a 200 °C. Mientras, cuece la pasta.', 'Aplasta el feta y los tomates para formar una salsa y mezcla con la pasta y la albahaca.']],
      airfryer: [25, ['Pon los cherrys, el ajo y el feta con aceite y orégano en un molde apto.', 'Cocina 15 min a 190 °C mientras cueces la pasta.', 'Aplasta todo, mezcla con la pasta y la albahaca.']]
    }
  },
  {
    id: 'gr-kakavia', n: 'Kakavia (sopa de pescado griega)', e: '🍲', tipo: 'cena', tags: ['pescado', 'ligera'],
    ing: [['pescado_blanco', 600], ['patata', 400], ['cebolla', 150], ['zanahoria', 100], ['apio', 80], ['tomate', 200], ['caldo_pescado', 1200], ['limon', 1], ['aceite', 50], ['perejil_fresco', 1], ['sal', 4]],
    m: {
      fuego: [40, ['Pocha la cebolla, la zanahoria y el apio en el aceite 6 min.', 'Añade la patata en trozos, el tomate rallado y el caldo y cuece 20 min.', 'Añade el pescado en trozos y cuece 6 min.', 'Termina con zumo de limón, perejil y un hilo de aceite crudo.']],
      robot: [35, ['Pica cebolla, zanahoria y apio 4 seg/vel. 4 y sofríe con aceite 5 min/120 °C/vel. 1.', 'Añade patata, tomate y caldo: 18 min/100 °C/giro inverso/vel. cuchara.', 'Añade el pescado: 6 min/100 °C/giro inverso/vel. cuchara. Termina con limón y perejil.']]
    }
  },
  {
    id: 'gr-bouyiourdi', n: 'Feta al horno con tomate y pimiento', e: '🧀', tipo: 'cena', tags: ['vegetariano', 'rapida', 'ligera'],
    ing: [['queso_feta', 400], ['tomate', 400], ['pimiento_verde', 150], ['guindilla', 1], ['oregano', 2], ['aceite', 40], ['pan_barra', 1], ['pepino', 250]],
    m: {
      horno: [25, ['Pon el tomate y el pimiento en rodajas en 4 cazuelitas o una fuente.', 'Coloca el feta en lonchas gruesas encima, la guindilla, el orégano y el aceite.', 'Tapa con aluminio y hornea 15 min a 200 °C; destapa y gratina 5 min.', 'Sirve con pan y pepino en rodajas.']],
      airfryer: [20, ['Monta las cazuelitas igual que para el horno.', 'Tápalas con aluminio y cocina 10 min a 190 °C.', 'Destapa y cocina 3 min más.']]
    }
  },
  {
    id: 'gr-strapatsada', n: 'Strapatsada (huevos revueltos con tomate y feta)', e: '🍳', tipo: 'cena', tags: ['vegetariano', 'rapida', 'ligera'],
    ing: [['huevo', 8], ['tomate', 700], ['queso_feta', 150], ['cebolleta', 2], ['oregano', 1], ['aceite', 40], ['sal', 3], ['pan_barra', 1]],
    m: {
      fuego: [20, ['Pocha la cebolleta picada en el aceite 3 min.', 'Añade el tomate rallado y cocina 8 min hasta que reduzca.', 'Incorpora los huevos batidos y remueve a fuego suave hasta que cuajen cremosos. Añade el feta y el orégano y sirve con pan.']]
    }
  },
  {
    id: 'gr-stifado-setas', n: 'Stifado de setas', e: '🍄', tipo: 'comida', tags: ['vegetariano'],
    ing: [['setas', 400], ['champinon', 300], ['cebolla', 500], ['ajo', 3], ['tomate_triturado', 300], ['vino_tinto', 150], ['vinagre', 20], ['canela', 1], ['laurel', 2], ['aceite', 50], ['sal', 5], ['arroz_largo', 250]],
    m: {
      fuego: [50, ['Dora las cebollas en cuartos en el aceite 8 min y añade el ajo.', 'Agrega las setas y los champiñones troceados y saltea 6 min.', 'Riega con el vino y el vinagre, añade el tomate, la canela y el laurel y cuece tapado 25 min.', 'Sirve con arroz blanco.']],
      robot: [45, ['Pica el ajo 3 seg/vel. 5. Añade cebolla en cuartos y aceite: 8 min/120 °C/giro inverso/vel. cuchara.', 'Añade setas y champiñones: 5 min/120 °C/giro inverso/vel. cuchara.', 'Añade vino, vinagre, tomate y especias: 25 min/100 °C/giro inverso/vel. cuchara. Sirve con arroz.']]
    }
  },
  {
    id: 'gr-alcachofas-polita', n: 'Alcachofas a la polita (con patata y eneldo)', e: '🌱', tipo: 'comida', tags: ['vegetariano', 'ligera'],
    ing: [['alcachofa', 1200], ['patata', 400], ['zanahoria', 200], ['cebolleta', 3], ['guisantes', 200], ['limon', 2], ['eneldo', 2], ['harina', 10], ['aceite', 70], ['sal', 6]],
    m: {
      fuego: [50, ['Limpia las alcachofas, pártelas en cuartos y déjalas en agua con limón.', 'Pocha la cebolleta en el aceite, añade la patata y la zanahoria en trozos y las alcachofas escurridas.', 'Cubre con agua, añade el zumo de limón con la harina disuelta, el eneldo y sal y cuece tapado 30 min.', 'Añade los guisantes los últimos 8 min.']],
      robot: [45, ['Sofríe la cebolleta con aceite 3 min/120 °C/vel. 1.', 'Añade alcachofas, patata, zanahoria, limón con harina, eneldo, sal y 400 ml de agua: 28 min/100 °C/giro inverso/vel. cuchara.', 'Añade los guisantes: 8 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'gr-arni-fricassee', n: 'Fricasé de cordero con lechuga y eneldo', e: '🐑', tipo: 'comida', tags: ['carne'],
    ing: [['cordero', 1000], ['lechuga', 2], ['cebolleta', 4], ['eneldo', 2], ['huevo', 2], ['limon', 2], ['maicena', 10], ['aceite', 40], ['sal', 6]],
    m: {
      fuego: [90, ['Dora el cordero salado en el aceite, añade la cebolleta picada y pocha 4 min.', 'Cubre con agua y cuece tapado 50 min.', 'Añade la lechuga en tiras y el eneldo y cuece 15 min más.', 'Bate los huevos con el zumo de limón y la maicena, templa con caldo y viértelo fuera del fuego moviendo la cazuela.']]
    }
  }
]);
