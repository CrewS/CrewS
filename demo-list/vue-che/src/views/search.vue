<style lang="less" scoped>
.content-wrap.content-padding{
	padding-top:1.030596rem;
}
.result-list{
	// display: none;
}
.has-no-result{
	width: 6.151369rem;
	margin: 0 auto;
	margin-top: 4.025765rem;
	// display: none;
	img{
		width: 100%;
		height: 100%;
	}
	h1{
		text-align: center;
		color: rgb(190, 190, 190);
		margin-top: 0.483092rem;
	}
}
.has-no-result{
	h1{
		font-size: 13px;
	}
}
[data-dpr="2"] .has-no-result{
	h1{
		font-size: 26px;
	}
}
[data-dpr="3"] .has-no-result{
	h1{
		font-size: 39px;
	}
}
</style>

<template>
<isearch  :show-serch-block="showSerchBlock" :search="seach" ></isearch>
<div class="content-wrap  search-result content-padding" >
    <div class="has-no-result" v-show="!result">
        <img src="../assets/images/icon/has-no-result.png">
        <h1>没有相关搜索结果</h1>
    </div>
    <!-- <ul class="shop-list" v-show="result">
		<li v-for="item of list" v-link="{name: 'view', params: {id: item.station_id}}" >
		    <img :src="item.mini_photo" alt="item.photo" class="shop-img">
		    <div class="shop-info">
		        <h2 class="shop-name">{{item.station_name}}</h2>
		        <istar :star="{'star': item.star, 'score': item.score}"></istar>

		        <div class="location-name"><i class="location-icon-gray"></i>{{item.address}}
		        </div>                    
		    </div>
		</li>
		<itab :show.sync="show"></itab>
	</ul> -->
	<istation :list="list" :itab-show.sync="show"></istation>
</div>
<imask :mask.sync="mask"></imask>
</template>

<script>
import '../vendors/css/mui.css'

import isearch from '../components/search-history.vue'
import imask from '../components/mask-bg.vue'
import itab from '../components/tab-more.vue'
import istar from '../components/star.vue'
import istation from '../components/list-station.vue'
export default{
	name: 'search',
	components: {
		isearch, imask, istar, itab, istation
	},
	data(){
		return {
			showSerchBlock: true,
			mask: false,
			seach: null,
			index: 0,
			list: [],
			result: false,
			show: true
		}
	},
	ready(){
		this.seach = this.$route.params.seach
	},
	attached(){
		this.getData()
	},
	route: {
	},
	methods: {
		getData: function(){
			var params = {'search': this.$route.params.search, 'city_id': this.$route.params.cityId, 'start': this.index}
			this.$http.get('/app/che/search', null, {'params': params}).then((response) => {
				var data = response.data.data
				if (data.count === '0'){
					this.show = false
					this.result = false
				} else if (data.count > 0){
					this.result = true
					this.list = this.list.concat(data.list)
					this.index = data.index
					this.show = true
					if (data.is_finish === '1'){
						this.show = false
						this.$broadcast('closeTab')
					}
				}
			}, (response) => {
			})
		}
	},
	events: {
		'tabMore': function(){
			this.getData()
		}
	}
}

</script>
