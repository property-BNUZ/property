import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Payment from '../views/Payment_System.vue'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
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
    path: '/Index',
    name: 'Index',
    component: Index
  },
  
]

const router = new VueRouter({
  routes
})

export default router
