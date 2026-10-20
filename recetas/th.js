/* MC Food Diary · cocina de Tailandia 🇹🇭. Formato y normas: recetas/GUIA-RECETAS.md */

MC_ADD_ING({
  hierba_limon: ['Hierba limón (citronela)', 'fruteria', 0.8, 'ud', 0, 'ralladura de 1 lima por tallo'],
  guindilla_fresca: ['Guindilla fresca', 'fruteria', 10, 'kg'],
  arroz_jazmin: ['Arroz jazmín', 'despensa', 3, 'kg'],
  cerdo_picado: ['Carne picada de cerdo', 'carniceria', 6.5, 'kg'],
  pasta_tamarindo: ['Pasta de tamarindo', 'despensa', 15, 'kg', 0, 'zumo de lima con un poco de azúcar moreno'],
  anacardos: ['Anacardos', 'despensa', 16, 'kg'],
  coco_rallado: ['Coco rallado', 'despensa', 9, 'kg']
});

MC_ADD('th', [
  {
    id: 'pad-thai', n: 'Pad thai de gambas', e: '🍤', tipo: 'cena', tags: ['pescado'],
    ing: [['fideos_arroz', 250], ['gambas', 300], ['huevo', 2], ['cebolleta', 2], ['cacahuetes', 50], ['lima', 2], ['salsa_pescado', 40], ['salsa_soja', 20], ['azucar', 25], ['tomate_frito', 20], ['ajo', 2], ['aceite', 30]],
    m: {
      fuego: [25, ['Hidrata los fideos en agua caliente 8 min y escúrrelos.', 'Mezcla la salsa de pescado, la soja, el azúcar, el tomate y el zumo de 1 lima.', 'Saltea el ajo y las gambas 2 min, aparta y cuaja los huevos batidos.', 'Añade los fideos y la salsa y saltea 2 min. Sirve con cacahuetes, cebolleta y lima.']]
    }
  },
  {
    id: 'curry-verde', n: 'Curry verde de pollo', e: '🍛', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_pechuga', 550], ['leche_coco', 400], ['pasta_curry_verde', 1], ['calabacin', 200], ['pimiento_rojo', 120], ['salsa_pescado', 20], ['azucar', 10], ['albahaca', 1], ['arroz_basmati', 250], ['aceite', 20]],
    m: {
      fuego: [30, ['Cuece el arroz.', 'Sofríe 2 cucharadas de pasta de curry en el aceite 1 min. Añade la mitad de la leche de coco y remueve hasta que se integre.', 'Añade el pollo en tiras y cocina 5 min. Agrega las verduras, el resto de la leche de coco, la salsa de pescado y el azúcar.', 'Cuece 8 min y termina con albahaca. Sirve con arroz.']],
      robot: [30, ['Sofríe la pasta de curry con aceite 2 min/100 °C/vel. 1.', 'Añade leche de coco, pollo, verduras, salsa de pescado y azúcar: 15 min/100 °C/giro inverso/vel. cuchara.', 'Termina con albahaca y sirve con arroz.']]
    }
  },
  {
    id: 'pollo-anacardos', n: 'Pollo salteado con cacahuetes', e: '🥜', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['pollo_pechuga', 500], ['cacahuetes', 70], ['pimiento_rojo', 150], ['cebolla', 120], ['ajo', 2], ['salsa_soja', 40], ['salsa_pescado', 15], ['miel', 15], ['arroz_basmati', 250], ['aceite', 30]],
    m: {
      fuego: [25, ['Cuece el arroz.', 'Saltea el pollo en dados a fuego fuerte 5 min.', 'Añade cebolla, pimiento y ajo y saltea 3 min.', 'Agrega la soja, la salsa de pescado, la miel y los cacahuetes. Sirve con arroz.']]
    }
  },
  {
    id: 'tom-kha', n: 'Sopa thai de coco y pollo', e: '🥥', tipo: 'cena', tags: ['carne', 'ligera'],
    ing: [['pollo_pechuga', 350], ['leche_coco', 400], ['caldo_pollo', 600], ['champinon', 200], ['jengibre', 25], ['lima', 2], ['salsa_pescado', 30], ['cilantro', 1], ['azucar', 5]],
    m: {
      fuego: [25, ['Calienta el caldo con el jengibre en láminas 5 min.', 'Añade la leche de coco, el pollo en tiras finas y los champiñones. Cuece 10 min sin que hierva fuerte.', 'Termina con la salsa de pescado, el azúcar, el zumo de lima y cilantro.']],
      robot: [22, ['Pon caldo, jengibre, leche de coco, pollo y champiñones: 15 min/90 °C/giro inverso/vel. cuchara.', 'Añade salsa de pescado, azúcar y lima. Sirve con cilantro.']]
    }
  },
  {
    id: 'arroz-pina', n: 'Arroz frito thai con piña', e: '🍍', tipo: 'comida', tags: ['pescado', 'rapida'],
    ing: [['arroz_basmati', 300], ['pina', 1], ['gambas', 250], ['huevo', 2], ['guisantes', 100], ['cebolleta', 2], ['salsa_soja', 40], ['curry', 4], ['cacahuetes', 40], ['aceite', 30]],
    m: {
      fuego: [30, ['Cuece el arroz y deja que se enfríe (o usa arroz del día anterior).', 'Saltea las gambas y los guisantes 3 min. Aparta y cuaja los huevos batidos.', 'Añade el arroz, la piña en dados, el curry y la soja y saltea 3 min a fuego fuerte.', 'Sirve con cebolleta y cacahuetes.']]
    }
  },
  {
    id: 'th-curry-rojo-calabaza', n: 'Curry rojo de calabaza y tofu', e: '🎃', tipo: 'comida', tags: ['vegetariano'],
    ing: [['calabaza', 700], ['tofu', 400], ['leche_coco', 400], ['pasta_curry_rojo', 1], ['judias_verdes', 150], ['salsa_soja', 30], ['azucar_moreno', 10], ['lima', 1], ['albahaca', 1], ['arroz_jazmin', 250], ['aceite', 25]],
    m: {
      fuego: [35, ['Cuece el arroz. Corta el tofu en dados y dóralo en una sartén; resérvalo.', 'Sofríe 2 cucharadas de pasta de curry en el aceite 1 min y añade la leche de coco poco a poco.', 'Agrega la calabaza en dados, 150 ml de agua, la soja y el azúcar y cuece 12 min. Añade las judías troceadas 5 min.', 'Incorpora el tofu, el zumo de lima y la albahaca y sirve con arroz.']],
      robot: [32, ['Sofríe la pasta de curry con aceite 2 min/100 °C/vel. 1.', 'Añade leche de coco, calabaza, judías, 100 ml de agua, soja y azúcar: 18 min/100 °C/giro inverso/vel. cuchara.', 'Añade el tofu dorado y la albahaca y sirve con arroz.']]
    }
  },
  {
    id: 'th-massaman', n: 'Curry massaman de ternera', e: '🍛', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_guisar', 700], ['patata', 500], ['cebolla', 200], ['leche_coco', 400], ['pasta_curry_rojo', 1], ['cacahuetes', 60], ['canela', 1], ['laurel', 2], ['pasta_tamarindo', 20], ['salsa_pescado', 30], ['azucar_moreno', 20], ['arroz_jazmin', 250], ['aceite', 25]],
    m: {
      fuego: [110, ['Dora la ternera en dados en el aceite y resérvala.', 'Sofríe 2 cucharadas de pasta de curry con la canela 1 min, añade la leche de coco y la carne con el laurel y 300 ml de agua.', 'Cuece tapado a fuego suave 60 min. Añade la patata y la cebolla en trozos grandes y cuece 25 min más.', 'Añade tamarindo, salsa de pescado, azúcar y cacahuetes, cuece 5 min y sirve con arroz.']],
      robot: [95, ['Sofríe la pasta de curry y la canela con aceite 2 min/100 °C/vel. 1.', 'Añade ternera, leche de coco, laurel y 250 ml de agua: 60 min/100 °C/giro inverso/vel. cuchara.', 'Añade patata, cebolla, tamarindo, salsa de pescado, azúcar y cacahuetes: 25 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'th-curry-amarillo', n: 'Curry amarillo de pollo y patata', e: '🍛', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['pollo_muslos', 650], ['patata', 450], ['cebolla', 150], ['leche_coco', 400], ['curry', 12], ['curcuma', 3], ['ajo', 3], ['jengibre', 15], ['hierba_limon', 1], ['salsa_pescado', 30], ['azucar', 10], ['arroz_jazmin', 250], ['aceite', 25]],
    m: {
      fuego: [40, ['Sofríe la cebolla, el ajo, el jengibre y la hierba limón machacada 5 min. Añade el curry y la cúrcuma 1 min.', 'Agrega el pollo en trozos y dóralo 4 min.', 'Añade la patata en dados, la leche de coco y 200 ml de agua. Cuece tapado 20 min.', 'Sazona con salsa de pescado y azúcar, retira la hierba limón y sirve con arroz.']],
      robot: [38, ['Pica cebolla, ajo y jengibre 4 seg/vel. 5 y sofríe con aceite, curry y cúrcuma 5 min/120 °C/vel. 1.', 'Añade pollo, patata, hierba limón, leche de coco, 150 ml de agua, salsa de pescado y azúcar: 22 min/100 °C/giro inverso/vel. cuchara.', 'Retira la hierba limón y sirve con arroz.']]
    }
  },
  {
    id: 'th-panang-cerdo', n: 'Curry panang de cerdo', e: '🥥', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['cerdo_solomillo', 550], ['leche_coco', 300], ['pasta_curry_rojo', 1], ['cacahuetes', 40], ['pimiento_rojo', 150], ['salsa_pescado', 25], ['azucar_moreno', 15], ['lima', 1], ['albahaca', 1], ['arroz_jazmin', 250], ['aceite', 20]],
    m: {
      fuego: [28, ['Cuece el arroz. Tritura los cacahuetes hasta dejarlos casi en polvo.', 'Sofríe 2 cucharadas de pasta de curry en el aceite 1 min, añade la mitad de la leche de coco y deja que reduzca 3 min.', 'Añade el cerdo en láminas finas y el pimiento en tiras y cocina 5 min. Agrega el resto de leche de coco, los cacahuetes, la salsa de pescado y el azúcar.', 'Cuece 3 min hasta que espese y termina con lima y albahaca.']]
    }
  },
  {
    id: 'th-pad-kra-pao', n: 'Pad kra pao (cerdo picado con albahaca y huevo)', e: '🍳', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['cerdo_picado', 500], ['albahaca', 1], ['judias_verdes', 150], ['ajo', 5], ['guindilla_fresca', 10], ['salsa_ostras', 30], ['salsa_soja', 20], ['salsa_pescado', 15], ['azucar', 8], ['huevo', 4], ['arroz_jazmin', 250], ['aceite', 40]],
    m: {
      fuego: [20, ['Cuece el arroz. Machaca el ajo con la guindilla.', 'Saltea el ajo y la guindilla 30 seg en un poco de aceite, añade el cerdo y dóralo a fuego fuerte 5 min.', 'Añade las judías en trocitos 2 min, las salsas y el azúcar y saltea 1 min. Retira del fuego y añade las hojas de albahaca.', 'Fríe los huevos en el resto de aceite muy caliente para que queden crujientes y sirve sobre el arroz con el cerdo.']]
    }
  },
  {
    id: 'th-pad-see-ew', n: 'Pad see ew (fideos de arroz con pollo y brócoli)', e: '🍜', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['fideos_arroz', 300], ['pollo_pechuga', 400], ['brocoli', 350], ['huevo', 2], ['ajo', 3], ['salsa_soja', 50], ['salsa_ostras', 30], ['azucar_moreno', 10], ['vinagre', 10], ['aceite', 35]],
    m: {
      fuego: [25, ['Hidrata los fideos en agua caliente según el envase y escúrrelos.', 'Saltea el ajo y el pollo en tiras a fuego fuerte 4 min. Añade el brócoli en ramitos pequeños y 50 ml de agua y saltea 3 min.', 'Aparta todo, cuaja los huevos batidos y mezcla.', 'Añade los fideos, la soja, la salsa de ostras, el azúcar y el vinagre y saltea 2 min dejando que se tuesten un poco.']]
    }
  },
  {
    id: 'th-pad-kee-mao', n: 'Pad kee mao (fideos picantes con ternera)', e: '🌶️', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['fideos_arroz', 300], ['ternera_filetes', 400], ['pimiento_rojo', 150], ['cebolla', 120], ['tomate_cherry', 150], ['albahaca', 1], ['ajo', 4], ['guindilla_fresca', 15], ['salsa_soja', 40], ['salsa_ostras', 30], ['salsa_pescado', 15], ['azucar', 8], ['aceite', 35]],
    m: {
      fuego: [25, ['Hidrata los fideos y escúrrelos.', 'Saltea el ajo y la guindilla machacados 30 seg, añade la ternera en tiras finas y saltea 2 min a fuego fuerte.', 'Añade la cebolla, el pimiento y los tomates cherry partidos 3 min.', 'Incorpora los fideos, las salsas y el azúcar, saltea 2 min y termina con la albahaca.']]
    }
  },
  {
    id: 'th-khao-pad', n: 'Khao pad (arroz frito thai con pollo)', e: '🍚', tipo: 'cena', tags: ['carne', 'rapida', 'niños'],
    ing: [['arroz_jazmin', 300], ['pollo_pechuga', 350], ['huevo', 3], ['cebolla', 120], ['tomate', 200], ['cebolleta', 2], ['ajo', 3], ['salsa_soja', 30], ['salsa_pescado', 20], ['azucar', 5], ['pepino', 200], ['lima', 1], ['aceite', 35]],
    m: {
      fuego: [30, ['Cuece el arroz y extiéndelo para que se enfríe (mejor si es del día anterior).', 'Saltea el ajo y el pollo en dados a fuego fuerte 4 min. Añade la cebolla 2 min.', 'Aparta, cuaja los huevos y mézclalos. Añade el arroz, el tomate en gajos, las salsas y el azúcar y saltea 3 min.', 'Sirve con cebolleta, rodajas de pepino y lima.']]
    }
  },
  {
    id: 'th-tom-yum', n: 'Tom yum de gambas', e: '🍲', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['gambas', 400], ['champinon', 250], ['tomate_cherry', 200], ['caldo_pescado', 1200], ['hierba_limon', 2], ['jengibre', 30], ['guindilla_fresca', 10], ['lima', 3], ['salsa_pescado', 40], ['pasta_curry_rojo', 1], ['cilantro', 1], ['azucar', 5]],
    m: {
      fuego: [25, ['Calienta el caldo con la hierba limón machacada en trozos, el jengibre en láminas y la guindilla 8 min.', 'Añade 1 cucharada de pasta de curry, los champiñones y los tomates partidos y cuece 5 min.', 'Agrega las gambas y cuece 2 min.', 'Fuera del fuego, añade la salsa de pescado, el azúcar y el zumo de lima. Sirve con cilantro.']],
      robot: [22, ['Pon caldo, hierba limón, jengibre, guindilla y pasta de curry: 10 min/100 °C/vel. 1.', 'Añade champiñones, tomates y gambas: 5 min/100 °C/giro inverso/vel. cuchara.', 'Añade salsa de pescado, azúcar y lima y sirve con cilantro.']]
    }
  },
  {
    id: 'th-larb-gai', n: 'Larb gai (ensalada de pollo picado)', e: '🥬', tipo: 'cena', tags: ['carne', 'ligera', 'rapida'],
    ing: [['pollo_pechuga', 500], ['arroz_jazmin', 30], ['cebolla_morada', 100], ['cebolleta', 2], ['hierbabuena', 1], ['cilantro', 1], ['lima', 3], ['salsa_pescado', 40], ['guindilla', 1], ['azucar', 5], ['lechuga', 1], ['pepino', 200]],
    m: {
      fuego: [20, ['Tuesta el arroz crudo en una sartén seca hasta que se dore y muélelo.', 'Pica el pollo a cuchillo y cocínalo con 60 ml de agua a fuego medio 5 min, deshaciéndolo.', 'Fuera del fuego, mezcla con zumo de lima, salsa de pescado, azúcar, guindilla desmenuzada, cebolla morada en juliana, cebolleta y hierbas picadas.', 'Espolvorea el arroz tostado y sirve en hojas de lechuga con pepino.']]
    }
  },
  {
    id: 'th-som-tam', n: 'Ensalada de zanahoria y pepino al estilo som tam', e: '🥗', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['zanahoria', 400], ['pepino', 300], ['repollo', 200], ['tomate_cherry', 200], ['judias_verdes', 100], ['cacahuetes', 50], ['langostinos', 300], ['ajo', 2], ['guindilla_fresca', 5], ['lima', 3], ['salsa_pescado', 40], ['azucar_moreno', 20]],
    m: {
      sin: [20, ['Ralla en tiras finas la zanahoria, el pepino y el repollo. Corta las judías verdes muy finas.', 'Machaca el ajo y la guindilla con el azúcar en un mortero; añade la salsa de pescado y el zumo de lima.', 'Golpea ligeramente los tomates partidos y las judías en el mortero y mézclalos con las verduras y el aliño.', 'Sirve con los langostinos pelados y los cacahuetes picados.']]
    }
  },
  {
    id: 'th-yum-woon-sen', n: 'Ensalada thai de fideos con gambas', e: '🍤', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['fideos_arroz', 150], ['gambas', 300], ['cerdo_picado', 150], ['cebolla_morada', 80], ['tomate_cherry', 150], ['apio', 80], ['cilantro', 1], ['cacahuetes', 30], ['lima', 3], ['salsa_pescado', 35], ['guindilla_fresca', 5], ['azucar', 10]],
    m: {
      fuego: [20, ['Hidrata los fideos finos en agua caliente y escúrrelos.', 'Cuece el cerdo picado con 50 ml de agua 4 min, deshaciéndolo, y las gambas 2 min.', 'Mezcla el zumo de lima, la salsa de pescado, el azúcar y la guindilla picada.', 'Mezcla todo con la cebolla morada en juliana, los tomates, el apio en láminas y el cilantro. Sirve con cacahuetes.']]
    }
  },
  {
    id: 'th-yum-nua', n: 'Ensalada thai de ternera (yum nua)', e: '🥩', tipo: 'cena', tags: ['carne', 'ligera', 'rapida'],
    ing: [['ternera_entrecot', 500], ['lechuga', 1], ['pepino', 250], ['tomate_cherry', 200], ['cebolla_morada', 100], ['hierbabuena', 1], ['cilantro', 1], ['lima', 3], ['salsa_pescado', 35], ['azucar', 10], ['guindilla_fresca', 5], ['aceite', 10]],
    m: {
      fuego: [20, ['Haz el entrecot a la plancha muy caliente 3 min por lado, déjalo reposar 5 min y córtalo en tiras finas.', 'Mezcla el zumo de lima, la salsa de pescado, el azúcar y la guindilla picada.', 'Mezcla la carne con el pepino, los tomates, la cebolla morada y las hierbas.', 'Aliña y sirve sobre la lechuga.']],
      airfryer: [20, ['Cocina el entrecot 8 min a 200 °C, girándolo a mitad, y déjalo reposar.', 'Córtalo en tiras y mézclalo con las verduras, las hierbas y el aliño.']]
    }
  },
  {
    id: 'th-gai-yang', n: 'Gai yang (pollo asado con hierba limón)', e: '🍗', tipo: 'ambos', tags: ['carne', 'niños'],
    ing: [['pollo_muslos', 1000], ['hierba_limon', 2], ['ajo', 5], ['cilantro', 1], ['salsa_pescado', 30], ['salsa_soja', 30], ['azucar_moreno', 20], ['pimienta', 2], ['arroz_jazmin', 250], ['pepino', 250], ['lima', 1], ['aceite', 15]],
    m: {
      horno: [55, ['Tritura la hierba limón, el ajo, los tallos de cilantro, las salsas, el azúcar, la pimienta y el aceite. Marina el pollo al menos 1 h.', 'Hornéalo sobre rejilla 40 min a 210 °C, girándolo a mitad.', 'Sirve con arroz, pepino y lima.']],
      airfryer: [35, ['Marina el pollo.', 'Cocínalo 25 min a 190 °C, girándolo a mitad.', 'Sirve con arroz, pepino y lima.']],
      fuego: [40, ['Marina el pollo.', 'Hazlo en una plancha a fuego medio, tapado, 30 min, girándolo.', 'Sirve con arroz y pepino.']]
    }
  },
  {
    id: 'th-satay-pollo', n: 'Satay de pollo con salsa de cacahuete', e: '🍢', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['pollo_pechuga', 600], ['leche_coco', 250], ['cacahuetes', 120], ['curry', 8], ['curcuma', 2], ['ajo', 2], ['salsa_soja', 30], ['azucar_moreno', 20], ['lima', 1], ['pepino', 250], ['arroz_jazmin', 250], ['aceite', 15]],
    m: {
      fuego: [35, ['Marina el pollo en tiras con 100 ml de leche de coco, el curry, la cúrcuma, el ajo rallado y la mitad de la soja 15 min. Ensártalo en brochetas.', 'Tritura los cacahuetes con el resto de leche de coco, la soja, el azúcar y la lima; calienta la salsa 3 min.', 'Hazlas a la plancha 8 min, girándolas.', 'Sirve con la salsa, pepino y arroz.']],
      horno: [35, ['Marina y ensarta el pollo.', 'Hornea las brochetas 15 min a 220 °C.', 'Sirve con la salsa de cacahuete, pepino y arroz.']],
      airfryer: [30, ['Marina y ensarta el pollo.', 'Cocina 10 min a 200 °C, girando a mitad.', 'Sirve con la salsa de cacahuete y arroz.']]
    }
  },
  {
    id: 'th-pad-pak', n: 'Salteado thai de verduras con tofu', e: '🥦', tipo: 'cena', tags: ['vegetariano', 'rapida', 'ligera'],
    ing: [['tofu', 400], ['brocoli', 250], ['zanahoria', 150], ['pimiento_rojo', 150], ['champinon', 200], ['repollo', 200], ['ajo', 4], ['salsa_soja', 50], ['azucar', 8], ['maicena', 10], ['arroz_jazmin', 250], ['aceite', 35]],
    m: {
      fuego: [25, ['Corta el tofu en dados, sécalo y dóralo con la mitad del aceite. Resérvalo.', 'Saltea el ajo y las verduras en trozos a fuego fuerte 5 min, empezando por las más duras.', 'Mezcla la soja, el azúcar, la maicena y 80 ml de agua y añádelo con el tofu.', 'Saltea 1 min hasta que la salsa brille y sirve con arroz.']]
    }
  },
  {
    id: 'th-pad-prik-king', n: 'Cerdo con judías verdes al curry rojo', e: '🫛', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['cerdo_lomo', 450], ['judias_verdes', 400], ['pasta_curry_rojo', 1], ['salsa_pescado', 25], ['azucar_moreno', 15], ['lima', 1], ['arroz_jazmin', 250], ['aceite', 30]],
    m: {
      fuego: [25, ['Cuece el arroz. Corta las judías en trozos de 4 cm y el cerdo en tiras.', 'Sofríe 2 cucharadas de pasta de curry en el aceite 1 min.', 'Añade el cerdo y saltea 3 min; agrega las judías y 50 ml de agua y saltea 5 min.', 'Sazona con salsa de pescado y azúcar y sirve con arroz y lima.']]
    }
  },
  {
    id: 'th-pla-rad-prik', n: 'Pescado crujiente con salsa de chile y tamarindo', e: '🐟', tipo: 'cena', tags: ['pescado'],
    ing: [['pescado_blanco', 700], ['maicena', 60], ['ajo', 4], ['chalota', 80], ['guindilla_fresca', 15], ['pasta_tamarindo', 25], ['salsa_pescado', 30], ['azucar_moreno', 35], ['cilantro', 1], ['arroz_jazmin', 250], ['aceite_girasol', 300]],
    m: {
      fuego: [30, ['Seca el pescado, córtalo en trozos grandes y pásalo por maicena con una pizca de sal.', 'Fríelo en aceite caliente 5 min hasta que esté crujiente. Escurre.', 'En 2 cucharadas de aceite, sofríe ajo, chalota y guindilla picados 2 min; añade tamarindo, salsa de pescado, azúcar y 60 ml de agua y reduce 3 min.', 'Napa el pescado con la salsa y sirve con cilantro y arroz.']],
      airfryer: [28, ['Enharina el pescado con maicena, rocía con aceite y cocínalo 12 min a 200 °C.', 'Prepara la salsa de chile y tamarindo en una sartén.', 'Sirve el pescado con la salsa, cilantro y arroz.']],
      horno: [30, ['Enharina el pescado, ponlo en una bandeja con papel, rocía con aceite y hornea 15 min a 220 °C.', 'Prepara la salsa en el fuego.', 'Sirve con la salsa por encima y arroz.']]
    }
  },
  {
    id: 'th-lubina-lima', n: 'Lubina al vapor con lima, ajo y guindilla', e: '🐠', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['lubina', 1000], ['lima', 3], ['ajo', 6], ['guindilla_fresca', 10], ['salsa_pescado', 40], ['azucar', 10], ['caldo_pollo', 100], ['cilantro', 1], ['brocoli', 400], ['arroz_jazmin', 250]],
    m: {
      fuego: [25, ['Pide la lubina en lomos o limpia. Cuécela al vapor (o en una sartén tapada con un dedo de agua) 8–10 min.', 'Mezcla el caldo caliente con el ajo y la guindilla picados, el zumo de lima, la salsa de pescado y el azúcar.', 'Cuece el brócoli al vapor 5 min.', 'Vierte la salsa sobre el pescado y sirve con cilantro, brócoli y arroz.']],
      horno: [25, ['Pon la lubina en papel de horno, riega con la mitad de la salsa y cierra el paquete.', 'Hornea 15 min a 200 °C.', 'Sirve con el resto de la salsa, cilantro, brócoli y arroz.']]
    }
  },
  {
    id: 'th-pad-pong-garee', n: 'Gambas al curry con huevo (pad pong garee)', e: '🦐', tipo: 'cena', tags: ['pescado', 'rapida'],
    ing: [['gambas', 450], ['huevo', 3], ['leche', 100], ['cebolla', 150], ['apio', 100], ['cebolleta', 2], ['curry', 10], ['salsa_ostras', 25], ['salsa_soja', 20], ['azucar', 5], ['arroz_jazmin', 250], ['aceite', 30]],
    m: {
      fuego: [22, ['Cuece el arroz. Bate los huevos con la leche, el curry, las salsas y el azúcar.', 'Saltea la cebolla en gajos y el apio en láminas 3 min a fuego fuerte.', 'Añade las gambas 2 min.', 'Vierte la mezcla de huevo y remueve suavemente 1 min, hasta que cuaje cremosa. Sirve con cebolleta y arroz.']]
    }
  },
  {
    id: 'th-kai-jeow', n: 'Kai jeow (tortilla thai esponjosa) con arroz', e: '🍳', tipo: 'cena', tags: ['vegetariano', 'rapida', 'niños'],
    ing: [['huevo', 8], ['salsa_soja', 20], ['lima', 1], ['cebolleta', 2], ['tomate', 300], ['pepino', 250], ['arroz_jazmin', 250], ['aceite_girasol', 150]],
    m: {
      fuego: [22, ['Cuece el arroz.', 'Bate los huevos enérgicamente con la soja, unas gotas de lima y la cebolleta picada hasta que hagan espuma.', 'Calienta bien el aceite en un wok y vierte la mitad del huevo desde cierta altura; dale la vuelta a los 2 min y fríe 1 min más. Repite.', 'Sirve sobre el arroz con tomate y pepino.']]
    }
  },
  {
    id: 'th-khao-man-gai', n: 'Khao man gai (arroz con pollo y jengibre)', e: '🍗', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['pollo_muslos', 800], ['arroz_jazmin', 320], ['jengibre', 40], ['ajo', 5], ['cebolleta', 2], ['salsa_soja', 40], ['vinagre', 15], ['azucar', 5], ['guindilla_fresca', 5], ['pepino', 250], ['cilantro', 1], ['aceite', 20], ['sal', 5]],
    m: {
      fuego: [55, ['Cuece el pollo con 1,2 l de agua, la mitad del jengibre en láminas, la cebolleta y sal 25 min. Resérvalo y cuela el caldo.', 'Sofríe 3 ajos picados en el aceite, añade el arroz lavado y 550 ml del caldo y cuece tapado 13 min.', 'Mezcla el resto del jengibre y ajo picados con soja, vinagre, azúcar y guindilla para la salsa.', 'Sirve el pollo en tiras sobre el arroz con pepino, cilantro, la salsa y un cuenco de caldo.']],
      robot: [50, ['Pon el pollo, 1 l de agua, jengibre, cebolleta y sal: 25 min/100 °C/giro inverso/vel. cuchara. Reserva pollo y caldo.', 'Sofríe ajo con aceite 3 min/120 °C/vel. 1, añade el arroz y 550 ml de caldo: 13 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con el pollo, pepino y la salsa de jengibre.']]
    }
  },
  {
    id: 'th-gaeng-som', n: 'Curry agrio de pescado y verduras (gaeng som)', e: '🍲', tipo: 'comida', tags: ['pescado', 'ligera'],
    ing: [['merluza', 500], ['gambas', 200], ['repollo', 250], ['judias_verdes', 150], ['calabacin', 200], ['pasta_curry_rojo', 1], ['pasta_tamarindo', 30], ['caldo_pescado', 1000], ['salsa_pescado', 30], ['azucar_moreno', 15], ['arroz_jazmin', 250]],
    m: {
      fuego: [30, ['Calienta el caldo y disuelve 2 cucharadas de pasta de curry y el tamarindo.', 'Añade el repollo en trozos, las judías y el calabacín y cuece 8 min.', 'Agrega la merluza en trozos y las gambas y cuece 4 min a fuego suave.', 'Sazona con salsa de pescado y azúcar: debe quedar ácido, salado y algo dulce. Sirve con arroz.']],
      robot: [28, ['Pon caldo, pasta de curry y tamarindo: 6 min/100 °C/vel. 1.', 'Añade verduras: 8 min/100 °C/giro inverso/vel. cuchara.', 'Añade pescado, gambas, salsa de pescado y azúcar: 5 min/90 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'th-gaeng-pa', n: 'Curry de la selva con pollo y verduras', e: '🌿', tipo: 'comida', tags: ['carne', 'ligera'],
    ing: [['pollo_pechuga', 500], ['berenjena', 250], ['judias_verdes', 150], ['zanahoria', 150], ['champinon', 150], ['pasta_curry_rojo', 1], ['caldo_pollo', 700], ['hierba_limon', 1], ['salsa_pescado', 30], ['albahaca', 1], ['arroz_jazmin', 250], ['aceite', 20]],
    m: {
      fuego: [30, ['Sofríe 2 cucharadas de pasta de curry con la hierba limón machacada 1 min.', 'Añade el pollo en láminas y dóralo 3 min.', 'Vierte el caldo y añade las verduras en trozos. Cuece 12 min.', 'Sazona con salsa de pescado, añade la albahaca y sirve con arroz. Es un curry sin coco, ligero y picante.']],
      robot: [28, ['Sofríe la pasta de curry y la hierba limón con aceite 2 min/100 °C/vel. 1.', 'Añade pollo, verduras, caldo y salsa de pescado: 15 min/100 °C/giro inverso/vel. cuchara.', 'Termina con albahaca y sirve con arroz.']]
    }
  },
  {
    id: 'th-moo-ping', n: 'Moo ping (brochetas de cerdo con ajo y cilantro)', e: '🍢', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['cerdo_lomo', 700], ['ajo', 5], ['cilantro', 1], ['salsa_soja', 30], ['salsa_ostras', 30], ['salsa_pescado', 15], ['azucar_moreno', 25], ['leche_coco', 100], ['pimienta', 2], ['arroz_jazmin', 250], ['pepino', 250]],
    m: {
      fuego: [30, ['Tritura ajo, tallos de cilantro, pimienta, salsas y azúcar. Marina el cerdo en tiras finas al menos 30 min.', 'Ensártalo en brochetas.', 'Hazlas en una plancha a fuego medio 8 min, pintándolas con la leche de coco.', 'Sirve con arroz y pepino.']],
      horno: [30, ['Marina y ensarta el cerdo.', 'Hornea 15 min a 220 °C, pintando con leche de coco a mitad, y gratina 2 min.', 'Sirve con arroz y pepino.']],
      airfryer: [25, ['Marina y ensarta el cerdo.', 'Cocina 10 min a 200 °C, pintando con leche de coco a mitad.', 'Sirve con arroz.']]
    }
  },
  {
    id: 'th-gai-pad-khing', n: 'Pollo salteado con jengibre y setas', e: '🫚', tipo: 'cena', tags: ['carne', 'rapida', 'ligera'],
    ing: [['pollo_pechuga', 550], ['jengibre', 50], ['setas', 250], ['cebolla', 150], ['cebolleta', 3], ['ajo', 3], ['salsa_ostras', 30], ['salsa_soja', 25], ['salsa_pescado', 10], ['azucar', 5], ['arroz_jazmin', 250], ['aceite', 30]],
    m: {
      fuego: [20, ['Corta el jengibre en tiras muy finas y el pollo en láminas.', 'Saltea ajo y pollo a fuego fuerte 4 min.', 'Añade el jengibre, la cebolla en gajos y las setas y saltea 3 min.', 'Añade las salsas, el azúcar, 40 ml de agua y la cebolleta en trozos. Saltea 1 min y sirve con arroz.']]
    }
  },
  {
    id: 'th-khao-soi', n: 'Khao soi (sopa de fideos al curry con pollo)', e: '🍜', tipo: 'comida', tags: ['carne'],
    ing: [['noodles', 300], ['pollo_muslos', 600], ['leche_coco', 400], ['caldo_pollo', 600], ['pasta_curry_rojo', 1], ['curry', 6], ['curcuma', 2], ['salsa_pescado', 30], ['azucar_moreno', 10], ['chalota', 100], ['lima', 2], ['cilantro', 1], ['aceite_girasol', 150]],
    m: {
      fuego: [40, ['Fríe un tercio de los fideos (secos) en el aceite hasta que se inflen y queden crujientes. Escurre.', 'Sofríe 2 cucharadas de pasta de curry con el curry y la cúrcuma en 2 cucharadas de aceite 1 min; añade la leche de coco y el caldo.', 'Añade el pollo en trozos y cuece 20 min. Sazona con salsa de pescado y azúcar.', 'Cuece el resto de fideos, repártelos en cuencos, cubre con la sopa y corona con fideos crujientes, chalota, lima y cilantro.']],
      robot: [35, ['Sofríe pasta de curry y especias con aceite 2 min/100 °C/vel. 1.', 'Añade leche de coco, caldo, pollo, salsa de pescado y azúcar: 20 min/100 °C/giro inverso/vel. cuchara.', 'Sirve sobre los fideos cocidos con los crujientes, chalota, lima y cilantro.']]
    }
  },
  {
    id: 'th-rad-na', n: 'Rad na (fideos anchos con ternera y salsa)', e: '🥢', tipo: 'cena', tags: ['carne'],
    ing: [['fideos_arroz', 300], ['ternera_filetes', 400], ['brocoli', 400], ['ajo', 4], ['caldo_pollo', 500], ['salsa_ostras', 40], ['salsa_soja', 40], ['azucar', 10], ['maicena', 25], ['pimienta', 2], ['vinagre', 15], ['aceite', 35]],
    m: {
      fuego: [30, ['Hidrata los fideos, escúrrelos y saltéalos con 1 cucharada de soja y un poco de aceite hasta que se tuesten. Repártelos en platos.', 'Saltea el ajo y la ternera en tiras finas 2 min; añade el brócoli en ramitos 2 min.', 'Vierte el caldo con la salsa de ostras, el resto de soja, el azúcar y la pimienta y cuece 3 min.', 'Espesa con la maicena disuelta en agua y vierte sobre los fideos. Sirve con unas gotas de vinagre.']]
    }
  },
  {
    id: 'th-khao-tom', n: 'Khao tom (sopa de arroz con gambas)', e: '🥣', tipo: 'cena', tags: ['pescado', 'ligera'],
    ing: [['arroz_jazmin', 200], ['gambas', 300], ['cerdo_picado', 200], ['caldo_pollo', 1500], ['jengibre', 30], ['ajo', 4], ['cebolleta', 2], ['cilantro', 1], ['salsa_pescado', 25], ['salsa_soja', 15], ['pimienta', 2], ['aceite', 20]],
    m: {
      fuego: [35, ['Fríe el ajo laminado en el aceite hasta que se dore y resérvalo.', 'Cuece el arroz lavado en el caldo con el jengibre en tiras 18 min.', 'Forma bolitas con el cerdo picado, la pimienta y la soja y añádelas a la sopa 6 min. Agrega las gambas 2 min.', 'Sazona con salsa de pescado y sirve con ajo frito, cebolleta y cilantro.']],
      robot: [32, ['Pon caldo, arroz y jengibre: 18 min/100 °C/giro inverso/vel. cuchara.', 'Añade las bolitas de cerdo: 6 min/100 °C/giro inverso/vel. cuchara. Añade gambas y salsa de pescado: 2 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con ajo frito, cebolleta y cilantro.']]
    }
  },
  {
    id: 'th-chu-chee-salmon', n: 'Salmón en curry rojo espeso (chu chee)', e: '🐟', tipo: 'cena', tags: ['pescado', 'rapida'],
    ing: [['salmon', 600], ['leche_coco', 300], ['pasta_curry_rojo', 1], ['salsa_pescado', 20], ['azucar_moreno', 10], ['lima', 1], ['albahaca', 1], ['judias_verdes', 250], ['arroz_jazmin', 250], ['aceite', 20]],
    m: {
      fuego: [25, ['Dora el salmón en porciones por la piel 4 min y 1 min por el otro lado. Resérvalo.', 'Sofríe 2 cucharadas de pasta de curry 1 min y añade la leche de coco. Reduce 5 min hasta que espese.', 'Añade la salsa de pescado y el azúcar y vuelve a poner el salmón 3 min.', 'Sirve con judías verdes al vapor, arroz, lima y albahaca.']],
      horno: [25, ['Prepara la salsa de curry rojo en el fuego.', 'Pon el salmón en una fuente, cúbrelo con la salsa y hornea 12 min a 200 °C.', 'Sirve con judías, arroz y albahaca.']]
    }
  },
  {
    id: 'th-tod-mun-pla', n: 'Tod mun pla (tortitas de pescado al curry)', e: '🐟', tipo: 'cena', tags: ['pescado', 'niños'],
    ing: [['pescado_blanco', 600], ['pasta_curry_rojo', 1], ['huevo', 1], ['judias_verdes', 100], ['maicena', 20], ['salsa_pescado', 15], ['pepino', 300], ['cebolla_morada', 50], ['vinagre', 40], ['azucar', 30], ['lechuga', 1], ['aceite', 50]],
    m: {
      fuego: [35, ['Tritura el pescado con 2 cucharadas de pasta de curry, el huevo, la maicena y la salsa de pescado hasta tener una pasta. Añade las judías muy picadas.', 'Forma 16 tortitas con las manos mojadas.', 'Fríelas en una sartén con aceite 2–3 min por lado.', 'Sirve con una ensalada de pepino y cebolla morada aliñada con vinagre, azúcar y 2 cucharadas de agua, y lechuga.']],
      airfryer: [30, ['Prepara las tortitas.', 'Píntalas con aceite y cocínalas 10 min a 200 °C, girándolas a mitad.', 'Sirve con la ensalada de pepino.']]
    }
  },
  {
    id: 'th-pad-woon-sen', n: 'Fideos finos salteados con huevo y verduras', e: '🍜', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['fideos_arroz', 200], ['huevo', 4], ['repollo', 250], ['zanahoria', 150], ['champinon', 200], ['tomate', 200], ['cebolleta', 3], ['ajo', 3], ['salsa_soja', 50], ['azucar', 8], ['pimienta', 2], ['aceite', 35]],
    m: {
      fuego: [20, ['Hidrata los fideos finos en agua caliente y córtalos con tijeras.', 'Saltea ajo, repollo, zanahoria en tiras y champiñones a fuego fuerte 4 min.', 'Aparta y revuelve los huevos 1 min. Añade los fideos, el tomate en gajos, la soja, el azúcar y 50 ml de agua.', 'Saltea 2 min, añade la cebolleta y la pimienta y sirve.']]
    }
  },
  {
    id: 'th-kaeng-jued', n: 'Sopa clara con tofu y albóndigas de cerdo', e: '🍲', tipo: 'cena', tags: ['carne', 'ligera', 'rapida'],
    ing: [['cerdo_picado', 300], ['tofu', 300], ['repollo', 300], ['zanahoria', 100], ['caldo_pollo', 1500], ['ajo', 3], ['cilantro', 1], ['cebolleta', 2], ['salsa_soja', 30], ['salsa_pescado', 15], ['pimienta', 2]],
    m: {
      fuego: [25, ['Mezcla el cerdo con 1 ajo rallado, los tallos de cilantro picados, la pimienta y la mitad de la soja. Forma bolitas.', 'Lleva el caldo a hervor con el resto del ajo machacado y la zanahoria en rodajas.', 'Añade las albóndigas y cuece 6 min; agrega el repollo en trozos y el tofu en dados y cuece 4 min.', 'Sazona con el resto de soja y salsa de pescado y sirve con cilantro y cebolleta.']],
      robot: [22, ['Pon caldo, ajo y zanahoria: 8 min/100 °C/vel. 1.', 'Añade las albóndigas, el repollo y el tofu: 10 min/100 °C/giro inverso/vel. cuchara.', 'Sazona y sirve con cilantro y cebolleta.']]
    }
  },
  {
    id: 'th-moo-kratiem', n: 'Cerdo al ajo y pimienta (moo kratiem)', e: '🧄', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['cerdo_lomo', 550], ['ajo', 10], ['pimienta', 4], ['salsa_soja', 30], ['salsa_ostras', 25], ['salsa_pescado', 10], ['azucar', 8], ['cilantro', 1], ['pepino', 250], ['tomate', 250], ['arroz_jazmin', 250], ['aceite', 40]],
    m: {
      fuego: [20, ['Marina el cerdo en láminas con la pimienta, la soja y la salsa de ostras 10 min.', 'Fríe el ajo picado en el aceite a fuego medio hasta que esté dorado. Retira la mitad.', 'Sube el fuego, añade el cerdo y saltea 5 min. Añade la salsa de pescado y el azúcar 1 min.', 'Sirve con el ajo crujiente por encima, cilantro, pepino, tomate y arroz.']],
      airfryer: [22, ['Marina el cerdo con el ajo picado, la pimienta y las salsas.', 'Cocínalo 10 min a 200 °C, removiendo a mitad.', 'Sirve con cilantro, verduras y arroz.']]
    }
  },
  {
    id: 'th-ternera-ostras', n: 'Ternera con brócoli en salsa de ostras', e: '🥦', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['ternera_filetes', 500], ['brocoli', 400], ['cebolla', 150], ['ajo', 3], ['salsa_ostras', 50], ['salsa_soja', 25], ['azucar', 5], ['maicena', 15], ['pimienta', 2], ['arroz_jazmin', 250], ['aceite', 35]],
    m: {
      fuego: [22, ['Corta la ternera en tiras finas y mézclala con la maicena, la mitad de la soja y la pimienta.', 'Saltea el brócoli en ramitos con 60 ml de agua, tapado, 3 min. Resérvalo.', 'Saltea el ajo y la ternera a fuego muy fuerte 2 min; añade la cebolla en gajos 2 min.', 'Vuelve a poner el brócoli, añade la salsa de ostras, el resto de soja, el azúcar y 50 ml de agua y saltea 1 min. Sirve con arroz.']]
    }
  },
  {
    id: 'th-gai-tod', n: 'Pollo frito thai con ajo y cilantro', e: '🍗', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['pollo_muslos', 900], ['ajo', 6], ['cilantro', 1], ['salsa_pescado', 30], ['salsa_soja', 20], ['pimienta', 3], ['harina', 60], ['maicena', 40], ['pepino', 250], ['lechuga', 1], ['aceite_girasol', 600]],
    m: {
      fuego: [45, ['Tritura ajo, tallos de cilantro, pimienta y las salsas y marina el pollo en trozos 30 min.', 'Mezcla la harina con la maicena y reboza el pollo.', 'Fríelo en aceite a fuego medio 12 min, hasta que esté hecho y dorado. Escurre.', 'Sirve con lechuga y pepino.']],
      airfryer: [40, ['Marina y reboza el pollo.', 'Rocíalo con aceite y cocínalo 22 min a 190 °C, girándolo a mitad.', 'Sirve con ensalada.']],
      horno: [50, ['Marina y reboza el pollo.', 'Hornea en bandeja con rejilla, rociado con aceite, 35 min a 210 °C, girándolo a mitad.', 'Sirve con lechuga y pepino.']]
    }
  },
  {
    id: 'th-curry-verde-verduras', n: 'Curry verde de verduras y tofu', e: '🥬', tipo: 'comida', tags: ['vegetariano', 'rapida'],
    ing: [['tofu', 400], ['leche_coco', 400], ['pasta_curry_verde', 1], ['berenjena', 250], ['brocoli', 250], ['judias_verdes', 150], ['salsa_soja', 30], ['azucar', 8], ['albahaca', 1], ['lima', 1], ['arroz_jazmin', 250], ['aceite', 25]],
    m: {
      fuego: [28, ['Dora el tofu en dados y resérvalo.', 'Sofríe 2 cucharadas de pasta de curry verde 1 min y añade la mitad de la leche de coco hasta que se integre.', 'Añade la berenjena en dados, el resto de leche de coco y 100 ml de agua y cuece 6 min. Agrega brócoli y judías 5 min.', 'Sazona con soja y azúcar, añade el tofu, la albahaca y la lima y sirve con arroz.']],
      robot: [28, ['Sofríe la pasta de curry con aceite 2 min/100 °C/vel. 1.', 'Añade leche de coco, verduras, 100 ml de agua, soja y azúcar: 12 min/100 °C/giro inverso/vel. cuchara.', 'Añade el tofu dorado, la albahaca y la lima y sirve con arroz.']]
    }
  },
  {
    id: 'th-curry-rojo-gambas', n: 'Curry rojo de gambas y piña', e: '🍍', tipo: 'comida', tags: ['pescado', 'rapida'],
    ing: [['gambas', 450], ['pina', 1], ['leche_coco', 400], ['pasta_curry_rojo', 1], ['pimiento_rojo', 150], ['tomate_cherry', 150], ['salsa_pescado', 25], ['azucar_moreno', 5], ['albahaca', 1], ['arroz_jazmin', 250], ['aceite', 20]],
    m: {
      fuego: [25, ['Sofríe 2 cucharadas de pasta de curry 1 min y añade la leche de coco poco a poco.', 'Añade el pimiento en tiras y la piña en trozos con un poco de su jugo y cuece 6 min.', 'Agrega las gambas y los tomates y cuece 3 min.', 'Sazona con salsa de pescado y azúcar, añade la albahaca y sirve con arroz.']],
      robot: [22, ['Sofríe la pasta de curry con aceite 2 min/100 °C/vel. 1.', 'Añade leche de coco, piña, pimiento, salsa de pescado y azúcar: 8 min/100 °C/giro inverso/vel. cuchara.', 'Añade gambas y tomates: 4 min/100 °C/giro inverso/vel. cuchara. Sirve con arroz.']]
    }
  },
  {
    id: 'th-berenjena-albahaca', n: 'Berenjena salteada con albahaca y tofu', e: '🍆', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['berenjena', 700], ['tofu', 300], ['albahaca', 1], ['ajo', 5], ['guindilla_fresca', 10], ['salsa_soja', 50], ['azucar', 10], ['vinagre', 10], ['maicena', 10], ['arroz_jazmin', 250], ['aceite', 50]],
    m: {
      fuego: [25, ['Corta la berenjena en bastones y saltéala con la mitad del aceite a fuego fuerte 8 min, hasta que esté tierna. Resérvala.', 'Dora el tofu en dados con el resto del aceite.', 'Añade ajo y guindilla machacados 30 seg y vuelve a poner la berenjena.', 'Añade la soja, el azúcar, el vinagre y la maicena disuelta en 60 ml de agua, saltea 1 min, añade la albahaca y sirve con arroz.']],
      airfryer: [28, ['Aliña la berenjena en bastones y el tofu en dados con aceite y cocina 16 min a 200 °C, agitando a mitad.', 'Prepara la salsa en una sartén con ajo, guindilla, soja, azúcar, vinagre y maicena.', 'Mezcla todo con la albahaca y sirve con arroz.']]
    }
  },
  {
    id: 'th-mejillones-hierba-limon', n: 'Mejillones con hierba limón y albahaca', e: '🦪', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['mejillones', 1500], ['hierba_limon', 2], ['jengibre', 25], ['ajo', 4], ['guindilla_fresca', 10], ['albahaca', 1], ['lima', 2], ['salsa_pescado', 20], ['arroz_jazmin', 200], ['aceite', 20]],
    m: {
      fuego: [20, ['Limpia los mejillones.', 'Sofríe la hierba limón machacada en trozos, el jengibre en láminas, el ajo y la guindilla 2 min.', 'Añade los mejillones y 100 ml de agua, tapa y cuece 5 min hasta que se abran.', 'Añade la salsa de pescado, el zumo de lima y la albahaca y sirve con su caldo y arroz.']]
    }
  },
  {
    id: 'th-calamares-albahaca', n: 'Calamares salteados con albahaca y guindilla', e: '🦑', tipo: 'cena', tags: ['pescado', 'rapida'],
    ing: [['calamar', 600], ['pimiento_rojo', 150], ['cebolla', 150], ['albahaca', 1], ['ajo', 4], ['guindilla_fresca', 10], ['salsa_ostras', 30], ['salsa_pescado', 15], ['azucar', 5], ['arroz_jazmin', 250], ['aceite', 30]],
    m: {
      fuego: [20, ['Corta el calamar en anillas o en trozos con cortes en rombo.', 'Saltea ajo y guindilla machacados 30 seg; añade cebolla y pimiento en tiras 3 min.', 'Sube el fuego al máximo, añade el calamar y saltea 2 min.', 'Añade las salsas y el azúcar, retira, añade la albahaca y sirve con arroz.']]
    }
  },
  {
    id: 'th-ensalada-mango', n: 'Ensalada thai de mango con gambas', e: '🥭', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['mango', 2], ['langostinos', 400], ['pepino', 200], ['cebolla_morada', 80], ['pimiento_rojo', 100], ['cacahuetes', 40], ['cilantro', 1], ['hierbabuena', 1], ['lima', 2], ['salsa_pescado', 25], ['azucar', 8], ['guindilla_fresca', 5], ['lechuga', 1]],
    m: {
      sin: [20, ['Pela los mangos (mejor algo verdes) y córtalos en tiras, igual que el pepino y el pimiento.', 'Mezcla el zumo de lima, la salsa de pescado, el azúcar y la guindilla picada.', 'Junta las verduras, el mango, la cebolla morada en juliana, las hierbas y los langostinos pelados.', 'Aliña, sirve sobre lechuga y termina con cacahuetes picados.']]
    }
  },
  {
    id: 'th-curry-rojo-pollo', n: 'Curry rojo de pollo y berenjena', e: '🍛', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_muslos', 600], ['berenjena', 400], ['leche_coco', 400], ['pasta_curry_rojo', 1], ['pimiento_rojo', 120], ['hierba_limon', 1], ['salsa_pescado', 25], ['azucar_moreno', 10], ['albahaca', 1], ['arroz_jazmin', 250], ['aceite', 25]],
    m: {
      fuego: [35, ['Sofríe 2 cucharadas de pasta de curry rojo con la hierba limón machacada 1 min y añade la mitad de la leche de coco hasta que se integre.', 'Añade el pollo en trozos y cocínalo 5 min.', 'Agrega la berenjena en dados, el pimiento en tiras, el resto de leche de coco y 100 ml de agua y cuece 15 min.', 'Sazona con salsa de pescado y azúcar, retira la hierba limón, añade la albahaca y sirve con arroz.']],
      robot: [32, ['Sofríe la pasta de curry con aceite y la hierba limón 2 min/100 °C/vel. 1.', 'Añade pollo, berenjena, pimiento, leche de coco, 80 ml de agua, salsa de pescado y azúcar: 18 min/100 °C/giro inverso/vel. cuchara.', 'Retira la hierba limón, añade la albahaca y sirve con arroz.']]
    }
  },
  {
    id: 'th-sopa-calabaza', n: 'Sopa thai de calabaza y coco', e: '🎃', tipo: 'cena', tags: ['vegetariano', 'ligera'],
    ing: [['calabaza', 900], ['leche_coco', 400], ['caldo_verduras', 700], ['cebolla', 150], ['pasta_curry_rojo', 1], ['jengibre', 20], ['hierba_limon', 1], ['lima', 1], ['salsa_soja', 20], ['cilantro', 1], ['aceite', 20]],
    m: {
      fuego: [35, ['Sofríe la cebolla, el jengibre y 1 cucharada de pasta de curry 5 min.', 'Añade la calabaza en dados, la hierba limón machacada y el caldo y cuece 20 min.', 'Retira la hierba limón, añade la leche de coco (reserva un poco) y tritura.', 'Ajusta con soja y lima y sirve con un hilo de coco y cilantro.']],
      robot: [32, ['Pica cebolla y jengibre 4 seg/vel. 5 y sofríe con aceite y pasta de curry 4 min/120 °C/vel. 1.', 'Añade calabaza, caldo y hierba limón entera: 20 min/100 °C/vel. 1.', 'Retira la hierba limón, añade leche de coco, soja y lima y tritura 1 min/vel. 5-10 progresivo.']]
    }
  },
  {
    id: 'th-alitas-lima', n: 'Alitas de pollo thai con miel, lima y guindilla', e: '🍗', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['pollo_alitas', 1200], ['miel', 60], ['lima', 2], ['ajo', 4], ['guindilla_fresca', 5], ['salsa_pescado', 25], ['salsa_soja', 25], ['cilantro', 1], ['pepino', 300], ['arroz_jazmin', 200]],
    m: {
      horno: [50, ['Mezcla la miel, el zumo de lima, el ajo y la guindilla picados y las salsas.', 'Marina las alitas con la mitad 20 min y hornéalas 35 min a 210 °C, girándolas a mitad.', 'Píntalas con el resto de la salsa, hornea 5 min más y sirve con cilantro, pepino y arroz.']],
      airfryer: [40, ['Marina las alitas con la mitad de la salsa.', 'Cocínalas 22 min a 190 °C, girándolas a mitad; píntalas con el resto y cocina 3 min más.', 'Sirve con cilantro, pepino y arroz.']]
    }
  },
  {
    id: 'th-tofu-cacahuete', n: 'Tofu crujiente con salsa de cacahuete y verduras', e: '🥜', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['tofu', 500], ['maicena', 30], ['brocoli', 300], ['zanahoria', 150], ['brotes_soja', 150], ['cacahuetes', 80], ['leche_coco', 150], ['salsa_soja', 40], ['lima', 1], ['azucar_moreno', 15], ['arroz_jazmin', 250], ['aceite', 40]],
    m: {
      fuego: [28, ['Corta el tofu en dados, sécalo, pásalo por maicena y dóralo en el aceite 8 min. Resérvalo.', 'Saltea el brócoli y la zanahoria en tiras con 50 ml de agua 4 min y añade los brotes de soja 1 min.', 'Tritura los cacahuetes con la leche de coco, la soja, la lima y el azúcar y calienta 2 min.', 'Sirve el tofu y las verduras sobre arroz con la salsa por encima.']],
      airfryer: [28, ['Pasa el tofu por maicena, rocíalo con aceite y cocínalo 15 min a 200 °C, agitando a mitad.', 'Saltea las verduras y prepara la salsa de cacahuete.', 'Sirve todo sobre arroz.']]
    }
  },
  {
    id: 'th-khao-kha-moo', n: 'Cerdo guisado con soja y huevos (khao kha moo)', e: '🥚', tipo: 'comida', tags: ['carne'],
    ing: [['cerdo_guisar', 800], ['huevo', 4], ['salsa_soja', 80], ['azucar_moreno', 40], ['ajo', 6], ['canela', 1], ['clavo', 3], ['cilantro', 1], ['repollo', 400], ['arroz_jazmin', 250], ['aceite', 15]],
    m: {
      fuego: [100, ['Carameliza el azúcar con el aceite en una cazuela, añade el cerdo en trozos y dóralo 5 min.', 'Agrega el ajo machacado, la canela, el clavo, los tallos de cilantro, la soja y 1 l de agua.', 'Cuece tapado a fuego suave 75 min. Cuece los huevos 9 min, pélalos y añádelos los últimos 20 min.', 'Sirve con el repollo salteado, arroz y la salsa reducida.']],
      robot: [85, ['Pon el cerdo, el azúcar, la soja, el ajo, las especias y 800 ml de agua: 70 min/100 °C/giro inverso/vel. cuchara.', 'Añade los huevos cocidos pelados los últimos 15 min.', 'Sirve con repollo salteado y arroz.']]
    }
  }
]);
