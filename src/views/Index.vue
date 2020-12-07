<template>
  <div class="block">
    <!-- banner 轮播 start -->
    <el-carousel height="200px">
      <el-carousel-item v-for="pic in pics" :key="pic.url">
        <img :src="pic.url" />
      </el-carousel-item>
    </el-carousel>
    <!-- banner 轮播 end -->

    <!-- 通知 轮播 start -->
    <van-notice-bar left-icon="volume-o" text="尊敬的各位业主： 您好，由于水泵房控制器出现错误，现在正在紧急维修中。在此期间，将会停水，预计停水时间
    为17：30-20：00。为此，给您造成的不便，我们深表歉意。 2020-12-12" />
    <!-- 通知 轮播 end -->

    <!-- 功能 选择 start -->
    <div class="icons">
      <div class="icon" v-for="icon in icons" :key="icon.id" @click="gotolink(icon)">
        <div class="icon-img">
          <img :src="icon.imgUrl" class="icon-img-content">
        </div>
        <p class="icon-desc">{{icon.desc}}</p>
      </div>
    </div>
    <!-- 功能 选择 end -->

    <!-- 广告 start -->
    <div class="advertisement">
      <el-carousel height="200px">
        <el-carousel-item v-for="ad in ads" :key="ad.url">
          <img :src="ad.url" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 广告 end -->

    <!-- footer start -->
    <el-footer>
      <div class="footer-icons">
        <div class="footer-icon" v-for="ficon in ficons" :key="ficon.id">
          <div class="icon-img">
            <img :src="ficon.imgUrl" class="icon-img-content">
          </div>
          <p class="icon-desc">{{ficon.desc}}</p>
        </div>
      </div>
    </el-footer>
    <!-- footer end -->

  </div>
</template>


<script>
  export default {
    data() {
      return {
        pics: [{
            url: require("../assets/banner/banner1.jpg")
          },
          {
            url: require("../assets/banner/banner2.jpg")
          },
          {
            url: require("../assets/banner/banner3.jpg")
          },
          {
            url: require("../assets/banner/banner4.jpg")
          },
        ],


        icons: [{
            id: "001",
            imgUrl: require('../assets/icon/note.png'),
            desc: "小区公告"
          },
          {
            id: "002",
            imgUrl: require('../assets/icon/repair.png'),
            desc: "小区维修"
          },
          {
            id: "003",
            imgUrl: require('../assets/icon/pay.png'),
            desc: "生活缴费"
          },
          {
            id: "004",
            imgUrl: require('@/assets/icon/door.png'),
            desc: "手机开门"
          },
          {
            id: "005",
            imgUrl: require('@/assets/icon/package.png'),
            desc: "快递代收"
          },
          {
            id: "006",
            imgUrl: require('@/assets/icon/car.png'),
            desc: "生活超市"
          },
          {
            id: "007",
            imgUrl: require('@/assets/icon/service.png'),
            desc: "小区家政"
          },
          {
            id: "008",
            imgUrl: require('@/assets/icon/advice.png'),
            desc: "意见建议"
          },
        ],

        ads: [{
            url: require('../assets/ad/ad1.png')
          },
          {
            url: require("../assets/ad/ad2.jpg")
          },
          {
            url: require("../assets/ad/ad3.jpg")
          },
          {
            url: require("../assets/ad/ad4.jpg")
          },
        ],

        ficons: [{
            id: "1",
            imgUrl: require('../assets/icon/home.png'),
            desc: "主页"
          },
          {
            id: "2",
            imgUrl: require('../assets/icon/assist.png'),
            desc: "服务"
          },
          {
            id: "3",
            imgUrl: require('../assets/icon/mail.png'),
            desc: "通知"
          },
          {
            id: "4",
            imgUrl: require('../assets/icon/me.png'),
            desc: "我的",
          },
        ],

      };
    },
    methods: {
      gotolink(icon) {
        if (icon.id == '001') {
          this.$router.replace('/')
        }
        if (icon.id == '002') {
          this.$router.replace('/Payment')
        }
      }
    }

  };
</script>


<style>
  .block {
    width: 420px;
    height: 520px;
  }


  .icon,
  .footer-icon {
    height: 0;
    width: 25%;
    padding-bottom: 24%;
    position: relative;
    overflow: hidden;
    float: left;
  }

  .icon-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 12px;
    box-sizing: border-box;
    padding: 6px;
  }

  .icon-img img {
    width: 50px;
    height: 50px;
  }

  .icon-img-content {
    display: block;
    margin: 0 auto;
    height: 100%;
  }

  .icon-desc {
    font-size: 18px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 18px;
    line-height: 18px;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .advertisement .el-carousel {
    border: 1px solid #fff;
    width: auto;
  }
</style>