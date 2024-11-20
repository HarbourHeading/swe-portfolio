import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    port: 5000,
    strictPort: true,
  },
  server: {
    headers: {
        "Strict-Transport-Security": "max-age=86400; includeSubDomains",
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "DENY",
        "X-XSS-Protection": "1; mode=block",
        "Content-Security-Policy": "frame-ancestors 'self'",
    },
    port: 5000,
    strictPort: true,
  },
});
