import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/etomin': {
        target: 'https://pagos.etomin.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/etomin/, '/api/v1'),
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq) => {
            proxyReq.setHeader('User-Agent', 'curl/8.0');
            proxyReq.setHeader('Origin', 'https://pagos.etomin.com');
          });
        }
      }
    }
  }
})