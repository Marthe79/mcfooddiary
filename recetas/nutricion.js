/* MC Food Diary · valores nutricionales orientativos por ingrediente.
   [kcal, proteínas g, hidratos g, grasas g] por 100 g (o 100 ml si el precio es por litro).
   Quinto valor, solo para ingredientes por unidades: gramos que se usan por unidad.
   Pescado entero y marisco con concha: valores por 100 g comprados (ya descontada la parte que no se come).
   Fuente: valores medios de tablas de composición (BEDCA, USDA). Son estimaciones, no análisis. */

window.MC_NUTRI = {
  pollo_pechuga: [110, 23, 0, 1.5], pollo_muslos: [160, 19, 0, 9], pollo_alitas: [200, 18, 0, 14], pollo_entero: [190, 18, 0, 13],
  pavo_pechuga: [105, 24, 0, 1], pavo_picado: [150, 19, 0, 8], carne_picada: [230, 18, 0, 17], carne_picada_ternera: [200, 19, 0, 14],
  ternera_filetes: [130, 21, 0, 5], ternera_guisar: [150, 20, 0, 7.5], ternera_entrecot: [210, 20, 0, 14], redondo_ternera: [120, 22, 0, 3.5],
  ternera_solomillo: [130, 22, 0, 4.5], ternera_falda: [220, 19, 0, 16], costilla_ternera: [300, 17, 0, 26], ossobuco: [120, 17, 0, 6], higado: [135, 20, 4, 3.6],
  cerdo_lomo: [145, 21, 0, 6.5], cerdo_solomillo: [120, 21, 0, 3.5], cerdo_guisar: [150, 20, 0, 8], chuletas_cerdo: [230, 18, 0, 17],
  cerdo_costillas: [280, 17, 0, 24], cerdo_picado: [260, 17, 0, 21], aguja_cerdo: [220, 18, 0, 16], panceta_fresca: [500, 9, 0, 53], codillo: [160, 13, 0, 12],
  cordero: [230, 17, 0, 18], cordero_picado: [280, 17, 0, 23], conejo: [130, 21, 0, 5], magret: [340, 15, 0, 30], pato_muslos: [250, 15, 0, 21],
  salchichas: [300, 14, 2, 26], salchichas_frankfurt: [270, 12, 2, 24], salchicha_ahumada: [300, 13, 2, 27], merguez: [300, 15, 2, 26], chorizo_fresco: [300, 16, 1, 26],
  chorizo: [450, 24, 2, 38], jamon: [240, 30, 0, 13], jamon_lonchas: [240, 30, 0, 13], jamon_cocido: [110, 18, 1.5, 3.5], bacon: [400, 14, 1, 38],
  panceta: [400, 14, 0, 38], morcilla: [380, 15, 5, 34], lacon: [220, 20, 0, 15], kassler: [150, 20, 1, 7], pastrami: [150, 22, 2, 6], sucuk: [450, 20, 2, 40],

  salmon: [200, 20, 0, 13], salmon_ahumado: [180, 23, 0, 10], merluza: [80, 17, 0, 1.5], bacalao: [75, 17, 0, 0.5], pescado_blanco: [75, 17, 0, 0.8],
  rape: [70, 15, 0, 1], cazon: [85, 18, 0, 1], pez_espada: [120, 20, 0, 4.5], atun_fresco: [140, 23, 0, 5], eglefino_ahumado: [100, 23, 0, 0.8],
  dorada: [65, 10, 0, 2.5], lubina: [55, 10, 0, 1.5], sardinas: [110, 12, 0, 7], boquerones: [85, 14, 0, 3], jurel: [75, 11, 0, 3], caballa: [120, 11, 0, 8.5],
  trucha: [70, 12, 0, 2.5], gallo: [35, 8, 0, 0.5], arenque: [200, 17, 0, 14],
  gambas: [90, 19, 0.5, 1.5], langostinos: [50, 10, 0, 0.7], langostinos_crudos: [45, 10, 0, 0.6], calamar: [80, 15, 1, 1.5], sepia: [75, 16, 0.7, 0.7],
  pulpo: [90, 18, 1, 1], mejillones: [22, 3, 1, 0.6], almejas: [15, 2.5, 0.6, 0.2], mezcla_marisco: [75, 14, 2, 1.2], surimi: [100, 7, 15, 1],
  atun: [200, 25, 0, 11, 65], anchoas: [210, 29, 0, 10, 30],

  huevo: [145, 12.5, 0.7, 10, 60], leche: [63, 3.2, 4.7, 3.6], leche_evaporada: [135, 6.8, 10, 7.5], nata: [190, 2.5, 4, 18],
  yogur: [62, 3.8, 4.7, 3.2, 125], yogur_griego: [120, 4, 4, 10, 125], queso_batido: [50, 8, 4, 0.2], mantequilla: [740, 0.7, 0.6, 82],
  queso_rallado: [390, 28, 2, 30], mozzarella: [250, 18, 2, 19], queso_fresco: [175, 12, 3, 13], queso_feta: [265, 14, 4, 21], ricotta: [175, 11, 3, 13],
  mascarpone: [430, 4.5, 4, 44], queso_cheddar: [400, 25, 1, 33], queso_curado: [420, 28, 0.5, 35], queso_cabra: [300, 18, 1, 25], queso_crema: [250, 6, 4, 24],
  queso_lonchas: [330, 22, 1, 27], queso_emmental: [380, 28, 0, 30], parmesano: [390, 35, 0, 28], queso_azul: [350, 21, 1, 29], queso_brie: [330, 20, 0.5, 28],
  queso_provolone: [350, 26, 2, 27], queso_halloumi: [320, 21, 2, 25], paneer: [320, 20, 3, 25], tofu: [120, 13, 2, 7],

  patata: [80, 2, 17, 0.1], boniato: [86, 1.6, 20, 0.1], yuca: [160, 1.4, 38, 0.3], platano_macho: [120, 1.3, 31, 0.4],
  cebolla: [40, 1.2, 8, 0.2], cebolla_morada: [40, 1.2, 9, 0.1], chalota: [72, 2.5, 17, 0.1], ajo: [140, 6, 30, 0.5, 4], cebolleta: [32, 1.8, 7, 0.2, 60],
  puerro: [61, 1.5, 14, 0.3, 150], tomate: [20, 0.9, 3.5, 0.2], tomate_cherry: [22, 0.9, 4, 0.2], pimiento_rojo: [30, 1, 6, 0.3], pimiento_verde: [20, 0.9, 4, 0.2],
  calabacin: [17, 1.2, 3, 0.3], berenjena: [25, 1, 5, 0.2], zanahoria: [40, 0.9, 9, 0.2], champinon: [22, 3, 3, 0.3], setas: [25, 3, 3.5, 0.3],
  setas_shiitake: [34, 2.2, 7, 0.5], espinacas: [23, 2.9, 3.6, 0.4], espinacas_congeladas: [25, 3, 3, 0.4], acelgas: [20, 1.8, 3.7, 0.2], brocoli: [34, 2.8, 7, 0.4],
  coliflor: [25, 1.9, 5, 0.3], repollo: [25, 1.3, 6, 0.1], lombarda: [30, 1.4, 7, 0.2], col_rizada: [50, 4.3, 9, 0.9], col_china: [16, 1.2, 3.2, 0.2],
  pak_choi: [13, 1.5, 2.2, 0.2], coles_bruselas: [43, 3.4, 9, 0.3], grelos: [30, 3, 5, 0.3], lechuga: [15, 1.3, 2.9, 0.2, 400], rucula: [25, 2.6, 3.7, 0.7],
  endivias: [17, 1.3, 3.4, 0.1], pepino: [15, 0.7, 3.6, 0.1], calabaza: [26, 1, 6.5, 0.1], judias_verdes: [31, 1.8, 7, 0.2], alcachofa: [20, 1.3, 4, 0.1],
  esparragos: [20, 2.2, 3.9, 0.1, 250], esparragos_blancos: [18, 1.8, 2.5, 0.1], apio: [16, 0.7, 3, 0.2], hinojo: [31, 1.2, 7, 0.2], nabo: [28, 0.9, 6, 0.1],
  rabanitos: [16, 0.7, 3.4, 0.1], daikon: [18, 0.6, 4, 0.1], remolacha: [44, 1.7, 10, 0.2], brotes_soja: [30, 3, 6, 0.2], quimbombo: [33, 1.9, 7, 0.2],
  molokhia: [34, 4.6, 6, 0.3], nopales: [15, 1.3, 3, 0.1], tomatillo: [32, 1, 6, 1], guindilla_fresca: [40, 1.9, 9, 0.4], jengibre: [80, 1.8, 18, 0.8],
  aguacate: [160, 2, 8.5, 15, 150], guisantes: [80, 5.4, 14, 0.4], habas: [80, 7, 12, 0.5], edamame: [120, 11, 9, 5], verduras_congeladas: [45, 2.5, 7, 0.5],
  maiz: [85, 3, 15, 1.2, 140], mazorca: [96, 3.4, 21, 1.5, 150], maiz_blanco: [90, 2.5, 18, 1],
  perejil_fresco: [36, 3, 6, 0.8, 30], cilantro: [23, 2.1, 3.7, 0.5, 30], albahaca: [23, 3, 2.6, 0.6, 20], hierbabuena: [44, 3.3, 8, 0.7, 30],
  cebollino: [30, 3.3, 4, 0.7, 20], hierba_limon: [99, 1.8, 25, 0.5, 20],
  limon: [29, 1.1, 9, 0.3, 100], lima: [30, 0.7, 10, 0.2, 60], manzana: [52, 0.3, 14, 0.2], pera: [57, 0.4, 15, 0.1], platano: [90, 1.1, 23, 0.3],
  naranja: [47, 0.9, 12, 0.1], pomelo: [42, 0.8, 11, 0.1], mango: [60, 0.8, 15, 0.4, 250], membrillo: [57, 0.4, 15, 0.1], limon_confitado: [30, 1, 7, 0.5],
  pina: [60, 0.4, 15, 0.1, 340],

  arroz: [350, 7, 78, 0.6], arroz_largo: [350, 7, 78, 0.6], arroz_basmati: [350, 8, 78, 0.6], arroz_risotto: [350, 7, 79, 0.6], arroz_sushi: [350, 7, 78, 0.6],
  arroz_jazmin: [350, 7, 79, 0.6], espagueti: [355, 12.5, 71, 1.5], macarron: [355, 12.5, 71, 1.5], pasta_corta: [355, 12.5, 71, 1.5], fideos: [355, 12.5, 71, 1.5],
  tallarines: [355, 12.5, 71, 1.5], fideua: [355, 12.5, 71, 1.5], canelones: [355, 12.5, 71, 1.5], placas_lasana: [355, 12.5, 71, 1.5], orzo: [355, 12.5, 71, 1.5],
  pasta_rellena: [270, 11, 40, 7], gnocchi: [160, 3.5, 33, 0.5, 500], noodles: [370, 13, 70, 3], fideos_arroz: [360, 6, 82, 0.6], udon: [130, 3.5, 27, 0.4],
  soba: [330, 14, 70, 1], cuscus: [360, 12.5, 72, 1.1], cuscus_perla: [360, 12, 73, 1.5], bulgur: [342, 12, 76, 1.3], freekeh: [350, 13, 70, 2.5],
  quinoa: [368, 14, 64, 6], polenta: [360, 8, 78, 1.5], cebada_perlada: [352, 10, 78, 1.2], tteok: [230, 4, 50, 0.5],
  harina: [345, 10, 73, 1.2], harina_maiz: [360, 7.5, 77, 1.5], harina_maiz_nixtamal: [365, 9, 76, 3.8], harina_garbanzo: [370, 22, 58, 6.7], harina_arroz: [366, 6, 80, 1.4],
  maicena: [380, 0.3, 91, 0.1], pan_rallado: [395, 13, 72, 5], panko: [370, 12, 74, 3],
  pan_barra: [270, 9, 55, 1.5, 250], pan_molde: [265, 8.5, 48, 4, 450], pan_pita: [275, 9, 55, 1.2, 60], pan_naan: [290, 9, 50, 6, 90],
  pan_hamburguesa: [270, 9, 48, 4.5, 60], pan_perrito: [270, 9, 48, 4.5, 50], tortillas: [300, 8, 50, 7.5, 40], tortillas_maiz: [220, 5.7, 45, 2.8, 30],
  masa_pizza: [280, 8, 50, 5, 400], masa_hojaldre: [400, 6, 40, 25, 230], masa_quebrada: [450, 6, 55, 23, 230], masa_filo: [300, 8, 62, 2, 250],
  obleas_empanadilla: [300, 8, 60, 3.5, 240], obleas_gyoza: [280, 9, 57, 1.5, 250], papel_arroz: [330, 6, 80, 0.5, 100], nachos: [490, 7, 62, 23],

  lentejas: [330, 24, 54, 1.5], lentejas_rojas: [340, 24, 60, 1.3], garbanzos: [120, 7, 16, 2.5], alubias: [90, 6, 13, 0.5], alubias_rojas: [100, 7, 15, 0.5],
  alubias_negras: [95, 6.5, 15, 0.5], judiones: [90, 6, 13, 0.5], habas_secas: [340, 26, 58, 1.5], guisantes_secos: [340, 24, 60, 1.2],

  tomate_triturado: [30, 1.3, 5, 0.2], tomate_frito: [75, 1.5, 10, 3.5], tomate_concentrado: [82, 4.3, 19, 0.5], tomate_seco: [210, 5, 23, 14],
  piquillos: [25, 1, 5, 0.3, 185], aceitunas: [145, 1, 4, 15], alcaparras: [23, 2.4, 5, 0.9], pepinillos: [15, 0.5, 3, 0.2], jalapenos: [25, 1, 5, 0.4],
  chucrut: [20, 0.9, 4.3, 0.1], kimchi: [25, 2, 4, 0.5, 200], brotes_bambu: [19, 1.7, 3, 0.3, 225], wakame: [280, 15, 40, 3], nori: [300, 40, 40, 1, 25],
  caldo_pollo: [5, 0.5, 0.5, 0.2], caldo_verduras: [5, 0.2, 0.8, 0.1], caldo_pescado: [6, 0.7, 0.3, 0.2], caldo_carne: [6, 0.8, 0.3, 0.2], dashi: [220, 25, 30, 1],
  leche_coco: [200, 2, 3, 20], coco_rallado: [660, 7, 24, 64],
  salsa_soja: [55, 8, 5, 0.1], salsa_pescado: [35, 5, 3.6, 0], salsa_ostras: [51, 1.4, 11, 0.3], salsa_hoisin: [220, 3.3, 44, 3.4], salsa_worcestershire: [78, 0, 19, 0],
  salsa_picante: [12, 0.5, 1, 0.4], salsa_barbacoa: [170, 1, 40, 0.5], ketchup: [110, 1.3, 26, 0.2], mostaza: [66, 4, 6, 4], mayonesa: [680, 1, 1, 75],
  pesto: [450, 5, 6, 45, 190], pasta_curry_verde: [130, 2, 12, 8, 60], pasta_curry_rojo: [130, 2, 12, 8, 60], curry_japones: [510, 6, 45, 34, 100],
  gochujang: [230, 4, 48, 1.5, 60], chipotle: [60, 2, 9, 2, 100], mole: [450, 7, 40, 30, 120], miso: [200, 12, 26, 6], pasta_judia_negra: [210, 13, 20, 9],
  pasta_tamarindo: [240, 2.8, 62, 0.6], harissa: [120, 3, 10, 8], aji_amarillo: [60, 1.5, 12, 1], aji_panca: [80, 2, 15, 1.5], achiote: [300, 6, 40, 14],
  pasta_pimiento: [80, 3, 14, 1.5], tahini: [595, 17, 21, 54], melaza_granada: [270, 0, 68, 0], mirin: [240, 0.3, 43, 0],
  vinagre: [20, 0, 0.6, 0], vinagre_arroz: [20, 0, 0.5, 0], vino_blanco: [80, 0.1, 2.6, 0], vino_tinto: [85, 0.1, 2.6, 0], cerveza: [43, 0.5, 3.6, 0], sidra: [45, 0, 5, 0],

  miel: [305, 0.3, 82, 0], azucar: [400, 0, 100, 0], azucar_moreno: [380, 0, 98, 0], panela: [380, 0.4, 95, 0.1],
  almendras: [600, 21, 9, 52], nueces: [650, 15, 7, 65], pinones: [670, 14, 13, 68], cacahuetes: [600, 25, 16, 50], anacardos: [580, 18, 30, 44],
  pepitas: [560, 30, 11, 46], sesamo: [570, 18, 23, 50], pasas: [300, 3, 79, 0.5], datiles: [280, 2.5, 75, 0.4], orejones: [240, 3.4, 63, 0.5], ciruelas_pasas: [240, 2.2, 64, 0.4],

  aceite: [828, 0, 0, 92], aceite_girasol: [828, 0, 0, 92], aceite_sesamo: [828, 0, 0, 92],
  sal: [0, 0, 0, 0], pimienta: [250, 10, 64, 3], pimenton: [280, 14, 54, 13], pimenton_picante: [280, 14, 54, 13], comino: [375, 18, 44, 22], oregano: [265, 9, 69, 4],
  curry: [325, 14, 56, 14], garam_masala: [300, 12, 50, 12], ras_el_hanout: [300, 12, 50, 12], zaatar: [300, 12, 50, 12], baharat: [300, 12, 50, 12],
  sumac: [300, 5, 70, 5], pul_biber: [300, 12, 50, 12], gochugaru: [310, 12, 55, 9], chiles_secos: [300, 11, 55, 6], curcuma: [310, 10, 65, 3],
  canela: [250, 4, 80, 1], nuez_moscada: [520, 6, 49, 36], tomillo: [280, 9, 64, 7], romero: [330, 5, 64, 15], hierbas_provenzales: [280, 9, 60, 7],
  cilantro_molido: [300, 12, 55, 18], jengibre_molido: [335, 9, 72, 4], eneldo: [250, 20, 55, 4], perejil: [290, 27, 50, 6], salvia: [315, 10, 61, 13],
  estragon: [295, 23, 50, 7], mejorana: [270, 13, 60, 7], alcaravea: [333, 20, 50, 15], menta_seca: [285, 20, 52, 6], semillas_mostaza: [500, 26, 28, 36],
  guascas: [280, 20, 50, 4], azafran: [0, 0, 0, 0],
  laurel: [0, 0, 0, 0, 1], clavo: [0, 0, 0, 0, 1], anis_estrellado: [0, 0, 0, 0, 1], guindilla: [300, 12, 50, 15, 1],
  levadura_panaderia: [325, 40, 41, 7.6, 7], levadura_quimica: [100, 0, 25, 0, 16]
};

/* Calorías y macros por ración de una receta (las recetas son para 4 raciones). */
window.MC_NUTRI_RECETA = function (r) {
  const N = window.MC_NUTRI, I = window.MC_INGREDIENTES, t = [0, 0, 0, 0];
  for (const [k, q] of r.ing) {
    const n = N[k], ing = I[k]; if (!n || !ing) continue;
    let g = ing[3] === 'ud' ? q * (n[4] || 0) : q; // gramos o mililitros
    // Aceite para freír: la comida absorbe solo una parte (contamos 60 ml y el 15 % del resto)
    if ((k === 'aceite' || k === 'aceite_girasol') && g > 60) g = 60 + (g - 60) * 0.15;
    for (let i = 0; i < 4; i++) t[i] += n[i] * g / 100;
  }
  const rac = r.rac || 4;
  return { kcal: Math.round(t[0] / rac), p: Math.round(t[1] / rac), hc: Math.round(t[2] / rac), g: Math.round(t[3] / rac) };
};
