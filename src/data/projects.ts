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
    id: 'project-1',
    title: 'Prismatic Lens Table',
    description: 'A sculptural coffee table that plays with light refraction. The embedded optical lenses create ever-changing caustic patterns on the surrounding surfaces as daylight moves through the space.',
    category: 'Furniture',
    materials: ['Oak wood', 'Optical glass', 'Brass'],
    techniques: ['CNC milling', 'Hand finishing', 'Glass cutting'],
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
      'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80',
      'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800&q=80',
    ],
    year: '2024',
    month: 'JAN',
    displayFormat: 'portrait',
    gridSpan: 1,
  },
  {
    id: 'project-2',
    title: 'Spectrum Wall Light',
    description: 'A wall-mounted light fixture that disperses light into its spectral components, painting the wall with a subtle rainbow gradient that shifts throughout the day.',
    category: 'Lighting',
    materials: ['Aluminum', 'Prism glass', 'LED'],
    techniques: ['3D printing', 'Anodizing', 'Optical alignment'],
    images: [
      'https://images.unsplash.com/photo-507473885765-e6ed057f782c?w=800&q=80',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80',
      'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&q=80',
    ],
    year: '2024',
    month: 'MAR',
    displayFormat: 'landscape',
    gridSpan: 2,
  },
  {
    id: 'project-3',
    title: 'Reflection Console',
    description: 'A minimalist console table with a polished stainless steel surface that mirrors its environment, creating an interplay between the object and its surroundings.',
    category: 'Furniture',
    materials: ['Stainless steel', 'Black marble'],
    techniques: ['Laser cutting', 'Mirror polishing', 'Stone work'],
    images: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80',
      'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80',
    ],
    year: '2023',
    month: 'SEP',
    displayFormat: 'square',
    gridSpan: 1,
  },
  {
    id: 'project-4',
    title: 'Kinetic Light Sculpture',
    description: 'An interactive sculpture responding to air movement, featuring delicate metal elements that cast dynamic shadow patterns on surrounding surfaces.',
    category: 'Art Installation',
    materials: ['Titanium', 'Carbon fiber'],
    techniques: ['Precision machining', 'Balance engineering'],
    images: [
      'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&q=80',
      'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&q=80',
      'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    ],
    media: [
      {
        type: 'video',
        url: 'https://videos.pexels.com/video-files/856640/856640-hd_1920_1080_30fps.mp4',
        poster: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&q=80',
      },
      { type: 'image', url: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&q=80' },
    ],
    year: '2023',
    month: 'JUN',
    displayFormat: 'wide',
    gridSpan: 2,
  },
  {
    id: 'project-5',
    title: 'Chromatic Vessel',
    description: 'A series of hand-blown glass vessels with embedded dichroic elements that shift color based on viewing angle and light conditions.',
    category: 'Objects',
    materials: ['Borosilicate glass', 'Dichroic coating'],
    techniques: ['Glass blowing', 'Kiln forming', 'Coating application'],
    images: [
      'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=800&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80',
      'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=800&q=80',
    ],
    year: '2023',
    month: 'APR',
    displayFormat: 'portrait',
    gridSpan: 1,
  },
  {
    id: 'project-6',
    title: 'Shadow Clock',
    description: 'A functional timepiece that tells time through shadow play rather than traditional hands, creating a meditative experience of time passing.',
    category: 'Objects',
    materials: ['Bronze', 'Frosted acrylic'],
    techniques: ['Lost wax casting', 'CNC routing'],
    images: [
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&q=80',
      'https://images.unsplash.com/photo-1415604934674-561df9abf539?w=800&q=80',
      'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&q=80',
      'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800&q=80',
    ],
    year: '2022',
    month: 'NOV',
    displayFormat: 'square',
    gridSpan: 1,
  },
  {
    id: 'project-7',
    title: 'Gradient Shelf',
    description: 'A wall-mounted shelving system where each shelf transitions through a subtle color gradient, creating depth and visual interest in minimal spaces.',
    category: 'Furniture',
    materials: ['Solid ash', 'Natural pigments'],
    techniques: ['Steam bending', 'Gradient staining', 'Hand finishing'],
    images: [
      'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800&q=80',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
      'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80',
    ],
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800&q=80' },
      {
        type: 'video',
        url: 'https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4',
        poster: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
      },
    ],
    year: '2022',
    month: 'AUG',
    displayFormat: 'landscape',
    gridSpan: 1,
  },
  {
    id: 'project-8',
    title: 'Luminous Pendant',
    description: 'A pendant light that combines traditional paper craft with modern LED technology, creating soft, diffused illumination with organic forms.',
    category: 'Lighting',
    materials: ['Japanese washi paper', 'Brass', 'LED'],
    techniques: ['Paper folding', 'Metal spinning', 'Light engineering'],
    images: [
      'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=800&q=80',
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80',
      'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&q=80',
    ],
    year: '2022',
    month: 'MAY',
    displayFormat: 'portrait',
    gridSpan: 1,
  },
  {
    id: 'project-9',
    title: 'Monolith Side Table',
    description: 'A sculptural side table carved from a single block of basalt, celebrating the raw beauty of natural stone with minimal intervention.',
    category: 'Furniture',
    materials: ['Basalt stone'],
    techniques: ['Diamond wire cutting', 'Hand polishing', 'Natural finishing'],
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80',
      'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80',
    ],
    year: '2021',
    month: 'DEC',
    displayFormat: 'square',
    gridSpan: 1,
  },
];
