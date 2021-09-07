import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/index';
import List from '@/pages/List';
import Details from '@/pages/Details';
import Search from '@/pages/Search';
import City from '@/pages/City';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Details
    },
    {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
});
