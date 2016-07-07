<style lang="less" scoped>
.page-wrap{
	min-height: 100%;
	width: 100%;
	background: url('../assets/images/app-bg.jpg');
	padding:0.32rem;
	box-sizing: border-box;
	padding-bottom: 2.666667rem;
	background-size: 100%;
}
.user-info-container{
	height: 6.08rem;
	// width: 9.36rem;
	background: #fff;
	border-radius: 0.053333rem;
	padding: 0 0.32rem;
	box-sizing: border-box;
	.user-info-header{
		height: 2.386667rem;
		border-bottom: 1px solid #ffdc00;
		padding:0.186667rem 0;
		box-sizing: border-box;
		display: flex;

		.user-img{
				height: 100%;
				// height: 2.0rem;
				width: 2.533333rem;
				border-right: 1px solid #ffdc00;
				box-sizing: border-box;
				padding-top: 0.133333rem;
				text-align: center;
				font-size: 0.32rem;
			img{
				height: 1.36rem;
				width: 1.36rem;
				border-radius: 100%;
				display: block;
				margin: 0 auto;
				margin-bottom: 0.133333rem;
			}
		}
		.item-box{
			flex-wrap:nowrap;
			align-items:stretch;
			flex-grow:1;
			box-sizing: border-box;
			text-align: center;
			img{
				width: 1.2rem;
				height: 1.2rem;
				display: block;
				margin: 0 auto;
				padding: 0.133333rem 0;
			}
		}
	}
	.user-account{
		height: 2.0rem;
		border-bottom: 1px solid #ffdc00;
		box-sizing: border-box;
		padding-top: 0.133333rem;
		h1{
			float: left;
		}
		.money-number{
			font-size: 1.573333rem;
			float: right;
			margin-right: 0.48rem;
			font-weight: bold;
		}
	}
	.user-operator{
		height: 1.386667rem;
		padding-top: 0.306667rem;
		box-sizing: border-box;
		.btn-operator{
			width: 4.0rem;
			height: 1.08rem;
			border-radius: 1.08rem;
			text-align: center;
			line-height: 1.08rem;
			font-size: 0.4rem;
			background: #ffdc00;
			float: left;
		}
		.fr{
			float: right;
		}
		.dis-operator{
			background: #b5b5b5;
			color: #898989;
		}
	}

}
.tips{
	height: 0.826667rem;
	line-height: 0.826667rem;
	text-align: center;
	font-size: 0.32rem;
	.special{
		color: #35c4ff
	}
}
.rank-section{
	background: #fff;
	.section-title{
		font-size: 0.4rem;
		text-align: center;
		font-weight: bold;
		height: 0.746667rem;
		border-bottom: 1px solid #ffdc00;
		line-height: 0.746667rem;
	}
}
.rank-list{
	li{
		height: 0.8rem;
		line-height: 0.746667rem;
		box-sizing: border-box;
		padding: 0.106667rem 0;
		padding-left: 0.266667rem;
		padding-right: 0.8rem;
		.rank-number{
			width: 1.266667rem;
			height: 0.586667rem;
			float: left;
			background: url('../assets/images/icon/rank-icon.png') no-repeat;
			background-size: 100%;
			line-height: 0.586667rem;
			text-indent: 1em;
			font-weight: bold;
		}
		.user-img{
			height: 0.586667rem;
			width: 0.586667rem;
			float: left;
			margin-left: 0.133333rem;
			img{
				width: 100%;
				height: 100%;
				border-radius: 100%;
				display: block;
				margin: 0 auto;
			}
		}
		.user-name{
			text-indent: 1em;
			float: left;
			line-height: 0.586667rem;
			height: 0.586667rem;
		}
		.user-moneny{
			float: right;
		}
	}
	li.last{
		padding-left: 0.8rem;
	}
	li:nth-child(even){
		background: #eeeeee;
	}
}

.center{
	text-align: center;
}
</style>

<template>
	<div class="page-wrap">
		<div class="user-info-container">
			<div class="user-info-header">
				<div class="user-img">
					<img src="../assets/images/noavatar_middle.gif">
					{{data.nickname}}
				</div>
				<div class="item-box" v-link="{name :'history'}">
					<img src="../assets/images/icon/item-history.png">
					<span>历史战绩</span>
				</div>
				<div class="item-box">
					<img src="../assets/images/icon/item-salary.png">
					<span>领取日薪</span>
				</div>
				<div class="item-box">
					<img src="../assets/images/icon/item-rule.png">
					<span>规则奖励</span>
				</div>
			</div>
			<div class="user-account">
				<h1>已获金币</h1>
				<h1 class="money-number">{{data.integral}}</h1>
			</div>
			<div class="user-operator">
				<div class="btn-operator" v-link="{name:'beting'}">
					开始下注
				</div>

				<div v-if="data.integral > 3000" class="btn-operator fr " v-link="{name:'manipulation'}">
					我要坐庄
				</div>
				<div v-else class="btn-operator fr dis-operator">
					我要坐庄
				</div>
			</div>
		</div>
		<div class="tips">
			总金币数量达到3000时，可以开启<span class="special">坐庄</span>模式
		</div>
		<div class="rank-section">
			<h1 class="section-title">金币排行榜</h1>
			<ul class="rank-list">
				<li v-for="item in top_member">
					<div class="rank-number">
						{{$index+1}}
					</div>
					<div class="user-img">
						<img src="../assets/images/noavatar_middle.gif">
					</div>
					<div class="user-name">
						{{item.nickname}}
					</div>
					<div class="user-moneny">
						金币:{{item.integral}}
					</div>
				</li>
				<!-- <li v-for="i in 20"></li> -->
				<li class="center last" v-if="top_member.length > 80">……</li>
			</ul>
		</div>
		
	</div>
	<ifooter></ifooter>
	<ishare></ishare>
</template>

<script>
import ishare from '../components/share.vue'
import ifooter from '../components/footer.vue'
export default{
	components: {
		ishare, ifooter
	},
	data(){
		return {
			data: [],
			token: window.access_token,
			domain: window.api_domain,
			top_member: []
		}
	},
	ready(){
		this.getData()
		this.getTop()
	},
	methods: {
		getData: function(){
			var url = this.domain + '/api/member/info'
			var params = {
				'token': this.token
			}
			this.$http.jsonp(url, params).then((response) => {
				if (response.data.status !== '0'){
					console.log(response.data)
					this.data = response.data.data
				} else if (response.data.status === '1000'){
					console.log(response.data)
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
				this.top_member = response.data.data
				console.log(response.data)
			}, (response) => {
			})
		}
	}
}

</script>
