const items = [
  'Buyer Representation',
  'Seller Strategy',
  'Upsizing Consultation',
  'Home Valuation',
  'Investment Counsel',
  'Smooth Move System™',
  'Neighbourhood Alerts',
  'Strategic Pricing',
  'Ottawa Real Estate',
]

export function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div className="bg-[#1b3d2e] py-4 overflow-hidden">
      <div className="flex whitespace-nowrap marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="text-white/80 text-sm tracking-widest uppercase px-6">{item}</span>
            <span className="text-[#95d5b2] opacity-60">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
