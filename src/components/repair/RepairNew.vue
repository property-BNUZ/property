<template>
    <div>
        <page-header title="新建报修" />
        <van-form @submit="onSubmit">
            <van-field v-model="repairRecord.address" name="address" label="单元楼及房号" placeholder="单元楼及房号"
                :rules="[{ required: false, message: '请填写单元楼及房号' }]" />
            <van-field v-model="repairRecord.details" rows="5" name="details" autosize label="详情" type="textarea"
                maxlength="100" placeholder="请输入报修详情" show-word-limit />
            <van-field v-model="repairRecord.contactPerson" name="contactPerson" label="联系人" placeholder="联系人"
                :rules="[{ required: true, message: '请填写联系人' }]" />
            <van-field v-model="repairRecord.phoneNumber" name="phoneNumber" label="手机号" placeholder="手机号"
                :rules="[{ required: true, message: '请填写手机号' }]" />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                    提交
                </van-button>
            </div>
        </van-form>
    </div>

</template>

<script>
    import {
        Dialog
    } from 'vant';
    export default {
        data() {
            return {
                repairRecord: {
                    id: '',
                    address: '',
                    details: '',
                    contactPerson: '',
                    date: '',
                    phoneNumber: '',
                    status: 0
                }
            };
        },
        methods: {
            onSubmit(values) {
                let id = this.$util.getUser().id;
                let nowData = new Date();
                let value =
                    nowData.getFullYear() + "-" + (nowData.getMonth() + 1) + "-" + nowData.getDate();
                this.repairRecord.date = value;
                this.repairRecord.status = 2;
                axios.post('http://121.196.105.252:8000/repair/' + id, this.repairRecord).then(res => {
                    if (res.status == 200 && res.data == true) {
                        Dialog.alert({
                            title: '提交成功',
                        }).then(() => {
                            this.$router.go(-1); // on close
                        });
                    } else {
                        Dialog.alert({
                            title: '提交失败',
                            message: '未知错误，请稍候提交',
                        }).then(() => {});
                    }
                });
            },
        },
    }
</script>

<style scoped>

</style>