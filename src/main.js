// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
// import store from './store'
import '@/assets/css/iconfont.css'
import '@/assets/css/base.css'

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
      { name: '鼠标', price: 20, img: 'http://www.dodomun.cn/img/base_img/mouse.jpg', code: '1212312' },
      { name: '键盘', price: 40, img: 'http://www.dodomun.cn/img/base_img/keyboard.jpg', code: '25141' },
      { name: '耳机', price: 60, img: 'http://www.dodomun.cn/img/base_img/earphone.jpg', code: '5451894' },
      { name: '显示屏', price: 80, img: 'http://www.dodomun.cn/img/base_img/screen.jpg', code: '8748484' }
    ],
    shopcar: [],
    cleanshopup: []
  },
  mutations: {
    addtocar (state, i) {
      state.shopcar.push(state.newproducts[i])
      // console.log(state.shopcar)
      return state.shopcar
    },
    cleanshopup (state) {
      // console.log(state.shopcar)
      var shopcar = state.shopcar
      var cleanshopup = state.cleanshopup
      // 先将 this.shopcar 去重
      for (var j = 0; j < shopcar.length; j++) {
        if (cleanshopup.indexOf(shopcar[j]) === -1) {
          cleanshopup.push(shopcar[j])
        }
      }
      // 判断 每个元素 及 每个元素的个数 这里是通过 shopcar.code判断
      var productsKey = []
      // 将shopcar.code提取
      for (var i = 0; i < shopcar.length; i++) {
        productsKey.push(shopcar[i].code)
      }
      //
      var obj = []
      productsKey.forEach((v, k) => {
        // console.log(v) // v 是productsKey中的值：01，02
        // console.log(k) // k 是productsKey中的值的下标;
        if (obj[v]) {
          obj[v]++
        } else {
          obj[v] = 1
        }
      })
      // 提取key 及 次数
      for (var key in obj) {
        // console.log(key)
        // console.log(obj[key])
        // 将key和次数匹配到去重后的cleanshopup数据中
        for (var k = 0; k < cleanshopup.length; k++) {
          if (cleanshopup[k].code === key) {
            cleanshopup[k].num = obj[key]
          }
        }
      }
      return cleanshopup
    }
  }
}
// themeColor主题颜色更换功能
var themeColor = {
  state: {
    colorlist: [
      {
        name: '经典蓝',
        color: '#4191EA',
        on: true
      },
      {
        name: '魅力红',
        color: '#FE6363',
        on: false
      },
      {
        name: '活力蓝',
        color: '#6C9BCE',
        on: false
      },
      {
        name: '孔雀绿',
        color: '#00BEC8',
        on: false
      }
    ],
    truecolor: '#4191EA'
  },
  mutations: {
    changecolor (state, i) {
      // console.log(i)
      var colorlist = state.colorlist
      for (var j = 0; j < colorlist.length; j++) {
        colorlist[j].on = false
        if (j === i) {
          colorlist[j].on = true
          state.truecolor = colorlist[j].color
        }
        // console.log(colorlist[j].on)
      }
      return colorlist
    }
  }
}
// 城市选择
// 先获取本地缓存的城市
var defaultCity = '西安'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

var chooseCity = {
  state: {
    city: defaultCity
  },
  mutations: {
    changeCity (state, city) {
      // console.log(state)
      // console.log(city)
      state.city = city
      try {
        localStorage.city = city
      } catch (e) {}
    }
  }
}
/* eslint-disable no-new */
var store = new Vuex.Store({
  modules: {
    moduleA,
    modulecar,
    themeColor,
    chooseCity
  }
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
