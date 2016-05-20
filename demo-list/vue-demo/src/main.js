'use strict'


// import aaa from 'vue-router'

var Vue = require('vue');
var App = require('./app.vue');
var Router = require('vue-router');
var CompA =require('./comp/a.vue')
var CompB =require('./comp/b.vue')

// import CompA from './comp/a.vue'
// import CompB from './comp/b.vue'
// import Counter from './comp/counter.vue'

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
		component:CompA
	},
	'/user':{
		name:'user',
		component:CompB
	}
})
router.start(App, '#app')
