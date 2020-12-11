import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import Repair from '../views/repair/Repair.vue'
import Payment from '../views/payment/Payment_System.vue'
import Door from '../views/door/Door.vue'
import Self from '../views/self/Self.vue'
import Server from '../views/server/Server'
import Notice from '../views/notice/Notice'
import SignIn from '../views/SignIn/signIn.vue'
import Register from '../views/register/Register.vue'
import Express from '../views/express/index.vue'
import Setting from '../views/self/setting/Setting'
Vue.use(VueRouter)

const routes = [{
	path: '/SignIn',
	name: 'SignIn',
	component: SignIn
}, {
	path: '/Register',
	name: 'Register',
	component: Register
}, {
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
}, {
	path: '/SignIn',
	name: 'SignIn',
	component: SignIn
}, {
	path: '/Express',
	name: 'Express',
	component: Express
}, {
	path: '/Self/Setting',
	name: 'Setting',
	component: Setting
}, ]
const router = new VueRouter({
	routes
})

export default router
