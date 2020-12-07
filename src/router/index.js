import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Payment from '../views/Payment_System.vue'
import Door from '../views/Door.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Payment',
        name: 'Payment',
        component: Payment
    },
    {
        path: '/Door',
        name: 'Door',
        component: Door
    },
]

const router = new VueRouter({
    routes
})

export default router