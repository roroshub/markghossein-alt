'use client'
import { useReveal } from './useReveal'

const tools = [
  {
    title: 'HomeWorth',
    tag: 'Free Valuation',
    desc: "Find out what your home is worth in today's market — a free, no-obligation report tailored to your neighbourhood.",
    cta: 'Get My Valuation',
  },
  {
    title: 'Nosey Neighbour',
    tag: 'Market Alerts',
    desc: 'Get instant alerts when homes sell in your neighbourhood — stay ahead of your local market and know your equity in real time.',
    cta: 'Set Up Alerts',
  },
  {
    title: 'Buyer Checklist',
    tag: 'Free Download',
    desc: "The complete step-by-step checklist every first-time and move-up buyer needs before making an offer. Zero surprises.",
    cta: 'Download Free',
  },
]

export function Tools() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="tools" ref={ref} className="bg-[#f5f2ed] py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="rise flex items-center gap-3 mb-16">
          <span className="text-[#ff4423] font-display font-700 text-xs tracking-[0.3em] uppercase">05 — Free Tools</span>
          <div className="flex-1 h-px bg-[#e2ddd8]" />
        </div>

        <h2 className="rise font-display font-800 text-[#0d0d0d] leading-[1] tracking-tight mb-12"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)' }}
        >
          Resources,<br /><span className="text-[#ff4423]">On Us.</span>
        </h2>

        <div className="rise grid md:grid-cols-3 gap-px bg-[#e2ddd8]">
          {tools.map((t) => (
            <div key={t.title} className="bg-white p-8 flex flex-col group hover:bg-[#f5f2ed] transition-colors">
              <span className="text-[#ff4423] text-xs font-display font-700 tracking-[0.2em] uppercase mb-4">
                {t.tag}
              </span>
              <h3 className="font-display font-800 text-[#0d0d0d] text-2xl mb-4 group-hover:text-[#ff4423] transition-colors">
                {t.title}
              </h3>
              <p className="text-[#888] text-sm leading-relaxed flex-1 mb-6">{t.desc}</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[#ff4423] font-display font-700 text-sm tracking-wide underline-hover"
              >
                {t.cta}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
