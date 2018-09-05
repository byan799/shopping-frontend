const state = {
	items: []
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
	actions,
	mutations
}