import sundayTable from '../assets/images/sunday-table.png'
import kidsClothesSizes from '../assets/images/kids-clothes-sizes.png'
import type { Project } from '../types/work';

export const projects: Project[] = [
  {
    id: 1,
    category: 'Web Application',
    title: 'Responsive Web App',
    description:
      'A responsive web application focused on providing an intuitive user experience and clean, accessible interface.',
    year: '2026',
    image: sundayTable,
    technologies: ['React', 'JavaScript', 'CSS'],
    liveUrl: 'https://recipes-collection-ruby.vercel.app/',
    githubUrl: 'https://github.com/Viktorija-Gulb/recipes-collection',
  },
    {
    id: 2,
    category: 'Web Application',
    title: 'Personal project',
    description:
      'Developed a React-based website featuring comprehensive size guides for children\'s clothing, footwear, and accessories. Created structured, easy-to-navigate tables with size measurements, age, height, and weight information to help parents find the right fit. Focused on responsive layouts, clear data presentation, and user-friendly navigation.',
    year: '2020',
    image: kidsClothesSizes,
    technologies: ['React', 'SCSS', 'Responsive'],
    liveUrl: '',
    githubUrl: 'https://github.com/Viktorija-Gulb/kids-clothes-sizes',
  },
]