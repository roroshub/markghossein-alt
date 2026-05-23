'use client'
import { useState } from 'react'
import { useReveal } from './useReveal'

const testimonials = [
  {
    quote: "Mark didn't just find us a house — he built us a strategy. We sold $80K over asking and found our dream home within the same month. The Smooth Move System is no joke.",
    name: 'Sarah & Raj K.',
    detail: 'Upsized · Barrhaven to Westboro',
    initials: 'SR',
  },
  {
    quote: "As first-time buyers, we were terrified. Mark walked us through everything, never made us feel rushed, and negotiated $45,000 off the asking price. He's the real deal.",
    name: 'James & Lauren T.',
    detail: 'First-time buyers · Kanata, Ottawa',
    initials: 'JL',
  },
  {
    quote: "I've worked with three agents over the years. Mark is in a completely different league. His market knowledge and no-nonsense approach got my condo sold in 4 days.",
    name: 'David M.',
    detail: 'Sold · Westboro, Ottawa',
    initials: 'DM',
  },
]

export function Testimonials() {
  const ref = useReveal<HTMLElement>()
  const [current, setCurrent] = useState(0)

  const t = testimonials[current]

  return (
    <section id="testimonials" ref={ref} className="bg-white py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="rise flex items-center gap-3 mb-16">
          <span className="text-[#1b4332] font-display font-700 text-xs tracking-[0.3em] uppercase">06 — Client Stories</span>
          <div className="flex-1 h-px bg-[#e2ddd8]" />
        </div>

        <div className="rise min-h-[320px] flex flex-col justify-between">
          <div className="mb-10">
            <div className="font-display font-800 text-[#1b4332] text-8xl leading-none mb-4 select-none">"</div>
            <p
              className="font-display font-700 text-[#0d0d0d] leading-[1.2] tracking-tight transition-all duration-500"
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 3rem)' }}
            >
              {t.quote}
            </p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#1b4332] font-display font-700 text-white flex items-center justify-center text-sm">
                {t.initials}
              </div>
              <div>
                <div className="text-[#0d0d0d] font-display font-700">{t.name}</div>
                <div className="text-[#999] text-xs tracking-wider uppercase mt-0.5">{t.detail}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
                className="w-10 h-10 border border-[#e2ddd8] flex items-center justify-center text-[#bbb] hover:border-[#1b4332] hover:text-[#1b4332] transition-colors"
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
                    className={`transition-all duration-300 ${i === current ? 'w-6 h-1 bg-[#1b4332]' : 'w-2 h-1 bg-[#ddd8d2] hover:bg-[#bbb]'}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
                className="w-10 h-10 border border-[#e2ddd8] flex items-center justify-center text-[#bbb] hover:border-[#1b4332] hover:text-[#1b4332] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="rise mt-16 pt-10 border-t border-[#e2ddd8] flex flex-wrap gap-4">
          {[
            { score: '5.0', src: 'Google Reviews' },
            { score: '4.9', src: 'Realtor.ca' },
            { score: '100%', src: 'Referral Rate' },
          ].map((b) => (
            <div key={b.src} className="flex items-center gap-3 border border-[#e2ddd8] px-5 py-3">
              <span className="font-display font-800 text-[#0d0d0d] text-xl">{b.score}</span>
              <div>
                <div className="text-[#1b4332] text-xs">★★★★★</div>
                <div className="text-[#999] text-xs tracking-wide">{b.src}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
