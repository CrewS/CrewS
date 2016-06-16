<style lang="less">
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
	<div class="content-wrap content-padding">
		<div class="index-nav">
	        <a v-link="{name: 'index'}" class="menu che-list active">列表</a>
	        <a href="#" class="menu">地图</a>
	        <a href="javascript:show_search();" class="ui-icon search-icon"></a>
    	</div>
		<div class="index-banner mui-slider">
			<div class="mui-slider-group mui-slider-loop">
                <div class="mui-slider-item mui-slider-item-duplicate">   
                    <a href="/wap/che/ad.html?link=http%3A%2F%2Fwww.biketo.com%2Fmobile%2F%23detail%2F22%2F25323">
                        <img src="http://rent.biketo.com.cn/uploads/ad/20160222111420_tm7vp.jpg">
                    </a>    
                </div> 
                <div class="mui-slider-item mui-active">
                    <a href="/wap/che/ad.html?link=http%3A%2F%2Fbx.biketo.com%2Fmobile%2F"><img src="http://rent.biketo.com.cn/uploads/ad/20160223101652_fewgx.jpg" title="美骑保险"></a> 
                </div>
                <div class="mui-slider-item">
                    <a href="/wap/che/ad.html?link=http%3A%2F%2Fwww.biketo.com%2Fmobile%2F%23detail%2F22%2F25102"><img src="http://rent.biketo.com.cn/uploads/ad/20160222111432_u0i0v.jpg" title="广州骑行"></a> 
                </div> 
                <div class="mui-slider-item">
                    <a href="/wap/che/ad.html?link=http%3A%2F%2Fwww.biketo.com%2Fmobile%2F%23detail%2F22%2F25323"><img src="http://rent.biketo.com.cn/uploads/ad/20160222111420_tm7vp.jpg" title="厦门骑行"></a>
                </div>
                <div class="mui-slider-item mui-slider-item-duplicate"> 
                    <a href="/wap/che/ad.html?link=http%3A%2F%2Fbx.biketo.com%2Fmobile%2F"><img src="http://rent.biketo.com.cn/uploads/ad/20160223101652_fewgx.jpg"></a>
                </div>
            </div>
            <div class="mui-slider-indicator">
                <div class="mui-indicator mui-active"></div>
                <div class="mui-indicator"></div>
                <div class="mui-indicator"></div>
            </div>
        </div>
		<station></station>
	</div>
	<imask :mask.sync="mask"></imask>
</template>

<script>
/*global mui:true*/
import '../vendors/css/mui.css'

import iheader from '../components/index-header.vue'
import station from '../components/station-list.vue'
import imask from '../components/mask-bg.vue'

export default{
	name: 'index',
	components: {
		iheader, station, imask
	},
	data(){
		return {
			mask: false
		}
	},
	ready() {
		//	mui插件的自动轮播
		var gallery = mui('.mui-slider')
		gallery.slider({
			interval: 5000//	自动轮播周期，若为0则不自动播放，默认为0；
		})
	}
}

</script>
