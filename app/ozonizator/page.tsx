import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Iznajmljivanje ozonizatora Trotec Airozon Beograd',
  description:
    'Iznajmljivanje profesionalnog generatora ozona Trotec Airozon u Beogradu i Srbiji. Uklanja miris dima, vlage, buđi i ljubimaca, dezinfikuje stan, lokal i automobil bez hemikalija.',}

const resava = [
  {
    naslov: 'Uporni mirisi',
    opis: 'Duvanski dim, vlaga i buđ, kućni ljubimci, zagorela hrana, kao i mirisi posle požara ili poplave.',
  },
  {
    naslov: 'Dezinfekcija prostora',
    opis: 'Ozon uništava bakterije, viruse, spore buđi i alergene u vazduhu i na površinama.',
  },
  {
    naslov: 'Vozila i klima sistemi',
    opis: 'Dubinsko čišćenje enterijera automobila, kombija i kamiona, kao i ventilacije i klima uređaja.',
  },
]

const primena = [
  'Stanovi i kuće',
  'Kancelarije i lokali',
  'Apartmani za izdavanje',
  'Teretane i svlačionice',
  'Automobili, kombiji i kamioni',
  'Prostori posle poplave i isušivanja',
]

const prednosti = [
  {
    naslov: 'Bez hemikalija',
    opis: 'Ekološki postupak. Posle provetravanja ozon se vraća u kiseonik i ne ostavlja tragove.',
  },
  {
    naslov: 'Profesionalna snaga',
    opis: 'Za razliku od kućnih aparata, Trotec Airozon daje stabilnu i visoku proizvodnju ozona, pa su rezultati brzi i trajni.',
  },
  {
    naslov: 'Jednostavno rukovanje',
    opis: 'Uređaj ima ugrađen tajmer, a uz njega dobijate jasna uputstva za bezbednu upotrebu.',
  },
  {
    naslov: 'Fleksibilan najam',
    opis: 'Iznajmljivanje na dan ili više dana, po povoljnim cenama.',
  },
]

const koraci = [
  { k: '1', t: 'Pripremite prostor', d: 'Iznesite biljke i ljubimce, zatvorite prozore i vrata. U prostoru tokom tretmana ne sme biti ljudi.' },
  { k: '2', t: 'Uključite uređaj', d: 'Podesite tajmer prema veličini prostora i jačini mirisa i napustite prostoriju.' },
  { k: '3', t: 'Provetrite', d: 'Posle tretmana provetrite prostor 1 do 2 sata pre nego što uđete.' },
]

const pitanja = [
  {
    q: 'Koliko traje tretman ozonom?',
    a: 'Tretman obično traje od 30 do 120 minuta, zavisno od veličine prostora i jačine mirisa. Posle toga prostor treba provetriti 1 do 2 sata pre ulaska.',
  },
  {
    q: 'Da li je ozoniranje bezbedno?',
    a: 'Jeste, ako se poštuju uputstva. Tokom tretmana u prostoru ne smeju biti ljudi, životinje ni biljke. Posle provetravanja ozon se razgrađuje u kiseonik i ne ostavlja štetne tragove.',
  },
  {
    q: 'Da li ozon uklanja miris vlage i buđi?',
    a: 'Da. Ozon uništava spore buđi i uzrok mirisa, a ne samo da ga prikriva. Ako je zid i dalje vlažan, prvo ga treba isušiti, inače će se buđ vratiti. Mi radimo i isušivanje vlage.',
  },
  {
    q: 'Može li ozonizator da se koristi u automobilu?',
    a: 'Može. Ozoniranje uklanja miris dima i vlage iz sedišta, tapacirunga i klima sistema automobila, kombija i kamiona.',
  },
  {
    q: 'Gde mogu da iznajmim ozonizator?',
    a: 'Ozonizator Trotec Airozon iznajmljujemo u Beogradu i u celoj Srbiji. Pozovite 062 355 345 za cenu najma i dostupnost.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: pitanja.map((p) => ({
    '@type': 'Question',
    name: p.q,
    acceptedAnswer: { '@type': 'Answer', text: p.a },
  })),
}

export default function OzonizatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Uvod */}
      <section className="bg-brand-900 border-b border-brand-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-14 items-center">
          <div className="relative aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden bg-white border border-brand-700">
            <Image
              src="/images/ozonizator-airozon-10000.jpg"
              alt="Ozonizator Trotec Airozon 10000, profesionalni generator ozona"
              fill
              priority
              sizes="(min-width: 1024px) 448px, 100vw"
              className="object-contain p-6"
            />
          </div>
          <div>
          <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">Ozonizator · Trotec Airozon</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight max-w-4xl">
            Iznajmljivanje ozonizatora Trotec Airozon
          </h1>
          <p className="mt-3 text-xl text-brand-200 font-semibold">Uklanjanje mirisa i dezinfekcija prostora bez hemikalija</p>
          <p className="mt-6 text-brand-300 text-lg leading-relaxed max-w-3xl">
            Potrebno vam je brzo i dubinsko uklanjanje neprijatnih mirisa ili dezinfekcija prostora?
            Iznajmljujemo profesionalni nemački generator ozona <strong className="text-white">Trotec Airozon</strong> za
            stanove, kuće, poslovne prostore i vozila, u Beogradu i u celoj Srbiji. Ozon prodire u
            nameštaj, tepihe, zidove i ventilaciju i uništava izvor mirisa, umesto da ga samo prikrije.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+38162355345"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-black font-bold text-lg px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors"
            >
              📞 062 355 345
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center border-2 border-white/30 text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-colors"
            >
              Kontakt
            </Link>
          </div>
          </div>
        </div>
      </section>

      {/* Šta rešava */}
      <section className="bg-brand-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-10">Šta rešava generator ozona</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resava.map((r) => (
              <div key={r.naslov} className="rounded-xl border border-brand-700 bg-brand-800 hover:border-cyan-500 transition-colors p-6">
                <h3 className="text-white font-bold text-lg mb-2">{r.naslov}</h3>
                <p className="text-brand-300 text-sm leading-relaxed">{r.opis}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Primena */}
      <section className="bg-brand-800 border-y border-brand-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">Gde se koristi ozonizator</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {primena.map((p) => (
              <li key={p} className="flex items-center gap-3 text-brand-200">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Prednosti */}
      <section className="bg-brand-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-10">Zašto iznajmiti Trotec Airozon</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {prednosti.map((p) => (
              <div key={p.naslov} className="rounded-xl border border-brand-700 bg-brand-800 p-6">
                <h3 className="text-cyan-400 font-bold mb-2">{p.naslov}</h3>
                <p className="text-brand-300 text-sm leading-relaxed">{p.opis}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kako se koristi */}
      <section className="bg-brand-800 border-y border-brand-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-10">Kako izgleda tretman ozonom</h2>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {koraci.map((s) => (
              <li key={s.k} className="flex gap-4">
                <span className="w-10 h-10 rounded-full bg-cyan-400 text-black font-black flex items-center justify-center flex-shrink-0">
                  {s.k}
                </span>
                <div>
                  <h3 className="text-white font-bold mb-1">{s.t}</h3>
                  <p className="text-brand-300 text-sm leading-relaxed">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Česta pitanja */}
      <section className="bg-brand-900 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">Česta pitanja o ozoniranju</h2>
          <div className="space-y-6">
            {pitanja.map((p) => (
              <div key={p.q}>
                <h3 className="text-white font-bold text-lg mb-2">{p.q}</h3>
                <p className="text-brand-300 leading-relaxed">{p.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Poziv */}
      <section className="bg-yellow-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-black">Iznajmite ozonizator</h2>
            <p className="text-black/70 mt-1">Na dan ili više dana, u Beogradu i celoj Srbiji. Pozovite za cenu i dostupnost.</p>
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
