
<style>
	/* 必需 */
	.expand-transition {
	  transition: all .3s ease;
	  height: 30px;
	  padding: 10px;
	  background-color: #eee;
	  overflow: hidden;
	}

	/* .expand-enter 定义进入的开始状态 */
	/* .expand-leave 定义离开的结束状态 */
	.expand-enter, .expand-leave {
	  height: 0;
	  padding: 0 10px;
	  opacity: 0;
	}
	.tab{
		width:25px;
		height:25px;
	}
	.hello{
		font-size: 18px;

	}
</style>


<template>
	<div>{{title}}11</div>
	<button class="tab" @click="btn"></button>
	<div class="hello" v-if="show" :transition="transitionName" stagger="100" >hello</div>
</template>



<script>
	export default{
		props: ['title'],
		route: {
		},
		data(){
			return {
				show: false,
				transitionName: 'expand'
			}
		},
		methods: {
			btn: function(){
				this.show = !this.show
			}
		}

	}

</script>