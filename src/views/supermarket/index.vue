<template>
    <div>
        <PageHeader></PageHeader>
        <Heard></Heard>
        <Body></Body>
    </div>
</template>
<script>
  import Heard from './components/head';
  import Body from './components/body.vue'
//   import IconBox from '@/components/home/IconBox.vue';
  export default {
    components: {
      Heard,
      Body
    },
    data() {
      return {

      };
    },

  };
</script>