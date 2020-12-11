<template>
    <div>
        <page-header title="住户中心" />

        <info-display :info="info" />

        <van-divider content-position="left">基础服务</van-divider>
        <base-service :icons="baseServiceIcons" />

        <van-divider content-position="left">超市订单</van-divider>
        <supermarket-service :icons="supermarketServiceIcons" />

        <setting-and-about />

        <label-box />
    </div>
</template>

<script>
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
                baseServiceIcons: [],
                supermarketServiceIcons: [],
                info: {}
            }
        },
        methods: {
            getDate() {
                axios.get('/api/self.json').then(this.handleGetData);
            },
            handleGetData(res) {
                if (res.status === 200) {
                    this.baseServiceIcons = res.data.baseServiceIcons
                    this.supermarketServiceIcons = res.data.supermarketServiceIcons
                    this.info = res.data.info
                }
            }
        },
        mounted() {
            this.getDate()
        }
    }
</script>

<style scoped>
</style>