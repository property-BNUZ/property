<template>
    <van-cell-group>
        <van-cell v-if="login" title="设置" :clickable="true" icon="setting-o" to="/Self/Setting" />
        <van-cell title="关于我们" :clickable="true" icon="info-o" to="/About" />
    </van-cell-group>
</template>

<script>
    export default {
        props: {
            login: Boolean
        }
    }
</script>

<style scoped>

</style>