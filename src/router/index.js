import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import RestaurantView from '../views/RestaurantView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView
    },
    {
      path: '/restaurant/:id',
      name: 'resInfo',
      component: RestaurantView,
    },
    
  ]
})


export default router
