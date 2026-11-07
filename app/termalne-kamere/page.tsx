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
]

const specifikacije = [
  { label: 'Rezolucija IR senzora', value: '160 × 120 piksela (19.200 mernih tačaka)' },
  { label: 'Merni opseg', value: '−10 °C do +400 °C' },
  { label: 'Tačnost merenja', value: '±3,0 °C' },
  { label: 'Termalna osetljivost (NETD)', value: '≤ 50 mK' },
  { label: 'Ekran i memorija', value: '3,5" ekran i interna memorija do 500 slika (.jpg)' },
  { label: 'Povezivanje', value: 'Wi-Fi (Bosch ThermalOn aplikacija) i micro-USB (GTC Transfer softver)' },
  { label: 'Napajanje', value: 'Dvostruko – Bosch 12 V Li-ion baterija ili 4 × AA alkalne baterije' },
]

const oblasti = [
  {
    naslov: 'Građevinarstvo i energetska efikasnost',
    stavke: [
      'Otkrivanje toplotnih mostova oko prozora, uglova i serklaža.',
      'Provera kvaliteta termoizolacije zidova, krovova i fasada.',
      'Lociranje mesta prodora hladnog vazduha i promaje.',
    ],
  },
  {
    naslov: 'Detekcija vlage i curenja vode',
    stavke: [
      'Pronalaženje skrivenog curenja cevi u zidovima i podovima bez rušenja.',
      'Identifikacija vlažnih zona i potencijalnih žarišta buđi.',
    ],
  },
  {
    naslov: 'HVAC i podno grejanje',
    stavke: [
      'Praćenje trase cevi podnog grejanja pre bušenja radi izbegavanja oštećenja.',
      'Kontrola ravnomernosti zagrevanja radijatora i rada toplotnih pumpi.',
    ],
  },
  {
    naslov: 'Elektroinstalacije i industrija',
    stavke: [
      'Detekcija pregrejanih osigurača, sklopki i labavih kontakata u razvodnim tablama.',
      'Preventivni pregledi elektromotora, ležajeva i solarnih panela („hot spot“ zone).',
    ],
  },
]

const preciznost = [
  {
    naslov: 'Pravilna razlika temperatura',
    opis: 'Za snimanje fasada razlika između unutrašnje i spoljne temperature treba da bude minimalno 10 °C (idealno 15 °C+).',
  },
  {
    naslov: 'Bez direktnog sunca',
    opis: 'Fasada ne sme biti izložena sunčevoj svetlosti nekoliko sati pre snimanja (najbolje vreme je rano ujutru, uveče ili noću).',
  },
  {
    naslov: 'Podešavanje emisivnosti',
    opis: 'Uvek prilagodite vrednost emisivnosti materijala koji merite (beton, drvo, malter) kako biste izbegli netačna očitavanja.',
  },
  {
    naslov: 'Udaljenost i ugao',
    opis: 'Stanite pod uglom od oko 90° na minimalnoj udaljenosti od 0,3 m od objekta merenja.',
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

      {/* Bosch GTC 400 C */}
      <section className="bg-brand-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-5 py-3 mb-6">
            <span className="text-white font-black uppercase tracking-widest text-sm">Bosch</span>
            <span className="w-px h-4 bg-white/30" />
            <span className="text-brand-300 text-xs uppercase tracking-wider">Professional</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Bosch GTC 400 C Professional termalna kamera
          </h2>
          <p className="text-brand-300 leading-relaxed max-w-3xl mb-10">
            Bosch GTC 400 C Professional je vodeća profesionalna termalna kamera koja omogućava brzo
            i nedestruktivno otkrivanje temperaturnih razlika, vlage, curenja i toplotnih mostova.
            Namenjena je majstorima, energetskim savetnicima, električarima i instalaterima, a uz
            ugrađenu vizuelnu kameru pruža jasne dokaze i dokumentaciju direktno sa terena.
          </p>

          <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">
            Ključne tehničke karakteristike
          </h3>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 rounded-xl border border-brand-700 bg-brand-800 px-6 py-2">
            {specifikacije.map((s) => (
              <div key={s.label} className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4 py-3 border-b border-brand-700 last:border-b-0 md:[&:nth-last-child(2)]:border-b-0">
                <dt className="text-brand-300 text-sm">{s.label}</dt>
                <dd className="text-white text-sm font-semibold sm:text-right">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Oblasti primene */}
      <section className="bg-brand-800 border-y border-brand-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-10">Glavne oblasti primene</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {oblasti.map((o, i) => (
              <div key={o.naslov} className="rounded-xl border border-brand-700 bg-brand-900 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-cyan-400 text-black font-black text-sm flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <h3 className="text-white font-bold text-lg">{o.naslov}</h3>
                </div>
                <ul className="space-y-2">
                  {o.stavke.map((s) => (
                    <li key={s} className="flex gap-3 text-brand-300 text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0 mt-2" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Šta otkrivamo */}
      <section className="bg-brand-900 py-16">
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
                className="rounded-xl border border-brand-700 bg-brand-800 hover:border-cyan-500 transition-colors p-6"
              >
                <h3 className="text-white font-bold text-lg mb-2">{s.naslov}</h3>
                <p className="text-brand-300 text-sm leading-relaxed">{s.opis}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kako izgleda pregled */}
      <section className="bg-brand-800 border-y border-brand-700 py-16">
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

      {/* Preciznost */}
      <section className="bg-brand-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-10">
            Kako postići maksimalnu preciznost merenja?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {preciznost.map((p) => (
              <div key={p.naslov} className="rounded-xl border border-brand-700 bg-brand-800 p-6">
                <h3 className="text-cyan-400 font-bold mb-2">{p.naslov}</h3>
                <p className="text-brand-300 text-sm leading-relaxed">{p.opis}</p>
              </div>
            ))}
          </div>
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
