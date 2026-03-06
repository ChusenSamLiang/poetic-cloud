import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutPage() {
    return (
        <>
            <Navigation />
            <main className="pt-20">
                <section className="relative py-24 bg-background overflow-hidden">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid gap-16 lg:grid-cols-2 items-center">
                            <div>
                                <span className="mb-4 inline-block text-sm uppercase tracking-[0.2em] text-primary">
                                    Our Story
                                </span>
                                <h1 className="font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
                                    Artisans of the Written Invitation
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
                                        Every suite we design is a collaborative journey. We combine
                                        handcrafted design with premium materials, collaborating with
                                        artisanal production partners across the United States to ensure
                                        that every piece we deliver meets the highest standards of quality
                                        and artisan craftsmanship.
                                    </p>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                                    <Image
                                        src="/images/about-studio.jpg"
                                        alt="Artisan workspace with fine paper and design tools"
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
                            Our Commitment
                        </h2>
                        <p className="mt-6 text-lg text-muted-foreground italic">
                            "We believe that the invitation is the first chapter of your celebration's story.
                            Our goal is to make it as breathtaking and unique as the event itself."
                        </p>
                        <p className="mt-4 text-sm uppercase tracking-widest text-primary">— Siyun Z, Founder</p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
