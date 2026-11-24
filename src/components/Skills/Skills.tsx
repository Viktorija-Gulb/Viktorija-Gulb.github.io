import './Skills.css'

type SkillGroup = {
  category: string
  description: string
  skills: string[]
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    description: 'Building interactive web applications',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'jQuery'],
  },
  {
    category: 'UI & Design',
    description: 'Creating consistent user interfaces',
    skills: ['Figma', 'Photoshop', 'Material UI', 'Bootstrap', 'BEM'],
  },
  {
    category: 'Tools & Workflow',
    description: 'Development and collaboration tools',
    skills: [
      'Git',
      'GitHub',
      'Command line',
      'npm',
      'Storybook',
      'Jira',
      'Scrum',
    ],
  },
  {
    category: 'State Management',
    description: 'Application state and architecture',
    skills: ['Redux', 'Redux-saga'],
  },
]

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-inner">
        <p className="section-kicker">02 / SKILLS</p>

        <h2>
          My technical <em>toolkit.</em>
        </h2>

        <p className="description">
          Technologies, tools and methodologies I used to build across different
          projects.
        </p>

        <div className="skills-groups">
          {skillGroups.map((group, index) => (
            <article className="skill-group" key={group.category}>
              <div className="skill-group-header">
                <span className="skill-group-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3>{group.category}</h3>
              </div>

              <p className="skill-group-description">{group.description}</p>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
