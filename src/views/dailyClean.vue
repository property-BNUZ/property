<template>
  <div>
    <!-- 返回 start -->
    <clean-header></clean-header>
    <!-- 返回 end -->
    <van-address-edit
  :area-list="areaList"
  show-postal
  show-delete
  show-set-default
  show-search-result
  :search-result="searchResult"
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
    @save="onSave"
    @delete="onDelete"
    @change-detail="onChangeDetail"
    />


  </div>
</template>


<script>
    import CleanHeader from '../components/common/Header';
    import CleanIcon from '../components/server/Icon';
    import IconBox from '@/components/home/IconBox.vue';
    import LabelBox from '@/components/server/Icon.vue';
    import { ref } from 'vue';
    import { Toast } from 'vant';

    export default {
        components: {
          CleanHeader,
          LabelBox, 
          CleanIcon,
          IconBox,
    },
        setup() {

            const onSave = () => {
            Toast('save');
        };
        const onDelete = () => {
            Toast('delete');
        };
        const onChangeDetail = (val) => {
        if (val) {
            searchResult.value = [
            {
                name: '黄龙万科中心',
                address: '杭州市西湖区',
            },
        ];
        } else {
            searchResult.value = [];
        }
    };

    return {
      onSave,
      onDelete,
      areaList,
      searchResult,
      onChangeDetail,
    };
  },
};
        // setup() {
        //   const value = ref('');
        //   return { value };
        //   const app = createApp();
        //   app.use(VanImage);
          
        // },
        
        
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