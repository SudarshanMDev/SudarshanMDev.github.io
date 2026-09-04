import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

/**
 * Wraps children in a subtle fade-up-on-scroll animation.
 * `delay` (ms) staggers grouped items. Honors prefers-reduced-motion via CSS.
 */
export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const { ref, visible } = useReveal()

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  )
}
