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
	z-index: 9999;
	.locateTitle{
		color: #fff;
		font-size: 16px;
		line-height: 1.09rem;
		float: left;
		margin-left: 0.8rem;
	}
}
#page-name {
  font-size: 18px;
  color: #fff;
  text-decoration: none;
}
.return-icon {
  display: block;
  position: absolute;
  top: 0.281804rem;
  height: 0.434783rem;
  width: 0.434783rem;
  background: url('../assets/images/icon/RTHome_back@3x.png');
  background-size: 100%;
}
.location {
  height: 1.030596rem;
  line-height: 1.030596rem;
  display: inline-block;
}
.location:hover {
  text-decoration: none;
}
</style>

<template>
<header class="bar-nav">
    <a href="javascript:history.go(-1);" class="ui-icon return-icon"></a>
    <a id="post-number" href="javascript:;" class="location"><span id="page-name">{{title}}</span></a>
</header>
</template>

<script>
export default{
	props: ['title'],
	data(){
		return {
			//	还回下一步还未写
		}
	}
}

</script>
