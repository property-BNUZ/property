<template>
  <div>
    <page-header :title="title" :backurl='this.$route.params.backurl' />
    <van-notice-bar left-icon="volume-o" text="请广大业主积极按时缴纳小区的电费物业费，争做文明小区，从我做起！" />
    <img id="img" style="width: 100px;height: 100px;">
    <div style="position: relative; top: -100px; left: 120px;">
      <p>姓名：{{username}}</p>
      <p  style="font-size:10px ;">住址：四栋1单元101</p>
    </div>
    <el-table :data="tableData" border style="width: 100%;position: relative; top: -80px;  ">
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
  import Mypay from '@/components/payment/pay.vue'
  export default {
    props: {
      source: String
    },
    components: {
      Mypay
    },
    computed: {
      text() {
        return this.currentRate.toFixed(0) + '%';
      },
    },
    created() {
      //在页面加载时读取sessionStorage里的状态信息
      if (sessionStorage.getItem("store")) {
        this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store"))))
      }

      //在页面刷新时将vuex里的信息保存到sessionStorage里
      window.addEventListener("beforeunload", () => {
        sessionStorage.setItem("store", JSON.stringify(this.$store.state))
      })
    },
    mounted() {
      this.testReq();
      this.tableData[this.tableData.length - 1].date = this.getNowFormatDate();
    },
    // beforeUpdate(){
    //   this.getmoneySum();   
    //   console.log("********");
    // },
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
        for (var i = 0; i < this.tableData.length - 1; i++) {
          // console.log(this.tableData[i].money);
          if (this.tableData[i].money < 0) {
            this.tableData[this.tableData.length - 1].money += this.tableData[i].money;
          }
        }
      },
      testReq() {
        // var that = this
        let userInfo = JSON.parse(window.sessionStorage.getItem('userInfo'));
        this.username = userInfo.user.username
          console.log(userInfo);
          document.getElementById('img').setAttribute( 'src', 'data:image/png;base64,'+ userInfo.image );
          // document.getElementById('img').setAttribute( 'src',userInfo.image  );
          var userId = JSON.parse(sessionStorage.getItem('user'));      
          axios.get('http://121.196.105.252:8000/payment/' + userId.id ).then((res) => {
            var temp
            for (let i = 0; i < 5; i++) {
            
              if (res.data[i].price > 0) {
                temp = 0
              } else {
                temp = 1
              }
              this.$store.state.list.push({
                time: res.data[i].date,
                price: res.data[i].price,
                flg: temp
              })
            }
            for (let i = 0; i < 5; i++) {
              this.tableData[i].date = this.$store.state.list[i].time
              this.tableData[i].money = this.$store.state.list[i].price
              this.tableData[i].flag = this.$store.state.list[i].flg
            }
            this.tableData[0].money += 700
            this.getmoneySum();
            // console.log(this.tableData);
          }).catch((err) => {
            console.log(err)
          })   
      }
    },

    data() {
      return {
        username : '',
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