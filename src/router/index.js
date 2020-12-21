import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Repair from '@/views/Repair.vue'
import Payment from '@/views/Payment_System.vue'
import Door from '@/views/Door.vue'
import Self from '@/views/Self.vue'
import Server from '@/views/Server'
import Notice from '@/views/Notice'
import SignIn from '@/views/SignIn.vue'
import Register from '@/views/Register.vue'
import Express from '@/views/Express.vue'
import Setting from '@/components/self/setting/Setting.vue'
import Suggestion from '@/views/Suggestion.vue'
import RepairNew from '@/components/repair/RepairNew'
import CommunityActivity from '@/views/CommunityActivity'
import Market from '@/views/supermarket/index'
import Announcement from '@/views/Announcement'
import Clean from '@/views/clean.vue'
import dailyClean from '@/views/dailyClean.vue'
import ActivityDetail from '@/components/CommunityActivity/ActivityDetail.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/SignIn',
        name: 'SignIn',
        component: SignIn
    }, {
        path: '/Register',
        name: 'Register',
        component: Register
    }, {
        path: '/Payment',
        name: 'Payment',
        component: Payment
    }, {
        path: '/Repair',
        name: 'Repair',
        component: Repair
    }, {
        path: '/Repair/new',
        component: RepairNew
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
        path: '/Express',
        name: 'Express',
        component: Express
    }, {
        path: '/Self/Setting',
        name: 'Setting',
        component: Setting
    }, {
        path: '/Suggestion',
        name: 'Suggestion',
        component: Suggestion
    }, {
        path: '/CommunityActivity',
        name: 'CommunityActivity',
        component: CommunityActivity
    }, {
        path: '/Market',
        name: 'Market',
        component: Market
    }, {
        path: '/Announcement',
        name: 'Announcement',
        component: Announcement
    },
    {
        path: '/Clean',
        name: 'Clean',
        component: Clean
    },
    {
        path: '/dailyClean',
        name: 'dailyClean',
        component: dailyClean
    },
    {
        path: '/activityDetail',
        name: 'activityDetail',
        component: ActivityDetail
    },
]
const router = new VueRouter({
    routes
})

export default router