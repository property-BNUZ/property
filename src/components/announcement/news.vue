<template>
    <div>
        <page-header></page-header>
        <div class="title">{{news.title}}</div>
        <div class="time">{{news.time}}</div>
        <van-image width="100%" height="100%" :src="news.detail_image" />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                news: {}
            }
        },
        mounted() {
            this.news = this.$route.params.news;
        }
    }
</script>

<style scoped>
    .title {
        font-size: 20px;
        color: #3775b3;
        display: flex;
        justify-content: center;
        font-weight: bold;
        margin: 10px 15px;
    }

    .time {
        /* float: left; */
        color: #789;
    }
</style>