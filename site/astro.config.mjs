import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://pschroer.de",
  integrations: [react()],
  outDir: "../_site",
  publicDir: "./public",
});
