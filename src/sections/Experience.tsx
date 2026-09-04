import { Briefcase, CheckCircle2 } from 'lucide-react'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { experience, experienceFacts } from '../data/experience'

export function Experience() {
  return (
    <section id="experience" className="border-y border-slate-200 bg-slate-50 py-20 dark:border-slate-800 dark:bg-slate-900/30 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Professional background"
          intro="Currently working as a software developer while taking on freelance backend projects."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-16">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <ol className="relative space-y-8 border-l border-slate-200 pl-8 dark:border-slate-800">
              {experience.map((item, i) => (
                <Reveal key={`${item.company}-${i}`} delay={i * 90}>
                  <li className="relative">
                    <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-accent-600 dark:border-slate-700 dark:bg-slate-900 dark:text-accent-400">
                      <Briefcase size={15} aria-hidden />
                    </span>
                    <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/50">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                          {item.role}
                        </h3>
                        <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                          {item.period}
                        </span>
                      </div>
                      <p className="mt-1 text-sm font-medium text-accent-600 dark:text-accent-400">
                        {item.company}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {item.summary}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {item.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-300"
                          >
                            <CheckCircle2
                              size={16}
                              className="mt-0.5 shrink-0 text-accent-600 dark:text-accent-400"
                              aria-hidden
                            />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* Quick facts */}
          <Reveal delay={120}>
            <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/50">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                At a glance
              </h3>
              <ul className="mt-4 space-y-4">
                {experienceFacts.map((fact) => (
                  <li key={fact} className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-accent-600 dark:text-accent-400"
                      aria-hidden
                    />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
