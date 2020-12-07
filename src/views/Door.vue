<template>
  <div>
    <van-notice-bar left-icon="volume-o" text="请广大业主积极按时缴纳小区的电费物业费，争做文明小区，从我做起！" />
    <van-swipe-cell>
      <van-card desc="住址：4栋1单元101" title="姓名：李爱国" thumb="https://img.yzcdn.cn/vant/cat.jpeg" >
      <template #tags>
        <van-button size="mini" color="linear-gradient(to right, #88c1fa, #1989fa)" @click="showList=true">历史记录</van-button>
      </template>
      </van-card>
    </van-swipe-cell>
    <van-panel title="申请须知" desc="请仔细阅读以下内容，否则后果自负" style="font-size: 14px">
      <div style="padding: 20px">
        <span style="line-height: 25px">
        1、严禁翻越围栏或围墙
        </br>
        2、来访人员须向门卫出示申请码
        </br>
        3、未经业主或房屋使用人同意，任何人员不得随意进入房屋
        </br>
        4、请着装整齐、举止文明
        </br>
        5、严禁在小区内从事违章、违法活动
        </br>
        6、外来人员进出小区必须严格遵守本小区物业管理规定，不
        </br>
           得影响公共安全，破坏公共环境和损害业主权益
           </br>
        7、严易燃、易爆、剧毒、放射性物品材料进入小区
        </br>
        8、疫情期间请登录粤康码，并在申请时上传14天内行程截图
        </br>
        </span>
      </div>
      <template #footer #right>
      <van-button size="small" type="danger" style="margin-left: 130px"
       @click="dialogVisible = true"
       color="linear-gradient(to right, #88c1fa, #1989fa)"
      >申请通行码</van-button>
    </template>
    </van-panel>
     <!-- 弹窗缴费 -->
    <van-dialog v-model="dialogVisible" title="请如实填写一下信息" show-cancel-button @confirm="change">
      <div style="padding: 30px">
        <van-field
            name="姓名"
            label="姓名"
            placeholder="请填真实姓名"
          />
          <van-field
            name="性别"
            label="性别"
            placeholder="请填性别"
          />
          <van-field
            name="手机号"
            label="手机号"
            placeholder="请填真实手机号"
          />
          <van-field
            name="身份证号码"
            label="身份证号码"
            placeholder="请填写完整的身份证号码"
          />
      </div>
    </van-dialog>
    <van-notify v-model="show" type="success">
      <van-icon name="bell" style="margin-right: 4px;" />
    <span>已提交，请耐心等待管理员审核</span>
    </van-notify>
    <!-- 历史记录 -->
    <van-dialog v-model="showList" title="历史记录如下" show-cancel-button>
    <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
    >
    <van-cell v-for="item in list" :key="item" :title="item" />
    </van-list>
    </van-dialog>
    <van-divider
      :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
      >
      请登录粤康码将14天内行程截图并提交
    </van-divider>
    <van-uploader v-model="fileList" multiple style="margin-left: 13px"/>
  </div>
</template>

<script>
  export default {
    computed: {
    text() {
      return this.currentRate.toFixed(0) + '%';
    },
  },
    methods: {
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
      Close(){
        this.showmap = 0;
      },
      handleClick(row, flg) {
        if(flg){
          this.money = row.money * 100 * -1;
          this.time = this.getNowFormatDate();
          console.log(this.time);
        }else{
          this.money = row.money * 100 * 1;
          this.showmap = 1;
          this.percentage = this.money/1000;
          this.type = row.type;
        }
      },
      change() {
        this.show = true;
      },
      // submite() {
      //   this.show = false;
      // },
      onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 10) {
          this.finished = true;
        }
      }, 1000);
    },
    },

    data() {
      return {
        time: 0,
        currentRate: 0,
        percentage : 0,
        money: 0,
        showmap : 0,
        show: false,
        dialogVisible: false,
        showShare: false,
        options: [],
        tableData: [],
        show: false,
        list: [],
        loading: false,
        finished: false,
        showList: false,
        fileList: [
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
      ],
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