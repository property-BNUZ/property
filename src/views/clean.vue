<template>
  <div>
    <clean-header></clean-header>
    <!--搜索框 start -->
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <!--搜索框 end -->
    <!-- 图片 start-->
    <el-row>
      <el-col :span="24">
    <van-image height="180" :src="require('@/assets/banner/clean-banner.jpg')" />
      </el-col>
    </el-row>
    <!-- 图片 end-->
    <!-- 图标 start-->
    <clean-icon></clean-icon>
    <!-- 图标 end-->

    


  </div>
</template>
<script src="./iconfont.js"></script>


<script>
  import CleanHeader from '../components/common/Header';
  import CleanIcon from '../components/server/Icon';
  import IconBox from '@/components/home/IconBox.vue';
  import LabelBox from '@/components/server/Icon.vue';
  import { ref } from 'vue';
  import { createApp } from 'vue';
  import { Icon } from 'vant';


    export default {
        components: {
          CleanHeader,
          LabelBox, 
          CleanIcon,
          IconBox,
    },
        // setup() {
        //   const value = ref('');
        //   return { value };
        //   const app = createApp();
        //   app.use(VanImage);
          
        // },
        
        methods: {
            gotolink(icon) {
                this.$router.push({
                    path: '/' + icon.link,
                    query: {
                        backurl: ''
                    }
                })
                // this.$router.replace('/' + icon.link);

            }
        }
        };
</script>

<style scoped>
    .tiny_box
    {
        border: solid 0.5px #ddd;
        position: relative;
        top: 120px;
    }

    .van-grid-item{
        border: 0.5px solid #ddd;
    }

    .icon {
    width: 40px;
    height: 40px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    }

    .van-grid-item p {
        font-size: 10px;
        color: #646566;
    }

</style>