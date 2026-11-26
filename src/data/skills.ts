import type { SkillGroup } from "../types/skills";

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    description: 'Building interactive web applications',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SCSS', 'jQuery', 'React testing library', 'TanStack Query', 'React Hook Form'],
  },
  {
    category: 'UI & Design',
    description: 'Creating consistent user interfaces',
    skills: ['Figma', 'Photoshop', 'Material UI', 'Bootstrap', 'BEM'],
  },
  {
    category: 'Tools & Workflow',
    description: 'Development and collaboration tools',
    skills: [
      'Git',
      'GitHub',
      'Bitbucket',
      'Command line',
      'npm',
      'Storybook',
      'Jira',
      'Scrum',
    ],
  },
  {
    category: 'State Management',
    description: 'Application state and architecture',
    skills: ['Redux', 'Redux-saga'],
  },
]