import Vue from 'vue'
import App from './App'
import routes from './router/route-config'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElementUI)

var router = new VueRouter({
    mode: 'history',
    routes: routes
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})