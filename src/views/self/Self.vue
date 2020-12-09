<template>
    <div>
        <self-header :title="title" />
        <van-row type="flex" justify="space-around">
            <van-col span="1">
                <van-image round width="5rem" height="5rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            </van-col>
            <van-col span="12">手机号：{{phoneNumber}}</van-col>
        </van-row>
        <van-divider content-position="left">基础服务</van-divider>
        <basic-services />
        <van-divider content-position="left">超市订单</van-divider>
        <supermarket-services />
        <van-cell-group>
            <van-cell title="设置" :clickable="true" icon="setting-o"
                :to="{ name: 'Setting' , query: { backurl: 'Self'}}" />
            <van-cell title="关于我们" :clickable="true" icon="info-o" :to="{ name: 'About' , query: { backurl: 'Self'}}" />
        </van-cell-group>

        <!-- footer start -->
        <label-box />
        <!-- footer end -->
    </div>
</template>

<script>
    import Vue from 'vue';
    import {
        Divider
    } from 'vant';
    import {
        Col,
        Row
    } from 'vant';

    Vue.use(Col);
    Vue.use(Row);
    Vue.use(Divider);
    import SelfHeader from '../../components/Header';
    import LabelBox from '../../components/LabelBox.vue';
    import BasicServices from '../self/components/BasicServices.vue';
    import SupermarketServices from './components/SupermarketServices.vue';
    export default {
        components: {
            LabelBox,
            SelfHeader,
            BasicServices,
            SupermarketServices
        },
        data() {
            return {
                title: '住户中心',
                phoneNumber: '13143664411'
            }
        }
    }
</script>

<style scoped>
    .van-row {
        align-items: center;
        padding-top: 10px;
        padding-bottom: 10px;
        background: url('~@/assets/background/sunset.jpg') no-repeat;
    }

    .van-col {
        color: #fff
    }
</style>