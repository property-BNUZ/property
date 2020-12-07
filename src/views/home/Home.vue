<template>
  <div>
    <!-- 轮播(图片和通知) start -->
    <header-swipe></header-swipe>
    <!-- 轮播(图片和通知) end -->

    <!-- 功能 选择 start -->
    <icon-box></icon-box>
    <!-- 功能 选择 end -->

    <!-- footer start -->
    <label-box></label-box>
    <!-- footer end -->

  </div>
</template>


<script>
  import HeaderSwipe from '../home/components/HeaderSwipe.vue';
  import IconBox from '../home/components/IconBox.vue';
  import LabelBox from '../../components/LabelBox.vue';
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