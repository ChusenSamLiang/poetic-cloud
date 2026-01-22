"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const articles = [
  {
    id: 1,
    title: "How to Choose Your Wedding Invitation Suite",
    excerpt:
      "A comprehensive guide to selecting paper, typography, and design elements that reflect your celebration.",
    image: "/images/journal-1.jpg",
    category: "Planning Tips",
  },
  {
    id: 2,
    title: "The Art of Calligraphy in Modern Weddings",
    excerpt:
      "Discover how hand-lettered details can elevate your stationery from beautiful to unforgettable.",
    image: "/images/journal-2.jpg",
    category: "Design Insights",
  },
  {
    id: 3,
    title: "Stationery Timeline: When to Order What",
    excerpt:
      "Never miss a deadline with our complete guide to wedding stationery timing.",
    image: "/images/journal-3.jpg",
    category: "Planning Tips",
  },
]

export function JournalSection() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm uppercase tracking-[0.2em] text-primary">
            The Journal
          </span>
          <h2 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl text-balance">
            Wedding Planning Insights
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Expert advice and inspiration to guide you through your stationery
            journey and beyond.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <article>
                <Card
                  className="group cursor-pointer overflow-hidden border-0 bg-card shadow-md transition-shadow hover:shadow-xl"
                  aria-label={`Read article: ${article.title}`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs uppercase tracking-[0.15em] text-primary">
                      {article.category}
                    </span>
                    <h3 className="mt-2 font-serif text-lg tracking-wide text-foreground">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm text-primary transition-colors group-hover:text-primary/80">
                      Read More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Card>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
