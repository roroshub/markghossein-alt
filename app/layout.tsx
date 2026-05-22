import type { Metadata } from 'next'
import { Raleway, Inter } from 'next/font/google'
import './globals.css'

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://markghossein-alt.vercel.app'

export const metadata: Metadata = {
  title: 'Mark Ghossein | Real Estate Advisors — Ottawa',
  description: "Ottawa's most strategic real estate advisor. Buying, selling, upsizing — Century 21.",
  metadataBase: new URL(siteUrl),
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: siteUrl,
    title: 'Mark Ghossein | Real Estate Advisors',
    description: "Ottawa's most strategic real estate advisor.",
    siteName: 'Mark Ghossein Real Estate Advisors',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${raleway.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
