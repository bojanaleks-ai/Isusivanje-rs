'use client'

import { useState, useRef, useEffect } from 'react'

type Message = { role: 'user' | 'assistant'; content: string }

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Zdravo! Ja sam AI asistent Isusivanje.rs. Kako mogu da vam pomognem? Imate li problem sa vlagom, poplavom ili buđi?' },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  async function sendMessage() {
    const text = input.trim()
    if (!text || loading) return
    const newMessages: Message[] = [...messages, { role: 'user', content: text }]
    setMessages(newMessages)
    setInput('')
    setLoading(true)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      })
      const data = await res.json()
      setMessages([...newMessages, { role: 'assistant', content: data.reply || 'Došlo je do greške. Pokušajte ponovo.' }])
    } catch {
      setMessages([...newMessages, { role: 'assistant', content: 'Došlo je do greške. Pozovite nas na +381 60 123 4567.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-brand-50">
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 text-white py-14">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-700/50 border border-brand-600/50 rounded-full px-4 py-1.5 text-sm text-brand-200 mb-4">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            AI asistent — odmah odgovara
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            <span className="text-brand-300">Chat</span> sa stručnjakom
          </h1>
          <p className="text-brand-200 text-lg max-w-xl mx-auto">
            Postavite pitanje o vlagi, poplavi ili buđi. Za hitne slučajeve pozovite{' '}
            <a href="tel:+381601234567" className="underline font-semibold">+381 60 123 4567</a>.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-brand-100 flex flex-col" style={{ height: '60vh', minHeight: '400px' }}>
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-brand-900 flex items-center justify-center text-white text-xs font-bold mr-2 flex-shrink-0 mt-1">AI</div>
                )}
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${msg.role === 'user' ? 'bg-brand-900 text-white rounded-br-sm' : 'bg-brand-50 text-brand-900 border border-brand-100 rounded-bl-sm'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="w-8 h-8 rounded-full bg-brand-900 flex items-center justify-center text-white text-xs font-bold mr-2 flex-shrink-0">AI</div>
                <div className="bg-brand-50 border border-brand-100 rounded-2xl rounded-bl-sm px-4 py-3">
                  <span className="flex gap-1">
                    <span className="w-2 h-2 bg-brand-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-brand-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-brand-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="border-t border-brand-100 p-4">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Npr. Imam vlagu u podrumu, šta da radim?"
                className="flex-1 rounded-xl border border-brand-200 px-4 py-3 text-sm text-brand-900 placeholder-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                disabled={loading}
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="btn-primary px-5 py-3 text-sm rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Pošalji
              </button>
            </div>
            <p className="text-xs text-brand-400 mt-2 text-center">
              Za hitne intervencije pozovite{' '}
              <a href="tel:+381601234567" className="text-brand-600 font-medium">+381 60 123 4567</a> — dostupni 0–24h
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
