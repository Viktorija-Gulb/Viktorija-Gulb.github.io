import { projects } from '../../data/work'
import ProjectCard from '../ProjectCard/ProjectCard'
import Section from '../common/Section'

import './Work.css'

const Work = () => {
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

export default Work
