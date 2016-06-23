<style lang="less" scoped>
.feedback-wrap{
	padding: 0 0.603865rem;
	padding-top: 1.030596rem;

	.phone-number{
		height: 1.352657rem;
		line-height: 1.352657rem;
		border-bottom: 1px solid #dedede;
		position: relative;
		.phone-input{
			height: 1.20451rem;
			padding: 0.144928rem;
			width: 5.441224rem;
			border: none;
			margin-bottom: 0;
		}
		.phone-call-icon{
			width: 0.434783rem;
			height: 0.434783rem;
			display: block;
			position: absolute; 
			right: 0.338164rem;
			top: 0.434783rem;
			background: url('../assets/images/icon/icon_order_Contact@3x.png') no-repeat;
			background-size: 100%;
			z-index: 111;
		}
	}
	.check-op{
		padding-top: 0.338164rem;
		padding-bottom: 0.338164rem;
		border-bottom: 1px solid #dedede;
		input[type=checkbox]{
			display: none;
		}
		.checkbox{
			display: inline-block;
			height: 0.434783rem;
			width: 0.434783rem;
			background: url('../assets/images/icon/icon_uncheck@3x.png') no-repeat;
			background-size: 100%;	
		}
		input[type=checkbox]:checked+label{

			background: url('../assets/images/icon/icon_selected_@3x.png') no-repeat;
			background-size: 100%;	
		}
	}
	.feedback-content{
		padding: 0.338164rem 0;
		height: 4.347826rem;
		.area{
			width: 100%;
			height: 100%;
			padding: 0.338164rem;
			background: rgb(244, 244, 244);
			border: none;
		}
	}
	.submit{
		display: block;
		width: 3.768116rem;
		height: 1.111111rem;
		background: #d93c37;
		border-radius: 0.724638rem;
		text-align: center;
		color: #fff;
		line-height: 1.111111rem;
		margin: 0 auto;
		margin-top: 1.207729rem;
	}
	.submit-gray{
		background: rgb(190, 190, 190);
	}
	a:hover{
		text-decoration: none;
	}
}
.feedback-mask-bg{
  width:100%;
  height:100%;
  background-color:rgba(1, 1, 1 , 0.3);
  // opacity:.6;filter:alpha(opacity=60);

  position:absolute;
  top:0;
  left:0;z-index:9999;
  display: none;
  .alert-message{
  	height: 4.541063rem;
  	width: 7.246377rem;
  	
  	padding: 0 0.433977rem;
  	padding-top: 1.111111rem;
  	position: absolute;
  	top: 50%;
  	left: 50%;
  	margin-left: -3.623188rem;
  	margin-top: -2.270531rem;
  	background: #fff;
  	text-align: center;
  	p{
  		text-align: left;
  	}
  	.confirm-btn{
  		display: inline-block;
  		font-size: 0.386473rem;
  		color: #de0010;
  		margin: 0 auto;
  		position: absolute;
  		bottom: 0.603865rem;
  		left: 50%;
  		margin-left: -0.386473rem;
  		// margin-top: 0.805153rem;
  	}
  }
}
</style>

<template>
<iheader :title="'投诉'"></iheader>
<div class="feedback-wrap">
	<div class="phone-number">
		<span class="normal-fs">您的电话 ：</span><input type="text" name="mobile" id="mobile" value=""  class=" normal-fs phone-input">
	</div>
	<input type="hidden" name="order_id" id="order_id" value="{{order_id}}">
	<div class="check-op">
		<div class="" @click="checkbox">
			<input type="checkbox" v-model="check" id="content2">
			<label class="checkbox" for="content2" ></label>
			<!-- <input type="checkbox">  -->
			<label  for="content2"><span class="normal-fs red-text">没有车了？</span></label>
		</div>
	</div>
	<div class="feedback-content">
		<textarea id="content" v-model="content" name="content" class="area sm-fs" placeholder="请输入反馈内容..."></textarea>
	</div>
	<a @click="getContent" id="complain-btn" class="submit">
		提交
	</a>
	<div class="feedback-mask-bg">
		<div class="alert-message normal-fs">
			<p>您的投诉已受理！我们将尽快处理并给出答复。谢谢！</p>
			<a href="javascript:confrim();"  class="confirm-btn">确认</a>
		</div>
	</div>
</div>
</template>

<script>
/*global mui:true*/
import iheader from '../components/header-normal.vue'
export default{
	name: 'complain',
	components: {
		iheader
	},
	data(){
		return {
			order_id: this.$route.params.id,
			mobile: null,
			check: true,
			content: ''
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
		getContent: function(){
			console.log(this.content)
			if (this.check){
				this.content = '没有车了？' + this.content
			}
			if (this.content !== ''){
				return true
			} else {
				return false
			}
		},
		submit: function(){
			if (this.vphone(this.mobile) && this.getContent()){
				var params = {'order_id': this.order_id, 'mobile': this.mobile, 'content': this.content}
				this.$http.post('/app/che/complain', params).then((response) => {
					console.log(response.data)
				}, (response) => {
				})
			}
		},
		checkbox: function(){
			this.check = !this.check
		}
	}
}

</script>
