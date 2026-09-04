import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { ProjectCard } from '../components/ProjectCard'
import { ButtonLink } from '../components/Button'
import { projects } from '../data/projects'
import { site } from '../data/site'
import { Github } from 'lucide-react'

export function Projects() {
  return (
    <section id="projects" className="border-y border-slate-200 bg-slate-50 py-20 dark:border-slate-800 dark:bg-slate-900/30 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Featured Projects"
          title="Production-style engineering, not tutorials"
          intro="Two showcase applications that demonstrate how I structure real backend systems — from a well-organized monolith to a resilient microservices platform with practical AI integration."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            More code and smaller projects live on my GitHub.
          </p>
          <ButtonLink
            href={site.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            className="mt-4"
          >
            <Github size={18} aria-hidden />
            View GitHub Profile
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  )
}
