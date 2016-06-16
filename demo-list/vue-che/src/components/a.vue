
<style>
  .img-block{
    background-image:url('../assets/images/noavatar_middle.gif');
  }

</style>

<link href='../assets/css/abc.css' rel='stylesheet' type='text/css'>
<template>
  <div class="container">
    <a v-link="'b'" class="btn">A => B</a> 
    <h2 class="red" @click="getData">{{msg}}</h2>
    <cat :title="title"></cat>
    <div class="img-block"></div>
    
    <!-- <img src="../assets/img/noavatar_middle.gif"> -->

    <!-- <input type="text"> -->
    <li v-for="item in list " track-by="$index">
      {{item}}
    </li>

  </div>

</template>

<script>
require('../assets/css/abc.css')
require('../assets/js/abc.js')
// import '../assets/css/abc.css'
import cat from './c.vue'

export default {
  name: 'a',
  data (){
    // console.log($(document))
    return {
      msg: 'Hello from Component A!',
      list: [],
      title: 'i am a to c 2222 '
    }
  },
  components: {
    cat
  },
  methods: {
    getData(){
        // var len = this.list.length;
        // for(var i=len;i<10+len;i++){
        //   this.list.push(i);
        // }

        var len = this.list.length
        var n = 0

        if (len !== 0){
          n = this.list[len - 1]
        }

        var data = []

        for (var i = 0; i < 10; i++){
          this.list.$set(i, n++)    //  [i]=n++;
          data[i] = n++
        }

        // var tmp = this.list;
        // tmp.concat(data);
        // this.list=tmp;
        this.list = this.list.concat(data)
        this.$http.get('/app/che.html?city_id=42&lat=23.127995&lon=113.372071&start=0', function(data){
            // console.log(data,111);
        }).error(function(data, status, request) {
            console.log('fail' + status + ',' + request)
        })

        // console.log(this.list);
      // this.list = [1,2,3,4,5,6,7,8,9,10,1,1,1,1,1,1,1,1,11,1,1,1,11,1,1,1,1,1,1,1,1];
    }
  },
  route: {
    // canReuse:false,
    data(){
    },
    canReuse: function(transition){
      console.log('hook-example canReuse!')
      // console.log(transition,'545454');
      return false
    },
    canActivate: function(transition){
      console.log('hook-example canActivate!')
      transition.next()
    },
    activate: function (transition) {
      console.log('hook-example activated!')
      transition.next()
    },
    deactivate: function (transition) {
      console.log('hook-example deactivated!')
      transition.next()
    },
    canDeactivate: function(transition){
      transition.next()
    }
  }

}
</script>