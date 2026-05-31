import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isVercel = process.env.VERCEL === "1";

export default defineConfig({
  base: isVercel ? "/" : "/Portfolio/",
  plugins: [react()],
  build: {
    outDir: isVercel ? "dist" : "docs",
    emptyOutDir: true
  }
});
