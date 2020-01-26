import VueRouter from 'vue-router'
//解决再次点击，重复路由报错问题
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error=> error)
};


import Vue from 'vue'

Vue.use(VueRouter);


import realtime from '../components/real-time'
import overall from '../components/overall'
import newUser from '../components/newUser'
import activeUser from '../components/activeUser'



const  routes=[

    {
        path:'/realtime',
        component:realtime
    },
    {
        path:'/overall',
        component:overall
    },
    {
        path:'/newUser',
        component:newUser
    },
    {
        path:'/activeUser',
        component:activeUser
    }


];

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router