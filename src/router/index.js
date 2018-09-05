import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home'
import Detail from '@/pages/detail'
import Statistics from '@/pages/details/statistics'
import Forecast from '@/pages/details/forecast'
import Analysis from '@/pages/details/analysis'
import Advertise from '@/pages/details/advertise'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path:'/detail',
    	name: 'Detail',
    	component: Detail,
    	redirect: '/detail/statistics',
    	children: [
    		{
    			path: 'statistics',
    			name: 'Statistics',
    			component: Statistics
    		},
    		{
    			path: 'forecast',
    			name: 'Forecast',
    			component: Forecast
    		},
    		{
    			path: 'analysis',
    			name: 'Analysis',
    			component: Analysis
    		},
    		{
    			path: 'advertise',
    			name: 'Advertise',
    			component: Advertise
    		}
    	]
    }
  ]
})
