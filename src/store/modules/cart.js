const state = {
	items: []
}

const getters = {
	totalItem: state => {
		return state.items.reduce((accu, curr) => {
			return accu + curr.quantity
		}, 0)
	}
}

const actions = {
	addToCart: ({ commit, state }, product) => {
		commit('pushItem', product)
	},
	removeFromCart: ({ commit, state }, index) => {
		commit('removeItem', index)
	}
}

const mutations = {
	pushItem: (state, product) => {
		const item = state.items.find(item => {
			return item.name === product.name && item.type === product.type
		})
		if (item) {
			item.quantity += product.quantity
		} else {
			const productCopy = Object.assign({}, product)
			state.items.push(productCopy)
		}
	},
	removeItem: (state, index) => {
		state.items.splice(index, 1)
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}