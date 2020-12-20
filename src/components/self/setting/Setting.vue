<template>
    <div>
        <page-header title="设置" :backurl="this.$route.query.backurl" />
        <van-cell-group>
            <van-cell title="头像" is-link :clickable="true" @click="cellClick">
                <van-image width="40px" height="40px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                <van-uploader ref="upload_image" :after-read="afterRead" multiple :max-count="1" :show-upload="true"
                    accept="image/png, image/jpeg">
                    <div></div>
                </van-uploader>
            </van-cell>
            <van-cell title=" 姓名" is-link :clickable="true" />
            <van-cell title="手机" is-link :clickable="true" />
            <van-cell title="收货地址" is-link :clickable="true" />
        </van-cell-group>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
            }
        },
        methods: {
            afterRead(file) {
                // 此时可以自行将文件上传至服务器
                axios.post('http://121.196.105.252:8000/ppp', file).then(res => {
                    console.log(res);
                });
                console.log(file);
            },
            cellClick() {
                this.$refs.upload_image.chooseFile();
            }
        }
    }
</script>

<style scoped>
    .van-cell {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .van-cell__value {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .van-popup {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .van-uploader {
        height: 40px;
    }
</style>