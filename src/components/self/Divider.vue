<template>
    <van-divider content-position="left">{{title}}</van-divider>
</template>

<script>
    import Vue from 'vue';
    import {
        Divider
    } from 'vant';
    Vue.use(Divider);
    export default {
        props: {
            title: {
                type: String,
                default: "",
            }
        }
    }
</script>

<style scoped>

</style>