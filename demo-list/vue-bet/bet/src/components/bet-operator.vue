<style lang="less" scoped>
.page-shadow{
	position:absolute;
	height: 100%;
	width:100%;
	top:0;
	left: 0;
	.operator{
		height: 250px;
		position: absolute;
		// bottom: 0;
	}
}

/* 必需 */
.expand-transition {
  transition: all .3s ease;
  // height: 30px;
  padding: 10px;
  background-color: #eee;
  overflow: hidden;
  bottom: 0;
}

/* .expand-enter 定义进入的开始状态 */
/* .expand-leave 定义离开的结束状态 */
.expand-enter, .expand-leave {
  // height: 0;
  bottom: -250px;
  padding: 0 10px;
  // opacity: 0;
}

.shadow-transition{
	transition: opacity .4s ease;
	opacity: 1;
}
.shadow-enter, .shadow-leave{
	opacity: 0;
}
</style>

<template>
<div id="page-shadow" class="page-shadow" v-show="show" @click="tap" transition="shadow">
	<div class="operator" transition="expand" v-show="show">
		赛段冠军 {{activeHandicap.player}} 赔率 {{activeHandicap.odds}}
		可投金币 {{}}
		<input type="text" v-model="integral">
		<h1 @click="betAdd">提交</h1>
	</div>
</div>

</template>

<script>
export default{
	props: ['activeHandicap', 'show'],
	data(){
		return {
			token: window.access_token,
			domain: window.api_domain,
			handicap_id: '1',
			integral: '100'
		}
	},
	ready(){
		this.$watch('activeHandicap', function(){
			console.log(this.activeHandicap)
			this.handicap_id = this.activeHandicap.handicap_id
		})
	},
	methods: {
		//	投注
		betAdd: function(){
			var url = this.domain + '/api/bet/add'
			var params = {
				'token': this.token,
				'handicap_id': this.handicap_id,
				'integral': this.integral
			}
			this.$http.jsonp(url, params).then((response) => {
				console.log(response.data)
				this.data = response.data.data
			}, (response) => {
			})
		},
		tap: function(event){
			var type = event.target.id
			if (type === 'page-shadow'){
				this.show = false
				console.log(event.target.id)
			} else {
				console.log(event.target.id)
			}
		}
	}
}

</script>
