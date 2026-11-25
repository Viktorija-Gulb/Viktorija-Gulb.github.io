import CourseraGenAI from '../assets/images/coursera_genai.jpg'
import Sourcery from '../assets/images/sourcery.jpg'
import FreeCodeCamp from '../assets/images/fcc_responsive.jpg'
import ITProTraining from '../assets/images/doc001.jpg'
import BasicWebProgramming from '../assets/images/doc002.jpg'
import type { EducationEntry } from '../types/education';

export const educationItems: EducationEntry[] = [
  {
    id: 1,
    type: 'COURSE',
    period: 'October 2026',
    institution: 'Coursera',
    title: 'GenAI for Front-End Developers',
    description:
      'Exploring how generative AI can support modern front-end development, from code generation to UI design and content creation.',
    technologies: [
      'Generative AI',
      'Front-End Development',
      'Web Applications',
    ],
    images: [
      {
        src: CourseraGenAI,
        alt: 'GenAI for Front-End Developers certificate',
      },
    ],
  },
  {
    id: 2,
    type: 'PROGRAM',
    period: 'October 2019 – January 2020',
    institution: 'Devbridge Group',
    title: 'Sourcery for Front-End',
    description:
      'Sourcery is a 12-week program designed for aspiring software engineers. I had the opportunity to take part in this program, where I strengthened my front-end and web development skills, explored industry best practices, and gained valuable experience working in a real development team.',
    technologies: [
      'JavaScript',
      'SCSS',
      'BEM',
      'Webpack',
      'Git',
      'Accessibility',
      'Agile',
    ],
    images: [
      {
        src: Sourcery,
        alt: 'Sourcery Academy certificate',
      },
    ],
  },
  {
    id: 4,
    type: 'PROGRAM',
    period: 'January 2019 - June 2019',
    institution: 'WomenGoTech',
    title: 'Front-End Development',
    description:
      'WomenGoTech is a non-profit organization that provides training and mentorship for women in technology. I had the opportunity to participate in WomenGoTech season 3 where took a part in events and practice sessions related to web development, UX/UI design and e-commerce.',
    technologies: ['Web Development', 'UX/UI Design', 'E-commerce'],
  },
  {
    id: 5,
    type: 'COURSE',
    period: 'February 2019',
    institution: 'FreeCodeCamp',
    title: 'Responsive Web Design',
    description:
      'Completed the Responsive Web Design certification, strengthening my HTML and CSS skills while learning to create accessible, responsive and user-friendly web experiences across different devices.',
    technologies: ['Responsive Web Design'],
    images: [
      {
        src: FreeCodeCamp,
        alt: 'FreeCodeCamp Responsive Web Design certificate',
      },
    ],
  },
  {
    id: 6,
    type: 'PROGRAM',
    period: 'March 2015 - May 2015 (3 months)',
    institution: 'IT ProTraining',
    title: 'Basics of web programming',
    description:
      'Project "Start an IT career" ("Pradėk IT karjerą") by the Irish Training FIT4JOBS methodology (Organizator "Langas į ateitį").',
    technologies: ['Web Programming', 'HTML', 'CSS', 'JavaScript'],
    images: [
      {
        src: ITProTraining,
        alt: 'IT ProTraining certificate',
      },
      {
        src: BasicWebProgramming,
        alt: 'Basics of web programming course',
      },
    ],
  },
]