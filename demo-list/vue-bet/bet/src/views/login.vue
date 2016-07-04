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
		}
	},
	methods: {
		login: function(){
			var url = 'http://bet.biketo.com.cn/api/member/save-info?token=1dea089bc7928921e045c5e93_25'
			this.$http.jsonp(url, {'nickname': 'aabbcc', 'mobile': '13580349964', 'jsonp': 'callback'}).then((response) => {
				console.log(response.data)
				this.data = response.data.data
			}, (response) => {
			})
		}
	}
}

</script>
