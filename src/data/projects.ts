export interface ProjectMedia {
  type: 'image' | 'video';
  url: string;
  poster?: string;
  format?: 'portrait' | 'square' | 'landscape' | 'wide';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  author?: string;
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
    id: 'glasbaustein',
    title: 'GLASS BRICK',
    author: 'PROJECT CLIM',
    description: 'Using glass combined with 3D printing, a unique lamp is created that merges traditional craftsmanship with the latest technology. The resulting contrast creates a lively play of opposites and emotions.',
    category: 'Lighting Design',
    materials: ['Glass', 'Steel', '3D-printed plastic'],
    techniques: ['Glassblowing', 'Welding', '3D printing', 'Construction'],
    previewImages: [
      '/images/glasbaustein/img_p36_1.jpg',
      '/images/glasbaustein/img_p40_1.jpg',
      '/images/glasbaustein/img_p41_1.jpg'
    ],
    images: [
      '/images/glasbaustein/img_p36_1.jpg',
     /* '/images/glasbaustein/img_p37_1.jpg',
      '/images/glasbaustein/img_p37_2.jpg',
      '/images/glasbaustein/img_p37_3.jpg',
      '/images/glasbaustein/img_p37_4.jpg',*/
      '/images/glasbaustein/img_p38_1.jpg',
      '/images/glasbaustein/img_p38_2.jpg',
      '/images/glasbaustein/img_p38_3.jpg',
      /*'/images/glasbaustein/img_p38_4.jpg',
      '/images/glasbaustein/img_p38_5.jpg',*/
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
    media: [
      { type: 'image', url: '/images/glasbaustein/img_p36_1.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/glasbaustein/img_p38_1.jpg', format: 'wide', maxWidth: '3xl' },
      { type: 'image', url: '/images/glasbaustein/img_p38_2.jpg', format: 'wide', maxWidth: '3xl' },
      { type: 'image', url: '/images/glasbaustein/img_p38_3.jpg', format: 'portrait', maxWidth: '3xl' },
      { type: 'image', url: '/images/glasbaustein/img_p39_1.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/glasbaustein/img_p39_2.jpg', format: 'portrait', maxWidth: '3xl' },
      { type: 'image', url: '/images/glasbaustein/img_p39_3.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/glasbaustein/img_p39_4.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/glasbaustein/img_p39_5.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/glasbaustein/img_p39_6.png', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/glasbaustein/img_p40_1.jpg', format: 'portrait', maxWidth: '3xl' },
      { type: 'image', url: '/images/glasbaustein/img_p40_2.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/glasbaustein/img_p40_3.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/glasbaustein/img_p41_1.jpg', format: 'portrait', maxWidth: '3xl' }
    ],
    year: '2019',
    month: 'May',
    displayFormat: 'portrait'
  },
  {
    id: 'grow-mushrooms',
    title: 'GROW MUSHROOMS',
    author: 'PROJECT CLIM',
    description: 'In ceramic 3D printing, algorithmically generated structures were combined with the material properties of ceramics. Parametric design processes created forms for mushroom cultivation with maximized surface area for humidity regulation.',
    category: 'Bio Design',
    materials: ['Ceramic', 'Substrate'],
    techniques: ['Grasshopper', 'Ceramic 3D printing', 'Parametric design'],
    previewImages: [
      '/images/grow-mushrooms/img_p24_2.jpg',
      '/images/grow-mushrooms/img_p18_1.jpg',
      '/images/grow-mushrooms/img_p24_1.jpg'
    ],
    images: [
      '/images/grow-mushrooms/img_p16_1.jpg',
      /*'/images/grow-mushrooms/img_p17_1.jpg',
      '/images/grow-mushrooms/img_p17_2.jpg',
      '/images/grow-mushrooms/img_p17_3.jpg',*/
      '/images/grow-mushrooms/img_p18_1.jpg',
      //'/images/grow-mushrooms/img_p19_1.jpg',
      '/images/grow-mushrooms/img_p19_2.jpg',
      '/images/grow-mushrooms/img_p19_3.jpg',
      //'/images/grow-mushrooms/img_p20_2.jpg',
      /*'/images/grow-mushrooms/img_p20_3.jpg',
      '/images/grow-mushrooms/img_p22_1.jpg',
      '/images/grow-mushrooms/img_p23_1.jpg',*/
      '/images/grow-mushrooms/img_p24_1.jpg',
      '/images/grow-mushrooms/img_p24_2.jpg',
      '/images/grow-mushrooms/img_p24_3.jpg',
      '/images/grow-mushrooms/img_p24_4.jpg',
      '/images/grow-mushrooms/img_p25_1.jpg'
    ],
    media: [
      { type: 'image', url: '/images/grow-mushrooms/img_p24_2.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/grow-mushrooms/img_p16_1.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/grow-mushrooms/img_p18_1.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/grow-mushrooms/img_p19_2.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/grow-mushrooms/img_p19_3.jpg', format: 'portrait', maxWidth: '3xl' },
      { type: 'image', url: '/images/grow-mushrooms/img_p24_1.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/grow-mushrooms/img_p24_3.jpg', format: 'portrait', maxWidth: '3xl' },
      { type: 'image', url: '/images/grow-mushrooms/img_p24_4.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/grow-mushrooms/img_p25_1.jpg', format: 'landscape', maxWidth: '3xl' }
    ],
    year: '2022',
    month: 'April',
    displayFormat: 'portrait'
  },
  {
    id: 'glas-metall-fliese',
    title: 'GLASS METAL TILE',
    author: 'PROJECT CLIM',
    description: 'Glass and metal typically interact with the metal serving as the bounding form. The combination creates exciting surfaces, textures, and light effects. An experimental material study.',
    category: 'Material Experiment',
    materials: ['Glass', 'Metal', 'Glass granules'],
    techniques: ['Glass melting', 'Mold making', 'Metalworking'],
    previewImages: [
      '/images/glas-metall-fliese/img_p14_5.jpg',
      '/images/glas-metall-fliese/img_p14_1.jpg',
      '/images/glas-metall-fliese/img_p15_1.jpg'
    ],
    images: [
      '/images/glas-metall-fliese/img_p14_5.jpg',
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
      '/images/glas-metall-fliese/img_p14_6.jpg',
      '/images/glas-metall-fliese/img_p15_1.jpg'
    ],
    media: [
      { type: 'image', url: '/images/glas-metall-fliese/img_p14_5.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/glas-metall-fliese/img_p11_1.jpg', format: 'portrait', maxWidth: '3xl' },
      { type: 'image', url: '/images/glas-metall-fliese/img_p11_2.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/glas-metall-fliese/img_p12_1.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/glas-metall-fliese/img_p12_2.jpg', format: 'portrait', maxWidth: '3xl' },
      { type: 'image', url: '/images/glas-metall-fliese/img_p12_3.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/glas-metall-fliese/img_p13_1.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/glas-metall-fliese/img_p14_1.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/glas-metall-fliese/img_p14_2.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/glas-metall-fliese/img_p14_3.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/glas-metall-fliese/img_p14_4.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/glas-metall-fliese/img_p14_6.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/glas-metall-fliese/img_p15_1.jpg', format: 'portrait', maxWidth: '3xl' }
    ],
    year: '2019',
    month: 'November',
    displayFormat: 'portrait'
  },
  {
    id: 'sonderanfertigungen',
    title: 'CUSTOM OBJECTS',
    author: 'VOGEL STUDIO & PROJECT CLIM',
    description: 'Custom commissions in collaboration with Vogel Studio. Individual mirrors, door handles, and handles made of brass, glass, and aluminum.',
    category: 'Collaboration',
    materials: ['Brass', 'Glass', 'Aluminum'],
    techniques: ['Metalworking', 'Casting', 'Craftsmanship'],
    previewImages: [
      '/images/sonderanfertigungen/img_p44_1.jpg',
      '/images/sonderanfertigungen/img_p44_2.jpg',
      '/images/sonderanfertigungen/img_p45_3.jpg'
    ],
    images: [
      '/images/sonderanfertigungen/img_p44_1.jpg',
      '/images/sonderanfertigungen/img_p43_1.jpg',
      //'/images/sonderanfertigungen/img_p43_2.jpg',
      '/images/sonderanfertigungen/img_p43_3.jpg',
      //'/images/sonderanfertigungen/img_p43_4.jpg',
      '/images/sonderanfertigungen/img_p44_2.jpg',
      '/images/sonderanfertigungen/img_p44_3.jpg',
      //'/images/sonderanfertigungen/img_p44_4.jpg',
      //'/images/sonderanfertigungen/img_p45_1.jpg',
      '/images/sonderanfertigungen/img_p45_2.jpg',
      '/images/sonderanfertigungen/img_p45_3.jpg',
      '/images/sonderanfertigungen/img_p45_4.jpg'
    ],
    media: [
      { type: 'image', url: '/images/sonderanfertigungen/img_p44_1.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/sonderanfertigungen/img_p43_1.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/sonderanfertigungen/img_p43_3.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/sonderanfertigungen/img_p44_2.jpg', format: 'portrait', maxWidth: '3xl' },
      { type: 'image', url: '/images/sonderanfertigungen/img_p44_3.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/sonderanfertigungen/img_p45_2.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/sonderanfertigungen/img_p45_3.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/sonderanfertigungen/img_p45_4.jpg', format: 'square', maxWidth: '3xl' }
    ],
    year: '2020',
    month: 'December',
    displayFormat: 'portrait'
  },
  {
    id: 'fast-good-cheap',
    title: 'FAST GOOD CHEAP',
    author: 'PROJECT CLIM',
    description: 'The project addresses the challenges in design processes. A product can only fulfill two of the three attributes—fast, good, or cheap—at the same time. An interactive object illustrates this issue playfully.',
    category: 'Interactive Object',
    materials: ['3D-printed plastic', 'Arduino', 'Electronics'],
    techniques: ['Physical Computing', '3D printing', 'Arduino'],
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
    media: [
      { type: 'image', url: '/images/fast-good-cheap/img_p26_1.jpg', format: 'square', maxWidth: '3xl' },
//      { type: 'image', url: '/images/fast-good-cheap/img_p27_1.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/fast-good-cheap/img_p27_2.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/fast-good-cheap/img_p28_1.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/fast-good-cheap/img_p28_2.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/fast-good-cheap/img_p28_3.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/fast-good-cheap/img_p28_4.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/fast-good-cheap/img_p29_1.jpg', format: 'portrait', maxWidth: '3xl' },
      { type: 'image', url: '/images/fast-good-cheap/img_p29_2.jpg', format: 'portrait', maxWidth: '3xl' },
      { type: 'image', url: '/images/fast-good-cheap/img_p29_3.jpg', format: 'portrait', maxWidth: '3xl' },
      { type: 'image', url: '/images/fast-good-cheap/img_p30_1.jpg', format: 'portrait', maxWidth: '3xl' }
    ],
    year: '2022',
    month: 'July',
    displayFormat: 'portrait'
  },
  {
    id: 'l-ement',
    title: 'L-EMENT',
    author: 'PROJECT CLIM',
    description: 'The exploration of a new chair. The goal was to construct a chair from a flat semi-finished part consisting of only one molded piece. The aim was a tool-free assembly from repeated L-elements.',
    category: 'Furniture Design',
    materials: ['Wood', 'Threaded rods', 'Nuts'],
    techniques: ['CNC milling', 'Ergonomics', 'Woodworking', 'Prototyping', 'Construction'],
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
    media: [
      { type: 'image', url: '/images/l-ement/img_p17_1.jpg', format: 'portrait', maxWidth: '3xl' },
     /* { type: 'image', url: '/images/l-ement/img_p18_1.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/l-ement/img_p19_1.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/l-ement/img_p19_2.jpg', format: 'portrait', maxWidth: '3xl' },
      { type: 'image', url: '/images/l-ement/img_p19_3.jpg', format: 'portrait', maxWidth: '3xl' },
      { type: 'image', url: '/images/l-ement/img_p19_4.jpg', format: 'portrait', maxWidth: '3xl' },
      */{ type: 'image', url: '/images/l-ement/img_p20_1.jpg', format: 'portrait', maxWidth: '3xl' },
      { type: 'image', url: '/images/l-ement/img_p20_2.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/l-ement/img_p20_3.jpg', format: 'landscape', maxWidth: '3xl' },
    //  { type: 'image', url: '/images/l-ement/img_p20_4.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/l-ement/img_p21_1.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/l-ement/img_p21_2.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/l-ement/img_p21_3.jpg', format: 'wide', maxWidth: '3xl' },
      { type: 'image', url: '/images/l-ement/img_p22_1.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/l-ement/img_p23_1.jpg', format: 'landscape', maxWidth: '3xl' }
    ],
    year: '2018',
    month: 'March',
    displayFormat: 'portrait'
  },
  {
    id: 'oru',
    title: 'ORU',
    author: 'PROJECT CLIM',
    description: 'A clean, ordered desk often reflects one’s own thoughts. With the idea of creating a very flat, unobtrusive desktop presence, the Oru (Jap. folding) lamp was designed.',
    category: 'Lighting Design',
    materials: ['Plastic', '95 CRI LED', 'LED driver'],
    techniques: ['3D printing', 'Prototyping', 'Construction'],
    previewImages: [
      '/images/oru/img_p30_1.jpg',
      '/images/oru/img_p33_1.jpg',
      '/images/oru/img_p35_1.jpg'
    ],
    images: [
      //'/images/oru/img_p24_1.png',
      /*'/images/oru/img_p25_1.jpg',
      '/images/oru/img_p25_2.jpg',
      '/images/oru/img_p25_3.jpg',
      '/images/oru/img_p25_4.png',
      '/images/oru/img_p25_5.png',
      '/images/oru/img_p25_6.jpg',
      '/images/oru/img_p25_7.jpg',
      '/images/oru/img_p25_8.jpg',
      '/images/oru/img_p25_9.jpg',
      '/images/oru/img_p26_1.png',*/
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
    media: [
    //  { type: 'image', url: '/images/oru/img_p24_1.png', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/oru/img_p27_1.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/oru/img_p27_2.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/oru/img_p27_3.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/oru/img_p27_4.jpg', format: 'wide', maxWidth: '3xl' },
      { type: 'image', url: '/images/oru/img_p27_5.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/oru/img_p28_1.jpg', format: 'portrait', maxWidth: '3xl' },
      { type: 'image', url: '/images/oru/img_p28_2.jpg', format: 'portrait', maxWidth: '3xl' },
      { type: 'image', url: '/images/oru/img_p29_1.png', format: 'portrait', maxWidth: '3xl' },
      { type: 'image', url: '/images/oru/img_p29_2.png', format: 'portrait', maxWidth: '3xl' },
      { type: 'image', url: '/images/oru/img_p30_1.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/oru/img_p31_1.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/oru/img_p32_1.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/oru/img_p33_1.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/oru/img_p33_2.png', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/oru/img_p34_1.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/oru/img_p35_1.jpg', format: 'landscape', maxWidth: '3xl' }
    ],
    year: '2018',
    month: 'June',
    displayFormat: 'portrait'
  },
  {
    id: '3d-print-experiments',
    title: '3D PRINT EXPERIMENTS',
    author: 'PROJECT CLIM',
    description: 'Experimental work with 3D printing on various materials such as iridescent film and textiles. This combination opens new possibilities in design, product visualization, and interactive objects.',
    category: 'Experiment',
    materials: ['Iridescent film', 'Textiles', 'PLA'],
    techniques: ['3D printing', 'Material experiments'],
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
    media: [
      { type: 'image', url: '/images/3d-print-experiments/img_p35_1.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/3d-print-experiments/img_p36_1.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/3d-print-experiments/img_p37_1.jpg', format: 'wide', maxWidth: '3xl' },
      { type: 'image', url: '/images/3d-print-experiments/img_p37_2.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/3d-print-experiments/img_p37_3.jpg', format: 'portrait', maxWidth: '3xl' },
      { type: 'image', url: '/images/3d-print-experiments/img_p38_1.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/3d-print-experiments/img_p39_1.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/3d-print-experiments/img_p39_2.jpg', format: 'portrait', maxWidth: '3xl' },
      { type: 'image', url: '/images/3d-print-experiments/img_p39_3.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/3d-print-experiments/img_p39_4.jpg', format: 'landscape', maxWidth: '3xl' }
    ],
    year: '2024',
    month: 'January',
    displayFormat: 'portrait'
  },
  {
    id: 'infrarotthermometer',
    title: 'INFRARED THERMOMETER',
    author: 'PROJECT CLIM',
    description: 'The fever thermometer is an essential product in every household. In exceptional situations such as illness, it must be ready. The interaction between human and object is particularly important because it is an intimate situation.',
    category: 'Product Design',
    materials: ['Bio-plastic', 'Li-ion battery', 'SMD electronics'],
    techniques: ['Clay modeling', 'Ergonomics', '3D scanning', 'Surface reconstruction', 'Rendering'],
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
    media: [
      { type: 'image', url: '/images/infrarotthermometer/img_p10_1.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/infrarotthermometer/img_p11_1.jpg', format: 'portrait', maxWidth: '3xl' },
      { type: 'image', url: '/images/infrarotthermometer/img_p11_2.jpg', format: 'wide', maxWidth: '3xl' },
      { type: 'image', url: '/images/infrarotthermometer/img_p11_3.jpg', format: 'portrait', maxWidth: '3xl' },
      { type: 'image', url: '/images/infrarotthermometer/img_p11_4.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/infrarotthermometer/img_p12_1.jpg', format: 'portrait', maxWidth: '3xl' },
      { type: 'image', url: '/images/infrarotthermometer/img_p12_2.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/infrarotthermometer/img_p12_3.jpg', format: 'wide', maxWidth: '3xl' },
      { type: 'image', url: '/images/infrarotthermometer/img_p12_4.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/infrarotthermometer/img_p12_5.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/infrarotthermometer/img_p12_6.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/infrarotthermometer/img_p13_1.png', format: 'portrait', maxWidth: '3xl' },
      { type: 'image', url: '/images/infrarotthermometer/img_p13_2.jpg', format: 'portrait', maxWidth: '3xl' },
      { type: 'image', url: '/images/infrarotthermometer/img_p14_1.jpg', format: 'portrait', maxWidth: '3xl' },
      { type: 'image', url: '/images/infrarotthermometer/img_p14_2.jpg', format: 'portrait', maxWidth: '3xl' },
      { type: 'image', url: '/images/infrarotthermometer/img_p15_1.png', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/infrarotthermometer/img_p16_1.jpg', format: 'landscape', maxWidth: '3xl' }
    ],
    year: '2019',
    month: 'January',
    displayFormat: 'portrait'
  },
 /* {
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
  },*/
  {
    id: 'glug',
    title: 'glug!',
    author: 'PROJECT CLIM',
    description: 'The project Glug emerged during the master’s program with a focus on social design and addresses waste reduction, especially plastic bottles. A mobile pop-up station serves as an interactive information stand for tap water.',
    category: 'Social Design',
    materials: ['Wood', '3D printing', 'Aluminum'],
    techniques: ['Social Design', '3D printing', 'Construction', 'Corporate Design'],
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
    media: [
      { type: 'image', url: '/images/glug/img_p47_1.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/glug/img_p0_1.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/glug/img_p0_2.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/glug/img_p0_4.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/glug/img_p1_1.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/glug/img_p1_2.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/glug/img_p2_1.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/glug/img_p2_3.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/glug/img_p3_3.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/glug/img_p3_4.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/glug/img_p3_5.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/glug/img_p3_6.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/glug/img_p3_7.jpg', format: 'wide', maxWidth: '3xl' },
      { type: 'image', url: '/images/glug/img_p4_1.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/glug/img_p4_2.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/glug/img_p5_1.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/glug/img_p5_2.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/glug/img_p5_3.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/glug/img_p5_4.jpg', format: 'portrait', maxWidth: '3xl' },
      { type: 'image', url: '/images/glug/img_p5_5.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/glug/img_p5_6.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/glug/img_p6_1.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/glug/img_p6_2.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/glug/img_p6_3.jpg', format: 'portrait', maxWidth: '3xl' },
      { type: 'image', url: '/images/glug/img_p7_1.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/glug/img_p7_2.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/glug/img_p7_3.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/glug/img_p7_4.jpg', format: 'landscape', maxWidth: '3xl' },
      { type: 'image', url: '/images/glug/img_p7_5.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/glug/img_p7_6.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/glug/img_p8_1.jpg', format: 'square', maxWidth: '3xl' },
      { type: 'image', url: '/images/glug/img_p9_1.jpg', format: 'portrait', maxWidth: '3xl' }
    ],
    year: '2023',
    month: 'February',
    displayFormat: 'portrait'
  },
/*  {
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
  },*/
  /*{
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
  },*/
];
