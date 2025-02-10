import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react(), runtimeErrorOverlay(), themePlugin()],
  root: path.resolve(__dirname, "client"),  // Explicit root directory
  base: '/',  // Base path for assets
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared")
    }
  },

  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "client/index.html")  // Explicit entry point
      },
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          vendor: ['lodash', 'moment']
        }
      }
    }
  },

  optimizeDeps: {
    include: ['react', 'react-dom']
  }
});