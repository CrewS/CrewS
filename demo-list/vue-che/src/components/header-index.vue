<style lang="less" scoped>
.bar-nav{
	height:1.030596rem;
	padding: 0 0.603865rem;
	background: #de0010;
	text-align: center;
	vertical-align: middle;
	position: fixed;
	width: 100%;
	top: 0;
	z-index: 10001;
	.locateTitle{
		color: #fff;
		font-size: 16px;
		line-height: 1.09rem;
		float: left;
		margin-left: 0.8rem;
	}
	.user-center-icon{
		width: 0.434783rem;
		height: 0.68438rem;
		position: absolute;
		right: 0.603865rem;
		top:0.257649rem;
		background: url('../assets/images/icon/icon_home_user@3x.png') no-repeat;
		background-size: 100%;
	}
}
.location{
	height:1.030596rem;
	line-height: 1.030596rem;
	display: inline-block;
}
.location:hover{
	text-decoration: none;
}
.location-icon{
	width: 0.241546rem;
	height: 0.322061rem;
	display: inline-block;
	background: url('../assets/images/icon/RTHome_header@3x.png') no-repeat;
	background-size: 100%;
	vertical-align: middle;
}
#city-name{
	font-size: 18px;
	color: #fff;
	text-decoration: none;
	display: inline-block;
	vertical-align: middle;
}
[data-dpr="2"] #city-name{
	font-size: 36px;
}
[data-dpr="3"] #city-name{
	font-size: 54px;
}
.tr-icon{
	width: 0.120773rem;
	height: 0.072464rem;
	display: inline-block;
	vertical-align: middle;
}
.tr-up-icon{
	background: url('../assets/images/icon/tr-up-icon.png') no-repeat;
	background-size: 100%;
}
.tr-down-icon{
	background: url('../assets/images/icon/tr-down-icon.png') no-repeat;
	background-size: 100%;
}
.city-list-content{
	position: fixed;
	z-index: 10000;
	padding: 0 0.603865rem;
	background: #fff;
	width: 100%;
	padding-top: 1.030596rem;
	ul {
		li{
			height: 1.304348rem;
			line-height: 1.304348rem;
			border-bottom: 1px solid rgb(227, 227, 227);
			a{
				display: block;
				width: 100%;
			}
			a:hover{
				text-decoration: none;
			}
			a.active{
				color: #de0010;
			}
		}
	}
}

.item-city-name{
	font-size: 16px;
	color: rgb(71, 71, 71);
}
[data-dpr="2"] .item-city-name{
	font-size: 32px;
}
[data-dpr="3"] .item-city-name{
	font-size: 48px;
}
</style>

<template>
	<header class="bar-nav">
        <a href="javascript:;" @click="getCityList" class="location">
            <span class="ui-icon location-icon"></span>
            <span id="city-name" >{{cityName}}</span>
            <span class="tr-icon tr-down-icon"></span>
        </a>
        <a href="javascript:;" v-link="{name:'my'}" class="ui-icon user-center-icon"></a>
    </header>
	<div class="city-list-content" v-show="showCity">
        <ul id="city-list">
        	<li v-for="item of cityList">
        		<a href="javascript:;" @click="selectCity(item.id, item.name)" class="item-city-name">{{item.name}} </a>
        	</li>
        </ul>
    </div>
</template>

<script>
export default{
	props: ['mask'],
	data(){
		return {
			showCity: false,
			cityList: [],
			cityName: '广州'
		}
	},
	ready(){
	},
	methods: {
		getCityList: function(){
			if (this.showCity){
				return false
			}
			this.showCity = true
			this.toggleMask()
			if (this.cityList.length !== 0){
				return	false
			}
			this.$http.get('/app/che/cities').then((response) => {
				var data = response.data.data
				this.cityList = data.list
			}, (response) => {

			})
		},
		selectCity: function(cityId, cityName){
			this.cityName = cityName
			this.$dispatch('selectCity', cityId, cityName)
			this.toggleMask()
			this.showCity = false
		},
		toggleMask: function(){
			this.$dispatch('toggleMask')//	冒泡到idnex.vue
		},
		tabSearch: function(){
			this.$dispatch('toggleMask')
		}
	}

}

</script>
