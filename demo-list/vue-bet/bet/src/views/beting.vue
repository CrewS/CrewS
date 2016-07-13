<style lang="less" scoped>
.page-wrap{
	min-height: 100%;
	width: 100%;
	background: url('../assets/images/app-bg.jpg');
	padding:0.32rem;
	box-sizing: border-box;
	padding-bottom: 2.666667rem;
}
.tz{
	color: #de0010;
	cursor: pointer;
}
.beting-container{
	width: 100%;
	min-height: 11.733333rem;
	background: #fff;
	margin-top: 0.28rem;
	.tab-header{
		height: 0.826667rem;
		padding-bottom: 0.373333rem;
		display: flex;
		justify-content:space-between;
		div{
			height: 0.826667rem;
			flex-grow:1;
			text-align: center;
			line-height: 0.826667rem;
			background: #dcdcdc;
			font-size: 0.4rem;
		}
		div.active{
			background: #fff;
		}
	}
}
.player-list{
	padding: 0 0.44rem;
	padding-bottom: 0.266667rem;
	box-sizing: border-box;
	li{
		height: 1.12rem;
		width: 100%;
		background: #eee;
		margin-bottom: 0.24rem;
		display: flex;
		justify-content:space-between;
		.player-name{
			width: 3.04rem;
			height: 1.12rem;
			line-height: 1.12rem;
			text-indent: 1em;
			font-size: 0.4rem;
			font-weight: bold;
			overflow: hidden;
		}
		.player-odds{
			width: 2.653333rem;
			height: 1.12rem;
			background: url('../assets/images/icon/item-odds-bg.jpg') no-repeat;
			background-position: center center;
			background-size: 100%;
			text-align: center;
			box-sizing: border-box;
			padding-top: 0.226667rem;
			font-size: 0.266667rem;
			.odds-number{
				font-size: 0.4rem;
				font-weight: bold;
			}
		}
		.player-op{
			width: 2.933333rem;
			line-height: 1.12rem;
			text-align: right;
			box-sizing: border-box;
			padding-right: 0.4rem;
			span{
				font-size: 0.4rem;
				font-weight: bold;
			}
		}
	}
}
.handicap-player-list{
	padding: 0 0.44rem;
	box-sizing: border-box;
	padding-bottom: 0.266667rem;
	li{
		height: 1.12rem;
		width: 100%;
		background: #eee;
		margin-bottom: 0.24rem;
		display: flex;
		justify-content:space-between;
		.player-name{
			width: 2.36rem;
			height: 1.12rem;
			line-height: 1.12rem;
			text-indent: 1em;
			font-size: 0.4rem;
			font-weight: bold;
			overflow: hidden;
		}
		.player-odds{
			width: 4.08rem;
			height: 1.12rem;
			background: url('../assets/images/icon/handicap-bg.jpg') no-repeat;
			background-position: center center;
			background-size: 100%;
			text-align: center;
			box-sizing: border-box;
			padding: 0.2rem 0;
			font-size: 0.266667rem;
			flex-grow: 0;
			display: flex;
			.odds-number{
				font-size: 0.4rem;
				font-weight: bold;
			}
			.dis-odds-number{
				font-size: 0.32rem;
				padding-top: 0.066667rem;
				padding-left: 0.266667rem;
			}
			div{
				flex-grow:1;
				box-sizing: border-box;
				padding: 0 0.133333rem;
				text-align: left;
			}
			div:first-child{
				border-right: 1px solid #000;
				text-align: right;
				

			}
		}
		.player-op{
			width: 2.173333rem;
			line-height: 1.12rem;
			text-align: right;
			box-sizing: border-box;
			padding-right: 0.4rem;
			span{
				font-size: 0.4rem;
				font-weight: bold;
			}
		}
		.dis-player-op{
			color: #898989;
		}
	}
}
</style>

<template>
<div class="page-wrap">
	<iheader :title="current_stage_data.title" :tips="'竞猜内容：赛段冠军'"></iheader>
	<div class="beting-container">
		<div class="tab-header">
			<div :class="{'active': show}" @click="tabView(true)">菠菜</div>
			<div :class="{'active': !show}" @click="tabView(false)">庄家</div>
		</div>
		<ul v-show="show" class="player-list">
			<li v-for="item in data">
				<div class="player-name">
					{{item.player}}
				</div>
				<div class="player-odds">
					<h1>赔率</h1>
					<h1 class="odds-number">{{item.odds}}</h1>
				</div>
				<div class="player-op" @click="selectPlayer(item)">
					<span>投注</span>
				</div>
			</li>
		</ul>
		<ul v-show="!show" class="handicap-player-list">
			<li v-for="item in player">
				<div class="player-name">
					{{item.player}}
				</div>
				<div class="player-odds">
					<div class="">
						<h1>菠菜赔率</h1>
						<h1 class="odds-number">{{item.odds}}</h1>
					</div>
					<div class="">
						<h1>庄家赔率</h1>
						<h1 class="odds-number" v-if="item.member_best_odds !=0">{{item.member_best_odds}}</h1>
						<h1 class="dis-odds-number " v-else>暂无</h1>
					</div>
				</div>
				<div class="player-op" v-if="item.member_best_odds !=0" v-link="{name:'handicap',params:{'stage_id':this.stage_id, 'player_id':item.player_id}}">
					<span>投注</span>
				</div>
				<div v-else class="player-op dis-player-op">
					<span>投注</span>
				</div>
			</li>
		</ul>
	</div>
	<!-- <div @click="tabView(true)">---------官方博彩-----------</div>
		<ul v-show="show">
			<li v-for="item in data">
				{{item.player}}
				<span class="tz" @click="selectPlayer(item)">
					投注
				</span>
			</li>
		</ul> -->
</div>
<ifooter></ifooter>
<ioperator :active-handicap="active_handicap" :show.sync="show_operator" :type="0" :title="current_stage_data.title">
</ioperator>

</template>

<script>
import ioperator from '../components/bet-operator.vue'
import iheader from '../components/stage-header.vue'
import ifooter from '../components/footer.vue'
export default{
	components: {
		ioperator, iheader, ifooter
	},
	data(){
		return {
			token: window.access_token,
			domain: window.api_domain,
			stage_id: 'default',
			data: [],
			player: [],
			current_stage_data: [],
			active_handicap: [], //	选择的盘口信息
			show_operator: false, //	控制操作表单显隐
			show: true
		}
	},
	ready(){
		//	初始化页面的时候获取当前赛段信息
		// this.getCurrent()
		// this.$watch('stage_id', function(){
		// 	this.getOfficialHandicap()
		// 	this.getOfficialPlayer()
		// })
		this.$watch('stage_id', function(){
			this.getOfficialHandicap()
			this.getOfficialPlayer()
		})
	},
	route: {
		activate(){
			//	初始化页面的时候获取当前赛段信息
			this.getCurrent()
			if (this.stage_id !== 'default'){
				this.getOfficialHandicap()
				this.getOfficialPlayer()
			}
		}//	,
		// deactivate(transition){
		// 	this.show_operator = false
		// 	setTimeout(transition.next, 300)
		// }
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
					this.stage_id = 'default'
					this.current_stage = []
				} else {
					this.stage_id = response.data.data.id
					this.current_stage_data = response.data.data
				}
			}, (response) => {
			})
		},
		//	获取排名前60用户
		getTop: function(){
			// var url = 'http://bet.biketo.com.cn/api/member/top?token=1dea089bc7928921e045c5e93_25'
			var url = this.domain + '/api/member/top'
			var params = {
				'token': this.token
			}
			this.$http.jsonp(url, params).then((response) => {
				// console.log(response.data)
			}, (response) => {
			})
		},
		//	获取官方博彩盘
		getOfficialHandicap: function(){
			var url = this.domain + '/api/handicap/official'
			var params = {
				'token': this.token,
				'stage_id': this.stage_id
			}
			this.$http.jsonp(url, params).then((response) => {
				// console.log(response.data.data)
				this.data = response.data.data
			}, (response) => {
			})
		},
		//	获取官方指定选手盘口
		getOfficialPlayer: function(){
			var url = this.domain + '/api/handicap/official-player'
			var params = {
				'token': this.token,
				'stage_id': this.stage_id
			}
			this.$http.jsonp(url, params).then((response) => {
				// console.log(response.data.data)
				this.player = response.data.data
			}, (response) => {
			})
		},
		//	选择选手投注
		selectPlayer: function(item){
			this.show_operator = true
			this.active_handicap = item
		},
		//	tab
		tabView: function(show){
			this.show = show
		}
	}
}

</script>
