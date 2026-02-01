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
    title: 'Metal+Glass Form Exhibition',
    venue: 'Schloss Landestrost',
    location: 'Neustadt am Rübenberge, Germany',
    date: '2020',
    year: '2020',
    type: 'group',
    description: 'Public exhibition of metal and glass works.',
  },
  {
    id: 'ex-2',
    title: 'Graduate Exhibition',
    venue: 'HAWK Hildesheim',
    location: 'Hildesheim, Germany',
    date: '2019',
    year: '2019',
    type: 'group',
    description: 'Exhibition of bachelor theses from the Product Design program.',
  },
  {
    id: 'ex-3',
    title: 'Graduate Exhibition',
    venue: 'HAWK Hildesheim',
    location: 'Hildesheim, Germany',
    date: '2023',
    year: '2023',
    type: 'group',
    description: 'Exhibition of master theses from the Integrative Design program.',
  },
];

export const cooperations: Cooperation[] = [
  {
    id: 'coop-1',
    name: 'Vogel Studio',
    role: 'Contemporary Art Design',
    year: '2024',
    description: 'Collaboration on contemporary art and design projects.',
  },
  {
    id: 'coop-2',
    name: 'Messebau EOA - Elements of Arts',
    role: 'Trade Fair Visualization',
    year: '2024',
    description: 'Exhibition stand visualization and design.',
  },
  {
    id: 'coop-3',
    name: 'HAWK University of Applied Sciences and Arts',
    role: 'Teaching & Research',
    year: '2017–2026',
    description: 'Tutoring, workshops and lecturing.',
  },
  {
    id: 'coop-4',
    name: 'City of Hildesheim',
    role: 'Participation & Urban Development',
    year: '2023',
    description: 'Project Glug - Citizen participation and sustainability.',
  },
  {
    id: 'coop-5',
    name: 'Britta Diers GmbH',
    role: 'Interior & Event Architecture',
    year: '2021',
    description: 'Interior design, trade fair design, event architecture.',
  },
  {
    id: 'coop-6',
    name: 'Freie Werkstatt Hildesheim gGmbH',
    role: 'Workshop Management',
    year: '2023–2025',
    description: 'Social makerspace - Workshop management and supervision of holiday programs.',
  },
  {
    id: 'coop-7',
    name: 'Cluster Projekte GmbH',
    role: 'Employee',
    year: '2023',
    description: 'Project work and construction.',
  },
  {
    id: 'coop-8',
    name: 'design for human nature GmbH',
    role: 'Internship',
    year: '2022',
    description: 'Workshop Micasa Retail - Supervision and preparation.',
  },
  {
    id: 'coop-9',
    name: 'Bosch GmbH',
    role: 'Working Student',
    year: '2021',
    description: 'Working student position during Master\'s studies.',
  },
];

export const awards: Award[] = [
  {
    id: 'award-1',
    title: 'Ideas Competition "Hi2025"',
    organization: 'City of Hildesheim',
    year: '2023',
    description: '2nd Place',
  },
  {
    id: 'award-2',
    title: 'Best Bachelor Thesis Nomination',
    organization: 'HAWK Hildesheim',
    year: '2019',
    description: 'Nomination for best bachelor thesis in the Product Design program.',
  },
];
