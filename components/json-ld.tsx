import React from 'react';

export function JsonLd() {
    const onlineBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "OnlineBusiness",
        "name": "Poetic Cloud",
        "alternateName": "Poetic Cloud Design Studio",
        "@id": "https://poeticclouddesign.com/#business",
        "url": "https://poeticclouddesign.com",
        "description": "Bespoke wedding invitations and custom stationery handcrafted in New York City.",
        "email": "Poeticclouddesignstudio@gmail.com",
        "foundingDate": "2022",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Queens",
            "addressRegion": "NY",
            "addressCountry": "US"
        },
        "priceRange": "$$",
        "sameAs": [
            "https://www.etsy.com/shop/PoeticCloud",
            "https://instagram.com/poeticcloud"
        ]
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Custom Wedding Stationery",
        "image": [
            "https://poeticclouddesign.com/images/wedding-menu-placecards.jpg",
            "https://poeticclouddesign.com/images/save-the-dates.jpg",
            "https://poeticclouddesign.com/images/wedding-suites-menu-placecards-2.png"
        ],
        "description": "Bespoke wedding invitations and handcrafted stationery suites tailored to your unique love story.",
        "brand": {
            "@type": "Brand",
            "name": "Poetic Cloud"
        },
        "offers": {
            "@type": "AggregateOffer",
            "url": "https://www.etsy.com/shop/PoeticCloud",
            "priceCurrency": "USD",
            "lowPrice": "25",
            "highPrice": "500"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(onlineBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
        </>
    );
}
