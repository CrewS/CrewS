<style lang="less" scoped>

</style>

<template>
<iheader :title="'车店位置'"></iheader>
<imap :data="data" :city="city" :single="true"></imap>
</template>

<script>
import iheader from '../components/header-normal.vue'
import imap from '../components/list-map.vue'
export default{
	components: {
		iheader, imap
	},
	data(){
		return {
			data: [],
			city: {'name': '广州', 'id': 42}
		}
	},
	route: {
		activate: function(transition){
			this.getData(transition)//	优化视图切换过程 文字替换的假象
		}
	},
	methods: {
		getData: function(transition){
			var params = {'station_id': this.$route.params.id}
			this.$http.get('/app/che/station', null, {'params': params}).then((response) => {
				var data = response.data.data
				this.data.push(data.data)
				this.city = this.data[0].cityInfo
				console.log(this.data[0].cityInfo)
				transition.next()
			}, (response) => {
			})
		}
	}
}

</script>
