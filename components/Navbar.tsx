'use client'
import { useState, useEffect } from 'react'

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#listings', label: 'Work' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      {/* Minimal top bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-14 transition-all duration-300 ${scrolled ? 'bg-[#080808]/90 backdrop-blur border-b border-[#2a2a2a]' : ''}`}>
        <a href="#hero" className="font-display font-800 text-sm tracking-[0.15em] uppercase text-white">
          MG<span className="text-[#ff4423]">.</span>
        </a>
        <button
          aria-label="Menu"
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 text-[#888] hover:text-white transition-colors text-sm tracking-widest uppercase font-display"
        >
          Menu
          <span className="flex flex-col gap-1">
            <span className="block w-4 h-px bg-current" />
            <span className="block w-3 h-px bg-current" />
          </span>
        </button>
      </nav>

      {/* Full-screen overlay menu */}
      <div
        className={`fixed inset-0 z-[60] bg-[#080808] flex flex-col transition-all duration-700 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Close */}
        <div className="flex items-center justify-between px-6 md:px-10 h-14 border-b border-[#2a2a2a]">
          <a href="#hero" onClick={() => setOpen(false)} className="font-display font-800 text-sm tracking-[0.15em] uppercase">
            MG<span className="text-[#ff4423]">.</span>
          </a>
          <button
            onClick={() => setOpen(false)}
            className="text-[#888] hover:text-white transition-colors text-sm tracking-widest uppercase font-display flex items-center gap-2"
          >
            Close
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-16">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between border-b border-[#1a1a1a] py-6 md:py-8 overflow-hidden"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="font-display font-800 text-4xl md:text-6xl lg:text-7xl text-white group-hover:text-[#ff4423] transition-colors duration-300 leading-none">
                {item.label}
              </span>
              <svg
                className="text-[#333] group-hover:text-[#ff4423] transition-colors duration-300"
                width="32" height="32" viewBox="0 0 24 24" fill="none"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          ))}
        </div>

        {/* Footer strip */}
        <div className="px-6 md:px-16 pb-8 flex items-center gap-6 text-[#444] text-xs tracking-wider uppercase">
          <span>Century 21</span>
          <span className="w-4 h-px bg-[#333]" />
          <span>Ottawa, Ontario</span>
          <span className="w-4 h-px bg-[#333]" />
          <a href="mailto:mark.ghossein@c21.ca" className="hover:text-white transition-colors">
            mark.ghossein@c21.ca
          </a>
        </div>
      </div>
    </>
  )
}
