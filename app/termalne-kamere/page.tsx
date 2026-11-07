import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Termalne kamere',
  description:
    'Pregled termalnom (termovizijskom) kamerom: pronalazimo skrivenu vlagu, curenje cevi i hladne mostove bez razbijanja zidova i podova.',
}

const sta = [
  {
    naslov: 'Skrivena vlaga u zidovima',
    opis: 'Vlažni delovi zida hladniji su od suvih i na snimku se jasno izdvajaju — i pre nego što se pojave fleke ili buđ.',
  },
  {
    naslov: 'Curenje vodovodnih cevi',
    opis: 'Pronalazimo mesto curenja u zidu ili podu, pa se otvara samo tamo gde je zaista potrebno.',
  },
  {
    naslov: 'Podno grejanje',
    opis: 'Vidimo kuda prolaze cevi podnog grejanja i gde je moguće oštećenje ili curenje.',
  },
  {
    naslov: 'Hladni mostovi i kondenzacija',
    opis: 'Otkrivamo mesta gde toplota izlazi i gde se zato skuplja kondenz — najčešći uzrok buđi oko prozora i u uglovima.',
  },
  {
    naslov: 'Ravni krovovi i terase',
    opis: 'Lociramo zone u koje prodire voda, kako bi se sanacija uradila tačno na mestu problema.',
  },
  {
    naslov: 'Kontrola isušivanja',
    opis: 'Tokom i posle isušivanja proveravamo da li je konstrukcija ravnomerno suva i da nije ostalo vlažnih zona.',
  },
]

const prednosti = [
  'Bez razbijanja zidova i podova',
  'Brz pregled celog prostora',
  'Provera toplotnih gubitaka na objektu',
  'Manji troškovi sanacije',
]

export default function TermalneKamerePage() {
  return (
    <>
      {/* Uvod */}
      <section className="bg-brand-900 border-b border-brand-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">Termovizijski pregled</p>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Termalne kamere
            </h1>
            <p className="mt-5 text-brand-300 text-lg leading-relaxed">
              Termalnom kamerom vidimo ono što golim okom ne može da se vidi — razlike u temperaturi
              površina koje otkrivaju vlagu, curenje i hladne mostove. Pregled je potpuno
              nedestruktivan: bez bušenja, bez razbijanja, bez prašine.
            </p>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {prednosti.map((p) => (
                <li key={p} className="flex items-center gap-3 text-brand-200 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Ilustracija termalnog snimka */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-brand-700" aria-hidden="true">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-orange-500 to-red-700" />
            <div className="absolute -left-10 -bottom-10 w-3/4 h-3/4 rounded-full bg-gradient-to-tr from-indigo-900 via-blue-600 to-cyan-400 blur-2xl opacity-90" />
            <div className="absolute left-1/4 bottom-1/4 w-1/3 h-1/3 rounded-full bg-indigo-950 blur-xl opacity-80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border-2 border-white/80 rounded-full" />
              <div className="absolute w-24 h-px bg-white/80" />
              <div className="absolute h-24 w-px bg-white/80" />
            </div>
            <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded">
              Plavo = hladnije, vlažnije · Crveno = toplije
            </div>
          </div>
        </div>
      </section>

      {/* Šta otkrivamo */}
      <section className="bg-brand-800 border-y border-brand-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">Šta otkrivamo termalnom kamerom</h2>
          <p className="text-brand-300 mb-10 max-w-2xl">
            Precizna dijagnoza je prvi korak — tek kada znamo odakle vlaga dolazi, isušivanje i
            sanacija imaju trajan efekat.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sta.map((s) => (
              <div
                key={s.naslov}
                className="rounded-xl border border-brand-700 bg-brand-900 hover:border-cyan-500 transition-colors p-6"
              >
                <h3 className="text-white font-bold text-lg mb-2">{s.naslov}</h3>
                <p className="text-brand-300 text-sm leading-relaxed">{s.opis}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kako izgleda pregled */}
      <section className="bg-brand-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-10">Kako izgleda pregled</h2>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { k: '1', t: 'Snimanje prostora', d: 'Kamerom pregledamo zidove, podove i plafone i označavamo sumnjive zone.' },
              { k: '2', t: 'Provera merenjem', d: 'Na označenim mestima merimo vlažnost vlagomerom kako bismo potvrdili nalaz.' },
              { k: '3', t: 'Predlog rešenja', d: 'Objašnjavamo uzrok problema i predlažemo isušivanje i dalje korake sanacije.' },
            ].map((s) => (
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

      {/* Poziv */}
      <section className="bg-yellow-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-black">Sumnjate na skrivenu vlagu?</h2>
            <p className="text-black/70 mt-1">Zakažite termovizijski pregled — pronaći ćemo izvor problema.</p>
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
