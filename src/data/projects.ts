export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  materials: string[];
  techniques: string[];
  images: string[];
  year: string;
  externalLink?: string;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Prismatic Lens Table',
    description: 'A sculptural coffee table that plays with light refraction. The embedded optical lenses create ever-changing caustic patterns on the surrounding surfaces as daylight moves through the space.',
    category: 'Furniture',
    materials: ['Oak wood', 'Optical glass', 'Brass'],
    techniques: ['CNC milling', 'Hand finishing', 'Glass cutting'],
    images: ['/placeholder.svg'],
    year: '2024',
  },
  {
    id: 'project-2',
    title: 'Spectrum Wall Light',
    description: 'A wall-mounted light fixture that disperses light into its spectral components, painting the wall with a subtle rainbow gradient that shifts throughout the day.',
    category: 'Lighting',
    materials: ['Aluminum', 'Prism glass', 'LED'],
    techniques: ['3D printing', 'Anodizing', 'Optical alignment'],
    images: ['/placeholder.svg'],
    year: '2024',
  },
  {
    id: 'project-3',
    title: 'Reflection Console',
    description: 'A minimalist console table with a polished stainless steel surface that mirrors its environment, creating an interplay between the object and its surroundings.',
    category: 'Furniture',
    materials: ['Stainless steel', 'Black marble'],
    techniques: ['Laser cutting', 'Mirror polishing', 'Stone work'],
    images: ['/placeholder.svg'],
    year: '2023',
  },
  {
    id: 'project-4',
    title: 'Kinetic Light Sculpture',
    description: 'An interactive sculpture responding to air movement, featuring delicate metal elements that cast dynamic shadow patterns on surrounding surfaces.',
    category: 'Art Installation',
    materials: ['Titanium', 'Carbon fiber'],
    techniques: ['Precision machining', 'Balance engineering'],
    images: ['/placeholder.svg'],
    year: '2023',
  },
  {
    id: 'project-5',
    title: 'Chromatic Vessel',
    description: 'A series of hand-blown glass vessels with embedded dichroic elements that shift color based on viewing angle and light conditions.',
    category: 'Objects',
    materials: ['Borosilicate glass', 'Dichroic coating'],
    techniques: ['Glass blowing', 'Kiln forming', 'Coating application'],
    images: ['/placeholder.svg'],
    year: '2023',
  },
  {
    id: 'project-6',
    title: 'Shadow Clock',
    description: 'A functional timepiece that tells time through shadow play rather than traditional hands, creating a meditative experience of time passing.',
    category: 'Objects',
    materials: ['Bronze', 'Frosted acrylic'],
    techniques: ['Lost wax casting', 'CNC routing'],
    images: ['/placeholder.svg'],
    year: '2022',
  },
];
