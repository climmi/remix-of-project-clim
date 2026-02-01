export interface Exhibition {
  id: string;
  title: string;
  venue: string;
  location: string;
  date: string;
  year: string;
  type: 'solo' | 'group' | 'fair';
  description?: string;
}

export interface Cooperation {
  id: string;
  name: string;
  role: string;
  year: string;
  description?: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
  description?: string;
}

export const exhibitions: Exhibition[] = [
  {
    id: 'ex-1',
    title: 'Metall+Glasform Ausstellung',
    venue: 'Schloss Landestrost',
    location: 'Neustadt am Rübenberge, Germany',
    date: '2020',
    year: '2020',
    type: 'group',
    description: 'Öffentliche Ausstellung von Metall- und Glasarbeiten.',
  },
  {
    id: 'ex-2',
    title: 'Absolventenausstellung',
    venue: 'HAWK Hildesheim',
    location: 'Hildesheim, Germany',
    date: '2019',
    year: '2019',
    type: 'group',
    description: 'Ausstellung der Bachelorarbeiten des Produktdesign-Studiengangs.',
  },
];

export const cooperations: Cooperation[] = [
  {
    id: 'coop-1',
    name: 'Freie Werkstatt Hildesheim gGmbH',
    role: 'Werkstattleitung',
    year: '2023-2025',
    description: 'Sozialer Makerspace - Werkstattleitung und Betreuung von Ferienprogrammen.',
  },
  {
    id: 'coop-2',
    name: 'Cluster Projekte GmbH',
    role: 'Mitarbeiter',
    year: '2023',
    description: 'Projektarbeit und Konstruktion.',
  },
  {
    id: 'coop-3',
    name: 'design for human nature GmbH',
    role: 'Praktikum',
    year: '2022',
    description: 'Workshop Micasa Retail - Betreuung und Vorbereitung.',
  },
  {
    id: 'coop-4',
    name: 'Britta Diers GmbH',
    role: 'Kooperation',
    year: '2021',
    description: 'Interieur & Design, Messedesign, Eventarchitektur.',
  },
  {
    id: 'coop-5',
    name: 'Stadt Hildesheim',
    role: 'Projektpartner',
    year: '2023',
    description: 'Partizipation & Stadtentwicklung - Projekt Glug.',
  },
  {
    id: 'coop-6',
    name: 'Bosch GmbH',
    role: 'Werkstudent',
    year: '2021',
    description: 'Werkstudententätigkeit während des Masterstudiums.',
  },
];

export const awards: Award[] = [
  {
    id: 'award-1',
    title: 'Ideenwettbewerb "Hi2025"',
    organization: 'Stadt Hildesheim',
    year: '2023',
    description: '2. Platzierung',
  },
  {
    id: 'award-2',
    title: 'Beste Bachelorarbeit Nominierung',
    organization: 'HAWK Hildesheim',
    year: '2019',
    description: 'Nominierung für die beste Bachelorarbeit im Studiengang Produktdesign.',
  },
];
