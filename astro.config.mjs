import { defineConfig } from 'astro/config';
import astroI18next from "astro-i18next";
import betterImageService from "astro-better-image-service";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://antoine-blumenroeder.github.io',
  base: '/',
  integrations: [astroI18next(), mdx(), betterImageService()],
});