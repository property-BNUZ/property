import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import Repair from '../views/repair/Repair.vue'
import Payment from '../views/payment/Payment_System.vue'
import Door from '../views/door/Door.vue'
<<<<<<< HEAD
import Pay from '../views/payment/components/pay.vue'
Vue.use(VueRouter)

import {
    Lazyload
} from 'vant';

Vue.use(Lazyload);
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
        path: '/Repair',
        name: 'Repair',
        component: Repair
    }, 
    {
        path: '/Door',
        name: 'Door',
        component: Door
    },
    // {
    //     path: '/pay',
    //     name: 'pay',
    //     component: Pay
    // },
]

=======
import Self from '../views/self/Self.vue'
import Server from '../views/server/Server'
import Notice from '../views/notice/Notice'
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
}, {
    path: '/Self',
    name: 'Self',
    component: Self
}, {
    path: '/Server',
    name: 'Server',
    component: Server
}, {
    path: '/Notice',
    name: 'Notice',
    component: Notice
}, ]
>>>>>>> 5d29cdc0e9e24fb228b5cc1de711e2d92a035970
const router = new VueRouter({
    routes
})

export default router