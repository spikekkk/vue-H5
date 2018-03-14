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
  children:[{
  	path:"/",
  	redirect:"/home/index"
  },{
    path:"/home/index",
    component:resolve => require(["../components/pages/index.vue"],resolve)
  },{
    path:"/home/yuyue",
    component:resolve => require(["../components/pages/yuyue.vue"],resolve)
  },{
    path:"/home/me",
    component:resolve => require(["../components/pages/me.vue"],resolve)
  },{
    path:"/home/equipment",
    component:resolve => require(["../components/pages/equipment.vue"],resolve)
  }]
}]

const router = new Router({
  mode: 'history',
  routes: routes
})

export default router
