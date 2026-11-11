'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

export default function GalerijaMreza({ slike }: { slike: string[] }) {
  const [otvorena, setOtvorena] = useState<number | null>(null)

  const zatvori = useCallback(() => setOtvorena(null), [])
  const pomeri = useCallback(
    (d: number) => setOtvorena((i) => (i === null ? i : (i + d + slike.length) % slike.length)),
    [slike.length],
  )

  useEffect(() => {
    if (otvorena === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') zatvori()
      if (e.key === 'ArrowRight') pomeri(1)
      if (e.key === 'ArrowLeft') pomeri(-1)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [otvorena, zatvori, pomeri])

  if (slike.length === 0) {
    return <p className="text-brand-300 text-lg">Slike uskoro.</p>
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {slike.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOtvorena(i)}
            className="group relative aspect-square overflow-hidden rounded-xl bg-brand-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label={`Otvori sliku ${i + 1}`}
          >
            <Image
              src={src}
              alt={`Isušivanje vlage — slika ${i + 1}`}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {otvorena !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={zatvori}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-5xl h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={slike[otvorena]}
              alt={`Isušivanje vlage — slika ${otvorena + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <button
            type="button"
            onClick={zatvori}
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl"
            aria-label="Zatvori"
          >
            ×
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); pomeri(-1) }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl"
            aria-label="Prethodna slika"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); pomeri(1) }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl"
            aria-label="Sledeća slika"
          >
            ›
          </button>
        </div>
      )}
    </>
  )
}
