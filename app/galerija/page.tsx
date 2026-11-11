import type { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import GalerijaMreza from '@/components/GalerijaMreza'

export const metadata: Metadata = {
  title: 'Galerija',
  description: 'Galerija slika: isušivanje vlage, Trotec isušivači i termalni snimci vlage.',
}

// Sve slike iz public/images/galerija se same prikazuju.
function ucitajSlike() {
  const dir = path.join(process.cwd(), 'public', 'images', 'galerija')
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort()
    .map((f) => `/images/galerija/${f}`)
}

export default function GalerijaPage() {
  const slike = ucitajSlike()

  return (
    <section className="bg-brand-900 py-12 min-h-[70vh]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-black text-white">Galerija</h1>
        <p className="text-brand-300 text-lg mt-2 mb-8">Slike sa terena</p>
        <GalerijaMreza slike={slike} />
      </div>
    </section>
  )
}
