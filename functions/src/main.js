/*!

=========================================================
* BootstrapVue Argon Dashboard - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/bootstrap-vue-argon-dashboard
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from 'vue';
import store from "./store";

import DashboardPlugin from './plugins/dashboard-plugin';
import App from './App.vue';
import Notifications from 'vue-notification'
Vue.use(Notifications)
// router setup
import router from './routes/router';
// plugin setup
Vue.use(DashboardPlugin);

import {auth} from './firebase'


/* eslint-disable no-new */
let app
auth.onAuthStateChanged(function(user) {
  if (!app){
  new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App),
  
  })
  }
  });