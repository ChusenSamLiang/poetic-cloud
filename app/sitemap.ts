import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://poeticcloud.com',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://poeticcloud.com/#collections',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://poeticcloud.com/#process',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
    ]
}
