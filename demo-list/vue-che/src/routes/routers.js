'use strict'
module.exports = function(router){
    router.map({
            '/index': {
                name: 'index',
                component: function(resolve){
                    require(['../views/index.vue'], resolve)
                }
            },
            '/search/:search/cityId/:cityId': {
                name: 'search',
                component: function(resolve){
                    require(['../views/search.vue'], resolve)
                }
            },
            '/view/:id': {
                name: 'view',
                component: function(resolve){
                    require(['../views/view.vue'], resolve)
                }
            },
            '/comments/:id': {
                name: 'comments',
                component: function(resolve){
                    require(['../views/comment.vue'], resolve)
                }
            },
            '/login': {
                name: 'login',
                component: function(resolve){
                    require(['../views/login.vue'], resolve)
                }
            },
            '/my': {
                name: 'my',
                component: function(resolve){
                    require(['../views/my.vue'], resolve)
                }
            },
            '/complain/:id': {
                name: 'complain',
                component: function(resolve){
                    require(['../views/complain.vue'], resolve)
                }
            },
            '/map': {
                name: 'map',
                component: function(resolve){
                    require(['../views/map.vue'], resolve)
                }
            },
            '/mapLocate/:id': {
                name: 'mapLocate',
                component: function(resolve){
                    require(['../views/mapLocate.vue'], resolve)
                }
            }
        })
}
