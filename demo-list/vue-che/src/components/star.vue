<style lang="less" scoped>
.star{
	margin-top: 0.249597rem;
	height: 0.249597rem;
	line-height: 0.249597rem;
	span{
		display: inline-block;
		margin-right: 0.096618rem;
		width: 0.249597rem;
		height: 0.249597rem;
		overflow: hidden;
	}
}
.star-fail{
	background: url('../assets/images/icon/icon_home_littlestars_gray@3x.png') no-repeat;
	background-size: 100%;
}
span.star-on{
	background: url('../assets/images/icon/icon_home_littlestars_black@3x.png') no-repeat;
	background-size: 100%;
}
.last-time{
	display: inline-block;
	color: rgb(190, 190, 190);
	font-size: 12px;
}
</style>

<template>
	<div class="star">
		<span v-for="n in 5" :class="{'star-fail': true,'star-on': n < star.star}"></span>
	    <div class="last-time">{{star.score}}</div>
	</div>
</template>

<script>
export default{
	props: ['star'],
	ready(){
		// console.log(this.star)
	}
}

</script>
