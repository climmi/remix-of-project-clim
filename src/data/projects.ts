export interface ProjectMedia {
  type: 'image' | 'video';
  url: string;
  poster?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  materials: string[];
  techniques: string[];
  previewImages: string[];  // Max 3 images for card carousel
  images: string[];         // All photos for detail view
  media?: ProjectMedia[];
  year: string;
  month: string;
  displayFormat?: 'portrait' | 'square' | 'landscape' | 'wide';
  gridSpan?: 1 | 2;
  externalLink?: string;
}

export const projects: Project[] = [
  {
    id: 'infrarotthermometer',
    title: 'Infrarotthermometer',
    description: 'Das Fieberthermometer ist ein essenzielles Produkt jeden Haushalts. In Ausnahmesituationen, wie Krankheit, muss das Fieberthermometer bereit sein. Die Interaktion zwischen Mensch und Objekt ist dabei besonders wichtig, da es sich um eine intime Situation handelt.',
    category: 'Product Design',
    materials: ['Bio Kunststoff', 'Li-Ion-Akku', 'SMD Elektronik'],
    techniques: ['Clay-Modellierung', 'Ergonomie', '3D Scanning', 'Flächenrückführung', 'Rendering'],
    previewImages: [
      '/images/infrarotthermometer/img_p10_1.jpg',
      '/images/infrarotthermometer/img_p14_1.jpg',
      '/images/infrarotthermometer/img_p16_1.jpg'
    ],
    images: [
      '/images/infrarotthermometer/img_p10_1.jpg',
      '/images/infrarotthermometer/img_p11_1.jpg',
      '/images/infrarotthermometer/img_p11_2.jpg',
      '/images/infrarotthermometer/img_p11_3.jpg',
      '/images/infrarotthermometer/img_p11_4.jpg',
      '/images/infrarotthermometer/img_p12_1.jpg',
      '/images/infrarotthermometer/img_p12_2.jpg',
      '/images/infrarotthermometer/img_p12_3.jpg',
      '/images/infrarotthermometer/img_p12_4.jpg',
      '/images/infrarotthermometer/img_p12_5.jpg',
      '/images/infrarotthermometer/img_p12_6.jpg',
      '/images/infrarotthermometer/img_p13_1.png',
      '/images/infrarotthermometer/img_p13_2.jpg',
      '/images/infrarotthermometer/img_p14_1.jpg',
      '/images/infrarotthermometer/img_p14_2.jpg',
      '/images/infrarotthermometer/img_p15_1.png',
      '/images/infrarotthermometer/img_p16_1.jpg'
    ],
    year: '2019',
    month: 'January',
    displayFormat: 'portrait'
  },
  {
    id: 'l-ement',
    title: 'L-Ement',
    description: 'Die Exploration eines neuen Stuhls. Der Anspruch war es aus einem flachen Halbwerkzeug einen Stuhl zu konstruieren, der aus nur einem Formteil besteht. Ziel war ein werkzeugloser Aufbau aus wiederholten L-Elementen.',
    category: 'Furniture Design',
    materials: ['Holz', 'Gewindestangen', 'Muttern'],
    techniques: ['CNC Fräsen', 'Ergonomie', 'Holzbearbeitung', 'Prototypen', 'Konstruktion'],
    previewImages: [
      '/images/l-ement/img_p17_1.jpg',
      '/images/l-ement/img_p20_1.jpg',
      '/images/l-ement/img_p23_1.jpg'
    ],
    images: [
      '/images/l-ement/img_p17_1.jpg',
      '/images/l-ement/img_p18_1.jpg',
      '/images/l-ement/img_p19_1.jpg',
      '/images/l-ement/img_p19_2.jpg',
      '/images/l-ement/img_p19_3.jpg',
      '/images/l-ement/img_p19_4.jpg',
      '/images/l-ement/img_p20_1.jpg',
      '/images/l-ement/img_p20_2.jpg',
      '/images/l-ement/img_p20_3.jpg',
      '/images/l-ement/img_p20_4.jpg',
      '/images/l-ement/img_p21_1.jpg',
      '/images/l-ement/img_p21_2.jpg',
      '/images/l-ement/img_p21_3.jpg',
      '/images/l-ement/img_p22_1.jpg',
      '/images/l-ement/img_p23_1.jpg'
    ],
    year: '2018',
    month: 'March',
    displayFormat: 'square'
  },
  {
    id: 'oru',
    title: 'ORU',
    description: 'Ein sauberer geordneter Schreibtisch bildet häufig die eigene Gedankenwelt ab. Mit der Idee ein möglichst flaches, wenig aufdringliches Schreibtischbild zu kreieren wurde die Oru (jap. falten) Leuchte entworfen.',
    category: 'Lighting Design',
    materials: ['Kunststoff', '95 CRI LED', 'LED Treiber'],
    techniques: ['3D Druck', 'Prototypen', 'Konstruktion'],
    previewImages: [
      '/images/oru/img_p30_1.jpg',
      '/images/oru/img_p33_1.jpg',
      '/images/oru/img_p35_1.jpg'
    ],
    images: [
      '/images/oru/img_p24_1.png',
      '/images/oru/img_p25_1.jpg',
      '/images/oru/img_p25_2.jpg',
      '/images/oru/img_p25_3.jpg',
      '/images/oru/img_p25_4.png',
      '/images/oru/img_p25_5.png',
      '/images/oru/img_p25_6.jpg',
      '/images/oru/img_p25_7.jpg',
      '/images/oru/img_p25_8.jpg',
      '/images/oru/img_p25_9.jpg',
      '/images/oru/img_p26_1.png',
      '/images/oru/img_p27_1.jpg',
      '/images/oru/img_p27_2.jpg',
      '/images/oru/img_p27_3.jpg',
      '/images/oru/img_p27_4.jpg',
      '/images/oru/img_p27_5.jpg',
      '/images/oru/img_p28_1.jpg',
      '/images/oru/img_p28_2.jpg',
      '/images/oru/img_p29_1.png',
      '/images/oru/img_p29_2.png',
      '/images/oru/img_p30_1.jpg',
      '/images/oru/img_p31_1.jpg',
      '/images/oru/img_p32_1.jpg',
      '/images/oru/img_p33_1.jpg',
      '/images/oru/img_p33_2.png',
      '/images/oru/img_p34_1.jpg',
      '/images/oru/img_p35_1.jpg'
    ],
    year: '2018',
    month: 'June',
    displayFormat: 'landscape',
    gridSpan: 2
  },
  {
    id: 'glasbaustein',
    title: 'Glasbaustein',
    description: 'Aus Glas in Kombination mit dem 3D-Druckverfahren wird eine einzigartige Leuchte, die traditionsreiches Handwerk mit neuster Technologie kombiniert. Der dabei entstehende Kontrast erzeugt ein lebendiges Spiel der Gegensätze und Gefühle.',
    category: 'Lighting Design',
    materials: ['Glas', 'Stahl', '3D-Druck Kunststoff'],
    techniques: ['Glasblaserei', 'Schweißen', '3D Druck', 'Konstruktion'],
    previewImages: [
      '/images/glasbaustein/img_p36_1.jpg',
      '/images/glasbaustein/img_p40_1.jpg',
      '/images/glasbaustein/img_p41_1.jpg'
    ],
    images: [
      '/images/glasbaustein/img_p36_1.jpg',
      '/images/glasbaustein/img_p37_1.jpg',
      '/images/glasbaustein/img_p37_2.jpg',
      '/images/glasbaustein/img_p37_3.jpg',
      '/images/glasbaustein/img_p37_4.jpg',
      '/images/glasbaustein/img_p38_1.jpg',
      '/images/glasbaustein/img_p38_2.jpg',
      '/images/glasbaustein/img_p38_3.jpg',
      '/images/glasbaustein/img_p38_4.jpg',
      '/images/glasbaustein/img_p38_5.jpg',
      '/images/glasbaustein/img_p39_1.jpg',
      '/images/glasbaustein/img_p39_2.jpg',
      '/images/glasbaustein/img_p39_3.jpg',
      '/images/glasbaustein/img_p39_4.jpg',
      '/images/glasbaustein/img_p39_5.jpg',
      '/images/glasbaustein/img_p39_6.png',
      '/images/glasbaustein/img_p40_1.jpg',
      '/images/glasbaustein/img_p40_2.jpg',
      '/images/glasbaustein/img_p40_3.jpg',
      '/images/glasbaustein/img_p41_1.jpg'
    ],
    year: '2019',
    month: 'May',
    displayFormat: 'portrait'
  },
  {
    id: 'atobe',
    title: 'A to BE',
    description: 'Mit diesem Konzept wird ein holistischer Ansatz generiert, der Zukunftstechnologie mit Benutzer*innenbeduerfnissen verbindet. Micro-Bus-Tram für teil-individuelle Buslinienerstellung und sinnvoller Einsatz der E-Mobilität im ÖPNV.',
    category: 'Mobility Concept',
    materials: ['Konzeptmodell'],
    techniques: ['Konzept', 'Marktforschung', 'Personas', 'Analyse', '3D Druck', 'Prototypen'],
    previewImages: [
      '/images/atobe/img_p42_1.jpg',
      '/images/atobe/img_p44_1.jpg',
      '/images/atobe/img_p46_1.jpg'
    ],
    images: [
      '/images/atobe/img_p42_1.jpg',
      '/images/atobe/img_p43_1.jpg',
      '/images/atobe/img_p43_2.jpg',
      '/images/atobe/img_p44_1.jpg',
      '/images/atobe/img_p45_1.jpg',
      '/images/atobe/img_p46_1.jpg'
    ],
    year: '2019',
    month: 'September',
    displayFormat: 'landscape',
    gridSpan: 2
  },
  {
    id: 'glug',
    title: 'glug!',
    description: 'Das Projekt Glug entstand im Masterstudium mit Fokus auf Social Design und setzt sich mit Müllvermeidung, insbesondere von Plastikflaschen, auseinander. Eine mobile Pop-Up Station dient als interaktiver Informationsstand für Leitungswasser.',
    category: 'Social Design',
    materials: ['Holz', '3D-Druck', 'Aluminium'],
    techniques: ['Social Design', '3D Druck', 'Konstruktion', 'Corporate Design'],
    previewImages: [
      '/images/glug/img_p47_1.jpg',
      '/images/glug/img_p5_1.jpg',
      '/images/glug/img_p7_1.jpg'
    ],
    images: [
      '/images/glug/img_p47_1.jpg',
      '/images/glug/img_p0_1.jpg',
      '/images/glug/img_p0_2.jpg',
      '/images/glug/img_p0_4.jpg',
      '/images/glug/img_p1_1.jpg',
      '/images/glug/img_p1_2.jpg',
      '/images/glug/img_p2_1.jpg',
      '/images/glug/img_p2_3.jpg',
      '/images/glug/img_p3_3.jpg',
      '/images/glug/img_p3_4.jpg',
      '/images/glug/img_p3_5.jpg',
      '/images/glug/img_p3_6.jpg',
      '/images/glug/img_p3_7.jpg',
      '/images/glug/img_p4_1.jpg',
      '/images/glug/img_p4_2.jpg',
      '/images/glug/img_p5_1.jpg',
      '/images/glug/img_p5_2.jpg',
      '/images/glug/img_p5_3.jpg',
      '/images/glug/img_p5_4.jpg',
      '/images/glug/img_p5_5.jpg',
      '/images/glug/img_p5_6.jpg',
      '/images/glug/img_p6_1.jpg',
      '/images/glug/img_p6_2.jpg',
      '/images/glug/img_p6_3.jpg',
      '/images/glug/img_p7_1.jpg',
      '/images/glug/img_p7_2.jpg',
      '/images/glug/img_p7_3.jpg',
      '/images/glug/img_p7_4.jpg',
      '/images/glug/img_p7_5.jpg',
      '/images/glug/img_p7_6.jpg',
      '/images/glug/img_p8_1.jpg',
      '/images/glug/img_p9_1.jpg'
    ],
    year: '2023',
    month: 'February',
    displayFormat: 'portrait'
  },
  {
    id: 'glas-metall-fliese',
    title: 'Glas-Metall-Fliese',
    description: 'Glas und Metall finden in der Regel ihr Zusammenspiel darin, dass das Metall als begrenzende Form dient. Die Verbindung aus beiden erzeugt spannende Oberflächen, Texturen und Lichteffekte. Eine experimentelle Materialstudie.',
    category: 'Material Experiment',
    materials: ['Glas', 'Metall', 'Glasgranulate'],
    techniques: ['Glasschmelzen', 'Formenbau', 'Metallverarbeitung'],
    previewImages: [
      '/images/glas-metall-fliese/img_p11_1.jpg',
      '/images/glas-metall-fliese/img_p14_1.jpg',
      '/images/glas-metall-fliese/img_p15_1.jpg'
    ],
    images: [
      '/images/glas-metall-fliese/img_p11_1.jpg',
      '/images/glas-metall-fliese/img_p11_2.jpg',
      '/images/glas-metall-fliese/img_p12_1.jpg',
      '/images/glas-metall-fliese/img_p12_2.jpg',
      '/images/glas-metall-fliese/img_p12_3.jpg',
      '/images/glas-metall-fliese/img_p13_1.jpg',
      '/images/glas-metall-fliese/img_p14_1.jpg',
      '/images/glas-metall-fliese/img_p14_2.jpg',
      '/images/glas-metall-fliese/img_p14_3.jpg',
      '/images/glas-metall-fliese/img_p14_4.jpg',
      '/images/glas-metall-fliese/img_p14_5.jpg',
      '/images/glas-metall-fliese/img_p14_6.jpg',
      '/images/glas-metall-fliese/img_p15_1.jpg'
    ],
    year: '2019',
    month: 'November',
    displayFormat: 'square'
  },
  {
    id: 'grow-mushrooms',
    title: 'GROW MUSHROOMS',
    description: 'Im Bereich des Keramik-3D-Drucks wurden algorithmisch generierte Strukturen mit den Materialeigenschaften von Keramik kombiniert. Durch parametrische Designprozesse entstanden Formen für Pilzzucht mit maximierter Oberfläche für die Feuchtigkeitsregulierung.',
    category: 'Bio Design',
    materials: ['Keramik', 'Substrat'],
    techniques: ['Grasshopper', 'Keramik-3D-Druck', 'Parametrisches Design'],
    previewImages: [
      '/images/grow-mushrooms/img_p16_1.jpg',
      '/images/grow-mushrooms/img_p19_1.jpg',
      '/images/grow-mushrooms/img_p25_1.jpg'
    ],
    images: [
      '/images/grow-mushrooms/img_p16_1.jpg',
      '/images/grow-mushrooms/img_p17_1.jpg',
      '/images/grow-mushrooms/img_p17_2.jpg',
      '/images/grow-mushrooms/img_p17_3.jpg',
      '/images/grow-mushrooms/img_p18_1.jpg',
      '/images/grow-mushrooms/img_p19_1.jpg',
      '/images/grow-mushrooms/img_p19_2.jpg',
      '/images/grow-mushrooms/img_p19_3.jpg',
      '/images/grow-mushrooms/img_p20_2.jpg',
      '/images/grow-mushrooms/img_p20_3.jpg',
      '/images/grow-mushrooms/img_p22_1.jpg',
      '/images/grow-mushrooms/img_p23_1.jpg',
      '/images/grow-mushrooms/img_p24_1.jpg',
      '/images/grow-mushrooms/img_p24_2.jpg',
      '/images/grow-mushrooms/img_p24_3.jpg',
      '/images/grow-mushrooms/img_p24_4.jpg',
      '/images/grow-mushrooms/img_p25_1.jpg'
    ],
    year: '2022',
    month: 'April',
    displayFormat: 'portrait'
  },
  {
    id: 'fast-good-cheap',
    title: 'FAST GOOD CHEAP',
    description: 'Das Projekt beschäftigt sich mit den Herausforderungen in Designprozessen. Ein Produkt kann nur zwei der drei Eigenschaften - schnell, gut oder günstig - gleichzeitig erfüllen. Ein interaktives Objekt verdeutlicht diese Problematik spielerisch.',
    category: 'Interactive Object',
    materials: ['3D-Druck Kunststoff', 'Arduino', 'Elektronik'],
    techniques: ['Physical Computing', '3D-Druck', 'Arduino'],
    previewImages: [
      '/images/fast-good-cheap/img_p26_1.jpg',
      '/images/fast-good-cheap/img_p29_1.jpg',
      '/images/fast-good-cheap/img_p30_1.jpg'
    ],
    images: [
      '/images/fast-good-cheap/img_p26_1.jpg',
      '/images/fast-good-cheap/img_p27_1.jpg',
      '/images/fast-good-cheap/img_p27_2.jpg',
      '/images/fast-good-cheap/img_p28_1.jpg',
      '/images/fast-good-cheap/img_p28_2.jpg',
      '/images/fast-good-cheap/img_p28_3.jpg',
      '/images/fast-good-cheap/img_p28_4.jpg',
      '/images/fast-good-cheap/img_p29_1.jpg',
      '/images/fast-good-cheap/img_p29_2.jpg',
      '/images/fast-good-cheap/img_p29_3.jpg',
      '/images/fast-good-cheap/img_p30_1.jpg'
    ],
    year: '2022',
    month: 'July',
    displayFormat: 'square'
  },
  {
    id: 'blender-workshop',
    title: 'Blender: Quick & Easy',
    description: 'Im InCollege-Kurs vermittelte ich eine kompakte Einführung in Blender. Der Workshop behandelte Grundlagen der Benutzeroberfläche, 3D-Modellierung mit Polygonmodelling und Modifiern, sowie Materialien, Texturen, Beleuchtung und Animation.',
    category: 'Workshop',
    materials: ['Digital'],
    techniques: ['Blender', '3D-Modellierung', 'Workshop'],
    previewImages: [
      '/images/blender-workshop/img_p31_1.jpg',
      '/images/blender-workshop/img_p32_1.jpg',
      '/images/blender-workshop/img_p34_1.jpg'
    ],
    images: [
      '/images/blender-workshop/img_p31_1.jpg',
      '/images/blender-workshop/img_p32_1.jpg',
      '/images/blender-workshop/img_p32_2.jpg',
      '/images/blender-workshop/img_p32_3.jpg',
      '/images/blender-workshop/img_p32_4.jpg',
      '/images/blender-workshop/img_p33_1.jpg',
      '/images/blender-workshop/img_p33_2.jpg',
      '/images/blender-workshop/img_p33_3.jpg',
      '/images/blender-workshop/img_p33_4.jpg',
      '/images/blender-workshop/img_p34_1.jpg'
    ],
    year: '2022',
    month: 'October',
    displayFormat: 'landscape'
  },
  {
    id: '3d-print-experiments',
    title: '3D Print Experiments',
    description: 'Experimentelles Arbeiten mit 3D-Druck auf verschiedenen Materialien wie irisierender Folie und Textilien. Diese Kombination eröffnet neue Möglichkeiten in Design, Produktvisualisierung und interaktiven Objekten.',
    category: 'Experiment',
    materials: ['Irisierende Folie', 'Textilien', 'PLA'],
    techniques: ['3D-Druck', 'Materialexperimente'],
    previewImages: [
      '/images/3d-print-experiments/img_p35_1.jpg',
      '/images/3d-print-experiments/img_p37_1.jpg',
      '/images/3d-print-experiments/img_p39_1.jpg'
    ],
    images: [
      '/images/3d-print-experiments/img_p35_1.jpg',
      '/images/3d-print-experiments/img_p36_1.jpg',
      '/images/3d-print-experiments/img_p37_1.jpg',
      '/images/3d-print-experiments/img_p37_2.jpg',
      '/images/3d-print-experiments/img_p37_3.jpg',
      '/images/3d-print-experiments/img_p38_1.jpg',
      '/images/3d-print-experiments/img_p39_1.jpg',
      '/images/3d-print-experiments/img_p39_2.jpg',
      '/images/3d-print-experiments/img_p39_3.jpg',
      '/images/3d-print-experiments/img_p39_4.jpg'
    ],
    year: '2024',
    month: 'January',
    displayFormat: 'portrait'
  },
  {
    id: 'workshops',
    title: 'Workshops',
    description: 'In den Ferienprogrammen und Spot-Your-Job Workshops der Freien Werkstatt wurden handwerkliche und digitale Fertigkeiten vermittelt. Projekte mit KI-generierten Motiven für Laserschnitt und Arduino-programmierte LEDs.',
    category: 'Workshop',
    materials: ['Holz', 'Metall', 'Elektronik'],
    techniques: ['Laserschneiden', 'CNC', 'Arduino', 'Schweißen'],
    previewImages: [
      '/images/workshops/img_p40_1.jpg',
      '/images/workshops/img_p41_1.jpg',
      '/images/workshops/img_p42_1.jpg'
    ],
    images: [
      '/images/workshops/img_p40_1.jpg',
      '/images/workshops/img_p40_2.jpg',
      '/images/workshops/img_p40_3.jpg',
      '/images/workshops/img_p40_4.jpg',
      '/images/workshops/img_p40_5.jpg',
      '/images/workshops/img_p41_1.jpg',
      '/images/workshops/img_p41_2.jpg',
      '/images/workshops/img_p41_3.jpg',
      '/images/workshops/img_p41_4.jpg',
      '/images/workshops/img_p42_1.jpg',
      '/images/workshops/img_p42_2.jpg',
      '/images/workshops/img_p42_3.jpg',
      '/images/workshops/img_p42_4.jpg',
      '/images/workshops/img_p42_5.jpg',
      '/images/workshops/img_p42_6.jpg'
    ],
    year: '2023',
    month: 'August',
    displayFormat: 'landscape',
    gridSpan: 2
  },
  {
    id: 'sonderanfertigungen',
    title: 'Sonderanfertigungen',
    description: 'Sonderanfertigungen in Zusammenarbeit mit Vogel Studio. Individuelle Spiegel, Türgriffe und Griffe aus Messing, Glas und Aluminium.',
    category: 'Collaboration',
    materials: ['Messing', 'Glas', 'Aluminium'],
    techniques: ['Metallverarbeitung', 'Guss', 'Handwerk'],
    previewImages: [
      '/images/sonderanfertigungen/img_p43_1.jpg',
      '/images/sonderanfertigungen/img_p44_1.jpg',
      '/images/sonderanfertigungen/img_p45_1.jpg'
    ],
    images: [
      '/images/sonderanfertigungen/img_p43_1.jpg',
      '/images/sonderanfertigungen/img_p43_2.jpg',
      '/images/sonderanfertigungen/img_p43_3.jpg',
      '/images/sonderanfertigungen/img_p43_4.jpg',
      '/images/sonderanfertigungen/img_p44_1.jpg',
      '/images/sonderanfertigungen/img_p44_2.jpg',
      '/images/sonderanfertigungen/img_p44_3.jpg',
      '/images/sonderanfertigungen/img_p44_4.jpg',
      '/images/sonderanfertigungen/img_p45_1.jpg',
      '/images/sonderanfertigungen/img_p45_2.jpg',
      '/images/sonderanfertigungen/img_p45_3.jpg',
      '/images/sonderanfertigungen/img_p45_4.jpg'
    ],
    year: '2020',
    month: 'December',
    displayFormat: 'square'
  }
];
