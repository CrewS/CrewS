<style lang="less" scoped>
.page-shadow{
	position:absolute;
	height: 100%;
	width:100%;
	width: 10.0rem;
	top:0;
	left: 0;
	background: rgba(0, 0, 0, 0.9);
	box-sizing: border-box;
	padding: 0 0.32rem;
	.share-bg{
		height: 100%;
		width:100%;
		background: url('../assets/images/share.png') no-repeat;
		background-position: center center;
		background-size: 75%;
	}
	.share-row{
		width: 3.066667rem;
		height: 1.453333rem;
		position: absolute;
		right: 0.533333rem;
		top: 0.4rem;
		background: url('../assets/images/icon/share-row-icon.png') no-repeat;
		background-size: 100%;
	}
}
</style>

<template>
<div class="page-shadow" @click="close" v-show="show">
	<div class="share-bg">

	</div>
	<div class="share-row"> 
	</div>
</div>
</template>

<script>
/*global wx:true*/
export default{
	props: ['show'],
	data(){
		return {
			token: window.access_token,
			domain: window.api_domain
		}
	},
	ready(){
	},
	methods: {
		share: function(){
			let that = this
			let title = '如果你们还不来，那19999元的单车就是我的了'
			let desc = '玩环法竞猜，赢万元骑行装备，还有更多好礼等你来拿！'
			// let img = ''
			wx.onMenuShareTimeline({
				title: title, // 分享标题
				link: '/wap/bet/', // 分享链接
				imgUrl: '', // 分享图标
				success: function () {
					// 用户确认分享后执行的回调函数
					that.callback
				},
				cancel: function () {
					// 用户取消分享后执行的回调函数
				}
			})
			wx.onMenuShareAppMessage({
				title: title, // 分享标题
				desc: desc, // 分享描述
				link: '/wap/bet/', // 分享链接
				imgUrl: '', // 分享图标
				type: '', // 分享类型,music、video或link，不填默认为link
				dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
				success: function () {
					// 用户确认分享后执行的回调函数
					that.callback
				},
				cancel: function () {
					// 用户取消分享后执行的回调函数
				}
			})
		},
		close: function(){
			this.show = false
		},
		callback: function(){
			var url = this.domain + '/api/member/share'
			var params = {
				'token': this.token
			}
			this.$http.jsonp(url, params).then((response) => {
				console.log(response.data)
				this.data = response.data.data
			}, (response) => {
			})
		}
	}
}

</script>
