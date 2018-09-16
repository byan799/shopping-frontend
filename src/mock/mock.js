import Mock from 'mockjs'

Mock.mock('/api/login', 'post', (postRequest) => {
	let request = JSON.parse(postRequest.body)
	let userName = request.userName
	let password = request.password
	if (userName === 'admin' && password === '123456') {
		return {
			flag: true,
			userName: 'admin'
		}
	} else if (userName === 'Jim' && password === '123') {
		return {
			flag: true,
			userName: 'Jim'
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

Mock.mock(/\/api\/products/, 'get', (getRequest) => {
	let url = decodeURI(getRequest.url)
	let param = JSON.parse(url.split('?')[1].split('=')[1])
	let product = {
		name: param.name,
		type: param.type
	}
	let quantity = 0
	switch(product.name) {
		case 'statistics':
			if (product.type === 'basic')
				quantity = 6
			else if (product.type === 'premium') {
				quantity = 3
			} else {
				quantity = 1
			}
			break
		case 'forecast':
			if (product.type === 'pdf') {
				quantity = 10
			} else if (product.type === 'email') {
				quantity = 6
			} else {
				quantity = 2
			}
			break
		case 'analysis':
			if (product.type === 'basic') {
				quantity = 8
			} else if (product.type === 'premium') {
				quantity = 5
			} else {
				quantity = 2
			}
			break
		case 'advertise':
			if (product.type === 'basic') {
				quantity = 10
			} else if (product.type === 'advanced') {
				quantity = 5
			} else {
				quantity = 3
			}
			break
	}	
	product.quantity = quantity
	return product
})



