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
  },
  {
    address: '18 Lakeshore Blvd W',
    area: 'Kanata, Ontario',
    price: '$2,195,000',
    beds: 5, baths: 4, sqft: '3,600',
    status: 'New Listing',
    tag: 'Featured',
  },
  {
    address: '7 Birchwood Lane',
    area: 'Barrhaven, Ontario',
    price: '$989,000',
    beds: 3, baths: 2, sqft: '1,950',
    status: 'Sold',
    tag: 'Sold',
  },
]

export function Listings() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="listings" ref={ref} className="bg-[#f5f2ed] py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="rise flex items-center gap-3 mb-16">
          <span className="text-[#1b4332] font-display font-700 text-xs tracking-[0.3em] uppercase">03 — Properties</span>
          <div className="flex-1 h-px bg-[#e2ddd8]" />
        </div>

        <div className="rise flex items-end justify-between mb-12">
          <h2 className="font-display font-800 text-[#0d0d0d] leading-[1.05] tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)' }}
          >
            Featured<br /><span className="text-[#1b4332]">Listings.</span>
          </h2>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 text-[#999] hover:text-[#0d0d0d] font-display text-sm tracking-wider uppercase transition-colors underline-hover">
            All listings
          </a>
        </div>

        <div className="rise border-t border-[#e2ddd8]">
          {listings.map((l) => (
            <a
              key={l.address}
              href="#contact"
              className="group flex items-center gap-4 md:gap-8 border-b border-[#e2ddd8] py-6 md:py-8 hover:pl-2 transition-all duration-300"
            >
              <div className={`w-2 h-2 rounded-full flex-shrink-0 ${l.tag === 'Sold' ? 'bg-[#ccc8c2]' : 'bg-[#1b4332]'}`} />

              <div className="flex-1 min-w-0">
                <div className="font-display font-700 text-[#0d0d0d] text-lg md:text-2xl group-hover:text-[#1b4332] transition-colors truncate">
                  {l.address}
                </div>
                <div className="text-[#999] text-xs tracking-wider uppercase mt-1">{l.area}</div>
              </div>

              <div className="hidden md:flex items-center gap-6 text-[#888] text-sm">
                <span>{l.beds} Bed</span>
                <span>{l.baths} Bath</span>
                <span>{l.sqft} sqft</span>
              </div>

              <span className={`flex-shrink-0 text-xs font-display font-700 tracking-widest uppercase px-3 py-1.5 ${
                l.tag === 'Sold' ? 'text-[#bbb] border border-[#d8d4ce]' :
                l.tag === 'Featured' ? 'bg-[#1b4332] text-white' :
                'text-[#1b4332] border border-[#b8d4c8]'
              }`}>
                {l.status}
              </span>

              <div className="flex-shrink-0 font-display font-800 text-[#0d0d0d] text-lg md:text-2xl">
                {l.price}
              </div>

              <svg className="flex-shrink-0 text-[#ccc8c2] group-hover:text-[#1b4332] transition-colors" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          ))}
        </div>

        <div className="rise mt-10 flex items-center justify-between">
          <p className="text-[#999] text-sm">Looking for something specific?</p>
          <a href="#contact" className="inline-flex items-center gap-3 bg-white border border-[#e2ddd8] text-[#0d0d0d] font-display font-700 text-sm tracking-wide px-6 py-3 hover:border-[#1b4332] hover:text-[#1b4332] transition-colors duration-200">
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
