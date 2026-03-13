import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-serif' });
const _inter = Inter({ subsets: ["latin"], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Poetic Cloud',
  description: 'Crafted for life\'s poetic moments.',
  keywords: ['Custom Wedding Stationery', 'Bespoke Invitations', 'Handmade Wedding Cards', 'Poetic Cloud', 'Etsy Wedding Shop'],
  authors: [{ name: 'Poetic Cloud' }],
  metadataBase: new URL('https://poeticclouddesign.com'),
  openGraph: {
    siteName: 'Poetic Cloud',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Poetic Cloud",
  "alternateName": "Poetic Cloud Design Studio",
  "url": "https://poeticclouddesign.com",
  "logo": "https://poeticclouddesign.com/icon.svg",
  "description": "Bespoke wedding invitations and custom stationery handcrafted in New York City.",
  "email": "Poeticclouddesignstudio@gmail.com",
  "foundingDate": "2022",
  "sameAs": [
    "https://www.etsy.com/shop/PoeticCloud",
    "https://instagram.com/poeticcloud"
  ]
}

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Poetic Cloud",
  "url": "https://poeticclouddesign.com"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_playfair.variable} ${_inter.variable}`}>
      <body className={`font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
