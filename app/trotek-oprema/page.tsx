import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Trotek oprema',
  description:
    'Profesionalna Trotec oprema kojom radimo: industrijski odvlaživači TTK 400, TTK 500 i TTK 570 ECO, turbo fan TFV 30 S, električni kalorifer TDS 20 i produžni kablovi.',
}

type Stavka = {
  naziv: string
  podatak: string
  opis: string
  img: string
}

const grupe: { naslov: string; opis: string; stavke: Stavka[] }[] = [
  {
    naslov: 'Industrijski odvlaživači',
    opis: 'Srce svakog isušivanja — izvlače vlagu iz vazduha, a time i iz zidova, podova i konstrukcije.',
    stavke: [
      {
        naziv: 'TTK 400',
        podatak: '80 L/dan',
        opis: 'Pouzdan kondenzacioni odvlaživač za stanove, kuće i manje poslovne prostore.',
        img: '/images/ttk400.jpg',
      },
      {
        naziv: 'TTK 500',
        podatak: '90 L/dan',
        opis: 'Snažan odvlaživač za veće površine i ozbiljnija oštećenja od vode.',
        img: '/images/ttk500.jpg',
      },
      {
        naziv: 'TTK 570 ECO',
        podatak: '127 L/dan',
        opis: 'Naš najjači odvlaživač — za poplave, novogradnju, hale i magacine.',
        img: '/images/ttk570.jpg',
      },
    ],
  },
  {
    naslov: 'Prateća oprema',
    opis: 'Ubrzava sušenje i omogućava da mašine rade bezbedno i bez prekida.',
    stavke: [
      {
        naziv: 'Turbo fan TFV 30 S',
        podatak: '2.250 m³/h',
        opis: 'Turbo ventilator koji usmerava jak protok vazduha na zidove i podove i ubrzava isparavanje vlage.',
        img: '/images/tfv30s.jpg',
      },
      {
        naziv: 'Električni kalorifer TDS 20',
        podatak: '3,3 kW',
        opis: 'Zagreva prostor tokom isušivanja, pa vlaga brže isparava — posebno važno zimi.',
        img: '/images/tds20.jpg',
      },
      {
        naziv: 'Produžni kabl',
        podatak: '20 m · 230 V',
        opis: 'Profesionalni gradilišni kabl za bezbedno napajanje mašina i tamo gde je utičnica daleko.',
        img: '/images/produzni-kabl.jpg',
      },
    ],
  },
]

export default function TrotekOpremaPage() {
  return (
    <>
      {/* Uvod */}
      <section className="bg-brand-900 border-b border-brand-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-5 py-3 mb-6">
            <span className="text-white font-black uppercase tracking-widest text-sm">Trotek</span>
            <span className="w-px h-4 bg-white/30" />
            <span className="text-brand-300 text-xs uppercase tracking-wider">Made in Germany</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight max-w-3xl">
            Profesionalna oprema kojom radimo
          </h1>
          <p className="mt-5 text-brand-300 text-lg max-w-2xl leading-relaxed">
            Na svaku intervenciju dolazimo sa industrijskom Trotec opremom — odvlaživačima,
            ventilatorima i grejalicama koji zajedno skraćuju vreme sušenja.
          </p>
        </div>
      </section>

      {grupe.map((g, gi) => (
        <section
          key={g.naslov}
          className={`${gi % 2 === 0 ? 'bg-brand-900' : 'bg-brand-800 border-y border-brand-700'} py-16`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">{g.naslov}</h2>
            <p className="text-brand-300 mb-10 max-w-2xl">{g.opis}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {g.stavke.map((s) => (
                <div
                  key={s.naziv}
                  className="rounded-xl overflow-hidden border border-brand-700 bg-brand-800 hover:border-cyan-500 transition-colors flex flex-col"
                >
                  <div className="relative aspect-square bg-white">
                    <Image
                      src={s.img}
                      alt={s.naziv}
                      fill
                      sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                      className="object-contain p-6"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-baseline justify-between gap-3 mb-2">
                      <h3 className="text-white font-bold text-lg">{s.naziv}</h3>
                      <span className="text-cyan-400 text-sm font-semibold whitespace-nowrap">{s.podatak}</span>
                    </div>
                    <p className="text-brand-300 text-sm leading-relaxed">{s.opis}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Poziv */}
      <section className="bg-yellow-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-black">Treba vam isušivanje?</h2>
            <p className="text-black/70 mt-1">Dolazimo sa kompletnom opremom — vi samo pozovite.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+38162355345"
              className="inline-flex items-center justify-center gap-2 bg-black text-white font-bold text-lg px-6 py-3 rounded-lg hover:bg-brand-800 transition-colors"
            >
              📞 062 355 345
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center border-2 border-black text-black font-bold px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-colors"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
