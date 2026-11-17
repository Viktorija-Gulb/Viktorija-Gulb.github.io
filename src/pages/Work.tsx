import { Section } from '../components/Section'
import { ArrowIcon } from '../assets/Icons/ArrowIcon'
import sekmadienioStalas from '../assets/images/sekmadienio-stalas.png'

const projects = [
  {
    number: '01',
    title: 'Responsive Web App',
    tags: 'React · TypeScript · CSS',
    url: sekmadienioStalas,
    image: sekmadienioStalas,
    imageAlt: 'Screenshot of the Responsive Web App project Sekmadienio stalas',
  },
]

export const Work = () => {
  return (
    <Section id="work" className="work-section">
      <div className="section-inner">
        <p className="section-kicker">04 / MY WORK</p>
        <div className="work-heading">
          <h2>
            Selected <em>projects.</em>
          </h2>
          <p>A small collection of things I’ve designed and built.</p>
        </div>
        <div className="project-grid">
          {[
            ['01', 'Portfolio Landing Page', 'React · TypeScript · CSS'],
            ['02', 'Responsive Web App', 'React · REST API · UI'],
            ['03', 'Interactive Component', 'TypeScript · CSS · UX'],
          ].map(([number, title, tags]) => (
            <article className="project-card" key={number}>
              <div className="project-number">{number}</div>
              <div>
                <h3>{title}</h3>
                <p>{tags}</p>
              </div>
              <ArrowIcon />
            </article>
          ))}
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article>
              <a
                className="project-image"
                key={project.number}
                href={project.url}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                />
              </a>
              <div className="project-card">
                <div className="project-number">{project.number}</div>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.tags}</p>
                </div>
                <ArrowIcon />
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
