<template>
  <div>
    <div class="background">
      <!-- <i class="el-icon-platform-eleme" style="color: blue;"></i>
      <el-input v-model="input" placeholder="请输入商品名称"></el-input> -->
      <div class="content">
        <el-card class="box-card">
          <div class="icon">
            <img class="iconImg" src="../img/零嘴.png">
          </div>
          <div class="text item">
            <h2 style="margin:0 0 3% 5%;">零嘴</h2>
            <el-tag>商家配送</el-tag>
            <span>约40分钟</span>
            <span>月售666</span>
            <br>
            <span class="text1">公告：因为配力不够，运送比较慢同学多点耐心</span>
            <br>
            <el-tag style="margin-top: 5%;" type="warning">满￥20减￥21</el-tag>            
          </div>
        </el-card>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
</script>
<style>
  .text1{
    font-size: 8px !important;
    margin: 5% !important;
  }
  .icon{
    width: 70px;
    height: 70px;
    margin-left: 70%;
    display: inline;
  }
  .iconImg{  
    width: 70px;
    height: 70px; 
    position: absolute;
    display: inline;
    border-radius:15px;

  }
  .background {
    width: 100%;
    height: 250px;
    background-image: url('../img/背景.jpg');
    background-size: 100%;
    background-repeat: no-repeat;
    font-size: 40px;
    padding: 0px;
  }

  .el-input {
    width: 60% !important;
    margin: 1% 0 0 5%;
  }
  .content {
    width: 90%;
    height: 200px;
    margin: 0 auto;
    position: relative;
    top: 10%;
    padding: 0;
  }

  .el-card__body {
    padding: 10px!important;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin: -10% 0 0 0 ;
    padding: 1px 0;
  }
  span{
    margin: 3px;
  }
</style>