import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import('../views/Default'),
        children: [{
            path: "",
            redirect: "home"
        },
        {
            path: 'home',
            component:() => import("../views/Home/Home"),
        },{
            path: 'lowongan',
            component: () => import('../views/Home/Lowongan'),
        },
        {
            path: 'login',
            component: () => import('../views/Home/Login'),
        },
        {
            path: 'register',
            component: () => import('../views/Home/Register'),
        },
        {
            path: 'pengumuman',
            component: () => import('../views/Home/Pengumuman'),
        },
        {
            path: 'detail',
            component: () => import('../views/Home/DetailLowongan'),
        },]
    }
]

const router = new VueRouter({
    routes
})

export default router