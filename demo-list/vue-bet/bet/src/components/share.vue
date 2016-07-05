<style lang="less" scoped>

</style>

<template>
<div @click="share">
1111111111
</div>
</template>

<script>
export default{
	data(){
		return {
			token: window.access_token,
			domain: window.api_domain
		}
	},
	ready(){
	},
	methods: {
		share: function(){
			var url = this.domain + '/api/member/share'
			var params = {
				'token': this.token
			}
			this.$http.jsonp(url, params).then((response) => {
				console.log(response.data)
				this.data = response.data.data
			}, (response) => {
			})
		}
	}
}

</script>
