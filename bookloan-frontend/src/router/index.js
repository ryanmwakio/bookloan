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
      path: "/login",
      name: "login",
      component: () => import("@/views/LoginView.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/RegisterView.vue")
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("@/views/AdminView.vue")
    },
    {
      path: "/admin/books",
      name: "admin-books",
      component: () => import("@/views/AdminBooksView.vue")
    },
    {
      path: "/admin/books/create",
      name: "admin-books-create",
      component: () => import("@/views/AdminAddBookView.vue")
    },
    {
      path: "/admin/books/:book/edit",
      name: "admin-book-edit",
      component: () => import("@/views/AdminUpdateBookView.vue")
    },
    {
      path: "/admin/books/loans",
      name: "admin-books-loans",
      component: () => import("@/views/AdminBookLoansView.vue")
    },
    {
      path: "/admin/users",
      name: "admin-users",
      component: () => import("@/views/AdminUsersView.vue")
    },
    {
      path: "/:catchAll(.*)",
      component: () => import("@/views/NotFoundView.vue")
    }
  ]
});

export default router;
