import React from 'react';

export function JsonLd() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Poetic Cloud",
        "image": "https://poeticcloud.com/images/hero-invitation.jpg",
        "@id": "https://poeticcloud.com",
        "url": "https://poeticcloud.com",
        "telephone": "",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Queens, NY",
            "addressLocality": "New York",
            "postalCode": "11101",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 0,
            "longitude": 0
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "09:00",
            "closes": "17:00"
        },
        "sameAs": [
            "https://www.etsy.com/shop/PoeticCloud",
            "https://instagram.com/poeticcloud"
        ]
    };

    const productSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Custom Wedding Stationery",
        "image": [
            "https://poeticcloud.com/images/hero-invitation.jpg",
            "https://poeticcloud.com/images/save-the-dates.jpg",
            "https://poeticcloud.com/images/wedding-suites.jpg"
        ],
        "description": "Bespoke invitations and handmade wedding cards tailored to your unique love story.",
        "brand": {
            "@type": "Brand",
            "name": "Poetic Cloud"
        },
        "offers": {
            "@type": "AggregateOffer",
            "url": "https://www.etsy.com/shop/PoeticCloud",
            "priceCurrency": "USD",
            "lowPrice": "5",
            "highPrice": "500",
            "offerCount": "50"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
        </>
    );
}
