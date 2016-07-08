<style lang="less" scoped>
.test{
	width: 2.133333rem;
}
</style>

<template>
<div>
测试页面
</div>
<span>点击次数{{count}}</span>
<button @click="addCount"></button>
</template>

<script>
// import {addCount} from '../store/action'
export default{
	data(){
		return {
		}
	},
	// vuex: {
	// 	getters: {
	// 		// token: function(state){
	// 		// 	console.log(state)
	// 		// }
	// 		count: state => state.count
	// 	},
	// 	actions: {
	// 		addCount
	// 	}
	// },
	methods: {
	}
}

</script>
