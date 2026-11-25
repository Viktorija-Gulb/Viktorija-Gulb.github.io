import sundayTable from '../assets/images/sunday-table.png'
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
]