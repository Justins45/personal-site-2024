import { createRouter, createWebHistory } from "vue-router/auto"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to: any, from: any, savedPosition: any) {
    // always scroll to top
    return { top: 0 }
  }
})

export default router
