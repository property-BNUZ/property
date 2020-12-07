<template>
    <div>
        <van-grid :border="false" :column-num="4">
            <van-grid-item v-for="(icon, index) in icons" :key="index" @click="toPage(icon.link)">
                <van-image :src="icon.image" />
                <p>{{icon.text}}</p>
            </van-grid-item>
        </van-grid>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                icons: [{
                    image: require('@/assets/home/board.png'),
                    text: '小区通知',
                    link: ''
                }, {
                    image: require('@/assets/home/wrench.png'),
                    text: '小区报修',
                    link: 'Repair'
                }, {
                    image: require('@/assets/home/bill.png'),
                    text: '生活缴费',
                    link: ''
                }, {
                    image: require('@/assets/home/door.png'),
                    text: '手机开门',
                    link: ''
                }, {
                    image: require('@/assets/home/express.png'),
                    text: '快递代收',
                    link: ''
                }, {
                    image: require('@/assets/home/supermarket.png'),
                    text: '生活超市',
                    link: ''
                }, {
                    image: require('@/assets/home/housekeeping.png'),
                    text: '小区家政',
                    link: ''
                }, {
                    image: require('@/assets/home/opinion.png'),
                    text: '意见建议',
                    link: ''
                }, ]
            }
        },
        methods: {
            toPage(link) {
                this.$router.replace('/' + link);
            }
        }
    }
</script>

<style scoped>
    .van-grid-item .van-image {
        height: 40px;
        width: 40px;

        color: #646566;
    }

    .van-grid-item p {
        font-size: 10px;
        color: #646566;
    }
</style>