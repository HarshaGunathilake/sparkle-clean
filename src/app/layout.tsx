import type { Metadata } from 'next'
import { DM_Sans, Fraunces } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const metadata: Metadata = {
  title: { default: 'Sparkle Clean | Clean Spaces. Better Living.', template: '%s | Sparkle Clean' },
  description: "Melbourne's trusted eco-friendly cleaning specialists for homes and businesses. Professional, reliable, and 100% eco-friendly.",
  keywords: ['cleaning Melbourne', 'eco-friendly cleaning', 'commercial cleaning', 'office cleaning', 'carpet cleaning Melbourne'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
