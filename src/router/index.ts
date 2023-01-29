// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    components: {
      default: () => import('@/views/main/Main.vue'),
    },
  },
  {
    path: '/news',
    components: {
      default: () => import('@/views/news/News.vue'),
      LeftSidebar: () => import('@/components/LeftSidebar.vue'),
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // @ts-ignore
  routes,
})

export default router
