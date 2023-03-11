import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../pages/regular/Subtitle.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../pages/regular/Subtitle.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
