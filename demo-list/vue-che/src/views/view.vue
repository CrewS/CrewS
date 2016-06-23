<style lang="less" scoped>
*{
	padding: 0;
	margin:0;
}
.shop-point-header{
	// height: 6.280193rem;
	position: relative;

	img{
		width: 100%;
		height: auto;
	}
	a{
		display: block;
		height: 0.78905rem;
		width: 0.78905rem;
		position: absolute;
	}
	.return{
		left: 0.603865rem;
		top: 0.338164rem;
		background: url('../assets/images/icon/icon_Home_back_black@3x.png') no-repeat;
		background-size: 100%;	
	}
	.collect{
		right: 0.603865rem;
		top: 0.338164rem;
		background: url('../assets/images/icon/icon_Collect_start_black@3x.png') no-repeat;
		background-size: 100%;	
	}
}
.shop-point-content{
	padding: 0 0.603865rem;
	padding-top: 0.603865rem;
	padding-bottom: 1.594203rem;
	.star-wrap{
		padding-top: 0.241546rem;
		padding-bottom: 0.724638rem;
		border-bottom: 1px solid rgb(234, 234, 234);
	}
}
.shop-comment{
	a:hover{
		text-decoration: none;
	}
	.section-header{
		height: 1.288245rem;
		line-height: 1.288245rem;
		border-bottom: 1px solid rgb(234, 234, 234);
		.see-more{
			float: right;
			color: rgb(71, 71, 71); 
			i{
				display: block;
				float: right;
				margin-top: 0.483092rem;
				margin-left: 0.080515rem;
				width: 0.193237rem;
				height: 0.338164rem;
				background: url('../assets/images/icon/RTHome_details_right_arrow.imageset.png') no-repeat;
				background-size: 100%;	
			}
		}
	}
}
.shop-detail{
	padding-bottom: 0.338164rem;
	border-bottom: 1px solid rgb(234, 234, 234);
	.section-header{
		height: 1.288245rem;
		line-height: 1.288245rem;
		border-bottom: 1px solid rgb(234, 234, 234);
		position: relative;
	}
	.shop-info{
		padding-top: 0.483092rem;
		padding-left: 0.483092rem;
		p{
			padding-bottom: 0.241546rem;
		}
	}
	.map-icon{
		width: 0.434783rem;
		height: 0.434783rem;
		position: absolute;
		top: 0;
		bottom: 0;
		right: 1.6rem;
		margin: auto;
		background: url('../assets/images/icon/icon_order_map@3x.png') no-repeat;
		background-size: 100%;
	}
	.phone-border-left{
		height: 0.634783rem;
		width: 1px;
		background: #eaeaea;
		display: inline-block;
		position: absolute;
		top: 0;
		bottom: 0;
		margin: auto;
		right: 1rem;
	}
	.map-border-left{
		height: 0.634783rem;
		width: 1px;
		background: #eaeaea;
		display: inline-block;
		position: absolute;
		top: 0;
		bottom: 0;
		margin: auto;
		right: 2.5rem;
	}
	.phone-call {
		width: 0.434783rem;
		height: 0.434783rem;
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0.1rem;
		margin: auto;
		background: url('../assets/images/icon/icon_order_Contact@3x.png') no-repeat;
		background-size: 100%;
	}
}
.shop-op-wrap{
	a:hover{
		text-decoration: none;
	}
	position: fixed;
	height: 1.594203rem;
	padding: 0 0.603865rem;
	width: 100%;
	bottom: 0;
	z-index: 9999;
	border-top:1px solid rgb(234, 234, 234);
	background: #fff;
	box-shadow: 5px 20px 22px ;
	text-align: center;
	.op-info{
		float: left;
		padding-top: 0.555556rem;
		line-height: 0.483092rem;
		i{
			height: 0.483092rem;
			width: 0.805153rem;
			display:block;
			float: left;
			margin-right: 0.241546rem;
			background: url('../assets/images/icon/icon_bike__big_black@3x.png') no-repeat;
			background-size: 100%;	
		}
	}
	.op-btn{
		display: inline-block;
		// float: right;
		height: 1.111111rem;
		line-height: 1.111111rem;
		width: 3.768116rem;
		text-align: center;
		border-radius: 0.772947rem;
		background: #d93c37;
		color: #fff;
		margin-top: 0.241546rem;
	}
	.op-btn-gray{
		background: rgb(190, 190, 190);
		color: #fff;
	}
}

</style>

<template>
<div class="shop-point-header">
	<img :src="data.photo" alt="{{data.photo}}">
	<a href="javascript:history.go(-1)" class="return"></a>
</div>
<div id="shop-point-content" class="shop-point-content">
    <h1 class="big-fs">{{data.station_name}}</h1>
        <div class="star-wrap">
        	<istar :star="{'star': data.star, 'score': data.score, 'type': true}"></istar>
        </div>
        <div class="shop-detail">
            <div class="section-header normal-fs">
                网点详情
                <span class="map-border-left"></span>
                <a 	class="map-icon" 
                	v-link="{name: 'mapLocate', params:{'id': data.station_id}}">
            	</a>
                <span class="phone-border-left"></span>
                <a href="tel:13200000007" class="phone-call"></a>
            </div>
             <div class="shop-info">
                <p><span>车辆售价</span>：￥{{model.price}}</p>
                <p><span>车辆押金</span>：￥{{model.deposit}}(或者可以抵押学生证/学生卡)</p>
                <p><span>店铺地址</span>： {{data.address}}</p>
                <p><span>具体租金</span> </p>
            </div> 
            <itable :price-str="priceStr"></itable>
        </div>
        <div class="shop-comment">
            <div class="section-header normal-fs">
                店铺评价({{rating.count}})
                <a v-link="{name: 'comments', params: {id: data.station_id}}" v-if="rating.count > 0" class="see-more">查看全部</a>
            </div>
            <icomment :rating="rating" :limited="'3'"></icomment>
        </div>
</div>
<div class="shop-op-wrap" id="shop-op-wrap">
     <a class="op-btn normal-fs op-btn-red" href="/wap/che/create.html?id=11">马上租车</a>
</div>
</template>

<script>
import '../vendors/css/mui.css'

import istar from '../components/star.vue'
import itable from '../components/prize-table.vue'
import icomment from '../components/list-comment.vue'
export default{
	name: 'view',
	components: {
		istar, itable, icomment
	},
	data(){
		return {
			data: [],
			model: [],
			priceStr: [],
			rating: []
		}
	},
	ready(){
		// this.getData()
	},
	attached(){

	},
	route: {
		activate: function(transition){
			this.getData(transition)//	优化视图切换过程 文字替换的假象
		}
	},
	methods: {
		getData: function(transition){
			var params = {'station_id': this.$route.params.id}
			this.$http.get('/app/che/station', null, {'params': params}).then((response) => {
				var data = response.data.data
				this.data = data.data
				this.rating = data.rating
				this.priceStr = data.priceStr
				this.model = data.model
				console.log(data)
				transition.next()
			}, (response) => {
			})
		}
	}
}

</script>
