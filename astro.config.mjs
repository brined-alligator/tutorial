// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://fanciful-llama-1a3463.netlify.app",
  integrations: [preact()]
});

//-