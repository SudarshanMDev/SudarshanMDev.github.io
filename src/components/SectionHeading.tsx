import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

/** Consistent eyebrow + title + optional intro used at the top of each section. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
}: {
  eyebrow: string
  title: string
  intro?: ReactNode
  align?: 'left' | 'center'
}) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <Reveal className={`max-w-2xl ${alignment}`}>
      <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-accent-600 dark:text-accent-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
          {intro}
        </p>
      )}
    </Reveal>
  )
}
