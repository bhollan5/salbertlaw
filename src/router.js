import Vue from 'vue'
import Router from 'vue-router'
import HeaderFrame from './views/HeaderFrame.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: HeaderFrame,
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import(/* webpackChunkName: "home" */ './views/Content/Home.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
