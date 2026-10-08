import type { MetadataRoute } from 'next';
import { company } from '@/lib/company';
import { clientWork, products } from '@/lib/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { path: '', priority: 1 },
    { path: '/work', priority: 0.9 },
    { path: '/products', priority: 0.8 },
    { path: '/process', priority: 0.8 },
    { path: '/about', priority: 0.7 },
    { path: '/company', priority: 0.7 },
    { path: '/contact', priority: 0.9 },
    { path: '/legal/terms', priority: 0.3 },
    { path: '/legal/privacy', priority: 0.3 },
  ].map(route => ({
    url: `${company.siteUrl}${route.path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: route.priority,
  }));

  const projectRoutes = [...clientWork, ...products].map(project => ({
    url: `${company.siteUrl}/work/${project.slug}`,
    lastModified: new Date(`${project.year}-01-01`),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
