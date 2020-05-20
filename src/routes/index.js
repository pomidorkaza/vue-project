import Vue from 'vue'
import Router from 'vue-router'
import GamesContainer from '../components/GamesContainer';
import Order from '../components/Order';
Vue.use(Router);

export default new Router({
    mode: 'history',

    routes: [
    { 
    path: '/', 
    component: GamesContainer, 
    },
    {
      path: '/bucket',
      component:Order
    }
    // { 
    //     path: '/games/:id',
    //     props:true, 
    //     component: Bucket, 
    //     },
   
  ]
})
