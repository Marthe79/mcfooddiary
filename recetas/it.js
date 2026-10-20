/* MC Food Diary · cocina de Italia 🇮🇹. Formato y normas: recetas/GUIA-RECETAS.md */

MC_ADD_ING({
  queso_azul: ['Queso azul (gorgonzola, roquefort)', 'lacteos', 14, 'kg'],
  tomate_seco: ['Tomates secos en aceite', 'despensa', 18, 'kg'],
  pez_espada: ['Pez espada (emperador) en rodajas', 'pescaderia', 15, 'kg'],
  ossobuco: ['Jarrete de ternera en rodajas (ossobuco)', 'carniceria', 11, 'kg'],
  jamon_lonchas: ['Jamón serrano en lonchas', 'charcuteria', 16, 'kg'],
  salvia: ['Salvia seca', 'basicos', 0, 'kg', 1],
  col_rizada: ['Col rizada o kale', 'fruteria', 6, 'kg']
});

MC_ADD('it', [
  {
    id: 'bolonesa', n: 'Espaguetis a la boloñesa', e: '🍝', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['espagueti', 400], ['carne_picada', 400], ['tomate_triturado', 400], ['cebolla', 150], ['zanahoria', 100], ['ajo', 2], ['oregano', 2], ['queso_rallado', 60], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [35, ['Sofríe cebolla, zanahoria y ajo picados en aceite 8 min.', 'Añade la carne, sube el fuego y dórala 5 min.', 'Agrega el tomate, el orégano y la sal y cocina 15 min a fuego suave.', 'Cuece la pasta según el paquete, escúrrela y mézclala con la salsa. Sirve con queso.']],
      robot: [35, ['Pica cebolla, zanahoria y ajo 5 seg/vel. 5 y sofríe con aceite 6 min/120 °C/vel. 1.', 'Añade la carne: 5 min/120 °C/giro inverso/vel. cuchara.', 'Añade tomate, orégano y sal: 15 min/100 °C/giro inverso/vel. cuchara.', 'Cuece la pasta aparte y mézclala con la salsa.']]
    }
  },
  {
    id: 'pizza-verduras', n: 'Pizza casera de verduras', e: '🍕', tipo: 'cena', tags: ['vegetariano', 'niños'],
    ing: [['masa_pizza', 1], ['tomate_frito', 150], ['mozzarella', 200], ['champinon', 120], ['pimiento_rojo', 100], ['cebolla_morada', 60], ['aceitunas', 40], ['oregano', 2]],
    m: {
      horno: [25, ['Precalienta el horno a 230 °C.', 'Extiende la masa, cubre con tomate, mozzarella y las verduras en láminas finas.', 'Hornea 12–14 min y termina con orégano.']],
      airfryer: [20, ['Corta la masa en 2–3 piezas que quepan en el cesto.', 'Cocina la base sola 3 min a 190 °C.', 'Añade tomate, queso y verduras y cocina 6 min más por pieza.']]
    }
  },
  {
    id: 'carbonara', n: 'Espaguetis a la carbonara', e: '🍝', tipo: 'comida', tags: ['carne', 'rapida'],
    ing: [['espagueti', 400], ['panceta', 180], ['huevo', 4], ['parmesano', 80], ['pimienta', 2], ['sal', 6]],
    m: {
      fuego: [20, ['Cuece la pasta en agua con sal según el paquete. Guarda un vaso del agua de cocción.', 'Dora la panceta en una sartén sin aceite hasta que esté crujiente.', 'Bate las yemas y 1 huevo entero con el parmesano y mucha pimienta.', 'Fuera del fuego, mezcla la pasta con la panceta y el huevo, añadiendo agua de cocción hasta que quede cremosa. No la vuelvas al fuego o se cuajará.']],
      robot: [22, ['Dora la panceta 5 min/120 °C/giro inverso/vel. cuchara. Reserva.', 'Pon 1,2 l de agua con sal: 10 min/100 °C/vel. 1. Añade la pasta y cuece el tiempo del paquete/100 °C/giro inverso/vel. cuchara.', 'Escurre guardando un poco de agua y mezcla en una fuente con el huevo batido con parmesano y pimienta y la panceta.']]
    }
  },
  {
    id: 'pasta-pesto', n: 'Pasta al pesto con pollo', e: '🌿', tipo: 'comida', tags: ['carne', 'rapida', 'niños'],
    ing: [['pasta_corta', 400], ['pesto', 1], ['pollo_pechuga', 350], ['tomate_cherry', 200], ['parmesano', 40], ['aceite', 15], ['sal', 6]],
    m: {
      fuego: [20, ['Cuece la pasta en agua con sal.', 'Dora el pollo en dados con un poco de aceite y sal.', 'Mezcla la pasta escurrida con el pesto, el pollo y los cherrys partidos. Sirve con parmesano.']],
      robot: [22, ['Sofríe el pollo en dados con aceite 6 min/120 °C/giro inverso/vel. cuchara. Reserva.', 'Pon 1,2 l de agua con sal: 10 min/100 °C/vel. 1. Añade la pasta y cuece el tiempo del paquete/100 °C/giro inverso/vel. cuchara.', 'Escurre y mezcla con el pesto, el pollo y los cherrys.']]
    }
  },
  {
    id: 'risotto-champis', n: 'Risotto de champiñones', e: '🍄', tipo: 'comida', tags: ['vegetariano'],
    ing: [['arroz_risotto', 320], ['champinon', 400], ['cebolla', 120], ['caldo_verduras', 1100], ['parmesano', 70], ['mantequilla', 40], ['vino_blanco', 100], ['aceite', 20], ['sal', 4]],
    m: {
      fuego: [35, ['Saltea los champiñones con aceite y sal y resérvalos.', 'Pocha la cebolla picada con la mitad de la mantequilla, añade el arroz y nacáralo 2 min. Riega con el vino.', 'Ve añadiendo el caldo caliente poco a poco, removiendo, durante 18 min.', 'Fuera del fuego, mezcla con los champiñones, el resto de la mantequilla y el parmesano. Reposa 2 min.']],
      robot: [30, ['Pica la cebolla 3 seg/vel. 5 y sofríe con aceite y champiñones 6 min/120 °C/giro inverso/vel. cuchara.', 'Añade arroz y vino: 2 min/120 °C/giro inverso/vel. cuchara.', 'Añade el caldo y la sal: 16 min/100 °C/giro inverso/vel. cuchara.', 'Añade mantequilla y parmesano, mezcla y deja reposar 3 min.']]
    }
  },
  {
    id: 'lasana', n: 'Lasaña boloñesa', e: '🍝', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['placas_lasana', 250], ['carne_picada', 500], ['tomate_triturado', 500], ['cebolla', 150], ['zanahoria', 100], ['leche', 700], ['harina', 50], ['mantequilla', 50], ['queso_rallado', 120], ['aceite', 20], ['sal', 7]],
    m: {
      horno: [75, ['Sofríe cebolla y zanahoria picadas, añade la carne, dórala y agrega el tomate. Cuece 15 min.', 'Haz una bechamel con la mantequilla, la harina y la leche.', 'Monta capas en una fuente: salsa de carne, placas (hidratadas si lo pide el paquete), bechamel. Repite y termina con bechamel y queso.', 'Hornea 30 min a 190 °C y gratina 5 min.']],
      airfryer: [60, ['Prepara la salsa de carne y la bechamel en el fuego.', 'Monta la lasaña en un molde que quepa en la freidora.', 'Tapa con papel de aluminio y cocina 20 min a 170 °C. Destapa y dora 5 min a 190 °C.']]
    }
  },
  {
    id: 'pollo-parmigiana', n: 'Pollo a la parmesana', e: '🍗', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['pollo_pechuga', 600], ['pan_rallado', 80], ['huevo', 2], ['tomate_frito', 300], ['mozzarella', 200], ['parmesano', 40], ['lechuga', 1], ['aceite', 30], ['sal', 4]],
    m: {
      horno: [35, ['Abre las pechugas en filetes finos, sálalos y pásalos por huevo y pan rallado mezclado con parmesano.', 'Hornéalos 15 min a 210 °C sobre papel con un chorrito de aceite.', 'Cubre con tomate y mozzarella y gratina 8 min. Sirve con ensalada.']],
      airfryer: [25, ['Empana los filetes con huevo y pan rallado con parmesano y úntalos con un poco de aceite.', 'Cocina 10 min a 200 °C, girándolos a mitad.', 'Cubre con tomate y mozzarella y cocina 4 min más.']]
    }
  },
  {
    id: 'gnocchi-horno', n: 'Ñoquis al horno con tomate y mozzarella', e: '🧀', tipo: 'cena', tags: ['vegetariano', 'rapida', 'niños'],
    ing: [['gnocchi', 2], ['tomate_triturado', 400], ['ajo', 2], ['mozzarella', 200], ['albahaca', 1], ['aceite', 20], ['sal', 4], ['oregano', 1]],
    m: {
      horno: [25, ['Calienta el tomate con el ajo picado, aceite, sal y orégano 8 min.', 'Mezcla con los ñoquis crudos en una fuente y cubre con la mozzarella.', 'Hornea 15 min a 220 °C. Termina con albahaca.']],
      airfryer: [20, ['Prepara la salsa en un cazo.', 'Mezcla con los ñoquis en un molde apto y cubre con mozzarella.', 'Cocina 12 min a 190 °C.']],
      fuego: [15, ['Dora los ñoquis en sartén con un poco de aceite 5 min.', 'Añade el tomate, el ajo y el orégano y cuece 5 min.', 'Pon la mozzarella encima, tapa 3 min hasta que se funda y termina con albahaca.']]
    }
  },
  {
    id: 'minestrone', n: 'Minestrone de verduras', e: '🥣', tipo: 'cena', tags: ['vegetariano', 'ligera', 'legumbres'],
    ing: [['zanahoria', 150], ['calabacin', 250], ['cebolla', 120], ['judias_verdes', 150], ['tomate_triturado', 250], ['alubias', 400], ['pasta_corta', 100], ['caldo_verduras', 1200], ['parmesano', 40], ['aceite', 25], ['sal', 4]],
    m: {
      fuego: [40, ['Sofríe la cebolla y la zanahoria en dados 6 min.', 'Añade el calabacín y las judías troceados y el tomate. Cocina 4 min.', 'Vierte el caldo y cuece 15 min. Añade la pasta y las alubias y cuece el tiempo de la pasta.', 'Sirve con parmesano rallado.']],
      robot: [35, ['Trocea cebolla y zanahoria 4 seg/vel. 4 y sofríe con aceite 5 min/120 °C/vel. 1.', 'Añade calabacín, judías, tomate y caldo: 15 min/100 °C/giro inverso/vel. cuchara.', 'Añade pasta y alubias: tiempo de la pasta/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'puttanesca', n: 'Espaguetis a la puttanesca', e: '🍝', tipo: 'comida', tags: ['vegetariano', 'rapida'],
    ing: [['espagueti', 400], ['tomate_triturado', 500], ['aceitunas', 100], ['alcaparras', 30], ['ajo', 3], ['oregano', 1], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [20, ['Cuece la pasta en agua con sal.', 'Dora el ajo laminado en el aceite, añade el tomate y cuece 10 min.', 'Agrega aceitunas en rodajas, alcaparras y orégano, 2 min.', 'Mezcla con la pasta escurrida.']],
      robot: [22, ['Sofríe el ajo con aceite 3 min/120 °C/vel. 1. Añade tomate: 10 min/100 °C/vel. 1.', 'Añade aceitunas, alcaparras y orégano: 2 min/100 °C/giro inverso/vel. cuchara. Reserva.', 'Cuece la pasta en el vaso o en una olla y mezcla con la salsa.']]
    }
  },
  {
    id: 'escalopines-limon', n: 'Escalopines al limón', e: '🍋', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['ternera_filetes', 600], ['limon', 2], ['harina', 30], ['mantequilla', 40], ['caldo_pollo', 150], ['perejil', 1], ['patata', 600], ['aceite', 20], ['sal', 5]],
    m: {
      fuego: [30, ['Cuece las patatas en dados en agua con sal 15 min.', 'Sala y enharina los filetes y dóralos 1 min por lado en la mantequilla con un poco de aceite.', 'Retíralos, añade el zumo de limón y el caldo y reduce 3 min.', 'Vuelve a poner la carne 1 min en la salsa y sirve con las patatas y perejil.']]
    }
  },
  {
    id: 'frittata', n: 'Frittata de verduras', e: '🍳', tipo: 'cena', tags: ['vegetariano', 'ligera', 'rapida'],
    ing: [['huevo', 8], ['calabacin', 250], ['pimiento_rojo', 120], ['cebolla', 100], ['espinacas', 100], ['parmesano', 40], ['aceite', 20], ['sal', 4]],
    m: {
      fuego: [25, ['Saltea cebolla, pimiento y calabacín en dados 8 min. Añade las espinacas 1 min.', 'Bate los huevos con parmesano y sal y viértelos sobre las verduras.', 'Cuaja a fuego bajo tapado 8 min, dale la vuelta con un plato y cocina 2 min más.']],
      horno: [30, ['Saltea las verduras o ásalas 10 min a 200 °C.', 'Ponlas en un molde, cubre con el huevo batido con parmesano y sal.', 'Hornea 18 min a 180 °C.']],
      airfryer: [25, ['Cocina las verduras en dados con aceite 8 min a 180 °C en un molde apto.', 'Vierte el huevo batido con parmesano y sal.', 'Cocina 12 min a 160 °C.']]
    }
  },
  {
    id: 'pizza-margarita', n: 'Pizza margarita', e: '🍕', tipo: 'cena', tags: ['vegetariano', 'niños', 'rapida'],
    ing: [['masa_pizza', 1], ['tomate_frito', 150], ['mozzarella', 250], ['albahaca', 1], ['aceite', 10], ['oregano', 1]],
    m: {
      horno: [20, ['Precalienta el horno a 240 °C.', 'Extiende la masa, cubre con tomate y mozzarella en trozos.', 'Hornea 10–12 min. Termina con albahaca fresca y un hilo de aceite.']],
      airfryer: [18, ['Corta la masa en piezas que quepan en el cesto y cocínalas solas 3 min a 190 °C.', 'Añade tomate y mozzarella y cocina 5 min más.', 'Termina con albahaca.']]
    }
  },
  {
    id: 'caprese', n: 'Ensalada caprese con pasta', e: '🍅', tipo: 'cena', tags: ['vegetariano', 'ligera', 'rapida'],
    ing: [['pasta_corta', 250], ['tomate', 500], ['mozzarella', 250], ['albahaca', 1], ['aceitunas', 50], ['aceite', 40], ['sal', 5]],
    m: {
      fuego: [20, ['Cuece la pasta y enfríala con agua fría.', 'Corta el tomate y la mozzarella en dados.', 'Mezcla con la pasta, las aceitunas y la albahaca. Aliña con aceite y sal.']],
      sin: [10, ['Versión sin pasta: corta el tomate y la mozzarella en rodajas y altérnalos en un plato.', 'Añade albahaca, aceitunas, aceite y sal.']]
    }
  }
]);

/* ---- Pastas ---- */
MC_ADD('it', [
  {
    id: 'it-pasta-fagioli', n: 'Pasta e fagioli', e: '🥣', tipo: 'comida', tags: ['legumbres', 'vegetariano'],
    ing: [['pasta_corta', 200], ['alubias', 800], ['tomate_triturado', 300], ['cebolla', 120], ['zanahoria', 100], ['apio', 80], ['ajo', 2], ['romero', 1], ['caldo_verduras', 1000], ['parmesano', 40], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [35, ['Sofríe cebolla, zanahoria, apio y ajo picados en el aceite 8 min.', 'Añade el tomate y el romero y cocina 5 min.', 'Agrega las alubias escurridas y el caldo; aplasta un tercio de las alubias con un tenedor para espesar.', 'Cuando hierva, echa la pasta y cuece el tiempo del paquete. Sirve con parmesano y un hilo de aceite.']],
      robot: [32, ['Pica cebolla, zanahoria, apio y ajo 5 seg/vel. 5 y sofríe con aceite 7 min/120 °C/vel. 1.', 'Añade tomate, romero, la mitad de las alubias y el caldo y tritura 10 seg/vel. 5.', 'Añade el resto de alubias y la pasta: tiempo del paquete + 2 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'it-pasta-ceci', n: 'Pasta e ceci (pasta con garbanzos)', e: '🥣', tipo: 'comida', tags: ['legumbres', 'vegetariano'],
    ing: [['pasta_corta', 200], ['garbanzos', 800], ['tomate_concentrado', 30], ['cebolla', 100], ['ajo', 2], ['romero', 1], ['caldo_verduras', 1000], ['parmesano', 40], ['aceite', 30], ['sal', 5], ['pimienta', 1]],
    m: {
      fuego: [30, ['Dora la cebolla y el ajo picados en el aceite 6 min con el romero.', 'Añade el tomate concentrado, los garbanzos escurridos y el caldo. Cuece 10 min.', 'Tritura la mitad del guiso con la batidora para que quede cremoso.', 'Añade la pasta y cuece el tiempo del paquete removiendo. Sirve con parmesano y pimienta.']],
      robot: [28, ['Pica cebolla y ajo 4 seg/vel. 5 y sofríe con aceite y romero 5 min/120 °C/vel. 1.', 'Añade la mitad de los garbanzos, el concentrado y el caldo: 8 min/100 °C/vel. 1. Tritura 20 seg/vel. 6.', 'Añade el resto de garbanzos y la pasta: tiempo del paquete + 2 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'it-pasta-lenticchie', n: 'Pasta con lentejas', e: '🥣', tipo: 'comida', tags: ['legumbres', 'vegetariano'],
    ing: [['lentejas', 250], ['pasta_corta', 180], ['tomate_triturado', 200], ['cebolla', 120], ['zanahoria', 100], ['apio', 60], ['ajo', 2], ['laurel', 1], ['parmesano', 40], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [50, ['Sofríe cebolla, zanahoria, apio y ajo picados en el aceite 8 min.', 'Añade las lentejas, el tomate, el laurel y 1,4 l de agua. Cuece 30 min a fuego medio.', 'Echa la pasta y la sal y cuece el tiempo del paquete, añadiendo agua si hace falta.', 'Sirve con parmesano rallado y un chorrito de aceite.']],
      robot: [45, ['Pica cebolla, zanahoria, apio y ajo 5 seg/vel. 5 y sofríe con aceite 7 min/120 °C/vel. 1.', 'Añade lentejas, tomate, laurel y 1,2 l de agua: 30 min/100 °C/giro inverso/vel. cuchara.', 'Añade la pasta y la sal: tiempo del paquete/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'it-arrabbiata', n: 'Penne all’arrabbiata', e: '🌶️', tipo: 'comida', tags: ['vegetariano', 'rapida'],
    ing: [['macarron', 400], ['tomate_triturado', 500], ['ajo', 3], ['guindilla', 2], ['perejil_fresco', 1], ['parmesano', 40], ['aceite', 40], ['sal', 5]],
    m: {
      fuego: [20, ['Cuece la pasta en agua con sal.', 'Dora el ajo laminado y la guindilla troceada en el aceite 1 min sin que se queme.', 'Añade el tomate y la sal y cuece 12 min a fuego medio.', 'Mezcla con la pasta escurrida y el perejil picado. Sirve con parmesano.']],
      robot: [22, ['Sofríe ajo y guindilla con el aceite 3 min/120 °C/vel. 1.', 'Añade el tomate y la sal: 12 min/100 °C/vel. 1. Reserva.', 'Cuece la pasta en una olla y mézclala con la salsa y el perejil.']]
    }
  },
  {
    id: 'it-aglio-olio', n: 'Espaguetis aglio, olio e peperoncino', e: '🧄', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['espagueti', 400], ['ajo', 5], ['guindilla', 2], ['perejil_fresco', 1], ['aceite', 70], ['parmesano', 30], ['sal', 6]],
    m: {
      fuego: [15, ['Cuece la pasta en agua con sal y guarda un vaso del agua de cocción.', 'Calienta el aceite a fuego suave con el ajo laminado y la guindilla hasta que el ajo esté dorado.', 'Añade la pasta escurrida, un chorro del agua de cocción y el perejil picado. Saltea 1 min para que ligue.', 'Sirve con parmesano al gusto.']]
    }
  },
  {
    id: 'it-vongole', n: 'Espaguetis alle vongole', e: '🐚', tipo: 'comida', tags: ['pescado', 'rapida'],
    ing: [['espagueti', 400], ['almejas', 800], ['ajo', 3], ['guindilla', 1], ['vino_blanco', 100], ['perejil_fresco', 1], ['aceite', 50], ['sal', 5]],
    m: {
      fuego: [25, ['Deja las almejas 30 min en agua con sal para que suelten la arena.', 'Cuece la pasta en agua con sal un minuto menos de lo que indica el paquete.', 'Dora el ajo y la guindilla en el aceite, añade las almejas y el vino y tapa hasta que se abran (3–4 min).', 'Añade la pasta y un poco de agua de cocción, saltea 1 min y termina con perejil picado.']]
    }
  },
  {
    id: 'it-pasta-norma', n: 'Pasta alla Norma', e: '🍆', tipo: 'comida', tags: ['vegetariano'],
    ing: [['macarron', 400], ['berenjena', 500], ['tomate_triturado', 400], ['ajo', 2], ['ricotta', 100], ['albahaca', 1], ['aceite', 60], ['sal', 6]],
    m: {
      fuego: [35, ['Corta la berenjena en dados, sálala y dórala en sartén con la mitad del aceite 10 min. Reserva.', 'Sofríe el ajo con el resto del aceite, añade el tomate y cuece 12 min.', 'Cuece la pasta, escúrrela y mézclala con la salsa y la berenjena.', 'Sirve con la ricotta desmenuzada y albahaca.']],
      horno: [40, ['Asa la berenjena en dados con aceite y sal 25 min a 210 °C.', 'Mientras, prepara la salsa de tomate con el ajo y cuece la pasta.', 'Mezcla todo y sirve con ricotta y albahaca.']],
      airfryer: [35, ['Cocina la berenjena en dados con 1 cucharada de aceite y sal 15 min a 200 °C, removiendo.', 'Prepara la salsa en un cazo y cuece la pasta.', 'Mezcla todo y termina con ricotta y albahaca.']]
    }
  },
  {
    id: 'it-amatriciana', n: 'Pasta all’amatriciana', e: '🍝', tipo: 'comida', tags: ['carne', 'rapida'],
    ing: [['espagueti', 400], ['panceta', 150], ['tomate_triturado', 400], ['cebolla', 80], ['guindilla', 1], ['vino_blanco', 50], ['parmesano', 60], ['aceite', 15], ['sal', 5]],
    m: {
      fuego: [25, ['Dora la panceta en tiras con el aceite hasta que suelte la grasa.', 'Añade la cebolla picada y la guindilla, pocha 4 min y riega con el vino.', 'Agrega el tomate y cuece 12 min. Mientras, cuece la pasta.', 'Mezcla la pasta con la salsa y sirve con abundante queso rallado.']],
      robot: [25, ['Pica la cebolla 3 seg/vel. 5. Añade panceta y aceite: 6 min/120 °C/giro inverso/vel. cuchara.', 'Añade vino, guindilla y tomate: 12 min/100 °C/giro inverso/vel. cuchara.', 'Cuece la pasta aparte y mézclala con la salsa y el queso.']]
    }
  },
  {
    id: 'it-cacio-pepe', n: 'Espaguetis cacio e pepe', e: '🧀', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['espagueti', 400], ['parmesano', 120], ['queso_curado', 40], ['pimienta', 4], ['mantequilla', 20], ['sal', 5]],
    m: {
      fuego: [15, ['Cuece la pasta en poca agua con sal y guarda dos vasos del agua de cocción.', 'Tuesta la pimienta recién molida en una sartén grande con la mantequilla 30 seg.', 'Añade un vaso de agua de cocción y la pasta escurrida.', 'Fuera del fuego, incorpora los quesos rallados poco a poco, removiendo y añadiendo agua hasta que quede una crema.']]
    }
  },
  {
    id: 'it-pasta-brocoli', n: 'Pasta con brócoli y anchoas', e: '🥦', tipo: 'comida', tags: ['pescado', 'rapida'],
    ing: [['pasta_corta', 400], ['brocoli', 500], ['anchoas', 1], ['ajo', 3], ['guindilla', 1], ['pan_rallado', 30], ['parmesano', 30], ['aceite', 50], ['sal', 5]],
    m: {
      fuego: [25, ['Cuece el brócoli en ramilletes en el agua con sal 4 min, sácalo y cuece la pasta en la misma agua.', 'Tuesta el pan rallado en una sartén con un poco de aceite y reserva.', 'Dora el ajo y la guindilla en el resto del aceite, deshaz las anchoas y añade el brócoli chafándolo un poco.', 'Mezcla con la pasta y un poco de agua de cocción. Sirve con el pan tostado y parmesano.']]
    }
  },
  {
    id: 'it-pasta-tonno', n: 'Pasta al atún con tomate', e: '🐟', tipo: 'comida', tags: ['pescado', 'rapida', 'niños'],
    ing: [['macarron', 400], ['atun', 3], ['tomate_triturado', 400], ['cebolla', 100], ['ajo', 1], ['alcaparras', 15], ['oregano', 1], ['aceite', 20], ['sal', 5]],
    m: {
      fuego: [20, ['Cuece la pasta en agua con sal.', 'Pocha la cebolla y el ajo picados en el aceite 5 min.', 'Añade el tomate, el orégano y las alcaparras y cuece 10 min. Incorpora el atún escurrido al final.', 'Mezcla con la pasta escurrida.']],
      robot: [22, ['Pica cebolla y ajo 4 seg/vel. 5 y sofríe con aceite 5 min/120 °C/vel. 1.', 'Añade tomate, orégano y alcaparras: 10 min/100 °C/vel. 1.', 'Añade el atún: 1 min/100 °C/giro inverso/vel. cuchara. Mezcla con la pasta cocida.']]
    }
  },
  {
    id: 'it-pasta-gorgonzola', n: 'Pasta al gorgonzola con nueces', e: '🧀', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['macarron', 400], ['queso_azul', 150], ['nata', 200], ['nueces', 50], ['pimienta', 1], ['sal', 5]],
    m: {
      fuego: [15, ['Cuece la pasta en agua con sal.', 'Calienta la nata a fuego suave y funde en ella el queso troceado, removiendo.', 'Mezcla con la pasta escurrida, añade las nueces troceadas y pimienta.']],
      robot: [18, ['Pon la nata y el queso en el vaso: 5 min/90 °C/vel. 2.', 'Cuece la pasta en una olla.', 'Mezcla la pasta con la salsa y las nueces troceadas.']]
    }
  },
  {
    id: 'it-pasta-salchicha', n: 'Pasta con salchicha y nata', e: '🍝', tipo: 'comida', tags: ['carne', 'niños', 'rapida'],
    ing: [['pasta_corta', 400], ['salchichas', 350], ['cebolla', 80], ['champinon', 200], ['nata', 200], ['vino_blanco', 50], ['parmesano', 40], ['aceite', 15], ['sal', 4]],
    m: {
      fuego: [25, ['Cuece la pasta en agua con sal.', 'Quita la piel a las salchichas y dora la carne desmigada con el aceite y la cebolla picada 6 min.', 'Añade los champiñones y el vino y cocina 4 min. Agrega la nata y cuece 3 min.', 'Mezcla con la pasta y sirve con parmesano.']],
      robot: [25, ['Pica la cebolla 3 seg/vel. 5. Añade aceite y la carne de salchicha: 6 min/120 °C/giro inverso/vel. cuchara.', 'Añade champiñones y vino: 4 min/120 °C/giro inverso/vel. cuchara.', 'Añade la nata: 3 min/100 °C/giro inverso/vel. cuchara. Mezcla con la pasta cocida.']]
    }
  },
  {
    id: 'it-pasta-piselli', n: 'Pasta con guisantes y jamón', e: '🟢', tipo: 'comida', tags: ['carne', 'niños', 'rapida'],
    ing: [['pasta_corta', 400], ['guisantes', 300], ['jamon_cocido', 150], ['cebolla', 80], ['nata', 150], ['parmesano', 40], ['mantequilla', 20], ['sal', 5]],
    m: {
      fuego: [20, ['Cuece la pasta en agua con sal.', 'Pocha la cebolla picada en la mantequilla, añade los guisantes y un poco de agua y cuece 6 min.', 'Agrega el jamón en tiras y la nata y cocina 2 min.', 'Mezcla con la pasta y el parmesano.']],
      robot: [22, ['Pica la cebolla 3 seg/vel. 5 y sofríe con mantequilla 3 min/120 °C/vel. 1.', 'Añade guisantes y 50 ml de agua: 6 min/100 °C/giro inverso/vel. cuchara.', 'Añade jamón y nata: 2 min/100 °C/giro inverso/vel. cuchara. Mezcla con la pasta cocida.']]
    }
  },
  {
    id: 'it-pasta-limone', n: 'Pasta al limón', e: '🍋', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['espagueti', 400], ['limon', 2], ['mantequilla', 50], ['parmesano', 80], ['pimienta', 1], ['perejil_fresco', 1], ['sal', 6]],
    m: {
      fuego: [15, ['Cuece la pasta en agua con sal y guarda un vaso del agua.', 'Funde la mantequilla con la ralladura de los limones y su zumo.', 'Añade la pasta, el parmesano y agua de cocción, removiendo hasta que quede cremosa. Termina con pimienta y perejil.']]
    }
  },
  {
    id: 'it-tagliatelle-setas', n: 'Tallarines con setas', e: '🍄', tipo: 'comida', tags: ['vegetariano', 'rapida'],
    ing: [['tallarines', 400], ['setas', 400], ['ajo', 2], ['nata', 200], ['vino_blanco', 50], ['perejil_fresco', 1], ['parmesano', 40], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [25, ['Cuece la pasta en agua con sal.', 'Saltea las setas troceadas con el ajo y el aceite a fuego fuerte 6 min.', 'Riega con el vino, deja evaporar y añade la nata. Cuece 3 min.', 'Mezcla con la pasta y sirve con perejil y parmesano.']],
      robot: [25, ['Pica el ajo 3 seg/vel. 5. Añade aceite y setas: 7 min/120 °C/giro inverso/vel. cuchara.', 'Añade vino y nata: 4 min/100 °C/giro inverso/vel. cuchara.', 'Mezcla con la pasta cocida aparte.']]
    }
  },
  {
    id: 'it-pasta-salmon', n: 'Pasta con salmón y nata', e: '🐟', tipo: 'comida', tags: ['pescado', 'rapida', 'niños'],
    ing: [['tallarines', 400], ['salmon', 300], ['nata', 250], ['cebolla', 60], ['limon', 1], ['eneldo', 1], ['mantequilla', 20], ['sal', 5]],
    m: {
      fuego: [20, ['Cuece la pasta en agua con sal.', 'Pocha la cebolla picada en la mantequilla 4 min, añade el salmón en dados y cocina 2 min.', 'Vierte la nata con la ralladura de limón y el eneldo y cuece 3 min.', 'Mezcla con la pasta escurrida.']],
      robot: [22, ['Pica la cebolla 3 seg/vel. 5 y sofríe con mantequilla 3 min/120 °C/vel. 1.', 'Añade salmón, nata, eneldo y ralladura: 5 min/90 °C/giro inverso/vel. cuchara.', 'Mezcla con la pasta cocida aparte.']]
    }
  },
  {
    id: 'it-pasta-pez-espada', n: 'Pasta siciliana con pez espada', e: '🐟', tipo: 'comida', tags: ['pescado'],
    ing: [['macarron', 400], ['pez_espada', 400], ['berenjena', 300], ['tomate_cherry', 300], ['ajo', 2], ['alcaparras', 15], ['hierbabuena', 1], ['aceite', 50], ['sal', 6]],
    m: {
      fuego: [30, ['Dora la berenjena en dados con la mitad del aceite y sal 8 min. Reserva.', 'Cuece la pasta en agua con sal.', 'Sofríe el ajo con el resto del aceite, añade los cherrys partidos y el pez espada en dados y cocina 5 min. Añade las alcaparras.', 'Mezcla con la pasta y la berenjena y termina con hierbabuena picada.']]
    }
  },
  {
    id: 'it-pesto-rosso', n: 'Pasta al pesto rojo', e: '🍅', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['pasta_corta', 400], ['tomate_seco', 100], ['almendras', 40], ['ajo', 1], ['albahaca', 1], ['parmesano', 50], ['aceite', 60], ['sal', 5]],
    m: {
      fuego: [15, ['Cuece la pasta en agua con sal.', 'Tritura los tomates secos con las almendras, el ajo, la albahaca, el parmesano y el aceite hasta tener una pasta.', 'Mezcla con la pasta escurrida y un poco de su agua para aligerar.']],
      robot: [15, ['Tritura tomates secos, almendras, ajo, albahaca, parmesano y aceite 20 seg/vel. 7. Reserva.', 'Pon 1,2 l de agua con sal: 10 min/100 °C/vel. 1. Añade la pasta y cuece el tiempo del paquete/100 °C/giro inverso/vel. cuchara.', 'Escurre y mezcla con el pesto.']]
    }
  }
]);

/* ---- Pastas al horno, ñoquis, arroces y polenta ---- */
MC_ADD('it', [
  {
    id: 'it-pasta-forno', n: 'Pasta al forno', e: '🧀', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['macarron', 400], ['carne_picada', 350], ['tomate_triturado', 600], ['cebolla', 120], ['ajo', 1], ['mozzarella', 200], ['parmesano', 50], ['albahaca', 1], ['aceite', 20], ['sal', 6]],
    m: {
      horno: [50, ['Sofríe la cebolla y el ajo picados, añade la carne y dórala. Agrega el tomate y cuece 15 min.', 'Cuece la pasta 3 min menos de lo indicado y mézclala con la salsa y la albahaca.', 'Pon la mitad en una fuente, cubre con mozzarella, añade el resto y termina con parmesano.', 'Hornea 20 min a 200 °C hasta que se dore.']],
      airfryer: [45, ['Prepara la salsa de carne y la pasta en el fuego como en la versión de horno.', 'Monta la pasta con la mozzarella en un molde que quepa en el cesto.', 'Cocina 12 min a 180 °C hasta que gratine.']]
    }
  },
  {
    id: 'it-canelones-ricotta', n: 'Canelones de ricotta y espinacas', e: '🥬', tipo: 'comida', tags: ['vegetariano', 'niños'],
    ing: [['canelones', 200], ['ricotta', 400], ['espinacas_congeladas', 400], ['huevo', 1], ['parmesano', 80], ['tomate_frito', 400], ['leche', 500], ['harina', 40], ['mantequilla', 40], ['nuez_moscada', 1], ['sal', 5]],
    m: {
      horno: [55, ['Hidrata las placas según el paquete. Descongela y escurre bien las espinacas.', 'Mezcla las espinacas picadas con la ricotta, el huevo, la mitad del parmesano, sal y nuez moscada. Rellena y enrolla las placas.', 'Pon el tomate en la base de una fuente y coloca los canelones encima. Cubre con una bechamel hecha con mantequilla, harina y leche.', 'Espolvorea el resto del parmesano y hornea 25 min a 190 °C.']]
    }
  },
  {
    id: 'it-lasana-verduras', n: 'Lasaña de verduras', e: '🥕', tipo: 'comida', tags: ['vegetariano'],
    ing: [['placas_lasana', 250], ['calabacin', 400], ['berenjena', 300], ['pimiento_rojo', 200], ['cebolla', 120], ['tomate_triturado', 400], ['leche', 700], ['harina', 50], ['mantequilla', 50], ['mozzarella', 150], ['parmesano', 50], ['aceite', 30], ['sal', 7]],
    m: {
      horno: [75, ['Saltea la cebolla, el pimiento, la berenjena y el calabacín en dados con aceite y sal 12 min. Añade el tomate y cuece 8 min.', 'Haz una bechamel con la mantequilla, la harina y la leche.', 'Monta capas de placas, verduras y bechamel. Termina con bechamel, mozzarella y parmesano.', 'Hornea 35 min a 190 °C.']],
      airfryer: [65, ['Prepara las verduras y la bechamel en el fuego.', 'Monta la lasaña en un molde que quepa en la freidora.', 'Tapa con aluminio y cocina 20 min a 170 °C. Destapa y dora 5 min a 190 °C.']]
    }
  },
  {
    id: 'it-ravioli-salvia', n: 'Raviolis con mantequilla y salvia', e: '🥟', tipo: 'cena', tags: ['vegetariano', 'rapida', 'niños'],
    ing: [['pasta_rellena', 600], ['mantequilla', 70], ['salvia', 1], ['parmesano', 50], ['espinacas', 150], ['pimienta', 1], ['sal', 5]],
    m: {
      fuego: [15, ['Cuece la pasta rellena en agua con sal el tiempo del paquete.', 'Funde la mantequilla con la salvia a fuego suave hasta que tome color avellana. Añade las espinacas y deja que se ablanden 1 min.', 'Mezcla con la pasta escurrida y sirve con parmesano y pimienta.']]
    }
  },
  {
    id: 'it-tortellini-brodo', n: 'Tortellini en caldo', e: '🍲', tipo: 'cena', tags: ['carne', 'ligera', 'rapida', 'niños'],
    ing: [['pasta_rellena', 400], ['caldo_pollo', 1500], ['zanahoria', 100], ['apio', 60], ['parmesano', 40], ['perejil_fresco', 1]],
    m: {
      fuego: [20, ['Calienta el caldo con la zanahoria y el apio en daditos y cuece 8 min.', 'Añade los tortellini y cuécelos el tiempo del paquete.', 'Sirve con parmesano rallado y perejil picado.']],
      robot: [20, ['Pica zanahoria y apio 3 seg/vel. 4. Añade el caldo: 10 min/100 °C/vel. 1.', 'Añade los tortellini: tiempo del paquete/100 °C/giro inverso/vel. cuchara.', 'Sirve con parmesano y perejil.']]
    }
  },
  {
    id: 'it-gnocchi-gorgonzola', n: 'Ñoquis al gorgonzola', e: '🧀', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['gnocchi', 2], ['queso_azul', 150], ['nata', 200], ['espinacas', 150], ['nueces', 40], ['pimienta', 1]],
    m: {
      fuego: [15, ['Cuece los ñoquis en agua con sal hasta que suban a la superficie.', 'Funde el queso en la nata a fuego suave y añade las espinacas 1 min.', 'Mezcla con los ñoquis escurridos y sirve con nueces y pimienta.']],
      horno: [20, ['Mezcla los ñoquis crudos con la nata, las espinacas y el queso troceado en una fuente.', 'Hornea 15 min a 210 °C.', 'Sirve con nueces y pimienta.']]
    }
  },
  {
    id: 'it-risotto-milanese', n: 'Risotto alla milanese', e: '🟡', tipo: 'comida', tags: ['vegetariano'],
    ing: [['arroz_risotto', 320], ['cebolla', 100], ['azafran', 1], ['caldo_verduras', 1100], ['vino_blanco', 100], ['mantequilla', 50], ['parmesano', 70], ['sal', 4]],
    m: {
      fuego: [30, ['Pocha la cebolla muy picada con la mitad de la mantequilla 5 min. Añade el arroz y nacáralo 2 min.', 'Riega con el vino y deja que se evapore. Disuelve el azafrán en el caldo caliente.', 'Añade el caldo poco a poco, removiendo, durante 18 min.', 'Fuera del fuego, incorpora el resto de la mantequilla y el parmesano. Reposa 2 min.']],
      robot: [28, ['Pica la cebolla 3 seg/vel. 5 y sofríe con la mitad de la mantequilla 3 min/120 °C/vel. 1.', 'Añade el arroz y el vino: 2 min/120 °C/giro inverso/vel. cuchara.', 'Añade el caldo con el azafrán y la sal: 16 min/100 °C/giro inverso/vel. cuchara.', 'Añade la mantequilla restante y el parmesano, mezcla y reposa 3 min.']]
    }
  },
  {
    id: 'it-risotto-calabaza', n: 'Risotto de calabaza', e: '🎃', tipo: 'comida', tags: ['vegetariano'],
    ing: [['arroz_risotto', 320], ['calabaza', 500], ['cebolla', 100], ['caldo_verduras', 1100], ['vino_blanco', 80], ['mantequilla', 40], ['parmesano', 60], ['salvia', 1], ['aceite', 20], ['sal', 4]],
    m: {
      fuego: [35, ['Pocha la cebolla picada con el aceite, añade la calabaza en dados pequeños y cocina 6 min.', 'Añade el arroz, nacáralo 2 min y riega con el vino.', 'Ve añadiendo el caldo caliente poco a poco durante 18 min, removiendo; la calabaza se deshará y dará cremosidad.', 'Termina con la mantequilla, el parmesano y la salvia.']],
      robot: [32, ['Pica cebolla y calabaza 5 seg/vel. 5 y sofríe con aceite 6 min/120 °C/vel. 1.', 'Añade arroz y vino: 2 min/120 °C/giro inverso/vel. cuchara.', 'Añade caldo, salvia y sal: 16 min/100 °C/giro inverso/vel. cuchara.', 'Mezcla con mantequilla y parmesano y reposa 3 min.']]
    }
  },
  {
    id: 'it-risotto-esparragos', n: 'Risotto de espárragos', e: '🌱', tipo: 'comida', tags: ['vegetariano'],
    ing: [['arroz_risotto', 320], ['esparragos', 2], ['cebolla', 100], ['caldo_verduras', 1100], ['vino_blanco', 80], ['limon', 1], ['mantequilla', 40], ['parmesano', 60], ['aceite', 20], ['sal', 4]],
    m: {
      fuego: [30, ['Corta los espárragos en trozos y reserva las puntas.', 'Pocha la cebolla con el aceite, añade el arroz y los tallos troceados y nacara 2 min. Riega con el vino.', 'Añade el caldo poco a poco durante 18 min; incorpora las puntas a los 12 min.', 'Termina con mantequilla, parmesano y ralladura de limón.']],
      robot: [28, ['Pica la cebolla 3 seg/vel. 5 y sofríe con aceite 3 min/120 °C/vel. 1.', 'Añade arroz, tallos de espárrago y vino: 2 min/120 °C/giro inverso/vel. cuchara.', 'Añade caldo y sal: 10 min/100 °C/giro inverso/vel. cuchara. Añade las puntas: 6 min/100 °C/giro inverso/vel. cuchara.', 'Mezcla con mantequilla, parmesano y ralladura.']]
    }
  },
  {
    id: 'it-risotto-marisco', n: 'Risotto de marisco', e: '🦐', tipo: 'comida', tags: ['pescado'],
    ing: [['arroz_risotto', 320], ['gambas', 250], ['calamar', 250], ['mejillones', 500], ['ajo', 2], ['cebolla', 80], ['tomate_triturado', 100], ['caldo_pescado', 1100], ['vino_blanco', 100], ['perejil_fresco', 1], ['aceite', 40], ['sal', 3]],
    m: {
      fuego: [40, ['Abre los mejillones al vapor con el vino, quita las conchas y cuela el líquido sobre el caldo.', 'Sofríe la cebolla y el ajo picados, añade el calamar en anillas 3 min y el tomate 2 min.', 'Añade el arroz, nacara 1 min y ve incorporando el caldo caliente poco a poco 18 min.', 'A falta de 3 min añade las gambas y los mejillones. Termina con perejil y un hilo de aceite.']],
      robot: [35, ['Pica cebolla y ajo 3 seg/vel. 5. Sofríe con aceite y calamar 5 min/120 °C/giro inverso/vel. cuchara.', 'Añade tomate, arroz y vino: 2 min/120 °C/giro inverso/vel. cuchara.', 'Añade el caldo: 13 min/100 °C/giro inverso/vel. cuchara. Añade gambas y mejillones ya abiertos: 3 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'it-polenta-salchichas', n: 'Polenta con salchichas en salsa de tomate', e: '🌽', tipo: 'comida', tags: ['carne'],
    ing: [['polenta', 250], ['salchichas', 500], ['tomate_triturado', 500], ['cebolla', 100], ['ajo', 1], ['romero', 1], ['vino_tinto', 80], ['parmesano', 50], ['mantequilla', 30], ['aceite', 20], ['sal', 6]],
    m: {
      fuego: [40, ['Dora las salchichas troceadas con el aceite, añade la cebolla y el ajo picados y pocha 5 min.', 'Riega con el vino, añade el tomate y el romero y cuece 20 min a fuego suave.', 'Hierve 1 l de agua con sal, echa la polenta en lluvia y remueve 5–8 min (o lo que indique el paquete) hasta que espese.', 'Termina la polenta con mantequilla y parmesano y sirve con las salchichas por encima.']]
    }
  },
  {
    id: 'it-ossobuco', n: 'Ossobuco a la milanesa', e: '🍖', tipo: 'comida', tags: ['carne'],
    ing: [['ossobuco', 1200], ['cebolla', 150], ['zanahoria', 120], ['apio', 80], ['tomate_triturado', 300], ['vino_blanco', 150], ['caldo_carne', 400], ['harina', 30], ['limon', 1], ['perejil_fresco', 1], ['ajo', 1], ['aceite', 40], ['sal', 6]],
    m: {
      fuego: [120, ['Haz unos cortes en el borde de las rodajas, sálalas, enharínalas y dóralas en el aceite por ambos lados. Reserva.', 'Sofríe cebolla, zanahoria y apio picados 8 min. Riega con el vino y deja reducir.', 'Añade el tomate, el caldo y la carne, tapa y cuece 1 h 30 min a fuego muy suave.', 'Sirve con una picada de ralladura de limón, ajo y perejil por encima.']],
      robot: [100, ['Dora la carne enharinada en una sartén y reserva.', 'Pica cebolla, zanahoria y apio 5 seg/vel. 5 y sofríe con aceite 8 min/120 °C/vel. 1.', 'Añade vino, tomate, caldo y la carne: 80 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con la picada de limón, ajo y perejil.']]
    }
  },
  {
    id: 'it-saltimbocca', n: 'Saltimbocca alla romana', e: '🥩', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['ternera_filetes', 500], ['jamon_lonchas', 120], ['salvia', 1], ['harina', 30], ['mantequilla', 40], ['vino_blanco', 100], ['lechuga', 1], ['tomate', 300], ['aceite', 20], ['sal', 3]],
    m: {
      fuego: [20, ['Aplana los filetes, pon encima una loncha de jamón y una pizca de salvia y sujeta con un palillo.', 'Enharina ligeramente el lado de la carne y dóralos en la mantequilla con el aceite 1–2 min por lado, empezando por el jamón.', 'Retíralos, añade el vino a la sartén y reduce 2 min. Vierte la salsa sobre la carne.', 'Acompaña con una ensalada de lechuga y tomate.']]
    }
  },
  {
    id: 'it-cacciatora', n: 'Pollo alla cacciatora', e: '🍗', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_muslos', 1000], ['tomate_triturado', 400], ['cebolla', 150], ['pimiento_rojo', 150], ['champinon', 200], ['ajo', 2], ['aceitunas', 60], ['vino_tinto', 150], ['romero', 1], ['aceite', 30], ['sal', 6]],
    m: {
      fuego: [55, ['Dora el pollo salado en el aceite y resérvalo.', 'Sofríe la cebolla, el pimiento, los champiñones y el ajo 8 min.', 'Riega con el vino, añade el tomate, el romero y el pollo. Tapa y cuece 30 min.', 'Añade las aceitunas los últimos 5 min.']],
      horno: [60, ['Pon el pollo, las verduras troceadas, el tomate, el vino y el romero en una fuente con aceite y sal.', 'Hornea tapado con aluminio 30 min a 190 °C.', 'Destapa, añade las aceitunas y hornea 15 min más.']],
      robot: [50, ['Dora el pollo en una sartén y reserva.', 'Pica cebolla, pimiento y ajo 4 seg/vel. 4 y sofríe con aceite 7 min/120 °C/vel. 1.', 'Añade champiñones, vino, tomate, romero y el pollo: 30 min/100 °C/giro inverso/vel. cuchara. Añade las aceitunas al final.']]
    }
  },
  {
    id: 'it-pollo-diavola', n: 'Pollo a la diavola', e: '🌶️', tipo: 'cena', tags: ['carne'],
    ing: [['pollo_muslos', 1000], ['limon', 1], ['ajo', 3], ['guindilla', 2], ['pimenton_picante', 3], ['romero', 1], ['aceite', 40], ['sal', 6], ['rucula', 100], ['tomate_cherry', 200]],
    m: {
      horno: [45, ['Marina el pollo con el zumo de limón, el ajo picado, la guindilla machacada, el pimentón, el romero, el aceite y la sal 15 min.', 'Hornea 35 min a 210 °C, dándole la vuelta a mitad.', 'Sirve con una ensalada de rúcula y cherrys.']],
      airfryer: [35, ['Marina el pollo 15 min con todos los condimentos.', 'Cocina 22 min a 190 °C, girándolo a mitad.', 'Sirve con la ensalada.']],
      fuego: [35, ['Marina el pollo 15 min.', 'Cocínalo en una plancha o sartén a fuego medio, aplastándolo con un peso, 10 min por lado.', 'Sirve con la ensalada.']]
    }
  },
  {
    id: 'it-involtini', n: 'Involtini de ternera en salsa de tomate', e: '🥩', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_filetes', 600], ['jamon_cocido', 100], ['parmesano', 50], ['perejil_fresco', 1], ['ajo', 1], ['tomate_triturado', 500], ['cebolla', 100], ['vino_blanco', 80], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [45, ['Aplana los filetes y cubre cada uno con jamón, parmesano, ajo y perejil picados. Enróllalos y sujétalos con palillos.', 'Dóralos en el aceite y resérvalos. Pocha la cebolla en la misma cazuela.', 'Riega con el vino, añade el tomate y los rollitos y cuece tapado 25 min a fuego suave.']],
      robot: [40, ['Prepara y dora los rollitos en una sartén.', 'Pica la cebolla 3 seg/vel. 5 y sofríe con aceite 4 min/120 °C/vel. 1.', 'Añade vino, tomate y los rollitos: 25 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'it-vitello-tonnato', n: 'Solomillo tonnato (estilo vitello tonnato)', e: '🥩', tipo: 'cena', tags: ['carne', 'ligera'],
    ing: [['cerdo_solomillo', 700], ['atun', 2], ['mayonesa', 150], ['anchoas', 1], ['alcaparras', 20], ['limon', 1], ['vino_blanco', 100], ['laurel', 1], ['rucula', 100], ['sal', 4]],
    m: {
      fuego: [45, ['Cuece la carne en agua con sal, el vino y el laurel a fuego suave 25 min. Déjala enfriar en el caldo.', 'Tritura el atún, la mayonesa, 3 anchoas, la mitad de las alcaparras, el zumo de limón y 3 cucharadas del caldo.', 'Corta la carne en lonchas finas, cúbrelas con la salsa y decora con alcaparras. Sirve con rúcula.']],
      horno: [45, ['Asa la carne salada 25 min a 180 °C y déjala enfriar.', 'Prepara la salsa triturando atún, mayonesa, anchoas, alcaparras y limón.', 'Corta en lonchas, cubre con la salsa y sirve con rúcula.']]
    }
  },
  {
    id: 'it-arista', n: 'Lomo de cerdo al horno con romero', e: '🐖', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['cerdo_lomo', 900], ['patata', 800], ['ajo', 4], ['romero', 2], ['vino_blanco', 150], ['aceite', 40], ['sal', 6], ['pimienta', 1]],
    m: {
      horno: [70, ['Unta la carne con ajo picado, romero, sal, pimienta y aceite.', 'Pon las patatas en gajos alrededor con sal y aceite.', 'Hornea 1 h a 190 °C, regando con el vino a los 20 min.', 'Deja reposar la carne 5 min antes de cortarla.']],
      airfryer: [50, ['Corta la carne en medallones gruesos y úntalos con ajo, romero, sal y aceite.', 'Cocina las patatas en gajos 15 min a 190 °C.', 'Añade la carne y cocina 15 min más, girándola a mitad.']]
    }
  },
  {
    id: 'it-salsiccia-fagioli', n: 'Salchichas con alubias al tomate', e: '🌭', tipo: 'comida', tags: ['carne', 'legumbres'],
    ing: [['salchichas', 500], ['alubias', 800], ['tomate_triturado', 400], ['cebolla', 100], ['ajo', 2], ['salvia', 1], ['romero', 1], ['aceite', 20], ['sal', 4]],
    m: {
      fuego: [35, ['Dora las salchichas en el aceite y resérvalas.', 'Pocha la cebolla y el ajo en la misma cazuela 5 min con la salvia y el romero.', 'Añade el tomate y cuece 10 min. Incorpora las alubias escurridas y las salchichas y cuece 10 min más.']],
      robot: [32, ['Dora las salchichas en una sartén.', 'Pica cebolla y ajo 4 seg/vel. 5 y sofríe con aceite 5 min/120 °C/vel. 1.', 'Añade tomate, hierbas, alubias y salchichas: 15 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'it-pollo-peperonata', n: 'Pollo con peperonata', e: '🫑', tipo: 'comida', tags: ['carne'],
    ing: [['pollo_pechuga', 600], ['pimiento_rojo', 300], ['pimiento_verde', 200], ['cebolla', 150], ['tomate_triturado', 250], ['ajo', 2], ['vinagre', 10], ['albahaca', 1], ['aceite', 40], ['sal', 5]],
    m: {
      fuego: [40, ['Pocha la cebolla y los pimientos en tiras con el aceite y el ajo 15 min.', 'Añade el tomate, el vinagre y la sal y cuece 10 min.', 'Dora el pollo en tiras en otra sartén y mézclalo con la peperonata 5 min. Termina con albahaca.']],
      horno: [45, ['Mezcla pimientos y cebolla en tiras con ajo, aceite y sal y ásalos 20 min a 200 °C.', 'Añade el pollo en dados y el tomate y hornea 15 min más.', 'Rocía con el vinagre y termina con albahaca.']]
    }
  },
  {
    id: 'it-parmigiana', n: 'Berenjenas a la parmesana', e: '🍆', tipo: 'comida', tags: ['vegetariano'],
    ing: [['berenjena', 1000], ['tomate_triturado', 600], ['ajo', 2], ['mozzarella', 250], ['parmesano', 80], ['albahaca', 1], ['aceite', 50], ['sal', 6]],
    m: {
      horno: [60, ['Corta las berenjenas en rodajas de 1 cm, úntalas con aceite y sal y ásalas 20 min a 210 °C.', 'Cuece el tomate con el ajo y la sal 10 min.', 'Monta capas de tomate, berenjena, mozzarella, albahaca y parmesano en una fuente.', 'Hornea 25 min a 190 °C y deja reposar 10 min.']],
      airfryer: [55, ['Cocina las rodajas de berenjena con un poco de aceite 12 min a 200 °C, en tandas.', 'Prepara la salsa de tomate en un cazo.', 'Monta las capas en un molde apto y cocina 15 min a 180 °C.']]
    }
  }
]);

/* ---- Pescados, sopas, verduras y cenas ---- */
MC_ADD('it', [
  {
    id: 'it-caponata', n: 'Caponata siciliana', e: '🍆', tipo: 'cena', tags: ['vegetariano'],
    ing: [['berenjena', 700], ['apio', 150], ['cebolla', 150], ['tomate_triturado', 300], ['aceitunas', 80], ['alcaparras', 20], ['vinagre', 30], ['azucar', 10], ['albahaca', 1], ['pan_barra', 1], ['aceite', 60], ['sal', 5]],
    m: {
      fuego: [40, ['Dora la berenjena en dados con la mitad del aceite y sal 10 min. Reserva.', 'Pocha la cebolla y el apio en el resto del aceite 8 min, añade el tomate y cuece 8 min.', 'Incorpora la berenjena, las aceitunas, las alcaparras, el vinagre y el azúcar y cuece 5 min.', 'Sirve templada o fría con albahaca y pan.']],
      horno: [45, ['Asa la berenjena en dados con aceite y sal 25 min a 210 °C.', 'Prepara el sofrito de cebolla, apio y tomate en el fuego.', 'Mezcla todo con aceitunas, alcaparras, vinagre y azúcar y sirve con pan.']]
    }
  },
  {
    id: 'it-acqua-pazza', n: 'Dorada all’acqua pazza', e: '🐟', tipo: 'cena', tags: ['pescado', 'ligera', 'rapida'],
    ing: [['dorada', 1000], ['tomate_cherry', 300], ['ajo', 2], ['vino_blanco', 100], ['perejil_fresco', 1], ['guindilla', 1], ['aceite', 40], ['sal', 5], ['pan_barra', 1]],
    m: {
      fuego: [25, ['Pide los lomos de dorada limpios. Dora el ajo laminado y la guindilla en el aceite.', 'Añade los cherrys partidos, el vino y 150 ml de agua y cuece 5 min.', 'Coloca los lomos con la piel hacia arriba, tapa y cuece 6–8 min.', 'Sirve con el caldo, perejil picado y pan para mojar.']],
      horno: [25, ['Pon los lomos en una fuente con los cherrys, el ajo, la guindilla, el vino, 100 ml de agua, aceite y sal.', 'Hornea 15 min a 200 °C.', 'Termina con perejil y sirve con pan.']]
    }
  },
  {
    id: 'it-livornese', n: 'Merluza a la livornesa', e: '🐟', tipo: 'comida', tags: ['pescado', 'rapida'],
    ing: [['merluza', 700], ['tomate_triturado', 400], ['aceitunas', 60], ['alcaparras', 20], ['ajo', 2], ['perejil_fresco', 1], ['arroz_largo', 250], ['aceite', 40], ['sal', 5]],
    m: {
      fuego: [30, ['Cuece el arroz en agua con sal 15 min.', 'Dora el ajo en el aceite, añade el tomate y cuece 8 min con las aceitunas y las alcaparras.', 'Coloca los lomos de merluza salados en la salsa, tapa y cocina 6–8 min.', 'Sirve con perejil y el arroz blanco.']],
      horno: [30, ['Prepara la salsa de tomate con ajo, aceitunas y alcaparras.', 'Ponla en una fuente con la merluza encima y hornea 12 min a 200 °C.', 'Sirve con perejil y arroz.']]
    }
  },
  {
    id: 'it-cozze', n: 'Mejillones a la marinera italiana', e: '🦪', tipo: 'cena', tags: ['pescado', 'rapida'],
    ing: [['mejillones', 1500], ['tomate_triturado', 400], ['ajo', 3], ['guindilla', 1], ['vino_blanco', 100], ['perejil_fresco', 1], ['pan_barra', 1], ['aceite', 40], ['sal', 2]],
    m: {
      fuego: [25, ['Limpia los mejillones.', 'Dora el ajo y la guindilla en el aceite, añade el tomate y cuece 8 min.', 'Echa los mejillones y el vino, tapa y cocina 5 min hasta que se abran, moviendo la cazuela.', 'Termina con perejil y sirve con pan tostado.']]
    }
  },
  {
    id: 'it-ribollita', n: 'Ribollita toscana', e: '🥬', tipo: 'cena', tags: ['vegetariano', 'legumbres'],
    ing: [['alubias', 800], ['col_rizada', 300], ['zanahoria', 150], ['apio', 100], ['cebolla', 120], ['patata', 250], ['tomate_triturado', 250], ['caldo_verduras', 1200], ['pan_barra', 1], ['romero', 1], ['aceite', 40], ['sal', 5]],
    m: {
      fuego: [50, ['Sofríe la cebolla, la zanahoria y el apio picados en el aceite 8 min.', 'Añade la patata en dados, el tomate, la col en tiras, el romero, el caldo y la mitad de las alubias. Cuece 25 min.', 'Tritura el resto de las alubias y añádelas para espesar.', 'Sirve sobre rebanadas de pan tostado con un buen chorro de aceite.']],
      robot: [45, ['Pica cebolla, zanahoria y apio 5 seg/vel. 5 y sofríe con aceite 7 min/120 °C/vel. 1.', 'Añade patata, tomate, col, romero, caldo y alubias: 25 min/100 °C/giro inverso/vel. cuchara.', 'Sirve sobre pan tostado con aceite.']]
    }
  },
  {
    id: 'it-stracciatella', n: 'Stracciatella (sopa de huevo y parmesano)', e: '🥚', tipo: 'cena', tags: ['carne', 'ligera', 'rapida'],
    ing: [['caldo_pollo', 1500], ['huevo', 4], ['parmesano', 60], ['espinacas', 150], ['nuez_moscada', 1], ['limon', 1], ['sal', 2]],
    m: {
      fuego: [15, ['Lleva el caldo a ebullición y añade las espinacas 2 min.', 'Bate los huevos con el parmesano, la nuez moscada y la ralladura de limón.', 'Vierte el huevo en hilo sobre el caldo hirviendo removiendo con un tenedor para que forme hebras. Sirve enseguida.']],
      robot: [15, ['Calienta el caldo: 8 min/100 °C/vel. 1. Añade las espinacas: 2 min/100 °C/giro inverso/vel. cuchara.', 'Bate los huevos con parmesano, nuez moscada y ralladura.', 'Con el robot a 100 °C/giro inverso/vel. cuchara, vierte el huevo por la boca 1 min.']]
    }
  },
  {
    id: 'it-pasta-patate', n: 'Pasta con patatas a la napolitana', e: '🥔', tipo: 'comida', tags: ['vegetariano', 'niños'],
    ing: [['pasta_corta', 250], ['patata', 600], ['cebolla', 100], ['apio', 60], ['tomate_cherry', 150], ['caldo_verduras', 1000], ['parmesano', 60], ['queso_lonchas', 80], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [40, ['Sofríe cebolla y apio picados en el aceite 6 min. Añade los cherrys partidos y la patata en dados pequeños.', 'Cubre con el caldo y cuece 15 min hasta que la patata empiece a deshacerse.', 'Añade la pasta y cuécela en el mismo guiso, removiendo y añadiendo caldo si hace falta.', 'Fuera del fuego, mezcla con el parmesano y el queso en trozos hasta que fundan.']],
      robot: [35, ['Pica cebolla y apio 4 seg/vel. 5 y sofríe con aceite 5 min/120 °C/vel. 1.', 'Añade patata, cherrys y caldo: 12 min/100 °C/giro inverso/vel. cuchara.', 'Añade la pasta: tiempo del paquete + 2 min/100 °C/giro inverso/vel. cuchara. Mezcla con los quesos.']]
    }
  },
  {
    id: 'it-panzanella', n: 'Panzanella (ensalada toscana de pan)', e: '🥗', tipo: 'cena', tags: ['vegetariano', 'ligera', 'rapida'],
    ing: [['pan_barra', 1], ['tomate', 700], ['pepino', 250], ['cebolla_morada', 80], ['albahaca', 1], ['aceitunas', 50], ['vinagre', 30], ['aceite', 60], ['sal', 4]],
    m: {
      sin: [20, ['Corta el pan del día anterior en dados y riégalo con un poco de agua y el vinagre.', 'Trocea los tomates, el pepino y la cebolla y mézclalos con sal para que suelten jugo.', 'Junta todo con el pan, las aceitunas, la albahaca y el aceite. Deja reposar 10 min antes de servir.']],
      horno: [20, ['Tuesta los dados de pan con un poco de aceite 8 min a 200 °C.', 'Mezcla con el tomate, el pepino, la cebolla, las aceitunas y la albahaca.', 'Aliña con vinagre, aceite y sal y deja reposar 10 min.']]
    }
  },
  {
    id: 'it-insalata-riso', n: 'Ensalada de arroz a la italiana', e: '🍚', tipo: 'cena', tags: ['ligera', 'pescado', 'carne'],
    ing: [['arroz_largo', 300], ['atun', 2], ['huevo', 2], ['jamon_cocido', 100], ['queso_emmental', 100], ['tomate_cherry', 200], ['aceitunas', 60], ['pepinillos', 60], ['maiz', 1], ['aceite', 40], ['limon', 1], ['sal', 5]],
    m: {
      fuego: [30, ['Cuece el arroz en agua con sal 15 min, escúrrelo y enfríalo bajo el grifo.', 'Cuece los huevos 10 min y pícalos.', 'Mezcla el arroz con el atún, los huevos, el jamón y el queso en dados, los cherrys, las aceitunas, los pepinillos y el maíz.', 'Aliña con aceite, limón y sal y deja enfriar en la nevera.']]
    }
  },
  {
    id: 'it-piadina', n: 'Piadina de jamón, mozzarella y rúcula', e: '🌯', tipo: 'cena', tags: ['carne', 'rapida', 'niños'],
    ing: [['tortillas', 4], ['jamon_lonchas', 120], ['mozzarella', 200], ['rucula', 80], ['tomate', 200], ['aceite', 10]],
    m: {
      fuego: [15, ['Calienta las piadinas (o tortillas de trigo) en una sartén 30 seg por lado.', 'Cubre media piadina con mozzarella, jamón, rodajas de tomate y rúcula.', 'Dobla, vuelve a la sartén y dora 1 min por lado hasta que se funda el queso.']],
      airfryer: [12, ['Rellena y dobla las piadinas.', 'Úntalas con un poco de aceite.', 'Cocina 5 min a 190 °C.']]
    }
  },
  {
    id: 'it-calzone', n: 'Calzone de jamón y queso', e: '🥟', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['masa_pizza', 2], ['jamon_cocido', 200], ['mozzarella', 250], ['ricotta', 150], ['tomate_frito', 150], ['oregano', 1], ['aceite', 10]],
    m: {
      horno: [30, ['Precalienta el horno a 220 °C. Corta cada masa por la mitad y estírala en círculo.', 'Pon en una mitad de cada círculo tomate, ricotta, jamón, mozzarella y orégano.', 'Dobla, sella el borde presionando con un tenedor y pinta con aceite.', 'Hornea 15–18 min hasta que estén dorados.']],
      airfryer: [25, ['Prepara 4 calzones pequeños con la masa y el relleno.', 'Píntalos con aceite.', 'Cocina 10 min a 180 °C, en tandas.']]
    }
  },
  {
    id: 'it-pizza-prosciutto', n: 'Pizza de jamón y champiñones', e: '🍕', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['masa_pizza', 1], ['tomate_frito', 150], ['mozzarella', 200], ['jamon_cocido', 120], ['champinon', 150], ['oregano', 1], ['aceite', 10]],
    m: {
      horno: [25, ['Precalienta el horno a 230 °C.', 'Extiende la masa y cúbrela con tomate, mozzarella, jamón y champiñones laminados.', 'Hornea 12–14 min y termina con orégano y un hilo de aceite.']],
      airfryer: [20, ['Corta la masa en piezas que quepan en el cesto y cocínalas solas 3 min a 190 °C.', 'Añade los ingredientes.', 'Cocina 6 min más por pieza.']]
    }
  },
  {
    id: 'it-frittata-pasta', n: 'Frittata de espaguetis', e: '🍳', tipo: 'cena', tags: ['vegetariano', 'niños'],
    ing: [['espagueti', 250], ['huevo', 6], ['parmesano', 60], ['mozzarella', 120], ['leche', 50], ['perejil_fresco', 1], ['aceite', 30], ['sal', 5], ['pimienta', 1]],
    m: {
      fuego: [30, ['Cuece la pasta, escúrrela y deja que se temple (vale pasta sobrante).', 'Bate los huevos con la leche, el parmesano, el perejil, sal y pimienta y mezcla con la pasta y la mozzarella en dados.', 'Cuaja en sartén con aceite a fuego bajo tapado 8 min, dale la vuelta y cocina 5 min más.']],
      horno: [35, ['Prepara la mezcla de pasta y huevo.', 'Viértela en un molde engrasado.', 'Hornea 20 min a 190 °C.']],
      airfryer: [30, ['Prepara la mezcla de pasta y huevo.', 'Ponla en un molde apto engrasado.', 'Cocina 15 min a 170 °C.']]
    }
  },
  {
    id: 'it-uova-purgatorio', n: 'Huevos al purgatorio', e: '🍅', tipo: 'cena', tags: ['vegetariano', 'rapida', 'ligera'],
    ing: [['huevo', 8], ['tomate_triturado', 600], ['ajo', 2], ['guindilla', 1], ['albahaca', 1], ['parmesano', 30], ['pan_barra', 1], ['aceite', 30], ['sal', 4]],
    m: {
      fuego: [20, ['Dora el ajo y la guindilla en el aceite, añade el tomate y la sal y cuece 10 min.', 'Haz huecos en la salsa y casca un huevo en cada uno.', 'Tapa y cocina a fuego suave 5–6 min hasta que cuajen las claras.', 'Termina con parmesano y albahaca y sirve con pan.']],
      horno: [25, ['Prepara la salsa de tomate y pásala a una fuente.', 'Casca los huevos encima.', 'Hornea 10 min a 200 °C y termina con parmesano y albahaca.']]
    }
  },
  {
    id: 'it-pizzaiola', n: 'Filetes a la pizzaiola', e: '🥩', tipo: 'comida', tags: ['carne', 'rapida'],
    ing: [['ternera_filetes', 600], ['tomate_triturado', 400], ['ajo', 2], ['oregano', 2], ['alcaparras', 15], ['mozzarella', 120], ['patata', 600], ['aceite', 40], ['sal', 6]],
    m: {
      fuego: [30, ['Cuece las patatas en dados en agua con sal 15 min.', 'Sella los filetes salados en una sartén con aceite 1 min por lado y resérvalos.', 'En la misma sartén dora el ajo, añade el tomate, el orégano y las alcaparras y cuece 8 min.', 'Vuelve a poner la carne, cubre con mozzarella y tapa 3 min. Sirve con las patatas.']]
    }
  },
  {
    id: 'it-spezzatino', n: 'Spezzatino (estofado de ternera con patatas)', e: '🍲', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_guisar', 700], ['patata', 600], ['guisantes', 200], ['cebolla', 150], ['zanahoria', 150], ['apio', 60], ['tomate_concentrado', 30], ['vino_tinto', 150], ['caldo_carne', 500], ['romero', 1], ['aceite', 40], ['sal', 6]],
    m: {
      fuego: [100, ['Dora la carne salada en el aceite y resérvala.', 'Sofríe cebolla, zanahoria y apio picados 8 min, añade el concentrado y el vino y deja reducir.', 'Vuelve a poner la carne con el caldo y el romero, tapa y cuece 1 h a fuego suave.', 'Añade la patata en dados y los guisantes y cuece 25 min más.']],
      robot: [90, ['Pica cebolla, zanahoria y apio 5 seg/vel. 5 y sofríe con aceite 8 min/120 °C/vel. 1.', 'Añade la carne: 5 min/120 °C/giro inverso/vel. cuchara. Añade concentrado, vino, caldo y romero: 50 min/100 °C/giro inverso/vel. cuchara.', 'Añade patata y guisantes: 25 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'it-pasta-ricotta', n: 'Pasta con ricotta y espinacas', e: '🥬', tipo: 'comida', tags: ['vegetariano', 'rapida', 'niños'],
    ing: [['pasta_corta', 400], ['ricotta', 250], ['espinacas', 250], ['ajo', 1], ['parmesano', 50], ['limon', 1], ['nuez_moscada', 1], ['aceite', 20], ['sal', 5]],
    m: {
      fuego: [20, ['Cuece la pasta en agua con sal y guarda un vaso del agua.', 'Saltea el ajo y las espinacas con el aceite 2 min.', 'Mezcla la ricotta con el parmesano, la ralladura de limón, la nuez moscada y agua de cocción hasta tener una crema.', 'Junta la pasta con la crema y las espinacas.']],
      robot: [20, ['Pon 1,2 l de agua con sal: 10 min/100 °C/vel. 1. Añade la pasta y cuece el tiempo del paquete/100 °C/giro inverso/vel. cuchara. Escurre guardando agua.', 'Saltea ajo y espinacas con aceite 3 min/120 °C/giro inverso/vel. cuchara.', 'Añade ricotta, parmesano, ralladura, nuez moscada y la pasta y mezcla 30 seg/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'it-pappa-pomodoro', n: 'Pappa al pomodoro (sopa toscana de tomate y pan)', e: '🍅', tipo: 'cena', tags: ['vegetariano', 'ligera'],
    ing: [['tomate_triturado', 800], ['pan_barra', 1], ['ajo', 3], ['caldo_verduras', 700], ['albahaca', 1], ['aceite', 50], ['sal', 5], ['pimienta', 1]],
    m: {
      fuego: [30, ['Dora el ajo laminado en el aceite, añade el tomate y cuece 10 min.', 'Añade el caldo y el pan del día anterior en trozos y cuece 10 min removiendo hasta que el pan se deshaga.', 'Apaga, añade la albahaca y deja reposar 10 min. Sirve templada con un hilo de aceite.']],
      robot: [28, ['Sofríe el ajo con aceite 3 min/120 °C/vel. 1.', 'Añade tomate y caldo: 10 min/100 °C/vel. 1.', 'Añade el pan en trozos y la albahaca: 8 min/100 °C/vel. 2. Reposa 10 min.']]
    }
  },
  {
    id: 'it-cotoletta', n: 'Cotoletta alla milanese', e: '🥩', tipo: 'cena', tags: ['carne', 'niños'],
    ing: [['ternera_filetes', 600], ['huevo', 2], ['pan_rallado', 120], ['mantequilla', 60], ['limon', 1], ['rucula', 100], ['tomate_cherry', 250], ['aceite', 20], ['sal', 4]],
    m: {
      fuego: [25, ['Aplana bien los filetes, sálalos y pásalos por huevo batido y pan rallado, presionando.', 'Fríelos en la mantequilla con el aceite a fuego medio 2–3 min por lado hasta que estén dorados.', 'Sirve con rúcula, cherrys y gajos de limón.']],
      airfryer: [20, ['Empana los filetes y úntalos con un poco de aceite.', 'Cocina 8 min a 200 °C, girándolos a mitad.', 'Sirve con la ensalada y limón.']],
      horno: [25, ['Empana los filetes y colócalos en una bandeja con papel y un hilo de aceite.', 'Hornea 12 min a 220 °C, girándolos a mitad.', 'Sirve con la ensalada y limón.']]
    }
  }
]);
