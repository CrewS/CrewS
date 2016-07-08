'use strict'


import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  token: '1dea089bc7928921e045c5e93_25',
  account: 0,
}

const mutations = {
	
	SET_INTEGRAL (state ,account) {
		state.account = account
	},
}

export default new Vuex.Store({
  state,
  mutations
})