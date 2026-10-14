

type NavItem = { label: string; href: string };

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Frontend Development",
    description: "React/TypeScript UI engineering with clean, reusable components.",
    tag: "UI",
  },
  {
    title: "Design-to-Code",
    description: "Pixel-accurate implementation and responsive layouts from mocks.",
    tag: "UX",
  },
  {
    title: "Performance & Accessibility",
    description: "Fast, accessible experiences with best practices baked in.",
    tag: "A11y",
  },
];

const skills = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 92 },
  { name: "UI/UX", level: 86 },
  { name: "CSS / Animations", level: 88 },
  { name: "API Integration", level: 84 },
];

const projects = [
  {
    title: "Dashboard UI",
    description: "Responsive admin dashboard with reusable charts/components.",
    tech: ["React", "TypeScript", "CSS"],
    linkLabel: "View demo",
  },
  {
    title: "Landing Page Kit",
    description: "A design system starter with sections, typography, and layout utilities.",
    tech: ["React", "TS", "Accessibility"],
    linkLabel: "See details",
  },
  {
    title: "E-commerce Components",
    description: "Product cards, filters, and cart UI patterns with polished states.",
    tech: ["UI", "React", "Performance"],
    linkLabel: "Open case study",
  },
];

const testimonials = [
  {
    quote:
      "Viktorija is proactive and delivers pixel-perfect UI with great attention to detail.",
    name: "Project Partner",
    role: "Product Team",
  },
  {
    quote:
      "Strong React/TS skills and excellent communication. The implementation was clean and maintainable.",
    name: "Client",
    role: "Startup Founder",
  },
];

export default function LandingPage() {
  return (
    <div className="page">
      {/* Top bar */}
      <header className="topbar">
        <div className="container topbarInner">
          <div className="brand">
            <span className="brandMark" aria-hidden="true">
              V
            </span>
            <span className="brandName">Viktorija</span>
          </div>

          <nav className="nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.href} className="navLink" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="topActions">
            <a className="btn btnGhost" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero" aria-label="Hero">
        {/* Decorative background (use your own image if you want) */}
        <div className="heroBg" aria-hidden="true" />

        <div className="container heroInner">
          <div className="heroLeft">
            <div className="heroKicker">
              <span className="pill">FRONT-END DEVELOPER</span>
              <span className="dotSep" aria-hidden="true">
                •
              </span>
              <span className="muted">React • TypeScript</span>
            </div>

            <h1 className="heroTitle">
              Viktorija Novikova
              <span className="heroTitleUnderline" aria-hidden="true" />
            </h1>

            <p className="heroSubtitle">
              Building modern, responsive interfaces with thoughtful UX and
              clean component architecture.
            </p>

            <div className="heroCtas">
              <a className="btn btnPrimary" href="#work">
                View Work
              </a>
              <a className="btn btnGhost" href="#about">
                About Me
              </a>
            </div>

            <div className="heroSocial" aria-label="Social links">
              {/* Replace href values with your real profiles */}
              <a className="iconLink" href="https://linkedin.com" target="_blank" rel="noreferrer">
                {/* Simple inline icon */}
                <span className="icon" aria-hidden="true">
                  in
                </span>
                <span className="srOnly">LinkedIn</span>
              </a>
              <a className="iconLink" href="https://github.com" target="_blank" rel="noreferrer">
                <span className="icon" aria-hidden="true">
                  {"</>"}
                </span>
                <span className="srOnly">GitHub</span>
              </a>
              <a className="iconLink" href="https://behance.net" target="_blank" rel="noreferrer">
                <span className="icon" aria-hidden="true">
                  Be
                </span>
                <span className="srOnly">Behance</span>
              </a>
            </div>
          </div>

          <div className="heroRight" aria-label="Profile card">
            <div className="profileCard">
              <div className="profileTop">
                <div className="profilePhoto" aria-hidden="true" />
                <div>
                  <div className="profileName">Viktorija</div>
                  <div className="profileRole">Frontend Developer</div>
                </div>
              </div>

              <div className="profileStats">
                <div className="stat">
                  <div className="statValue">+5</div>
                  <div className="statLabel">Projects</div>
                </div>
                <div className="stat">
                  <div className="statValue">React</div>
                  <div className="statLabel">Focused</div>
                </div>
                <div className="stat">
                  <div className="statValue">TS</div>
                  <div className="statLabel">Type-safe</div>
                </div>
              </div>

              <div className="profileNote">
                <span className="spark" aria-hidden="true">
                  ✦
                </span>
                Available for freelance & collaborations.
              </div>

              <a className="btn btnPrimary w100" href="#contact">
                Let’s talk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="container">
          <div className="sectionHead">
            <h2 className="sectionTitle">About</h2>
            <p className="sectionSubtitle">
              I help teams ship delightful interfaces—fast, responsive, and easy to maintain.
            </p>
          </div>

          <div className="grid2">
            <div className="card">
              <h3 className="cardTitle">What I do</h3>
              <ul className="list">
                <li>Turn designs into responsive React components.</li>
                <li>Build scalable UI with TypeScript types and clean patterns.</li>
                <li>Collaborate with product/design using clear, friendly communication.</li>
              </ul>
            </div>

            <div className="card cardHighlight">
              <h3 className="cardTitle">Approach</h3>
              <p className="muted">
                I aim for balance: great visuals, solid UX, and maintainable code. I also care about
                accessibility, consistent spacing, and predictable component APIs.
              </p>
              <div className="badgeRow" aria-label="Highlights">
                <span className="badge">Responsive</span>
                <span className="badge">Accessible</span>
                <span className="badge">Reusable</span>
                <span className="badge">Polished UI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section sectionAlt">
        <div className="container">
          <div className="sectionHead">
            <h2 className="sectionTitle">Skills</h2>
            <p className="sectionSubtitle">A quick snapshot of what I’m comfortable with.</p>
          </div>

          <div className="skillsGrid">
            {skills.map((s) => (
              <div key={s.name} className="skill">
                <div className="skillTop">
                  <span className="skillName">{s.name}</span>
                  <span className="skillLevel">{s.level}%</span>
                </div>
                <div className="bar" role="progressbar" aria-valuenow={s.level} aria-valuemin={0} aria-valuemax={100}>
                  <div className="barFill" style={{ width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="section">
        <div className="container">
          <div className="sectionHead">
            <h2 className="sectionTitle">Work</h2>
            <p className="sectionSubtitle">Selected projects and UI work.</p>
          </div>

          <div className="servicesRow" aria-label="Services">
            {services.map((s) => (
              <div key={s.title} className="service">
                <div className="serviceTag">{s.tag}</div>
                <div className="serviceTitle">{s.title}</div>
                <div className="serviceDesc">{s.description}</div>
              </div>
            ))}
          </div>

          <div className="projectsGrid" aria-label="Projects">
            {projects.map((p) => (
              <article key={p.title} className="project">
                <div className="projectPreview" aria-hidden="true">
                  <div className="previewGlow" />
                  <div className="previewLines" />
                </div>

                <div className="projectBody">
                  <h3 className="projectTitle">{p.title}</h3>
                  <p className="projectDesc">{p.description}</p>

                  <div className="techRow" aria-label="Tech used">
                    {p.tech.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a className="linkBtn" href="#contact">
                    {p.linkLabel} <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="testimonials">
            <h3 className="subTitle">What people say</h3>
            <div className="testGrid"></div>
          </div>
          </div>
        </section>

        </div>
  )}