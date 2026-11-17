import { Section } from '../components/Section'
import TimelineItem from '../components/TimelineItem/TimelineItem'
import CourseraGenAI from '../assets/images/coursera_genai.jpg'
import Doc001 from '../assets/images/doc001.jpg'
import Doc002 from '../assets/images/doc002.jpg'
import Doc003 from '../assets/images/fcc_responsive.jpg'
import Doc004 from '../assets/images/sourcery.jpg'

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
          <TimelineItem
            period="October 2026"
            title="Coursera"
            subtitle="GenAI for Front-End Developers"
            description="This course provides an overview of how to use generative AI in front-end development. It covers topics such as using AI to generate code, design, and content for web applications."
            images={[
              {
                src: CourseraGenAI,
                alt: 'Coursera GenAI for Front-End Developers certificate',
              },
            ]}
          />
          <TimelineItem
            period="October 2019 - January 2020"
            title="Devbridge Group"
            subtitle="Sourcery for Front-End"
            description="Sourcery is a 12-week program for aspiring software engineers. I had the opportunity to participate in the program where I learned about front-end development, web development workflows, and best practices. I have awesome opportunity to work with real team. Our goal was create website for Sourcery Academy. Working in team on new website for academy we used this technologies & workflow: semantic HTML, SCSS, BEM methodology, Accessibility standards, Agile methodology, Webpack, JS Fundamentals, Git."
            images={[
              {
                src: Doc004,
                alt: 'Sourcery for Front-End certificate',
              },
            ]}
          />

          <TimelineItem
            period="January 2019 - June 2019"
            title="WomenGoTech"
            subtitle="Front-End Development"
            description="WomenGoTech is a non-profit organization that provides training and mentorship for women in technology. I had the opportunity to participate in WomenGoTech season 3 where took a part in events and practice sessions related to web development, UX/UI design and e-commerce."
          />

          <TimelineItem
            period="February 2019"
            title="FreeCodeCamp"
            subtitle="Responsive Web Design"
            description="FreeCodeCamp is a non-profit organization that helps people learn to code for free. The Responsive Web Design certification covers HTML, CSS, and responsive design principles."
            images={[
              {
                src: Doc003,
                alt: 'Independent learning certificate',
              },
            ]}
          />

          <TimelineItem
            period="March 2015 - May 2015 (3 months)"
            title="IT ProTraining"
            subtitle="Basics of web programming"
            description='Project "Start an IT career" ("Pradėk IT karjerą") by the Irish Training FIT4JOBS methodology (Organizator "Langas į ateitį").'
            images={[
              {
                src: Doc001,
                alt: 'IT ProTraining certificate',
              },
              {
                src: Doc002,
                alt: 'Basics of web programming course',
              },
            ]}
          />
        </div>
      </div>
    </Section>
  )
}
