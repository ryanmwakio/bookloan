import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "books",
      component: () => import("@/views/BooksView.vue") // Lazy-loaded for performance
    },
    {
      path: "/components",
      name: "components",
      component: () => import("@/views/ComponentsView.vue")
    }
  ]
});

export default router;
