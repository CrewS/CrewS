'use strict'


var Vue = require('vue')
var VueRouter = require('vue-router')
var VueResource = require('vue-resource')
var routerMap = require('./routes/routers')
var store = require('./store/store')


Vue.use(VueRouter)
Vue.use(VueResource)
Vue.http.options.emulateJSON = true// vue-resourece post方式的数据格式从 request payload => form data

var router = new VueRouter({
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true
})

var app = Vue.extend({})

routerMap(router)
router.start(app, '#app')
