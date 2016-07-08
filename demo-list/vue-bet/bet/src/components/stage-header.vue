<style lang="less" scoped>
.header{
	width: 100%;
	height:0.853333rem;
	background: #fff;
	box-sizing: border-box;
	padding: 0.24rem;
	font-size: 0.32rem;
	line-height: 0.373333rem;
}
.stage-name{
	font-weight: bold;
}
.bet-type{
	color: #434343;
	float: right;
}
</style>

<template>
<div class="header">
	<span class="stage-name">{{title}}</span>
	<span class="bet-type">{{tips}}</span>
</div>
</template>

<script>
export default{
	props: ['title', 'tips'],
	data(){
		return {
		}
	},
	methods: {
	}
}

</script>
