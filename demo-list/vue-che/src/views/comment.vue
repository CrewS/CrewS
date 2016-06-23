<style lang="less" scoped>
.comment-page-content {
  padding: 0 0.603865rem;
}
.shop-comment{
	padding-top: 1.030596rem;
}
</style>

<template>
<iheader :title="'全部评论('+list.count+')'"></iheader>
<div class="comment-page-content">
    <div class="shop-comment" id="post-content">
    	<icomment :rating="list"></icomment>
	</div>
</div>
</template>

<script>
import icomment from '../components/list-comment.vue'
import iheader from '../components/header-normal.vue'
export default{
	name: 'comments',
	components: {
		icomment, iheader
	},
	data(){
		return {
			list: {'data': [], 'count': 0, 'is_finish': 0},
			index: 0
		}
	},
	attached(){
	},
	ready(){
	},
	route: {
		data: function(){
		},
		activate: function(transition){
			console.log(44444)
			this.getData(transition)
		}
	},
	methods: {
		getData: function(transition){
			var params = {'station_id': this.$route.params.id, 'start': this.index}
			this.$http.get('/app/che/ratingList', null, {'params': params}).then((response) => {
				var data = response.data.data
				this.list.count = data.count
				console.log(data.data)
				this.list.data = this.list.data.concat(data.data)
				this.index = data.index
				this.list.is_finish = data.is_finish
				if (data.is_finish === '1'){
					this.$broadcast('closeTab')
				}
				transition.next()
				// console.log(this.is_finish)
			}, (response) => {
			})
		}
	},
	events: {
		'tabMore': function(){
			this.getData()
		}
	}
}

</script>
