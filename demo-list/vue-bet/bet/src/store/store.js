'use strict'


import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  token: '1dea089bc7928921e045c5e93_25',
  user: {},
}

const mutations = {
	
	SET_USER (state ,user) {
		state.user = user
	},
	SET_ACCOUNT(state ,account) {
		state.user.integral = account
	}
}

export default new Vuex.Store({
  state,
  mutations
})