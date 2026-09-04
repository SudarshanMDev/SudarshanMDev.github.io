import {
  GitBranch,
  Layers,
  MessagesSquare,
  Search,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { Reveal } from '../components/Reveal'
import { approach } from '../data/approach'

// Maps the `icon` string from data/approach.ts to a Lucide component.
const iconMap: Record<string, LucideIcon> = {
  MessagesSquare,
  ShieldCheck,
  Layers,
  Search,
  GitBranch,
  Sparkles,
}

export function Approach() {
  return (
    <section id="approach" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why Work With Me"
          title="A dependable engineering partner"
          intro="Beyond writing code, these are the things that make a freelance engagement actually work for you."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {approach.map((item, i) => {
            const Icon = iconMap[item.icon] ?? ShieldCheck
            return (
              <Reveal key={item.title} delay={(i % 3) * 80}>
                <div className="flex h-full gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-accent-600 dark:border-slate-800 dark:bg-slate-900 dark:text-accent-400">
                    <Icon size={20} aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
