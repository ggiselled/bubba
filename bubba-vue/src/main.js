

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './components/store'
import { register } from 'swiper/element/bundle';

// register Swiper custom elements
register();

createApp(App).use(router).use(store).mount('#app')



// const app = createApp(App)

// app.use(router)

// app.mount('#app')
