<style lang="less" scoped>
.page-wrap{
	min-height: 100%;
	width: 100%;
	background: url('../assets/images/app-bg.jpg');
	padding:0.32rem;
	box-sizing: border-box;
	padding-bottom: 2.666667rem;
}
.input-container{
	width: 9.36rem;
	height: 2.546667rem;
	position: absolute;
	bottom: 0;
	background: #fff;
	background: #fff;
	border-top-right-radius: 0.133333rem;
	border-top-left-radius: 0.133333rem;
	box-sizing: border-box;
	padding: 0.333333rem;
	.tips{
		font-size: 0.293333rem;
		color: #959595;
		padding-bottom: 0.333333rem;
	}
	.input-box{
		width: 4.4rem;
		height: 0.986667rem;
		border: 1px solid #e5e5e5;
		border-radius: 0.2rem;
		font-size: 0.4rem;
		padding: 0.266667rem;
		box-sizing: border-box;
		float: left;
	}
	.submit-btn{
		width: 4.053333rem;
		height: 0.96rem;
		background: #ffdc00;
		display: inline-block;
		line-height: 0.96rem;
		text-align: center;
		float: right;
		border-radius: 0.2rem;
		font-size: 0.4rem;
		font-weight: bold;
	}
}
.player-container{
	min-height: 10.8rem;
	width: 100%;
	background: #fff;
	margin-top: 0.266667rem;
	padding: 0.346667rem;
	box-sizing: border-box;
	// display: flex;
	display: flex;
	justify-content: space-between;
	flex-wrap:wrap;
	align-content: flex-start;
	.player-item{
		height: 1.12rem;
		width: 4.226667rem;
		background: url('../assets/images/item-bg.jpg');
		background-size: 100%;
		margin-bottom: 0.266667rem;
		box-sizing: border-box;
		padding: 0.213333rem;
		display: flex;
		justify-content: space-between;
		flex-wrap:wrap;
		.player-name{
			width: 2.0rem;
			font-size: 0.4rem;
			line-height: 0.693333rem;
			overflow: hidden;
		}
		.offical-info{
			width: 1.333333rem;
			height: 100%;
			text-align: right;
			h1{
				font-size: 0.266667rem;
			}
			.odds{
				font-size: 0.4rem;
				
				display: inline-block;
				width: 100%
			}
		}
	}
	li.player-item-acitve{
		background: #ffdc00;
	}
}
</style>

<template>
<div class="page-wrap">
	<iheader :title="info.title" :tips="info.time.split(' ')[0]"></iheader>
	<ul class="player-container">
		<li class="player-item" :class="{'player-item-acitve':item.player_id == active}" v-for="item in current_stage" @click="select(item.player_id)">
			<h1 class="player-name">
				{{item.player}}
			</h1>
			<div class="offical-info">
				<h1>菠菜赔率</h1>
				<span class="odds">{{item.odds}}</span>
			</div>
		</li>
	</ul>
	<div class="input-container">
		<h1 class="tips">提示:庄家只能选择一个车手，并且全额押注，赔率需要比菠菜高</h1>
		<input type="text" class="input-box" v-model="odds" placeholder="输入赔率">
		<div class="submit-btn" @click="userManipulation">提交</div>
	</div>
</div>

</template>

<script>
/*global _Prompt:true*/
import iheader from '../components/stage-header.vue'
export default{
	components: {
		iheader
	},
	data(){
		return {
			token: window.access_token,
			domain: window.api_domain,
			active: '0',
			stage_id: '7',
			player_id: '1',
			odds: '',
			current_stage: [],
			info: {}
		}
	},
	ready(){
		//	初始化赛段ID
		// this.stage_id = this.$route.params.stage_id
		// this.getCurrent()
		// this.$watch('stage_id', function(){
		// 	//	stage_id获取后请求数据
		// 	this.getOfficialHandicap()
		// })
	},
	route: {
		activate(){
			//	初始化赛段ID
			// this.stage_id = this.$route.params.stage_id
			this.getCurrent()
			this.$watch('stage_id', function(){
				//	stage_id获取后请求数据
				this.getOfficialHandicap()
			})
		}
	},
	methods: {
		//	获取当前赛段
		getCurrent: function(){
			var url = this.domain + '/api/stage/current'
			var params = {
				'token': this.token
			}
			this.$http.jsonp(url, params).then((response) => {
				// console.log(response.data)
				// this.data = response.data.data
				if (response.data.status === 404){
					// console.log('111')
					this.current_stage = []
				} else {
					this.stage_id = response.data.data.id
					this.info = {'title': response.data.data.title, 'time': response.data.data.stage_start_at}
				}
				// this.current_stage = response.data
			}, (response) => {
			})
		},
		//	获取官方博彩盘与选手
		getOfficialHandicap: function(){
			var url = this.domain + '/api/handicap/official'
			var params = {
				'token': this.token,
				'stage_id': this.stage_id
			}
			this.$http.jsonp(url, params).then((response) => {
				// console.log(response.data.data)
				this.current_stage = response.data.data
				this.active = this.current_stage[0].player_id
			}, (response) => {
			})
		},
		//	用户坐庄
		userManipulation: function(){
			if (!this.checkOdds()){
				return false
			}
			var url = this.domain + '/api/handicap/add'
			var params = {
				'token': this.token,
				'stage_id': this.stage_id,
				'player_id': this.active,
				'odds': this.odds
			}
			this.$http.jsonp(url, params).then((response) => {
				// console.log(response.data)
				let oTest = new _Prompt(150, 60, 0.7, 1500, 'middle', response.data.msg)
				oTest.start()
				if (response.data.status === 0){
					this.$router.go('home')
				}
			}, (response) => {
			})
		},
		select: function(index){
			this.active = index
		},
		checkOdds: function(){
			if (isNaN(this.odds)){
				let oTest = new _Prompt(150, 60, 0.7, 1500, 'middle', '请输入数字')
				oTest.start()
				return false
			} else {
				return true
			}
		}
	}
}

</script>
