<template>
    <div>
        <van-tabbar v-model="active">
            <van-tabbar-item replace to="/" icon="home-o">主页</van-tabbar-item>
            <van-tabbar-item replace to="/" icon="like-o">服务</van-tabbar-item>
            <van-tabbar-item replace to="/" icon="comment-o">通知</van-tabbar-item>
            <van-tabbar-item replace to="/" icon="user-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                active: 0,
            };
        },
    }
</script>

<style scoped>
</style>