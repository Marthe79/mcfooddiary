/* MC Food Diary · cocina de Estados Unidos 🇺🇸. Formato y normas: recetas/GUIA-RECETAS.md */

MC_ADD_ING({
  salchicha_ahumada: ['Salchichas ahumadas', 'charcuteria', 8, 'kg'],
  salsa_picante: ['Salsa picante (tipo Tabasco)', 'despensa', 45, 'l'],
  pastrami: ['Pastrami en lonchas', 'charcuteria', 25, 'kg', 0, 'pechuga de pavo ahumada o rosbif en lonchas'],
  pan_perrito: ['Pan de perrito caliente', 'panaderia', 0.3, 'ud'],
  pavo_picado: ['Carne picada de pavo', 'carniceria', 8, 'kg'],
  surimi: ['Palitos de surimi', 'pescaderia', 6, 'kg'],
  ternera_falda: ['Falda de ternera', 'carniceria', 10, 'kg'],
  mazorca: ['Mazorca de maíz cocida', 'fruteria', 1, 'ud'],
  panko: ['Pan rallado panko', 'despensa', 6, 'kg'],
  queso_azul: ['Queso azul (gorgonzola, roquefort)', 'lacteos', 14, 'kg'],
  levadura_quimica: ['Levadura química (sobre)', 'basicos', 0, 'ud', 1],
  langostinos_crudos: ['Langostinos crudos', 'congelados', 10, 'kg']
});

MC_ADD('us', [
  {
    id: 'hamburguesas', n: 'Hamburguesas caseras con ensalada', e: '🍔', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['carne_picada', 600], ['pan_hamburguesa', 4], ['tomate', 200], ['lechuga', 1], ['cebolla_morada', 80], ['queso_rallado', 80], ['sal', 5], ['pimienta', 1]],
    m: {
      fuego: [20, ['Salpimienta la carne, forma 4 hamburguesas y aplánalas.', 'Hazlas en sartén o plancha caliente 3–4 min por lado. Pon queso encima al final.', 'Monta con el pan tostado, lechuga, tomate y cebolla. El resto, en ensalada.']],
      airfryer: [18, ['Forma 4 hamburguesas salpimentadas.', 'Cocina 10 min a 200 °C, girándolas a mitad. Añade el queso el último minuto.', 'Monta con pan, lechuga, tomate y cebolla.']],
      horno: [25, ['Coloca las hamburguesas en una bandeja y hornea 15 min a 220 °C.', 'Pon el queso encima y gratina 2 min.', 'Monta con pan, lechuga, tomate y cebolla.']]
    }
  },
  {
    id: 'us-mac-cheese', n: 'Macarrones con queso (mac and cheese)', e: '🧀', tipo: 'comida', tags: ['vegetariano', 'niños'],
    ing: [['macarron', 400], ['queso_cheddar', 250], ['queso_rallado', 60], ['leche', 600], ['mantequilla', 50], ['harina', 40], ['mostaza', 10], ['pan_rallado', 30], ['nuez_moscada', 1], ['sal', 6]],
    m: {
      fuego: [25, ['Cuece los macarrones 2 min menos de lo que indique el paquete.', 'Derrite la mantequilla, tuesta la harina 1 min y añade la leche poco a poco removiendo hasta espesar.', 'Fuera del fuego añade el cheddar rallado, la mostaza, la nuez moscada y sal; mezcla con la pasta.']],
      horno: [40, ['Prepara la pasta y la salsa de queso como en el fuego.', 'Pásalo a una fuente y cubre con el queso rallado y el pan rallado.', 'Gratina 15 min a 200 °C.']],
      robot: [30, ['Pon leche, harina, mantequilla, nuez moscada y sal: 8 min/90 °C/vel. 4.', 'Añade el cheddar y la mostaza: 1 min/vel. 4.', 'Mezcla con la pasta cocida aparte.']]
    }
  },
  {
    id: 'us-pulled-pork', n: 'Bocadillos de cerdo desmenuzado a la barbacoa (pulled pork)', e: '🥪', tipo: 'comida', tags: ['carne'],
    ing: [['cerdo_guisar', 1000], ['salsa_barbacoa', 250], ['cebolla', 200], ['ajo', 3], ['pimenton', 6], ['azucar_moreno', 20], ['vinagre', 30], ['pan_hamburguesa', 6], ['repollo', 300], ['zanahoria', 100], ['mayonesa', 60], ['sal', 8]],
    m: {
      horno: [200, ['Unta la carne en trozos grandes (mejor paleta) con pimentón, azúcar moreno, ajo picado y sal.', 'Ponla sobre la cebolla en una cazuela con el vinagre y 200 ml de agua, tapa y hornea 3 h a 150 °C.', 'Desmenuza la carne con dos tenedores y mézclala con la salsa barbacoa y parte del jugo.', 'Sirve en pan con ensalada de col y zanahoria con mayonesa.']],
      fuego: [150, ['Dora la carne especiada en una olla.', 'Añade cebolla, vinagre y 400 ml de agua, tapa y cuece a fuego mínimo 2 h 15 min.', 'Desmenuza, mezcla con la barbacoa y sirve en pan con ensalada de col.']],
      robot: [110, ['Pon la cebolla, el ajo, el vinagre y 200 ml de agua y la carne especiada: 90 min/100 °C/giro inverso/vel. cuchara.', 'Desmenuza la carne y mézclala con la barbacoa.', 'Sirve en pan con ensalada de col.']]
    }
  },
  {
    id: 'us-costillas-bbq', n: 'Costillas de cerdo a la barbacoa', e: '🍖', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['cerdo_costillas', 1500], ['salsa_barbacoa', 250], ['pimenton', 6], ['azucar_moreno', 20], ['ajo', 3], ['mostaza', 15], ['patata', 800], ['aceite', 30], ['sal', 10]],
    m: {
      horno: [150, ['Unta las costillas con pimentón, azúcar moreno, ajo machacado, mostaza y sal.', 'Envuélvelas en papel de aluminio y hornea 2 h a 150 °C.', 'Ábrelas, pincela con la salsa barbacoa y hornea 15 min a 220 °C con las patatas en gajos asadas aparte.']],
      airfryer: [70, ['Cuece las costillas troceadas en agua con sal 40 min (o al vapor).', 'Úntalas de salsa barbacoa y cocina 15 min a 190 °C, girándolas.', 'Sirve con patatas en gajos hechas en la freidora.']],
      robot: [85, ['Pon 700 ml de agua en el vaso y las costillas especiadas en el Varoma: 60 min/Varoma/vel. 1.', 'Úntalas con barbacoa.', 'Dóralas 10 min en horno a 230 °C o en la freidora a 200 °C.']]
    }
  },
  {
    id: 'us-pollo-frito-sureno', n: 'Pollo frito al estilo sureño', e: '🍗', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['pollo_muslos', 1200], ['leche', 300], ['limon', 1], ['harina', 200], ['pimenton', 6], ['ajo', 2], ['oregano', 2], ['pimienta', 3], ['aceite_girasol', 500], ['repollo', 300], ['mayonesa', 60], ['sal', 10]],
    m: {
      fuego: [60, ['Marina el pollo con la leche, el zumo de limón y sal al menos 30 min.', 'Mezcla la harina con pimentón, ajo en polvo o picado fino, orégano, pimienta y sal; reboza bien el pollo.', 'Fríelo en aceite a 165 °C 12–14 min, girándolo, hasta que esté dorado y hecho por dentro.', 'Sirve con ensalada de col con mayonesa.']],
      airfryer: [55, ['Marina y reboza el pollo.', 'Pulverízalo con aceite y cocina 22 min a 190 °C, girando a mitad.', 'Sirve con ensalada de col.']],
      horno: [65, ['Marina y reboza el pollo y colócalo en una rejilla.', 'Riega con aceite y hornea 40 min a 210 °C.', 'Sirve con ensalada de col.']]
    }
  },
  {
    id: 'us-meatloaf', n: 'Meatloaf (rollo de carne glaseado)', e: '🍞', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['carne_picada', 800], ['cebolla', 150], ['huevo', 2], ['pan_rallado', 80], ['leche', 100], ['ketchup', 150], ['azucar_moreno', 20], ['mostaza', 10], ['salsa_worcestershire', 15], ['patata', 800], ['mantequilla', 40], ['sal', 10]],
    m: {
      horno: [80, ['Mezcla la carne con la cebolla picada, los huevos, el pan rallado mojado en la leche, la Worcestershire y sal.', 'Forma un pan alargado en una bandeja.', 'Mezcla el kétchup con el azúcar y la mostaza y píntalo por encima. Hornea 55 min a 190 °C.', 'Sirve en lonchas con puré de patata con mantequilla.']],
      airfryer: [60, ['Prepara la mezcla y forma un pan que quepa en la cesta.', 'Cocina 30 min a 170 °C, glasea y cocina 8 min más.', 'Sirve con puré.']]
    }
  },
  {
    id: 'us-clam-chowder', n: 'Clam chowder (crema de almejas)', e: '🥣', tipo: 'cena', tags: ['pescado'],
    ing: [['almejas', 1000], ['bacon', 100], ['patata', 400], ['cebolla', 150], ['apio', 100], ['leche', 500], ['nata', 200], ['mantequilla', 30], ['harina', 30], ['tomillo', 1], ['laurel', 1], ['sal', 5]],
    m: {
      fuego: [40, ['Abre las almejas en una olla con 300 ml de agua tapada 4 min; separa la carne y cuela el caldo.', 'Dora el bacon picado con la mantequilla, añade cebolla y apio picados y rehoga 5 min; espolvorea la harina.', 'Añade el caldo de almejas, la patata en dados, el tomillo y el laurel y cuece 15 min.', 'Agrega la leche, la nata y las almejas, calienta sin hervir 3 min y ajusta de sal.']],
      robot: [40, ['Abre las almejas en el Varoma 8 min/Varoma/vel. 1 con 400 ml de agua en el vaso; reserva caldo y carne.', 'Sofríe bacon, cebolla y apio con mantequilla 6 min/120 °C/vel. 1; añade harina, patata, caldo y especias: 15 min/100 °C/giro inverso/vel. cuchara.', 'Añade leche, nata y almejas: 4 min/90 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'us-jambalaya', n: 'Jambalaya de pollo, salchicha y gambas', e: '🍲', tipo: 'comida', tags: ['carne', 'pescado'],
    ing: [['pollo_muslos', 500], ['salchicha_ahumada', 250], ['gambas', 250], ['arroz_largo', 300], ['cebolla', 150], ['pimiento_verde', 150], ['apio', 100], ['ajo', 3], ['tomate_triturado', 400], ['caldo_pollo', 700], ['pimenton', 5], ['oregano', 1], ['tomillo', 1], ['salsa_picante', 5], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [50, ['Dora el pollo en dados y la salchicha en rodajas con aceite y resérvalos.', 'Sofríe cebolla, pimiento, apio y ajo picados 6 min con las especias.', 'Añade el arroz, el tomate, el caldo, el pollo y la salchicha; tapa y cuece 18 min.', 'Agrega las gambas y la salsa picante, tapa y deja 5 min más.']],
      robot: [45, ['Sofríe cebolla, pimiento, apio y ajo troceados con aceite 6 min/120 °C/vel. 1.', 'Añade pollo, salchicha, especias, tomate y 650 ml de caldo: 8 min/100 °C/giro inverso/vel. cuchara.', 'Añade arroz: 13 min/100 °C/giro inverso/vel. cuchara; añade gambas y picante y reposa 5 min.']]
    }
  },
  {
    id: 'us-gumbo', n: 'Gumbo de pollo y salchicha', e: '🥘', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_muslos', 600], ['salchicha_ahumada', 300], ['harina', 60], ['aceite', 60], ['cebolla', 200], ['pimiento_verde', 150], ['apio', 150], ['ajo', 3], ['caldo_pollo', 1200], ['tomate_triturado', 200], ['pimenton', 5], ['tomillo', 1], ['laurel', 2], ['salsa_picante', 5], ['arroz_largo', 250], ['sal', 6]],
    m: {
      fuego: [80, ['Tuesta la harina con el aceite a fuego medio-bajo, removiendo sin parar, 15 min, hasta que tenga color de chocolate con leche (roux).', 'Añade cebolla, pimiento, apio y ajo picados y rehoga 5 min.', 'Incorpora el caldo poco a poco, el tomate, las especias, el pollo y la salchicha en rodajas; cuece 40 min.', 'Ajusta con salsa picante y sirve con arroz blanco.']],
      robot: [70, ['Tuesta harina y aceite 15 min/120 °C/vel. 2 hasta tener un roux oscuro.', 'Añade las verduras troceadas: 5 min/120 °C/vel. 1.', 'Añade caldo, tomate, especias, pollo y salchicha: 35 min/100 °C/giro inverso/vel. cuchara. Sirve con arroz.']]
    }
  },
  {
    id: 'us-pasta-cajun', n: 'Pasta cajún con pollo', e: '🍝', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['pasta_corta', 350], ['pollo_pechuga', 500], ['pimiento_rojo', 150], ['cebolla', 100], ['ajo', 2], ['nata', 250], ['queso_rallado', 50], ['pimenton', 6], ['oregano', 1], ['tomillo', 1], ['pimenton_picante', 2], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [25, ['Cuece la pasta. Mezcla el pollo en tiras con las especias y sal y dóralo con aceite 6 min.', 'Añade la cebolla, el pimiento y el ajo y saltea 4 min.', 'Vierte la nata y el queso, cuece 3 min y mezcla con la pasta.']],
      robot: [25, ['Sofríe cebolla, pimiento y ajo con aceite 5 min/120 °C/vel. 1.', 'Añade pollo especiado: 6 min/120 °C/giro inverso/vel. cuchara.', 'Añade nata y queso: 3 min/90 °C/giro inverso/vel. cuchara y mezcla con la pasta.']]
    }
  },
  {
    id: 'us-sloppy-joes', n: 'Sloppy joes (bocadillos de carne en salsa)', e: '🍔', tipo: 'cena', tags: ['carne', 'rapida', 'niños'],
    ing: [['carne_picada_ternera', 600], ['cebolla', 150], ['pimiento_verde', 100], ['ajo', 2], ['tomate_triturado', 300], ['ketchup', 80], ['salsa_worcestershire', 15], ['mostaza', 10], ['azucar_moreno', 10], ['pan_hamburguesa', 4], ['aceite', 20], ['sal', 5]],
    m: {
      fuego: [25, ['Sofríe la cebolla, el pimiento y el ajo picados con aceite 5 min.', 'Añade la carne y dórala desmenuzándola 6 min.', 'Agrega tomate, kétchup, Worcestershire, mostaza, azúcar y sal y cuece 10 min hasta que espese.', 'Sirve dentro del pan tostado.']],
      robot: [25, ['Sofríe cebolla, pimiento y ajo con aceite 5 min/120 °C/vel. 1.', 'Añade la carne: 6 min/120 °C/giro inverso/vel. cuchara.', 'Añade el resto de ingredientes: 10 min/100 °C/giro inverso/vel. cuchara sin cubilete. Sirve en pan.']]
    }
  },
  {
    id: 'us-chili-blanco', n: 'Chili blanco de pollo y alubias', e: '🍲', tipo: 'cena', tags: ['carne', 'legumbres'],
    ing: [['pollo_pechuga', 600], ['alubias', 800], ['cebolla', 150], ['ajo', 3], ['jalapenos', 50], ['maiz', 2], ['caldo_pollo', 700], ['queso_crema', 100], ['comino', 4], ['oregano', 2], ['lima', 1], ['cilantro', 1], ['aceite', 20], ['sal', 6]],
    m: {
      fuego: [40, ['Sofríe la cebolla, el ajo y los jalapeños picados con aceite 5 min; añade comino y orégano.', 'Agrega el caldo, el pollo entero y la mitad de las alubias y cuece 20 min.', 'Saca el pollo, desmenúzalo y devuélvelo con el resto de alubias, el maíz y el queso crema; cuece 5 min.', 'Sirve con cilantro y lima.']],
      robot: [40, ['Sofríe cebolla, ajo y jalapeños con aceite 5 min/120 °C/vel. 1.', 'Añade especias, caldo, pollo y la mitad de alubias: 20 min/100 °C/giro inverso/vel. cuchara.', 'Desmenuza el pollo; añade todo con el resto de alubias, maíz y queso: 5 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'us-gambas-polenta', n: 'Gambas con polenta cremosa (shrimp and grits)', e: '🦐', tipo: 'cena', tags: ['pescado', 'rapida'],
    ing: [['gambas', 500], ['polenta', 200], ['leche', 400], ['queso_cheddar', 100], ['mantequilla', 40], ['bacon', 100], ['ajo', 2], ['cebolleta', 2], ['limon', 1], ['pimenton', 3], ['salsa_picante', 5], ['sal', 6]],
    m: {
      fuego: [30, ['Hierve la leche con 400 ml de agua y sal, añade la polenta en lluvia y cuece 10 min removiendo; termina con el cheddar y la mitad de la mantequilla.', 'Dora el bacon picado, añade el ajo, el resto de mantequilla y las gambas con pimentón y saltea 3 min.', 'Añade zumo de limón y salsa picante y sirve sobre la polenta con cebolleta.']],
      robot: [30, ['Pon leche, 400 ml de agua y sal: 8 min/100 °C/vel. 1; añade la polenta: 8 min/100 °C/vel. 2. Añade cheddar y mantequilla.', 'Saltea en sartén el bacon, el ajo y las gambas.', 'Sirve sobre la polenta con limón y cebolleta.']]
    }
  },
  {
    id: 'us-pot-roast', n: 'Pot roast (asado de ternera con verduras)', e: '🥩', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_guisar', 1200], ['patata', 600], ['zanahoria', 400], ['cebolla', 250], ['apio', 100], ['ajo', 4], ['caldo_carne', 500], ['vino_tinto', 150], ['tomate_concentrado', 20], ['salsa_worcestershire', 15], ['tomillo', 1], ['romero', 1], ['harina', 20], ['aceite', 30], ['sal', 10]],
    m: {
      horno: [200, ['Sala la carne en una pieza (morcillo o aguja), enharínala y dórala bien en una cazuela apta para horno.', 'Añade la cebolla en cuartos, el ajo, el concentrado, el vino, el caldo, la Worcestershire y las hierbas.', 'Tapa y hornea 2 h 15 min a 160 °C; añade patata, zanahoria y apio en trozos grandes y hornea 45 min más.', 'Sirve en lonchas con las verduras y la salsa.']],
      fuego: [180, ['Dora la carne enharinada.', 'Añade cebolla, ajo, vino, caldo, concentrado y hierbas, tapa y cuece a fuego suave 2 h.', 'Añade las verduras y cuece 40 min más.']]
    }
  },
  {
    id: 'us-pot-pie', n: 'Pot pie de pollo (pastel de pollo y verduras)', e: '🥧', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['pollo_pechuga', 600], ['masa_hojaldre', 1], ['zanahoria', 150], ['guisantes', 150], ['cebolla', 100], ['apio', 80], ['mantequilla', 50], ['harina', 50], ['caldo_pollo', 400], ['leche', 200], ['tomillo', 1], ['huevo', 1], ['sal', 6]],
    m: {
      horno: [60, ['Derrite la mantequilla y rehoga la cebolla, zanahoria y apio picados 6 min; añade la harina 1 min.', 'Vierte el caldo y la leche removiendo, añade el pollo en dados, los guisantes, el tomillo y sal y cuece 8 min.', 'Pásalo a una fuente, cubre con el hojaldre, haz unos cortes y pinta con huevo.', 'Hornea 25 min a 200 °C.']],
      airfryer: [50, ['Prepara el relleno como en el horno.', 'Reparte en cazuelitas, cubre con hojaldre y pinta con huevo.', 'Cocina 12 min a 180 °C.']]
    }
  },
  {
    id: 'us-ensalada-cobb', n: 'Ensalada Cobb', e: '🥗', tipo: 'cena', tags: ['carne', 'ligera'],
    ing: [['lechuga', 2], ['pollo_pechuga', 400], ['bacon', 120], ['huevo', 4], ['aguacate', 2], ['tomate', 300], ['queso_azul', 80], ['cebolleta', 2], ['mostaza', 10], ['vinagre', 20], ['aceite', 50], ['sal', 4]],
    m: {
      fuego: [30, ['Cuece los huevos 10 min. Haz el pollo a la plancha y córtalo en dados; dora el bacon y desmenúzalo.', 'Trocea la lechuga y colócala en una fuente.', 'Ordena por filas el pollo, el bacon, el huevo, el aguacate, el tomate y el queso azul.', 'Aliña con aceite, vinagre, mostaza y sal y espolvorea cebolleta.']],
      airfryer: [25, ['Cocina el pollo 12 min a 200 °C y el bacon 5 min.', 'Cuece los huevos y trocea las verduras.', 'Monta la ensalada por filas y aliña.']]
    }
  },
  {
    id: 'us-ensalada-cesar', n: 'Ensalada César con pollo', e: '🥬', tipo: 'cena', tags: ['carne', 'ligera', 'rapida'],
    ing: [['lechuga', 2], ['pollo_pechuga', 500], ['pan_barra', 1], ['parmesano', 60], ['anchoas', 1], ['huevo', 1], ['ajo', 1], ['limon', 1], ['mostaza', 5], ['aceite', 100], ['sal', 4]],
    m: {
      fuego: [25, ['Haz el pollo a la plancha y córtalo en tiras. Tuesta el pan en dados con aceite y ajo.', 'Tritura la yema, las anchoas, el ajo, el zumo de limón, la mostaza y la mitad del parmesano, añadiendo el aceite en hilo.', 'Mezcla la lechuga con la salsa y sirve con el pollo, los picatostes y el resto de parmesano en lascas.']],
      airfryer: [25, ['Cocina el pollo 12 min a 200 °C y los dados de pan 4 min a 180 °C.', 'Prepara la salsa César.', 'Monta la ensalada.']]
    }
  },
  {
    id: 'us-club-sandwich', n: 'Club sándwich', e: '🥪', tipo: 'cena', tags: ['carne', 'rapida', 'niños'],
    ing: [['pan_molde', 1], ['pavo_pechuga', 300], ['bacon', 150], ['huevo', 4], ['tomate', 200], ['lechuga', 1], ['queso_lonchas', 100], ['mayonesa', 60], ['patata', 500], ['aceite', 20], ['sal', 4]],
    m: {
      fuego: [25, ['Haz el pavo en filetes finos a la plancha y dora el bacon. Haz los huevos a la plancha o en tortilla fina.', 'Tuesta 12 rebanadas de pan y úntalas con mayonesa.', 'Monta 3 pisos por sándwich con pavo, queso, bacon, huevo, lechuga y tomate; sujeta con palillos y corta en triángulos.', 'Sirve con patatas fritas o asadas.']],
      airfryer: [25, ['Cocina las patatas en bastones 15 min a 200 °C, el bacon 5 min y el pavo 8 min.', 'Tuesta el pan.', 'Monta los sándwiches.']]
    }
  },
  {
    id: 'us-philly-cheesesteak', n: 'Philly cheesesteak (bocadillo de ternera y queso)', e: '🥖', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['ternera_filetes', 600], ['pan_barra', 2], ['cebolla', 200], ['pimiento_verde', 150], ['champinon', 150], ['queso_lonchas', 200], ['aceite', 30], ['salsa_worcestershire', 10], ['sal', 5], ['pimienta', 2]],
    m: {
      fuego: [25, ['Corta la ternera en láminas muy finas (mejor medio congelada).', 'Pocha la cebolla, el pimiento y los champiñones en tiras con aceite 8 min.', 'Saltea la carne a fuego fuerte 2 min con la Worcestershire, sal y pimienta; mézclala con las verduras y cubre con el queso hasta que se funda.', 'Rellena el pan abierto y tostado.']],
      airfryer: [20, ['Cocina las verduras en tiras con aceite 8 min a 200 °C.', 'Añade la carne aliñada y cocina 4 min.', 'Rellena el pan, cubre con queso y cocina 2 min para fundirlo.']]
    }
  },
  {
    id: 'us-perritos-calientes', n: 'Perritos calientes con cebolla y chucrut', e: '🌭', tipo: 'cena', tags: ['carne', 'rapida', 'niños'],
    ing: [['salchichas_frankfurt', 500], ['pan_perrito', 8], ['cebolla', 250], ['chucrut', 200], ['mostaza', 40], ['ketchup', 60], ['pepinillos', 60], ['aceite', 20], ['sal', 2]],
    m: {
      fuego: [20, ['Pocha la cebolla en juliana con aceite y sal 12 min, hasta que se dore.', 'Calienta las salchichas en agua sin que hierva 5 min o dóralas en la plancha. Calienta el chucrut.', 'Rellena los panes tostados con la salchicha, la cebolla, el chucrut, pepinillo picado y las salsas.']],
      airfryer: [15, ['Cocina las salchichas 6 min a 190 °C.', 'Mete el pan 1 min para templarlo.', 'Monta con cebolla pochada, chucrut y salsas.']],
      horno: [20, ['Hornea las salchichas 10 min a 200 °C.', 'Templa los panes 2 min.', 'Monta con cebolla, chucrut y salsas.']]
    }
  },
  {
    id: 'us-alitas-buffalo', n: 'Alitas búfalo con salsa de queso azul', e: '🔥', tipo: 'cena', tags: ['carne'],
    ing: [['pollo_alitas', 1200], ['salsa_picante', 80], ['mantequilla', 60], ['ajo', 1], ['pimenton', 4], ['harina', 30], ['queso_azul', 60], ['yogur_griego', 2], ['limon', 1], ['apio', 200], ['zanahoria', 200], ['sal', 7]],
    m: {
      horno: [55, ['Seca las alitas, mézclalas con harina, pimentón y sal y hornéalas en rejilla 40 min a 220 °C, girándolas.', 'Derrite la mantequilla con la salsa picante y el ajo y baña las alitas.', 'Mezcla el queso azul con el yogur y el limón y sirve con bastones de apio y zanahoria.']],
      airfryer: [40, ['Enharina y sala las alitas.', 'Cocina 25 min a 200 °C, removiendo a mitad.', 'Báñalas en la salsa de mantequilla picante y sirve con la salsa de queso azul y las verduras.']]
    }
  },
  {
    id: 'us-salmon-miel-mostaza', n: 'Salmón glaseado con miel y mostaza', e: '🐟', tipo: 'cena', tags: ['pescado', 'rapida', 'ligera'],
    ing: [['salmon', 700], ['miel', 40], ['mostaza', 40], ['ajo', 2], ['limon', 1], ['esparragos', 2], ['aceite', 20], ['sal', 5]],
    m: {
      horno: [25, ['Mezcla la miel, la mostaza, el ajo picado y el zumo de limón.', 'Coloca el salmón y los espárragos en una bandeja con aceite y sal y pinta el salmón con el glaseado.', 'Hornea 14 min a 200 °C.']],
      airfryer: [18, ['Pinta el salmón con el glaseado.', 'Cocina con los espárragos 10 min a 190 °C.', 'Sirve con limón.']],
      fuego: [20, ['Dora el salmón con la piel hacia abajo 4 min.', 'Dale la vuelta, añade el glaseado y cocina 3 min más a fuego bajo.', 'Saltea los espárragos aparte y sirve.']]
    }
  },
  {
    id: 'us-crab-cakes', n: 'Pastelitos de cangrejo con ensalada', e: '🦀', tipo: 'cena', tags: ['pescado'],
    ing: [['surimi', 400], ['gambas', 150], ['huevo', 1], ['mayonesa', 60], ['mostaza', 10], ['panko', 80], ['cebolleta', 2], ['perejil_fresco', 1], ['pimenton', 3], ['limon', 2], ['lechuga', 1], ['aceite', 40], ['sal', 3]],
    m: {
      fuego: [30, ['Pica el surimi y las gambas y mézclalos con huevo, mayonesa, mostaza, cebolleta y perejil picados, pimentón, la mitad del panko y sal.', 'Forma 8 pastelitos, pásalos por el resto de panko y refrigéralos 10 min.', 'Dóralos en sartén con aceite 3 min por lado. Sirve con lechuga y limón.']],
      airfryer: [25, ['Prepara los pastelitos y pulverízalos con aceite.', 'Cocina 10 min a 200 °C, girándolos a mitad.', 'Sirve con ensalada y limón.']],
      horno: [30, ['Prepara los pastelitos y colócalos en una bandeja con aceite.', 'Hornea 15 min a 210 °C.', 'Sirve con ensalada y limón.']]
    }
  },
  {
    id: 'us-patatas-rellenas', n: 'Patatas asadas rellenas de bacon y cheddar', e: '🥔', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['patata', 1200], ['bacon', 150], ['queso_cheddar', 150], ['yogur_griego', 2], ['cebolleta', 2], ['brocoli', 300], ['mantequilla', 30], ['sal', 6]],
    m: {
      horno: [75, ['Pincha las patatas grandes, úntalas con sal y ásalas 60 min a 200 °C.', 'Dora el bacon y cuece el brócoli en ramilletes al vapor 5 min.', 'Abre las patatas, mezcla la pulpa con la mantequilla, añade bacon, brócoli y cheddar y gratina 8 min.', 'Sirve con yogur y cebolleta.']],
      airfryer: [50, ['Cocina las patatas pinchadas 40 min a 190 °C.', 'Ábrelas y rellena con mantequilla, bacon, brócoli y cheddar.', 'Cocina 5 min más. Sirve con yogur y cebolleta.']]
    }
  },
  {
    id: 'us-pollo-dumplings', n: 'Pollo con dumplings', e: '🍲', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['pollo_muslos', 800], ['zanahoria', 200], ['apio', 100], ['cebolla', 150], ['caldo_pollo', 1200], ['harina', 250], ['leche', 180], ['mantequilla', 50], ['levadura_quimica', 1], ['tomillo', 1], ['perejil_fresco', 1], ['sal', 7]],
    m: {
      fuego: [60, ['Rehoga la cebolla, la zanahoria y el apio picados con 20 g de mantequilla, añade el caldo, el pollo y el tomillo y cuece 25 min. Desmenuza el pollo.', 'Mezcla la harina con la levadura, sal, perejil, el resto de mantequilla fría y la leche hasta tener una masa blanda.', 'Echa cucharadas de masa al caldo hirviendo, tapa y cuece 15 min sin destapar.']],
      robot: [55, ['Sofríe las verduras con mantequilla 5 min/120 °C/vel. 1; añade caldo, pollo y tomillo: 25 min/100 °C/giro inverso/vel. cuchara.', 'Prepara la masa de dumplings en un bol y forma bolitas; colócalas en el Varoma engrasado.', 'Cocina 15 min/Varoma/giro inverso/vel. cuchara. Sirve los dumplings en el caldo con el pollo.']]
    }
  },
  {
    id: 'us-alubias-rojas-arroz', n: 'Alubias rojas con arroz al estilo de Nueva Orleans', e: '🫘', tipo: 'comida', tags: ['legumbres', 'carne'],
    ing: [['alubias_rojas', 800], ['salchicha_ahumada', 250], ['cebolla', 150], ['pimiento_verde', 150], ['apio', 100], ['ajo', 3], ['caldo_pollo', 400], ['pimenton', 4], ['tomillo', 1], ['laurel', 2], ['salsa_picante', 5], ['arroz_largo', 250], ['aceite', 20], ['sal', 5]],
    m: {
      fuego: [45, ['Dora la salchicha en rodajas con aceite y añade cebolla, pimiento, apio y ajo picados 6 min.', 'Agrega las alubias, el caldo y las especias y cuece 25 min, aplastando parte de las alubias para espesar.', 'Ajusta con salsa picante y sirve con arroz blanco.']],
      robot: [45, ['Sofríe salchicha y verduras con aceite 6 min/120 °C/vel. 1.', 'Añade alubias, caldo y especias: 25 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con arroz y salsa picante.']]
    }
  },
  {
    id: 'us-corn-chowder', n: 'Corn chowder (crema de maíz y patata)', e: '🌽', tipo: 'cena', tags: ['carne'],
    ing: [['maiz', 3], ['patata', 400], ['bacon', 100], ['cebolla', 150], ['apio', 80], ['pimiento_rojo', 100], ['caldo_pollo', 700], ['leche', 300], ['nata', 100], ['tomillo', 1], ['cebolleta', 1], ['sal', 5]],
    m: {
      fuego: [40, ['Dora el bacon picado y rehoga la cebolla, el apio y el pimiento 6 min.', 'Añade la patata en dados, el caldo y el tomillo y cuece 15 min.', 'Agrega el maíz escurrido, la leche y la nata, cuece 5 min y tritura un tercio para espesar. Sirve con cebolleta.']],
      robot: [40, ['Sofríe bacon y verduras 6 min/120 °C/vel. 1.', 'Añade patata, caldo y tomillo: 15 min/100 °C/giro inverso/vel. cuchara.', 'Añade maíz, leche y nata: 5 min/90 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'us-nachos-carne', n: 'Nachos gratinados con carne y frijoles', e: '🧀', tipo: 'cena', tags: ['carne', 'rapida', 'niños'],
    ing: [['nachos', 250], ['carne_picada_ternera', 400], ['alubias_negras', 400], ['queso_cheddar', 200], ['tomate', 200], ['cebolla', 100], ['jalapenos', 40], ['aguacate', 2], ['yogur_griego', 2], ['comino', 3], ['pimenton', 4], ['aceite', 20], ['sal', 5]],
    m: {
      horno: [25, ['Sofríe la cebolla con aceite, añade la carne con comino, pimentón y sal y dórala 8 min; agrega las alubias.', 'Extiende los nachos en una fuente, cubre con la carne y el cheddar rallado.', 'Gratina 8 min a 210 °C y termina con tomate picado, jalapeños, aguacate y yogur.']],
      airfryer: [20, ['Prepara la carne con alubias.', 'Monta los nachos con carne y queso en un molde.', 'Cocina 5 min a 180 °C y termina con los toppings.']]
    }
  },
  {
    id: 'us-pollo-king-ranch', n: 'Pollo King Ranch (cazuela tex-mex al horno)', e: '🤠', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_pechuga', 600], ['tortillas_maiz', 10], ['tomate_triturado', 300], ['cebolla', 150], ['pimiento_verde', 150], ['jalapenos', 30], ['champinon', 150], ['nata', 200], ['caldo_pollo', 200], ['queso_cheddar', 200], ['comino', 3], ['aceite', 20], ['sal', 6]],
    m: {
      horno: [60, ['Cuece el pollo en el caldo 15 min y desmenúzalo.', 'Sofríe cebolla, pimiento, jalapeños y champiñones, añade el tomate, la nata, el caldo, el comino y sal y cuece 5 min; mezcla con el pollo.', 'Alterna en una fuente capas de tortillas, la mezcla de pollo y cheddar.', 'Hornea 25 min a 190 °C.']]
    }
  },
  {
    id: 'us-chimichangas', n: 'Chimichangas de ternera', e: '🌯', tipo: 'cena', tags: ['carne'],
    ing: [['tortillas', 8], ['ternera_guisar', 500], ['cebolla', 150], ['alubias_rojas', 300], ['tomate_triturado', 200], ['queso_cheddar', 150], ['comino', 3], ['pimenton', 4], ['oregano', 1], ['lechuga', 1], ['aguacate', 2], ['aceite', 40], ['sal', 6]],
    m: {
      fuego: [90, ['Guisa la ternera con la cebolla, el tomate, las especias, sal y 300 ml de agua 1 h, hasta que se deshaga; desmenúzala y reduce.', 'Rellena las tortillas con la carne, las alubias y el queso y ciérralas como un paquete.', 'Dóralas en sartén con aceite 2 min por lado. Sirve con lechuga y aguacate.']],
      airfryer: [80, ['Prepara el relleno de ternera.', 'Forma las chimichangas y pincélalas con aceite.', 'Cocina 8 min a 200 °C. Sirve con lechuga y aguacate.']],
      horno: [85, ['Prepara el relleno y forma las chimichangas.', 'Colócalas en una bandeja y pincela con aceite.', 'Hornea 15 min a 220 °C.']]
    }
  },
  {
    id: 'us-tamale-pie', n: 'Pastel de carne con costra de maíz (tamale pie)', e: '🌽', tipo: 'comida', tags: ['carne', 'legumbres'],
    ing: [['carne_picada_ternera', 500], ['alubias_rojas', 400], ['maiz', 2], ['tomate_triturado', 400], ['cebolla', 150], ['pimiento_verde', 150], ['harina_maiz', 200], ['leche', 300], ['huevo', 1], ['queso_cheddar', 100], ['comino', 3], ['pimenton', 4], ['aceite', 30], ['sal', 7]],
    m: {
      horno: [55, ['Sofríe cebolla y pimiento, añade la carne con comino, pimentón y sal y dórala; agrega tomate, alubias y maíz y cuece 10 min.', 'Pásalo a una fuente.', 'Mezcla la harina de maíz con la leche, el huevo, el aceite, la mitad del queso y sal y extiéndela por encima con el resto del queso.', 'Hornea 25 min a 200 °C.']]
    }
  },
  {
    id: 'us-hash-ternera', n: 'Hash de ternera y patata con huevo', e: '🍳', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['ternera_filetes', 400], ['patata', 700], ['cebolla', 150], ['pimiento_rojo', 100], ['huevo', 4], ['salsa_worcestershire', 10], ['pimenton', 3], ['aceite', 40], ['sal', 6]],
    m: {
      fuego: [30, ['Cuece la patata en dados 7 min y escúrrela.', 'Dórala en una sartén con aceite, cebolla y pimiento picados 10 min, aplastando para que se tueste.', 'Añade la ternera en dados pequeños con pimentón y Worcestershire y saltea 4 min.', 'Haz huecos, casca los huevos y cuaja tapado 4 min.']],
      airfryer: [30, ['Cocina la patata en dados con aceite 15 min a 200 °C.', 'Añade la ternera, la cebolla y el pimiento y cocina 8 min.', 'Sirve con huevos fritos.']]
    }
  },
  {
    id: 'us-espaguetis-albondigas', n: 'Espaguetis con albóndigas', e: '🍝', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['espagueti', 400], ['carne_picada', 500], ['huevo', 1], ['pan_rallado', 50], ['parmesano', 50], ['ajo', 3], ['cebolla', 100], ['tomate_triturado', 800], ['albahaca', 1], ['oregano', 1], ['aceite', 40], ['sal', 8]],
    m: {
      fuego: [50, ['Mezcla la carne con huevo, pan rallado, la mitad del parmesano, 1 ajo picado y sal; forma albóndigas y dóralas con aceite.', 'Sofríe la cebolla y el resto del ajo, añade el tomate y el orégano y cuece 10 min.', 'Mete las albóndigas en la salsa y cuece 15 min. Sirve sobre los espaguetis cocidos con albahaca y parmesano.']],
      robot: [45, ['Forma las albóndigas y ponlas en el Varoma.', 'Sofríe cebolla y ajo con aceite 5 min/120 °C/vel. 1; añade tomate y orégano.', 'Cocina 25 min/Varoma/vel. 1 con el Varoma encima; junta albóndigas y salsa y sirve con la pasta.']]
    }
  },
  {
    id: 'us-sandwich-reuben', n: 'Sándwich Reuben', e: '🥪', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['pan_molde', 1], ['pastrami', 350], ['chucrut', 200], ['queso_emmental', 150], ['mayonesa', 50], ['ketchup', 20], ['pepinillos', 40], ['mantequilla', 30]],
    m: {
      fuego: [15, ['Mezcla la mayonesa con el kétchup y el pepinillo picado.', 'Monta 4 sándwiches con salsa, pastrami, chucrut escurrido y emmental.', 'Unta el pan por fuera con mantequilla y dóralos en sartén a fuego medio 3 min por lado, hasta que el queso se funda.']],
      airfryer: [12, ['Monta los sándwiches y úntalos con mantequilla.', 'Cocina 7 min a 180 °C, girándolos a mitad.', 'Corta en diagonal.']]
    }
  },
  {
    id: 'us-pescado-cajun', n: 'Pescado ennegrecido al estilo cajún', e: '🐟', tipo: 'cena', tags: ['pescado', 'rapida', 'ligera'],
    ing: [['merluza', 700], ['pimenton', 6], ['pimenton_picante', 2], ['ajo', 2], ['oregano', 2], ['tomillo', 1], ['pimienta', 2], ['mantequilla', 40], ['limon', 1], ['arroz_largo', 250], ['judias_verdes', 300], ['sal', 6]],
    m: {
      fuego: [25, ['Cuece el arroz y las judías verdes.', 'Mezcla las especias con el ajo muy picado y sal y reboza bien los lomos de pescado.', 'Hazlos en una sartén muy caliente con la mantequilla 3 min por lado, hasta que la costra se oscurezca. Sirve con limón, arroz y judías.']],
      airfryer: [20, ['Reboza los lomos con las especias y pincélalos con mantequilla.', 'Cocina 9 min a 200 °C.', 'Sirve con arroz, judías y limón.']],
      horno: [25, ['Reboza los lomos y colócalos en una bandeja con mantequilla.', 'Hornea 12 min a 220 °C.', 'Sirve con arroz, judías y limón.']]
    }
  },
  {
    id: 'us-shrimp-boil', n: 'Cocido de gambas, maíz y salchicha (shrimp boil)', e: '🦐', tipo: 'comida', tags: ['pescado', 'carne'],
    ing: [['langostinos_crudos', 800], ['salchicha_ahumada', 300], ['mazorca', 4], ['patata', 600], ['limon', 2], ['ajo', 6], ['mantequilla', 80], ['pimenton', 6], ['pimenton_picante', 2], ['oregano', 1], ['laurel', 3], ['sal', 15]],
    m: {
      fuego: [40, ['Hierve 3 l de agua con sal, laurel, la mitad del pimentón y un limón en mitades.', 'Cuece las patatas pequeñas 15 min; añade la salchicha en trozos y las mazorcas en trozos y cuece 5 min.', 'Añade los langostinos 3 min y escurre.', 'Riega con la mantequilla derretida con ajo, el resto de especias y limón.']],
      horno: [45, ['Cuece las patatas 12 min.', 'Mézclalas en una bandeja con la salchicha, el maíz y los langostinos y la mantequilla especiada con ajo.', 'Hornea 15 min a 210 °C y sirve con limón.']]
    }
  },
  {
    id: 'us-chicken-tenders', n: 'Tiras de pollo crujientes con salsa de miel y mostaza', e: '🍗', tipo: 'cena', tags: ['carne', 'niños', 'rapida'],
    ing: [['pollo_pechuga', 700], ['panko', 120], ['harina', 50], ['huevo', 2], ['pimenton', 3], ['miel', 40], ['mostaza', 40], ['mayonesa', 40], ['patata', 600], ['aceite_girasol', 300], ['sal', 7]],
    m: {
      fuego: [30, ['Corta el pollo en tiras, sálalo y pásalo por harina con pimentón, huevo batido y panko.', 'Fríelas en aceite caliente 4 min, hasta dorarlas.', 'Mezcla la miel, la mostaza y la mayonesa y sirve con patatas fritas.']],
      airfryer: [28, ['Empana las tiras y pulverízalas con aceite.', 'Cocina 12 min a 200 °C, girándolas a mitad (antes, las patatas 15 min).', 'Sirve con la salsa de miel y mostaza.']],
      horno: [30, ['Empana las tiras y colócalas en una bandeja con aceite.', 'Hornea 18 min a 210 °C con las patatas en gajos.', 'Sirve con la salsa.']]
    }
  },
  {
    id: 'us-ensalada-waldorf', n: 'Ensalada Waldorf con pollo', e: '🍏', tipo: 'cena', tags: ['carne', 'ligera', 'rapida'],
    ing: [['pollo_pechuga', 500], ['manzana', 400], ['apio', 200], ['nueces', 80], ['pasas', 40], ['yogur_griego', 2], ['mayonesa', 60], ['limon', 1], ['lechuga', 1], ['sal', 4]],
    m: {
      fuego: [25, ['Cuece o haz a la plancha el pollo y córtalo en dados.', 'Corta la manzana y el apio en dados y riégalos con limón.', 'Mezcla con el pollo, las nueces, las pasas, el yogur, la mayonesa y sal y sirve sobre lechuga.']],
      sin: [15, ['Usa pollo asado ya cocinado desmenuzado.', 'Mezcla con manzana y apio en dados, nueces y pasas.', 'Aliña con yogur, mayonesa, limón y sal.']]
    }
  },
  {
    id: 'us-sopa-tomate-grilled-cheese', n: 'Sopa de tomate con sándwich de queso fundido', e: '🍅', tipo: 'cena', tags: ['vegetariano', 'niños'],
    ing: [['tomate_triturado', 800], ['cebolla', 150], ['ajo', 2], ['caldo_verduras', 400], ['nata', 100], ['albahaca', 1], ['azucar', 5], ['pan_molde', 1], ['queso_cheddar', 200], ['mantequilla', 50], ['aceite', 20], ['sal', 6]],
    m: {
      fuego: [35, ['Sofríe la cebolla y el ajo con aceite 6 min, añade el tomate, el caldo, el azúcar y sal y cuece 15 min.', 'Tritura con la nata y la albahaca.', 'Haz sándwiches de cheddar, úntalos con mantequilla por fuera y dóralos en sartén 3 min por lado. Sírvelos con la sopa.']],
      robot: [30, ['Sofríe cebolla y ajo con aceite 5 min/120 °C/vel. 1.', 'Añade tomate, caldo, azúcar y sal: 15 min/100 °C/vel. 1; añade nata y albahaca y tritura 1 min/vel. 5-10.', 'Dora los sándwiches en sartén.']],
      airfryer: [30, ['Prepara la sopa al fuego.', 'Unta los sándwiches con mantequilla.', 'Cocina 7 min a 180 °C, girándolos a mitad.']]
    }
  },
  {
    id: 'us-brisket', n: 'Brisket de ternera al horno', e: '🥩', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_falda', 1500], ['cebolla', 300], ['ajo', 4], ['pimenton', 8], ['azucar_moreno', 20], ['mostaza', 15], ['salsa_barbacoa', 150], ['caldo_carne', 300], ['repollo', 300], ['zanahoria', 100], ['mayonesa', 60], ['sal', 12], ['pimienta', 4]],
    m: {
      horno: [260, ['Unta la falda con sal, pimienta, pimentón, azúcar moreno y mostaza.', 'Colócala sobre la cebolla en láminas y el ajo, añade el caldo, tapa bien con aluminio y hornea 4 h a 140 °C.', 'Destapa, pinta con la salsa barbacoa y hornea 15 min a 200 °C. Reposa 10 min y córtala en lonchas a contraveta.', 'Sirve con ensalada de col y zanahoria con mayonesa.']]
    }
  },
  {
    id: 'us-fettuccine-alfredo', n: 'Tallarines Alfredo con pollo', e: '🍝', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['tallarines', 400], ['pollo_pechuga', 500], ['nata', 300], ['mantequilla', 40], ['parmesano', 100], ['ajo', 2], ['perejil_fresco', 1], ['aceite', 20], ['sal', 6], ['pimienta', 2]],
    m: {
      fuego: [25, ['Cuece la pasta. Haz el pollo salpimentado a la plancha y córtalo en tiras.', 'Derrite la mantequilla con el ajo, añade la nata y cuece 3 min; incorpora el parmesano.', 'Mezcla con la pasta, el pollo y un poco de agua de cocción y sirve con perejil.']],
      robot: [25, ['Pon mantequilla y ajo 3 min/100 °C/vel. 1; añade nata: 4 min/90 °C/vel. 2.', 'Añade parmesano: 1 min/vel. 3.', 'Mezcla con la pasta y el pollo a la plancha.']]
    }
  },
  {
    id: 'us-tuna-casserole', n: 'Gratinado de pasta con atún (tuna casserole)', e: '🐟', tipo: 'comida', tags: ['pescado', 'niños'],
    ing: [['pasta_corta', 350], ['atun', 4], ['champinon', 200], ['guisantes', 150], ['cebolla', 100], ['leche', 500], ['harina', 40], ['mantequilla', 40], ['queso_cheddar', 120], ['pan_rallado', 30], ['sal', 6]],
    m: {
      horno: [45, ['Cuece la pasta 2 min menos de lo indicado.', 'Rehoga la cebolla y los champiñones con mantequilla, añade la harina y la leche y cuece hasta espesar; agrega guisantes, atún escurrido, la mitad del queso y sal.', 'Mezcla con la pasta, pasa a una fuente y cubre con el resto del queso y pan rallado.', 'Gratina 20 min a 200 °C.']],
      robot: [40, ['Pon leche, harina, mantequilla y sal: 8 min/90 °C/vel. 4.', 'Mezcla con la pasta cocida, los champiñones salteados, guisantes, atún y queso.', 'Gratina 15 min a 200 °C.']]
    }
  },
  {
    id: 'us-chicken-divan', n: 'Gratinado de pollo y brócoli', e: '🥦', tipo: 'comida', tags: ['carne', 'ligera'],
    ing: [['pollo_pechuga', 600], ['brocoli', 600], ['leche', 400], ['harina', 30], ['mantequilla', 30], ['queso_cheddar', 150], ['mostaza', 10], ['limon', 1], ['curry', 2], ['pan_rallado', 30], ['sal', 6]],
    m: {
      horno: [45, ['Cuece el pollo 15 min y córtalo en tiras; escalda el brócoli 4 min.', 'Haz una bechamel con mantequilla, harina y leche, añade la mitad del cheddar, la mostaza, el curry, el zumo de limón y sal.', 'Coloca brócoli y pollo en una fuente, cubre con la salsa, el resto del queso y el pan rallado.', 'Gratina 20 min a 200 °C.']],
      robot: [45, ['Cuece el pollo y el brócoli en el Varoma 20 min/Varoma/vel. 1 con 600 ml de agua.', 'Prepara la salsa: leche, harina, mantequilla y sal 7 min/90 °C/vel. 4; añade queso, mostaza, curry y limón.', 'Monta en una fuente y gratina 12 min a 220 °C.']]
    }
  },
  {
    id: 'us-po-boy-gambas', n: "Po' boy de gambas crujientes", e: '🥖', tipo: 'cena', tags: ['pescado', 'rapida'],
    ing: [['gambas', 500], ['pan_barra', 2], ['harina_maiz', 80], ['harina', 40], ['huevo', 1], ['pimenton', 4], ['lechuga', 1], ['tomate', 200], ['mayonesa', 80], ['salsa_picante', 5], ['pepinillos', 50], ['aceite_girasol', 250], ['sal', 5]],
    m: {
      fuego: [25, ['Pasa las gambas por huevo batido y por la mezcla de harinas con pimentón y sal.', 'Fríelas en aceite caliente 2 min.', 'Mezcla la mayonesa con la salsa picante y el pepinillo picado.', 'Rellena el pan con lechuga, tomate, gambas y salsa.']],
      airfryer: [20, ['Reboza las gambas y pulverízalas con aceite.', 'Cocina 8 min a 200 °C.', 'Monta los bocadillos con la salsa.']]
    }
  },
  {
    id: 'us-hamburguesa-alubias', n: 'Hamburguesas vegetales de alubias negras', e: '🍔', tipo: 'cena', tags: ['legumbres', 'vegetariano', 'niños'],
    ing: [['alubias_negras', 800], ['pan_rallado', 80], ['huevo', 1], ['cebolla', 100], ['ajo', 2], ['maiz', 1], ['comino', 3], ['pimenton', 4], ['pan_hamburguesa', 4], ['queso_cheddar', 80], ['lechuga', 1], ['tomate', 200], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [30, ['Escurre y seca las alubias y aplástalas a medias con un tenedor.', 'Mézclalas con la cebolla y el ajo sofritos, el maíz, el huevo, el pan rallado, las especias y sal; forma 4 hamburguesas.', 'Dóralas con aceite 4 min por lado y pon el queso al final. Monta con pan, lechuga y tomate.']],
      airfryer: [25, ['Prepara las hamburguesas.', 'Pincélalas con aceite y cocina 12 min a 190 °C, girándolas a mitad.', 'Monta con pan, queso y verduras.']],
      horno: [30, ['Prepara las hamburguesas y ponlas en una bandeja con papel.', 'Hornea 20 min a 200 °C, girándolas a mitad.', 'Monta con pan, queso y verduras.']]
    }
  },
  {
    id: 'us-sopa-alubias-jamon', n: 'Sopa de alubias blancas con jamón', e: '🥣', tipo: 'comida', tags: ['legumbres', 'carne'],
    ing: [['alubias', 800], ['jamon_cocido', 200], ['cebolla', 150], ['zanahoria', 150], ['apio', 100], ['ajo', 2], ['caldo_pollo', 1000], ['tomillo', 1], ['laurel', 2], ['aceite', 20], ['sal', 4]],
    m: {
      fuego: [40, ['Sofríe la cebolla, la zanahoria, el apio y el ajo picados con aceite 6 min.', 'Añade el caldo, las alubias, el tomillo y el laurel y cuece 20 min.', 'Tritura un tercio para espesar y añade el jamón en dados 5 min.']],
      robot: [40, ['Sofríe las verduras con aceite 6 min/120 °C/vel. 1.', 'Añade caldo, alubias y especias: 20 min/100 °C/giro inverso/vel. cuchara.', 'Añade el jamón: 5 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'us-salisbury-steak', n: 'Filetes Salisbury con salsa de champiñones', e: '🍄', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['carne_picada_ternera', 700], ['cebolla', 200], ['pan_rallado', 50], ['huevo', 1], ['salsa_worcestershire', 15], ['champinon', 300], ['caldo_carne', 400], ['harina', 20], ['mantequilla', 30], ['patata', 800], ['leche', 150], ['sal', 9]],
    m: {
      fuego: [45, ['Mezcla la carne con 50 g de cebolla rallada, pan rallado, huevo, Worcestershire y sal; forma 4 filetes ovalados y dóralos 3 min por lado.', 'En la misma sartén rehoga el resto de cebolla en juliana y los champiñones con mantequilla, añade la harina y el caldo.', 'Vuelve los filetes a la salsa y cuece 12 min.', 'Sirve con puré de patata hecho con la leche.']],
      horno: [50, ['Forma los filetes y colócalos en una fuente.', 'Prepara la salsa de champiñones al fuego y viértela por encima.', 'Hornea 25 min a 190 °C. Sirve con puré.']]
    }
  },
  {
    id: 'us-pasta-primavera', n: 'Pasta primavera', e: '🥕', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['pasta_corta', 350], ['brocoli', 200], ['calabacin', 200], ['zanahoria', 100], ['pimiento_rojo', 100], ['guisantes', 100], ['tomate_cherry', 200], ['ajo', 2], ['nata', 150], ['parmesano', 60], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [25, ['Cuece la pasta y, los últimos 3 min, el brócoli y los guisantes.', 'Saltea el ajo, la zanahoria, el pimiento y el calabacín en tiras con aceite 6 min; añade los cherry.', 'Agrega la nata y el parmesano, mezcla con la pasta y las verduras y ajusta de sal.']],
      robot: [25, ['Sofríe ajo, zanahoria y pimiento con aceite 5 min/120 °C/vel. 1.', 'Añade calabacín, brócoli, guisantes y cherry: 8 min/100 °C/giro inverso/vel. cuchara.', 'Añade nata y parmesano 2 min/90 °C/giro inverso/vel. cuchara y mezcla con la pasta.']]
    }
  },
  {
    id: 'us-cioppino', n: 'Cioppino (guiso de pescado y marisco)', e: '🦀', tipo: 'comida', tags: ['pescado'],
    ing: [['merluza', 400], ['mejillones', 600], ['almejas', 300], ['gambas', 250], ['tomate_triturado', 600], ['cebolla', 150], ['pimiento_verde', 100], ['ajo', 4], ['vino_blanco', 150], ['caldo_pescado', 500], ['oregano', 1], ['albahaca', 1], ['guindilla', 1], ['pan_barra', 1], ['aceite', 40], ['sal', 5]],
    m: {
      fuego: [45, ['Sofríe cebolla, pimiento, ajo y guindilla con aceite 8 min.', 'Añade el vino 2 min, el tomate, el caldo y el orégano y cuece 15 min.', 'Agrega mejillones y almejas, tapa 4 min; añade la merluza en trozos y las gambas y cuece 4 min.', 'Sirve con albahaca y pan tostado.']],
      robot: [40, ['Sofríe cebolla, pimiento, ajo y guindilla con aceite 6 min/120 °C/vel. 1; añade vino 2 min/120 °C/vel. 1.', 'Añade tomate, caldo y orégano: 12 min/100 °C/vel. 1.', 'Pon el marisco y el pescado en el Varoma: 12 min/Varoma/vel. 1. Júntalo con la salsa.']]
    }
  },
  {
    id: 'us-hamburguesa-pavo', n: 'Hamburguesas de pavo con boniato asado', e: '🍠', tipo: 'cena', tags: ['carne', 'ligera'],
    ing: [['pavo_picado', 600], ['cebolla', 80], ['ajo', 1], ['mostaza', 15], ['boniato', 800], ['pimenton', 4], ['pan_hamburguesa', 4], ['lechuga', 1], ['tomate', 200], ['aceite', 30], ['sal', 7]],
    m: {
      horno: [40, ['Corta el boniato en bastones, alíñalo con aceite, pimentón y sal y ásalo 30 min a 210 °C.', 'Mezcla el pavo con cebolla rallada, ajo, mostaza y sal y forma 4 hamburguesas.', 'Hornéalas los últimos 15 min junto al boniato. Monta con pan, lechuga y tomate.']],
      airfryer: [35, ['Cocina los bastones de boniato 18 min a 200 °C.', 'Cocina las hamburguesas 10 min a 190 °C.', 'Monta con pan y verduras.']],
      fuego: [30, ['Fríe o saltea los bastones de boniato.', 'Haz las hamburguesas a la plancha 4 min por lado.', 'Monta con pan y verduras.']]
    }
  }
]);
