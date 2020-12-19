<template>  
<el-row>  
    <el-col :span="24" v-for="(notice, index) in notices" :key="index">  
      <el-card class="box-card">  
        <div class="p1">{{notice.title}}</div>  
        <div class="p3">{{notice.desc}}</div>  
        <div class="p2">{{notice.date}}</div>  
    <!-- <div v-for="(notice, index) in notices" :key="index" class="text item" > -->  
    <!-- </div> -->  
</el-card>  
    </el-col>  
</el-row>  
</template>  
  
<script>  
export default {  
  data() {  
    return {  
        repairRecord: {  
                id: '',  
                title: '',  
                desc: '',  
                date: '',  
                },
        notices: [{  
                        id: "N1",  
                        title: "10至11月水电费缴费通知",  
                        desc: "尊敬的业主：你们好，物业公司现已将2020年10月1日至2020年11月31日水电表底抄录完毕，并已导入收费系统，为了不影响您的正常使用，请您于本月15日前按时缴纳水电费。缴费方式可通过线上缴费，也可以到物业处通过支付宝、微信扫码、现金缴纳",  
                        date: "2020-12-11",  
                        //link: '/'  
                    },  
                    {  
                        id: "N2",  
                        title: "物业收费公告【1201】",  
                        desc: "尊敬的业主，您好！物业管理处收缴物业费的工作正在展开，物业费是小区维护正常秩序、环境卫生、公共配套设施维护服务的根本保证。如果物业费不能按时缴纳，将会对物业服务工作造成不利影响，同时也侵犯了已交费业主的利益。因此，请还未缴纳物业费的业主尽快到物业处缴纳。",  
                        date: "2020-12-01",  
                        //link: '/'  
                    },  
                    {  
                        id: "N3",  
                        title: "服务平台上线啦！！！",  
                        desc: "本可向物业行业、公共停车场、社区等场所提供：智慧社区服务、小区电商、智能停车场、智能充电桩、云可视对讲系统等服务，为社区管理者提供了统一接入管理平台，所有数据、功能均可统一管理，无需开发3分钟即可快速接入微信小程序",  
                        date: "2020-12-01",  
                        //link: '/'  
                    },    
                ],  
    };  
      
  },  
  methods: {  
            getData() {  
                axios.get('/mock/notice.json').then(res => {  
                    console.log(res.data);  
                });  
            },  
        },  
        mounted(){  
            this.getData();  
        }  
}  
</script>  
  
<style scoped>  
  
  .box-card{  
      height: 180px;  
  }  
  
  .p1{  
      position: relative;  
      bottom: 10px;  
      font-size: 22px;    
      font-weight: 800;    
  }  
  
  .p2{  
      position: relative;  
      top: 10px;  
      font-size: 16px;    
      color: grey;    
  }  
  
  .p3{  
      font-size: 18px;   
      overflow: hidden;  
      text-overflow: ellipsis;  
      display: -webkit-box;  
      -webkit-line-clamp: 4;  
      -webkit-box-orient: vertical;  
  }  
  
    
</style>    