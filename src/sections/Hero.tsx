import { ArrowRight, Github } from 'lucide-react'
import { Container } from '../components/Container'
import { ButtonLink } from '../components/Button'
import { site } from '../data/site'

export function Hero() {
  const { availability, contact } = site

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Subtle background: soft grid + a faint accent glow. Not flashy. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_70%_-10%,rgba(16,185,129,0.10),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35] dark:opacity-20 [background-image:linear-gradient(to_right,rgba(100,116,139,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.12)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]"
      />

      <Container className="py-20 sm:py-28 lg:py-32">
        <div className="max-w-3xl animate-fade-up">
          {availability.available && (
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-50 px-3 py-1 text-xs font-medium text-accent-700 dark:border-accent-500/30 dark:bg-accent-500/10 dark:text-accent-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
              </span>
              {availability.label}
            </span>
          )}

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            {site.role}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl">
            {site.tagline}
          </p>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-500 dark:text-slate-400">
            I help startups and businesses build new backend systems and improve existing Java
            &amp; Spring Boot applications — comfortable working with clients internationally.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="#projects" variant="primary">
              View My Work
              <ArrowRight size={18} aria-hidden />
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Let&apos;s Work Together
            </ButtonLink>
            <ButtonLink
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              className="sm:ml-1"
            >
              <Github size={18} aria-hidden />
              GitHub
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  )
}
