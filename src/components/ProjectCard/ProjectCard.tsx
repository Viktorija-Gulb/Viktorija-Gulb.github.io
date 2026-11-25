import type { ProjectCardProps } from '../../types/work'
import './ProjectCard.css'

function ProjectCard({ project, index }: ProjectCardProps) {
  const isReversed = index % 2 !== 0

  return (
    <article
      className={`project-item ${isReversed ? 'project-item--reverse' : ''}`}
    >
      <a
        className="project-image-wrapper"
        href={project.liveUrl || project.githubUrl || project.image}
        target="_blank"
        rel="noreferrer"
        aria-label={`View ${project.title}`}
      >
        <img
          className="project-image"
          src={project.image}
          alt=""
          loading="lazy"
        />

        <span className="project-image-overlay">
          <span>Explore project</span>
          <span className="project-arrow">↗</span>
        </span>
      </a>

      <div className="project-content">
        <div className="project-meta">
          <span className="project-number">
            {String(index + 1).padStart(2, '0')}
          </span>

          <span className="project-category">{project.category}</span>

          <span className="project-year">{project.year}</span>
        </div>

        <h3 className="project-title">{project.title}</h3>

        <p className="project-description">{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((technology) => (
            <span className="project-tag" key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <div className="project-links">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              Live preview <span>↗</span>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              GitHub <span>↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
