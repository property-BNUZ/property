<template>
    <div>
        <van-grid :gutter="10" :border='false'>
            <van-grid-item v-for='(icon, index) in icons' :key='index'
                :to="{ path: icon.link , query: { backurl: 'Self'}}">
                <span class="icon_group">
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="icon.image"></use>
                    </svg>
                    <div class="icon_title">{{icon.title}}</div>
                </span>
            </van-grid-item>
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
                    image: '#icon-shouye-copy',
                    title: '我的房屋',
                    link: ''
                }, {
                    image: '#icon-zhangdan',
                    title: '我的账单',
                    link: '/Payment'
                }, {
                    image: '#icon-banshou',
                    title: '我的报修',
                    link: ''
                }, {
                    image: '#icon-building-automation',
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

    .icon_group {
        text-align: center;
    }

    .icon_title {
        font-size: 8px;
        color: #646566;
    }
</style>