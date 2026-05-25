import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  site: 'https://multisemar.com',
  compressHTML: true,
  integrations: [sitemap()],
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
});
