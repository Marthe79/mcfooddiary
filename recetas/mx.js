/* MC Food Diary · cocina de México 🇲🇽. Formato y normas: recetas/GUIA-RECETAS.md */

MC_ADD_ING({
  platano_macho: ['Plátano macho', 'fruteria', 2.5, 'kg'],
  mazorca: ['Mazorca de maíz cocida', 'fruteria', 1, 'ud'],
  maiz_blanco: ['Maíz blanco cocido (pozolero o mote, bote)', 'despensa', 6, 'kg', 0, 'garbanzos cocidos'],
  pepitas: ['Pipas de calabaza peladas', 'despensa', 14, 'kg'],
  achiote: ['Pasta de achiote', 'despensa', 20, 'kg', 0, 'pimentón dulce con zumo de naranja, ajo y una pizca de comino'],
  chiles_secos: ['Chiles secos mexicanos (guajillo o ancho)', 'despensa', 40, 'kg', 0, 'ñoras o pimiento choricero con una guindilla'],
  tomatillo: ['Tomatillo verde (lata)', 'despensa', 8, 'kg', 0, 'tomates verdes o tomate normal con zumo de lima'],
  mole: ['Pasta de mole poblano (bote)', 'despensa', 5, 'ud', 0, '30 g de chocolate negro, un puñado de cacahuetes y pimentón, triturados con caldo'],
  nopales: ['Nopales en conserva', 'despensa', 12, 'kg', 0, 'judías verdes cocidas'],
  harina_maiz_nixtamal: ['Harina de maíz nixtamalizada (masa harina)', 'despensa', 5, 'kg', 0, 'harina de maíz precocida'],
  guindilla_fresca: ['Guindilla fresca', 'fruteria', 10, 'kg'],
  cerdo_picado: ['Carne picada de cerdo', 'carniceria', 6.5, 'kg'],
  ternera_falda: ['Falda de ternera', 'carniceria', 10, 'kg'],
  rabanitos: ['Rabanitos', 'fruteria', 5, 'kg']
});

MC_ADD('mx', [
  {
    id: 'fajitas', n: 'Fajitas de pollo', e: '🌯', tipo: 'cena', tags: ['carne', 'niños', 'rapida'],
    ing: [['pollo_pechuga', 500], ['pimiento_rojo', 150], ['pimiento_verde', 150], ['cebolla', 150], ['tortillas', 8], ['aguacate', 1], ['tomate', 150], ['comino', 2], ['pimenton', 3], ['aceite', 30], ['sal', 4]],
    m: {
      fuego: [25, ['Corta el pollo y las verduras en tiras y adóbalos con comino, pimentón y sal.', 'Saltea las verduras 6 min a fuego fuerte y añade el pollo 6 min más.', 'Calienta las tortillas y rellénalas con el salteado, aguacate y tomate picado.']],
      airfryer: [22, ['Adoba pollo y verduras en tiras con aceite, comino, pimentón y sal.', 'Cocina 14 min a 200 °C, agitando a mitad.', 'Rellena las tortillas calientes con el pollo, aguacate y tomate.']]
    }
  },
  {
    id: 'quesadillas', n: 'Quesadillas de pollo y queso', e: '🫓', tipo: 'cena', tags: ['carne', 'niños', 'rapida'],
    ing: [['tortillas', 8], ['pollo_pechuga', 400], ['mozzarella', 200], ['pimiento_rojo', 100], ['cebolla', 100], ['comino', 1], ['aceite', 15], ['sal', 3]],
    m: {
      fuego: [20, ['Saltea el pollo en tiras con la cebolla y el pimiento, comino y sal.', 'Rellena media tortilla con el pollo y el queso, dóblala.', 'Dórala en sartén 2 min por lado hasta que el queso se funda.']],
      airfryer: [18, ['Saltea el relleno o cocínalo 10 min a 200 °C.', 'Monta las quesadillas y cocínalas 4 min a 190 °C, girándolas a mitad.']]
    }
  },
  {
    id: 'tacos-pastor', n: 'Tacos al pastor fáciles', e: '🌮', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['cerdo_lomo', 600], ['pina', 1], ['tortillas', 12], ['cebolla', 120], ['cilantro', 1], ['lima', 2], ['ajo', 2], ['pimenton', 6], ['comino', 2], ['vinagre', 15], ['aceite', 20], ['sal', 5]],
    m: {
      fuego: [30, ['Corta el lomo en tiras finas y adóbalo con pimentón, comino, ajo picado, vinagre, el jugo de la piña, aceite y sal (10 min mínimo).', 'Dóralo en sartén muy caliente por tandas. Añade la piña en dados los últimos 2 min.', 'Sirve en tortillas calientes con cebolla y cilantro picados y lima.']],
      airfryer: [25, ['Adoba el lomo como en la receta tradicional.', 'Cocina 12 min a 200 °C con la piña en dados, agitando a mitad.', 'Sirve en tortillas con cebolla, cilantro y lima.']],
      horno: [35, ['Adoba el lomo y extiéndelo en una bandeja con la piña.', 'Hornea 20 min a 220 °C, removiendo a mitad.', 'Sirve en tortillas con cebolla, cilantro y lima.']]
    }
  },
  {
    id: 'chili', n: 'Chili con carne', e: '🌶️', tipo: 'comida', tags: ['carne', 'legumbres'],
    ing: [['carne_picada', 500], ['alubias_rojas', 400], ['tomate_triturado', 400], ['cebolla', 150], ['pimiento_rojo', 150], ['ajo', 2], ['comino', 3], ['pimenton', 6], ['arroz', 250], ['aceite', 25], ['sal', 6]],
    m: {
      fuego: [45, ['Sofríe cebolla, pimiento y ajo picados 8 min.', 'Añade la carne y dórala. Agrega comino y pimentón.', 'Incorpora el tomate y las alubias escurridas y cuece 20 min a fuego suave.', 'Sirve con arroz blanco.']],
      robot: [40, ['Pica cebolla, pimiento y ajo 4 seg/vel. 5 y sofríe con aceite 6 min/120 °C/vel. 1.', 'Añade carne y especias: 5 min/120 °C/giro inverso/vel. cuchara.', 'Añade tomate, alubias y sal: 20 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con arroz.']]
    }
  },
  {
    id: 'burritos', n: 'Burritos de pollo', e: '🌯', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['tortillas', 8], ['pollo_pechuga', 450], ['arroz', 150], ['alubias_rojas', 250], ['queso_rallado', 120], ['pimiento_rojo', 120], ['cebolla', 100], ['comino', 2], ['pimenton', 3], ['aceite', 20], ['sal', 4]],
    m: {
      fuego: [30, ['Cuece el arroz.', 'Saltea el pollo en tiras con cebolla, pimiento, comino, pimentón y sal. Añade las alubias 2 min.', 'Rellena las tortillas con arroz, el salteado y queso, ciérralas y dóralas en la sartén.']],
      airfryer: [28, ['Cuece el arroz y cocina el pollo con las verduras y especias 12 min a 200 °C.', 'Mezcla con las alubias, rellena las tortillas con arroz y queso y ciérralas.', 'Dóralas 5 min a 190 °C con la unión hacia abajo.']]
    }
  },
  {
    id: 'enchiladas', n: 'Enchiladas de pollo', e: '🫔', tipo: 'comida', tags: ['carne'],
    ing: [['tortillas', 8], ['pollo_pechuga', 500], ['tomate_triturado', 500], ['cebolla', 150], ['ajo', 2], ['comino', 2], ['pimenton', 4], ['nata', 100], ['queso_rallado', 150], ['aceite', 20], ['sal', 5]],
    m: {
      horno: [45, ['Cuece el pollo 15 min y desmenúzalo.', 'Sofríe cebolla y ajo, añade especias y tomate y cuece 10 min. Mezcla la mitad con el pollo.', 'Rellena y enrolla las tortillas, ponlas en una fuente y cubre con el resto de la salsa, la nata y el queso.', 'Gratina 15 min a 200 °C.']],
      airfryer: [40, ['Prepara el pollo y la salsa como en la receta de horno.', 'Monta las enchiladas en un molde que quepa en la freidora.', 'Cocina 10 min a 180 °C.']]
    }
  },
  {
    id: 'bowl-mexicano', n: 'Bowl mexicano de pollo', e: '🥗', tipo: 'comida', tags: ['carne', 'rapida'],
    ing: [['arroz', 250], ['pollo_pechuga', 450], ['maiz', 1], ['alubias_rojas', 250], ['aguacate', 2], ['tomate', 200], ['cebolla_morada', 60], ['lima', 2], ['comino', 2], ['pimenton', 3], ['aceite', 30], ['sal', 4]],
    m: {
      fuego: [25, ['Cuece el arroz.', 'Haz el pollo a la plancha con comino, pimentón y sal y córtalo en tiras.', 'Monta los cuencos con arroz, pollo, alubias, maíz, aguacate y tomate en dados y cebolla morada. Aliña con lima y aceite.']],
      airfryer: [25, ['Cocina el pollo especiado 12 min a 200 °C.', 'Monta los cuencos con el arroz cocido y el resto de ingredientes.']]
    }
  },
  {
    id: 'sopa-tortilla', n: 'Sopa de tortilla', e: '🍲', tipo: 'cena', tags: ['vegetariano', 'ligera'],
    ing: [['tortillas', 6], ['tomate', 500], ['cebolla', 100], ['ajo', 2], ['caldo_verduras', 1000], ['aguacate', 1], ['queso_fresco', 120], ['comino', 1], ['pimenton', 3], ['aceite', 30], ['sal', 4]],
    m: {
      fuego: [30, ['Tritura el tomate con la cebolla y el ajo y sofríe la mezcla 8 min con un poco de aceite y las especias.', 'Añade el caldo y cuece 10 min.', 'Corta las tortillas en tiras y dóralas en una sartén con aceite.', 'Sirve la sopa con las tiras crujientes, aguacate y queso fresco.']],
      robot: [28, ['Tritura tomate, cebolla y ajo 20 seg/vel. 7. Sofríe con aceite y especias 8 min/120 °C/vel. 1.', 'Añade el caldo: 10 min/100 °C/vel. 1.', 'Dora las tiras de tortilla en sartén y sirve como en la receta tradicional.']]
    }
  },
  {
    id: 'huevos-rancheros', n: 'Huevos rancheros', e: '🍳', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['huevo', 8], ['tortillas', 4], ['tomate_triturado', 400], ['cebolla', 100], ['pimiento_verde', 100], ['alubias_rojas', 250], ['cilantro', 1], ['comino', 1], ['aceite', 30], ['sal', 4]],
    m: {
      fuego: [20, ['Sofríe cebolla y pimiento picados 5 min, añade tomate y comino y cuece 6 min.', 'Calienta las alubias con un poco de la salsa.', 'Fríe los huevos y calienta las tortillas en la sartén.', 'Sirve cada tortilla con alubias, dos huevos, salsa y cilantro.']]
    }
  },
  {
    id: 'tinga', n: 'Tinga de pollo', e: '🌮', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_pechuga', 600], ['tomate_triturado', 400], ['cebolla', 250], ['ajo', 2], ['chipotle', 1], ['tortillas', 8], ['aguacate', 1], ['queso_fresco', 100], ['aceite', 25], ['sal', 5]],
    m: {
      fuego: [40, ['Cuece el pollo 15 min y desmenúzalo.', 'Pocha la cebolla en juliana 10 min.', 'Tritura el tomate con el ajo y el chipotle y añádelo a la cebolla. Cuece 5 min.', 'Mezcla con el pollo y sirve sobre tortillas tostadas con aguacate y queso.']],
      robot: [35, ['Pon el pollo en el Varoma y el tomate, el ajo y el chipotle triturados (20 seg/vel. 7) en el vaso: 20 min/Varoma/vel. 1.', 'Pocha la cebolla en sartén y desmenuza el pollo.', 'Mezcla todo con la salsa y sirve sobre tortillas.']]
    }
  },
  {
    id: 'calabacitas', n: 'Calabacitas a la mexicana', e: '🥒', tipo: 'cena', tags: ['vegetariano', 'ligera', 'rapida'],
    ing: [['calabacin', 700], ['maiz', 1], ['tomate', 250], ['cebolla', 100], ['ajo', 1], ['queso_fresco', 150], ['tortillas', 8], ['aceite', 20], ['sal', 4]],
    m: {
      fuego: [20, ['Sofríe cebolla y ajo picados 4 min.', 'Añade el calabacín en dados y saltea 6 min.', 'Agrega el tomate picado y el maíz y cocina 5 min. Termina con el queso fresco desmenuzado.', 'Sirve con tortillas calientes.']],
      robot: [20, ['Pica cebolla y ajo 3 seg/vel. 5 y sofríe 4 min/120 °C/vel. 1.', 'Añade calabacín, tomate y maíz: 10 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con el queso y tortillas.']]
    }
  },
/* ---- Tanda 1 ---- */
  {
    id: 'mx-cochinita-pibil', n: 'Cochinita pibil', e: '🐖', tipo: 'comida', tags: ['carne'],
    ing: [['cerdo_guisar', 900], ['achiote', 60], ['naranja', 500], ['lima', 2], ['ajo', 3], ['cebolla_morada', 150], ['tortillas_maiz', 16], ['oregano', 2], ['comino', 2], ['vinagre', 30], ['sal', 7]],
    m: {
      fuego: [150, ['Disuelve el achiote en el zumo de las naranjas y una lima con el ajo, el orégano, el comino y la sal. Adoba el cerdo en dados al menos 1 hora.', 'Cuécelo tapado con el adobo y un vaso de agua a fuego muy suave 2 h, hasta que se deshaga.', 'Encurte la cebolla morada en juliana con vinagre, zumo de lima y sal.', 'Desmenuza la carne en su jugo y sírvela en tortillas calientes con la cebolla.']],
      horno: [170, ['Adoba el cerdo como en la receta tradicional.', 'Ponlo en una fuente con el adobo, tápala con papel de aluminio y hornea 2 h 30 min a 160 °C.', 'Encurte la cebolla en vinagre, lima y sal.', 'Desmenuza la carne y sírvela en tortillas con la cebolla.']],
      robot: [100, ['Tritura el adobo (achiote, zumos, ajo, especias y sal) 20 seg/vel. 7.', 'Añade el cerdo en dados y un vaso de agua: 90 min/100 °C/giro inverso/vel. cuchara.', 'Desmenuza la carne y sírvela en tortillas con la cebolla encurtida.']]
    }
  },
  {
    id: 'mx-pozole-rojo', n: 'Pozole rojo', e: '🍲', tipo: 'comida', tags: ['carne'],
    ing: [['cerdo_guisar', 700], ['maiz_blanco', 800], ['chiles_secos', 30], ['cebolla', 150], ['ajo', 3], ['oregano', 3], ['lechuga', 1], ['lima', 2], ['laurel', 2], ['sal', 8]],
    m: {
      fuego: [120, ['Cuece el cerdo en dados con media cebolla, el ajo, el laurel y 2,5 l de agua 1 h 15 min, quitando la espuma.', 'Remoja los chiles sin semillas en agua caliente 15 min y tritúralos con un poco de caldo.', 'Añade la salsa de chile y el maíz escurrido y cuece 25 min más. Sala.', 'Sirve con lechuga picada, cebolla, orégano y lima.']],
      robot: [80, ['Tritura los chiles remojados con el ajo y media cebolla 30 seg/vel. 8.', 'Añade el cerdo, el laurel, 1,5 l de agua y la sal: 60 min/100 °C/giro inverso/vel. cuchara.', 'Agrega el maíz escurrido: 15 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con lechuga, cebolla, orégano y lima.']]
    }
  },
  {
    id: 'mx-chilaquiles-rojos', n: 'Chilaquiles rojos con huevo', e: '🍳', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['nachos', 250], ['tomate', 500], ['chiles_secos', 15], ['cebolla', 100], ['ajo', 2], ['huevo', 4], ['queso_fresco', 100], ['nata', 100], ['caldo_verduras', 250], ['aceite', 20], ['sal', 4]],
    m: {
      fuego: [25, ['Remoja los chiles en agua caliente 10 min y tritúralos con el tomate, la mitad de la cebolla y el ajo.', 'Fríe la salsa con el aceite 5 min, añade el caldo y la sal y cuece 5 min más.', 'Fríe los huevos aparte.', 'Echa los totopos en la salsa, mezcla 1 min y sirve enseguida con el huevo, el queso, la nata y la cebolla en aros.']],
      robot: [25, ['Tritura los chiles remojados, el tomate, media cebolla y el ajo 30 seg/vel. 8.', 'Añade aceite, caldo y sal: 12 min/100 °C/vel. 1.', 'Mezcla la salsa con los totopos en una fuente y sirve con huevo frito, queso, nata y cebolla.']]
    }
  },
  {
    id: 'mx-chilaquiles-verdes', n: 'Chilaquiles verdes con pollo', e: '🥘', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['nachos', 250], ['tomatillo', 500], ['pollo_pechuga', 300], ['cebolla', 100], ['ajo', 2], ['cilantro', 1], ['jalapenos', 30], ['queso_fresco', 100], ['nata', 100], ['caldo_pollo', 200], ['aceite', 20], ['sal', 4]],
    m: {
      fuego: [30, ['Cuece la pechuga en el caldo con un poco de agua 15 min y desmenúzala.', 'Tritura los tomatillos con media cebolla, el ajo, los jalapeños, la mitad del cilantro y 200 ml del caldo.', 'Fríe la salsa con el aceite 6 min y sala.', 'Mezcla los totopos con la salsa y sirve con el pollo, el queso, la nata, cebolla y cilantro.']],
      robot: [30, ['Pon la pechuga en el Varoma y en el vaso el caldo con 300 ml de agua: 18 min/Varoma/vel. 1. Desmenuza el pollo y reserva 200 ml de caldo.', 'Tritura tomatillos, media cebolla, ajo, jalapeños, cilantro y el caldo reservado 20 seg/vel. 8.', 'Añade aceite y sal: 8 min/100 °C/vel. 1.', 'Mezcla con los totopos y sirve con el pollo, el queso y la nata.']]
    }
  },
  {
    id: 'mx-enfrijoladas', n: 'Enfrijoladas', e: '🫘', tipo: 'cena', tags: ['vegetariano', 'legumbres', 'rapida'],
    ing: [['tortillas_maiz', 12], ['alubias_negras', 800], ['cebolla', 100], ['ajo', 2], ['queso_fresco', 150], ['nata', 100], ['aguacate', 1], ['comino', 1], ['aceite', 25], ['sal', 4]],
    m: {
      fuego: [25, ['Sofríe la mitad de la cebolla y el ajo 4 min. Añade las alubias con su líquido, el comino y 200 ml de agua y tritura hasta tener una crema ligera.', 'Calienta las tortillas en la sartén con unas gotas de aceite.', 'Pasa cada tortilla por la crema de alubias, dóblala en cuatro y colócala en el plato.', 'Cubre con más crema, queso desmenuzado, nata, cebolla en aros y aguacate.']],
      robot: [22, ['Pica media cebolla y el ajo 3 seg/vel. 5 y sofríe con aceite 4 min/120 °C/vel. 1.', 'Añade las alubias con su líquido, el comino, 200 ml de agua y sal: 6 min/100 °C/vel. 1. Tritura 30 seg/vel. 8.', 'Pasa las tortillas calientes por la crema, dóblalas y sirve con queso, nata y aguacate.']]
    }
  },
  {
    id: 'mx-entomatadas', n: 'Entomatadas de queso', e: '🍅', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['tortillas_maiz', 12], ['tomate', 700], ['cebolla', 120], ['ajo', 2], ['queso_fresco', 250], ['nata', 100], ['oregano', 1], ['aceite', 25], ['sal', 4]],
    m: {
      fuego: [25, ['Cuece los tomates con media cebolla y el ajo en agua 8 min y tritúralos.', 'Fríe la salsa con el aceite, el orégano y la sal 6 min.', 'Calienta las tortillas, pásalas por la salsa, rellénalas de queso y dóblalas.', 'Cubre con el resto de la salsa, nata y cebolla en aros.']],
      horno: [30, ['Prepara la salsa como en la receta tradicional.', 'Rellena las tortillas con queso, enróllalas y colócalas en una fuente.', 'Cubre con la salsa y la nata y hornea 10 min a 200 °C.']],
      robot: [25, ['Tritura tomate, media cebolla y ajo 20 seg/vel. 7.', 'Añade aceite, orégano y sal: 12 min/100 °C/vel. 1.', 'Pasa las tortillas por la salsa, rellénalas de queso y sirve con nata y cebolla.']]
    }
  },
  {
    id: 'mx-pollo-mole', n: 'Pollo en mole', e: '🍗', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_muslos', 1000], ['mole', 1], ['caldo_pollo', 600], ['cebolla', 100], ['ajo', 2], ['sesamo', 10], ['arroz_largo', 300], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [55, ['Dora los contramuslos salados en una cazuela con aceite 8 min y resérvalos.', 'Sofríe la cebolla y el ajo picados 5 min, añade la pasta de mole y deshazla poco a poco con el caldo caliente.', 'Devuelve el pollo y cuece tapado 30 min a fuego suave, hasta que la salsa espese.', 'Sirve con arroz blanco y sésamo por encima.']],
      horno: [60, ['Dora el pollo en sartén y colócalo en una fuente.', 'Deshaz el mole con el caldo caliente y el sofrito de cebolla y ajo y viértelo sobre el pollo.', 'Hornea tapado 40 min a 180 °C. Sirve con arroz y sésamo.']],
      robot: [50, ['Pica cebolla y ajo 3 seg/vel. 5 y sofríe con aceite 5 min/120 °C/vel. 1.', 'Añade el mole y el caldo y mezcla 20 seg/vel. 4.', 'Agrega el pollo y la sal: 35 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con arroz y sésamo.']]
    }
  },
  {
    id: 'mx-enmoladas', n: 'Enmoladas de pollo', e: '🫔', tipo: 'cena', tags: ['carne'],
    ing: [['tortillas_maiz', 12], ['pollo_pechuga', 450], ['mole', 1], ['caldo_pollo', 500], ['cebolla_morada', 80], ['queso_fresco', 100], ['sesamo', 10], ['aceite', 15], ['sal', 4]],
    m: {
      fuego: [35, ['Cuece la pechuga en el caldo con agua 15 min y desmenúzala. Reserva 500 ml de caldo.', 'Deshaz el mole en el caldo caliente y cuece 5 min hasta que napee.', 'Calienta las tortillas, pásalas por el mole, rellénalas de pollo y dóblalas.', 'Cubre con más mole, queso, cebolla morada y sésamo.']],
      horno: [40, ['Prepara el pollo y el mole como en la receta tradicional.', 'Rellena las tortillas, enróllalas y colócalas en una fuente cubiertas de mole.', 'Hornea 10 min a 190 °C y sirve con queso, cebolla y sésamo.']]
    }
  },
  {
    id: 'mx-tacos-pescado', n: 'Tacos de pescado rebozado', e: '🐟', tipo: 'cena', tags: ['pescado', 'niños', 'rapida'],
    ing: [['pescado_blanco', 600], ['harina', 120], ['cerveza', 150], ['tortillas_maiz', 12], ['repollo', 200], ['mayonesa', 80], ['yogur', 1], ['lima', 2], ['cilantro', 1], ['pimenton', 3], ['aceite_girasol', 300], ['sal', 5]],
    m: {
      fuego: [30, ['Mezcla la harina con la cerveza fría, el pimentón y la sal hasta tener una masa espesa.', 'Corta el pescado en tiras, pásalo por la masa y fríelo en aceite caliente 3-4 min.', 'Mezcla la mayonesa con el yogur y el zumo de una lima.', 'Sirve en tortillas calientes con repollo fino, la salsa, cilantro y lima.']],
      airfryer: [25, ['Corta el pescado en tiras, sálalo y pásalo por la masa de harina y cerveza, bien espesa.', 'Pulveriza con aceite y cocina 10 min a 200 °C sobre papel perforado, girando a mitad.', 'Sirve en tortillas con repollo, la salsa de yogur y lima.']]
    }
  },
  {
    id: 'mx-carnitas', n: 'Tacos de carnitas', e: '🌮', tipo: 'comida', tags: ['carne'],
    ing: [['cerdo_guisar', 1000], ['naranja', 300], ['ajo', 4], ['laurel', 2], ['oregano', 2], ['tortillas_maiz', 16], ['cebolla', 120], ['cilantro', 1], ['lima', 2], ['aceite', 30], ['sal', 8]],
    m: {
      fuego: [120, ['Pon el cerdo en trozos grandes con el aceite, el zumo de naranja, el ajo, el laurel, el orégano, la sal y agua justa para cubrir.', 'Cuece a fuego suave 1 h 30 min sin tapar, hasta que se evapore el líquido.', 'Deja que la carne se dore en su propia grasa 10 min, removiendo, y desmenúzala.', 'Sirve en tortillas con cebolla, cilantro y lima.']],
      horno: [150, ['Coloca el cerdo con el zumo, el ajo, las especias, la sal y 200 ml de agua en una fuente tapada.', 'Hornea 2 h a 160 °C.', 'Destapa, desmenuza y gratina 15 min a 220 °C hasta que se dore.', 'Sirve en tortillas con cebolla, cilantro y lima.']],
      airfryer: [100, ['Cuece el cerdo como en la receta tradicional 1 h 15 min y desmenúzalo.', 'Dóralo en la freidora 10 min a 200 °C, removiendo a mitad.', 'Sirve en tortillas con cebolla, cilantro y lima.']]
    }
  },
  {
    id: 'mx-flautas-pollo', n: 'Flautas de pollo', e: '🌯', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['tortillas_maiz', 16], ['pollo_pechuga', 500], ['cebolla', 100], ['lechuga', 1], ['tomate', 200], ['nata', 100], ['queso_fresco', 100], ['aguacate', 1], ['aceite_girasol', 200], ['sal', 4]],
    m: {
      fuego: [40, ['Cuece el pollo con media cebolla y sal 15 min y desmenúzalo.', 'Calienta las tortillas para que no se rompan, rellénalas de pollo y enróllalas apretadas. Sujétalas con un palillo.', 'Fríelas en aceite caliente 2-3 min hasta que estén doradas y escúrrelas.', 'Sirve con lechuga, tomate, nata, queso y aguacate.']],
      airfryer: [35, ['Cuece y desmenuza el pollo.', 'Rellena y enrolla las tortillas, píntalas con aceite.', 'Cocina 10 min a 200 °C, girándolas a mitad. Sirve con lechuga, tomate, nata, queso y aguacate.']],
      horno: [40, ['Cuece y desmenuza el pollo.', 'Rellena y enrolla las tortillas, colócalas en una bandeja y píntalas con aceite.', 'Hornea 15 min a 220 °C y sirve con la guarnición.']]
    }
  },
  {
    id: 'mx-pescado-veracruzana', n: 'Pescado a la veracruzana', e: '🐟', tipo: 'ambos', tags: ['pescado', 'ligera'],
    ing: [['merluza', 700], ['tomate', 600], ['cebolla', 150], ['ajo', 3], ['aceitunas', 60], ['alcaparras', 20], ['jalapenos', 30], ['laurel', 2], ['oregano', 1], ['arroz_largo', 250], ['aceite', 40], ['sal', 6]],
    m: {
      fuego: [35, ['Sofríe la cebolla y el ajo picados 6 min.', 'Añade el tomate pelado y picado, el laurel y el orégano y cuece 10 min.', 'Agrega aceitunas, alcaparras y jalapeños, coloca el pescado salado encima y cuece tapado 8 min.', 'Sirve con arroz blanco.']],
      horno: [40, ['Prepara la salsa como en la receta tradicional.', 'Pon el pescado en una fuente, cúbrelo con la salsa y hornea 15 min a 190 °C.', 'Sirve con arroz blanco.']],
      robot: [35, ['Pica cebolla y ajo 3 seg/vel. 5 y sofríe 5 min/120 °C/vel. 1.', 'Añade tomate troceado, laurel y orégano: 10 min/100 °C/vel. 1.', 'Pon el pescado en el Varoma y añade aceitunas, alcaparras y jalapeños al vaso: 12 min/Varoma/giro inverso/vel. cuchara.', 'Sirve el pescado con la salsa y arroz.']]
    }
  },
  {
    id: 'mx-camarones-diabla', n: 'Gambas a la diabla', e: '🦐', tipo: 'cena', tags: ['pescado', 'rapida'],
    ing: [['gambas', 600], ['tomate_triturado', 300], ['chiles_secos', 15], ['chipotle', 1], ['cebolla', 100], ['ajo', 3], ['mantequilla', 30], ['arroz_largo', 250], ['aceite', 20], ['sal', 4]],
    m: {
      fuego: [25, ['Remoja los chiles en agua caliente 10 min y tritúralos con el tomate, el chipotle, el ajo y media cebolla.', 'Sofríe la otra media cebolla picada en la mantequilla y el aceite 3 min, añade la salsa y cuece 8 min.', 'Incorpora las gambas y cocina 3-4 min, hasta que cambien de color.', 'Sirve con arroz blanco.']],
      robot: [25, ['Tritura chiles remojados, tomate, chipotle, ajo y cebolla 30 seg/vel. 8.', 'Añade mantequilla, aceite y sal: 10 min/100 °C/vel. 1.', 'Incorpora las gambas: 5 min/100 °C/giro inverso/vel. cuchara. Sirve con arroz.']]
    }
  },
  {
    id: 'mx-aguachile', n: 'Aguachile de langostinos', e: '🦐', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['langostinos', 500], ['lima', 6], ['pepino', 250], ['cebolla_morada', 80], ['guindilla_fresca', 15], ['cilantro', 1], ['aguacate', 2], ['nachos', 120], ['sal', 4]],
    m: {
      sin: [20, ['Pela los langostinos y ábrelos en mariposa.', 'Tritura el zumo de las limas con la guindilla, la mitad del cilantro, un trozo de pepino y la sal.', 'Vierte la salsa sobre los langostinos y deja reposar 10 min en la nevera.', 'Añade pepino en medias lunas, cebolla morada en aros y aguacate, y sirve con totopos.']]
    }
  },
  {
    id: 'mx-sopa-lima', n: 'Sopa de lima', e: '🍋', tipo: 'cena', tags: ['carne', 'ligera'],
    ing: [['pollo_pechuga', 400], ['caldo_pollo', 1500], ['lima', 4], ['tomate', 200], ['cebolla', 100], ['pimiento_verde', 100], ['ajo', 2], ['tortillas_maiz', 6], ['cilantro', 1], ['oregano', 1], ['aceite', 30], ['sal', 4]],
    m: {
      fuego: [40, ['Cuece la pechuga en el caldo 15 min, sácala y desmenúzala.', 'Sofríe cebolla, pimiento, ajo y tomate picados 8 min y añádelos al caldo con el orégano y la piel de una lima. Cuece 10 min.', 'Corta las tortillas en tiras y dóralas en sartén con aceite.', 'Añade el pollo y el zumo de 2 limas y sirve con las tiras crujientes, cilantro y rodajas de lima.']],
      robot: [40, ['Pica cebolla, pimiento y ajo 3 seg/vel. 5 y sofríe con el tomate 6 min/120 °C/vel. 1.', 'Añade caldo, orégano y la pechuga entera: 20 min/100 °C/giro inverso/vel. cuchara.', 'Desmenuza el pollo, añade el zumo de lima y sirve con tiras de tortilla doradas en sartén.']]
    }
  },
  {
    id: 'mx-caldo-tlalpeno', n: 'Caldo tlalpeño', e: '🥣', tipo: 'comida', tags: ['carne', 'legumbres'],
    ing: [['pollo_muslos', 500], ['garbanzos', 400], ['zanahoria', 200], ['judias_verdes', 150], ['tomate', 300], ['cebolla', 100], ['ajo', 2], ['chipotle', 1], ['caldo_pollo', 1500], ['aguacate', 1], ['queso_fresco', 100], ['aceite', 20], ['sal', 5]],
    m: {
      fuego: [50, ['Cuece los contramuslos en el caldo 20 min, sácalos y desmenúzalos.', 'Tritura el tomate con la cebolla, el ajo y el chipotle y fríe la salsa 6 min.', 'Añade la salsa al caldo con la zanahoria en rodajas y las judías troceadas y cuece 15 min.', 'Incorpora los garbanzos y el pollo 3 min y sirve con aguacate y queso.']],
      robot: [45, ['Tritura tomate, cebolla, ajo y chipotle 20 seg/vel. 7 y sofríe con aceite 6 min/120 °C/vel. 1.', 'Añade el caldo, el pollo, la zanahoria y las judías: 25 min/100 °C/giro inverso/vel. cuchara.', 'Desmenuza el pollo, añade los garbanzos: 3 min/100 °C/giro inverso/vel. cuchara. Sirve con aguacate y queso.']]
    }
  },
  {
    id: 'mx-frijoles-charros', n: 'Frijoles charros', e: '🫘', tipo: 'comida', tags: ['legumbres', 'carne'],
    ing: [['alubias_rojas', 800], ['bacon', 120], ['chorizo', 100], ['salchichas_frankfurt', 150], ['tomate', 300], ['cebolla', 120], ['ajo', 2], ['jalapenos', 30], ['cilantro', 1], ['tortillas_maiz', 12], ['sal', 4]],
    m: {
      fuego: [40, ['Dora el bacon, el chorizo y las salchichas en rodajas en una olla 6 min.', 'Añade cebolla, ajo y tomate picados y cocina 8 min.', 'Agrega las alubias con su líquido, los jalapeños y 300 ml de agua y cuece 20 min a fuego suave.', 'Sirve con cilantro picado y tortillas calientes.']],
      robot: [35, ['Pica cebolla y ajo 3 seg/vel. 5. Añade bacon, chorizo y salchichas: 6 min/120 °C/giro inverso/vel. cuchara.', 'Agrega el tomate troceado: 5 min/120 °C/giro inverso/vel. cuchara.', 'Añade alubias, jalapeños y 300 ml de agua: 20 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con cilantro y tortillas.']]
    }
  },
  {
    id: 'mx-chiles-rellenos', n: 'Chiles rellenos de queso', e: '🫑', tipo: 'cena', tags: ['vegetariano'],
    ing: [['pimiento_verde', 800], ['queso_fresco', 250], ['mozzarella', 150], ['huevo', 4], ['harina', 60], ['tomate', 500], ['cebolla', 80], ['ajo', 2], ['aceite_girasol', 250], ['sal', 5]],
    m: {
      fuego: [50, ['Asa los pimientos verdes grandes (o poblanos) al fuego o en la plancha hasta que la piel se ennegrezca; tápalos 10 min y pélalos.', 'Ábrelos por un lado, quita las semillas y rellénalos de queso.', 'Monta las claras a punto de nieve, añade las yemas, enharina los pimientos, pásalos por el huevo y fríelos 2 min por lado.', 'Tritura el tomate con cebolla y ajo, cuece la salsa 10 min y sirve los chiles sobre ella.']],
      horno: [45, ['Asa los pimientos 20 min a 220 °C, tápalos y pélalos.', 'Rellénalos de queso y colócalos sobre la salsa de tomate (tomate, cebolla y ajo triturados y cocidos 10 min).', 'Gratina 10 min a 200 °C, sin rebozar.']],
      airfryer: [40, ['Asa los pimientos 12 min a 200 °C, tápalos y pélalos.', 'Rellénalos de queso y cocínalos 6 min a 180 °C.', 'Sírvelos sobre la salsa de tomate caliente.']]
    }
  },
  {
    id: 'mx-rajas-con-crema', n: 'Rajas con crema y maíz', e: '🌽', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['pimiento_verde', 600], ['cebolla', 200], ['maiz', 2], ['nata', 250], ['queso_fresco', 120], ['ajo', 1], ['tortillas_maiz', 12], ['aceite', 20], ['sal', 4]],
    m: {
      fuego: [30, ['Asa los pimientos en la plancha o al fuego, pélalos y córtalos en tiras (rajas).', 'Pocha la cebolla en juliana y el ajo 6 min.', 'Añade las rajas, el maíz escurrido y la nata y cuece 5 min. Sala.', 'Termina con el queso desmenuzado y sirve con tortillas calientes.']],
      airfryer: [30, ['Asa los pimientos 12 min a 200 °C, pélalos y córtalos en tiras.', 'Pocha la cebolla en sartén, añade las rajas, el maíz y la nata y cuece 5 min.', 'Sirve con queso y tortillas.']]
    }
  },
  {
    id: 'mx-picadillo', n: 'Picadillo mexicano', e: '🥔', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['carne_picada', 500], ['patata', 300], ['zanahoria', 150], ['guisantes', 100], ['tomate_triturado', 300], ['cebolla', 100], ['ajo', 2], ['comino', 1], ['arroz_largo', 250], ['aceite', 25], ['sal', 6]],
    m: {
      fuego: [40, ['Sofríe la cebolla y el ajo picados 4 min y dora la carne 5 min.', 'Añade la patata y la zanahoria en dados pequeños, el tomate, el comino, la sal y 200 ml de agua.', 'Cuece tapado 20 min, añade los guisantes y cocina 5 min más.', 'Sirve con arroz o en tortillas.']],
      robot: [35, ['Pica cebolla y ajo 3 seg/vel. 5 y sofríe 4 min/120 °C/vel. 1.', 'Añade la carne: 5 min/120 °C/giro inverso/vel. cuchara.', 'Agrega patata, zanahoria, tomate, comino, sal y 150 ml de agua: 20 min/100 °C/giro inverso/vel. cuchara. Añade los guisantes los últimos 5 min.', 'Sirve con arroz.']]
    }
  },
  {
    id: 'mx-albondigas-chipotle', n: 'Albóndigas en salsa de chipotle', e: '🧆', tipo: 'comida', tags: ['carne'],
    ing: [['carne_picada', 600], ['arroz', 50], ['huevo', 1], ['tomate_triturado', 500], ['chipotle', 1], ['cebolla', 100], ['ajo', 2], ['caldo_pollo', 300], ['hierbabuena', 1], ['arroz_largo', 250], ['aceite', 20], ['sal', 7]],
    m: {
      fuego: [50, ['Mezcla la carne con el huevo, el arroz crudo, hierbabuena picada y sal. Forma albóndigas medianas.', 'Tritura el tomate con el chipotle, la cebolla y el ajo y fríe la salsa 5 min.', 'Añade el caldo, lleva a ebullición e incorpora las albóndigas. Cuece tapado 30 min a fuego suave.', 'Sirve con arroz blanco.']],
      robot: [45, ['Tritura tomate, chipotle, cebolla y ajo 20 seg/vel. 7 y sofríe con aceite 6 min/120 °C/vel. 1.', 'Añade el caldo y las albóndigas formadas: 30 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con arroz blanco.']],
      horno: [50, ['Forma las albóndigas y dóralas 12 min a 200 °C.', 'Cúbrelas con la salsa de tomate, chipotle y caldo y hornea 25 min a 180 °C.', 'Sirve con arroz.']]
    }
  },
/* ---- Tanda 2 ---- */
  {
    id: 'mx-bistec-mexicana', n: 'Bistec a la mexicana', e: '🥩', tipo: 'comida', tags: ['carne', 'rapida'],
    ing: [['ternera_filetes', 600], ['tomate', 400], ['cebolla', 150], ['jalapenos', 40], ['ajo', 2], ['alubias_negras', 400], ['tortillas_maiz', 12], ['aceite', 25], ['sal', 5]],
    m: {
      fuego: [30, ['Corta los filetes en tiras, sálalos y dóralos en sartén muy caliente 3 min. Reserva.', 'En la misma sartén sofríe la cebolla en pluma y el ajo 4 min.', 'Añade el tomate en dados y los jalapeños en rodajas y cocina 6 min. Devuelve la carne 2 min.', 'Sirve con las alubias calientes y tortillas.']],
      robot: [30, ['Dora la carne en sartén y resérvala.', 'Pica cebolla y ajo 3 seg/vel. 5 y sofríe con aceite 4 min/120 °C/vel. 1.', 'Añade tomate troceado, jalapeños y la carne: 6 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con alubias y tortillas.']]
    }
  },
  {
    id: 'mx-carne-en-su-jugo', n: 'Carne en su jugo', e: '🍲', tipo: 'comida', tags: ['carne', 'legumbres'],
    ing: [['ternera_filetes', 600], ['bacon', 120], ['alubias_rojas', 400], ['tomatillo', 300], ['cebolla', 150], ['ajo', 2], ['caldo_carne', 800], ['cilantro', 1], ['lima', 2], ['sal', 5]],
    m: {
      fuego: [40, ['Tritura los tomatillos con media cebolla, el ajo y medio manojo de cilantro.', 'Dora el bacon en una olla y retíralo. En su grasa sella la ternera cortada muy fina.', 'Añade la salsa verde y el caldo y cuece 15 min. Incorpora las alubias 5 min.', 'Sirve en cuencos con el bacon, cebolla y cilantro picados y lima.']],
      robot: [35, ['Tritura tomatillos, media cebolla, ajo y cilantro 20 seg/vel. 7.', 'Añade el caldo y la carne en tiras finas: 15 min/100 °C/giro inverso/vel. cuchara.', 'Agrega las alubias: 5 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con bacon dorado en sartén, cebolla, cilantro y lima.']]
    }
  },
  {
    id: 'mx-birria', n: 'Birria de ternera', e: '🌶️', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_guisar', 1000], ['chiles_secos', 40], ['tomate', 300], ['cebolla', 200], ['ajo', 4], ['vinagre', 30], ['comino', 2], ['oregano', 2], ['canela', 1], ['clavo', 3], ['laurel', 2], ['tortillas_maiz', 16], ['cilantro', 1], ['lima', 2], ['sal', 8]],
    m: {
      fuego: [180, ['Remoja los chiles en agua caliente 15 min y tritúralos con el tomate, media cebolla, el ajo, el vinagre y las especias.', 'Unta la carne en trozos con la salsa y sal y déjala reposar 30 min.', 'Cuécela tapada con 1 l de agua y el laurel a fuego suave 2 h 30 min, hasta que se deshaga.', 'Desmenuza la carne y sírvela en tortillas con su caldo aparte, cebolla, cilantro y lima.']],
      horno: [210, ['Prepara la salsa y adoba la carne como en la receta tradicional.', 'Ponla en una cazuela con 700 ml de agua y el laurel, tapada.', 'Hornea 3 h a 160 °C.', 'Desmenuza y sirve en tortillas con el caldo, cebolla, cilantro y lima.']],
      robot: [130, ['Tritura chiles remojados, tomate, media cebolla, ajo, vinagre y especias 30 seg/vel. 8.', 'Añade la carne, el laurel, 600 ml de agua y la sal: 120 min/100 °C/giro inverso/vel. cuchara.', 'Desmenuza y sirve en tortillas con su caldo, cebolla, cilantro y lima.']]
    }
  },
  {
    id: 'mx-puerco-salsa-verde', n: 'Cerdo en salsa verde', e: '🥘', tipo: 'comida', tags: ['carne'],
    ing: [['cerdo_guisar', 800], ['tomatillo', 500], ['patata', 400], ['cebolla', 120], ['ajo', 3], ['jalapenos', 30], ['cilantro', 1], ['comino', 1], ['arroz_largo', 250], ['aceite', 25], ['sal', 7]],
    m: {
      fuego: [70, ['Dora el cerdo en dados con aceite y sal 8 min.', 'Tritura los tomatillos con cebolla, ajo, jalapeños, cilantro y comino.', 'Vierte la salsa sobre la carne con 200 ml de agua y cuece tapado 40 min.', 'Añade la patata en dados 15 min antes del final. Sirve con arroz.']],
      robot: [60, ['Tritura tomatillos, cebolla, ajo, jalapeños, cilantro y comino 20 seg/vel. 7.', 'Añade aceite, el cerdo, 150 ml de agua y sal: 35 min/100 °C/giro inverso/vel. cuchara.', 'Agrega la patata en dados: 15 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con arroz.']]
    }
  },
  {
    id: 'mx-pollo-pipian', n: 'Pollo en pipián verde', e: '🍗', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_muslos', 900], ['pepitas', 120], ['tomatillo', 300], ['lechuga', 1], ['cebolla', 100], ['ajo', 2], ['jalapenos', 20], ['cilantro', 1], ['caldo_pollo', 500], ['arroz_largo', 250], ['aceite', 20], ['sal', 6]],
    m: {
      fuego: [55, ['Cuece los contramuslos en el caldo con media cebolla 25 min. Reserva el caldo.', 'Tuesta las pipas en una sartén seca 3 min, sin que se quemen.', 'Tritúralas con los tomatillos, unas hojas de lechuga, el ajo, los jalapeños, el cilantro y 400 ml del caldo.', 'Cocina la salsa con el aceite 10 min a fuego suave, añade el pollo y sirve con arroz.']],
      robot: [50, ['Tuesta las pipas 4 min/120 °C/vel. 1 y tritúralas con tomatillos, lechuga, ajo, jalapeños y cilantro 30 seg/vel. 8.', 'Añade el caldo, el aceite y la sal: 5 min/100 °C/vel. 2.', 'Incorpora el pollo: 30 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con arroz.']]
    }
  },
  {
    id: 'mx-alambre', n: 'Alambre de ternera', e: '🌮', tipo: 'cena', tags: ['carne', 'rapida', 'niños'],
    ing: [['ternera_filetes', 500], ['bacon', 120], ['pimiento_rojo', 150], ['pimiento_verde', 150], ['cebolla', 150], ['mozzarella', 200], ['tortillas_maiz', 12], ['lima', 2], ['aceite', 15], ['sal', 4]],
    m: {
      fuego: [25, ['Dora el bacon troceado en una sartén grande 3 min.', 'Añade la cebolla y los pimientos en tiras y saltea 6 min.', 'Incorpora la ternera en tiras finas y saltea 4 min a fuego fuerte. Sala.', 'Cubre con el queso, tapa 2 min hasta que se funda y sirve en tortillas con lima.']],
      airfryer: [22, ['Mezcla bacon, ternera y verduras en tiras con aceite y sal.', 'Cocina 12 min a 200 °C, removiendo a mitad.', 'Cubre con el queso y cocina 2 min más. Sirve en tortillas con lima.']]
    }
  },
  {
    id: 'mx-molletes', n: 'Molletes', e: '🥖', tipo: 'cena', tags: ['vegetariano', 'legumbres', 'rapida', 'niños'],
    ing: [['pan_barra', 2], ['alubias_negras', 400], ['mozzarella', 200], ['tomate', 300], ['cebolla', 60], ['cilantro', 1], ['jalapenos', 20], ['mantequilla', 30], ['lima', 1], ['sal', 3]],
    m: {
      horno: [20, ['Tritura las alubias con un poco de su líquido y sal hasta tener un puré espeso.', 'Abre las barras por la mitad, úntalas con mantequilla y luego con el puré. Cubre con el queso.', 'Hornea 10 min a 200 °C, hasta que el queso se funda.', 'Sirve con pico de gallo: tomate, cebolla, cilantro y jalapeño picados con lima y sal.']],
      airfryer: [15, ['Prepara el puré de alubias y monta los molletes con el pan en trozos que quepan en la cesta.', 'Cocina 6 min a 190 °C.', 'Sirve con el pico de gallo.']]
    }
  },
  {
    id: 'mx-huevos-mexicana', n: 'Huevos a la mexicana', e: '🍳', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['huevo', 8], ['tomate', 300], ['cebolla', 100], ['jalapenos', 30], ['alubias_negras', 400], ['tortillas_maiz', 12], ['aguacate', 1], ['aceite', 25], ['sal', 4]],
    m: {
      fuego: [15, ['Sofríe la cebolla picada y los jalapeños 3 min.', 'Añade el tomate en dados y cocina 3 min.', 'Echa los huevos batidos con sal y remueve a fuego suave hasta que cuajen jugosos.', 'Sirve con las alubias calientes, aguacate y tortillas.']]
    }
  },
  {
    id: 'mx-huevos-divorciados', n: 'Huevos divorciados', e: '🍳', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['huevo', 8], ['tortillas_maiz', 8], ['tomate', 300], ['tomatillo', 300], ['cebolla', 100], ['ajo', 2], ['jalapenos', 30], ['cilantro', 1], ['alubias_negras', 400], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [25, ['Salsa roja: tritura el tomate con media cebolla, un ajo y sal y cuécela 6 min.', 'Salsa verde: tritura los tomatillos con la otra media cebolla, el ajo, los jalapeños y el cilantro y cuécela 6 min.', 'Fríe los huevos y calienta las tortillas y las alubias.', 'Pon dos huevos sobre dos tortillas por plato, uno con salsa roja y otro con verde, y alubias en medio.']],
      robot: [25, ['Tritura la salsa roja 20 seg/vel. 7 y cuécela 8 min/100 °C/vel. 1. Pásala a un cuenco.', 'Haz igual con la salsa verde.', 'Fríe los huevos y monta los platos con una salsa a cada lado y alubias en medio.']]
    }
  },
  {
    id: 'mx-huevos-motulenos', n: 'Huevos motuleños', e: '🍳', tipo: 'cena', tags: ['legumbres', 'carne'],
    ing: [['huevo', 8], ['tortillas_maiz', 8], ['alubias_negras', 400], ['jamon_cocido', 120], ['guisantes', 120], ['tomate_triturado', 400], ['cebolla', 80], ['platano_macho', 400], ['queso_fresco', 80], ['aceite', 40], ['sal', 4]],
    m: {
      fuego: [30, ['Cuece el tomate con la cebolla picada y sal 10 min; añade los guisantes los últimos 4 min.', 'Fríe el plátano macho en rodajas hasta que se dore.', 'Calienta las tortillas, úntalas con las alubias machacadas y pon encima un huevo frito.', 'Cubre con la salsa, jamón en dados, queso y acompaña con el plátano.']],
      airfryer: [30, ['Cocina el plátano en rodajas con un poco de aceite 12 min a 200 °C.', 'Prepara la salsa y fríe los huevos.', 'Monta como en la receta tradicional.']]
    }
  },
  {
    id: 'mx-tostadas-ceviche', n: 'Tostadas de ceviche de pescado', e: '🐟', tipo: 'cena', tags: ['pescado', 'ligera'],
    ing: [['pescado_blanco', 500], ['lima', 8], ['tomate', 300], ['pepino', 200], ['cebolla_morada', 80], ['cilantro', 1], ['jalapenos', 30], ['aguacate', 2], ['tortillas_maiz', 12], ['mayonesa', 40], ['sal', 5]],
    m: {
      sin: [40, ['Corta el pescado (descongelado) en dados pequeños y cúbrelo con el zumo de lima y sal. Deja en la nevera 30 min, hasta que se vuelva blanco.', 'Escúrrelo y mézclalo con tomate, pepino, cebolla, jalapeños y cilantro picados.', 'Tuesta las tortillas en el horno o sartén hasta que estén crujientes.', 'Úntalas con un poco de mayonesa, pon el ceviche encima y termina con aguacate.']]
    }
  },
  {
    id: 'mx-sopa-fideo', n: 'Sopa de fideo', e: '🍜', tipo: 'cena', tags: ['vegetariano', 'rapida', 'ligera', 'niños'],
    ing: [['fideos', 200], ['tomate', 400], ['cebolla', 80], ['ajo', 2], ['caldo_verduras', 1500], ['cilantro', 1], ['queso_fresco', 80], ['lima', 1], ['aceite', 30], ['sal', 4]],
    m: {
      fuego: [25, ['Dora los fideos en el aceite 3 min, removiendo sin parar.', 'Tritura el tomate con la cebolla y el ajo y añádelo; cocina 4 min.', 'Agrega el caldo y unas ramas de cilantro y cuece 8 min.', 'Sirve con queso fresco desmenuzado y unas gotas de lima.']],
      robot: [25, ['Tritura tomate, cebolla y ajo 15 seg/vel. 7. Sofríe con aceite 5 min/120 °C/vel. 1.', 'Añade el caldo: 8 min/100 °C/vel. 1.', 'Dora los fideos en sartén, añádelos y cocina 6 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con queso y lima.']]
    }
  },
  {
    id: 'mx-crema-elote', n: 'Crema de elote', e: '🌽', tipo: 'cena', tags: ['vegetariano', 'ligera', 'rapida', 'niños'],
    ing: [['maiz', 3], ['cebolla', 100], ['ajo', 1], ['leche', 400], ['caldo_verduras', 500], ['mantequilla', 30], ['pimiento_verde', 120], ['queso_fresco', 80], ['sal', 4]],
    m: {
      fuego: [25, ['Pocha la cebolla y el ajo en la mantequilla 5 min.', 'Añade el maíz escurrido (reserva 3 cucharadas), el caldo y la leche y cuece 10 min.', 'Tritura fino y sala. Saltea el pimiento en tiras con el maíz reservado.', 'Sirve la crema con el salteado y el queso por encima.']],
      robot: [25, ['Pica cebolla y ajo 3 seg/vel. 5 y sofríe con mantequilla 4 min/120 °C/vel. 1.', 'Añade maíz, caldo, leche y sal: 12 min/100 °C/vel. 1.', 'Tritura 1 min/vel. 5-10 progresivo y sirve con pimiento salteado y queso.']]
    }
  },
  {
    id: 'mx-sopa-tarasca', n: 'Sopa tarasca de frijol', e: '🥣', tipo: 'cena', tags: ['vegetariano', 'legumbres', 'rapida'],
    ing: [['alubias_rojas', 800], ['tomate', 300], ['cebolla', 100], ['ajo', 2], ['chiles_secos', 10], ['caldo_verduras', 700], ['tortillas_maiz', 6], ['nata', 80], ['queso_fresco', 80], ['oregano', 1], ['aceite', 30], ['sal', 4]],
    m: {
      fuego: [30, ['Tritura las alubias con el tomate, la cebolla, el ajo, el orégano y el caldo.', 'Cuece la crema 12 min a fuego suave, removiendo. Sala.', 'Fríe las tiras de tortilla y los chiles en aros brevemente en aceite.', 'Sirve con las tiras, el chile, nata y queso.']],
      robot: [25, ['Pon alubias, tomate, cebolla, ajo, orégano y caldo en el vaso y tritura 1 min/vel. 8.', 'Cuece 12 min/100 °C/vel. 2.', 'Sirve con tiras de tortilla y chile fritos en sartén, nata y queso.']]
    }
  },
  {
    id: 'mx-arroz-rojo-pollo', n: 'Arroz rojo con pollo', e: '🍚', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['arroz_largo', 300], ['pollo_muslos', 600], ['tomate', 300], ['cebolla', 100], ['ajo', 2], ['zanahoria', 120], ['guisantes', 100], ['caldo_pollo', 750], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [45, ['Dora los contramuslos en trozos con sal y resérvalos.', 'Sofríe el arroz en el mismo aceite 3 min hasta que esté nacarado.', 'Tritura el tomate con la cebolla y el ajo, añádelo y cocina 3 min. Agrega caldo caliente, zanahoria en dados, guisantes y pollo.', 'Cuece tapado a fuego bajo 18 min y deja reposar 5 min.']],
      robot: [40, ['Tritura tomate, cebolla y ajo 15 seg/vel. 7 y sofríe con aceite 6 min/120 °C/vel. 1.', 'Añade el pollo en trozos: 5 min/120 °C/giro inverso/vel. cuchara.', 'Agrega caldo, zanahoria, guisantes y sal; pon el arroz en el cestillo: 18 min/100 °C/vel. 4. Mezcla todo y reposa 5 min.']]
    }
  },
  {
    id: 'mx-pescado-mojo-ajo', n: 'Pescado al mojo de ajo', e: '🧄', tipo: 'cena', tags: ['pescado', 'rapida', 'ligera'],
    ing: [['merluza', 700], ['ajo', 8], ['mantequilla', 40], ['lima', 2], ['perejil_fresco', 1], ['arroz_largo', 200], ['lechuga', 1], ['aceite', 40], ['sal', 5]],
    m: {
      fuego: [25, ['Dora el ajo laminado en el aceite y la mantequilla a fuego suave 4 min, sin que se queme.', 'Sala el pescado y cocínalo en la misma sartén 3 min por lado.', 'Añade el zumo de lima y el perejil picado y baña el pescado con el mojo.', 'Sirve con arroz blanco y ensalada.']],
      horno: [25, ['Pon el pescado salado en una fuente.', 'Cúbrelo con el ajo laminado, la mantequilla, el aceite y el zumo de lima.', 'Hornea 15 min a 200 °C y termina con perejil. Sirve con arroz y ensalada.']],
      airfryer: [20, ['Coloca el pescado en un molde con el ajo, la mantequilla, el aceite y la lima.', 'Cocina 10 min a 190 °C.', 'Añade perejil y sirve con arroz y ensalada.']]
    }
  },
  {
    id: 'mx-caldo-res', n: 'Caldo de res', e: '🍲', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_guisar', 700], ['mazorca', 2], ['patata', 300], ['zanahoria', 200], ['calabacin', 250], ['repollo', 250], ['cebolla', 100], ['ajo', 2], ['tomate', 200], ['cilantro', 1], ['lima', 2], ['sal', 8]],
    m: {
      fuego: [120, ['Cuece la ternera en trozos con cebolla, ajo, tomate y 2,5 l de agua 1 h 30 min, quitando la espuma.', 'Añade la mazorca en trozos, la patata y la zanahoria y cuece 15 min.', 'Incorpora el calabacín y el repollo y cocina 10 min más. Sala.', 'Sirve con cilantro, cebolla picada y lima.']],
      robot: [90, ['Pon la ternera, la cebolla, el ajo, el tomate, 1,5 l de agua y la sal: 60 min/100 °C/giro inverso/vel. cuchara.', 'Añade mazorca, patata y zanahoria: 15 min/100 °C/giro inverso/vel. cuchara.', 'Agrega calabacín y repollo: 10 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con cilantro y lima.']]
    }
  },
  {
    id: 'mx-mole-olla', n: 'Mole de olla', e: '🥘', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_guisar', 700], ['chiles_secos', 30], ['tomate', 300], ['mazorca', 2], ['calabacin', 250], ['judias_verdes', 150], ['patata', 300], ['cebolla', 100], ['ajo', 3], ['hierbabuena', 1], ['lima', 2], ['sal', 8]],
    m: {
      fuego: [120, ['Cuece la ternera en trozos con media cebolla, un ajo y 2,5 l de agua 1 h 15 min.', 'Remoja los chiles en agua caliente y tritúralos con el tomate, el resto de cebolla y ajo. Cuela y añade al caldo.', 'Agrega la mazorca en trozos, la patata y las judías y cuece 15 min. Añade el calabacín y la hierbabuena 10 min.', 'Sala y sirve con lima.']],
      robot: [90, ['Tritura chiles remojados, tomate, cebolla y ajo 30 seg/vel. 8.', 'Añade la ternera, 1,3 l de agua y la sal: 60 min/100 °C/giro inverso/vel. cuchara.', 'Agrega mazorca, patata, judías, calabacín y hierbabuena: 20 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con lima.']]
    }
  },
  {
    id: 'mx-tacos-dorados-papa', n: 'Tacos dorados de patata', e: '🥔', tipo: 'cena', tags: ['vegetariano', 'niños'],
    ing: [['patata', 700], ['tortillas_maiz', 16], ['queso_fresco', 100], ['lechuga', 1], ['tomate', 300], ['cebolla', 80], ['nata', 100], ['comino', 1], ['aceite_girasol', 200], ['sal', 5]],
    m: {
      fuego: [40, ['Cuece las patatas peladas 20 min y cháfalas con sal, comino y el queso.', 'Calienta las tortillas, rellénalas de puré, dóblalas por la mitad y sujétalas con un palillo.', 'Fríelas en aceite caliente hasta que estén crujientes y escúrrelas.', 'Sirve con lechuga, salsa de tomate y cebolla triturados y nata.']],
      airfryer: [35, ['Cuece y chafa las patatas con sal, comino y queso.', 'Rellena y dobla las tortillas, píntalas con aceite.', 'Cocina 10 min a 200 °C, girando a mitad. Sirve con lechuga, salsa y nata.']],
      horno: [40, ['Prepara el puré y rellena las tortillas.', 'Píntalas con aceite y hornea 15 min a 220 °C.', 'Sirve con lechuga, salsa y nata.']]
    }
  },
  {
    id: 'mx-sopes', n: 'Sopes de frijol y pollo', e: '🫓', tipo: 'cena', tags: ['carne', 'legumbres'],
    ing: [['harina_maiz_nixtamal', 400], ['alubias_negras', 400], ['pollo_pechuga', 350], ['lechuga', 1], ['tomate', 200], ['queso_fresco', 120], ['nata', 100], ['cebolla', 60], ['aceite', 40], ['sal', 6]],
    m: {
      fuego: [45, ['Amasa la harina con 500 ml de agua templada y sal. Forma 12 discos gruesos de 8 cm.', 'Cuécelos en la sartén seca 2 min por lado y pellizca el borde para formar un reborde.', 'Cuece la pechuga 15 min y desmenúzala. Chafa las alubias con sal.', 'Dora los sopes con un poco de aceite y cúbrelos con alubias, pollo, lechuga, tomate, queso y nata.']],
      airfryer: [40, ['Prepara la masa y forma los sopes como en la receta tradicional.', 'Píntalos con aceite y cocínalos 10 min a 200 °C, girándolos a mitad.', 'Cubre con alubias, pollo, lechuga, tomate, queso y nata.']]
    }
  },
/* ---- Tanda 3 ---- */
  {
    id: 'mx-pozole-verde', n: 'Pozole verde de pollo', e: '🍲', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_muslos', 800], ['maiz_blanco', 800], ['tomatillo', 400], ['pepitas', 60], ['lechuga', 1], ['jalapenos', 30], ['cilantro', 1], ['cebolla', 150], ['ajo', 3], ['oregano', 2], ['lima', 2], ['sal', 7]],
    m: {
      fuego: [70, ['Cuece el pollo con media cebolla, un ajo y 2 l de agua 30 min. Sácalo y desmenúzalo.', 'Tuesta las pipas y tritúralas con los tomatillos, unas hojas de lechuga, jalapeños, cilantro, ajo y un poco de caldo.', 'Añade la salsa verde y el maíz escurrido al caldo y cuece 20 min. Sala.', 'Incorpora el pollo y sirve con lechuga picada, cebolla, orégano y lima.']],
      robot: [60, ['Tuesta las pipas 4 min/120 °C/vel. 1. Tritúralas con tomatillos, lechuga, jalapeños, cilantro, ajo y media cebolla 30 seg/vel. 8.', 'Añade el pollo, 1,3 l de agua y la sal: 30 min/100 °C/giro inverso/vel. cuchara.', 'Saca y desmenuza el pollo, añade el maíz: 15 min/100 °C/giro inverso/vel. cuchara.', 'Devuelve el pollo y sirve con lechuga, cebolla, orégano y lima.']]
    }
  },
  {
    id: 'mx-pollo-adobo', n: 'Pollo en adobo', e: '🍗', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_muslos', 1000], ['chiles_secos', 30], ['naranja', 300], ['ajo', 4], ['vinagre', 30], ['comino', 1], ['oregano', 2], ['canela', 1], ['patata', 600], ['aceite', 30], ['sal', 7]],
    m: {
      horno: [70, ['Remoja los chiles en agua caliente 15 min y tritúralos con el zumo de naranja, el ajo, el vinagre, las especias y la sal.', 'Unta los contramuslos con el adobo y deja reposar 30 min.', 'Colócalos en una fuente sobre la patata en gajos, riega con aceite y hornea 45 min a 200 °C.', 'Sirve con la salsa del fondo.']],
      fuego: [60, ['Prepara el adobo y unta el pollo como en la receta de horno.', 'Dora el pollo en una cazuela 8 min, añade el resto del adobo y 200 ml de agua.', 'Cuece tapado 30 min. Fríe o cuece aparte la patata y sírvela con el pollo.']],
      airfryer: [50, ['Adoba el pollo como en la receta de horno.', 'Cocina 25 min a 190 °C, girándolo a mitad; luego cocina la patata en gajos 20 min a 200 °C.', 'Sirve juntos.']]
    }
  },
  {
    id: 'mx-tortitas-papa', n: 'Tortitas de patata con queso', e: '🥔', tipo: 'cena', tags: ['vegetariano', 'niños'],
    ing: [['patata', 800], ['queso_fresco', 150], ['huevo', 2], ['harina', 40], ['tomate', 400], ['cebolla', 80], ['ajo', 1], ['lechuga', 1], ['aceite', 60], ['sal', 5]],
    m: {
      fuego: [40, ['Cuece las patatas 20 min, cháfalas y mézclalas con el queso desmenuzado, el huevo, la harina y la sal.', 'Forma tortitas y dóralas en sartén con aceite 3 min por lado.', 'Tritura el tomate con la cebolla y el ajo y cuece la salsa 8 min.', 'Sirve las tortitas con la salsa caliente y ensalada.']],
      airfryer: [35, ['Prepara la masa como en la receta tradicional y forma las tortitas.', 'Píntalas con aceite y cocínalas 12 min a 200 °C, girándolas a mitad.', 'Sirve con la salsa de tomate y ensalada.']],
      horno: [40, ['Prepara la masa y forma las tortitas sobre papel de horno.', 'Píntalas con aceite y hornea 20 min a 210 °C.', 'Sirve con la salsa y ensalada.']]
    }
  },
  {
    id: 'mx-tortitas-coliflor', n: 'Tortitas de coliflor en salsa', e: '🥦', tipo: 'cena', tags: ['vegetariano', 'ligera'],
    ing: [['coliflor', 800], ['queso_fresco', 120], ['huevo', 3], ['harina', 50], ['tomate', 500], ['cebolla', 80], ['ajo', 2], ['caldo_verduras', 200], ['aceite', 50], ['sal', 5]],
    m: {
      fuego: [40, ['Cuece los ramilletes de coliflor 8 min y escúrrelos bien.', 'Haz bocadillos de dos ramilletes con un trozo de queso, enharínalos, pásalos por huevo batido y fríelos hasta dorar.', 'Tritura el tomate con cebolla y ajo, añade el caldo y cuece 10 min.', 'Mete las tortitas en la salsa 3 min y sirve.']],
      airfryer: [35, ['Cuece la coliflor y mézclala chafada con queso, huevo, harina y sal. Forma tortitas.', 'Píntalas con aceite y cocínalas 12 min a 200 °C.', 'Sírvelas con la salsa de tomate caliente.']]
    }
  },
  {
    id: 'mx-ensalada-nopales', n: 'Ensalada de nopales con queso', e: '🌵', tipo: 'cena', tags: ['vegetariano', 'ligera', 'rapida'],
    ing: [['nopales', 500], ['tomate', 400], ['cebolla_morada', 80], ['cilantro', 1], ['queso_fresco', 200], ['aguacate', 2], ['jalapenos', 20], ['lima', 2], ['oregano', 1], ['tortillas_maiz', 8], ['aceite', 30], ['sal', 4]],
    m: {
      sin: [15, ['Enjuaga bien los nopales y escúrrelos.', 'Mézclalos con el tomate en dados, la cebolla, el cilantro y los jalapeños picados.', 'Aliña con lima, aceite, orégano y sal.', 'Sirve con queso fresco en dados, aguacate y tortillas calientes.']]
    }
  },
  {
    id: 'mx-pambazos', n: 'Pambazos de patata y chorizo', e: '🥪', tipo: 'cena', tags: ['carne'],
    ing: [['pan_hamburguesa', 4], ['chiles_secos', 20], ['patata', 500], ['chorizo', 150], ['lechuga', 1], ['nata', 100], ['queso_fresco', 80], ['ajo', 1], ['aceite', 40], ['sal', 4]],
    m: {
      fuego: [40, ['Cuece la patata en dados 12 min. Dora el chorizo desmenuzado y mézclalo con la patata.', 'Remoja los chiles en agua caliente y tritúralos con el ajo, sal y un poco de agua.', 'Pasa los panes abiertos por la salsa de chile y dóralos en la sartén con aceite.', 'Rellénalos con la patata con chorizo, lechuga, nata y queso.']],
      airfryer: [35, ['Prepara el relleno y la salsa como en la receta tradicional.', 'Pinta los panes con la salsa y cocínalos 4 min a 190 °C.', 'Rellénalos con patata, chorizo, lechuga, nata y queso.']]
    }
  },
  {
    id: 'mx-tortas-milanesa', n: 'Tortas de milanesa', e: '🥪', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['pan_barra', 2], ['ternera_filetes', 500], ['huevo', 2], ['pan_rallado', 120], ['alubias_negras', 300], ['aguacate', 2], ['tomate', 200], ['lechuga', 1], ['jalapenos', 30], ['mozzarella', 120], ['aceite_girasol', 200], ['sal', 5]],
    m: {
      fuego: [35, ['Aplana los filetes, sálalos, pásalos por huevo y pan rallado y fríelos 2 min por lado.', 'Chafa las alubias con sal y caliéntalas.', 'Abre el pan en trozos, tuéstalo y úntalo con alubias y aguacate.', 'Rellena con la milanesa, queso, tomate, lechuga y jalapeños.']],
      airfryer: [30, ['Empana los filetes, pulverízalos con aceite y cocínalos 10 min a 200 °C, girando a mitad.', 'Unta el pan tostado con alubias y aguacate.', 'Monta las tortas con la milanesa, queso, tomate, lechuga y jalapeños.']]
    }
  },
  {
    id: 'mx-gringas', n: 'Gringas de cerdo adobado', e: '🫓', tipo: 'cena', tags: ['carne', 'rapida', 'niños'],
    ing: [['cerdo_lomo', 500], ['tortillas', 8], ['mozzarella', 250], ['pina', 1], ['achiote', 30], ['ajo', 2], ['vinagre', 15], ['cebolla', 80], ['cilantro', 1], ['aceite', 20], ['sal', 4]],
    m: {
      fuego: [30, ['Mezcla el achiote con el ajo machacado, el vinagre, un poco de jugo de piña y sal. Adoba el lomo en tiras finas 10 min.', 'Saltéalo en sartén muy caliente 5 min con la piña en dados.', 'Cubre media tortilla con queso, la carne y otra tortilla encima.', 'Dórala 2 min por lado y sirve con cebolla y cilantro picados.']],
      airfryer: [25, ['Adoba el lomo y cocínalo con la piña 10 min a 200 °C.', 'Monta las gringas con queso y carne entre dos tortillas.', 'Cocínalas 4 min a 190 °C y sirve con cebolla y cilantro.']]
    }
  },
  {
    id: 'mx-quesadillas-champinones', n: 'Quesadillas de champiñones', e: '🍄', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['tortillas_maiz', 12], ['champinon', 500], ['mozzarella', 250], ['cebolla', 100], ['ajo', 2], ['jalapenos', 20], ['oregano', 1], ['tomate', 300], ['cilantro', 1], ['aceite', 20], ['sal', 4]],
    m: {
      fuego: [25, ['Saltea la cebolla, el ajo y los jalapeños picados 3 min y añade los champiñones con orégano y sal. Cocina 7 min hasta que se evapore el agua.', 'Rellena las tortillas con queso y champiñones y dóblalas.', 'Dóralas en sartén 2 min por lado.', 'Sirve con salsa de tomate y cilantro picados.']],
      airfryer: [25, ['Cocina los champiñones con cebolla, ajo y aceite 10 min a 200 °C.', 'Monta las quesadillas con el queso.', 'Cocínalas 4 min a 190 °C y sirve con la salsa.']]
    }
  },
  {
    id: 'mx-pescado-empapelado', n: 'Pescado empapelado con verduras', e: '🐟', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['merluza', 700], ['tomate', 300], ['cebolla', 100], ['pimiento_verde', 120], ['calabacin', 200], ['jalapenos', 20], ['ajo', 2], ['lima', 2], ['oregano', 1], ['mantequilla', 30], ['sal', 5]],
    m: {
      horno: [30, ['Corta las verduras en juliana fina y repártelas sobre 4 hojas de papel de horno.', 'Coloca encima el pescado salado, ajo laminado, jalapeños, orégano, un trozo de mantequilla y zumo de lima.', 'Cierra los paquetes y hornea 18 min a 200 °C.', 'Sirve abriendo el papel en la mesa.']],
      airfryer: [25, ['Prepara los paquetes como en la receta de horno, en un tamaño que quepa en la cesta.', 'Cocina 14 min a 190 °C.', 'Sirve en el propio papel.']],
      robot: [30, ['Prepara los paquetes de papel y colócalos en el Varoma.', 'Pon 1 l de agua en el vaso y cocina 20 min/Varoma/vel. 1.', 'Sirve en el propio papel.']]
    }
  },
  {
    id: 'mx-salpicon-res', n: 'Salpicón de ternera', e: '🥗', tipo: 'cena', tags: ['carne', 'ligera'],
    ing: [['ternera_falda', 600], ['tomate', 300], ['cebolla_morada', 100], ['lechuga', 1], ['aguacate', 2], ['rabanitos', 100], ['jalapenos', 30], ['cilantro', 1], ['lima', 3], ['vinagre', 20], ['aceite', 50], ['laurel', 2], ['sal', 6]],
    m: {
      fuego: [110, ['Cuece la falda con laurel, media cebolla y sal en agua 1 h 30 min. Déjala templar y desmenúzala.', 'Mezcla la carne con tomate, cebolla morada, rabanitos y jalapeños picados.', 'Aliña con lima, vinagre, aceite y sal y deja reposar en la nevera.', 'Sirve frío sobre lechuga con aguacate y cilantro, o en tostadas.']],
      robot: [80, ['Pon la falda con laurel, cebolla, sal y 1,2 l de agua: 70 min/100 °C/giro inverso/vel. cuchara.', 'Desmenuza la carne y mézclala con las verduras picadas y el aliño.', 'Sirve frío con lechuga, aguacate y cilantro.']]
    }
  },
  {
    id: 'mx-fideo-seco', n: 'Fideo seco', e: '🍝', tipo: 'comida', tags: ['vegetariano', 'rapida'],
    ing: [['fideos', 300], ['tomate', 400], ['chipotle', 1], ['cebolla', 80], ['ajo', 2], ['caldo_verduras', 500], ['nata', 100], ['queso_fresco', 120], ['aguacate', 1], ['aceite', 30], ['sal', 4]],
    m: {
      fuego: [25, ['Dora los fideos en el aceite 3 min, removiendo.', 'Tritura el tomate con el chipotle, la cebolla y el ajo y añádelo; cocina 3 min.', 'Agrega el caldo y cuece tapado a fuego suave 8 min, hasta que los fideos absorban el líquido.', 'Sirve con nata, queso desmenuzado y aguacate.']],
      horno: [30, ['Dora los fideos en una cazuela apta para horno y añade la salsa y el caldo.', 'Hornea 12 min a 200 °C, hasta que se absorba el líquido.', 'Sirve con nata, queso y aguacate.']]
    }
  },
  {
    id: 'mx-tacos-gobernador', n: 'Tacos gobernador de gambas', e: '🦐', tipo: 'cena', tags: ['pescado', 'rapida'],
    ing: [['gambas', 500], ['tortillas_maiz', 12], ['mozzarella', 200], ['tomate', 200], ['cebolla', 100], ['pimiento_verde', 100], ['ajo', 2], ['chipotle', 1], ['lima', 2], ['aceite', 20], ['sal', 4]],
    m: {
      fuego: [25, ['Sofríe la cebolla, el pimiento y el ajo picados 4 min.', 'Añade el tomate en dados, el chipotle picado y las gambas troceadas y saltea 4 min. Sala.', 'Pon queso sobre cada tortilla en la sartén, añade el relleno y dobla cuando se funda.', 'Dóralos 1 min por lado y sirve con lima.']],
      airfryer: [22, ['Saltea el relleno en sartén como en la receta tradicional.', 'Monta los tacos con queso y relleno y dóblalos.', 'Cocínalos 5 min a 190 °C y sirve con lima.']]
    }
  },
  {
    id: 'mx-costillas-chile-colorado', n: 'Costillas en chile colorado', e: '🍖', tipo: 'comida', tags: ['carne'],
    ing: [['cerdo_costillas', 1200], ['chiles_secos', 40], ['tomate', 300], ['cebolla', 100], ['ajo', 3], ['comino', 1], ['oregano', 1], ['patata', 500], ['aceite', 20], ['sal', 8]],
    m: {
      fuego: [90, ['Cuece las costillas troceadas con sal y agua 40 min. Reserva 500 ml del caldo.', 'Remoja los chiles y tritúralos con el tomate, la cebolla, el ajo, las especias y el caldo.', 'Dora las costillas en una cazuela con aceite, añade la salsa y la patata en dados.', 'Cuece 25 min a fuego suave hasta que la salsa espese.']],
      horno: [100, ['Prepara la salsa de chile como en la receta tradicional con 400 ml de agua.', 'Pon las costillas y la patata en una fuente, cubre con la salsa y tapa con aluminio.', 'Hornea 1 h 15 min a 180 °C, destapa y hornea 15 min más.']],
      robot: [70, ['Tritura chiles remojados, tomate, cebolla, ajo y especias 30 seg/vel. 8.', 'Añade las costillas, 400 ml de agua y la sal: 45 min/100 °C/giro inverso/vel. cuchara.', 'Agrega la patata en dados: 20 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'mx-machaca-huevo', n: 'Machaca con huevo', e: '🍳', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['ternera_filetes', 300], ['huevo', 8], ['tomate', 250], ['cebolla', 100], ['pimiento_verde', 100], ['jalapenos', 20], ['tortillas', 8], ['aceite', 25], ['sal', 4]],
    m: {
      fuego: [25, ['Corta la ternera en tiras muy finas, sálala y saltéala a fuego fuerte 4 min hasta que quede seca y dorada.', 'Añade cebolla, pimiento, tomate y jalapeños picados y cocina 5 min.', 'Agrega los huevos batidos y remueve hasta que cuajen.', 'Sirve con tortillas de trigo calientes.']]
    }
  },
  {
    id: 'mx-pescado-zarandeado', n: 'Pescado zarandeado', e: '🐠', tipo: 'comida', tags: ['pescado'],
    ing: [['dorada', 1200], ['chiles_secos', 20], ['mayonesa', 40], ['salsa_soja', 30], ['ajo', 3], ['lima', 3], ['cebolla_morada', 80], ['pepino', 200], ['tortillas_maiz', 12], ['sal', 4]],
    m: {
      horno: [40, ['Pide que te abran las doradas en libro. Remoja los chiles y tritúralos con el ajo, la soja, la mayonesa y el zumo de una lima.', 'Unta el pescado por el lado de la carne con la salsa.', 'Hornea 20 min a 220 °C, con la piel hacia abajo, y gratina 3 min.', 'Sirve con tortillas, pepino y cebolla morada en rodajas con lima.']],
      fuego: [35, ['Prepara la salsa y unta las doradas abiertas.', 'Cocínalas en la plancha bien caliente 6 min por el lado de la piel, tapadas, y 3 min por el otro.', 'Sirve con tortillas, pepino, cebolla y lima.']],
      airfryer: [30, ['Unta el pescado abierto con la salsa (en trozos si no cabe).', 'Cocina 14 min a 200 °C.', 'Sirve con tortillas, pepino, cebolla y lima.']]
    }
  },
  {
    id: 'mx-sopa-lentejas', n: 'Sopa de lentejas con plátano macho', e: '🍲', tipo: 'comida', tags: ['legumbres', 'carne'],
    ing: [['lentejas', 300], ['bacon', 100], ['platano_macho', 300], ['tomate', 300], ['cebolla', 100], ['ajo', 2], ['zanahoria', 120], ['comino', 1], ['oregano', 1], ['aceite', 20], ['sal', 6]],
    m: {
      fuego: [60, ['Cuece las lentejas en 1,5 l de agua con la zanahoria en dados 30 min.', 'Dora el bacon y sofríe la cebolla, el ajo y el tomate picados 8 min.', 'Añade el sofrito, el comino, el orégano y el plátano en rodajas a las lentejas y cuece 15 min más.', 'Sala y sirve.']],
      robot: [50, ['Pica cebolla y ajo 3 seg/vel. 5. Añade el bacon y sofríe 5 min/120 °C/vel. 1.', 'Agrega el tomate troceado: 4 min/120 °C/vel. 1.', 'Añade lentejas, zanahoria, especias, 1,2 l de agua y sal: 35 min/100 °C/giro inverso/vel. cuchara.', 'Incorpora el plátano en rodajas: 10 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'mx-enchiladas-verdes', n: 'Enchiladas verdes de queso', e: '🫔', tipo: 'cena', tags: ['vegetariano'],
    ing: [['tortillas_maiz', 12], ['tomatillo', 500], ['queso_fresco', 300], ['nata', 150], ['cebolla', 120], ['ajo', 2], ['jalapenos', 30], ['cilantro', 1], ['caldo_verduras', 200], ['aceite', 20], ['sal', 4]],
    m: {
      horno: [35, ['Tritura los tomatillos con media cebolla, el ajo, los jalapeños, el cilantro y el caldo. Fríe la salsa 8 min.', 'Rellena las tortillas calientes con queso desmenuzado y la otra media cebolla picada, y enróllalas.', 'Colócalas en una fuente, cúbrelas con la salsa y la nata.', 'Hornea 12 min a 200 °C.']],
      fuego: [30, ['Prepara la salsa verde como en la receta de horno.', 'Pasa cada tortilla por la salsa caliente, rellénala de queso y dóblala.', 'Sirve cubiertas de salsa, nata y cebolla.']]
    }
  },
  {
    id: 'mx-arroz-verde-huevo', n: 'Arroz verde con huevo y aguacate', e: '🍚', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['arroz_largo', 300], ['cilantro', 2], ['pimiento_verde', 150], ['espinacas', 100], ['cebolla', 80], ['ajo', 2], ['caldo_verduras', 650], ['huevo', 4], ['aguacate', 2], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [30, ['Tritura el cilantro, las espinacas, el pimiento, la cebolla y el ajo con el caldo.', 'Sofríe el arroz en el aceite 3 min, añade el líquido verde y la sal.', 'Cuece tapado a fuego bajo 18 min y reposa 5 min.', 'Sirve con un huevo frito y aguacate en láminas.']],
      robot: [30, ['Tritura cilantro, espinacas, pimiento, cebolla y ajo con el caldo 30 seg/vel. 8. Pasa a una jarra.', 'Sofríe el arroz con aceite 3 min/120 °C/giro inverso/vel. cuchara.', 'Añade el líquido verde y la sal: 17 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con huevo frito y aguacate.']]
    }
  },
  {
    id: 'mx-coctel-gambas', n: 'Cóctel de gambas a la mexicana', e: '🍤', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['langostinos', 500], ['tomate', 300], ['ketchup', 120], ['lima', 3], ['cebolla_morada', 80], ['pepino', 150], ['aguacate', 2], ['cilantro', 1], ['jalapenos', 20], ['nachos', 120], ['sal', 3]],
    m: {
      sin: [15, ['Pela los langostinos.', 'Tritura la mitad del tomate con el kétchup, el zumo de lima, 100 ml de agua fría y sal.', 'Mezcla con los langostinos, el resto del tomate, la cebolla, el pepino, los jalapeños y el cilantro picados.', 'Sirve en vasos o cuencos con aguacate y totopos.']]
    }
  }
]);
