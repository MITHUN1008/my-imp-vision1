
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    host: true
  },
  // Handle the remix vite:dev command by making this compatible
  build: {
    outDir: 'build/client',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
})
