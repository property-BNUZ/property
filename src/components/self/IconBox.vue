<template>
    <div>
        <van-grid :gutter="10" :border='false'>
            <van-grid-item v-for='(icon, index) in icons' :key='index' :to="icon.link">
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
    export default {
        props: {
            icons: {
                type: Array
            }
        }
    }
</script>

<style scoped>
    .icon {
        text-align: center;
        width: 35px;
        height: 35px;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

    .van-grid-item {
        height: 60px;
    }

    .icon_group {
        text-align: center;
    }

    .icon_title {
        font-size: 8px;
        color: #646566;
    }
</style>