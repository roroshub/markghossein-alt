'use client'
import { useEffect, useRef } from 'react'

const testimonials = [
  {
    quote: "Mark didn't just find us a house — he built us a strategy. We sold $80K over asking and found our dream home within the same month. The Smooth Move System is no joke.",
    name: 'Sarah & Raj K.',
    detail: 'Upsized from Brampton to Oakville',
    initials: 'SR',
  },
  {
    quote: "As first-time buyers, we were terrified. Mark walked us through everything, never made us feel rushed, and negotiated $45,000 off the asking price. He's the real deal.",
    name: 'James & Lauren T.',
    detail: 'First-time buyers, Mississauga',
    initials: 'JL',
  },
  {
    quote: "I've worked with three agents over the years. Mark is in a completely different league. His market knowledge and no-nonsense approach got my condo sold in 4 days.",
    name: 'David M.',
    detail: 'Sold in Burlington',
    initials: 'DM',
  },
]

export function Testimonials() {
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
    <section id="testimonials" ref={ref} className="bg-[#fdfcfa] py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="reveal flex items-center gap-4 mb-5">
          <span className="font-serif text-[#ddd4c5] text-8xl md:text-9xl leading-none select-none">06</span>
          <div>
            <div className="w-8 h-px bg-[#1b3d2e] mb-2" />
            <span className="text-[#1b3d2e] text-xs font-semibold tracking-[0.2em] uppercase">Client Stories</span>
          </div>
        </div>
        <h2 className="reveal font-serif text-4xl md:text-5xl text-[#141414] leading-[1.1] mb-16">
          Real Results.<br /><em className="text-[#1b3d2e]">Real Families.</em>
        </h2>

        {/* Testimonials */}
        <div className="space-y-0">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal border-b border-[#ede7dc] last:border-0 grid md:grid-cols-[1fr_280px] gap-8 py-10"
            >
              <div>
                <div className="text-[#95d5b2] text-lg mb-4">★★★★★</div>
                <p className="font-serif text-xl md:text-2xl text-[#1e1e1e] leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex md:flex-col md:items-end md:justify-center gap-4">
                <div className="w-12 h-12 bg-[#1b3d2e] flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                  {t.initials}
                </div>
                <div className="md:text-right">
                  <div className="text-[#1e1e1e] font-semibold text-sm">{t.name}</div>
                  <div className="text-[#9c8b7a] text-sm">{t.detail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review badges */}
        <div className="reveal flex flex-wrap gap-6 mt-14 pt-10 border-t border-[#ede7dc]">
          {[
            { score: '5.0', stars: '★★★★★', source: 'Google Reviews' },
            { score: '4.9', stars: '★★★★★', source: 'Realtor.ca' },
            { score: '100%', stars: '★★★★★', source: 'Recommendation Rate' },
          ].map((b) => (
            <div key={b.source} className="flex items-center gap-4 bg-[#f7f4ef] border border-[#ede7dc] px-6 py-4">
              <span className="font-serif text-2xl text-[#1b3d2e]">{b.score}</span>
              <div>
                <div className="text-[#95d5b2] text-sm">{b.stars}</div>
                <div className="text-[#9c8b7a] text-xs">{b.source}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
