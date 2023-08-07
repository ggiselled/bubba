
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './components/store'
import './assets/style/globals.scss'

// Importa las funciones del plugin PWA
import { registerSW } from 'virtual:pwa-register'

// Registra el service worker
const updateSW = registerSW({
  onNeedRefresh() {
    // Cuando haya una nueva versión del service worker y necesites recargar la página
    console.log("Una nueva versión está disponible. Por favor, refresca la página.");
  },
  onOfflineReady() {
    // Cuando el contenido esté listo para funcionar offline
    console.log("El contenido está listo para ser usado offline.");
  }
})

const app = createApp(App, {}, {
  compilerOptions: {
    isCustomElement: tag => tag.startsWith('swiper-')
  }
})

app.use(store)
app.use(router)

app.mount('#app')

