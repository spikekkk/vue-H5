import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const routes = [{
  path: '/',
  redirect:"/login",
},{
  path:"/login",
  name:"login",
  component: resolve => require(["../components/login.vue"],resolve)
}, {
  path: "/home",
  name: "home",
  component: resolve => require(["../components/home.vue"], resolve),
//   children:[{
//     path:"/",
//     component:resolve => require(["../components/pages/index.vue"],resolve)
//   }]
}]

const router = new Router({
  mode: 'history',
  routes: routes
})

export default router
