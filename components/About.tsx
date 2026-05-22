'use client'
import { useEffect, useRef } from 'react'

export function About() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.querySelectorAll<HTMLElement>('.reveal').forEach((el, i) => {
            setTimeout(() => { el.classList.add('visible') }, i * 120)
          })
        }
      }),
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="bg-[#fdfcfa] py-24 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section label */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-serif text-[#ddd4c5] text-8xl md:text-9xl leading-none select-none">01</span>
          <div>
            <div className="w-8 h-px bg-[#1b3d2e] mb-2" />
            <span className="text-[#1b3d2e] text-xs font-semibold tracking-[0.2em] uppercase">About Mark</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          {/* Left */}
          <div>
            <h2 className="reveal font-serif text-4xl md:text-5xl text-[#141414] leading-[1.1] mb-8">
              Your Forever Agent.<br />
              <em className="text-[#1b3d2e]">Your Trusted Advisor.</em>
            </h2>
            <p className="reveal text-[#5a5a5a] text-lg leading-relaxed mb-6">
              If you're looking for an agent who is genuinely invested in helping your family build generational wealth through real estate, you've found your guy. Mark Ghossein brings a strategic, data-driven approach to every transaction.
            </p>
            <p className="reveal text-[#5a5a5a] text-lg leading-relaxed mb-10">
              Based in Ottawa and affiliated with Century 21, Mark has helped hundreds of families navigate the complexities of buying, selling, and upsizing — delivering real, measurable results.
            </p>
            <a href="#contact" className="reveal inline-flex items-center gap-3 bg-[#1b3d2e] text-white px-8 py-4 text-sm font-semibold tracking-wide hover:bg-[#245040] transition-colors">
              Work With Mark
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Right */}
          <div className="space-y-0">
            {/* Profile card */}
            <div className="reveal bg-[#1b3d2e] p-8 mb-6">
              <div className="flex items-start gap-5 mb-6">
                <div className="w-16 h-16 bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-serif text-white text-xl">MG</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-lg">Mark Ghossein</div>
                  <div className="text-[#95d5b2] text-sm">Century 21 · Ottawa, Ontario</div>
                </div>
              </div>
              <p className="font-serif text-white/80 text-lg italic leading-relaxed">
                "Buyers don't buy walls — they buy how they believe their life will look."
              </p>
            </div>

            {/* Pillars */}
            {[
              { icon: '◈', title: 'Strategic Pricing', desc: 'Data over emotion — every single time.' },
              { icon: '◈', title: 'Long-Term Equity', desc: 'Building wealth beyond the transaction.' },
              { icon: '◈', title: 'Full Transparency', desc: 'No hidden agendas, no commission games.' },
            ].map((p, i) => (
              <div
                key={p.title}
                className="reveal flex items-start gap-5 border-b border-[#ede7dc] py-5 last:border-0"
              >
                <span className="text-[#1b3d2e] text-lg mt-0.5">{p.icon}</span>
                <div>
                  <div className="text-[#1e1e1e] font-semibold text-sm mb-1">{p.title}</div>
                  <div className="text-[#9c8b7a] text-sm">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
