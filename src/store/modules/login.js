const state = {
	userName: ''
}

const actions = {
	login: ({ commit, state }, userName) => {
		commit('setUserName', userName)
	},
	logout: ({ commit, state}) => {
		commit('clearUserName')
	}
}

const mutations = {
	setUserName: (state, userName) => {
		state.userName = userName
	},
	clearUserName: state => {
		state.userName = ''
	}
}

export default {
	namespaced: true,
	state,
	actions,
	mutations
}   