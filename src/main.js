import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/axios'
import './plugins/element.js'
import Mypay from './views/payment/components/pay.vue'

import './styles/iconfont/iconfont.js'
// import './styles/iconfont.css'
import Vant from 'vant';

import 'vant/lib/index.css';

Vue.use(Vant);
Vue.config.productionTip = false

Vue.component("Mypay", Mypay); //注册组件


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')