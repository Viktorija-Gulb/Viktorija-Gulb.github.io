import { Section } from '../components/Section'
import { ArrowIcon } from '../components/ArrowIcon'

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
      </div>
    </Section>
  )
}
