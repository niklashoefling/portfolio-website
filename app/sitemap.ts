import type { MetadataRoute } from 'next';
import { projects } from '@/lib/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://niklas-hoefling.de';

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, priority: 1 },
    { url: `${base}/contact`, priority: 0.8 },
    { url: `${base}/impressum`, priority: 0.3 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects
    .filter((p) => p.slug && !p.isComingSoon)
    .map((p) => ({ url: `${base}/projects/${p.slug}`, priority: 0.7 }));

  return [...staticRoutes, ...projectRoutes];
}
