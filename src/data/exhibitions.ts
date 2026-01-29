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

export interface PressItem {
  id: string;
  title: string;
  publication: string;
  date: string;
  year: string;
  url?: string;
  description?: string;
}

export const exhibitions: Exhibition[] = [
  {
    id: 'ex-1',
    title: 'Light & Material',
    venue: 'Design Zentrum',
    location: 'Berlin, Germany',
    date: 'March 2024',
    year: '2024',
    type: 'solo',
    description: 'Solo exhibition exploring the intersection of light and material in contemporary design.',
  },
  {
    id: 'ex-2',
    title: 'Emerging Designers',
    venue: 'Milan Design Week',
    location: 'Milan, Italy',
    date: 'April 2024',
    year: '2024',
    type: 'fair',
    description: 'Featured in the Emerging Designers showcase at Salone del Mobile.',
  },
  {
    id: 'ex-3',
    title: 'New German Design',
    venue: 'Kunsthalle',
    location: 'Hamburg, Germany',
    date: 'September 2023',
    year: '2023',
    type: 'group',
    description: 'Group exhibition featuring contemporary German product designers.',
  },
  {
    id: 'ex-4',
    title: 'Objects of Light',
    venue: 'Dutch Design Week',
    location: 'Eindhoven, Netherlands',
    date: 'October 2023',
    year: '2023',
    type: 'fair',
  },
  {
    id: 'ex-5',
    title: 'Form Follows Function',
    venue: 'Design Museum',
    location: 'Copenhagen, Denmark',
    date: 'May 2022',
    year: '2022',
    type: 'group',
  },
];

export const pressItems: PressItem[] = [
  {
    id: 'press-1',
    title: 'The Future of Light Design',
    publication: 'Dezeen',
    date: 'October 2024',
    year: '2024',
    url: 'https://dezeen.com',
    description: 'Feature article on the Spectrum Wall Light and its innovative approach to light diffusion.',
  },
  {
    id: 'press-2',
    title: '10 Emerging Designers to Watch',
    publication: 'Wallpaper*',
    date: 'August 2024',
    year: '2024',
    url: 'https://wallpaper.com',
  },
  {
    id: 'press-3',
    title: 'Material Innovation in Contemporary Design',
    publication: 'Designboom',
    date: 'June 2024',
    year: '2024',
    url: 'https://designboom.com',
  },
  {
    id: 'press-4',
    title: 'Craftsmanship Meets Technology',
    publication: 'Frame Magazine',
    date: 'March 2023',
    year: '2023',
    url: 'https://frameweb.com',
  },
  {
    id: 'press-5',
    title: 'Young German Designers',
    publication: 'AD Germany',
    date: 'November 2022',
    year: '2022',
    url: 'https://ad-magazin.de',
  },
];
