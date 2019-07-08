// 这是vuex数据库的文件
import Vue from 'vue'
import Vuex from 'Vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations
})
