'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export type Usluga = {
  title: string
  desc: string
  img: string
  icon: string
  /** 'contain' za slike proizvoda (mašine) koje ne smeju da se seku */
  fit?: 'cover' | 'contain'
}

const AUTOPLAY_MS = 4500
const MRTVA_ZONA = 0.15 // deo širine oko sredine u kome kartice stoje (0–1)
const MAX_BRZINA = 2.2 // kartica u sekundi kad je kursor na samoj ivici
const GAP_PX = 24

const mod = (a: number, n: number) => ((a % n) + n) % n

export default function UslugeKarusel({ usluge }: { usluge: Usluga[] }) {
  const n = usluge.length
  const [aktivna, setAktivna] = useState(0)

  const trakaRef = useRef<HTMLDivElement>(null)
  const karticeRef = useRef<(HTMLDivElement | null)[]>([])

  // Položaj karusela kao decimalni broj: 0 = prva kartica u sredini, 1.5 = između druge i treće...
  const poz = useRef(0)
  const cilj = useRef(0) // ceo broj ka kome se karusel smiruje kad ga miš ne vodi
  const brzina = useRef(0) // kartica u sekundi, zadaje je položaj kursora
  const iznad = useRef(false)
  const dodir = useRef<{ x: number; poz: number; pomerio: boolean } | null>(null)

  // Glavna petlja animacije: svaki frejm pomera karusel i postavlja svaku karticu
  useEffect(() => {
    let raf = 0
    let prosli = performance.now()

    const crtaj = () => {
      const korak = (karticeRef.current[0]?.offsetWidth ?? 0) + GAP_PX
      karticeRef.current.forEach((el, i) => {
        if (!el) return
        let d = mod(i - poz.current, n)
        if (d > n / 2) d -= n
        const a = Math.abs(d)
        const blizu = Math.min(a, 1)
        const scale = 1 - 0.1 * blizu
        const opacity = a <= 1 ? 1 - 0.55 * blizu : Math.max(0, 0.45 * (1 - (a - 1) / 0.6))
        el.style.transform = `translateX(calc(-50% + ${d * korak}px)) scale(${scale})`
        el.style.opacity = String(opacity)
        el.style.zIndex = String(a < 0.5 ? 2 : 1)
        el.style.pointerEvents = a < 1.5 ? 'auto' : 'none'
        el.dataset.centar = a < 0.5 ? '1' : '0'
      })
      const nova = mod(Math.round(poz.current), n)
      setAktivna((s) => (s === nova ? s : nova))
    }

    const petlja = (sad: number) => {
      const dt = Math.min((sad - prosli) / 1000, 0.25)
      prosli = sad
      if (dodir.current) {
        // prst vodi karusel direktno
      } else if (iznad.current && brzina.current !== 0) {
        poz.current += brzina.current * dt
        cilj.current = Math.round(poz.current)
      } else {
        poz.current += (cilj.current - poz.current) * Math.min(1, dt * 6)
        if (Math.abs(cilj.current - poz.current) < 0.0005) poz.current = cilj.current
      }
      crtaj()
      raf = requestAnimationFrame(petlja)
    }

    crtaj()
    raf = requestAnimationFrame(petlja)
    window.addEventListener('resize', crtaj)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', crtaj)
    }
  }, [n])

  // Automatsko okretanje kad miš nije iznad kartica
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => {
      if (!iznad.current && !dodir.current) cilj.current = Math.round(poz.current) + 1
    }, AUTOPLAY_MS)
    return () => clearInterval(t)
  }, [])

  const idiZa = (k: number) => {
    cilj.current = Math.round(poz.current) + k
  }
  const idiNa = (i: number) => {
    let d = mod(i - poz.current, n)
    if (d > n / 2) d -= n
    cilj.current = Math.round(poz.current + d)
  }

  // Kursor levo od sredine -> kartice idu ulevo; desno -> udesno. Što dalje od sredine, to brže.
  const onMouseMove = (e: React.MouseEvent) => {
    const r = trakaRef.current?.getBoundingClientRect()
    if (!r) return
    iznad.current = true // i kad se strana učita sa mišem već iznad kartica
    const x = ((e.clientX - r.left) / r.width) * 2 - 1 // -1 levo, 0 sredina, 1 desno
    const a = Math.abs(x)
    if (a < MRTVA_ZONA) {
      brzina.current = 0
      return
    }
    const jacina = Math.min(1, (a - MRTVA_ZONA) / (1 - MRTVA_ZONA))
    brzina.current = -Math.sign(x) * MAX_BRZINA * jacina * jacina
  }

  // Na telefonu: prevlačenje prstom
  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === 'mouse') return
    dodir.current = { x: e.clientX, poz: poz.current, pomerio: false }
  }
  const onPointerMove = (e: React.PointerEvent) => {
    const t = dodir.current
    if (!t) return
    const korak = (karticeRef.current[0]?.offsetWidth ?? 1) + GAP_PX
    const dx = e.clientX - t.x
    if (Math.abs(dx) > 5) t.pomerio = true
    poz.current = t.poz - dx / korak
  }
  const onPointerUp = () => {
    if (!dodir.current) return
    cilj.current = Math.round(poz.current)
    setTimeout(() => (dodir.current = null), 0)
  }

  return (
    <div>
      <div
        ref={trakaRef}
        className="relative h-[430px] sm:h-[380px] overflow-hidden select-none touch-pan-y"
        onMouseEnter={() => (iznad.current = true)}
        onMouseMove={onMouseMove}
        onMouseLeave={() => {
          iznad.current = false
          brzina.current = 0
          cilj.current = Math.round(poz.current)
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        role="region"
        aria-roledescription="karusel"
        aria-label="Naše usluge"
      >
        {usluge.map((u, i) => {
          const centar = i === aktivna
          return (
            <div
              key={u.title}
              ref={(el) => {
                karticeRef.current[i] = el
              }}
              aria-hidden={!centar}
              onClick={() => {
                if (dodir.current?.pomerio) return
                if (!centar) idiNa(i)
              }}
              className="absolute top-0 left-1/2 h-full w-[66%] sm:w-[50%] lg:w-[46%] will-change-transform cursor-pointer"
              style={{ transform: 'translateX(-50%)', opacity: i === 0 ? 1 : 0 }}
            >
              <div
                className={`h-full flex flex-col rounded-xl overflow-hidden bg-brand-800 border transition-colors duration-300 ${
                  centar ? 'border-cyan-500' : 'border-brand-700'
                }`}
              >
                <div className={`relative h-44 sm:h-56 overflow-hidden flex-shrink-0 ${u.fit === 'contain' ? 'bg-white' : 'bg-brand-700'}`}>
                  <Image
                    src={u.img}
                    alt={u.title}
                    fill
                    draggable={false}
                    sizes="(min-width: 1024px) 560px, (min-width: 640px) 50vw, 66vw"
                    className={`pointer-events-none ${u.fit === 'contain' ? 'object-contain p-3' : 'object-cover'}`}
                  />
                  {u.fit !== 'contain' && <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />}
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-cyan-400 text-black text-xs font-bold uppercase px-2 py-1 rounded">{u.icon}</span>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-white text-base sm:text-lg font-bold mb-2">{u.title}</h3>
                  <p className="text-brand-300 text-sm leading-relaxed">{u.desc}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Kontrole */}
      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => idiZa(-1)}
          aria-label="Prethodna usluga"
          className="w-10 h-10 rounded-full border border-brand-600 text-white hover:border-cyan-400 hover:text-cyan-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
        >
          ‹
        </button>
        <div className="flex gap-2">
          {usluge.map((u, i) => (
            <button
              key={u.title}
              type="button"
              onClick={() => idiNa(i)}
              aria-label={u.title}
              aria-current={i === aktivna}
              className={`h-2 rounded-full transition-all duration-300 ${i === aktivna ? 'w-6 bg-cyan-400' : 'w-2 bg-brand-600 hover:bg-brand-400'}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => idiZa(1)}
          aria-label="Sledeća usluga"
          className="w-10 h-10 rounded-full border border-brand-600 text-white hover:border-cyan-400 hover:text-cyan-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
        >
          ›
        </button>
      </div>
    </div>
  )
}
