import type { Metadata } from 'next'
import Link from 'next/link'
import { getSortedPostsMeta } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog — saveti o isušivanju i vlagi',
  description:
    'Stručni saveti o isušivanju vlage, sanaciji šteta od poplave, uklanjanju buđi i zaštiti vaše nekretnine.',
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('sr-RS', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogPage() {
  const posts = getSortedPostsMeta()

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-900 text-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-brand-200 text-lg max-w-xl">
            Stručni saveti i informacije o isušivanju vlage, sanaciji šteta od vode i zaštiti nekretnina.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col rounded-2xl border border-brand-100 overflow-hidden shadow-sm hover:shadow-lg hover:border-brand-300 transition-all duration-300"
              >
                {/* Placeholder header */}
                <div className="h-44 bg-gradient-to-br from-brand-800 to-brand-600 flex items-center justify-center">
                  <span className="text-5xl">💧</span>
                </div>
                <div className="flex flex-col flex-1 p-6">
                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium bg-brand-50 text-brand-600 rounded-full px-3 py-1 border border-brand-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <h2 className="text-lg font-bold text-brand-900 mb-2 group-hover:text-brand-600 transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-brand-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-brand-100">
                    <time className="text-xs text-brand-400" dateTime={post.date}>
                      {formatDate(post.date)}
                    </time>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-semibold text-brand-600 hover:text-brand-800 transition-colors"
                    >
                      Čitaj više →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-brand-50 border-t border-brand-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-brand-900 mb-3">Imate pitanje ili hitnu situaciju?</h2>
          <p className="text-brand-600 mb-6">Naš tim je dostupan 24/7 — pozovite odmah ili pošaljite upit.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+381601234567" className="btn-primary">📞 Pozovite nas</a>
            <Link href="/kontakt" className="btn-outline">Pošaljite upit</Link>
          </div>
        </div>
      </section>
    </>
  )
}
