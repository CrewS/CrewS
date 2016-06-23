<style lang="less" scoped>
#allmap {
  height: 14.492754rem;
}

.map-shop-point-wrap{
	position: fixed;
	height: 3.140097rem;
	width: 100%;
	bottom: 0;
	z-index: 999;
	background: #fff;
	box-shadow: 9px 13px 25px ;
	a{
		color: rgb(71, 71, 71) !important;
	}
	.che-icon{
		height: 1.111111rem;
		width: 1.111111rem;
		position: absolute;
		left: 0.603865rem;
		top: 0.483092rem;
	}
	.info-content{
		padding-left: 2.198068rem;
		padding-top: 0.603865rem;
		width: 100%;
	}
	.star-map{
		// height: 0.241546rem;
		padding-top: 0.241546rem;
		padding-bottom: 0.243092rem;
	}
	.go-icon{
		width: 0.193237rem;
		height: 0.338164rem;
		display: block;
		position: absolute;
		background: url('../assets/images/icon/RTHome_details_right_arrow.imageset.png') no-repeat;
	    background-size: 100%;
	    right: 0.603865rem;
	    top: 50%;
	    margin-top: -0.193237rem;

	}
}
</style>

<template>
<div class="brandMap">
	<div id="allmap" class="mui-col-xs-12 "></div>
</div>
<div id="post-content" class="map-shop-point-wrap" v-link="{name: 'view', params: {id: station.station_id}}">
    <img class="che-icon" src="http://rent.biketo.com.cn/uploads/images/201603/m/20160302154914_trcfs.jpg"></img>
	<div class="info-content">
		<h1 class="normal-fs">{{station.station_name}}</h1>
		<div class="star-wrap star-map">
			<istar :star="{'star': station.star, 'score': station.score, 'type': true}"></istar>
		</div>
		<p class="sm-fs">{{station.address}}</p>
	</div>
	<i class="go-icon" v-show="single != true"></i>
</div>
</template>
<script>
/*global BMap:true*/
/*global BMAP_ANCHOR_TOP_RIGHT:true*/
/*global BMAP_NAVIGATION_CONTROL_SMALL:true*/
import istar from './star.vue'
import nocheIcon from '../assets/images/noche.png'
import youcheIcon from '../assets/images/youche.png'
export default{
	props: ['data', 'city', 'single'],
	components: {
		istar
	},
	data(){
		return {
			loading: 0,
			// city: {'name': '广州', 'id': 42},
			lon: 113.369183,
			lat: 23.116525,
			point: null,
			map: null,
			imgSrc: {'youche': youcheIcon, 'noche': nocheIcon},
			selectMark: [],
			station: []
		}
	},
	created(){
		window.onload = this.loadScript(
			'http://api.map.baidu.com/getscript?v=2.0&ak=XXY18kXBNgwlPZo4DcljTd4V&services=&t=20160513110936',
			this.mapInit
		)
		window.onload = this.loadScript(
			'http://developer.baidu.com/map/jsdemo/demo/convertor.js',
			this.mapInit
		)
	},
	methods: {
		loadScript: function(src, callback){
			var script = document.createElement('script')
			document.body.appendChild(script)
			if (callback) {
				script.onload = callback
			}
			script.src = src
		},
		//	地图初始化
		mapInit: function(){
			this.loading += 1
			if (this.loading !== 2){ //	判断百度地图API需要的2个JS是否加载完毕
				return false
			}
			var map = new BMap.Map('allmap', {minZoom: 9, maxZoom: 20})
			this.map = map
			var myGeo = new BMap.Geocoder()
			var city = this.city.name
			//	根据城市定位
			myGeo.getPoint(city, function(point){
				if (point) {
					map.centerAndZoom(point, 14)
					// map.addOverlay(new BMap.Marker(point));
					// var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});
					var topRightNavigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL})
					// map.addControl(top_left_control);
					map.addControl(topRightNavigation)
				} else {
					console.log('您选择地址没有解析到结果!')
				}
			}, city)
			//	初始化marker
			this.markerInit()
			//	监听数据变化
			this.$watch('data', function(val){
				this.markerInit()
			})
		},
		//	marker点初始化
		markerInit: function(){
			var map = this.map

			var oData = this.dataFilter(this.data.list)
				if (oData === '' || oData === undefined || oData === '[]'){
					return false
                } else {
					for (var i = 0; i < oData.length; i++) {
						let myIcon = new BMap.Icon(nocheIcon, new BMap.Size(48, 48))
						let tabOn = new BMap.Icon(youcheIcon, new BMap.Size(48, 48))
						var marker = null
						if (i === 0){
							marker = new BMap.Marker(oData[i].lonlat, {icon: tabOn})
							if (this.selectMark.length > 0){
								var tmpMarker = this.selectMark.pop()
								tmpMarker.setIcon(myIcon)
							}
							this.selectMark.push(marker)
							this.station = this.data.list[0]
						} else {
							marker = new BMap.Marker(oData[i].lonlat, {icon: myIcon})
						}
						//	@bug不能去除重复点
						map.removeOverlay(marker)
						map.addOverlay(marker)
						//	初始化选中的station
						//	给marker点添加监听事件:切换图标颜色与选中station信息
						let that = this
						let index = i
						marker.addEventListener('click', function () {
							if (that.selectMark.length > 0){
								var tmpMarker = that.selectMark.pop()
								tmpMarker.setIcon(myIcon)
							}
							this.setIcon(tabOn)
							that.selectMark.push(this)
							that.station = that.data.list[index]
						})
					}
                }
                // console.log(map.getOverlays())获取所有的覆盖物
                map.centerAndZoom(this.city.name, 14)
                console.log(this.city.name)
		},
		//	map数据格式化
		dataFilter: function(opts){
			var optsssssss = []
			if (opts === '' || opts === undefined) {
				return false
			} else {
			for (var i = 0; i < opts.length; i++){
				var json1 = {}
				json1.width = 100
				json1.height = 100
				json1.title = opts[i].station_name
				json1.available = opts[i].available
				json1.lonlat = new BMap.Point(opts[i].lon, opts[i].lat)
				optsssssss.push(json1)
			}
				return optsssssss
			}
		},
		//	拖拽监听待考虑
		addMapListener: function(){
			var map = this.map
			// var center = map.getCenter()
			var bd = map.getBounds()
			// var oUrl = '/app/che/map'
			var oLeft = bd.Ie
			var oRight = bd.De
			var oTop = bd.Ee
			var oBottom = bd.Je
			var lon = this.lon
			var lat = this.lat
			var cityId = this.city.id
			var params = {	'city_id': cityId,
							'lon': lon,
							'lat': lat,
							'lfet': oLeft,
							'right': oRight,
							'top': oTop,
							'bottom': oBottom
						}
			this.$http.get('/app/che/map', null, {'params': params}).then((response) => {
				var data = response.data.data
				console.log(data)
				var oData = this.dataFilter(data.list)
				if (oData === '' || oData === undefined || oData === '[]'){
					return false
                } else {
					// var len = oData.length
					for (var i = 0; i < oData.length; i++) {
						var myIcon
						if (oData[i].available === 0) {
							myIcon = new BMap.Icon(nocheIcon, new BMap.Size(48, 48))
						} else {
							myIcon = new BMap.Icon(youcheIcon, new BMap.Size(48, 48))
						}
						var marker = new BMap.Marker(oData[i].lonlat, {icon: myIcon})
						var map = this.map
						map.removeOverlay(marker)
						map.addOverlay(marker)
						// $("#index").val(0)
						// $("#post-content").html(template('post', data.list[0]));
						let index = i
						marker.addEventListener('click', function () {
							console.log(index)
						})
					}
                }
			}, (response) => {
			})
		}
	},
	watch: {
		'map': function(val){
			console.log(val)
		}
	}
}

</script>
