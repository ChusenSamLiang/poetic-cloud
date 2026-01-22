import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-serif' });
const _inter = Inter({ subsets: ["latin"], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Poetic Cloud | Custom Wedding Stationery & Bespoke Invitations',
  description: 'Exquisite custom wedding invitations & handmade cards crafted for life\'s poetic moments. Shop our bespoke stationery collection on Etsy.',
  keywords: ['Custom Wedding Stationery', 'Bespoke Invitations', 'Handmade Wedding Cards', 'Poetic Cloud', 'Etsy Wedding Shop'],
  authors: [{ name: 'Poetic Cloud' }],
  metadataBase: new URL('https://poeticcloud.com'), // Replace with actual domain
  openGraph: {
    title: 'Poetic Cloud | Custom Wedding Stationery',
    description: 'Bespoke wedding invitations and handmade cards for life\'s most poetic moments.',
    url: 'https://poeticcloud.com',
    siteName: 'Poetic Cloud',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Poetic Cloud | Custom Wedding Stationery',
    description: 'Bespoke wedding invitations and handmade cards for life\'s most poetic moments.',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_playfair.variable} ${_inter.variable}`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
