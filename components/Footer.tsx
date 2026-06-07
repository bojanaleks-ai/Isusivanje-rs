import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brand-950 border-t border-brand-800 text-brand-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex flex-col mb-4 leading-none">
              <span className="text-xl font-black text-white uppercase tracking-wider">Isušivanje</span>
              <span className="text-xl font-black text-cyan-400 uppercase tracking-wider">Vlage</span>
            </Link>
            <p className="text-sm text-brand-300 leading-relaxed max-w-xs mb-4">
              Profesionalno isušivanje vlage Trotek industrijskim mašinama.
              Sanacija šteta od vode i buđi širom Srbije.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="tel:+381623553456" className="flex items-center gap-2 hover:text-white transition-colors">
                <svg className="w-4 h-4 text-accent-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                062 355 345
              </a>
              <a href="mailto:isusivanje.rs@gmail.com" className="hover:text-white transition-colors">
                ✉️ isusivanje.rs@gmail.com
              </a>
              <span>📍 Srbija — dolazimo na teren</span>
            </div>
          </div>

          {/* Navigacija */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Navigacija</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/', label: 'Početna' },
                { href: '/o-nama', label: 'O nama' },
                { href: '/#trotek', label: 'Trotek oprema' },
                { href: '/#usluge', label: 'Naše usluge' },
                { href: '/blog', label: 'Blog' },
                { href: '/kontakt', label: 'Kontakt' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Usluge */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Usluge</h3>
            <ul className="space-y-2 text-sm">
              <li>Isušivanje zidova</li>
              <li>Isušivanje podova</li>
              <li>Sanacija nakon poplave</li>
              <li>Merenje vlažnosti</li>
              <li>Uklanjanje buđi</li>
              <li>Hitne intervencije 0–24</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-brand-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-400">
          <p>© {new Date().getFullYear()} Isušivanje.rs — Sva prava zadržana.</p>
          <p>Profesionalno isušivanje vlage širom Srbije</p>
        </div>
      </div>
    </footer>
  )
}
