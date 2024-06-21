import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["mathjs"], // Mark 'mathjs' as external
    },
  },
  optimizeDeps: {
    include: ["mathjs"], // Include 'mathjs' in optimized dependencies
  },
});
