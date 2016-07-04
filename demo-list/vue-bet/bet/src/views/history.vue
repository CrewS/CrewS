<style lang="less" scoped>

</style>

<template>
<div v-for="item in data">
</div>
</template>

<script>
export default{
	data(){
		return {
			data: []
		}
	},
	ready(){
		this.getBetData()
	},
	methods: {
		getBetData: function(){
			var url = 'http://bet.biketo.com.cn/api/bet/history?token=1dea089bc7928921e045c5e93_25'
			this.$http.jsonp(url, {'jsonp': 'callback'}).then((response) => {
				console.log(response.data.data)
				this.data = response.data.data.list
			}, (response) => {
			})
		}
	}
}

</script>
