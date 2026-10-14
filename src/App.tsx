import type { ReactNode } from 'react'
import Introduction from './pages/Introduction'
import { ArrowIcon } from './components/ArrowIcon'

import './App.css'

const Section = ({
  id,
  children,
  className = '',
}: {
  id: string
  children: ReactNode
  className?: string
}) => (
  <section id={id} className={`section ${className}`}>
    {children}
  </section>
)

function App() {
  return (
    <main>
      <Introduction />
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
              I’m a Front-End Developer focused on creating responsive,
              accessible and visually polished web experiences.
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
                Exploring accessibility, performance, UI architecture and
                emerging front-end technologies.
              </p>
            </div>
          </div>
        </div>
      </Section>

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

      <footer>
        <div>
          <span className="footer-mark">
            VN<span>.</span>
          </span>
          <p>Let’s build something great.</p>
        </div>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  )
}

export default App
