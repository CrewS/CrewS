<style lang="less" scoped>

</style>

<template>
<div @click="getHandicap">
aaaaaabbbbbbbbbbcccccccccc
</div>
</template>

<script>
export default{
	data(){
		return {
			token: window.access_token,
			domain: window.api_domain,
			stage_id: '1',
			player_id: '1'
		}
	},
	route: {
		activate(){
			this.initParams()
		},
		canReuse(){
			this.initParams()
		}

	},
	methods: {
		initParams: function(){
			this.stage_id = this.$route.params.stage_id
			this.player_id = this.$route.params.player_id
		},
		getHandicap: function(){
			var url = this.domain + '/api/handicap/member-banker'
			var params = {
				'token': this.token,
				'stage_id': this.stage_id,
				'player_id': this.player_id
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
