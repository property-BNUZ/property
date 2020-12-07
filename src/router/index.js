import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
import Home from '../views/Home.vue'
import Payment from '../views/Payment_System.vue'
import Index from '../views/Index.vue'

=======
import Home from '../views/home/Home.vue'
import Repair from '../views/repair/Repair.vue'
import Payment from '../views/payment/Payment_System.vue'
import Door from '../views/door/Door.vue'
>>>>>>> fd21f42184d58485f877e286b4f5968942a997b7
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
}, {
    path: '/Payment',
    name: 'Payment',
    component: Payment
<<<<<<< HEAD
  },
  {
    path: '/Index',
    name: 'Index',
    component: Index
  },
  
]

=======
}, {
    path: '/Repair',
    name: 'Repair',
    component: Repair
}, {
    path: '/Door',
    name: 'Door',
    component: Door
}, ]
>>>>>>> fd21f42184d58485f877e286b4f5968942a997b7
const router = new VueRouter({
    routes
})

export default router