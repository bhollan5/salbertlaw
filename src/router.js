import Vue from 'vue'
import Router from 'vue-router'
import HeaderFrame from './views/HeaderFrame.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/:pageID',
      component: HeaderFrame,
      name: 'frame',
    },  
    {
      path: '/*',
      redirect: '/home'
    },
  ]
})
