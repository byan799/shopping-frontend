<template>
	<div id="login">
		<div class="form">
			<div class="form-group">
				<div class="form-label">
					<span>用户名</span>
				</div>
				<div class="form-value">
					<input type="text" placeholder="请输入用户名" v-model="userName"></input>
				</div>
			</div>
			<div class="form-group">
				<div class="form-label">
					<span>密码</span>
				</div>
				<div class="form-value">
					<input type="text" placeholder="请输入密码" v-model="password">
					</input>
				</div>
			</div>
			<div class="input-error" v-show="loginErrorShow">请输入用户名和密码</div>
			<button @click="login">登录</button>
			<div class="fail" v-show="loginFail">用户名与密码不符</div>
		</div>
	</div>	
</template>
<script>
	export default {
		data () {
			return {
				userName: '',
				password: '',
				loginErrorShow: false,
				loginFail: false
			}
		},
		methods: {
			login () {
				if (this.loginCheck()) {
					let params = {
						userName: this.userName,
						password: this.password
					}
					this.axios.post('/api/login', params)
						.then((res) => {
							let data = res.data
							if (data.flag) {
								this.loginFail = false
								this.$emit('login-success', data.userName)
							} else {
								this.loginFail = true
							}
						})
						.catch(() => {

						}) 
				}
			},
			loginCheck () {
				if (this.userName == '' || this.password == '') {
					this.loginErrorShow = true
					return false
				} else {
					this.loginErrorShow = false
					return true
				}
			}
		}
	}
</script>
<style lang="scss" scoped>
	#login {
		.form {
			.form-group {
				display: flex;
				padding: 10px;
				.form-label {
					width: 40%;
					text-align: right;
					padding-right: 20px;
				}
				.form-value {
					width: 60%;
					text-align: left;
					input {
						font-size: 14px;
					}
				}
			}
			button {
				background-color: #41b883;
				font-size: 14px; 
				padding: 8px 20px;
				color: white;
				cursor: pointer;
				margin-top: 20px;
			}
		}
		.input-error {
			color: red;
			margin: 5px 0;
		}
		.fail {
			margin-top: 20px;
			color: red;
			font-size: 18px;
			font-weight: bold;
		}
	}
</style>