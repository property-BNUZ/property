<template>
    <div>
        <page-header title="住户中心" />

        <info-display :info="info" />
        <template v-if="login">
            <van-divider content-position="left">基础服务</van-divider>
            <base-service :icons="baseServiceIcons" />

            <van-divider content-position="left">超市订单</van-divider>
            <supermarket-service :icons="supermarketServiceIcons" />
        </template>

        <setting-and-about :login="login" />

        <label-box />
    </div>
</template>

<script>
    import '@/util/util.js'
    import InfoDisplay from '@/components/self/InfoDisplayBox.vue';
    import IconBox from '@/components/self/IconBox.vue';
    import SettingAndAbout from '@/components/self/SettingAndAbout.vue';
    export default {
        components: {
            InfoDisplay,
            BaseService: IconBox,
            SupermarketService: IconBox,
            SettingAndAbout
        },
        data() {
            return {
                login: false,
                baseServiceIcons: [{
                    image: '#icon-shouye-copy',
                    title: '我的房屋',
                    link: ''
                }, {
                    image: '#icon-zhangdan',
                    title: '我的账单',
                    link: '/Payment'
                }, {
                    image: '#icon-banshou',
                    title: '我的报修',
                    link: '/Repair'
                }, {
                    image: '#icon-building-automation',
                    title: '我的小区',
                    link: ''
                }],
                supermarketServiceIcons: [{
                    title: '待付款',
                    image: '#icon-31daifukuan',
                    num: 0,
                    link: ''
                }, {
                    title: '待发货',
                    image: '#icon-31daifahuo',
                    num: 1,
                    link: ''

                }, {
                    title: '待收货',
                    image: '#icon-31daishouhuo',
                    num: 1,
                    link: ''
                }, {
                    title: '待评价',
                    image: '#icon-31daipingjia',
                    num: 1,
                    link: ''
                }],
                info: {}
            }
        },
        methods: {
            getDate(username) {
                // console.log(this.$util.getUserInfo());
                console.log(this.$util.getUser());
                console.log(this.$util.getUserInfo());
                if (this.$util.getUserInfo() != null && this.$util.getUserInfo().user.username == this.$util.getUser()
                    .username) {
                    this.info = this.$util.getUserInfo();
                    return;
                }
                axios.post('http://121.196.105.252:8000/getUserInfo/' + username).then(res => {
                    if (res.status == 200) {
                        this.info = res.data;
                        let temp = res.data;
                        console.log(temp);
                        const userInfo = JSON.stringify(temp);
                        window.sessionStorage.setItem('userInfo', userInfo);
                        // console.log(this.info);
                    }
                });
            }
        },
        mounted() {
            var user = this.$util.getUser();
            if (user == null) {
                this.login = false;
            } else {
                this.login = true;
            }
            if (user != null) {
                this.getDate(user.username);
            }
        }
    }
</script>

<style scoped>
</style>