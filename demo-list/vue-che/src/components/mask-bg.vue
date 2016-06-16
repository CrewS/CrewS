<style lang="less" scoped>
.mask-bg {
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: .6;
  filter: alpha(opacity=60);
  position: fixed;
  top: 1.030596rem;
  left: 0;
  z-index: 9999;
}
</style>

<template>
	<div class="mask-bg" v-show="mask"></div>
</template>

<script>
export default{
	props: ['mask'],
	data(){
		return {

		}
	}
}

</script>
