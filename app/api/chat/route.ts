import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { messages } = await req.json()

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'API ključ nije podešen.' }, { status: 500 })
  }

  let response: Response
  try {
    response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-5-5',
        max_tokens: 4096,
        output_config: { effort: 'low' },
        system: `Ti si stručni asistent za isušivanje vlage kompanije Isusivanje.rs. Pomažeš korisnicima sa pitanjima o isušivanju vlage, sanaciji šteta od vode i buđi, poplava i kondenzacije. Uvek odgovaraj na srpskom jeziku. Budi prijatan, stručan i koncizan. Ako korisnik ima hitnu situaciju, preporuči da odmah pozove +381 60 123 4567. Kompanija radi 0-24h i dolazi u roku od 2 sata. Usluge uključuju: isušivanje nakon poplave, sanaciju vlage u zidovima i podovima, uklanjanje buđi i plesni. Koriste industrijsku opremu i termokamere. Nude besplatnu procenu i pisani izveštaj sa garancijom.`,
        messages,
      }),
    })
  } catch (err) {
    console.error('[api/chat] Mrežna greška ka Anthropic API-ju:', err)
    return NextResponse.json(
      { error: `Mrežna greška ka Anthropic API-ju: ${err instanceof Error ? err.message : String(err)}` },
      { status: 502 },
    )
  }

  const raw = await response.text()
  let data: any
  try {
    data = JSON.parse(raw)
  } catch {
    data = null
  }

  if (!response.ok) {
    const errType = data?.error?.type ?? 'unknown_error'
    const errMessage = data?.error?.message ?? raw
    const requestId = response.headers.get('request-id') ?? data?.request_id
    console.error(
      `[api/chat] Anthropic API greška ${response.status} (${errType}): ${errMessage}` +
        (requestId ? ` [request-id: ${requestId}]` : ''),
    )
    return NextResponse.json(
      {
        error: `Anthropic API ${response.status} (${errType}): ${errMessage}`,
        status: response.status,
        type: errType,
        requestId,
      },
      { status: 500 },
    )
  }

  // Sonnet 5.5 može vratiti thinking blokove pre teksta — uzmi tekstualne blokove
  const text = (data?.content ?? [])
    .filter((b: { type: string }) => b.type === 'text')
    .map((b: { text: string }) => b.text)
    .join('')

  if (data?.stop_reason === 'refusal') {
    console.error('[api/chat] Model je odbio zahtev:', data.stop_details)
  }

  return NextResponse.json({ reply: text })
}
