'use strict'


export const login = ({ dispatch }, is_first) => {
	dispatch('LOGIN',is_first)
}

export const addCount = ({ dispatch }) => {
  dispatch('ADD_COUNT')
}
