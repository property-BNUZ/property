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
            getData() {
                let id = this.$util.getUser().id;
                if (id != null) {
                    axios.get('http://121.196.105.252:8000/repairs/' + id).then(res => {
                        if (res.status == 200) {
                            var temp = res.data;
                            temp.status = temp.status == 1 ? "完成" : "未完成";
                            for (var i = 0; i < temp.length; i++) {
                                temp[i].status = temp[i].status == 1 ? "完成" : "未完成";
                            }
                            this.recordTableData = temp;

                        }
                    });
                }
            }
        },
        mounted() {
            this.getData();
        }
    }
</script>

<style scoped>

</style>