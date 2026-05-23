'use client'
import { useEffect, useRef } from 'react'

const stats = [
  { n: '500+', l: 'Families Helped' },
  { n: '$2B+', l: 'In Transactions' },
  { n: '15+',  l: 'Years Experience' },
  { n: '100%', l: 'Referral Rate' },
]

export function Hero() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const items = el.querySelectorAll<HTMLElement>('[data-in]')
    items.forEach((item, i) => {
      setTimeout(() => {
        item.style.opacity = '1'
        item.style.transform = 'translateY(0)'
      }, 200 + i * 120)
    })
  }, [])

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen grid lg:grid-cols-2"
    >
      {/* ── Left: text ─────────────────────────────────────────── */}
      <div className="relative bg-[#faf8f5] flex flex-col justify-end pb-16 md:pb-20 px-6 md:px-10 pt-24 overflow-hidden">
        {/* Vertical texture lines */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="absolute top-0 bottom-0 w-px bg-black/[0.04]"
              style={{ left: `${(i + 1) * 20}%` }} />
          ))}
        </div>

        {/* Top accent bar */}
        <div
          data-in
          className="absolute top-0 left-0 h-0.5 bg-[#1b4332]"
          style={{ width: '50%', opacity: 0,
            transition: 'opacity 0.5s ease, width 1.4s cubic-bezier(0.16,1,0.3,1)' }}
        />

        <div className="relative z-10 flex flex-col gap-8">
          {/* Label */}
          <div
            data-in
            className="flex items-center gap-3"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1)' }}
          >
            <div className="w-5 h-5 bg-[#1b4332] flex items-center justify-center flex-shrink-0">
              <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                <path d="M1.5 4.5h6M4.5 1.5l3 3-3 3" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[#999] text-xs tracking-[0.25em] uppercase font-display">
              Ottawa's Real Estate Advisor · eXp Realty
            </span>
          </div>

          {/* Headline */}
          <h1
            data-in
            className="font-display font-900 leading-[1] tracking-tight text-[#0d0d0d]"
            style={{
              fontSize: 'clamp(3.2rem, 8vw, 8rem)',
              opacity: 0,
              transform: 'translateY(40px)',
              transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            Make the<br />
            <span className="text-[#1b4332]">Right</span><br />
            Move.
          </h1>

          {/* Description */}
          <p
            data-in
            className="text-[#777] text-base md:text-lg max-w-sm leading-relaxed"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)' }}
          >
            Whether you're buying, selling, or upsizing — I help Ottawa families build generational wealth through strategic, data-driven real estate.
          </p>

          {/* CTAs */}
          <div
            data-in
            className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-[#e2ddd8]"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)' }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 bg-[#1b4332] text-white font-display font-700 text-sm tracking-wide px-8 py-4 hover:bg-[#14332a] transition-colors duration-200 whitespace-nowrap"
            >
              Book a Call
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
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

        {/* Scroll line */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#1b4332] animate-pulse" />
        </div>
      </div>

      {/* ── Right: green panel ─────────────────────────────────── */}
      <div className="relative bg-[#1b4332] flex flex-col justify-between p-10 md:p-14 lg:p-16 min-h-[60vw] lg:min-h-0 overflow-hidden">

        {/* Vertical grid lines */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="absolute top-0 bottom-0 w-px bg-white/[0.07]"
              style={{ left: `${(i + 1) * 20}%` }} />
          ))}
        </div>

        {/* Large watermark diamond */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[420px] h-[420px] border border-white/[0.06] rotate-45" />
          <div className="absolute w-[280px] h-[280px] border border-white/[0.05] rotate-45" />
        </div>

        {/* Top: monogram */}
        <div
          data-in
          className="relative z-10"
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1)' }}
        >
          <div className="font-display font-900 text-white/[0.12] leading-none select-none"
            style={{ fontSize: 'clamp(5rem, 10vw, 9rem)' }}>
            MG.
          </div>
        </div>

        {/* Middle: stats grid */}
        <div
          data-in
          className="relative z-10 grid grid-cols-2 gap-x-8 gap-y-10"
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)' }}
        >
          {stats.map((s) => (
            <div key={s.n}>
              <div className="font-display font-800 text-white leading-none"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                {s.n}
              </div>
              <div className="text-white/40 text-xs tracking-[0.2em] uppercase mt-2 font-display">{s.l}</div>
            </div>
          ))}
        </div>

        {/* Bottom: C21 badge */}
        <div
          data-in
          className="relative z-10 border-t border-white/10 pt-6 flex items-center gap-3"
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1)' }}
        >
          <div className="w-8 h-8 border border-white/20 flex items-center justify-center font-display font-700 text-white/50 text-xs">
            eXp
          </div>
          <div>
            <div className="text-white/60 text-xs font-display font-600 tracking-wide">eXp Realty</div>
            <div className="text-white/30 text-xs tracking-wider">Ottawa, Ontario</div>
          </div>
        </div>
      </div>
    </section>
  )
}
