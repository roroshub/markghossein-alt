'use client'
import { useReveal } from './useReveal'

export function About() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="about" ref={ref} className="bg-[#0d0d0d] py-24 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section tag */}
        <div className="rise flex items-center gap-3 mb-16">
          <span className="text-[#ff4423] font-display font-700 text-xs tracking-[0.3em] uppercase">01 — About</span>
          <div className="flex-1 h-px bg-[#2a2a2a]" />
        </div>

        {/* Main layout */}
        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 xl:gap-20 items-start">

          {/* Left — big quote */}
          <div>
            <blockquote className="rise font-display font-800 text-white leading-[1.1] tracking-tight mb-12"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 4.5rem)' }}
            >
              "If you're looking for an agent who is{' '}
              <span className="text-[#ff4423]">genuinely invested</span>
              {' '}in helping your family build wealth — you've found your guy."
            </blockquote>

            {/* Stats in a dark row */}
            <div className="rise grid grid-cols-3 divide-x divide-[#2a2a2a] border border-[#2a2a2a]">
              {[
                { n: '500+', l: 'Families Helped' },
                { n: '$2B+', l: 'In Transactions' },
                { n: '100%', l: 'Recommend Rate' },
              ].map((s) => (
                <div key={s.n} className="p-5 md:p-7">
                  <div className="font-display font-800 text-2xl md:text-4xl text-white mb-1">{s.n}</div>
                  <div className="text-[#444] text-xs tracking-wider uppercase">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — bio + card */}
          <div className="space-y-6">
            {/* Identity card */}
            <div className="rise border border-[#2a2a2a] bg-[#111] p-6">
              <div className="flex items-center gap-4 mb-5 pb-5 border-b border-[#2a2a2a]">
                <div className="w-12 h-12 bg-[#ff4423] flex items-center justify-center font-display font-800 text-white text-sm">
                  MG
                </div>
                <div>
                  <div className="font-display font-700 text-white">Mark Ghossein</div>
                  <div className="text-[#555] text-xs tracking-wider uppercase mt-0.5">Century 21 · Ottawa, ON</div>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                {['Buyer Rep', 'Seller Rep', 'Upsizing', 'Investment'].map((tag) => (
                  <span key={tag} className="border border-[#2a2a2a] text-[#555] text-xs px-3 py-1 tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <p className="rise text-[#666] text-sm leading-relaxed">
              Mark combines deep market knowledge with an unwavering commitment to his clients' long-term financial wellbeing. Based in Ottawa with 15+ years of experience, he has helped hundreds of families navigate buying, selling, and upsizing.
            </p>

            {/* Pillars */}
            <div className="rise space-y-3">
              {[
                { t: 'Strategic Pricing', d: 'Data over emotion — every time.' },
                { t: 'Long-Term Equity', d: 'Building wealth beyond the transaction.' },
                { t: 'Full Transparency', d: 'No hidden agendas, no commission games.' },
              ].map((p) => (
                <div key={p.t} className="flex gap-3 items-start">
                  <div className="w-1 h-1 rounded-full bg-[#ff4423] mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-white text-sm font-display font-600">{p.t}</span>
                    <span className="text-[#555] text-sm"> — {p.d}</span>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="rise inline-flex items-center gap-2 text-[#ff4423] font-display font-700 text-sm tracking-wide underline-hover">
              Work With Mark
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
