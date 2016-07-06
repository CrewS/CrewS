'use strict'


import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  user: true,
  token: '1dea089bc7928921e045c5e93_25',
  count: 1
}

const mutations = {
	
	LOGIN (state) {
		state.token.true
	},

	ADD_COUNT(state){
		state.count++
	}
}

export default new Vuex.Store({
  state,
  mutations
})