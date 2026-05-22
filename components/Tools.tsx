'use client'
import { useEffect, useRef } from 'react'

const tools = [
  {
    title: 'HomeWorth',
    desc: "Find out what your home is worth in today's market — a free, no-obligation valuation report tailored to your neighbourhood.",
    cta: 'Get My Valuation',
    href: '#contact',
    icon: (
      <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
        <rect x="6" y="8" width="28" height="24" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M13 20h14M13 26h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="20" cy="14" r="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: 'Nosey Neighbour',
    desc: 'Get instant alerts when homes sell in your neighbourhood — stay ahead of your local market and know your equity in real time.',
    cta: 'Set Up My Alerts',
    href: '#contact',
    icon: (
      <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
        <path d="M20 6C13.373 6 8 11.373 8 18c0 9 12 16 12 16s12-7 12-16c0-6.627-5.373-12-12-12z" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="20" cy="18" r="4" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: 'Buyer Checklist',
    desc: 'The complete step-by-step checklist every first-time and move-up buyer needs before making an offer. Zero surprises.',
    cta: 'Download Free',
    href: '#contact',
    icon: (
      <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
        <path d="M10 30L16 10l8 12 4-6 4 14H10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export function Tools() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.querySelectorAll<HTMLElement>('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 100)
          })
        }
      }),
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="tools" ref={ref} className="bg-[#f7f4ef] py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="reveal flex items-center gap-4 mb-5">
          <span className="font-serif text-[#ddd4c5] text-8xl md:text-9xl leading-none select-none">05</span>
          <div>
            <div className="w-8 h-px bg-[#1b3d2e] mb-2" />
            <span className="text-[#1b3d2e] text-xs font-semibold tracking-[0.2em] uppercase">Free Tools</span>
          </div>
        </div>
        <h2 className="reveal font-serif text-4xl md:text-5xl text-[#141414] leading-[1.1] mb-16">
          Resources at Your<br /><em className="text-[#1b3d2e]">Fingertips</em>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((t, i) => (
            <div key={t.title} className="reveal group">
              {/* Icon */}
              <div className="w-14 h-14 bg-[#ede7dc] flex items-center justify-center text-[#1b3d2e] mb-6 group-hover:bg-[#1b3d2e] group-hover:text-white transition-colors duration-300">
                {t.icon}
              </div>
              <h3 className="font-serif text-2xl text-[#141414] mb-3">{t.title}</h3>
              <p className="text-[#5a5a5a] text-sm leading-relaxed mb-6">{t.desc}</p>
              <a
                href={t.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1b3d2e] border-b border-[#1b3d2e] pb-0.5 hover:opacity-70 transition-opacity"
              >
                {t.cta}
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
