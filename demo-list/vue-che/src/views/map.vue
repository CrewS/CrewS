<style lang="less" scoped>
.content-wrap.content-padding{
	padding-top:1.030596rem;
}
.index-nav{
	height: 0.966184rem;
	background: #fff;
	text-align: center;
	position: relative;
	// top: 1.030596rem;
	// width: 100%;
	.menu{
		display: inline-block;
		height: 0.966184rem;
		width: 0.966184rem;
		text-align: center;
		line-height: 0.966184rem;
		color: rgb(71, 71, 71);
	}
	.che-list{
		margin-right: 2.173913rem;
	}
	a.active{
		border-bottom: 0.048309rem solid #de0010;
		color: #d93c37;
	}
	.search-icon{
		display: block;
		position: absolute;
		right: 0.603865rem;
		top: 0.305958rem;
		width: 0.338164rem;
		height: 0.338164rem;
		background: url('../assets/images/icon/icon_home_search@3x.png') no-repeat;
		background-size: 100%;
	}
}
.index-nav{
	font-size: 12px;
}
[data-dpr="2"] .index-nav{
	font-size: 24px;
}
[data-dpr="3"] .index-nav{
	font-size: 38px;
}
.index-banner{
	height: 3.220612rem;
	width: 100%;
	border-bottom: 1px solid rgb(227, 227, 227);
	img{
		width: 100%;
		height: 100%;
	}
}
</style>

<template>
	<iheader></iheader>
	<isearch :show-search-block="showSerchBlock"></isearch>
	<div class="content-wrap content-padding">	
		<div class="index-nav">
	        <a v-link="{name: 'index'}" class="menu che-list ">列表</a>
	        <a href="#" class="menu active">地图</a>
	        <a href="javascript:;" @click="tabSearch" class="ui-icon search-icon "></a>
    	</div>
	</div>
	<imap :data="data" :city="city"></imap>
	<imask :mask.sync="mask"></imask>
</template>

<script>
import iheader from '../components/header-index.vue'
import imask from '../components/mask-bg.vue'
import isearch from '../components/search-history.vue'
import imap from '../components/list-map.vue'
export default{
	name: 'map',
	components: {
		iheader, imask, isearch, imap
	},
	data(){
		return {
			mask: false,
			showSerchBlock: false,
			data: [],
			city: {'name': '广州', 'id': 42},
			lon: 113.369183,
			lat: 23.116525
		}
	},
	ready(){
		this.getMapData(this.city.id)
	},
	methods: {
		tabSearch: function(){
			this.$broadcast('tabSearch')
		},
		getMapData: function(){
			var params = {'city_id': this.city.id, 'lon': this.lon, 'lat': this.lat}
			this.$http.get('/app/che/map', null, {'params': params}).then((response) => {
				var data = response.data.data
				this.data = data
			}, (response) => {
			})
		}
	},
	events: {
		//	遮罩事件
		'toggleMask': function(){
			this.mask = !this.mask
		},
		'selectCity': function(cityID, cityName){
			this.city.id = cityID
			this.city.name = cityName
			this.getMapData()
			// console.log(cityID)
		}

	}
}

</script>
