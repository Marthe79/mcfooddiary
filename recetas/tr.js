/* MC Food Diary · cocina de Turquía 🇹🇷. Formato y normas: recetas/GUIA-RECETAS.md */

MC_ADD_ING({
  pul_biber: ['Copos de pimiento rojo (pul biber)', 'despensa', 20, 'kg', 0, 'pimentón dulce con una pizca de guindilla'],
  pasta_pimiento: ['Pasta de pimiento rojo (biber salçası)', 'despensa', 8, 'kg', 0, 'tomate concentrado con pimentón'],
  sucuk: ['Sucuk (embutido turco de ternera)', 'charcuteria', 15, 'kg', 0, 'chorizo'],
  sumac: ['Zumaque (sumac)', 'despensa', 25, 'kg', 0, 'ralladura de limón con una pizca de sal'],
  menta_seca: ['Hierbabuena seca', 'basicos', 0, 'kg', 1],
  caballa: ['Caballa', 'pescaderia', 6, 'kg'],
  melaza_granada: ['Melaza de granada', 'despensa', 12, 'l', 0, 'vinagre balsámico con un poco de miel']
});

MC_ADD('tr', [
  {
    id: 'tr-karniyarik', n: 'Karnıyarık (berenjenas rellenas de carne)', e: '🍆', tipo: 'comida', tags: ['carne'],
    ing: [['berenjena', 1000], ['carne_picada_ternera', 400], ['cebolla', 150], ['tomate', 300], ['pimiento_verde', 150], ['ajo', 3], ['tomate_concentrado', 20], ['pul_biber', 3], ['perejil_fresco', 1], ['aceite', 80], ['arroz_largo', 250], ['sal', 8]],
    m: {
      horno: [70, ['Pela las berenjenas a tiras, sálalas, pincélalas con aceite y ásalas enteras 25 min a 220 °C.', 'Sofríe la cebolla, el ajo y el pimiento con la carne 10 min; añade el tomate picado, el pul biber y sal y cocina 5 min.', 'Abre las berenjenas a lo largo, rellénalas y colócalas en una fuente con el concentrado diluido en 200 ml de agua.', 'Hornea 25 min a 190 °C. Sirve con perejil y arroz.']],
      fuego: [60, ['Fríe las berenjenas peladas a tiras hasta que estén blandas y escúrrelas.', 'Prepara el relleno de carne, verduras y especias.', 'Ábrelas, rellénalas, ponlas en una cazuela con el concentrado diluido, tapa y cuece 20 min. Sirve con arroz.']]
    }
  },
  {
    id: 'tr-imam-bayildi', n: 'İmam bayıldı (berenjenas rellenas de verduras)', e: '🍆', tipo: 'ambos', tags: ['vegetariano', 'ligera'],
    ing: [['berenjena', 1000], ['cebolla', 400], ['tomate', 500], ['ajo', 6], ['pimiento_verde', 150], ['perejil_fresco', 1], ['azucar', 5], ['limon', 1], ['aceite', 120], ['pan_barra', 1], ['sal', 7]],
    m: {
      horno: [75, ['Pela las berenjenas a tiras, sálalas 15 min, sécalas y dóralas con parte del aceite o ásalas 20 min a 220 °C.', 'Pocha la cebolla en juliana, el ajo laminado y el pimiento con el resto de aceite 15 min; añade el tomate picado, el azúcar, sal y perejil.', 'Abre las berenjenas, rellénalas, riega con limón y 150 ml de agua y hornea 35 min a 180 °C.', 'Se sirve templado o frío con pan.']],
      fuego: [70, ['Dora las berenjenas peladas a tiras con aceite.', 'Prepara el relleno de cebolla, ajo, pimiento y tomate.', 'Rellena, pon en una cazuela con 200 ml de agua y limón, tapa y cuece 35 min a fuego suave.']]
    }
  },
  {
    id: 'tr-iskender', n: 'İskender kebap', e: '🥙', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_filetes', 700], ['pan_pita', 4], ['yogur_griego', 3], ['tomate_triturado', 400], ['mantequilla', 60], ['ajo', 2], ['pul_biber', 3], ['oregano', 1], ['pimiento_verde', 150], ['aceite', 30], ['sal', 7]],
    m: {
      fuego: [35, ['Corta la ternera en láminas muy finas, alíñala con aceite, orégano y sal y saltéala a fuego fuerte en tandas.', 'Cuece el tomate con 20 g de mantequilla y sal 10 min.', 'Corta la pita en dados, tuéstala y colócala en los platos; pon encima la carne, la salsa de tomate y el yogur con ajo a un lado.', 'Calienta el resto de mantequilla con el pul biber hasta que chisporrotee y riega por encima. Acompaña con pimientos a la plancha.']],
      airfryer: [30, ['Cocina las láminas de ternera aliñadas 6 min a 200 °C.', 'Tuesta la pita en dados 4 min a 180 °C.', 'Monta con la salsa de tomate, el yogur y la mantequilla con pul biber.']]
    }
  },
  {
    id: 'tr-adana', n: 'Adana kebap (brochetas de cordero picante)', e: '🍢', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['cordero_picado', 700], ['pimiento_rojo', 100], ['pul_biber', 6], ['comino', 2], ['cebolla_morada', 200], ['sumac', 4], ['perejil_fresco', 1], ['tomate', 300], ['tortillas', 4], ['sal', 7]],
    m: {
      fuego: [30, ['Pica el pimiento muy fino y amásalo con la carne, el pul biber, el comino y sal 3 min.', 'Forma rulos largos alrededor de brochetas planas y hazlos en una plancha muy caliente 8–10 min, girándolos.', 'Aliña la cebolla en juliana con sumac y perejil.', 'Sirve sobre las tortillas calentadas con la cebolla y tomates asados.']],
      airfryer: [25, ['Prepara la carne y forma los rulos.', 'Cocina 10 min a 200 °C, girándolos a mitad.', 'Sirve con tortillas, cebolla al sumac y tomate.']],
      horno: [30, ['Forma los rulos sobre una bandeja con papel.', 'Hornea 12 min a 230 °C con grill los últimos minutos.', 'Sirve con tortillas, cebolla al sumac y tomate.']]
    }
  },
  {
    id: 'tr-izmir-kofte', n: 'İzmir köfte (albóndigas con patatas al horno)', e: '🥔', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['carne_picada', 600], ['pan_rallado', 50], ['huevo', 1], ['cebolla', 100], ['comino', 3], ['patata', 600], ['pimiento_verde', 200], ['tomate', 300], ['tomate_concentrado', 30], ['pasta_pimiento', 20], ['aceite', 50], ['sal', 8]],
    m: {
      horno: [60, ['Mezcla la carne con pan rallado, huevo, cebolla rallada, comino y sal; forma albóndigas alargadas.', 'Fríe o dora ligeramente las patatas en bastones gruesos y las albóndigas.', 'Colócalas en una fuente alternando con pimiento y tomate en rodajas.', 'Diluye el concentrado y la pasta de pimiento en 300 ml de agua caliente, viértelo y hornea 30 min a 200 °C.']],
      fuego: [50, ['Prepara y dora las albóndigas y las patatas.', 'Colócalas en una cazuela con pimiento y tomate.', 'Añade la salsa de tomate y pimiento, tapa y cuece 25 min.']]
    }
  },
  {
    id: 'tr-kuru-fasulye', n: 'Kuru fasulye (alubias blancas con carne)', e: '🫘', tipo: 'comida', tags: ['legumbres', 'carne'],
    ing: [['alubias', 800], ['ternera_guisar', 300], ['cebolla', 150], ['tomate_concentrado', 30], ['pasta_pimiento', 20], ['pul_biber', 3], ['mantequilla', 30], ['aceite', 20], ['arroz_largo', 250], ['sal', 7]],
    m: {
      fuego: [70, ['Dora la ternera en dados pequeños con aceite y mantequilla, añade la cebolla picada y rehoga 5 min.', 'Agrega el concentrado, la pasta de pimiento y el pul biber y 500 ml de agua; tapa y cuece 40 min.', 'Añade las alubias escurridas y cuece 15 min a fuego suave. Sirve con arroz.']],
      robot: [65, ['Sofríe la cebolla con aceite y mantequilla 5 min/120 °C/vel. 1.', 'Añade ternera, concentrado, pasta de pimiento, pul biber, sal y 400 ml de agua: 40 min/100 °C/giro inverso/vel. cuchara.', 'Añade las alubias: 12 min/100 °C/giro inverso/vel. cuchara. Sirve con arroz.']]
    }
  },
  {
    id: 'tr-mercimek-corbasi', n: 'Mercimek çorbası (crema de lentejas rojas)', e: '🥣', tipo: 'cena', tags: ['legumbres', 'vegetariano', 'ligera'],
    ing: [['lentejas_rojas', 300], ['cebolla', 150], ['zanahoria', 150], ['patata', 150], ['caldo_verduras', 1500], ['comino', 3], ['menta_seca', 2], ['pul_biber', 2], ['mantequilla', 30], ['limon', 2], ['sal', 6]],
    m: {
      fuego: [40, ['Rehoga la cebolla, la zanahoria y la patata picadas con la mitad de la mantequilla 5 min.', 'Añade las lentejas lavadas, el comino y el caldo y cuece 25 min.', 'Tritura hasta que quede fina.', 'Calienta el resto de mantequilla con menta y pul biber, riega la crema y sirve con limón.']],
      robot: [35, ['Trocea cebolla, zanahoria y patata 5 seg/vel. 5 y sofríe con mantequilla 5 min/120 °C/vel. 1.', 'Añade lentejas, comino y caldo: 25 min/100 °C/vel. 1.', 'Tritura 1 min/vel. 5-10 progresivo. Sirve con mantequilla con menta y pul biber y limón.']]
    }
  },
  {
    id: 'tr-manti', n: 'Mantı (raviolis de carne con yogur)', e: '🥟', tipo: 'comida', tags: ['carne'],
    ing: [['harina', 400], ['huevo', 2], ['carne_picada_ternera', 300], ['cebolla', 100], ['yogur_griego', 4], ['ajo', 2], ['mantequilla', 60], ['tomate_concentrado', 15], ['pul_biber', 3], ['menta_seca', 2], ['sal', 8]],
    m: {
      fuego: [80, ['Amasa la harina con los huevos, 120 ml de agua y sal; deja reposar 20 min.', 'Mezcla la carne con la cebolla rallada, sal y pimienta. Estira la masa muy fina, córtala en cuadrados de 3 cm, pon un poco de relleno y une las cuatro puntas.', 'Cuece los mantı en agua con sal 10 min.', 'Sírvelos con el yogur batido con ajo y riega con la mantequilla derretida con concentrado, pul biber y menta.']],
      horno: [80, ['Prepara los mantı y colócalos en una fuente engrasada.', 'Hornea 15 min a 200 °C hasta que se doren y cubre con 400 ml de agua caliente con sal; hornea 10 min más.', 'Sirve con yogur con ajo y mantequilla especiada.']]
    }
  },
  {
    id: 'tr-lahmacun', n: 'Lahmacun', e: '🫓', tipo: 'cena', tags: ['carne'],
    ing: [['masa_pizza', 2], ['carne_picada_ternera', 350], ['cebolla', 150], ['tomate', 200], ['pimiento_rojo', 100], ['tomate_concentrado', 30], ['pul_biber', 4], ['perejil_fresco', 1], ['limon', 2], ['lechuga', 1], ['aceite', 30], ['sal', 6]],
    m: {
      horno: [35, ['Tritura la cebolla, el tomate, el pimiento y la mitad del perejil y mézclalos con la carne, el concentrado, el pul biber, aceite y sal.', 'Divide la masa en 6 bases y estíralas muy finas.', 'Extiende una capa fina de carne y hornea 8–10 min a 250 °C en la parte baja.', 'Sirve con perejil, lechuga y limón para enrollar.']],
      airfryer: [40, ['Prepara la pasta de carne y verduras.', 'Estira bases pequeñas que quepan en la cesta y cúbrelas.', 'Cocina cada una 7 min a 200 °C. Sirve con perejil, lechuga y limón.']]
    }
  },
  {
    id: 'tr-pide-queso-huevo', n: 'Pide de queso y huevo', e: '🛶', tipo: 'cena', tags: ['vegetariano', 'niños'],
    ing: [['masa_pizza', 2], ['mozzarella', 250], ['queso_feta', 150], ['huevo', 4], ['tomate', 150], ['pimiento_verde', 100], ['mantequilla', 30], ['sal', 3]],
    m: {
      horno: [30, ['Divide la masa en 4 óvalos, cubre con las dos clases de queso y las verduras picadas, dejando borde.', 'Dobla los bordes hacia dentro y pellizca las puntas formando una barca.', 'Hornea 10 min a 240 °C, casca un huevo en cada una y hornea 4 min más.', 'Pinta los bordes con mantequilla derretida.']],
      airfryer: [35, ['Forma pides pequeñas que quepan en la cesta.', 'Cocina 7 min a 190 °C.', 'Añade el huevo y cocina 4 min más; pinta con mantequilla.']]
    }
  },
  {
    id: 'tr-menemen', n: 'Menemen (huevos con tomate y pimiento)', e: '🍳', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['huevo', 8], ['tomate', 600], ['pimiento_verde', 250], ['cebolla', 100], ['pul_biber', 2], ['queso_feta', 80], ['mantequilla', 30], ['aceite', 20], ['pan_barra', 1], ['sal', 4]],
    m: {
      fuego: [20, ['Pocha la cebolla y el pimiento picados con mantequilla y aceite 5 min.', 'Añade el tomate pelado y picado y cuece 6 min.', 'Agrega los huevos batidos con sal y remueve suavemente hasta que cuajen jugosos.', 'Termina con pul biber y feta desmenuzado. Sirve con pan.']],
      robot: [20, ['Sofríe cebolla y pimiento con aceite y mantequilla 5 min/120 °C/vel. 1.', 'Añade el tomate troceado: 6 min/100 °C/vel. 1.', 'Añade los huevos batidos: 4 min/90 °C/giro inverso/vel. cuchara. Termina con pul biber y feta.']]
    }
  },
  {
    id: 'tr-tavuk-sote', n: 'Tavuk sote (pollo salteado con pimientos)', e: '🍗', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['pollo_pechuga', 700], ['pimiento_verde', 200], ['pimiento_rojo', 150], ['cebolla', 150], ['tomate', 300], ['ajo', 2], ['pasta_pimiento', 20], ['pul_biber', 2], ['tomillo', 1], ['aceite', 40], ['arroz_largo', 250], ['sal', 6]],
    m: {
      fuego: [30, ['Saltea el pollo en dados con aceite a fuego fuerte 6 min y resérvalo.', 'En la misma sartén pocha la cebolla, el ajo y los pimientos 6 min.', 'Añade el tomate picado, la pasta de pimiento y las especias, vuelve el pollo y cuece 6 min. Sirve con arroz.']],
      robot: [30, ['Sofríe cebolla, ajo y pimientos con aceite 6 min/120 °C/vel. 1.', 'Añade pollo, tomate, pasta de pimiento, especias y sal: 12 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con arroz.']]
    }
  },
  {
    id: 'tr-nohutlu-pilav-pollo', n: 'Pilav con pollo y garbanzos', e: '🍚', tipo: 'comida', tags: ['carne', 'legumbres'],
    ing: [['pollo_muslos', 700], ['arroz_largo', 350], ['garbanzos', 400], ['fideos', 50], ['mantequilla', 40], ['caldo_pollo', 750], ['pimienta', 2], ['comino', 2], ['laurel', 1], ['yogur', 4], ['sal', 6]],
    m: {
      fuego: [50, ['Dora el pollo salpimentado con la mitad de la mantequilla y resérvalo.', 'Dora los fideos con el resto de mantequilla, añade el arroz lavado y rehoga 2 min.', 'Añade el caldo caliente, los garbanzos, el comino, el laurel y el pollo; tapa y cuece 18 min a fuego suave.', 'Reposa 10 min tapado con un paño y sirve con yogur.']],
      robot: [45, ['Dora fideos con mantequilla 4 min/120 °C/vel. 1; añade el arroz 2 min/120 °C/giro inverso/vel. cuchara.', 'Añade caldo, garbanzos, especias y sal y pon el pollo en el Varoma: 20 min/Varoma/giro inverso/vel. cuchara.', 'Reposa y sirve con yogur.']]
    }
  },
  {
    id: 'tr-etli-nohut', n: 'Etli nohut (garbanzos con ternera)', e: '🍲', tipo: 'comida', tags: ['legumbres', 'carne'],
    ing: [['garbanzos', 800], ['ternera_guisar', 400], ['cebolla', 150], ['tomate_concentrado', 30], ['pasta_pimiento', 20], ['tomate', 200], ['mantequilla', 20], ['aceite', 20], ['pul_biber', 2], ['arroz_largo', 250], ['sal', 7]],
    m: {
      fuego: [75, ['Dora la ternera en dados con aceite y mantequilla, añade la cebolla picada y rehoga 5 min.', 'Agrega el concentrado, la pasta de pimiento, el tomate rallado y 600 ml de agua; tapa y cuece 45 min.', 'Añade los garbanzos y el pul biber y cuece 15 min. Sirve con arroz.']],
      robot: [65, ['Sofríe la cebolla con aceite y mantequilla 5 min/120 °C/vel. 1.', 'Añade ternera, concentrado, pasta de pimiento, tomate, sal y 450 ml de agua: 45 min/100 °C/giro inverso/vel. cuchara.', 'Añade garbanzos y pul biber: 12 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'tr-turlu', n: 'Türlü (guiso de verduras con cordero)', e: '🥘', tipo: 'comida', tags: ['carne'],
    ing: [['cordero', 500], ['berenjena', 300], ['calabacin', 300], ['judias_verdes', 250], ['patata', 300], ['pimiento_verde', 150], ['tomate', 400], ['cebolla', 150], ['tomate_concentrado', 20], ['aceite', 50], ['sal', 8]],
    m: {
      fuego: [90, ['Dora el cordero en dados con aceite y la cebolla, añade el concentrado y 400 ml de agua y cuece tapado 40 min.', 'Añade las judías y la patata en trozos y cuece 15 min.', 'Agrega la berenjena, el calabacín, el pimiento y el tomate troceados y cuece 20 min más.']],
      horno: [100, ['Dora el cordero con la cebolla en una cazuela apta para horno.', 'Añade todas las verduras troceadas, el concentrado diluido en 300 ml de agua y sal.', 'Tapa y hornea 1 h 15 min a 180 °C.']]
    }
  },
  {
    id: 'tr-hunkar-begendi', n: 'Hünkar beğendi (ternera sobre crema de berenjena)', e: '👑', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_guisar', 700], ['cebolla', 150], ['tomate', 300], ['pimiento_verde', 100], ['berenjena', 1000], ['leche', 300], ['harina', 30], ['mantequilla', 50], ['queso_rallado', 60], ['aceite', 30], ['sal', 8]],
    m: {
      fuego: [100, ['Dora la ternera con aceite, añade la cebolla, el pimiento y el tomate picados y 400 ml de agua; cuece tapado 1 h 15 min.', 'Asa las berenjenas en el fuego o en el horno, pélalas y pícalas.', 'Haz una bechamel con mantequilla, harina y leche, añade la berenjena y el queso y cuece 5 min.', 'Sirve la crema de berenjena con la carne encima.']],
      robot: [90, ['Sofríe cebolla, pimiento y tomate con aceite 5 min/120 °C/vel. 1; añade ternera, sal y 300 ml de agua: 70 min/100 °C/giro inverso/vel. cuchara. Reserva.', 'Pon leche, harina, mantequilla y sal: 7 min/90 °C/vel. 4.', 'Añade la berenjena asada y el queso: 3 min/90 °C/vel. 4. Sirve con la carne.']]
    }
  },
  {
    id: 'tr-tas-kebabi', n: 'Tas kebabı (ternera guisada con tomate)', e: '🍲', tipo: 'comida', tags: ['carne'],
    ing: [['ternera_guisar', 800], ['cebolla', 250], ['tomate', 400], ['tomate_concentrado', 30], ['ajo', 3], ['pimienta', 2], ['tomillo', 1], ['mantequilla', 30], ['aceite', 20], ['arroz_largo', 250], ['fideos', 40], ['sal', 8]],
    m: {
      fuego: [100, ['Dora la ternera con aceite y mantequilla, añade cebolla y ajo picados y rehoga 5 min.', 'Agrega el concentrado, el tomate rallado, el tomillo y 600 ml de agua; tapa y cuece 1 h 20 min.', 'Sirve con arroz con fideos dorados.']],
      robot: [85, ['Sofríe cebolla y ajo con aceite y mantequilla 5 min/120 °C/vel. 1.', 'Añade ternera, tomate, concentrado, especias, sal y 400 ml de agua: 75 min/100 °C/giro inverso/vel. cuchara.', 'Sirve con arroz con fideos.']]
    }
  },
  {
    id: 'tr-orman-kebabi', n: 'Orman kebabı (cordero con guisantes y verduras)', e: '🌲', tipo: 'comida', tags: ['carne'],
    ing: [['cordero', 800], ['patata', 400], ['zanahoria', 250], ['guisantes', 250], ['cebolla', 200], ['tomate', 300], ['tomate_concentrado', 20], ['tomillo', 1], ['eneldo', 1], ['aceite', 40], ['sal', 8]],
    m: {
      fuego: [100, ['Dora el cordero con aceite y la cebolla picada 8 min.', 'Añade el concentrado, el tomate rallado y 600 ml de agua; tapa y cuece 1 h.', 'Agrega la patata y la zanahoria en dados y cuece 20 min; añade los guisantes los últimos 8 min. Termina con eneldo.']],
      robot: [90, ['Sofríe la cebolla con aceite 5 min/120 °C/vel. 1.', 'Añade cordero, tomate, concentrado, tomillo, sal y 400 ml de agua: 55 min/100 °C/giro inverso/vel. cuchara.', 'Añade patata, zanahoria y guisantes: 22 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'tr-coban-kavurma', n: 'Çoban kavurma (salteado de cordero y verduras)', e: '🥩', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['cordero', 600], ['pimiento_verde', 200], ['tomate', 300], ['cebolla', 150], ['ajo', 2], ['pul_biber', 3], ['tomillo', 1], ['mantequilla', 20], ['aceite', 30], ['pan_pita', 4], ['sal', 6]],
    m: {
      fuego: [30, ['Corta el cordero (pierna o paletilla deshuesada) en dados pequeños y saltéalo a fuego muy fuerte con aceite 8 min.', 'Añade la cebolla, el ajo y el pimiento y saltea 6 min.', 'Agrega el tomate en dados, la mantequilla, el pul biber, el tomillo y sal y saltea 4 min. Sirve con pita.']],
      airfryer: [25, ['Mezcla el cordero en dados con aceite, especias y sal y cocínalo 10 min a 200 °C.', 'Añade las verduras troceadas y cocina 8 min más, removiendo.', 'Sirve con pita.']]
    }
  },
  {
    id: 'tr-balik-bugulama', n: 'Balık buğulama (pescado estofado con verduras)', e: '🐟', tipo: 'cena', tags: ['pescado', 'ligera'],
    ing: [['lubina', 800], ['tomate', 400], ['pimiento_verde', 150], ['cebolla', 150], ['champinon', 200], ['ajo', 3], ['limon', 1], ['perejil_fresco', 1], ['laurel', 2], ['aceite', 50], ['sal', 6]],
    m: {
      fuego: [35, ['Pon en una cazuela ancha la cebolla en aros, el pimiento en tiras, el ajo laminado y los champiñones con el aceite.', 'Coloca encima los lomos de pescado con sal, rodajas de tomate y limón y el laurel.', 'Añade 150 ml de agua, tapa y cuece a fuego suave 20 min. Termina con perejil.']],
      horno: [35, ['Coloca las verduras en una fuente y el pescado encima con tomate y limón.', 'Riega con aceite y 100 ml de agua y tapa con aluminio.', 'Hornea 25 min a 190 °C. Termina con perejil.']],
      robot: [30, ['Pon en el vaso 500 ml de agua con laurel.', 'Coloca las verduras en el Varoma y el pescado con tomate y limón en la bandeja.', 'Cocina 20 min/Varoma/vel. 1. Riega con aceite y perejil.']]
    }
  },
  {
    id: 'tr-hamsi-tava', n: 'Hamsi tava (boquerones fritos a la turca)', e: '🐟', tipo: 'cena', tags: ['pescado', 'rapida'],
    ing: [['boquerones', 800], ['harina_maiz', 120], ['cebolla_morada', 150], ['perejil_fresco', 1], ['sumac', 2], ['limon', 2], ['aceite_girasol', 200], ['sal', 7]],
    m: {
      fuego: [25, ['Limpia los boquerones, ábrelos y quita la espina; sálalos.', 'Pásalos por harina de maíz y fríelos en abanico en una sartén con aceite caliente 2 min por lado.', 'Sirve con cebolla en juliana aliñada con perejil y sumac y limón.']],
      airfryer: [25, ['Reboza los boquerones en harina de maíz y pulverízalos con aceite.', 'Cocina 8 min a 200 °C en una sola capa.', 'Sirve con cebolla al sumac y limón.']]
    }
  },
  {
    id: 'tr-levrek-firin', n: 'Lubina al horno a la turca con patatas', e: '🐠', tipo: 'comida', tags: ['pescado'],
    ing: [['lubina', 1200], ['patata', 600], ['tomate', 300], ['pimiento_verde', 150], ['cebolla', 150], ['limon', 2], ['ajo', 3], ['eneldo', 1], ['pul_biber', 2], ['aceite', 60], ['sal', 7]],
    m: {
      horno: [55, ['Corta las patatas en rodajas finas y hornéalas con la cebolla, el ajo, aceite y sal 20 min a 200 °C.', 'Añade el tomate y el pimiento en rodajas y coloca las lubinas encima con limón, eneldo y pul biber.', 'Hornea 22 min a 200 °C.']],
      airfryer: [35, ['Cocina las patatas en rodajas finas con aceite 15 min a 190 °C.', 'Añade los lomos de lubina con tomate, limón y especias.', 'Cocina 10 min a 190 °C.']]
    }
  },
  {
    id: 'tr-midye-dolma', n: 'Mejillones rellenos de arroz especiado', e: '🦪', tipo: 'cena', tags: ['pescado'],
    ing: [['mejillones', 1500], ['arroz', 200], ['cebolla', 250], ['pinones', 30], ['pasas', 30], ['tomate_concentrado', 15], ['canela', 1], ['pimienta', 2], ['menta_seca', 1], ['aceite', 60], ['limon', 2], ['sal', 4]],
    m: {
      fuego: [60, ['Pocha la cebolla picada con aceite y piñones 8 min, añade el arroz, el concentrado, las especias, las pasas y 250 ml de agua y cuece 10 min (queda a medio hacer).', 'Abre en crudo los mejillones limpios con un cuchillo sin separar las valvas.', 'Rellénalos con una cucharadita de arroz, ciérralos y colócalos apretados en una olla.', 'Añade 200 ml de agua, tapa con un plato y cuece 20 min. Sirve frío o templado con limón.']],
      robot: [55, ['Sofríe cebolla y piñones con aceite 6 min/120 °C/vel. 1; añade arroz, especias, pasas y 250 ml de agua: 8 min/100 °C/giro inverso/vel. cuchara.', 'Rellena los mejillones y colócalos en el Varoma.', 'Pon 600 ml de agua en el vaso y cocina 20 min/Varoma/vel. 1. Sirve con limón.']]
    }
  },
  {
    id: 'tr-karides-guvec', n: 'Karides güveç (gambas en cazuela con queso)', e: '🦐', tipo: 'cena', tags: ['pescado', 'rapida'],
    ing: [['gambas', 600], ['tomate', 400], ['pimiento_verde', 200], ['champinon', 150], ['ajo', 4], ['pul_biber', 2], ['mozzarella', 150], ['mantequilla', 30], ['aceite', 20], ['pan_barra', 1], ['sal', 5]],
    m: {
      horno: [30, ['Saltea el ajo, el pimiento y los champiñones con aceite y mantequilla 5 min; añade el tomate picado y cocina 5 min.', 'Mezcla con las gambas y el pul biber y reparte en cazuelitas.', 'Cubre con mozzarella y gratina 10 min a 220 °C. Sirve con pan.']],
      fuego: [25, ['Prepara el sofrito de ajo, pimiento, champiñones y tomate.', 'Añade las gambas y el pul biber y cocina 3 min.', 'Cubre con el queso, tapa y deja que se funda 2 min.']]
    }
  },
  {
    id: 'tr-firin-makarna', n: 'Fırın makarna (macarrones al horno a la turca)', e: '🍝', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['macarron', 400], ['carne_picada_ternera', 350], ['cebolla', 150], ['pimiento_verde', 100], ['tomate', 300], ['pasta_pimiento', 20], ['leche', 500], ['huevo', 2], ['harina', 40], ['mantequilla', 40], ['mozzarella', 150], ['sal', 8]],
    m: {
      horno: [55, ['Cuece la pasta 2 min menos de lo indicado.', 'Sofríe la cebolla y el pimiento con la carne 8 min y añade el tomate picado, la pasta de pimiento y sal.', 'Haz una bechamel con la mantequilla, la harina y la leche y, fuera del fuego, añade los huevos batidos.', 'Mezcla la pasta con la carne y la mitad de la bechamel en una fuente, cubre con el resto y el queso y hornea 25 min a 200 °C.']],
      airfryer: [50, ['Prepara la pasta, la carne y la bechamel.', 'Monta en un molde que quepa en la freidora.', 'Cocina 15 min a 170 °C.']]
    }
  },
  {
    id: 'tr-mucver', n: 'Mücver (tortitas de calabacín y feta)', e: '🥒', tipo: 'cena', tags: ['vegetariano', 'rapida', 'niños'],
    ing: [['calabacin', 800], ['huevo', 3], ['queso_feta', 150], ['cebolleta', 2], ['eneldo', 2], ['hierbabuena', 1], ['harina', 100], ['aceite_girasol', 100], ['yogur_griego', 2], ['ajo', 1], ['sal', 5]],
    m: {
      fuego: [30, ['Ralla el calabacín, sálalo 10 min y escúrrelo apretando bien.', 'Mezcla con huevos, feta desmenuzado, cebolleta y hierbas picadas y la harina.', 'Fríe cucharadas de masa aplanadas en aceite 3 min por lado. Sirve con yogur con ajo.']],
      airfryer: [30, ['Prepara la masa y forma tortitas sobre papel.', 'Pulveriza con aceite y cocina 12 min a 190 °C, girándolas a mitad.', 'Sirve con yogur con ajo.']],
      horno: [35, ['Prepara la masa y forma tortitas en una bandeja con papel engrasado.', 'Hornea 20 min a 200 °C, girándolas a mitad.', 'Sirve con yogur con ajo.']]
    }
  },
  {
    id: 'tr-bulgur-pilavi', n: 'Bulgur pilavı con pimientos y tomate', e: '🌾', tipo: 'ambos', tags: ['vegetariano', 'rapida'],
    ing: [['bulgur', 350], ['cebolla', 150], ['pimiento_verde', 200], ['tomate', 300], ['pasta_pimiento', 30], ['caldo_verduras', 700], ['mantequilla', 30], ['aceite', 20], ['yogur', 4], ['sal', 6]],
    m: {
      fuego: [30, ['Pocha la cebolla y el pimiento picados con aceite y mantequilla 6 min.', 'Añade el tomate rallado y la pasta de pimiento y cocina 3 min.', 'Agrega el bulgur y el caldo caliente, tapa y cuece 15 min a fuego suave; reposa 10 min. Sirve con yogur.']],
      robot: [30, ['Sofríe cebolla y pimiento con aceite y mantequilla 6 min/120 °C/vel. 1.', 'Añade tomate, pasta de pimiento, bulgur, sal y 650 ml de caldo.', 'Cocina 14 min/100 °C/giro inverso/vel. cuchara y reposa 10 min.']]
    }
  },
  {
    id: 'tr-kisir', n: 'Kısır (ensalada de bulgur picante)', e: '🥗', tipo: 'cena', tags: ['vegetariano', 'ligera', 'rapida'],
    ing: [['bulgur', 250], ['tomate_concentrado', 20], ['pasta_pimiento', 20], ['cebolleta', 3], ['perejil_fresco', 2], ['hierbabuena', 1], ['tomate', 300], ['pepino', 200], ['limon', 2], ['melaza_granada', 20], ['pul_biber', 2], ['aceite', 60], ['lechuga', 1], ['sal', 5]],
    m: {
      sin: [30, ['Cubre el bulgur fino con 300 ml de agua hirviendo y tápalo 15 min.', 'Amásalo con el concentrado, la pasta de pimiento, el aceite, el pul biber y sal.', 'Añade cebolleta, hierbas, tomate y pepino picados, zumo de limón y melaza de granada.', 'Sirve sobre hojas de lechuga.']]
    }
  },
  {
    id: 'tr-cilbir', n: 'Çılbır (huevos escalfados con yogur)', e: '🥚', tipo: 'cena', tags: ['vegetariano', 'rapida', 'ligera'],
    ing: [['huevo', 8], ['yogur_griego', 4], ['ajo', 2], ['mantequilla', 50], ['pul_biber', 3], ['eneldo', 1], ['vinagre', 30], ['pan_barra', 1], ['sal', 4]],
    m: {
      fuego: [20, ['Mezcla el yogur a temperatura ambiente con el ajo machacado y sal y repártelo en platos.', 'Escalfa los huevos en agua con vinagre a punto de hervir 3 min.', 'Colócalos sobre el yogur, riega con la mantequilla derretida con pul biber y espolvorea eneldo. Sirve con pan.']]
    }
  },
  {
    id: 'tr-kiymali-pide', n: 'Pide de carne picada', e: '🛶', tipo: 'cena', tags: ['carne'],
    ing: [['masa_pizza', 2], ['carne_picada_ternera', 400], ['cebolla', 150], ['tomate', 200], ['pimiento_verde', 150], ['tomate_concentrado', 20], ['pul_biber', 3], ['perejil_fresco', 1], ['mantequilla', 30], ['aceite', 20], ['sal', 6]],
    m: {
      horno: [35, ['Sofríe la cebolla con aceite, añade la carne y dórala 5 min; agrega el tomate y el pimiento picados, el concentrado, el pul biber y sal y cocina 5 min.', 'Divide la masa en 4 óvalos, reparte la carne dejando borde y dobla los lados formando una barca.', 'Hornea 12 min a 240 °C y pinta los bordes con mantequilla. Sirve con perejil.']],
      airfryer: [35, ['Prepara el relleno y forma pides pequeñas.', 'Cocina 9 min a 190 °C cada una.', 'Pinta con mantequilla y sirve con perejil.']]
    }
  },
  {
    id: 'tr-patlican-musakka', n: 'Musaka turca de berenjena y carne', e: '🍆', tipo: 'comida', tags: ['carne'],
    ing: [['berenjena', 1000], ['carne_picada_ternera', 400], ['cebolla', 150], ['pimiento_verde', 150], ['tomate', 400], ['tomate_concentrado', 20], ['ajo', 2], ['pul_biber', 2], ['aceite', 80], ['arroz_largo', 250], ['sal', 8]],
    m: {
      horno: [70, ['Corta las berenjenas en rodajas gruesas, pincélalas con aceite y ásalas 20 min a 220 °C.', 'Sofríe la cebolla, el ajo y el pimiento con la carne 10 min; añade el tomate picado, el pul biber y sal.', 'Alterna en una fuente berenjena y carne, vierte el concentrado diluido en 250 ml de agua.', 'Hornea 30 min a 190 °C. Sirve con arroz.']],
      fuego: [60, ['Fríe la berenjena en rodajas y escúrrela.', 'Prepara la carne con verduras y tomate.', 'Monta por capas en una cazuela con el concentrado diluido, tapa y cuece 25 min. Sirve con arroz.']]
    }
  },
  {
    id: 'tr-kadinbudu-kofte', n: 'Kadınbudu köfte (albóndigas de carne y arroz rebozadas)', e: '🍖', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['carne_picada', 600], ['arroz', 100], ['cebolla', 150], ['queso_rallado', 60], ['huevo', 3], ['harina', 80], ['comino', 2], ['perejil_fresco', 1], ['aceite_girasol', 200], ['tomate', 300], ['lechuga', 1], ['sal', 7]],
    m: {
      fuego: [50, ['Cuece el arroz 12 min y escúrrelo. Sofríe la cebolla picada con la mitad de la carne 5 min.', 'Mezcla la carne cocinada con la cruda, el arroz, el queso, 1 huevo, comino, perejil y sal; forma albóndigas ovaladas.', 'Pásalas por harina y huevo batido y fríelas 4 min por lado. Sirve con ensalada.']],
      airfryer: [45, ['Prepara las albóndigas como en el fuego.', 'Rebózalas en harina y huevo y pulverízalas con aceite.', 'Cocina 14 min a 190 °C, girándolas a mitad.']]
    }
  },
  {
    id: 'tr-sulu-kofte', n: 'Sulu köfte (albóndigas en caldo con patata)', e: '🍲', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['carne_picada_ternera', 450], ['arroz', 60], ['cebolla', 150], ['patata', 400], ['zanahoria', 150], ['tomate_concentrado', 30], ['harina', 30], ['menta_seca', 2], ['pul_biber', 2], ['mantequilla', 20], ['limon', 1], ['sal', 8]],
    m: {
      fuego: [50, ['Mezcla la carne con el arroz crudo, la cebolla rallada y sal; forma bolitas pequeñas y pásalas por harina.', 'Hierve 1,4 l de agua con el concentrado, la patata y la zanahoria en dados 10 min.', 'Añade las albóndigas y cuece 20 min a fuego suave.', 'Dora la menta y el pul biber en mantequilla, viértelo en la sopa y sirve con limón.']],
      robot: [45, ['Forma las bolitas y colócalas en el Varoma.', 'Pon en el vaso 1,2 l de agua, concentrado, patata, zanahoria y sal: 25 min/Varoma/giro inverso/vel. cuchara.', 'Junta las albóndigas con el caldo y termina con mantequilla con menta.']]
    }
  },
  {
    id: 'tr-etli-kabak', n: 'Calabacín guisado con carne picada', e: '🥒', tipo: 'comida', tags: ['carne', 'ligera'],
    ing: [['calabacin', 1000], ['carne_picada_ternera', 300], ['cebolla', 150], ['tomate', 300], ['tomate_concentrado', 20], ['arroz', 50], ['eneldo', 1], ['menta_seca', 1], ['aceite', 30], ['yogur', 4], ['sal', 7]],
    m: {
      fuego: [45, ['Sofríe la cebolla picada con la carne y el aceite 8 min.', 'Añade el concentrado, el tomate rallado y el calabacín en medias lunas.', 'Agrega el arroz y 300 ml de agua, tapa y cuece 25 min. Sirve con eneldo, menta y yogur.']],
      robot: [40, ['Sofríe la cebolla y la carne con aceite 7 min/120 °C/giro inverso/vel. cuchara.', 'Añade calabacín, tomate, concentrado, arroz, sal y 250 ml de agua.', 'Cocina 25 min/100 °C/giro inverso/vel. cuchara. Sirve con hierbas y yogur.']]
    }
  },
  {
    id: 'tr-yayla-corbasi', n: 'Yayla çorbası (sopa de yogur, arroz y menta)', e: '🥣', tipo: 'cena', tags: ['vegetariano', 'ligera'],
    ing: [['arroz', 100], ['yogur', 6], ['huevo', 1], ['harina', 30], ['caldo_verduras', 1200], ['mantequilla', 30], ['menta_seca', 3], ['pul_biber', 1], ['sal', 5]],
    m: {
      fuego: [35, ['Cuece el arroz en el caldo 15 min.', 'Bate el yogur con el huevo y la harina, templa la mezcla con un cazo de caldo caliente y viértela en la olla removiendo.', 'Cuece 5 min a fuego suave sin dejar de remover.', 'Dora la menta y el pul biber en la mantequilla y riega la sopa.']],
      robot: [30, ['Pon el arroz y el caldo: 15 min/100 °C/vel. 1.', 'Añade el yogur batido con huevo y harina: 7 min/90 °C/vel. 2.', 'Sirve con la mantequilla con menta y pul biber.']]
    }
  },
  {
    id: 'tr-barbunya-pilaki', n: 'Barbunya pilaki (alubias rojas con verduras)', e: '🫘', tipo: 'ambos', tags: ['legumbres', 'vegetariano', 'rapida'],
    ing: [['alubias_rojas', 800], ['cebolla', 150], ['zanahoria', 150], ['patata', 200], ['ajo', 3], ['tomate', 300], ['tomate_concentrado', 15], ['perejil_fresco', 1], ['limon', 1], ['aceite', 80], ['sal', 6]],
    m: {
      fuego: [30, ['Pocha la cebolla, el ajo y la zanahoria en dados con el aceite 6 min.', 'Añade la patata en dados, el tomate rallado, el concentrado y 300 ml de agua y cuece 15 min.', 'Agrega las alubias y cuece 5 min. Se sirve templado o frío con perejil y limón.']],
      robot: [28, ['Sofríe cebolla, ajo y zanahoria con aceite 6 min/120 °C/vel. 1.', 'Añade patata, tomate, concentrado, sal y 250 ml de agua: 14 min/100 °C/giro inverso/vel. cuchara.', 'Añade las alubias: 4 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'tr-zeytinyagli-pirasa', n: 'Puerros con zanahoria y arroz al aceite', e: '🥬', tipo: 'ambos', tags: ['vegetariano', 'ligera'],
    ing: [['puerro', 6], ['zanahoria', 250], ['arroz', 60], ['limon', 1], ['azucar', 5], ['aceite', 80], ['yogur', 4], ['sal', 6]],
    m: {
      fuego: [40, ['Corta los puerros en rodajas al bies y la zanahoria en rodajas.', 'Rehógalos con el aceite 8 min.', 'Añade el arroz, el azúcar, sal, el zumo de limón y 350 ml de agua; tapa y cuece 20 min. Se sirve templado con yogur.']],
      robot: [35, ['Rehoga puerro y zanahoria con aceite 8 min/120 °C/giro inverso/vel. cuchara.', 'Añade arroz, azúcar, sal, limón y 300 ml de agua.', 'Cocina 20 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'tr-ispanak-yemegi', n: 'Espinacas guisadas con carne y arroz', e: '🥬', tipo: 'comida', tags: ['carne', 'ligera'],
    ing: [['espinacas', 800], ['carne_picada_ternera', 250], ['cebolla', 150], ['arroz', 60], ['tomate_concentrado', 20], ['aceite', 30], ['yogur_griego', 3], ['ajo', 1], ['sal', 6]],
    m: {
      fuego: [35, ['Sofríe la cebolla picada con la carne y el aceite 8 min; añade el concentrado.', 'Agrega las espinacas troceadas, el arroz y 250 ml de agua.', 'Tapa y cuece 18 min. Sirve con yogur con ajo.']],
      robot: [30, ['Sofríe la cebolla y la carne con aceite 7 min/120 °C/giro inverso/vel. cuchara.', 'Añade concentrado, espinacas, arroz, sal y 200 ml de agua.', 'Cocina 18 min/100 °C/giro inverso/vel. cuchara. Sirve con yogur con ajo.']]
    }
  },
  {
    id: 'tr-kiymali-patates', n: 'Patatas guisadas con carne picada', e: '🥔', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['patata', 900], ['carne_picada', 350], ['cebolla', 150], ['pimiento_verde', 150], ['tomate_concentrado', 30], ['pasta_pimiento', 20], ['pul_biber', 1], ['aceite', 40], ['perejil_fresco', 1], ['sal', 8]],
    m: {
      fuego: [45, ['Sofríe la cebolla y el pimiento con el aceite, añade la carne y dórala 6 min.', 'Agrega el concentrado, la pasta de pimiento y las patatas en dados.', 'Cubre con 500 ml de agua, tapa y cuece 25 min. Termina con perejil.']],
      horno: [55, ['Mezcla en una fuente las patatas en dados con la carne sofrita con verduras.', 'Añade el concentrado y la pasta de pimiento diluidos en 400 ml de agua.', 'Tapa y hornea 40 min a 200 °C.']],
      robot: [40, ['Sofríe cebolla, pimiento y carne con aceite 8 min/120 °C/giro inverso/vel. cuchara.', 'Añade concentrado, pasta, patatas, sal y 400 ml de agua.', 'Cocina 25 min/100 °C/giro inverso/vel. cuchara.']]
    }
  },
  {
    id: 'tr-balik-ekmek', n: 'Balık ekmek (bocadillo de caballa)', e: '🥖', tipo: 'cena', tags: ['pescado', 'rapida'],
    ing: [['caballa', 800], ['pan_barra', 2], ['cebolla_morada', 150], ['lechuga', 1], ['tomate', 200], ['sumac', 3], ['perejil_fresco', 1], ['limon', 2], ['aceite', 30], ['sal', 5]],
    m: {
      fuego: [25, ['Pide los filetes de caballa limpios; salpimiéntalos y hazlos a la plancha con aceite 3 min por lado.', 'Aliña la cebolla en juliana con sumac y perejil.', 'Rellena el pan con lechuga, tomate, la caballa y la cebolla y riega con limón.']],
      airfryer: [20, ['Pincela los filetes de caballa con aceite y sal.', 'Cocina 8 min a 200 °C.', 'Monta el bocadillo con lechuga, tomate, cebolla al sumac y limón.']],
      horno: [25, ['Coloca los filetes en una bandeja con aceite.', 'Hornea con grill 8 min a 230 °C.', 'Monta el bocadillo con las verduras y limón.']]
    }
  },
  {
    id: 'tr-sucuklu-yumurta', n: 'Huevos con sucuk', e: '🍳', tipo: 'cena', tags: ['carne', 'rapida'],
    ing: [['sucuk', 200], ['huevo', 8], ['tomate', 300], ['pimiento_verde', 150], ['pepino', 200], ['aceitunas', 60], ['pan_barra', 1], ['sal', 2]],
    m: {
      fuego: [15, ['Corta el sucuk en rodajas finas y dóralo en una sartén sin aceite 2 min.', 'Casca los huevos encima y cocina tapado 4 min, hasta que cuaje la clara.', 'Sirve con tomate, pimiento y pepino en rodajas, aceitunas y pan.']],
      horno: [15, ['Reparte el sucuk en rodajas en cazuelitas y hornea 4 min a 220 °C.', 'Casca los huevos encima y hornea 6 min.', 'Sirve con verduras, aceitunas y pan.']]
    }
  },
  {
    id: 'tr-piyaz', n: 'Piyaz (ensalada de alubias con huevo)', e: '🥗', tipo: 'cena', tags: ['legumbres', 'vegetariano', 'ligera', 'rapida'],
    ing: [['alubias', 800], ['cebolla_morada', 150], ['tomate', 300], ['huevo', 4], ['perejil_fresco', 2], ['sumac', 3], ['pul_biber', 1], ['vinagre', 30], ['limon', 1], ['aceite', 60], ['sal', 5]],
    m: {
      sin: [20, ['Escurre y enjuaga las alubias.', 'Mézclalas con la cebolla en juliana amasada con sumac, el tomate en dados y el perejil picado.', 'Aliña con aceite, vinagre, limón, pul biber y sal y sirve con huevo duro en cuartos.']],
      fuego: [20, ['Cuece los huevos 10 min.', 'Prepara la ensalada de alubias con cebolla, tomate y perejil.', 'Aliña y sirve con los huevos.']]
    }
  },
  {
    id: 'tr-mercimek-koftesi', n: 'Mercimek köftesi (croquetas de lentejas y bulgur)', e: '🧆', tipo: 'cena', tags: ['legumbres', 'vegetariano'],
    ing: [['lentejas_rojas', 250], ['bulgur', 200], ['cebolla', 200], ['tomate_concentrado', 30], ['pasta_pimiento', 30], ['comino', 3], ['pul_biber', 3], ['cebolleta', 3], ['perejil_fresco', 2], ['limon', 2], ['lechuga', 1], ['aceite', 60], ['sal', 7]],
    m: {
      fuego: [50, ['Cuece las lentejas en 750 ml de agua 15 min; apaga, añade el bulgur, tapa y deja 15 min.', 'Pocha la cebolla picada con el aceite y las pastas de tomate y pimiento 6 min.', 'Mézclalo todo con especias, cebolleta, perejil, limón y sal y amasa.', 'Forma croquetas alargadas apretando con la mano. Sírvelas frías con hojas de lechuga y limón.']],
      robot: [45, ['Pon lentejas y 700 ml de agua: 15 min/100 °C/vel. 1; añade el bulgur y reposa 15 min. Reserva.', 'Sofríe la cebolla con aceite y pastas 6 min/120 °C/vel. 1.', 'Añade lentejas, especias, hierbas, limón y sal: 30 seg/giro inverso/vel. 3. Forma las croquetas.']]
    }
  },
  {
    id: 'tr-firinda-tavuk', n: 'Pollo al horno con pasta de pimiento y patatas', e: '🍗', tipo: 'comida', tags: ['carne', 'niños'],
    ing: [['pollo_muslos', 1000], ['patata', 700], ['pimiento_verde', 200], ['cebolla', 150], ['tomate', 300], ['pasta_pimiento', 40], ['yogur', 1], ['ajo', 3], ['tomillo', 1], ['pul_biber', 2], ['aceite', 50], ['sal', 8]],
    m: {
      horno: [65, ['Marina el pollo con la pasta de pimiento, el yogur, el ajo, las especias, aceite y sal 15 min.', 'Pon en una fuente las patatas en gajos, la cebolla, el pimiento y el tomate y el pollo encima.', 'Hornea 50 min a 200 °C, girando el pollo a mitad.']],
      airfryer: [45, ['Marina el pollo 15 min.', 'Cocina las patatas 10 min a 190 °C.', 'Añade pollo y verduras y cocina 25 min, girando a mitad.']]
    }
  },
  {
    id: 'tr-beyti', n: 'Beyti (rollos de carne en tortilla con tomate y yogur)', e: '🌯', tipo: 'cena', tags: ['carne'],
    ing: [['carne_picada_ternera', 600], ['ajo', 3], ['pul_biber', 4], ['comino', 2], ['tortillas', 4], ['tomate_triturado', 300], ['mantequilla', 40], ['yogur_griego', 3], ['perejil_fresco', 1], ['sal', 7]],
    m: {
      horno: [40, ['Amasa la carne con el ajo picado, el pul biber, el comino, el perejil y sal; forma 4 rulos y hazlos a la plancha 8 min.', 'Envuelve cada rulo en una tortilla y córtalos en rodajas gruesas.', 'Colócalos en una fuente, cubre con el tomate cocido con la mitad de la mantequilla y hornea 8 min a 200 °C.', 'Sirve con yogur y el resto de mantequilla derretida.']],
      fuego: [35, ['Forma y cocina los rulos de carne en la plancha.', 'Envuélvelos en tortilla, córtalos y pásalos por la sartén 1 min por lado.', 'Sirve con salsa de tomate, yogur y mantequilla.']]
    }
  },
  {
    id: 'tr-kuzu-tandir', n: 'Cordero asado lento con bulgur', e: '🍖', tipo: 'comida', tags: ['carne'],
    ing: [['cordero', 1400], ['ajo', 6], ['tomillo', 2], ['comino', 3], ['pul_biber', 3], ['bulgur', 300], ['cebolla', 150], ['tomate', 300], ['caldo_verduras', 600], ['aceite', 40], ['sal', 10]],
    m: {
      horno: [200, ['Unta el cordero (paletilla o trozos grandes) con ajo, especias, aceite y sal.', 'Ponlo en una fuente con 300 ml de agua, tapa bien y hornea 3 h a 150 °C.', 'Destapa y dora 15 min a 210 °C.', 'Prepara bulgur pilav con la cebolla y el tomate sofritos y el caldo (15 min) y sirve juntos.']],
      fuego: [160, ['Dora el cordero especiado en una olla de fondo grueso.', 'Añade 400 ml de agua, tapa y cuece a fuego mínimo 2 h 30 min.', 'Sirve con bulgur pilav con tomate.']]
    }
  },
  {
    id: 'tr-gozleme', n: 'Gözleme de espinacas y queso', e: '🫓', tipo: 'cena', tags: ['vegetariano', 'niños'],
    ing: [['harina', 400], ['yogur', 1], ['espinacas', 400], ['queso_feta', 200], ['mozzarella', 100], ['cebolla', 100], ['mantequilla', 40], ['aceite', 20], ['sal', 6]],
    m: {
      fuego: [50, ['Amasa la harina con el yogur, el aceite, sal y 180 ml de agua templada; reposa 20 min.', 'Saltea las espinacas con la cebolla picada hasta que se reduzcan, escurre y mezcla con los quesos.', 'Divide la masa en 4, estírala muy fina, rellena media mitad y dobla.', 'Hazlas en una sartén sin aceite 3 min por lado y pinta con mantequilla.']]
    }
  },
  {
    id: 'tr-sigara-boregi', n: 'Sigara böreği (rollitos de feta) con ensalada', e: '🧀', tipo: 'cena', tags: ['vegetariano', 'rapida'],
    ing: [['masa_filo', 1], ['queso_feta', 300], ['perejil_fresco', 1], ['eneldo', 1], ['huevo', 1], ['aceite_girasol', 150], ['tomate', 300], ['pepino', 300], ['pimiento_verde', 100], ['aceite', 30], ['sal', 3]],
    m: {
      fuego: [30, ['Mezcla el feta desmenuzado con el huevo y las hierbas.', 'Corta la filo en triángulos, pon un poco de relleno en la base y enrolla como un cigarro, sellando la punta con agua.', 'Fríelos en aceite caliente 2 min, hasta dorarlos. Sirve con ensalada de tomate, pepino y pimiento.']],
      airfryer: [25, ['Prepara los rollitos.', 'Pincélalos con aceite y cocina 8 min a 190 °C.', 'Sirve con la ensalada.']],
      horno: [30, ['Prepara los rollitos y colócalos en una bandeja.', 'Pincela con aceite y hornea 15 min a 200 °C.', 'Sirve con la ensalada.']]
    }
  },
  {
    id: 'tr-ezogelin', n: 'Ezogelin çorbası (sopa de lentejas, bulgur y menta)', e: '🍲', tipo: 'cena', tags: ['legumbres', 'vegetariano'],
    ing: [['lentejas_rojas', 250], ['bulgur', 60], ['arroz', 40], ['cebolla', 150], ['tomate_concentrado', 30], ['pasta_pimiento', 20], ['caldo_verduras', 1600], ['menta_seca', 3], ['pul_biber', 2], ['mantequilla', 30], ['limon', 2], ['sal', 6]],
    m: {
      fuego: [45, ['Pocha la cebolla picada en la mantequilla 5 min, añade el concentrado y la pasta de pimiento.', 'Agrega las lentejas, el bulgur, el arroz y el caldo y cuece 30 min removiendo de vez en cuando.', 'Añade la menta y el pul biber, cuece 2 min y sirve con limón. No se tritura.']],
      robot: [40, ['Sofríe la cebolla con mantequilla 5 min/120 °C/vel. 1; añade las pastas.', 'Añade lentejas, bulgur, arroz, sal y 1,4 l de caldo: 30 min/100 °C/giro inverso/vel. cuchara.', 'Añade menta y pul biber y sirve con limón.']]
    }
  },
  {
    id: 'tr-patlican-kebabi', n: 'Kebab de berenjena y köfte al horno', e: '🍆', tipo: 'comida', tags: ['carne'],
    ing: [['berenjena', 800], ['carne_picada', 500], ['cebolla', 100], ['pan_rallado', 30], ['comino', 2], ['tomate', 400], ['pimiento_verde', 200], ['tomate_concentrado', 20], ['aceite', 40], ['pan_pita', 4], ['sal', 8]],
    m: {
      horno: [60, ['Corta la berenjena en rodajas gruesas sin pelar y sálalas.', 'Mezcla la carne con la cebolla rallada, el pan rallado, el comino y sal y forma medallones del tamaño de la berenjena.', 'Alterna en una fuente berenjena, köfte y tomate en rodajas, con pimientos alrededor.', 'Vierte el concentrado diluido en 200 ml de agua y aceite y hornea 45 min a 200 °C. Sirve con pita.']],
      airfryer: [45, ['Prepara las rodajas de berenjena y los medallones.', 'Alterna en un molde con tomate y pimiento y riega con aceite.', 'Cocina 30 min a 180 °C.']]
    }
  }
]);
