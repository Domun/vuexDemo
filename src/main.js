// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import '@/assets/css/iconfont.css'

Vue.use(Vuex)
Vue.config.productionTip = false

// moduleA vueX可以将store分割成多个moudle（模块），每个模块都有自己的state，getters，mutations，甚至是子嵌套模块
var moduleA = {
  // state 设置数据变量
  state: {
    products: [
      { name: '鼠标', price: 20 },
      { name: '键盘', price: 40 },
      { name: '耳机', price: 60 },
      { name: '显示屏', price: 80 }
    ]
  },
  // getters属性可以理解为所有组件的 computed属性。
  getters: {
    changeprice: (state) => {
      // console.log(state)
      var newprice = state.products.map(product => {
        // console.log(product)
        return {
          name: product.name,
          price: product.price - 1
        }
      })
      return newprice
    }
    // 在其他组件里 获取值的时候 this.$store.getters.changeprice
  },
  // mutations 属性可以理解为所有组件的 methods属性.
  // mutations对象中保存着更改数据的回调函数,该函数名官方规定叫type, 第一个参数是state, 第二参数是payload, 也就是自定义的参数.。
  // 调用 mutations 中事件用commit提交的方式 this.$store.commit('minusprice', 2)
  mutations: {
    minusprice (state, payload) {
      var newprice = state.products.forEach(product => {
        // console.log(product)
        product.price -= payload
      })
      return newprice
    }
  },
  // actions 类似于 mutations，不同在于：
  // actions提交的是mutations而不是直接变更状态
  // actions中可以包含异步操作, mutations中绝对不允许出现异步
  // actions中的回调函数的第一个参数是context, 是一个与store实例具有相同属性和方法的对象
  actions: { // 添加actions
    minusPriceAsync (context, payload) {
      setTimeout(() => {
        context.commit('minusprice', payload) // context提交
      }, 2000)
    }
  }
}
// modulecar 购物车添加功能
var modulecar = {
  // state 设置数据变量 http://www.dodomun.cn/img/base_img/update.jpg
  state: {
    newproducts: [
      { name: '鼠标', price: 20, img: 'http://www.dodomun.cn/img/base_img/mouse.jpg' },
      { name: '键盘', price: 40, img: 'http://www.dodomun.cn/img/base_img/keyboard.jpg' },
      { name: '耳机', price: 60, img: 'http://www.dodomun.cn/img/base_img/earphone.jpg' },
      { name: '显示屏', price: 80, img: 'http://www.dodomun.cn/img/base_img/screen.jpg' }
    ],
    shopcar: [
    ]
  },
  mutations: {
    addtocar (state, i) {
      // console.log(state)
      // console.log(i)
      state.shopcar.push(state.newproducts[i])
      // console.log(state.shopcar)
      return state.shopcar
    }
  }
}
/* eslint-disable no-new */
var store = new Vuex.Store({
  modules: {
    moduleA,
    modulecar
  }
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
