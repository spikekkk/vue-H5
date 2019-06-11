import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    component: resolve => require(["../components/login.vue"], resolve)
  }
]

const router = new Router({
  mode: "hash",
  routes: routes
})

export default router
