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
    description: 'The Glug project was developed during my Master\'s studies with a focus on Social Design and addresses waste reduction, particularly plastic bottles. A mobile pop-up station serves as an interactive information stand. Through a playful quiz, citizens learn about the benefits of tap water.',
    category: 'Social Design',
    materials: ['3D Printing', 'Cargo Bike', 'Reusable Bottles'],
    techniques: ['Social Design', '3D Printing', 'Construction', 'Corporate Design'],
    images: [
      '/images/glug/glug-1.jpg',
      '/images/glug/glug-2.jpg',
      '/images/glug/glug-3.jpg',
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
    description: 'A unique luminaire combining glass with 3D printing technology, merging traditional craftsmanship with cutting-edge technology. The resulting contrast creates a vibrant interplay of opposites and emotions.',
    category: 'Lighting',
    materials: ['Glass', '3D Printing'],
    techniques: ['Glassblowing', '3D Printing', 'Prototyping', 'Construction'],
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
    description: 'This concept generates a holistic approach that combines future technology with user needs. Semi-individual bus route creation and meaningful use of e-mobility in public transport. Fewer vehicles on the road through more attractive public transportation.',
    category: 'Mobility Concept',
    materials: ['3D Printing', 'Concept'],
    techniques: ['Concept', 'Market Research', 'Personas', 'Analysis', '3D Printing', 'Prototypes'],
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
    description: 'A clean, organized desk often reflects one\'s own mindset. With the idea of creating a flat, unobtrusive desk image, the Oru (Japanese: to fold) lamp was designed. Through its minimal yet open character, light and ideas flow through effortlessly.',
    category: 'Lighting',
    materials: ['Plastic', 'LED', '3D Printing'],
    techniques: ['Work Hygiene', 'Plastics', '3D Printing', 'Prototypes', 'Construction'],
    images: [
      '/images/oru/oru-1.png',
      '/images/oru/oru-2.jpg',
      '/images/oru/oru-3.jpg',
      '/images/oru/oru-4.jpg',
      '/images/oru/oru-5.jpg',
    ],
    year: '2019',
    month: 'JUN',
    displayFormat: 'landscape',
    gridSpan: 1,
  },
  {
    id: 'l-ement',
    title: 'L-Ement',
    description: 'The exploration of a new chair from just one molded part. From two dimensions assembled into three dimensions. Pack dimensions played a particularly important role. Tool-free assembly using wooden nut screws.',
    category: 'Furniture',
    materials: ['Wood', '3D Printing'],
    techniques: ['Ergonomics', 'Woodworking', 'Prototypes', 'Construction', 'CNC Milling'],
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
    title: 'Infrared Thermometer',
    description: 'The fever thermometer is an essential product in every household. In exceptional situations, such as illness, the thermometer must be ready. The interaction between human and object is particularly important, as it is an intimate situation.',
    category: 'Product Design',
    materials: ['Bio-Plastic', 'LED Matrix', 'Li-Ion Battery'],
    techniques: ['Clay Modeling', 'Ergonomics', '3D Scanning', 'Surface Reconstruction', 'Rendering'],
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
  {
    id: 'vogel-studio',
    title: 'Vogel Studio Collaborations',
    description: 'A collection of experimental objects created in collaboration with Vogel Studio. These pieces explore the boundaries between art and design through innovative material combinations and processes including bio-algorithms, ceramic 3D printing, glass-metal fusion, and AI-generated art.',
    category: 'Collaboration',
    materials: ['Ceramics', 'Glass', 'Metal', 'Digital', '3D Printing'],
    techniques: ['Bio-Algorithms', 'Ceramic 3D Printing', 'Material Fusion', 'AI Art', 'Generative Design'],
    images: [
      '/images/vogel-studio/vogel-studio-1.jpg',
      '/images/vogel-studio/vogel-studio-2.jpg',
      '/images/vogel-studio/vogel-studio-3.jpg',
      '/images/vogel-studio/vogel-studio-4.jpg',
      '/images/vogel-studio/vogel-studio-5.jpg',
      '/images/vogel-studio/vogel-studio-6.jpg',
    ],
    year: '2023',
    month: 'MAR',
    displayFormat: 'landscape',
    gridSpan: 2,
  },
  {
    id: 'blender-workshop',
    title: 'Blender Quick & Easy',
    description: 'Workshop introducing 3D modeling with Blender. Participants learn the basics of 3D visualization and rendering in a hands-on environment.',
    category: 'Workshop',
    materials: ['Digital', 'Software'],
    techniques: ['3D Modeling', 'Rendering', 'Teaching'],
    images: [
      '/images/blender-workshop/blender-workshop-1.jpg',
    ],
    year: '2022',
    month: 'OCT',
    displayFormat: 'landscape',
    gridSpan: 1,
  },
];
