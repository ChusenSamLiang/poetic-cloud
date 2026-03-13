"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star } from "lucide-react"

export function AboutContent() {
    return (
        <>
            <section className="relative py-24 bg-background overflow-hidden">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-16 lg:grid-cols-2 items-center">
                        <div>
                            <span className="mb-4 inline-block text-sm uppercase tracking-[0.2em] text-primary">
                                Our Story
                            </span>
                            <h1 className="font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
                                Handcrafted Wedding Invitations & Bespoke Stationery Made in New York - Our Story
                            </h1>
                            <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
                                <p>
                                    Founded in 2022, Poetic Cloud Design Studio was born from a deep love for art,
                                    design, and the timeless elegance of fine paper goods. Based in New York,
                                    we specialize in creating bespoke wedding invitations and custom stationery
                                    that tells your unique story.
                                </p>
                                <p>
                                    Our founder, Siyun, established the studio with a simple mission:
                                    to transform life's most poetic moments into tangible keepsakes.
                                    What started as a passion for original artwork has grown into a
                                    dedicated design practice that celebrates life's biggest milestones.
                                </p>
                                <p>
                                    Poetic Cloud Design Studio is a bespoke wedding stationery company founded in 2022 and based in Queens, New York. We specialize in custom wedding invitations, handcrafted invitation suites, and fine paper goods for couples worldwide.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                                <Image
                                    src="/images/about-studio.jpg"
                                    alt="Poetic Cloud Design Studio — custom wedding invitation workspace in New York"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 h-48 w-48 rounded-sm bg-primary/5 -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-card border-y border-border">
                <div className="mx-auto max-w-3xl px-6 text-center">
                    <h2 className="font-serif text-3xl tracking-wide text-foreground">
                        Our Commitment to Handcrafted Wedding Invitations & Stationery
                    </h2>
                    <p className="mt-6 text-lg text-muted-foreground italic">
                        "We believe that the invitation is the first chapter of your celebration's story.
                        Our goal is to make it as breathtaking and unique as the event itself."
                    </p>
                    <p className="mt-4 text-sm uppercase tracking-widest text-primary">— Siyun Z, Founder</p>
                </div>
            </section>

            <section className="py-24 bg-background">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-3xl tracking-wide text-foreground mb-4">
                            Love Notes from our Etsy Shop
                        </h2>
                        <p className="text-muted-foreground">Kind words from our wonderful clients</p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            {
                                name: "Skylar",
                                text: "Absolutely loved this! It was so quick to set up and it's great quality. Highly recommend for any wedding planning!",
                                product: "Minimalist Wedding Thank You Cards"
                            },
                            {
                                name: "Kaelee",
                                text: "Thank you for the customization and super fast response, creation and ship time! Can't wait to send these out!",
                                product: "Bespoke Stationery Set"
                            },
                            {
                                name: "Morgan",
                                text: "Very cute cards, excited to use after my baby shower. The paper quality and design are just perfect.",
                                product: "Personalized Stationery"
                            }
                        ].map((review, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-sm border border-border bg-card relative"
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                    ))}
                                </div>
                                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                                    "{review.text}"
                                </p>
                                <div>
                                    <p className="font-medium text-foreground">{review.name}</p>
                                    <p className="text-xs text-primary uppercase tracking-widest mt-1">
                                        {review.product}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
