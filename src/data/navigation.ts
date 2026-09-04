/**
 * Navigation links. Each `href` must match a section `id` in the page.
 * Reorder or rename freely — the navbar and mobile menu use this list.
 */
export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Approach', href: '#approach' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
