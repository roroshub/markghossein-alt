'use client'
import { useReveal } from './useReveal'

const steps = [
  { num: '01', title: 'Clarity Session', desc: "We map your goals, timeline, and financial picture before a single property is viewed or listed." },
  { num: '02', title: 'Strategic Pricing', desc: "Your current home is priced to attract maximum buyers — not based on emotion, but on data." },
  { num: '03', title: 'Staging & Launch', desc: "Professional presentation to make buyers fall in love before they walk through the door." },
  { num: '04', title: 'Timeline Sync', desc: "We coordinate buy and sell timelines so you never pay double mortgages or live in limbo." },
  { num: '05', title: 'Dream Home', desc: "With proceeds in hand and a clear plan, we move decisively on your next chapter." },
]

export function Process() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="process" ref={ref} className="bg-white py-24 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="rise flex items-center gap-3 mb-16">
          <span className="text-[#ff4423] font-display font-700 text-xs tracking-[0.3em] uppercase">04 — Smooth Move System™</span>
          <div className="flex-1 h-px bg-[#e2ddd8]" />
        </div>

        {/* Header row */}
        <div className="rise grid md:grid-cols-[1fr_auto] gap-8 items-end mb-16">
          <h2 className="font-display font-800 text-[#0d0d0d] leading-[1] tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)' }}
          >
            The Five-Step<br /><span className="text-[#ff4423]">Framework.</span>
          </h2>
          <a href="#contact" className="inline-flex items-center gap-3 bg-[#ff4423] text-white font-display font-700 text-sm tracking-wide px-6 py-3 hover:bg-[#cc3519] transition-colors whitespace-nowrap">
            Get Free Guide
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Horizontal scrolling timeline */}
        <div className="rise h-scroll -mx-6 md:-mx-10 px-6 md:px-10">
          <div className="flex gap-px w-max min-w-full">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="group relative flex-shrink-0 w-72 md:w-80 border border-[#e2ddd8] bg-[#f5f2ed] p-8 hover:bg-[#ff4423] transition-colors duration-500 cursor-default"
                style={{ minHeight: '280px' }}
              >
                {/* Step number watermark */}
                <div
                  className="absolute right-4 bottom-4 font-display font-800 text-[#ece9e3] group-hover:text-[#cc3519] leading-none pointer-events-none transition-colors"
                  style={{ fontSize: '5rem' }}
                >
                  {step.num}
                </div>

                <div className="relative z-10">
                  {/* Connector line */}
                  {i < steps.length - 1 && (
                    <div className="absolute -right-px top-8 w-px h-6 bg-[#ff4423]" />
                  )}

                  <div className="w-8 h-8 border border-[#e2ddd8] group-hover:border-white/30 flex items-center justify-center mb-6 transition-colors">
                    <span className="text-[#ff4423] group-hover:text-white font-display font-700 text-xs transition-colors">
                      {step.num}
                    </span>
                  </div>
                  <h4 className="font-display font-700 text-[#0d0d0d] group-hover:text-white text-xl mb-3 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-[#888] group-hover:text-white/80 text-sm leading-relaxed transition-colors">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* End cap */}
            <div className="flex-shrink-0 w-72 md:w-80 border border-[#e2ddd8] bg-white p-8 flex flex-col justify-end" style={{ minHeight: '280px' }}>
              <p className="font-display font-800 text-[#ff4423] text-lg mb-3">Ready to start?</p>
              <a href="#contact" className="text-[#999] text-sm hover:text-[#0d0d0d] transition-colors underline-hover">
                Book your Clarity Session →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
