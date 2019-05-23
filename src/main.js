// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/*引入Vuex的store*/
import store from './store/index'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',

  // 在这里面加上store
  store,
  /*--------------------*/
  router,
  components: { App },
  template: '<App/>'
})
