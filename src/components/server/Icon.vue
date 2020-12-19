<template>
    <van-grid :border="false" :column-num="4">
        <van-grid-item v-for="(icon, index) in icons" :key="index" @click="gotolink(icon)">
            <svg class="icon" aria-hidden="true">
            <use :xlink:href="icon.img"></use>
            </svg>
            <p>{{icon.desc}}</p>
        </van-grid-item>
    </van-grid>
</template>

<script>
    export default {
        data() {
            return {
                icons: [
                    {
                        id: "007",
                        img: "#icon--fen-",
                        desc: "日常保洁",
                        link:'dailyClean'
                    },
                    {
                        id: "008",
                        img: "#icon-yijian",
                        desc: "周期保洁"
                    },
                ],
            }
        },
        methods: {
            gotolink(icon) {
                this.$router.push({
                    path: '/' + icon.link,
                    params: {
                        backurl: ''
                    }
                })
                // this.$router.replace('/' + icon.link);

            }
        }
    }
</script>

<style scoped>

    .icon {
        width: 40px;
        height: 40px;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>
