/* MC Food Diary · cocina de Alemania 🇩🇪. Formato y normas: recetas/GUIA-RECETAS.md */

MC_ADD_ING({
  codillo: ['Codillo de cerdo', 'carniceria', 6, 'kg'],
  kassler: ['Lomo de cerdo ahumado (Kassler)', 'charcuteria', 14, 'kg', 0, 'lomo de cerdo con una pizca de pimentón ahumado'],
  arenque: ['Filetes de arenque en salazón (matjes)', 'pescaderia', 18, 'kg', 0, 'boquerones en vinagre o caballa ahumada'],
  esparragos_blancos: ['Espárragos blancos frescos', 'fruteria', 7, 'kg'],
  queso_batido: ['Queso fresco batido', 'lacteos', 4, 'kg'],
  guisantes_secos: ['Guisantes secos partidos', 'despensa', 4, 'kg', 0, 'guisantes congelados (sin remojo, 20 min de cocción)'],
  pera: ['Pera', 'fruteria', 2.2, 'kg'],
  cebollino: ['Cebollino fresco', 'fruteria', 1.2, 'ud'],
  gallo: ['Gallo (pescado plano)', 'pescaderia', 12, 'kg'],
  salchicha_ahumada: ['Salchichas ahumadas', 'charcuteria', 8, 'kg'],
  col_rizada: ['Col rizada o kale', 'fruteria', 6, 'kg'],
  mejorana: ['Mejorana seca', 'basicos', 0, 'kg', 1],
  alcaravea: ['Alcaravea (comino de prado)', 'despensa', 30, 'kg', 0, 'comino (la mitad de cantidad)'],
  rabanitos: ['Rabanitos', 'fruteria', 5, 'kg']
});

MC_ADD('de', [
  {
    id: 'de-schnitzel', n: 'Schnitzel con ensalada de patata', e: '🥩', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['cerdo_lomo', 700], ['harina', 60], ['huevo', 2], ['pan_rallado', 120], ['patata', 800], ['cebolla', 100], ['caldo_verduras', 150], ['vinagre', 40], ['mostaza', 10], ['pepino', 200], ['limon', 1], ['aceite_girasol', 200], ['sal', 8]],
    m: {
      fuego: [45, ['Cuece las patatas con piel 20 min, pélalas y córtalas en rodajas templadas.', 'Calienta el caldo con la cebolla picada, el vinagre, la mostaza y sal y viértelo sobre las patatas; añade el pepino en láminas finas.', 'Aplana los filetes muy finos, sálalos y pásalos por harina, huevo y pan rallado.', 'Fríelos en abundante aceite caliente 2 min por lado, moviendo la sartén para que se ondule el empanado. Sirve con limón.']],
      airfryer: [40, ['Prepara la ensalada de patata.', 'Empana los filetes y pulverízalos con aceite.', 'Cocina 10 min a 200 °C, girándolos a mitad. Sirve con limón.']],
      horno: [45, ['Prepara la ensalada de patata.', 'Empana los filetes, colócalos en una bandeja y riega con aceite.', 'Hornea 15 min a 220 °C, girándolos a mitad.']]
    }
  },
  {
    id: 'de-jagerschnitzel', n: 'Jägerschnitzel (filetes con salsa de champiñones)', e: '🍄', tipo: 'comida', tags: ['carne'],
    ing: [['cerdo_lomo', 700], ['champinon', 400], ['cebolla', 150], ['bacon', 80], ['nata', 200], ['caldo_carne', 200], ['harina', 30], ['perejil_fresco', 1], ['mantequilla', 20], ['aceite', 30], ['tallarines', 300], ['sal', 7]],
    m: {
      fuego: [35, ['Aplana los filetes, sálalos, enharínalos y dóralos con aceite 3 min por lado; resérvalos.', 'En la misma sartén dora el bacon y la cebolla, añade los champiñones con la mantequilla y saltea 6 min.', 'Vierte el caldo y la nata y cuece 5 min; vuelve los filetes 2 min.', 'Sirve con tallarines cocidos y perejil.']],
      robot: [35, ['Sofríe cebolla y bacon 5 min/120 °C/vel. 1; añade champiñones 6 min/120 °C/giro inverso/vel. cuchara.', 'Añade caldo y nata: 5 min/100 °C/giro inverso/vel. cuchara.', 'Sirve sobre los filetes hechos a la plancha y la pasta.']]
    }
  },
  {
    id: 'de-currywurst', n: 'Currywurst con patatas', e: '🌭', tipo: 'cena', tags: ['carne', 'rapida', 'niños'],
    ing: [['salchichas', 700], ['tomate_triturado', 300], ['ketchup', 100], ['cebolla', 100], ['curry', 8], ['pimenton', 3], ['miel', 15], ['vinagre', 15], ['patata', 800], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [30, ['Pocha la cebolla picada con aceite, añade la mitad del curry y el pimentón, el tomate, el kétchup, la miel y el vinagre y cuece 10 min; tritura.', 'Dora las salchichas en la plancha 10 min y córtalas en rodajas.', 'Cúbrelas con la salsa y espolvorea el resto del curry. Sirve con patatas fritas.']],
      airfryer: [30, ['Cocina las patatas en bastones con aceite 18 min a 200 °C.', 'Cocina las salchichas 10 min a 190 °C.', 'Córtalas y cúbrelas con la salsa de curry hecha al fuego.']],
      horno: [35, ['Hornea las patatas en gajos 25 min a 220 °C y las salchichas los últimos 12 min.', 'Prepara la salsa de curry al fuego.', 'Corta las salchichas y cúbrelas con la salsa.']]
    }
  },
  {
    id: 'de-bratwurst-chucrut', n: 'Bratwurst con chucrut y puré', e: '🌭', tipo: 'cena', tags: ['carne'],
    ing: [['salchichas', 800], ['chucrut', 500], ['cebolla', 150], ['manzana', 150], ['laurel', 2], ['vino_blanco', 100], ['patata', 900], ['leche', 150], ['mantequilla', 40], ['mostaza', 30], ['sal', 6]],
    m: {
      fuego: [40, ['Pocha la cebolla con la mitad de la mantequilla, añade el chucrut escurrido, la manzana rallada, el laurel y el vino y cuece 25 min.', 'Cuece las patatas y hazlas puré con la leche y el resto de mantequilla.', 'Dora las salchichas en la plancha 12 min. Sirve con el chucrut, el puré y mostaza.']],
      airfryer: [35, ['Prepara el chucrut y el puré al fuego.', 'Cocina las salchichas 12 min a 190 °C.', 'Sirve con mostaza.']]
    }
  },
  {
    id: 'de-sauerbraten', n: 'Sauerbraten (asado de ternera en adobo)', e: '🥩', tipo: 'comida', tags: ['carne'],
    ing: [['redondo_ternera', 1200], ['vino_tinto', 300], ['vinagre', 150], ['cebolla', 250], ['zanahoria', 200], ['laurel', 3], ['clavo', 4], ['pasas', 50], ['azucar_moreno', 20], ['harina', 20], ['aceite', 30], ['lombarda', 600], ['patata', 800], ['sal', 10]],
    m: {
      fuego: [180, ['Marina la carne 2 días en la nevera con el vino, el vinagre, 300 ml de agua, la cebolla, la zanahoria, el laurel y el clavo.', 'Sécala, dórala con aceite y añade las verduras y el adobo colado; tapa y cuece 2 h 30 min a fuego suave.', 'Cuela la salsa, añade las pasas y el azúcar y espésala con la harina disuelta.', 'Sirve en lonchas con lombarda guisada y patatas cocidas.']],
      horno: [190, ['Marina la carne 2 días como en el fuego.', 'Dórala, añade el adobo y las verduras, tapa y hornea 2 h 45 min a 160 °C.', 'Prepara la salsa con pasas y azúcar y sirve con lombarda y patatas.']]
    }
  },
  {
    id: 'de-rouladen', n: 'Rouladen (rollitos de ternera con bacon y pepinillo)', e: '🥩', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_filetes', 800], ['bacon', 120], ['pepinillos', 100], ['cebolla', 250], ['mostaza', 40], ['zanahoria', 150], ['vino_tinto', 150], ['caldo_carne', 500], ['tomate_concentrado', 20], ['harina', 20], ['aceite', 30], ['patata', 800], ['sal', 8]],
    m: {
      fuego: [120, ['Extiende los filetes grandes y finos, úntalos con mostaza y cúbrelos con bacon, cebolla en tiras y pepinillo; enróllalos y sujétalos con palillos.', 'Dóralos con aceite, añade el resto de cebolla y la zanahoria picadas y el concentrado.', 'Vierte el vino y el caldo, tapa y cuece 1 h 30 min.', 'Espesa la salsa con la harina disuelta y sirve con patatas cocidas.']],
      robot: [100, ['Prepara los rollitos y dóralos en sartén.', 'Sofríe cebolla y zanahoria con aceite 5 min/120 °C/vel. 1; añade concentrado, vino y caldo.', 'Añade los rollitos: 75 min/100 °C/giro inverso/vel. cuchara. Espesa la salsa y sirve con patatas.']]
    }
  },
  {
    id: 'de-gulasch', n: 'Gulasch de ternera a la alemana', e: '🍲', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_guisar', 900], ['cebolla', 600], ['pimiento_rojo', 150], ['ajo', 3], ['tomate_concentrado', 40], ['pimenton', 12], ['comino', 2], ['caldo_carne', 700], ['vino_tinto', 150], ['laurel', 2], ['aceite', 40], ['tallarines', 300], ['sal', 9]],
    m: {
      fuego: [130, ['Pocha la cebolla en juliana con aceite 15 min, hasta que esté dorada.', 'Añade la carne, el ajo, el pimentón, el comino y el concentrado y rehoga 3 min.', 'Vierte el vino, el caldo y el laurel, tapa y cuece 1 h 30 min; añade el pimiento en tiras los últimos 20 min.', 'Sirve con tallarines o patatas.']],
      robot: [110, ['Sofríe la cebolla con aceite 12 min/120 °C/vel. 1.', 'Añade carne, ajo, especias, concentrado, vino, caldo y laurel: 80 min/100 °C/giro inverso/vel. cuchara.', 'Añade el pimiento: 15 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'de-kasespatzle', n: 'Käsespätzle (pasta casera con queso y cebolla)', e: '🧀', tipo: 'comida', tags: ['vegetariano', 'niños'],
    ing: [['harina', 400], ['huevo', 4], ['queso_emmental', 250], ['cebolla', 300], ['mantequilla', 50], ['nuez_moscada', 1], ['cebollino', 1], ['lechuga', 1], ['sal', 8]],
    m: {
      fuego: [45, ['Bate la harina con los huevos, 150 ml de agua, nuez moscada y sal hasta tener una masa espesa y con burbujas.', 'Presiónala con un rallador de agujeros grandes o un colador sobre agua hirviendo con sal; cuando floten, sácalos.', 'Dora la cebolla en juliana en la mantequilla 15 min.', 'Alterna en una fuente spätzle y queso rallado, cubre con la cebolla y el cebollino. Sirve con ensalada.']],
      horno: [50, ['Prepara los spätzle y la cebolla dorada.', 'Alterna en una fuente spätzle y queso.', 'Gratina 10 min a 200 °C y cubre con cebolla y cebollino.']]
    }
  },
  {
    id: 'de-maultaschen', n: 'Maultaschen en caldo', e: '🥟', tipo: 'comida', tags: ['carne'],
    ing: [['harina', 300], ['huevo', 4], ['carne_picada', 300], ['espinacas', 250], ['cebolla', 150], ['pan_barra', 1], ['perejil_fresco', 1], ['nuez_moscada', 1], ['caldo_carne', 1500], ['cebollino', 1], ['mantequilla', 20], ['sal', 8]],
    m: {
      fuego: [80, ['Amasa la harina con 3 huevos, un poco de agua y sal; reposa 20 min.', 'Mezcla la carne con las espinacas escaldadas y picadas, la cebolla pochada en mantequilla, el pan remojado, el otro huevo, perejil, nuez moscada y sal.', 'Estira la masa fina, reparte el relleno, dobla y corta en cuadrados de 8 cm sellando los bordes.', 'Cuécelos en el caldo a fuego suave 12 min y sírvelos en el caldo con cebollino.']],
      robot: [75, ['Amasa la harina, 3 huevos, agua y sal 2 min/espiga; reposa.', 'Pica cebolla, pan y perejil 5 seg/vel. 5, añade carne, espinacas, huevo y especias 20 seg/giro inverso/vel. 3.', 'Forma los maultaschen y cuécelos en el caldo en el Varoma o en el vaso 15 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'de-kartoffelsuppe', n: 'Kartoffelsuppe (sopa de patata con salchichas)', e: '🥣', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['patata', 900], ['zanahoria', 200], ['puerro', 1], ['apio', 100], ['cebolla', 150], ['bacon', 80], ['caldo_verduras', 1300], ['salchichas_frankfurt', 300], ['mejorana', 1], ['nata', 100], ['perejil_fresco', 1], ['sal', 6]],
    m: {
      fuego: [40, ['Dora el bacon y la cebolla picados; añade la patata, la zanahoria, el puerro y el apio en dados.', 'Cubre con el caldo y cuece 20 min con la mejorana.', 'Tritura la mitad, añade la nata y las salchichas en rodajas y calienta 5 min. Sirve con perejil.']],
      robot: [40, ['Sofríe bacon y cebolla 5 min/120 °C/vel. 1.', 'Añade verduras troceadas, caldo y mejorana: 20 min/100 °C/vel. 1; tritura 5 seg/vel. 5.', 'Añade nata y salchichas: 5 min/90 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'de-linsensuppe', n: 'Linsensuppe (lentejas con salchichas y vinagre)', e: '🍲', tipo: 'comida', tags: ['legumbres', 'carne'],
    ing: [['lentejas', 350], ['salchichas_frankfurt', 300], ['bacon', 80], ['patata', 300], ['zanahoria', 150], ['apio', 100], ['puerro', 1], ['cebolla', 100], ['caldo_verduras', 1500], ['laurel', 2], ['mejorana', 1], ['vinagre', 30], ['azucar', 5], ['sal', 6]],
    m: {
      fuego: [55, ['Dora el bacon con la cebolla picada; añade las lentejas, el caldo, el laurel y la mejorana y cuece 25 min.', 'Agrega la patata, la zanahoria, el apio y el puerro en dados y cuece 20 min.', 'Añade las salchichas en rodajas 5 min y termina con el vinagre y el azúcar.']],
      robot: [50, ['Sofríe bacon y cebolla 5 min/120 °C/vel. 1.', 'Añade lentejas, verduras, caldo y especias: 40 min/100 °C/giro inverso/vel. cuchara.', 'Añade salchichas, vinagre y azúcar: 5 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'de-bohneneintopf', n: 'Bohneneintopf (guiso de judías verdes con patata)', e: '🫛', tipo: 'comida', tags: ['carne'],
    ing: [['judias_verdes', 600], ['patata', 600], ['salchicha_ahumada', 300], ['bacon', 80], ['cebolla', 150], ['zanahoria', 150], ['caldo_carne', 1200], ['tomillo', 1], ['perejil_fresco', 1], ['sal', 6]],
    m: {
      fuego: [45, ['Dora el bacon y la cebolla picados.', 'Añade el caldo, las patatas y la zanahoria en dados y cuece 10 min.', 'Agrega las judías troceadas, el tomillo y las salchichas en rodajas y cuece 20 min. Sirve con perejil.']],
      robot: [40, ['Sofríe bacon y cebolla 5 min/120 °C/vel. 1.', 'Añade patata, zanahoria, judías, caldo y tomillo: 25 min/100 °C/giro inverso/vel. cuchara.', 'Añade las salchichas: 5 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'de-frikadellen', n: 'Frikadellen con ensalada de patata y pepino', e: '🍔', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['carne_picada', 600], ['pan_barra', 1], ['leche', 100], ['cebolla', 150], ['huevo', 1], ['mostaza', 15], ['mejorana', 1], ['patata', 800], ['pepino', 300], ['mayonesa', 60], ['yogur', 1], ['cebollino', 1], ['aceite', 30], ['sal', 8]],
    m: {
      fuego: [40, ['Cuece las patatas con piel 20 min, pélalas y córtalas; mézclalas con el pepino en rodajas, la mayonesa, el yogur, el cebollino y sal.', 'Remoja el pan en la leche y mézclalo con la carne, la cebolla picada, el huevo, la mostaza, la mejorana y sal.', 'Forma hamburguesas gruesas y fríelas con aceite a fuego medio 5 min por lado.']],
      airfryer: [35, ['Prepara la ensalada y la masa.', 'Forma las frikadellen y cocínalas 12 min a 190 °C, girándolas.', 'Sirve con la ensalada.']],
      horno: [40, ['Prepara la ensalada y la masa.', 'Coloca las frikadellen en una bandeja con aceite.', 'Hornea 20 min a 200 °C.']]
    }
  },
  {
    id: 'de-konigsberger-klopse', n: 'Königsberger Klopse (albóndigas en salsa de alcaparras)', e: '🍽️', tipo: 'comida', tags: ['carne'],
    ing: [['carne_picada', 600], ['pan_barra', 1], ['cebolla', 100], ['huevo', 1], ['anchoas', 1], ['caldo_carne', 800], ['laurel', 2], ['mantequilla', 40], ['harina', 40], ['nata', 150], ['alcaparras', 40], ['limon', 1], ['patata', 800], ['sal', 7]],
    m: {
      fuego: [50, ['Mezcla la carne con el pan remojado y escurrido, la cebolla rallada, el huevo, las anchoas picadas y sal; forma albóndigas.', 'Cuécelas en el caldo con laurel a fuego suave 15 min; sácalas.', 'Haz un roux con la mantequilla y la harina, añade 600 ml del caldo y la nata y cuece 5 min; agrega alcaparras y zumo de limón.', 'Vuelve las albóndigas a la salsa y sirve con patatas cocidas.']],
      robot: [45, ['Forma las albóndigas y ponlas en el Varoma; en el vaso, 800 ml de caldo y laurel: 20 min/Varoma/vel. 1.', 'Reserva 600 ml de caldo; pon en el vaso caldo, harina, mantequilla y nata: 7 min/90 °C/vel. 4.', 'Añade alcaparras y limón y junta con las albóndigas. Sirve con patatas.']]
    }
  },
  {
    id: 'de-schweinebraten', n: 'Schweinebraten (asado de cerdo con cerveza)', e: '🍺', tipo: 'comida', tags: ['carne'],
    ing: [['cerdo_lomo', 1200], ['cerveza', 500], ['cebolla', 250], ['zanahoria', 200], ['ajo', 3], ['alcaravea', 3], ['mostaza', 20], ['caldo_carne', 300], ['maicena', 15], ['lombarda', 600], ['patata', 800], ['sal', 10]],
    m: {
      horno: [130, ['Unta la carne en una pieza con mostaza, ajo machacado, alcaravea y sal.', 'Ponla sobre la cebolla y la zanahoria en trozos, añade la cerveza y el caldo y hornea 1 h 45 min a 170 °C, regando a menudo.', 'Cuela el jugo y espésalo con la maicena.', 'Sirve en lonchas con la salsa, lombarda y patatas o knödel.']],
      fuego: [110, ['Dora la carne especiada en una olla.', 'Añade las verduras, la cerveza y el caldo, tapa y cuece 1 h 30 min.', 'Espesa la salsa y sirve con lombarda y patatas.']]
    }
  },
  {
    id: 'de-schweinshaxe', n: 'Codillo de cerdo asado con chucrut', e: '🍖', tipo: 'comida', tags: ['carne'],
    ing: [['codillo', 2000], ['cerveza', 500], ['cebolla', 200], ['alcaravea', 3], ['ajo', 3], ['chucrut', 500], ['patata', 800], ['mostaza', 30], ['sal', 12]],
    m: {
      horno: [180, ['Cuece los codillos en agua con sal, cebolla y alcaravea 1 h 30 min (o compra codillo ya cocido).', 'Hornéalos 1 h a 200 °C, regándolos con cerveza cada 15 min, hasta que la piel cruja.', 'Calienta el chucrut con el ajo y sirve con patatas y mostaza.']],
      airfryer: [120, ['Cuece los codillos como en el horno o usa codillo cocido.', 'Pásalos por la freidora 25 min a 190 °C, pincelando con cerveza.', 'Sirve con chucrut, patatas y mostaza.']]
    }
  },
  {
    id: 'de-kassler-chucrut', n: 'Kassler con chucrut y puré', e: '🥓', tipo: 'comida', tags: ['carne'],
    ing: [['kassler', 900], ['chucrut', 600], ['cebolla', 150], ['manzana', 150], ['laurel', 2], ['vino_blanco', 150], ['patata', 900], ['leche', 150], ['mantequilla', 40], ['mostaza', 30], ['sal', 5]],
    m: {
      fuego: [50, ['Pocha la cebolla con la mitad de la mantequilla, añade el chucrut, la manzana rallada, el laurel y el vino.', 'Coloca el kassler en lonchas gruesas encima, tapa y cuece 30 min a fuego suave.', 'Prepara un puré con las patatas, la leche y el resto de mantequilla. Sirve con mostaza.']],
      horno: [55, ['Pon el chucrut con cebolla, manzana, laurel y vino en una fuente y el kassler encima.', 'Tapa y hornea 40 min a 180 °C.', 'Sirve con puré y mostaza.']]
    }
  },
  {
    id: 'de-himmel-erde', n: 'Himmel und Erde (puré de patata y manzana con morcilla)', e: '🍎', tipo: 'cena', tags: ['carne'],
    ing: [['patata', 900], ['manzana', 500], ['morcilla', 400], ['cebolla', 300], ['bacon', 80], ['mantequilla', 40], ['azucar', 10], ['nuez_moscada', 1], ['sal', 6]],
    m: {
      fuego: [40, ['Cuece las patatas 20 min; cuece la manzana en gajos con el azúcar y un poco de agua 8 min.', 'Aplasta juntas las patatas y la manzana con la mantequilla, nuez moscada y sal.', 'Dora el bacon y la cebolla en aros, y marca la morcilla en rodajas gruesas en la misma sartén.', 'Sirve el puré con la morcilla y la cebolla por encima.']],
      robot: [40, ['Cuece patatas y manzana en el Varoma 25 min/Varoma/vel. 1 con 600 ml de agua.', 'Vacía el vaso y haz el puré con mantequilla, nuez moscada y sal 20 seg/vel. 3.', 'Sirve con morcilla y cebolla doradas en sartén.']]
    }
  },
  {
    id: 'de-matjes', n: 'Arenques con patatas y salsa de nata y manzana', e: '🐟', tipo: 'cena', tags: ['pescado', 'rapida'],
    ing: [['arenque', 500], ['patata', 800], ['yogur_griego', 3], ['nata', 100], ['manzana', 200], ['cebolla_morada', 100], ['pepinillos', 60], ['eneldo', 1], ['limon', 1], ['sal', 5]],
    m: {
      fuego: [30, ['Cuece las patatas con piel 20 min.', 'Mezcla el yogur con la nata, la manzana, la cebolla y los pepinillos en dados, el eneldo y el limón.', 'Sirve los filetes de arenque con la salsa y las patatas templadas.']],
      sin: [15, ['Usa patatas ya cocidas.', 'Prepara la salsa de yogur, nata, manzana, cebolla, pepinillo y eneldo.', 'Sirve con los arenques.']]
    }
  },
  {
    id: 'de-merluza-mostaza', n: 'Pescado en salsa de mostaza con patatas', e: '🐟', tipo: 'comida', tags: ['pescado', 'rapida'],
    ing: [['merluza', 700], ['mostaza', 50], ['nata', 200], ['caldo_pescado', 200], ['mantequilla', 30], ['harina', 20], ['eneldo', 1], ['huevo', 4], ['patata', 800], ['sal', 6]],
    m: {
      fuego: [30, ['Cuece las patatas 20 min y los huevos 9 min.', 'Haz un roux con la mantequilla y la harina, añade el caldo y la nata y cuece 4 min; incorpora la mostaza y el eneldo.', 'Pon los lomos salados en la salsa, tapa y cuece 6 min. Sirve con las patatas y los huevos en mitades.']],
      horno: [30, ['Prepara la salsa de mostaza al fuego.', 'Pon el pescado en una fuente, cubre con la salsa y hornea 14 min a 190 °C.', 'Sirve con patatas y huevo duro.']],
      robot: [30, ['Pon 600 ml de agua y las patatas en el cestillo y el pescado en el Varoma: 20 min/Varoma/vel. 1.', 'Vacía el vaso y prepara la salsa: caldo, nata, harina, mantequilla 6 min/90 °C/vel. 4; añade mostaza y eneldo.', 'Sirve el pescado con la salsa, patatas y huevo duro.']]
    }
  },
  {
    id: 'de-kartoffelpuffer', n: 'Kartoffelpuffer (tortitas de patata rallada)', e: '🥔', tipo: 'cena', tags: ['vegetariano', 'niños'],
    ing: [['patata', 1000], ['cebolla', 150], ['huevo', 2], ['harina', 40], ['nuez_moscada', 1], ['aceite_girasol', 150], ['manzana', 500], ['azucar', 15], ['yogur_griego', 2], ['sal', 7]],
    m: {
      fuego: [40, ['Cuece la manzana troceada con el azúcar y un poco de agua 10 min y aplástala.', 'Ralla las patatas y la cebolla, escurre muy bien el líquido y mezcla con huevo, harina, nuez moscada y sal.', 'Fríe cucharadas aplanadas en aceite caliente 3 min por lado. Sirve con la compota y yogur.']],
      airfryer: [40, ['Prepara la masa bien escurrida y forma tortitas finas sobre papel.', 'Pulverízalas con aceite y cocina 14 min a 200 °C, girándolas.', 'Sirve con compota de manzana y yogur.']]
    }
  },
  {
    id: 'de-flammkuchen', n: 'Flammkuchen (tarta fina de cebolla y bacon)', e: '🍕', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['masa_pizza', 2], ['queso_batido', 200], ['nata', 100], ['cebolla', 250], ['bacon', 200], ['nuez_moscada', 1], ['lechuga', 1], ['sal', 3]],
    m: {
      horno: [25, ['Estira la masa muy fina sobre papel de horno.', 'Mezcla el queso batido con la nata, nuez moscada y sal y extiéndelo.', 'Reparte la cebolla en juliana muy fina y el bacon en tiras.', 'Hornea 10–12 min a 250 °C, hasta que los bordes estén crujientes. Sirve con ensalada.']],
      airfryer: [30, ['Estira bases finas del tamaño de la cesta.', 'Cubre con la crema, la cebolla y el bacon.', 'Cocina 8 min a 200 °C cada una.']]
    }
  },
  {
    id: 'de-spargel', n: 'Espárragos blancos con jamón, patatas y salsa holandesa', e: '🌱', tipo: 'comida', tags: ['carne', 'ligera'],
    ing: [['esparragos_blancos', 1200], ['jamon_cocido', 250], ['patata', 700], ['huevo', 3], ['mantequilla', 150], ['limon', 1], ['azucar', 5], ['perejil_fresco', 1], ['sal', 8]],
    m: {
      fuego: [40, ['Pela los espárragos desde debajo de la yema y corta la base dura.', 'Cuécelos 12–15 min en agua con sal, azúcar y un trozo de mantequilla. Cuece las patatas.', 'Bate las yemas con zumo de limón al baño maría y añade la mantequilla derretida poco a poco hasta tener una salsa espesa.', 'Sirve los espárragos con el jamón, las patatas con perejil y la salsa.']],
      robot: [40, ['Pon 700 ml de agua con sal y azúcar en el vaso, las patatas en el cestillo y los espárragos en el Varoma: 25 min/Varoma/vel. 1.', 'Vacía el vaso; pon yemas, limón y sal: 3 min/70 °C/vel. 4 añadiendo la mantequilla derretida por el bocal.', 'Sirve con el jamón y perejil.']]
    }
  },
  {
    id: 'de-huhnerfrikassee', n: 'Fricasé de pollo con espárragos y champiñones', e: '🍗', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['pollo_pechuga', 700], ['champinon', 250], ['esparragos', 1], ['guisantes', 150], ['zanahoria', 150], ['caldo_pollo', 600], ['nata', 150], ['harina', 40], ['mantequilla', 40], ['limon', 1], ['arroz_largo', 300], ['sal', 6]],
    m: {
      fuego: [40, ['Cuece el pollo en el caldo 15 min con la zanahoria en rodajas; córtalo en dados y reserva el caldo.', 'Saltea los champiñones y los espárragos troceados en la mantequilla, añade la harina y luego el caldo y la nata removiendo.', 'Agrega el pollo, la zanahoria y los guisantes y cuece 5 min; termina con limón.', 'Sirve con arroz.']],
      robot: [40, ['Pon caldo, pollo y zanahoria: 15 min/100 °C/giro inverso/vel. cuchara. Reserva.', 'Pon 500 ml de caldo, nata, harina y mantequilla: 6 min/90 °C/vel. 4.', 'Añade pollo, verduras y champiñones: 8 min/90 °C/giro inverso/vel. cuchara. Sirve con arroz.']]
    }
  },
  {
    id: 'de-schupfnudeln', n: 'Ñoquis salteados con chucrut y bacon', e: '🥓', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['gnocchi', 2], ['chucrut', 400], ['bacon', 150], ['cebolla', 150], ['mantequilla', 30], ['alcaravea', 2], ['perejil_fresco', 1], ['sal', 3]],
    m: {
      fuego: [25, ['Dora los ñoquis en la mantequilla 6 min, hasta que estén crujientes; resérvalos.', 'Dora el bacon y la cebolla en la misma sartén 5 min.', 'Añade el chucrut escurrido y la alcaravea y saltea 5 min; vuelve los ñoquis, mezcla y sirve con perejil.']],
      airfryer: [25, ['Cocina los ñoquis con un poco de mantequilla 10 min a 200 °C.', 'Saltea el bacon, la cebolla y el chucrut en sartén.', 'Mezcla y sirve con perejil.']]
    }
  },
  {
    id: 'de-lombarda-salchichas', n: 'Lombarda guisada con manzana y salchichas', e: '🥬', tipo: 'comida', tags: ['carne'],
    ing: [['lombarda', 1000], ['manzana', 300], ['cebolla', 150], ['salchichas', 600], ['vinagre', 50], ['azucar_moreno', 30], ['clavo', 3], ['laurel', 2], ['mantequilla', 30], ['patata', 700], ['sal', 7]],
    m: {
      fuego: [70, ['Pocha la cebolla en la mantequilla, añade la lombarda en juliana, la manzana en dados, el vinagre, el azúcar, el clavo, el laurel, sal y 150 ml de agua.', 'Tapa y cuece 50 min a fuego suave.', 'Dora las salchichas y sírvelas con la lombarda y patatas cocidas.']],
      robot: [60, ['Sofríe la cebolla con mantequilla 4 min/120 °C/vel. 1.', 'Añade lombarda, manzana, vinagre, azúcar, especias, sal y 100 ml de agua: 45 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con salchichas doradas y patatas.']]
    }
  },
  {
    id: 'de-grune-sosse', n: 'Salsa verde de Fráncfort con huevos y patatas', e: '🌿', tipo: 'cena', tags: ['vegetariano', 'ligera'],
    ing: [['huevo', 8], ['patata', 800], ['yogur_griego', 3], ['queso_batido', 250], ['perejil_fresco', 2], ['cebollino', 2], ['albahaca', 1], ['eneldo', 1], ['mostaza', 10], ['limon', 1], ['aceite', 20], ['sal', 6]],
    m: {
      fuego: [30, ['Cuece las patatas con piel 20 min y los huevos 10 min.', 'Tritura todas las hierbas frescas con el yogur, el queso batido, la mostaza, el aceite, el limón y sal; añade 2 yemas cocidas.', 'Sirve los huevos en mitades sobre la salsa con las patatas.']],
      robot: [30, ['Cuece patatas y huevos en el Varoma 25 min/Varoma/vel. 1 con 600 ml de agua.', 'Pica las hierbas 5 seg/vel. 7 y añade yogur, queso, mostaza, aceite, limón y sal 10 seg/vel. 4.', 'Sirve con huevos y patatas.']]
    }
  },
  {
    id: 'de-senfeier', n: 'Huevos en salsa de mostaza con puré', e: '🥚', tipo: 'cena', tags: ['vegetariano', 'rapida', 'niños'],
    ing: [['huevo', 8], ['mostaza', 50], ['leche', 300], ['caldo_verduras', 200], ['harina', 30], ['mantequilla', 60], ['patata', 900], ['cebollino', 1], ['sal', 6]],
    m: {
      fuego: [30, ['Cuece las patatas y hazlas puré con 30 g de mantequilla y un poco de leche. Cuece los huevos 9 min.', 'Haz un roux con el resto de mantequilla y la harina, añade el caldo y la leche y cuece 4 min; agrega la mostaza y sal.', 'Sirve los huevos en mitades en la salsa, con el puré y cebollino.']],
      robot: [30, ['Cuece las patatas y los huevos en el Varoma 25 min/Varoma/vel. 1 con 600 ml de agua.', 'Vacía el vaso; pon leche, caldo, harina, mantequilla y sal: 6 min/90 °C/vel. 4; añade mostaza.', 'Sirve con los huevos, el puré y cebollino.']]
    }
  },
  {
    id: 'de-pellkartoffeln-quark', n: 'Patatas con queso batido a las hierbas', e: '🥔', tipo: 'cena', tags: ['vegetariano', 'ligera', 'rapida'],
    ing: [['patata', 1200], ['queso_batido', 500], ['cebollino', 1], ['perejil_fresco', 1], ['cebolla_morada', 80], ['ajo', 1], ['aceite', 30], ['pepino', 300], ['rabanitos', 150], ['sal', 6]],
    m: {
      fuego: [30, ['Cuece las patatas con piel 20–25 min.', 'Mezcla el queso batido con las hierbas, la cebolla y el ajo picados, el aceite y sal.', 'Sirve las patatas abiertas con la crema, pepino y rabanitos.']],
      airfryer: [35, ['Cocina las patatas pequeñas enteras 25 min a 190 °C.', 'Prepara la crema de queso y hierbas.', 'Sirve con pepino y rabanitos.']]
    }
  },
  {
    id: 'de-pichelsteiner', n: 'Pichelsteiner (guiso de tres carnes con verduras)', e: '🍲', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_guisar', 300], ['cerdo_guisar', 300], ['cordero', 300], ['patata', 600], ['zanahoria', 250], ['puerro', 2], ['apio', 100], ['repollo', 300], ['caldo_carne', 1000], ['mejorana', 1], ['perejil_fresco', 1], ['mantequilla', 30], ['sal', 9]],
    m: {
      fuego: [110, ['Dora las carnes en dados con la mantequilla.', 'Alterna en una olla capas de carne y de verduras troceadas, salando y espolvoreando mejorana.', 'Vierte el caldo, tapa y cuece a fuego suave 1 h 30 min sin remover. Sirve con perejil.']],
      robot: [90, ['Sofríe las carnes con mantequilla 8 min/120 °C/giro inverso/vel. cuchara.', 'Añade caldo, mejorana y sal: 50 min/100 °C/giro inverso/vel. cuchara.', 'Añade las verduras troceadas: 25 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'de-gaisburger-marsch', n: 'Gaisburger Marsch (guiso de ternera con patata y pasta)', e: '🍜', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_guisar', 700], ['patata', 500], ['zanahoria', 150], ['apio', 100], ['puerro', 1], ['cebolla', 250], ['laurel', 2], ['pasta_corta', 200], ['mantequilla', 30], ['cebollino', 1], ['sal', 9]],
    m: {
      fuego: [120, ['Cuece la ternera con la zanahoria, el apio, el puerro, el laurel y sal en 2 l de agua 1 h 30 min; trocéala.', 'Añade al caldo las patatas en dados y cuece 15 min.', 'Cuece la pasta aparte y añádela con la carne.', 'Dora la cebolla en aros con la mantequilla y sírvela por encima con cebollino.']],
      robot: [100, ['Pon ternera, verduras, laurel, sal y 1,6 l de agua: 75 min/100 °C/giro inverso/vel. cuchara.', 'Añade patatas: 15 min/100 °C/giro inverso/vel. cuchara.', 'Añade la pasta cocida y sirve con cebolla dorada.']]
    }
  },
  {
    id: 'de-grunkohl', n: 'Col rizada guisada con salchichas ahumadas', e: '🥬', tipo: 'comida', tags: ['carne'],
    ing: [['col_rizada', 1000], ['salchicha_ahumada', 500], ['bacon', 150], ['cebolla', 200], ['caldo_carne', 500], ['mostaza', 20], ['patata', 800], ['azucar', 10], ['sal', 6]],
    m: {
      fuego: [80, ['Escalda la col rizada sin tallos 3 min y pícala.', 'Dora el bacon y la cebolla, añade la col, el caldo, la mostaza y el azúcar, tapa y cuece 45 min.', 'Añade las salchichas los últimos 20 min.', 'Sirve con patatas cocidas o salteadas.']],
      robot: [70, ['Sofríe bacon y cebolla 5 min/120 °C/vel. 1.', 'Añade la col picada, caldo, mostaza y azúcar: 40 min/100 °C/giro inverso/vel. cuchara.', 'Añade las salchichas: 15 min/100 °C/giro inverso/vel. cuchara. Sirve con patatas.']]
    }
  },
  {
    id: 'de-knodel-setas', n: 'Knödel de pan con salsa de setas', e: '🍄', tipo: 'comida', tags: ['vegetariano'],
    ing: [['pan_barra', 2], ['leche', 300], ['huevo', 3], ['cebolla', 200], ['perejil_fresco', 1], ['setas', 500], ['champinon', 200], ['nata', 200], ['mantequilla', 40], ['nuez_moscada', 1], ['sal', 7]],
    m: {
      fuego: [50, ['Corta el pan del día anterior en dados, riégalo con la leche caliente y deja 15 min.', 'Mézclalo con los huevos, la mitad de la cebolla pochada en mantequilla, perejil, nuez moscada y sal; forma 8 bolas con las manos húmedas.', 'Cuécelas en agua con sal a fuego suave 18 min sin que hierva fuerte.', 'Saltea las setas y los champiñones con el resto de cebolla y mantequilla, añade la nata y cuece 4 min. Sirve con los knödel.']],
      robot: [50, ['Prepara la masa de pan y forma las bolas; colócalas en el Varoma engrasado.', 'Pon 800 ml de agua en el vaso: 25 min/Varoma/vel. 1.', 'Prepara la salsa de setas y nata en sartén y sirve.']]
    }
  },
  {
    id: 'de-putengeschnetzeltes', n: 'Pavo en tiras con salsa de nata y pimentón', e: '🦃', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['pavo_pechuga', 700], ['champinon', 200], ['pimiento_rojo', 150], ['cebolla', 150], ['nata', 200], ['caldo_pollo', 150], ['pimenton', 5], ['mostaza', 10], ['aceite', 30], ['tallarines', 300], ['sal', 6]],
    m: {
      fuego: [25, ['Corta el pavo en tiras y dóralo a fuego fuerte con aceite 5 min; resérvalo.', 'Saltea la cebolla, el pimiento y los champiñones 6 min; añade el pimentón.', 'Vierte el caldo, la nata y la mostaza, vuelve el pavo y cuece 4 min. Sirve con tallarines.']],
      robot: [25, ['Sofríe cebolla, pimiento y champiñones con aceite 6 min/120 °C/vel. 1.', 'Añade pavo y pimentón: 6 min/120 °C/giro inverso/vel. cuchara.', 'Añade caldo, nata y mostaza: 5 min/100 °C/giro inverso/vel. cuchara. Sirve con pasta.']]
    }
  },
  {
    id: 'de-kase-lauch-suppe', n: 'Sopa de queso y puerro con carne picada', e: '🧀', tipo: 'cena', tags: ['carne'],
    ing: [['carne_picada', 400], ['puerro', 4], ['cebolla', 100], ['queso_crema', 200], ['queso_lonchas', 100], ['caldo_carne', 1000], ['nata', 100], ['nuez_moscada', 1], ['aceite', 20], ['pan_barra', 1], ['sal', 5]],
    m: {
      fuego: [35, ['Dora la carne con la cebolla picada y el aceite 6 min.', 'Añade los puerros en rodajas finas y rehoga 5 min.', 'Vierte el caldo y cuece 15 min; añade el queso crema, el queso en lonchas troceado, la nata y la nuez moscada y remueve hasta que se funda. Sirve con pan.']],
      robot: [35, ['Sofríe cebolla y carne con aceite 6 min/120 °C/giro inverso/vel. cuchara.', 'Añade puerro y caldo: 15 min/100 °C/giro inverso/vel. cuchara.', 'Añade quesos, nata y nuez moscada: 4 min/90 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'de-bauernfruhstuck', n: 'Bauernfrühstück (patatas con bacon y huevo)', e: '🍳', tipo: 'cena', tags: ['carne', 'rapida', 'niños'],
    ing: [['patata', 900], ['bacon', 150], ['cebolla', 150], ['huevo', 6], ['leche', 50], ['cebollino', 1], ['pepinillos', 80], ['aceite', 40], ['sal', 6]],
    m: {
      fuego: [30, ['Cuece las patatas en rodajas 8 min (o usa patatas cocidas del día anterior) y dóralas en una sartén grande con aceite 10 min.', 'Añade el bacon y la cebolla en juliana y saltea 5 min.', 'Vierte los huevos batidos con la leche, sal y cebollino y deja cuajar a fuego suave 4 min. Sirve con pepinillos.']],
      airfryer: [30, ['Cocina las patatas en dados con aceite 15 min a 200 °C; añade el bacon y la cebolla 5 min.', 'Pásalo a un molde y vierte los huevos batidos.', 'Cocina 7 min a 170 °C.']]
    }
  },
  {
    id: 'de-wurstsalat', n: 'Ensalada de salchicha y queso (Wurstsalat)', e: '🥗', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['salchicha_ahumada', 400], ['queso_emmental', 200], ['cebolla_morada', 150], ['pepinillos', 150], ['rabanitos', 100], ['cebollino', 1], ['vinagre', 50], ['aceite_girasol', 50], ['mostaza', 10], ['pan_barra', 1], ['sal', 3]],
    m: {
      sin: [15, ['Corta la salchicha y el queso en tiras finas, la cebolla en aros y los pepinillos y rabanitos en rodajas.', 'Mezcla el vinagre con el agua de los pepinillos, la mostaza, el aceite, sal y pimienta.', 'Aliña todo, deja reposar 10 min y sirve con cebollino y pan.']]
    }
  },
  {
    id: 'de-wurstchen-kartoffelsalat', n: 'Salchichas con ensalada de patata a la mayonesa', e: '🌭', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['salchichas_frankfurt', 600], ['patata', 900], ['huevo', 3], ['pepinillos', 120], ['mayonesa', 150], ['yogur', 1], ['cebolla', 80], ['mostaza', 30], ['cebollino', 1], ['sal', 5]],
    m: {
      fuego: [35, ['Cuece las patatas con piel 20 min y los huevos 10 min; pela y corta en dados.', 'Mezcla con los pepinillos y la cebolla picados, la mayonesa, el yogur, un chorro del agua de pepinillos y sal.', 'Calienta las salchichas en agua sin que hierva 5 min y sírvelas con la ensalada y mostaza.']],
      robot: [35, ['Cuece patatas y huevos en el Varoma 25 min/Varoma/vel. 1 con 600 ml de agua.', 'Prepara la ensalada con la mayonesa, el yogur y los encurtidos.', 'Calienta las salchichas en el agua del vaso 5 min/80 °C/vel. 1.']]
    }
  },
  {
    id: 'de-pollo-riesling', n: 'Pollo al vino blanco con champiñones', e: '🍷', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_muslos', 1000], ['vino_blanco', 300], ['champinon', 300], ['chalota', 150], ['bacon', 80], ['nata', 150], ['harina', 20], ['mantequilla', 30], ['tomillo', 1], ['perejil_fresco', 1], ['tallarines', 300], ['sal', 7]],
    m: {
      fuego: [55, ['Enharina el pollo y dóralo en la mantequilla; resérvalo.', 'Dora el bacon y las chalotas, añade los champiñones 4 min.', 'Vierte el vino, vuelve el pollo con el tomillo, tapa y cuece 30 min.', 'Añade la nata 5 min y sirve con tallarines y perejil.']],
      horno: [60, ['Dora el pollo, el bacon, las chalotas y los champiñones en una cazuela apta para horno.', 'Añade el vino y el tomillo, tapa y hornea 35 min a 180 °C.', 'Añade la nata y hornea 5 min más. Sirve con tallarines.']]
    }
  },
  {
    id: 'de-salmon-eneldo', n: 'Salmón con salsa de eneldo y patatas', e: '🐟', tipo: 'cena', tags: ['pescado', 'rapida'],
    ing: [['salmon', 700], ['patata', 700], ['nata', 200], ['mostaza', 15], ['eneldo', 2], ['limon', 1], ['mantequilla', 20], ['pepino', 300], ['sal', 6]],
    m: {
      fuego: [30, ['Cuece las patatas pequeñas 18 min.', 'Dora el salmón salado en la mantequilla 3 min por lado.', 'Calienta la nata con la mostaza, el eneldo y el zumo de limón 3 min.', 'Sirve con las patatas y ensalada de pepino.']],
      horno: [30, ['Hornea el salmón con un poco de mantequilla 14 min a 200 °C.', 'Prepara la salsa de eneldo al fuego.', 'Sirve con patatas y pepino.']],
      robot: [30, ['Pon 600 ml de agua, las patatas en el cestillo y el salmón en el Varoma: 20 min/Varoma/vel. 1.', 'Vacía el vaso; pon nata, mostaza, eneldo y limón: 3 min/90 °C/vel. 2.', 'Sirve con pepino.']]
    }
  },
  {
    id: 'de-gallo-bacon', n: 'Gallo con bacon y gambas al estilo de Hamburgo', e: '🐟', tipo: 'cena', tags: ['pescado', 'carne'],
    ing: [['gallo', 1000], ['bacon', 120], ['gambas', 150], ['harina', 50], ['mantequilla', 40], ['limon', 1], ['perejil_fresco', 1], ['patata', 700], ['sal', 6]],
    m: {
      fuego: [35, ['Cuece las patatas 18 min y saltéalas con perejil.', 'Dora el bacon en dados y resérvalo.', 'Enharina el gallo salado y fríelo en la mantequilla con la grasa del bacon 3 min por lado.', 'Saltea las gambas 2 min y sirve el pescado con el bacon, las gambas, limón y las patatas.']],
      horno: [35, ['Pon el gallo en una fuente con mantequilla y sal.', 'Cubre con el bacon y hornea 12 min a 200 °C; añade las gambas y hornea 4 min más.', 'Sirve con limón y patatas con perejil.']]
    }
  },
  {
    id: 'de-zwiebelrostbraten', n: 'Filete de ternera con cebolla crujiente (Zwiebelrostbraten)', e: '🧅', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_entrecot', 800], ['cebolla', 400], ['harina', 40], ['pimenton', 3], ['caldo_carne', 250], ['mostaza', 10], ['mantequilla', 30], ['aceite_girasol', 200], ['patata', 800], ['sal', 7]],
    m: {
      fuego: [40, ['Corta la cebolla en aros finos, pásalos por harina con pimentón y fríelos en el aceite hasta que estén crujientes.', 'Haz los filetes salados en una sartén muy caliente con la mantequilla 2–3 min por lado; resérvalos.', 'Desglasa la sartén con el caldo y la mostaza y reduce 3 min.', 'Sirve la carne con la salsa, la cebolla crujiente y patatas salteadas.']],
      airfryer: [35, ['Enharina la cebolla en aros, pulverízala con aceite y cocina 10 min a 190 °C, removiendo.', 'Haz la carne en la plancha.', 'Prepara la salsa y sirve con patatas.']]
    }
  },
  {
    id: 'de-judias-pera-bacon', n: 'Judías verdes con pera y bacon', e: '🍐', tipo: 'comida', tags: ['carne'],
    ing: [['judias_verdes', 800], ['pera', 600], ['bacon', 250], ['patata', 600], ['cebolla', 100], ['caldo_verduras', 500], ['tomillo', 1], ['azucar', 5], ['perejil_fresco', 1], ['sal', 5]],
    m: {
      fuego: [45, ['Cuece el bacon en una pieza o tiras gruesas en el caldo con la cebolla y el tomillo 15 min.', 'Añade las judías troceadas y las peras en cuartos y cuece 15 min.', 'Cuece las patatas aparte y sirve todo junto con perejil.']],
      robot: [40, ['Pon caldo, bacon, cebolla y tomillo: 12 min/100 °C/vel. 1.', 'Añade judías, peras y azúcar y las patatas en el Varoma: 18 min/Varoma/giro inverso/vel. cuchara.', 'Sirve con perejil.']]
    }
  },
  {
    id: 'de-strammer-max', n: 'Strammer Max (tostada de jamón con huevo frito)', e: '🍳', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['pan_molde', 1], ['jamon_cocido', 250], ['huevo', 8], ['mantequilla', 40], ['pepinillos', 80], ['tomate', 300], ['cebollino', 1], ['sal', 3]],
    m: {
      fuego: [15, ['Tuesta 8 rebanadas de pan y úntalas con mantequilla.', 'Calienta el jamón en la sartén 1 min y colócalo sobre el pan.', 'Fríe los huevos, ponlos encima y sirve con pepinillos, tomate y cebollino.']],
      horno: [15, ['Coloca el pan con mantequilla y jamón en una bandeja.', 'Hornea 5 min a 200 °C.', 'Cubre con los huevos fritos y sirve con pepinillos y tomate.']]
    }
  },
  {
    id: 'de-toast-hawaii', n: 'Toast Hawaii (tostada de jamón, piña y queso)', e: '🍍', tipo: 'cena', tags: ['carne', 'rapida', 'niños'],
    ing: [['pan_molde', 1], ['jamon_cocido', 200], ['pina', 1], ['queso_lonchas', 200], ['mantequilla', 30], ['lechuga', 1], ['tomate', 200]],
    m: {
      horno: [15, ['Unta 8 rebanadas de pan con mantequilla y colócalas en una bandeja.', 'Cubre con jamón, una rodaja de piña escurrida y una loncha de queso.', 'Gratina 8 min a 220 °C. Sirve con ensalada.']],
      airfryer: [12, ['Monta las tostadas.', 'Cocina 6 min a 190 °C.', 'Sirve con ensalada.']]
    }
  },
  {
    id: 'de-erbsensuppe', n: 'Erbsensuppe (potaje de guisantes secos con salchichas)', e: '🫛', tipo: 'comida', tags: ['legumbres', 'carne'],
    ing: [['guisantes_secos', 400], ['salchichas_frankfurt', 300], ['bacon', 100], ['patata', 300], ['zanahoria', 150], ['puerro', 1], ['apio', 100], ['cebolla', 150], ['caldo_verduras', 1500], ['mejorana', 1], ['laurel', 2], ['sal', 5]],
    m: {
      fuego: [80, ['Dora el bacon con la cebolla picada.', 'Añade los guisantes secos lavados, el caldo, el laurel y la mejorana y cuece 45 min.', 'Agrega la patata, la zanahoria, el puerro y el apio en dados y cuece 20 min, aplastando parte para espesar.', 'Añade las salchichas en rodajas 5 min.']],
      robot: [70, ['Sofríe bacon y cebolla 5 min/120 °C/vel. 1.', 'Añade guisantes secos, caldo y especias: 45 min/100 °C/giro inverso/vel. cuchara.', 'Añade verduras y salchichas: 20 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'de-gulaschsuppe', n: 'Gulaschsuppe (sopa de gulasch)', e: '🥣', tipo: 'cena', tags: ['carne'],
    ing: [['ternera_guisar', 500], ['cebolla', 400], ['patata', 400], ['pimiento_rojo', 200], ['ajo', 2], ['tomate_concentrado', 40], ['pimenton', 10], ['alcaravea', 2], ['mejorana', 1], ['caldo_carne', 1500], ['aceite', 30], ['pan_barra', 1], ['sal', 7]],
    m: {
      fuego: [100, ['Dora la cebolla picada con aceite 10 min; añade la ternera en dados pequeños, el ajo, el pimentón, la alcaravea y el concentrado.', 'Vierte el caldo y cuece tapado 1 h.', 'Añade la patata y el pimiento en dados y la mejorana y cuece 20 min. Sirve con pan.']],
      robot: [85, ['Sofríe la cebolla con aceite 8 min/120 °C/vel. 1.', 'Añade carne, ajo, especias, concentrado y caldo: 55 min/100 °C/giro inverso/vel. cuchara.', 'Añade patata y pimiento: 20 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'de-kartoffelgulasch', n: 'Gulasch de patata con salchichas', e: '🥔', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['patata', 1000], ['salchichas_frankfurt', 400], ['cebolla', 250], ['pimiento_rojo', 150], ['tomate_concentrado', 30], ['pimenton', 8], ['mejorana', 1], ['caldo_verduras', 700], ['yogur', 2], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [40, ['Pocha la cebolla y el pimiento con aceite 8 min; añade el pimentón y el concentrado.', 'Agrega las patatas en dados, la mejorana y el caldo y cuece 20 min.', 'Añade las salchichas en rodajas 5 min. Sirve con una cucharada de yogur.']],
      robot: [35, ['Sofríe cebolla y pimiento con aceite 6 min/120 °C/vel. 1.', 'Añade especias, concentrado, patatas y caldo: 20 min/100 °C/giro inverso/vel. cuchara.', 'Añade las salchichas: 5 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'de-labskaus', n: 'Labskaus (puré de carne y remolacha con huevo)', e: '🥩', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_guisar', 500], ['patata', 900], ['remolacha', 250], ['cebolla', 200], ['pepinillos', 100], ['huevo', 4], ['mantequilla', 40], ['laurel', 2], ['sal', 8]],
    m: {
      fuego: [100, ['Cuece la ternera con laurel y sal 1 h 15 min y desmenúzala muy fina (o usa carne cocida sobrante).', 'Cuece las patatas y aplástalas con un poco del caldo.', 'Pocha la cebolla en la mantequilla, añade la carne, el puré y la remolacha picada y mezcla hasta que quede rosado.', 'Sirve con un huevo frito encima y pepinillos.']],
      robot: [90, ['Cuece la ternera con laurel, sal y 1 l de agua 70 min/100 °C/giro inverso/vel. cuchara.', 'Cuece las patatas en el caldo 20 min/100 °C/vel. 1, escurre y añade carne, cebolla pochada y remolacha: 20 seg/vel. 4.', 'Sirve con huevo frito y pepinillos.']]
    }
  },
  {
    id: 'de-nudelauflauf', n: 'Gratinado de pasta con jamón y queso', e: '🧀', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['pasta_corta', 400], ['jamon_cocido', 250], ['guisantes', 150], ['huevo', 3], ['nata', 200], ['leche', 200], ['queso_emmental', 200], ['nuez_moscada', 1], ['sal', 6]],
    m: {
      horno: [45, ['Cuece la pasta 2 min menos de lo indicado.', 'Mézclala con el jamón en dados y los guisantes en una fuente.', 'Bate los huevos con la nata, la leche, la nuez moscada, sal y la mitad del queso y viértelo; cubre con el resto del queso.', 'Hornea 25 min a 190 °C.']],
      airfryer: [40, ['Prepara la pasta con jamón y guisantes en un molde.', 'Vierte la mezcla de huevo y nata y cubre con queso.', 'Cocina 18 min a 170 °C.']]
    }
  }
]);
