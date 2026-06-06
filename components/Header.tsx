'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Početna' },
  { href: '/#usluge', label: 'Usluge' },
  { href: '/#kako-radimo', label: 'Kako radimo' },
  { href: '/blog', label: 'Blog' },
  { href: '/kontakt', label: 'Kontakt' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-brand-900/95 backdrop-blur-sm shadow-lg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">💧</span>
            <div className="leading-tight">
              <span className="block text-lg font-bold text-white">Isusivanje.rs</span>
              <span className="block text-xs text-brand-300 font-medium">Profesionalno isušivanje vlage</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'bg-brand-700 text-white'
                    : 'text-brand-200 hover:text-white hover:bg-brand-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="tel:+381601234567" className="ml-2 btn-primary text-sm px-4 py-2">
              Pozovite nas
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md text-brand-200 hover:text-white hover:bg-brand-800 transition-colors"
            aria-label="Otvori meni"
            aria-expanded={menuOpen}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
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
        <div className="md:hidden bg-brand-900 border-t border-brand-800">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'bg-brand-700 text-white'
                    : 'text-brand-200 hover:text-white hover:bg-brand-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="tel:+381601234567"
              onClick={() => setMenuOpen(false)}
              className="mt-2 btn-primary text-center text-sm"
            >
              Pozovite nas
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
