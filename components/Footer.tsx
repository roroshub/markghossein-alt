const quickLinks = ['About Mark', 'Services', 'Listings', 'Smooth Move System', 'Client Stories', 'Contact']
const serviceLinks = ['Buyer Representation', 'Seller Representation', 'Upsizing', 'HomeWorth Valuation', 'Nosey Neighbour', 'Buyer Checklist']
const hrefs: Record<string, string> = {
  'About Mark': '#about', 'Services': '#services', 'Listings': '#listings',
  'Smooth Move System': '#process', 'Client Stories': '#testimonials', 'Contact': '#contact',
  'Buyer Representation': '#services', 'Seller Representation': '#services', 'Upsizing': '#process',
  'HomeWorth Valuation': '#tools', 'Nosey Neighbour': '#tools', 'Buyer Checklist': '#tools',
}

export function Footer() {
  return (
    <footer className="bg-[#0d2318] text-white/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 py-16 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 border border-white/20 flex items-center justify-center">
                <span className="font-serif text-white">MG</span>
              </div>
              <div>
                <div className="text-white font-semibold tracking-wide">Mark Ghossein</div>
                <div className="text-white/40 text-xs tracking-widest uppercase">Real Estate Advisors</div>
              </div>
            </div>
            <p className="font-serif text-white/50 italic text-lg mb-4">Make the right move.</p>
            <p className="text-sm mb-6">Affiliated with Century 21 · Ottawa, Ontario, Canada</p>
            <div className="flex gap-3">
              {['IG', 'FB', 'LI', 'YT'].map((s) => (
                <a key={s} href="#" aria-label={s}
                  className="w-8 h-8 border border-white/20 flex items-center justify-center text-white/40 text-xs hover:bg-white/10 hover:text-white transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-[0.2em] uppercase mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a href={hrefs[l]} className="text-sm hover:text-white transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-[0.2em] uppercase mb-5">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((l) => (
                <li key={l}>
                  <a href={hrefs[l]} className="text-sm hover:text-white transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 py-8 text-xs">
          <p>© 2026 Mark Ghossein Real Estate Advisors. All rights reserved.</p>
          <p>Not intended to solicit buyers or sellers currently under contract.</p>
        </div>
      </div>
    </footer>
  )
}
