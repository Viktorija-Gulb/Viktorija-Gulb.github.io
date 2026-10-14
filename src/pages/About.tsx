import { ArrowIcon } from '../components/ArrowIcon'
import { Section } from '../components/Section'

export const About = () => {
  return (
    <Section id="about" className="light-section">
      <div className="section-inner two-column">
        <div>
          <p className="section-kicker">01 / ABOUT</p>
          <h2>
            Building clean, thoughtful <em>interfaces.</em>
          </h2>
        </div>
        <div className="copy">
          <p>
            I’m a Front-End Developer focused on creating responsive, accessible
            and visually polished web experiences.
          </p>
          <p>
            I enjoy turning ideas and designs into fast, maintainable React
            applications with a strong eye for detail.
          </p>
          <a className="text-link" href="#work">
            Explore my work <ArrowIcon />
          </a>
        </div>
      </div>
    </Section>
  )
}
