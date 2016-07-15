'use strict'

export const setUser = ({ dispatch }, user) => {
  dispatch('SET_USER', user)
}

export const setAccount = ({ dispatch }, account) => {
  dispatch('SET_ACCOUNT', account)
}
