'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

type NavLink = { href: string; label: string }
type NavItem = NavLink | { label: string; children: NavLink[] }

// Oprema: 4 stavke spojene u jedan padajući meni
const opremaLinks: NavLink[] = [
  { href: '/trotek-oprema', label: 'Isušivači vlage' },
  { href: '/termalne-kamere', label: 'Termalne kamere' },
  { href: '/ozonizator', label: 'Ozonizator' },
  { href: '/usisivaci-za-vodu', label: 'Usisivači za vodu' },
]

const navItems: NavItem[] = [
  { href: '/#usluge', label: 'Usluge' },
  { label: 'Oprema', children: opremaLinks },
  { href: '/galerija', label: 'Galerija' },
  { href: '/blog', label: 'Blog' },
  { href: '/o-nama', label: 'O nama' },
]

const PhoneIcon = () => (
  <svg className="w-4 h-4 text-accent-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
)

const Chevron = ({ open }: { open: boolean }) => (
  <svg
    className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`}
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={3}
    stroke="currentColor"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
)

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [opremaOpen, setOpremaOpen] = useState(false)
  const pathname = usePathname()
  const [hash, setHash] = useState('')
  const dropdownRef = useRef<HTMLDivElement>(null)
  const hoverOpenedAt = useRef(0)

  useEffect(() => {
    const update = () => setHash(window.location.hash)
    update()
    window.addEventListener('hashchange', update)
    return () => window.removeEventListener('hashchange', update)
  }, [pathname])

  // Zatvori padajući meni na promenu stranice, klik van njega ili Esc
  useEffect(() => {
    setOpremaOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!opremaOpen) return
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setOpremaOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpremaOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [opremaOpen])

  // Da li je stavka menija trenutno otvorena (tada je plava)
  const isActive = (href: string) => {
    if (href.startsWith('/#')) return pathname === '/' && hash === href.slice(1)
    return pathname === href || pathname.startsWith(href + '/')
  }
  const opremaActive = opremaLinks.some((l) => isActive(l.href))

  const onNavClick = (href: string) => {
    setHash(href.startsWith('/#') ? href.slice(1) : '')
  }

  const linkClass = (active: boolean) =>
    `px-3 py-2 text-xs font-semibold uppercase whitespace-nowrap tracking-wide transition-colors ${
      active ? 'text-cyan-400' : 'text-brand-200 hover:text-white'
    }`

  return (
    <header className="sticky top-0 z-50 bg-brand-950 border-b border-brand-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo (vodi na početnu) */}
          <Link href="/" className="flex items-center gap-0 leading-none" aria-label="Početna">
            <div>
              <span className="block text-base font-black text-white uppercase tracking-wider">Isušivanje</span>
              <span className="block text-base font-black text-cyan-400 uppercase tracking-wider">Vlage</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              'children' in item ? (
                <div
                  key={item.label}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => {
                    hoverOpenedAt.current = Date.now()
                    setOpremaOpen(true)
                  }}
                  onMouseLeave={() => setOpremaOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => {
                      // klik odmah posle otvaranja mišem ne sme da zatvori meni
                      if (Date.now() - hoverOpenedAt.current < 600) return setOpremaOpen(true)
                      setOpremaOpen((o) => !o)
                    }}
                    aria-haspopup="true"
                    aria-expanded={opremaOpen}
                    className={`${linkClass(opremaActive)} flex items-center gap-1`}
                  >
                    {item.label}
                    <Chevron open={opremaOpen} />
                  </button>
                  {opremaOpen && (
                    <div className="absolute left-0 top-full pt-2">
                      <div className="min-w-[13rem] rounded-lg border border-brand-700 bg-brand-900 py-2 shadow-xl">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpremaOpen(false)}
                            className={`block px-4 py-2.5 text-sm font-semibold transition-colors ${
                              isActive(child.href)
                                ? 'text-cyan-400'
                                : 'text-brand-200 hover:bg-brand-800 hover:text-white'
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => onNavClick(item.href)}
                  className={linkClass(isActive(item.href))}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href="/kontakt"
              className="ml-2 px-4 py-2 text-xs font-bold uppercase tracking-wide whitespace-nowrap rounded-md bg-accent-500 text-black hover:bg-accent-400 transition-colors"
            >
              Kontakt
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            {/* Telefon */}
            <a
              href="tel:+38162355345"
              className="hidden md:flex items-center gap-2 whitespace-nowrap rounded-md border border-brand-600 px-3 py-2 text-sm font-semibold text-white hover:border-accent-400 hover:text-accent-400 transition-colors"
            >
              <PhoneIcon />
              062 355 345
            </a>

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
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-brand-800 border-t border-brand-700">
          <nav className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1">
            {[...navItems, { href: '/kontakt', label: 'Kontakt' }].map((item) =>
              'children' in item ? (
                <div key={item.label} className="py-1">
                  <div className="px-4 pt-2 pb-1 text-xs font-bold uppercase tracking-wider text-brand-400">
                    {item.label}
                  </div>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMenuOpen(false)}
                      className={`block pl-8 pr-4 py-2.5 text-sm font-semibold uppercase tracking-wider transition-colors ${
                        isActive(child.href) ? 'text-cyan-400' : 'text-brand-200 hover:text-white'
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setMenuOpen(false)
                    onNavClick(item.href)
                  }}
                  className={`px-4 py-3 text-sm font-semibold uppercase tracking-wider transition-colors ${
                    isActive(item.href) ? 'text-cyan-400' : 'text-brand-200 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="mt-3 pt-3 border-t border-brand-700 flex flex-col gap-3">
              <a href="tel:+38162355345" className="text-center font-semibold text-white py-2">
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
