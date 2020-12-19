<template>
    <div>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column fixed prop="date" label="日期" width="110">
            </el-table-column>
            <el-table-column prop="contactPerson" label="姓名" width="80">
            </el-table-column>
            <el-table-column :prop="tableData.status == 1 ? 'date' : 'status' " label="状态" width="70">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="90">
                <template>
                    <el-button type="text" size="small" @click="dialogVisible = true">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="报修记录" :show-close="false" :visible.sync="dialogVisible" width="90%">
            <van-cell-group>
                <div>
                    <span>标题</span>
                </div>
                <span>大撒旦哈手机开店好杰卡斯啊数据库大数据库打上看见啊手机开店哈市空间撒健康啊手机开店啊数据库按时静安寺到时看aks内容</span>

                <!-- <van-field label="文本" value="输入框只读啊帅哥大家啊速度过回家啊是个大世界啊睡觉的噶啥汇金大厦" readonly />
                <van-field label="文本" value="输入框已禁爱上的会计啊是肯德基啊是看见大叔就开大上看见用" disabled /> -->
            </van-cell-group>
            <span slot="footer" class="dialog-footer">
                <!-- <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button> -->
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        props: {
            tableData: {
                type: Array,
            },
        },
        data() {
            return {
                dialogVisible: false
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

</style>