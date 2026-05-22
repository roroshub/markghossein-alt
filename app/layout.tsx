import type { Metadata } from 'next'
import { DM_Serif_Display, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const dmSerif = DM_Serif_Display({
  variable: '--font-dm-serif',
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
})

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://markghossein-alt.vercel.app'

export const metadata: Metadata = {
  title: 'Mark Ghossein | Real Estate Advisors — Ottawa',
  description:
    "Mark Ghossein — Ottawa's trusted real estate advisor. Buyer representation, seller strategy, upsizing, and investment counsel. Century 21.",
  metadataBase: new URL(siteUrl),
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: siteUrl,
    title: 'Mark Ghossein | Real Estate Advisors',
    description: "Ottawa's trusted real estate advisor. Make the right move.",
    siteName: 'Mark Ghossein Real Estate Advisors',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  )
}
