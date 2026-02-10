// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.cleancutservice.com',
  trailingSlash: 'always',
  server: {
    port: 3000
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/thank-you/') &&
        !page.includes('/plan/')
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
