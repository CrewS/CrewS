<style>
	.input-group-addon-success{
		background-color:#5cb85c;
		color:#fff;
	}


</style>


<template>
	<h1>rotate页面背景图片设置等</h1>
	<form class="form-horizontal">
	<div class="form-group">
		<label for="inputEmail3" class="col-sm-3 control-label font-size-large">按钮设置</label>
		<div class="col-sm-9 input-group">
		  <input type="text" class="form-control" v-model="btnFontColor" id="input-btn-font" placeholder="字体编码"><br>

		  <input type="text" class="form-control" v-model="btnBackgroundColor" id="input-btn-bg" placeholder="背景编码"><br>

		  <input type="text" class="form-control" v-model="btnBorderColor" id="input-btn-border" placeholder="边框编码">

		  <span class="input-group-addon  input-group-addon-success" id="basic-addon2">example:#5cb85c</span>
		</div>
	</div>
	<div class="form-group">
		<label for="inputPassword3" class="col-sm-3 control-label">背景图片</label>
		<div class="col-sm-9 input-group">
		  <input type="file" id="exampleInputFile">
		</div>
	</div>
	<div class="form-group">
		<label for="inputPassword3" class="col-sm-3 control-label">转盘图片</label>
		<div class=" col-sm-9 input-group">
		  <input type="file" id="exampleInputFile">
		</div>
	</div>
	<div class="form-group">
		<label for="inputPassword3" class="col-sm-3 control-label">指针图标</label>
		<div class=" col-sm-9 input-group">
		  <input type="file" id="exampleInputFile">
		</div>
	</div>
	<div class="form-group">
		<label for="inputPassword3" class="col-sm-3 control-label">规则设置</label>
		<div class="col-sm-9 input-group">
		  <input type="text" class="form-control" id="input-btn-border" placeholder="规则1">
		</div>
	</div>
	<rule :items="6"></rule>
	<div class="form-group">
		<div class="col-sm-offset-3 col-sm-9 input-group">
		  <button type="button" @click="save" class="btn btn-success">保存</button>
		</div>
	</div>
</form>
	

</template>


<script>
import rule from './rule.vue';
// import jQuery from '../assets/js/jquery-1.7.2.min.js'



	export default{
		components:{
	    	rule
	  	},
	  	methods:{
	  		save:function(){
	  			var fontColor = this.btnFontColor;
	  			var backgroundColor = this.btnBackgroundColor
	  			var borderColor = this.btnBorderColor

	  			console.log(fontColor,);
	  			var  e = document.getElementById('if1').contentWindow.document.getElementById('check-my');
	  			e.style.color = fontColor;
	  			e.style.backgroundColor=backgroundColor;
	  			e.style.borderColor = borderColor
	  			// console.log($(e).html(););
	  		}
	  	}
	}
	// $('#save').click(function(){
	// 	console.log('save');
	// })



</script>	
