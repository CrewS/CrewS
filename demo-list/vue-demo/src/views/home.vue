<style type="text/css">
	.wrap{
		padding-top:70px;
	}
</style>
<template>
	<div class="wrap">
		<navheader>
		</navheader>
	    <div class="container">
	    	<div class="col-sm-7">
	    		<home></home>
	    	</div>
	    	<div class="col-sm-5">
	    		<div class="col-sm-12">
	    			<screen></screen>
	    		</div>
	    	</div>
	    	
	    </div>
	</div>
</template>

<script>
	import screen from '../comp/screen.vue'
	import home from '../comp/home-block.vue'
	import navheader from '../comp/nav-header.vue'


	export default{
		data(){
			return{
				title:'hello home'
			}
		},
		components:{
	    	screen,home,navheader
	  	}
	}
</script>