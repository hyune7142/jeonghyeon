import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jeonghyeon.com';
  const now = new Date();

  return [{ url: `${baseUrl}/`, lastModified: now, changeFrequency: 'monthly', priority: 1.0 }];
}
