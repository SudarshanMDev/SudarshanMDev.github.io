import { useCallback, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

/**
 * Reads/writes the `dark` class on <html> and persists the choice.
 * The initial class is set by an inline script in index.html to avoid a flash.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light',
  )

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* ignore storage errors (e.g. private mode) */
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggleTheme }
}
