<style lang="less" scoped>
.page-wrap{
	height: 100%;
	width: 100%;
	background: url('../assets/images/app-bg.jpg');
	overflow: hidden;
}
.app-logo{
	width: 8.653333rem;
	height: 2.573333rem;
	background: url('../assets/images/app-logo.png') no-repeat;
	background-position: center center;
	background-size: 100%;
	margin: 0 auto;
	position: relative;
	top: 0.48rem; 
}
.input-container{
	width: 8.32rem;
	height: 8.96rem;
	background-color: #fff;
	margin: 0 auto;
	position: relative;
	margin-top:1.333333rem;
	border-radius: 4px ;
	box-sizing: border-box;
	padding: 0 0.493333rem;
	padding-top: 1.573333rem;
	.user-img{
		width: 2.133333rem;
		height: 2.133333rem;
		position: absolute;
		top:-1.066667rem;
		left: 50%;
		margin-left: -1.066667rem;
		border-radius: 100%;
		border: solid 0.133333rem #fff;
		img{
			width: 100%;
			height: 100%;
			border-radius: 100%;
		}
	}
	h1{
		font-size: 0.373333rem;
		text-align: center;
		padding-bottom: 0.666667rem;
	}
	label{
		text-align: center;
		display: block;
		width: 100%;
		margin-bottom: 0.2rem;
		color: #c9c9c9;
	}
	.input-box{
		height: 0.933333rem;
		width: 100%;
		background-color: #eee;
		border: none;
		outline: none;
		text-align: center;
		color: #b5b5b5;
		margin-bottom: 0.2rem;
		border-radius: 4px;
	}
	.btn-submit{
		height: 0.933333rem;
		width: 100%;
		border-radius: 4px;
		background-color: #ffdc00;
		border: none;
		text-align: center;
		line-height: 0.933333rem;
		font-size: 0.32rem;
	}
}
.ricer{
	width: 8.32rem;
	height: 4.186667rem;
	position: absolute;
	bottom:-2.426667rem;
	left: 50%;
	margin-left: -4.16rem;
	img{
		width: 100%;
	}
}
</style>

<template>
<div class="page-wrap">
	<div class="app-logo">
		
	</div>
	<div class="input-container">
		<div class="user-img">
			<img src="../assets/images/noavatar_middle.gif">
		</div>
		<h1>欢迎！</h1>
		<label>先给自己起一个看起来很好运的名字</label>
		<input type="text" class="input-box" placeholder="请输入名字" v-model="nickname">
		<label>为了方便领取奖品，请留下正确的手机号码</label>
		<input type="text" class="input-box" placeholder="请输入手机号码" v-model="mobile">
		<button class="btn-submit" @click="login()">领取第一桶金</button>
		<div class="ricer">
			<img src="../assets/images/ricer.png">
		</div>
	</div>
	
</div>
<ifooter></ifooter>
</template>

<script>
/*global _Prompt:true*/
import ifooter from '../components/footer.vue'

export default{
	components: {
		ifooter
	},
	data(){
		return {
			token: window.access_token,
			domain: window.api_domain,
			nickname: '',
			mobile: ''
		}
	},
	route: {
		activate(){
			// this.getData()
		}
	},
	methods: {
		getData: function(){
			var url = this.domain + '/api/member/info'
			var params = {
				'token': this.token
			}
			this.$http.jsonp(url, params).then((response) => {
				// console.log(response.data)
				//	判断是否第一次登陆 通过能否获取info 返回值 如果为1000 则是第一次登陆 需要填写资料
				if (response.data.status === 0){
					this.$router.go('home')
				}
			}, (response) => {
			})
		},
		login: function(){
			if (!this.checkInput()){
				return false
			}
			var url = this.domain + '/api/member/save-info'
			var params = {
				'token': this.token,
				'nickname': this.nickname,
				'mobile': this.mobile
			}
			this.$http.jsonp(url, params).then((response) => {
				// console.log(response.data)
				this.data = response.data.data
				var oTest = new _Prompt(130, 60, 0.7, 1500, 'middle', response.data.msg)
				oTest.start()
				// console.log(response.data.status === 601)
				if (response.data.status === 0){
					this.$router.go('home')
					// console.log(response.data.status, 'init')
				}
				// this.$router.go('home')
			}, (response) => {
			})
		},
		checkInput: function(){
			if (this.nickname === '' || this.mobile === ''){
				// console.log(22222)
				var oTest = new _Prompt(130, 60, 0.7, 1500, 'middle', '名字或电话不能为空')
				oTest.start()
				return false
			} else {
				return true
			}
		}
	}
}

</script>
