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
import Home from '../views/home/Home.vue'
import Repair from '../views/repair/Repair.vue'
import Payment from '../views/payment/Payment_System.vue'
import Door from '../views/Door.vue'
import {
    Lazyload
} from 'vant';

Vue.use(Lazyload);
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
}, {
    path: '/Payment',
    name: 'Payment',
    component: Payment
}, {
    path: '/Repair',
    name: 'Repair',
    component: Repair
}, {
    path: '/Door',
    name: 'Door',
    component: Door
}]
remotes / origin / master

const router = new VueRouter({
    routes
})

export default router