import { Github, Linkedin, Mail } from 'lucide-react'
import { Container } from './Container'
import { site } from '../data/site'
import { navLinks } from '../data/navigation'

export function Footer() {
  const { contact } = site
  const hasEmail = !contact.email.startsWith('[')
  const hasLinkedin = !contact.linkedin.startsWith('[')

  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <Container className="py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
          <div className="max-w-sm">
            <span className="font-mono text-sm font-bold text-slate-900 dark:text-white">
              {site.name}
            </span>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {site.shortPitch}
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-600 transition-colors hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:text-white"
            >
              <Github size={18} aria-hidden />
            </a>
            {hasLinkedin && (
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-600 transition-colors hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:text-white"
              >
                <Linkedin size={18} aria-hidden />
              </a>
            )}
            {hasEmail && (
              <a
                href={`mailto:${contact.email}`}
                aria-label="Email"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-600 transition-colors hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:text-white"
              >
                <Mail size={18} aria-hidden />
              </a>
            )}
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. Built with React, TypeScript &amp;
            Tailwind CSS.
          </p>
        </div>
      </Container>
    </footer>
  )
}
