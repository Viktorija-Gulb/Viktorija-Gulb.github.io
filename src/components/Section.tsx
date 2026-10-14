import type { ReactNode } from 'react'

export const Section = ({
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
