'use client'
import { useEffect, useRef, useState } from 'react'

const testimonials = [
  {
    quote: "Mark didn't just find us a house — he built us a strategy. We sold $80K over asking and found our dream home within the same month. The Smooth Move System is no joke.",
    name: 'Sarah & Raj K.',
    detail: 'Upsized · Ottawa to Oakville',
    initials: 'SR',
  },
  {
    quote: "As first-time buyers, we were terrified. Mark walked us through everything, never made us feel rushed, and negotiated $45,000 off the asking price. He's the real deal.",
    name: 'James & Lauren T.',
    detail: 'First-time buyers · Mississauga',
    initials: 'JL',
  },
  {
    quote: "I've worked with three agents over the years. Mark is in a completely different league. His market knowledge and no-nonsense approach got my condo sold in 4 days.",
    name: 'David M.',
    detail: 'Sold · Burlington',
    initials: 'DM',
  },
]

export function Testimonials() {
  const ref = useRef<HTMLElement>(null)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.querySelectorAll<HTMLElement>('.rise').forEach((el, i) => {
            setTimeout(() => el.classList.add('in'), i * 100)
          })
        }
      }),
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const t = testimonials[current]

  return (
    <section id="testimonials" ref={ref} className="bg-[#080808] py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="rise flex items-center gap-3 mb-16">
          <span className="text-[#ff4423] font-display font-700 text-xs tracking-[0.3em] uppercase">06 — Client Stories</span>
          <div className="flex-1 h-px bg-[#2a2a2a]" />
        </div>

        {/* Large quote display */}
        <div className="rise min-h-[320px] flex flex-col justify-between">
          <div className="mb-10">
            {/* Large open quote mark */}
            <div className="font-display font-800 text-[#ff4423] text-8xl leading-none mb-4 select-none">"</div>
            <p
              className="font-display font-700 text-white leading-[1.2] tracking-tight transition-all duration-500"
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 3rem)' }}
            >
              {t.quote}
            </p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-6">
            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#ff4423] font-display font-700 text-white flex items-center justify-center text-sm">
                {t.initials}
              </div>
              <div>
                <div className="text-white font-display font-700">{t.name}</div>
                <div className="text-[#444] text-xs tracking-wider uppercase mt-0.5">{t.detail}</div>
              </div>
            </div>

            {/* Nav */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
                className="w-10 h-10 border border-[#2a2a2a] flex items-center justify-center text-[#555] hover:border-[#ff4423] hover:text-[#ff4423] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="flex gap-1">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`transition-all duration-300 ${i === current ? 'w-6 h-1 bg-[#ff4423]' : 'w-2 h-1 bg-[#333] hover:bg-[#555]'}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
                className="w-10 h-10 border border-[#2a2a2a] flex items-center justify-center text-[#555] hover:border-[#ff4423] hover:text-[#ff4423] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Review badges */}
        <div className="rise mt-16 pt-10 border-t border-[#2a2a2a] flex flex-wrap gap-4">
          {[
            { score: '5.0', src: 'Google Reviews' },
            { score: '4.9', src: 'Realtor.ca' },
            { score: '100%', src: 'Referral Rate' },
          ].map((b) => (
            <div key={b.src} className="flex items-center gap-3 border border-[#2a2a2a] px-5 py-3">
              <span className="font-display font-800 text-white text-xl">{b.score}</span>
              <div>
                <div className="text-[#ff4423] text-xs">★★★★★</div>
                <div className="text-[#444] text-xs tracking-wide">{b.src}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
