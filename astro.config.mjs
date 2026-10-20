import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://saurabh-dohaiya-portfolio-ujio.vercel.app",
  output: "static",
  integrations: [react(), sitemap()],
});
