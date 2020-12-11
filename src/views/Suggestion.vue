<template>
  <div>
    <page-header :title="title" :backurl='this.$route.query.backurl' />
    <van-notice-bar left-icon="volume-o" text="请广大业主积极按时缴纳小区的电费物业费，争做文明小区，从我做起！" />
    <van-swipe-cell>
      <van-card desc="住址：4栋1单元101" title="姓名：李爱国" thumb="https://img.yzcdn.cn/vant/cat.jpeg">
        <template #tags>
          <van-button size="mini" color="linear-gradient(to right, #88c1fa, #1989fa)" @click="showList=true">历史记录
          </van-button>
        </template>
      </van-card>
    </van-swipe-cell>
  </div>
</template>

<script>
  export default {
    components: {
      
    },
    computed: {
      text() {
        return this.currentRate.toFixed(0) + '%';
      },
    },
    methods: {
      handleClick(row, flg) {
        if (flg) {
          this.money = row.money * 100 * -1;
          this.time = this.getNowFormatDate();
          console.log(this.time);
        } else {
          this.money = row.money * 100 * 1;
          this.showmap = 1;
          this.percentage = this.money / 1000;
          this.type = row.type;
        }
      },
      
    },

    data() {
      return {
        title: '意见建议',
        time: 0,
        currentRate: 0,
        percentage: 0,
      }
    },
  }
</script>


<style>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 420px;
    height: 520px;
    background-color: #fff;
  }
</style>