// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App'
import router from './router'
import VueFuse from 'vue-fuse'
//import Scrollspy from 'vue2-scrollspy';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "vue-material-design-icons/styles.css"

import scrollSpy, { Easing } from 'vue2-scrollspy';
 
Vue.use(scrollSpy, {
  easing: Easing.Cubic.InOut
});

Vue.use(BootstrapVue)
Vue.use(VueFuse)
//Vue.use(Scrollspy);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
