import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { ButtonLink } from '../components/Button'
import { site } from '../data/site'

export function Contact() {
  const { contact } = site
  const hasEmail = !contact.email.startsWith('[')
  const hasLinkedin = !contact.linkedin.startsWith('[')
  const hasLocation = !contact.location.startsWith('[')

  return (
    <section id="contact" className="py-20 sm:py-28">
      <Container>
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/50">
          <div className="grid lg:grid-cols-2">
            {/* Left: pitch */}
            <div className="p-8 sm:p-10 lg:p-12">
              <SectionHeading
                eyebrow="Contact"
                title="Let's work together"
                intro="Have a backend project, an existing application that needs work, or an idea for adding AI features? Tell me a bit about it and I'll get back to you."
              />

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {hasEmail ? (
                  <ButtonLink href={`mailto:${contact.email}`} variant="primary">
                    <Mail size={18} aria-hidden />
                    Email Me
                  </ButtonLink>
                ) : (
                  <ButtonLink href={contact.github} target="_blank" rel="noopener noreferrer" variant="primary">
                    <Github size={18} aria-hidden />
                    Reach Me on GitHub
                  </ButtonLink>
                )}
                {hasLinkedin && (
                  <ButtonLink
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                  >
                    <Linkedin size={18} aria-hidden />
                    LinkedIn
                  </ButtonLink>
                )}
              </div>
            </div>

            {/* Right: details */}
            <div className="border-t border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900/60 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Get in touch
              </h3>
              <ul className="mt-6 space-y-5">
                <ContactRow
                  icon={<Mail size={18} aria-hidden />}
                  label="Email"
                  value={hasEmail ? contact.email : 'Add your email in src/data/site.ts'}
                  href={hasEmail ? `mailto:${contact.email}` : undefined}
                  muted={!hasEmail}
                />
                <ContactRow
                  icon={<Linkedin size={18} aria-hidden />}
                  label="LinkedIn"
                  value={hasLinkedin ? contact.linkedin : 'Add your LinkedIn in src/data/site.ts'}
                  href={hasLinkedin ? contact.linkedin : undefined}
                  muted={!hasLinkedin}
                />
                <ContactRow
                  icon={<Github size={18} aria-hidden />}
                  label="GitHub"
                  value={contact.github}
                  href={contact.github}
                />
                <ContactRow
                  icon={<MapPin size={18} aria-hidden />}
                  label="Location"
                  value={hasLocation ? contact.location : 'Add your location in src/data/site.ts'}
                  muted={!hasLocation}
                />
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function ContactRow({
  icon,
  label,
  value,
  href,
  muted = false,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
  muted?: boolean
}) {
  return (
    <li className="flex gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-accent-600 dark:border-slate-700 dark:bg-slate-900 dark:text-accent-400">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
          {label}
        </p>
        {href ? (
          <a
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="break-words text-sm font-medium text-slate-800 transition-colors hover:text-accent-600 dark:text-slate-200 dark:hover:text-accent-400"
          >
            {value}
          </a>
        ) : (
          <p
            className={`break-words text-sm ${
              muted
                ? 'italic text-slate-400 dark:text-slate-500'
                : 'font-medium text-slate-800 dark:text-slate-200'
            }`}
          >
            {value}
          </p>
        )}
      </div>
    </li>
  )
}
