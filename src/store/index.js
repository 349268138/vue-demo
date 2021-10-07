import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import { INITCOUNT_MUTATION } from './mutation-types'

Vue.use(Vuex)
Vue.use(VueResource)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    doubleCount (state) {
      return state.count * state.count
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    [INITCOUNT_MUTATION] (state, payload) {
      state.count = payload.initValue
    }
  },
  actions: {
    asyncInitCount (context) {
      return new Promise((resolve, reject) => {
        // 指定时间后再调用函数
        setTimeout(() => {
          // 通过异步请求http获取newCount，并进行覆盖
          Vue.http.get('https://getman.cn/mock/vue/new-count').then(function (response) {
            context.commit(INITCOUNT_MUTATION, { initValue: response.data.newCount })
            resolve('success, response: ' + response)
          }, function (response) {
            reject(new Error('fail'))
          })
        }, 5000)
      })
    },
    increment (context) {
      context.commit('increment')
    }
    // commit多次调用时，可以如下设置，可以少敲些代码
    // increment({ commit }) {
    //   commit('increment')
    // }
  }
})
