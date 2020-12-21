<template>    
<el-row>    
    <el-col :span="24" v-for="(notice, index) in notices" :key="index" @click="gotolink(notice)">    
      <el-card class="box-card">    
        <div class="p1">{{notice.title}}</div>    
        <div class="p3">{{notice.desc}}</div>    
        <div class="p2">{{notice.date}}</div>    
</el-card>    
    </el-col>    
</el-row>  
</template>    
    
<script>  
  
//import notices from '../../../public/mock/notice.json';  
//import NoticeDetail from '../notice/notice_detail';  
  
export default {  
    // components: {  
    //         NoticeDetail,  
    //     },  
  data() {    
     return {   
        notices : {}  
     }  
  },  
  methods: {  
            getDate(userid) {  
                if (this.$util.getUserInfo() != null && this.$util.getUserInfo().user.username == this.$util.getUser()  
                    .username) {  
                    this.info = this.$util.getUserInfo();      
                }  
                axios.get('http://121.196.105.252:8000/notice/' + userid).then(res => {  
                    if (res.status == 200) {  
                        this.notices = res.data;  
                        // console.log(this.info);  
                    }  
                });  
            },  
  
            gotolink(icon) {  
                this.$router.push({  
                    path: '/' + notices.link,  
                    params: {  
                        backurl: ''  
                    }  
                })  
                // this.$router.replace('/' + icon.link);  
  
            }  
        },    
        mounted(){  
            var user = this.$util.getUser();  
            if (user == null) {  
                this.login = false;  
            } else {  
                this.login = true;  
            }  
            if (user != null) {  
                this.getDate(user.id);  
            }  
            //this.getData();  
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
    
      
</style>      