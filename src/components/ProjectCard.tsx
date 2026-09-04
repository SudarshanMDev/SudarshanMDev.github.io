import { ArrowUpRight, CheckCircle2, ExternalLink, FileText, Github } from 'lucide-react'
import type { Project } from '../data/projects'

/** Renders a single featured project. Buttons hide themselves when a link is empty. */
export function ProjectCard({ project }: { project: Project }) {
  const { links } = project
  const hasGithub = !!links.github
  const hasArchitecture = !!links.architecture
  const hasDemo = !!links.demo
  const published = project.published !== false

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-colors hover:border-accent-300 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-accent-500/40">
      {/* Header band with the project kind + status */}
      <div className="flex items-center justify-between gap-3 border-b border-slate-200 bg-slate-50 px-6 py-4 dark:border-slate-800 dark:bg-slate-900/60">
        <span className="font-mono text-xs font-medium uppercase tracking-wider text-accent-600 dark:text-accent-400">
          {project.kind}
        </span>
        {!published && (
          <span className="rounded-full border border-amber-300 bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400">
            In progress
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {project.description}
        </p>

        {/* Key features */}
        <div className="mt-5">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Key features
          </h4>
          <ul className="mt-3 space-y-2">
            {project.keyFeatures.map((feature) => (
              <li key={feature} className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                <CheckCircle2
                  size={16}
                  className="mt-0.5 shrink-0 text-accent-600 dark:text-accent-400"
                  aria-hidden
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mt-5">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Technologies
          </h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs text-slate-700 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Links — pushed to the bottom so cards align */}
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {hasGithub && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
            >
              <Github size={16} aria-hidden />
              Code
            </a>
          )}
          {hasArchitecture && (
            <a
              href={links.architecture}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-3.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-800"
            >
              <FileText size={16} aria-hidden />
              Architecture
            </a>
          )}
          {hasDemo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-3.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-800"
            >
              <ExternalLink size={16} aria-hidden />
              Live demo
            </a>
          )}
          {!hasGithub && !hasArchitecture && !hasDemo && (
            <span className="inline-flex items-center gap-1.5 text-sm text-slate-400 dark:text-slate-500">
              Links coming soon
              <ArrowUpRight size={14} aria-hidden />
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
