'use client'
import { useEffect, useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#listings', label: 'Listings' },
  { href: '#process', label: 'Process' },
  { href: '#testimonials', label: 'Reviews' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#f7f4ef]/95 backdrop-blur-sm border-b border-[#ddd4c5]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-[#1b3d2e] flex items-center justify-center">
              <span className="text-white font-serif text-sm tracking-wide">MG</span>
            </div>
            <div className="leading-tight">
              <div className="text-[#1e1e1e] font-semibold text-sm tracking-wide">Mark Ghossein</div>
              <div className="text-[#9c8b7a] text-xs tracking-widest uppercase">Real Estate Advisors</div>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[#5a5a5a] hover:text-[#1b3d2e] text-sm tracking-wide transition-colors duration-200"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-[#1b3d2e] text-white text-sm tracking-wide px-5 py-2.5 hover:bg-[#245040] transition-colors duration-200"
          >
            Let's Talk
          </a>

          {/* Burger */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5"
          >
            <span className={`block h-px bg-[#1e1e1e] transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-px bg-[#1e1e1e] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-px bg-[#1e1e1e] transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#f7f4ef] flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {links.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-serif text-3xl text-[#1e1e1e] py-4 hover:text-[#1b3d2e] transition-colors"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-6 bg-[#1b3d2e] text-white px-8 py-3 font-medium tracking-wide"
        >
          Let's Talk
        </a>
      </div>
    </>
  )
}
