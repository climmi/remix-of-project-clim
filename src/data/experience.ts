export interface Workshop {
  id: string;
  title: string;
  organization: string;
  year: string;
  description?: string;
}

export interface TeachingExperience {
  id: string;
  title: string;
  organization: string;
  year: string;
  duration?: string;
  description?: string;
}

export interface WorkshopProgram {
  id: string;
  name: string;
  year: string;
  organization: string;
}

export const workshops: Workshop[] = [
  {
    id: 'ws-1',
    title: 'Blender Quick & Easy',
    organization: 'InCollege Workshop, HAWK',
    year: '2022',
    description: 'Kompakte und praxisorientierte Einführung in Blender für Studierende. Grundlagen der Modellierung, Materialien, Beleuchtung, Rendering und Animation.',
  },
  {
    id: 'ws-2',
    title: 'Workshop Micasa Retail',
    organization: 'design for human nature GmbH',
    year: '2023',
    description: 'Betreuung und Vorbereitung eines Workshops für einen großen Retail-Kunden. Entwicklung von Interaktionsmöglichkeiten und hybriden Präsentationsmethoden.',
  },
];

export const teachingExperience: TeachingExperience[] = [
  {
    id: 'teach-1',
    title: 'CAD I Tutor',
    organization: 'HAWK Hildesheim',
    year: '2017',
    duration: '4 Semester',
    description: 'Betreuung von Studierenden in CAD-Kursen mit Rhino 3D und KeyShot. 3D-Scanning, Nachbearbeitung und Fertigung von Prototypen.',
  },
];

export const workshopPrograms: WorkshopProgram[] = [
  { id: 'prog-1', name: 'Spot-Your-Job', year: '2025', organization: 'Freie Werkstatt Hildesheim' },
  { id: 'prog-2', name: 'Projekt Anstoß', year: '2025', organization: 'Freie Werkstatt Hildesheim' },
  { id: 'prog-3', name: 'Osterferienprogramm', year: '2024', organization: 'Freie Werkstatt Hildesheim' },
  { id: 'prog-4', name: 'Sommerferienprogramm', year: '2024', organization: 'Freie Werkstatt Hildesheim' },
  { id: 'prog-5', name: 'Spot-Your-Job', year: '2024', organization: 'Freie Werkstatt Hildesheim' },
  { id: 'prog-6', name: 'Zukunftstag', year: '2024', organization: 'Freie Werkstatt Hildesheim' },
  { id: 'prog-7', name: 'Osterferienprogramm', year: '2023', organization: 'Freie Werkstatt Hildesheim' },
  { id: 'prog-8', name: 'Sommerferienprogramm', year: '2023', organization: 'Freie Werkstatt Hildesheim' },
  { id: 'prog-9', name: 'Spot-Your-Job', year: '2023', organization: 'Freie Werkstatt Hildesheim' },
  { id: 'prog-10', name: 'Zukunftstag', year: '2023', organization: 'Freie Werkstatt Hildesheim' },
];

export const skills = {
  competencies: [
    'Konzept',
    'Sketching',
    'Ideation',
    'Rapid Prototyping',
    '3D-Scanning/-Druck',
    'Modellbau',
    'Konstruktion',
    'Technische Zeichnung',
    'Metallverarbeitung',
    'Holzverarbeitung',
    'Keramikerstellung',
    'Glasobjekte',
    'Kupfer-/Aluminium-Guss',
  ],
  software: [
    'Adobe InDesign',
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Rhinoceros 3D',
    'Grasshopper',
    'Vray für Rhino',
    'Keyshot',
    'Fusion360',
    'Blender',
    'Bambu Studio',
    'RhinoCAM',
    'Lightburn',
    'ESTLCAM',
  ],
  languages: ['Deutsch', 'Englisch'],
};
