import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { messages } = await req.json()

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'API ključ nije podešen.' }, { status: 500 })
  }

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system: `Ti si stručni asistent za isušivanje vlage kompanije Isusivanje.rs. Pomažeš korisnicima sa pitanjima o isušivanju vlage, sanaciji šteta od vode i buđi, poplava i kondenzacije. Uvek odgovaraj na srpskom jeziku. Budi prijatan, stručan i koncizan. Ako korisnik ima hitnu situaciju, preporuči da odmah pozove +381 60 123 4567. Kompanija radi 0-24h i dolazi u roku od 2 sata. Usluge uključuju: isušivanje nakon poplave, sanaciju vlage u zidovima i podovima, uklanjanje buđi i plesni. Koriste industrijsku opremu i termokamere. Nude besplatnu procenu i pisani izveštaj sa garancijom.`,
      messages,
    }),
  })

  const data = await response.json()

  if (!response.ok) {
    return NextResponse.json({ error: 'Greška pri komunikaciji sa AI.' }, { status: 500 })
  }

  const text = data.content?.[0]?.text ?? ''
  return NextResponse.json({ reply: text })
}
