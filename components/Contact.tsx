'use client'
import { useEffect, useRef, useState } from 'react'

const interests = [
  'Buying a Home',
  'Selling My Home',
  'Upsizing',
  'Investment',
  'Home Valuation',
  'Just Exploring',
]

export function Contact() {
  const ref = useRef<HTMLElement>(null)
  const [interest, setInterest] = useState<string | null>(null)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.querySelectorAll<HTMLElement>('.rise').forEach((el, i) => {
            setTimeout(() => el.classList.add('in'), i * 80)
          })
        }
      }),
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  const field = 'w-full bg-transparent border border-[#2a2a2a] text-white placeholder-[#333] px-4 py-3.5 text-sm focus:outline-none focus:border-[#ff4423] transition-colors font-body'

  return (
    <section id="contact" ref={ref} className="bg-[#0d0d0d] py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="rise flex items-center gap-3 mb-16">
          <span className="text-[#ff4423] font-display font-700 text-xs tracking-[0.3em] uppercase">07 — Let's Talk</span>
          <div className="flex-1 h-px bg-[#2a2a2a]" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24">
          {/* Left */}
          <div>
            <h2 className="rise font-display font-800 text-white leading-[1] tracking-tight mb-8"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)' }}
            >
              Ready to<br /><span className="text-[#ff4423]">Move?</span>
            </h2>
            <p className="rise text-[#555] text-base leading-relaxed mb-10 max-w-sm">
              No pressure, no pitch. Just an honest conversation about your real estate goals — and a plan to get you there.
            </p>

            <div className="rise space-y-4 mb-10">
              <a href="mailto:mark.ghossein@c21.ca" className="flex items-center gap-4 group">
                <div className="w-10 h-10 border border-[#2a2a2a] flex items-center justify-center text-[#333] group-hover:border-[#ff4423] group-hover:text-[#ff4423] transition-colors flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <span className="text-[#555] group-hover:text-white transition-colors text-sm underline-hover">
                  mark.ghossein@c21.ca
                </span>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-[#2a2a2a] flex items-center justify-center text-[#333] flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <span className="text-[#555] text-sm">Ottawa, Ontario, Canada</span>
              </div>
            </div>

            {/* Large tag — Century 21 */}
            <div className="rise border border-[#2a2a2a] inline-flex items-center gap-4 px-5 py-4">
              <div className="w-8 h-8 bg-[#ff4423] flex items-center justify-center font-display font-800 text-white text-xs">C21</div>
              <div>
                <div className="text-white text-sm font-display font-600">Century 21 Certified</div>
                <div className="text-[#444] text-xs">Ottawa, Ontario</div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="rise">
            {sent ? (
              <div className="border border-[#2a2a2a] bg-[#111] p-12 flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="w-14 h-14 border border-[#ff4423] flex items-center justify-center text-[#ff4423] text-2xl font-display font-800 mb-6">✓</div>
                <h3 className="font-display font-800 text-white text-2xl mb-3">Message Received.</h3>
                <p className="text-[#555] text-sm">Mark will be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Interest picker */}
                <div>
                  <label className="block text-[#444] text-xs tracking-[0.2em] uppercase mb-3 font-display font-600">
                    I'm interested in…
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {interests.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setInterest(item)}
                        className={`text-xs font-display font-600 tracking-wide py-2.5 px-3 border transition-colors duration-200 ${
                          interest === item
                            ? 'border-[#ff4423] bg-[#ff4423] text-white'
                            : 'border-[#2a2a2a] text-[#555] hover:border-[#ff4423] hover:text-white'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <input type="text" name="fname" placeholder="First Name" required className={field} />
                  <input type="text" name="lname" placeholder="Last Name" required className={field} />
                </div>
                <input type="email" name="email" placeholder="Email Address" required className={field} />
                <input type="tel" name="phone" placeholder="Phone Number" className={field} />
                <textarea name="message" rows={4} placeholder="What are you looking for?" className={`${field} resize-none`} />

                <button
                  type="submit"
                  className="w-full bg-[#ff4423] text-white font-display font-700 text-sm tracking-wide py-4 hover:bg-[#cc3519] transition-colors duration-200 flex items-center justify-center gap-3"
                >
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <p className="text-[#333] text-xs text-center leading-relaxed">
                  Your information is never shared. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
