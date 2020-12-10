<template>
    <div>
        <el-table :data="tableData" border style="width: 100%" >
            <el-table-column fixed prop="date" label="序号" width="40">
            </el-table-column>
            <el-table-column fixed prop="timeId" label="收货时间" width="100" >
            </el-table-column>
            <el-table-column prop="number" label="快递单号" width="150">
            </el-table-column>

            <el-table-column fixed="right" label="操作" width="90">
                <template slot-scope="scope">
                    <el-button @click=" handleClick(scope.row) ,dialogVisible = true ,disabledUser(scope.row.id,scope.$index)" type="text" size="small">选择送货时间
                    </el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog title="提示" :visible.sync="dialogVisible" width="90%">
            <van-datetime-picker v-model="currentDate" type="month-day" title="选择月日" :min-date="minDate"
                :max-date="maxDate" :formatter="formatter" @confirm="confirm" />
        </el-dialog>


    </div>
</template>

<script>
    export default {
        props: ['tableD'],
        data() {
            return {
                time :'',
                time_count : '',
                dialogVisible: false,
                minDate: new Date(2020, 0, 1),
                maxDate: new Date(2025, 10, 1),
                currentDate: new Date(),
                tableData: []
            }
        },
        methods: {
            handleClick(row) {
                return this.time;
            },
            disabledUser(q,index){
                console.log(index);
                this.time_count = index
                return index;
            },
            formatter(type, val) {
                if (type === 'month') {
                    return `${val}月`;
                } else if (type === 'day') {
                    return `${val}日`;
                }
                return val;
            },
            confirm(value) {
                value = this.formatDate(value);
                console.log(this.time_count);
                this.time = value ;
                var timeId = 'timeId';
                // this.tableData[this.time_count][timeId] = this.time 
                // console.log(typeof(this.tableData[this.time_count]))
                this.$set(this.tableData[this.time_count],'timeId',value)
                console.log(this.tableData[this.time_count])
                this.dialogVisible = false;
            },

            //格式化日期：yyyy-MM-dd
            formatDate(date) {
                var myyear = date.getFullYear();
                var mymonth = date.getMonth() + 1;
                var myweekday = date.getDate();
                if (mymonth < 10) {
                    mymonth = "0" + mymonth;
                }
                if (myweekday < 10) {
                    myweekday = "0" + myweekday;
                }
                return (myyear + "-" + mymonth + "-" + myweekday);
            }
        },
    }
</script>