import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import Mypay from './views/payment/components/pay.vue'
import doorJ from './views/door/components/doorJ.vue'

import Vant from 'vant';

import 'vant/lib/index.css';


Vue.use(Vant);
Vue.config.productionTip = false

Vue.component("Mypay", Mypay); //注册支付组件
Vue.component("doorJ", doorJ) //注册门禁组件

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')