import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Keep the production site URL here. Importing src/content/site.ts from
// astro.config.mjs can fail before Astro's TypeScript transforms are active.
export default defineConfig({
  site: 'https://nahimahmed.co.uk',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
