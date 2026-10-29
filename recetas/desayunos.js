/* MC Food Diary · desayunos, meriendas y tentempiés (antes o después de entrenar).
   tipo: 'desayuno', 'merienda' o 'tentempie' (vale para desayuno y merienda). Recetas para 4 raciones.
   Cada receta lleva su propia cocina (co). Formato y normas: recetas/GUIA-RECETAS.md */

MC_ADD_ING({
  copos_avena: ['Copos de avena', 'despensa', 2.2, 'kg'],
  pan_integral: ['Pan integral de molde (rebanada)', 'panaderia', 0.12, 'ud'],
  yogur_proteico: ['Yogur alto en proteínas', 'lacteos', 0.6, 'ud'],
  crema_cacahuete: ['Crema de cacahuete', 'despensa', 8, 'kg'],
  frutos_rojos: ['Frutos rojos congelados', 'congelados', 7, 'kg'],
  fresas: ['Fresas', 'fruteria', 4, 'kg'],
  kiwi: ['Kiwi', 'fruteria', 3, 'kg'],
  semillas_chia: ['Semillas de chía', 'despensa', 10, 'kg'],
  tortitas_arroz: ['Tortitas de arroz', 'despensa', 0.08, 'ud'],
  pavo_fiambre: ['Fiambre de pechuga de pavo', 'charcuteria', 10, 'kg'],
  claras: ['Claras de huevo pasteurizadas', 'lacteos', 3.5, 'l'],
  cacao: ['Cacao puro en polvo', 'despensa', 10, 'kg']
});

Object.assign(window.MC_NUTRI, {
  copos_avena: [370, 13, 60, 7], pan_integral: [250, 10, 42, 3.5, 30], yogur_proteico: [65, 10, 4, 0.5, 120],
  crema_cacahuete: [600, 25, 15, 50], frutos_rojos: [45, 1, 9, 0.3], fresas: [33, 0.7, 8, 0.3], kiwi: [61, 1.1, 15, 0.5],
  semillas_chia: [490, 17, 42, 31], tortitas_arroz: [380, 8, 80, 3, 8], pavo_fiambre: [100, 19, 2, 1.5], claras: [48, 11, 0.7, 0.2],
  cacao: [350, 20, 30, 20]
});

MC_ADD('es', [
  /* ---------------- Desayunos ---------------- */
  {
    id: 'des-tostada-tomate-jamon', n: 'Tostadas integrales con tomate y jamón', e: '🍅', tipo: 'desayuno', tags: ['carne', 'rapida'],
    ing: [['pan_integral', 8], ['tomate', 300], ['jamon_lonchas', 120], ['aceite', 30], ['sal', 2]],
    m: {
      sin: [10, ['Tuesta el pan en la tostadora.', 'Ralla el tomate y sálalo.', 'Reparte el tomate sobre las tostadas, añade un hilo de aceite y las lonchas de jamón.']]
    }
  },
  {
    id: 'des-tostada-aguacate-huevo', n: 'Tostadas de aguacate con huevo', e: '🥑', tipo: 'desayuno', tags: ['vegetariano', 'rapida'],
    ing: [['pan_integral', 8], ['aguacate', 2], ['huevo', 4], ['limon', 1], ['tomate_cherry', 150], ['aceite', 10], ['sal', 2], ['pimienta', 1]],
    m: {
      fuego: [15, ['Tuesta el pan.', 'Machaca el aguacate con el zumo de medio limón, sal y pimienta.', 'Haz los huevos a la plancha o escalfados 3 min, con la yema jugosa.', 'Unta el aguacate en las tostadas, pon el huevo encima y acompaña con los cherrys partidos.']],
      airfryer: [15, ['Casca cada huevo en un molde pequeño apto, untado de aceite, y cocínalos 6–7 min a 180 °C.', 'Mientras, tuesta el pan y machaca el aguacate con limón, sal y pimienta.', 'Monta las tostadas con el aguacate y el huevo encima.']]
    }
  },
  {
    id: 'des-porridge-platano', n: 'Porridge de avena con plátano y canela', e: '🥣', tipo: 'desayuno', tags: ['vegetariano', 'rapida'],
    ing: [['copos_avena', 200], ['leche', 1000], ['platano', 240], ['canela', 2], ['miel', 20], ['nueces', 40]],
    m: {
      fuego: [12, ['Calienta la leche con la canela y añade los copos de avena.', 'Cuece 5–6 min a fuego suave sin dejar de remover, hasta que espese.', 'Sirve con rodajas de plátano, nueces troceadas y un hilo de miel.']],
      robot: [12, ['Pon la leche, la avena y la canela en el vaso: 8 min/90 °C/giro inverso/vel. cuchara.', 'Reparte en cuencos y termina con plátano, nueces y miel.']]
    }
  },
  {
    id: 'des-overnight-oats', co: 'us', n: 'Avena de la noche con yogur y frutos rojos', e: '🫙', tipo: 'desayuno', tags: ['vegetariano', 'rapida'],
    ing: [['copos_avena', 160], ['yogur_proteico', 4], ['leche', 400], ['frutos_rojos', 250], ['semillas_chia', 30], ['miel', 20]],
    m: {
      sin: [10, ['La noche anterior, mezcla en tarros la avena, el yogur, la leche, la chía y la miel.', 'Tápalos y déjalos en la nevera toda la noche.', 'Por la mañana, añade los frutos rojos por encima.']]
    }
  },
  {
    id: 'des-tortitas-avena', co: 'us', n: 'Tortitas de avena y plátano', e: '🥞', tipo: 'desayuno', tags: ['vegetariano', 'niños'],
    ing: [['copos_avena', 200], ['platano', 300], ['huevo', 4], ['leche', 200], ['levadura_quimica', 1], ['fresas', 250], ['miel', 20], ['aceite', 10]],
    m: {
      fuego: [25, ['Tritura la avena, el plátano, los huevos, la leche y la levadura hasta tener una masa lisa.', 'Calienta una sartén antiadherente con unas gotas de aceite.', 'Haz tortitas pequeñas de 2 en 2 min por lado.', 'Sirve con fresas y un hilo de miel.']]
    }
  },
  {
    id: 'des-revuelto-claras', n: 'Revuelto de claras con espinacas y tostada', e: '🍳', tipo: 'desayuno', tags: ['vegetariano', 'ligera', 'rapida'],
    ing: [['claras', 500], ['huevo', 2], ['espinacas', 200], ['tomate_cherry', 150], ['pan_integral', 4], ['aceite', 10], ['sal', 2], ['pimienta', 1]],
    m: {
      fuego: [12, ['Saltea las espinacas 1 min con unas gotas de aceite.', 'Añade las claras y los huevos batidos con sal y pimienta y remueve a fuego suave hasta que cuajen.', 'Sirve con una tostada integral y los cherrys.']]
    }
  },
  {
    id: 'des-tortilla-pavo', n: 'Tortilla francesa de pavo con tomate', e: '🍳', tipo: 'desayuno', tags: ['carne', 'rapida'],
    ing: [['huevo', 8], ['pavo_fiambre', 150], ['tomate', 300], ['pan_integral', 4], ['aceite', 15], ['sal', 2], ['oregano', 1]],
    m: {
      fuego: [12, ['Bate 2 huevos por persona con sal.', 'Cuaja cada tortilla en una sartén con unas gotas de aceite y rellénala con el pavo en tiras antes de doblarla.', 'Sirve con tomate en rodajas con orégano y una tostada integral.']]
    }
  },
  {
    id: 'des-bol-yogur-fruta', n: 'Bol de yogur griego con fruta y nueces', e: '🍓', tipo: 'desayuno', tags: ['vegetariano', 'rapida'],
    ing: [['yogur_griego', 4], ['fresas', 300], ['kiwi', 200], ['nueces', 60], ['copos_avena', 60], ['miel', 20]],
    m: {
      sin: [8, ['Reparte el yogur en cuencos.', 'Añade las fresas y el kiwi troceados.', 'Termina con la avena, las nueces troceadas y un hilo de miel.']]
    }
  },
  {
    id: 'des-tostada-batido-fresas', n: 'Tostadas con queso batido y fresas', e: '🍓', tipo: 'desayuno', tags: ['vegetariano', 'ligera', 'rapida'],
    ing: [['pan_integral', 8], ['queso_batido', 300], ['fresas', 300], ['miel', 20], ['canela', 1]],
    m: {
      sin: [8, ['Tuesta el pan.', 'Unta el queso batido y cubre con las fresas en láminas.', 'Termina con un hilo de miel y una pizca de canela.']]
    }
  },
  {
    id: 'des-smoothie-bowl', co: 'us', n: 'Smoothie bowl de frutos rojos', e: '🫐', tipo: 'desayuno', tags: ['vegetariano', 'rapida'],
    ing: [['frutos_rojos', 400], ['platano', 300], ['yogur_proteico', 4], ['copos_avena', 80], ['semillas_chia', 20], ['coco_rallado', 20]],
    m: {
      sin: [10, ['Tritura los frutos rojos congelados, el plátano y el yogur hasta tener una crema espesa.', 'Repártela en cuencos.', 'Decora con la avena, la chía y el coco.']],
      robot: [8, ['Tritura frutos rojos, plátano y yogur 40 seg/vel. 6, ayudando con la espátula.', 'Sirve en cuencos con avena, chía y coco por encima.']]
    }
  },
  {
    id: 'des-huevos-salmon', n: 'Huevos revueltos con salmón ahumado', e: '🍳', tipo: 'desayuno', tags: ['pescado', 'rapida'],
    ing: [['huevo', 8], ['salmon_ahumado', 150], ['pan_integral', 4], ['cebollino', 1], ['mantequilla', 15], ['pimienta', 1]],
    m: {
      fuego: [12, ['Funde la mantequilla a fuego suave y añade los huevos batidos.', 'Remueve despacio hasta que estén cremosos y apártalos del fuego.', 'Sirve con el salmón en tiras, cebollino picado, pimienta y una tostada integral.']]
    }
  },
  {
    id: 'des-pan-tomate-queso', n: 'Pan con tomate y queso fresco', e: '🍞', tipo: 'desayuno', tags: ['vegetariano', 'rapida'],
    ing: [['pan_barra', 1], ['tomate', 300], ['queso_fresco', 200], ['aceite', 40], ['sal', 2], ['oregano', 1]],
    m: {
      sin: [8, ['Corta el pan en rebanadas y tuéstalo.', 'Frota o unta el tomate rallado con sal y un hilo de aceite.', 'Pon encima el queso fresco en lonchas y una pizca de orégano.']]
    }
  },
  {
    id: 'des-muffins-huevo', n: 'Muffins de huevo y verduras', e: '🧁', tipo: 'tentempie', tags: ['vegetariano', 'ligera'],
    ing: [['huevo', 8], ['pimiento_rojo', 150], ['espinacas', 100], ['cebolla', 80], ['queso_rallado', 40], ['aceite', 10], ['sal', 3]],
    m: {
      horno: [25, ['Precalienta el horno a 180 °C y unta con aceite un molde de magdalenas de 12 huecos.', 'Reparte el pimiento, la cebolla y las espinacas picados.', 'Bate los huevos con la sal y viértelos encima. Cubre con el queso.', 'Hornea 18 min. Se conservan 3 días en la nevera.']],
      airfryer: [20, ['Reparte las verduras picadas en moldes de silicona.', 'Cubre con el huevo batido y el queso.', 'Cocina 12 min a 160 °C.']]
    }
  },
  {
    id: 'des-crepes-avena-ricotta', co: 'fr', n: 'Crepes de avena con requesón y miel', e: '🥞', tipo: 'desayuno', tags: ['vegetariano'],
    ing: [['copos_avena', 120], ['huevo', 3], ['leche', 300], ['ricotta', 200], ['miel', 30], ['fresas', 200], ['aceite', 10]],
    m: {
      fuego: [25, ['Tritura la avena con los huevos y la leche hasta tener una masa fina.', 'Haz crepes finas en una sartén caliente con unas gotas de aceite, 1 min por lado.', 'Rellénalas con el requesón y las fresas y termina con miel.']]
    }
  },
  {
    id: 'des-tostada-cacahuete', co: 'us', n: 'Tostadas de crema de cacahuete y plátano', e: '🥜', tipo: 'tentempie', tags: ['vegetariano', 'rapida', 'niños'],
    ing: [['pan_integral', 8], ['crema_cacahuete', 80], ['platano', 300], ['canela', 1]],
    m: {
      sin: [5, ['Tuesta el pan.', 'Unta una capa fina de crema de cacahuete.', 'Cubre con rodajas de plátano y una pizca de canela. Ideal antes de entrenar.']]
    }
  },
  {
    id: 'des-arepas-huevo', co: 'co', n: 'Arepas con huevo y aguacate', e: '🫓', tipo: 'desayuno', tags: ['vegetariano'],
    ing: [['harina_maiz', 250], ['huevo', 4], ['aguacate', 1], ['queso_fresco', 120], ['sal', 4], ['aceite', 15]],
    m: {
      fuego: [30, ['Mezcla la harina con 330 ml de agua templada y la sal y amasa 2 min. Deja reposar 5 min.', 'Forma 4 arepas y cocínalas en una sartén con unas gotas de aceite 6–7 min por lado.', 'Ábrelas y rellénalas con huevo revuelto, aguacate y queso fresco.']],
      airfryer: [30, ['Prepara la masa y forma las arepas.', 'Cocínalas 16 min a 190 °C, girándolas a mitad.', 'Rellénalas con huevo revuelto, aguacate y queso.']]
    }
  },
  {
    id: 'des-huevos-plato', n: 'Huevos al plato con tomate', e: '🍳', tipo: 'desayuno', tags: ['vegetariano'],
    ing: [['huevo', 8], ['tomate_triturado', 400], ['cebolla', 80], ['pimiento_verde', 80], ['pan_integral', 4], ['aceite', 20], ['sal', 3], ['comino', 1]],
    m: {
      fuego: [20, ['Sofríe la cebolla y el pimiento picados 6 min. Añade el tomate y el comino y cuece 6 min.', 'Haz huecos, casca los huevos y tapa 5 min a fuego suave hasta que cuajen las claras.', 'Sirve con pan integral tostado.']],
      horno: [25, ['Prepara la salsa de tomate en una sartén y repártela en cazuelitas.', 'Casca 2 huevos en cada una y hornea 10 min a 200 °C.']]
    }
  },
  {
    id: 'des-granola-yogur', n: 'Yogur con granola casera', e: '🥣', tipo: 'tentempie', tags: ['vegetariano'],
    ing: [['copos_avena', 200], ['almendras', 60], ['miel', 40], ['canela', 1], ['aceite', 15], ['yogur', 8], ['frutos_rojos', 200]],
    m: {
      horno: [30, ['Mezcla la avena, las almendras troceadas, la miel, la canela y el aceite.', 'Extiéndelo en una bandeja con papel y hornea 18 min a 160 °C, removiendo a mitad. Deja enfriar.', 'Sirve 2 yogures por persona con la granola y los frutos rojos. La granola dura 2 semanas en un bote cerrado.']],
      airfryer: [20, ['Mezcla la avena, las almendras, la miel, la canela y el aceite.', 'Cocina en un molde 10 min a 150 °C, removiendo cada 3 min.', 'Sirve con yogur y frutos rojos.']]
    }
  },
  {
    id: 'des-tosta-salmon', n: 'Tostas de salmón ahumado y queso batido', e: '🐟', tipo: 'desayuno', tags: ['pescado', 'rapida'],
    ing: [['pan_integral', 8], ['salmon_ahumado', 150], ['queso_batido', 200], ['limon', 1], ['eneldo', 1], ['pepino', 150]],
    m: {
      sin: [8, ['Mezcla el queso batido con un poco de zumo de limón y eneldo.', 'Úntalo en el pan tostado.', 'Cubre con el salmón y rodajas finas de pepino.']]
    }
  },
  {
    id: 'des-shakshuka', co: 'lb', n: 'Shakshuka de desayuno', e: '🍳', tipo: 'desayuno', tags: ['vegetariano'],
    ing: [['huevo', 8], ['tomate_triturado', 500], ['pimiento_rojo', 200], ['cebolla', 120], ['ajo', 2], ['comino', 2], ['pimenton', 3], ['pan_pita', 4], ['aceite', 25], ['sal', 3]],
    m: {
      fuego: [30, ['Sofríe la cebolla, el pimiento y el ajo 8 min. Añade el comino y el pimentón.', 'Incorpora el tomate y cuece 10 min hasta que espese.', 'Haz 8 huecos, casca los huevos, tapa y cocina 6 min.', 'Sirve con pan de pita.']]
    }
  },

  /* ---------------- Meriendas y tentempiés ---------------- */
  {
    id: 'mer-yogur-proteico', n: 'Yogur proteico con frutos rojos y almendras', e: '🫐', tipo: 'tentempie', tags: ['vegetariano', 'ligera', 'rapida'],
    ing: [['yogur_proteico', 4], ['frutos_rojos', 200], ['almendras', 40], ['miel', 10]],
    m: {
      sin: [3, ['Reparte el yogur en cuencos.', 'Añade los frutos rojos (descongelados o tal cual) y las almendras troceadas.', 'Un hilo de miel si lo quieres más dulce. Muy bueno después de entrenar.']]
    }
  },
  {
    id: 'mer-tortitas-pavo', n: 'Tortitas de arroz con pavo y queso fresco', e: '🍘', tipo: 'tentempie', tags: ['carne', 'ligera', 'rapida'],
    ing: [['tortitas_arroz', 12], ['pavo_fiambre', 160], ['queso_fresco', 160], ['tomate', 200]],
    m: {
      sin: [5, ['Pon sobre cada tortita una loncha de queso fresco y otra de pavo.', 'Termina con una rodaja de tomate.']]
    }
  },
  {
    id: 'mer-batido-platano-avena', n: 'Batido de plátano, avena y cacao', e: '🥤', tipo: 'tentempie', tags: ['vegetariano', 'rapida'],
    ing: [['leche', 1000], ['platano', 360], ['copos_avena', 80], ['cacao', 20], ['crema_cacahuete', 40]],
    m: {
      sin: [5, ['Pon todos los ingredientes en la batidora.', 'Tritura 1 min hasta que quede fino.', 'Sirve frío. Ideal 1 hora antes de entrenar o justo después.']],
      robot: [5, ['Tritura todos los ingredientes 1 min/vel. 10.', 'Sirve frío.']]
    }
  },
  {
    id: 'mer-hummus-crudites', co: 'lb', n: 'Hummus con bastones de verdura', e: '🥕', tipo: 'merienda', tags: ['legumbres', 'vegetariano', 'ligera', 'rapida'],
    ing: [['garbanzos', 400], ['tahini', 40], ['limon', 1], ['ajo', 1], ['comino', 1], ['zanahoria', 300], ['pepino', 250], ['aceite', 20], ['sal', 3]],
    m: {
      sin: [10, ['Tritura los garbanzos escurridos con el tahini, el zumo de limón, el ajo, el comino, la sal y 3 cucharadas de agua fría hasta que quede cremoso.', 'Sirve con un hilo de aceite.', 'Acompaña con bastones de zanahoria y pepino.']],
      robot: [10, ['Tritura garbanzos, tahini, limón, ajo, comino, sal y 40 ml de agua 1 min/vel. 7.', 'Sirve con aceite y los bastones de verdura.']]
    }
  },
  {
    id: 'mer-manzana-cacahuete', co: 'us', n: 'Manzana con crema de cacahuete', e: '🍎', tipo: 'tentempie', tags: ['vegetariano', 'rapida', 'niños'],
    ing: [['manzana', 600], ['crema_cacahuete', 80], ['canela', 1]],
    m: {
      sin: [3, ['Corta las manzanas en gajos.', 'Sírvelas con la crema de cacahuete para mojar y una pizca de canela.']]
    }
  },
  {
    id: 'mer-bocadillo-atun', n: 'Bocadillo integral de atún y tomate', e: '🥪', tipo: 'merienda', tags: ['pescado', 'rapida', 'niños'],
    ing: [['pan_integral', 8], ['atun', 3], ['tomate', 200], ['lechuga', 1], ['aceite', 10]],
    m: {
      sin: [5, ['Escurre el atún.', 'Monta los sándwiches con lechuga, tomate en rodajas y el atún.', 'Un hilo de aceite y listo.']]
    }
  },
  {
    id: 'mer-bolitas-datiles', n: 'Bolitas energéticas de dátiles y avena', e: '🟤', tipo: 'tentempie', tags: ['vegetariano'],
    ing: [['datiles', 200], ['copos_avena', 120], ['almendras', 60], ['cacao', 20], ['coco_rallado', 30]],
    m: {
      sin: [15, ['Tritura los dátiles sin hueso con la avena, las almendras y el cacao hasta formar una masa pegajosa.', 'Forma 16 bolitas y rebózalas en coco.', 'Guárdalas en la nevera hasta una semana. Buenas antes de entrenar.']],
      robot: [15, ['Tritura dátiles, avena, almendras y cacao 20 seg/vel. 8.', 'Forma las bolitas y rebózalas en coco.']]
    }
  },
  {
    id: 'mer-batido-kiwi-chia', n: 'Queso batido con kiwi y chía', e: '🥝', tipo: 'tentempie', tags: ['vegetariano', 'ligera', 'rapida'],
    ing: [['queso_batido', 500], ['kiwi', 300], ['semillas_chia', 20], ['miel', 15]],
    m: {
      sin: [5, ['Reparte el queso batido en cuencos.', 'Añade el kiwi pelado en dados y la chía.', 'Termina con un hilo de miel.']]
    }
  },
  {
    id: 'mer-edamame', co: 'jp', n: 'Edamame con sal y lima', e: '🫛', tipo: 'tentempie', tags: ['legumbres', 'vegetariano', 'ligera', 'rapida'],
    ing: [['edamame', 500], ['lima', 1], ['sal', 4]],
    m: {
      fuego: [8, ['Cuece el edamame congelado en agua con sal 5 min.', 'Escúrrelo y sálalo con sal gruesa.', 'Sirve con gajos de lima.']],
      airfryer: [12, ['Pon el edamame congelado con unas gotas de aceite y sal.', 'Cocina 10 min a 190 °C, agitando a mitad.', 'Sirve con lima.']]
    }
  },
  {
    id: 'mer-tosta-ricotta-pera', co: 'it', n: 'Tosta de requesón, pera y nueces', e: '🍐', tipo: 'merienda', tags: ['vegetariano', 'rapida'],
    ing: [['pan_integral', 4], ['ricotta', 200], ['pera', 300], ['nueces', 40], ['miel', 15]],
    m: {
      sin: [5, ['Tuesta el pan.', 'Unta el requesón y cubre con la pera en láminas finas.', 'Termina con nueces troceadas y un hilo de miel.']]
    }
  },
  {
    id: 'mer-huevos-duros', n: 'Huevos duros con tomates cherry', e: '🥚', tipo: 'tentempie', tags: ['vegetariano', 'ligera', 'rapida'],
    ing: [['huevo', 6], ['tomate_cherry', 300], ['sal', 2], ['oregano', 1]],
    m: {
      fuego: [15, ['Cuece los huevos 10 min, enfríalos y pélalos.', 'Pártelos por la mitad y sírvelos con sal, orégano y los cherrys.', 'Se pueden cocer varios de golpe y guardarlos 3 días en la nevera.']],
      airfryer: [18, ['Pon los huevos crudos en el cesto y cocina 15 min a 130 °C.', 'Pásalos a agua fría, pélalos y sirve con los cherrys.']]
    }
  },
  {
    id: 'mer-bizcocho-avena', n: 'Bizcocho de avena y plátano sin azúcar', e: '🍌', tipo: 'merienda', tags: ['vegetariano', 'niños'],
    ing: [['copos_avena', 200], ['platano', 360], ['huevo', 3], ['yogur', 1], ['levadura_quimica', 1], ['nueces', 40], ['canela', 2], ['aceite', 15]],
    m: {
      horno: [45, ['Precalienta el horno a 180 °C.', 'Tritura la avena hasta hacer harina. Mezcla con los plátanos chafados, los huevos, el yogur, la levadura y la canela.', 'Añade las nueces, vierte en un molde untado de aceite y hornea 30 min.', 'Deja enfriar antes de cortar. Salen unas 8 porciones (2 por persona).']],
      airfryer: [35, ['Prepara la masa como en la receta de horno.', 'Viértela en un molde apto y cocina 25 min a 160 °C. Pincha con un palillo: debe salir seco.']]
    }
  },
  {
    id: 'mer-pudding-chia', co: 'us', n: 'Pudding de chía con mango', e: '🥭', tipo: 'tentempie', tags: ['vegetariano'],
    ing: [['semillas_chia', 80], ['leche', 500], ['yogur_proteico', 2], ['mango', 1], ['miel', 20]],
    m: {
      sin: [10, ['Mezcla la chía con la leche, el yogur y la miel. Remueve otra vez a los 10 min para que no se apelmace.', 'Deja en la nevera al menos 3 horas o toda la noche.', 'Sirve con el mango en dados.']]
    }
  },
  {
    id: 'mer-wrap-pavo', n: 'Wrap de pavo, queso batido y espinacas', e: '🌯', tipo: 'merienda', tags: ['carne', 'rapida'],
    ing: [['tortillas', 4], ['pavo_fiambre', 200], ['queso_batido', 150], ['espinacas', 80], ['tomate', 150], ['mostaza', 15]],
    m: {
      sin: [8, ['Mezcla el queso batido con la mostaza y úntalo en las tortillas.', 'Cubre con espinacas, pavo y tomate en tiras.', 'Enrolla apretando y corta por la mitad.']]
    }
  },
  {
    id: 'mer-macedonia', n: 'Macedonia con yogur natural', e: '🍓', tipo: 'merienda', tags: ['vegetariano', 'ligera', 'rapida', 'niños'],
    ing: [['manzana', 300], ['naranja', 300], ['kiwi', 200], ['fresas', 200], ['yogur', 4], ['hierbabuena', 1]],
    m: {
      sin: [10, ['Pela y trocea toda la fruta en dados.', 'Mezcla con el zumo que suelta la naranja.', 'Sirve con un yogur natural por persona y unas hojas de hierbabuena.']]
    }
  },
  {
    id: 'mer-tortitas-aguacate', n: 'Tortitas de arroz con aguacate y huevo', e: '🥑', tipo: 'tentempie', tags: ['vegetariano', 'rapida'],
    ing: [['tortitas_arroz', 8], ['aguacate', 2], ['huevo', 4], ['limon', 1], ['sal', 2], ['pimenton', 1]],
    m: {
      fuego: [15, ['Cuece los huevos 10 min y córtalos en rodajas.', 'Machaca el aguacate con limón y sal.', 'Úntalo en las tortitas y cubre con el huevo y una pizca de pimentón.']]
    }
  },
  {
    id: 'mer-batido-verde', n: 'Batido verde de espinacas y manzana', e: '🥬', tipo: 'tentempie', tags: ['vegetariano', 'ligera', 'rapida'],
    ing: [['espinacas', 120], ['manzana', 300], ['platano', 240], ['yogur', 2], ['limon', 1], ['jengibre', 10]],
    m: {
      sin: [5, ['Pon todo en la batidora con 400 ml de agua fría (el limón, solo el zumo).', 'Tritura hasta que quede fino.', 'Sirve enseguida.']],
      robot: [5, ['Tritura todos los ingredientes con 400 ml de agua 1 min/vel. 10.']]
    }
  },
  {
    id: 'mer-garbanzos-tostados', n: 'Garbanzos crujientes especiados', e: '🫘', tipo: 'tentempie', tags: ['legumbres', 'vegetariano', 'ligera'],
    ing: [['garbanzos', 600], ['pimenton', 3], ['comino', 2], ['aceite', 15], ['sal', 3]],
    m: {
      horno: [40, ['Escurre, lava y seca muy bien los garbanzos.', 'Mézclalos con el aceite, las especias y la sal.', 'Hornea 35 min a 200 °C, removiendo cada 10 min, hasta que estén crujientes.']],
      airfryer: [25, ['Seca bien los garbanzos y aliña con aceite, especias y sal.', 'Cocina 18–20 min a 200 °C, agitando cada 5 min.']]
    }
  },
  {
    id: 'mer-sandwich-pollo', n: 'Sándwich integral de pollo y aguacate', e: '🥪', tipo: 'merienda', tags: ['carne'],
    ing: [['pan_integral', 8], ['pollo_pechuga', 300], ['aguacate', 1], ['lechuga', 1], ['tomate', 150], ['aceite', 10], ['sal', 2]],
    m: {
      fuego: [15, ['Haz la pechuga a la plancha con sal y córtala en tiras.', 'Machaca el aguacate y úntalo en el pan.', 'Monta los sándwiches con lechuga, tomate y el pollo. Perfecto después de entrenar.']],
      airfryer: [18, ['Cocina el pollo en tiras con unas gotas de aceite y sal 10 min a 200 °C.', 'Monta los sándwiches con aguacate, lechuga y tomate.']]
    }
  },
  {
    id: 'mer-muffins-avena-manzana', n: 'Muffins de avena y manzana', e: '🧁', tipo: 'tentempie', tags: ['vegetariano', 'niños'],
    ing: [['copos_avena', 200], ['manzana', 300], ['huevo', 2], ['leche', 150], ['miel', 40], ['levadura_quimica', 1], ['canela', 2], ['aceite', 30]],
    m: {
      horno: [35, ['Precalienta el horno a 180 °C.', 'Mezcla la avena, la levadura y la canela. Añade los huevos, la leche, la miel y el aceite.', 'Incorpora la manzana rallada y reparte en 12 moldes.', 'Hornea 22 min. Salen 12 (3 por persona).']],
      airfryer: [25, ['Prepara la masa y repártela en moldes de silicona.', 'Cocina 14 min a 160 °C por tandas.']]
    }
  },
  {
    id: 'mer-batido-cacao-requeson', n: 'Batido de cacao y requesón para después de entrenar', e: '🥤', tipo: 'tentempie', tags: ['vegetariano', 'rapida'],
    ing: [['leche', 800], ['ricotta', 250], ['cacao', 25], ['platano', 240], ['miel', 20]],
    m: {
      sin: [5, ['Pon todos los ingredientes en la batidora.', 'Tritura 1 min hasta que quede cremoso.', 'Tómalo en la hora siguiente al entrenamiento.']],
      robot: [5, ['Tritura todos los ingredientes 1 min/vel. 10.']]
    }
  },
  {
    id: 'mer-pan-aceite-jamon', n: 'Bocadillo de jamón con tomate', e: '🥖', tipo: 'merienda', tags: ['carne', 'rapida', 'niños'],
    ing: [['pan_barra', 1], ['jamon_lonchas', 120], ['tomate', 200], ['aceite', 20]],
    m: {
      sin: [5, ['Corta la barra en 4 trozos y ábrelos.', 'Unta el tomate rallado con un hilo de aceite.', 'Rellena con el jamón.']]
    }
  }
]);
