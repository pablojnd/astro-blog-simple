import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [],
  server: { port: 8080, host: true },
});
