<template>
    <div style="background-color:#F6F6F6; height: 100%;">
        <page-header></page-header>
        <div
            style="display:flex; width:100%; height: 170px;justify-content: center;align-items: center; flex-direction: column;">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-chidourenshoujiduan"></use>
            </svg>
            <div class="title">吃豆人物业管理系统</div>
            <div class="version">当前版本:{{version}}</div>
        </div>
        <van-cell-group>
            <van-cell title="团队成员" is-link @click="show = true" />
            <van-cell title="为我评分" is-link @click="showEvaluation = true" />
        </van-cell-group>
        <van-popup v-model="show" :style="{ height: '300px', width:'90%'}">
            <van-cell v-for="item in member" :key="item.id" :clickable="false">
                <svg class="avatar" aria-hidden="true">
                    <use :xlink:href="item.image"></use>
                </svg>
                <div style="width:100%; padding-left: 30px">
                    <span>{{item.name}}</span>
                </div>
            </van-cell>
        </van-popup>
        <van-popup v-model="showEvaluation"
            :style="{ height: '80px', width:'70%', display:'flex', 'justify-content':'center', 'flex-direction':'column', 'align-items': 'center'}">
            <van-rate v-model="value" />
            <van-button round type="info" size="small" :style="{'margin-top':'10px'}" @click="sumbitEvaluation()">提 交
            </van-button>

        </van-popup>
    </div>
</template>

<script>
    import {
        Dialog
    } from 'vant';
    import {
        Toast
    } from 'vant';
    export default {
        data() {
            return {
                version: "1.1.0",
                show: false,
                value: 5,
                showEvaluation: false,
                member: [{
                    id: 1,
                    name: "陈建邦",
                    image: "#icon-u36"
                }, {
                    id: 2,
                    name: "杨浩",
                    image: "#icon-u36-copy"
                }, {
                    id: 3,
                    name: "胡佳池",
                    image: "#icon-u36-copy1"
                }, {
                    id: 4,
                    name: "曾紫莹",
                    image: "#icon-u36-copy2"
                }, {
                    id: 5,
                    name: "熊启仪",
                    image: "#icon-u36-copy3"
                }, {
                    id: 6,
                    name: "焦天骄",
                    image: "#icon-u36-copy4"
                }]
            }
        },
        methods: {
            sumbitEvaluation() {
                this.showEvaluation = false;
                Toast('感谢您的反馈！');
            }
        }
    }
</script>

<style>
    .icon {
        width: 90px;
        height: 90px;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

    .title {
        margin: 10px 15px;
        font-weight: bold;
        font-size: 18px;
        color: rgb(58, 132, 228);
        /* font-family: "Helvetica Neue", "Helvetica", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif; */
    }

    .version {
        font-size: 10px;
        color: #999999;
    }

    .avatar {
        width: 30px;
        height: 30px;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

    .van-cell__value {
        display: flex;
        /* justify-content: center; */
        align-items: center;
    }
</style>