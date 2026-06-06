import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Isusivanje.rs — Profesionalno isušivanje vlage u Srbiji',
  description:
    'Profesionalno isušivanje vlage, sanacija šteta od vode i buđi širom Srbije. Brza reakcija 0–24h, moderna oprema.',
}

const usluge = [
  {
    icon: '🌊',
    title: 'Isušivanje nakon poplave',
    description:
      'Brza i efikasna sanacija prostorija poplavljenih vodom. Industrijski odvlaživači i ventilatori za maksimalno brzo sušenje.',
    features: ['Dolazak u roku od 2h', 'Industrijska oprema', 'Potpuna sanacija'],
  },
  {
    icon: '🧱',
    title: 'Vlaga u zidovima i podovima',
    description:
      'Dijagnostika i uklanjanje vlage iz građevinskih konstrukcija. Sprečavamo pojavu plesni i dalju štetu.',
    features: ['Merenje vlažnosti', 'Termokamera', 'Trajno rešenje'],
  },
  {
    icon: '🦠',
    title: 'Sanacija buđi i plesni',
    description:
      'Profesionalno uklanjanje buđi i dezinfekcija prostora. Zaštita zdravlja vaše porodice i imovine.',
    features: ['Biocidni tretman', 'Dezinfekcija', 'Prevencija povratka'],
  },
]

const prednosti = [
  { icon: '⚡', title: 'Brza reakcija', desc: 'Dostupni 0–24h, 7 dana u nedelji. Dolazimo u roku od 2 sata.' },
  { icon: '🔬', title: 'Moderna oprema', desc: 'Koristimo profesionalnu industrijsku opremu za brzo i efikasno sušenje.' },
  { icon: '👷', title: 'Iskusni tim', desc: 'Više od 10 godina iskustva u isušivanju i sanaciji šteta od vode.' },
  { icon: '📋', title: 'Izveštaj i garancija', desc: 'Pisani izveštaj o stanju vlažnosti i garancija na obavljene radove.' },
  { icon: '💰', title: 'Fer cene', desc: 'Transparentno formiranje cena. Procena na licu mesta bez skrivenih troškova.' },
  { icon: '🇷🇸', title: 'Cela Srbija', desc: 'Ekipe raspoređene širom Srbije — brzo stižemo gde god ste.' },
]

const koraci = [
  {
    broj: '01',
    title: 'Pozovite nas',
    desc: 'Kontaktirajte nas telefonom ili putem formulara. Dostupni smo 24/7. Odmah procenjujemo hitnost situacije.',
  },
  {
    broj: '02',
    title: 'Dijagnostika i plan',
    desc: 'Dolazimo na teren, merimo vlažnost termokamerom i vlažnomerom, pravimo plan sanacije i dajemo procenu troškova.',
  },
  {
    broj: '03',
    title: 'Isušivanje i sanacija',
    desc: 'Postavljamo industrijsku opremu i radimo kontinuirano praćenje napretka sušenja. Isporučujemo pisani izveštaj.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-300 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-700/50 border border-brand-600/50 rounded-full px-4 py-1.5 text-sm text-brand-200 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Dostupni 0–24h — brza intervencija
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-brand-300">Isušivanje vlage</span>{' '}
              profesionalnim mašinama
            </h1>
            <p className="text-lg sm:text-xl text-brand-200 leading-relaxed mb-8 max-w-2xl">
              Poplava, curenje, kondenzacija — reagujemo brzo i efikasno. Industrijska oprema,
              iskusni tim, garancija na radove. Cela Srbija.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+381601234567" className="btn-primary text-base px-8 py-4">
                📞 Pozovite odmah
              </a>
              <Link href="#usluge" className="btn-outline border-brand-400 text-brand-200 hover:bg-brand-800 text-base px-8 py-4">
                Pogledajte usluge
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-brand-300">
              <span>✓ Dolazak u roku od 2h</span>
              <span>✓ Besplatna procena</span>
              <span>✓ Garancija na radove</span>
            </div>
          </div>
        </div>
      </section>

      {/* Usluge */}
      <section id="usluge" className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-heading mb-4">Naše usluge</h2>
            <p className="text-brand-600 text-lg max-w-2xl mx-auto">
              Pružamo kompletan spektar usluga isušivanja i sanacije šteta od vode
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {usluge.map((u) => (
              <div
                key={u.title}
                className="group rounded-2xl border border-brand-100 bg-white p-8 shadow-sm hover:shadow-lg hover:border-brand-300 transition-all duration-300"
              >
                <div className="mb-5 text-4xl">{u.icon}</div>
                <h3 className="text-xl font-bold text-brand-900 mb-3">{u.title}</h3>
                <p className="text-brand-600 leading-relaxed mb-5">{u.description}</p>
                <ul className="space-y-2">
                  {u.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-brand-700">
                      <span className="w-4 h-4 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zašto mi */}
      <section className="py-20 bg-brand-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-heading mb-4">Zašto izabrati nas?</h2>
            <p className="text-brand-600 text-lg max-w-2xl mx-auto">
              Više od decenije iskustva u zaštiti domova i poslovnih prostora od vlage
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {prednosti.map((p) => (
              <div key={p.title} className="flex gap-4 bg-white rounded-xl p-6 shadow-sm border border-brand-100">
                <span className="text-3xl flex-shrink-0">{p.icon}</span>
                <div>
                  <h3 className="font-bold text-brand-900 mb-1">{p.title}</h3>
                  <p className="text-brand-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kako radimo */}
      <section id="kako-radimo" className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-heading mb-4">Kako radimo</h2>
            <p className="text-brand-600 text-lg max-w-2xl mx-auto">
              Jednostavan i transparentan proces od poziva do završene sanacije
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[calc(33.33%+1rem)] right-[calc(33.33%+1rem)] h-0.5 bg-brand-200" />
            {koraci.map((k, i) => (
              <div key={k.broj} className="relative text-center">
                <div className="mx-auto mb-6 w-24 h-24 rounded-full bg-brand-900 flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">{k.broj}</span>
                </div>
                <h3 className="text-xl font-bold text-brand-900 mb-3">{k.title}</h3>
                <p className="text-brand-600 leading-relaxed">{k.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-900 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Imate problem sa vlagom?
          </h2>
          <p className="text-brand-200 text-lg mb-8 max-w-xl mx-auto">
            Ne čekajte — vlaga se brzo širi i prouzrokuje sve veće štete.
            Pozovite nas odmah ili nas kontaktirajte za besplatnu procenu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+381601234567" className="btn-primary text-base px-8 py-4">
              📞 +381 60 123 4567
            </a>
            <Link
              href="/kontakt"
              className="btn-outline border-brand-400 text-brand-200 hover:bg-brand-800 text-base px-8 py-4"
            >
              Pošaljite upit
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
