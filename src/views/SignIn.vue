<template>

	<div>
		<page-header title="登录" />
		<van-form @submit="onSubmit">
			<!-- 输入用户名以及密码 -->
			<van-field v-model="signMessage.username" name="用户名" label="用户名" placeholder="用户名"
				:rules="[{ validator1, message: '请输入正确用户名' }]" />
			<van-field v-model="signMessage.password" type="password" name="密码" label="密码" placeholder="密码"
				:rules="[{ validator2, message: '请输入正确密码' }]" />
			<!-- 选择小区 -->
			<van-picker v-model="where1" title="选择小区" id="where1" show-toolbar :columns="columns" @confirm="onConfirm"
				:visible-item-count="3" @cancel="onCancel" @change="onChange" />
			<!-- 选择身份 -->
			<div style="display:flex; justify-content: start; align-items: center; padding: 10px 16px">
				<van-radio-group v-model="signMessage.role" direction="horizontal">
					<van-radio name="1">业主</van-radio>
					<van-radio name="2">物业</van-radio>
				</van-radio-group>
			</div>
			<div style="margin: 16px;" @click="setmessage">
				<van-button round block type="info" native-type="submit">
					登陆
				</van-button>
			</div>
			<div style="margin: 16px;">
				<van-button plain round block type="info" native-type="submit" to="/Register">
					注册
				</van-button>
			</div>
		</van-form>
	</div>
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
	import {
		Field
	} from 'vant';
	Vue.use(Field);
	import {
		RadioGroup,
		Radio
	} from 'vant'
	Vue.use(Radio);
	Vue.use(RadioGroup);
	export default {
		data() {
			return {
				where1: '',
				columns: ['金华小区', '长安小区', '富华里小区', '东方小区'],
				//signMessage是向服务器发送的数据
				signMessage: {
					id: 0,
					imagePath: '',
					password: '',
					phoneNumber: '',
					role: "1",
					username: ''
				}
			};
		},
		methods: {
			onSubmit(values) {
				console.log('submit', values);
			},
			onConfirm(value, index) {
				console.log(values);
			},
			onChange(picker, value, index) {
				console.log(values);
			},
			onCancel() {

			},
			// 校验函数返回 true 表示校验通过，false 表示不通过
			validator1(val) {
				return /^\S/.test(val);
			},
			validator2(val) {
				return /^\S/.test(val);
			},
			//传递用户名，密码，小区等信息给服务器,signMessage是发送给服务器数据，isSignMessage是判断数据
			setmessage() {
				console.log(this.signMessage);
				axios.post('http://121.196.105.252:8000/login', this.signMessage).then(isSignMessane => {
					if (isSignMessane.status == 200) {
						console.log(isSignMessane);
						if (isSignMessane.data == true) {
							var temp = {
								username: this.signMessage.username
							};
							const user = JSON.stringify(temp);
							window.sessionStorage.setItem('user', user);
							this.$router.replace({
								path: '/Self'
							});
						} else {
							alert('用户名或密码错误');
						}
					} else {
						alert('网络错误');
					}

				})
			}
		},
	}
</script>

<style scoped>
	.a {
		justify-content: start;
		align-items: center;
	}
</style>