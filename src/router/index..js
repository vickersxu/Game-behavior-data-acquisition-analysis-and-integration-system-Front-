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
import costClick from "../components/costClick";
import incomeClick from "../components/incomeClick";
import profitClick from "../components/profitClick";
import guanqia from "../components/guanqia";
import qidong from "../components/qidong";
import shijian from "../components/shijian";
import hive from "../components/hive";
import jieshao from "../components/jieshao";
import a from "../components/a";
import b from "../components/b";
import c from "../components/c";
// import login from "../components/login";

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
    },
    {
        path:'/incomeClick',
        component:incomeClick
    },
    {
        path:'/costClick',
        component:costClick
    },

    {
        path:'/profitClick',
        component:profitClick
    },

    {
        path:'/guanqia',
        component:guanqia
    },

    {
        path:'/qidong',
        component:qidong
    },

    {
        path:'/shijian',
        component:shijian
    },

    {
        path:'/hive',
        component:hive
    },

    {
        path:'/jieshao',
        component:jieshao
    },

    {
        path:'/a',
        component:a
    },

    {
        path:'/b',
        component:b
    },

    {
        path:'/c',
        component:c
    },

    // {
    //     path:'/login',
    //     component:login
    // },



];

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router