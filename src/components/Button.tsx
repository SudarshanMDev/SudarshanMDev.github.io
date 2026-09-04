import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary:
    'bg-accent-600 text-white hover:bg-accent-500 dark:bg-accent-500 dark:hover:bg-accent-400 dark:text-slate-950',
  secondary:
    'border border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-600 dark:hover:bg-slate-800',
  ghost:
    'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white',
}

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
  children: ReactNode
}

/** A link styled as a button — used for all CTAs (anchors, external links). */
export function ButtonLink({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  )
}
