import { useEffect, useRef } from 'react'

export function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const trigger = () => {
      el.querySelectorAll<HTMLElement>('.rise').forEach((item, i) => {
        setTimeout(() => item.classList.add('in'), i * 80)
      })
    }

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          trigger()
          obs.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px 0px -40px 0px' }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return ref
}
