import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import one from '@/components/one'
import two from '@/components/two'
import shopcar from '@/components/shopcar'
import products from '@/components/products'

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
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: shopcar
    },
    {
      path: '/products',
      name: 'products',
      component: products
    }
  ]
})
