

// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './components/store'
// import { register } from 'swiper/element/bundle';


// register();

// createApp(App).use(router).use(store).mount('#app')


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './components/store'
import './assets/style/globals.scss';



const app = createApp(App, {}, {
  compilerOptions: {
    isCustomElement: tag => tag.startsWith('swiper-')
  }
})

app.use(store)
app.use(router)

app.mount('#app')





// const app = createApp(App)

// app.use(router)

// app.mount('#app')
