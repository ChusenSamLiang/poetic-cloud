import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function CarePage() {
    const sections = [
        {
            id: "faq",
            title: "Frequently Asked Questions",
            content: [
                {
                    q: "What is your processing time?",
                    a: "Most orders are processed within 3-5 business days. Custom design projects typically take 1-2 weeks for the initial design phase.",
                },
                {
                    q: "Can I cancel my order?",
                    a: "Cancellations are accepted within 12 hours of purchase. After this window, production or design work may have already begun.",
                },
                {
                    q: "Do you offer custom designs?",
                    a: "Yes! We specialize in bespoke stationery. Contact us for a custom consultation to bring your unique vision to life.",
                },
                {
                    q: "What type of paper is used?",
                    a: "Premium Cardstock 110lbs and standard A2 white envelope where applicable.",
                },
                {
                    q: "How much do custom designs cost?",
                    a: "Flexible pricing based on design complexity and materials.",
                },
                {
                    q: "Do you offer calligraphy services?",
                    a: "Yes, we offer calligraphy services for an additional fee.",
                },
                {
                    q: "How far in advance should I order wedding invitations?",
                    a: "As early as possible to avoid delays!",
                },
                {
                    q: "Do you offer expedited service?",
                    a: "Yes, please contact us for more information.",
                },

            ],
        },
        {
            id: "shipping",
            title: "Shipping & Returns",
            content: (
                <div className="space-y-4 text-muted-foreground">
                    <p>
                        <strong>Shipping:</strong> We offer free standard shipping on most orders within the United States.
                        All items ship from our studio in Ozone Park, NY. Expedited shipping options are available at checkout.
                    </p>
                    <p>
                        <strong>International Orders:</strong> We ship worldwide. Please note that buyers are responsible
                        for any customs and import taxes that may apply. We are not responsible for delays due to customs.
                    </p>
                    <p>
                        <strong>Returns:</strong> Due to the personalized and bespoke nature of our stationery,
                        we do not accept returns or exchanges. However, if there is an issue with your order,
                        please contact us within 48 hours of delivery and we will work with you to make it right.
                    </p>
                </div>
            ),
        },
        {
            id: "privacy",
            title: "Privacy Policy",
            content: (
                <div className="space-y-4 text-muted-foreground">
                    <p>
                        At Poetic Cloud, we respect your privacy. We only use your personal information,
                        such as your name, address, and email, to fulfill your order and communicate with
                        you regarding your purchase.
                    </p>
                    <p>
                        We do not share your information with third parties except as necessary to
                        process your payment and ship your order through our production partners.
                        Your data is stored securely and handled in compliance with tax and legal requirements.
                    </p>
                </div>
            ),
        },
    ]

    return (
        <>
            <Navigation />
            <main className="pt-20">
                <header className="bg-card border-b border-border py-24">
                    <div className="mx-auto max-w-7xl px-6 text-center">
                        <h1 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl">
                            FAQs, Shipping, and Privacy Policy
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                            Information about our processes, shipping policies, and how we handle your orders.
                        </p>
                    </div>
                </header>

                <section className="py-24 bg-background">
                    <div className="mx-auto max-w-4xl px-6 divide-y divide-border">
                        {sections.map((section) => (
                            <div key={section.id} id={section.id} className="py-16 first:pt-0 last:pb-0">
                                <h2 className="font-serif text-2xl tracking-wide text-foreground mb-8 text-center sm:text-left">
                                    {section.title}
                                </h2>
                                {Array.isArray(section.content) ? (
                                    <dl className="grid gap-10">
                                        {section.content.map((item, i) => (
                                            <div key={i} className="space-y-3">
                                                <dt className="font-medium text-foreground">{item.q}</dt>
                                                <dd className="text-muted-foreground">{item.a}</dd>
                                            </div>
                                        ))}
                                    </dl>
                                ) : (
                                    section.content
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
