import type { Metadata } from 'next'
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutContent } from "./about-content"

export const metadata: Metadata = {
    title: 'About Poetic Cloud | Bespoke Wedding Invitation Studio | Queens, New York',
    description: 'Meet Poetic Cloud — a Queens, New York bespoke wedding stationery studio founded in 2022. Handcrafted wedding invitations and fine paper goods for life\'s biggest milestones.',
    alternates: {
        canonical: 'https://poeticclouddesign.com/about',
    },
    openGraph: {
        title: 'About Poetic Cloud | Bespoke Wedding Invitation Studio | Queens, New York',
        description: 'Meet Poetic Cloud — a Queens, New York bespoke wedding stationery studio founded in 2022. Handcrafted wedding invitations and fine paper goods for life\'s biggest milestones.',
        images: [{ url: '/images/wedding-menu-placecards.jpg' }],
    },
    twitter: {
        title: 'About Poetic Cloud | Bespoke Wedding Invitation Studio | Queens, New York',
        description: 'Meet Poetic Cloud — a Queens, New York bespoke wedding stationery studio founded in 2022. Handcrafted wedding invitations and fine paper goods for life\'s biggest milestones.',
        images: ['/images/wedding-menu-placecards.jpg'],
    },
}

const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "name": "Siyun Z",
            "jobTitle": "Founder",
            "worksFor": {
                "@type": "Organization",
                "name": "Poetic Cloud",
                "url": "https://poeticclouddesign.com"
            }
        },
        {
            "@type": "Organization",
            "name": "Poetic Cloud",
            "url": "https://poeticclouddesign.com",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "bestRating": "5",
                "reviewCount": "3"
            },
            "review": [
                {
                    "@type": "Review",
                    "author": { "@type": "Person", "name": "Skylar" },
                    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                    "reviewBody": "Absolutely loved this! It was so quick to set up and it's great quality. Highly recommend for any wedding planning!",
                    "name": "Minimalist Wedding Thank You Cards"
                },
                {
                    "@type": "Review",
                    "author": { "@type": "Person", "name": "Kaelee" },
                    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                    "reviewBody": "Thank you for the customization and super fast response, creation and ship time! Can't wait to send these out!",
                    "name": "Bespoke Stationery Set"
                },
                {
                    "@type": "Review",
                    "author": { "@type": "Person", "name": "Morgan" },
                    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                    "reviewBody": "Very cute cards, excited to use after my baby shower. The paper quality and design are just perfect.",
                    "name": "Personalized Stationery"
                }
            ]
        }
    ]
}

export default function AboutPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
            />
            <Navigation />
            <main className="pt-20">
                <AboutContent />
            </main>
            <Footer />
        </>
    )
}
