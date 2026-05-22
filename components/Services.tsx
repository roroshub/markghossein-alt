'use client'
import { useEffect, useRef } from 'react'

const services = [
  {
    num: '01',
    title: 'Buyer Representation',
    desc: 'I guide you through every step — from pre-approval to closing day — so you can buy with confidence, clarity, and zero regrets.',
    items: ['Personalized property search', 'Offer strategy & negotiation', 'Inspection coordination', 'Closing support'],
    cta: 'Start your search',
    href: '#contact',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M4 28V14L16 4l12 10v14H20v-8h-8v8H4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Seller Representation',
    desc: 'Your property deserves top dollar — and a strategic plan to get it. Expert staging, data-backed pricing, and maximum market exposure.',
    items: ['Professional staging consultation', 'Targeted marketing campaign', 'Strategic pricing analysis', 'Offer review & negotiation'],
    cta: 'List your home',
    href: '#contact',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M6 26l4-12 6 4 6-8 4 16H6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="24" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Upsizing Consultation',
    desc: 'Selling and buying simultaneously is complex. My Smooth Move System™ ensures your transition is seamless, stress-free, and financially optimized.',
    items: ['Timeline synchronization', 'Budget planning beyond pre-approval', 'Bridge financing guidance', 'Dual negotiation strategy'],
    cta: 'Learn the system',
    href: '#process',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M8 24V12l4-4h8l4 4v12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M12 24v-6h8v6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M4 24h24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Investment Strategy',
    desc: 'Real estate is one of the most powerful wealth-building tools available. I help investors identify opportunities, analyze returns, and grow portfolios.',
    items: ['ROI & cap rate analysis', 'Market opportunity spotting', 'Multi-property planning', 'Long-term equity roadmap'],
    cta: 'Build your portfolio',
    href: '#contact',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="14" r="6" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 28c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export function Services() {
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
    <section id="services" ref={ref} className="bg-[#f7f4ef] py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="reveal flex items-center gap-4 mb-5">
          <span className="font-serif text-[#ddd4c5] text-8xl md:text-9xl leading-none select-none">02</span>
          <div>
            <div className="w-8 h-px bg-[#1b3d2e] mb-2" />
            <span className="text-[#1b3d2e] text-xs font-semibold tracking-[0.2em] uppercase">What I Offer</span>
          </div>
        </div>
        <h2 className="reveal font-serif text-4xl md:text-5xl text-[#141414] leading-[1.1] mb-16 max-w-xl">
          Full-Service Real Estate,<br /><em className="text-[#1b3d2e]">Done Right.</em>
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-[#ddd4c5]">
          {services.map((s) => (
            <div key={s.num} className="reveal bg-[#fdfcfa] p-8 xl:p-10 group hover:bg-[#1b3d2e] transition-colors duration-500 flex flex-col">
              <div className="flex items-start justify-between mb-8">
                <span className="font-serif text-5xl text-[#ede7dc] group-hover:text-white/20 transition-colors leading-none select-none">
                  {s.num}
                </span>
                <span className="text-[#1b3d2e] group-hover:text-[#95d5b2] transition-colors mt-1">
                  {s.icon}
                </span>
              </div>
              <h3 className="font-serif text-2xl text-[#141414] group-hover:text-white mb-4 transition-colors">
                {s.title}
              </h3>
              <p className="text-[#5a5a5a] group-hover:text-white/70 text-sm leading-relaxed mb-6 transition-colors">
                {s.desc}
              </p>
              <ul className="space-y-2 mb-8 flex-1">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#9c8b7a] group-hover:text-white/60 transition-colors">
                    <span className="w-1 h-1 rounded-full bg-[#1b3d2e] group-hover:bg-[#95d5b2] transition-colors flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={s.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1b3d2e] group-hover:text-[#95d5b2] transition-colors"
              >
                {s.cta}
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
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
