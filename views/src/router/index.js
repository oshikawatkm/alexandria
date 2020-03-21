import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("@/views/Top")
    },
    {
      name: "login",
      path: "/login",
      component: () => import("@/views/auth/Login")
    },
    {
      name: "signup",
      path: "/signup",
      component: () => import("@/views/auth/Signup")
    },
    {
      name: "books",
      path: "/books",
      component: () => import("@/views/books/Books")
    },
    {
      name: "book",
      path: "/books/:id",
      component: () => import("@/views/book/Book")
    }
  ]
});