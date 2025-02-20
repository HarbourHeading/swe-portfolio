import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import csp from "vite-plugin-csp-guard";

export default defineConfig({
  plugins: [react(),
    csp({
      dev: {
        run: true,
        outlierSupport: ["scss"]
      },
      policy: {
        "script-src": ["'self'"],
        "font-src": ["'self'", "data:"],
        "img-src": ["'self'", "data:"],
        'base-uri': ["'none'"],
        "style-src": ["'self'"],
        "object-src": ["'none'"],
        "form-action": ["'none'"],
      },
      build: {
        sri: true
      }
    }),
  ],
  preview: {
    host: true,
    port: 3000,
    strictPort: true,
  },
  server: {
    host: true,
    port: 3000,
    strictPort: true,
  },
});
