<template>
    <van-grid :border="false" :column-num="4">
        <van-grid-item v-for="(icon, index) in icons" :key="index" @click="gotolink(icon)">
            <van-image :src="icon.imgUrl" />
            <p>{{icon.desc}}</p>
        </van-grid-item>
    </van-grid>
</template>

<script>
    export default {
        data() {
            return {
                icons: [{
                        id: "001",
                        imgUrl: require('@/assets/icon/note.png'),
                        desc: "小区公告",
                        link: ''
                    },
                    {
                        id: "002",
                        imgUrl: require('@/assets/icon/repair.png'),
                        desc: "小区维修",
                        link: 'Repair'
                    },
                    {
                        id: "003",
                        imgUrl: require('@/assets/icon/pay.png'),
                        desc: "生活缴费",
                        link: 'Payment'
                    },
                    {
                        id: "004",
                        imgUrl: require('@/assets/icon/door.png'),
                        desc: "手机开门",
                        link: 'Door'
                    },
                    {
                        id: "005",
                        imgUrl: require('@/assets/icon/package.png'),
                        desc: "快递代收",
                        link: 'express'
                    },
                    {
                        id: "006",
                        imgUrl: require('@/assets/icon/car.png'),
                        desc: "生活超市",
                        link: ''
                    },
                    {
                        id: "007",
                        imgUrl: require('@/assets/icon/service.png'),
                        desc: "小区家政"
                    },
                    {
                        id: "008",
                        imgUrl: require('@/assets/icon/advice.png'),
                        desc: "意见建议"
                    },
                ],
            }
        },
        methods: {
            gotolink(icon) {
                this.$router.push({
                    path: '/' + icon.link,
                    params: {
                        backurl: ''
                    }
                })
                // this.$router.replace('/' + icon.link);

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