
<template>
	<div class="form-group" v-for="n in items">
		<div class="col-sm-offset-3 col-sm-9 input-group">
		  <input type="text" class="form-control" id="input-btn-border" placeholder="规则{{n+2}}">
		</div>
	</div>
</template>
<script>
	export default{
		props:['items']
	}
</script>	



