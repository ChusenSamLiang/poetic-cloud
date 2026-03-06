import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: ['GPTBot', 'Googlebot', 'PerplexityBot'],
                allow: '/',
            },
            {
                userAgent: '*',
                allow: '/',
            },
        ],
        sitemap: 'https://poeticclouddesign.com/sitemap.xml',
    }
}
