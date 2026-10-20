/* MC Food Diary · cocina de Corea 🇰🇷. Formato y normas: recetas/GUIA-RECETAS.md */

MC_ADD_ING({
  kimchi: ['Kimchi (bote 400 g)', 'despensa', 4, 'ud', 0, 'col china picada con vinagre, ajo y pimentón picante, reposada unas horas'],
  gochugaru: ['Gochugaru (chile coreano en copos)', 'despensa', 30, 'kg', 0, 'pimentón dulce con una pizca de guindilla'],
  tteok: ['Tteok, pastelitos de arroz coreanos', 'despensa', 9, 'kg', 0, 'ñoquis de patata'],
  pasta_judia_negra: ['Pasta de judía negra (chunjang)', 'despensa', 15, 'kg', 0, 'miso con salsa de soja y una pizca de azúcar'],
  costilla_ternera: ['Costillas de ternera en tira', 'carniceria', 13, 'kg'],
  col_china: ['Col china', 'fruteria', 2.2, 'kg'],
  daikon: ['Rábano daikon', 'fruteria', 3, 'kg', 0, 'nabo'],
  setas_shiitake: ['Setas shiitake', 'fruteria', 14, 'kg'],
  cerdo_picado: ['Carne picada de cerdo', 'carniceria', 6.5, 'kg'],
  panceta_fresca: ['Panceta de cerdo fresca', 'carniceria', 7, 'kg'],
  obleas_gyoza: ['Obleas para gyozas o wantán', 'congelados', 3, 'ud', 0, 'obleas finas de empanadilla'],
  wakame: ['Alga wakame deshidratada', 'despensa', 40, 'kg', 0, 'se puede omitir'],
  udon: ['Fideos udon', 'despensa', 6, 'kg', 0, 'noodles de huevo o espaguetis gruesos'],
  soba: ['Fideos soba', 'despensa', 8, 'kg', 0, 'espaguetis finos'],
  caballa: ['Caballa', 'pescaderia', 6, 'kg'],
  surimi: ['Palitos de surimi', 'pescaderia', 6, 'kg']
});

MC_ADD('kr', [
  {
    id: 'bibimbap', n: 'Bibimbap', e: '🍲', tipo: 'comida', tags: ['carne'],
    ing: [['arroz', 300], ['carne_picada', 350], ['espinacas', 200], ['zanahoria', 150], ['calabacin', 200], ['huevo', 4], ['salsa_soja', 40], ['gochujang', 1], ['ajo', 2], ['azucar', 10], ['aceite', 30]],
    m: {
      fuego: [35, ['Cuece el arroz.', 'Saltea la carne con ajo, soja y azúcar.', 'Saltea por separado las espinacas, la zanahoria en tiras y el calabacín con un poco de sal.', 'Sirve cuencos de arroz con la carne y las verduras por grupos, un huevo frito encima y gochujang al gusto.']]
    }
  },
  {
    id: 'pollo-coreano', n: 'Pollo frito coreano', e: '🍗', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['pollo_muslos', 700], ['maicena', 80], ['gochujang', 1], ['miel', 50], ['salsa_soja', 30], ['ajo', 3], ['arroz', 250], ['pepino', 200], ['aceite', 200], ['sal', 3]],
    m: {
      airfryer: [35, ['Corta el pollo en trozos, sálalo y rebózalo en maicena. Pulverízalo con aceite.', 'Cocina 18 min a 200 °C, girándolo a mitad.', 'Calienta en un cazo el gochujang, la miel, la soja y el ajo picado 2 min y baña el pollo.', 'Sirve con arroz y pepino en rodajas.']],
      fuego: [40, ['Reboza el pollo en maicena y fríelo en aceite caliente 6 min. Escúrrelo.', 'Prepara la salsa de gochujang, miel, soja y ajo en una sartén y mezcla con el pollo.', 'Sirve con arroz y pepino.']]
    }
  },
  {
    id: 'bulgogi', n: 'Bulgogi de ternera', e: '🥩', tipo: 'comida', tags: ['carne', 'rapida'],
    ing: [['ternera_filetes', 500], ['cebolla', 150], ['zanahoria', 100], ['cebolleta', 2], ['salsa_soja', 60], ['azucar', 20], ['ajo', 3], ['jengibre', 10], ['arroz', 250], ['lechuga', 1], ['aceite', 20]],
    m: {
      fuego: [25, ['Corta la ternera en tiras muy finas y marínala 10 min con soja, azúcar, ajo y jengibre rallados.', 'Saltea la cebolla y la zanahoria en tiras 3 min a fuego fuerte.', 'Añade la ternera con la marinada y saltea 3 min. Termina con cebolleta.', 'Sirve con arroz y hojas de lechuga para envolver.']],
      airfryer: [22, ['Marina la ternera y mézclala con la cebolla y la zanahoria.', 'Cocina 8 min a 200 °C, removiendo a mitad.', 'Sirve con arroz, cebolleta y lechuga.']]
    }
  },
  /* ---- Tanda 1 ---- */
  {
    id: 'kr-japchae', n: 'Japchae (fideos salteados con ternera y verduras)', e: '🍜', tipo: 'comida', tags: ['carne'],
    ing: [['fideos_arroz', 250], ['ternera_filetes', 250], ['espinacas', 200], ['zanahoria', 120], ['pimiento_rojo', 120], ['cebolla', 120], ['setas_shiitake', 120], ['huevo', 2], ['salsa_soja', 70], ['azucar', 25], ['ajo', 3], ['aceite_sesamo', 25], ['sesamo', 10], ['aceite', 30]],
    m: {
      fuego: [40, ['Cuece o hidrata los fideos, escúrrelos, córtalos con tijera y mézclalos con la mitad del aceite de sésamo y 20 ml de soja.', 'Marina la ternera en tiras con ajo, 20 ml de soja y 10 g de azúcar. Haz una tortilla fina con los huevos y córtala en tiras.', 'Saltea por separado las espinacas, la zanahoria, el pimiento, la cebolla y las setas en tiras; saltea la ternera 2 min.', 'Mezcla todo con los fideos, el resto de la soja, del azúcar y del aceite de sésamo. Termina con sésamo.']]
    }
  },
  {
    id: 'kr-kimchi-jjigae', n: 'Kimchi jjigae (guiso de kimchi con cerdo y tofu)', e: '🍲', tipo: 'cena', tags: ['carne'],
    ing: [['kimchi', 1], ['panceta_fresca', 300], ['tofu', 300], ['cebolla', 100], ['cebolleta', 2], ['gochugaru', 5], ['gochujang', 1], ['ajo', 2], ['caldo_pollo', 700], ['arroz', 250], ['aceite_sesamo', 10]],
    m: {
      fuego: [35, ['Cuece el arroz. Sofríe la panceta en tiras con el aceite de sésamo 4 min.', 'Añade el kimchi troceado con su jugo, la cebolla y el ajo y sofríe 5 min.', 'Agrega el caldo, el gochugaru y 1 cucharada de gochujang y cuece 15 min.', 'Añade el tofu en dados, cuece 5 min y sirve con cebolleta y arroz.']],
      robot: [35, ['Sofríe la panceta con aceite de sésamo 4 min/120 °C/giro inverso/vel. cuchara.', 'Añade kimchi, cebolla y ajo: 5 min/120 °C/giro inverso/vel. cuchara.', 'Añade caldo, gochugaru y gochujang: 15 min/100 °C/giro inverso/vel. cuchara. Añade el tofu: 5 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'kr-sundubu-jjigae', n: 'Sundubu jjigae (guiso picante de tofu y marisco)', e: '🌶️', tipo: 'cena', tags: ['pescado', 'rapida'],
    ing: [['tofu', 500], ['almejas', 300], ['gambas', 200], ['calabacin', 150], ['cebolla', 100], ['gochugaru', 10], ['ajo', 3], ['salsa_soja', 30], ['caldo_pescado', 700], ['huevo', 4], ['cebolleta', 2], ['arroz', 250], ['aceite', 20]],
    m: {
      fuego: [30, ['Cuece el arroz. Sofríe la cebolla y el ajo picados con el aceite y el gochugaru 1 min, sin que se queme.', 'Añade el caldo, la soja y el calabacín en dados y cuece 5 min.', 'Incorpora el tofu en trozos grandes, las almejas y las gambas y cuece 5 min, hasta que se abran las almejas.', 'Casca un huevo por ración encima, deja que cuaje 2 min y sirve con cebolleta y arroz.']]
    }
  },
  {
    id: 'kr-doenjang-jjigae', n: 'Doenjang jjigae (guiso de pasta de soja con verduras)', e: '🥘', tipo: 'cena', tags: ['vegetariano', 'ligera', 'rapida'],
    ing: [['miso', 80], ['tofu', 300], ['calabacin', 200], ['patata', 200], ['cebolla', 100], ['champinon', 150], ['ajo', 2], ['gochugaru', 3], ['caldo_verduras', 800], ['cebolleta', 2], ['arroz', 250]],
    m: {
      fuego: [30, ['Cuece el arroz. Calienta el caldo y disuelve el miso.', 'Añade la patata en dados y el ajo y cuece 8 min.', 'Agrega el calabacín, la cebolla, los champiñones y el gochugaru y cuece 6 min.', 'Añade el tofu en dados, cuece 3 min y sirve con cebolleta y arroz.']],
      robot: [30, ['Pon caldo, miso, patata y ajo: 8 min/100 °C/giro inverso/vel. cuchara.', 'Añade calabacín, cebolla, champiñones y gochugaru: 7 min/100 °C/giro inverso/vel. cuchara.', 'Añade el tofu: 3 min/100 °C/giro inverso/vel. cuchara. Sirve con cebolleta y arroz.']]
    }
  },
  {
    id: 'kr-kimchi-bokkeumbap', n: 'Arroz frito con kimchi (kimchi bokkeumbap)', e: '🍳', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['arroz', 300], ['kimchi', 1], ['bacon', 150], ['cebolla', 100], ['gochujang', 1], ['salsa_soja', 20], ['huevo', 4], ['aceite_sesamo', 15], ['cebolleta', 2], ['nori', 1], ['aceite', 20]],
    m: {
      fuego: [25, ['Cuece el arroz y deja que se enfríe (o usa arroz del día anterior).', 'Saltea el bacon y la cebolla 3 min. Añade el kimchi picado con un poco de su jugo y saltea 4 min.', 'Agrega el arroz, 1 cucharada de gochujang y la soja y saltea 3 min a fuego fuerte. Termina con aceite de sésamo.', 'Sirve con un huevo frito encima, cebolleta y nori en tiras.']]
    }
  },
  {
    id: 'kr-kimchijeon', n: 'Kimchijeon (tortitas de kimchi)', e: '🥞', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['kimchi', 1], ['harina', 200], ['huevo', 1], ['cebolleta', 3], ['cebolla', 100], ['salsa_soja', 40], ['vinagre_arroz', 20], ['sesamo', 5], ['aceite', 50]],
    m: {
      fuego: [25, ['Pica el kimchi y mézclalo con su jugo, la harina, el huevo, la cebolla en juliana, la cebolleta en trozos y 150 ml de agua fría.', 'Vierte la masa en una sartén con aceite caliente formando tortitas finas.', 'Cocínalas 3 min por lado hasta que estén crujientes.', 'Sírvelas cortadas con la soja mezclada con el vinagre y el sésamo.']]
    }
  },
  {
    id: 'kr-haemul-pajeon', n: 'Haemul pajeon (tortita de cebolleta y marisco)', e: '🥞', tipo: 'cena', tags: ['pescado', 'rapida'],
    ing: [['harina', 200], ['maicena', 40], ['huevo', 2], ['cebolleta', 6], ['gambas', 200], ['calamar', 200], ['salsa_soja', 40], ['vinagre_arroz', 20], ['gochugaru', 2], ['aceite', 50], ['sal', 2]],
    m: {
      fuego: [30, ['Mezcla la harina, la maicena, la sal y 280 ml de agua fría.', 'Pon en la sartén con aceite las cebolletas cortadas a lo largo, cubre con las gambas y el calamar picados y vierte la masa por encima.', 'Añade un huevo batido sobre cada tortita y cocina 4 min por lado a fuego medio.', 'Sirve en porciones con la soja mezclada con el vinagre y el gochugaru.']]
    }
  },
  {
    id: 'kr-tteokbokki', n: 'Tteokbokki (pastelitos de arroz picantes)', e: '🌶️', tipo: 'cena', tags: ['pescado', 'rapida'],
    ing: [['tteok', 600], ['surimi', 200], ['gochujang', 1], ['gochugaru', 5], ['salsa_soja', 30], ['azucar', 25], ['repollo', 150], ['cebolleta', 3], ['huevo', 4], ['caldo_pescado', 500]],
    m: {
      fuego: [25, ['Cuece los huevos 9 min y pélalos. Si los tteok están duros, remójalos 10 min en agua.', 'Calienta el caldo con 3 cucharadas de gochujang, el gochugaru, la soja y el azúcar.', 'Añade los tteok, el repollo en trozos y el surimi y cuece 10 min removiendo hasta que la salsa espese.', 'Añade la cebolleta y los huevos partidos y sirve.']]
    }
  },
  {
    id: 'kr-dakgalbi', n: 'Dakgalbi (pollo picante con verduras)', e: '🍗', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_muslos', 700], ['gochujang', 1], ['gochugaru', 5], ['salsa_soja', 30], ['azucar', 20], ['ajo', 3], ['repollo', 300], ['boniato', 300], ['cebolla', 150], ['cebolleta', 2], ['arroz', 250], ['aceite', 20]],
    m: {
      fuego: [40, ['Mezcla 3 cucharadas de gochujang con el gochugaru, la soja, el azúcar y el ajo y marina el pollo en trozos 15 min.', 'Pon en una sartén grande el repollo, el boniato en bastones finos y la cebolla, y el pollo encima.', 'Añade 100 ml de agua, tapa y cocina 15 min. Destapa y saltea 5 min más hasta que todo esté hecho.', 'Termina con cebolleta y sirve con arroz.']],
      horno: [45, ['Marina el pollo como en la receta tradicional.', 'Ponlo en una bandeja con el repollo, el boniato y la cebolla y hornea 30 min a 200 °C, removiendo a mitad.', 'Sirve con cebolleta y arroz.']]
    }
  },
  {
    id: 'kr-jeyuk-bokkeum', n: 'Jeyuk bokkeum (cerdo picante salteado)', e: '🐖', tipo: 'comida', tags: ['carne', 'rapida'],
    ing: [['cerdo_lomo', 600], ['cebolla', 200], ['cebolleta', 2], ['gochujang', 1], ['gochugaru', 5], ['salsa_soja', 30], ['azucar', 20], ['ajo', 3], ['jengibre', 10], ['lechuga', 1], ['arroz', 250], ['aceite', 20]],
    m: {
      fuego: [25, ['Corta el cerdo en lonchas finas y mézclalo con 3 cucharadas de gochujang, el gochugaru, la soja, el azúcar, el ajo y el jengibre.', 'Saltea la cebolla en juliana 2 min a fuego fuerte.', 'Añade el cerdo y saltéalo 6–7 min hasta que esté hecho y caramelizado.', 'Termina con cebolleta y sirve con arroz y hojas de lechuga para envolver.']]
    }
  },
  {
    id: 'kr-galbi-jjim', n: 'Galbi jjim (costillas de ternera estofadas)', e: '🍖', tipo: 'comida', tags: ['carne'],
    ing: [['costilla_ternera', 1200], ['salsa_soja', 80], ['azucar_moreno', 30], ['manzana', 150], ['ajo', 5], ['jengibre', 15], ['zanahoria', 200], ['daikon', 300], ['setas_shiitake', 100], ['aceite_sesamo', 15], ['arroz', 250]],
    m: {
      fuego: [130, ['Remoja las costillas en agua fría 30 min, escáldalas 5 min y escúrrelas.', 'Tritura la manzana, el ajo y el jengibre con la soja, el azúcar y 300 ml de agua.', 'Cuece las costillas con la salsa y agua hasta cubrir, tapadas a fuego suave, 80 min.', 'Añade la zanahoria y el daikon en trozos y las setas, cuece 25 min más, reduce la salsa y termina con aceite de sésamo. Sirve con arroz.']],
      robot: [100, ['Tritura manzana, ajo, jengibre, soja, azúcar y 300 ml de agua 15 seg/vel. 8.', 'Añade las costillas escaldadas: 70 min/100 °C/giro inverso/vel. cuchara.', 'Añade zanahoria, daikon y setas: 20 min/100 °C/giro inverso/vel. cuchara. Termina con aceite de sésamo.']]
    }
  },
  {
    id: 'kr-la-galbi', n: 'Costillas de ternera marinadas a la plancha (galbi)', e: '🥩', tipo: 'comida', tags: ['carne'],
    ing: [['costilla_ternera', 1000], ['salsa_soja', 80], ['azucar_moreno', 30], ['manzana', 150], ['cebolla', 100], ['ajo', 4], ['aceite_sesamo', 15], ['cebolleta', 2], ['lechuga', 1], ['arroz', 250]],
    m: {
      fuego: [30, ['Pide las costillas cortadas finas en tira. Tritura la manzana, la cebolla y el ajo con la soja, el azúcar y el aceite de sésamo.', 'Marina las costillas al menos 2 horas (mejor toda la noche).', 'Hazlas a la plancha o en sartén muy caliente 3 min por lado.', 'Córtalas con tijera y sirve con cebolleta, lechuga para envolver y arroz.']],
      airfryer: [25, ['Marina las costillas como en la receta tradicional.', 'Cocínalas 12 min a 200 °C, girándolas a mitad.', 'Sirve con cebolleta, lechuga y arroz.']],
      horno: [30, ['Marina las costillas como en la receta tradicional.', 'Gratínalas a 230 °C 15 min, dándoles la vuelta a mitad.', 'Sirve con cebolleta, lechuga y arroz.']]
    }
  },
  {
    id: 'kr-samgyeopsal', n: 'Samgyeopsal (panceta a la plancha con lechuga)', e: '🥬', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['panceta_fresca', 800], ['lechuga', 2], ['ajo', 6], ['miso', 40], ['gochujang', 1], ['aceite_sesamo', 15], ['cebolleta', 3], ['kimchi', 1], ['arroz', 250], ['sal', 3]],
    m: {
      fuego: [25, ['Cuece el arroz. Mezcla el miso, 1 cucharada de gochujang y el aceite de sésamo para hacer la salsa ssamjang.', 'Haz la panceta en lonchas a la plancha con sal 3–4 min por lado, hasta que esté dorada, junto con los ajos laminados.', 'Corta la panceta en trozos con tijera.', 'Sirve en la mesa con hojas de lechuga para envolver, la salsa, el ajo, la cebolleta en tiras, el kimchi y el arroz.']],
      airfryer: [25, ['Cocina la panceta en lonchas 15 min a 200 °C, girándola a mitad.', 'Prepara la salsa ssamjang con miso, gochujang y aceite de sésamo.', 'Sirve con lechuga, ajo, cebolleta, kimchi y arroz.']]
    }
  },
  {
    id: 'kr-bossam', n: 'Bossam (panceta cocida con col)', e: '🥬', tipo: 'comida', tags: ['carne'],
    ing: [['panceta_fresca', 900], ['miso', 40], ['ajo', 6], ['jengibre', 20], ['cebolla', 150], ['col_china', 500], ['gochugaru', 10], ['salsa_soja', 20], ['azucar', 10], ['vinagre_arroz', 20], ['arroz', 250]],
    m: {
      fuego: [80, ['Cuece la panceta entera con agua, el miso, la cebolla, la mitad del ajo y el jengibre 60 min a fuego suave.', 'Mientras, escalda las hojas de col china 1 min o déjalas crudas si son tiernas.', 'Mezcla el gochugaru con el resto del ajo picado, la soja, el azúcar y el vinagre para aliñar parte de la col en tiras.', 'Corta la panceta en lonchas y sirve para envolver en las hojas de col, con la col aliñada y arroz.']],
      robot: [70, ['Pon la panceta en el Varoma y en el vaso 1,2 l de agua con miso, cebolla, ajo y jengibre: 60 min/Varoma/vel. 1.', 'Prepara la col aliñada con gochugaru, ajo, soja, azúcar y vinagre.', 'Sirve la panceta en lonchas con las hojas de col y arroz.']]
    }
  },
  {
    id: 'kr-dakdoritang', n: 'Dakdoritang (guiso picante de pollo y patatas)', e: '🍲', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_entero', 1200], ['patata', 500], ['zanahoria', 200], ['cebolla', 200], ['gochujang', 1], ['gochugaru', 10], ['salsa_soja', 50], ['azucar', 15], ['ajo', 5], ['jengibre', 10], ['cebolleta', 2], ['arroz', 250]],
    m: {
      fuego: [55, ['Escalda el pollo troceado 3 min y escúrrelo.', 'Ponlo en una cazuela con 3 cucharadas de gochujang, el gochugaru, la soja, el azúcar, el ajo, el jengibre y 700 ml de agua. Cuece 15 min.', 'Añade la patata y la zanahoria en trozos grandes y la cebolla y cuece 20 min, hasta que la salsa espese.', 'Termina con cebolleta y sirve con arroz.']],
      robot: [50, ['Pon el pollo, el gochujang, el gochugaru, la soja, el azúcar, el ajo, el jengibre y 600 ml de agua: 15 min/100 °C/giro inverso/vel. cuchara.', 'Añade patata, zanahoria y cebolla: 22 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con cebolleta y arroz.']]
    }
  },
  {
    id: 'kr-samgyetang', n: 'Samgyetang (sopa de pollo con arroz y ajo)', e: '🐔', tipo: 'comida', tags: ['carne', 'ligera'],
    ing: [['pollo_muslos', 1000], ['arroz', 120], ['ajo', 10], ['jengibre', 30], ['datiles', 40], ['cebolleta', 3], ['sal', 6], ['pimienta', 2]],
    m: {
      fuego: [70, ['Pon los muslos en una olla con 2 l de agua, los ajos enteros, el jengibre en láminas y los dátiles.', 'Cuece 30 min a fuego suave, retirando la espuma.', 'Añade el arroz lavado y cuece 25 min más.', 'Sirve en cuencos y deja que cada uno añada sal, pimienta y cebolleta al gusto.']],
      robot: [60, ['Pon el pollo, 1,4 l de agua, los ajos, el jengibre y los dátiles: 25 min/100 °C/giro inverso/vel. cuchara.', 'Añade el arroz: 20 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con sal, pimienta y cebolleta.']]
    }
  },
  {
    id: 'kr-yukgaejang', n: 'Yukgaejang (sopa picante de ternera)', e: '🌶️', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_guisar', 500], ['brotes_soja', 250], ['setas_shiitake', 150], ['puerro', 2], ['gochugaru', 15], ['salsa_soja', 50], ['ajo', 5], ['aceite_sesamo', 20], ['huevo', 2], ['arroz', 250]],
    m: {
      fuego: [120, ['Cuece la ternera en 2 l de agua 80 min, sácala y desmígala; guarda el caldo.', 'Mezcla la carne con el gochugaru, la soja, el ajo y el aceite de sésamo.', 'Vuelve a poner la carne en el caldo con los brotes, las setas y los puerros en tiras largas y cuece 20 min.', 'Vierte los huevos batidos en hilo y sirve con arroz.']],
      robot: [80, ['Pon la ternera y 1,4 l de agua: 50 min/100 °C/giro inverso/vel. cuchara. Saca la carne y desmígala.', 'Mezcla la carne con gochugaru, soja, ajo y aceite de sésamo y vuelve a ponerla en el vaso con brotes, setas y puerro: 15 min/100 °C/giro inverso/vel. cuchara.', 'Añade el huevo por la boca 1 min/90 °C/giro inverso/vel. cuchara. Sirve con arroz.']]
    }
  },
  /* ---- Tanda 2 ---- */
  {
    id: 'kr-miyeok-guk', n: 'Miyeok guk (sopa de algas con ternera)', e: '🥣', tipo: 'cena', tags: ['carne', 'ligera', 'rapida'],
    ing: [['wakame', 20], ['ternera_filetes', 250], ['ajo', 3], ['salsa_soja', 40], ['aceite_sesamo', 20], ['sal', 3], ['arroz', 250]],
    m: {
      fuego: [30, ['Cuece el arroz. Hidrata la wakame en agua fría 10 min, escúrrela y córtala en trozos.', 'Saltea la ternera en tiras pequeñas con el aceite de sésamo 2 min y añade la wakame y el ajo picado 2 min más.', 'Añade 1,5 l de agua y la soja y cuece 15 min a fuego medio.', 'Ajusta de sal y sirve con arroz.']],
      robot: [30, ['Sofríe la ternera con el aceite de sésamo y el ajo 3 min/120 °C/giro inverso/vel. cuchara.', 'Añade la wakame hidratada, 1,4 l de agua y la soja: 15 min/100 °C/giro inverso/vel. cuchara.', 'Ajusta de sal y sirve con arroz.']]
    }
  },
  {
    id: 'kr-kalguksu', n: 'Kalguksu (sopa de fideos con pollo)', e: '🍜', tipo: 'cena', tags: ['carne'],
    ing: [['pollo_muslos', 600], ['udon', 400], ['calabacin', 200], ['patata', 200], ['cebolla', 100], ['ajo', 4], ['salsa_soja', 40], ['cebolleta', 2], ['gochugaru', 3], ['sal', 4]],
    m: {
      fuego: [50, ['Cuece el pollo en 2 l de agua con la cebolla y el ajo 25 min. Sácalo, desmígalo y cuela el caldo.', 'Añade al caldo la patata en láminas y cuece 5 min.', 'Incorpora los fideos y el calabacín en tiras y cuece según el paquete. Sazona con soja y sal.', 'Sirve con el pollo desmigado, la cebolleta y el gochugaru al gusto.']],
      robot: [45, ['Pon el pollo, 1,3 l de agua, la cebolla y el ajo: 25 min/100 °C/giro inverso/vel. cuchara. Saca el pollo y desmígalo.', 'Añade la patata, los fideos y el calabacín: tiempo del paquete/100 °C/giro inverso/vel. cuchara.', 'Sazona y sirve con el pollo, cebolleta y gochugaru.']]
    }
  },
  {
    id: 'kr-bibim-guksu', n: 'Bibim guksu (fideos fríos picantes)', e: '🥒', tipo: 'comida', tags: ['vegetariano', 'rapida'],
    ing: [['soba', 350], ['gochujang', 1], ['vinagre_arroz', 40], ['azucar', 20], ['salsa_soja', 20], ['aceite_sesamo', 20], ['pepino', 250], ['kimchi', 1], ['huevo', 4], ['sesamo', 10]],
    m: {
      fuego: [20, ['Cuece los huevos 9 min, enfríalos y pártelos por la mitad.', 'Mezcla 3 cucharadas de gochujang con el vinagre, el azúcar, la soja y el aceite de sésamo.', 'Cuece los fideos, enfríalos bajo el grifo frotándolos y escúrrelos bien.', 'Mezcla los fideos con la salsa y sirve con pepino en tiras, kimchi picado, medio huevo y sésamo.']]
    }
  },
  {
    id: 'kr-jajangmyeon', n: 'Jajangmyeon (fideos con salsa de judía negra)', e: '🍝', tipo: 'comida', tags: ['carne'],
    ing: [['noodles', 350], ['panceta_fresca', 300], ['pasta_judia_negra', 100], ['patata', 250], ['calabacin', 200], ['cebolla', 300], ['azucar', 15], ['maicena', 20], ['pepino', 150], ['aceite', 40]],
    m: {
      fuego: [40, ['Fríe la pasta de judía negra en el aceite 2 min a fuego suave y resérvala, dejando el aceite.', 'En ese aceite, saltea la panceta en dados 4 min y añade la patata, el calabacín y la cebolla en dados. Cocina 6 min.', 'Agrega la pasta frita, el azúcar y 400 ml de agua y cuece 10 min. Espesa con la maicena disuelta.', 'Cuece los noodles y sírvelos con la salsa por encima y pepino en tiras finas.']],
      robot: [40, ['Sofríe la pasta de judía negra en el aceite 2 min/100 °C/vel. 1.', 'Añade panceta, patata, calabacín y cebolla en dados: 8 min/120 °C/giro inverso/vel. cuchara.', 'Añade el azúcar, 400 ml de agua y la maicena disuelta: 12 min/100 °C/giro inverso/vel. cuchara. Sirve sobre los noodles con pepino.']]
    }
  },
  {
    id: 'kr-jjamppong', n: 'Jjamppong (sopa picante de marisco con fideos)', e: '🦑', tipo: 'cena', tags: ['pescado'],
    ing: [['noodles', 300], ['mejillones', 500], ['calamar', 250], ['gambas', 200], ['repollo', 200], ['cebolla', 150], ['zanahoria', 100], ['calabacin', 150], ['gochugaru', 15], ['ajo', 4], ['jengibre', 10], ['salsa_soja', 40], ['caldo_pollo', 1500], ['aceite', 40]],
    m: {
      fuego: [40, ['Sofríe ajo y jengibre en el aceite, añade el gochugaru y remueve 30 seg sin que se queme.', 'Añade la cebolla, la zanahoria, el repollo y el calabacín en tiras y saltea 4 min a fuego fuerte.', 'Agrega el caldo y la soja y cuece 8 min. Añade los mejillones, el calamar y las gambas y cuece 5 min.', 'Cuece los noodles aparte y sírvelos cubiertos con la sopa y el marisco.']]
    }
  },
  {
    id: 'kr-kimbap', n: 'Kimbap (rollos coreanos de arroz)', e: '🍙', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['arroz', 450], ['nori', 1], ['jamon_cocido', 150], ['surimi', 150], ['huevo', 3], ['espinacas', 200], ['zanahoria', 150], ['pepinillos', 100], ['aceite_sesamo', 25], ['sesamo', 10], ['sal', 5], ['aceite', 15]],
    m: {
      fuego: [50, ['Cuece el arroz y mézclalo con la sal, 15 ml de aceite de sésamo y el sésamo.', 'Haz una tortilla gruesa con los huevos y córtala en tiras. Saltea la zanahoria en bastones 2 min y escalda las espinacas 30 seg; escúrrelas y alíñalas con el resto del aceite de sésamo.', 'Extiende arroz sobre una hoja de nori, pon en línea el jamón, el surimi, el huevo, las verduras y los pepinillos en tiras y enrolla apretando.', 'Pinta el rollo con aceite de sésamo y córtalo en rodajas con un cuchillo mojado.']]
    }
  },
  {
    id: 'kr-dubu-jorim', n: 'Dubu jorim (tofu estofado picante)', e: '🍢', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['tofu', 600], ['salsa_soja', 50], ['gochugaru', 8], ['azucar', 10], ['ajo', 3], ['cebolleta', 3], ['aceite_sesamo', 15], ['sesamo', 10], ['arroz', 250], ['espinacas', 300], ['aceite', 30]],
    m: {
      fuego: [25, ['Cuece el arroz. Corta el tofu en rectángulos de 1 cm, sécalo y dóralo en sartén con aceite 3 min por lado.', 'Mezcla la soja, el gochugaru, el azúcar, el ajo picado, la cebolleta, el aceite de sésamo y 100 ml de agua.', 'Vierte la salsa sobre el tofu y cuece 5–6 min, bañándolo, hasta que se reduzca.', 'Espolvorea sésamo y sirve con arroz y espinacas salteadas.']]
    }
  },
  {
    id: 'kr-caballa-jorim', n: 'Caballa estofada con daikon (godeungeo jorim)', e: '🐟', tipo: 'comida', tags: ['pescado'],
    ing: [['caballa', 800], ['daikon', 400], ['cebolla', 150], ['gochugaru', 10], ['gochujang', 1], ['salsa_soja', 50], ['azucar', 10], ['ajo', 4], ['jengibre', 15], ['cebolleta', 2], ['arroz', 250]],
    m: {
      fuego: [40, ['Cuece el arroz. Corta el daikon en rodajas de 1 cm y ponlo en el fondo de una cazuela con la cebolla en gajos.', 'Mezcla el gochugaru, 1 cucharada de gochujang, la soja, el azúcar, el ajo, el jengibre y 300 ml de agua y viértelo encima. Cuece 10 min.', 'Coloca la caballa en trozos sobre el daikon, riega con la salsa y cuece tapado 15 min a fuego medio.', 'Destapa, baña el pescado con la salsa 3 min y sirve con cebolleta y arroz.']]
    }
  },
  {
    id: 'kr-ojingeo-bokkeum', n: 'Calamar picante salteado (ojingeo bokkeum)', e: '🦑', tipo: 'cena', tags: ['pescado', 'rapida'],
    ing: [['calamar', 700], ['cebolla', 150], ['zanahoria', 100], ['repollo', 200], ['cebolleta', 2], ['gochujang', 1], ['gochugaru', 5], ['salsa_soja', 30], ['azucar', 15], ['ajo', 3], ['aceite_sesamo', 10], ['arroz', 250], ['aceite', 20]],
    m: {
      fuego: [25, ['Cuece el arroz. Corta el calamar en tiras o anillas y haz cortes en rombo si es grueso.', 'Mezcla 2 cucharadas de gochujang con el gochugaru, la soja, el azúcar y el ajo.', 'Saltea la cebolla, la zanahoria y el repollo 3 min a fuego fuerte. Añade el calamar y la salsa y saltea 3 min.', 'Termina con cebolleta y aceite de sésamo y sirve con arroz.']]
    }
  },
  {
    id: 'kr-kongnamul-bap', n: 'Arroz con brotes de soja y carne (kongnamul bap)', e: '🌱', tipo: 'comida', tags: ['carne', 'rapida'],
    ing: [['arroz', 350], ['brotes_soja', 400], ['carne_picada_ternera', 250], ['salsa_soja', 70], ['ajo', 3], ['cebolleta', 3], ['gochugaru', 5], ['aceite_sesamo', 20], ['sesamo', 10], ['azucar', 5]],
    m: {
      fuego: [30, ['Saltea la carne con el ajo y 20 ml de soja 4 min.', 'Pon el arroz lavado en una olla con 400 ml de agua, cubre con los brotes y la carne, tapa y cuece 15 min a fuego suave. Reposa 5 min.', 'Mezcla el resto de la soja con la cebolleta, el gochugaru, el aceite de sésamo, el sésamo y el azúcar.', 'Sirve el arroz con los brotes y la salsa por encima para mezclar.']],
      robot: [30, ['Sofríe la carne con ajo y soja 4 min/120 °C/giro inverso/vel. cuchara y resérvala.', 'Pon 500 ml de agua en el vaso, el arroz en el cestillo y los brotes y la carne en el Varoma: 18 min/Varoma/vel. 4.', 'Mezcla con la salsa de soja, cebolleta, gochugaru y sésamo.']]
    }
  },
  {
    id: 'kr-hoedeopbap', n: 'Hoedeopbap (arroz con salmón crudo y verduras)', e: '🍣', tipo: 'cena', tags: ['pescado', 'ligera'],
    ing: [['arroz', 300], ['salmon', 400], ['lechuga', 1], ['pepino', 200], ['zanahoria', 100], ['cebolla_morada', 50], ['gochujang', 1], ['vinagre_arroz', 40], ['azucar', 15], ['aceite_sesamo', 15], ['sesamo', 10], ['nori', 1]],
    m: {
      fuego: [30, ['Usa salmón congelado al menos 5 días y descongelado en la nevera. Cuece el arroz y deja que se temple.', 'Mezcla 3 cucharadas de gochujang con el vinagre, el azúcar y el aceite de sésamo.', 'Corta la lechuga, el pepino, la zanahoria y la cebolla en tiras finas y el salmón en dados.', 'Sirve el arroz cubierto con las verduras, el salmón, la salsa, sésamo y nori en tiras, y mezcla al comer.']]
    }
  },
  {
    id: 'kr-jjimdak', n: 'Jjimdak (pollo estofado con soja y fideos)', e: '🍗', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_entero', 1200], ['patata', 400], ['zanahoria', 200], ['cebolla', 200], ['fideos_arroz', 150], ['salsa_soja', 90], ['azucar_moreno', 40], ['ajo', 6], ['jengibre', 15], ['guindilla', 3], ['cebolleta', 2], ['aceite_sesamo', 15]],
    m: {
      fuego: [60, ['Escalda el pollo troceado 3 min y escúrrelo.', 'Ponlo en una cazuela con la soja, el azúcar, el ajo, el jengibre, las guindillas y 700 ml de agua. Cuece tapado 20 min.', 'Añade la patata, la zanahoria y la cebolla en trozos y cuece 20 min.', 'Añade los fideos hidratados, cuece 5 min hasta que absorban la salsa y termina con cebolleta y aceite de sésamo.']],
      robot: [55, ['Pon el pollo, la soja, el azúcar, el ajo, el jengibre, las guindillas y 600 ml de agua: 20 min/100 °C/giro inverso/vel. cuchara.', 'Añade patata, zanahoria y cebolla: 20 min/100 °C/giro inverso/vel. cuchara.', 'Pasa a una cazuela, añade los fideos hidratados y cuece 5 min. Termina con cebolleta y aceite de sésamo.']]
    }
  },
  {
    id: 'kr-budae-jjigae', n: 'Budae jjigae (guiso del ejército con salchichas)', e: '🌭', tipo: 'cena', tags: ['carne'],
    ing: [['salchichas_frankfurt', 300], ['bacon', 150], ['kimchi', 1], ['tofu', 200], ['cebolla', 150], ['setas_shiitake', 100], ['alubias', 200], ['noodles', 200], ['queso_lonchas', 60], ['gochujang', 1], ['gochugaru', 10], ['salsa_soja', 30], ['ajo', 3], ['caldo_pollo', 1200], ['cebolleta', 2]],
    m: {
      fuego: [30, ['Mezcla 2 cucharadas de gochujang con el gochugaru, la soja y el ajo.', 'Coloca en una cazuela ancha, por grupos, las salchichas en rodajas, el bacon, el kimchi, el tofu, la cebolla, las setas y las alubias. Pon la salsa en el centro.', 'Vierte el caldo y cuece 12 min.', 'Añade los noodles y las lonchas de queso encima y cuece 4 min más. Sirve con cebolleta.']]
    }
  },
  {
    id: 'kr-mandu-guk', n: 'Mandu guk (sopa de empanadillas coreanas)', e: '🥟', tipo: 'cena', tags: ['carne'],
    ing: [['obleas_gyoza', 1], ['cerdo_picado', 250], ['tofu', 150], ['kimchi', 1], ['cebolleta', 3], ['ajo', 2], ['huevo', 2], ['caldo_carne', 1500], ['salsa_soja', 40], ['aceite_sesamo', 10], ['nori', 1]],
    m: {
      fuego: [45, ['Escurre bien el tofu y la mitad del kimchi y pícalos. Mézclalos con la carne, el ajo, la mitad de la cebolleta, 15 ml de soja y el aceite de sésamo.', 'Rellena las obleas, moja el borde y ciérralas uniendo las puntas.', 'Calienta el caldo con el resto de la soja, cuece las empanadillas 6 min y vierte los huevos batidos en hilo.', 'Sirve con cebolleta, nori en tiras y el resto del kimchi aparte.']]
    }
  },
  {
    id: 'kr-hobak-jeon', n: 'Hobak jeon (calabacín rebozado en huevo)', e: '🥒', tipo: 'cena', tags: ['vegetariano', 'ligera', 'rapida'],
    ing: [['calabacin', 800], ['harina', 60], ['huevo', 4], ['salsa_soja', 40], ['vinagre_arroz', 20], ['gochugaru', 2], ['arroz', 250], ['kimchi', 1], ['aceite', 40], ['sal', 4]],
    m: {
      fuego: [25, ['Cuece el arroz. Corta el calabacín en rodajas de medio centímetro y sálalo 5 min. Sécalo.', 'Pásalo por harina y huevo batido.', 'Cocínalo en sartén con aceite a fuego medio 2 min por lado.', 'Sirve con la soja mezclada con el vinagre y el gochugaru, arroz y kimchi.']],
      airfryer: [25, ['Pasa el calabacín por harina y huevo y colócalo sobre papel de horno.', 'Pulverízalo con aceite y cocínalo 12 min a 190 °C, girándolo a mitad.', 'Sirve con la salsa de soja y vinagre, arroz y kimchi.']]
    }
  },
  {
    id: 'kr-dubu-kimchi', n: 'Dubu kimchi (tofu con kimchi salteado y cerdo)', e: '🥢', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['tofu', 500], ['kimchi', 1], ['cerdo_lomo', 300], ['cebolla', 150], ['gochugaru', 5], ['azucar', 10], ['salsa_soja', 20], ['aceite_sesamo', 15], ['sesamo', 10], ['cebolleta', 2], ['aceite', 20]],
    m: {
      fuego: [25, ['Corta el tofu en rectángulos y cuécelo 3 min en agua con sal; escúrrelo.', 'Saltea el cerdo en tiras 3 min, añade la cebolla y el kimchi picado y saltea 5 min.', 'Agrega el gochugaru, el azúcar y la soja y saltea 2 min. Termina con el aceite de sésamo.', 'Sirve el salteado en el centro rodeado del tofu, con sésamo y cebolleta.']]
    }
  },
  {
    id: 'kr-gamjatang', n: 'Gamjatang (guiso de costillas de cerdo y patata)', e: '🥔', tipo: 'comida', tags: ['carne'],
    ing: [['cerdo_costillas', 1200], ['patata', 600], ['col_china', 300], ['cebolla', 150], ['miso', 40], ['gochugaru', 15], ['salsa_soja', 40], ['ajo', 6], ['jengibre', 15], ['sesamo', 15], ['cebolleta', 2], ['arroz', 250]],
    m: {
      fuego: [110, ['Remoja las costillas 30 min, escáldalas 5 min y escúrrelas.', 'Cuécelas en 2 l de agua con la cebolla y el jengibre 50 min.', 'Mezcla el miso, el gochugaru, la soja y el ajo con un poco de caldo y añádelo con las patatas enteras peladas y la col. Cuece 25 min.', 'Sirve con sésamo machacado, cebolleta y arroz.']],
      robot: [90, ['Pon las costillas escaldadas, 1,1 l de agua, cebolla y jengibre: 45 min/100 °C/giro inverso/vel. cuchara.', 'Añade la mezcla de miso, gochugaru, soja y ajo, las patatas en trozos y la col: 25 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con sésamo, cebolleta y arroz.']]
    }
  },
  /* ---- Tanda 3 ---- */
  {
    id: 'kr-dwaeji-galbi', n: 'Costillas de cerdo marinadas (dwaeji galbi)', e: '🍖', tipo: 'comida', tags: ['carne'],
    ing: [['cerdo_costillas', 1200], ['salsa_soja', 70], ['gochujang', 1], ['miel', 40], ['manzana', 150], ['ajo', 5], ['jengibre', 15], ['aceite_sesamo', 15], ['sesamo', 10], ['lechuga', 1], ['arroz', 250]],
    m: {
      horno: [70, ['Tritura la manzana, el ajo y el jengibre con la soja, 2 cucharadas de gochujang, la miel y el aceite de sésamo. Marina las costillas al menos 1 hora.', 'Colócalas en una bandeja tapadas con papel de aluminio y hornea 35 min a 180 °C.', 'Destapa, píntalas con la marinada y hornea 15 min más a 220 °C hasta que se caramelicen.', 'Espolvorea sésamo y sirve con lechuga y arroz.']],
      airfryer: [50, ['Marina las costillas como en la receta de horno.', 'Cocínalas 30 min a 170 °C y después 8 min a 200 °C pintándolas con la marinada.', 'Sirve con sésamo, lechuga y arroz.']],
      fuego: [60, ['Marina las costillas como en la receta de horno.', 'Cuécelas tapadas con la marinada y 300 ml de agua 40 min a fuego suave.', 'Destapa y reduce a fuego fuerte hasta que se glaseen. Sirve con sésamo, lechuga y arroz.']]
    }
  },
  {
    id: 'kr-dakkochi', n: 'Dakkochi (brochetas de pollo glaseadas)', e: '🍢', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['pollo_muslos', 700], ['cebolleta', 4], ['gochujang', 1], ['salsa_soja', 40], ['miel', 40], ['ajo', 2], ['ketchup', 30], ['arroz', 250], ['pepino', 250], ['aceite', 15]],
    m: {
      fuego: [30, ['Cuece el arroz. Ensarta el pollo en dados alternando con trozos de cebolleta.', 'Mezcla 2 cucharadas de gochujang con la soja, la miel, el ajo y el kétchup y calienta la salsa 2 min.', 'Haz las brochetas a la plancha con aceite 10 min, girándolas, y píntalas con la salsa al final.', 'Sirve con arroz y pepino.']],
      airfryer: [25, ['Prepara las brochetas y la salsa.', 'Cocínalas 12 min a 200 °C y píntalas con la salsa los últimos 3 min.', 'Sirve con arroz y pepino.']],
      horno: [30, ['Prepara las brochetas y la salsa.', 'Gratínalas a 230 °C 15 min, girándolas y pintándolas al final.', 'Sirve con arroz y pepino.']]
    }
  },
  {
    id: 'kr-maeuntang', n: 'Maeuntang (sopa picante de pescado)', e: '🐟', tipo: 'cena', tags: ['pescado', 'ligera'],
    ing: [['merluza', 600], ['daikon', 300], ['calabacin', 200], ['tofu', 200], ['cebolla', 100], ['gochugaru', 15], ['gochujang', 1], ['salsa_soja', 30], ['ajo', 4], ['jengibre', 10], ['caldo_pescado', 1300], ['cebolleta', 2], ['arroz', 200]],
    m: {
      fuego: [35, ['Cuece el arroz. Pon el caldo a hervir con el daikon en láminas 10 min.', 'Añade el gochugaru, 1 cucharada de gochujang, la soja, el ajo y el jengibre.', 'Incorpora la cebolla, el calabacín y el tofu y cuece 5 min. Añade la merluza en trozos y cuece 5 min más sin remover.', 'Sirve con cebolleta y arroz.']],
      robot: [35, ['Pon el caldo, el daikon, el gochugaru, el gochujang, la soja, el ajo y el jengibre: 12 min/100 °C/giro inverso/vel. cuchara.', 'Añade cebolla, calabacín y tofu: 5 min/100 °C/giro inverso/vel. cuchara.', 'Añade la merluza: 5 min/90 °C/giro inverso/vel. cuchara. Sirve con cebolleta y arroz.']]
    }
  },
  {
    id: 'kr-saengseon-jeon', n: 'Saengseon jeon (pescado rebozado en huevo)', e: '🐟', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida', 'niños'],
    ing: [['merluza', 600], ['harina', 50], ['huevo', 3], ['cebolleta', 1], ['salsa_soja', 40], ['vinagre_arroz', 20], ['arroz', 250], ['espinacas', 300], ['aceite_sesamo', 10], ['aceite', 30], ['sal', 3]],
    m: {
      fuego: [25, ['Cuece el arroz. Corta la merluza en trozos finos, sálala, pásala por harina y por el huevo batido con la cebolleta picada.', 'Cocínala en sartén con aceite a fuego medio 2–3 min por lado.', 'Escalda las espinacas 30 seg y alíñalas con aceite de sésamo y sal.', 'Sirve el pescado con la soja mezclada con el vinagre, las espinacas y arroz.']],
      airfryer: [25, ['Pasa la merluza por harina y huevo y colócala sobre papel de horno.', 'Pulverízala con aceite y cocínala 10 min a 190 °C.', 'Sirve con la salsa de soja y vinagre, espinacas y arroz.']]
    }
  },
  {
    id: 'kr-yachae-jeon', n: 'Yachae jeon (tortitas de verduras)', e: '🥕', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['harina', 200], ['huevo', 1], ['patata', 200], ['zanahoria', 150], ['calabacin', 200], ['cebolla', 100], ['cebolleta', 2], ['salsa_soja', 40], ['vinagre_arroz', 20], ['gochugaru', 2], ['aceite', 50], ['sal', 3]],
    m: {
      fuego: [30, ['Corta todas las verduras en tiras finas.', 'Mezcla la harina, el huevo, la sal y 250 ml de agua fría y añade las verduras.', 'Haz tortitas finas en sartén con aceite caliente, 3–4 min por lado hasta que estén crujientes.', 'Sirve con la soja mezclada con el vinagre y el gochugaru.']]
    }
  },
  {
    id: 'kr-gyeran-mari', n: 'Gyeran mari (tortilla enrollada con verduras)', e: '🥚', tipo: 'cena', tags: ['vegetariano', 'ligera', 'rapida', 'niños'],
    ing: [['huevo', 10], ['zanahoria', 80], ['cebolleta', 2], ['pimiento_rojo', 60], ['sal', 3], ['arroz', 250], ['kimchi', 1], ['aceite', 20]],
    m: {
      fuego: [25, ['Cuece el arroz. Bate los huevos con la sal y la zanahoria, la cebolleta y el pimiento picados muy finos.', 'Vierte una capa fina en una sartén con poco aceite a fuego suave. Cuando casi cuaje, enróllala hacia un lado.', 'Vierte otra capa, deja que se una al rollo y vuelve a enrollar. Repite hasta terminar el huevo.', 'Deja reposar 2 min, corta en rodajas y sirve con arroz y kimchi.']]
    }
  },
  {
    id: 'kr-soegogi-muguk', n: 'Sopa de ternera y daikon (soegogi muguk)', e: '🥣', tipo: 'cena', tags: ['carne', 'ligera'],
    ing: [['ternera_filetes', 300], ['daikon', 500], ['ajo', 3], ['salsa_soja', 40], ['aceite_sesamo', 15], ['cebolleta', 2], ['sal', 3], ['arroz', 250]],
    m: {
      fuego: [35, ['Cuece el arroz. Corta la ternera en trozos pequeños y el daikon en láminas finas cuadradas.', 'Saltea la ternera con el aceite de sésamo 2 min y añade el daikon y el ajo 2 min más.', 'Añade 1,5 l de agua y la soja y cuece 20 min a fuego medio, retirando la espuma.', 'Ajusta de sal y sirve con cebolleta y arroz.']],
      robot: [35, ['Sofríe la ternera, el daikon y el ajo con el aceite de sésamo 4 min/120 °C/giro inverso/vel. cuchara.', 'Añade 1,4 l de agua y la soja: 20 min/100 °C/giro inverso/vel. cuchara.', 'Ajusta de sal y sirve con cebolleta y arroz.']]
    }
  },
  {
    id: 'kr-kongnamul-guk', n: 'Sopa de brotes de soja (kongnamul guk)', e: '🌱', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['brotes_soja', 400], ['caldo_pescado', 1500], ['ajo', 3], ['salsa_soja', 30], ['gochugaru', 3], ['cebolleta', 2], ['tofu', 200], ['huevo', 4], ['arroz', 250], ['sal', 2]],
    m: {
      fuego: [20, ['Cuece el arroz. Lleva el caldo a ebullición con los brotes y cuécelos tapado 8 min sin destapar, para que no cojan sabor amargo.', 'Añade el ajo, la soja, el tofu en dados y el gochugaru y cuece 3 min.', 'Casca los huevos en la sopa y deja que cuajen 2 min.', 'Ajusta de sal y sirve con cebolleta y arroz.']]
    }
  },
  {
    id: 'kr-dwaeji-gukbap', n: 'Dwaeji gukbap (sopa de cerdo con arroz)', e: '🍲', tipo: 'comida', tags: ['carne'],
    ing: [['cerdo_guisar', 600], ['caldo_pollo', 1500], ['ajo', 6], ['jengibre', 20], ['cebolla', 150], ['puerro', 1], ['cebolleta', 3], ['gochugaru', 5], ['salsa_soja', 30], ['kimchi', 1], ['arroz', 300], ['sal', 3]],
    m: {
      fuego: [80, ['Cuece el cerdo en el caldo con el ajo, el jengibre, la cebolla y el puerro 60 min a fuego suave.', 'Cuece el arroz aparte.', 'Saca el cerdo, córtalo en lonchas finas y vuelve a ponerlo en el caldo colado. Sazona con soja y sal.', 'Reparte el arroz en cuencos, cubre con la sopa y la carne y sirve con cebolleta, gochugaru y kimchi.']],
      robot: [70, ['Pon el cerdo, 1,3 l de caldo, ajo, jengibre, cebolla y puerro: 55 min/100 °C/giro inverso/vel. cuchara.', 'Saca el cerdo, córtalo en lonchas y cuela el caldo. Sazona con soja y sal.', 'Sirve sobre arroz con cebolleta, gochugaru y kimchi.']]
    }
  },
  {
    id: 'kr-gamja-jeon', n: 'Gamja jeon (tortitas de patata)', e: '🥔', tipo: 'cena', tags: ['vegetariano', 'rapida', 'niños'],
    ing: [['patata', 800], ['cebolla', 100], ['cebolleta', 2], ['maicena', 30], ['salsa_soja', 40], ['vinagre_arroz', 20], ['kimchi', 1], ['aceite', 60], ['sal', 4]],
    m: {
      fuego: [30, ['Ralla las patatas peladas y la cebolla y escúrrelas en un colador; guarda el almidón que se deposita en el fondo del líquido.', 'Mezcla la patata con ese almidón, la maicena, la cebolleta picada y la sal.', 'Haz tortitas finas en sartén con aceite 4 min por lado hasta que estén crujientes.', 'Sirve con la soja mezclada con el vinagre y kimchi.']],
      robot: [30, ['Trocea las patatas y la cebolla 5 seg/vel. 5 y escúrrelas.', 'Mezcla con la maicena, la cebolleta y la sal y haz las tortitas en sartén.', 'Sirve con la salsa de soja y vinagre y kimchi.']]
    }
  },
  {
    id: 'kr-dak-bulgogi', n: 'Bulgogi de pollo', e: '🍗', tipo: 'comida', tags: ['carne', 'rapida', 'niños'],
    ing: [['pollo_muslos', 700], ['salsa_soja', 60], ['azucar_moreno', 20], ['manzana', 100], ['ajo', 3], ['jengibre', 10], ['cebolla', 150], ['zanahoria', 100], ['aceite_sesamo', 15], ['cebolleta', 2], ['arroz', 250], ['lechuga', 1]],
    m: {
      fuego: [30, ['Ralla la manzana, el ajo y el jengibre y mézclalos con la soja, el azúcar y el aceite de sésamo. Marina el pollo en tiras 15 min.', 'Saltea la cebolla y la zanahoria en tiras 3 min a fuego fuerte.', 'Añade el pollo con la marinada y saltéalo 7 min hasta que esté hecho y caramelizado.', 'Termina con cebolleta y sirve con arroz y lechuga.']],
      airfryer: [30, ['Marina el pollo y mézclalo con la cebolla y la zanahoria.', 'Cocínalo 14 min a 200 °C, removiendo a mitad.', 'Sirve con cebolleta, arroz y lechuga.']]
    }
  },
  {
    id: 'kr-gochujang-jjigae', n: 'Gochujang jjigae (guiso de patata, calabacín y cerdo)', e: '🥘', tipo: 'comida', tags: ['carne'],
    ing: [['cerdo_lomo', 300], ['patata', 400], ['calabacin', 250], ['cebolla', 150], ['setas_shiitake', 100], ['tofu', 200], ['gochujang', 1], ['gochugaru', 5], ['salsa_soja', 20], ['ajo', 3], ['caldo_pollo', 900], ['cebolleta', 2], ['arroz', 250], ['aceite', 15]],
    m: {
      fuego: [40, ['Cuece el arroz. Sofríe el cerdo en tiras con el ajo y el aceite 3 min.', 'Añade 3 cucharadas de gochujang y el gochugaru, remueve y vierte el caldo y la soja.', 'Incorpora la patata en trozos y cuece 10 min. Añade el calabacín, la cebolla, las setas y el tofu y cuece 10 min más.', 'Sirve con cebolleta y arroz.']],
      robot: [40, ['Sofríe el cerdo con ajo y aceite 3 min/120 °C/giro inverso/vel. cuchara.', 'Añade gochujang, gochugaru, soja, caldo y patata: 10 min/100 °C/giro inverso/vel. cuchara.', 'Añade calabacín, cebolla, setas y tofu: 10 min/100 °C/giro inverso/vel. cuchara. Sirve con cebolleta y arroz.']]
    }
  },
  {
    id: 'kr-gaji-bokkeum', n: 'Berenjena salteada a la coreana con arroz', e: '🍆', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['berenjena', 800], ['cebolla', 100], ['ajo', 3], ['salsa_soja', 50], ['gochugaru', 5], ['azucar', 10], ['aceite_sesamo', 15], ['sesamo', 10], ['cebolleta', 2], ['huevo', 4], ['arroz', 250], ['aceite', 40]],
    m: {
      fuego: [25, ['Cuece el arroz. Corta la berenjena en bastones y saltéala con aceite a fuego medio-alto 8 min.', 'Añade la cebolla en juliana y el ajo y saltea 2 min.', 'Agrega la soja, el gochugaru, el azúcar y 50 ml de agua y saltea hasta que se absorba. Termina con aceite de sésamo y sésamo.', 'Sirve con arroz, un huevo frito y cebolleta.']],
      airfryer: [25, ['Unta la berenjena en bastones con aceite y cocínala 15 min a 190 °C.', 'Mézclala en sartén con cebolla, ajo, soja, gochugaru, azúcar y aceite de sésamo 2 min.', 'Sirve con arroz, huevo frito y cebolleta.']]
    }
  },
  {
    id: 'kr-sujebi', n: 'Sujebi (sopa de pasta casera con verduras)', e: '🥣', tipo: 'cena', tags: ['pescado', 'ligera'],
    ing: [['harina', 300], ['caldo_pescado', 1500], ['patata', 250], ['calabacin', 200], ['cebolla', 100], ['zanahoria', 80], ['ajo', 3], ['salsa_soja', 40], ['cebolleta', 2], ['aceite', 15], ['sal', 4]],
    m: {
      fuego: [50, ['Amasa la harina con 160 ml de agua, el aceite y una pizca de sal hasta tener una masa lisa. Déjala reposar tapada 20 min.', 'Calienta el caldo con el ajo y la soja y cuece la patata en láminas 5 min.', 'Estira trocitos de masa con los dedos mojados, muy finos, y échalos al caldo. Añade el calabacín, la cebolla y la zanahoria.', 'Cuece 8 min hasta que la masa esté hecha y sirve con cebolleta.']],
      robot: [50, ['Amasa la harina, 160 ml de agua, el aceite y la sal 2 min/espiga. Reposa 20 min.', 'Pon el caldo, el ajo, la soja y la patata: 8 min/100 °C/giro inverso/vel. cuchara.', 'Añade los trozos de masa estirados y las verduras: 8 min/100 °C/giro inverso/vel. cuchara. Sirve con cebolleta.']]
    }
  }
]);
