import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'O nama',
  description:
    'Preko 12 godina iskustva, više od 35 Trotec industrijskih mašina i preko 1300 intervencija širom Srbije. Upoznajte tim koji rešava problem vlage.',
}

const TELEFON_PRIKAZ = '062 355 345'
const TELEFON_HREF = 'tel:+381623553456'

const brojevi = [
  { broj: '12+', opis: 'godina iskustva' },
  { broj: '1300+', opis: 'uspešnih intervencija' },
  { broj: '35+', opis: 'Trotec industrijskih mašina' },
  { broj: '0–24h', opis: 'hitni izlazak na teren' },
]

const koraci = [
  {
    naslov: 'Poziv i dogovor',
    opis: 'Opišete problem telefonom, a mi vam odmah kažemo šta je verovatan uzrok i dogovaramo izlazak.',
  },
  {
    naslov: 'Merenje vlage',
    opis: 'Dolazimo na lice mesta i profesionalnim instrumentima merimo vlagu u zidovima i podovima.',
  },
  {
    naslov: 'Isušivanje',
    opis: 'Postavljamo Trotec odvlaživače koji rade 24h bez prekida i redovno pratimo napredak sušenja.',
  },
]

const zastoMi = [
  {
    icon: '⚙️',
    naslov: 'Profesionalna nemačka oprema',
    opis: 'Radimo isključivo sa industrijskom opremom namenjenom za teške uslove i dug rad.',
  },
  {
    icon: '🧱',
    naslov: 'Bez građevinskih radova',
    opis: 'Vlagu izvlačimo iz zidova i podova bez štemovanja, rušenja i nepotrebnih troškova.',
  },
  {
    icon: '⚡',
    naslov: 'Brza reakcija',
    opis: 'Kod poplava i pucanja cevi svaki sat je bitan. Zato smo dostupni 0–24h, svakog dana.',
  },
]

export default function ONamaPage() {
  return (
    <>
      {/* Uvod */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center">
        <Image
          src="/images/usluga-gradjevina.jpg"
          alt="Objekat u izgradnji koji se isušuje"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />
        <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">O nama</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight max-w-3xl">
            Vlagu rešavamo brzo, bez štemovanja i bez nereda.
          </h1>
          <p className="mt-6 text-brand-200 text-lg max-w-2xl leading-relaxed">
            Već više od 12 godina isušujemo stanove, kuće, poslovne prostore i novogradnju širom
            Srbije — profesionalnom Trotec opremom i sa jednim ciljem: da vaš prostor ponovo bude
            suv, zdrav i upotrebljiv.
          </p>
        </div>
      </section>

      {/* Brojevi */}
      <section className="bg-brand-800 border-y border-brand-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {brojevi.map((b) => (
            <div key={b.opis}>
              <div className="text-4xl sm:text-5xl font-black text-cyan-400">{b.broj}</div>
              <div className="mt-2 text-brand-300 text-sm uppercase tracking-wider">{b.opis}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Naša priča */}
      <section className="bg-brand-900 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">Naša priča</p>
            <h2 className="text-3xl font-black text-white mb-6">Od jedne mašine do flote od preko 35</h2>
            <div className="space-y-4 text-brand-300 leading-relaxed">
              <p>
                Počeli smo sa idejom da problem vlage treba rešiti brzo i stručno, bez skupih
                građevinskih radova. Svaka nova intervencija donosila je novo iskustvo — i novu
                mašinu u našem parku.
              </p>
              <p>
                Danas raspolažemo sa više od 35 profesionalnih Trotec industrijskih odvlaživača i
                iza nas je preko 1300 uspešno završenih intervencija: od poplavljenih podruma i
                stanova posle pucanja cevi, do hala i novogradnje kojima treba brzo sušenje estriha.
              </p>
              <p>
                Ono što se nije promenilo je način na koji radimo: dolazimo kad smo dogovorili.
              </p>
            </div>
          </div>
          <div className="relative h-72 sm:h-96 rounded-xl overflow-hidden bg-white">
            <Image
              src="/images/ttk570.jpg"
              alt="Trotec TTK 570 ECO industrijski odvlaživač"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain p-8"
            />
          </div>
        </div>
      </section>

      {/* Kako radimo */}
      <section className="bg-brand-800 py-16 sm:py-20 border-y border-brand-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">Kako radimo</p>
          <h2 className="text-3xl font-black text-white mb-10">Tri koraka do suvog prostora</h2>
          <ol className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {koraci.map((k, i) => (
              <li key={k.naslov} className="relative rounded-xl bg-brand-900 border border-brand-700 p-6">
                <div className="w-10 h-10 rounded-full bg-cyan-400 text-black font-black flex items-center justify-center mb-4">
                  {i + 1}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{k.naslov}</h3>
                <p className="text-brand-300 text-sm leading-relaxed">{k.opis}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Zašto mi */}
      <section className="bg-brand-900 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">Zašto baš mi</p>
          <h2 className="text-3xl font-black text-white mb-10">Na šta možete da računate</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {zastoMi.map((z) => (
              <div key={z.naslov} className="rounded-xl border border-brand-700 bg-brand-800 p-6 hover:border-cyan-500 transition-colors">
                <div className="text-3xl mb-4" aria-hidden>{z.icon}</div>
                <h3 className="text-white font-bold mb-2">{z.naslov}</h3>
                <p className="text-brand-300 text-sm leading-relaxed">{z.opis}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Poziv */}
      <section className="bg-yellow-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-black">Imate problem sa vlagom?</h2>
            <p className="text-black/70 mt-1">Pozovite nas — dolazimo i merimo, pa se dogovaramo.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={TELEFON_HREF}
              className="inline-flex items-center justify-center gap-2 bg-black text-white font-bold text-lg px-6 py-3 rounded-lg hover:bg-brand-800 transition-colors"
            >
              📞 {TELEFON_PRIKAZ}
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center border-2 border-black text-black font-bold px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-colors"
            >
              Zakažite izlazak
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
