import { useEffect, useState } from 'react'
import './TimelineItem.css'

export type TimelineImage = {
  src: string
  alt: string
}

type TimelineItemProps = {
  period: string
  title: string
  subtitle?: string
  description: string
  images?: TimelineImage[]
}

export default function TimelineItem({
  period,
  title,
  subtitle,
  description,
  images = [],
}: TimelineItemProps) {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)

  const closePreview = () => setActiveImageIndex(null)

  const showPreviousImage = () => {
    setActiveImageIndex((current) =>
      current === null ? null : (current - 1 + images.length) % images.length
    )
  }

  const showNextImage = () => {
    setActiveImageIndex((current) =>
      current === null ? null : (current + 1) % images.length
    )
  }

  useEffect(() => {
    if (activeImageIndex === null) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closePreview()
      if (event.key === 'ArrowLeft') showPreviousImage()
      if (event.key === 'ArrowRight') showNextImage()
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeImageIndex, images.length])

  return (
    <div className="timeline-item two-column">
      <div>
        <span>{period}</span>
        <h3>{title}</h3>

        {subtitle && <h4>{subtitle}</h4>}

        <p>{description}</p>
      </div>
      <div>
        {images.length > 0 && (
          <div className="learning-gallery">
            {images.map((image, index) => (
              <button
                type="button"
                className="learning-image-button"
                key={image.src}
                onClick={() => setActiveImageIndex(index)}
                aria-label={`Preview ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="learning-image"
                  loading="lazy"
                />
                <span className="image-zoom-hint">View image ↗</span>
              </button>
            ))}
          </div>
        )}

        {activeImageIndex !== null && (
          <div
            className="image-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`${title} image preview`}
            onClick={closePreview}
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={closePreview}
              aria-label="Close preview"
            >
              &times;
            </button>

            {images.length > 1 && (
              <button
                type="button"
                className="lightbox-nav"
                onClick={(event) => {
                  event.stopPropagation()
                  showPreviousImage()
                }}
                aria-label="Previous image"
              >
                &#10094;
              </button>
            )}

            <div
              className="lightbox-content"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={images[activeImageIndex].src}
                alt={images[activeImageIndex].alt}
                className="lightbox-image"
              />
              {images.length > 1 && (
                <p className="lightbox-counter">
                  {activeImageIndex + 1} / {images.length}
                </p>
              )}
            </div>

            {images.length > 1 && (
              <button
                type="button"
                className="lightbox-nav"
                onClick={(event) => {
                  event.stopPropagation()
                  showNextImage()
                }}
                aria-label="Next image"
              >
                &#10095;
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
