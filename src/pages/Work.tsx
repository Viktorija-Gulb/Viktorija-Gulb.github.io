import { Section } from '../components/Section'
import ProjectCard from './ProjectCard'
import sundayTable from '../assets/images/sunday-table.png'

import './Work.css'

type Project = {
  id: number
  category: string
  title: string
  description: string
  year: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    category: 'Web Application',
    title: 'Responsive Web App',
    description:
      'A responsive web application focused on providing an intuitive user experience and clean, accessible interface.',
    year: '2026',
    image: sundayTable,
    technologies: ['React', 'JavaScript', 'CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project',
  },
]

export const Work = () => {
  return (
    <Section id="work" className="work-section">
      <div className="section-inner">
        <p className="section-kicker">04 / MY WORK</p>
        <div className="">
          <h2>
            Selected <em>projects.</em>
          </h2>
          <p className="description">
            A small collection of things I’ve designed and built.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </Section>
  )
}
