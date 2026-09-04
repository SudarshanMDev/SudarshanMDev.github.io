import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Container } from './Container'
import { ThemeToggle } from './ThemeToggle'
import { ButtonLink } from './Button'
import { navLinks } from '../data/navigation'
import { site } from '../data/site'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent background scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-slate-200 bg-white/85 backdrop-blur dark:border-slate-800 dark:bg-slate-950/85'
          : 'border-transparent bg-transparent'
      }`}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Primary">
          <a
            href="#top"
            className="flex items-center gap-2 font-mono text-sm font-bold text-slate-900 dark:text-white"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-accent-400 dark:bg-slate-800">
              SM
            </span>
            <span className="hidden sm:inline">{site.name}</span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <ButtonLink href="#contact" variant="primary" className="hidden sm:inline-flex">
              Let&apos;s Talk
            </ButtonLink>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-700 dark:border-slate-700 dark:text-slate-200 lg:hidden"
            >
              {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile menu panel */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 lg:hidden"
        >
          <Container className="py-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <ButtonLink
                href="#contact"
                variant="primary"
                onClick={() => setOpen(false)}
                className="mt-3"
              >
                Let&apos;s Work Together
              </ButtonLink>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
