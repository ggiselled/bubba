import { createRouter, createWebHistory } from 'vue-router'
import FirstPage from '../views/FirstPage.vue'
import SecondPage from '../views/SecondPage.vue'
import FormPage from '../views/FormPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'colecciones',
      component: FirstPage,
      props: true
    },
    {
      path: '/producto',
      name: 'producto',
      component: SecondPage,
      props: true
    },
    {
      path: '/encuesta',
      name: 'encuesta',
      component: FormPage,
      props: true
    }
  ]
})

export default router
