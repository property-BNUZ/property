<template>
    <div>
        <my-back title="设置" :backurl="this.$route.query.backurl" />
        <van-cell-group>
            <van-cell title="头像" is-link :clickable="true" />
            <van-cell title="姓名" is-link :clickable="true" />
            <van-cell title="手机" is-link :clickable="true" />
            <van-cell title="收货地址" is-link :clickable="true" />
        </van-cell-group>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>

</style>