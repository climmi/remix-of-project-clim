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

export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  year: string;
  description?: string;
}

export const workshops: Workshop[] = [
  {
    id: 'ws-1',
    title: 'Blender Quick & Easy',
    organization: 'InCollege Workshop, HAWK',
    year: '2022',
    description: 'Compact and practical introduction to Blender for students. Basics of modeling, materials, lighting, rendering and animation.',
  },
  {
    id: 'ws-2',
    title: 'Workshop Micasa Retail',
    organization: 'design for human nature GmbH',
    year: '2023',
    description: 'Supervision and preparation of a workshop for a large retail client. Development of interaction possibilities and hybrid presentation methods.',
  },
];

export const teachingExperience: TeachingExperience[] = [
  {
    id: 'teach-1',
    title: 'Lecturer "Digital Environments"',
    organization: 'HAWK Hildesheim',
    year: '2026',
    description: 'Physical Computing - Coded Design. Teaching course on digital environments and interactive design.',
  },
  {
    id: 'teach-2',
    title: 'Blender Quick & Easy Workshop',
    organization: 'InCollege HAWK',
    year: '2022',
    description: 'Introduction to 3D modeling and rendering with Blender.',
  },
  {
    id: 'teach-3',
    title: 'CAD I & CAD II Tutor',
    organization: 'HAWK Hildesheim',
    year: '2017',
    duration: '4 Semesters',
    description: 'Mentoring students in CAD courses with Rhino 3D and KeyShot. 3D scanning, post-processing and prototype manufacturing.',
  },
];

export const workshopPrograms: WorkshopProgram[] = [
  { id: 'prog-1', name: 'Spot-Your-Job', year: '2025', organization: 'Freie Werkstatt Hildesheim' },
  { id: 'prog-2', name: 'Projekt Anstoß', year: '2025', organization: 'Freie Werkstatt Hildesheim' },
  { id: 'prog-3', name: 'Easter Holiday Program', year: '2024', organization: 'Freie Werkstatt Hildesheim' },
  { id: 'prog-4', name: 'Summer Holiday Program', year: '2024', organization: 'Freie Werkstatt Hildesheim' },
  { id: 'prog-5', name: 'Spot-Your-Job', year: '2024', organization: 'Freie Werkstatt Hildesheim' },
  { id: 'prog-6', name: 'Future Day', year: '2024', organization: 'Freie Werkstatt Hildesheim' },
  { id: 'prog-7', name: 'Easter Holiday Program', year: '2023', organization: 'Freie Werkstatt Hildesheim' },
  { id: 'prog-8', name: 'Summer Holiday Program', year: '2023', organization: 'Freie Werkstatt Hildesheim' },
  { id: 'prog-9', name: 'Spot-Your-Job', year: '2023', organization: 'Freie Werkstatt Hildesheim' },
  { id: 'prog-10', name: 'Future Day', year: '2023', organization: 'Freie Werkstatt Hildesheim' },
];

export const workExperience: WorkExperience[] = [
  {
    id: 'work-0',
    title: 'Lecturer, Physical Computing',
    company: 'HAWK Hildesheim',
    year: '2025–Now',
    description: 'Teaching position in Physical Computing.',
  },
  {
    id: 'work-1',
    title: 'Workshop Manager, Construction & Visual Artist',
    company: 'Cluster Projekte GmbH & Freie Werkstatt Hildesheim gGmbH',
    year: '2023–2025',
    description: 'Workshop management and supervision of private and commercial projects. Planning and implementation of workshops.',
  },
  {
    id: 'work-2',
    title: 'Internship',
    company: 'design for human nature GmbH',
    year: '2022',
    description: 'Physical Computing - Coded Design.',
  },
  {
    id: 'work-3',
    title: 'Working Student',
    company: 'Bosch GmbH',
    year: '2021',
    description: 'Working student position during Master\'s studies.',
  },
  {
    id: 'work-4',
    title: 'Self-Employment',
    company: 'Design & Art',
    year: '2019–2021',
    description: 'Design, construction, visualization & production.',
  },
  {
    id: 'work-5',
    title: 'Internship',
    company: 'TWO BOLD KG',
    year: '2018',
    description: 'Practical experience during Bachelor\'s studies.',
  },
  {
    id: 'work-6',
    title: 'Specialist',
    company: 'Apple Retail Hannover',
    year: '2015–2016',
    description: 'Sales and customer consulting at Apple Store.',
  },
];

export const skills = {
  competencies: [
    'Concept',
    'Sketching',
    'Ideation',
    'Rapid Prototyping',
    '3D Scanning/Printing',
    'Model Making',
    'Construction',
    'Technical Drawing',
    'Metalworking',
    'Woodworking',
    'Ceramics',
    'Glass Objects',
    'Copper/Aluminum Casting',
  ],
  software: [
    'Adobe InDesign',
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Rhinoceros 3D',
    'Grasshopper',
    'Vray for Rhino',
    'Keyshot',
    'Fusion360',
    'Blender',
    'Bambu Studio',
    'RhinoCAM',
    'Lightburn',
    'ESTLCAM',
  ],
  languages: ['German', 'English'],
};
