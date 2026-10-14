import { Section } from '../components/Section'

export const Skills = () => {
  return (
    <Section id="skills" className="skills-section">
      <div className="section-inner">
        <p className="section-kicker">02 / SKILLS</p>
        <h2>
          Tools I use to <em>build.</em>
        </h2>
        <div className="skill-grid">
          {[
            ['React', 'Component-driven UI'],
            ['TypeScript', 'Reliable, scalable code'],
            ['JavaScript', 'Modern web interactions'],
            ['HTML / CSS', 'Semantic & responsive UI'],
            ['Git / GitHub', 'Version control'],
            ['Figma', 'Design collaboration'],
          ].map(([title, text]) => (
            <article className="skill-card" key={title}>
              <span>
                0
                {[
                  'React',
                  'TypeScript',
                  'JavaScript',
                  'HTML / CSS',
                  'Git / GitHub',
                  'Figma',
                ].indexOf(title) + 1}
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
