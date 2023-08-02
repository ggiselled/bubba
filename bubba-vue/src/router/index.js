import { createRouter, createWebHistory } from 'vue-router'
import Paso1 from '../views/Paso1.vue'
import Paso2 from '../views/Paso2.vue'
import Paso3 from '../views/Paso3.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'colecciones',
      component: Paso1,
      props: true
    },
    {
      path: '/producto',
      name: 'producto',
      component: Paso2,
      props: true
    },
    {
      path: '/encuesta',
      name: 'encuesta',
      component: Paso3,
      props: true
    }
  ]
})

export default router
