import { ArrowIcon } from '../components/ArrowIcon'

type IconProps = {
  size?: number
}

const LinkedInIcon = ({ size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor" />
    <path
      d="M7.1 9.2V17H4.7V9.2h2.4Zm-1.2-1A1.45 1.45 0 1 1 5.9 5.3a1.45 1.45 0 0 1 0 2.9ZM9.2 9.2h2.3v1.06h.03c.32-.6 1.1-1.23 2.27-1.23 2.43 0 2.88 1.6 2.88 3.69V17h-2.4v-3.8c0-.91-.02-2.08-1.27-2.08-1.27 0-1.46.99-1.46 2.01V17H9.2V9.2Z"
      fill="white"
    />
  </svg>
)

const GitHubIcon = ({ size = 25 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill="currentColor"
  >
    <path d="M12 .7a11.4 11.4 0 0 0-3.61 22.22c.57.1.78-.25.78-.55v-2.15c-3.17.69-3.84-1.34-3.84-1.34-.52-1.31-1.27-1.66-1.27-1.66-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.53-.29-5.19-1.27-5.19-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.03 0 0 .97-.31 3.15 1.17a10.93 10.93 0 0 1 5.74 0c2.19-1.48 3.16-1.17 3.16-1.17.62 1.58.23 2.74.11 3.03.74.8 1.19 1.82 1.19 3.07 0 4.39-2.67 5.35-5.21 5.63.41.36.78 1.07.78 2.16v3.2c0 .3.21.65.79.54A11.4 11.4 0 0 0 12 .7Z" />
  </svg>
)

const CodepenIcon = ({ size = 26 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinejoin="round"
  >
    <path d="m3 8 9-5 9 5v8l-9 5-9-5V8Z" />
    <path d="m3 8 9 5 9-5M3 16l9-5 9 5M12 13v8M12 3v10" />
  </svg>
)

const navItems = [
  ['ABOUT', 'about'],
  ['SKILLS', 'skills'],
  ['EDUCATION', 'education'],
  ['MY WORK', 'work'],
]

function Introduction() {
  return (
    <section className="hero" id="home">
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
          <a
            href="https://codepen.io/"
            target="_blank"
            rel="noreferrer"
            aria-label="CodePen"
          >
            <CodepenIcon />
          </a>
        </div>
        <a className="scroll-cue" href="#about">
          SCROLL <ArrowIcon />
        </a>
      </div>
    </section>
  )
}

export default Introduction
