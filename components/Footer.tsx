export function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Main footer row */}
        <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 py-14 border-b border-[#2a2a2a]">
          {/* Brand */}
          <div>
            <div className="font-display font-800 text-2xl text-white mb-1 tracking-tight">
              MG<span className="text-[#ff4423]">.</span>
            </div>
            <div className="text-[#333] text-xs tracking-widest uppercase mb-5">Mark Ghossein Real Estate Advisors</div>
            <p className="text-[#333] text-sm leading-relaxed max-w-xs mb-6">
              Ottawa's most strategic real estate advisor. Buying, selling, upsizing — done right.
            </p>
            <div className="flex gap-2">
              {['IG', 'FB', 'LI', 'YT'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 border border-[#1a1a1a] flex items-center justify-center text-[#333] text-xs font-display font-700 hover:border-[#ff4423] hover:text-[#ff4423] transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="text-[#ff4423] font-display font-700 text-xs tracking-[0.2em] uppercase mb-5">Navigate</div>
            <ul className="space-y-3">
              {['About', 'Services', 'Listings', 'Process', 'Reviews', 'Contact'].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-[#333] text-sm hover:text-white transition-colors underline-hover">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="text-[#ff4423] font-display font-700 text-xs tracking-[0.2em] uppercase mb-5">Services</div>
            <ul className="space-y-3">
              {['Buyer Rep', 'Seller Rep', 'Upsizing', 'Investment', 'HomeWorth', 'Nosey Neighbour'].map((l) => (
                <li key={l}>
                  <a href="#services" className="text-[#333] text-sm hover:text-white transition-colors underline-hover">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[#ff4423] font-display font-700 text-xs tracking-[0.2em] uppercase mb-5">Contact</div>
            <div className="space-y-3">
              <a href="mailto:mark.ghossein@c21.ca" className="block text-[#333] text-sm hover:text-white transition-colors underline-hover break-all">
                mark.ghossein@c21.ca
              </a>
              <p className="text-[#333] text-sm">Ottawa, Ontario<br />Canada</p>
              <div className="border border-[#1a1a1a] inline-flex items-center gap-2 px-3 py-2 mt-2">
                <span className="w-2 h-2 bg-[#ff4423] rounded-full" />
                <span className="text-[#333] text-xs">Century 21</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 py-6 text-[#2a2a2a] text-xs tracking-wider">
          <p>© 2026 Mark Ghossein Real Estate Advisors. All rights reserved.</p>
          <p>Not intended to solicit buyers or sellers currently under contract.</p>
        </div>
      </div>
    </footer>
  )
}
