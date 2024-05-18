import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  build: {
    outDir: 'dist',
  },
  pages: {
    index: 'src/pages/index.astro',
    home: 'src/pages/home.astro',
    fan: 'src/pages/fan.astro',
  },
  image: {
    service: {
      name: 'astro/assets/services/passthrough',
    },
  },
});