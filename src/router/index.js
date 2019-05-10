import Vue from 'vue'
import Router from 'vue-router'
import Login from "@/views/Login";
import Admin from "@/views/Admin";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/admin",
      name: "Admin",
      component: Admin
    }
  ]
});
