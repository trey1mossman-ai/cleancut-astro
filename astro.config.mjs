// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.cleancutservice.com',
  server: {
    port: 3000
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
