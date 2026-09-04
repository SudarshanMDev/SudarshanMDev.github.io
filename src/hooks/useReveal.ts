import { useEffect, useRef, useState } from 'react'

/**
 * Small IntersectionObserver hook for subtle scroll-in reveals.
 * Returns a ref to attach and a boolean that flips true once the element
 * scrolls into view. Reveals only once.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
) {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || visible) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      })
    }, options)

    observer.observe(el)
    return () => observer.disconnect()
  }, [options, visible])

  return { ref, visible }
}
