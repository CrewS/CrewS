'use strict'
module.exports = function(router){
    router.map({
            '/a/:id': {
                name: 'a',
                component: function(resolve){
                    require(['../components/a.vue'], resolve)
                }
            },
            '/b': {
                name: 'b',
                component: function(resolve){
                    require(['../components/b.vue'], resolve)
                }
            },
            '/index': {
                name: 'index',
                component: function(resolve){
                    require(['../views/index.vue'], resolve)
                }
            }
        })
}
