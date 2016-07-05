<style lang="less" scoped>

</style>

<template>
<div class="tab">
	<span @click="tabView(true)">博彩记录</span>
	<span @click="tabView(false)">坐庄记录</span>
</div>
<div v-show="show">
	<div v-for="item in betData">
		{{item.is_win_str}}
		投注时间:
		{{item.create_at}}
	</div>
</div>
<div v-show="!show">
	<div v-for="item in handicapData">
		{{item.banker_win_str}}
		投注时间:
		{{item.create_at}}
	</div>
</div>
</template>

<script>
export default{
	data(){
		return {
			betData: [],
			handicapData: [],
			token: window.access_token,
			domain: window.api_domain,
			show: true
		}
	},
	ready(){
		this.getBetData()
		this.getHandicapData()
	},
	methods: {
		//	获取投注的历史战绩
		getBetData: function(){
			// var url = 'http://bet.biketo.com.cn/api/bet/history?token=1dea089bc7928921e045c5e93_25'
			var url = this.domain + '/api/bet/history'
			var params = {
				'token': this.token,
				'start': 0,
				'num': 233
			}
			this.$http.jsonp(url, params).then((response) => {
				console.log(response.data.data)
				this.betData = response.data.data.list
			}, (response) => {
			})
		},
		//	获取做庄历史战绩
		getHandicapData: function(){
			// var url = 'http://bet.biketo.com.cn/api/bet/history?token=1dea089bc7928921e045c5e93_25'
			var url = this.domain + '/api/handicap/history'
			var params = {
				'token': this.token,
				'start': 0,
				'num': 233
			}
			this.$http.jsonp(url, params).then((response) => {
				console.log(response.data.data)
				this.handicapData = response.data.data.list
			}, (response) => {
			})
		},
		//	tab
		tabView: function(show){
			this.show = show
		}
	}
}

</script>
