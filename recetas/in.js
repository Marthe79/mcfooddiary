/* MC Food Diary · cocina de India 🇮🇳. Formato y normas: recetas/GUIA-RECETAS.md */

MC_ADD_ING({
  paneer: ['Queso paneer', 'lacteos', 16, 'kg', 0, 'queso halloumi o queso fresco firme en dados'],
  anacardos: ['Anacardos', 'despensa', 16, 'kg'],
  harina_garbanzo: ['Harina de garbanzo', 'despensa', 4, 'kg'],
  semillas_mostaza: ['Semillas de mostaza', 'despensa', 20, 'kg', 0, 'se pueden omitir'],
  pasta_tamarindo: ['Pasta de tamarindo', 'despensa', 15, 'kg', 0, 'zumo de lima con un poco de azúcar moreno'],
  guindilla_fresca: ['Guindilla fresca', 'fruteria', 10, 'kg'],
  coco_rallado: ['Coco rallado', 'despensa', 9, 'kg']
});

MC_ADD('in', [
  {
    id: 'curry-pollo', n: 'Curry de pollo con arroz', e: '🍛', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_pechuga', 600], ['leche_coco', 400], ['cebolla', 150], ['ajo', 2], ['curry', 10], ['tomate_triturado', 200], ['arroz', 250], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [35, ['Dora el pollo en dados y resérvalo.', 'Sofríe cebolla y ajo 6 min, añade el curry 1 min y luego el tomate 3 min.', 'Vierte la leche de coco, vuelve a poner el pollo y cuece 12 min.', 'Sirve con arroz blanco cocido.']],
      robot: [35, ['Pica cebolla y ajo 4 seg/vel. 5 y sofríe con aceite 5 min/120 °C/vel. 1.', 'Añade curry, tomate, leche de coco, pollo y sal: 15 min/100 °C/giro inverso/vel. cuchara. Pon el arroz en el cestillo con agua si tu robot lo permite.', 'Sirve con el arroz.']]
    }
  },
  {
    id: 'dal', n: 'Dal de lentejas rojas', e: '🍛', tipo: 'comida', tags: ['legumbres', 'vegetariano'],
    ing: [['lentejas_rojas', 300], ['leche_coco', 200], ['tomate', 250], ['cebolla', 150], ['ajo', 3], ['jengibre', 15], ['curry', 8], ['comino', 3], ['espinacas', 100], ['arroz_basmati', 250], ['aceite', 25], ['sal', 5]],
    m: {
      fuego: [35, ['Sofríe cebolla, ajo y jengibre picados 6 min. Añade curry y comino 1 min.', 'Agrega el tomate picado, las lentejas lavadas y 800 ml de agua. Cuece 20 min.', 'Añade la leche de coco y las espinacas 3 min. Ajusta la sal.', 'Sirve con arroz basmati.']],
      robot: [30, ['Pica cebolla, ajo y jengibre 4 seg/vel. 5 y sofríe con aceite y especias 5 min/120 °C/vel. 1.', 'Añade tomate, lentejas, 700 ml de agua y sal: 20 min/100 °C/giro inverso/vel. 1.', 'Añade leche de coco y espinacas: 3 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'tikka-masala', n: 'Pollo tikka masala', e: '🍛', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_pechuga', 600], ['yogur', 2], ['tomate_triturado', 400], ['nata', 150], ['cebolla', 150], ['ajo', 3], ['jengibre', 15], ['curry', 12], ['pimenton', 4], ['arroz_basmati', 250], ['aceite', 25], ['sal', 5]],
    m: {
      fuego: [45, ['Marina el pollo en dados con el yogur, la mitad del curry, el pimentón y sal (15 min o más).', 'Dóralo en sartén y resérvalo.', 'Sofríe cebolla, ajo y jengibre, añade el resto del curry y el tomate y cuece 10 min. Añade la nata.', 'Incorpora el pollo, cuece 5 min y sirve con arroz.']],
      horno: [45, ['Marina el pollo y hornéalo en una bandeja 15 min a 220 °C.', 'Prepara la salsa en el fuego.', 'Mezcla el pollo con la salsa y sirve con arroz.']],
      airfryer: [40, ['Marina el pollo y cocínalo 12 min a 200 °C.', 'Prepara la salsa en el fuego y mezcla con el pollo.', 'Sirve con arroz basmati.']]
    }
  },
  {
    id: 'chana-masala', n: 'Chana masala (curry de garbanzos)', e: '🫘', tipo: 'comida', tags: ['legumbres', 'vegetariano', 'rapida'],
    ing: [['garbanzos', 800], ['tomate_triturado', 400], ['cebolla', 150], ['ajo', 3], ['jengibre', 15], ['curry', 10], ['comino', 3], ['limon', 1], ['cilantro', 1], ['arroz_basmati', 250], ['aceite', 25], ['sal', 5]],
    m: {
      fuego: [25, ['Sofríe cebolla, ajo y jengibre picados 6 min. Añade curry y comino 1 min.', 'Agrega el tomate y cuece 6 min. Añade los garbanzos y 150 ml de agua y cuece 8 min.', 'Termina con zumo de limón y cilantro. Sirve con arroz.']],
      robot: [25, ['Pica cebolla, ajo y jengibre 4 seg/vel. 5 y sofríe con aceite y especias 5 min/120 °C/vel. 1.', 'Añade tomate, garbanzos, 100 ml de agua y sal: 12 min/100 °C/giro inverso/vel. cuchara.', 'Termina con limón y cilantro.']]
    }
  },
  {
    id: 'biryani', n: 'Biryani de pollo', e: '🍚', tipo: 'comida', tags: ['carne'],
    ing: [['arroz_basmati', 320], ['pollo_muslos', 600], ['yogur', 1], ['cebolla', 250], ['ajo', 2], ['jengibre', 10], ['curry', 10], ['comino', 2], ['caldo_pollo', 600], ['guisantes', 100], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [45, ['Marina el pollo troceado con yogur, curry, ajo, jengibre y sal.', 'Dora la cebolla en juliana hasta que esté bien tostada. Retira la mitad.', 'Añade el pollo a la cazuela y dóralo 6 min. Agrega el arroz lavado, el comino y los guisantes.', 'Vierte el caldo caliente y cuece tapado a fuego bajo 15 min. Reposa 5 min y sirve con la cebolla reservada.']],
      robot: [40, ['Sofríe la cebolla con aceite 10 min/120 °C/vel. 1. Reserva la mitad.', 'Añade el pollo marinado: 8 min/120 °C/giro inverso/vel. cuchara.', 'Añade arroz, comino, guisantes y caldo: 14 min/100 °C/giro inverso/vel. cuchara.', 'Reposa 5 min y sirve con la cebolla.']]
    }
  },
  {
    id: 'coliflor-curry', n: 'Coliflor asada al curry con garbanzos', e: '🥦', tipo: 'cena', tags: ['vegetariano', 'legumbres', 'ligera'],
    ing: [['coliflor', 900], ['garbanzos', 400], ['yogur', 2], ['curry', 8], ['comino', 2], ['limon', 1], ['cilantro', 1], ['aceite', 35], ['sal', 5]],
    m: {
      horno: [40, ['Mezcla la coliflor en ramitos y los garbanzos escurridos con aceite, curry, comino y sal.', 'Hornea 30 min a 210 °C, removiendo a mitad.', 'Sirve con una salsa de yogur, limón y sal, y cilantro.']],
      airfryer: [28, ['Aliña la coliflor y los garbanzos con aceite y especias.', 'Cocina 20 min a 190 °C, agitando cada 7 min.', 'Sirve con la salsa de yogur y limón.']]
    }
  },
  {
    id: 'in-butter-chicken', n: 'Butter chicken (pollo a la mantequilla)', e: '🍗', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['pollo_muslos', 700], ['yogur', 1], ['tomate_triturado', 400], ['mantequilla', 50], ['nata', 150], ['ajo', 3], ['jengibre', 15], ['garam_masala', 8], ['pimenton', 4], ['azucar', 5], ['arroz_basmati', 250], ['sal', 5]],
    m: {
      fuego: [45, ['Marina el pollo en dados con el yogur, la mitad del garam masala, el pimentón y sal al menos 15 min.', 'Dóralo en una sartén con un poco de mantequilla 6 min y resérvalo.', 'Funde el resto de la mantequilla, sofríe ajo y jengibre rallados 1 min, añade el tomate, el azúcar y el resto del garam masala y cuece 12 min. Tritura.', 'Añade la nata y el pollo y cuece 6 min a fuego suave. Sirve con arroz basmati.']],
      horno: [45, ['Marina el pollo y ásalo en una bandeja 15 min a 220 °C.', 'Mientras, prepara la salsa de tomate, mantequilla y especias en el fuego (12 min) y tritúrala.', 'Añade la nata y el pollo asado, cuece 5 min y sirve con arroz.']],
      robot: [40, ['Pon ajo y jengibre con la mantequilla: 3 min/120 °C/vel. 1.', 'Añade tomate, azúcar, especias y sal: 10 min/100 °C/vel. 1. Tritura 20 seg/vel. 8.', 'Añade el pollo marinado y la nata: 15 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con arroz basmati.']]
    }
  },
  {
    id: 'in-korma-pollo', n: 'Korma de pollo con anacardos', e: '🍛', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['pollo_pechuga', 600], ['anacardos', 60], ['cebolla', 200], ['yogur', 2], ['nata', 100], ['ajo', 2], ['jengibre', 15], ['garam_masala', 6], ['curcuma', 2], ['canela', 1], ['arroz_basmati', 250], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [40, ['Remoja los anacardos en agua caliente 10 min y tritúralos con un poco de esa agua.', 'Sofríe la cebolla picada 8 min, añade ajo, jengibre y especias 1 min.', 'Añade el pollo en dados y dóralo 4 min. Agrega el yogur, la crema de anacardos y 150 ml de agua y cuece 12 min a fuego suave.', 'Termina con la nata y sirve con arroz basmati.']],
      robot: [35, ['Tritura anacardos 10 seg/vel. 9. Añade cebolla, ajo y jengibre y pica 4 seg/vel. 5.', 'Sofríe con aceite y especias 6 min/120 °C/vel. 1.', 'Añade pollo, yogur, 150 ml de agua y sal: 15 min/100 °C/giro inverso/vel. cuchara.', 'Añade la nata, mezcla y sirve con arroz.']]
    }
  },
  {
    id: 'in-vindaloo-cerdo', n: 'Vindaloo de cerdo', e: '🌶️', tipo: 'comida', tags: ['carne'],
    ing: [['cerdo_guisar', 700], ['cebolla', 250], ['tomate_triturado', 200], ['ajo', 5], ['jengibre', 20], ['vinagre', 40], ['pimenton_picante', 8], ['pimenton', 6], ['comino', 4], ['garam_masala', 6], ['azucar_moreno', 10], ['arroz_basmati', 250], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [80, ['Mezcla ajo y jengibre rallados con el vinagre, los pimentones, el comino y el garam masala. Marina el cerdo en dados con esta pasta al menos 30 min.', 'Sofríe la cebolla picada 10 min hasta que esté dorada.', 'Añade el cerdo con su marinada y dóralo 5 min. Agrega el tomate, el azúcar y 300 ml de agua.', 'Cuece tapado a fuego suave 50 min, hasta que la carne esté tierna. Sirve con arroz.']],
      robot: [65, ['Pica cebolla, ajo y jengibre 5 seg/vel. 5 y sofríe con aceite 8 min/120 °C/vel. 1.', 'Añade el cerdo marinado, tomate, azúcar, 200 ml de agua y sal: 50 min/100 °C/giro inverso/vel. cuchara.', 'Deja reposar 5 min y sirve con arroz basmati.']]
    }
  },
  {
    id: 'in-rogan-josh', n: 'Rogan josh de cordero', e: '🍖', tipo: 'comida', tags: ['carne'],
    ing: [['cordero', 800], ['yogur', 2], ['cebolla', 250], ['tomate_triturado', 200], ['ajo', 4], ['jengibre', 20], ['pimenton', 8], ['garam_masala', 8], ['canela', 1], ['clavo', 3], ['laurel', 2], ['arroz_basmati', 250], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [95, ['Dora el cordero en tandas con el aceite y resérvalo.', 'En la misma cazuela, sofríe la cebolla picada 10 min con el laurel, la canela y el clavo. Añade ajo y jengibre 1 min.', 'Agrega el pimentón y el garam masala, después el tomate y el yogur batido, poco a poco.', 'Vuelve a poner el cordero, cubre con 400 ml de agua y cuece tapado a fuego suave 70 min. Sirve con arroz.']],
      horno: [110, ['Dora el cordero y prepara el sofrito con las especias, el tomate y el yogur en una cazuela apta para horno.', 'Añade la carne y 400 ml de agua, tapa y hornea 90 min a 170 °C.', 'Retira el laurel y sirve con arroz basmati.']]
    }
  },
  {
    id: 'in-keema-matar', n: 'Keema matar (picada con guisantes)', e: '🍛', tipo: 'cena', tags: ['carne', 'rapida', 'niños'],
    ing: [['carne_picada_ternera', 500], ['guisantes', 250], ['cebolla', 200], ['tomate', 300], ['ajo', 3], ['jengibre', 15], ['garam_masala', 6], ['comino', 3], ['curcuma', 2], ['cilantro', 1], ['pan_naan', 4], ['aceite', 25], ['sal', 5]],
    m: {
      fuego: [30, ['Sofríe la cebolla picada 7 min, añade ajo, jengibre, comino y cúrcuma 1 min.', 'Añade la carne y deshazla mientras se dora, 6 min.', 'Agrega el tomate rallado, el garam masala, los guisantes y 100 ml de agua. Cuece 10 min.', 'Termina con cilantro picado y sirve con pan naan caliente.']],
      robot: [30, ['Pica cebolla, ajo y jengibre 4 seg/vel. 5 y sofríe con aceite 6 min/120 °C/vel. 1.', 'Añade la carne y las especias: 6 min/120 °C/giro inverso/vel. cuchara.', 'Añade tomate, guisantes, 80 ml de agua y sal: 12 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con cilantro y pan naan.']]
    }
  },
  {
    id: 'in-palak-paneer', n: 'Palak paneer (espinacas con queso)', e: '🥬', tipo: 'cena', tags: ['vegetariano'],
    ing: [['espinacas_congeladas', 600], ['paneer', 300], ['cebolla', 150], ['tomate', 150], ['ajo', 3], ['jengibre', 15], ['garam_masala', 5], ['comino', 3], ['nata', 80], ['arroz_basmati', 250], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [35, ['Cuece las espinacas 4 min, escúrrelas y tritúralas.', 'Dora el paneer en dados en una sartén y resérvalo.', 'Sofríe cebolla, ajo y jengibre 7 min, añade comino, garam masala y el tomate picado 4 min.', 'Agrega las espinacas, la nata y el paneer y cuece 5 min. Sirve con arroz basmati.']],
      robot: [30, ['Pica cebolla, ajo, jengibre y tomate 5 seg/vel. 5 y sofríe con aceite y especias 7 min/120 °C/vel. 1.', 'Añade las espinacas y 100 ml de agua: 8 min/100 °C/vel. 1. Tritura 20 seg/vel. 8.', 'Añade nata y paneer dorado: 3 min/90 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'in-saag-aloo', n: 'Saag aloo (patatas con espinacas)', e: '🥔', tipo: 'cena', tags: ['vegetariano', 'ligera'],
    ing: [['patata', 700], ['espinacas', 400], ['cebolla', 150], ['ajo', 3], ['jengibre', 10], ['comino', 3], ['curcuma', 2], ['garam_masala', 4], ['guindilla', 1], ['aceite', 35], ['sal', 5]],
    m: {
      fuego: [35, ['Cuece las patatas en dados 10 min en agua con sal y escúrrelas.', 'Sofríe el comino 30 seg en el aceite, añade la cebolla 6 min y luego ajo, jengibre, cúrcuma y guindilla.', 'Agrega las patatas y saltéalas 5 min hasta que se doren un poco.', 'Añade las espinacas y el garam masala y remueve hasta que se ablanden. Sirve caliente.']],
      airfryer: [35, ['Aliña las patatas en dados con la mitad del aceite, la cúrcuma y sal y cocínalas 20 min a 200 °C.', 'Mientras, sofríe cebolla, ajo, jengibre y especias y añade las espinacas hasta que se ablanden.', 'Mezcla con las patatas y sirve.']]
    }
  },
  {
    id: 'in-aloo-gobi', n: 'Aloo gobi (patata y coliflor)', e: '🥦', tipo: 'comida', tags: ['vegetariano'],
    ing: [['coliflor', 700], ['patata', 500], ['cebolla', 150], ['tomate', 200], ['ajo', 3], ['jengibre', 10], ['curcuma', 3], ['comino', 3], ['garam_masala', 5], ['cilantro', 1], ['aceite', 40], ['sal', 6]],
    m: {
      fuego: [40, ['Sofríe el comino en el aceite 30 seg, añade la cebolla picada 6 min y luego ajo y jengibre.', 'Añade la cúrcuma y el tomate rallado y cuece 4 min.', 'Agrega la patata en dados y la coliflor en ramitos, sal y 100 ml de agua. Tapa y cuece 20 min a fuego medio.', 'Destapa, añade el garam masala y deja que se evapore el líquido. Termina con cilantro.']],
      horno: [45, ['Mezcla la coliflor y la patata en trozos con el aceite, todas las especias, ajo y jengibre rallados y sal.', 'Hornea 35 min a 210 °C, removiendo a mitad, con el tomate en dados por encima los últimos 10 min.', 'Sirve con cilantro picado.']],
      airfryer: [35, ['Aliña la coliflor y la patata con aceite, especias, ajo, jengibre y sal.', 'Cocina 25 min a 190 °C, agitando cada 8 min.', 'Sirve con tomate picado y cilantro.']]
    }
  },
  {
    id: 'in-aloo-matar', n: 'Aloo matar (patatas con guisantes)', e: '🫛', tipo: 'comida', tags: ['vegetariano', 'niños'],
    ing: [['patata', 600], ['guisantes', 350], ['cebolla', 150], ['tomate_triturado', 300], ['ajo', 2], ['jengibre', 10], ['comino', 3], ['curcuma', 2], ['garam_masala', 5], ['arroz_basmati', 250], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [35, ['Sofríe el comino 30 seg, añade la cebolla 6 min y después ajo, jengibre y cúrcuma.', 'Agrega el tomate y cuece 5 min.', 'Añade la patata en dados, los guisantes, 350 ml de agua y sal. Cuece tapado 18 min.', 'Termina con garam masala y sirve con arroz basmati.']],
      robot: [32, ['Pica cebolla, ajo y jengibre 4 seg/vel. 5 y sofríe con aceite y especias 5 min/120 °C/vel. 1.', 'Añade tomate, patata, guisantes, 300 ml de agua y sal: 20 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con arroz basmati.']]
    }
  },
  {
    id: 'in-baingan-bharta', n: 'Baingan bharta (berenjena asada especiada)', e: '🍆', tipo: 'cena', tags: ['vegetariano', 'ligera'],
    ing: [['berenjena', 900], ['cebolla', 150], ['tomate', 300], ['ajo', 3], ['jengibre', 10], ['guindilla_fresca', 10], ['comino', 3], ['garam_masala', 4], ['cilantro', 1], ['pan_naan', 4], ['aceite', 30], ['sal', 5]],
    m: {
      horno: [55, ['Pincha las berenjenas y ásalas enteras 40 min a 220 °C, hasta que estén muy blandas.', 'Pélalas y chafa la pulpa con un tenedor.', 'Sofríe comino, cebolla, ajo, jengibre y guindilla 7 min, añade el tomate picado 5 min.', 'Mezcla con la berenjena y el garam masala, cuece 3 min y sirve con cilantro y naan.']],
      fuego: [40, ['Asa las berenjenas directamente sobre la llama o en una plancha muy caliente, girándolas, 15 min.', 'Pélalas y chafa la pulpa.', 'Prepara el sofrito de cebolla, especias y tomate y mezcla con la berenjena 3 min.', 'Sirve con cilantro y pan naan.']],
      airfryer: [45, ['Parte las berenjenas por la mitad y cocínalas 25 min a 200 °C.', 'Saca la pulpa y chafa.', 'Mezcla con el sofrito de cebolla, tomate y especias y sirve con naan.']]
    }
  },
  {
    id: 'in-rajma', n: 'Rajma (curry de alubias rojas)', e: '🫘', tipo: 'comida', tags: ['legumbres', 'vegetariano', 'rapida'],
    ing: [['alubias_rojas', 800], ['tomate_triturado', 400], ['cebolla', 200], ['ajo', 3], ['jengibre', 15], ['comino', 3], ['garam_masala', 6], ['pimenton', 3], ['laurel', 1], ['arroz_basmati', 250], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [30, ['Sofríe comino y laurel en el aceite 30 seg, añade la cebolla picada 7 min, después ajo y jengibre.', 'Añade el pimentón y el tomate y cuece 8 min.', 'Agrega las alubias escurridas, el garam masala y 250 ml de agua. Cuece 12 min, chafando unas pocas alubias para espesar.', 'Sirve con arroz basmati.']],
      robot: [28, ['Pica cebolla, ajo y jengibre 4 seg/vel. 5 y sofríe con aceite y especias 6 min/120 °C/vel. 1.', 'Añade tomate, alubias, laurel, 200 ml de agua y sal: 15 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con arroz.']]
    }
  },
  {
    id: 'in-dal-makhani', n: 'Dal makhani de lentejas pardinas', e: '🍲', tipo: 'comida', tags: ['legumbres', 'vegetariano'],
    ing: [['lentejas', 300], ['alubias_rojas', 200], ['tomate_triturado', 300], ['cebolla', 150], ['mantequilla', 40], ['nata', 100], ['ajo', 3], ['jengibre', 15], ['garam_masala', 6], ['comino', 3], ['pimenton', 3], ['arroz_basmati', 250], ['sal', 6]],
    m: {
      fuego: [65, ['Cuece las lentejas en 1,2 l de agua 30 min.', 'Funde la mantequilla y sofríe el comino, la cebolla picada, el ajo y el jengibre 8 min.', 'Añade pimentón, garam masala y tomate y cuece 5 min. Agrega las lentejas con su caldo y las alubias.', 'Cuece 20 min a fuego suave, removiendo, hasta que quede cremoso. Termina con la nata y sirve con arroz.']],
      robot: [55, ['Pica cebolla, ajo y jengibre 4 seg/vel. 5 y sofríe con la mantequilla y especias 6 min/120 °C/vel. 1.', 'Añade lentejas, tomate, 900 ml de agua y sal: 40 min/100 °C/giro inverso/vel. 1.', 'Añade alubias y nata: 5 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'in-sambar', n: 'Sambar de lentejas y verduras', e: '🥘', tipo: 'comida', tags: ['legumbres', 'vegetariano', 'ligera'],
    ing: [['lentejas_rojas', 200], ['berenjena', 250], ['zanahoria', 200], ['calabacin', 200], ['tomate', 200], ['cebolla', 150], ['pasta_tamarindo', 25], ['semillas_mostaza', 5], ['curry', 8], ['curcuma', 2], ['ajo', 2], ['arroz_basmati', 250], ['aceite', 25], ['sal', 6]],
    m: {
      fuego: [45, ['Cuece las lentejas con la cúrcuma en 800 ml de agua 15 min.', 'Añade las verduras en dados, el tomate y la pasta de tamarindo y cuece 15 min.', 'En una sartén, calienta el aceite con las semillas de mostaza hasta que salten; añade la cebolla en juliana, el ajo y el curry y dora 5 min.', 'Vierte este sofrito sobre las lentejas, cuece 3 min y sirve con arroz.']],
      robot: [40, ['Sofríe cebolla y ajo con aceite, mostaza y curry 6 min/120 °C/vel. 1.', 'Añade lentejas, cúrcuma, verduras en dados, tomate, tamarindo, 800 ml de agua y sal: 25 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con arroz basmati.']]
    }
  },
  {
    id: 'in-jalfrezi', n: 'Pollo jalfrezi con pimientos', e: '🫑', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['pollo_pechuga', 600], ['pimiento_rojo', 200], ['pimiento_verde', 200], ['cebolla', 200], ['tomate', 250], ['ajo', 3], ['jengibre', 15], ['guindilla_fresca', 10], ['curry', 8], ['comino', 3], ['arroz_basmati', 250], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [30, ['Saltea el pollo en tiras a fuego fuerte 5 min con la mitad del curry y resérvalo.', 'Saltea el comino, la cebolla en gajos y los pimientos en tiras 5 min, que queden algo crujientes.', 'Añade ajo, jengibre, guindilla, el resto del curry y el tomate en dados y cocina 4 min.', 'Vuelve a poner el pollo, saltea 2 min y sirve con arroz basmati.']]
    }
  },
  {
    id: 'in-pollo-tandoori', n: 'Pollo tandoori', e: '🍗', tipo: 'ambos', tags: ['carne', 'niños'],
    ing: [['pollo_muslos', 900], ['yogur', 2], ['limon', 1], ['ajo', 3], ['jengibre', 15], ['pimenton', 8], ['garam_masala', 6], ['comino', 3], ['curcuma', 2], ['cebolla_morada', 150], ['lechuga', 1], ['aceite', 20], ['sal', 6]],
    m: {
      horno: [45, ['Haz cortes en el pollo y marínalo con yogur, zumo de limón, ajo y jengibre rallados, especias, aceite y sal al menos 1 h.', 'Colócalo en una bandeja con rejilla y hornéalo 30 min a 220 °C, girándolo a mitad.', 'Gratina 3 min y sirve con lechuga y cebolla morada en aros.']],
      airfryer: [35, ['Marina el pollo como en la receta del horno.', 'Cocínalo 22 min a 200 °C, girándolo a mitad.', 'Sirve con lechuga, cebolla morada y limón.']],
      fuego: [35, ['Marina el pollo.', 'Hazlo en una plancha o sartén grande a fuego medio, tapado, 25 min, girándolo de vez en cuando.', 'Sirve con ensalada de lechuga y cebolla morada.']]
    }
  },
  {
    id: 'in-fish-molee', n: 'Fish molee (merluza en leche de coco)', e: '🐟', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['merluza', 700], ['leche_coco', 400], ['cebolla', 200], ['tomate', 200], ['ajo', 3], ['jengibre', 15], ['guindilla_fresca', 10], ['curcuma', 3], ['semillas_mostaza', 4], ['limon', 1], ['arroz_basmati', 250], ['aceite', 25], ['sal', 5]],
    m: {
      fuego: [30, ['Sala la merluza y frótala con la mitad de la cúrcuma.', 'Calienta el aceite con la mostaza; añade la cebolla en juliana, ajo, jengibre y guindilla y pocha 7 min sin dorar.', 'Añade el resto de la cúrcuma y la leche de coco y lleva a hervor suave.', 'Coloca la merluza y el tomate en rodajas encima, tapa y cuece 7 min. Termina con limón y sirve con arroz.']],
      horno: [30, ['Prepara la salsa de cebolla, especias y leche de coco en el fuego.', 'Ponla en una fuente con la merluza y el tomate encima y hornea 12 min a 190 °C.', 'Sirve con arroz y limón.']]
    }
  },
  {
    id: 'in-gambas-goa', n: 'Curry de gambas de Goa', e: '🦐', tipo: 'cena', tags: ['pescado', 'rapida'],
    ing: [['gambas', 500], ['leche_coco', 400], ['cebolla', 150], ['tomate_triturado', 200], ['ajo', 3], ['jengibre', 15], ['pasta_tamarindo', 15], ['pimenton', 5], ['pimenton_picante', 2], ['cilantro_molido', 3], ['curcuma', 2], ['arroz_basmati', 250], ['aceite', 25], ['sal', 5]],
    m: {
      fuego: [28, ['Sofríe la cebolla picada 7 min, añade ajo, jengibre y las especias 1 min.', 'Añade el tomate y cuece 5 min.', 'Vierte la leche de coco y el tamarindo y cuece 5 min.', 'Añade las gambas y cocínalas 3 min. Sirve con arroz basmati.']],
      robot: [25, ['Pica cebolla, ajo y jengibre 4 seg/vel. 5 y sofríe con aceite y especias 5 min/120 °C/vel. 1.', 'Añade tomate, leche de coco, tamarindo y sal: 8 min/100 °C/vel. 1.', 'Añade las gambas: 4 min/100 °C/giro inverso/vel. cuchara. Sirve con arroz.']]
    }
  },
  {
    id: 'in-salmon-tandoori', n: 'Salmón tandoori con raita', e: '🐟', tipo: 'cena', tags: ['pescado', 'rapida', 'ligera'],
    ing: [['salmon', 600], ['yogur', 3], ['limon', 1], ['ajo', 2], ['jengibre', 10], ['pimenton', 5], ['garam_masala', 4], ['comino', 2], ['pepino', 250], ['hierbabuena', 1], ['aceite', 15], ['sal', 5]],
    m: {
      horno: [25, ['Mezcla 1 yogur con limón, ajo y jengibre rallados, las especias, aceite y sal y unta el salmón. Deja 10 min.', 'Hornea 12 min a 210 °C.', 'Para la raita, mezcla el resto del yogur con el pepino rallado, hierbabuena picada y sal. Sirve con el salmón.']],
      airfryer: [22, ['Unta el salmón con la marinada de yogur y especias.', 'Cocínalo 9 min a 190 °C.', 'Sirve con la raita de pepino y hierbabuena.']],
      fuego: [22, ['Marina el salmón.', 'Hazlo en una sartén antiadherente 4 min por cada lado.', 'Sirve con la raita de pepino.']]
    }
  },
  {
    id: 'in-matar-paneer', n: 'Matar paneer (guisantes con queso)', e: '🧀', tipo: 'comida', tags: ['vegetariano'],
    ing: [['paneer', 300], ['guisantes', 350], ['tomate_triturado', 350], ['cebolla', 150], ['anacardos', 30], ['ajo', 2], ['jengibre', 10], ['garam_masala', 6], ['curcuma', 2], ['comino', 2], ['arroz_basmati', 250], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [35, ['Dora el paneer en dados y resérvalo.', 'Sofríe la cebolla, el ajo y el jengibre 7 min, añade las especias y el tomate y cuece 8 min.', 'Tritura la salsa con los anacardos y 150 ml de agua hasta que quede fina.', 'Devuélvela a la cazuela con los guisantes 6 min, añade el paneer 2 min y sirve con arroz.']],
      robot: [30, ['Tritura anacardos 10 seg/vel. 9. Añade cebolla, ajo y jengibre, pica 4 seg/vel. 5 y sofríe con aceite y especias 6 min/120 °C/vel. 1.', 'Añade tomate, 150 ml de agua y sal: 8 min/100 °C/vel. 1. Tritura 20 seg/vel. 8.', 'Añade guisantes y paneer dorado: 7 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'in-paneer-tikka', n: 'Paneer tikka con pimientos', e: '🍢', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['paneer', 400], ['pimiento_rojo', 200], ['pimiento_verde', 150], ['cebolla_morada', 150], ['yogur', 2], ['limon', 1], ['ajo', 2], ['pimenton', 5], ['garam_masala', 5], ['comino', 2], ['pan_naan', 4], ['aceite', 20], ['sal', 4]],
    m: {
      horno: [30, ['Mezcla el yogur con limón, ajo rallado, especias, aceite y sal.', 'Embadurna el paneer en dados y las verduras en trozos grandes y ensártalos en brochetas.', 'Hornea 15 min a 220 °C con el grill los últimos 3 min. Sirve con pan naan.']],
      airfryer: [25, ['Marina el paneer y las verduras.', 'Cocina las brochetas 12 min a 200 °C, girándolas a mitad.', 'Sirve con naan y limón.']],
      fuego: [25, ['Marina el paneer y las verduras.', 'Hazlo todo en una plancha muy caliente 8 min, girando.', 'Sirve con pan naan.']]
    }
  },
  {
    id: 'in-kadhi-pakora', n: 'Kadhi pakora (curry de yogur con buñuelos)', e: '🥣', tipo: 'comida', tags: ['vegetariano'],
    ing: [['yogur', 4], ['harina_garbanzo', 180], ['cebolla', 200], ['espinacas', 100], ['ajo', 2], ['jengibre', 10], ['curcuma', 3], ['comino', 3], ['semillas_mostaza', 4], ['guindilla', 1], ['arroz_basmati', 250], ['aceite_girasol', 300], ['sal', 6]],
    m: {
      fuego: [50, ['Bate el yogur con 60 g de harina de garbanzo, la cúrcuma y 700 ml de agua. Cuece removiendo 20 min a fuego suave.', 'Mezcla el resto de harina con la mitad de la cebolla en juliana, las espinacas picadas, sal y agua hasta tener una masa espesa. Fríe cucharadas en aceite caliente 4 min.', 'En una sartén, sofríe comino, mostaza, guindilla, ajo, jengibre y el resto de la cebolla y añádelo al kadhi.', 'Incorpora los buñuelos al curry 3 min antes de servir con arroz.']],
      airfryer: [45, ['Prepara el curry de yogur en el fuego, 20 min.', 'Forma bolitas con la masa de garbanzo y verduras, rocíalas con aceite y cocínalas 12 min a 200 °C.', 'Añade el sofrito de especias al curry e incorpora las pakoras. Sirve con arroz.']]
    }
  },
  {
    id: 'in-pulao-verduras', n: 'Pulao de verduras', e: '🍚', tipo: 'comida', tags: ['vegetariano', 'rapida', 'niños'],
    ing: [['arroz_basmati', 320], ['zanahoria', 150], ['guisantes', 150], ['judias_verdes', 150], ['cebolla', 150], ['anacardos', 40], ['caldo_verduras', 650], ['comino', 3], ['canela', 1], ['clavo', 3], ['laurel', 2], ['garam_masala', 3], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [30, ['Lava el arroz y déjalo en remojo 10 min.', 'Sofríe comino, canela, clavo y laurel 30 seg; añade la cebolla en juliana y los anacardos y dora 5 min.', 'Añade las verduras en dados 3 min, luego el arroz escurrido y el garam masala.', 'Vierte el caldo caliente con sal y cuece tapado a fuego bajo 13 min. Reposa 5 min y suelta con un tenedor.']],
      robot: [28, ['Sofríe la cebolla con aceite y especias 5 min/120 °C/vel. 1.', 'Añade las verduras, el arroz lavado, el caldo y sal: 13 min/100 °C/giro inverso/vel. cuchara.', 'Reposa 5 min y sirve con anacardos tostados.']]
    }
  },
  {
    id: 'in-egg-curry', n: 'Curry de huevos (anda curry)', e: '🥚', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['huevo', 8], ['tomate_triturado', 400], ['cebolla', 200], ['leche_coco', 150], ['ajo', 3], ['jengibre', 10], ['curry', 8], ['curcuma', 2], ['garam_masala', 3], ['cilantro', 1], ['arroz_basmati', 250], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [30, ['Cuece los huevos 10 min, pélalos y haz unos cortes superficiales.', 'Dóralos ligeramente en el aceite con la cúrcuma y resérvalos.', 'Sofríe cebolla, ajo y jengibre 7 min, añade curry, tomate y cuece 6 min. Agrega la leche de coco y el garam masala.', 'Incorpora los huevos, cuece 4 min y sirve con cilantro y arroz.']],
      robot: [30, ['Cuece los huevos aparte y pélalos.', 'Pica cebolla, ajo y jengibre 4 seg/vel. 5 y sofríe con aceite y especias 6 min/120 °C/vel. 1.', 'Añade tomate, leche de coco y sal: 10 min/100 °C/vel. 1. Vierte sobre los huevos y sirve con arroz.']]
    }
  },
  {
    id: 'in-egg-bhurji', n: 'Egg bhurji (revuelto de huevos especiado)', e: '🍳', tipo: 'cena', tags: ['vegetariano', 'rapida', 'ligera'],
    ing: [['huevo', 8], ['cebolla', 150], ['tomate', 200], ['pimiento_verde', 100], ['guindilla_fresca', 5], ['jengibre', 10], ['curcuma', 2], ['comino', 2], ['garam_masala', 2], ['cilantro', 1], ['pan_naan', 4], ['mantequilla', 20], ['sal', 4]],
    m: {
      fuego: [20, ['Funde la mantequilla y sofríe el comino, la cebolla, el pimiento y la guindilla picados 5 min.', 'Añade el jengibre rallado, la cúrcuma y el tomate picado y cocina 3 min.', 'Vierte los huevos batidos con sal y remueve a fuego suave hasta que cuajen jugosos.', 'Termina con garam masala y cilantro y sirve con pan naan caliente.']]
    }
  },
  {
    id: 'in-pollo-65', n: 'Pollo 65 crujiente', e: '🍗', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['pollo_muslos', 700], ['yogur', 1], ['maicena', 40], ['harina', 30], ['ajo', 3], ['jengibre', 15], ['pimenton', 6], ['pimenton_picante', 2], ['garam_masala', 4], ['limon', 1], ['pepino', 250], ['tomate', 250], ['aceite_girasol', 500], ['sal', 5]],
    m: {
      fuego: [35, ['Marina el pollo en dados con yogur, ajo y jengibre rallados, especias, zumo de limón y sal 20 min.', 'Añade la maicena y la harina y mezcla hasta que queden bien cubiertos.', 'Fríelos en tandas en aceite caliente 5 min, hasta que estén crujientes. Escurre.', 'Sirve con una ensalada de pepino y tomate.']],
      airfryer: [30, ['Marina y enharina el pollo como en la receta tradicional.', 'Rocíalo con un poco de aceite y cocínalo 15 min a 200 °C, agitando a mitad.', 'Sirve con la ensalada de pepino y tomate.']],
      horno: [35, ['Marina y enharina el pollo.', 'Extiéndelo en una bandeja con papel, rocía con aceite y hornea 22 min a 220 °C, girándolo a mitad.', 'Sirve con ensalada.']]
    }
  },
  {
    id: 'in-madras-ternera', n: 'Curry madras de ternera', e: '🍛', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_guisar', 700], ['cebolla', 250], ['tomate_triturado', 300], ['ajo', 4], ['jengibre', 20], ['curry', 12], ['pimenton_picante', 4], ['comino', 3], ['pasta_tamarindo', 15], ['caldo_carne', 400], ['arroz_basmati', 250], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [100, ['Dora la ternera en dados con el aceite y resérvala.', 'Sofríe la cebolla picada 10 min, añade ajo, jengibre, curry, pimentón picante y comino 1 min.', 'Agrega el tomate, el tamarindo, el caldo y la carne.', 'Cuece tapado a fuego suave 80 min, hasta que la carne esté tierna. Sirve con arroz.']],
      robot: [85, ['Pica cebolla, ajo y jengibre 5 seg/vel. 5 y sofríe con aceite 8 min/120 °C/vel. 1.', 'Añade especias, ternera, tomate, tamarindo, caldo y sal: 70 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con arroz basmati.']]
    }
  },
  {
    id: 'in-chana-saag', n: 'Chana saag (garbanzos con espinacas)', e: '🫘', tipo: 'cena', tags: ['legumbres', 'vegetariano', 'rapida', 'ligera'],
    ing: [['garbanzos', 800], ['espinacas', 300], ['tomate', 300], ['cebolla', 150], ['ajo', 3], ['jengibre', 10], ['comino', 3], ['garam_masala', 5], ['curcuma', 2], ['limon', 1], ['aceite', 25], ['sal', 5]],
    m: {
      fuego: [25, ['Sofríe el comino, la cebolla, el ajo y el jengibre 7 min.', 'Añade cúrcuma, garam masala y el tomate picado y cocina 5 min.', 'Agrega los garbanzos escurridos y 100 ml de agua y cuece 6 min.', 'Añade las espinacas, remueve hasta que se ablanden y termina con zumo de limón.']],
      robot: [25, ['Pica cebolla, ajo, jengibre y tomate 5 seg/vel. 5 y sofríe con aceite y especias 7 min/120 °C/vel. 1.', 'Añade garbanzos, 80 ml de agua y sal: 8 min/100 °C/giro inverso/vel. cuchara.', 'Añade espinacas: 3 min/100 °C/giro inverso/vel. cuchara. Termina con limón.']]
    }
  },
  {
    id: 'in-khichdi', n: 'Khichdi (arroz con lentejas)', e: '🍚', tipo: 'cena', tags: ['legumbres', 'vegetariano', 'ligera', 'niños'],
    ing: [['arroz_basmati', 200], ['lentejas_rojas', 150], ['zanahoria', 150], ['guisantes', 100], ['cebolla', 100], ['jengibre', 10], ['comino', 3], ['curcuma', 3], ['mantequilla', 30], ['yogur', 4], ['sal', 6]],
    m: {
      fuego: [35, ['Lava el arroz y las lentejas juntos.', 'Funde la mantequilla y sofríe el comino, la cebolla picada y el jengibre 5 min.', 'Añade la cúrcuma, el arroz, las lentejas, la zanahoria en dados, los guisantes, sal y 1,1 l de agua.', 'Cuece 22 min a fuego suave, removiendo de vez en cuando, hasta que quede cremoso. Sirve con yogur.']],
      robot: [32, ['Sofríe cebolla y jengibre con la mantequilla y el comino 4 min/120 °C/vel. 1.', 'Añade arroz, lentejas, verduras, cúrcuma, sal y 1 l de agua: 22 min/100 °C/giro inverso/vel. cuchara.', 'Reposa 3 min y sirve con yogur.']]
    }
  },
  {
    id: 'in-korma-verduras', n: 'Korma de verduras', e: '🥕', tipo: 'comida', tags: ['vegetariano'],
    ing: [['coliflor', 400], ['patata', 300], ['zanahoria', 200], ['judias_verdes', 150], ['guisantes', 100], ['cebolla', 150], ['anacardos', 60], ['leche_coco', 200], ['yogur', 1], ['ajo', 2], ['jengibre', 10], ['garam_masala', 6], ['curcuma', 2], ['arroz_basmati', 250], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [40, ['Remoja los anacardos en agua caliente 10 min y tritúralos con el yogur.', 'Sofríe la cebolla, el ajo y el jengibre 7 min, añade las especias.', 'Añade la patata, la zanahoria y la coliflor en trozos, la leche de coco y 200 ml de agua. Cuece tapado 15 min.', 'Agrega las judías, los guisantes y la crema de anacardos y cuece 6 min. Sirve con arroz.']],
      robot: [35, ['Tritura anacardos 10 seg/vel. 9. Añade cebolla, ajo y jengibre, pica 4 seg/vel. 5 y sofríe con aceite y especias 6 min/120 °C/vel. 1.', 'Añade todas las verduras, leche de coco, yogur, 150 ml de agua y sal: 22 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con arroz basmati.']]
    }
  },
  {
    id: 'in-pollo-saag', n: 'Pollo saagwala (pollo con espinacas)', e: '🥬', tipo: 'comida', tags: ['carne', 'ligera'],
    ing: [['pollo_muslos', 700], ['espinacas_congeladas', 500], ['cebolla', 200], ['tomate', 200], ['yogur', 1], ['ajo', 3], ['jengibre', 15], ['garam_masala', 6], ['comino', 3], ['curcuma', 2], ['arroz_basmati', 250], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [45, ['Dora el pollo en trozos y resérvalo.', 'Sofríe cebolla, ajo y jengibre 7 min, añade especias y el tomate picado 4 min.', 'Agrega las espinacas descongeladas, el pollo y 100 ml de agua y cuece tapado 20 min.', 'Retira del fuego, añade el yogur y sirve con arroz basmati.']],
      robot: [40, ['Pica cebolla, ajo, jengibre y tomate 5 seg/vel. 5 y sofríe con aceite y especias 7 min/120 °C/vel. 1.', 'Añade espinacas, pollo y sal: 22 min/100 °C/giro inverso/vel. cuchara.', 'Añade el yogur, mezcla y sirve con arroz.']]
    }
  },
  {
    id: 'in-dhansak', n: 'Dhansak de cordero con lentejas y calabaza', e: '🍲', tipo: 'comida', tags: ['carne', 'legumbres'],
    ing: [['cordero', 600], ['lentejas_rojas', 200], ['calabaza', 300], ['berenjena', 200], ['tomate', 250], ['cebolla', 200], ['ajo', 3], ['jengibre', 15], ['curry', 10], ['garam_masala', 5], ['pasta_tamarindo', 15], ['arroz_basmati', 250], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [90, ['Dora el cordero en trozos y resérvalo.', 'Sofríe cebolla, ajo y jengibre 8 min y añade el curry.', 'Agrega el cordero, las lentejas, la calabaza, la berenjena y el tomate en dados y 1 l de agua. Cuece tapado 60 min.', 'Chafa un poco las verduras para espesar, añade el tamarindo y el garam masala y cuece 5 min. Sirve con arroz.']],
      robot: [75, ['Pica cebolla, ajo y jengibre 4 seg/vel. 5 y sofríe con aceite y curry 6 min/120 °C/vel. 1.', 'Añade cordero, lentejas, verduras, tamarindo, 800 ml de agua y sal: 60 min/100 °C/giro inverso/vel. cuchara.', 'Añade el garam masala y sirve con arroz basmati.']]
    }
  },
  {
    id: 'in-mulligatawny', n: 'Sopa mulligatawny', e: '🥣', tipo: 'cena', tags: ['carne', 'ligera'],
    ing: [['pollo_pechuga', 300], ['lentejas_rojas', 120], ['zanahoria', 150], ['manzana', 150], ['cebolla', 150], ['apio', 100], ['caldo_pollo', 1200], ['leche_coco', 150], ['curry', 10], ['ajo', 2], ['jengibre', 10], ['arroz_basmati', 80], ['aceite', 20], ['sal', 4]],
    m: {
      fuego: [40, ['Sofríe cebolla, zanahoria, apio, ajo y jengibre picados 8 min. Añade el curry.', 'Agrega la manzana pelada en dados, las lentejas y el caldo y cuece 20 min. Tritura.', 'Añade el pollo en dados pequeños y el arroz y cuece 12 min.', 'Termina con la leche de coco y ajusta la sal.']],
      robot: [38, ['Trocea cebolla, zanahoria, apio, manzana, ajo y jengibre 5 seg/vel. 5 y sofríe con aceite y curry 6 min/120 °C/vel. 1.', 'Añade lentejas y caldo: 20 min/100 °C/vel. 1. Tritura 30 seg/vel. 8.', 'Añade pollo, arroz y leche de coco: 12 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'in-rasam', n: 'Rasam (sopa de tomate y tamarindo)', e: '🍅', tipo: 'cena', tags: ['legumbres', 'vegetariano', 'ligera', 'rapida'],
    ing: [['tomate', 600], ['lentejas_rojas', 80], ['pasta_tamarindo', 20], ['ajo', 4], ['comino', 4], ['pimienta', 2], ['curcuma', 2], ['semillas_mostaza', 4], ['guindilla', 1], ['cilantro', 1], ['arroz_basmati', 200], ['aceite', 20], ['sal', 6]],
    m: {
      fuego: [30, ['Cuece las lentejas con la cúrcuma en 400 ml de agua 15 min y chafa.', 'Cuece el tomate troceado con 800 ml de agua, el tamarindo, el ajo machacado, el comino y la pimienta 10 min.', 'Junta ambas preparaciones y cuece 3 min.', 'Sofríe la mostaza y la guindilla en el aceite, vierte sobre la sopa y sirve con cilantro y arroz aparte.']],
      robot: [28, ['Pon tomate, ajo, comino y pimienta 5 seg/vel. 5.', 'Añade lentejas, cúrcuma, tamarindo, 1,1 l de agua y sal: 20 min/100 °C/vel. 1.', 'Sofríe mostaza y guindilla en aceite aparte, añade a la sopa y sirve con cilantro.']]
    }
  },
  {
    id: 'in-aloo-tikki', n: 'Aloo tikki (tortitas de patata) con chana', e: '🥔', tipo: 'cena', tags: ['vegetariano', 'legumbres', 'niños'],
    ing: [['patata', 800], ['guisantes', 100], ['pan_rallado', 60], ['garbanzos', 400], ['yogur', 2], ['cebolla_morada', 100], ['jengibre', 10], ['comino', 3], ['garam_masala', 4], ['hierbabuena', 1], ['aceite', 40], ['sal', 6]],
    m: {
      fuego: [45, ['Cuece las patatas con piel 20 min, pélalas y cháfalas con los guisantes cocidos, jengibre, comino, garam masala, sal y la mitad del pan rallado.', 'Forma 12 tortitas y rebózalas en el resto del pan rallado.', 'Dóralas en una sartén con aceite 3 min por cada lado.', 'Sirve con los garbanzos templados, la cebolla morada picada y yogur con hierbabuena.']],
      airfryer: [40, ['Prepara la masa de patata y forma las tortitas.', 'Píntalas con aceite y cocínalas 14 min a 200 °C, girándolas a mitad.', 'Sirve con garbanzos, cebolla morada y yogur con hierbabuena.']],
      horno: [45, ['Prepara las tortitas.', 'Hornéalas en bandeja con papel, pintadas de aceite, 20 min a 210 °C, girándolas a mitad.', 'Sirve con los garbanzos y la salsa de yogur.']]
    }
  },
  {
    id: 'in-pakoras-verduras', n: 'Pakoras de verduras con ensalada', e: '🧅', tipo: 'cena', tags: ['vegetariano'],
    ing: [['harina_garbanzo', 200], ['cebolla', 250], ['patata', 200], ['espinacas', 100], ['coliflor', 200], ['comino', 3], ['curcuma', 2], ['pimenton', 3], ['yogur', 2], ['lechuga', 1], ['tomate', 300], ['aceite_girasol', 500], ['sal', 6]],
    m: {
      fuego: [35, ['Corta la cebolla en juliana, ralla la patata, pica las espinacas y separa la coliflor en ramitos pequeños.', 'Mezcla la harina de garbanzo con las especias, sal y unos 150 ml de agua hasta tener una masa espesa. Añade las verduras.', 'Fríe cucharadas de masa en aceite caliente 4 min, hasta que estén doradas. Escurre.', 'Sirve con ensalada de lechuga y tomate y yogur con sal.']],
      airfryer: [35, ['Prepara la masa con las verduras.', 'Coloca montoncitos sobre papel perforado, rocía con aceite y cocina 14 min a 200 °C, girando a mitad.', 'Sirve con ensalada y yogur.']]
    }
  },
  {
    id: 'in-samosas-horno', n: 'Samosas de patata y guisantes al horno', e: '🥟', tipo: 'cena', tags: ['vegetariano', 'niños'],
    ing: [['masa_filo', 1], ['patata', 600], ['guisantes', 150], ['cebolla', 100], ['jengibre', 10], ['comino', 3], ['garam_masala', 5], ['curcuma', 2], ['yogur', 2], ['hierbabuena', 1], ['lechuga', 1], ['mantequilla', 50], ['sal', 5]],
    m: {
      horno: [50, ['Cuece la patata en dados 12 min. Sofríe cebolla y jengibre con las especias y mezcla con la patata y los guisantes, chafando un poco.', 'Corta la masa filo en tiras, píntalas con mantequilla fundida, pon relleno en un extremo y dobla en triángulos.', 'Pinta por fuera y hornea 18 min a 200 °C.', 'Sirve con yogur con hierbabuena y una ensalada.']],
      airfryer: [45, ['Prepara el relleno y forma los triángulos.', 'Píntalos con mantequilla y cocínalos 10 min a 180 °C en tandas.', 'Sirve con la salsa de yogur y ensalada.']]
    }
  },
  {
    id: 'in-kathi-roll', n: 'Kathi roll de pollo', e: '🌯', tipo: 'cena', tags: ['carne', 'rapida', 'niños'],
    ing: [['pollo_pechuga', 500], ['tortillas', 8], ['huevo', 4], ['cebolla_morada', 150], ['pimiento_verde', 120], ['yogur', 2], ['limon', 1], ['garam_masala', 5], ['pimenton', 3], ['hierbabuena', 1], ['aceite', 20], ['sal', 4]],
    m: {
      fuego: [28, ['Marina el pollo en tiras con 1 yogur, garam masala, pimentón, limón y sal 10 min.', 'Saltéalo con el pimiento en tiras 7 min a fuego fuerte.', 'Bate los huevos; vierte un poco en la sartén, pon una tortilla encima y dale la vuelta cuando cuaje.', 'Rellena con el pollo, cebolla morada y yogur con hierbabuena y enrolla.']]
    }
  },
  {
    id: 'in-biryani-verduras', n: 'Biryani de verduras', e: '🍚', tipo: 'comida', tags: ['vegetariano'],
    ing: [['arroz_basmati', 320], ['coliflor', 300], ['zanahoria', 150], ['judias_verdes', 150], ['guisantes', 100], ['cebolla', 250], ['yogur', 2], ['anacardos', 40], ['pasas', 30], ['ajo', 2], ['jengibre', 10], ['garam_masala', 8], ['curcuma', 2], ['caldo_verduras', 600], ['aceite', 35], ['sal', 6]],
    m: {
      fuego: [50, ['Dora la cebolla en juliana hasta que esté tostada; retira la mitad con los anacardos y las pasas.', 'Añade ajo, jengibre, especias y las verduras en trozos y saltea 5 min. Agrega el yogur 2 min.', 'Incorpora el arroz lavado y el caldo caliente con sal. Cuece tapado a fuego bajo 15 min.', 'Reposa 5 min y sirve con la cebolla, los anacardos y las pasas por encima.']],
      horno: [55, ['Sofríe la cebolla, las verduras y las especias con el yogur en una cazuela apta para horno.', 'Añade el arroz lavado y el caldo hirviendo, tapa bien y hornea 25 min a 180 °C.', 'Reposa 5 min y sirve con cebolla tostada, anacardos y pasas.']],
      robot: [40, ['Sofríe la cebolla con aceite 10 min/120 °C/vel. 1 y reserva la mitad.', 'Añade ajo, jengibre, especias, verduras y yogur: 5 min/120 °C/giro inverso/vel. cuchara.', 'Añade arroz y caldo: 14 min/100 °C/giro inverso/vel. cuchara. Reposa y sirve con la cebolla y frutos secos.']]
    }
  },
  {
    id: 'in-pescado-amritsari', n: 'Pescado rebozado amritsari', e: '🐟', tipo: 'cena', tags: ['pescado', 'niños'],
    ing: [['pescado_blanco', 700], ['harina_garbanzo', 120], ['limon', 2], ['ajo', 2], ['jengibre', 10], ['pimenton', 4], ['garam_masala', 3], ['comino', 2], ['yogur', 2], ['cebolla_morada', 100], ['tomate', 300], ['aceite_girasol', 400], ['sal', 5]],
    m: {
      fuego: [30, ['Corta el pescado en trozos y aliña con zumo de 1 limón, ajo y jengibre rallados y sal 10 min.', 'Mezcla la harina de garbanzo con las especias y agua fría hasta tener una masa como de rebozado espeso.', 'Pasa el pescado por la masa y fríelo en aceite caliente 4 min. Escurre.', 'Sirve con ensalada de tomate y cebolla morada, yogur y limón.']],
      airfryer: [28, ['Aliña el pescado y cúbrelo con una masa más espesa de harina de garbanzo y especias.', 'Rocíalo con aceite y cocínalo 12 min a 200 °C.', 'Sirve con ensalada y yogur.']]
    }
  },
  {
    id: 'in-chettinad-pollo', n: 'Pollo chettinad con coco', e: '🌶️', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_muslos', 800], ['coco_rallado', 50], ['cebolla', 250], ['tomate', 250], ['ajo', 4], ['jengibre', 15], ['pimienta', 4], ['cilantro_molido', 5], ['comino', 3], ['canela', 1], ['curcuma', 2], ['guindilla', 2], ['arroz_basmati', 250], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [55, ['Tuesta en una sartén seca el coco con la pimienta, el comino, el cilantro, la canela y las guindillas 3 min y tritúralo con un poco de agua.', 'Sofríe la cebolla picada 8 min, añade ajo, jengibre y cúrcuma y luego el tomate picado 5 min.', 'Añade el pollo troceado, la pasta de coco y especias y 250 ml de agua.', 'Cuece tapado 30 min hasta que la salsa espese. Sirve con arroz.']],
      robot: [50, ['Tritura el coco con las especias tostadas 20 seg/vel. 9.', 'Añade cebolla, ajo, jengibre y tomate, pica 5 seg/vel. 5 y sofríe con aceite 8 min/120 °C/vel. 1.', 'Añade el pollo, 200 ml de agua y sal: 30 min/100 °C/giro inverso/vel. cuchara. Sirve con arroz.']]
    }
  },
  {
    id: 'in-kadai-champinones', n: 'Kadai de champiñones y pimientos', e: '🍄', tipo: 'cena', tags: ['vegetariano', 'rapida', 'ligera'],
    ing: [['champinon', 500], ['pimiento_verde', 200], ['pimiento_rojo', 150], ['cebolla', 200], ['tomate', 300], ['ajo', 3], ['jengibre', 10], ['cilantro_molido', 4], ['comino', 3], ['garam_masala', 4], ['guindilla', 1], ['pan_naan', 4], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [28, ['Saltea los champiñones a fuego fuerte 5 min y resérvalos.', 'Sofríe la cebolla en gajos y los pimientos en cuadrados 5 min.', 'Añade ajo, jengibre, las especias y el tomate picado y cocina 6 min.', 'Incorpora los champiñones, cuece 3 min y sirve con pan naan.']]
    }
  },
  {
    id: 'in-pav-bhaji', n: 'Pav bhaji (curry de verduras con pan)', e: '🍞', tipo: 'cena', tags: ['vegetariano', 'niños'],
    ing: [['patata', 500], ['coliflor', 250], ['guisantes', 150], ['pimiento_verde', 150], ['tomate', 400], ['cebolla', 200], ['mantequilla', 60], ['ajo', 3], ['garam_masala', 8], ['pimenton', 5], ['limon', 1], ['pan_hamburguesa', 8], ['sal', 6]],
    m: {
      fuego: [40, ['Cuece la patata, la coliflor y los guisantes 15 min y cháfalos.', 'Funde la mitad de la mantequilla y sofríe la mitad de la cebolla picada, el ajo y el pimiento 6 min. Añade el tomate picado y las especias y cuece 6 min.', 'Añade las verduras chafadas y 150 ml de agua y cuece 8 min, aplastando y removiendo.', 'Tuesta los panes con el resto de mantequilla y sirve con el bhaji, cebolla picada y limón.']],
      robot: [38, ['Pica cebolla, ajo, pimiento y tomate 5 seg/vel. 5 y sofríe con la mantequilla y las especias 8 min/120 °C/vel. 1.', 'Añade patata y coliflor troceadas, guisantes, 200 ml de agua y sal: 20 min/100 °C/vel. 1.', 'Machaca 10 seg/vel. 4 y sirve con los panes tostados.']]
    }
  },
  {
    id: 'in-thoran-repollo', n: 'Thoran de repollo con coco', e: '🥬', tipo: 'cena', tags: ['vegetariano', 'rapida', 'ligera'],
    ing: [['repollo', 700], ['zanahoria', 200], ['coco_rallado', 60], ['cebolla', 100], ['ajo', 2], ['guindilla_fresca', 10], ['semillas_mostaza', 5], ['curcuma', 2], ['huevo', 4], ['arroz_basmati', 200], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [25, ['Corta el repollo en juliana muy fina y ralla la zanahoria.', 'Calienta el aceite con la mostaza hasta que salten; añade la cebolla, el ajo y la guindilla 3 min.', 'Añade las verduras, la cúrcuma y sal y saltea tapado 8 min.', 'Agrega el coco, saltea 2 min y sirve con arroz y un huevo frito o duro por persona.']]
    }
  },
  {
    id: 'in-poriyal-judias', n: 'Poriyal de judías verdes con lentejas', e: '🫛', tipo: 'cena', tags: ['vegetariano', 'legumbres', 'ligera'],
    ing: [['judias_verdes', 600], ['coco_rallado', 50], ['lentejas_rojas', 200], ['cebolla', 150], ['tomate', 200], ['semillas_mostaza', 5], ['curcuma', 3], ['comino', 3], ['guindilla', 1], ['ajo', 2], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [30, ['Cuece las lentejas con la cúrcuma, el tomate picado y 700 ml de agua 15 min, hasta tener un dal suave.', 'Corta las judías en trocitos. Calienta el aceite con la mostaza, el comino y la guindilla; añade la cebolla y el ajo 4 min.', 'Agrega las judías con sal y 50 ml de agua y cocina tapado 8 min.', 'Añade el coco, saltea 2 min y sirve junto al dal.']],
      robot: [30, ['Pon lentejas, tomate, cúrcuma, 600 ml de agua y sal: 15 min/100 °C/vel. 1. Reserva.', 'Sofríe cebolla y ajo con aceite y especias 4 min/120 °C/vel. 1.', 'Añade judías y 50 ml de agua: 10 min/100 °C/giro inverso/vel. cuchara. Termina con coco y sirve con el dal.']]
    }
  },
  {
    id: 'in-curry-calabaza', n: 'Curry de calabaza y garbanzos', e: '🎃', tipo: 'comida', tags: ['vegetariano', 'legumbres', 'niños'],
    ing: [['calabaza', 800], ['garbanzos', 400], ['leche_coco', 250], ['cebolla', 150], ['tomate_triturado', 200], ['ajo', 2], ['jengibre', 10], ['curry', 10], ['comino', 2], ['espinacas', 100], ['arroz_basmati', 250], ['aceite', 25], ['sal', 5]],
    m: {
      fuego: [35, ['Sofríe cebolla, ajo y jengibre 6 min, añade curry y comino.', 'Agrega la calabaza en dados y el tomate y rehoga 3 min.', 'Vierte la leche de coco y 150 ml de agua y cuece 15 min. Añade garbanzos y espinacas 4 min.', 'Sirve con arroz basmati.']],
      robot: [32, ['Pica cebolla, ajo y jengibre 4 seg/vel. 5 y sofríe con aceite y especias 5 min/120 °C/vel. 1.', 'Añade calabaza, tomate, leche de coco, 100 ml de agua y sal: 18 min/100 °C/giro inverso/vel. cuchara.', 'Añade garbanzos y espinacas: 4 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'in-curry-boniato', n: 'Curry de boniato y lentejas rojas', e: '🍠', tipo: 'comida', tags: ['vegetariano', 'legumbres'],
    ing: [['boniato', 700], ['lentejas_rojas', 200], ['leche_coco', 400], ['tomate_triturado', 200], ['cebolla', 150], ['ajo', 3], ['jengibre', 15], ['garam_masala', 6], ['curcuma', 2], ['espinacas', 150], ['limon', 1], ['aceite', 25], ['sal', 6]],
    m: {
      fuego: [40, ['Sofríe cebolla, ajo y jengibre 6 min y añade las especias.', 'Añade el boniato en dados, las lentejas, el tomate, la leche de coco y 500 ml de agua.', 'Cuece 25 min a fuego suave, removiendo.', 'Añade las espinacas y el zumo de limón y sirve.']],
      robot: [35, ['Pica cebolla, ajo y jengibre 4 seg/vel. 5 y sofríe con aceite y especias 5 min/120 °C/vel. 1.', 'Añade boniato, lentejas, tomate, leche de coco, 400 ml de agua y sal: 25 min/100 °C/giro inverso/vel. cuchara.', 'Añade espinacas y limón: 2 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'in-tortilla-masala', n: 'Tortilla masala', e: '🍳', tipo: 'cena', tags: ['vegetariano', 'rapida', 'ligera'],
    ing: [['huevo', 8], ['cebolla', 100], ['tomate', 150], ['pimiento_verde', 80], ['guindilla_fresca', 5], ['cilantro', 1], ['curcuma', 1], ['comino', 1], ['lechuga', 1], ['pepino', 200], ['aceite', 20], ['sal', 4]],
    m: {
      fuego: [15, ['Pica fino la cebolla, el tomate sin semillas, el pimiento, la guindilla y el cilantro.', 'Bate los huevos con las verduras, la cúrcuma, el comino y la sal.', 'Cuaja dos tortillas finas en una sartén con aceite, 2 min por lado.', 'Sirve con ensalada de lechuga y pepino.']]
    }
  },
  {
    id: 'in-kofta-cordero', n: 'Kofta de cordero en salsa', e: '🧆', tipo: 'comida', tags: ['carne'],
    ing: [['cordero_picado', 600], ['cebolla', 250], ['tomate_triturado', 400], ['yogur', 1], ['ajo', 3], ['jengibre', 15], ['garam_masala', 8], ['comino', 3], ['cilantro', 1], ['pan_rallado', 30], ['arroz_basmati', 250], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [45, ['Mezcla el cordero con 50 g de cebolla rallada, la mitad del garam masala, cilantro picado, pan rallado y sal. Forma albóndigas.', 'Dóralas en el aceite y resérvalas.', 'Sofríe el resto de cebolla, ajo y jengibre 8 min, añade comino, garam masala y tomate y cuece 8 min. Añade el yogur.', 'Incorpora las koftas con 100 ml de agua y cuece 12 min tapado. Sirve con arroz.']],
      horno: [45, ['Forma las albóndigas y hornéalas 15 min a 200 °C.', 'Prepara la salsa en el fuego.', 'Junta las koftas con la salsa en una fuente y hornea 10 min más. Sirve con arroz.']],
      airfryer: [40, ['Forma las albóndigas y cocínalas 12 min a 190 °C.', 'Prepara la salsa en el fuego e incorpora las koftas 5 min.', 'Sirve con arroz basmati.']]
    }
  },
  {
    id: 'in-machher-jhol', n: 'Machher jhol (pescado con patata al estilo bengalí)', e: '🐟', tipo: 'comida', tags: ['pescado', 'ligera'],
    ing: [['merluza', 700], ['patata', 400], ['tomate', 250], ['cebolla', 150], ['ajo', 2], ['jengibre', 15], ['semillas_mostaza', 5], ['curcuma', 4], ['comino', 3], ['cilantro', 1], ['arroz_basmati', 250], ['aceite', 35], ['sal', 6]],
    m: {
      fuego: [40, ['Frota la merluza en trozos con la mitad de la cúrcuma y sal y dórala ligeramente 2 min por lado. Resérvala.', 'En el mismo aceite, saltea la mostaza y la patata en gajos 5 min.', 'Añade cebolla, ajo, jengibre, comino, el resto de cúrcuma y el tomate y sofríe 4 min. Cubre con 500 ml de agua y cuece 15 min.', 'Añade el pescado y cuece 5 min. Sirve con cilantro y arroz.']]
    }
  },
  {
    id: 'in-chana-chaat', n: 'Chana chaat (ensalada de garbanzos)', e: '🥗', tipo: 'cena', tags: ['legumbres', 'vegetariano', 'ligera', 'rapida'],
    ing: [['garbanzos', 800], ['tomate', 300], ['pepino', 250], ['cebolla_morada', 120], ['patata', 300], ['yogur', 2], ['limon', 2], ['pasta_tamarindo', 15], ['comino', 3], ['hierbabuena', 1], ['cilantro', 1], ['sal', 5]],
    m: {
      sin: [15, ['Usa patatas ya cocidas o cuécelas antes. Escurre y enjuaga los garbanzos.', 'Pica tomate, pepino, cebolla morada y patata en dados pequeños.', 'Mezcla con los garbanzos, el zumo de limón, el tamarindo diluido en una cucharada de agua, el comino y sal.', 'Sirve con yogur, hierbabuena y cilantro picados.']]
    }
  },
  {
    id: 'in-arroz-limon', n: 'Arroz al limón con cacahuetes y huevo', e: '🍋', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['arroz_basmati', 300], ['cacahuetes', 60], ['limon', 2], ['huevo', 4], ['guisantes', 150], ['semillas_mostaza', 5], ['curcuma', 3], ['guindilla_fresca', 10], ['jengibre', 10], ['cilantro', 1], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [28, ['Cuece el arroz y deja que se temple.', 'Calienta el aceite con la mostaza; cuando salte, añade los cacahuetes, la guindilla, el jengibre y la cúrcuma 1 min.', 'Añade los guisantes 3 min, el arroz, el zumo de limón y la sal y saltea 3 min.', 'Sirve con un huevo frito encima y cilantro.']]
    }
  },
  {
    id: 'in-dum-aloo', n: 'Dum aloo (patatas en salsa de yogur)', e: '🥔', tipo: 'comida', tags: ['vegetariano'],
    ing: [['patata', 900], ['yogur', 3], ['tomate_triturado', 250], ['cebolla', 200], ['anacardos', 30], ['ajo', 3], ['jengibre', 15], ['pimenton', 6], ['garam_masala', 6], ['comino', 3], ['arroz_basmati', 250], ['aceite', 35], ['sal', 6]],
    m: {
      fuego: [50, ['Cuece las patatas pequeñas (o en trozos grandes) 12 min, pélalas y pínchalas. Dóralas en el aceite y resérvalas.', 'Sofríe cebolla, ajo y jengibre 8 min, añade las especias y el tomate y cuece 6 min. Tritura con los anacardos.', 'Devuelve a la cazuela, añade el yogur batido poco a poco y 150 ml de agua.', 'Incorpora las patatas y cuece tapado a fuego muy suave 15 min. Sirve con arroz.']],
      airfryer: [45, ['Cuece las patatas 10 min y dóralas 12 min a 200 °C.', 'Prepara la salsa en el fuego y tritúrala con los anacardos y el yogur.', 'Cuece las patatas en la salsa 10 min y sirve con arroz.']]
    }
  },
  {
    id: 'in-aloo-baingan', n: 'Aloo baingan (patata y berenjena)', e: '🍆', tipo: 'comida', tags: ['vegetariano'],
    ing: [['berenjena', 600], ['patata', 500], ['tomate', 300], ['cebolla', 150], ['ajo', 3], ['jengibre', 10], ['comino', 3], ['curcuma', 2], ['cilantro_molido', 4], ['garam_masala', 4], ['pan_naan', 4], ['aceite', 40], ['sal', 6]],
    m: {
      fuego: [40, ['Sofríe el comino, la cebolla, el ajo y el jengibre 6 min. Añade la cúrcuma y el cilantro molido.', 'Agrega la patata y la berenjena en dados y saltea 5 min.', 'Añade el tomate picado, sal y 100 ml de agua. Cuece tapado 20 min, removiendo de vez en cuando.', 'Termina con garam masala y sirve con pan naan.']],
      horno: [45, ['Mezcla la berenjena y la patata en dados con aceite, todas las especias, ajo rallado y sal.', 'Hornea 30 min a 210 °C; añade el tomate picado y hornea 10 min más.', 'Sirve con pan naan.']],
      airfryer: [35, ['Aliña patata y berenjena con aceite, especias y sal.', 'Cocina 25 min a 190 °C, agitando cada 8 min.', 'Mezcla con un sofrito rápido de cebolla y tomate y sirve con naan.']]
    }
  },
  {
    id: 'in-do-pyaza', n: 'Pollo do pyaza (pollo con mucha cebolla)', e: '🧅', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_muslos', 800], ['cebolla', 500], ['tomate', 250], ['yogur', 1], ['ajo', 3], ['jengibre', 15], ['garam_masala', 6], ['comino', 3], ['curcuma', 2], ['pimenton', 3], ['arroz_basmati', 250], ['aceite', 35], ['sal', 6]],
    m: {
      fuego: [50, ['Corta la mitad de la cebolla en gajos gruesos y dóralos a fuego fuerte 5 min. Resérvalos.', 'Sofríe el resto de cebolla picada 10 min, hasta que se dore. Añade ajo, jengibre y especias.', 'Añade el pollo troceado y dóralo 5 min. Agrega el tomate picado, el yogur y 100 ml de agua y cuece tapado 25 min.', 'Incorpora la cebolla en gajos, cuece 5 min y sirve con arroz.']],
      robot: [45, ['Pica la mitad de la cebolla, el ajo y el jengibre 5 seg/vel. 5 y sofríe con aceite 10 min/120 °C/vel. 1.', 'Añade especias, pollo, tomate, yogur, 80 ml de agua y sal: 25 min/100 °C/giro inverso/vel. cuchara.', 'Mezcla con la cebolla en gajos salteada aparte y sirve con arroz.']]
    }
  },
  {
    id: 'in-aloo-gosht', n: 'Aloo gosht (cordero con patatas)', e: '🍲', tipo: 'comida', tags: ['carne'],
    ing: [['cordero', 700], ['patata', 600], ['cebolla', 250], ['tomate_triturado', 250], ['yogur', 1], ['ajo', 4], ['jengibre', 15], ['garam_masala', 8], ['comino', 3], ['curcuma', 2], ['laurel', 2], ['aceite', 35], ['sal', 6]],
    m: {
      fuego: [100, ['Sofríe el laurel y la cebolla picada 10 min. Añade ajo, jengibre y especias.', 'Añade el cordero y dóralo 8 min. Agrega el tomate y el yogur.', 'Cubre con 600 ml de agua y cuece tapado 50 min.', 'Añade las patatas en trozos grandes y cuece 25 min más.']],
      robot: [85, ['Pica cebolla, ajo y jengibre 5 seg/vel. 5 y sofríe con aceite 8 min/120 °C/vel. 1.', 'Añade especias, cordero, tomate, yogur, laurel, 500 ml de agua y sal: 50 min/100 °C/giro inverso/vel. cuchara.', 'Añade la patata: 25 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'in-gobi-manchurian', n: 'Gobi manchurian (coliflor crujiente en salsa)', e: '🥦', tipo: 'cena', tags: ['vegetariano', 'niños'],
    ing: [['coliflor', 800], ['maicena', 60], ['harina', 60], ['pimiento_verde', 150], ['cebolleta', 3], ['ajo', 4], ['jengibre', 15], ['salsa_soja', 40], ['ketchup', 60], ['vinagre', 15], ['pimenton_picante', 2], ['arroz_basmati', 250], ['aceite_girasol', 400], ['sal', 4]],
    m: {
      fuego: [35, ['Haz una masa con la maicena, la harina, el pimentón, sal y unos 120 ml de agua y reboza los ramitos de coliflor.', 'Fríelos en aceite caliente 5 min hasta que estén crujientes. Escurre.', 'Saltea ajo, jengibre, pimiento y cebolleta picados 3 min; añade soja, kétchup, vinagre y 60 ml de agua y deja que espese 1 min.', 'Mezcla con la coliflor justo antes de servir, con arroz.']],
      airfryer: [32, ['Reboza la coliflor con una masa más espesa, rocía con aceite y cocina 16 min a 200 °C, agitando a mitad.', 'Prepara la salsa en una sartén.', 'Mezcla y sirve con arroz.']],
      horno: [40, ['Reboza la coliflor y extiéndela en una bandeja con papel; rocía con aceite.', 'Hornea 25 min a 220 °C, girando a mitad.', 'Mezcla con la salsa salteada y sirve con arroz.']]
    }
  },
  {
    id: 'in-biryani-gambas', n: 'Biryani de gambas', e: '🦐', tipo: 'comida', tags: ['pescado'],
    ing: [['arroz_basmati', 320], ['gambas', 450], ['cebolla', 250], ['tomate', 200], ['yogur', 1], ['ajo', 3], ['jengibre', 15], ['garam_masala', 8], ['curcuma', 2], ['hierbabuena', 1], ['cilantro', 1], ['caldo_pescado', 600], ['aceite', 35], ['sal', 5]],
    m: {
      fuego: [45, ['Dora la cebolla en juliana hasta que esté tostada y retira la mitad.', 'Añade ajo, jengibre, especias y el tomate picado y cuece 5 min. Agrega el yogur y las gambas 2 min y retira las gambas.', 'Añade el arroz lavado y el caldo caliente con sal y cuece tapado a fuego bajo 13 min.', 'Coloca las gambas, la cebolla reservada y las hierbas por encima, tapa y reposa 5 min.']],
      robot: [38, ['Sofríe la cebolla con aceite 10 min/120 °C/vel. 1 y reserva la mitad.', 'Añade ajo, jengibre, especias, tomate y yogur: 5 min/120 °C/vel. 1.', 'Añade arroz y caldo: 13 min/100 °C/giro inverso/vel. cuchara. Añade las gambas, reposa 5 min tapado y sirve con hierbas y cebolla.']]
    }
  },
  {
    id: 'in-pollo-hariyali', n: 'Pollo hariyali (en salsa verde de hierbas)', e: '🌿', tipo: 'comida', tags: ['carne', 'ligera'],
    ing: [['pollo_pechuga', 650], ['cilantro', 2], ['hierbabuena', 1], ['espinacas', 100], ['yogur', 2], ['cebolla', 150], ['ajo', 3], ['jengibre', 15], ['guindilla_fresca', 10], ['limon', 1], ['garam_masala', 5], ['arroz_basmati', 250], ['aceite', 25], ['sal', 5]],
    m: {
      fuego: [35, ['Tritura cilantro, hierbabuena, espinacas, ajo, jengibre, guindilla, limón y yogur hasta tener una salsa verde.', 'Marina el pollo en dados con la mitad de la salsa 15 min.', 'Sofríe la cebolla picada 6 min, añade el pollo con su marinada y cocina 8 min.', 'Agrega el resto de la salsa y el garam masala, cuece 5 min a fuego suave y sirve con arroz.']],
      horno: [35, ['Marina el pollo con la salsa verde y ensártalo en brochetas.', 'Hornea 18 min a 220 °C.', 'Sirve con el resto de la salsa y arroz basmati.']],
      airfryer: [30, ['Marina el pollo con la salsa verde.', 'Cocínalo 12 min a 200 °C.', 'Sirve con el resto de la salsa y arroz.']]
    }
  },
  {
    id: 'in-malai-kofta', n: 'Malai kofta (albóndigas de patata en salsa cremosa)', e: '🧆', tipo: 'comida', tags: ['vegetariano'],
    ing: [['patata', 600], ['paneer', 200], ['maicena', 30], ['anacardos', 50], ['tomate_triturado', 400], ['cebolla', 150], ['nata', 120], ['ajo', 2], ['jengibre', 10], ['garam_masala', 7], ['pasas', 20], ['arroz_basmati', 250], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [55, ['Cuece las patatas, cháfalas con el paneer desmenuzado, la maicena, las pasas, la mitad del garam masala y sal. Forma 16 bolitas.', 'Dóralas en una sartén con aceite girándolas, 6 min.', 'Sofríe cebolla, ajo y jengibre 7 min, añade el tomate y el resto de especias 8 min y tritura con los anacardos y la nata.', 'Sirve las koftas cubiertas con la salsa caliente y arroz.']],
      airfryer: [50, ['Prepara las bolitas de patata y paneer, píntalas con aceite y cocínalas 12 min a 200 °C.', 'Prepara la salsa de tomate, anacardos y nata en el fuego.', 'Sirve las koftas con la salsa y arroz.']],
      horno: [55, ['Prepara las bolitas y hornéalas 18 min a 210 °C.', 'Prepara la salsa cremosa en el fuego.', 'Sirve las koftas con la salsa por encima.']]
    }
  },
  {
    id: 'in-calamares-kerala', n: 'Calamares masala de Kerala', e: '🦑', tipo: 'cena', tags: ['pescado', 'rapida'],
    ing: [['calamar', 700], ['cebolla', 250], ['tomate', 200], ['coco_rallado', 40], ['ajo', 4], ['jengibre', 15], ['semillas_mostaza', 4], ['pimienta', 3], ['curcuma', 2], ['pimenton_picante', 3], ['limon', 1], ['arroz_basmati', 250], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [28, ['Corta el calamar en anillas y aliña con cúrcuma, pimentón picante y sal.', 'Calienta el aceite con la mostaza; añade la cebolla en juliana, ajo y jengibre y dora 8 min.', 'Añade la pimienta, el tomate picado y el coco y cocina 4 min.', 'Agrega el calamar y saltea a fuego fuerte 4 min. Termina con limón y sirve con arroz.']]
    }
  },
  {
    id: 'in-mejillones-curry', n: 'Mejillones al curry de coco', e: '🦪', tipo: 'cena', tags: ['pescado', 'rapida', 'ligera'],
    ing: [['mejillones', 1500], ['leche_coco', 300], ['cebolla', 150], ['tomate', 200], ['ajo', 3], ['jengibre', 15], ['curry', 8], ['curcuma', 2], ['guindilla_fresca', 5], ['cilantro', 1], ['lima', 1], ['pan_naan', 4], ['aceite', 20]],
    m: {
      fuego: [25, ['Limpia los mejillones.', 'Sofríe cebolla, ajo, jengibre y guindilla picados 6 min; añade curry, cúrcuma y el tomate picado 3 min.', 'Vierte la leche de coco, lleva a hervor y añade los mejillones. Tapa y cuece 5 min hasta que se abran.', 'Termina con zumo de lima y cilantro y sirve con pan naan para mojar.']]
    }
  },
  {
    id: 'in-seekh-kebab', n: 'Seekh kebab de cordero con ensalada', e: '🍢', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['cordero_picado', 600], ['cebolla', 100], ['ajo', 3], ['jengibre', 15], ['cilantro', 1], ['garam_masala', 6], ['comino', 3], ['pimenton', 3], ['yogur', 2], ['hierbabuena', 1], ['tomate', 300], ['pepino', 250], ['pan_naan', 4], ['sal', 5]],
    m: {
      fuego: [28, ['Ralla la cebolla y escúrrela. Mézclala con el cordero, ajo y jengibre rallados, cilantro picado, especias y sal.', 'Forma 8 cilindros alargados alrededor de brochetas.', 'Hazlos en una plancha caliente 10 min, girándolos.', 'Sirve con ensalada de tomate y pepino, yogur con hierbabuena y naan.']],
      horno: [30, ['Prepara los kebabs.', 'Hornéalos sobre rejilla 15 min a 220 °C, girándolos a mitad.', 'Sirve con ensalada y salsa de yogur.']],
      airfryer: [25, ['Prepara los kebabs.', 'Cocínalos 12 min a 200 °C, girándolos a mitad.', 'Sirve con ensalada, yogur y naan.']]
    }
  },
  {
    id: 'in-champinones-matar', n: 'Champiñones con guisantes al curry (mushroom matar)', e: '🍄', tipo: 'comida', tags: ['vegetariano', 'rapida'],
    ing: [['champinon', 500], ['guisantes', 300], ['tomate_triturado', 350], ['cebolla', 150], ['nata', 80], ['ajo', 3], ['jengibre', 10], ['garam_masala', 6], ['curcuma', 2], ['comino', 2], ['arroz_basmati', 250], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [28, ['Sofríe comino, cebolla, ajo y jengibre picados 6 min y añade cúrcuma y garam masala.', 'Añade el tomate y cuece 6 min.', 'Agrega los champiñones y los guisantes y cuece 8 min.', 'Termina con la nata y sirve con arroz basmati.']],
      robot: [25, ['Pica cebolla, ajo y jengibre 4 seg/vel. 5 y sofríe con aceite y especias 5 min/120 °C/vel. 1.', 'Añade tomate, champiñones, guisantes y sal: 12 min/100 °C/giro inverso/vel. cuchara.', 'Añade la nata y sirve con arroz.']]
    }
  },
  {
    id: 'in-ensalada-pollo-tikka', n: 'Ensalada de pollo tikka', e: '🥗', tipo: 'cena', tags: ['carne', 'ligera', 'rapida'],
    ing: [['pollo_pechuga', 500], ['yogur', 3], ['limon', 1], ['garam_masala', 5], ['pimenton', 3], ['ajo', 1], ['lechuga', 1], ['tomate', 300], ['pepino', 250], ['cebolla_morada', 100], ['hierbabuena', 1], ['aceite', 20], ['sal', 4]],
    m: {
      fuego: [25, ['Marina el pollo en tiras con 1 yogur, garam masala, pimentón, ajo rallado y sal 10 min.', 'Hazlo en una sartén caliente con aceite 7 min.', 'Monta la ensalada con lechuga, tomate, pepino y cebolla morada y pon el pollo encima.', 'Aliña con el resto del yogur mezclado con limón, hierbabuena picada y sal.']],
      airfryer: [22, ['Marina el pollo y cocínalo 10 min a 200 °C.', 'Monta la ensalada y aliña con la salsa de yogur, limón y hierbabuena.']],
      horno: [25, ['Marina el pollo y hornéalo 15 min a 220 °C.', 'Sírvelo sobre la ensalada con la salsa de yogur.']]
    }
  }
]);
