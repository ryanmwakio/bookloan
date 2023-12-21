import { createRouter, createWebHistory } from "vue-router";
import axios from "axios";

const getUser = async (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  const response = await axios.get(`/user`, config);
  return response.data;
};

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
      component: () => import("@/views/RegisterView.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("@/views/AdminView.vue"),
      meta: {
        requiresAuth: true,
        requiresAdmin: true
      }
    },
    {
      path: "/admin/books",
      name: "admin-books",
      component: () => import("@/views/AdminBooksView.vue"),
      meta: {
        requiresAuth: true,
        requiresAdmin: true
      }
    },
    {
      path: "/admin/books/create",
      name: "admin-books-create",
      component: () => import("@/views/AdminAddBookView.vue"),
      meta: {
        requiresAuth: true,
        requiresAdmin: true
      }
    },
    {
      path: "/admin/books/:book/edit",
      name: "admin-book-edit",
      component: () => import("@/views/AdminUpdateBookView.vue"),
      meta: {
        requiresAuth: true,
        requiresAdmin: true
      }
    },
    {
      path: "/admin/books/loans",
      name: "admin-books-loans",
      component: () => import("@/views/AdminBookLoansView.vue"),
      meta: {
        requiresAuth: true,
        requiresAdmin: true
      }
    },
    {
      path: "/admin/users",
      name: "admin-users",
      component: () => import("@/views/AdminUsersView.vue"),
      meta: {
        requiresAuth: true,
        requiresAdmin: true
      }
    },
    {
      path: "/:catchAll(.*)",
      component: () => import("@/views/NotFoundView.vue")
    }
  ]
});

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem("token");
    if (token) {
      const user = await getUser(token);
      if (user.role !== "admin") {
        next("/");
      }
      next();
    } else {
      next("/login");
    }
  } else {
    // Non-protected route, allow access
    next();
  }
});

export default router;
