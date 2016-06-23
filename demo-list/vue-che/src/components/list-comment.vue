<style lang="less" scoped>
.shop-comment{
	a:hover{
		text-decoration: none;
	}
	.comment-list{
		
		// padding-bottom: 4.025765rem;
		li{
			padding-top: 0.483092rem;
		}
		.comment-header{

			height: 0.805153rem;
			.user-img{
				height: 0.805153rem;
				width: 0.805153rem;
				float: left;
				img{
					width: 100%;
					height: 100%;
					border-radius: 100%;
				}
			}
			.user-info{
				height: 0.805153rem;
				float: left;
				width: 5.830918rem;
				margin-left: 0.241546rem
			}
		}
		.comment-content{
			padding-left: 1.046699rem;
			padding-top: 0.338164rem;
			padding-bottom: 0.338164rem;
		}
		.comment-img-list{
			padding-left: 1.046699rem;
			img{
				display: inline-block;
				width: 1.996779rem;
				height: 1.996779rem;
				margin-right: 0.241546rem;
			}
		}
	}
	.no-comment{
		height: 6.441224rem;
		.no-comment-bg{
			width:3.220612rem;
			text-align: center;
			position: absolute;
			left: 50%;
			margin-left: -1.610306rem;
			margin-top: 1.207729rem;
			img{
				display: inline-block;
				width: 65%;
				margin-bottom: 0.338164rem;
			}
		}
	}
}

</style>

<template>
<ul class="comment-list" v-if="rating.count > 0" style="">
	<li v-for="value of rating.data">
		<div class="comment-header">
			<div class="user-img">
				<img :src="value.avatar"  v-if="value.avatar!=''">
				<img src="../assets/images/noavatar_middle.gif"  v-else>
			</div>
			<div class="user-info">
				<span class="user-name">{{value.name}}</span>
			<div class="comment-star-wrap">
				<istar :star="{'star':value.star,'score':value.time}"></istar>
			</div>
			</div>
		</div>
		<div class="comment-content normal-fs">{{value.content}}</div>
		<div class="comment-img-list">
		</div>
	</li>
	<itab :show="rating.is_finish == 0"></itab>
</ul>
<div class="no-comment" v-else>
	<div class="no-comment-bg">
	    <img src="../assets/images/icon/icon_user_message_wu@3x.png">
	    <br>
	    <span class="sm-fs">暂无收到任何评论</span>
	</div>
</div>

</template>

<script>
import istar from '../components/star.vue'
import itab from './tab-more.vue'
export default{
	props: ['rating', 'limited'],
	components: {
		istar, itab
	},
	data(){
		return {
		}
	},
	ready(){
		console.log(this.limited === '3')
		if (this.limited === '3'){
			console.log(this.$children)
			this.$broadcast('closeTab')
		}
	},
	methods: {
		getC: function(){
			console.log(this.$children)
		}
	}
}

</script>
