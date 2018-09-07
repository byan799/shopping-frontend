<template>
	<div id="login">
		<div class="form">
			<div class="form-group">
				<div class="form-label">
					<span>User Name</span>
				</div>
				<div class="form-value">
					<input type="text" placeholder="User Name" v-model="userName"></input>
					<p class="input-error" v-show="nameErrorShow">{{ nameError }}</p>
				</div>
			</div>
			<div class="form-group">
				<div class="form-label">
					<span>Password</span>
				</div>
				<div class="form-value">
					<input type="text" placeholder="Password" v-model="password">
					</input>
					<p class="input-error" v-show="passErrorShow">{{ passError }}</p>
				</div>
			</div>
			<div class="input-error" v-show="registerError">Please enter user name and password.</div>
			<button @click="login">Register</button>
			<div class="sucess" v-show="sucessShow">Succeed!</div>
		</div>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				userName: '',
				password: '',
				nameErrorShow: false,
				passErrorShow: false,
				registerError: false,
				sucessShow: false
			}
		},
		computed: {
			nameError () {
				let errorText = ''
				if (this.userName.includes('_')) {
					this.nameErrorShow = true
					errorText = 'User name cannot include “_”'
				} else {
					this.nameErrorShow = false
					this.registerError = false
				}
				return errorText
			},
			passError () {
				let errorText = ''
				if (this.password.length > 6) {
					this.passErrorShow = true
					errorText = 'Password should not be more than 6 letters.'
				} else {
					this.passErrorShow = false
					this.registerError = false
				}
				return errorText
			}
		},
		methods: {
			login () {
				if (this.checkRegister()) {
					let params = {
						userName: this.userName,
						password: this.password
					}
					this.$axios.post('/api/register', params)
						.then((res) => {
							let data = res.data 
							if (data) {
								this.sucessShow = true
							}
						})
						.catch(() => {
						}) 
				}
			},
			checkRegister () {
				if (!this.nameErrorShow && !this.passErrorShow) {
					if (this.userName == '' || this.password == '') {
						this.registerError = true
					} else {
						this.registerError = false
						return true
					}
				}
				return false
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
				&:disabled {
					background-color: grey;
					cursor: not-allowed;
				}
			}
			.sucess {
				margin-top: 20px;
				color: #41b883;
				font-size: 18px;
				font-weight: bold;
			}
		}
		.input-error {
			color: red;
			margin: 5px 0;
		}
	}
</style>