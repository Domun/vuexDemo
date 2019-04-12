import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import one from '@/components/one'
import two from '@/components/two'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/one',
      name: 'one',
      component: one
    },
    {
      path: '/two',
      name: 'two',
      component: two
    }
  ]
})
