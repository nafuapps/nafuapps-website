import { defineConfig, fontProviders } from "astro/config"

export default defineConfig({
  site: "https://nafuapps.in",
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Montserrat",
      cssVariable: "--font-montserrat",
      weights: ["100 900"],
    },
  ],
})
