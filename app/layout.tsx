import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'

import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Balika Vadhu - Timeless Style for the Modern Woman | Jaipur',
  description:
    'A trusted women\'s clothing store in Jaipur offering carefully curated collections with premium fabrics and elegant designs. Ethnic wear, formal wear, and festive collections.',
  keywords: 'women clothing store Jaipur, ethnic wear shop, ladies clothing near Pink City, Tripolia Bazar, sarees, lehengas',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
