import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Isušivanje Vlage — Profesionalno isušivanje u Srbiji',
  description:
    'Profesionalno isušivanje vlage Trotek industrijskim mašinama. Sanacija šteta od vode i buđi širom Srbije. Brza reakcija 0–24h.',
}

const trotekMasine = [
  { model: 'TTK 400', kapacitet: '80 L/dan', img: '/images/ttk400.jpg' },
  { model: 'TTK 500', kapacitet: '90 L/dan', img: '/images/ttk500.jpg' },
  { model: 'TTK 570 ECO', kapacitet: '127 L/dan', img: '/images/ttk570.jpg' },
]

const prednosti = [
  {
    icon: (
      <svg className="w-8 h-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
      </svg>
    ),
    title: 'Iskustvo od preko 12 godina',
    desc: 'Dugogodišnje iskustvo u isušivanju vlage i sanaciji šteta od vode za stambene i poslovne objekte.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 6h-2.18c.07-.44.18-.88.18-1.33C18 2.54 15.6 1 13.5 1c-1.5 0-2.63.59-3.43 1.56L9 4 7.93 2.56C7.13 1.59 6 1 4.5 1 2.4 1 0 2.54 0 4.67 0 5.12.11 5.56.18 6H2C.9 6 0 6.9 0 8v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7.5-3c1.03 0 2.5.68 2.5 1.67 0 .73-.41 1.08-.69 1.33H12V4.33C12 3.68 12.11 3 12.5 3zM4.5 3C5.47 3 6 3.68 6 4.33V6H4.19c-.28-.25-.69-.6-.69-1.33C3.5 3.68 3.97 3 4.5 3zM11 18H2v-2h9v2zm0-4H2v-2h9v2zm0-4H2V8h9v2zm11 8h-9v-2h9v2zm0-4h-9v-2h9v2zm0-4h-9V8h9v2z"/>
      </svg>
    ),
    title: 'Preko 30 profesionalnih industrijskih mašina',
    desc: 'Raspolažemo velikim parkom Trotec industrijskih odvlaživača — uvek spreman za svaki obim posla.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
      </svg>
    ),
    title: 'Mašine rade 24h/7 bez gašenja',
    desc: 'Naše mašine kontinuirano rade bez prekida — maksimalna efikasnost i najbrže moguće isušivanje.',
  },
]

const usluge = [
  {
    title: 'Isušivanje zidova',
    desc: 'Uklanjamo vlagu iz zidova, temelja i unutrašnjih konstrukcija. Sprečavamo dalji razvoj plesni i oštećenja.',
    img: '/images/usluga-zidovi.jpg',
    icon: '🧱',
  },
  {
    title: 'Isušivanje podova',
    desc: 'Brzo i efikasno sušenje betonskih ploča, parketa i keramike. Vraćamo prostor u upotrebno stanje.',
    img: '/images/usluga-podovi.jpg',
    icon: '🏠',
  },
  {
    title: 'Nakon poplave',
    desc: 'Hitna intervencija 0-24h. Izvlačimo vodu iz prostora i radimo kompletnu sanaciju štete od poplave.',
    img: '/images/usluga-poplava.jpg',
    icon: '🌊',
  },
  {
    title: 'Merenje vlage',
    desc: 'Precizno merenje vlažnosti termokamerom i vlažnomerom. Dijagnostika i plan sanacije pre radova.',
    img: '/images/usluga-merenje.jpg',
    icon: '🔬',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center">
        {/* Background photo */}
        <Image
          src="/images/hero-bg.jpg"
          alt="Oštećenje od vlage"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay - jači s leve, providniji desno kao na referenci */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <p className="text-cyan-400 text-sm font-bold uppercase tracking-widest mb-4">
                Profesionalni servis za isušivanje
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none mb-4">
                <span className="block text-white">PROFESIONALNO</span>
                <span className="block text-cyan-400">ISUŠIVANJE.rs</span>
                <span className="block text-white">VLAGE</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-brand-200 mb-4">
                Brzo, Efikasno, Pouzdano
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+381623553456"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-400 text-black text-lg font-black uppercase tracking-wider rounded-md transition-colors shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  062 355 345
                </a>
              </div>
            </div>

            {/* Right: Badge */}
            <div className="hidden lg:flex justify-end items-start">
              <div className="relative w-44 h-44 rounded-full border-4 border-cyan-400 flex flex-col items-center justify-center text-center bg-black/60 backdrop-blur-sm">
<span className="text-white font-black text-sm uppercase leading-tight">Uklanjamo<br/>Vlagu</span>
                <span className="text-cyan-400 text-xs mt-1 font-semibold">0–24h dostupni</span>
              </div>
            </div>
          </div>

          {/* Trotek machines */}
          <div id="trotek" className="mt-16">
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-5 py-3 mb-8">
              <span className="text-white font-black uppercase tracking-widest text-sm">Trotek</span>
              <span className="w-px h-4 bg-white/30" />
              <span className="text-brand-300 text-xs uppercase tracking-wider">Made in Germany</span>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-2xl">
              {trotekMasine.map((m) => (
                <div key={m.model} className="text-center">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-2 mb-3 aspect-square flex items-center justify-center overflow-hidden">
                    <Image
                      src={m.img}
                      alt={m.model}
                      width={200}
                      height={200}
                      className="object-contain w-full h-full drop-shadow-2xl"
                    />
                  </div>
                  <p className="text-white font-bold text-sm">{m.model}</p>
                  <p className="text-brand-300 text-xs">{m.kapacitet}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 inline-block bg-white text-black text-xs font-black uppercase tracking-widest px-6 py-2 rounded-sm">
              Naše profesionalne industrijske Trotec mašine
            </div>
          </div>
        </div>
      </section>

      {/* O nama / SEO tekst */}
      <section className="bg-brand-900 py-16 border-b border-brand-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Levo */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-5">
                Profesionalno isušivanje vlage i sanacija štete od vode u celoj Srbiji
              </h2>
              <p className="text-brand-300 leading-relaxed mb-4">
                Pružamo profesionalne usluge isušivanja vlage, sušenja zidova, podova i kompletnih
                objekata uz pomoć savremene Trotec opreme namenjene za brzo i efikasno uklanjanje
                viška vlage. Specijalizovani smo za sanaciju posledica poplava, pucanja vodovodnih
                instalacija, curenja vode, prodora podzemnih voda i problema izazvanih kondenzacijom.
              </p>
              <p className="text-brand-300 leading-relaxed mb-6">
                Vlaga u zidovima, podovima i plafonima može izazvati ozbiljna oštećenja objekta,
                pojavu buđi i neprijatnih mirisa, kao i narušavanje kvaliteta vazduha u prostoru.
                Naš stručni tim koristi profesionalne mašine za isušivanje koje omogućavaju precizno
                i kontrolisano uklanjanje vlage bez potrebe za skupim građevinskim radovima.
              </p>
              <p className="text-brand-300 leading-relaxed">
                Bez obzira da li je u pitanju stan, kuća, poslovni prostor, lokal, magacin ili
                industrijski objekat, obezbeđujemo brzo reagovanje i efikasna rešenja za sve vrste
                problema sa vlagom. Zahvaljujući profesionalnoj Trotec tehnologiji, proces isušivanja
                je znatno brži u poređenju sa prirodnim sušenjem, čime se smanjuje rizik od dodatnih
                oštećenja i troškova sanacije.
              </p>
            </div>

            {/* Desno */}
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">
                  Usluge koje pružamo
                </h3>
                <ul className="space-y-2">
                  {[
                    'Isušivanje vlage iz zidova',
                    'Sušenje podova i estriha',
                    'Isušivanje podruma i garaža',
                    'Sanacija nakon poplava',
                    'Sanacija štete od curenja vode',
                    'Uklanjanje vlage nastale kondenzacijom',
                    'Industrijsko i građevinsko isušivanje objekata',
                    'Prevencija nastanka buđi i plesni',
                  ].map((u) => (
                    <li key={u} className="flex items-center gap-3 text-brand-300 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                      {u}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">
                  Zašto odabrati nas?
                </h3>
                <ul className="space-y-2">
                  {[
                    'Profesionalna Trotec oprema za isušivanje',
                    'Dugogodišnje iskustvo — preko 12 godina',
                    'Brz izlazak na teren',
                    'Rešenja za stambene i poslovne objekte',
                    'Pokrivenost cele teritorije Srbije',
                    'Pouzdana i efikasna usluga',
                  ].map((z) => (
                    <li key={z} className="flex items-center gap-3 text-brand-300 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      {z}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Prednosti strip */}
      <section className="bg-brand-800 border-y border-brand-700 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {prednosti.map((p) => (
              <div key={p.title} className="flex flex-col items-center text-center gap-3">
                <div>{p.icon}</div>
                <h3 className="text-white font-bold text-sm uppercase tracking-wider">{p.title}</h3>
                <p className="text-brand-300 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usluge */}
      <section id="usluge" className="py-20 bg-brand-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14">
            <div>
              <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">Naše usluge</p>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Rešavamo problem vlage<br />na izvoru
              </h2>
            </div>
            <div className="flex items-center">
              <p className="text-brand-300 leading-relaxed">
                Svaki slučaj vlage je drugačiji — bilo da se radi iz podova, podovima ili
                tokom poplava — imamo rešenje i opremu da se bori svaki problem efikasno i trajno.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {usluge.map((u) => (
              <div key={u.title} className="group rounded-xl overflow-hidden bg-brand-800 border border-brand-700 hover:border-cyan-500 transition-all duration-300">
                {/* Photo area */}
                <div className="relative h-48 bg-brand-700 overflow-hidden">
                  <Image src={u.img} alt={u.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-cyan-400 text-black text-xs font-bold uppercase px-2 py-1 rounded">
                      {u.icon}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-bold mb-2">{u.title}</h3>
                  <p className="text-brand-300 text-sm leading-relaxed">{u.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA baner */}
      <section className="bg-brand-950 py-16 border-t border-brand-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand-300 text-sm mb-2">Ne odlažite sanaciju</p>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">
                Vlaga ne čeka.
              </h2>
              <h2 className="text-3xl sm:text-4xl font-black text-cyan-400">
                Pozovite stručnjake.
              </h2>
              <p className="text-brand-300 mt-4 leading-relaxed max-w-md">
                Svaki sat koji prođe vlaga se širi dalje. Naš tim dolazi brzo,
                dijagnostikuje problem i rešava ga profesionalnom opremom.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Više od', value: '500+', sub: 'intervencija' },
                  { label: '', value: 'Besplatna', sub: 'procena' },
                  { label: '', value: 'Garancija', sub: 'na radove' },
                ].map((s) => (
                  <div key={s.sub} className="bg-brand-800 border border-brand-700 rounded-xl p-4 text-center">
                    {s.label && <p className="text-brand-400 text-xs">{s.label}</p>}
                    <p className="text-cyan-400 font-black text-lg">{s.value}</p>
                    <p className="text-brand-300 text-xs">{s.sub}</p>
                  </div>
                ))}
              </div>

              {/* Phone CTA */}
              <a
                href="tel:+381623553456"
                className="flex items-center gap-4 bg-accent-500 hover:bg-accent-400 transition-colors rounded-xl px-6 py-5"
              >
                <div className="w-12 h-12 bg-black/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-black text-xs font-semibold uppercase tracking-wider">Pozovite nas odmah</p>
                  <p className="text-black font-black text-2xl tracking-wide">062 355 345</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
