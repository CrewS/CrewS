<style lang="less" scoped>
.tab-more{
	a{
		display: inline-block;
		width: 100%;
		text-align: center;
		color: rgb(71, 71, 71);
		padding: 0.338164rem;
		border-top: 1px solid #dedede;
	}
	a:hover{
		text-decoration: none;
	}
	
}
.loading{
	width:100%;
	line-height: 2rem;
	text-align: center; 
	color: #ccc;
	span{
		background: url('../assets/images/loading.gif') no-repeat center; 
		background-size: 100% auto; 
		width: .4rem;
		height: .4rem;
		display: inline-block;
		vertical-align: middle; 
	}
}
</style>

<template>
	<div class="shop-loading" v-show="!show&&loading">
        <div class="loading" style="">
            <span></span>
            正在拼命加载……
        </div>
    </div>
    <div class="tab-more" v-show="show">
        <a @click="getData" class="normal-fs">更多</a>
    </div>
</template>

<script>
export default{
	props: ['show'],
	data(){
		return {
			loading: true
		}
	},
	methods: {
		getData: function (){
			this.show = false
			this.$dispatch('tab-more')
		}
	},
	events: {
		closeTab: function (){
			this.loading = false
		}
	}
}

</script>
