<template>
    <div>
        <van-nav-bar title="报修" left-text="返回" right-text="新建" left-arrow @click-left="onClickLeft"
            @click-right="onClickRight" />
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
            onClickRight() {
                Toast('按钮');
            },
        },
    }
</script>

<style scoped>

</style>