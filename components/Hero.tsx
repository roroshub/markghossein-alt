'use client'
import { useEffect, useRef } from 'react'

export function Hero() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const items = el.querySelectorAll<HTMLElement>('[data-in]')
    items.forEach((item, i) => {
      setTimeout(() => {
        item.style.opacity = '1'
        item.style.transform = 'translateY(0) rotate(0deg)'
      }, 300 + i * 140)
    })
  }, [])

  return (
    <section id="hero" ref={ref} className="relative min-h-screen bg-white flex flex-col overflow-hidden">
      {/* Background texture lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-px bg-black/[0.04]"
            style={{ left: `${(i + 1) * 12.5}%` }}
          />
        ))}
      </div>

      {/* Red accent bar — top */}
      <div
        data-in
        className="absolute top-0 left-0 h-0.5 bg-[#ff4423]"
        style={{
          width: '40%',
          opacity: 0,
          transition: 'opacity 0.6s ease, width 1.2s cubic-bezier(0.16,1,0.3,1)',
        }}
      />

      <div className="relative z-10 flex-1 flex flex-col justify-end pb-16 md:pb-20 px-6 md:px-10 pt-24">
        {/* Top label row */}
        <div
          data-in
          className="flex items-center gap-4 mb-6 md:mb-8"
          style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)' }}
        >
          <div className="w-6 h-6 bg-[#ff4423] flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 5h6M5 2l3 3-3 3" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-[#999] text-xs tracking-[0.25em] uppercase font-display">
            Ottawa's Real Estate Advisor · Century 21
          </span>
        </div>

        {/* HUGE headline */}
        <div className="mb-10 md:mb-14 overflow-hidden">
          <h1
            data-in
            className="font-display font-800 leading-[0.9] tracking-tight text-[#0d0d0d]"
            style={{
              fontSize: 'clamp(3.5rem, 10vw, 10rem)',
              opacity: 0,
              transform: 'translateY(80px)',
              transition: 'all 1s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            Make the<br />
            <span className="text-[#ff4423]">Right</span><br />
            Move.
          </h1>
        </div>

        {/* Bottom row — description + CTA */}
        <div
          data-in
          className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-end border-t border-[#e2ddd8] pt-8"
          style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1)' }}
        >
          <p className="text-[#777] text-base md:text-lg max-w-md leading-relaxed">
            Whether you're buying, selling, or upsizing — I'm invested in helping Ottawa families build generational wealth through strategic, data-driven real estate.
          </p>
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 flex-shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 bg-[#ff4423] text-white font-display font-700 text-sm tracking-wide px-8 py-4 hover:bg-[#cc3519] transition-colors duration-200 whitespace-nowrap"
            >
              Book a Call
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border border-[#d8d4ce] text-[#999] font-display text-sm tracking-wide px-8 py-4 hover:border-[#0d0d0d] hover:text-[#0d0d0d] transition-colors duration-200 whitespace-nowrap"
            >
              View Services
            </a>
          </div>
        </div>
      </div>

      {/* Floating stats */}
      <div
        data-in
        className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-px hidden lg:flex"
        style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 1s cubic-bezier(0.16,1,0.3,1)' }}
      >
        {[
          { n: '500+', l: 'Families' },
          { n: '$2B+', l: 'Transactions' },
          { n: '15+', l: 'Years' },
        ].map((s) => (
          <div key={s.n} className="border border-[#e2ddd8] bg-[#f5f2ed] px-5 py-4 text-right">
            <div className="font-display font-800 text-2xl text-[#0d0d0d]">{s.n}</div>
            <div className="text-[#999] text-xs tracking-wider uppercase mt-0.5">{s.l}</div>
          </div>
        ))}
      </div>

      {/* Scroll line */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#ff4423] animate-pulse" />
      </div>
    </section>
  )
}
