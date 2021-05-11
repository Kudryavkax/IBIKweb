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
        },
        {
            path: 'pengumuman',
            component: () => import('../views/Home/Pengumuman'),
        },
        {
            path: 'lowongan',
            component: () => import('../views/Home/Lowongan'),
        },
        {
            path: 'detail',
            component: () => import('../views/Home/DetailLowongan'),
        },
        {
            path: 'register',
            component: () => import('../views/Register/RegisterMhs'),
        },
        {
            path: 'daftar',
            component: () => import('../views/Register/DaftarPer'),
        },]
        
    },
    {
        path: '/login',
        component: () => import('../views/Default'),
        children: [{
            path: '',
            component: () => import('../views/Login/Login'),
        },{
            path: 'Admin',
            component: () => import('../views/Login/LoginAdAss'),
        },{
            path: 'Mahasiswa',
            component: () => import('../views/Login/LoginMahasiswa'),
        },{
            path: 'Perusahaan',
            component: () => import('../views/Login/LoginPerusahaan'),
        },]
    },
    {
        path: '/admin',
        component: () => import('../views/Admin'),
        children: [{
            path: '',
            component: () => import('../views/Admin/Home'),
        },]
    },
]

const router = new VueRouter({
    routes
})

export default router