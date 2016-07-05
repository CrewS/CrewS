<style lang="less" scoped>

</style>

<template>
	<div v-for="item in data">
		<li>{{item}}</li>
	</div>
	<ishare></ishare>
</template>

<script>
import ishare from '../components/share.vue'
export default{
	components: {
		ishare
	},
	data(){
		return {
			data: [],
			token: window.access_token,
			domain: window.api_domain
		}
	},
	vuex: {
		getters: {
			// user: function(state){
			// 	console.log(state)
			// }
		}
	},
	ready(){
		this.getData()
	},
	methods: {
		getData: function(){
			var url = this.domain + '/api/member/info'
			var params = {
				'token': this.token
			}
			this.$http.jsonp(url, params).then((response) => {
				if (response.data.status !== '0'){
					console.log(response.data)
					this.data = response.data.data
				} else if (response.data.status === '1000'){
					console.log(response.data)
				}
			}, (response) => {
			})
		}
	}
}

</script>
