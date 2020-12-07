<template>
    <div>
        <van-nav-bar title="手机开门" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    </div>
</template>

<script>
    import Vue from 'vue';
    import {
        NavBar
    } from 'vant';
    import {
        Toast
    } from 'vant';

    Vue.use(NavBar);

    export default {
        methods: {
            onClickLeft() {
                this.$router.replace('/')
            },
        },
    }
</script>

<style scoped>

</style>