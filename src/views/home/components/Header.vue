<template>
    <div>
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" />
            </van-swipe-item>
        </van-swipe>
        <van-notice-bar left-icon="volume-o">
            {{notice}}
        </van-notice-bar>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {
        Lazyload
    } from 'vant';
    import {
        NoticeBar
    } from 'vant';

    Vue.use(NoticeBar);
    Vue.use(Lazyload);
    export default {
        name: 'header',
        data() {
            return {
                images: [
                    require('@/assets/home/img1.jpg'),
                    require('@/assets/home/img2.jpg'),
                    require('@/assets/home/img3.jpg'),
                ],
                notice: '小区物业管理系统上线了，欢迎大家使用！！！！！！！！'
            };
        }
    }
</script>

<style scoped>
    .van-swipe .van-swipe-item {
        height: 200px;
        width: 100%;
        text-align: center;
    }

    img {
        width: 100%;
    }
</style>