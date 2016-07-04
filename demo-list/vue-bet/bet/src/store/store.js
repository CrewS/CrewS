'use strict'


import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  user: false
}

const mutations = {
	LOGIN (state) {
		state.true
	}
}

export default new Vuex.Store({
  state,
  mutations
})