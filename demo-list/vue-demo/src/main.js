'use strict'


// import aaa from 'vue-router'

var Vue = require('vue');
var App = require('./app.vue');
var Router = require('vue-router');
var CompA =require('./comp/a.vue');
var CompB =require('./comp/b.vue');
var Index = require('./views/index.vue')
var Home = require('./views/home.vue')
var Center = require('./views/center.vue')
Vue.use(Router);

// new Vue({
// 	el:'body',
// 	components:{
// 		app:App
// 	}
// })

var router = new Router({
    hashbang: true,
     history: false,
     saveScrollPosition: true,
     transitionOnLoad: true
})



router.map({
	'/index':{
		name:'index',
		component:Index
	},
	'/home':{
		name:'home',
		component:Home
	},
	'center':{
		name:'center',
		component:Center
	}
})
router.start(App, '#app')
