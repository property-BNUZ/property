<template>
  <div>
    <!-- 轮播(图片和通知) start -->
    <header-swipe></header-swipe>
    <!-- 轮播(图片和通知) end -->

    <!-- 功能 选择 start -->
    <!-- <div class="icons">
      <div class="icon" v-for="icon in icons" :key="icon.id" @click="gotolink(icon)">
        <div class="icon-img">
          <img :src="icon.imgUrl" class="icon-img-content">
        </div>
        <p class="icon-desc">{{icon.desc}}</p>
      </div>
    </div> -->
    <icon-box></icon-box>
    <!-- 功能 选择 end -->

    <!-- 广告 start -->
    <!-- <div class="advertisement">
      <el-carousel height="200px">
        <el-carousel-item v-for="ad in ads" :key="ad.url">
          <img :src="ad.url" />
        </el-carousel-item>
      </el-carousel>
    </div> -->
    <!-- 广告 end -->

    <!-- footer start -->
    <!-- <el-footer>
      <div class="footer-icons">
        <div class="footer-icon" v-for="ficon in ficons" :key="ficon.id">
          <div class="icon-img">
            <img :src="ficon.imgUrl" class="icon-img-content">
          </div>
          <p class="icon-desc">{{ficon.desc}}</p>
        </div>
      </div>
    </el-footer> -->
    <label-box></label-box>
    <!-- footer end -->

  </div>
</template>


<script>
  import HeaderSwipe from '../home/components/HeaderSwipe.vue';
  import IconBox from '../home/components/IconBox.vue';
  import LabelBox from '../home/components/LabelBox.vue';
  export default {
    components: {
      HeaderSwipe,
      IconBox,
      LabelBox,
    },
    data() {
      return {
        ads: [{
            url: require('@/assets/ad/ad1.png')
          },
          {
            url: require("@/assets/ad/ad2.jpg")
          },
          {
            url: require("@/assets/ad/ad3.jpg")
          },
          {
            url: require("@/assets/ad/ad4.jpg")
          },
        ],

      };
    },


  };
</script>


<style>

</style>