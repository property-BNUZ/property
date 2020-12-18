import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import Vant from 'vant';

import PageHeader from '@/components/common/Header.vue'
import LabelBox from '@/components/common/LabelBox.vue';
import Mock from '@/mock'
import store from './store/index'
import '@/plugins/axios'
import '@/plugins/element.js'
import '@/styles/iconfont/iconfont.js'
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.config.productionTip = false

Vue.component("PageHeader", PageHeader); //注册组件
Vue.component("LabelBox", LabelBox); //注册组件 

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')