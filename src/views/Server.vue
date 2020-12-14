<template>
    <div class="tiny_box">
        <van-grid :border="false" :column-num="3">
        <van-grid-item v-for="(icon, index) in icons" :key="index" @click="gotolink(icon)">
            <svg class="icon" aria-hidden="true">
                <use :xlink:href="icon.img"></use>
            </svg>
            <p>{{icon.desc}}</p>
            </van-grid-item>
         </van-grid>

         <!-- footer start -->
            <label-box></label-box>
        <!-- footer end -->
    </div>
    
</template>
<script src="./iconfont.js"></script>



<script>
 import LabelBox from '@/components/common/LabelBox.vue';
    export default {
        components: {
            LabelBox, 
    },
        data() {
            return {
                
                icons: [{
                        id: "010",
                        img: "#icon-suo-copy",
                        desc: "开锁换锁",
                        link: ''
                    },
                    {
                        id: "011",
                        img: "#icon-guandaoshutong",
                        desc: "管道疏通",
                        link: 'Repair'
                    },
                    {
                        id: "012",
                        img: "#icon-73",
                        desc: "防水补漏",
                        link: 'Payment'
                    },
                    {
                        id: "013",
                        img: "#icon-qingxi",
                        desc: "家电清洗",
                        link: 'Door'
                    },
                    {
                        id: "014",
                        img: "#icon-jiadianweixiu",
                        desc: "家电维修",
                        link: 'express'
                    },
                    {
                        id: "015",
                        img: "#icon-xueli",
                        desc: "学历提升",
                        link: ''
                    },
                    {
                        id: "016",
                        img: "#icon-zhongdiangong",
                        desc: "钟点工"
                    },
                    {
                        id: "017",
                        img: "#icon-baomuyuesao-",
                        desc: "月嫂"
                    },
                    {
                        id: "018",
                        img: "#icon-baomu01",
                        desc: "保姆"
                    },
                    {
                        id: "019",
                        img: "#icon-icon-test",
                        desc: "保洁开荒"
                    },
                    {
                        id: "020",
                        img: "#icon-huishou",
                        desc: "二手回收"
                    },
                    {
                        id: "021",
                        img: "#icon-fangzi",
                        desc: "地产中介"
                    },
                ],
            }
        },
    
        methods: {
            gotolink(icon) {
                this.$router.push({
                    path: '/' + icon.link,
                    query: {
                        backurl: ''
                    }
                })
                // this.$router.replace('/' + icon.link);

            }
        }
        };
</script>

<style scoped>
    .tiny_box
    {
        border: solid 0.5px #ddd;
        position: relative;
        top: 120px;
    }

    .van-grid-item{
        border: 0.5px solid #ddd;
    }

    .icon {
    width: 40px;
    height: 40px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    }

    .van-grid-item p {
        font-size: 10px;
        color: #646566;
    }
</style>