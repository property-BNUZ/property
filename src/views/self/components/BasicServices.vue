<template>
    <div>
        <van-grid :gutter="10" :border='false'>
            <van-grid-item v-for='(icon, index) in icons' :icon="icon.image" :key='index' :text='icon.title'
                :to="{ path: icon.link , query: { backurl: 'Self'}}" />
        </van-grid>
    </div>
</template>

<script>
    export default {
        // props: {
        //     text: String
        // },
        data() {
            return {
                icons: [{
                    image: require('@/assets/icon/self/self_my_house.svg'),
                    title: '我的房屋',
                    link: ''
                }, {
                    image: require('@/assets/icon/self/self_my_bill.svg'),
                    title: '我的账单',
                    link: '/Payment'
                }, {
                    image: require('@/assets/icon/self/self_wrench.svg'),
                    title: '我的报修',
                    link: ''
                }, {
                    image: require('@/assets/icon/self/self_my_community.svg'),
                    title: '我的小区',
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