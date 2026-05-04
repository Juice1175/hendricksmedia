import type { Metadata } from 'next'
import { Barlow_Condensed, Space_Mono, Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-barlow',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'HendricksMedia — Facebook & Instagram Ads for Local Businesses',
  description: 'We build and manage high-performance Facebook and Instagram ad campaigns for roofing companies and local service businesses.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${barlow.variable} ${spaceMono.variable} ${inter.variable}`}>
      <body className="bg-[#0D0B09] text-[#EDE8DF] antialiased" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
