import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/My-Portfolio/',  // Add this line to set the base URL for GitHub Pages
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
