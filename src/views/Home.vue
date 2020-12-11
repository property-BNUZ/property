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
  import HeaderSwipe from '@/components/home/HeaderSwipe.vue';
  import IconBox from '@/components/home/IconBox.vue';
  export default {
    components: {
      HeaderSwipe,
      IconBox,
    },
    data() {
      return {

      };
    },

  };
</script>


<style>

</style>