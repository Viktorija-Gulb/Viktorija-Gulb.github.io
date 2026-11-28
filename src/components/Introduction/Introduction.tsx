import { useEffect, useState } from 'react'
import { ArrowIcon } from '../../assets/Icons/ArrowIcon'
import { GitHubIcon } from '../../assets/Icons/GithubIcon'
import { LinkedInIcon } from '../../assets/Icons/LinkedinIcon'
import Section from './../common/Section'
import './Introduction.css'

const navItems = [
  ['ABOUT', 'about'],
  ['SKILLS', 'skills'],
  ['EDUCATION', 'education'],
  ['MY WORK', 'work'],
]

const Introduction = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  return (
    <Section className="hero" id="home">
      <header className={`nav${isMenuOpen ? ' is-open' : ''}`}>
        <nav
          className={`nav-menu${isMenuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          {navItems.map(([label, href]) => (
            <a
              href={`#${href}`}
              key={href}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
        <button
          className={`nav-toggle${isMenuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={
            isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className={`hero-content ${isMenuOpen ? 'is-open' : ''}`}>
        <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>
        <h1>
          Viktorija <span>Novikova</span>
        </h1>
        <p className="role">Front-End Developer</p>
        <div className="hero-line" />
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/viktorijagulbickaja/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={27} />
          </a>
          <a
            href="https://github.com/Viktorija-Gulb"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon size={27} />
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
