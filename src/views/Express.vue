<template>
  <div class="home">
    <page-header :title="title" />
    <van-uploader :after-read="afterRead" v-model="fileList" />
    <div>
      <!-- 773068856629314 -->
      <a :href=" new_url ">
        <van-button type="info" @click="console">查询快递</van-button>
      </a>
    </div>

    <MyList ref="child"> </MyList>
  </div>


</template>


<script>
  var get_url = '';
  import Quagga from 'quagga'
  import MyList from '@/components/express/List.vue'
  var count= 0;
  export default {
    name: 'Barcode',
    components: {
      Quagga,
      MyList,
    },

    data() {
      return {
        set_url: '',
        title: '快递代收',
        barcode: '',
        fileList: [],
      }
    },
    computed: {
      new_url() {
        return 'http://www.kuaidi100.com/chaxun?com=shentong&nu=' + this.set_url;
      }
    },
    methods: {
      console() {
        this.set_url = get_url;
      },
      afterRead(file) {
        // 此时可以自行将文件上传至服务器
        this.decode(file.file)
        // .then(x => {

        // })
        console.log(get_url);
      },
      decode(file) {
        console.log(this);
        var p = this;
        Quagga.decodeSingle({
            inputStream: {
              size: 800, // 这里指定图片的大小，需要自己测试一下
              singleChannel: false
            },
            locator: {
              patchSize: 'medium',
              halfSample: false
            },
            numOfWorkers: 1,
            decoder: {
              readers: [{
                format: 'code_128_reader', // ean_reader 这里指定ean条形码，就是国际13位的条形码   code39    code_128
                config: {}
              }]
            },
            locate: true,
            src: URL.createObjectURL(file)
          },
          function a(result) {
            get_url = result.codeResult.code;

            p.$refs.child.tableData.push({
              date: count++,
              number: get_url
            });
            console.log(get_url);
            return get_url;
          }
        )
      },

    }
  }
</script>

<style>
  .express {
    display: inline;

  }
</style>