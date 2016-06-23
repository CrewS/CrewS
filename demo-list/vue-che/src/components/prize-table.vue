<style lang="less" scoped>
.prize-table{
	table{
		width: 100%;
		border-bottom: 1px solid rgb(234, 234, 234);
		td{
			height: 1.111111rem;
			text-align: center;
			border: 1px solid rgb(234, 234, 234);
			border-bottom: none;
			background: #f3f3f3;
		}
	}
}
</style>

<template>
<div class="prize-table">
    <table>
        <tbody v-if="priceStr.length > 0">
	        <tr class="normal-fs">
	            <td v-for="item of priceStr" :class="{'sm-fs': $index==priceStr.length-1}">{{item.title}}</td>
	        </tr>
	        <tr class="normal-fs">
	        	<td v-for="item of priceStr"><span class="sm-fs">￥</span>{{item.price}}</td>
	        </tr>
    	</tbody>
    	<tbody v-else>
	        <tr class="normal-fs">
	            <td>1小时</td>
	            <td>2小时</td>
	            <td>3小时</td>
	            <td>4小时</td>
	            <td>5小时</td>
	            <td class="sm-fs">5-24小时</td>
	        </tr>
	        <tr class="normal-fs">
	            <td><span class="sm-fs">￥</span>10</td>
	            <td><span class="sm-fs">￥</span>15</td>
	            <td><span class="sm-fs">￥</span>20</td>
	            <td><span class="sm-fs">￥</span>25</td>
	            <td><span class="sm-fs">￥</span>30</td>
	            <td><span class="sm-fs">￥</span>35</td>
	        </tr>
    	</tbody>
    </table> 
</div>
</template>

<script>
export default{
	props: ['priceStr'],
	data(){
		return {
		}
	}
}

</script>
