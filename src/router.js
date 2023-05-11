import { createRouter, createWebHistory } from "vue-router"
import Home from './views/Home.vue'

export default createRouter ({
 history: createWebHistory(),
 routes: [
    {
      path: '/', component: Home
    },
    {
      path: '/login', component: () => import('./views/LoginPage.vue'),
    },
    {
      path: '/register', component: () => import('./views/RegisterPage.vue')
    }
]}) 

