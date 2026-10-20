/* MC Food Diary · cocina de China 🇨🇳. Formato y normas: recetas/GUIA-RECETAS.md */

MC_ADD_ING({
  salsa_hoisin: ['Salsa hoisin', 'despensa', 12, 'l', 0, 'salsa de soja con miel y una pizca de canela'],
  anis_estrellado: ['Anís estrellado', 'basicos', 0, 'ud', 1],
  pak_choi: ['Pak choi', 'fruteria', 6, 'kg', 0, 'acelgas tiernas o espinacas'],
  col_china: ['Col china', 'fruteria', 2.2, 'kg'],
  setas_shiitake: ['Setas shiitake', 'fruteria', 14, 'kg'],
  cerdo_picado: ['Carne picada de cerdo', 'carniceria', 6.5, 'kg'],
  panceta_fresca: ['Panceta de cerdo fresca', 'carniceria', 7, 'kg'],
  anacardos: ['Anacardos', 'despensa', 16, 'kg'],
  brotes_bambu: ['Brotes de bambú (lata)', 'despensa', 1.8, 'ud', 0, 'champiñones laminados o se puede omitir'],
  obleas_gyoza: ['Obleas para gyozas o wantán', 'congelados', 3, 'ud', 0, 'obleas finas de empanadilla'],
  daikon: ['Rábano daikon', 'fruteria', 3, 'kg', 0, 'nabo'],
  langostinos_crudos: ['Langostinos crudos', 'congelados', 10, 'kg'],
  levadura_panaderia: ['Levadura de panadería seca (sobre)', 'basicos', 0, 'ud', 1]
});

MC_ADD('cn', [
  {
    id: 'arroz-tres-delicias', n: 'Arroz salteado tres delicias', e: '🍚', tipo: 'cena', tags: ['rapida', 'niños'],
    ing: [['arroz', 300], ['huevo', 3], ['jamon', 100], ['guisantes', 150], ['zanahoria', 100], ['gambas', 150], ['salsa_soja', 30], ['aceite', 30], ['sal', 3]],
    m: {
      fuego: [30, ['Cuece el arroz y deja que se enfríe (o usa arroz del día anterior).', 'Haz una tortilla fina con los huevos y córtala en tiras.', 'Saltea zanahoria en dados, guisantes, gambas y jamón 5 min a fuego fuerte.', 'Añade el arroz y la soja, saltea 3 min y mezcla con la tortilla.']],
      robot: [30, ['Cuece el arroz en el cestillo con 1 l de agua: 15 min/100 °C/vel. 4. Reserva.', 'Cuaja los huevos batidos 4 min/100 °C/vel. 2 y reserva.', 'Sofríe zanahoria, guisantes, gambas y jamón con aceite 6 min/120 °C/giro inverso/vel. cuchara.', 'Mezcla con el arroz, el huevo y la soja en una sartén o en el vaso 2 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'pollo-agridulce', n: 'Pollo agridulce', e: '🍍', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['pollo_pechuga', 550], ['pimiento_rojo', 150], ['pimiento_verde', 100], ['cebolla', 100], ['pina', 1], ['tomate_frito', 60], ['vinagre', 40], ['azucar', 40], ['salsa_soja', 30], ['maicena', 40], ['arroz', 250], ['aceite', 40], ['sal', 3]],
    m: {
      fuego: [30, ['Cuece el arroz. Corta el pollo en dados, sálalo y rebózalo en maicena.', 'Dóralo en una sartén o wok con aceite y resérvalo.', 'Saltea pimientos y cebolla 4 min. Añade la piña, el tomate, el vinagre, el azúcar, la soja y un poco del jugo de la piña con 1 cucharadita de maicena.', 'Cuando espese, vuelve a poner el pollo y sirve con arroz.']],
      airfryer: [28, ['Reboza el pollo en maicena, úntalo con aceite y cocínalo 12 min a 200 °C.', 'Prepara la salsa con las verduras en sartén.', 'Mezcla con el pollo y sirve con arroz.']]
    }
  },
  {
    id: 'ternera-brocoli', n: 'Ternera con brócoli', e: '🥦', tipo: 'comida', tags: ['carne', 'rapida'],
    ing: [['ternera_filetes', 500], ['brocoli', 500], ['ajo', 2], ['jengibre', 15], ['salsa_soja', 60], ['azucar', 10], ['maicena', 15], ['arroz', 250], ['aceite', 30]],
    m: {
      fuego: [25, ['Cuece el arroz. Corta la ternera en tiras finas y mézclala con la maicena y la mitad de la soja.', 'Saltea el brócoli en ramitos 4 min con un poco de agua tapado. Resérvalo.', 'Saltea la ternera a fuego fuerte 2 min con ajo y jengibre rallados.', 'Añade el brócoli, el resto de la soja, el azúcar y 50 ml de agua. Remueve 1 min y sirve con arroz.']]
    }
  },
  {
    id: 'tallarines-verduras', n: 'Tallarines salteados con verduras', e: '🍜', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['noodles', 300], ['zanahoria', 120], ['pimiento_rojo', 120], ['repollo', 200], ['champinon', 150], ['cebolleta', 2], ['huevo', 2], ['salsa_soja', 50], ['jengibre', 10], ['ajo', 2], ['aceite', 30]],
    m: {
      fuego: [20, ['Cuece los noodles según el paquete y escúrrelos.', 'Saltea a fuego fuerte ajo, jengibre, zanahoria, pimiento, repollo y champiñones en tiras 5 min.', 'Empuja las verduras a un lado y cuaja los huevos batidos.', 'Añade los noodles y la soja, saltea 2 min y termina con cebolleta.']]
    }
  },
  {
    id: 'kung-pao', n: 'Pollo kung pao', e: '🥜', tipo: 'comida', tags: ['carne', 'rapida'],
    ing: [['pollo_pechuga', 550], ['cacahuetes', 60], ['pimiento_rojo', 150], ['cebolleta', 2], ['ajo', 2], ['jengibre', 10], ['salsa_soja', 50], ['vinagre', 20], ['azucar', 15], ['maicena', 15], ['arroz', 250], ['aceite', 30]],
    m: {
      fuego: [25, ['Cuece el arroz. Corta el pollo en dados y mézclalo con la maicena y un poco de soja.', 'Saltéalo en wok o sartén a fuego fuerte 5 min.', 'Añade pimiento, ajo, jengibre y cebolleta y saltea 2 min.', 'Agrega el resto de la soja, el vinagre, el azúcar y los cacahuetes. Remueve 1 min y sirve con arroz.']]
    }
  },
  {
    id: 'tofu-salteado', n: 'Tofu crujiente con verduras', e: '🥢', tipo: 'cena', tags: ['vegetariano', 'ligera'],
    ing: [['tofu', 400], ['brocoli', 300], ['pimiento_rojo', 120], ['zanahoria', 100], ['salsa_soja', 50], ['miel', 15], ['ajo', 2], ['jengibre', 10], ['maicena', 20], ['arroz', 200], ['aceite', 30]],
    m: {
      fuego: [30, ['Seca el tofu, córtalo en dados y rebózalo en maicena. Dóralo en sartén con aceite y resérvalo.', 'Saltea las verduras con ajo y jengibre 6 min.', 'Añade la soja y la miel, vuelve a poner el tofu y mezcla 1 min. Sirve con arroz.']],
      airfryer: [30, ['Reboza el tofu en maicena, úntalo con aceite y cocínalo 15 min a 200 °C.', 'Saltea las verduras en sartén con ajo, jengibre, soja y miel.', 'Mezcla con el tofu y sirve con arroz.']]
    }
  },
  /* ---- Tanda 1 ---- */
  {
    id: 'cn-pollo-almendras', n: 'Pollo con almendras', e: '🌰', tipo: 'comida', tags: ['carne', 'rapida', 'niños'],
    ing: [['pollo_pechuga', 550], ['almendras', 80], ['calabacin', 200], ['zanahoria', 120], ['cebolla', 100], ['salsa_soja', 50], ['maicena', 15], ['jengibre', 10], ['arroz_largo', 250], ['aceite', 30], ['sal', 2]],
    m: {
      fuego: [25, ['Cuece el arroz. Corta el pollo en dados y mézclalo con la maicena y la mitad de la soja.', 'Tuesta las almendras en el wok sin aceite 2 min y resérvalas.', 'Saltea el pollo con aceite a fuego fuerte 5 min y sácalo.', 'Saltea cebolla, zanahoria y calabacín en dados con el jengibre 4 min, vuelve a poner el pollo, añade el resto de la soja y 50 ml de agua y remueve 1 min. Termina con las almendras.']]
    }
  },
  {
    id: 'cn-pollo-limon', n: 'Pollo al limón', e: '🍋', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['pollo_pechuga', 600], ['limon', 3], ['huevo', 1], ['maicena', 100], ['azucar', 40], ['caldo_pollo', 150], ['arroz_largo', 250], ['aceite', 150], ['sal', 3]],
    m: {
      fuego: [35, ['Cuece el arroz. Corta el pollo en tiras, sálalo, pásalo por huevo batido y luego por maicena.', 'Fríelo en aceite caliente 4–5 min hasta que esté dorado y escúrrelo.', 'En un cazo, calienta el zumo de los limones, la ralladura de uno, el caldo y el azúcar. Espesa con 1 cucharada de maicena disuelta en agua.', 'Baña el pollo con la salsa y sirve con arroz.']],
      airfryer: [30, ['Reboza el pollo en huevo y maicena y pulverízalo con aceite.', 'Cocínalo 14 min a 200 °C, girándolo a mitad.', 'Prepara la salsa de limón en un cazo, baña el pollo y sirve con arroz.']]
    }
  },
  {
    id: 'cn-ternera-pimientos', n: 'Ternera con pimientos y salsa de ostras', e: '🫑', tipo: 'comida', tags: ['carne', 'rapida'],
    ing: [['ternera_filetes', 500], ['pimiento_verde', 200], ['pimiento_rojo', 200], ['cebolla', 150], ['salsa_ostras', 40], ['salsa_soja', 30], ['maicena', 15], ['ajo', 2], ['arroz_largo', 250], ['aceite', 30]],
    m: {
      fuego: [25, ['Cuece el arroz. Corta la ternera en tiras finas y mézclala con la maicena y la soja.', 'Saltéala a fuego muy fuerte 2 min y resérvala.', 'Saltea el ajo, la cebolla y los pimientos en tiras 4 min.', 'Vuelve a poner la ternera, añade la salsa de ostras y 50 ml de agua y remueve 1 min. Sirve con arroz.']]
    }
  },
  {
    id: 'cn-ternera-bambu-setas', n: 'Ternera con bambú y setas', e: '🎋', tipo: 'comida', tags: ['carne', 'rapida'],
    ing: [['ternera_filetes', 500], ['brotes_bambu', 1], ['setas_shiitake', 200], ['cebolleta', 2], ['salsa_ostras', 30], ['salsa_soja', 30], ['maicena', 15], ['jengibre', 10], ['arroz_largo', 250], ['aceite', 30]],
    m: {
      fuego: [25, ['Cuece el arroz. Corta la ternera en láminas y mézclala con la maicena y la soja.', 'Saltéala a fuego fuerte 2 min y resérvala.', 'Saltea el jengibre, las setas laminadas y el bambú escurrido 4 min.', 'Añade la ternera, la salsa de ostras y 50 ml de agua, remueve 1 min y termina con la cebolleta.']]
    }
  },
  {
    id: 'cn-mapo-tofu', n: 'Mapo tofu', e: '🌶️', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['tofu', 500], ['cerdo_picado', 200], ['miso', 30], ['pimenton_picante', 3], ['ajo', 3], ['jengibre', 10], ['cebolleta', 2], ['salsa_soja', 30], ['caldo_pollo', 250], ['maicena', 10], ['arroz', 250], ['aceite', 30]],
    m: {
      fuego: [25, ['Cuece el arroz. Corta el tofu en dados y escáldalo 2 min en agua con sal.', 'Sofríe la carne picada con aceite hasta que se dore. Añade el ajo, el jengibre, el miso y el pimentón y remueve 1 min.', 'Vierte el caldo y la soja, incorpora el tofu y cuece 5 min sin remover mucho.', 'Espesa con la maicena disuelta en agua y termina con cebolleta. Sirve con arroz.']],
      robot: [25, ['Pica ajo y jengibre 3 seg/vel. 5. Añade aceite y la carne y sofríe 5 min/120 °C/giro inverso/vel. cuchara.', 'Añade miso, pimentón, soja y caldo: 3 min/100 °C/giro inverso/vel. cuchara.', 'Incorpora el tofu y la maicena disuelta: 5 min/90 °C/giro inverso/vel. cuchara.', 'Sirve con arroz y cebolleta.']]
    }
  },
  {
    id: 'cn-dan-dan', n: 'Fideos dan dan', e: '🍜', tipo: 'comida', tags: ['carne', 'rapida'],
    ing: [['noodles', 350], ['cerdo_picado', 300], ['tahini', 40], ['salsa_soja', 50], ['vinagre_arroz', 15], ['pimenton_picante', 3], ['pak_choi', 300], ['ajo', 2], ['cacahuetes', 40], ['cebolleta', 2], ['aceite', 30]],
    m: {
      fuego: [25, ['Sofríe la carne picada con ajo y la mitad de la soja hasta que quede dorada y suelta.', 'Mezcla el tahini, el resto de la soja, el vinagre, el pimentón, 1 cucharada de aceite y 100 ml de agua caliente.', 'Cuece los noodles y, en el último minuto, el pak choi.', 'Reparte la salsa en los cuencos, añade los noodles, la carne, los cacahuetes picados y la cebolleta. Mezcla al comer.']]
    }
  },
  {
    id: 'cn-chow-mein-pollo', n: 'Chow mein de pollo', e: '🥡', tipo: 'cena', tags: ['carne', 'rapida', 'niños'],
    ing: [['noodles', 300], ['pollo_pechuga', 400], ['brotes_soja', 200], ['zanahoria', 100], ['repollo', 200], ['cebolleta', 2], ['salsa_soja', 50], ['salsa_ostras', 20], ['maicena', 10], ['aceite', 30]],
    m: {
      fuego: [25, ['Cuece los noodles, escúrrelos y pásalos por agua fría.', 'Corta el pollo en tiras, mézclalo con la maicena y saltéalo 4 min. Resérvalo.', 'Saltea zanahoria y repollo en tiras 3 min, añade los noodles y dóralos un poco.', 'Incorpora el pollo, los brotes de soja, la soja y la salsa de ostras, saltea 2 min y termina con cebolleta.']]
    }
  },
  {
    id: 'cn-tallarines-gambas', n: 'Tallarines chinos con gambas', e: '🍤', tipo: 'cena', tags: ['pescado', 'rapida'],
    ing: [['noodles', 300], ['gambas', 300], ['huevo', 2], ['pimiento_rojo', 120], ['calabacin', 150], ['cebolleta', 2], ['ajo', 2], ['jengibre', 10], ['salsa_soja', 50], ['aceite', 30]],
    m: {
      fuego: [20, ['Cuece los noodles y escúrrelos.', 'Saltea ajo y jengibre, añade las gambas y saltéalas 2 min. Resérvalas.', 'Saltea pimiento y calabacín en tiras 3 min, haz a un lado y cuaja los huevos batidos.', 'Añade noodles, gambas y soja, saltea 2 min y termina con cebolleta.']]
    }
  },
  {
    id: 'cn-jiaozi', n: 'Jiaozi de cerdo y col', e: '🥟', tipo: 'cena', tags: ['carne'],
    ing: [['obleas_gyoza', 2], ['cerdo_picado', 400], ['col_china', 250], ['cebolleta', 2], ['jengibre', 15], ['salsa_soja', 50], ['aceite_sesamo', 15], ['vinagre_arroz', 30], ['sal', 4]],
    m: {
      fuego: [50, ['Pica la col muy fina, sálala, déjala 10 min y escúrrela apretando.', 'Mezcla la carne con la col, la cebolleta, el jengibre rallado, 20 ml de soja y el aceite de sésamo.', 'Pon una cucharadita de relleno en cada oblea, moja el borde y ciérrala en media luna.', 'Cuécelos en agua hirviendo por tandas 5–6 min, hasta que floten y la carne esté hecha. Sirve con soja y vinagre.']]
    }
  },
  {
    id: 'cn-wantan-sopa', n: 'Sopa de wantán', e: '🥣', tipo: 'cena', tags: ['carne', 'ligera'],
    ing: [['obleas_gyoza', 1], ['cerdo_picado', 250], ['gambas', 150], ['caldo_pollo', 1500], ['pak_choi', 250], ['cebolleta', 2], ['jengibre', 15], ['salsa_soja', 40], ['aceite_sesamo', 10]],
    m: {
      fuego: [40, ['Pica las gambas y mézclalas con la carne, la mitad de la cebolleta, el jengibre rallado y 15 ml de soja.', 'Pon una cucharadita de relleno en cada oblea y ciérrala juntando las puntas.', 'Calienta el caldo con el resto de la soja. Cuece los wantanes 4–5 min y añade el pak choi el último minuto.', 'Sirve con unas gotas de aceite de sésamo y cebolleta.']]
    }
  },
  {
    id: 'cn-sopa-agripicante', n: 'Sopa agripicante', e: '🌶️', tipo: 'cena', tags: ['carne', 'ligera', 'rapida'],
    ing: [['caldo_pollo', 1500], ['cerdo_lomo', 150], ['tofu', 200], ['setas_shiitake', 150], ['brotes_bambu', 1], ['huevo', 2], ['salsa_soja', 40], ['vinagre_arroz', 50], ['pimienta', 3], ['maicena', 30], ['cebolleta', 2]],
    m: {
      fuego: [25, ['Lleva el caldo a ebullición con la soja.', 'Añade el cerdo en tiras finas, las setas laminadas, el bambú y el tofu en bastones. Cuece 5 min.', 'Espesa con la maicena disuelta en agua y añade el vinagre y abundante pimienta.', 'Vierte los huevos batidos en hilo removiendo despacio y sirve con cebolleta.']],
      robot: [25, ['Pon caldo, soja, setas y bambú en el vaso: 8 min/100 °C/giro inverso/vel. cuchara.', 'Añade el cerdo, el tofu y la maicena disuelta: 5 min/100 °C/giro inverso/vel. cuchara.', 'Añade vinagre y pimienta y vierte el huevo batido por la boca: 1 min/90 °C/giro inverso/vel. cuchara.', 'Sirve con cebolleta.']]
    }
  },
  {
    id: 'cn-sopa-maiz-pollo', n: 'Sopa de maíz con pollo', e: '🌽', tipo: 'cena', tags: ['carne', 'ligera', 'rapida', 'niños'],
    ing: [['caldo_pollo', 1200], ['maiz', 2], ['pollo_pechuga', 200], ['huevo', 2], ['jengibre', 10], ['maicena', 30], ['cebolleta', 1], ['sal', 3]],
    m: {
      fuego: [20, ['Tritura la mitad del maíz con un poco de caldo.', 'Calienta el resto del caldo con el jengibre, el maíz triturado y el entero. Añade el pollo en dados pequeños y cuece 6 min.', 'Espesa con la maicena disuelta en agua y sala.', 'Vierte los huevos batidos en hilo removiendo y sirve con cebolleta.']],
      robot: [20, ['Tritura la mitad del maíz con 200 ml de caldo 20 seg/vel. 8.', 'Añade el resto del caldo, el maíz y el jengibre: 6 min/100 °C/vel. 1.', 'Añade el pollo y la maicena disuelta: 6 min/100 °C/giro inverso/vel. cuchara.', 'Vierte el huevo batido por la boca: 1 min/90 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'cn-char-siu', n: 'Cerdo char siu con arroz', e: '🍖', tipo: 'comida', tags: ['carne'],
    ing: [['cerdo_solomillo', 700], ['salsa_hoisin', 60], ['salsa_soja', 40], ['miel', 40], ['ajo', 2], ['pimenton', 3], ['arroz_largo', 250], ['pak_choi', 400], ['aceite', 15]],
    m: {
      horno: [45, ['Mezcla hoisin, soja, miel, ajo rallado y pimentón. Marina el solomillo al menos 20 min.', 'Hornéalo a 200 °C 25 min, pintándolo con la marinada a mitad.', 'Cuece el arroz y saltea el pak choi con un poco de aceite.', 'Deja reposar la carne 5 min, córtala en lonchas y sirve.']],
      airfryer: [40, ['Marina el solomillo como en la receta de horno.', 'Cocínalo 20 min a 190 °C, pintándolo y girándolo a mitad.', 'Sirve en lonchas con arroz y pak choi salteado.']]
    }
  },
  {
    id: 'cn-pato-laqueado', n: 'Pato laqueado casero con tortitas', e: '🦆', tipo: 'cena', tags: ['carne'],
    ing: [['magret', 700], ['salsa_hoisin', 80], ['miel', 20], ['salsa_soja', 20], ['canela', 1], ['tortillas', 12], ['pepino', 250], ['cebolleta', 3]],
    m: {
      fuego: [35, ['Haz cortes en rombo en la grasa de los magrets y úntalos con soja, miel y canela.', 'Cocínalos en sartén fría por la grasa 8 min a fuego medio y 4 min por la carne. Reposa 5 min.', 'Corta el pepino y la cebolleta en bastones finos y calienta las tortillas.', 'Corta el pato en lonchas finas y sirve para montar las tortitas con hoisin, pepino y cebolleta.']],
      horno: [40, ['Unta los magrets como en la receta tradicional y márcalos 6 min por la grasa en sartén.', 'Hornéalos a 200 °C 10 min y deja reposar.', 'Sirve en lonchas con las tortillas calientes, hoisin, pepino y cebolleta.']]
    }
  },
  {
    id: 'cn-chop-suey-pollo', n: 'Chop suey de pollo', e: '🥢', tipo: 'cena', tags: ['carne', 'rapida', 'ligera'],
    ing: [['pollo_pechuga', 450], ['brotes_soja', 250], ['col_china', 250], ['zanahoria', 120], ['apio', 100], ['champinon', 150], ['salsa_soja', 50], ['maicena', 15], ['jengibre', 10], ['arroz_largo', 200], ['aceite', 30]],
    m: {
      fuego: [25, ['Cuece el arroz. Corta el pollo en tiras y mézclalo con la mitad de la maicena y un poco de soja.', 'Saltea el pollo 4 min y resérvalo.', 'Saltea jengibre, zanahoria, apio, champiñones y col en tiras 4 min a fuego fuerte.', 'Añade los brotes, el pollo, el resto de la soja y la maicena disuelta en 80 ml de agua. Remueve 1 min y sirve.']]
    }
  },
  {
    id: 'cn-foo-yung', n: 'Tortilla foo yung de gambas', e: '🍳', tipo: 'cena', tags: ['pescado', 'rapida', 'ligera'],
    ing: [['huevo', 8], ['gambas', 250], ['brotes_soja', 150], ['cebolleta', 2], ['champinon', 100], ['salsa_soja', 40], ['salsa_ostras', 20], ['maicena', 10], ['aceite', 30], ['sal', 2]],
    m: {
      fuego: [25, ['Saltea las gambas troceadas y los champiñones 3 min y deja templar.', 'Bate los huevos con sal y mézclalos con las gambas, los champiñones, los brotes y la cebolleta.', 'Haz tortillas pequeñas en sartén con aceite, 2 min por lado.', 'Calienta la soja, la salsa de ostras y 120 ml de agua con la maicena hasta que espese y vierte sobre las tortillas.']]
    }
  },
  {
    id: 'cn-tomate-huevo', n: 'Tomate salteado con huevo', e: '🍅', tipo: 'cena', tags: ['vegetariano', 'rapida', 'ligera'],
    ing: [['tomate', 600], ['huevo', 6], ['cebolleta', 2], ['azucar', 10], ['salsa_soja', 15], ['arroz_largo', 250], ['aceite', 30], ['sal', 3]],
    m: {
      fuego: [20, ['Cuece el arroz. Bate los huevos con sal y cuájalos en el wok con aceite, dejándolos jugosos. Resérvalos.', 'Saltea el tomate en gajos 3–4 min hasta que suelte jugo.', 'Añade el azúcar, la soja y 50 ml de agua y cuece 2 min.', 'Vuelve a poner el huevo, mezcla con cuidado y sirve con cebolleta y arroz.']]
    }
  },
  {
    id: 'cn-berenjenas-sichuan', n: 'Berenjenas al estilo Sichuan', e: '🍆', tipo: 'cena', tags: ['vegetariano'],
    ing: [['berenjena', 800], ['ajo', 4], ['jengibre', 15], ['cebolleta', 3], ['salsa_soja', 50], ['vinagre_arroz', 30], ['azucar', 20], ['pimenton_picante', 3], ['maicena', 10], ['arroz', 250], ['aceite', 60]],
    m: {
      fuego: [35, ['Cuece el arroz. Corta las berenjenas en bastones y saltéalas en aceite a fuego medio-alto 10 min hasta que estén tiernas.', 'Aparta las berenjenas y sofríe el ajo, el jengibre y la parte blanca de la cebolleta 1 min.', 'Añade la soja, el vinagre, el azúcar, el pimentón y la maicena disuelta en 100 ml de agua.', 'Vuelve a poner las berenjenas, cocina 2 min hasta que se glaseen y sirve con cebolleta y arroz.']],
      airfryer: [30, ['Unta las berenjenas en bastones con aceite y cocínalas 15 min a 190 °C.', 'Prepara la salsa en sartén con ajo, jengibre, soja, vinagre, azúcar, pimentón y maicena.', 'Mezcla con las berenjenas y sirve con arroz.']],
      horno: [40, ['Hornea las berenjenas en bastones con aceite 25 min a 210 °C.', 'Prepara la salsa en sartén y mézclala con las berenjenas.', 'Sirve con cebolleta y arroz.']]
    }
  },
  {
    id: 'cn-judias-carne', n: 'Judías verdes salteadas con carne picada', e: '🫛', tipo: 'comida', tags: ['carne', 'rapida'],
    ing: [['judias_verdes', 600], ['cerdo_picado', 250], ['ajo', 3], ['jengibre', 10], ['guindilla', 2], ['salsa_soja', 40], ['azucar', 5], ['arroz_largo', 250], ['aceite', 40]],
    m: {
      fuego: [25, ['Cuece el arroz. Saltea las judías enteras en el wok con aceite a fuego fuerte 7–8 min, hasta que se arruguen. Resérvalas.', 'En el mismo wok, sofríe la carne picada hasta que se dore.', 'Añade ajo, jengibre y guindilla, y luego la soja y el azúcar.', 'Vuelve a poner las judías, saltea 2 min y sirve con arroz.']],
      airfryer: [25, ['Unta las judías con aceite y cocínalas 10 min a 200 °C.', 'Sofríe la carne en sartén con ajo, jengibre, guindilla, soja y azúcar.', 'Mezcla con las judías y sirve con arroz.']]
    }
  },
  {
    id: 'cn-pollo-tres-tazas', n: 'Pollo de las tres tazas', e: '🍗', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_muslos', 800], ['aceite_sesamo', 30], ['salsa_soja', 60], ['vino_blanco', 60], ['azucar', 15], ['ajo', 8], ['jengibre', 30], ['albahaca', 1], ['arroz', 250]],
    m: {
      fuego: [40, ['Cuece el arroz. Dora en una cazuela con el aceite de sésamo el jengibre en láminas y los ajos enteros 2 min.', 'Añade el pollo en trozos y dóralo 6 min.', 'Vierte la soja, el vino y el azúcar, tapa y cuece 15 min a fuego suave.', 'Destapa, reduce la salsa hasta que brille y añade las hojas de albahaca al final.']],
      robot: [40, ['Pon aceite de sésamo, ajos y jengibre: 3 min/120 °C/vel. cuchara.', 'Añade el pollo, soja, vino y azúcar: 22 min/100 °C/giro inverso/vel. cuchara, sin cubilete.', 'Pasa a una sartén para reducir la salsa 3 min y añade la albahaca. Sirve con arroz.']]
    }
  },
  {
    id: 'cn-pollo-anacardos', n: 'Pollo con anacardos', e: '🥜', tipo: 'comida', tags: ['carne', 'rapida'],
    ing: [['pollo_pechuga', 550], ['anacardos', 100], ['pimiento_rojo', 150], ['pimiento_verde', 100], ['cebolla', 100], ['salsa_soja', 40], ['salsa_ostras', 30], ['maicena', 15], ['ajo', 2], ['arroz_largo', 250], ['aceite', 30]],
    m: {
      fuego: [25, ['Cuece el arroz. Tuesta los anacardos en el wok sin aceite y resérvalos.', 'Mezcla el pollo en dados con la maicena y un poco de soja y saltéalo 5 min.', 'Añade el ajo, la cebolla y los pimientos en cuadrados y saltea 3 min.', 'Agrega el resto de la soja, la salsa de ostras, 50 ml de agua y los anacardos. Remueve 1 min y sirve.']]
    }
  },
  /* ---- Tanda 2 ---- */
  {
    id: 'cn-costillas-agridulces', n: 'Costillas de cerdo agridulces', e: '🍖', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['cerdo_costillas', 1000], ['vinagre_arroz', 60], ['azucar', 60], ['salsa_soja', 50], ['jengibre', 15], ['cebolleta', 2], ['sesamo', 10], ['arroz_largo', 250], ['aceite', 20]],
    m: {
      fuego: [60, ['Corta las costillas en trozos, cúbrelas de agua fría, lleva a ebullición 3 min y escúrrelas.', 'Dóralas en una cazuela con aceite y el jengibre en láminas.', 'Añade la soja, el vinagre, el azúcar y agua hasta casi cubrir. Cuece tapado 35 min.', 'Destapa y reduce a fuego fuerte hasta que la salsa caramelice. Sirve con sésamo, cebolleta y arroz.']],
      robot: [60, ['Pon las costillas, el jengibre, la soja, el vinagre, el azúcar y 300 ml de agua en el vaso: 40 min/100 °C/giro inverso/vel. cuchara.', 'Pasa las costillas con la salsa a una sartén y reduce 5 min a fuego fuerte hasta que se glaseen.', 'Sirve con sésamo, cebolleta y arroz.']],
      horno: [70, ['Cuece las costillas 30 min en agua con jengibre y escúrrelas.', 'Mezcla soja, vinagre, azúcar y 50 ml de agua, baña las costillas y hornéalas a 200 °C 25 min, dándoles la vuelta y pintándolas a mitad.', 'Sirve con sésamo, cebolleta y arroz.']]
    }
  },
  {
    id: 'cn-hong-shao-rou', n: 'Panceta estofada en salsa roja (hong shao rou)', e: '🥘', tipo: 'comida', tags: ['carne'],
    ing: [['panceta_fresca', 800], ['salsa_soja', 70], ['azucar_moreno', 40], ['vino_blanco', 80], ['anis_estrellado', 2], ['canela', 1], ['jengibre', 20], ['cebolleta', 2], ['arroz', 250], ['pak_choi', 400]],
    m: {
      fuego: [90, ['Corta la panceta en dados grandes, escáldala 3 min y escúrrela.', 'Carameliza el azúcar en una cazuela, añade la panceta y dórala bien.', 'Añade la soja, el vino, el anís, la canela, el jengibre y agua hasta cubrir. Cuece tapado a fuego suave 60 min.', 'Destapa y reduce hasta que la salsa esté espesa y brillante. Sirve con arroz y pak choi escaldado.']],
      robot: [80, ['Escalda la panceta 3 min en agua y escúrrela. Dórala en sartén con el azúcar.', 'Pásala al vaso con soja, vino, anís, canela, jengibre y 400 ml de agua: 60 min/100 °C/giro inverso/vel. cuchara, sin cubilete.', 'Reduce la salsa en sartén 5 min y sirve con arroz y pak choi.']]
    }
  },
  {
    id: 'cn-cerdo-dos-veces', n: 'Cerdo dos veces cocinado con col', e: '🥬', tipo: 'comida', tags: ['carne'],
    ing: [['panceta_fresca', 500], ['repollo', 400], ['pimiento_verde', 150], ['puerro', 1], ['miso', 30], ['pimenton_picante', 3], ['salsa_soja', 30], ['azucar', 5], ['ajo', 3], ['arroz', 250], ['aceite', 15]],
    m: {
      fuego: [50, ['Cuece la panceta entera en agua 20 min, déjala templar y córtala en lonchas finas.', 'Saltea las lonchas en el wok con poco aceite hasta que se doren y se ricen.', 'Añade el ajo, el miso y el pimentón y remueve 1 min.', 'Incorpora el repollo en trozos, el pimiento y el puerro, la soja y el azúcar y saltea 4 min a fuego fuerte. Sirve con arroz.']]
    }
  },
  {
    id: 'cn-pollo-jengibre-cebolleta', n: 'Pollo cocido con salsa de jengibre y cebolleta', e: '🐔', tipo: 'comida', tags: ['carne', 'ligera'],
    ing: [['pollo_muslos', 900], ['jengibre', 40], ['cebolleta', 4], ['aceite_girasol', 60], ['salsa_soja', 30], ['arroz', 250], ['pepino', 250], ['sal', 6]],
    m: {
      fuego: [45, ['Cuece los muslos en agua con sal, unas láminas de jengibre y una cebolleta 25 min a fuego suave. Usa ese caldo para cocer el arroz.', 'Pica muy fino el resto del jengibre y de la cebolleta y ponlos en un cuenco con una pizca de sal.', 'Calienta el aceite hasta que humee y viértelo sobre el jengibre y la cebolleta.', 'Corta el pollo en trozos y sirve con la salsa, la soja, el arroz y el pepino en rodajas.']],
      robot: [45, ['Pon los muslos con 1,2 l de agua, sal, jengibre y una cebolleta en el Varoma o el vaso: 30 min/Varoma/vel. 1.', 'Cuece el arroz en el caldo en el cestillo: 15 min/100 °C/vel. 4.', 'Prepara la salsa de jengibre y cebolleta con aceite caliente y sirve con el pollo y pepino.']]
    }
  },
  {
    id: 'cn-pollo-vapor-setas', n: 'Pollo al vapor con setas', e: '🍄', tipo: 'cena', tags: ['carne', 'ligera'],
    ing: [['pollo_muslos', 700], ['setas_shiitake', 200], ['jengibre', 15], ['salsa_soja', 40], ['salsa_ostras', 20], ['maicena', 10], ['cebolleta', 2], ['aceite_sesamo', 10], ['arroz', 250]],
    m: {
      fuego: [40, ['Corta el pollo deshuesado en trozos y mézclalo con las setas laminadas, el jengibre en tiras, la soja, la salsa de ostras, la maicena y el aceite de sésamo. Reposa 15 min.', 'Extiéndelo en un plato hondo que quepa en la vaporera o en una olla con rejilla.', 'Cuécelo al vapor tapado 18–20 min, hasta que el pollo esté hecho.', 'Sirve con cebolleta y arroz.']],
      robot: [40, ['Marina el pollo con las setas y la salsa 15 min.', 'Pon 600 ml de agua en el vaso, el arroz en el cestillo y el pollo en el Varoma: 25 min/Varoma/vel. 1.', 'Sirve con cebolleta.']]
    }
  },
  {
    id: 'cn-lubina-vapor', n: 'Lubina al vapor con jengibre y cebolleta', e: '🐟', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['lubina', 1000], ['jengibre', 30], ['cebolleta', 3], ['salsa_soja', 50], ['azucar', 5], ['aceite_girasol', 40], ['arroz', 250], ['pak_choi', 300]],
    m: {
      fuego: [25, ['Pide la lubina limpia, haz unos cortes en la piel y rellénala con láminas de jengibre.', 'Cuécela al vapor 10–12 min según el grosor.', 'Calienta la soja con el azúcar y 30 ml de agua y viértela sobre el pescado. Cubre con cebolleta y jengibre en tiras finas.', 'Calienta el aceite hasta que humee y échalo por encima. Sirve con arroz y pak choi escaldado.']],
      horno: [30, ['Pon la lubina con jengibre sobre papel de aluminio, riégala con la soja y 50 ml de agua y cierra un paquete.', 'Hornea 18 min a 200 °C.', 'Abre, cubre con cebolleta y jengibre y riega con aceite muy caliente. Sirve con arroz y pak choi.']],
      robot: [30, ['Pon 600 ml de agua en el vaso y el arroz en el cestillo. Coloca los lomos de lubina con jengibre en el Varoma.', 'Cuece 18 min/Varoma/vel. 1.', 'Riega el pescado con la soja, la cebolleta y aceite muy caliente.']]
    }
  },
  {
    id: 'cn-dorada-hong-shao', n: 'Dorada estofada en salsa de soja', e: '🐠', tipo: 'comida', tags: ['pescado'],
    ing: [['dorada', 1000], ['salsa_soja', 50], ['vino_blanco', 50], ['azucar', 15], ['vinagre_arroz', 15], ['jengibre', 20], ['ajo', 4], ['cebolleta', 3], ['maicena', 20], ['arroz', 250], ['aceite', 50]],
    m: {
      fuego: [35, ['Seca las doradas limpias, haz cortes en la piel y pásalas por maicena.', 'Fríelas en una sartén grande con aceite 3–4 min por lado y resérvalas.', 'Sofríe ajo, jengibre y la parte blanca de la cebolleta. Añade soja, vino, azúcar, vinagre y 200 ml de agua.', 'Vuelve a poner el pescado y cuécelo 8 min bañándolo con la salsa. Sirve con cebolleta y arroz.']]
    }
  },
  {
    id: 'cn-gambas-brocoli', n: 'Gambas con brócoli y ajo', e: '🦐', tipo: 'cena', tags: ['pescado', 'rapida', 'ligera'],
    ing: [['gambas', 400], ['brocoli', 500], ['ajo', 4], ['jengibre', 10], ['salsa_ostras', 30], ['salsa_soja', 20], ['maicena', 10], ['arroz_largo', 200], ['aceite', 30]],
    m: {
      fuego: [20, ['Cuece el arroz. Escalda el brócoli en ramitos 2 min y escúrrelo.', 'Saltea el ajo y el jengibre en el wok, añade las gambas y saltéalas 2 min.', 'Incorpora el brócoli, la salsa de ostras, la soja y la maicena disuelta en 80 ml de agua.', 'Remueve 1 min hasta que la salsa brille y sirve con arroz.']],
      robot: [25, ['Pon 600 ml de agua en el vaso, el arroz en el cestillo y el brócoli y las gambas en el Varoma: 18 min/Varoma/vel. 1.', 'Saltea ajo y jengibre en sartén con la salsa de ostras, la soja y la maicena disuelta.', 'Mezcla con las gambas y el brócoli y sirve con arroz.']]
    }
  },
  {
    id: 'cn-calamar-pimiento', n: 'Calamar salteado con pimientos y soja', e: '🦑', tipo: 'cena', tags: ['pescado', 'rapida'],
    ing: [['calamar', 600], ['pimiento_rojo', 150], ['pimiento_verde', 150], ['cebolla', 100], ['ajo', 3], ['jengibre', 10], ['salsa_soja', 40], ['salsa_ostras', 20], ['arroz_largo', 250], ['aceite', 30]],
    m: {
      fuego: [20, ['Cuece el arroz. Corta el calamar en anillas o tiras y haz cortes en rombo si es grueso.', 'Saltea los pimientos y la cebolla en tiras 3 min a fuego fuerte y resérvalos.', 'Saltea el calamar con ajo y jengibre 2 min, sin pasarte para que no se endurezca.', 'Vuelve a poner las verduras, añade soja y salsa de ostras, remueve 1 min y sirve.']]
    }
  },
  {
    id: 'cn-almejas-jengibre', n: 'Almejas salteadas con jengibre y cebolleta', e: '🐚', tipo: 'cena', tags: ['pescado', 'rapida', 'ligera'],
    ing: [['almejas', 1000], ['jengibre', 20], ['ajo', 3], ['cebolleta', 3], ['guindilla', 1], ['salsa_soja', 30], ['vino_blanco', 60], ['maicena', 5], ['arroz', 250], ['aceite', 30]],
    m: {
      fuego: [25, ['Cuece el arroz. Deja las almejas en agua con sal 30 min para que suelten la arena.', 'Saltea jengibre, ajo, guindilla y la parte blanca de la cebolleta 1 min.', 'Añade las almejas y el vino, tapa y cuece 3–4 min hasta que se abran.', 'Agrega la soja y la maicena disuelta en un poco de agua, remueve 1 min y termina con cebolleta.']]
    }
  },
  {
    id: 'cn-chow-fun-ternera', n: 'Fideos de arroz anchos con ternera (chow fun)', e: '🍜', tipo: 'comida', tags: ['carne', 'rapida'],
    ing: [['fideos_arroz', 300], ['ternera_filetes', 400], ['brotes_soja', 200], ['cebolla', 100], ['cebolleta', 3], ['salsa_soja', 60], ['azucar', 5], ['maicena', 10], ['aceite', 40]],
    m: {
      fuego: [25, ['Hidrata o cuece los fideos según el paquete y escúrrelos bien.', 'Corta la ternera en tiras, mézclala con la maicena y un poco de soja y saltéala 2 min a fuego muy fuerte. Resérvala.', 'Saltea la cebolla en juliana 2 min, añade los fideos y la soja con el azúcar y saltéalos sin romperlos.', 'Incorpora la ternera, los brotes y la cebolleta en trozos y saltea 1 min más.']]
    }
  },
  {
    id: 'cn-fideos-singapur', n: 'Fideos de arroz al curry estilo Singapur', e: '🍛', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['fideos_arroz', 250], ['gambas', 200], ['cerdo_lomo', 200], ['huevo', 2], ['pimiento_rojo', 120], ['cebolla', 100], ['brotes_soja', 150], ['curry', 10], ['salsa_soja', 40], ['aceite', 40]],
    m: {
      fuego: [25, ['Hidrata los fideos de arroz en agua caliente según el paquete y escúrrelos.', 'Cuaja los huevos batidos en tortilla fina y córtala en tiras.', 'Saltea el cerdo en tiras y las gambas 3 min. Añade la cebolla y el pimiento y saltea 2 min.', 'Añade los fideos, el curry, la soja y 50 ml de agua, saltea 2 min y mezcla con los brotes y la tortilla.']]
    }
  },
  {
    id: 'cn-sopa-fideos-ternera', n: 'Sopa de fideos con ternera estofada', e: '🍲', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_guisar', 600], ['noodles', 300], ['caldo_carne', 1500], ['salsa_soja', 60], ['anis_estrellado', 2], ['canela', 1], ['jengibre', 20], ['ajo', 3], ['pak_choi', 300], ['tomate', 200], ['cebolleta', 2], ['aceite', 15]],
    m: {
      fuego: [120, ['Dora la ternera en dados con aceite, el jengibre y el ajo.', 'Añade el tomate picado, la soja, el anís, la canela y el caldo. Cuece tapado a fuego suave 90 min.', 'Cuece los noodles aparte y el pak choi el último minuto.', 'Reparte los noodles en cuencos y cubre con la ternera, el caldo, el pak choi y la cebolleta.']],
      robot: [80, ['Pica ajo y jengibre 3 seg/vel. 5 y sofríe con aceite 3 min/120 °C/vel. 1.', 'Añade la ternera, el tomate, la soja, las especias y el caldo: 70 min/100 °C/giro inverso/vel. cuchara.', 'Cuece los noodles y el pak choi aparte y sirve con el caldo y la carne.']]
    }
  },
  {
    id: 'cn-fideos-sesamo-frios', n: 'Fideos fríos con salsa de sésamo y pollo', e: '🥒', tipo: 'comida', tags: ['carne', 'rapida'],
    ing: [['noodles', 300], ['pollo_pechuga', 300], ['pepino', 250], ['zanahoria', 100], ['tahini', 60], ['salsa_soja', 50], ['vinagre_arroz', 20], ['azucar', 10], ['ajo', 1], ['sesamo', 10], ['aceite_sesamo', 15]],
    m: {
      fuego: [25, ['Cuece el pollo en agua con sal 12 min, deja enfriar y desmígalo.', 'Cuece los noodles, enfríalos bajo el grifo y mézclalos con el aceite de sésamo.', 'Mezcla el tahini con la soja, el vinagre, el azúcar, el ajo rallado y agua hasta tener una salsa cremosa.', 'Sirve los fideos con pepino y zanahoria en tiras, el pollo, la salsa y sésamo.']],
      sin: [15, ['Usa pollo asado ya cocinado y noodles precocidos.', 'Prepara la salsa de tahini, soja, vinagre, azúcar, ajo y agua.', 'Mezcla con pepino y zanahoria en tiras y termina con sésamo.']]
    }
  },
  {
    id: 'cn-zha-jiang-mian', n: 'Fideos con salsa de cerdo y soja (zha jiang mian)', e: '🍝', tipo: 'comida', tags: ['carne', 'rapida'],
    ing: [['noodles', 350], ['cerdo_picado', 400], ['miso', 50], ['salsa_hoisin', 40], ['salsa_soja', 20], ['ajo', 2], ['jengibre', 10], ['pepino', 250], ['cebolleta', 2], ['aceite', 20]],
    m: {
      fuego: [25, ['Sofríe la carne picada con aceite hasta que suelte la grasa y se dore.', 'Añade ajo y jengibre, después el miso, la hoisin, la soja y 150 ml de agua. Cuece 8 min a fuego suave.', 'Cuece los noodles y escúrrelos.', 'Sirve los fideos con la salsa por encima, pepino en bastones finos y cebolleta.']],
      robot: [25, ['Pica ajo y jengibre 3 seg/vel. 5. Añade aceite y la carne: 6 min/120 °C/giro inverso/vel. cuchara.', 'Añade miso, hoisin, soja y 150 ml de agua: 10 min/100 °C/giro inverso/vel. cuchara.', 'Sirve sobre los noodles cocidos con pepino y cebolleta.']]
    }
  },
  {
    id: 'cn-congee-pollo', n: 'Congee de pollo y jengibre', e: '🥣', tipo: 'cena', tags: ['carne', 'ligera'],
    ing: [['arroz', 200], ['caldo_pollo', 2000], ['pollo_pechuga', 300], ['jengibre', 25], ['cebolleta', 3], ['salsa_soja', 30], ['aceite_sesamo', 10], ['sal', 3]],
    m: {
      fuego: [70, ['Lava el arroz y ponlo en una olla con el caldo y la mitad del jengibre en láminas.', 'Cuece a fuego suave 50–60 min removiendo de vez en cuando, hasta que el arroz se deshaga en una crema.', 'Añade el pollo en tiras finas los últimos 8 min.', 'Sirve con jengibre en tiras finas, cebolleta, soja y unas gotas de aceite de sésamo.']],
      robot: [50, ['Pon el arroz, el caldo y el jengibre en el vaso: 40 min/100 °C/giro inverso/vel. cuchara.', 'Añade el pollo en tiras: 8 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con cebolleta, soja y aceite de sésamo.']]
    }
  },
  {
    id: 'cn-tofu-shiitake', n: 'Tofu estofado con setas shiitake', e: '🍄', tipo: 'cena', tags: ['vegetariano', 'ligera', 'rapida'],
    ing: [['tofu', 500], ['setas_shiitake', 250], ['pak_choi', 300], ['ajo', 2], ['jengibre', 10], ['salsa_soja', 50], ['azucar', 5], ['maicena', 25], ['caldo_verduras', 250], ['arroz', 200], ['aceite', 40]],
    m: {
      fuego: [30, ['Cuece el arroz. Corta el tofu en dados, pásalo por maicena y dóralo en sartén. Resérvalo.', 'Saltea ajo, jengibre y las setas laminadas 3 min.', 'Añade el caldo, la soja y el azúcar, incorpora el tofu y cuece 5 min. Añade el pak choi los últimos 2 min.', 'Espesa con un poco de maicena disuelta si hace falta y sirve con arroz.']]
    }
  },
  {
    id: 'cn-pollo-sesamo', n: 'Pollo al sésamo con miel', e: '🍯', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['pollo_pechuga', 600], ['maicena', 80], ['huevo', 1], ['miel', 50], ['salsa_soja', 50], ['vinagre_arroz', 15], ['ajo', 2], ['sesamo', 20], ['brocoli', 300], ['arroz_largo', 250], ['aceite', 150]],
    m: {
      fuego: [35, ['Cuece el arroz y el brócoli. Corta el pollo en dados, pásalo por huevo y maicena.', 'Fríelo en aceite caliente 4–5 min y escúrrelo.', 'En una sartén, calienta la miel, la soja, el vinagre y el ajo rallado hasta que burbujee.', 'Añade el pollo, mezcla hasta que quede glaseado y espolvorea el sésamo.']],
      airfryer: [30, ['Reboza el pollo en huevo y maicena y pulverízalo con aceite.', 'Cocínalo 14 min a 200 °C, girándolo a mitad.', 'Glaséalo en sartén con la salsa de miel y soja y espolvorea sésamo. Sirve con arroz y brócoli.']]
    }
  },
  {
    id: 'cn-ternera-jengibre', n: 'Ternera al jengibre con cebolleta', e: '🥩', tipo: 'comida', tags: ['carne', 'rapida'],
    ing: [['ternera_filetes', 500], ['jengibre', 40], ['cebolleta', 5], ['salsa_soja', 40], ['salsa_ostras', 20], ['azucar', 5], ['maicena', 15], ['arroz_largo', 250], ['aceite', 30]],
    m: {
      fuego: [20, ['Cuece el arroz. Corta la ternera en láminas finas y mézclala con la maicena y la mitad de la soja.', 'Saltéala a fuego muy fuerte 2 min y resérvala.', 'Saltea el jengibre en tiras finas 1 min y añade las cebolletas en trozos de 4 cm.', 'Vuelve a poner la ternera con el resto de la soja, la salsa de ostras y el azúcar. Remueve 1 min y sirve.']]
    }
  },
  {
    id: 'cn-rollitos-primavera', n: 'Rollitos de primavera al horno', e: '🌯', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['masa_filo', 1], ['cerdo_picado', 250], ['repollo', 250], ['zanahoria', 150], ['brotes_soja', 150], ['setas_shiitake', 100], ['salsa_soja', 40], ['jengibre', 10], ['aceite', 40], ['lechuga', 1]],
    m: {
      horno: [45, ['Saltea la carne con jengibre, añade repollo, zanahoria y setas en tiras finas y cocina 5 min. Agrega los brotes y la soja y deja enfriar.', 'Corta la masa filo en rectángulos, pon dos capas pintadas de aceite y enrolla el relleno cerrando los laterales.', 'Pinta los rollitos con aceite y hornéalos a 200 °C 18–20 min hasta que estén dorados.', 'Sirve con hojas de lechuga y soja.']],
      airfryer: [40, ['Prepara el relleno y los rollitos como en la receta de horno.', 'Píntalos con aceite y cocínalos por tandas 10 min a 190 °C, girándolos a mitad.', 'Sirve con lechuga y soja.']]
    }
  },
  /* ---- Tanda 3 ---- */
  {
    id: 'cn-baozi', n: 'Baozi, bollos al vapor de cerdo', e: '🥟', tipo: 'cena', tags: ['carne'],
    ing: [['harina', 500], ['levadura_panaderia', 1], ['azucar', 20], ['leche', 260], ['cerdo_picado', 400], ['col_china', 200], ['cebolleta', 2], ['jengibre', 15], ['salsa_soja', 40], ['salsa_ostras', 20], ['aceite_sesamo', 10]],
    m: {
      fuego: [120, ['Amasa la harina con la levadura, el azúcar y la leche templada 8 min y deja reposar tapado 1 hora, hasta que doble su volumen.', 'Mezcla la carne con la col picada fina y escurrida, la cebolleta, el jengibre, la soja, la salsa de ostras y el aceite de sésamo.', 'Divide la masa en 16 bolas, estíralas, rellénalas y ciérralas plegando los bordes. Deja reposar 15 min sobre trocitos de papel.', 'Cuécelos al vapor 15 min y espera 2 min antes de destapar.']],
      robot: [120, ['Pon leche, azúcar y levadura: 1 min/37 °C/vel. 2. Añade la harina y amasa 3 min/espiga. Deja reposar 1 hora.', 'Prepara el relleno y forma los bollos como en la receta tradicional.', 'Pon 700 ml de agua en el vaso y los bollos en el Varoma sobre papel: 20 min/Varoma/vel. 1.']]
    }
  },
  {
    id: 'cn-pollo-champinones', n: 'Pollo con champiñones', e: '🍄', tipo: 'cena', tags: ['carne', 'rapida', 'ligera', 'niños'],
    ing: [['pollo_pechuga', 500], ['champinon', 400], ['calabacin', 200], ['zanahoria', 100], ['ajo', 2], ['salsa_soja', 40], ['salsa_ostras', 20], ['maicena', 15], ['arroz_largo', 200], ['aceite', 30]],
    m: {
      fuego: [25, ['Cuece el arroz. Corta el pollo en láminas, mézclalo con la mitad de la maicena y saltéalo 4 min. Resérvalo.', 'Saltea el ajo, los champiñones, el calabacín y la zanahoria en rodajas 5 min.', 'Vuelve a poner el pollo, añade soja, salsa de ostras y el resto de la maicena disuelta en 100 ml de agua.', 'Remueve hasta que espese y sirve con arroz.']]
    }
  },
  {
    id: 'cn-cerdo-pimiento-verde', n: 'Cerdo en tiras con pimiento verde', e: '🫑', tipo: 'comida', tags: ['carne', 'rapida'],
    ing: [['cerdo_lomo', 500], ['pimiento_verde', 400], ['ajo', 3], ['jengibre', 10], ['salsa_soja', 40], ['vinagre_arroz', 10], ['azucar', 5], ['maicena', 15], ['arroz_largo', 250], ['aceite', 30]],
    m: {
      fuego: [20, ['Cuece el arroz. Corta el cerdo en tiras finas y mézclalo con la maicena y la mitad de la soja.', 'Saltéalo a fuego fuerte 3 min y resérvalo.', 'Saltea ajo, jengibre y pimiento en tiras 3 min, que quede crujiente.', 'Añade el cerdo, el resto de la soja, el vinagre y el azúcar, remueve 1 min y sirve.']]
    }
  },
  {
    id: 'cn-ternera-pimienta-negra', n: 'Ternera a la pimienta negra', e: '🥩', tipo: 'comida', tags: ['carne', 'rapida'],
    ing: [['ternera_filetes', 500], ['pimienta', 6], ['cebolla', 200], ['pimiento_verde', 150], ['ajo', 2], ['salsa_ostras', 30], ['salsa_soja', 30], ['mantequilla', 15], ['maicena', 15], ['arroz_largo', 250], ['aceite', 30]],
    m: {
      fuego: [20, ['Cuece el arroz. Corta la ternera en dados, mézclala con la maicena y la soja.', 'Saltéala a fuego muy fuerte 2 min y resérvala.', 'Saltea ajo, cebolla y pimiento 3 min con la mantequilla. Añade la pimienta recién molida gruesa.', 'Agrega la ternera, la salsa de ostras y 50 ml de agua, remueve 1 min y sirve.']]
    }
  },
  {
    id: 'cn-huevo-vapor-gambas', n: 'Huevo al vapor con gambas', e: '🥚', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['huevo', 6], ['caldo_pollo', 450], ['gambas', 200], ['cebolleta', 1], ['salsa_soja', 20], ['aceite_sesamo', 10], ['sal', 2], ['arroz', 200]],
    m: {
      fuego: [30, ['Cuece el arroz. Bate los huevos con el caldo templado y la sal sin hacer espuma y cuélalos.', 'Repártelos en cuencos o en un plato hondo y añade las gambas.', 'Cubre con film o un plato y cuécelos al vapor a fuego suave 12–15 min, hasta que cuajen como un flan.', 'Riega con la soja y el aceite de sésamo, termina con cebolleta y sirve con arroz.']],
      robot: [30, ['Bate huevos, caldo y sal 10 seg/vel. 3 y reparte en cuencos que quepan en el Varoma con las gambas. Tápalos con film.', 'Pon 500 ml de agua en el vaso y cuece 18 min/Varoma/vel. 1.', 'Riega con soja y aceite de sésamo y sirve con cebolleta.']]
    }
  },
  {
    id: 'cn-arroz-cazuela-pollo', n: 'Arroz en cazuela con pollo y setas', e: '🍲', tipo: 'comida', tags: ['carne'],
    ing: [['arroz', 350], ['pollo_muslos', 500], ['setas_shiitake', 150], ['salchichas', 150], ['salsa_soja', 50], ['salsa_ostras', 20], ['azucar', 5], ['jengibre', 15], ['pak_choi', 250], ['cebolleta', 2], ['aceite', 20]],
    m: {
      fuego: [45, ['Marina el pollo deshuesado en trozos con la mitad de la soja, la salsa de ostras y el jengibre.', 'Pon el arroz lavado en una cazuela con 450 ml de agua y cuécelo tapado 10 min a fuego medio.', 'Coloca encima el pollo, las setas y las salchichas en rodajas, tapa y cuece 15 min a fuego suave.', 'Riega con el resto de la soja mezclada con el azúcar y el aceite, añade el pak choi, tapa 5 min más y sirve con cebolleta.']],
      robot: [40, ['Pon 500 ml de agua en el vaso, el arroz lavado en el cestillo y el pollo marinado, las setas y las salchichas en el Varoma: 25 min/Varoma/vel. 1.', 'Saltea el pak choi en sartén.', 'Mezcla el arroz con el pollo, las setas y la salsa de soja y azúcar y sirve con cebolleta.']]
    }
  },
  {
    id: 'cn-sopa-tofu-espinacas', n: 'Sopa de tofu, espinacas y huevo', e: '🥬', tipo: 'cena', tags: ['vegetariano', 'ligera', 'rapida'],
    ing: [['caldo_verduras', 1500], ['tofu', 300], ['espinacas', 200], ['setas_shiitake', 100], ['huevo', 2], ['jengibre', 10], ['salsa_soja', 30], ['maicena', 15], ['aceite_sesamo', 10]],
    m: {
      fuego: [20, ['Calienta el caldo con el jengibre en láminas, la soja y las setas laminadas 5 min.', 'Añade el tofu en dados y cuece 3 min.', 'Espesa ligeramente con la maicena disuelta y añade las espinacas.', 'Vierte el huevo batido en hilo removiendo y termina con aceite de sésamo.']],
      robot: [20, ['Pon caldo, jengibre, soja y setas: 8 min/100 °C/vel. 1.', 'Añade tofu, espinacas y maicena disuelta: 4 min/100 °C/giro inverso/vel. cuchara.', 'Vierte el huevo por la boca: 1 min/90 °C/giro inverso/vel. cuchara. Sirve con aceite de sésamo.']]
    }
  },
  {
    id: 'cn-pollo-curry-cantones', n: 'Pollo al curry estilo cantonés', e: '🍛', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['pollo_muslos', 700], ['patata', 400], ['cebolla', 200], ['zanahoria', 150], ['curry', 15], ['leche_coco', 200], ['caldo_pollo', 300], ['salsa_soja', 20], ['azucar', 5], ['arroz_largo', 250], ['aceite', 30]],
    m: {
      fuego: [40, ['Dora el pollo en trozos con aceite y resérvalo.', 'Sofríe la cebolla en gajos, añade el curry y remueve 1 min.', 'Incorpora el pollo, la patata y la zanahoria en dados, el caldo, la soja y el azúcar. Cuece tapado 20 min.', 'Añade la leche de coco y cuece 5 min sin tapar. Sirve con arroz.']],
      robot: [40, ['Sofríe la cebolla con aceite y el curry 5 min/120 °C/vel. 1.', 'Añade el pollo, la patata, la zanahoria, el caldo, la soja y el azúcar: 22 min/100 °C/giro inverso/vel. cuchara.', 'Añade la leche de coco: 5 min/100 °C/giro inverso/vel. cuchara. Sirve con arroz.']]
    }
  },
  {
    id: 'cn-da-pan-ji', n: 'Pollo picante con patatas y pimientos (da pan ji)', e: '🌶️', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_entero', 1200], ['patata', 500], ['pimiento_verde', 200], ['pimiento_rojo', 150], ['cebolla', 150], ['guindilla', 4], ['anis_estrellado', 1], ['jengibre', 20], ['ajo', 4], ['salsa_soja', 60], ['azucar', 10], ['cerveza', 330], ['noodles', 250], ['aceite', 40]],
    m: {
      fuego: [60, ['Dora el pollo troceado en una cazuela grande con aceite. Añade jengibre, ajo, guindillas y anís y sofríe 2 min.', 'Agrega la soja, el azúcar y la cerveza, tapa y cuece 15 min.', 'Incorpora las patatas en trozos grandes y cuece 15 min más.', 'Añade los pimientos y la cebolla en cuadrados y cuece 5 min. Sirve con los noodles cocidos mezclados con la salsa.']]
    }
  },
  {
    id: 'cn-mu-xu-rou', n: 'Cerdo mu shu con huevo y setas', e: '🌯', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['cerdo_lomo', 400], ['huevo', 4], ['setas_shiitake', 150], ['repollo', 250], ['zanahoria', 100], ['cebolleta', 2], ['salsa_soja', 40], ['salsa_hoisin', 50], ['maicena', 10], ['tortillas', 8], ['aceite', 30]],
    m: {
      fuego: [25, ['Corta el cerdo en tiras, mézclalo con la maicena y un poco de soja.', 'Cuaja los huevos revueltos en el wok y resérvalos.', 'Saltea el cerdo 3 min, añade las setas, el repollo y la zanahoria en tiras y saltea 3 min con el resto de la soja.', 'Mezcla con el huevo y la cebolleta. Sirve dentro de las tortillas calientes untadas con hoisin.']]
    }
  },
  {
    id: 'cn-ternera-estofada-anis', n: 'Ternera estofada con anís estrellado', e: '🥘', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_guisar', 800], ['zanahoria', 300], ['daikon', 400], ['salsa_soja', 60], ['azucar_moreno', 20], ['vino_blanco', 100], ['anis_estrellado', 3], ['canela', 1], ['jengibre', 20], ['ajo', 3], ['arroz', 250], ['aceite', 20]],
    m: {
      fuego: [130, ['Dora la ternera en trozos grandes con aceite. Añade jengibre y ajo.', 'Agrega la soja, el azúcar, el vino, el anís, la canela y agua hasta cubrir. Cuece tapado a fuego suave 90 min.', 'Añade la zanahoria y el daikon en trozos y cuece 25 min más.', 'Reduce la salsa destapado si hace falta y sirve con arroz.']],
      robot: [90, ['Sofríe jengibre y ajo con aceite 3 min/120 °C/vel. 1.', 'Añade la ternera, la soja, el azúcar, el vino, las especias y 400 ml de agua: 60 min/100 °C/giro inverso/vel. cuchara.', 'Añade la zanahoria y el daikon: 20 min/100 °C/giro inverso/vel. cuchara. Sirve con arroz.']]
    }
  },
  {
    id: 'cn-gambas-sal-pimienta', n: 'Gambas con sal y pimienta', e: '🦐', tipo: 'cena', tags: ['pescado', 'rapida'],
    ing: [['langostinos_crudos', 700], ['maicena', 50], ['ajo', 4], ['guindilla', 2], ['cebolleta', 2], ['pimienta', 4], ['sal', 5], ['arroz_largo', 200], ['lechuga', 1], ['aceite', 100]],
    m: {
      fuego: [25, ['Cuece el arroz. Seca los langostinos, sálalos y pásalos por maicena.', 'Fríelos en aceite caliente 2 min y escúrrelos.', 'Retira casi todo el aceite y saltea ajo, guindilla y cebolleta picados 1 min con la pimienta.', 'Añade los langostinos, saltea 30 seg y sirve con lechuga y arroz.']],
      airfryer: [20, ['Reboza los langostinos en maicena y pulverízalos con aceite.', 'Cocínalos 8 min a 200 °C.', 'Saltéalos en sartén con ajo, guindilla, cebolleta, sal y pimienta y sirve.']]
    }
  },
  {
    id: 'cn-alitas-soja-miel', n: 'Alitas de pollo con soja y miel', e: '🍗', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['pollo_alitas', 1200], ['salsa_soja', 60], ['miel', 50], ['ajo', 3], ['jengibre', 15], ['sesamo', 10], ['arroz_largo', 200], ['pepino', 250]],
    m: {
      horno: [50, ['Mezcla soja, miel, ajo y jengibre rallados y marina las alitas 15 min.', 'Hornéalas a 200 °C 35 min, dándoles la vuelta y pintándolas con la marinada a mitad.', 'Espolvorea sésamo y sirve con arroz y pepino.']],
      airfryer: [40, ['Marina las alitas como en la receta de horno.', 'Cocínalas 22 min a 190 °C, girándolas a mitad, y píntalas con la marinada reducida en un cazo.', 'Sirve con sésamo, arroz y pepino.']],
      fuego: [45, ['Dora las alitas en una cazuela 8 min.', 'Añade soja, miel, ajo, jengibre y 200 ml de agua y cuece tapado 20 min.', 'Destapa y reduce hasta que queden glaseadas. Sirve con sésamo, arroz y pepino.']]
    }
  },
  {
    id: 'cn-albondigas-cabeza-leon', n: 'Albóndigas cabeza de león con col china', e: '🧆', tipo: 'comida', tags: ['carne'],
    ing: [['cerdo_picado', 600], ['huevo', 1], ['pan_rallado', 30], ['cebolleta', 2], ['jengibre', 15], ['salsa_soja', 60], ['maicena', 20], ['col_china', 600], ['caldo_pollo', 500], ['arroz', 250], ['aceite', 30]],
    m: {
      fuego: [50, ['Mezcla la carne con el huevo, el pan rallado, la cebolleta y el jengibre picados, 20 ml de soja y la maicena. Forma 8 albóndigas grandes.', 'Dóralas en una cazuela con aceite y resérvalas.', 'Pon la col en trozos en la cazuela, coloca encima las albóndigas, añade el caldo y el resto de la soja.', 'Cuece tapado a fuego suave 25 min y sirve con arroz.']],
      robot: [50, ['Forma las albóndigas y dóralas en sartén.', 'Pon la col, el caldo y la soja en el vaso: 5 min/100 °C/giro inverso/vel. cuchara.', 'Añade las albóndigas: 20 min/100 °C/giro inverso/vel. cuchara. Sirve con arroz.']],
      horno: [55, ['Forma las albóndigas y dóralas en sartén.', 'Colócalas en una fuente sobre la col con el caldo y la soja, cubre con papel de aluminio.', 'Hornea 30 min a 190 °C y sirve con arroz.']]
    }
  },
  {
    id: 'cn-hormigas-arbol', n: 'Fideos de arroz con carne picada (hormigas trepando al árbol)', e: '🍜', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['fideos_arroz', 250], ['cerdo_picado', 300], ['miso', 25], ['pimenton_picante', 3], ['ajo', 3], ['jengibre', 10], ['salsa_soja', 40], ['caldo_pollo', 300], ['cebolleta', 3], ['aceite', 30]],
    m: {
      fuego: [25, ['Hidrata los fideos de arroz en agua caliente 10 min y escúrrelos.', 'Sofríe la carne picada hasta que esté dorada y suelta. Añade ajo, jengibre, miso y pimentón.', 'Agrega el caldo y la soja, incorpora los fideos y cuece removiendo 3–4 min hasta que absorban casi todo el líquido.', 'Termina con abundante cebolleta.']]
    }
  },
  {
    id: 'cn-cerdo-salsa-ajo', n: 'Cerdo cocido con salsa de ajo y pepino', e: '🧄', tipo: 'comida', tags: ['carne', 'ligera'],
    ing: [['cerdo_solomillo', 600], ['pepino', 400], ['ajo', 5], ['salsa_soja', 50], ['vinagre_arroz', 15], ['azucar', 10], ['pimenton_picante', 2], ['aceite_sesamo', 15], ['jengibre', 15], ['cebolleta', 2], ['arroz', 250]],
    m: {
      fuego: [35, ['Cuece el solomillo en agua con jengibre y cebolleta 18 min a fuego suave. Déjalo enfriar en el agua.', 'Machaca el ajo y mézclalo con la soja, el vinagre, el azúcar, el pimentón y el aceite de sésamo.', 'Corta el pepino en tiras finas y colócalo en una fuente.', 'Corta el cerdo en lonchas muy finas, colócalas sobre el pepino y riega con la salsa. Sirve con arroz.']],
      robot: [35, ['Pon 1 l de agua en el vaso con jengibre y cebolleta y el solomillo en el Varoma: 25 min/Varoma/vel. 1.', 'Prepara la salsa de ajo, soja, vinagre, azúcar, pimentón y aceite de sésamo.', 'Sirve el cerdo en lonchas finas sobre pepino con la salsa y arroz.']]
    }
  },
  {
    id: 'cn-ternera-apio', n: 'Ternera salteada con apio', e: '🥬', tipo: 'comida', tags: ['carne', 'rapida', 'ligera'],
    ing: [['ternera_filetes', 450], ['apio', 400], ['zanahoria', 100], ['ajo', 2], ['jengibre', 10], ['guindilla', 1], ['salsa_soja', 40], ['maicena', 10], ['arroz_largo', 200], ['aceite', 30]],
    m: {
      fuego: [20, ['Cuece el arroz. Corta la ternera en tiras finas y mézclala con la maicena y la mitad de la soja.', 'Saltéala a fuego muy fuerte 2 min y resérvala.', 'Saltea ajo, jengibre, guindilla, el apio en bastones y la zanahoria 3 min.', 'Añade la ternera y el resto de la soja, saltea 1 min y sirve.']]
    }
  }
]);
