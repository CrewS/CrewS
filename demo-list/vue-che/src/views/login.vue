<style lang="less" scoped>
.yz-wrap{
	width: 5.797101rem;
	padding-top: 2.238325rem;
	margin: 0 auto;
	li{
		height: 1.352657rem;
		border-bottom: 1px solid rgb(227, 227, 227);
		overflow: hidden;
		.phone-input{
			width: 5.797101rem;
			height: 1.344605rem;
			line-height: 1.344605rem;
			text-align: center;
			border:none;
		}
		.code-input{
			width: 3.501127rem;
			height: 1.244605rem;
			border:none;
		}
		span{
			padding-left:0.161031rem;
			border-left: 1px solid rgb(227, 227, 227);
			height: 0.724638rem;
			display: inline-block;
			line-height: 0.724638rem;
		}
		span.active{
			width: 2.133655rem;
			text-align: center;
		}
	}
	.click-btn{
		width: 3.768116rem;
		height: 1.111111rem;
		border-radius: 1.111111rem;
		text-align: center;
		color: #fff;
		background: rgb(217, 60, 55);
		line-height: 1.111111rem;
		margin: 0 auto;
		margin-top: 1.298551rem;
	}
	h1{
		text-align: center;
		padding-top: 0.241546rem;
	}
}
.yz-wrap{
	font-size: 14px;
	input{
		font-size: 14px;
	}
	h1{
		font-size: 11px;
	}
	color: rgb(190, 190, 190);
}
[data-dpr="2"] .yz-wrap{
	font-size: 26px;
	input{
		font-size: 26px;
	}
	h1{
		font-size: 22px;
	}
}
[data-dpr="3"] .yz-wrap{
	font-size: 48px;
	input{
		font-size: 48px;
	}
	h1{
		font-size: 33px;
	}
}
</style>

<template>
<div class="yz-content">
	<iheader :title="'验证'"></iheader>
	<ul class="yz-wrap">
		<li>
			<input type="text" id="mobile" v-model="mobile" class="phone-input" placeholder="输入手机号">
		</li>
		<li>
			<input type="text" id="code" v-model="code"  class="code-input" placeholder="输入验证码"><span @click="getCode" id="get-vcode-btn" :class="{'active': time < 60}" >{{tips}}</span>
		</li>
		<div @click="login" id="check-vcode-btn" class="click-btn">
			验证
		</div>
		<h1>*验证后即可享受美骑租车全部服务</h1>
	</ul>
</div>
</template>

<script>
/*global mui:true*/
import iheader from '../components/header-normal.vue'
export default{
	components: {
		iheader
	},
	data(){
		return {
			mobile: null,
			code: null,
			wait: false,
			tips: '获取验证码',
			autoFun: null,
			time: 60
		}
	},
	methods: {
		vphone: function(mobile){
			if (mobile === '' || mobile === undefined){
				mui.alert('手机号码不能为空', '友情提示', function() {})
				return false
			}
			if (!(/^1[3|4|5|7|8]\d{9}$/.test(mobile))){
				mui.alert('手机号码有误，请重填', function() {})
				return false
			}
			return true
		},
		vcode: function(code){
			if (code === '' || code === undefined){
				mui.alert('验证码不能为空', '友情提示', function() {})
				return false
			}
		},
		getCode: function (){
			this.autoFun = setInterval(this.waitTime, 1000)
			if (this.vphone(this.mobile) && !this.wait){
				var params = {'mobile': this.mobile}
				this.$http.get('/app/che/loginsms', null, {'params': params}).then((response) => {
					var data = response.data
					console.log(data)
					mui.alert(data.message, '友情提示', function() {})
				}, (response) => {
				})
			}
		},
		login: function(){
			if (this.vphone(this.mobile) && this.vcode(this.code)){
				var params = {'mobile': this.mobile, 'code': this.code, 'wxid': ''}
				this.$http.get('/app/che/login', null, {'params': params}).then((response) => {
					var data = response.data
					console.log(data)
					mui.alert(data.message, '友情提示', function() {})
				}, (response) => {
				})
			}
		},
		waitTime: function(){
			if (this.time === 1){
				this.time = 60
				clearInterval(this.autoFun)
			} else {
				this.time -= 1
			}
		}
	},
	computed: {
		tips: function(){
			if (this.time === 60){
				return '获取验证码'
			} else {
				return this.time
			}
		}
	}
}

</script>
