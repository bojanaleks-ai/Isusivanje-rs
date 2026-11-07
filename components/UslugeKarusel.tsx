'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'

export type Usluga = {
  title: string
  desc: string
  img: string
  icon: string
  /** 'contain' za slike proizvoda (mašine) koje ne smeju da se seku */
  fit?: 'cover' | 'contain'
}

const AUTOPLAY_MS = 4500
const DRAG_PRAG = 50 // px potrebno da prevlačenje promeni karticu

export default function UslugeKarusel({ usluge }: { usluge: Usluga[] }) {
  const n = usluge.length
  const [aktivna, setAktivna] = useState(0)
  const [dragDx, setDragDx] = useState(0)
  const [vucem, setVucem] = useState(false)
  const [pauza, setPauza] = useState(false)
  const startX = useRef<number | null>(null)
  const dxRef = useRef(0)
  const pomerio = useRef(false)
  const wheelLock = useRef(false)

  const idi = useCallback((korak: number) => setAktivna((a) => (((a + korak) % n) + n) % n), [n])

  // Automatsko okretanje, pauza dok je miš iznad ili dok se vuče
  useEffect(() => {
    if (pauza || vucem) return
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => idi(1), AUTOPLAY_MS)
    return () => clearInterval(t)
  }, [pauza, vucem, idi])

  // Pomeraj kartice u odnosu na aktivnu, u krugu: od -floor(n/2) do +floor(n/2)
  const pomeraj = (i: number) => {
    let d = (i - aktivna + n) % n
    if (d > n / 2) d -= n
    return d
  }

  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX
    dxRef.current = 0
    pomerio.current = false
    setVucem(true)
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (startX.current === null) return
    const dx = e.clientX - startX.current
    if (Math.abs(dx) > 5) pomerio.current = true
    dxRef.current = dx
    setDragDx(dx)
  }
  const zavrsi = (e?: React.PointerEvent) => {
    if (startX.current === null) return
    const dx = e ? e.clientX - startX.current : dxRef.current
    if (Math.abs(dx) > 5) pomerio.current = true
    if (dx <= -DRAG_PRAG) idi(1)
    else if (dx >= DRAG_PRAG) idi(-1)
    startX.current = null
    dxRef.current = 0
    setDragDx(0)
    setVucem(false)
  }

  // Točkić / trackpad: horizontalno ili vertikalno skrolovanje sa Shift
  const onWheel = (e: React.WheelEvent) => {
    const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.shiftKey ? e.deltaY : 0
    if (Math.abs(d) < 20 || wheelLock.current) return
    wheelLock.current = true
    idi(d > 0 ? 1 : -1)
    setTimeout(() => (wheelLock.current = false), 450)
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setPauza(true)}
      onMouseLeave={() => {
        setPauza(false)
        zavrsi()
      }}
    >
      <div
        className={`relative h-[430px] sm:h-[380px] overflow-hidden select-none touch-pan-y ${vucem ? 'cursor-grabbing' : 'cursor-grab'}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={zavrsi}
        onPointerCancel={zavrsi}
        onWheel={onWheel}
        role="region"
        aria-roledescription="karusel"
        aria-label="Naše usluge"
      >
        {usluge.map((u, i) => {
          const d = pomeraj(i)
          const vidljiva = Math.abs(d) <= 1
          const centar = d === 0
          return (
            <div
              key={u.title}
              aria-hidden={!centar}
              onClick={() => {
                if (!pomerio.current && d !== 0) idi(d)
              }}
              className="absolute top-0 left-1/2 h-full w-[66%] sm:w-[50%] lg:w-[46%]"
              style={{
                transform: `translateX(calc(-50% + ${d} * (100% + 24px) + ${dragDx}px)) scale(${centar ? 1 : 0.9})`,
                opacity: vidljiva ? (centar ? 1 : 0.45) : 0,
                zIndex: centar ? 2 : 1,
                transition: vucem ? 'none' : 'transform 600ms cubic-bezier(.22,.8,.3,1), opacity 600ms',
                pointerEvents: vidljiva ? 'auto' : 'none',
              }}
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
          onClick={() => idi(-1)}
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
              onClick={() => setAktivna(i)}
              aria-label={u.title}
              aria-current={i === aktivna}
              className={`h-2 rounded-full transition-all duration-300 ${i === aktivna ? 'w-6 bg-cyan-400' : 'w-2 bg-brand-600 hover:bg-brand-400'}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => idi(1)}
          aria-label="Sledeća usluga"
          className="w-10 h-10 rounded-full border border-brand-600 text-white hover:border-cyan-400 hover:text-cyan-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
        >
          ›
        </button>
      </div>
    </div>
  )
}
