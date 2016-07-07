<style lang="less" scoped>
.page-shadow{
	position:absolute;
	height: 100%;
	width:100%;
	width: 10.0rem;
	top:0;
	left: 0;
	background: rgba(0, 0, 0, 0.5);
	box-sizing: border-box;
	padding: 0 0.32rem;
	
}
.operator{
	min-height: 0.666667rem;
	position: absolute;
	width: 9.36rem;
	box-sizing: border-box;
	// bottom: 0;
	.op-header{
		height: 0.706667rem;
		background: #ffdc00;
		border-top-right-radius: 0.133333rem;
		border-top-left-radius: 0.133333rem;
		padding:0 0.266667rem;
		padding-top: 0.226667rem;
		box-sizing: border-box;
		font-size: 0.266667rem;
		.avl{
			float: right;
		}
		.close-btn{
			float: right;
			font-size: 0.4rem;
		}
	}
	
	.submit-container{
		height: 1.6rem;
		background: #fff;
		padding: 0.266667rem 0;
		box-sizing: border-box;
		.btn-submit{
			width: 6.4rem;
			height: 0.986667rem;
			background: #ffdc00;
			line-height: 0.986667rem;
			text-align: center;
			margin: 0 auto;
			font-size: 0.426667rem;
			font-weight: bold;
		}
	}
}
.bet-info{
	height: 1.973333rem;
	border-bottom: 1px solid #ffdc00;
	background: #fff;
	box-sizing: border-box;
	padding: 0.266667rem;
	.match-info{
		width: 4.0rem;
		float: left;
		.match-stage{
			font-size: 0.266667rem;
		}
		.player-name{
			font-size: 0.426667rem;
			padding: 0.066667rem 0;
			font-weight: bold;
		}
		.item-type{
			color: #7d7d7d;
		}
	}
	.input-container{
		// height: 1.973333rem;
		float: right;
		width: 3.333333rem;
		input{
			height: 0.72rem;

			width: 2.986667rem;
			width: 100%;
			border:1px solid #dcdcdc;
			border-radius: 0.133333rem;
			line-height: 0.72rem;
			padding-left: 0.133333rem;
			box-sizing: border-box;
		}
		.predit{
			padding-top: 0.266667rem;
			text-align: right;
		}
	}
}
.handicaper{
	// height: 0.8rem;
	height: 0.973333rem;
	line-height: 0.746667rem;
	box-sizing: border-box;
	padding:0.2rem 0;
	padding-left: 0.266667rem;
	padding-right: 0.266667rem;
	background: #fff;
	border-bottom: 1px solid #ffdc00;
	.handicaper-item{
		width: 1.266667rem;
		height: 0.586667rem;
		float: left;
		background: url('../assets/images/icon/rank-icon.png') no-repeat;
		background-size: 100%;
		line-height: 0.586667rem;
		text-indent: 1em;
		font-weight: bold;
		position: absolute;
		left: -1px;
	}
	.user-img{
		height: 0.586667rem;
		width: 0.586667rem;
		float: left;
		margin-left: 1.4rem;
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
.red{
	color: #ff6767;
}
/* 必需 */
.expand-transition {
  transition: all .3s ease;
  // height: 30px;
  // padding: 10px;
  // background-color: #eee;
  overflow: hidden;
  bottom: 0;
}

/* .expand-enter 定义进入的开始状态 */
/* .expand-leave 定义离开的结束状态 */
.expand-enter, .expand-leave {
  // height: 0;
  bottom: -250px;
  // padding: 0 10px;
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
		<div class="op-header">
			<span>菠菜投注单</span>
			<!-- <span class="close-btn">X</span> -->
			<span class="avl">可用金币: 1000</span>
		</div>
		<div class="handicaper">
			<div class="handicaper-item">
				庄家
			</div>
			<div class="user-img">
				<img src="../assets/images/noavatar_middle.gif">
			</div>
			<div class="user-name">
				魔神赵日天
			</div>
			<div class="user-moneny">
				可投金币数:360000
			</div>
		</div>
		<div class="bet-info">
			<div class="match-info">
				<h1 class="match-stage">第八赛段 瑞士站    赛段冠军</h1>
				<h1 class="player-name">彼得-萨甘</h1>
				<div class="player-info-item">
					<span class="item-type">赔率:</span> 3.75
				</div>
			</div>
			<div class="input-container">
				<input type="text" placeholder="输入金币">
				<h1 class="predit">预计还回: <span class="red">0</span></h1>
			</div>
		</div>
		<div class="submit-container">
			<div class="btn-submit">
			提交
			</div>
		</div>
	</div>
	<!-- <div class="operator" transition="expand" v-show="show">
		赛段冠军 {{activeHandicap.player}} 赔率 {{activeHandicap.odds}}
		可投金币 {{}}
		<input type="text" v-model="integral">
		<h1 @click="betAdd">提交</h1>
	</div> -->
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
