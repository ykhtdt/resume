// @ts-check
import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import react from "@astrojs/react"

const isProd = import.meta.env.PROD

// https://astro.build/config
export default defineConfig({
  experimental: {
    svg: true,
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  devToolbar: {
    enabled: !isProd,
  },
})
