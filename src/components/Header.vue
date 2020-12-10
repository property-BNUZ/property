<template>
    <div>
        <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="onClickLeft" />
    </div>

</template>

<script>
    import Vue from 'vue';
    import {
        NavBar
    } from 'vant';

    Vue.use(NavBar);
    export default {
        props: {
            title: {
                type: String,
                required: false,
                default: ""
            },
            backurl: {
                type: String,
                required: false,
                default: ""
            }
        },
        methods: {
            onClickLeft() {
                this.$router.replace('/' + this.backurl)
            }
        },
    }
</script>

<style scoped>

</style>