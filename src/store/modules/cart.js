const state = {
	items: []
}

const getters = {
	totalItem: state => {
		return state.items.length
	}
}

const actions = {
	addToCart: ({ commit, state }, product) => {
		commit('pushItem', product)
	}
}

const mutations = {
	pushItem: (state, product) => {
		state.items.push(product)
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}