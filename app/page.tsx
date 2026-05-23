import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Marquee } from '@/components/Marquee'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
import { Listings } from '@/components/Listings'
import { Process } from '@/components/Process'
import { Tools } from '@/components/Tools'
import { Testimonials } from '@/components/Testimonials'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://markghossein-alt.vercel.app'

export const metadata: Metadata = {
  alternates: { canonical: siteUrl },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Mark Ghossein Real Estate Advisors',
  description: 'Ottawa real estate advisor specialising in buyer representation, seller strategy, and upsizing. eXp Realty agent serving Ottawa, Kanata, Barrhaven, Westboro, Orleans and surrounding areas.',
  url: siteUrl,
  email: 'mark.ghossein@exprealty.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ottawa',
    addressRegion: 'ON',
    addressCountry: 'CA',
  },
  areaServed: [
    { '@type': 'City', name: 'Ottawa' },
    { '@type': 'City', name: 'Kanata' },
    { '@type': 'City', name: 'Barrhaven' },
    { '@type': 'City', name: 'Westboro' },
    { '@type': 'City', name: 'Orleans' },
  ],
  memberOf: {
    '@type': 'Organization',
    name: 'eXp Realty Canada',
    url: 'https://www.exprealty.com',
  },
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Listings />
        <Process />
        <Tools />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
