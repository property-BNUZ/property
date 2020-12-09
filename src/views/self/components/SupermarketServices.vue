<template>
    <div>
        <van-grid :gutter="10" :border='false'>
            <van-grid-item v-for='(icon, index) in icons' :key='index' :text="icon.title">
                <span class="icon_group">
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="icon.image"></use>
                    </svg>
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
                    link: ''
                }, {
                    title: '待发货',
                    image: '#icon-31daifahuo',
                    link: ''

                }, {
                    title: '待收货',
                    image: '#icon-31daishouhuo',
                    link: ''
                }, {
                    title: '待评价',
                    image: '#icon-31daipingjia',
                    link: ''
                }]
            }
        }
    }
</script>

<style scoped>
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