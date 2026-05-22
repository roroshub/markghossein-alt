'use client'
import { useEffect, useRef } from 'react'

const steps = [
  {
    num: '01',
    title: 'Clarity Session',
    desc: 'We map your goals, timeline, and financial picture before a single property is viewed or listed.',
  },
  {
    num: '02',
    title: 'Strategic Pricing',
    desc: 'Your current home is priced to attract maximum buyers — not based on emotion, but on data.',
  },
  {
    num: '03',
    title: 'Staging & Launch',
    desc: 'Professional presentation to make buyers fall in love before they walk through the door.',
  },
  {
    num: '04',
    title: 'Timeline Sync',
    desc: 'We coordinate buy and sell timelines so you never pay double mortgages or live in limbo.',
  },
  {
    num: '05',
    title: 'Dream Home Secured',
    desc: 'With proceeds in hand and a clear plan, we move decisively on your next chapter.',
  },
]

export function Process() {
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
    <section id="process" ref={ref} className="bg-[#1b3d2e] py-24 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24">
          {/* Left */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="reveal flex items-center gap-4 mb-8">
              <span className="font-serif text-[#245040] text-8xl md:text-9xl leading-none select-none">04</span>
              <div>
                <div className="w-8 h-px bg-[#95d5b2] mb-2" />
                <span className="text-[#95d5b2] text-xs font-semibold tracking-[0.2em] uppercase">Signature Program</span>
              </div>
            </div>
            <h2 className="reveal font-serif text-4xl md:text-5xl text-white leading-[1.1] mb-6">
              The Smooth Move<br />
              <em className="text-[#95d5b2]">System™</em>
            </h2>
            <p className="reveal text-white/60 text-lg leading-relaxed mb-8">
              Selling your current home and upsizing to your dream home at the same time is one of the most stressful things you can do in real estate — unless you have a proven framework.
            </p>
            <a href="#contact" className="reveal inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 text-sm font-semibold hover:bg-white hover:text-[#1b3d2e] transition-colors duration-300">
              Get the Free Guide
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Right — steps */}
          <div className="space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="reveal border-b border-white/10 last:border-0 group"
              >
                <div className="flex items-start gap-6 py-8 hover:pl-2 transition-all duration-300">
                  <span className="font-serif text-[#245040] text-4xl leading-none flex-shrink-0 group-hover:text-[#95d5b2] transition-colors">
                    {step.num}
                  </span>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">{step.title}</h4>
                    <p className="text-white/55 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
