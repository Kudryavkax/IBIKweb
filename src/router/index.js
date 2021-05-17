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
        },
        {
            path: 'admin',
            component: () => import('../views/Login/LoginAdAss'),
        },
        {
            path: 'mahasiswa',
            component: () => import('../views/Login/LoginMahasiswa'),
        },
        {
            path: 'perusahaan',
            component: () => import('../views/Login/LoginPerusahaan'),
        },]
    },

    {
        path: '/pengumuman',
        component: () => import('../views/Default'),
        children: [{
            path: '',
            component: () => import('../views/Home/ListPengumuman'),
        },
        {
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
        },
        {
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
            path: 'periode',
            component: () => import('../views/Admin/Periode/Index'),
            children: [{
                path: '',
                component: () => import('../views/Admin/Periode/Periode'),
            },
            {
                path: 'add',
                component: () => import('../views/Admin/Periode/PeriodeAdd'),
            },
            {
                path: ':id/lowongan',
                component: () => import('../views/Admin/Periode/LowonganPeriode'),
            },
            {
                path: ':id/datamahasiswa',
                component: () => import('../views/Admin/Periode/DataMahasiswa'),
            },
            {
                path: ':id/datalowongan',
                component: () => import('../views/Admin/Periode/DataLowongan'),
            },
            {
                path: ':id/datainternship',
                component: () => import('../views/Admin/Periode/DataInternship'),
            },
            {
                path: ':id/dataupload',
                component: () => import('../views/Admin/Periode/DataUpload'),
            },
            {
                path: 'masadaftar',
                component: () => import('../views/Admin/Periode/MasaDaftar'),
            },
            {
                path: 'masainput',
                component: () => import('../views/Admin/Periode/MasaInput'),
            },
            {
                path: 'input',
                component: () => import('../views/Admin/Periode/InputData'),
            },
            {
                path: 'asisten',
                component: () => import('../views/Admin/Periode/Asisten'),
            },
            {
                path: 'asisten/add',
                component: () => import('../views/Admin/Periode/InputAsisten'),
            },
            {
                path: 'asisten/edit/:id',
                component: () => import('../views/Admin/Periode/InputAsisten'),
            },]
        },
        {
            path: 'perusahaan/data',
            component: () => import('../views/Admin/Perusahaan/Data'),
        },
        {
            path: 'perusahaan/data/add',
            component: () => import('../views/Admin/Perusahaan/InputData'),
        },
        {
            path: 'perusahaan/akun',
            component: () => import('../views/Admin/Perusahaan/Akun'),
        },
        {
            path: 'perusahaan/akun/add/:id',
            component: () => import('../views/Admin/Perusahaan/InputAkun'),
        },
        {
            path: 'perusahaan/akun/view/:id',
            component: () => import('../views/Admin/Perusahaan/InputAkun'),
        },
        {
            path: 'pengumuman',
            component: () => import('../views/Admin/Pengumuman/Pengumuman'),
        },
        {
            path: 'pengumuman/add',
            component: () => import('../views/Admin/Pengumuman/InputPengumuman'),
        },
        {
            path: 'pengumuman/edit/:id',
            component: () => import('../views/Admin/Pengumuman/InputPengumuman'),
        },
        {
            path: 'lowongan',
            component: () => import('../views/Admin/Lowongan/Lowongan'),
        },
        {
            path: 'lowongan/add',
            component: () => import('../views/Admin/Lowongan/InputLowongan'),
        },
        {
            path: 'lowongan/edit/:id',
            component: () => import('../views/Admin/Lowongan/InputLowongan'),
        },
        {
            path: 'setting',
            component: () => import('../views/Setting/Index'),
            children: [{
                path: "",
                redirect: "nama"
            },
            {
                path: 'nama',
                component: () => import('../views/Setting/Nama'),
            },
            {
                path: 'email',
                component: () => import('../views/Setting/Email'),
            },
            {
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