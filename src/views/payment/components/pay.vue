<template>
    <div>
        <div id="qrcode" ref="qrcode" style="margin-left: 20%; margin-bottom: 10%;">
            <h2>您本次需缴费 {{masg / 100}}</h2>
            <br>
        </div>
        <div style="margin-left: 10%;">
            <a href="alipayqr://platformapi/startapp?appId=20000234">
                <van-button style="display: inline; margin-right: 10%;" type="info">打开刷脸支付</van-button>
            </a>
            <a href="alipayqr://platformapi/startapp?saId=10000007">
                <van-button type="info">打开扫码支付</van-button>
            </a>
        </div>

    </div>
</template>
<script>
    import QRCode from 'qrcodejs2'
    //import QRCode from 'qrcode2'
    export default {
        methods: {
            qrcodeScan() { //生成二维码
            console.log(111)
                let qrcode = new QRCode('qrcode', {
                    render: 'canvas', // 设置渲染方式（有两种方式 table和canvas，默认是canvas）  
                    background: '#f0f' , 
                    foreground: '#ff0' ,
                    width: 200, // 二维码宽度 
                    height: 200, // 二维码高度
                    text: 'http://www.bnuz.edu.cn/'
                })
            },
        },
        props: ['masg'], //props接受父组件传过来的数据

        mounted() {
            this.qrcodeScan(); // 注：需在mounted里触发qrcodeScan函数
        }
    }
</script>