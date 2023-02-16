import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'Home',
            component: import('../views/Home.vue'),
        },
        {
            path: '/playlist',
            name: 'Playlist',
            component: import('../views/Playlist.vue'),
        },
        {
            path: '/currencies',
            name: 'Currencies',
            component: import('../views/Currencies.vue'),
        },
        {
            path: '/cart',
            name: 'Cart',
            component: import('../views/Cart.vue'),
        },
    ],
})