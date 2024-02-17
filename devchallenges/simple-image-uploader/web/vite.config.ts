import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    proxy: {
      "/upload": "http://localhost:3000",
      "/images": "http://localhost:3000",
    },
  },
});
