<template>
<nav class="navbar navbar-fixed-top navbar-inverse">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" v-link="'index'">Rotate design</a>
    </div>
    <div id="navbar" class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li v-bind:class="{'active':path=='/index'}"><a v-link="'index'">Rotate-page</a></li>
        <li v-bind:class="{'active':path=='/home'}"onmousedown=""><a v-link="'home'">Home-page</a></li>
        <li v-bind:class="{'active':path=='/center'}"><a v-link="'center'">Center-page</a></li>
      </ul>
    </div><!-- /.nav-collapse -->
  </div><!-- /.container -->
</nav>
</template>
<script>
  export default{


    data(){
      return {
        path:this.$route.path
      }
      console.log(this.$route.path);
    }
    
  }


</script>



