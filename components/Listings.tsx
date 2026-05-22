'use client'
import { useReveal } from './useReveal'

const listings = [
  {
    address: '42 Oakridge Crescent',
    area: 'Ottawa, Ontario',
    price: '$1,450,000',
    beds: 4, baths: 3, sqft: '2,800',
    status: 'For Sale',
    tag: 'Active',
    bg: '#181818',
  },
  {
    address: '18 Lakeshore Blvd W',
    area: 'Kanata, Ontario',
    price: '$2,195,000',
    beds: 5, baths: 4, sqft: '3,600',
    status: 'New Listing',
    tag: 'Featured',
    bg: '#ff4423',
    dark: true,
  },
  {
    address: '7 Birchwood Lane',
    area: 'Barrhaven, Ontario',
    price: '$989,000',
    beds: 3, baths: 2, sqft: '1,950',
    status: 'Sold',
    tag: 'Sold',
    bg: '#181818',
  },
]

export function Listings() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="listings" ref={ref} className="bg-[#0d0d0d] py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="rise flex items-center gap-3 mb-16">
          <span className="text-[#ff4423] font-display font-700 text-xs tracking-[0.3em] uppercase">03 — Properties</span>
          <div className="flex-1 h-px bg-[#2a2a2a]" />
        </div>

        <div className="rise flex items-end justify-between mb-12">
          <h2 className="font-display font-800 text-white leading-[1] tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)' }}
          >
            Featured<br /><span className="text-[#ff4423]">Listings.</span>
          </h2>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 text-[#555] hover:text-white font-display text-sm tracking-wider uppercase transition-colors underline-hover">
            All listings
          </a>
        </div>

        {/* Listing table layout */}
        <div className="rise border-t border-[#2a2a2a]">
          {listings.map((l, i) => (
            <a
              key={l.address}
              href="#contact"
              className="group flex items-center gap-4 md:gap-8 border-b border-[#2a2a2a] py-6 md:py-8 hover:pl-2 transition-all duration-300"
            >
              {/* Status dot */}
              <div className={`w-2 h-2 rounded-full flex-shrink-0 ${l.tag === 'Sold' ? 'bg-[#444]' : l.tag === 'Featured' ? 'bg-[#ff4423]' : 'bg-[#2a8a4f]'}`} />

              {/* Address */}
              <div className="flex-1 min-w-0">
                <div className="font-display font-700 text-white text-lg md:text-2xl group-hover:text-[#ff4423] transition-colors truncate">
                  {l.address}
                </div>
                <div className="text-[#444] text-xs tracking-wider uppercase mt-1">{l.area}</div>
              </div>

              {/* Specs */}
              <div className="hidden md:flex items-center gap-6 text-[#555] text-sm">
                <span>{l.beds} Bed</span>
                <span>{l.baths} Bath</span>
                <span>{l.sqft} sqft</span>
              </div>

              {/* Status badge */}
              <span className={`flex-shrink-0 text-xs font-display font-700 tracking-widest uppercase px-3 py-1.5 ${
                l.tag === 'Sold' ? 'text-[#444] border border-[#2a2a2a]' :
                l.tag === 'Featured' ? 'bg-[#ff4423] text-white' :
                'text-[#2a8a4f] border border-[#2a4a35]'
              }`}>
                {l.status}
              </span>

              {/* Price */}
              <div className="flex-shrink-0 font-display font-800 text-white text-lg md:text-2xl">
                {l.price}
              </div>

              {/* Arrow */}
              <svg className="flex-shrink-0 text-[#333] group-hover:text-[#ff4423] transition-colors" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          ))}
        </div>

        <div className="rise mt-10 flex items-center justify-between">
          <p className="text-[#444] text-sm">Looking for something specific?</p>
          <a href="#contact" className="inline-flex items-center gap-3 bg-[#111] border border-[#2a2a2a] text-white font-display font-700 text-sm tracking-wide px-6 py-3 hover:border-[#ff4423] hover:text-[#ff4423] transition-colors duration-200">
            Tell me what you need
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
