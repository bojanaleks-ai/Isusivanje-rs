'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Početna' },
  { href: '/o-nama', label: 'O nama' },
  { href: '/#trotek', label: 'Trotek oprema' },
  { href: '/#usluge', label: 'Naše usluge' },
  { href: '/blog', label: 'Blog' },
  { href: '/kontakt', label: 'Kontakt' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-brand-950 border-b border-brand-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-0 leading-none">
            <div>
              <span className="block text-base font-black text-white uppercase tracking-wider">Isušivanje</span>
              <span className="block text-base font-black text-cyan-400 uppercase tracking-wider">Vlage</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              link.label === 'Kontakt' ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="ml-2 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-md bg-accent-500 text-black hover:bg-accent-400 transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                    pathname === link.href
                      ? 'text-accent-400'
                      : 'text-brand-200 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* Phone + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+381623553456"
              className="flex items-center gap-2 text-sm font-semibold text-white hover:text-accent-400 transition-colors"
            >
              <svg className="w-4 h-4 text-accent-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              062 355 345
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-md text-brand-200 hover:text-white transition-colors"
            aria-label="Otvori meni"
            aria-expanded={menuOpen}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-brand-800 border-t border-brand-700">
          <nav className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 text-sm font-semibold uppercase tracking-wider transition-colors ${
                  pathname === link.href
                    ? 'text-accent-400'
                    : 'text-brand-200 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-brand-700 flex flex-col gap-3">
              <a href="tel:+381623553456" className="text-center font-semibold text-white py-2">
                📞 062 355 345
              </a>
              <Link
                href="/kontakt"
                onClick={() => setMenuOpen(false)}
                className="btn-primary text-center text-sm"
              >
                Besplatna procena
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
