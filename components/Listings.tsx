'use client'
import { useEffect, useRef } from 'react'

const listings = [
  {
    address: '42 Oakridge Crescent',
    city: 'Ottawa, Ontario',
    price: '$1,450,000',
    beds: 4, baths: 3, sqft: '2,800',
    status: 'For Sale',
    statusColor: 'bg-[#1b3d2e] text-white',
    accent: '#1b3d2e',
  },
  {
    address: '18 Lakeshore Blvd West',
    city: 'Kanata, Ontario',
    price: '$2,195,000',
    beds: 5, baths: 4, sqft: '3,600',
    status: 'New',
    statusColor: 'bg-[#95d5b2] text-[#0d2318]',
    accent: '#245040',
    featured: true,
  },
  {
    address: '7 Birchwood Lane',
    city: 'Barrhaven, Ontario',
    price: '$989,000',
    beds: 3, baths: 2, sqft: '1,950',
    status: 'Sold',
    statusColor: 'bg-[#9c8b7a] text-white',
    accent: '#5c4e40',
  },
]

export function Listings() {
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
    <section id="listings" ref={ref} className="bg-[#fdfcfa] py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="reveal flex items-center gap-4 mb-5">
          <span className="font-serif text-[#ddd4c5] text-8xl md:text-9xl leading-none select-none">03</span>
          <div>
            <div className="w-8 h-px bg-[#1b3d2e] mb-2" />
            <span className="text-[#1b3d2e] text-xs font-semibold tracking-[0.2em] uppercase">Properties</span>
          </div>
        </div>

        <div className="flex items-end justify-between mb-12">
          <h2 className="reveal font-serif text-4xl md:text-5xl text-[#141414] leading-[1.1]">
            Featured<br /><em className="text-[#1b3d2e]">Listings</em>
          </h2>
          <a href="#contact" className="reveal hidden md:inline-flex items-center gap-2 text-sm font-semibold text-[#1b3d2e] border-b border-[#1b3d2e] pb-0.5 hover:opacity-70 transition-opacity">
            View all listings
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {listings.map((l) => (
            <div key={l.address} className={`reveal group ${l.featured ? 'md:-mt-6' : ''}`}>
              {/* Image area */}
              <div
                className="relative aspect-[4/3] mb-5 overflow-hidden flex items-end p-5"
                style={{ backgroundColor: l.accent }}
              >
                {/* Decorative lines */}
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                  }}
                />
                {/* Address overlay */}
                <div className="relative z-10 w-full">
                  <div className={`inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1.5 mb-3 ${l.statusColor}`}>
                    {l.status}
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <a href="#contact" className="bg-white text-[#1e1e1e] px-5 py-2.5 text-sm font-semibold">
                    View Details
                  </a>
                </div>
              </div>

              {/* Info */}
              <div>
                <div className="font-serif text-2xl text-[#1b3d2e] mb-1">{l.price}</div>
                <h3 className="text-[#1e1e1e] font-semibold mb-1">{l.address}</h3>
                <p className="text-[#9c8b7a] text-sm mb-3">{l.city}</p>
                <div className="flex items-center gap-3 text-sm text-[#5a5a5a]">
                  <span>{l.beds} Bed</span>
                  <span className="text-[#ddd4c5]">·</span>
                  <span>{l.baths} Bath</span>
                  <span className="text-[#ddd4c5]">·</span>
                  <span>{l.sqft} sqft</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal mt-14 text-center">
          <p className="text-[#5a5a5a] mb-4">Looking for something specific?</p>
          <a href="#contact" className="inline-flex items-center gap-3 bg-[#1b3d2e] text-white px-8 py-4 text-sm font-semibold hover:bg-[#245040] transition-colors">
            Tell Me What You Need
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
