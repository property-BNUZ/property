<template>
    <div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                activity: {}
            }
        },
        mounted() {
            this.activity = this.$route.params.activity;
            console.log(this.activity);
        }
    }
</script>

<style scoped>

</style>