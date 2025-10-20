import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const isProd = process.env.NODE_ENV === 'production';

  return {
    rules: isProd
      ? [{ userAgent: '*', allow: '/', disallow: ['/admin'] }]
      : [{ userAgent: '*', disallow: '/' }],
    sitemap: isProd ? 'https://loa-hub.com/sitemap.xml' : undefined,
  };
}
