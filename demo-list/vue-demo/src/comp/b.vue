<style scoped>
.container {
  border: 1px solid #f00;
}
h2 {
  color: #393;
}
.btn{
	text-decoration:none;
	font-size:18px;
	color:#393;
}
</style>

<template>
  <div class="container">
  	<a v-link="'index'" class="btn">B => A</a> 
    <h2>Hello from Component B!</h2>
    <cat :title="title"></cat>
  </div>
</template>
<script>
import cat from './c.vue'

export default {
	name:'user',
	data(){
		return{
			title:'i am b to c'
		}
	},
	components: {
    	cat
  	},
}
</script>