import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { TrustBar } from "@/components/trust-bar"
import { ProductGallery } from "@/components/product-gallery"
import { ProcessSection } from "@/components/process-section"
import { JournalSection } from "@/components/journal-section"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"

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
