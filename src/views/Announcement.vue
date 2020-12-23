<template>
<div>
    <page-header :title="title" :backurl='this.$route.query.backurl' >
    <!-- <van-tag round type="primary" style="height: 50px;float: left">标签</van-tag> -->
    </page-header>
<el-row>
    <el-col :span="24" v-for="(item, index) in ano" :key="index">
      <el-card class="box-card">
        <div class="p1">
            {{item.title}}
            <van-badge dot class="child" :class="{changeColor}">
            </van-badge>
        </div>
        <div class="p3" @click="changeColor =! changeColor">{{item.ano}}</div>
        <div class="p2">{{item.date}}</div>
    </el-card>
    </el-col>
</el-row>
</div>
</template>

<script>
export default {
  data() {
    return {
        title: '小区公告',
        ano: [],
        isActive: true,
        temp: -1,
        changeColor: false
    }
  },
  methods: {
            getData() {
                axios.get('http://121.196.105.252:8000/announcement').then(res => {
                    console.log(res.data);
                    this.ano = res.data;
                });
            },
            Click(index) {
                this.temp = index;
                this.isActive = !isActive;
                console.log(111);
            }
        },
        mounted(){
            this.getData();
        }
}
</script>

<style scoped>

  .box-card{
      height: 160px;
  }

  .p1{
      position: relative;
      bottom: 10px;
      font-size: 20px;
      font-weight: 800;
  }

  .p2{
      position: relative;
      top: 8px;
      font-size: 16px;
      color: grey;
  }

  .p3{
      position: relative;
      top: -6px;
      font-size: 16px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
  }
   .child {
    width: 10px;
    height: 10px;
    border-radius: 50%px;
    background-color: #1989fa;
  }
  .changeColor {
      background-color: white;
  }

</style>