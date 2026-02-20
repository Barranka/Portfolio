import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/pages/HomeView.vue'
import ContactView from '@/pages/ContactView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/contact', component: ContactView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
