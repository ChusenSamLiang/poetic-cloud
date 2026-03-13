import type { Metadata } from 'next'
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { TrustBar } from "@/components/trust-bar"
import { ProductGallery } from "@/components/product-gallery"
import { ProcessSection } from "@/components/process-section"
import { JournalSection } from "@/components/journal-section"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"

export const metadata: Metadata = {
  title: 'Poetic Cloud | Bespoke Wedding Invitations & Custom Stationery | New York City',
  description: 'Handcrafted bespoke wedding invitations designed in New York City. Custom stationery suites for your most meaningful moments. Shop on Etsy.',
  alternates: {
    canonical: 'https://poeticclouddesign.com',
  },
  openGraph: {
    title: 'Poetic Cloud | Bespoke Wedding Invitations & Custom Stationery | New York City',
    description: 'Handcrafted bespoke wedding invitations designed in New York City. Custom stationery suites for your most meaningful moments. Shop on Etsy.',
    images: [{ url: '/images/wedding-menu-placecards.jpg' }],
  },
  twitter: {
    title: 'Poetic Cloud | Bespoke Wedding Invitations & Custom Stationery | New York City',
    description: 'Handcrafted bespoke wedding invitations designed in New York City. Custom stationery suites for your most meaningful moments. Shop on Etsy.',
    images: ['/images/wedding-menu-placecards.jpg'],
  },
}

export default function Home() {
  return (
    <>
      <JsonLd />
      <header>
        <Navigation />
      </header>
      <main>
        <HeroSection />
        <TrustBar />
        <section aria-label="Collections">
          <ProductGallery />
        </section>
        <section aria-label="Our Process">
          <ProcessSection />
        </section>
        <section aria-label="Journal">
          <JournalSection />
        </section>
      </main>
      <Footer />
    </>
  )
}
