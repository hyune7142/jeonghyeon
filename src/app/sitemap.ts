import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://loa-hub.com';
  const now = new Date();

  return [{ url: `${baseUrl}/`, lastModified: now, changeFrequency: 'monthly', priority: 1.0 }];
}
