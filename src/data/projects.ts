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
  images: string[];
  media?: ProjectMedia[];
  year: string;
  month: string;
  displayFormat?: 'portrait' | 'square' | 'landscape' | 'wide';
  gridSpan?: 1 | 2;
  externalLink?: string;
}

export const projects: Project[] = [
  {
    id: 'glug',
    title: 'Glug',
    description: 'Das Projekt Glug entstand im Rahmen meines Masterstudiums mit Fokus auf Social Design und setzt sich mit der Müllvermeidung, insbesondere von Plastikflaschen, auseinander. Eine mobile Pop-Up Station dient als interaktiver Informationsstand. Durch ein spielerisches Quiz werden Bürger*innen über die Vorteile von Leitungswasser aufgeklärt.',
    category: 'Social Design',
    materials: ['3D-Druck', 'Lastenrad', 'Mehrwegflaschen'],
    techniques: ['Social Design', '3D-Druck', 'Konstruktion', 'Corporate Design'],
    images: [
      '/images/glug/glug-1.jpg',
      '/images/glug/glug-2.jpg',
      '/images/glug/glug-3.png',
      '/images/glug/glug-4.jpg',
    ],
    year: '2023',
    month: 'JUN',
    displayFormat: 'landscape',
    gridSpan: 2,
  },
  {
    id: 'glasbaustein',
    title: 'Glasbaustein',
    description: 'Aus Glas in Kombination mit dem 3D-Druckverfahren wird eine einzigartige Leuchte, die traditionsreiches Handwerk mit neuster Technologie kombiniert. Der dabei entstehende Kontrast erzeugt ein lebendiges Spiel der Gegensätze und Gefühle.',
    category: 'Lighting',
    materials: ['Glas', '3D-Druck'],
    techniques: ['Glasblasen', '3D-Druck', 'Prototyping', 'Konstruktion'],
    images: [
      '/images/glasbaustein/glasbaustein-1.jpg',
      '/images/glasbaustein/glasbaustein-2.jpg',
      '/images/glasbaustein/glasbaustein-3.jpg',
      '/images/glasbaustein/glasbaustein-4.jpg',
      '/images/glasbaustein/glasbaustein-5.jpg',
    ],
    year: '2020',
    month: 'MAR',
    displayFormat: 'portrait',
    gridSpan: 1,
  },
  {
    id: 'atobe',
    title: 'AtoBe',
    description: 'Mit diesem Konzept wird ein holistischer Ansatz generiert, der Zukunftstechnologie mit Benutzer*innenbedürfnissen verbindet. Teil-Individuelle Buslinienerstellung und sinnvoller Einsatz der E-Mobilität im ÖPNV. Weniger Fahrzeuge auf der Straße durch attraktiveren ÖPNV.',
    category: 'Mobility Concept',
    materials: ['3D-Druck', 'Konzept'],
    techniques: ['Konzept', 'Marktforschung', 'Personas', 'Analyse', '3D-Druck', 'Prototypen'],
    images: [
      '/images/atobe/atobe-1.jpg',
      '/images/atobe/atobe-2.jpg',
      '/images/atobe/atobe-3.jpg',
      '/images/atobe/atobe-4.jpg',
    ],
    year: '2019',
    month: 'SEP',
    displayFormat: 'landscape',
    gridSpan: 2,
  },
  {
    id: 'oru',
    title: 'ORU',
    description: 'Ein sauberer geordneter Schreibtisch bildet häufig die eigene Gedankenwelt ab. Mit der Idee ein möglichst flaches, wenig aufdringliches Schreibtischbild zu kreieren wurde die Oru (jap. falten) Leuchte entworfen. Durch den minimalen und doch offenen Charakter der Leuchte dringen Licht und Ideen wie von alleine durch.',
    category: 'Lighting',
    materials: ['Kunststoff', 'LED', '3D-Druck'],
    techniques: ['Arbeitshygiene', 'Kunststoffe', '3D-Druck', 'Prototypen', 'Konstruktion'],
    images: [
      '/images/oru/oru-1.png',
      '/images/oru/oru-2.jpg',
      '/images/oru/oru-3.jpg',
      '/images/oru/oru-4.jpg',
      '/images/oru/oru-5.jpg',
    ],
    year: '2019',
    month: 'JUN',
    displayFormat: 'portrait',
    gridSpan: 1,
  },
  {
    id: 'l-ement',
    title: 'L-Ement',
    description: 'Die Exploration eines neuen Stuhls aus nur einem Formteil. Aus der zweiten Dimension wird zusammengebaut die dritte Dimension. Dabei spielten besonders die Packmaße eine große Rolle. Werkzeugloser Aufbau durch Holzmutterschrauben.',
    category: 'Furniture',
    materials: ['Holz', '3D-Druck'],
    techniques: ['Ergonomie', 'Holzbearbeitung', 'Prototypen', 'Konstruktion', 'CNC-Fräsen'],
    images: [
      '/images/l-ement/l-ement-1.jpg',
      '/images/l-ement/l-ement-2.jpg',
      '/images/l-ement/l-ement-3.jpg',
      '/images/l-ement/l-ement-4.jpg',
      '/images/l-ement/l-ement-5.jpg',
    ],
    year: '2019',
    month: 'MAY',
    displayFormat: 'portrait',
    gridSpan: 1,
  },
  {
    id: 'infrarotthermometer',
    title: 'Infrarotthermometer',
    description: 'Das Fieberthermometer ist ein essenzielles Produkt jeden Haushalts. In Ausnahmesituationen, wie Krankheit, muss das Fieberthermometer bereit sein. Die Interaktion zwischen Mensch und Objekt ist dabei besonders wichtig, da es sich um eine intime Situation handelt.',
    category: 'Product Design',
    materials: ['Bio-Kunststoff', 'LED-Matrix', 'Li-Ion-Akku'],
    techniques: ['Claymodellierung', 'Ergonomie', '3D-Scanning', 'Flächenrückführung', 'Rendering'],
    images: [
      '/images/infrarotthermometer/infrarotthermometer-1.jpg',
      '/images/infrarotthermometer/infrarotthermometer-2.jpg',
      '/images/infrarotthermometer/infrarotthermometer-3.png',
      '/images/infrarotthermometer/infrarotthermometer-4.jpg',
      '/images/infrarotthermometer/infrarotthermometer-5.jpg',
    ],
    year: '2019',
    month: 'MAR',
    displayFormat: 'square',
    gridSpan: 1,
  },
];
