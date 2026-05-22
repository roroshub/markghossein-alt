'use client'
import { useEffect, useRef } from 'react'

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const items = el.querySelectorAll('[data-hero]')
    items.forEach((item, i) => {
      setTimeout(() => {
        (item as HTMLElement).style.opacity = '1'
        ;(item as HTMLElement).style.transform = 'translateY(0)'
      }, 200 + i * 120)
    })
  }, [])

  return (
    <section id="hero" ref={ref} className="relative min-h-screen bg-[#f7f4ef] pt-16 flex flex-col">
      {/* Thin accent line */}
      <div className="absolute top-0 left-0 w-0.5 h-full bg-[#ddd4c5] hidden lg:block" />

      <div className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-10 grid lg:grid-cols-2 gap-0 items-center py-20 lg:py-0">
        {/* Left — text */}
        <div className="lg:pr-16 xl:pr-24">
          <div
            data-hero
            className="inline-flex items-center gap-3 mb-10"
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1)' }}
          >
            <div className="w-8 h-px bg-[#1b3d2e]" />
            <span className="text-[#1b3d2e] text-xs font-semibold tracking-[0.2em] uppercase">
              Ottawa's Trusted Advisor
            </span>
          </div>

          <h1
            data-hero
            className="font-serif text-5xl md:text-6xl xl:text-7xl leading-[1.05] text-[#141414] mb-8"
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)' }}
          >
            Make the<br />
            <em className="text-[#1b3d2e] not-italic">Right Move.</em><br />
            Every Time.
          </h1>

          <p
            data-hero
            className="text-[#5a5a5a] text-lg leading-relaxed max-w-md mb-10"
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)' }}
          >
            Whether you're buying, selling, or upsizing — I help Ottawa families build generational wealth through strategic, data-driven real estate.
          </p>

          <div
            data-hero
            className="flex flex-wrap items-center gap-4 mb-16"
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)' }}
          >
            <a
              href="#contact"
              className="bg-[#1b3d2e] text-white px-8 py-4 text-sm font-semibold tracking-wide hover:bg-[#245040] transition-colors duration-200"
            >
              Book a Consultation
            </a>
            <a
              href="#services"
              className="text-[#1e1e1e] text-sm font-semibold tracking-wide underline underline-offset-4 hover:text-[#1b3d2e] transition-colors"
            >
              Explore Services
            </a>
          </div>

          {/* Stats */}
          <div
            data-hero
            className="grid grid-cols-3 gap-6 border-t border-[#ddd4c5] pt-8"
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)' }}
          >
            {[
              { num: '500+', label: 'Families Served' },
              { num: '$2B+', label: 'In Transactions' },
              { num: '15+', label: 'Years Experience' },
            ].map((s) => (
              <div key={s.num}>
                <div className="font-serif text-3xl text-[#1b3d2e] mb-1">{s.num}</div>
                <div className="text-[#9c8b7a] text-xs tracking-wide uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — visual */}
        <div
          data-hero
          className="relative hidden lg:flex flex-col justify-center pl-12 xl:pl-20"
          style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 1s cubic-bezier(0.16,1,0.3,1)' }}
        >
          {/* Main card */}
          <div className="relative bg-[#1b3d2e] aspect-[4/5] max-h-[600px] overflow-hidden">
            {/* Decorative grid */}
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-10">
              <div className="w-16 h-16 border border-white/30 flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M4 28V14L16 4l12 10v14H20v-8h-8v8H4z" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="font-serif text-white/60 text-sm italic mb-2">Your next chapter starts here.</p>
              <p className="font-serif text-white text-2xl leading-snug">
                Ottawa real estate,<br />done with precision.
              </p>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 bg-[#f7f4ef] border border-[#ddd4c5] px-6 py-5 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#1b3d2e] flex items-center justify-center text-white text-xs font-serif">C21</div>
              <div>
                <div className="text-[#1e1e1e] text-sm font-semibold">Century 21 Advisor</div>
                <div className="text-[#9c8b7a] text-xs">Ottawa, Ontario</div>
              </div>
            </div>
          </div>

          {/* Rating badge */}
          <div className="absolute -top-4 -right-4 bg-[#1b3d2e] text-white px-5 py-4">
            <div className="text-2xl font-serif">5.0</div>
            <div className="text-[#95d5b2] text-xs">★★★★★</div>
            <div className="text-white/60 text-xs mt-0.5">Google</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="pb-10 flex justify-center">
        <a href="#about" className="flex flex-col items-center gap-2 text-[#9c8b7a] hover:text-[#1b3d2e] transition-colors">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-current opacity-50" />
        </a>
      </div>
    </section>
  )
}
