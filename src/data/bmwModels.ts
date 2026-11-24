export type ModelCategory = 'Barchasi' | 'Sport Kupe' | 'Sedan' | 'SUV / Krossover' | 'Elektr';

export interface NewBmwModel {
  id: string;
  name: string;
  years: string;
  direction: Exclude<ModelCategory, 'Barchasi'>;
  directionLabel: string;
  image: string;
  topSpeed: string;
  acceleration: string;
  power: string;
  drivetrain: string;
  features: string[];
  advantages: string[];
  exterior3dUid: string;
  exterior3dTitle: string;
  interior3dUid: string;
  interior3dTitle: string;
  interiorPhoto: string;
  cabinHighlights: string[];
}

export interface HeritageBmwModel {
  id: string;
  year: number;
  era: '1930–1960' | '1970–1990' | '2000–2026';
  name: string;
  chassis: string;
  category: string;
  image: string;
  topSpeed: string;
  engine: string;
  power: string;
  legacyNote: string;
}

export interface HistoryMilestone {
  year: string;
  title: string;
  description: string;
}

export const HERO_IMAGE = '/src/assets/images/hero_bmw_flagship_1795520200057.jpg';
export const HISTORY_IMAGE = '/src/assets/images/history_bmw_welt_1795520205110.jpg';
export const CABIN_IMAGE = '/src/assets/images/cabin_bmw_luxury_1795520207817.jpg';

export const NEW_BMW_MODELS: NewBmwModel[] = [
  {
    id: 'bmw-m4-competition',
    name: 'BMW M4 Competition (G82)',
    years: '2021–2026',
    direction: 'Sport Kupe',
    directionLabel: 'Sport Kupe · Track & GT',
    image: '/src/assets/images/model_m4_comp_1795520199983.jpg',
    topSpeed: '290 km/soat',
    acceleration: '3.5 soniya (0–100)',
    power: '530 ot kuchi',
    drivetrain: '3.0L TwinPower Turbo I6 · M xDrive',
    features: [
      '8 pog‘onali M Steptronic avtomatik uzatmalar qutisi',
      'Karbon tolali tom va adaptiv M podveska',
      '10 bosqichli M Traction Control tizimi',
    ],
    advantages: [
      'Ideal 50:50 vazn taqsimoti va poyga trasasidagi aniqlik',
      'Kundalik haydash va ekstremal trek tezligi uyg‘unligi',
    ],
    exterior3dUid: 'f8141ecd755547989c9209784b71ad43',
    exterior3dTitle: '2025 BMW M4 Competition — Tashqi 3D ko‘rinish',
    interior3dUid: 'd3f07b471d9f4a2c9a2acf79d88a3645',
    interior3dTitle: 'BMW M4 Competition — Salon va haydovchi kokpiti 3D',
    interiorPhoto: CABIN_IMAGE,
    cabinHighlights: [
      'M Karbon kovshsimon sport o‘rindiqlar',
      'Egri BMW Curved Display (12.3" + 14.9")',
      'Merino charmi va alkantara qoplamali M rul',
    ],
  },
  {
    id: 'bmw-m5-hybrid',
    name: 'BMW M5 (F90 CS / G90)',
    years: '2022–2026',
    direction: 'Sedan',
    directionLabel: 'Biznes-Sport Sedan',
    image: '/src/assets/images/model_m5_cs_1795520201210.jpg',
    topSpeed: '305 km/soat',
    acceleration: '3.0 soniya (0–100)',
    power: '727 ot kuchi',
    drivetrain: '4.4L V8 TwinTurbo + M Hybrid',
    features: [
      'M xDrive to‘liq uzatma (2WD sof orqa g‘ildirak rejimi bilan)',
      'M Driver’s Package bilan cheklanmagan maksimal dinamika',
      'Karbon-keramik tormoz tizimi va faol M differensial',
    ],
    advantages: [
      'Superkar tezligini to‘rt eshikli biznes-sedan qulayligi bilan beradi',
      'Elektr rejimida shovqinsiz shahar harakati imkoniyati',
    ],
    exterior3dUid: 'f28407cda1044fd28d82855be8af3e75',
    exterior3dTitle: 'BMW M5 CS — Tashqi 3D model',
    interior3dUid: '228e957bbd7b42349277bf62aeee1aa7',
    interior3dTitle: 'BMW M5 CS — Karbon sport o‘rindiq va salon 3D',
    interiorPhoto: CABIN_IMAGE,
    cabinHighlights: [
      'M1 va M2 tezkor dasturlanuvchi rul tugmalari',
      '4 zonali iqlim nazorati va Bowers & Wilkins audio',
      'Kumush-qora karbon bezakli ergonomik kokpit',
    ],
  },
  {
    id: 'bmw-i7-xdrive60',
    name: 'BMW i7 xDrive60',
    years: '2023–2026',
    direction: 'Elektr',
    directionLabel: 'Flagman Elektro-Sedan',
    image: '/src/assets/images/model_i7_xdrive_1795520201192.jpg',
    topSpeed: '240 km/soat',
    acceleration: '4.7 soniya (0–100)',
    power: '544 ot kuchi',
    drivetrain: 'Ikki elektr motor · 101.7 kVt·soat',
    features: [
      'Bir zaryadda 625 km gacha yurish zaxirasi (WLTP)',
      'Orqa yo‘lovchilar uchun 31.3" 8K BMW Theatre Screen',
      'Avtomatik ochilib-yopiluvchi hashamatli eshiklar',
    ],
    advantages: [
      'Mutlaq akustik sukunat va pnevmatik podveska yumshoqligi',
      'Executive Lounge orqa o‘rindiqlar bilan birinchi klass qulayligi',
    ],
    exterior3dUid: 'e5454f274c4f44fa84e274c2583d7f5c',
    exterior3dTitle: 'BMW i7 xDrive60 — Tashqi 3D ko‘rinish',
    interior3dUid: '6dce72e682f0462eab2387d69c24b751',
    interior3dTitle: 'BMW 7-Series / i7 — Hashamatli salon 3D',
    interiorPhoto: CABIN_IMAGE,
    cabinHighlights: [
      'BMW Interaction Bar kristall yoritish paneli',
      'Kaşmir jun va Merino charmidan Executive Lounge o‘rindiqlar',
      'Panoramali Sky Lounge shisha tom',
    ],
  },
  {
    id: 'bmw-xm-label',
    name: 'BMW XM Label',
    years: '2023–2026',
    direction: 'SUV / Krossover',
    directionLabel: 'Gibrid M Flagman SUV',
    image: '/src/assets/images/model_xm_label_1795520201813.jpg',
    topSpeed: '290 km/soat',
    acceleration: '3.8 soniya (0–100)',
    power: '748 ot kuchi',
    drivetrain: '4.4L V8 Plug-in Hybrid · 1000 Nm',
    features: [
      'BMW M tarixidagi eng kuchli seriyali gibrid agregat',
      '23 dyuymli yengil qotishmali aerodinamik M g‘ildiraklar',
      'Faol elektromexanik stabilizatorli M Professional podveska',
    ],
    advantages: [
      'Har qanday yo‘l sharoitida tengsiz tortish kuchi va barqarorlik',
      '88 km gacha sof elektr rejimida harakatlanish erkinligi',
    ],
    exterior3dUid: '0365cea69e924f698484d7d705df6b76',
    exterior3dTitle: 'BMW XM — Tashqi 3D ko‘rinish',
    interior3dUid: 'f76ee8914f4842fe80c11ddef664b3c2',
    interior3dTitle: 'BMW M — Kokpit va rul boshqaruvi 3D',
    interiorPhoto: CABIN_IMAGE,
    cabinHighlights: [
      '3D prizmatik geometrik shifonli yoritilgan shift',
      'M Lounge orqa divan va isitiladigan ergonomik yostiqlar',
      'Kumush kontrasli tikilgan Vintage Merino charm',
    ],
  },
  {
    id: 'bmw-m8-gran-coupe',
    name: 'BMW M8 Competition Gran Coupé',
    years: '2020–2025',
    direction: 'Sport Kupe',
    directionLabel: '4-eshikli Gran Turizmo',
    image: '/src/assets/images/model_m8_gran_1795520202986.jpg',
    topSpeed: '305 km/soat',
    acceleration: '3.2 soniya (0–100)',
    power: '625 ot kuchi',
    drivetrain: '4.4L V8 TwinPower Turbo · M xDrive',
    features: [
      'Past og‘irlik markaziga ega kengaytirilgan Gran Coupé kuzovi',
      'BMW Laserlight uzoqni yorituvchi adaptiv faralar',
      'O‘zgaruvchan ovoz tembriga ega M Sport chiqarish tizimi',
    ],
    advantages: [
      'Uzoq masofali sayohatlarda charchatmaydigan sport dinamikasi',
      'Keng orqa o‘rindiq maydoni va kupe estetikasining kamyob sintezi',
    ],
    exterior3dUid: '25d5b4f6d13e4217afa09bbf89f8d993',
    exterior3dTitle: 'BMW M8 Competition — Tashqi 3D ko‘rinish',
    interior3dUid: '02c692ea4710413ebdd71b739520ad6d',
    interior3dTitle: 'BMW M8 — M Sport rul va kokpit detali 3D',
    interiorPhoto: CABIN_IMAGE,
    cabinHighlights: [
      'Markaziy konsolda M Mode va Setup tezkor boshqaruv bloki',
      'Yoritilgan M8 logotipli sport o‘rindiqlar',
      'Alcantara shift va kumush alyuminiy bezaklar',
    ],
  },
  {
    id: 'bmw-ix-m60',
    name: 'BMW iX M60',
    years: '2022–2026',
    direction: 'Elektr',
    directionLabel: 'Elektr Sport Krossover',
    image: '/src/assets/images/model_ix_m60_1795520204170.jpg',
    topSpeed: '250 km/soat',
    acceleration: '3.8 soniya (0–100)',
    power: '619 ot kuchi',
    drivetrain: 'Dual eDrive · 1100 Nm moment',
    features: [
      'Karbon tolali Carbon Cage yengil va mustahkam kuzov strukturasi',
      'Shy Tech ko‘rinmas sensorli boshqaruv va o‘zini tiklovchi panjara',
      '195 kVt tezkor zaryadlash (10% dan 80% gacha 35 daqiqa)',
    ],
    advantages: [
      'Minimalistik Skandinaviya va nemis muhandisligi uyg‘unlashgan keng salon',
      'To‘liq g‘ildirak boshqaruvi (Integral Active Steering) tufayli yengil manyovr',
    ],
    exterior3dUid: '6edf8ec69a4140c19a098af1a97669f2',
    exterior3dTitle: 'BMW iX M60 — Tashqi 3D ko‘rinish',
    interior3dUid: 'a280efceebf14fb0a57dc7f741fc0340',
    interior3dTitle: 'BMW — Ergonomik sport o‘rindiq va salon 3D',
    interiorPhoto: CABIN_IMAGE,
    cabinHighlights: [
      'Olti burchakli futuristik boshqaruv ruli',
      'Kristall iDrive kontrolleri va tabiiy yog‘och panel',
      'Elektroxrom xiralashuvchi Sky Lounge tom',
    ],
  },
];

export const HERITAGE_MODELS: HeritageBmwModel[] = [
  {
    id: 'bmw-328-1936',
    year: 1936,
    era: '1930–1960',
    name: 'BMW 328 Roadster',
    chassis: 'Klassik Sport Rodster',
    category: 'Eng ilk sport afsonasi',
    image: '/src/assets/images/heritage_328_1936_1795520204198.jpg',
    topSpeed: '150 km/soat',
    engine: '2.0L M328 I6',
    power: '80 o.k.',
    legacyNote:
      '1940-yilda Mille Miglia poygasida g‘olib chiqib, BMW ning yengil vazn va aerodinamik muhandislik falsafasini dunyoga tanitgan ilk afsona.',
  },
  {
    id: 'bmw-507-1956',
    year: 1956,
    era: '1930–1960',
    name: 'BMW 507 Roadster',
    chassis: 'V8 Gran Turizmo',
    category: 'Dizayn durdonasi',
    image: '/src/assets/images/heritage_507_1956_1795520204332.jpg',
    topSpeed: '220 km/soat',
    engine: '3.2L Alyuminiy V8',
    power: '150 o.k.',
    legacyNote:
      'Graf Albrext fon Gerts chizgilari asosida atigi 252 dona ishlab chiqarilgan bo‘lib, zamonaviy BMW roadsterlarining abadiy ilhom manbai hisoblanadi.',
  },
  {
    id: 'bmw-m1-1978',
    year: 1978,
    era: '1970–1990',
    name: 'BMW M1 (E26)',
    chassis: 'O‘rta motorli superkar',
    category: 'Ilk M seriya',
    image: '/src/assets/images/heritage_m1_1978_1795520205487.jpg',
    topSpeed: '265 km/soat',
    engine: '3.5L M88 I6',
    power: '277 o.k.',
    legacyNote:
      'Giorgetto Giugiaro dizayni va BMW Motorsport muhandisligi birlashgan yagona o‘rta dvigatelli seriyali BMW superkari — M bo‘limining ramzi.',
  },
  {
    id: 'bmw-m3-e30-1986',
    year: 1986,
    era: '1970–1990',
    name: 'BMW M3 (E30)',
    chassis: 'DTM poyga kupesi',
    category: 'Touring chempioni',
    image: '/src/assets/images/heritage_e30_m3_1795520205718.jpg',
    topSpeed: '235 km/soat',
    engine: '2.3L S14 I4',
    power: '200 o.k.',
    legacyNote:
      'Kengaytirilgan qanotlari va yuqori aylanishli S14 dvigateli bilan xalqaro avtopoygalarda 1500 dan ortiq g‘alabaga erishgan afsonaviy model.',
  },
  {
    id: 'bmw-m8-2020',
    year: 2020,
    era: '2000–2026',
    name: 'BMW M8 Competition',
    chassis: 'F91 / F92 / F93',
    category: 'Zamonaviy flagman',
    image: '/src/assets/images/model_m8_gran_1795520202986.jpg',
    topSpeed: '305 km/soat',
    engine: '4.4L V8 TwinTurbo',
    power: '625 o.k.',
    legacyNote:
      'Katta kupe an’analarini raqamli boshqaruv va M xDrive to‘liq uzatma texnologiyasi bilan XXI asr cho‘qqisiga olib chiqqan flagman.',
  },
  {
    id: 'bmw-neue-era-2026',
    year: 2026,
    era: '2000–2026',
    name: 'BMW i7 & G90 M5 Davri',
    chassis: 'G70 / G90 Avlod',
    category: 'Elektr va Gibrid kelajak',
    image: '/src/assets/images/model_i7_xdrive_1795520201192.jpg',
    topSpeed: '305 km/soat',
    engine: 'eDrive & M Hybrid',
    power: '544–727 o.k.',
    legacyNote:
      'Nol emissiyali elektr harakatchanlik, barqaror materiallar va haydovchiga yo‘naltirilgan sun’iy intellekt yordamchilari birlashgan yangi bosqich.',
  },
];

export const HISTORY_MILESTONES: HistoryMilestone[] = [
  {
    year: '1916',
    title: 'Myunxenda asos solinishi',
    description:
      '7-mart kuni Bavariyada aviatsiya dvigatellari ishlab chiqarish bilan boshlangan kompaniya tez orada nemis aniqligining timsoliga aylandi.',
  },
  {
    year: '1923–1936',
    title: 'R32 mototsikli va 328 afsonasi',
    description:
      'Ilk BMW R32 mototsiklidan so‘ng 1928-yilda avtomobilsozlikka kirildi, 1936-yildagi BMW 328 esa yengil sport konstruksiyasining etalonini yaratdi.',
  },
  {
    year: '1962–1972',
    title: 'Neue Klasse va BMW M tug‘ilishi',
    description:
      '1962-yilgi "Neue Klasse" sport sedan segmentini yaratdi, 1972-yilda esa afsonaviy BMW Motorsport (M) bo‘limi hamda Myunxendagi to‘rt silindrli bosh qarorgoh ochildi.',
  },
  {
    year: '2013–2026',
    title: 'Elektr kelajak va raqamli 3D davr',
    description:
      'BMW i3/i8 dan boshlangan elektr inqilobi bugun i7, iX M60 va 727 ot kuchili gibrid M5 modellari hamda Neue Klasse arxitekturasida davom etmoqda.',
  },
];
