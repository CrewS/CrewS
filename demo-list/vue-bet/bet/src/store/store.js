'use strict'


import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  token: '1dea089bc7928921e045c5e93_25',
  is_first: true,
  count: 1
}

const mutations = {
	
	LOGIN (state ,is_first) {
		state.is_first = is_first
	},
	IS_FIRST (state){

	},
	ADD_COUNT(state){
		state.count++
	}
}

export default new Vuex.Store({
  state,
  mutations
})