import { ArrowIcon } from '../assets/Icons/ArrowIcon'
import { GitHubIcon } from '../assets/Icons/GithubIcon'
import { LinkedInIcon } from '../assets/Icons/LinkedinIcon'
import Section from './common/Section'

const navItems = [
  ['ABOUT', 'about'],
  ['SKILLS', 'skills'],
  ['EDUCATION', 'education'],
  ['MY WORK', 'work'],
]

const Introduction = () => {
  return (
    <Section className="hero" id="home">
      <header className="nav">
        <a className="brand" href="#home">
          VN<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a href={`#${href}`} key={href}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <div className="hero-content">
        <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>
        <h1>
          Viktorija <span>Novikova</span>
        </h1>
        <p className="role">Front-End Developer</p>
        <div className="hero-line" />
        <div className="socials">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
        </div>
        <a className="scroll-cue" href="#about">
          SCROLL <ArrowIcon />
        </a>
      </div>
    </Section>
  )
}

export default Introduction
