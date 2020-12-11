<template>
    <div>
        <van-row type="flex" justify="space-around">
            <van-col span="1">
                <van-image round width="5rem" height="5rem" :src="info.avatar" />
            </van-col>
            <van-col span="12">手机号：{{info.phoneNumber}}</van-col>
        </van-row>
    </div>
</template>

<script>
    export default {
        props: {
            info: {
                type: Object
            }
        }
    }
</script>

<style scoped>
    .van-row {
        align-items: center;
        padding-top: 10px;
        padding-bottom: 10px;
        background: url('~@/assets/background/sunset.jpg') no-repeat;
    }

    .van-col {
        color: #fff
    }
</style>