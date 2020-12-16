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
    <el-dialog title="提示" :visible.sync="show" width="90%">
      <van-field v-model="name" type="name" label="用户名" />
      <van-field
          v-model="sms"
          center
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
        >
      <template #button>
        <van-button size="small" type="primary" color="#1989fa" @click="sold">发送验证码</van-button>
      </template>
    </van-field>
    </el-dialog>
    <!-- 意见提交 -->
  <van-field
  v-model="message"
  rows="15"
  autosize
  
  type="textarea"
  maxlength="500"
  placeholder="请输入留言"
  show-word-limit
/>
<div style="margin: 16px; color: #1989fa;" color="#1989fa">
    <van-button round block type="primary" native-type="submit" @click="submit">
      匿名提交
    </van-button>
  </div>
  <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
      提交图片
    </van-divider>
  <van-uploader v-model="fileList" multiple style="margin-left: 13px" />
  <!-- 历史记录 -->
  <van-dialog v-model="showList" title="历史记录如下" show-cancel-button>
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell v-for="item in list" :key="item" :title="item" />
      </van-list>
    </van-dialog>
  </div>
</template>

<script>
import { Toast } from 'vant';
  export default {
    components: {
      
    },
    computed: {
      text() {
        return this.currentRate.toFixed(0) + '%';
      },
    },
    methods: {
      submit() {
        this.$dialog.alert({
           message: '感谢您的反馈，祝您生活愉快！',
            }).then(() => {
          });
        this.message = '';
      },
      onLoad() {
        // 异步更新数据
        // setTimeout 仅做示例，真实场景中一般为 ajax 请求
        setTimeout(() => {
          if(this.listm.length == 0){
              this.list.push('暂无历史记录');
            }
            else{
              for (let i = 0; i < this.listm.length; i++) {
                this.list.push(this.listm[i]);
                }
            }

          // 加载状态结束
          this.loading = false;

          // 数据全部加载完成
          this.finished = true;
        }, 1000);
      },

      sold() {
        this.show = false;
      },
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
        show: true,
        fileList: [{
            url: 'https://img.yzcdn.cn/vant/leaf.jpg'
          },
        ],
        name: '',
        sms: '',
        showList: false,
        listm: [1,1,1],
        loading: false,
        finished: false,
        list: [],
        message: '',
    }
  }
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