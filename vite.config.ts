import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import path from "path"

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $assets: path.resolve(__dirname, "./src/assets"),
      $lib: path.resolve(__dirname, "./src/lib"),
      $components: path.resolve(__dirname, "./src/components"),
      $icons: path.resolve(__dirname, "./src/icons"),
      $types: path.resolve(__dirname, "./src/types.ts"),
    },
  },
});
