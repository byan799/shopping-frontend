import axios from 'axios'

const state = {
	quantity: {
		statistics: {
			basic: 0,
			premium: 0,
			export: 0
		},
		analysis: {
			basic: 0,
			premium: 0,
			export: 0
		},
		forecast: {
			pdf: 0,
			email: 0,
			report: 0
		},
		advertise: {
			basic: 0,
			advanced: 0,
			premium: 0
		}
	}
}

const getters = {
	getMax: (state, getters) => (product) => {
		return state.quantity[product.name][product.type]
	}
}

const actions = {
	getItemQuantity: ({ commit, state }, product) => {
		axios.get('/api/products', {
			params: {
				'product': product
			}
		}).then(res => {
			const data = res.data
			commit('updateProductQuantity', data)
		})
	}
}

const mutations = {
	updateProductQuantity: (state, product) => {
		state['quantity'][product.name][product.type] = product.quantity
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}