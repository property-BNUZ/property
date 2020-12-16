<template>
    <div>
        <van-tabs type="line">
            <van-tab title="文化中心">
                <van-grid :border="false" :column-num="2">
                    <van-grid-item v-for="(a, index) in [1, 10]" :key="index">
                        <el-card :body-style="{ padding: '0px' }">
                            <img :src="'data:image;base64,' + image" class="image">
                            <div style="padding: 14px;">
                                <span style="font-size:14px">好吃的汉堡</span>
                                <div class="bottom"
                                    style=" display: flex; justify-content: space-between; align-items: center; ">
                                    <span style="font-size:14px; color: #ee0a24">免费预约</span>
                                    <van-button round type="info" size="mini" style="float:right">立即预约</van-button>
                                    <!-- <el-button type="primary" round class="button" size="mini">主要按钮</el-button> -->
                                    <!-- <el-button type="text" class="button">操作按钮</el-button> -->
                                </div>
                            </div>
                        </el-card>
                    </van-grid-item>
                </van-grid>
                <el-row>
                    <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">

                    </el-col>
                </el-row>
            </van-tab>
            <van-tab title="全民健身">

            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    export default {
        props: {
            image: String
        },
        data() {
            return {
                currentDate: new Date()
            };
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