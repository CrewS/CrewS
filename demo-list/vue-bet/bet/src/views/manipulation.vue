<style lang="less" scoped>

</style>

<template>
<div @click="userManipulation">
我要做庄啦
</div>
</template>

<script>
export default{
	data(){
		return {
			token: window.access_token,
			domain: window.api_domain,
			stage_id: '7',
			player_id: '1',
			odds: '1.2',
			current_stage: []
		}
	},
	ready(){
		//	初始化赛段ID
		// this.stage_id = this.$route.params.stage_id
		this.getCurrent()
		console.log(1111)
	},
	methods: {
		//	获取当前赛段
		getCurrent: function(){
			var url = this.domain + '/api/stage/current'
			var params = {
				'token': this.token
			}
			this.$http.jsonp(url, params).then((response) => {
				console.log(response.data)
				// this.data = response.data.data
				this.stage_id = response.data.data.id
				this.current_stage = response.data
			}, (response) => {
			})
		},
		//	用户坐庄
		userManipulation: function(){
			var url = this.domain + '/api/handicap/add'
			var params = {
				'token': this.token,
				'stage_id': this.stage_id,
				'player_id': this.player_id,
				'odds': this.odds
			}
			this.$http.jsonp(url, params).then((response) => {
				console.log(response.data)
			}, (response) => {
			})
		}
	}
}

</script>
