<template>
    <div>
        <repair-header></repair-header>
        <record :tableData="recordTableData"></record>
    </div>
</template>

<script>
    import axios from 'axios'
    import RepairHeader from '../repair/components/Header.vue'
    import Record from './components/Record.vue'
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
            },
            handleGetData(res) {
                const data = res.data.data;
                console.log(res);
                if (res.data.ret && data.tableData) {
                    this.recordTableData = data.tableData;
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