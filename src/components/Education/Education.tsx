import { useEffect, useState } from 'react'
import CourseraGenAI from '../../assets/images/coursera_genai.jpg'
import Sourcery from '../../assets/images/sourcery.jpg'
import FreeCodeCamp from '../../assets/images/fcc_responsive.jpg'
import ITProTraining from '../../assets/images/doc001.jpg'
import BasicWebProgramming from '../../assets/images/doc002.jpg'

import './Education.css'

type EducationImage = {
  src: string
  alt: string
}

type EducationEntry = {
  id: number
  type: 'COURSE' | 'PROGRAM' | 'INDEPENDENT'
  period: string
  institution: string
  title: string
  description: string
  technologies?: string[]
  images?: EducationImage[]
  certificateUrl?: string
}

const educationItems: EducationEntry[] = [
  {
    id: 1,
    type: 'COURSE',
    period: 'October 2026',
    institution: 'Coursera',
    title: 'GenAI for Front-End Developers',
    description:
      'Exploring how generative AI can support modern front-end development, from code generation to UI design and content creation.',
    technologies: [
      'Generative AI',
      'Front-End Development',
      'Web Applications',
    ],
    images: [
      {
        src: CourseraGenAI,
        alt: 'GenAI for Front-End Developers certificate',
      },
    ],
  },
  {
    id: 2,
    type: 'PROGRAM',
    period: 'October 2019 – January 2020',
    institution: 'Devbridge Group',
    title: 'Sourcery for Front-End',
    description:
      'Sourcery is a 12-week program designed for aspiring software engineers. I had the opportunity to take part in this program, where I strengthened my front-end and web development skills, explored industry best practices, and gained valuable experience working in a real development team.',
    technologies: [
      'JavaScript',
      'SCSS',
      'BEM',
      'Webpack',
      'Git',
      'Accessibility',
      'Agile',
    ],
    images: [
      {
        src: Sourcery,
        alt: 'Sourcery Academy certificate',
      },
    ],
  },
  {
    id: 4,
    type: 'PROGRAM',
    period: 'January 2019 - June 2019',
    institution: 'WomenGoTech',
    title: 'Front-End Development',
    description:
      'WomenGoTech is a non-profit organization that provides training and mentorship for women in technology. I had the opportunity to participate in WomenGoTech season 3 where took a part in events and practice sessions related to web development, UX/UI design and e-commerce.',
    technologies: ['Web Development', 'UX/UI Design', 'E-commerce'],
  },
  {
    id: 5,
    type: 'COURSE',
    period: 'February 2019',
    institution: 'FreeCodeCamp',
    title: 'Responsive Web Design',
    description:
      'Completed the Responsive Web Design certification, strengthening my HTML and CSS skills while learning to create accessible, responsive and user-friendly web experiences across different devices.',
    technologies: ['Responsive Web Design'],
    images: [
      {
        src: FreeCodeCamp,
        alt: 'FreeCodeCamp Responsive Web Design certificate',
      },
    ],
  },
  {
    id: 6,
    type: 'PROGRAM',
    period: 'March 2015 - May 2015 (3 months)',
    institution: 'IT ProTraining',
    title: 'Basics of web programming',
    description:
      'Project "Start an IT career" ("Pradėk IT karjerą") by the Irish Training FIT4JOBS methodology (Organizator "Langas į ateitį").',
    technologies: ['Web Programming', 'HTML', 'CSS', 'JavaScript'],
    images: [
      {
        src: ITProTraining,
        alt: 'IT ProTraining certificate',
      },
      {
        src: BasicWebProgramming,
        alt: 'Basics of web programming course',
      },
    ],
  },
]

type PreviewState = {
  images: EducationImage[]
  index: number
  title: string
} | null

export function Education() {
  const [preview, setPreview] = useState<PreviewState>(null)

  const changeImage = (direction: number) => {
    setPreview((current) => {
      if (!current || current.images.length < 2) return current

      const nextIndex =
        (current.index + direction + current.images.length) %
        current.images.length

      return { ...current, index: nextIndex }
    })
  }

  useEffect(() => {
    if (!preview) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setPreview(null)
      }

      if (event.key === 'ArrowLeft') {
        changeImage(-1)
      }

      if (event.key === 'ArrowRight') {
        changeImage(1)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [preview])

  return (
    <section className="section light-section" id="education">
      <div className="section-inner">
        <div>
          <p className="section-kicker">03 / EDUCATION</p>

          <h2>
            Always <em>learning.</em>
          </h2>

          <p className="description">
            A continuous journey of learning, experimentation and professional
            growth.
          </p>
        </div>

        <div className="timeline">
          {educationItems.map((item, index) => (
            <article className="timeline-item two-column" key={item.id}>
              <div className="timeline-content">
                <div className="timeline-meta">
                  <span className="timeline-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="timeline-type">{item.type}</span>

                  <span className="timeline-period">{item.period}</span>
                </div>

                <div className="timeline-details">
                  <p className="timeline-institution">{item.institution}</p>

                  <h3>{item.title}</h3>

                  <p className="timeline-description">{item.description}</p>

                  {item.technologies && (
                    <div className="timeline-tags">
                      {item.technologies.map((technology) => (
                        <span className="timeline-tag" key={technology}>
                          {technology}
                        </span>
                      ))}
                    </div>
                  )}

                  {item.certificateUrl && (
                    <a
                      className="timeline-certificate-link"
                      href={item.certificateUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Verify certificate ↗
                    </a>
                  )}
                </div>
              </div>

              {item.images && item.images.length > 0 && (
                <div className="timeline-media">
                  {item.images.map((image, imageIndex) => (
                    <button
                      className="timeline-image-button"
                      type="button"
                      key={image.src}
                      onClick={() =>
                        setPreview({
                          images: item.images!,
                          index: imageIndex,
                          title: item.title,
                        })
                      }
                      aria-label={`View ${image.alt}`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="timeline-image"
                        loading="lazy"
                      />

                      <span className="timeline-image-caption">
                        View certificate <span>↗</span>
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>

      {preview && (
        <div
          className="education-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${preview.title} image preview`}
          onClick={() => setPreview(null)}
        >
          <button
            type="button"
            className="education-lightbox-close"
            onClick={() => setPreview(null)}
            aria-label="Close preview"
          >
            &times;
          </button>

          {preview.images.length > 1 && (
            <button
              type="button"
              className="education-lightbox-nav"
              onClick={(event) => {
                event.stopPropagation()
                changeImage(-1)
              }}
              aria-label="Previous image"
            >
              &#10094;
            </button>
          )}

          <div
            className="education-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={preview.images[preview.index].src}
              alt={preview.images[preview.index].alt}
            />

            {preview.images.length > 1 && (
              <p>
                {preview.index + 1} / {preview.images.length}
              </p>
            )}
          </div>

          {preview.images.length > 1 && (
            <button
              type="button"
              className="education-lightbox-nav"
              onClick={(event) => {
                event.stopPropagation()
                changeImage(1)
              }}
              aria-label="Next image"
            >
              &#10095;
            </button>
          )}
        </div>
      )}
    </section>
  )
}
