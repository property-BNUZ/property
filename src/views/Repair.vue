<template>
    <div>
        <repair-header />
        <record :tableData="recordTableData"></record>
    </div>
</template>

<script>
    import RepairHeader from '@/components/repair/RepairHeader.vue'
    import Record from '@/components/repair/Record.vue'

    export default {
        data() {
            return {
                recordTableData: []
            }
        },
        components: {
            RepairHeader,
            Record
        },
        methods: {
            getDate() {
                axios.get('http://121.196.105.252:8000/repairs').then(this.handleGetData);
            },
            handleGetData(res) {
                console.log(res);
                if (res.status == 200) {
                    console.log(res.data);
                    this.recordTableData = res.data;
                }
            },
        },
        mounted() {
            this.getDate();
        }
    }
</script>

<style scoped>

</style>