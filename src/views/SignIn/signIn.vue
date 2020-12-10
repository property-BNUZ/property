<template>

	<van-form @submit="onSubmit">
		<!-- 输入用户名以及密码 -->
		<van-field v-model="username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
		<van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
		<!-- 选择小区 -->
		<van-picker v-model="where1" title="选择小区" show-toolbar :columns="columns" @confirm="onConfirm" @cancel="onCancel" @change="onChange" />
		<van-field v-model="where2" name="具体住址" label="具体住址" />
		<div style="margin: 16px;" @click="remove">
			<van-button round block type="info" native-type="submit">
				登陆
			</van-button>
		</div>
	</van-form>
</template>

<script>
	import Vue from 'vue';
	import {
		Form
	} from 'vant';
	Vue.use(Form);
	import {
		Picker
	} from 'vant';
	Vue.use(Picker);
	import { Field } from 'vant';
	Vue.use(Field);
	export default {
		data() {
			return {
				username: '',
				password: '',
				where1:'',
				where2:'',
				columns: ['金华小区', '长安小区', '富华里小区', '东方小区'],
			};
		},
		methods: {
			onSubmit(values) {
				console.log('submit', values);
			},
			onConfirm(value, index) {
				this.$toast(`当前值：${value}, 当前索引：${index}`);
			},
			onChange(picker, value, index) {
				this.$toast(`当前值：${value}, 当前索引：${index}`);
			},
			onCancel() {
				this.$toast('取消');
			},
			remove(){
				this.$router.replace({
					path:'/Home'
				});
			},
		},
	}
</script>

<style scoped>

</style>
