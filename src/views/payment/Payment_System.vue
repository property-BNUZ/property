<template>
  <div>
    <payment-header :title="title" :backurl='this.$route.query.backurl' />
    <van-notice-bar left-icon="volume-o" text="请广大业主积极按时缴纳小区的电费物业费，争做文明小区，从我做起！" />
    <van-swipe-cell>
      <van-card desc="住址：4栋1单元101" title="姓名：李爱国" thumb="https://img.yzcdn.cn/vant/cat.jpeg" />
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>

    <el-table :data="tableDzata" border style="width: 100%">
      <el-table-column fixed prop="date" label="日期" width="100">
      </el-table-column>
      <el-table-column prop="type" label="欠费类型" width="80">
      </el-table-column>
      <el-table-column label="是否欠费" width="120">
        <template slot-scope="scope">
          <span v-if="scope.row.flag == 0">
            <el-tag type="success">未欠费</el-tag>
          </span>
          <span v-else>
            <el-tag type="danger">欠费 {{scope.row.money}} </el-tag>
          </span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button v-if="scope.row.flag == 1" @click="handleClick (scope.row,1); dialogVisible = true " type="text"
            size="small">缴费</el-button>
          <el-button v-if="scope.row.flag == 0" @click="handleClick (scope.row,0); dialogVisible = true " type="text"
            size="small">余额</el-button>

        </template>
      </el-table-column>
    </el-table>

    <!-- 弹窗缴费 -->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="100%" top="50vh" @close="Close">
      <!-- <Mypay></Mypay> -->
      <div style="width: 100%; height: 200px;">
        <van-circle v-if="this.showmap == 1" size="120px" v-model="currentRate" :rate="this.percentage" :speed="150"
          layer-color="#ebedf0" :text="text" />
        <span v-if="this.showmap == 1">您当前剩余 {{this.type}} 百分比</span>
        <p v-if="this.showmap == 0">截至{{this.time}} 您已经欠费 {{this.money / 100}}</p>
        <van-submit-bar v-if="this.showmap == 1" button-text="确认" @submit="dialogVisible = false" />
      </div>
      <van-submit-bar v-if="this.showmap == 0" :price="this.money" button-text="提交订单"
        @submit="showShare = !showShare,dialogVisible = false">
        <template #tip>
          <span> 点击提交订单则完成缴费，请您尽早续交欠费！</span>
        </template>
      </van-submit-bar>
    </el-dialog>
    <van-share-sheet v-model="showShare" title="选择缴费方式" @select="onSelect" :options="options" />

    <el-dialog title="提示" :visible.sync="dialogVisible_pay" width="90%">
      <Mypay :masg="money"></Mypay>
    </el-dialog>
  </div>

</template>
<script>


</script>
<script>
  import PaymentHeader from '../../components/Header.vue'
  import Mypay from './components/pay.vue'
  export default {
    props: {
      source: String
    },
    components: {
      PaymentHeader
    },
    computed: {
      text() {
        return this.currentRate.toFixed(0) + '%';
      },
    },
    mounted() {
      this.getmoneySum();
      this.tableData[this.tableData.length - 1].date = this.getNowFormatDate();;
    },
    methods: {
      onSelect(option) {
        // dialogVisible1 = true;
        this.showShare = false;
        this.dialogVisible_pay = true;
      },
      onClickLeft() {
        this.$router.replace('/')
      },
      getNowFormatDate() {
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
      },
      Close() {
        this.showmap = 0;
      },
      handleClick(row, flg) {
        if (flg) {
          this.money = row.money * 100 * -1;
          this.time = this.getNowFormatDate();
        } else {
          this.money = row.money * 100 * 1;
          this.showmap = 1;
          this.percentage = this.money / 1000;
          this.type = row.type;
        }
      },
      getmoneySum() {
        for (var i = 0; i < this.tableData.length; i++) {
          this.tableData[this.tableData.length - 1].money += this.tableData[i].money;
        }
      }

    },

    data() {
      return {
        title: '生活缴费',
        time: 0,
        currentRate: 0,
        percentage: 0,
        money: 0,
        showmap: 0,
        moneySum: 0,
        show: false,
        dialogVisible: false,
        dialogVisible_pay: false,
        showShare: false,
        options: [{
            name: '支付宝',
            icon: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1683440168,2286570410&fm=26&gp=0.jpg',
          },
          {
            name: '微信',
            icon: 'wechat'
          },
          {
            name: '农行卡',
            icon: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1757584602,1917003924&fm=26&gp=0.jpg',
          },
        ],
        tableData: [{
            date: '2016-05-02',
            type: '天然气',
            flag: 1,
            city: '天然气',
            money: -100
          }, {
            date: '2016-05-04',
            type: '物业费',
            flag: 0,
            money: 500
          }, {
            date: '2016-05-01',
            type: '水费',
            flag: 0,
            money: 100
          }, {
            date: '2016-05-01',
            type: '宽带费',
            flag: 1,
            money: -300
          },
          {
            date: '2016-05-03',
            type: '电费',
            flag: 1,
            money: -900
          },
          {
            date: '2016-05-01',
            type: '合计',
            flag: 1,
            money: 0
          },
        ]
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