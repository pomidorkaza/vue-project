import Vue from 'vue'
import Router from 'vue-router'
import GamesContainer from '../components/GamesContainer';
import Bucket from '../components/Bucket';
Vue.use(Router)

export default new Router({
    mode: 'history',

    routes: [
    { 
    path: '/', 
    component: GamesContainer, 
    },
    { 
        path: '/games/:id',
        props:true, 
        component: Bucket, 
        },
   
  ]
})
