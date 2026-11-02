import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';
const site = process.env.SITE_URL || 'https://cuycoders.com';
// Article URLs carry their publication date as <lastmod>; other pages have no
// reliable modification date, so they omit it rather than report build time.
const blogDir = new URL('./src/content/blog/', import.meta.url);
const lastmodByPath = new Map(
  readdirSync(blogDir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const source = readFileSync(new URL(file, blogDir), 'utf8');
      const locale = source.match(/^locale:\s*(\w+)/m)?.[1];
      const published = source.match(/^published:\s*(\S+)/m)?.[1];
      return [`/${locale}/blog/${file.replace(/\.md$/, '')}/`, published];
    }),
);
export default defineConfig({
  output: 'static',
  site,
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  integrations: site
    ? [
        sitemap({
          filter: (page) => new URL(page).pathname !== '/',
          i18n: { defaultLocale: 'es', locales: { es: 'es', en: 'en' } },
          serialize: (item) => {
            const published = lastmodByPath.get(new URL(item.url).pathname);
            return published
              ? { ...item, lastmod: new Date(published).toISOString() }
              : item;
          },
        }),
      ]
    : [],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: true },
  },
  vite: { plugins: [tailwindcss()] },
});
