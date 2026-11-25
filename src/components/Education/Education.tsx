import { useEffect, useState } from 'react'
import type { PreviewState } from '../../types/education'
import { educationItems } from '../../data/education'

import './Education.css'

const Education = () => {
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

export default Education
