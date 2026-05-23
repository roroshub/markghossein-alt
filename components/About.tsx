'use client'
import { useReveal } from './useReveal'

export function About() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="about" ref={ref} className="bg-[#f5f2ed] py-24 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="rise flex items-center gap-3 mb-16">
          <span className="text-[#1b4332] font-display font-700 text-xs tracking-[0.3em] uppercase">01 — About</span>
          <div className="flex-1 h-px bg-[#e2ddd8]" />
        </div>

        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 xl:gap-20 items-start">

          {/* Left — big quote */}
          <div>
            <blockquote className="rise font-display font-800 text-[#0d0d0d] leading-[1.1] tracking-tight mb-12"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 4.5rem)' }}
            >
              "If you're looking for an agent who is{' '}
              <span className="text-[#1b4332]">genuinely invested</span>
              {' '}in helping your family build wealth — you've found your guy."
            </blockquote>

            <div className="rise grid grid-cols-3 divide-x divide-[#e2ddd8] border border-[#e2ddd8]">
              {[
                { n: '500+', l: 'Families Helped' },
                { n: '$2B+', l: 'In Transactions' },
                { n: '100%', l: 'Recommend Rate' },
              ].map((s) => (
                <div key={s.n} className="p-5 md:p-7 bg-white">
                  <div className="font-display font-800 text-2xl md:text-4xl text-[#0d0d0d] mb-1">{s.n}</div>
                  <div className="text-[#999] text-xs tracking-wider uppercase">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — bio + card */}
          <div className="space-y-6">
            <div className="rise border border-[#e2ddd8] bg-white p-6">
              <div className="flex items-center gap-4 mb-5 pb-5 border-b border-[#e2ddd8]">
                <div className="w-12 h-12 bg-[#1b4332] flex items-center justify-center font-display font-800 text-white text-sm">
                  MG
                </div>
                <div>
                  <div className="font-display font-700 text-[#0d0d0d]">Mark Ghossein</div>
                  <div className="text-[#999] text-xs tracking-wider uppercase mt-0.5">eXp Realty · Ottawa, ON</div>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                {['Buyer Rep', 'Seller Rep', 'Upsizing', 'Investment'].map((tag) => (
                  <span key={tag} className="border border-[#e2ddd8] text-[#999] text-xs px-3 py-1 tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <p className="rise text-[#777] text-sm leading-relaxed">
              Mark combines deep market knowledge with an unwavering commitment to his clients' long-term financial wellbeing. Based in Ottawa with 15+ years of experience, he has helped hundreds of families navigate buying, selling, and upsizing.
            </p>

            <div className="rise space-y-3">
              {[
                { t: 'Strategic Pricing', d: 'Data over emotion — every time.' },
                { t: 'Long-Term Equity', d: 'Building wealth beyond the transaction.' },
                { t: 'Full Transparency', d: 'No hidden agendas, no commission games.' },
              ].map((p) => (
                <div key={p.t} className="flex gap-3 items-start">
                  <div className="w-1 h-1 rounded-full bg-[#1b4332] mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-[#0d0d0d] text-sm font-display font-600">{p.t}</span>
                    <span className="text-[#888] text-sm"> — {p.d}</span>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="rise inline-flex items-center gap-2 text-[#1b4332] font-display font-700 text-sm tracking-wide underline-hover">
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
