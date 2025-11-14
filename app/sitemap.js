import { siteConfig } from '@/lib/seo';

export default function sitemap() {
  const routes = ['', '/skills', '/experience', '/projects', '/contact'].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
