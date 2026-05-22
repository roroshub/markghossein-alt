'use client'
import { useState } from 'react'
import { useReveal } from './useReveal'

const services = [
  {
    num: '01',
    title: 'Buyer Representation',
    sub: 'From search to keys in hand.',
    desc: 'I guide you through every step — from pre-approval to closing day — so you can buy with confidence, clarity, and zero regrets. No rushed decisions, no surprises.',
    items: ['Personalized property search', 'Offer strategy & negotiation', 'Inspection coordination', 'Closing support'],
    cta: '#contact',
  },
  {
    num: '02',
    title: 'Seller Representation',
    sub: 'Maximum value, minimum stress.',
    desc: "Your property deserves top dollar and a strategic plan to get it. I bring expert staging guidance, data-backed pricing, and aggressive market exposure to every listing.",
    items: ['Professional staging consultation', 'Targeted marketing campaign', 'Strategic pricing analysis', 'Offer review & negotiation'],
    cta: '#contact',
  },
  {
    num: '03',
    title: 'Upsizing Consultation',
    sub: 'Sell high. Buy smart. Move once.',
    desc: "Selling and buying simultaneously is complex. My Smooth Move System™ ensures your transition is seamless, stress-free, and financially optimized so nothing falls through the cracks.",
    items: ['Timeline synchronization', 'Budget planning beyond pre-approval', 'Bridge financing guidance', 'Dual negotiation strategy'],
    cta: '#process',
  },
  {
    num: '04',
    title: 'Investment Strategy',
    sub: 'Build a portfolio that works for you.',
    desc: "Real estate is one of the most powerful wealth-building tools available. I help investors identify opportunities, analyze returns, and plan multi-property strategies for long-term equity.",
    items: ['ROI & cap rate analysis', 'Market opportunity spotting', 'Multi-property planning', 'Long-term equity roadmap'],
    cta: '#contact',
  },
]

export function Services() {
  const ref = useReveal<HTMLElement>()
  const [active, setActive] = useState<number | null>(0)

  return (
    <section id="services" ref={ref} className="bg-[#080808] py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="rise flex items-center gap-3 mb-16">
          <span className="text-[#ff4423] font-display font-700 text-xs tracking-[0.3em] uppercase">02 — Services</span>
          <div className="flex-1 h-px bg-[#2a2a2a]" />
        </div>

        <div className="rise flex items-end justify-between mb-12 gap-6">
          <h2 className="font-display font-800 text-white leading-[1] tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)' }}
          >
            What I<br /><span className="text-[#ff4423]">Offer.</span>
          </h2>
          <p className="text-[#555] text-sm max-w-xs leading-relaxed hidden md:block">
            Tap each service to explore what's included.
          </p>
        </div>

        {/* Accordion */}
        <div className="border-t border-[#2a2a2a]">
          {services.map((s, i) => {
            const isOpen = active === i
            return (
              <div key={s.num} className="rise border-b border-[#2a2a2a]">
                <button
                  className="w-full text-left py-6 md:py-8 flex items-center justify-between gap-6 group"
                  onClick={() => setActive(isOpen ? null : i)}
                >
                  <div className="flex items-center gap-5 md:gap-10 min-w-0">
                    <span className="font-display font-700 text-[#333] text-sm tracking-widest w-8 flex-shrink-0">
                      {s.num}
                    </span>
                    <div className="min-w-0">
                      <span className={`font-display font-800 text-white leading-none block transition-colors duration-300 ${isOpen ? 'text-[#ff4423]' : 'group-hover:text-[#ff4423]'}`}
                        style={{ fontSize: 'clamp(1.25rem, 3vw, 2.25rem)' }}
                      >
                        {s.title}
                      </span>
                      <span className="text-[#444] text-xs tracking-wider uppercase mt-1 hidden md:block">{s.sub}</span>
                    </div>
                  </div>
                  <div className={`w-8 h-8 border flex-shrink-0 flex items-center justify-center transition-all duration-300 ${isOpen ? 'border-[#ff4423] bg-[#ff4423] rotate-45' : 'border-[#333] group-hover:border-[#ff4423]'}`}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 2v8M2 6h8" stroke={isOpen ? 'white' : '#888'} strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                </button>

                {/* Expandable body */}
                <div className={`accordion-body ${isOpen ? 'open' : ''}`}>
                  <div className="accordion-inner">
                    <div className="pl-0 md:pl-[calc(2rem+40px)] pb-8 grid md:grid-cols-[2fr_1fr] gap-8">
                      <div>
                        <p className="text-[#777] text-base leading-relaxed mb-6">{s.desc}</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {s.items.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-sm text-[#666]">
                              <span className="w-1 h-1 bg-[#ff4423] rounded-full flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex md:justify-end items-start">
                        <a
                          href={s.cta}
                          className="inline-flex items-center gap-2 border border-[#ff4423] text-[#ff4423] font-display font-700 text-sm tracking-wide px-6 py-3 hover:bg-[#ff4423] hover:text-white transition-colors duration-200"
                        >
                          Get Started
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
