<template>
    <router-view
      v-ref:list
        keep-alive>
    </router-view>
</template>

<script>
// import CompA from './comp/a.vue'
// import CompB from './comp/b.vue'
// import Counter from './comp/counter.vue'
// export default {
//   data () {
//     return {
//       msg: 'Hello from vue-loader!'
//     }
//   },
//   components: {
//     CompA,
//     CompB,
//     Counter
//   }
// }
</script>

<style lang="stylus">
font-stack = Helvetica, sans-serif
primary-color = #999
body{
  font 100% font-stack
  color primary-color
}
  
.logo{
  width 40px
  height 40px
}
  
</style>