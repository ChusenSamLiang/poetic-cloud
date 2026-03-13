"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { HERO_CONTENT, SITE_CONFIG } from "@/lib/constants"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-20">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16">
        {/* Left Side - Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <span className="mb-4 text-sm uppercase tracking-[0.2em] text-primary">
            {HERO_CONTENT.badge}
          </span>
          <h1 className="font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            {HERO_CONTENT.title}
          </h1>
          <p className="mt-4 font-serif text-xl italic text-muted-foreground">
            {HERO_CONTENT.subtitle}
          </p>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            {HERO_CONTENT.description}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="text-base" asChild>
              <Link href={SITE_CONFIG.etsyUrl} target="_blank" rel="noopener noreferrer">
                {HERO_CONTENT.primaryCta}
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative flex items-center justify-center"
        >
          <div className="relative aspect-[4/5] w-full max-w-lg overflow-hidden rounded-sm shadow-2xl">
            <Image
              src="/images/wedding-menu-placecards.jpg"
              alt="Elegant wedding invitation suite featuring calligraphy and fine paper"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* Decorative Element */}
          <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-sm bg-primary/10" aria-hidden="true" />
          <div className="absolute -left-4 -top-4 h-24 w-24 rounded-sm border border-primary/20" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  )
}
