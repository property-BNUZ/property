<template>
    <div>
        <page-header title="新建报修" />
        <van-form @submit="onSubmit">
            <van-field v-model="address" name="address" label="单元楼及房号" placeholder="单元楼及房号"
                :rules="[{ required: false, message: '请填写单元楼及房号' }]" />
            <van-field v-model="details" rows="5" name="details" autosize label="详情" type="textarea" maxlength="100"
                placeholder="请输入报修详情" show-word-limit />
            <van-field v-model="contact_person" name="contact_person" label="联系人" placeholder="联系人"
                :rules="[{ required: true, message: '请填写联系人' }]" />
            <van-field v-model="phone_number" name="phone_number" label="手机号" placeholder="手机号"
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
    export default {
        data() {
            return {
                address: '',
                details: '',
                contact_person: '',
                phone_number: '',
            };
        },
        methods: {
            onSubmit(values) {
                axios.post('/api/repair', values).then(res => {
                    console.log(res);
                });
                console.log('submit', values);
            },
        },
    }
</script>

<style scoped>

</style>