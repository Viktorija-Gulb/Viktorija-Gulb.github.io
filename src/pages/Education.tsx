import { Section } from '../components/Section'

export const Education = () => {
  return (
    <Section id="education" className="light-section">
      <div className="section-inner two-column">
        <div>
          <p className="section-kicker">03 / EDUCATION</p>
          <h2>
            Always <em>learning.</em>
          </h2>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <span>2024 — PRESENT</span>
            <h3>Front-End Development</h3>
            <p>
              Building practical experience with React, TypeScript, modern CSS
              and web development workflows.
            </p>
          </div>
          <div className="timeline-item">
            <span>CONTINUOUS</span>
            <h3>Independent Learning</h3>
            <p>
              Exploring accessibility, performance, UI architecture and emerging
              front-end technologies.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
