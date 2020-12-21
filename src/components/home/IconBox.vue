<template>
    <van-grid :border="false" :column-num="4">
        <van-grid-item v-for="(icon, index) in icons" :key="index" @click="gotolink(icon)">
            <svg class="icon" aria-hidden="true">
                <use :xlink:href="icon.img"></use>
            </svg>
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
                        img: "#icon-gonggao",
                        desc: "小区公告",
                        link: ''
                    },
                    {
                        id: "002",
                        img: "#icon-baoshibaoxiu",
                        desc: "小区维修",
                        link: 'Repair'
                    },
                    {
                        id: "003",
                        img: "#icon-pay",
                        desc: "生活缴费",
                        link: 'Payment'
                    },
                    {
                        id: "004",
                        img: "#icon-weixinkaimen",
                        desc: "手机开门",
                        link: 'Door'
                    },
                    {
                        id: "005",
                        img: "#icon-kuaididaishou",
                        desc: "快递代收",
                        link: 'express'
                    },
                    {
                        id: "006",
                        img: "#icon-gouwuche",
                        desc: "生活超市",
                        link: 'Market'
                    },
                    {
                        id: "007",
                        img: "#icon-huodongzhongxin",
                        desc: "活动中心",
                        link: 'CommunityActivity'
                    },
                    {
                        id: "008",
                        img: "#icon-yijian",
                        desc: "意见建议",
                        link: 'Suggestion'
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
    .icon {
        width: 40px;
        height: 40px;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>