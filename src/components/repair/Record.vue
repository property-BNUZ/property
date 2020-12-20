<template>
    <div>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column fixed prop="date" label="日期" width="100">
            </el-table-column>
            <el-table-column prop="contactPerson" label="姓名" width="80">
            </el-table-column>
            <el-table-column :prop="tableData.status == 1 ? 'date' : 'status' " label="状态" width="70">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="90">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="showInfo(scope.row)">查看</el-button>
                    <el-button type="text" size="small" @click="deleteInfo(scope.row)"
                        :disabled="scope.row.status == '完成'">
                        撤销</el-button>
                </template>
            </el-table-column>
        </el-table>
        <van-popup v-model="show" :style="{ height: '60%' , width:'80%'}">
            <van-cell-group style="padding: 15px 10px">
                <van-cell title="日期" :value="showRow.date" />
                <van-cell title="单元楼及房号" :value="showRow.address" />
                <van-cell title="联系人" :value="showRow.contactPerson" />
                <van-cell title="手机号：" :value="showRow.phoneNumber" />
                <van-cell title="详情：" />
                <van-cell value-class="ppp" :value="showRow.details" />
            </van-cell-group>
        </van-popup>
    </div>
</template>

<script>
    import {
        Dialog
    } from 'vant';
    export default {
        props: {
            tableData: {
                type: Array,
            },
        },
        data() {
            return {
                show: false,
                showRow: {},
            }
        },
        methods: {
            showInfo(row) {
                this.showRow = row;
                this.show = true;
                console.log(row);
            },
            deleteInfo(row) {
                // if (row.status == 2) {
                axios.delete('http://121.196.105.252:8000/repairs/' + row.id).then(res => {
                    if (res.status == 200 && res.data == true) {
                        Dialog.alert({
                            title: '删除成功',
                        }).then(() => {
                            console.log(row);
                            this.tableData.some((item, i) => {
                                if (item.id == row.id) {
                                    this.tableData.splice(i, 1);
                                    return true;
                                }
                            })
                            // this.tableData.splice(row);
                        });
                    }
                });
                // }
            }
        },
        mounted() {
            for (var i in this.tableData) {
                console.log(i);
            }
            // this.tableData.status = this.tableData.status == 1 ? "完成" : "未完成";
        }
    }
</script>

<style scoped>
    .el-dialog__body {
        padding: 15px 10px;
    }

    .ppp {
        color: #969799;
    }
</style>