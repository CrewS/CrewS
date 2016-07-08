<style lang="less" scoped>
.page-wrap{
	height: 100%;
	width: 100%;
	background: url('../assets/images/index.jpg') no-repeat #ffdc00;
	overflow: hidden;
	background-position: center center;
	background-size: 100%;
	// display: table-cell;
	// vertical-align: middle;
	.lets-icon{
		width: 3.826667rem;
		height: 0.64rem;
		background: url('../assets/images/icon/lets-icon.png') no-repeat;
		background-size: 100%;
		position: absolute;
		bottom: 0.266667rem;
		left: 50%;
		margin-left: -1.913333rem;
	}
	.index-page{
		// width: 10.0rem;
		width: 100%;
		height: 15.12rem;
		// display: inline-block;
		position: absolute;
		top: 50%;
		margin-top: -7.56rem;
		.rule-text{
			width: 1.36rem;
			height: 1.36rem;
			background: url('../assets/images/icon/index-rule-text.png') no-repeat;
			background-size: 100%;
			position: absolute;
			right: 0.4rem;
			top: 1.6rem;
		}
	}

}
// .index-page{
// 	height: 100%;
// 	width: 100%;
// 	background: url('../assets/images/index.jpg') no-repeat;
// 	overflow: hidden;
// 	background-position: center center;
// 	background-size: 100%;
// }
</style>

<template>
<div class="page-wrap">
	<div class="index-page">
		<div class="lets-icon" @click="letsGo"></div>
		<div class="rule-text">
		</div>
	</div>
</div>
<!-- <div @click="letsGo">
aaaaaabbbbbbbbbbcccccccccc
</div> -->
</template>

<script>
export default{
	data(){
		return {
			token: window.access_token,
			domain: window.api_domain
		}
	},
	methods: {
		letsGo: function(){
			var url = this.domain + '/api/member/info'
			var params = {
				'token': this.token
			}
			this.$http.jsonp(url, params).then((response) => {
				console.log(response.data)
				//	判断是否第一次登陆 通过能否获取info 返回值 如果为1000 则是第一次登陆 需要填写资料
				if (response.data.status === 0){
					this.$router.go('home')
				} else {
					this.$router.go('login')
				}
			}, (response) => {
			})
		}
	}
}

</script>
