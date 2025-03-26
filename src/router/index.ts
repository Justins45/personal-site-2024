import { createRouter, createWebHistory } from "vue-router/auto"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to: any, from: any, savedPosition: any) {
    // always scroll to top
    return { top: 0 }
  }
})

router.beforeEach((to: any, from: any) => {
  document.title = to.meta?.title ?? "Justin Shaw"
})

// navigation when navigating to a specific URL
if (window.location.pathname !== "/") {
  const routeString = window.location.href.replace(window.location.origin, "")
  const route = router.resolve(routeString)
  if (route.matched.length > 0) {
    router.replace({ path: routeString })
  }
}
export default router
