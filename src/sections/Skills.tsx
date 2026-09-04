import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { skillGroups } from '../data/skills'

export function Skills() {
  return (
    <section id="skills" className="border-y border-slate-200 bg-slate-50 py-20 dark:border-slate-800 dark:bg-slate-900/30 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Skills & Tech Stack"
          title="Tools I use to ship backend systems"
          intro="Organized by what each part of the stack is for — not a wall of badges."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={(i % 3) * 80}>
              <div className="h-full rounded-xl border border-slate-200 bg-white p-6 transition-colors hover:border-accent-300 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-accent-500/40">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
                  {group.category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
