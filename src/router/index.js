import { createRouter, createWebHistory } from 'vue-router'

// import HomeView from '@/view/HomeView.vue'
const routes = [
  { path: '/', component: ()=> import("@/view/HomeView.vue") },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})