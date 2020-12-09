<template>
    <div>
        <van-grid :gutter="10" :border='false'>
            <van-grid-item v-for='(icon, index) in icons' :key='index' :icon="icon.image" :text="icon.title" />
        </van-grid>
    </div>
</template>

<script>
    import 'vant/lib/index.less';
    export default {
        data() {
            return {
                icons: [{
                    title: '待付款',
                    image: require('@/assets/icon/self/self_pending_pay.svg'),
                    link: ''
                }, {
                    title: '待发货',
                    image: require('@/assets/icon/self/self_pending_delivery.svg'),
                    link: ''

                }, {
                    title: '待收货',
                    image: require('@/assets/icon/self/self_pending_receive.svg'),
                    link: ''
                }, {
                    title: '待评价',
                    image: require('@/assets/icon/self/self_pending_evaluate.svg'),
                    link: ''
                }]
            }
        }
    }
</script>

<style scoped>
    .van-grid-item {
        height: 40px;
    }

    .van-grid-item .van-image {
        height: 30px;
    }
</style>