<template>
    <div>
        <page-header title="社区活动" />
        <!-- <button @click="getData">测试</button> -->
        <!-- <img :src="'data:image;base64,' + image"> -->
        <activity-content :image="image" />
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
            }
        },
        methods: {
            getData() {
                axios.get('http://121.196.105.252:8000/activity').then((res) => {
                    console.log(res);
                    this.image = res.data.image;
                });
                axios.get()
            }
        },
        mounted() {
            this.getData();
        }
    }
</script>

<style scoped>
</style>