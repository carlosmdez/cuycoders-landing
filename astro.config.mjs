import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
const site = process.env.SITE_URL;
export default defineConfig({
  output: 'static',
  site,
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  integrations: site
    ? [sitemap({ filter: (page) => new URL(page).pathname !== '/' })]
    : [],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: true },
  },
  vite: { plugins: [tailwindcss()] },
});
