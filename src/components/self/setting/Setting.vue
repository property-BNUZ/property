<template>
    <div>
        <page-header title="设置" :backurl="this.$route.query.backurl" />
        <van-cell-group>
            <van-cell title="头像" is-link :clickable="true" @click="cellClick">
                <van-image width="40px" height="40px"
                    :src="info.image == null ? '' : ('data:image;base64,' + info.image)" />
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
                info: {},
            }
        },
        methods: {
            afterRead(file) {
                // 此时可以自行将文件上传至服务器
                console.log(file.content.split(','));
                axios.post('http://121.196.105.252:8000/user/image/' + this.$util.getUser().id + "/" + file.file.name,
                        file)
                    .then(res => {
                        // this.info.image = file.content.split(',');
                        console.log("111111111111111111111111111111111" + this.$util.getUser().username);
                        axios.post('http://121.196.105.252:8000/getUserInfo/' + this.$util.getUser().username).then(
                            getInfoRes => {
                                console.log(getInfoRes);
                                this.info = getInfoRes.data;
                                // window.sessionStorage['userInfo'] = getInfoRes.data;
                                const userInfo = JSON.stringify(getInfoRes.data);
                                window.sessionStorage.setItem('userInfo', userInfo);
                            });
                    });

                // console.log(file.content.split(',')[1]);
            },
            cellClick() {
                this.$refs.upload_image.chooseFile();
            }
        },
        mounted() {
            let user = this.$util.getUserInfo();
            this.info = user;
            console.log(user);
            // this.info = this.$util.deepClone(user);
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