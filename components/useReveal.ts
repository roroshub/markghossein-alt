import { useEffect, useRef } from 'react'

export function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          el.querySelectorAll<HTMLElement>('.rise').forEach((item, i) => {
            item.style.transitionDelay = `${i * 75}ms`
            item.classList.add('in')
          })
          obs.disconnect()
        }
      },
      { threshold: 0 }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return ref
}
