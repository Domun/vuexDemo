import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import easy from '@/components/easy'
import one from '@/components/one'
import two from '@/components/two'
import shopcar from '@/components/shopcar'
import products from '@/components/products'
import color from '@/components/changecolor'
import chooseCity from '@/components/chooseCity'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/easy',
      name: 'easy',
      component: easy
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
    },
    {
      path: '/color',
      name: 'color',
      component: color
    },
    {
      path: '/chooseCity',
      name: 'chooseCity',
      component: chooseCity
    }
  ]
})
