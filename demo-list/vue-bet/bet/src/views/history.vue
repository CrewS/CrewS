<style lang="less" scoped>
.page-wrap{
	min-height: 100%;
	width: 100%;
	background: url('../assets/images/app-bg.jpg');
	padding:0.32rem;
	box-sizing: border-box;
	padding-bottom: 2.666667rem;
}
.history-container{
	width: 100%;
	background: #fff;
	min-height: 8.0rem;
	border-radius:4px;
	padding: 0 0.36rem;
	box-sizing: border-box;
	padding-bottom: 0.266667rem;
	.user-info-header{
		height: 2.386667rem; //179px
		border-bottom: 1px solid #ffdc00;
		padding:0.186667rem 0;//0.186667rem 
		box-sizing: border-box;
		.user-img{
				height: 100%;
				// height: 2.0rem;
				// width: 2.533333rem;
				box-sizing: border-box;
				padding-top: 0.133333rem;
				text-align: center;
				font-size: 0.32rem;
				float: left;
			img{
				height: 1.36rem;
				width: 1.36rem;
				border-radius: 100%;
				display: block;
				// margin: 0 auto;
				margin-bottom: 0.133333rem;
			}
		}
		.user-name{
			height: 100%;
			float: left;
			padding-left: 0.266667rem;
			line-height: 2.013333rem;//179-28
			font-weight: bold; 
		}
		.rule-icon{
			height: 1.36rem;
			width: 1.36rem;
			float: right;
			margin-top: 0.133333rem;
		}
	}
	.bet-history{
		.section-title{
			height: 0.866667rem;
			text-indent: 1em;
			line-height: 0.866667rem;
			color: #434343;
			font-size: 0.266667rem;
		}
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
}
.bet-list{
	li{
		margin-bottom: 0.24rem;
	}
	.item-header{
		height: 0.693333rem;
		background: #ffdc00;
		font-size: 0.266667rem;
		line-height: 0.693333rem;
		text-indent: 1em;
		.item-type{
			color: #7d7d7d;
			text-indent: 1em;
		}
		.item-date{
			float: right;
			padding-right: 0.533333rem;
		}
	}
}
.bet-info{
	height: 2.0rem;
	background: #eeeeee;
	padding: 0.266667rem;
	box-sizing: border-box;
	.player-info{
		height: 1.466667rem;
		width: 3.333333rem;
		float: left;
		.player-name{
			font-size: 0.48rem;
			font-weight: bold;
			height: 0.48rem;
			overflow: hidden;
			line-height: 0.48rem;
		}
		.player-info-item{
			padding-top: 0.066667rem;
			.item-type{
				color: #7d7d7d;
			}
			.is-win{
				color: #ff6767;
			}
		}
	}
	.type-info{
		width: 2.4rem;
		height: 1.466667rem;
		float: left;
		text-align: center;
		.item-type{
			color: #7d7d7d;
			padding-top: 0.133333rem;
			display: block;
			padding-bottom: 0.133333rem;
		}
		.beting-number{
			font-size: 0.48rem;
			font-weight: bold;
		}
	}
	.result-info{
		width: 2.3rem;
		height: 1.466667rem;
		float: left;
		text-align: center;
		.item-type{
			color: #7d7d7d;
			padding-top: 0.133333rem;
			display: block;
			padding-bottom: 0.133333rem;
		}
		.beting-number{
			font-size: 0.48rem;
			font-weight: bold;
		}
	}
	.type-info, .result-info {

	}
}
</style>

<template>
<div class="page-wrap">
	<div class="history-container">
		<div class="user-info-header">
			<div class="user-img">
				<template v-if="headimgurl == ''">
					<img src="../assets/images/noavatar_middle.gif">
				</template>
				<template v-else>
					<img :src="headimgurl">
				</template>
			</div>
			<h1 class="user-name">{{nickname}}</h1>
			<img src="../assets/images/icon/rule-text.png" class="rule-icon" v-link="{name:'rule'}">
		</div>
		<div class="bet-history">
			<!-- <h1 class="section-title">投注记录</h1> -->
			<div class="tab-header">
				<div :class="{'active': show}" @click="tabView(true)">菠菜投注记录</div>
				<div :class="{'active': !show}" @click="tabView(false)">庄家投注记录</div>
			</div>
			<ul class="bet-list" v-show="show">
				<li v-for="item in betData">
					<div class="item-header">
						<span class="item-type">投注项目: </span>{{item.handicap.stage}}
						<span class="item-date">{{item.create_at.split(' ')[0]}}</span>
					</div>
					<div class="bet-info">
						<div class="player-info">
							<h1 class="player-name">
								{{item.handicap.player}}
							</h1>
							<div class="player-info-item">
								<span class="item-type">赔率:</span> {{item.handicap.odds}}
							</div>
							<div class="player-info-item">
								<span class="item-type">状态:</span> <span class="is-win">{{item.is_win_str}}</span>
							</div>
						</div>
						<div class="type-info">
							<span class="item-type">投注:</span>
							<span class="beting-number">{{item.integral}}</span>
						</div>
						<div class="result-info">
							<span class="item-type">返奖:</span>
							<span class="beting-number">
								<template v-if="item.is_win == 1">
									{{item.integral * item.handicap.odds}}
								</template>
								<template v-else>
									0
								</template>
							</span>
						</div>
					</div>
				</li>
			</ul>
			<ul class="bet-list" v-show="!show">
				<li v-for="item in handicapData">
					<div class="item-header">
						<span class="item-type">投注项目: </span>{{item.stage}}
						<span class="item-date">{{item.create_at.split(' ')[0]}}</span>
					</div>
					<div class="bet-info">
						<div class="player-info">
							<h1 class="player-name">
								{{item.player}}
							</h1>
							<div class="player-info-item">
								<span class="item-type">赔率:</span> {{item.odds}}
							</div>
							<div class="player-info-item">
								<span class="item-type">状态:</span> <span class="is-win">{{item.banker_win_str}}</span>
							</div>
						</div>
						<div class="type-info">
							<span class="item-type">坐庄:</span>
							<span class="beting-number">{{item.investment}}</span>
						</div>
						<div class="result-info">
							<span class="item-type">返奖:</span>
							<span class="beting-number">
								<template v-if="item.banker_win == 1">
									{{item.investment + item.bet_amount}}
								</template>
								<template v-else>
									<template v-if="item.banker_win == 0">
										0
									</template>
									<template v-else>
										{{item.investment - item.bet_amount * item.odds}}
									</template>
									<!-- {{item.investment - item.bet_amount * item.odds}} -->
								</template>
							</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</div>
<ifooter></ifooter>



</template>

<script>
import ifooter from '../components/footer.vue'
export default{
	components: {
		ifooter
	},
	vuex: {
		getters: {
			nickname: state => state.user.nickname,
			headimgurl: state => state.user.headimgurl
		}
	},
	data(){
		return {
			betData: [],
			handicapData: [],
			renderData: [],
			token: window.access_token,
			domain: window.api_domain,
			show: true
		}
	},
	ready(){
		// this.getBetData()
		// this.getHandicapData()
	},
	route: {
		activate(){
			this.getBetData()
			this.getHandicapData()
		}
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
