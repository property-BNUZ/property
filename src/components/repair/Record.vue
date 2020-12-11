<template>
    <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="date" label="日期" width="110">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="80">
        </el-table-column>
        <el-table-column prop="status" label="状态" width="120">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        props: {
            tableData: {
                type: Array,
            },
        },
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>

</style>