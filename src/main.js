import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/axios'
import './plugins/element.js'
import Mypay from './views/payment/components/pay.vue'
import doorJ from './views/door/components/doorJ.vue'

import './styles/iconfont/iconfont.js'
import MyBack from './components/Header.vue'
import Vant from 'vant';
import Mock from '@/mock/index.js'
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.config.productionTip = false

Vue.component("Mypay", Mypay); //注册组件
Vue.component("MyBack", MyBack); //注册组件 
Vue.component("doorJ", doorJ); //注册组件 


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')