import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostBySlug, getAllSlugs } from '@/lib/blog'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = await getPostBySlug(params.slug)
    return {
      title: post.title,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        publishedTime: post.date,
      },
    }
  } catch {
    return { title: 'Post nije pronađen' }
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('sr-RS', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function BlogPostPage({ params }: Props) {
  let post
  try {
    post = await getPostBySlug(params.slug)
  } catch {
    notFound()
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'Isusivanje.rs' },
    publisher: {
      '@type': 'Organization',
      name: 'Isusivanje.rs',
      url: 'https://isusivanje.rs',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <div className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs font-medium bg-brand-700/60 text-brand-200 rounded-full px-3 py-1 border border-brand-600/50">
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">{post.title}</h1>
          <p className="text-brand-200 text-lg mb-4">{post.excerpt}</p>
          <time className="text-brand-300 text-sm" dateTime={post.date}>
            Objavljeno: {formatDate(post.date)}
          </time>
        </div>
      </div>

      {/* Content */}
      <article className="py-14 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div
            className="prose-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Back link */}
          <div className="mt-12 pt-8 border-t border-brand-100 flex items-center justify-between flex-wrap gap-4">
            <Link href="/blog" className="text-brand-600 font-semibold hover:text-brand-800 transition-colors">
              ← Svi blog postovi
            </Link>
            <a href="tel:+381601234567" className="btn-primary">
              📞 Pozovite nas
            </a>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-12 bg-brand-50 border-t border-brand-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-brand-900 mb-3">Prepoznajete problem koji smo opisali?</h2>
          <p className="text-brand-600 mb-6">Kontaktirajte nas — naš tim je dostupan 24/7.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+381601234567" className="btn-primary">📞 Pozovite odmah</a>
            <Link href="/kontakt" className="btn-outline">Pošaljite upit</Link>
          </div>
        </div>
      </section>
    </>
  )
}
