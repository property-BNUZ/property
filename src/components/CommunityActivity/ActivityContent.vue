<template>
    <div>
        <van-tabs type="line">
            <van-tab title="文化中心">
                <van-grid :border="false" :column-num="2">
                    <van-grid-item v-for="activity in cultrueActivities" :key="activity.id">
                        <el-card :body-style="{ padding: '0px' }">
                            <img :src="'data:image;base64,' + activity.image" class="image">
                            <div style="padding: 14px;">
                                <span style="font-size:14px">{{activity.title}}</span>
                                <div class="bottom"
                                    style=" display: flex; justify-content: space-between; align-items: center; ">
                                    <span style="font-size:14px; color: #ee0a24">免费预约</span>
                                    <van-button round type="info" size="mini" style="float:right"
                                        @click="toDetail(activity)">立即预约</van-button>
                                    <!-- <el-button type="primary" round class="button" size="mini">主要按钮</el-button> -->
                                    <!-- <el-button type="text" class="button">操作按钮</el-button> -->
                                </div>
                            </div>
                        </el-card>
                    </van-grid-item>
                </van-grid>
            </van-tab>
            <van-tab title="全民健身">
                <van-grid :border="false" :column-num="2">
                    <van-grid-item v-for="activity in peActivities" :key="activity.id">
                        <el-card :body-style="{ padding: '0px' }">
                            <img :src="'data:image;base64,' + activity.image" class="image">
                            <div style="padding: 14px;">
                                <span style="font-size:14px">{{activity.title}}</span>
                                <div class="bottom"
                                    style=" display: flex; justify-content: space-between; align-items: center; ">
                                    <span style="font-size:14px; color: #ee0a24">免费预约</span>
                                    <van-button round type="info" size="mini" style="float:right"
                                        @click="toDetail(activity)">立即预约</van-button>
                                    <!-- <el-button type="primary" round class="button" size="mini">主要按钮</el-button> -->
                                    <!-- <el-button type="text" class="button">操作按钮</el-button> -->
                                </div>
                            </div>
                        </el-card>
                    </van-grid-item>
                </van-grid>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {
        Sku
    } from 'vant';
    Vue.use(Sku);
    export default {
        data() {
            return {
                currentDate: new Date(),
                show: false,
                cultrueActivities: [],
                peActivities: [],

            };
        },
        methods: {
            toDetail(activity) {
                this.$router.push({
                    name: 'activityDetail',
                    params: {
                        activity: activity
                    }
                });
            },
            getData() {
                axios.get('http://121.196.105.252:8000/activities/1').then((res) => {
                    this.cultrueActivities = res.data;
                });
                axios.get('http://121.196.105.252:8000/activities/2').then((res) => {
                    this.peActivities = res.data;
                });
            }
        },
        mounted() {
            this.getData();
        }

    }
</script>

<style scoped>
    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
</style>