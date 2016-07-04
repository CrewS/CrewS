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
			data: []
		}
	},
	ready(){
		this.getData()
	},
	methods: {
		getData: function(){
			var url = 'http://bet.biketo.com.cn/api/member/info?token=1dea089bc7928921e045c5e93_25'
			this.$http.jsonp(url, {'jsonp': 'callback'}).then((response) => {
				console.log(response.data.data)
				this.data = response.data.data
			}, (response) => {
			})
		}
	}
}

</script>
