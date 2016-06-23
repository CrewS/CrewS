<style lang="less" scoped>
.my-order-content{
	padding-top: 1.030596rem;
	// padding-bottom: 1.352657rem;
	.no-order{
		width: 1.505636rem;
		// height: 1.698873rem;
		padding-top: 1.698873rem;
		margin: 0 auto;
		margin-top: 3.381643rem;
		background: url('../assets/images/icon/icon_user_order_wu@3x.png') no-repeat;
	  	background-size: 100%;
	  	color: #aaa;
	  	text-align: center;
	}
}
.order-list{
	padding: 0 0.603865rem;
	// display: none;
	li{
		border-bottom: 1px solid rgb(227, 227, 227);
		.order-header{
			height: 1.304348rem;
			line-height: 1.304348rem;
			padding-left: 0.628019rem;
			position: relative;
			a{
				color: rgb(71, 71, 71);
			}
			a:hover{
				text-decoration: none;
			}
			.order-item-icon{
				display: block;
				position: absolute;

				width: 0.386473rem;
				height: 0.434783rem;
				top: 50%;
				left: 0;
				margin-top: -0.217391rem;
				background: url('../assets/images/icon/icon_user_order@3x.png') no-repeat;
	  			background-size: 100%;
			}
			.goto-icon{
				display: inline-block;
				width: 0.193237rem;
				height: 0.338164rem;
				background: url('../assets/images/icon/RTHome_details_right_arrow.imageset.png') no-repeat;
	  			background-size: 100%;
			}
			.order-state{
				float: right;
				color: #de0010;
			}
			.order-state-gray{
				color: rgb(71, 71, 71);
			}
		}
		.order-item-content{
			padding: 0 0.338164rem;
			padding-top: 0.338164rem;
			border-radius: 0.040258rem;
			background: rgb(244, 244, 244);
			.shop-contact{
				height: 1.352657rem;
				line-height: 1.352657rem;
				.phone-call{
					height: 0.426731rem;
					width: 0.426731rem;
					display: block;
					float: right;
					background: url('../assets/images/icon/icon_order_Contact@3x.png') no-repeat;
	  				background-size: 100%;
	  				margin-top: 0.450886rem;
				}
			}

		}
		.order-op{
			height: 1.352657rem;
			padding-top: 0.289855rem;
			text-align: right;
			.op-icon{
				display: inline-block;
				line-height: 0.772947rem;
				height: 0.772947rem;
				padding: 0 0.402576rem;
				border-radius: 0.724638rem;
				margin-left: 0.338164rem;
				
			}
			.op-icon:hover{
				text-decoration: none;
			}
			.op-red{
				border:1px solid #de0010;
				color: #de0010;
			}
			.op-gray{
				border:1px solid rgb(71, 71, 71);
				color: rgb(71, 71, 71);
			}
		}
	}
}
.item-info{
	height: 2.334944rem;
	border-bottom: 1px solid rgb(227, 227, 227);
	padding-bottom: 0.338164rem;
	position: relative;
	.item-img{
		width: 1.996779rem;
		height: 1.996779rem;
		float: left;
		border:1px solid rgb(227, 227, 227);
		img{
			width: 100%;
			height: 100%;
		}
	}
	.item-text{
		width: 5.837359rem;
		float: right;
		margin-top: 0.193237rem;
		color: rgb(71, 71, 71);
		.count{
			float:right;
		}
		.prize{
			position: absolute;
			bottom: 0.483092rem;
			right: 0;
		}
	}
}
</style>

<template>
<iheader :title="'全部订单'"></iheader>
<div class="my-order-content">
	<ul id="post-content" class="order-list" v-if="list.length != 0">
		<li v-for="value of list">
            <div class="order-header">
                <i class="order-item-icon"> </i>
                <a href="{:U('/wap/che/detail')}?id={{value.order_id}}">
                    <span class="shop-name normal-fs">
                    	{{value.station_name}}
                        <!-- {{if value.station_name.length > 10}}
                            {{value.station_name.slice(0,10)+"..."}}
                        {{else}}
                            {{value.station_name}}
                        {{/if}} -->
                    </span>
                    <i class="goto-icon"></i>
                </a>
               
                <span class="order-state normal-fs">
					<font v-if="value.status == 1" style="color:#de0010">待支付</font>

					<font v-if="value.status == 2" style="color:#de0010">订单失效</font>

					<font v-if="value.status == 3" style="color:#de0010">待取车</font>

					<font v-if="value.status == 4" style="color:#de0010">租用中</font>

					<font v-if="value.status == 5" style="color:#de0010">已超时</font>

					<font v-if="value.status == 6 && value.is_rating == 0" style="color:#de0010">待评价</font>
					<font v-if="value.status == 6 && value.is_rating != 0" style="color:#de0010">已完成</font>

					<font v-if="value.status == 7" style="color:#de0010">退款中</font>
					<font v-if="value.status == 8" style="color:#de0010">交易关闭</font>

                </span>
            </div>
            <div class="order-item-content">
                <a href="{:U('/wap/che/detail')}?id={{value.order_id}}">
                    <div class="item-info">
                        <div class="item-img">
                            <img :src="value.order_detail[0].photo">
                        </div>
                        <div class="item-text">
                            <h1 class="item-name">{{value.order_detail[0].name}} <span class="count normal-fs">x {{value.order_detail[0].quantity}}</span></h1>
                            <span class="prize normal-fs red-text">￥{{value.order_detail[0].price}}</span>
                        </div>
                    </div>
                </a>
                <div class="shop-contact normal-fs">
                    店铺电话 : {{value.keeper_mobile }}
                    <a href="tel:{{value.keeper_mobile }}" class="phone-call"></a>
                </div>
            </div>
            <div class="order-op">
				<a v-if="value.status == 1" href="{:U('/wap/che/detail')}?id={{value.order_id}}" class="op-icon op-red normal-fs">付款</a>
                <a v-if="value.status == 1" href="javascript:order_close({{value.order_id}},{{value.station_id}});" class="op-icon op-red normal-fs">取消订单</a>

				<a v-if="value.status == 2" href="javascript:complain({{value.order_id}});" class="op-icon op-gray normal-fs">投诉</a>
                
				<a v-if="value.status == 3" href="javascript:order_cancel({{value.order_id}},{{value.station_id}});" class="op-icon op-red normal-fs">取消订单</a>
                <a v-if="value.status == 3" href="baoxian.html" class="op-icon op-gray normal-fs">投保</a>
                <a v-if="value.status == 3" href="javascript:complain({{value.order_id}});" class="op-icon op-gray normal-fs">投诉</a>

				<a v-if="value.status == 4" href="javascript:complain({{value.order_id}});" class="op-icon op-gray normal-fs">投诉</a>

				<a v-if="value.status == 5" href="javascript:complain({{value.order_id}});" class="op-icon op-gray normal-fs">投诉</a>

				<a v-if="value.status == 6 && value.is_rating ==0" href="javascript:comment({{value.order_sn}},{{value.station_id}});" class="op-icon op-gray normal-fs">评价</a>
				<a v-if="value.status == 6" href="javascript:complain({{value.order_id}});" class="op-icon op-gray normal-fs">投诉</a>
                
                <a v-if="value.status == 7" href="javascript:complain({{value.order_id}});" class="op-icon op-gray normal-fs">投诉</a>
            </div>
        </li>
        <itab :show.sync="show"></itab>
	</ul>
	<ul id="post-content" class="order-list" v-else>
		<div class="no-order sm-fs">
            暂无订单
        </div>
	</ul>
</div>
</template>

<script>
import iheader from '../components/header-normal.vue'
import itab from '../components/tab-more.vue'
export default{
	components: {
		iheader, itab
	},
	data(){
		return {
			list: [],
			page: 0,
			show: true
		}
	},
	ready(){
		this.getData()
	},
	methods: {
		getData: function (){
			var params = {'at': 'e7dc39592d7f36ec156eae7306dc7a8d', 'page': this.page}
			this.$http.get('/app/che/orderlist', null, {'params': params}).then((response) => {
				var data = response.data.data
				this.list = this.list.concat(data.list)
				this.page += 1
				this.show = true
				if (this.page > data.pages){
					this.show = false
					this.$broadcast('closeTab')
				}
			}, (response) => {
			})
		}
	},
	events: {
		'tabMore': function (){
			// this.show = false
			this.getData()
		}
	}
}

</script>
