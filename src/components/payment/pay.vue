<template>
    <div>
        <div id="qrcode" ref="qrcode" style="margin-left: 20%; margin-bottom: 10%;">
            <h2>您本次需缴费 {{masg / 100}}</h2>
            <br>
        </div>
        <div style="margin-left: 10%;">
            <a href="alipayqr://platformapi/startapp?appId=20000234">
                <van-button style="display: inline; margin-right: 7%;" type="info">打开刷脸支付</van-button>
            </a>
            <a href="alipayqr://platformapi/startapp?saId=10000007">
                <van-button type="info">打开扫码支付</van-button>
            </a>
        </div>

    </div>
</template>
<script>
    var set_money;
    import QRCode from 'qrcodejs2'
    //import QRCode from 'qrcode2'
    export default {
        data() {
            return {
                get_money: '',
            }
        },
        methods: {
            qrcodeScan() { //生成二维码
                let qrcode = new QRCode('qrcode', {
                    render: 'canvas', // 设置渲染方式（有两种方式 table和canvas，默认是canvas）  
                    background: '#f0f',
                    foreground: '#ff0',
                    width: 200, // 二维码宽度 
                    height: 200, // 二维码高度
                    text: '您已经欠费' + this.masg + '元' + '请转支付宝15909076249给我',
                })
            },
        },
        props: ['masg'], //props接受父组件传过来的数据

        mounted() {
            this.qrcodeScan(); // 注：需在mounted里触发qrcodeScan函数
            set_money = '您已经欠费' + this.masg + '元';
        }
    }
</script>