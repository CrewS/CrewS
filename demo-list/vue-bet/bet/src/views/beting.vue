<style lang="less" scoped>
.tz{
	color: #de0010;
	cursor: pointer;
}
</style>

<template>
<div @click="getTop">
获取排名前60用户
</div>
<div @click="getOfficialHandicap">
获取官方博彩盘
</div>
<div @click="tabView(true)">---------官方博彩-----------</div>
<ul v-show="show">
	<li v-for="item in data">
		{{item.player}}
		<span class="tz" @click="selectPlayer(item)">
			投注
		</span>
	</li>
</ul>


<div @click="tabView(false)">---------庄家盘口-----------</div>
<ul v-show="!show">
	<li v-for="item in data">
		{{item.player}}
		<span class="tz" 
			v-link="{name:'handicap', params:{'stage_id': stage_id, 'player_id': item.player_id}}" >
			投注
		</span>
	</li>
</ul>

<ioperator :active-handicap="active_handicap" :show.sync="show_operator">
</ioperator>

</template>

<script>
import ioperator from '../components/bet-operator.vue'
export default{
	components: {
		ioperator
	},
	data(){
		return {
			token: window.access_token,
			domain: window.api_domain,
			stage_id: '1',
			data: [],
			active_handicap: [],
			show_operator: false,
			show: true
		}
	},
	ready(){
		//	初始化页面的时候获取当前赛段信息
		this.getCurrent()
		this.$watch('stage_id', function(){
			this.getOfficialHandicap()
		})
	},
	methods: {
		//	获取当前赛段
		getCurrent: function(){
			var url = this.domain + '/api/stage/current'
			var params = {
				'token': this.token
			}
			this.$http.jsonp(url, params).then((response) => {
				console.log(response.data)
				// this.data = response.data.data
				this.stage_id = response.data.data.id
			}, (response) => {
			})
		},
		//	获取排名前60用户
		getTop: function(){
			// var url = 'http://bet.biketo.com.cn/api/member/top?token=1dea089bc7928921e045c5e93_25'
			var url = this.domain + '/api/member/top'
			var params = {
				'token': this.token
			}
			this.$http.jsonp(url, params).then((response) => {
				console.log(response.data)
			}, (response) => {
			})
		},
		//	获取官方博彩盘
		getOfficialHandicap: function(){
			var url = this.domain + '/api/handicap/official'
			var params = {
				'token': this.token,
				'stage_id': this.stage_id
			}
			this.$http.jsonp(url, params).then((response) => {
				console.log(response.data.data)
				this.data = response.data.data
			}, (response) => {
			})
		},
		//	选择选手投注
		selectPlayer: function(item){
			this.show_operator = true
			this.active_handicap = item
		},
		//	tab
		tabView: function(show){
			this.show = show
		}
	}
}

</script>
