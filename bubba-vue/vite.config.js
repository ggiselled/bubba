import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        
      },
      workbox: {
        globDirectory: 'public/',
        globPatterns: ['**/*.{jpg,png}'], // Tipos de archivo que quiero que me guarde
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, //Configuración de peso de los archivos en caché 

      },
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});







