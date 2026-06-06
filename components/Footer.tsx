import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">💧</span>
              <span className="text-xl font-bold text-white">Isusivanje.rs</span>
            </Link>
            <p className="text-sm text-brand-300 leading-relaxed max-w-xs">
              Profesionalno isušivanje vlage i sanacija šteta od vode u Srbiji.
              Brza reakcija, moderna oprema, iskusni stručnjaci.
            </p>
            <div className="mt-4 flex flex-col gap-1 text-sm">
              <a href="tel:+381601234567" className="hover:text-white transition-colors">📞 +381 60 123 4567</a>
              <a href="mailto:info@isusivanje.rs" className="hover:text-white transition-colors">✉️ info@isusivanje.rs</a>
              <span>📍 Srbija — dolazimo na teren</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Navigacija</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/', label: 'Početna' },
                { href: '/#usluge', label: 'Usluge' },
                { href: '/#kako-radimo', label: 'Kako radimo' },
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
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Usluge</h3>
            <ul className="space-y-2 text-sm text-brand-300">
              <li>Isušivanje nakon poplave</li>
              <li>Uklanjanje vlage iz zidova</li>
              <li>Sanacija buđi</li>
              <li>Merenje vlažnosti</li>
              <li>Hitne intervencije 0–24</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-brand-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-400">
          <p>© {new Date().getFullYear()} Isusivanje.rs — Sva prava zadržana.</p>
          <p>Profesionalno isušivanje vlage širom Srbije</p>
        </div>
      </div>
    </footer>
  )
}
