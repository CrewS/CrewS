<template>
	<div>{{title}}</div>
	<input type="text">
</template>



<script>
	export default{
		props:['title'],
		route: {
			// canReuse:false
		}
	}
</script>