import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt — Isusivanje.rs',
  description:
    'Kontaktirajte nas za profesionalno isušivanje vlage. Dostupni 0–24h. Pozovite ili pišite — brzo odgovaramo.',
}

const kontaktInfo = [
  {
    icon: '📞',
    title: 'Telefon',
    lines: ['+381 60 123 4567'],
    note: 'Dostupni 0–24h, 7 dana u nedelji',
    href: 'tel:+381623553456',
  },
  {
    icon: '✉️',
    title: 'Email',
    lines: ['isusivanje.rs@gmail.com'],
    note: 'Odgovaramo u roku od 2 sata',
    href: 'mailto:isusivanje.rs@gmail.com',
  },
  {
    icon: '📍',
    title: 'Oblast rada',
    lines: ['Cela Srbija'],
    note: 'Ekipe raspoređene širom Srbije',
    href: null,
  },
  {
    icon: '🕐',
    title: 'Radno vreme',
    lines: ['Ponedeljak – Nedjelja', '0:00 – 24:00'],
    note: 'Hitne intervencije bez dopunske naknade',
    href: null,
  },
]

const faq = [
  {
    q: 'Koliko brzo možete da stignete?',
    a: 'U većini slučajeva stižemo u roku od 1 do 2 sata od poziva, bez obzira na doba dana. Za hitne poplave imamo poseban tim koji je uvek u pripravnosti.',
  },
  {
    q: 'Da li je procena besplatna?',
    a: 'Da — dolazak i procena stanja na licu mesta su besplatni. Cenu radova možete dobiti tek kada vidimo tačan obim posla.',
  },
  {
    q: 'Koliko dugo traje isušivanje?',
    a: 'Zavisi od stepena vlage i vrste konstrukcije. Tipično isušivanje traje od 3 do 10 dana uz kontinuirani rad industrijskih mašina.',
  },
  {
    q: 'Da li radite i sa osiguravajućim društvima?',
    a: 'Da — izdajemo detaljnu tehničku dokumentaciju i izveštaje o merenijma koji su potrebni za osiguravajuće zahteve.',
  },
  {
    q: 'Koja područja pokrivate?',
    a: 'Pokrivamo celu Srbiju. Imamo ekipe u više gradova tako da brzo stižemo do vas gde god se nalazili.',
  },
]

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-900 text-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Kontaktirajte nas</h1>
          <p className="text-brand-200 text-lg max-w-xl">
            Dostupni smo 24 sata dnevno, 7 dana u nedelji. Pozovite odmah ili nam pišite —
            reagujemo brzo.
          </p>
        </div>
      </section>

      {/* Kontakt kartice */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {kontaktInfo.map((info) => (
              <div
                key={info.title}
                className="rounded-2xl border border-brand-100 p-6 shadow-sm text-center hover:shadow-md hover:border-brand-300 transition-all"
              >
                <div className="text-4xl mb-3">{info.icon}</div>
                <h3 className="font-bold text-brand-900 mb-2">{info.title}</h3>
                <div className="mb-2">
                  {info.lines.map((line) =>
                    info.href ? (
                      <a
                        key={line}
                        href={info.href}
                        className="block text-brand-600 font-semibold hover:text-brand-800 transition-colors"
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={line} className="text-brand-700 font-semibold">
                        {line}
                      </p>
                    )
                  )}
                </div>
                <p className="text-xs text-brand-400">{info.note}</p>
              </div>
            ))}
          </div>

          {/* Hitna intervencija baner */}
          <div className="rounded-2xl bg-gradient-to-br from-brand-900 to-brand-700 text-white p-8 sm:p-12 text-center mb-16">
            <div className="text-5xl mb-4">🚨</div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Hitna intervencija?</h2>
            <p className="text-brand-200 text-lg mb-6 max-w-lg mx-auto">
              Poplava ili curenje vode ne čeka. Pozovite nas odmah — naš tim stiže u roku od 2 sata.
            </p>
            <a
              href="tel:+381623553456"
              className="inline-flex items-center gap-3 bg-white text-brand-900 font-bold text-xl px-8 py-4 rounded-xl shadow-lg hover:bg-brand-50 transition-colors"
            >
              📞 +381 60 123 4567
            </a>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-900 mb-8 text-center">Česta pitanja</h2>
            <div className="space-y-4">
              {faq.map((item) => (
                <div key={item.q} className="rounded-xl border border-brand-100 p-6 shadow-sm">
                  <h3 className="font-bold text-brand-900 mb-2">{item.q}</h3>
                  <p className="text-brand-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
