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
	    		<ct></ct>
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
	import ct from '../comp/center-block.vue'
	import navheader from '../comp/nav-header.vue'
	
	export default{
		data(){
			return{
				title:'hello rotate'
			}
		},
		components:{
	    	screen,ct,navheader
	  	}
	}
</script>