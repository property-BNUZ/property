<template>
    <div>
        <notice-header></notice-header>
        <notice-box></notice-box>
        <el-divider>暂无数据</el-divider>
        <label-box />
    </div>
</template>

<script>
    import NoticeHeader from '../components/common/Header';
    import LabelBox from '../components/common/LabelBox';
    import NoticeBox from '../components/notie/notice_box.vue';
    export default {
        components: {
            NoticeHeader,
            NoticeBox,
            LabelBox,
        },
    }
</script>

<style scoped>

</style>