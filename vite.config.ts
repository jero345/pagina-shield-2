import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { viteSingleFile } from "vite-plugin-singlefile";

// `--mode single` inlines every asset into one portable HTML file (the "source" deliverable).
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss(), ...(mode === "single" ? [viteSingleFile()] : [])],
}));
