export type Project = {
  id: number
  category: string
  title: string
  description: string
  year: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

export type ProjectCardProps = {
  project: Project
  index: number
}