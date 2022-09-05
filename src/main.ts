import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import router from './router';
import store from './store/index'

import * as echarts from 'echarts'
import './style/element-variables.scss';
import './style/common.scss';
Vue.prototype.$echarts = echarts;





router.beforeEach((to, from, next) => {
  // console.log(to,from,'a','store');
  store.commit('pathnow',to.path)
  
  // 需要验证的路由
  if (to.meta.requireAuth) {
    if (localStorage.getItem('token')) {
      next();
    } else {
      next('/login');
    }
    // 不需要验证的路由
  } else {
    if (to.path === '/login') {
      if (localStorage.getItem('token')) {
        next('/');
      } else {
        next();
      }
    } else {
      next();
    }
  }
});

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
