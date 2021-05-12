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
        path: '/pengumuman',
        component: () => import('../views/Default'),
        children: [{
            path: '',
            component: () => import('../views/Home/ListPengumuman'),
        },{
            path: ':id',
            component: () => import('../views/Home/DetailPengumuman'),
        },]
    },
    {
        path: '/lowongan',
        component: () => import('../views/Default'),
        children: [{
            path: '',
            component: () => import('../views/Home/ListLowongan'),
        },{
            path: ':id',
            component: () => import('../views/Home/DetailLowongan'),
        },]
    },
    {
        path: '/admin',
        component: () => import('../views/Admin'),
        children: [{
            path: '',
            component: () => import('../views/Admin/Home'),
        },
        {
            path: 'setting',
            component: () => import('../views/Setting/Index'),
            children: [{
                path: 'nama',
                component: () => import('../views/Setting/Nama'),
            },{
                path: 'email',
                component: () => import('../views/Setting/Email'),
            },{
                path: 'password',
                component: () => import('../views/Setting/Password'),
            },]
        }]
    },
]

const router = new VueRouter({
    routes
})

export default router