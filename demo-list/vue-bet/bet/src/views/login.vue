<style lang="less" scoped>

</style>

<template>
<div @click="login">
1111
</div>
</template>

<script>
export default{
	data(){
		return {
			token: window.access_token,
			domain: window.api_domain,
			nickname: 'default',
			mobile: 'default'
		}
	},
	methods: {
		getData: function(){
			var url = this.domain + '/api/member/info'
			var params = {
				'token': this.token
			}
			this.$http.jsonp(url, params).then((response) => {
				console.log(response.data.data)
				this.data = response.data.data
			}, (response) => {
			})
		},
		login: function(){
			var url = this.domain + '/api/member/save-info'
			var params = {
				'token': this.token,
				'nickname': this.nickname,
				'mobile': this.mobile
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
