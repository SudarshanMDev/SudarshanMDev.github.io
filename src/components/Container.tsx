import type { ReactNode } from 'react'

/** Centers content and applies consistent horizontal padding + max width. */
export function Container({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`mx-auto w-full max-w-content px-5 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}
