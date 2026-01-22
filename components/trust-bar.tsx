"use client"

import { motion } from "framer-motion"

const features = [
  "Martha Stewart Weddings",
  "Brides Magazine",
  "The Knot",
  "Style Me Pretty",
]

export function TrustBar() {
  return (
    <section className="border-y border-border bg-card py-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-6"
      >
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-12">
          <span className="text-sm uppercase tracking-[0.15em] text-muted-foreground">
            As Seen In
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {features.map((feature) => (
              <span
                key={feature}
                className="font-serif text-lg tracking-wide text-foreground/70"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
