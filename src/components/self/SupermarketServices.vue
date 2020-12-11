<template>
    <div>
        <van-grid :gutter="10" :border='false'>
            <van-grid-item v-for='(icon, index) in icons' :key='index' :text="icon.title" :badge="10">
                <span class="icon_group">
                    <van-badge :content="icon.num">
                        <div class="child">
                            <svg class="icon" aria-hidden="true">
                                <use :xlink:href="icon.image"></use>
                            </svg>
                        </div>
                    </van-badge>
                    <div class="icon_title">{{icon.title}}</div>
                </span>
            </van-grid-item>
        </van-grid>
    </div>
</template>

<script>
    import '@/styles/iconfont.css'
    import 'vant/lib/index.less';
    export default {
        data() {
            return {
                icons: [{
                    title: '待付款',
                    image: '#icon-31daifukuan',
                    num: 0,
                    link: ''
                }, {
                    title: '待发货',
                    image: '#icon-31daifahuo',
                    num: 1,
                    link: ''

                }, {
                    title: '待收货',
                    image: '#icon-31daishouhuo',
                    num: 1,
                    link: ''
                }, {
                    title: '待评价',
                    image: '#icon-31daipingjia',
                    num: 1,
                    link: ''
                }]
            }
        }
    }
</script>

<style scoped>
    .van-grid {
        height: 60px;
    }

    .van-grid-item {
        height: 40px;
    }

    .icon_group {
        text-align: center;
    }

    .icon_title {
        font-size: 8px;
        color: #646566;
    }
</style>