/* MC Food Diary · cocina de Líbano 🇱🇧. Formato y normas: recetas/GUIA-RECETAS.md */

MC_ADD_ING({
  sumac: ['Zumaque (sumac)', 'despensa', 25, 'kg', 0, 'ralladura de limón con una pizca de sal'],
  melaza_granada: ['Melaza de granada', 'despensa', 12, 'l', 0, 'vinagre balsámico con un poco de miel'],
  baharat: ['Baharat (mezcla de siete especias)', 'despensa', 20, 'kg', 0, 'pimienta, canela, comino y clavo molidos'],
  menta_seca: ['Hierbabuena seca', 'basicos', 0, 'kg', 1],
  queso_halloumi: ['Queso halloumi', 'lacteos', 16, 'kg'],
  acelgas: ['Acelgas', 'fruteria', 2.5, 'kg'],
  rabanitos: ['Rabanitos', 'fruteria', 5, 'kg'],
  freekeh: ['Freekeh (trigo verde tostado)', 'despensa', 9, 'kg', 0, 'bulgur grueso'],
  quimbombo: ['Quimbombó (okra) congelado', 'congelados', 6, 'kg', 0, 'judías verdes planas troceadas'],
  molokhia: ['Molokhia (hojas de corchorus) congelada', 'congelados', 8, 'kg', 0, 'espinacas frescas picadas'],
  cuscus_perla: ['Cuscús perlado (moghrabieh)', 'despensa', 5, 'kg', 0, 'pasta pequeña tipo piñón'],
  guindilla_fresca: ['Guindilla fresca', 'fruteria', 10, 'kg'],
  habas_secas: ['Habas secas peladas', 'despensa', 4, 'kg', 0, 'guisantes secos partidos o habas baby congeladas']
});

MC_ADD('lb', [
  {
    id: 'lb-shawarma-pollo', n: 'Shawarma de pollo', e: '🌯', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['pollo_muslos', 800], ['yogur', 1], ['ajo', 4], ['limon', 2], ['baharat', 5], ['comino', 3], ['pimenton', 4], ['curcuma', 2], ['pan_pita', 4], ['tomate', 200], ['pepinillos', 80], ['lechuga', 1], ['aceite', 60], ['sal', 6]],
    m: {
      fuego: [35, ['Marina el pollo en tiras con yogur, 2 ajos, el zumo de 1 limón, las especias, aceite y sal al menos 20 min.', 'Saltéalo a fuego fuerte en sartén 10 min, hasta que se dore por los bordes.', 'Haz un toum rápido batiendo 2 ajos, zumo de limón, sal y aceite.', 'Rellena las pitas con el pollo, lechuga, tomate, pepinillos y el toum.']],
      horno: [45, ['Marina el pollo 20 min.', 'Extiéndelo en una bandeja y hornea 25 min a 220 °C, removiendo a mitad.', 'Sirve en pita con verduras, pepinillos y toum.']],
      airfryer: [40, ['Marina el pollo 20 min.', 'Cocina 15 min a 200 °C, removiendo a mitad.', 'Sirve en pita con verduras, pepinillos y toum.']]
    }
  },
  {
    id: 'lb-shawarma-ternera', n: 'Shawarma de ternera con tahini', e: '🥙', tipo: 'cena', tags: ['carne'],
    ing: [['ternera_filetes', 700], ['cebolla_morada', 150], ['tahini', 60], ['vinagre', 30], ['limon', 2], ['ajo', 2], ['baharat', 5], ['canela', 1], ['sumac', 3], ['perejil_fresco', 1], ['tomate', 200], ['pan_pita', 4], ['aceite', 50], ['sal', 6]],
    m: {
      fuego: [40, ['Corta la ternera en tiras finas y marínala con vinagre, zumo de limón, ajo, especias, aceite y sal 20 min.', 'Saltéala a fuego muy fuerte en tandas 3–4 min.', 'Mezcla el tahini con zumo de limón, agua y sal hasta tener una salsa ligera; aliña la cebolla en juliana con sumac y perejil.', 'Rellena las pitas con la carne, la cebolla, el tomate y la salsa.']],
      airfryer: [35, ['Marina la ternera 20 min.', 'Cocina 8 min a 200 °C, removiendo a mitad.', 'Sirve en pita con cebolla al sumac, tomate y salsa de tahini.']]
    }
  },
  {
    id: 'lb-kafta-tahini', n: 'Kafta al horno con patatas y tahini', e: '🥔', tipo: 'comida', tags: ['carne'],
    ing: [['carne_picada_ternera', 600], ['cebolla', 100], ['perejil_fresco', 1], ['baharat', 4], ['patata', 700], ['tahini', 120], ['limon', 2], ['ajo', 2], ['pinones', 30], ['aceite', 40], ['sal', 7]],
    m: {
      horno: [60, ['Mezcla la carne con la cebolla rallada, el perejil picado, el baharat y sal; forma albóndigas alargadas.', 'Corta las patatas en rodajas, alíñalas con aceite y sal y hornéalas 20 min a 200 °C.', 'Coloca la kafta encima y hornea 15 min.', 'Bate el tahini con zumo de limón, ajo, 150 ml de agua y sal, viértelo por encima y hornea 10 min más. Termina con piñones tostados.']],
      airfryer: [45, ['Cocina las patatas en rodajas con aceite 15 min a 190 °C.', 'Añade la kafta y cocina 10 min a 200 °C.', 'Sirve con la salsa de tahini caliente y piñones.']]
    }
  },
  {
    id: 'lb-kibbeh-horno', n: 'Kibbeh al horno', e: '🥧', tipo: 'comida', tags: ['carne'],
    ing: [['bulgur', 250], ['carne_picada_ternera', 700], ['cebolla', 250], ['pinones', 50], ['baharat', 5], ['canela', 2], ['comino', 2], ['aceite', 60], ['yogur', 4], ['pepino', 300], ['sal', 8]],
    m: {
      horno: [70, ['Remoja el bulgur en agua fría 15 min y escúrrelo bien. Mézclalo y amásalo con 450 g de carne, 100 g de cebolla rallada, la mitad de las especias y sal.', 'Sofríe el resto de cebolla con el resto de la carne, especias y los piñones 10 min para el relleno.', 'Extiende la mitad de la masa en una fuente engrasada, cubre con el relleno y tapa con el resto de masa; marca rombos con un cuchillo.', 'Riega con aceite y hornea 35 min a 190 °C. Sirve con yogur y pepino.']],
      airfryer: [60, ['Prepara la masa y el relleno como en el horno.', 'Monta el kibbeh en un molde que quepa en la freidora y rocía con aceite.', 'Cocina 25 min a 175 °C. Sirve con yogur y pepino.']]
    }
  },
  {
    id: 'lb-kibbeh-calabaza', n: 'Kibbeh de calabaza con espinacas', e: '🎃', tipo: 'comida', tags: ['vegetariano', 'legumbres'],
    ing: [['calabaza', 800], ['bulgur', 250], ['harina', 60], ['cebolla', 200], ['espinacas', 300], ['garbanzos', 400], ['nueces', 50], ['sumac', 4], ['comino', 3], ['canela', 1], ['aceite', 60], ['sal', 7]],
    m: {
      horno: [80, ['Cuece o asa la calabaza en trozos 20 min y aplástala. Mézclala con el bulgur remojado y escurrido, la harina, comino, canela y sal.', 'Sofríe la cebolla con aceite, añade las espinacas, los garbanzos, las nueces y el sumac 5 min.', 'Monta en una fuente: capa de masa, relleno y otra capa de masa. Marca rombos.', 'Riega con aceite y hornea 35 min a 190 °C.']],
      airfryer: [70, ['Prepara la masa de calabaza y el relleno.', 'Monta en un molde apto para la freidora.', 'Cocina 25 min a 175 °C.']]
    }
  },
  {
    id: 'lb-kibbeh-patata', n: 'Kibbeh de patata', e: '🥔', tipo: 'cena', tags: ['vegetariano', 'niños'],
    ing: [['patata', 900], ['bulgur', 150], ['cebolla', 200], ['perejil_fresco', 1], ['hierbabuena', 1], ['comino', 3], ['pimenton', 3], ['nueces', 40], ['aceite', 60], ['tomate', 300], ['pepino', 300], ['sal', 7]],
    m: {
      horno: [60, ['Cuece las patatas 20 min y hazlas puré. Remoja el bulgur 10 min y escúrrelo.', 'Mezcla el puré con el bulgur, la mitad de la cebolla rallada, hierbas picadas, especias y sal.', 'Extiende en una fuente engrasada, cubre con el resto de cebolla en juliana y las nueces y riega con aceite.', 'Hornea 25 min a 200 °C. Sirve con ensalada de tomate y pepino.']],
      sin: [40, ['Cuece las patatas y hazlas puré; mezcla con el bulgur remojado, cebolla, hierbas, especias y sal.', 'Extiende en una fuente, aplana y riega con aceite.', 'Sirve frío con cebolla, nueces y ensalada.']]
    }
  },
  {
    id: 'lb-mujadara', n: 'Mujadara (lentejas con arroz y cebolla crujiente)', e: '🧅', tipo: 'comida', tags: ['legumbres', 'vegetariano'],
    ing: [['lentejas', 250], ['arroz_largo', 200], ['cebolla', 600], ['comino', 4], ['canela', 1], ['aceite', 100], ['yogur', 4], ['pepino', 300], ['sal', 7]],
    m: {
      fuego: [55, ['Cuece las lentejas en 1 l de agua 15 min.', 'Fríe la cebolla en juliana con el aceite a fuego medio 25 min, hasta que esté dorada y crujiente; reserva la mitad.', 'Añade a la cebolla de la olla el arroz, el comino, la canela y sal; incorpora las lentejas con 450 ml de su caldo y cuece tapado 18 min.', 'Sirve con la cebolla crujiente por encima y yogur con pepino.']],
      robot: [55, ['Pon la cebolla en juliana con el aceite: 25 min/120 °C/giro inverso/vel. cuchara sin cubilete; reserva la mitad.', 'Añade las lentejas, especias, sal y 900 ml de agua: 15 min/100 °C/giro inverso/vel. cuchara.', 'Añade el arroz: 15 min/100 °C/giro inverso/vel. cuchara. Sirve con la cebolla y yogur.']]
    }
  },
  {
    id: 'lb-fattoush-halloumi', n: 'Fattoush con halloumi a la plancha', e: '🥗', tipo: 'cena', tags: ['vegetariano', 'ligera', 'rapida'],
    ing: [['queso_halloumi', 250], ['lechuga', 1], ['tomate', 400], ['pepino', 300], ['rabanitos', 100], ['cebolleta', 2], ['perejil_fresco', 1], ['hierbabuena', 1], ['pan_pita', 2], ['sumac', 5], ['melaza_granada', 20], ['limon', 1], ['aceite', 60], ['sal', 4]],
    m: {
      sin: [25, ['Trocea la lechuga, el tomate, el pepino, los rabanitos, la cebolleta y las hierbas.', 'Aliña con aceite, zumo de limón, melaza de granada, sumac y sal.', 'Tuesta la pita en trozos en el tostador y añádela al final con el halloumi en lonchas.']],
      fuego: [25, ['Tuesta la pita en trozos en una sartén con un poco de aceite.', 'Dora el halloumi en lonchas 2 min por lado.', 'Mezcla las verduras con el aliño de sumac y granada y sirve con la pita y el halloumi.']],
      airfryer: [20, ['Cocina la pita en trozos con aceite 5 min a 180 °C.', 'Cocina el halloumi en lonchas 6 min a 200 °C.', 'Mézclalo con la ensalada aliñada.']]
    }
  },
  {
    id: 'lb-tabule', n: 'Tabulé libanés', e: '🌿', tipo: 'cena', tags: ['vegetariano', 'ligera', 'rapida'],
    ing: [['perejil_fresco', 4], ['hierbabuena', 1], ['bulgur', 80], ['tomate', 500], ['cebolleta', 2], ['limon', 3], ['aceite', 80], ['lechuga', 1], ['canela', 1], ['sal', 5]],
    m: {
      sin: [30, ['Remoja el bulgur fino en agua fría 15 min y escúrrelo bien.', 'Pica muy fino el perejil, la hierbabuena, la cebolleta y el tomate.', 'Mezcla todo con el zumo de limón, el aceite, una pizca de canela y sal.', 'Sirve con hojas de lechuga para comerlo a modo de cuchara.']]
    }
  },
  {
    id: 'lb-hummus-carne', n: 'Hummus con carne especiada y piñones', e: '🫓', tipo: 'cena', tags: ['carne', 'legumbres', 'rapida'],
    ing: [['garbanzos', 800], ['tahini', 100], ['limon', 2], ['ajo', 2], ['cordero_picado', 350], ['cebolla', 100], ['pinones', 40], ['baharat', 4], ['pimenton', 2], ['pan_pita', 4], ['aceite', 60], ['sal', 6]],
    m: {
      fuego: [25, ['Tritura los garbanzos con el tahini, el zumo de limón, el ajo, sal y agua fría hasta tener un hummus cremoso.', 'Sofríe la cebolla picada con aceite, añade la carne y el baharat y dórala 8 min; tuesta los piñones.', 'Extiende el hummus en platos, pon la carne y los piñones encima y riega con aceite y pimentón. Sirve con pita.']],
      robot: [25, ['Tritura garbanzos, tahini, limón, ajo, sal y agua 1 min/vel. 5-8; reserva.', 'Sofríe la cebolla con aceite 4 min/120 °C/vel. 1, añade la carne y el baharat: 8 min/120 °C/giro inverso/vel. cuchara.', 'Sirve el hummus con la carne, piñones, aceite y pimentón.']]
    }
  },
  {
    id: 'lb-falafel', n: 'Falafel con salsa de tahini', e: '🧆', tipo: 'cena', tags: ['legumbres', 'vegetariano', 'niños'],
    ing: [['garbanzos', 600], ['cebolla', 100], ['ajo', 3], ['perejil_fresco', 1], ['cilantro', 1], ['comino', 4], ['cilantro_molido', 2], ['harina', 50], ['tahini', 80], ['limon', 1], ['pan_pita', 4], ['tomate', 200], ['lechuga', 1], ['aceite_girasol', 300], ['sal', 6]],
    m: {
      fuego: [35, ['Escurre y seca muy bien los garbanzos y tritúralos con cebolla, ajo, hierbas, especias, harina y sal hasta tener una pasta granulosa.', 'Forma bolitas aplanadas y fríelas en aceite caliente 3–4 min, hasta que estén doradas.', 'Bate el tahini con limón, agua y sal y sirve los falafel en pita con lechuga, tomate y la salsa.']],
      airfryer: [30, ['Prepara la masa y forma los falafel.', 'Pincélalos con aceite y cocina 14 min a 200 °C, girándolos a mitad.', 'Sirve en pita con verduras y salsa de tahini.']],
      horno: [35, ['Prepara los falafel y colócalos en una bandeja con papel y aceite.', 'Hornea 20 min a 210 °C, girándolos a mitad.', 'Sirve con pita, verduras y tahini.']]
    }
  },
  {
    id: 'lb-fatteh-garbanzos', n: 'Fatteh de garbanzos con yogur', e: '🥣', tipo: 'cena', tags: ['legumbres', 'vegetariano', 'rapida'],
    ing: [['garbanzos', 800], ['yogur_griego', 3], ['ajo', 2], ['tahini', 40], ['limon', 1], ['pan_pita', 3], ['pinones', 40], ['mantequilla', 30], ['comino', 3], ['pimenton', 2], ['perejil_fresco', 1], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [25, ['Corta la pita en cuadrados y tuéstala en sartén con aceite hasta que cruja.', 'Calienta los garbanzos con su agua, comino y sal 5 min.', 'Mezcla el yogur con ajo machacado, tahini, limón y sal.', 'Monta pan, garbanzos escurridos y yogur; termina con piñones dorados en mantequilla, pimentón y perejil.']],
      horno: [25, ['Tuesta la pita en trozos 8 min a 200 °C.', 'Calienta los garbanzos con comino y prepara la salsa de yogur.', 'Monta por capas y termina con piñones en mantequilla y pimentón.']]
    }
  },
  {
    id: 'lb-fatteh-pollo', n: 'Fatteh de pollo con arroz y yogur', e: '🍗', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_entero', 1200], ['arroz_largo', 300], ['yogur_griego', 4], ['ajo', 3], ['pan_pita', 3], ['almendras', 50], ['pinones', 30], ['baharat', 5], ['canela', 2], ['cebolla', 100], ['laurel', 2], ['mantequilla', 40], ['sal', 8]],
    m: {
      fuego: [70, ['Cuece el pollo con la cebolla, el laurel, la canela y sal en 1,5 l de agua 40 min. Desmenúzalo y reserva el caldo.', 'Rehoga el arroz con mantequilla y baharat, añade 600 ml de caldo y cuece 15 min.', 'Tuesta la pita en trozos y mezcla el yogur con ajo y sal.', 'Monta pan, arroz, pollo y yogur; termina con almendras y piñones tostados.']],
      robot: [65, ['Pon el pollo troceado con cebolla, laurel, canela, sal y 1 l de agua en el Varoma y el vaso: 35 min/Varoma/vel. 1. Reserva caldo y desmenuza el pollo.', 'Rehoga el arroz con mantequilla y baharat 3 min/120 °C/giro inverso/vel. cuchara; añade 600 ml de caldo: 15 min/100 °C/giro inverso/vel. cuchara.', 'Monta con pan tostado, pollo, yogur con ajo y frutos secos.']]
    }
  },
  {
    id: 'lb-shish-taouk', n: 'Shish taouk con toum', e: '🍢', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['pollo_pechuga', 800], ['yogur', 1], ['tomate_concentrado', 20], ['ajo', 6], ['limon', 2], ['pimenton', 4], ['tomillo', 1], ['pimiento_verde', 150], ['cebolla', 150], ['patata', 500], ['aceite', 120], ['sal', 7]],
    m: {
      fuego: [30, ['Marina el pollo en dados con yogur, tomate concentrado, 2 ajos, el zumo de 1 limón, pimentón, tomillo, un poco de aceite y sal 15 min.', 'Ensártalo con pimiento y cebolla y hazlo a la plancha 10 min, girándolo.', 'Bate 4 ajos con sal, zumo de limón y el aceite restante en hilo hasta emulsionar el toum.', 'Sirve con patatas fritas o al horno y el toum.']],
      airfryer: [30, ['Marina y ensarta el pollo.', 'Cocina las patatas en bastones con aceite 15 min a 200 °C y luego las brochetas 12 min.', 'Sirve con el toum.']],
      horno: [35, ['Marina y ensarta el pollo.', 'Hornea con las patatas en gajos 25 min a 220 °C.', 'Sirve con el toum.']]
    }
  },
  {
    id: 'lb-riz-djej', n: 'Riz a djej (arroz con pollo y especias)', e: '🍚', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_entero', 1200], ['arroz_largo', 350], ['carne_picada_ternera', 250], ['cebolla', 150], ['almendras', 50], ['pinones', 30], ['baharat', 6], ['canela', 3], ['laurel', 2], ['mantequilla', 40], ['yogur', 4], ['sal', 8]],
    m: {
      fuego: [70, ['Cuece el pollo con cebolla, laurel, canela y sal en 1,5 l de agua 40 min; desmenúzalo y reserva el caldo.', 'Dora la carne picada con la mantequilla y el baharat, añade el arroz y rehoga 2 min.', 'Cubre con 700 ml de caldo y cuece tapado 15 min.', 'Sirve el arroz con el pollo encima, los frutos secos tostados y yogur.']],
      robot: [65, ['Cuece el pollo con cebolla, laurel, canela, sal y 1 l de agua: 35 min/Varoma/vel. 1. Reserva el caldo.', 'Sofríe la carne con mantequilla y baharat 6 min/120 °C/giro inverso/vel. cuchara; añade arroz y 700 ml de caldo: 15 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con el pollo, frutos secos tostados y yogur.']]
    }
  },
  {
    id: 'lb-loubieh-zeit', n: 'Loubieh bi zeit (judías verdes con tomate)', e: '🫛', tipo: 'ambos', tags: ['vegetariano', 'ligera'],
    ing: [['judias_verdes', 800], ['tomate', 600], ['cebolla', 200], ['ajo', 5], ['baharat', 2], ['canela', 1], ['aceite', 80], ['pan_pita', 4], ['sal', 6]],
    m: {
      fuego: [50, ['Pocha la cebolla en juliana y el ajo con el aceite 8 min.', 'Añade las judías troceadas y rehoga 5 min.', 'Agrega el tomate rallado, las especias y sal, tapa y cuece a fuego suave 30 min. Se sirve templado con pita.']],
      robot: [45, ['Sofríe la cebolla y el ajo con aceite 6 min/120 °C/vel. 1.', 'Añade judías, tomate troceado, especias y sal.', 'Cocina 30 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'lb-yakhnet-batata', n: 'Yakhnet batata (guiso de patata y carne)', e: '🥘', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_guisar', 600], ['patata', 800], ['cebolla', 200], ['tomate_triturado', 400], ['ajo', 3], ['cilantro', 1], ['baharat', 4], ['aceite', 40], ['arroz_largo', 250], ['fideos', 50], ['mantequilla', 20], ['sal', 8]],
    m: {
      fuego: [90, ['Dora la ternera en dados con aceite, añade la cebolla picada y el baharat y rehoga 5 min.', 'Agrega el tomate y 600 ml de agua, tapa y cuece 45 min.', 'Añade las patatas en dados y el ajo machacado con el cilantro y cuece 20 min.', 'Dora los fideos en mantequilla, añade el arroz y 500 ml de agua con sal y cuece 15 min. Sirve el guiso con este arroz.']],
      robot: [80, ['Sofríe la cebolla con aceite 5 min/120 °C/vel. 1, añade ternera, baharat, tomate, sal y 400 ml de agua: 45 min/100 °C/giro inverso/vel. cuchara.', 'Añade patatas, ajo y cilantro: 20 min/100 °C/giro inverso/vel. cuchara.', 'Prepara aparte el arroz con fideos dorados y sirve juntos.']]
    }
  },
  {
    id: 'lb-yakhnet-bazella', n: 'Yakhnet bazella (guisantes con carne y arroz)', e: '🫛', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['ternera_guisar', 500], ['guisantes', 500], ['zanahoria', 300], ['cebolla', 150], ['tomate_triturado', 400], ['ajo', 3], ['cilantro', 1], ['baharat', 4], ['aceite', 40], ['arroz_largo', 250], ['fideos', 50], ['mantequilla', 20], ['sal', 8]],
    m: {
      fuego: [80, ['Dora la ternera en dados con aceite, añade la cebolla picada y el baharat.', 'Agrega el tomate y 500 ml de agua, tapa y cuece 40 min.', 'Añade la zanahoria en dados y los guisantes y cuece 15 min; termina con ajo y cilantro picados.', 'Sirve con arroz con fideos dorados en mantequilla.']],
      robot: [70, ['Sofríe la cebolla con aceite 5 min/120 °C/vel. 1, añade ternera, baharat, tomate, sal y 400 ml de agua: 40 min/100 °C/giro inverso/vel. cuchara.', 'Añade zanahoria, guisantes, ajo y cilantro: 15 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con arroz con fideos.']]
    }
  },
  {
    id: 'lb-sayadieh', n: 'Sayadieh (arroz con pescado y cebolla dorada)', e: '🐟', tipo: 'comida', tags: ['pescado'],
    ing: [['merluza', 700], ['arroz_largo', 300], ['cebolla', 500], ['caldo_pescado', 700], ['comino', 4], ['canela', 1], ['curcuma', 1], ['almendras', 40], ['pinones', 30], ['limon', 1], ['aceite', 80], ['sal', 7]],
    m: {
      fuego: [55, ['Dora la cebolla en juliana con el aceite a fuego medio 20 min, hasta que esté muy oscura; reserva un poco para decorar.', 'Añade el caldo y tritura para tener un caldo tostado; agrega las especias.', 'Echa el arroz y cuece tapado 15 min.', 'Dora el pescado salpimentado en la sartén 3 min por lado y sírvelo sobre el arroz con la cebolla, los frutos secos y limón.']],
      horno: [55, ['Dora la cebolla y prepara el caldo tostado como en el fuego.', 'Pon el arroz con el caldo caliente en una fuente, tapa y hornea 18 min a 190 °C.', 'Coloca el pescado encima y hornea 10 min más. Sirve con frutos secos y limón.']]
    }
  },
  {
    id: 'lb-samke-harra', n: 'Samke harra (pescado picante con tahini)', e: '🌶️', tipo: 'cena', tags: ['pescado'],
    ing: [['lubina', 1000], ['tahini', 120], ['limon', 3], ['ajo', 4], ['guindilla_fresca', 20], ['cilantro', 1], ['nueces', 50], ['cebolla', 150], ['comino', 3], ['aceite', 60], ['sal', 6]],
    m: {
      horno: [45, ['Sala el pescado (entero o en lomos), riégalo con aceite y hornéalo 15 min a 200 °C.', 'Sofríe la cebolla, el ajo, la guindilla y el cilantro picados con aceite 6 min.', 'Mezcla el tahini con zumo de limón, comino, 150 ml de agua y sal y añádelo al sofrito 2 min.', 'Cubre el pescado con la salsa y las nueces y hornea 10 min más.']],
      fuego: [35, ['Haz el sofrito picante de cebolla, ajo, guindilla y cilantro.', 'Añade la salsa de tahini, limón y agua y cuece 3 min.', 'Pon los lomos de pescado en la salsa, tapa y cuece 8 min. Termina con nueces.']]
    }
  },
  {
    id: 'lb-kousa-mahshi', n: 'Calabacines rellenos en salsa de tomate', e: '🥒', tipo: 'comida', tags: ['carne'],
    ing: [['calabacin', 1200], ['carne_picada_ternera', 350], ['arroz', 150], ['tomate', 300], ['tomate_triturado', 500], ['ajo', 4], ['menta_seca', 2], ['baharat', 4], ['limon', 1], ['aceite', 30], ['sal', 8]],
    m: {
      fuego: [70, ['Corta los calabacines en trozos de 10 cm y vacíalos con una cucharilla.', 'Mezcla la carne con el arroz crudo, el tomate picado, el baharat y sal; rellena los calabacines sin apretar.', 'Colócalos en una olla con el tomate triturado, el ajo machacado con la menta, el zumo de limón y agua hasta cubrir.', 'Tapa y cuece a fuego suave 45 min.']],
      horno: [75, ['Prepara y rellena los calabacines.', 'Ponlos en una fuente con el tomate, el ajo, la menta, el limón y 300 ml de agua; tapa con aluminio.', 'Hornea 55 min a 180 °C.']]
    }
  },
  {
    id: 'lb-malfouf-mahshi', n: 'Rollitos de repollo rellenos (malfouf)', e: '🥬', tipo: 'comida', tags: ['carne'],
    ing: [['repollo', 1200], ['carne_picada_ternera', 400], ['arroz', 200], ['tomate', 200], ['ajo', 8], ['menta_seca', 3], ['limon', 2], ['baharat', 4], ['aceite', 30], ['sal', 8]],
    m: {
      fuego: [80, ['Separa las hojas del repollo y escáldalas 3 min; retira el nervio central.', 'Mezcla la carne con el arroz crudo, el tomate picado, el baharat y sal; enrolla una cucharada en cada hoja.', 'Coloca los rollitos apretados en una olla, intercalando los ajos, y cubre con agua, el zumo de limón, la menta y sal.', 'Pon un plato encima, tapa y cuece a fuego suave 50 min.']],
      robot: [70, ['Escalda las hojas en el Varoma 8 min/Varoma/vel. 1 con 500 ml de agua en el vaso.', 'Prepara el relleno y enrolla las hojas; colócalas en el Varoma y la bandeja.', 'Pon en el vaso 800 ml de agua, ajos, limón, menta y sal: 45 min/Varoma/vel. 1. Riega los rollitos con el caldo.']]
    }
  },
  {
    id: 'lb-musaqaa', n: 'Musaqaa libanesa (berenjena con garbanzos)', e: '🍆', tipo: 'comida', tags: ['vegetariano', 'legumbres'],
    ing: [['berenjena', 1000], ['garbanzos', 400], ['tomate_triturado', 600], ['cebolla', 250], ['ajo', 4], ['pimiento_verde', 150], ['baharat', 3], ['menta_seca', 2], ['aceite', 80], ['pan_pita', 4], ['sal', 7]],
    m: {
      horno: [70, ['Corta la berenjena en dados grandes, alíñala con aceite y sal y ásala 25 min a 220 °C.', 'Sofríe la cebolla, el pimiento y el ajo con aceite 8 min, añade el tomate, el baharat y la menta y cuece 10 min.', 'Mezcla la salsa con la berenjena y los garbanzos en una fuente y hornea 20 min a 190 °C. Se sirve templada con pita.']],
      fuego: [55, ['Fríe o saltea la berenjena en dados hasta dorarla y escúrrela.', 'Haz el sofrito con tomate y especias.', 'Añade berenjena y garbanzos, tapa y cuece 20 min a fuego suave.']]
    }
  },
  {
    id: 'lb-adas-hamod', n: 'Lentejas con acelgas y limón (adas bi hamod)', e: '🍋', tipo: 'comida', tags: ['legumbres', 'vegetariano'],
    ing: [['lentejas', 300], ['acelgas', 600], ['patata', 300], ['cebolla', 150], ['ajo', 5], ['cilantro', 1], ['limon', 3], ['comino', 3], ['aceite', 60], ['sal', 7]],
    m: {
      fuego: [50, ['Cuece las lentejas en 1,2 l de agua 20 min.', 'Añade la patata en dados y las acelgas picadas y cuece 15 min.', 'Sofríe la cebolla con aceite, añade el ajo machacado con el cilantro y el comino 1 min y viértelo en la olla.', 'Agrega el zumo de limón y sal y cuece 5 min más.']],
      robot: [50, ['Sofríe la cebolla con aceite 5 min/120 °C/vel. 1; añade ajo, cilantro y comino 1 min/120 °C/vel. 1.', 'Añade lentejas, patata, sal y 1 l de agua: 25 min/100 °C/giro inverso/vel. cuchara.', 'Añade acelgas y zumo de limón: 12 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'lb-arayes', n: 'Arayes (pita rellena de kafta a la plancha)', e: '🥙', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['cordero_picado', 500], ['cebolla', 100], ['perejil_fresco', 1], ['tomate', 100], ['baharat', 4], ['pimenton', 3], ['pan_pita', 4], ['yogur', 4], ['pepino', 300], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [25, ['Mezcla la carne con la cebolla, el tomate y el perejil muy picados, las especias y sal.', 'Abre las pitas, extiende una capa fina de carne dentro y ciérralas; pincela con aceite.', 'Hazlas en una sartén o plancha a fuego medio 5 min por lado. Sirve con yogur y pepino.']],
      horno: [25, ['Rellena las pitas con la carne y pincélalas con aceite.', 'Hornea 15 min a 220 °C, girándolas a mitad.', 'Corta en triángulos y sirve con yogur y pepino.']],
      airfryer: [20, ['Rellena las pitas y pincélalas con aceite.', 'Cocina 12 min a 190 °C, girándolas a mitad.', 'Sirve con yogur y pepino.']]
    }
  },
  {
    id: 'lb-freekeh-pollo', n: 'Freekeh con pollo y frutos secos', e: '🌾', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_muslos', 900], ['freekeh', 300], ['cebolla', 200], ['caldo_pollo', 800], ['baharat', 5], ['canela', 2], ['almendras', 50], ['pinones', 30], ['mantequilla', 30], ['aceite', 30], ['yogur', 4], ['sal', 6]],
    m: {
      fuego: [60, ['Dora el pollo con aceite y la mitad de las especias y resérvalo.', 'Rehoga la cebolla picada con la mantequilla, añade el freekeh lavado y el resto de especias.', 'Cubre con el caldo, coloca el pollo encima, tapa y cuece 35 min.', 'Sirve con almendras y piñones tostados y yogur.']],
      horno: [65, ['Rehoga cebolla y freekeh con mantequilla y especias en una cazuela apta para horno.', 'Añade el caldo y el pollo encima, tapa y hornea 45 min a 180 °C.', 'Sirve con frutos secos y yogur.']]
    }
  },
  {
    id: 'lb-djej-mechwi', n: 'Pollo asado al ajo con patatas y toum', e: '🍗', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['pollo_entero', 1400], ['patata', 800], ['ajo', 8], ['limon', 3], ['pimenton', 4], ['baharat', 4], ['tomillo', 1], ['aceite', 150], ['sal', 9]],
    m: {
      horno: [70, ['Marina el pollo con 3 ajos machacados, zumo de 2 limones, pimentón, baharat, tomillo, un poco de aceite y sal.', 'Ponlo en una bandeja con las patatas en gajos aliñadas y hornea 55 min a 200 °C.', 'Bate el resto de ajos con sal y el zumo de limón restante, añadiendo el aceite en hilo, hasta tener el toum. Sirve con el pollo.']],
      airfryer: [50, ['Marina el pollo troceado.', 'Cocina las patatas 10 min a 190 °C, añade el pollo y cocina 25 min más, girándolo.', 'Sirve con el toum.']]
    }
  },
  {
    id: 'lb-shish-barak', n: 'Shish barak (empanadillas en salsa de yogur)', e: '🥟', tipo: 'comida', tags: ['carne'],
    ing: [['obleas_empanadilla', 2], ['carne_picada_ternera', 350], ['cebolla', 100], ['pinones', 30], ['baharat', 3], ['yogur', 8], ['maicena', 20], ['huevo', 1], ['ajo', 3], ['cilantro', 1], ['mantequilla', 30], ['sal', 7]],
    m: {
      fuego: [60, ['Sofríe la cebolla picada con la carne, los piñones, el baharat y sal 8 min.', 'Corta las obleas en círculos pequeños, rellena, dobla en media luna y une las puntas formando anillos.', 'Bate el yogur con la maicena, el huevo, sal y 200 ml de agua y calienta removiendo siempre en la misma dirección hasta que hierva.', 'Cuece las empanadillas en la salsa 12 min. Dora el ajo y el cilantro en mantequilla y viértelo por encima.']],
      horno: [55, ['Prepara y forma las empanadillas.', 'Hornéalas 12 min a 200 °C para que se doren.', 'Calienta la salsa de yogur como en el fuego, añade las empanadillas 8 min y termina con mantequilla, ajo y cilantro.']]
    }
  },
  {
    id: 'lb-laban-immo', n: 'Laban immo (cordero en salsa de yogur)', e: '🍖', tipo: 'comida', tags: ['carne'],
    ing: [['cordero', 900], ['cebolla', 400], ['yogur', 8], ['maicena', 20], ['huevo', 1], ['ajo', 3], ['menta_seca', 2], ['canela', 2], ['laurel', 2], ['arroz_largo', 300], ['fideos', 50], ['mantequilla', 30], ['sal', 8]],
    m: {
      fuego: [110, ['Cuece el cordero con laurel, canela, sal y agua 1 h 15 min. Añade las cebollas pequeñas o en cuartos los últimos 20 min.', 'Bate el yogur con maicena, huevo y sal y caliéntalo removiendo hasta que hierva.', 'Añade la carne, la cebolla y un cazo de caldo y cuece 10 min.', 'Dora el ajo con la menta en mantequilla, viértelo por encima y sirve con arroz con fideos.']],
      robot: [100, ['Pon el cordero, laurel, canela, sal y 800 ml de agua: 60 min/100 °C/giro inverso/vel. cuchara; añade la cebolla 20 min más. Reserva.', 'Pon en el vaso limpio el yogur, la maicena, el huevo y sal: 10 min/90 °C/vel. 2.', 'Añade la carne y la cebolla: 8 min/90 °C/giro inverso/vel. cuchara. Termina con ajo y menta en mantequilla.']]
    }
  },
  {
    id: 'lb-ejjeh', n: 'Ejjeh (tortilla de hierbas y calabacín)', e: '🍳', tipo: 'cena', tags: ['vegetariano', 'rapida', 'ligera'],
    ing: [['huevo', 8], ['calabacin', 250], ['cebolla', 100], ['perejil_fresco', 1], ['hierbabuena', 1], ['harina', 20], ['comino', 2], ['canela', 1], ['aceite', 40], ['pan_pita', 4], ['tomate', 300], ['sal', 5]],
    m: {
      fuego: [20, ['Ralla el calabacín y escúrrelo; pica la cebolla y las hierbas.', 'Bate los huevos con la harina, las especias, sal y las verduras.', 'Haz tortillitas en una sartén con aceite, 2 min por lado. Sírvelas en pita con tomate.']],
      horno: [25, ['Prepara la mezcla de huevo y verduras.', 'Viértela en una fuente engrasada.', 'Hornea 15 min a 190 °C y córtala en porciones.']],
      airfryer: [20, ['Prepara la mezcla de huevo y verduras.', 'Viértela en un molde engrasado.', 'Cocina 12 min a 170 °C.']]
    }
  },
  {
    id: 'lb-foul', n: 'Foul moudammas (habas con limón y comino)', e: '🫘', tipo: 'cena', tags: ['legumbres', 'vegetariano'],
    ing: [['habas_secas', 300], ['garbanzos', 200], ['ajo', 3], ['limon', 2], ['comino', 4], ['tomate', 200], ['perejil_fresco', 1], ['aceite', 60], ['pan_pita', 4], ['sal', 6]],
    m: {
      fuego: [60, ['Remoja las habas la noche anterior y cuécelas en agua 45 min, hasta que estén tiernas.', 'Aplástalas a medias con los garbanzos, ajo machacado, zumo de limón, comino y sal.', 'Sirve con tomate y perejil picados, un buen chorro de aceite y pita.']],
      robot: [50, ['Pon las habas remojadas con 1 l de agua: 40 min/100 °C/vel. 1. Escurre.', 'Añade garbanzos, ajo, limón, comino y sal: 10 seg/giro inverso/vel. 3.', 'Sirve con tomate, perejil, aceite y pita.']]
    }
  },
  {
    id: 'lb-makanek', n: 'Makanek (salchichas al limón y melaza de granada)', e: '🌭', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['salchichas', 600], ['limon', 2], ['melaza_granada', 30], ['pinones', 30], ['baharat', 2], ['tomate', 300], ['pepino', 300], ['pan_pita', 4], ['aceite', 20], ['sal', 3]],
    m: {
      fuego: [20, ['Corta las salchichas en trozos y dóralas en sartén con aceite y los piñones 8 min.', 'Añade el baharat, la melaza de granada y el zumo de los limones y deja que se reduzca 2 min.', 'Sirve con ensalada de tomate y pepino y pita.']],
      airfryer: [18, ['Cocina las salchichas en trozos 10 min a 200 °C.', 'Mézclalas con baharat, melaza, limón y piñones tostados.', 'Sirve con ensalada y pita.']]
    }
  },
  {
    id: 'lb-samak-tarator', n: 'Pescado a la plancha con salsa tarator', e: '🐠', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['dorada', 1000], ['tahini', 100], ['limon', 3], ['ajo', 2], ['perejil_fresco', 1], ['comino', 2], ['patata', 500], ['aceite', 40], ['sal', 6]],
    m: {
      fuego: [30, ['Cuece las patatas en dados 15 min.', 'Haz la plancha con los lomos o el pescado abierto salpimentado y con aceite, 4 min por lado.', 'Bate el tahini con zumo de limón, ajo, comino, agua y sal hasta tener una salsa fluida; añade perejil picado.', 'Sirve el pescado con las patatas y el tarator.']],
      horno: [30, ['Hornea las patatas en dados con aceite 15 min a 210 °C.', 'Añade el pescado y hornea 12 min más.', 'Sirve con la salsa tarator.']],
      airfryer: [25, ['Cocina las patatas en dados con aceite 12 min a 200 °C.', 'Añade los lomos de pescado y cocina 8 min a 190 °C.', 'Sirve con el tarator.']]
    }
  },
  {
    id: 'lb-gambas-cilantro', n: 'Gambas al ajo, cilantro y limón', e: '🦐', tipo: 'cena', tags: ['pescado', 'rapida'],
    ing: [['gambas', 600], ['ajo', 6], ['cilantro', 1], ['guindilla_fresca', 10], ['limon', 2], ['comino', 2], ['arroz_largo', 300], ['aceite', 50], ['sal', 6]],
    m: {
      fuego: [25, ['Cuece el arroz con agua y sal 15 min.', 'Saltea en una sartén con aceite el ajo, la guindilla y el comino 1 min.', 'Añade las gambas y saltea 3 min; termina con cilantro picado y zumo de limón. Sirve con el arroz.']],
      airfryer: [20, ['Mezcla las gambas con ajo picado, guindilla, comino, aceite y sal.', 'Cocina 7 min a 200 °C.', 'Termina con cilantro y limón y sirve con arroz.']]
    }
  },
  {
    id: 'lb-fatayer-espinacas', n: 'Fatayer de espinacas al sumac', e: '🥟', tipo: 'cena', tags: ['vegetariano'],
    ing: [['masa_pizza', 2], ['espinacas', 600], ['cebolla', 200], ['sumac', 6], ['limon', 2], ['pinones', 30], ['aceite', 60], ['yogur', 4], ['sal', 5]],
    m: {
      horno: [45, ['Pica las espinacas, sálalas, déjalas 10 min y escúrrelas apretando bien.', 'Mézclalas con la cebolla picada fina, el sumac, el zumo de limón, los piñones y el aceite.', 'Corta círculos de masa, pon una cucharada de relleno y cierra en triángulo pellizcando los bordes.', 'Hornea 18 min a 210 °C. Sirve con yogur.']],
      airfryer: [40, ['Prepara el relleno y forma los triángulos.', 'Pincélalos con aceite.', 'Cocina en tandas 10 min a 180 °C.']]
    }
  },
  {
    id: 'lb-musakhan', n: 'Musakhan (pollo al sumac con cebolla)', e: '🧅', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_muslos', 1000], ['cebolla', 800], ['sumac', 15], ['baharat', 4], ['pinones', 40], ['pan_pita', 4], ['limon', 1], ['aceite', 100], ['sal', 8]],
    m: {
      horno: [70, ['Marina el pollo con la mitad del sumac, el baharat, zumo de limón, aceite y sal y ásalo 40 min a 200 °C.', 'Pocha la cebolla en juliana con el resto de aceite 25 min, hasta que esté muy tierna; añade el resto del sumac y los piñones.', 'Extiende la cebolla sobre las pitas, coloca el pollo encima y hornea 8 min para que el pan se tueste.']],
      airfryer: [55, ['Marina el pollo y cocínalo 25 min a 190 °C, girando a mitad.', 'Pocha la cebolla con sumac en sartén.', 'Monta sobre la pita y cocina 4 min a 180 °C.']]
    }
  },
  {
    id: 'lb-daoud-basha', n: 'Daoud basha (albóndigas en tomate con piñones)', e: '🍝', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['carne_picada_ternera', 600], ['cebolla', 300], ['tomate_triturado', 600], ['tomate_concentrado', 30], ['pinones', 40], ['baharat', 5], ['canela', 1], ['melaza_granada', 20], ['arroz_largo', 300], ['fideos', 50], ['mantequilla', 20], ['aceite', 30], ['sal', 8]],
    m: {
      fuego: [50, ['Mezcla la carne con 50 g de cebolla rallada, el baharat y sal y forma albóndigas pequeñas; dóralas con aceite.', 'En la misma olla pocha el resto de cebolla en gajos con los piñones.', 'Añade tomate, concentrado, canela, melaza y 300 ml de agua; mete las albóndigas y cuece tapado 20 min.', 'Sirve con arroz con fideos dorados en mantequilla.']],
      robot: [50, ['Forma las albóndigas y colócalas en el Varoma.', 'Sofríe la cebolla en gajos y los piñones con aceite 6 min/120 °C/vel. 1; añade tomate, concentrado, canela, melaza y 200 ml de agua.', 'Cocina 25 min/Varoma/vel. 1 con el Varoma encima. Junta las albóndigas con la salsa y sirve con arroz.']]
    }
  },
  {
    id: 'lb-shorbat-djej', n: 'Sopa de pollo con arroz y limón', e: '🍲', tipo: 'cena', tags: ['carne', 'ligera'],
    ing: [['pollo_muslos', 500], ['arroz_largo', 100], ['zanahoria', 150], ['apio', 100], ['cebolla', 150], ['canela', 1], ['laurel', 2], ['limon', 2], ['perejil_fresco', 1], ['aceite', 20], ['sal', 7], ['pimienta', 2]],
    m: {
      fuego: [50, ['Cuece el pollo con la cebolla, el laurel, la canela y sal en 1,6 l de agua 30 min; desmenúzalo y cuela el caldo.', 'Añade al caldo la zanahoria y el apio en dados pequeños y el arroz y cuece 15 min.', 'Devuelve el pollo, añade zumo de limón y pimienta y sirve con perejil.']],
      robot: [45, ['Pon el pollo con cebolla, laurel, canela, sal y 1,4 l de agua: 25 min/100 °C/giro inverso/vel. cuchara. Desmenuza el pollo.', 'Añade zanahoria, apio y arroz: 15 min/100 °C/giro inverso/vel. cuchara.', 'Devuelve el pollo con limón y perejil.']]
    }
  },
  {
    id: 'lb-mfaraket-koussa', n: 'Calabacín salteado con huevo y menta', e: '🥒', tipo: 'cena', tags: ['vegetariano', 'rapida', 'ligera'],
    ing: [['calabacin', 900], ['cebolla', 150], ['huevo', 6], ['ajo', 2], ['menta_seca', 2], ['comino', 2], ['aceite', 40], ['pan_pita', 4], ['sal', 5]],
    m: {
      fuego: [25, ['Pocha la cebolla picada con el aceite 5 min.', 'Añade el calabacín en dados pequeños y el ajo y saltea 10 min, hasta que esté tierno.', 'Agrega los huevos batidos con la menta, el comino y sal y remueve hasta que cuajen. Sirve con pita.']],
      robot: [25, ['Sofríe la cebolla con aceite 5 min/120 °C/vel. 1.', 'Añade calabacín y ajo: 10 min/120 °C/giro inverso/vel. cuchara.', 'Añade los huevos batidos con menta, comino y sal: 4 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'lb-foul-akhdar', n: 'Habas tiernas con carne y cilantro', e: '🫛', tipo: 'comida', tags: ['carne', 'legumbres'],
    ing: [['habas', 700], ['carne_picada_ternera', 300], ['cebolla', 150], ['ajo', 5], ['cilantro', 2], ['baharat', 3], ['limon', 1], ['aceite', 50], ['arroz_largo', 250], ['sal', 7]],
    m: {
      fuego: [40, ['Dora la carne con la cebolla picada, el aceite y el baharat 8 min.', 'Añade las habas y 200 ml de agua, tapa y cuece 15 min.', 'Agrega el ajo machacado con el cilantro picado y el zumo de limón y cuece 3 min. Sirve con arroz blanco.']],
      robot: [40, ['Sofríe cebolla y carne con aceite y baharat 8 min/120 °C/giro inverso/vel. cuchara.', 'Añade habas, sal y 150 ml de agua: 15 min/100 °C/giro inverso/vel. cuchara.', 'Añade ajo, cilantro y limón: 3 min/100 °C/giro inverso/vel. cuchara. Sirve con arroz.']]
    }
  },
  {
    id: 'lb-coliflor-tahini', n: 'Coliflor asada con tahini y garbanzos', e: '🥦', tipo: 'cena', tags: ['vegetariano', 'legumbres', 'ligera'],
    ing: [['coliflor', 1000], ['garbanzos', 400], ['tahini', 80], ['limon', 2], ['ajo', 2], ['comino', 3], ['sumac', 3], ['perejil_fresco', 1], ['aceite', 50], ['pan_pita', 4], ['sal', 6]],
    m: {
      horno: [35, ['Corta la coliflor en ramilletes, mézclala con los garbanzos escurridos, aceite, comino y sal.', 'Ásala 25 min a 220 °C, hasta que se dore.', 'Bate el tahini con limón, ajo, agua y sal y sírvela por encima con sumac y perejil. Acompaña con pita.']],
      airfryer: [25, ['Aliña la coliflor y los garbanzos con aceite, comino y sal.', 'Cocina 18 min a 200 °C, removiendo a mitad.', 'Sirve con salsa de tahini, sumac y perejil.']],
      fuego: [30, ['Fríe o saltea la coliflor en ramilletes con aceite hasta dorarla, 12 min.', 'Añade los garbanzos con comino 3 min.', 'Sirve con la salsa de tahini, sumac y perejil.']]
    }
  },
  {
    id: 'lb-jawaneh', n: 'Alitas al ajo, limón y cilantro (jawaneh)', e: '🍗', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['pollo_alitas', 1200], ['ajo', 8], ['limon', 3], ['cilantro', 1], ['pimenton', 3], ['baharat', 3], ['aceite', 60], ['patata', 600], ['sal', 8]],
    m: {
      horno: [50, ['Marina las alitas con ajo machacado, zumo de limón, especias, aceite y sal 15 min.', 'Hornéalas con las patatas en gajos 35 min a 220 °C, girándolas a mitad.', 'Saltéalas al final con más ajo y cilantro picado y un chorro de limón.']],
      airfryer: [40, ['Marina las alitas 15 min.', 'Cocina 22 min a 200 °C, removiendo a mitad.', 'Mézclalas con ajo, cilantro y limón y sirve con patatas.']],
      fuego: [40, ['Marina las alitas y dóralas en una sartén grande con aceite 10 min.', 'Tapa y cocina a fuego medio 15 min.', 'Destapa, añade ajo, cilantro y limón y saltea 3 min.']]
    }
  },
  {
    id: 'lb-ouzi', n: 'Ouzi (arroz con cordero, guisantes y frutos secos)', e: '🍚', tipo: 'comida', tags: ['carne'],
    ing: [['cordero', 800], ['arroz_largo', 350], ['guisantes', 250], ['zanahoria', 150], ['cebolla', 150], ['baharat', 6], ['canela', 2], ['laurel', 2], ['almendras', 50], ['pinones', 30], ['mantequilla', 30], ['yogur', 4], ['sal', 8]],
    m: {
      fuego: [110, ['Cuece el cordero con cebolla, laurel, canela y sal en 1,5 l de agua 1 h 15 min; reserva el caldo.', 'Rehoga el arroz con mantequilla y baharat, añade zanahoria en dados, guisantes y 700 ml de caldo y cuece 15 min.', 'Sirve el arroz con el cordero encima, los frutos secos tostados y yogur.']],
      horno: [120, ['Cuece el cordero como en el fuego.', 'Pon el arroz rehogado con las verduras y el caldo en una fuente, tapa y hornea 20 min a 190 °C.', 'Añade el cordero encima y gratina 10 min. Sirve con frutos secos y yogur.']]
    }
  },
  {
    id: 'lb-maqluba', n: 'Maqluba de pollo y berenjena', e: '🍆', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_muslos', 800], ['berenjena', 700], ['coliflor', 400], ['arroz_largo', 350], ['tomate', 200], ['cebolla', 150], ['baharat', 6], ['curcuma', 2], ['laurel', 2], ['almendras', 40], ['aceite', 80], ['yogur', 4], ['sal', 9]],
    m: {
      fuego: [90, ['Cuece el pollo con la cebolla, laurel, baharat y sal en 1 l de agua 25 min; reserva el caldo.', 'Fríe o asa la berenjena en rodajas y la coliflor en ramilletes hasta dorarlas.', 'En una olla pon el tomate en rodajas, el pollo, las verduras y el arroz lavado con la cúrcuma; cubre con 700 ml de caldo y cuece tapado a fuego suave 30 min.', 'Reposa 10 min, vuelca la olla sobre una fuente y sirve con almendras y yogur.']],
      horno: [100, ['Cuece el pollo y asa las verduras 25 min a 220 °C.', 'Monta en una cazuela apta para horno tomate, pollo, verduras y arroz y añade el caldo caliente.', 'Tapa y hornea 40 min a 180 °C. Reposa, desmolda y sirve con almendras.']]
    }
  },
  {
    id: 'lb-bamieh', n: 'Bamieh (guiso de quimbombó con ternera)', e: '🍅', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_guisar', 600], ['quimbombo', 600], ['tomate_triturado', 500], ['tomate_concentrado', 30], ['cebolla', 150], ['ajo', 5], ['cilantro', 1], ['baharat', 4], ['limon', 1], ['aceite', 40], ['arroz_largo', 250], ['sal', 7]],
    m: {
      fuego: [90, ['Dora la ternera con aceite, la cebolla picada y el baharat.', 'Añade tomate, concentrado y 500 ml de agua; tapa y cuece 50 min.', 'Saltea el quimbombó en otra sartén 5 min y añádelo al guiso con el ajo machacado con cilantro y el limón.', 'Cuece 15 min más y sirve con arroz.']],
      robot: [80, ['Sofríe la cebolla con aceite 5 min/120 °C/vel. 1; añade ternera, baharat, tomate, concentrado, sal y 400 ml de agua: 50 min/100 °C/giro inverso/vel. cuchara.', 'Añade quimbombó, ajo, cilantro y limón: 15 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con arroz.']]
    }
  },
  {
    id: 'lb-mloukhieh', n: 'Mloukhieh con pollo y arroz', e: '🌿', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_muslos', 900], ['molokhia', 500], ['cebolla', 150], ['ajo', 8], ['cilantro', 2], ['cilantro_molido', 3], ['canela', 1], ['laurel', 2], ['limon', 2], ['aceite', 40], ['arroz_largo', 300], ['sal', 8]],
    m: {
      fuego: [70, ['Cuece el pollo con la cebolla, la canela, el laurel y sal en 1,2 l de agua 30 min; desmenúzalo y reserva el caldo.', 'Sofríe el ajo machacado con el cilantro picado y el molido en aceite 2 min.', 'Añade la molokhia y 800 ml de caldo y cuece 20 min; agrega el pollo y el zumo de limón.', 'Sirve en plato hondo sobre arroz blanco.']],
      robot: [65, ['Pon el pollo con cebolla, canela, laurel, sal y 1 l de agua: 30 min/100 °C/giro inverso/vel. cuchara. Reserva caldo y pollo.', 'Sofríe ajo y cilantro con aceite 3 min/120 °C/vel. 1; añade molokhia y 800 ml de caldo: 20 min/100 °C/giro inverso/vel. cuchara.', 'Añade el pollo y el limón y sirve con arroz.']]
    }
  },
  {
    id: 'lb-batata-harra', n: 'Patatas picantes con cilantro y huevos', e: '🥔', tipo: 'cena', tags: ['vegetariano', 'niños'],
    ing: [['patata', 1000], ['ajo', 5], ['cilantro', 2], ['guindilla_fresca', 15], ['pimenton', 4], ['limon', 1], ['huevo', 4], ['aceite', 80], ['sal', 7]],
    m: {
      horno: [45, ['Corta las patatas en dados, alíñalas con aceite, pimentón y sal y ásalas 35 min a 220 °C.', 'Saltea el ajo, la guindilla y el cilantro picados en aceite 1 min y mézclalo con las patatas y el zumo de limón.', 'Fríe los huevos y sírvelos encima.']],
      airfryer: [35, ['Aliña los dados de patata con aceite, pimentón y sal.', 'Cocina 22 min a 200 °C, removiendo a mitad.', 'Mezcla con el ajo, guindilla, cilantro y limón y sirve con huevos fritos.']],
      fuego: [35, ['Fríe las patatas en dados en aceite hasta dorarlas.', 'Saltéalas con ajo, guindilla, cilantro y pimentón 2 min y añade limón.', 'Sirve con huevos fritos.']]
    }
  },
  {
    id: 'lb-kibbeh-labanieh', n: 'Albóndigas de kibbeh en salsa de yogur', e: '🥣', tipo: 'comida', tags: ['carne'],
    ing: [['bulgur', 200], ['carne_picada_ternera', 500], ['cebolla', 100], ['baharat', 4], ['yogur', 8], ['maicena', 20], ['huevo', 1], ['ajo', 3], ['menta_seca', 2], ['mantequilla', 30], ['arroz_largo', 250], ['sal', 8]],
    m: {
      fuego: [60, ['Remoja el bulgur 15 min, escúrrelo y amásalo con la carne, la cebolla rallada, el baharat y sal; forma bolas del tamaño de una nuez.', 'Bate el yogur con maicena, huevo, sal y 200 ml de agua y caliéntalo removiendo hasta que hierva.', 'Añade las bolas y cuece 15 min a fuego suave.', 'Dora el ajo con la menta en mantequilla, viértelo por encima y sirve con arroz.']],
      horno: [55, ['Prepara las bolas de kibbeh y hornéalas 15 min a 200 °C.', 'Prepara la salsa de yogur al fuego y añade las bolas 8 min.', 'Termina con ajo y menta en mantequilla y sirve con arroz.']]
    }
  },
  {
    id: 'lb-rishta', n: 'Rishta (lentejas con pasta y acelgas)', e: '🍜', tipo: 'comida', tags: ['legumbres', 'vegetariano'],
    ing: [['lentejas', 300], ['tallarines', 150], ['acelgas', 400], ['cebolla', 250], ['ajo', 4], ['cilantro', 1], ['comino', 4], ['limon', 2], ['aceite', 60], ['sal', 8]],
    m: {
      fuego: [50, ['Cuece las lentejas en 1,5 l de agua 20 min.', 'Dora la mitad de la cebolla en juliana con el aceite y añádela a la olla con el resto de cebolla picada y el comino.', 'Agrega los tallarines partidos y las acelgas picadas y cuece 12 min.', 'Termina con ajo machacado con cilantro y zumo de limón.']],
      robot: [50, ['Sofríe la cebolla con aceite 6 min/120 °C/vel. 1.', 'Añade lentejas, comino, sal y 1,3 l de agua: 20 min/100 °C/giro inverso/vel. cuchara.', 'Añade tallarines partidos y acelgas: 12 min/100 °C/giro inverso/vel. cuchara. Termina con ajo, cilantro y limón.']]
    }
  },
  {
    id: 'lb-moghrabieh', n: 'Moghrabieh (cuscús perlado con pollo y garbanzos)', e: '🍲', tipo: 'comida', tags: ['carne', 'legumbres'],
    ing: [['pollo_muslos', 800], ['cuscus_perla', 350], ['garbanzos', 400], ['cebolla', 400], ['caldo_pollo', 1000], ['canela', 3], ['comino', 3], ['baharat', 4], ['mantequilla', 40], ['aceite', 30], ['sal', 7]],
    m: {
      fuego: [60, ['Dora el pollo con aceite y especias, añade el caldo y cuece 25 min. Reserva el caldo.', 'Pocha las cebollas pequeñas o en gajos con mantequilla 10 min.', 'Tuesta el cuscús perlado en mantequilla 3 min, añade 700 ml de caldo, la cebolla y los garbanzos y cuece 15 min.', 'Sirve con el pollo encima y un poco de caldo con canela.']],
      robot: [55, ['Pon el pollo con especias, sal y 900 ml de caldo: 25 min/100 °C/giro inverso/vel. cuchara. Reserva.', 'Sofríe la cebolla con mantequilla 8 min/120 °C/giro inverso/vel. cuchara.', 'Añade el cuscús perlado, los garbanzos y 700 ml de caldo: 15 min/100 °C/giro inverso/vel. cuchara. Sirve con el pollo.']]
    }
  }
]);
