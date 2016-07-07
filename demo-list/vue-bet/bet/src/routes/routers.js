'use strict'
// import Store from '../store/store'
module.exports = function(router){
    router.map({
            '/index':{
                name:'index',
                component: function(resolve){
                    // console.log(Store.state.user)
                    require(['../views/index.vue'],resolve);
                }
            },
            '/home':{
                name:'home',
                component: function(resolve){
                    // console.log(Store.state.user)
                    require(['../views/home.vue'],resolve);
                }
            },
            '/history':{
                name:'history',
                component: function(resolve){
                    require(['../views/history.vue'],resolve);
                }
            },
            '/beting':{
                name:'beting',
                component: function(resolve){
                    require(['../views/beting.vue'],resolve);
                }
            },
            '/login':{
                name:'login',
                component: function(resolve){
                    require(['../views/login.vue'],resolve);
                }
            },
            '/handicap/:stage_id/:player_id':{
                name:'handicap',
                component: function(resolve){
                    require(['../views/handicap.vue'],resolve);
                }
            },
            '/manipulation':{
                name:'manipulation',
                component: function(resolve){
                    require(['../views/manipulation.vue'],resolve);
                }
            },
            '/test':{
                name:'test',
                component: function(resolve){
                    require(['../views/test.vue'],resolve);
                }
            }
    })
    // router.beforeEach(({to, next}) => {manipulation
    //     switch (to.auth) {
    //         case 'user':
    //             Store.state.user ||
    //                 to.router.go({name: 'login'})
    //             break
    //     }
    //     next()
    // })
}
