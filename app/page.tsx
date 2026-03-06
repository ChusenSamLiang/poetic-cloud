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
  title: 'Poetic Cloud | Custom Wedding Stationery & Bespoke Invitations',
  description: 'Handcrafted bespoke wedding invitations designed in New York City. Custom stationery suites for your most meaningful moments. Shop on Etsy.',
  openGraph: {
    title: 'Poetic Cloud | Custom Wedding Stationery & Bespoke Invitations',
    description: 'Handcrafted bespoke wedding invitations designed in New York City. Custom stationery suites for your most meaningful moments. Shop on Etsy.',
  },
  twitter: {
    title: 'Poetic Cloud | Custom Wedding Stationery & Bespoke Invitations',
    description: 'Handcrafted bespoke wedding invitations designed in New York City. Custom stationery suites for your most meaningful moments. Shop on Etsy.',
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
