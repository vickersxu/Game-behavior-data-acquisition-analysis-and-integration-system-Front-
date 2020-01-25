import VueRouter from 'vue-router'
//解决再次点击，重复路由报错问题
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error=> error)
};


import Vue from 'vue'

Vue.use(VueRouter);

import realtime from '../components/real-time'

const  routes=[
    // {
    //     path:'',
    //     redirect:null
    //
    // },

    {
        path:'/realtime',
        component:realtime
    },
    // {
    //
    // }

];

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router