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
.logo-header{
	height: 4.253333rem;
	background: url('../assets/images/rule-header.png') no-repeat;
	background-size: 100%;
}
.date-time{
	height: 1.0rem;
	line-height: 1.0rem;
	font-size: 0.32rem;
	text-align: center;
}
.content-wrap{
	background: #fff;
	border-radius: 0.133333rem;
	margin-bottom: 0.266667rem;
	.content-wrap-header{
		height: 0.933333rem;
		line-height: 0.933333rem;
		border-bottom: 1px solid #ffdc00;
		text-align: center;
		font-size: 0.4rem;
	}
	.content-text{
		padding: 0.533333rem;
		box-sizing: border-box;
		line-height: 0.48rem;
		font-size: 0.32rem;
		text-indent: 1em;
	}
	.special-content-text{
		padding: 0.133333rem 0;
		p{
			font-size: 0.32rem;
			line-height: 0.48rem;
			padding-right: 0.533333rem;
			padding-left: 0.866667rem;
			position: relative;
		}
		.rule-icon{
			display: block;
			width: 0.72rem;
			height: 0.426667rem;
			line-height: 0.426667rem;
			position: absolute;
			top: 0;
			left: 0.133333rem;
			background: url('../assets/images/icon/rank-icon.png') no-repeat;
			background-position: 100%;
			box-sizing: border-box;
			padding-left: 0.133333rem;
			font-size: 0.32rem;
		}
	}
	.content-wrap-footer{
		height: 0.933333rem;
		line-height: 0.933333rem;
		border-top: 1px solid #ffdc00;
		text-align: center;
		font-size: 0.32rem;
		color: #959595;
	}
}
.reword{
	img{
		width: 100%;
	}
	p{
		text-align: center;
		padding: 0.266667rem;
		font-size: 0.32rem;
		color: #959595;
	}
}
</style>

<template>
	<div class="page-wrap">
		<div class="logo-header">
			
		</div>
		<div class="date-time">
			活动时间：2016年7月15日至2016年7月24日
		</div>
		<div class="content-wrap">
			<div class="content-wrap-header">
				奖品发放
			</div>
			<div class="special-content-text">
				<p>
					<span class="rule-icon">1.</span>
					用户进入竞猜游戏页面后，即获得1000金币作为原始资金用于竞猜；
				</p>
				<p>
					<span class="rule-icon">2.</span>
					点击“领取日薪”，按提示分享至微信朋友圈或者微信好友，即可获得200金币奖励，每日限一次；
				</p>
				<p>
					<span class="rule-icon">3.</span>
					游戏中有“菠菜”和“庄家”两种竞猜项目可以投注，竞猜内容均为即将开赛的环法赛段的赛段冠军（投注的截止时间为赛段进行当天的北京时间18：00）选择你预测夺冠的车手进行投注，每个赛段结束后，系统将会自动结算金币，结算信息可以在“我的战绩”中查看；
				</p>
				<p>
					<span class="rule-icon">4.</span>
					当个人金币数达到3000的时候，可以选择“坐庄”模式，坐庄只能选择一个车手，此车手对应的赔率必须要高于“菠菜”中此车手的赔率，并且必须一次性下注完当前剩余的所有金币。（tips：看似要求高，但其实坐庄会更有趣，也更容易赚金币的哟，游戏开始后赶紧赚够3000金币吧！）
				</p>
				<P>
					<span class="rule-icon">5.</span>
					在7月24日的环法最后一个赛段竞猜结束，后台结算完之后，将会有一个本活动的最终排名，排名按金币数从高到低排，获奖情况以此排名为准
				</P>
			</div>
			<div class="content-wrap-footer">
				兔子骑行保留此次活动的最终解释权
			</div>
		</div>
		<div class="content-wrap">
			<div class="content-wrap-header">
				活动奖品
			</div>
			<div class="reword">
				<img src="../assets/images/reword.jpg">
				<p>所有奖品以实物为准</p>
			</div>
		</div>
		
		<div class="content-wrap">
			<div class="content-wrap-header">
				奖品发放
			</div>
			<div class="content-text">
				<p> 7月24日的环法最后一个赛段竞猜结束，后台竞猜结算后，依据最终的排名，兔子骑行app客服将主动根据用户留下的手机号码，主动和前30名的用户取得联系，确认奖品收货相关信息。</p>
				<p>前三名的整车奖品将通过专业的物流公司配送，4至30名的运动风衣和T恤将通过快递发送给获奖用户，以上奖品均不需要获奖用户承担物流和快递费。手机流量包的奖励将由客服直接充值到获奖用户预留的手机号码上。</p>
				<p>活动中奖及发放奖品详细信息，将在兔子骑行微信公众账号上公布，用户可以搜索“兔子骑行”或者“tuziqixing”关注兔子骑行微信公众号，进行查看。</p>
			</div>
			<div class="content-wrap-footer">
				兔子骑行保留此次活动的最终解释权
			</div>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return {
		}
	},
	vuex: {
		getters: {
			// user: function(state){
			// 	console.log(state)
			// }
		}
	},
	methods: {
	}
}

</script>
