<template>
    <div>
        <a @click="text1">
            <transition name="fade1">
                <h3 v-show="flag2">全部商品</h3>
            </transition>
        </a>
        <a @click="text">
            <transition name="fade">
                <h3 v-show="flag1">评价</h3>
            </transition>
        </a>
        <div class="car" v-show="flagcar">
            <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
                <div id="ball" v-show="flag"></div>
            </transition>
            <van-card :num='this.good1' price="90.00" desc="好喝" title="Helens可乐桶"
                thumb="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2FAkjg3OenYTI2PtZkGWbQBwUmL0r3icYnIUjYPibNAlOQ3tQOHyYEXU7hRibOFTTVAku5bl1mTlQP9UHuHdxkbAcBA%2F0%3Fwx_fmt%3Djpeg&refer=http%3A%2F%2Fmmbiz.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611037754&t=bc33e42772e52afb613e87428056426d">
                <template #tags>
                    <van-tag plain type="danger">针不戳</van-tag>
                    <van-tag plain type="danger">全国统一姿势</van-tag>
                </template>
                <template #footer>
                    <van-button @click='add1(),flag=!flag ' size="mini">+</van-button>
                </template>
            </van-card>

            <van-card :num='this.good2' price="2.00" desc="怡宝" title="生命之泉"
                thumb="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fgfs17.gomein.net.cn%2FT1.6_5BKVv1RCvBVdK_160.jpg&refer=http%3A%2F%2Fgfs17.gomein.net.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611053367&t=b0fea60dc7fdea5dd1f70216a59ec62f">
                <template #tags>
                    <van-tag plain type="danger">口感好</van-tag>
                    <van-tag plain type="danger">便宜</van-tag>
                </template>
                <template #footer>
                    <van-button @click='add2() ' size="mini">+</van-button>
                </template>
            </van-card>
            <van-card :num='this.good3' ref="good2" price="2.00" desc="可乐" title=""
                thumb="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2084947871,3172739906&fm=26&gp=0.jpg">
                <template #tags>
                    <van-tag plain type="danger">肥仔快乐水</van-tag>
                </template>
                <template #footer>
                    <van-button @click='add3()' size="mini">+</van-button>
                </template>
            </van-card>
            <div class="shoppingCart">
                <!-- <van-icon name="shopping-cart" color="#1989fa" size="3rem"  badge="9"  />     -->
                <van-goods-action>
                    <van-goods-action-icon icon="cart-o" :badge="this.badge" text="购物车" @click="openCar" />
                    <van-goods-action-icon icon="shop-o" text="店铺" />
                    <van-goods-action-button type="danger" @click="showShare = true" text="立即购买" />
                </van-goods-action>
                <van-share-sheet v-model="showShare" title="选择缴费方式" @select="onSelect" :options="options" />
            </div>
            <el-dialog title="提示" :visible.sync="dialogVisible" width="95%">
                <Mypay :masg="money"></Mypay>
            </el-dialog>

            <van-dialog v-model="showCar" title="标题" show-cancel-button>
                <van-card v-if="this.good1" :num='this.good1' price="90.00" desc="好喝" title="Helens可乐桶"
                    thumb="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2FAkjg3OenYTI2PtZkGWbQBwUmL0r3icYnIUjYPibNAlOQ3tQOHyYEXU7hRibOFTTVAku5bl1mTlQP9UHuHdxkbAcBA%2F0%3Fwx_fmt%3Djpeg&refer=http%3A%2F%2Fmmbiz.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611037754&t=bc33e42772e52afb613e87428056426d">
                    <template #footer>
                        <van-button @click='minus1()  ' size="mini">
                            <p style="font-size: 28px;">-</p>
                        </van-button>
                    </template>
                </van-card>

                <van-card v-if="this.good2" :num='this.good2' price="2.00" desc="怡宝" title="生命之泉"
                    thumb="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fgfs17.gomein.net.cn%2FT1.6_5BKVv1RCvBVdK_160.jpg&refer=http%3A%2F%2Fgfs17.gomein.net.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611053367&t=b0fea60dc7fdea5dd1f70216a59ec62f">
                    <template #footer>
                        <van-button @click='minus2() ' size="mini">
                            <p style="font-size: 28px;">-</p>
                        </van-button>
                    </template>
                </van-card>

                <van-card v-if="this.good3" :num='this.good3' price="2.00" desc="可乐" title=""
                    thumb="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2084947871,3172739906&fm=26&gp=0.jpg">
                    <template #footer>
                        <van-button @click='minus3() ' size="mini">
                            <p style="font-size: 28px;">-</p>
                        </van-button>
                    </template>
                </van-card>
            </van-dialog>
        </div>
        <comments v-show="!flagcar"></comments>
    </div>
</template>

<script>
    import Mypay from '../../../components/payment/pay.vue'
    import comments from '../components/comment.vue'
    export default {
        props: {
            source: String
        },
        components: {
            Mypay,
            comments
        },
        data() {
            return {
                money: 0,

                options: [{
                        name: '支付宝',
                        icon: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1683440168,2286570410&fm=26&gp=0.jpg',
                    },
                    {
                        name: '微信',
                        icon: 'wechat'
                    },
                    {
                        name: '农行卡',
                        icon: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1757584602,1917003924&fm=26&gp=0.jpg',
                    },
                ],
                showShare: false,
                flag: false,
                shoppingCart: 0,
                good1: 0,
                good2: 0,
                good3: 0,
                badge: 0,
                dialogVisible: false,
                flag1: false, // 显示的状态
                flagcar: true,
                flag2: true,
                money: 0,
                showCar: false,

            }
        },
        mounted() {},
        methods: {
            openCar() {
                this.showCar = true
            },
            text() {
                this.flag1 = !this.flag1;
                this.flagcar = false;
            },
            text1() {
                this.flag2 = !this.flag2;
                this.flagcar = true;
            },
            onSelect(option) {
                this.money = this.money
                this.showShare = false;

                this.dialogVisible = true;

            },
            add() {
                this.badge++;
            },
            minus() {
                this.badge--;
            },
            add1() {
                this.good1++;
                this.money += 9000;
                setTimeout(this.add, 2200);

            },
            add2() {
                this.good2++;
                this.money += 200;
                this.add();
            },
            add3() {
                this.money += 200;
                this.good3++;
                this.add();
            },
            minus1() {
                this.good1--;
                this.money -= 9000;
                this.minus();
            },
            minus2() {
                this.good2--;
                this.money -= 200;
                this.minus();
            },
            minus3() {
                this.good3--;
                this.money -= 200;
                this.minus();
            },
            beforeEnter(el) { // 小球开始动画之前的起始状态
                el.style.transform = 'translate(350px, 70px)'

            },
            done() {
                this.flag = !this.flag
            },
            enter(el, done) { // 小球动画结束之后的结束状态
                // 这是固定写法，如果不写 el.offsetWidth 就无法实现动画效果
                el.offsetLeft
                el.style.transform = 'translate(20px, 400px)'
                el.style.transition = 'all 3s ease'

                // 当动画执行完毕后，会自动调用 done 这个函数，这个done 就是 afterEnter 函数的引用
                done()
            },
            afterEnter(el) { // 小球动画结束之后的回调函数，用来做一些清理工作
                // 通过取非的操作，直接让小球跳过了后半场的动画
                this.flag = !this.flag
            }
        },
    }
</script>
<style scoped>
    .shoppingCart {
        position: fixed;
        bottom: 0;
    }

    h3 {
        font-size: 1rem;
        margin-left: 5%;
        display: inline;
    }

    #ball {
        position: absolute;
        width: 15px;
        height: 15px;
        background-color: red;
        border-radius: 50%;
        z-index: 9999 !important;
    }

    .fade-enter {
        opacity: 0.8;
    }

    .fade-enter-active,
    .fade-leave-active {
        opacity: 0.8;
        transition: all 3s ease;
        transform: rotateY(360deg);

    }

    .fade1-enter {
        opacity: 0.8;
    }

    .fade1-enter {
        opacity: 0.8;
    }

    .fade1-enter-active,
    .fade1-leave-active {
        opacity: 0.8;
        transition: all 3s ease;
        transform: rotateY(360deg);

    }

    h3 {
        opacity: 0.9;
        display: inline-block !important;
        transform: rotateY(0deg);
    }
</style>