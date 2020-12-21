<template>    
<el-row>  
  <el-col :span="24">  
    <el-card class="box-card">  
  <div slot="header" class="clearfix">  
    <span class="title">10月至11月水电缴费通知</span>  
    <p class="date">2020-12-11 14:30</p>  
  </div>  
  <div class="text item">  
    <span class="bold">尊敬的业主：</span>  
    <p>你们好，物业公司现已将2020年10月1日至2020年11月31日水电表底抄录完毕，并已导入收费系统，为了不影响您的正常使用，请您于本月15日前按时缴纳水电费。缴费方式可通过线上缴费，也可以到物业处通过支付宝、微信扫码、现金缴纳。</p>  
    <span class="bold">功能介绍</span>  
    <p>生活缴费：便捷的缴费方式，动动手指一键支付。</p>  
    <p>物业报修：省去繁琐流程，一键下单，足不出户完成报修。</p>  
    <p>投诉建议：随时随地可对社区问题提出建议，打造美好社区。</p>  
    <p>物业公告：第一时间了解物业最新动态。</p>  
  </div>  
  
  <van-image :src="require('@/assets/banner/clean-banner.jpg')" />  
  
  <div class="footer">xxxxxxxxxx</div>  
  <p class="date" style="color: black">2020-12-11</p>  
</el-card>  
  
  
  </el-col>  
</el-row>  
  
  
</template>    
    
<script>  
  
export default {   
  data() {    
    return {   
          
    }  
        
  },  
          
}    
</script>  
    
<style scoped>  
.clearfix{  
  height: 30px;  
}  
  
.title{  
  position: relative;  
  top: -10px;  
  font-size: 18px;  
  font-weight: 700;  
}  
  
.date{  
  color: grey;  
  font-weight: 600;  
  position: relative;  
  top: -10px;  
}  
  
.bold{  
  font-size: 20px;  
  font-weight: bold;  
}  
  
.van-image{  
  text-align: center;  
  width: 200px;  
  height: 200px;  
}  
  
</style>