const items = [
  'Buyer Representation',
  'Seller Strategy',
  'Upsizing Consultation',
  'Home Valuation',
  'Investment Counsel',
  'Smooth Move System™',
  'Neighbourhood Alerts',
  'Strategic Pricing',
]

export function Marquee() {
  const all = [...items, ...items, ...items]
  return (
    <div className="border-y border-[#e2ddd8] py-3 overflow-hidden bg-[#f5f2ed]">
      <div className="flex whitespace-nowrap marquee-run">
        {all.map((item, i) => (
          <span key={i} className="flex items-center gap-4 px-4">
            <span className="font-display text-xs font-600 tracking-[0.2em] uppercase text-[#999]">{item}</span>
            <span className="text-[#ff4423] text-xs">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
