import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import viteImagemin from 'vite-plugin-imagemin'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.png'],
  plugins: [
    vue(),
    vueDevTools(),
    viteImagemin({
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.7, 0.9] },
      webp: { quality: 80 },
    }),
  ],
  server: {
    watch: {
      usePolling: true, // Dodatkowe sprawdzanie zmian
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
