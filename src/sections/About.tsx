import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { Code2, Globe2, Wrench } from 'lucide-react'

const points = [
  {
    icon: Code2,
    title: 'Backend focus',
    text: 'Java, Spring Boot, REST APIs, databases, and microservices — the parts that keep an application reliable.',
  },
  {
    icon: Wrench,
    title: 'Build & improve',
    text: 'Comfortable starting new services or working inside an existing codebase to fix bugs and add features.',
  },
  {
    icon: Globe2,
    title: 'International clients',
    text: 'Experience communicating and collaborating with foreign clients across time zones.',
  },
]

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Backend engineering you can rely on"
          intro="I'm a Java & Spring Boot developer with 2+ years of professional experience building and maintaining backend systems."
        />

        <div className="mt-10 grid gap-12 lg:grid-cols-3 lg:gap-16">
          <Reveal className="lg:col-span-2">
            <div className="space-y-5 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              <p>
                I work primarily on the backend — designing and building REST APIs, structuring
                business logic, modeling relational data, and connecting services together with
                Java and Spring Boot. My day-to-day covers both new development and ongoing
                maintenance of existing applications.
              </p>
              <p>
                That means I&apos;m equally comfortable starting a service from scratch or stepping
                into an existing Spring Boot codebase to fix a stubborn bug, integrate a
                third-party API, or add a feature without breaking what already works. I also work
                with microservices and event-driven communication where the application genuinely
                benefits from it.
              </p>
              <p>
                Alongside core backend work, I&apos;m increasingly focused on integrating modern
                AI/LLM capabilities into business applications — adding practical features like
                document and data extraction or retrieval-based answers where they solve a real
                problem, rather than as a gimmick.
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-4">
            {points.map((point, i) => (
              <Reveal key={point.title} delay={i * 80}>
                <div className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/50">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-600 dark:bg-accent-500/10 dark:text-accent-400">
                    <point.icon size={20} aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">{point.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {point.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
