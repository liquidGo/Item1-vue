import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import router from './router';
// import 'element-ui/lib/theme-chalk/index.css';
import './style/element-variables.scss'
import './style/common.scss'

router.beforeEach((to, from, next) => {
// 需要验证的路由
  if (to.meta.requireAuth) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next('/login')
    }
// 不需要验证的路由
  } else {
    if (to.path === '/login') {
      if(localStorage.getItem('token')){
        next('/')
      }else{
        next()
      }
    } else {
      next()
    }
  }
})


Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')