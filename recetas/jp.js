/* MC Food Diary · cocina de Japón 🇯🇵. Formato y normas: recetas/GUIA-RECETAS.md */

MC_ADD_ING({
  mirin: ['Mirin', 'despensa', 10, 'l', 0, 'vino blanco con una cucharadita de azúcar'],
  dashi: ['Caldo dashi en polvo', 'despensa', 40, 'kg', 0, 'caldo de pescado'],
  wakame: ['Alga wakame deshidratada', 'despensa', 40, 'kg', 0, 'se puede omitir'],
  panko: ['Pan rallado panko', 'despensa', 6, 'kg'],
  udon: ['Fideos udon', 'despensa', 6, 'kg', 0, 'noodles de huevo o espaguetis gruesos'],
  soba: ['Fideos soba', 'despensa', 8, 'kg', 0, 'espaguetis finos'],
  curry_japones: ['Curry japonés en bloque (caja)', 'despensa', 3.5, 'ud', 0, '2 cucharadas de curry en polvo con 2 de harina tostada y 1 de kétchup'],
  caballa: ['Caballa', 'pescaderia', 6, 'kg'],
  daikon: ['Rábano daikon', 'fruteria', 3, 'kg', 0, 'nabo'],
  setas_shiitake: ['Setas shiitake', 'fruteria', 14, 'kg'],
  col_china: ['Col china', 'fruteria', 2.2, 'kg'],
  cerdo_picado: ['Carne picada de cerdo', 'carniceria', 6.5, 'kg'],
  panceta_fresca: ['Panceta de cerdo fresca', 'carniceria', 7, 'kg'],
  obleas_gyoza: ['Obleas para gyozas o wantán', 'congelados', 3, 'ud', 0, 'obleas finas de empanadilla'],
  langostinos_crudos: ['Langostinos crudos', 'congelados', 10, 'kg'],
  edamame: ['Edamame congelado', 'congelados', 6, 'kg'],
  surimi: ['Palitos de surimi', 'pescaderia', 6, 'kg'],
  pak_choi: ['Pak choi', 'fruteria', 6, 'kg', 0, 'acelgas tiernas o espinacas']
});

MC_ADD('jp', [
  {
    id: 'salmon-teriyaki', n: 'Salmón teriyaki con arroz', e: '🍣', tipo: 'comida', tags: ['pescado', 'rapida'],
    ing: [['salmon', 600], ['salsa_soja', 60], ['miel', 40], ['ajo', 1], ['arroz', 250], ['brocoli', 300], ['aceite', 15], ['sal', 2]],
    m: {
      fuego: [25, ['Cuece el arroz y el brócoli en ramitos.', 'Marca el salmón en sartén 3 min por lado.', 'Añade la soja, la miel y el ajo picado y deja reducir 2 min bañando el salmón.', 'Sirve con arroz y brócoli.']],
      airfryer: [22, ['Pinta el salmón con la mezcla de soja, miel y ajo.', 'Cocínalo 10 min a 190 °C junto con el brócoli aliñado.', 'Sirve con arroz cocido.']],
      horno: [28, ['Coloca el salmón y el brócoli en una bandeja y pinta el salmón con soja, miel y ajo.', 'Hornea 15 min a 200 °C.', 'Sirve con arroz cocido.']]
    }
  },
  {
    id: 'yakisoba', n: 'Yakisoba de cerdo', e: '🍜', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['noodles', 300], ['cerdo_lomo', 300], ['repollo', 250], ['zanahoria', 100], ['cebolla', 100], ['salsa_soja', 50], ['tomate_frito', 30], ['miel', 10], ['aceite', 25]],
    m: {
      fuego: [20, ['Cuece los noodles y escúrrelos.', 'Saltea el cerdo en tiras finas a fuego fuerte 3 min.', 'Añade la cebolla, la zanahoria y el repollo en tiras y saltea 4 min.', 'Mezcla la soja, el tomate frito y la miel, añádelo con los noodles y saltea 2 min.']]
    }
  },
  {
    id: 'karaage', n: 'Pollo karaage con arroz', e: '🍗', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['pollo_muslos', 700], ['salsa_soja', 40], ['jengibre', 15], ['ajo', 2], ['maicena', 80], ['arroz', 250], ['limon', 1], ['repollo', 200], ['aceite', 200]],
    m: {
      fuego: [40, ['Corta el pollo sin piel en trozos y marínalo 15 min con soja, jengibre y ajo rallados.', 'Rebózalo en maicena y fríelo en aceite caliente 5 min hasta que esté dorado.', 'Sirve con arroz, repollo en tiras finas y limón.']],
      airfryer: [35, ['Marina el pollo como en la receta tradicional y rebózalo en maicena.', 'Pulveriza con un poco de aceite y cocina 16 min a 200 °C, girándolo a mitad.', 'Sirve con arroz, repollo y limón.']]
    }
  },
  {
    id: 'ramen', n: 'Ramen fácil de cerdo', e: '🍜', tipo: 'cena', tags: ['carne'],
    ing: [['noodles', 300], ['caldo_pollo', 1500], ['cerdo_lomo', 350], ['huevo', 4], ['champinon', 150], ['cebolleta', 2], ['salsa_soja', 60], ['jengibre', 15], ['ajo', 2], ['aceite', 15]],
    m: {
      fuego: [30, ['Cuece los huevos 7 min, enfríalos y pélalos.', 'Calienta el caldo con la soja, el jengibre y el ajo laminados y los champiñones 10 min.', 'Marca el cerdo en tiras en una sartén.', 'Cuece los noodles, repártelos en cuencos y cubre con el caldo, el cerdo, el huevo partido y la cebolleta.']],
      robot: [30, ['Pon caldo, soja, jengibre, ajo y champiñones en el vaso y los huevos y el cerdo en el Varoma: 18 min/Varoma/vel. 1.', 'Añade los noodles al caldo: tiempo del paquete/100 °C/giro inverso/vel. cuchara.', 'Sirve con el cerdo, el huevo y la cebolleta.']]
    }
  },
  {
    id: 'gyudon', n: 'Gyudon (arroz con ternera)', e: '🍚', tipo: 'comida', tags: ['carne', 'rapida'],
    ing: [['ternera_filetes', 450], ['cebolla', 250], ['salsa_soja', 60], ['azucar', 20], ['caldo_carne', 200], ['arroz', 300], ['huevo', 4], ['cebolleta', 1]],
    m: {
      fuego: [25, ['Cuece el arroz.', 'Cuece la cebolla en juliana en el caldo con la soja y el azúcar 8 min.', 'Añade la ternera en tiras muy finas y cocina 2 min.', 'Sirve sobre el arroz con un huevo pochado o a la plancha y cebolleta.']]
    }
  },
  /* ---- Tanda 1 ---- */
  {
    id: 'jp-oyakodon', n: 'Oyakodon (arroz con pollo y huevo)', e: '🍳', tipo: 'cena', tags: ['carne', 'rapida', 'niños'],
    ing: [['pollo_muslos', 450], ['cebolla', 200], ['huevo', 6], ['dashi', 8], ['salsa_soja', 50], ['mirin', 50], ['azucar', 10], ['arroz', 300], ['cebolleta', 1]],
    m: {
      fuego: [25, ['Cuece el arroz. Disuelve el dashi en 250 ml de agua caliente con la soja, el mirin y el azúcar.', 'Cuece la cebolla en juliana en ese caldo 4 min y añade el pollo en trozos pequeños. Cuece 6 min.', 'Vierte los huevos ligeramente batidos por encima, tapa y deja 1–2 min, que queden jugosos.', 'Sirve sobre el arroz con cebolleta.']]
    }
  },
  {
    id: 'jp-katsudon', n: 'Katsudon (arroz con cerdo empanado y huevo)', e: '🍱', tipo: 'comida', tags: ['carne'],
    ing: [['cerdo_lomo', 500], ['panko', 120], ['harina', 50], ['huevo', 7], ['cebolla', 200], ['dashi', 8], ['salsa_soja', 50], ['mirin', 50], ['azucar', 10], ['arroz', 300], ['aceite', 200]],
    m: {
      fuego: [40, ['Cuece el arroz. Pasa los filetes por harina, 1 huevo batido y panko, y fríelos 3 min por lado. Córtalos en tiras.', 'Calienta 250 ml de agua con el dashi, la soja, el mirin y el azúcar y cuece la cebolla en juliana 4 min.', 'Coloca el cerdo encima, vierte los 6 huevos batidos, tapa y cuece 1–2 min.', 'Sirve sobre el arroz.']],
      airfryer: [35, ['Empana los filetes, pulverízalos con aceite y cocínalos 12 min a 200 °C, girándolos a mitad.', 'Prepara la cebolla en el caldo de dashi, soja y mirin en sartén.', 'Añade el cerdo en tiras y el huevo batido, tapa 2 min y sirve sobre arroz.']]
    }
  },
  {
    id: 'jp-tonkatsu', n: 'Tonkatsu con col y arroz', e: '🐖', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['cerdo_lomo', 600], ['panko', 150], ['harina', 50], ['huevo', 2], ['repollo', 300], ['salsa_worcestershire', 40], ['ketchup', 40], ['arroz', 250], ['limon', 1], ['aceite', 250], ['sal', 3]],
    m: {
      fuego: [35, ['Cuece el arroz. Sala los filetes gruesos, pásalos por harina, huevo batido y panko.', 'Fríelos en aceite a 170 °C 4 min por lado y escúrrelos.', 'Mezcla la salsa Worcestershire con el kétchup para hacer la salsa tonkatsu.', 'Corta el cerdo en tiras y sirve con repollo en tiras muy finas, limón, arroz y la salsa.']],
      airfryer: [30, ['Empana los filetes y pulverízalos con aceite.', 'Cocínalos 14 min a 200 °C, girándolos a mitad.', 'Sirve con repollo, arroz, limón y la salsa de Worcestershire y kétchup.']],
      horno: [35, ['Tuesta el panko en una sartén con 2 cucharadas de aceite y empana los filetes.', 'Hornéalos sobre rejilla 20 min a 210 °C.', 'Sirve con repollo, arroz, limón y la salsa.']]
    }
  },
  {
    id: 'jp-curry-japones', n: 'Curry japonés de pollo', e: '🍛', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['pollo_muslos', 600], ['patata', 400], ['zanahoria', 200], ['cebolla', 250], ['curry_japones', 1], ['manzana', 150], ['arroz', 300], ['aceite', 20]],
    m: {
      fuego: [45, ['Dora el pollo en trozos con aceite. Añade la cebolla en gajos y sofríe 5 min.', 'Agrega la patata y la zanahoria en trozos, la manzana rallada y 700 ml de agua. Cuece 20 min.', 'Apaga el fuego, disuelve las pastillas de curry y cuece 5 min más removiendo hasta que espese.', 'Sirve con arroz.']],
      robot: [45, ['Sofríe la cebolla con aceite 5 min/120 °C/vel. 1.', 'Añade pollo, patata, zanahoria, manzana rallada y 650 ml de agua: 25 min/100 °C/giro inverso/vel. cuchara.', 'Añade el curry en pastillas: 5 min/100 °C/giro inverso/vel. cuchara. Sirve con arroz.']]
    }
  },
  {
    id: 'jp-katsu-curry', n: 'Katsu curry', e: '🍛', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_pechuga', 600], ['panko', 120], ['harina', 50], ['huevo', 2], ['curry_japones', 1], ['cebolla', 200], ['zanahoria', 150], ['arroz', 300], ['aceite', 200]],
    m: {
      fuego: [45, ['Cuece el arroz. Sofríe la cebolla y la zanahoria en dados 6 min, añade 600 ml de agua y cuece 12 min.', 'Apaga el fuego, disuelve el curry y cuece 5 min hasta que espese.', 'Abre las pechugas en filetes, pásalas por harina, huevo y panko y fríelas 3 min por lado.', 'Sirve el pollo en tiras sobre el arroz con la salsa de curry al lado.']],
      airfryer: [40, ['Prepara la salsa de curry en un cazo como en la receta tradicional.', 'Empana el pollo, pulverízalo con aceite y cocínalo 14 min a 200 °C.', 'Sirve en tiras con arroz y la salsa.']]
    }
  },
  {
    id: 'jp-okonomiyaki', n: 'Okonomiyaki', e: '🥞', tipo: 'cena', tags: ['carne'],
    ing: [['harina', 250], ['huevo', 4], ['dashi', 5], ['repollo', 500], ['bacon', 200], ['cebolleta', 3], ['mayonesa', 60], ['salsa_worcestershire', 40], ['ketchup', 40], ['aceite', 30]],
    m: {
      fuego: [35, ['Mezcla la harina con 250 ml de agua con el dashi disuelto y los huevos. Añade el repollo picado fino y la cebolleta.', 'Vierte la mitad en una sartén con aceite, cubre con tiras de bacon y cocina tapado a fuego medio 5 min.', 'Dale la vuelta con ayuda de un plato y cocina 5 min más. Repite con el resto.', 'Cubre con la mezcla de Worcestershire y kétchup y líneas de mayonesa.']]
    }
  },
  {
    id: 'jp-tempura', n: 'Tempura de langostinos y verduras', e: '🍤', tipo: 'cena', tags: ['pescado'],
    ing: [['langostinos_crudos', 500], ['calabacin', 200], ['boniato', 200], ['berenjena', 200], ['harina', 150], ['maicena', 50], ['huevo', 1], ['salsa_soja', 60], ['mirin', 30], ['arroz', 250], ['aceite', 500]],
    m: {
      fuego: [40, ['Cuece el arroz. Pela los langostinos dejando la cola y corta las verduras en láminas finas.', 'Mezcla con pocas vueltas la harina, la maicena, el huevo y 250 ml de agua muy fría: la masa debe quedar con grumos.', 'Pasa los langostinos y las verduras por la masa y fríelos por tandas en aceite a 175 °C 2–3 min.', 'Escurre y sirve con la soja mezclada con el mirin y arroz.']]
    }
  },
  {
    id: 'jp-nikujaga', n: 'Nikujaga (guiso de ternera y patata)', e: '🥔', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['ternera_filetes', 400], ['patata', 700], ['cebolla', 250], ['zanahoria', 200], ['judias_verdes', 100], ['dashi', 8], ['salsa_soja', 60], ['mirin', 60], ['azucar', 20], ['aceite', 15]],
    m: {
      fuego: [40, ['Saltea la ternera en tiras con aceite 2 min. Añade la cebolla en gajos.', 'Incorpora la patata y la zanahoria en trozos, 500 ml de agua con el dashi, el azúcar y el mirin. Cuece 10 min.', 'Añade la soja y cuece 15 min más a fuego suave, tapado, hasta que la patata esté tierna.', 'Añade las judías verdes en trozos los últimos 5 min y sirve.']],
      robot: [40, ['Sofríe la cebolla con aceite 3 min/120 °C/vel. 1.', 'Añade ternera, patata, zanahoria, 450 ml de agua con el dashi, azúcar, mirin y soja: 25 min/100 °C/giro inverso/vel. cuchara.', 'Añade las judías: 5 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'jp-shogayaki', n: 'Cerdo al jengibre (shogayaki)', e: '🫚', tipo: 'comida', tags: ['carne', 'rapida'],
    ing: [['cerdo_lomo', 600], ['jengibre', 30], ['cebolla', 200], ['salsa_soja', 50], ['mirin', 50], ['azucar', 10], ['repollo', 250], ['arroz', 300], ['aceite', 20]],
    m: {
      fuego: [20, ['Cuece el arroz. Mezcla el jengibre rallado con la soja, el mirin y el azúcar.', 'Dora los filetes finos de cerdo en sartén con aceite 1 min por lado y añade la cebolla en juliana.', 'Vierte la salsa y cocina 2 min hasta que se reduzca y glasee la carne.', 'Sirve con repollo en tiras finas y arroz.']]
    }
  },
  {
    id: 'jp-pollo-teriyaki', n: 'Pollo teriyaki', e: '🍗', tipo: 'comida', tags: ['carne', 'rapida', 'niños'],
    ing: [['pollo_muslos', 700], ['salsa_soja', 60], ['mirin', 60], ['azucar', 20], ['sesamo', 10], ['brocoli', 300], ['arroz', 300], ['aceite', 15]],
    m: {
      fuego: [25, ['Cuece el arroz y el brócoli. Dora los contramuslos deshuesados por la piel 6 min y 4 min por el otro lado.', 'Retira la grasa, añade la soja, el mirin y el azúcar y deja reducir 2 min dándoles la vuelta.', 'Corta el pollo en tiras, riégalo con la salsa y espolvorea sésamo.', 'Sirve con arroz y brócoli.']],
      airfryer: [25, ['Cocina los contramuslos con la piel hacia arriba 18 min a 190 °C.', 'Reduce la soja, el mirin y el azúcar en un cazo 3 min.', 'Pinta el pollo con la salsa, cocina 2 min más y sirve con sésamo, arroz y brócoli.']],
      horno: [35, ['Hornea los contramuslos 25 min a 200 °C.', 'Reduce la salsa teriyaki en un cazo, pinta el pollo y gratina 3 min.', 'Sirve con sésamo, arroz y brócoli.']]
    }
  },
  {
    id: 'jp-tsukune', n: 'Tsukune, brochetas de albóndigas de pollo', e: '🍢', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['pollo_pechuga', 600], ['huevo', 1], ['pan_rallado', 30], ['cebolleta', 2], ['jengibre', 10], ['salsa_soja', 50], ['mirin', 50], ['azucar', 10], ['arroz', 250], ['pepino', 250], ['aceite', 15]],
    m: {
      fuego: [35, ['Pica el pollo a cuchillo o en la picadora y mézclalo con el huevo, el pan rallado, la cebolleta y el jengibre.', 'Forma albóndigas alargadas y ensártalas en brochetas.', 'Dóralas en sartén con aceite 8 min a fuego medio, girándolas.', 'Añade la soja, el mirin y el azúcar y glasea 2 min. Sirve con arroz y pepino.']],
      robot: [35, ['Tritura el pollo con la cebolleta y el jengibre 10 seg/vel. 6. Añade huevo y pan rallado 10 seg/giro inverso/vel. 3.', 'Forma las brochetas y dóralas en sartén.', 'Glasea con soja, mirin y azúcar y sirve con arroz y pepino.']],
      airfryer: [30, ['Forma las brochetas como en la receta tradicional.', 'Cocínalas 12 min a 190 °C, píntalas con la salsa reducida y cocina 2 min más.', 'Sirve con arroz y pepino.']]
    }
  },
  {
    id: 'jp-yakitori', n: 'Yakitori con arroz', e: '🍢', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['pollo_muslos', 700], ['cebolleta', 4], ['salsa_soja', 60], ['mirin', 60], ['azucar', 15], ['arroz', 250], ['pimiento_verde', 200], ['aceite', 15]],
    m: {
      fuego: [30, ['Cuece el arroz. Reduce en un cazo la soja, el mirin y el azúcar 4 min hasta que espese.', 'Ensarta el pollo en dados alternando con trozos de cebolleta.', 'Hazlas a la plancha 10 min girándolas y pintándolas con la salsa al final.', 'Sirve con arroz y el pimiento a la plancha.']],
      airfryer: [25, ['Prepara la salsa y las brochetas.', 'Cocínalas 12 min a 200 °C con el pimiento, pintándolas con la salsa a mitad.', 'Sirve con arroz.']],
      horno: [30, ['Prepara la salsa y las brochetas.', 'Gratínalas a 230 °C 15 min, girándolas y pintándolas.', 'Sirve con arroz y pimiento asado.']]
    }
  },
  {
    id: 'jp-sopa-miso', n: 'Sopa de miso con tofu y wakame', e: '🥣', tipo: 'cena', tags: ['vegetariano', 'ligera', 'rapida'],
    ing: [['miso', 80], ['tofu', 300], ['wakame', 8], ['champinon', 150], ['cebolleta', 2], ['caldo_verduras', 1200], ['udon', 250]],
    m: {
      fuego: [15, ['Hidrata la wakame en agua fría 5 min y escúrrela.', 'Calienta el caldo con los champiñones laminados 5 min y cuece los udon según el paquete.', 'Baja el fuego, disuelve el miso con un poco de caldo y añádelo sin que hierva.', 'Añade el tofu en dados y la wakame, calienta 1 min y sirve con cebolleta.']],
      robot: [15, ['Pon el caldo y los champiñones: 8 min/100 °C/vel. 1.', 'Añade los udon: tiempo del paquete/100 °C/giro inverso/vel. cuchara.', 'Añade el miso, el tofu y la wakame: 2 min/80 °C/giro inverso/vel. cuchara. Sirve con cebolleta.']]
    }
  },
  {
    id: 'jp-niku-udon', n: 'Udon con ternera en caldo', e: '🍜', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['udon', 400], ['ternera_filetes', 350], ['cebolla', 150], ['dashi', 10], ['salsa_soja', 70], ['mirin', 60], ['azucar', 15], ['cebolleta', 2], ['jengibre', 10]],
    m: {
      fuego: [25, ['Calienta 1,3 l de agua con el dashi, 40 ml de soja y 30 ml de mirin.', 'En una sartén, cuece la cebolla en juliana y la ternera en tiras finas con el resto de la soja, el mirin y el azúcar 4 min.', 'Cuece los udon y repártelos en cuencos.', 'Cubre con el caldo caliente, la ternera, la cebolleta y el jengibre rallado.']]
    }
  },
  {
    id: 'jp-yaki-udon', n: 'Yaki udon de pollo y verduras', e: '🍜', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['udon', 400], ['pollo_pechuga', 350], ['repollo', 200], ['zanahoria', 100], ['setas_shiitake', 150], ['cebolleta', 2], ['salsa_soja', 50], ['mirin', 30], ['salsa_worcestershire', 15], ['aceite', 30]],
    m: {
      fuego: [20, ['Cuece o calienta los udon según el paquete y escúrrelos.', 'Saltea el pollo en tiras 4 min. Añade la zanahoria, el repollo y las setas en tiras y saltea 3 min.', 'Incorpora los udon, la soja, el mirin y la Worcestershire y saltea 2 min.', 'Termina con cebolleta.']]
    }
  },
  {
    id: 'jp-zaru-soba', n: 'Soba fríos con salsa tsuyu y tempura de verduras', e: '🥢', tipo: 'comida', tags: ['vegetariano'],
    ing: [['soba', 350], ['salsa_soja', 80], ['mirin', 80], ['azucar', 10], ['cebolleta', 2], ['nori', 1], ['calabacin', 200], ['zanahoria', 150], ['harina', 120], ['huevo', 1], ['aceite', 400]],
    m: {
      fuego: [35, ['Hierve la soja, el mirin, el azúcar y 250 ml de agua 2 min y enfría la salsa.', 'Cuece los soba, enfríalos bajo el grifo frotándolos y escúrrelos.', 'Mezcla la harina, el huevo y 180 ml de agua helada, pasa el calabacín y la zanahoria en bastones y fríelos en tortitas 2–3 min.', 'Sirve los fideos con nori en tiras, la salsa con cebolleta para mojar y la tempura.']]
    }
  },
  {
    id: 'jp-ensalada-soba', n: 'Ensalada de soba con salmón y aguacate', e: '🥗', tipo: 'comida', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['soba', 300], ['salmon', 400], ['aguacate', 2], ['pepino', 250], ['edamame', 150], ['salsa_soja', 50], ['vinagre_arroz', 30], ['aceite_sesamo', 20], ['jengibre', 10], ['sesamo', 10]],
    m: {
      fuego: [25, ['Cuece los soba y el edamame, enfríalos y escúrrelos.', 'Marca el salmón en sartén 3 min por lado y desmígalo.', 'Mezcla la soja, el vinagre, el aceite de sésamo y el jengibre rallado.', 'Mezcla los fideos con el pepino y el aguacate en dados, el edamame, el salmón y la salsa. Espolvorea sésamo.']],
      airfryer: [25, ['Cocina el salmón 10 min a 190 °C y desmígalo.', 'Cuece los soba y el edamame y enfríalos.', 'Mezcla todo con las verduras y la salsa y termina con sésamo.']]
    }
  },
  /* ---- Tanda 2 ---- */
  {
    id: 'jp-hiyashi-chuka', n: 'Hiyashi chuka (fideos fríos con jamón y huevo)', e: '🥒', tipo: 'comida', tags: ['carne', 'rapida'],
    ing: [['noodles', 300], ['jamon_cocido', 150], ['huevo', 3], ['pepino', 250], ['tomate', 300], ['salsa_soja', 60], ['vinagre_arroz', 50], ['azucar', 20], ['aceite_sesamo', 20], ['sesamo', 10], ['aceite', 10]],
    m: {
      fuego: [25, ['Mezcla la soja, el vinagre, el azúcar, el aceite de sésamo y 60 ml de agua y enfría la salsa.', 'Haz tortillas muy finas con los huevos batidos y córtalas en tiras.', 'Cuece los noodles, enfríalos bajo el grifo y escúrrelos.', 'Coloca encima, en grupos, el jamón y el pepino en tiras, el tomate en gajos y el huevo. Riega con la salsa y espolvorea sésamo.']]
    }
  },
  {
    id: 'jp-caballa-miso', n: 'Caballa guisada con miso (saba misoni)', e: '🐟', tipo: 'comida', tags: ['pescado'],
    ing: [['caballa', 800], ['miso', 60], ['jengibre', 25], ['mirin', 50], ['azucar', 15], ['vino_blanco', 50], ['cebolleta', 2], ['espinacas', 300], ['arroz', 300]],
    m: {
      fuego: [30, ['Cuece el arroz. Pide la caballa en filetes y córtalos en trozos. Escáldalos con agua hirviendo y escúrrelos.', 'Calienta en una sartén 200 ml de agua, el vino, el mirin, el azúcar y el jengibre en láminas.', 'Añade la caballa con la piel hacia arriba y cuece tapado 8 min. Disuelve el miso en la salsa y cuece 5 min más bañándola.', 'Sirve con espinacas salteadas, cebolleta y arroz.']]
    }
  },
  {
    id: 'jp-caballa-sal', n: 'Caballa a la sal con daikon (shioyaki)', e: '🐟', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['caballa', 800], ['sal', 10], ['daikon', 250], ['limon', 1], ['salsa_soja', 30], ['arroz', 250], ['pepino', 200], ['vinagre_arroz', 20]],
    m: {
      fuego: [25, ['Cuece el arroz. Sala los filetes de caballa por los dos lados y déjalos 10 min. Sécalos.', 'Hazlos a la plancha por la piel 4 min y 2 min por la carne.', 'Ralla el daikon y escúrrelo un poco. Aliña el pepino en rodajas finas con el vinagre.', 'Sirve la caballa con el daikon regado con soja, limón, pepino y arroz.']],
      horno: [25, ['Sala la caballa y déjala 10 min.', 'Gratínala con la piel hacia arriba a 230 °C 10–12 min.', 'Sirve con daikon rallado, soja, limón, pepino y arroz.']],
      airfryer: [20, ['Sala la caballa y déjala 10 min.', 'Cocínala con la piel hacia arriba 9 min a 200 °C.', 'Sirve con daikon rallado, soja, limón, pepino y arroz.']]
    }
  },
  {
    id: 'jp-salmon-miso', n: 'Salmón al miso al horno', e: '🍣', tipo: 'cena', tags: ['pescado', 'rapida'],
    ing: [['salmon', 600], ['miso', 50], ['mirin', 40], ['miel', 15], ['judias_verdes', 300], ['sesamo', 10], ['arroz', 250]],
    m: {
      horno: [25, ['Cuece el arroz. Mezcla el miso, el mirin y la miel y unta el salmón.', 'Colócalo en una bandeja con las judías verdes y hornea 12–14 min a 200 °C.', 'Gratina 2 min para caramelizar el miso.', 'Espolvorea sésamo y sirve con arroz.']],
      airfryer: [20, ['Unta el salmón con la mezcla de miso, mirin y miel.', 'Cocínalo 10 min a 190 °C con las judías verdes.', 'Sirve con sésamo y arroz.']]
    }
  },
  {
    id: 'jp-hayashi-rice', n: 'Hayashi rice (ternera en salsa con arroz)', e: '🍛', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['ternera_filetes', 450], ['cebolla', 300], ['champinon', 250], ['tomate_triturado', 300], ['ketchup', 50], ['salsa_worcestershire', 40], ['vino_tinto', 100], ['harina', 20], ['mantequilla', 20], ['arroz', 300], ['caldo_carne', 300]],
    m: {
      fuego: [40, ['Cuece el arroz. Rehoga la cebolla en juliana en la mantequilla 10 min hasta que esté dorada.', 'Añade la ternera en tiras y los champiñones y saltea 3 min. Espolvorea la harina y remueve.', 'Vierte el vino, el tomate, el kétchup, la Worcestershire y el caldo y cuece 15 min.', 'Sirve con el arroz.']],
      robot: [40, ['Pica la cebolla 4 seg/vel. 5 y rehógala con la mantequilla 10 min/120 °C/vel. 1.', 'Añade ternera, champiñones, harina, vino, tomate, kétchup, Worcestershire y caldo: 15 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con el arroz.']]
    }
  },
  {
    id: 'jp-omurice', n: 'Omurice (tortilla rellena de arroz)', e: '🍳', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['arroz', 300], ['pollo_pechuga', 250], ['cebolla', 100], ['guisantes', 100], ['ketchup', 120], ['huevo', 8], ['mantequilla', 40], ['sal', 3]],
    m: {
      fuego: [35, ['Cuece el arroz. Saltea el pollo en dados pequeños con la cebolla picada en la mitad de la mantequilla 6 min.', 'Añade los guisantes, el arroz y 80 g de kétchup y saltea 2 min.', 'Para cada ración, cuaja 2 huevos batidos en una sartén con mantequilla, pon el arroz en el centro y envuélvelo.', 'Vuélcalo en el plato y decora con el resto del kétchup.']]
    }
  },
  {
    id: 'jp-chahan', n: 'Chahan, arroz frito japonés con cerdo', e: '🍚', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['arroz', 300], ['cerdo_lomo', 250], ['huevo', 3], ['cebolleta', 3], ['zanahoria', 80], ['salsa_soja', 40], ['dashi', 4], ['aceite', 30], ['pimienta', 1]],
    m: {
      fuego: [25, ['Cuece el arroz y extiéndelo para que se enfríe (o usa arroz del día anterior).', 'Saltea el cerdo en dados pequeños y la zanahoria 4 min.', 'Haz sitio, añade los huevos batidos y antes de que cuajen echa el arroz encima y saltea a fuego fuerte.', 'Añade la soja, el dashi, la pimienta y la cebolleta y saltea 2 min más.']]
    }
  },
  {
    id: 'jp-korokke', n: 'Korokke (croquetas de patata y carne)', e: '🥔', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['patata', 800], ['carne_picada', 250], ['cebolla', 150], ['salsa_soja', 20], ['azucar', 5], ['harina', 50], ['huevo', 2], ['panko', 120], ['repollo', 250], ['salsa_worcestershire', 40], ['aceite', 250], ['sal', 4]],
    m: {
      fuego: [50, ['Cuece las patatas peladas 20 min y cháfalas.', 'Sofríe la cebolla picada con la carne, la soja y el azúcar 6 min y mézclalo con el puré. Sala y deja templar.', 'Forma 12 croquetas planas, pásalas por harina, huevo y panko y fríelas 2 min por lado.', 'Sirve con repollo en tiras finas y salsa Worcestershire.']],
      airfryer: [45, ['Prepara y empana las croquetas como en la receta tradicional.', 'Pulverízalas con aceite y cocínalas 12 min a 200 °C, girándolas a mitad.', 'Sirve con repollo y salsa Worcestershire.']],
      horno: [50, ['Tuesta el panko con un poco de aceite en sartén y empana las croquetas.', 'Hornéalas 20 min a 210 °C.', 'Sirve con repollo y salsa Worcestershire.']]
    }
  },
  {
    id: 'jp-hambagu', n: 'Hambagu (filete ruso japonés con salsa)', e: '🍔', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['carne_picada', 600], ['cebolla', 150], ['panko', 40], ['leche', 50], ['huevo', 1], ['ketchup', 60], ['salsa_worcestershire', 40], ['vino_tinto', 50], ['brocoli', 300], ['arroz', 250], ['aceite', 20], ['sal', 4]],
    m: {
      fuego: [35, ['Cuece el arroz y el brócoli. Rehoga la cebolla picada y déjala enfriar. Moja el panko en la leche.', 'Mezcla la carne con la cebolla, el panko, el huevo y la sal. Forma 4 filetes ovalados con un hueco en el centro.', 'Dóralos 4 min por lado, tapa con un chorrito de agua y cuece 5 min.', 'Añade al jugo el vino, el kétchup y la Worcestershire, reduce 2 min y sirve con arroz y brócoli.']],
      horno: [35, ['Prepara los filetes y dóralos 2 min por lado en sartén.', 'Hornéalos 15 min a 200 °C.', 'Prepara la salsa en la sartén con vino, kétchup y Worcestershire y sirve con arroz y brócoli.']],
      airfryer: [30, ['Prepara los filetes.', 'Cocínalos 14 min a 190 °C.', 'Sirve con la salsa de kétchup, Worcestershire y vino reducida en un cazo, arroz y brócoli.']]
    }
  },
  {
    id: 'jp-gyozas', n: 'Gyozas a la plancha', e: '🥟', tipo: 'cena', tags: ['carne'],
    ing: [['obleas_gyoza', 2], ['cerdo_picado', 350], ['repollo', 200], ['cebolleta', 2], ['ajo', 2], ['jengibre', 10], ['salsa_soja', 60], ['aceite_sesamo', 10], ['vinagre_arroz', 30], ['aceite', 30], ['sal', 3]],
    m: {
      fuego: [50, ['Pica el repollo fino, sálalo 10 min y escúrrelo bien.', 'Mezcla la carne con el repollo, la cebolleta, el ajo y el jengibre picados, 20 ml de soja y el aceite de sésamo.', 'Rellena las obleas, moja el borde y ciérralas haciendo pliegues.', 'Dóralas en sartén con aceite 2 min, añade 80 ml de agua, tapa y cuece 5 min hasta que se evapore. Sirve con la soja mezclada con el vinagre.']],
      airfryer: [40, ['Prepara las gyozas como en la receta tradicional.', 'Píntalas con aceite y cocínalas 10 min a 190 °C. Para que queden más tiernas, cuécelas antes 3 min al vapor.', 'Sirve con soja y vinagre.']]
    }
  },
  {
    id: 'jp-agedashi-tofu', n: 'Agedashi tofu', e: '🍢', tipo: 'cena', tags: ['vegetariano', 'ligera', 'rapida'],
    ing: [['tofu', 600], ['maicena', 60], ['salsa_soja', 50], ['mirin', 50], ['caldo_verduras', 250], ['daikon', 200], ['jengibre', 10], ['cebolleta', 2], ['arroz', 200], ['aceite', 150]],
    m: {
      fuego: [25, ['Cuece el arroz. Seca bien el tofu y córtalo en dados grandes.', 'Calienta el caldo con la soja y el mirin.', 'Pasa el tofu por maicena y fríelo en aceite 3 min hasta que esté dorado.', 'Sirve el tofu en cuencos con el caldo caliente, el daikon y el jengibre rallados y la cebolleta.']],
      airfryer: [25, ['Pasa el tofu por maicena y pulverízalo con aceite.', 'Cocínalo 14 min a 200 °C.', 'Sírvelo con el caldo caliente de soja y mirin, daikon, jengibre y cebolleta.']]
    }
  },
  {
    id: 'jp-tofu-teriyaki', n: 'Tofu teriyaki con verduras', e: '🥢', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['tofu', 500], ['maicena', 30], ['salsa_soja', 50], ['mirin', 50], ['azucar', 10], ['brocoli', 300], ['zanahoria', 100], ['sesamo', 10], ['arroz', 250], ['aceite', 30]],
    m: {
      fuego: [25, ['Cuece el arroz. Corta el tofu en filetes, pásalo por maicena y dóralo en sartén 3 min por lado.', 'Saltea el brócoli y la zanahoria 5 min con un poco de agua.', 'Añade al tofu la soja, el mirin y el azúcar y deja reducir 2 min hasta glasear.', 'Sirve con las verduras, sésamo y arroz.']],
      airfryer: [25, ['Pasa el tofu por maicena y cocínalo 14 min a 200 °C con el brócoli y la zanahoria.', 'Reduce la soja, el mirin y el azúcar en un cazo.', 'Baña el tofu y sirve con sésamo y arroz.']]
    }
  },
  {
    id: 'jp-nasu-dengaku', n: 'Berenjenas glaseadas con miso (nasu dengaku)', e: '🍆', tipo: 'cena', tags: ['vegetariano', 'ligera'],
    ing: [['berenjena', 900], ['miso', 70], ['mirin', 40], ['azucar', 15], ['sesamo', 10], ['cebolleta', 1], ['arroz', 250], ['edamame', 200], ['aceite', 30]],
    m: {
      horno: [35, ['Cuece el arroz y el edamame. Parte las berenjenas por la mitad, haz cortes en rejilla en la pulpa y píntalas con aceite.', 'Hornéalas boca abajo 20 min a 200 °C.', 'Mezcla el miso, el mirin y el azúcar, unta las berenjenas y gratina 3–4 min.', 'Espolvorea sésamo y cebolleta y sirve con arroz y edamame.']],
      airfryer: [30, ['Prepara las berenjenas y cocínalas 15 min a 190 °C.', 'Úntalas con la mezcla de miso y cocina 4 min más a 200 °C.', 'Sirve con sésamo, cebolleta, arroz y edamame.']],
      fuego: [35, ['Corta las berenjenas en rodajas gruesas y dóralas en sartén tapada con aceite 12 min.', 'Úntalas con la mezcla de miso, mirin y azúcar y cocina 2 min por ese lado.', 'Sirve con sésamo, arroz y edamame.']]
    }
  },
  {
    id: 'jp-ramen-miso', n: 'Ramen de miso con maíz', e: '🍜', tipo: 'cena', tags: ['carne'],
    ing: [['noodles', 300], ['caldo_pollo', 1500], ['miso', 90], ['cerdo_picado', 250], ['maiz', 1], ['brotes_soja', 200], ['huevo', 4], ['ajo', 2], ['jengibre', 10], ['mantequilla', 20], ['cebolleta', 2], ['aceite', 15]],
    m: {
      fuego: [30, ['Cuece los huevos 7 min, enfríalos y pélalos.', 'Sofríe ajo, jengibre y la carne picada hasta que se dore. Añade el caldo y calienta sin que hierva fuerte; disuelve el miso.', 'Cuece los noodles y escalda los brotes 1 min.', 'Sirve los noodles con el caldo, la carne, el maíz, los brotes, medio huevo, un trocito de mantequilla y cebolleta.']],
      robot: [30, ['Pica ajo y jengibre 3 seg/vel. 5 y sofríe con aceite y la carne 5 min/120 °C/giro inverso/vel. cuchara.', 'Añade el caldo: 10 min/100 °C/giro inverso/vel. cuchara. Añade el miso 1 min/80 °C/vel. 2.', 'Sirve sobre los noodles cocidos con maíz, brotes, huevo, mantequilla y cebolleta.']]
    }
  },
  {
    id: 'jp-onigiri', n: 'Onigiri de atún y salmón', e: '🍙', tipo: 'comida', tags: ['pescado', 'niños'],
    ing: [['arroz_sushi', 450], ['atun', 3], ['mayonesa', 40], ['salmon', 250], ['nori', 1], ['sesamo', 10], ['sal', 6], ['pepino', 250], ['salsa_soja', 30]],
    m: {
      fuego: [40, ['Lava el arroz y cuécelo con 550 ml de agua tapado 12 min a fuego suave; deja reposar 10 min.', 'Haz el salmón a la plancha con sal y desmígalo. Mezcla el atún escurrido con la mayonesa.', 'Con las manos mojadas y saladas, forma triángulos de arroz con un hueco en el centro para el relleno.', 'Envuelve la base con una tira de nori y sirve con sésamo, pepino y soja.']],
      robot: [40, ['Pon 550 ml de agua y el arroz en el cestillo con el salmón en el Varoma: 18 min/Varoma/vel. 4. Reposa 10 min.', 'Desmiga el salmón y mezcla el atún con la mayonesa.', 'Forma los onigiri como en la receta tradicional y envuélvelos con nori.']]
    }
  },
  {
    id: 'jp-maki-salmon', n: 'Makis de salmón, aguacate y pepino', e: '🍣', tipo: 'cena', tags: ['pescado'],
    ing: [['arroz_sushi', 400], ['vinagre_arroz', 60], ['azucar', 20], ['sal', 5], ['nori', 1], ['salmon', 300], ['aguacate', 1], ['pepino', 150], ['salsa_soja', 60], ['jengibre', 20]],
    m: {
      fuego: [50, ['Usa salmón congelado al menos 5 días y descongelado en la nevera. Cuece el arroz lavado con 480 ml de agua tapado 12 min y deja reposar 10 min.', 'Mezcla el arroz con el vinagre, el azúcar y la sal disueltos y deja que se temple.', 'Extiende arroz sobre media hoja de nori, pon tiras de salmón, aguacate y pepino y enrolla apretando con una esterilla o un paño.', 'Corta cada rollo en 6–8 piezas con un cuchillo mojado y sirve con soja y jengibre en láminas finas.']],
      robot: [50, ['Pon 480 ml de agua en el vaso y el arroz lavado en el cestillo: 15 min/100 °C/vel. 4. Reposa 10 min.', 'Mezcla con el vinagre, el azúcar y la sal y deja templar.', 'Forma los makis como en la receta tradicional y sirve con soja y jengibre.']]
    }
  },
  {
    id: 'jp-temaki', n: 'Temakis caseros de langostinos y surimi', e: '🍣', tipo: 'cena', tags: ['pescado', 'niños'],
    ing: [['arroz_sushi', 400], ['vinagre_arroz', 60], ['azucar', 20], ['sal', 5], ['nori', 2], ['langostinos', 300], ['surimi', 200], ['aguacate', 1], ['pepino', 150], ['mayonesa', 50], ['salsa_soja', 60]],
    m: {
      fuego: [45, ['Cuece el arroz lavado con 480 ml de agua tapado 12 min, reposa 10 min y aliña con el vinagre, el azúcar y la sal.', 'Pela los langostinos y corta el surimi, el aguacate y el pepino en tiras.', 'Corta las hojas de nori por la mitad. Pon arroz en un lado, coloca encima el relleno con un poco de mayonesa y enrolla en forma de cono.', 'Sirve al momento, para que cada uno se haga los suyos, con soja.']]
    }
  },
  /* ---- Tanda 3 ---- */
  {
    id: 'jp-sukiyaki', n: 'Sukiyaki de ternera', e: '🍲', tipo: 'cena', tags: ['carne'],
    ing: [['ternera_entrecot', 500], ['tofu', 300], ['col_china', 300], ['setas_shiitake', 150], ['cebolleta', 3], ['udon', 250], ['salsa_soja', 80], ['mirin', 80], ['azucar', 30], ['huevo', 4], ['aceite', 15]],
    m: {
      fuego: [30, ['Mezcla la soja, el mirin, el azúcar y 150 ml de agua.', 'En una cazuela ancha, dora un poco la ternera cortada muy fina con el aceite y vierte parte de la salsa.', 'Añade por grupos el tofu en dados, la col, las setas, la cebolleta y los udon, y el resto de la salsa. Cuece 8 min.', 'Sirve en la mesa: cada uno moja la carne y las verduras en un huevo batido (o lo añade cuajado a la cazuela si se prefiere).']]
    }
  },
  {
    id: 'jp-tori-nabe', n: 'Nabe de pollo y verduras', e: '🍲', tipo: 'cena', tags: ['carne', 'ligera'],
    ing: [['pollo_muslos', 600], ['col_china', 400], ['tofu', 300], ['setas_shiitake', 150], ['zanahoria', 100], ['puerro', 1], ['dashi', 10], ['salsa_soja', 50], ['mirin', 30], ['limon', 1]],
    m: {
      fuego: [35, ['Calienta 1,5 l de agua con el dashi, la soja y el mirin.', 'Añade el pollo deshuesado en trozos y cuece 10 min.', 'Incorpora la zanahoria en rodajas, el puerro, las setas, la col y el tofu y cuece 10 min más.', 'Sirve en la mesa con limón para aliñar cada cuenco.']],
      robot: [35, ['Pon 1,3 l de agua con el dashi, la soja, el mirin y el pollo: 12 min/100 °C/giro inverso/vel. cuchara.', 'Añade zanahoria, puerro, setas, col y tofu: 12 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con limón.']]
    }
  },
  {
    id: 'jp-butadon', n: 'Butadon (arroz con cerdo glaseado)', e: '🍚', tipo: 'comida', tags: ['carne', 'rapida'],
    ing: [['panceta_fresca', 500], ['cebolla', 200], ['salsa_soja', 50], ['mirin', 50], ['azucar', 15], ['jengibre', 10], ['arroz', 300], ['cebolleta', 2], ['sesamo', 5]],
    m: {
      fuego: [25, ['Cuece el arroz. Corta la panceta en lonchas finas y dóralas en sartén sin aceite.', 'Retira parte de la grasa y añade la cebolla en juliana 3 min.', 'Vierte la soja, el mirin, el azúcar y el jengibre rallado y reduce hasta glasear.', 'Sirve sobre el arroz con cebolleta y sésamo.']]
    }
  },
  {
    id: 'jp-ebi-fry', n: 'Langostinos empanados en panko (ebi fry)', e: '🍤', tipo: 'cena', tags: ['pescado', 'niños'],
    ing: [['langostinos_crudos', 600], ['harina', 50], ['huevo', 2], ['panko', 120], ['mayonesa', 80], ['pepinillos', 40], ['repollo', 250], ['limon', 1], ['arroz', 250], ['aceite', 250]],
    m: {
      fuego: [30, ['Cuece el arroz. Pela los langostinos dejando la cola y hazles unos cortes en la parte de abajo para que queden rectos.', 'Pásalos por harina, huevo y panko y fríelos 2 min.', 'Mezcla la mayonesa con los pepinillos picados para hacer una salsa tártara rápida.', 'Sirve con repollo en tiras, limón, arroz y la salsa.']],
      airfryer: [25, ['Empana los langostinos y pulverízalos con aceite.', 'Cocínalos 8 min a 200 °C.', 'Sirve con salsa tártara, repollo, limón y arroz.']]
    }
  },
  {
    id: 'jp-ochazuke', n: 'Ochazuke de salmón', e: '🍵', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['arroz', 250], ['salmon', 350], ['dashi', 8], ['salsa_soja', 30], ['nori', 1], ['sesamo', 10], ['cebolleta', 2], ['wakame', 5], ['sal', 3]],
    m: {
      fuego: [25, ['Cuece el arroz. Sala el salmón y hazlo a la plancha 3 min por lado; desmígalo.', 'Calienta 1 l de agua con el dashi y la soja y añade la wakame.', 'Reparte el arroz en cuencos con el salmón encima.', 'Vierte el caldo caliente y termina con nori en tiras, sésamo y cebolleta.']]
    }
  },
  {
    id: 'jp-zosui', n: 'Zosui, sopa de arroz con pollo y huevo', e: '🥣', tipo: 'cena', tags: ['carne', 'ligera', 'rapida'],
    ing: [['arroz', 200], ['pollo_pechuga', 250], ['dashi', 10], ['salsa_soja', 40], ['setas_shiitake', 100], ['zanahoria', 80], ['huevo', 3], ['cebolleta', 2], ['sal', 2]],
    m: {
      fuego: [30, ['Cuece el arroz. Calienta 1,2 l de agua con el dashi y la soja.', 'Añade el pollo en dados pequeños, las setas y la zanahoria en rodajas finas y cuece 8 min.', 'Agrega el arroz y cuece 5 min a fuego suave.', 'Vierte los huevos batidos en hilo, tapa 1 min y sirve con cebolleta.']],
      robot: [30, ['Pon 1,1 l de agua, dashi, soja, pollo, setas y zanahoria: 10 min/100 °C/giro inverso/vel. cuchara.', 'Añade el arroz cocido: 4 min/100 °C/giro inverso/vel. cuchara.', 'Vierte el huevo batido por la boca: 1 min/90 °C/giro inverso/vel. cuchara. Sirve con cebolleta.']]
    }
  },
  {
    id: 'jp-menchi-katsu', n: 'Menchi katsu (hamburguesa empanada)', e: '🥩', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['carne_picada', 600], ['cebolla', 150], ['huevo', 3], ['panko', 150], ['harina', 50], ['salsa_worcestershire', 40], ['ketchup', 40], ['repollo', 300], ['arroz', 250], ['aceite', 250], ['sal', 4]],
    m: {
      fuego: [40, ['Cuece el arroz. Mezcla la carne con la cebolla picada, 1 huevo, 30 g de panko y sal. Forma 8 hamburguesas pequeñas y gruesas.', 'Pásalas por harina, el resto del huevo batido y panko.', 'Fríelas en aceite a 170 °C 3–4 min por lado.', 'Sirve con repollo en tiras finas, arroz y la salsa de Worcestershire con kétchup.']],
      airfryer: [35, ['Prepara y empana las hamburguesas.', 'Pulverízalas con aceite y cocínalas 14 min a 190 °C, girándolas a mitad.', 'Sirve con repollo, arroz y la salsa.']]
    }
  },
  {
    id: 'jp-kakuni', n: 'Kakuni, panceta guisada a la japonesa', e: '🥘', tipo: 'comida', tags: ['carne'],
    ing: [['panceta_fresca', 800], ['salsa_soja', 70], ['mirin', 70], ['azucar', 30], ['jengibre', 25], ['cebolleta', 2], ['huevo', 4], ['daikon', 300], ['arroz', 250]],
    m: {
      fuego: [120, ['Corta la panceta en dados grandes, dórala por todos lados y cuécela en agua con el jengibre y la parte verde de la cebolleta 60 min.', 'Escúrrela y ponla en una cazuela con 300 ml de su caldo, la soja, el mirin, el azúcar y el daikon en rodajas gruesas.', 'Cuece tapado a fuego suave 40 min. Añade los huevos cocidos y pelados los últimos 10 min.', 'Reduce la salsa y sirve con arroz.']],
      robot: [100, ['Dora la panceta en sartén.', 'Pon en el vaso la panceta, el jengibre, la soja, el mirin, el azúcar, el daikon y 400 ml de agua: 75 min/100 °C/giro inverso/vel. cuchara.', 'Añade los huevos cocidos los últimos 10 min y reduce la salsa en sartén. Sirve con arroz.']]
    }
  },
  {
    id: 'jp-tonjiru', n: 'Tonjiru, sopa de cerdo y miso', e: '🍲', tipo: 'cena', tags: ['carne'],
    ing: [['panceta_fresca', 250], ['daikon', 250], ['zanahoria', 150], ['patata', 300], ['tofu', 200], ['puerro', 1], ['miso', 90], ['dashi', 10], ['aceite_sesamo', 10]],
    m: {
      fuego: [35, ['Saltea la panceta en lonchas finas con el aceite de sésamo 3 min.', 'Añade el daikon, la zanahoria y la patata en trozos pequeños y 1,3 l de agua con el dashi. Cuece 15 min.', 'Añade el tofu y el puerro en rodajas y cuece 3 min.', 'Baja el fuego, disuelve el miso sin que hierva y sirve.']],
      robot: [35, ['Sofríe la panceta con el aceite de sésamo 3 min/120 °C/giro inverso/vel. cuchara.', 'Añade verduras, 1,2 l de agua y dashi: 18 min/100 °C/giro inverso/vel. cuchara.', 'Añade tofu, puerro y miso: 3 min/90 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'jp-kenchinjiru', n: 'Kenchinjiru, sopa de verduras y tofu', e: '🥕', tipo: 'cena', tags: ['vegetariano', 'ligera'],
    ing: [['tofu', 300], ['daikon', 250], ['zanahoria', 150], ['boniato', 200], ['setas_shiitake', 150], ['puerro', 1], ['caldo_verduras', 1300], ['salsa_soja', 50], ['mirin', 20], ['aceite_sesamo', 15]],
    m: {
      fuego: [35, ['Saltea el daikon, la zanahoria, el boniato y las setas en trozos pequeños con el aceite de sésamo 4 min.', 'Desmenuza el tofu con las manos y saltéalo 2 min.', 'Añade el caldo, la soja y el mirin y cuece 15 min.', 'Añade el puerro en rodajas los últimos 3 min y sirve.']],
      robot: [35, ['Sofríe las verduras con el aceite de sésamo 5 min/120 °C/giro inverso/vel. cuchara.', 'Añade el tofu desmenuzado, el caldo, la soja y el mirin: 18 min/100 °C/giro inverso/vel. cuchara.', 'Añade el puerro: 3 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'jp-takikomi-gohan', n: 'Takikomi gohan (arroz con pollo y setas)', e: '🍄', tipo: 'comida', tags: ['carne'],
    ing: [['arroz', 400], ['pollo_muslos', 300], ['setas_shiitake', 150], ['zanahoria', 100], ['dashi', 6], ['salsa_soja', 50], ['mirin', 40], ['cebolleta', 2], ['espinacas', 300]],
    m: {
      fuego: [45, ['Lava el arroz hasta que el agua salga clara y escúrrelo 15 min.', 'Ponlo en una olla con 450 ml de agua con el dashi, la soja y el mirin. Coloca encima el pollo en dados, las setas y la zanahoria en tiras.', 'Lleva a ebullición, tapa y cuece 15 min a fuego suave. Deja reposar 10 min sin destapar.', 'Mezcla con cuidado y sirve con cebolleta y espinacas salteadas.']],
      robot: [45, ['Pon en el vaso 500 ml de agua con dashi, soja y mirin. Pon el arroz lavado en el cestillo y el pollo, las setas y la zanahoria en el Varoma: 20 min/Varoma/vel. 4.', 'Mezcla el arroz con el pollo y las verduras y un poco del caldo.', 'Sirve con cebolleta y espinacas salteadas.']]
    }
  },
  {
    id: 'jp-tori-nanban', n: 'Pollo nanban con salsa tártara', e: '🍗', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_muslos', 700], ['harina', 50], ['huevo', 4], ['salsa_soja', 40], ['vinagre_arroz', 40], ['azucar', 25], ['mayonesa', 80], ['pepinillos', 30], ['cebolla', 50], ['lechuga', 1], ['arroz', 250], ['aceite', 200]],
    m: {
      fuego: [40, ['Cuece el arroz. Cuece 2 huevos 10 min y pícalos con los pepinillos y la cebolla; mézclalos con la mayonesa.', 'Mezcla la soja, el vinagre y el azúcar.', 'Pasa los contramuslos por harina y por los otros 2 huevos batidos y fríelos 4 min por lado.', 'Báñalos con la salsa de soja y vinagre, córtalos en tiras y sirve con la tártara, lechuga y arroz.']],
      airfryer: [35, ['Pasa el pollo por harina y huevo, pulverízalo con aceite y cocínalo 18 min a 200 °C.', 'Báñalo con la salsa de soja, vinagre y azúcar.', 'Sirve con la tártara de huevo, lechuga y arroz.']]
    }
  },
  {
    id: 'jp-curry-udon', n: 'Udon al curry', e: '🍜', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['udon', 400], ['cerdo_lomo', 300], ['cebolla', 200], ['curry_japones', 1], ['dashi', 8], ['salsa_soja', 30], ['mirin', 30], ['cebolleta', 2], ['aceite', 15]],
    m: {
      fuego: [25, ['Saltea el cerdo en tiras finas y la cebolla en juliana 4 min.', 'Añade 1 l de agua con el dashi, la soja y el mirin y cuece 6 min.', 'Apaga el fuego, disuelve la mitad de la caja de curry y cuece 3 min hasta que espese ligeramente.', 'Cuece los udon, repártelos en cuencos y cubre con el caldo de curry y cebolleta.']]
    }
  },
  {
    id: 'jp-tendon', n: 'Tendon (arroz con tempura y salsa)', e: '🍤', tipo: 'comida', tags: ['pescado'],
    ing: [['langostinos_crudos', 400], ['calabaza', 200], ['berenjena', 200], ['pimiento_verde', 100], ['harina', 150], ['huevo', 1], ['salsa_soja', 60], ['mirin', 60], ['azucar', 15], ['arroz', 300], ['aceite', 500]],
    m: {
      fuego: [45, ['Cuece el arroz. Reduce la soja, el mirin, el azúcar y 60 ml de agua 3 min para hacer la salsa.', 'Mezcla la harina, el huevo y 220 ml de agua helada con pocas vueltas.', 'Pasa los langostinos pelados y las verduras en láminas por la masa y fríelos en aceite a 175 °C 2–3 min.', 'Coloca la tempura sobre el arroz y riégala con la salsa.']]
    }
  },
  {
    id: 'jp-tantanmen', n: 'Tantanmen (ramen picante de sésamo)', e: '🌶️', tipo: 'cena', tags: ['carne'],
    ing: [['noodles', 300], ['cerdo_picado', 300], ['caldo_pollo', 1400], ['tahini', 60], ['miso', 30], ['salsa_soja', 40], ['pimenton_picante', 4], ['ajo', 2], ['jengibre', 10], ['pak_choi', 300], ['leche', 200], ['cebolleta', 2], ['aceite', 20]],
    m: {
      fuego: [30, ['Sofríe ajo, jengibre y la carne picada hasta que se dore. Añade el miso, la mitad de la soja y el pimentón.', 'Calienta el caldo con la leche, el tahini y el resto de la soja, sin que hierva fuerte.', 'Cuece los noodles y escalda el pak choi.', 'Sirve los noodles con el caldo, la carne, el pak choi y cebolleta.']],
      robot: [30, ['Pica ajo y jengibre 3 seg/vel. 5 y sofríe con aceite y la carne 5 min/120 °C/giro inverso/vel. cuchara. Añade miso, pimentón y soja y reserva.', 'Pon el caldo, la leche y el tahini: 10 min/90 °C/vel. 2.', 'Sirve sobre los noodles cocidos con la carne, el pak choi escaldado y la cebolleta.']]
    }
  }
]);
