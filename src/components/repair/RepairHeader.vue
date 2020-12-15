<template>
    <div>
        <van-nav-bar title="报修" left-text="返回" right-text="新建" left-arrow @click-left="onClickLeft"
            @click-right="onClickRight" />
        <van-popup v-model="show" position="right" :style="{ height: '100%', width: '100%' }" />
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
        data() {
            return {
                show: false
            }
        },
        methods: {

            onClickLeft() {
                this.$router.go(-1)
            },
            onClickRight() {
                this.$router.push({
                    path: '/Repair/new'
                })
            },
        },
    }
</script>

<style scoped>

</style>