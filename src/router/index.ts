import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home/Home.vue'
import Login from '../components/pages/Login.vue'
import UserList from '../components/pages/UserList.vue'
import Seller from '../components/pages/Seller.vue'
import Admins from '../components/pages/Admins.vue'
import HomeMain from '../components/pages/HomeMain.vue'
Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: '',
            component: Home,
            meta: {
                requireAuth: true
            },
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: HomeMain,
                    meta: {
                        requireAuth: true
                    },
                },    {
                    path: '/data/users',
                    name: '用户列表',
                    component: UserList,
                    meta: {
                        requireAuth: true
                    },
                }, {
                    path: '/data/seller',
                    name: '商品列表',
                    component: Seller,
                    meta: {
                        requireAuth: true
                    },
                }, {
                    path: '/data/admins',
                    name: '管理员列表',
                    component: Admins,
                    meta: {
                        requireAuth: true
                    },
                }
            
            ]
        }, {
            path: '/login',
            name: '登录',
            component: Login,
        }, {
            path: '*',
            name: '错误',
            component: () => import('../components/pages/Error404.vue')
        }
    ]
})
export default router

