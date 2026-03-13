"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/card"

const products = [
  {
    id: 1,
    title: "Save the Dates",
    description:
      "Announce your special day with elegance. Custom designs that capture your unique style.",
    image: "/images/save-the-dates.jpg",
    alt: "Custom save the date cards by Poetic Cloud Design Studio, New York",
  },
  {
    id: 2,
    title: "Wedding Suites",
    description:
      "Complete invitation suites featuring coordinated pieces from save the dates to day-of stationery.",
    image: "/images/wedding-suites-menu-placecards-2.png",
    alt: "Bespoke wedding invitation suite — handcrafted fine paper stationery by Poetic Cloud",
  },
  {
    id: 3,
    title: "Custom Stationery",
    description:
      "Personal correspondence deserves beautiful paper. Monograms, thank you cards, and more.",
    image: "/images/custom-stationery-placecards.jpg",
    alt: "Custom monogram stationery and thank you cards | Poetic Cloud NYC",
  },
]

export function ProductGallery() {
  return (
    <section id="collections" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm uppercase tracking-[0.2em] text-primary">
            Our Collections
          </span>
          <h2 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl text-balance">
            Curated Paper Goods
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Each piece is thoughtfully designed and meticulously crafted to
            reflect the beauty of your celebration.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Card
                className="group cursor-pointer overflow-hidden border-0 bg-card shadow-md transition-shadow hover:shadow-xl"
                aria-label={`View details for ${product.title}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl tracking-wide text-foreground">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
