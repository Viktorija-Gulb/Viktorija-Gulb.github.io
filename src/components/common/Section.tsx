import type { ReactNode } from 'react'

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

export default Section
