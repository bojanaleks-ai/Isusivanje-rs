import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://isusivanje.rs'),
  title: {
    default: 'Isusivanje.rs — Profesionalno isušivanje vlage u Srbiji',
    template: '%s | Isusivanje.rs',
  },
  description:
    'Profesionalno isušivanje vlage, sanacija šteta od vode i buđi širom Srbije. Brza reakcija 0–24h, moderna oprema, iskusni stručnjaci. Pozovite nas odmah!',
  keywords: [
    'isušivanje vlage',
    'isušivanje nakon poplave',
    'sanacija buđi',
    'vlaga u zidovima',
    'isušivanje Srbija',
    'poplave sanacija',
    'odvlaživanje',
  ],
  authors: [{ name: 'Isusivanje.rs' }],
  creator: 'Isusivanje.rs',
  openGraph: {
    type: 'website',
    locale: 'sr_RS',
    url: 'https://isusivanje.rs',
    siteName: 'Isusivanje.rs',
    title: 'Isusivanje.rs — Profesionalno isušivanje vlage u Srbiji',
    description:
      'Profesionalno isušivanje vlage, sanacija šteta od vode i buđi širom Srbije. Brza reakcija 0–24h.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Isusivanje.rs — Profesionalno isušivanje vlage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Isusivanje.rs — Profesionalno isušivanje vlage u Srbiji',
    description: 'Profesionalno isušivanje vlage, sanacija šteta od vode i buđi širom Srbije.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Isusivanje.rs',
  description: 'Profesionalno isušivanje vlage i sanacija šteta od vode širom Srbije.',
  url: 'https://isusivanje.rs',
  telephone: '+381601234567',
  email: 'info@isusivanje.rs',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'RS',
    addressRegion: 'Srbija',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Srbija',
  },
  openingHours: 'Mo-Su 00:00-24:00',
  priceRange: '$$',
  serviceType: 'Isušivanje vlage i sanacija šteta od vode',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
