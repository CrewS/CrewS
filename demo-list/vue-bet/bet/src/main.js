'use strict'

var Vue = require('vue')
var VueRouter = require('vue-router')
var VueResource = require('vue-resource')
var routerMap = require('./routes/routers')
// var store = require('./store/store')
import { sync } from 'vuex-router-sync'
import store from './store/store'
import 'assets/css/common.css'


Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.emulateJSON = true// vue-resourece post方式的数据格式从 request payload => form data

var router = new VueRouter({
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true
})

var app = Vue.extend({
	store
})
sync(store, router)



var dom  = document.getElementById('access-token')
// console.log(dom.value)
// 获取后台load的accesstoken
window.access_token = dom.value
window.api_domain ='http://bet.biketo.com.cn'


routerMap(router)
router.start(app, '#app')

