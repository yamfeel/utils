import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/regular/Subtitle.vue')
    },
    {
        path: '/notion',
        name: 'Notion API',
        component: () => import('../pages/notion/Index.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
