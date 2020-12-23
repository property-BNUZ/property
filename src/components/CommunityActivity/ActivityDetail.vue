<template>
    <div class="content_background">
        <page-header></page-header>
        <van-image width="100%" height="100%" :src="('data:image;base64,' + activity.image)" />
        <div class="title_show">
            <span>{{activity.title}}</span>
            <div>
                <span class="price">免费</span>
                <span class="former_price">免费</span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-fenxiang"></use>
                </svg>
            </div>
        </div>
        <div class="title_show">
            <span style="color: #9D9D9F;">门店信息</span>
            <van-cell-group>
                <van-cell :title="activity.address" :label="activity.location" />
            </van-cell-group>
        </div>
        <div class="title_show" style="margin-bottom:40px">
            <van-divider :style="{ color: '#828285', borderColor: '#828285', padding: '0 16px' }">
                详情
            </van-divider>
            <div class="bold">{{activity.title}}开放人数与时间安排:</div>
            <div class="bold">场馆预约人数限定:</div>
            <div>{{activity.peopleNumber}}</div>
            <div class="bold">场馆开放时间:</div>
            <div>{{activity.businessHours}}</div>
            <div class="bold" style="display:flex; justify-content: center; margin:10px">进入中心须知</div>
            <div style="text-indent: 2em; padding-top:5px; padding-bottom:5px" v-for="(item, index) in attention"
                :key="index">
                {{item}}
            </div>
        </div>
        <van-goods-action :safe-area-inset-bottom="true">
            <van-goods-action-button type="danger" text="立即预约" @click="onClickButton()" />
        </van-goods-action>
    </div>
</template>

<script>
    import {
        Dialog
    } from 'vant';
    export default {
        data() {
            return {
                activity: {
                    id: -1,
                    title: "",
                    address: "",
                    attention: "",
                    businessHours: "",
                    image: "",
                    imagePath: "",
                    location: "",
                    peopleNumber: "",
                },
                attention: []
            }
        },
        methods: {
            onClickButton() {
                Dialog.alert({
                    title: '预约成功',
                    message: '已预约成功，请及时前往场馆',
                }).then(() => {
                    // on close
                });
            }
        },
        mounted() {
            this.activity = this.$route.params.activity;
            if (this.activity != null) {
                this.attention = this.activity.attention.split(';')
            }

            console.log(this.attention);
        }
    }
</script>

<style scoped>
    .icon {
        float: right;
        width: 30px;
        height: 30px;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

    .title_show {
        height: 100%;
        margin-bottom: 10px;
        padding: 10px;
        background-color: white;
    }

    .content_background {
        background-color: #F8F8FA;
        height: 100%;
        width: 100%;
    }

    .price {
        color: #FE4646;
        font-size: 24px;
        font-weight: bold;
    }

    .former_price {
        text-decoration: line-through;
        margin: 5px;
        color: #9D9D9F
    }

    .bold {
        font-weight: bold;
    }
</style>