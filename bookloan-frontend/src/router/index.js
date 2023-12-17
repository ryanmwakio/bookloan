import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "books",
      component: () => import("@/views/BooksView.vue") // Lazy-loaded components
    },
    {
      path: "/:book",
      name: "book",
      component: () => import("@/views/BookView.vue")
    },
    {
      path: "/components",
      name: "components",
      component: () => import("@/views/ComponentsView.vue")
    },
    {
      path: "/:catchAll(.*)",
      component: () => import("@/views/NotFoundView.vue")
    }
  ]
});

export default router;
