import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Recommend from '../../components/recommend';
import Rank from '../../components/rank';
import Singer from '../../components/singer';
import Search from '../../components/search';

let routes = [
    {
        path:'/recommend',
        component:Recommend
    },
    {
        path:'/rank',
        component:Rank
    }
    ,
    {
        path:'/search',
        component:Search
    }
    ,
    {
        path:'/singer',
        component:Singer
    }
];
let router = new VueRouter({
    routes
});
export default router;

