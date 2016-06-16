<style lang="less" scoped>

.shop-list{
	padding-left:0.338164rem;
	padding-right: 0.483092rem;
	// height: 100%;
	padding-top: 0.338164rem;
	background: #fff;
	a{
		color: rgb(71, 71, 71);
	}
	li{
		height: 2.73752rem;
		padding-bottom: 0.338164rem;
		position: relative;
		.shop-img{
			height: 2.399356rem;
			width: 3.220612rem;
			float: left;
			display: block;
			margin-right: 0.338164rem;
		}
		.shop-info{
			width: 5.555556rem;
			overflow: hidden;
			float: left;
			.shop-name{
			}
			.way-length{
				height: 0.241546rem;
				line-height: 0.241546rem;
				color: rgb(71, 71, 71);
				margin-top:0.563607rem;
				i{
					display: block;
					float: left;
					margin-top: 0.072464rem;
					margin-left: 0.048309rem;
					height: 0.144928rem;
					width: 0.144928rem;
					border-radius: 100%;
					background: #eaeaea;
					margin-right: 0.193237rem;
				}
			}
			.location-name{
				height: 0.322061rem;
				line-height: 0.322061rem;
				color: rgb(71, 71, 71);
				margin-top: 0.241546rem;
				i{
					display: block;
					float: left;
					width: 0.241546rem;
					height: 0.322061rem;
					margin-right: 0.144928rem;
					background: url('../assets/images/icon/icon_order_didian@3x.png') no-repeat;
					background-size: 100%;
				}
			}
			.exist{
				position: absolute;
				bottom: 0.322061rem;
				right: 0;
				padding-right: 0.708535rem;
				.bike-icon{
					display: block;
					width: 0.523349rem;
					height: 0.289855rem;
					position: absolute;
					right: 0;
					top: 50%;
					margin-top: -0.144928rem;
					background: url('../assets/images/icon/icon_bike__big_black@3x.png') no-repeat;
					background-size: 100%;
				}
			}
		}
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

	}
}
.shop-info{
	.shop-name{
		font-size: 15px;
		color: rgb(71, 71, 71);
	}
	.last-time{
		display: inline-block;
		color: rgb(190, 190, 190);
		font-size: 12px;
	}
}
</style>

<template>
<ul class="shop-list">
	<!-- <h1 @click="btn">123</h1> -->
	<li v-for="item of list" v-link="{name: 'a', params: {id: item.station_id}}" >
	    <img :src="item.mini_photo" alt="item.photo" class="shop-img">
	    <div class="shop-info">
	        <h2 class="shop-name">{{item.station_name}}</h2>
	        <istar :star="{'star': item.star, 'score': item.score}"></istar>

	        <div class="location-name"><i class="location-icon-gray"></i>{{item.address}}
	        </div>                    
	    </div>
	</li>
</ul>
<itab :show.sync="show"></itab>
	
</template>

<script>
import itab from './tab-more.vue'
import istar from './star.vue'
export default{
	data(){
		return {
			list: [],
			city_id: 42,
			coordinate: {'lat': 23.127995, 'lon': 113.372071},
			index: 0,
			show: false
		}
	},
	ready(){
		this.getData()
	},
	methods: {
		getData: function (){
			// var param = $.param({'city_id': this.city_id, 'lat': this.lat, 'lon': this.lon, 'start': this.index})
			// let _this = this//	回调函数内this指针不是指向Vue
			console.log(this.index)
			let params = {'city_id': this.city_id, 'lat': this.coordinate.lat, 'lon': this.coordinate.lon, 'start': this.index}
			console.log(params)
			this.$http({url: '/app/che?', method: 'GET', param: params, headers: {'Cache-Control': 'no-cache'}}).then((response) => {
				var data = response.data.data
				this.list = this.list.concat(data.list)
				this.index = data.index
				this.show = true
				if (data.is_finish === '1'){
					this.show = false
					this.$broadcast('closeTab')
				}
				console.log(response.data)
			}, (response) => {
			})
		},
		btn: function (){
			this.getData()

			// console.log(this.list, this.index)
		}
	},
	events: {
		//	加载更多的触发器
		'tab-more': function (){
			// this.show = false
			this.getData()
		}
	},
	components: {
		itab, istar
	}
}

</script>
