// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store  from './store';
import 'js/common.js';
import 'styles/resets.css';
import 'styles/common.scss';
import 'styles/iconfont.css';
import 'js/fastclick.js';
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
