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
                axios.get('/api/repair.json').then(this.handleGetData);
                console.log(111);
            },
            handleGetData(res) {
                if (res.status == 200) {
                    this.recordTableData = res.data.repairRecord;
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