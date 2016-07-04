<style lang="less" scoped>

</style>

<template>
<div @click="getTop">
121112
</div>
</template>

<script>
export default{
	data(){
		return {
		}
	},
	methods: {
		getTop: function(){
			var url = 'http://bet.biketo.com.cn/api/member/top?token=1dea089bc7928921e045c5e93_25'
			this.$http.jsonp(url, {'jsonp': 'callback'}).then((response) => {
				console.log(response.data)
				this.data = response.data.data
			}, (response) => {
			})
		}
	}
}

</script>
