import Mock from 'mockjs'

Mock.mock('/api/login', 'post', (postRequest) => {
	let request = JSON.parse(postRequest.body)
	let userName = request.userName
	let password = request.password
	if (userName == 'admin' && password == '123456') {
		return {
			flag: true,
			userName: 'admin'
		}
	} else {
		return {
			flag: false
		}
	}
})

Mock.mock('/api/register', 'post', (postRequest) => {
	return true
})

Mock.mock('/api/test', 'get', {
	flag: true
})