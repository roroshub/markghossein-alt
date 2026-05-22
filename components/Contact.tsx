'use client'
import { useEffect, useRef, useState } from 'react'

export function Contact() {
  const ref = useRef<HTMLElement>(null)
  const [sent, setSent] = useState(false)

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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  const inputClass =
    'w-full bg-[#fdfcfa] border border-[#ddd4c5] text-[#1e1e1e] placeholder-[#c8bba8] px-4 py-3.5 text-sm focus:outline-none focus:border-[#1b3d2e] transition-colors duration-200'

  return (
    <section id="contact" ref={ref} className="bg-[#f7f4ef] py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24">
          {/* Left */}
          <div>
            <div className="reveal flex items-center gap-4 mb-8">
              <span className="font-serif text-[#ddd4c5] text-8xl md:text-9xl leading-none select-none">07</span>
              <div>
                <div className="w-8 h-px bg-[#1b3d2e] mb-2" />
                <span className="text-[#1b3d2e] text-xs font-semibold tracking-[0.2em] uppercase">Get In Touch</span>
              </div>
            </div>
            <h2 className="reveal font-serif text-4xl md:text-5xl text-[#141414] leading-[1.1] mb-6">
              Ready to Make<br />
              <em className="text-[#1b3d2e]">Your Move?</em>
            </h2>
            <p className="reveal text-[#5a5a5a] text-lg leading-relaxed mb-10">
              Whether you're ready to buy, thinking about selling, or just want to understand what your home is worth — let's have a real conversation. No pressure, no pitch.
            </p>

            <div className="reveal space-y-4 mb-10">
              <a href="mailto:mark.ghossein@c21.ca" className="flex items-center gap-4 group">
                <div className="w-10 h-10 border border-[#ddd4c5] flex items-center justify-center text-[#1b3d2e] flex-shrink-0 group-hover:bg-[#1b3d2e] group-hover:text-white transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <span className="text-[#5a5a5a] group-hover:text-[#1b3d2e] transition-colors text-sm">mark.ghossein@c21.ca</span>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-[#ddd4c5] flex items-center justify-center text-[#1b3d2e] flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <span className="text-[#5a5a5a] text-sm">Ottawa, Ontario, Canada</span>
              </div>
            </div>

            {/* Social */}
            <div className="reveal flex gap-3">
              {[
                { label: 'IG', href: '#' },
                { label: 'FB', href: '#' },
                { label: 'LI', href: '#' },
                { label: 'YT', href: '#' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 border border-[#ddd4c5] flex items-center justify-center text-[#9c8b7a] text-xs font-semibold hover:bg-[#1b3d2e] hover:text-white hover:border-[#1b3d2e] transition-colors duration-200"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal">
            {sent ? (
              <div className="bg-[#1b3d2e] p-12 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <div className="w-14 h-14 border border-[#95d5b2] flex items-center justify-center text-[#95d5b2] text-2xl mb-6">✓</div>
                <h3 className="font-serif text-2xl text-white mb-3">Message Received!</h3>
                <p className="text-white/60">Mark will be in touch within 24 hours. Talk soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#fdfcfa] border border-[#ede7dc] p-8 xl:p-10 space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#5a5a5a] tracking-wide uppercase mb-2">First Name</label>
                    <input type="text" name="fname" placeholder="Jane" required className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#5a5a5a] tracking-wide uppercase mb-2">Last Name</label>
                    <input type="text" name="lname" placeholder="Doe" required className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5a5a5a] tracking-wide uppercase mb-2">Email Address</label>
                  <input type="email" name="email" placeholder="jane@example.com" required className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5a5a5a] tracking-wide uppercase mb-2">Phone Number</label>
                  <input type="tel" name="phone" placeholder="+1 (613) 000-0000" className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5a5a5a] tracking-wide uppercase mb-2">I'm interested in…</label>
                  <select name="interest" className={inputClass}>
                    <option value="">Select one</option>
                    <option>Buying a Home</option>
                    <option>Selling My Home</option>
                    <option>Upsizing / Smooth Move</option>
                    <option>Home Valuation</option>
                    <option>Investment Property</option>
                    <option>Just Exploring</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5a5a5a] tracking-wide uppercase mb-2">Message</label>
                  <textarea name="message" rows={4} placeholder="Tell me a bit about what you're looking for…" className={`${inputClass} resize-none`} />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1b3d2e] text-white py-4 text-sm font-semibold tracking-wide hover:bg-[#245040] transition-colors duration-200"
                >
                  Send Message
                </button>
                <p className="text-[#9c8b7a] text-xs text-center leading-relaxed">
                  By submitting, you agree to be contacted by Mark Ghossein Real Estate Advisors. Your information is never shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
