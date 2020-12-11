<template>
    <div>
        <div id="qrcode" ref="qrcode" style="margin-left: 20%; margin-bottom: 10%;">
            <br>
        </div>

    </div>
</template>
<script>
    import QRCode from 'qrcodejs2'
    //import QRCode from 'qrcode2'
    export default {
        methods: {
            qrcodeScan() { //生成二维码
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

        mounted() {
            this.qrcodeScan(); // 注：需在mounted里触发qrcodeScan函数
        }
    }
</script>