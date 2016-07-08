<style lang="less" scoped>
.page-wrap{
	min-height: 100%;
	width: 100%;
	background: url('../assets/images/app-bg.jpg');
	padding:0.32rem;
	box-sizing: border-box;
	padding-bottom: 2.666667rem;
}
.manipulation-container{
	width: 100%;
	background: #fff;
	min-height: 11.733333rem;
	margin-top: 0.333333rem;
	.title{
		height: 0.746667rem;
		border-bottom: 1px solid #ffdc00;
		text-align: center;
		line-height: 0.746667rem;
		font-size: 0.4rem;
		font-weight: bold;
	}
}
.list{
	li{
		height: 1.466667rem;
		border-bottom: 1px solid #ffdc00;
		padding: 0.213333rem 0.413333rem;
		box-sizing: border-box;
		.user-img{
			height: 1.013333rem;
			width: 1.013333rem;
			float: left;
			img{
				width: 100%;
				height: 100%;
				border-radius: 100%;
			}

		}
		.manipulation-info{
			height: 1.013333rem;
			width: 5.333333rem;
			margin-left: 0.333333rem;
			float: left;
			position: relative;
			.user-name{
				padding-bottom: 0.066667rem;
				font-size: 0.373333rem;
			}
			.stage-info{
				font-size: 0.32rem;
				position: absolute;
				bottom: 0;
				width: 5.333333rem;
			}
		}
		.op-btn{
			height: 0.853333rem;
			width: 1.653333rem;
			border-radius: 0.466667rem;
			background: #ffdc00;
			font-size: 0.373333rem;
			line-height: 0.853333rem;
			text-align: center;
			float: right;
			margin-top: 0.08rem;
		}
		.dis-op{
			background: #b5b5b5;
			color: #898989;
		}
	}
}
.red{
	color: #e60012;
}
.strong{
	font-weight: bold;
}
.fr{
	float: right;
	margin-right: 0.333333rem;
}
</style>

<template>
<div class="page-wrap">
	<iheader :title="current_stage_data.title" :tips="'竞猜内容：赛段冠军'"></iheader>
	<div class="manipulation-container">
		<div class="title">
			庄家列表
		</div>
		<ul class="list">
			<li v-for="item in data.list">
				<div class="user-img">
					<img src="../assets/images/noavatar_middle.gif">
				</div>
				<div class="manipulation-info">
					<h1 class="user-name">{{item.bankerInfo.nickname}}</h1>
					<div class="stage-info">
						<span class="strong">赔率:<em class="red">{{item.odds}}</em></span>
						<span class="strong fr">可投金币：{{item.available}}</span>
					</div>
				</div>
				<div v-if="item.available === 0" class="op-btn strong dis-op">
					投注
				</div>
				<div v-else class="op-btn strong" @click="selectHandicap(item)">
					投注
				</div>
			</li>
		</ul>
	</div>
</div>
<ifooter></ifooter>
<ioperator :active-handicap="active_handicap" :show.sync="show_operator" :type="1" :title="current_stage_data.title">
</template>

<script>
import iheader from '../components/stage-header.vue'
import ifooter from '../components/footer.vue'
import ioperator from '../components/bet-operator.vue'
export default{
	//	庄家列表页
	components: {
		iheader, ifooter, ioperator
	},
	data(){
		return {
			token: window.access_token,
			domain: window.api_domain,
			current_stage_data: [],
			active_handicap: [], //	选择的盘口信息
			show_operator: false, //	控制操作表单显隐
			data: [],
			stage_id: '1',
			player_id: '1'

		}
	},
	route: {
		activate(){
			this.initParams()
		},
		canReuse(){
			this.initParams()
		}

	},
	methods: {
		initParams: function(){
			this.stage_id = this.$route.params.stage_id
			this.player_id = this.$route.params.player_id
			this.getCurrent()
			this.getHandicap()
		},
		//	获取当前赛段
		getCurrent: function(){
			var url = this.domain + '/api/stage/current'
			var params = {
				'token': this.token
			}
			this.$http.jsonp(url, params).then((response) => {
				console.log(response.data)
				// this.data = response.data.data
				this.stage_id = response.data.data.id
				this.current_stage_data = response.data.data
			}, (response) => {
			})
		},
		//	获取用户盘口信息
		getHandicap: function(){
			var url = this.domain + '/api/handicap/member-banker'
			var params = {
				'token': this.token,
				'stage_id': this.stage_id,
				'player_id': this.player_id
			}
			this.$http.jsonp(url, params).then((response) => {
				console.log(response.data)
				this.data = response.data.data
			}, (response) => {
			})
		},
		//	选择庄家投注
		selectHandicap: function(item){
			this.show_operator = true
			this.active_handicap = item
		}
	}
}

</script>
