// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/mint-ui/css/mint-ui.css'
import Mint from '../static/mint-ui/js/mint-ui.js'
import '../static/mui/css/mui.css'
import mui from '../static/mui/js/mui'
import DrawerLayout from 'vue-drawer-layout'
import MuseUI from '../static/muse-ui/js/muse-ui.js'
import '../static/muse-ui/css/muse-ui.css'
Vue.use(MuseUI);
Vue.use(DrawerLayout);
Vue.use(mui);
Vue.use(Mint);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
