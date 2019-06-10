// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./App"
import router from "./router"
import "../static/js/index"
Vue.config.productionTip = false
import MintUI from "mint-ui"
import "mint-ui/lib/style.css"
Vue.use(MintUI)
import axios from "axios"
Vue.prototype.$axios = axios
axios.defaults.baseURL = "/api"
axios.defaults.headers.post["Content-Type"] = "application/json"
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
})
