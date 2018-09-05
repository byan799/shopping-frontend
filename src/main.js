// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mock from './mock/mock'
import axios from 'axios'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import store from './store/index'
import $ from 'jquery'
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons'
import './assets/libs/jquery.fly.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/layout.scss'

Vue.config.productionTip = false
//Vue.prototype.axios = axios
Object.defineProperty(Vue.prototype, '$axios', { value: axios }) // better, read only
Vue.use(iView)

Vue.component('icon', Icon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
