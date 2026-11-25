export type EducationImage = {
  src: string
  alt: string
}

export type EducationEntry = {
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

export type PreviewState = {
  images: EducationImage[]
  index: number
  title: string
} | null