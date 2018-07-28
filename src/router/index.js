import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Log from '@/components/log/log.vue'
import Meeting from '@/components/meeting/meeting.vue'
import AboutUs from '@/components/AboutUs/AboutUs.vue'
import Login from '@/components/Login/login.vue'
import Register from '@/components/Register/register.vue'
Vue.use(Router);

export default new Router({
  routes: [
    {path: '/',component: Index},
    {path:'/log',component:Log},
    {path:'/meet',component:Meeting},
    {path:'/AboutUs',component:AboutUs},
    {path:'/login',component:Login},
    {path:'/register',component:Register}
  ]
})
