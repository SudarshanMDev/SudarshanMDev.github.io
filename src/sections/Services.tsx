import {
  Bug,
  Database,
  Network,
  Plug,
  Server,
  Sparkles,
  TrendingUp,
  Webhook,
  type LucideIcon,
} from 'lucide-react'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { services } from '../data/services'

// Maps the `icon` string from data/services.ts to a Lucide component.
// If you add a service with a new icon, import it above and add it here.
const iconMap: Record<string, LucideIcon> = {
  Server,
  Webhook,
  TrendingUp,
  Bug,
  Plug,
  Network,
  Database,
  Sparkles,
}

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="How I can help your project"
          intro="Whether you're building something new or improving an existing Java/Spring Boot application, here's where I add value."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Server
            return (
              <Reveal key={service.title} delay={(i % 4) * 70}>
                <article className="group h-full rounded-xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-accent-300 hover:shadow-sm dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-accent-500/40">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-50 text-accent-600 transition-colors group-hover:bg-accent-100 dark:bg-accent-500/10 dark:text-accent-400 dark:group-hover:bg-accent-500/20">
                    <Icon size={22} aria-hidden />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
