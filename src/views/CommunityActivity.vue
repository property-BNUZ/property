<template>
    <div>
        <page-header title="社区活动" />
        <!-- <button @click="getData">测试</button> -->
        <!-- <img :src="'data:image;base64,' + image"> -->
        <activity-content :activities="activities" />
    </div>
</template>

<script>
    import ActivityContent from '@/components/CommunityActivity/ActivityContent.vue';
    import axios from 'axios';
    export default {
        components: {
            ActivityContent
        },
        data() {
            return {
                image: '',
                activities: []
            }
        },
        methods: {},
        mounted() {
            // this.getData();
        }
    }
</script>

<style scoped>
</style>