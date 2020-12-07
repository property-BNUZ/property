<template>
   <div class="home">
      <home-header></home-header>
      <icon-box></icon-box>
      <label-box></label-box>
   </div>
</template>

<script>
   import IconBox from '../home/components/IconBox.vue';
   import LabelBox from '../home/components/LabelBox.vue';
   import HomeHeader from './components/Header'
   export default {
      name: 'Home',
      components: {
         HomeHeader,
         IconBox,
         LabelBox
      }

   };
</script>

<style>

</style>