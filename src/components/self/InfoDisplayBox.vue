<template>
    <div>
        <van-row type="flex" justify="space-around" @click="toLogin">
            <van-col span="1">
                <van-image round width="5rem" height="5rem"
                    :src="info.image == null ? '' : ('data:image;base64,' + info.image)" />
            </van-col>
            <van-col span="12" v-if="login">手机号：{{info.user == null ? "" : info.user.phoneNumber}}</van-col>
            <van-col span="12" v-if="!login">请点击登录</van-col>
        </van-row>
    </div>
</template>

<script>
    export default {
        props: {
            info: {
                type: Object
            }
        },
        data() {
            return {
                login: this.$util.getUser() != null,
            }
        },
        methods: {
            toLogin() {
                this.$router.push("/SignIn");
                return
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