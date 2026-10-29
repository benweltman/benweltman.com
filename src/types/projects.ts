export interface Project {
  id: string;
  title: string;
  category: string[];
  description: string;
  imageUrl: string;
  link?: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: '11',
    title: 'intelliflo design system',
    category: ['SaaS & Web Apps', 'Design Systems & UI Architecture'],
    description: 'A comprehensive design system for a financial SaaS provider.',
    imageUrl: '/img/portfolio/io-next-gen-v1.jpg',
    year: 'N/A',
    link: 'https://www.intelliflo.com/our-solutions/intelliflo-office/',
  },
  {
    id: '1',
    title: 'intelliflo office (dark theme)',
    category: ['SaaS & Web Apps', 'Design Systems & UI Architecture'],
    description: 'A Market leading Financial SaaS Provider featuring a dark theme.',
    imageUrl: '/img/portfolio/intelliflo-io-dm-thumb.jpg',
    year: 'N/A',
    link: 'https://www.intelliflo.com/our-solutions/intelliflo-office/',
  },
  /*
  {
    id: '2',
    title: 'intelliflo office',
    category: ['SaaS & Web Apps', 'Design Systems & UI Architecture'],
    description: 'A Market leading Financial SaaS Provider.',
    imageUrl: '/img/portfolio/intelliflo-io-thumb.jpg',
    year: 'N/A',
    link: 'https://www.intelliflo.com/our-solutions/intelliflo-office/',
  },
  */
  {
    id: '4',
    title: 'Momentum Enterprise Solutions',
    category: ['SaaS & Web Apps'],
    description: 'Provides Enterprise IT Solutions.',
    imageUrl: '/img/portfolio/momentum-es-thumb.jpg',
    year: 'N/A',
    link: 'https://momentumes.co.uk/',
  },
  {
    id: '6',
    title: 'Tiger Heart London',
    category: ['Bespoke Websites & Portfolios'],
    description: 'The Home of Digital Atelier, Sanj Surati.',
    imageUrl: '/img/portfolio/thl-thumb.jpg',
    year: 'N/A',
    link: 'http://tigerheartlondon.com',
  },
  {
    id: '5',
    title: 'Yoga with Julia',
    category: ['Bespoke Websites & Portfolios'],
    description: 'Yoga instructor based in Surrey.',
    imageUrl: '/img/portfolio/juliayoga-thumb.jpg',
    year: 'N/A',
    link: 'https://juliayoga.co.uk',
  },
  {
    id: '7',
    title: 'We Are Dermalogica (FR)',
    category: ['Bespoke Websites & Portfolios'],
    description: 'A World reknowned skincare brand sold in over 80 countries.',
    imageUrl: '/img/portfolio/weare-thumb.jpg',
    year: 'N/A',
    link: 'http://weare.dermalogica.fr/Home-EN',
  },
  {
    id: '3',
    title: 'Beau Fowler',
    category: ['Bespoke Websites & Portfolios'],
    description: 'Website for a Multi-award-winning Actor, Writer & Director.',
    imageUrl: '/img/portfolio/beau-new-thumb.jpg',
    year: 'N/A',
    link: 'https://beaufowler.com',
  },
  {
    id: '9',
    title: 'Ki Films',
    category: ['Bespoke Websites & Portfolios'],
    description: 'A Multi-award-winning independent film company.',
    imageUrl: '/img/portfolio/ki-new-thumb.jpg',
    year: 'N/A',
    link: 'https://kifilms.co.uk',
  },
  {
    id: '8',
    title: 'Simon Fowler Photography',
    category: ['Bespoke Websites & Portfolios'],
    description: 'Site for a Multi-award-winning, legendary photographer.',
    imageUrl: '/img/portfolio/simon-thumb.jpg',
    year: 'N/A',
    link: 'https://simonfowlerphotography.com',
  },
];
