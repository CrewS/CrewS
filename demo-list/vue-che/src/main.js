'use strict'


var Vue = require('vue')
var VueRouter = require('vue-router')
var VueResource = require('vue-resource')
var routerMap = require('./routes/routers')
var mui = require('./vendors/css/mui.css')

Vue.use(VueRouter)
Vue.use(VueResource)

var router = new VueRouter({
    hashbang: true,
    history: false,
    saveScrollPosition: false,
    transitionOnLoad: true
})

var app = Vue.extend({})

routerMap(router)
router.start(app, '#app')
