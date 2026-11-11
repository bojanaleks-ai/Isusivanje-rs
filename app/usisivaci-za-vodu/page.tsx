import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Usisivač za vodu Kärcher NT 611: izvlačenje vode posle poplave, Beograd',
  description:
    'Profesionalni usisivač za vodu Kärcher NT 611 za brzo izvlačenje vode posle poplave, pucanja cevi ili prodora podzemnih voda. Beograd i cela Srbija, dolazak 24/7.',
}

const kada = [
  {
    naslov: 'Poplava u stanu ili kući',
    opis: 'Izvlačimo vodu sa podova, iz tepiha i iz uglova do kojih krpa i kofa ne mogu da dođu.',
  },
  {
    naslov: 'Pukla cev ili curenje',
    opis: 'Kada voda iscuri po podu, svaki minut je važan. Brzo usisavanje sprečava da voda uđe u košuljicu i zidove.',
  },
  {
    naslov: 'Podrumi i garaže',
    opis: 'Uklanjamo vodu posle prodora podzemnih voda ili jake kiše, i iz prostorija u kojima nema slivnika.',
  },
  {
    naslov: 'Teško dostupna mesta',
    opis: 'Liftovska okna, šahtovi, elektro sobe i jame za auto liftove, gde se voda skuplja i oštećuje opremu.',
  },
  {
    naslov: 'Lokali i poslovni prostori',
    opis: 'Brzo vraćamo prostor u funkciju kako bi posao stao što kraće.',
  },
  {
    naslov: 'Gradilišta',
    opis: 'Izvlačenje vode iz temelja, sa ploča i iz prostorija pre nastavka radova.',
  },
]

const prednosti = [
  {
    naslov: 'Profesionalna snaga',
    opis: 'Kärcher NT 611 je industrijski usisivač koji izvlači veliku količinu vode mnogo brže od kućnih aparata.',
  },
  {
    naslov: 'Pumpa za kontinuiran rad',
    opis: 'Ugrađena pumpa stalno odvodi usisanu vodu crevom u odvod ili napolje, pa nema pauza za pražnjenje rezervoara, čak ni kod velikih količina vode.',
  },
  {
    naslov: 'Manja šteta',
    opis: 'Što se voda brže ukloni, manje je upija pod, nameštaj i zidovi, a sanacija je jeftinija.',
  },
  {
    naslov: 'Kraće isušivanje',
    opis: 'Kada se prvo izvuče voda, isušivači posle rade brže i prostor ranije postaje suv.',
  },
  {
    naslov: 'Dolazak 24/7',
    opis: 'Izlazimo na teren i vikendom i praznikom, u Beogradu i u celoj Srbiji.',
  },
]

const koraci = [
  { k: '1', t: 'Izvlačenje vode', d: 'Usisivačima za vodu uklanjamo vodu sa podova i iz svih udubljenja.' },
  { k: '2', t: 'Merenje vlage', d: 'Merimo koliko je vlage ostalo u podu i zidovima i besplatno procenjujemo posao.' },
  { k: '3', t: 'Isušivanje', d: 'Postavljamo profesionalne Trotec isušivače koji izvlače preostalu vlagu iz konstrukcije.' },
]

const pitanja = [
  {
    q: 'Zašto je važno brzo izvući vodu posle poplave?',
    a: 'Voda koja duže stoji upija se u košuljicu, parket i zidove. Tada je isušivanje duže, a raste rizik od buđi i oštećenja. Brzim usisavanjem šteta ostaje mnogo manja.',
  },
  {
    q: 'Da li je dovoljan samo usisivač za vodu?',
    a: 'Usisivač uklanja vodu koja je na površini, ali vlaga ostaje u podu i zidovima. Zato posle usisavanja obično postavljamo isušivače vlage dok prostor ne bude potpuno suv.',
  },
  {
    q: 'Može li usisivač za vodu da se koristi u podrumu?',
    a: 'Može. Usisivači za vodu su idealni za podrume i garaže, posebno tamo gde nema slivnika. Naš Kärcher NT 611 ima ugrađenu pumpu, pa vodu odmah odvodi crevom napolje i radi bez prekida.',
  },
  {
    q: 'Gde radite?',
    a: 'Radimo u Beogradu i u celoj Srbiji, 24 sata dnevno, 7 dana u nedelji. Pozovite 062 355 345.',
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

export default function UsisivaciZaVoduPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Uvod */}
      <section className="bg-brand-900 border-b border-brand-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-14 items-center">
          <div className="relative aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden bg-white border border-brand-700">
            <Image
              src="/images/usisivac-karcher-nt-611.jpg"
              alt="Usisivač za vodu Kärcher NT 611 Professional"
              fill
              priority
              sizes="(min-width: 1024px) 448px, 100vw"
              className="object-contain p-6"
            />
          </div>
          <div>
          <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">Usisivači za vodu · Kärcher NT 611</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight max-w-4xl">
            Usisivači za vodu: izvlačenje vode posle poplave
          </h1>
          <p className="mt-3 text-xl text-brand-200 font-semibold">Brzo uklanjanje vode u Beogradu i celoj Srbiji, 24/7</p>
          <p className="mt-6 text-brand-300 text-lg leading-relaxed max-w-3xl">
            Poplava, pukla cev ili voda u podrumu? Prvi i najvažniji korak je da se voda što pre
            ukloni. Profesionalnim usisivačem za vodu <strong className="text-white">Kärcher NT 611</strong>,
            sa rezervoarom od 55 litara i ugrađenom pumpom, izvlačimo vodu sa podova, iz tepiha i sa
            teško dostupnih mesta, a zatim prostor isušujemo Trotec isušivačima dok ne bude potpuno suv.
            Pumpa usisanu vodu odmah odvodi crevom u odvod ili napolje, pa usisivač radi
            kontinuirano, bez zaustavljanja i ručnog pražnjenja rezervoara.
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

      {/* Kada je potreban */}
      <section className="bg-brand-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-10">Kada je potreban usisivač za vodu</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {kada.map((r) => (
              <div key={r.naslov} className="rounded-xl border border-brand-700 bg-brand-800 hover:border-cyan-500 transition-colors p-6">
                <h3 className="text-white font-bold text-lg mb-2">{r.naslov}</h3>
                <p className="text-brand-300 text-sm leading-relaxed">{r.opis}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prednosti */}
      <section className="bg-brand-800 border-y border-brand-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-10">Zašto profesionalni usisivač za vodu</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {prednosti.map((p) => (
              <div key={p.naslov} className="rounded-xl border border-brand-700 bg-brand-900 p-6">
                <h3 className="text-cyan-400 font-bold mb-2">{p.naslov}</h3>
                <p className="text-brand-300 text-sm leading-relaxed">{p.opis}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Postupak */}
      <section className="bg-brand-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-10">Od vode do suvog prostora</h2>
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
      <section className="bg-brand-800 border-y border-brand-700 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">Česta pitanja</h2>
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
            <h2 className="text-2xl sm:text-3xl font-black text-black">Voda u prostoru?</h2>
            <p className="text-black/70 mt-1">Pozovite odmah. Dolazimo 24/7, u Beogradu i celoj Srbiji.</p>
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
