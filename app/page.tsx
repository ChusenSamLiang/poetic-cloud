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
  description: 'Exquisite custom wedding invitations & handmade cards crafted for life\'s poetic moments. Shop our bespoke stationery collection on Etsy.',
  openGraph: {
    title: 'Poetic Cloud | Custom Wedding Stationery',
    description: 'Bespoke wedding invitations and handmade cards for life\'s most poetic moments.',
  },
  twitter: {
    title: 'Poetic Cloud | Custom Wedding Stationery',
    description: 'Bespoke wedding invitations and handmade cards for life\'s most poetic moments.',
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
