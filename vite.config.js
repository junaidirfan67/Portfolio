import { resolve } from "node:path";
import { defineConfig } from "vite";

const isVercel = process.env.VERCEL === "1";

export default defineConfig({
  base: isVercel ? "/" : "/Portfolio/",
  build: {
    outDir: isVercel ? "dist" : "docs",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        skills: resolve(__dirname, "skills.html"),
        projects: resolve(__dirname, "projects.html"),
        experience: resolve(__dirname, "experience.html")
      }
    }
  }
});
