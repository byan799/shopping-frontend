import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home'
import Detail from '@/pages/detail'
import Statistics from '@/pages/details/statistics'
import Forecast from '@/pages/details/forecast'
import Analysis from '@/pages/details/analysis'
import Advertise from '@/pages/details/advertise'
import store from '../store/index'
import $ from 'jquery'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
    	path:'/detail',
    	name: 'detail',
    	component: Detail,
    	redirect: '/detail/statistics',
    	children: [
    		{
    			path: 'statistics',
    			name: 'statistics',
    			component: Statistics
    		},
    		{
    			path: 'forecast',
    			name: 'forecast',
    			component: Forecast
    		},
    		{
    			path: 'analysis',
    			name: 'analysis',
    			component: Analysis
    		},
    		{
    			path: 'advertise',
    			name: 'advertise',
    			component: Advertise
    		}
    	]
    }
  ]
})

router.beforeEach((to, from, next) => {
    const nextRoutes = ['detail', 'statistics', 'forecast', 'analysis', 'advertise']
    if (nextRoutes.indexOf(to.name) > -1) {
        if (!sessionStorage.getItem('userName')) {
            next(false)
            $('.app-header .header-nav .nav-list>li:first').trigger('click')
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router
