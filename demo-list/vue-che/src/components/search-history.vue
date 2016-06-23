<style lang="less" scoped>
.search-bar{
	height: 1.030596rem;
	line-height: 0.772947rem;
	padding: 0.128824rem 0;
	position: fixed;
	top: 0;
	z-index: 10001;
	width: 100%;
	background: #de0010;
	display: none;
	.search-input{
		height: 0.772947rem;
		width: 7.729469rem;
		border-radius: 0.772947rem;
		// position: relative;
		// left: 0.483092rem;
		margin-left: 0.483092rem;
		// background: url('../images/icon/icon_home_search@3x.png') no-repeat ;
		background: rgb(243, 243, 243);
		border:none;
		// background-size: 100%;
		padding-left: 0.724638rem;
	}
	.search-icon{
	  display: block;
	  position: absolute;
	  left: 0.724638rem;
	  top: 50%;
	  margin-top: -0.128824rem;

	  width: 0.338164rem;
	  height: 0.338164rem;
	  background: url('../assets/images/icon/icon_home_search@3x.png') no-repeat;
	  background-size: 100%;
	}
	.cancel-btn{
		color: #fff;
		float: right;
		margin-right: 0.603865rem;
	}
	.cancel-btn:hover{
		text-decoration: none;
	}
}

.search-history{
	position: fixed;
	z-index: 10000;
	padding: 0 0.603865rem;
	padding-top: 1.030596rem;
	background: #fff;
	width: 100%;
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
				color: rgb(190, 190, 190);
			}
			span.active{
				color: rgb(190, 190, 190);
			}
			a.clear-history{
				display: block;
				width: 2.657005rem;
				height: 0.772947rem;
				border:1px solid #d93c37;
				line-height: 0.772947rem;
				text-align: center;
				margin: 0 auto;
				color: #d93c37;
				border-radius: 0.032206rem;
				margin-top: 0.289855rem;
			}
		}
	}
}
.item-record-name{
	font-size: 16px;
	color: rgb(71, 71, 71);
}
[data-dpr="2"] .item-record-name{
	font-size: 32px;
}
[data-dpr="3"] .item-record-name{
	font-size: 48px;
}
.search-bar{
	font-size: 15px;
}
[data-dpr="2"] .search-bar{
	font-size: 30px;
}
[data-dpr="3"] .search-bar{
	font-size: 45px;
}
</style>

<template>
<div v-show="showSerchBlock">
	<div class="search-bar" style="display: block;"> <i class="search-icon"></i>
	    <!-- <form method="get" name="serch"> -->
	        <input type="text" v-model="searchWord" class="search-input" @keyup.enter="onEnter" @focus="onfocus"  name="search" placeholder="搜索">
	        <a href="javascript:;" @click="closeSearch" class="cancel-btn">取消 </a>
	        <input type="hidden" name="city_id" id="city_id" value="26">
        <!-- </form> -->
	</div>
	<div class="search-history" v-show="showSearchHistory">
	    <ul>
	        <li>
	            <span href="" class="item-record-name active">历史搜索</span>
	        </li>
	        <div id="search-list">
		        <li v-for="item of list">
		            <a v-link="{name: 'search', params: {'search': this.item, 'cityId': 42}}" class="item-record-name">{{item}}</a>
		        </li>
	    	</div>
	        <li>
	            <a href="javascript:;" @click="clearSearchHistory" class="clear-history">清空历史搜索</a>
	        </li>
	    </ul>
	</div>
</div>
</template>

<script>
export default{
	props: ['showSerchBlock', 'search'],
	data(){
		return {
			list: [],
			searchWord: '',
			showSearchHistory: false
			// showSerchBlock: true
		}
	},
	ready(){
		//	this.addSearchHistory('123')
		//	因为searchHistory.vue是由两部分组成的 在search页面 searchbar是一直存在
		var path = this.$route.name
		if (path === 'index'){
			this.initSearchHistory()
		} else {
			this.initSearchHistory()
			this.showSearchHistory = false
		}
	},
	attached(){
		var path = this.$route.name
		this.searchWord = this.$route.params.search
		if (path === 'index'){
			this.showSerchBlock = false
		} else if (path === 'search'){
			this.showSerchBlock = true
			this.showSearchHistory = false
		}

	},
	methods: {
		closeSearch: function(){
			// this.showSerchBlock = false
			// this.$dispatch('toggleMask')//	关闭遮罩
			var path = this.$route.name
			if (path === 'index'){
				this.showSerchBlock = false
				this.$dispatch('toggleMask')//	关闭遮罩
			} else {
				this.$route.router.go({name: 'index'})//	跳转
			}
		},
		tabSearch: function(){
			this.showSerchBlock = true
			this.$dispatch('toggleMask')//	打开遮罩
			this.initSearchHistory()
		},
		initSearchHistory: function(){
			if (window.localStorage){
				// console.log('This browser supports localStorage')
			} else {
				console.log('This browser does NOT support localStorage')
			}

			var storage = window.localStorage
			if (storage.getItem('search-history')){
				var data = storage.getItem('search-history').split(',')
				if (data[0] === 'null'){
					this.showSearchHistory = false
					this.list = []
				} else {
					this.list = data
					this.showSearchHistory = true
				}
			} else {
				this.showSearchHistory = false
			}
		},
		addSearchHistory: function(key){
			/**
				key => 'null' 清空,
				key => 正常值 追加,
			**/
			var storage = window.localStorage
			if (key === 'null'){
				storage.setItem('search-history', 'null')
			} else {
				var data
				if (!storage.getItem('search-history')){
					data = []
				} else {
					data = storage.getItem('search-history').split(',')
					if (data[0] === 'null'){
						data = []
					} else if (data.indexOf(key) !== -1){
						return false
					}
				}
				data.push(key)
				storage.setItem('search-history', data)
			}
		},
		clearSearchHistory: function(){
			this.addSearchHistory('null')
			this.initSearchHistory()
		},
		onEnter: function(){
			console.log(this.searchWord)
			this.addSearchHistory(this.searchWord)
			this.initSearchHistory()
			this.$route.router.go({name: 'search', params: {'search': this.searchWord, 'cityId': 42}})
		},
		onfocus: function(){
			if (this.list.length > 0){
				this.showSearchHistory = true
				this.$dispatch('toggleMask')//	打开遮罩
			}
			console.log(111111111)
		}
	},
	events: {
		'tabSearch': function(){
			this.tabSearch()
		}
	}
}

</script>
