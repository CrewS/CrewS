<style lang="less" scoped>
.page-wrap{
	height: 100%;
	width: 100%;
	background: url('../assets/images/index.jpg') no-repeat #ffdc00;;
	overflow: hidden;
	background-position: center center;
	background-size: 100%;

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
