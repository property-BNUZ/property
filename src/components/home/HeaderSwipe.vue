<template>
    <div>
        <div style="display:flex; justify-content: center; background-color: #fab90a; line-height: 50px;color: white;">
            <span style="font-size:18px">
                吃豆人物业管理
            </span>
        </div>
        <!-- banner 轮播 start -->
        <el-carousel height="200px">
            <el-carousel-item v-for="pic in pics" :key="pic.url">
                <img :src="pic.url" />
            </el-carousel-item>
        </el-carousel>
        <!-- banner 轮播 end -->
        <!-- 通知 轮播 start -->
        <van-notice-bar left-icon="volume-o">
            {{notice}}
        </van-notice-bar>
        <!-- 通知 轮播 end -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pics: [{
                        url: require("@/assets/banner/banner1.jpg")
                    },
                    {
                        url: require("@/assets/banner/banner2.jpg")
                    },
                    {
                        url: require("@/assets/banner/banner3.jpg")
                    },
                    {
                        url: require("@/assets/banner/banner4.jpg")
                    },
                ],
                notice: '尊敬的各位业主： 您好，由于水泵房控制器出现错误，现在正在紧急维修中。在此期间，将会停水，预计停水时间为17：30-20：00。为此，给您造成的不便，我们深表歉意。 2020-12-12',
            }
        }
    }
</script>

<style scoped>
    .el-carousel__item {
        text-align: center;
    }

    .el-carousel__item img {
        width: 100%;
    }
</style>