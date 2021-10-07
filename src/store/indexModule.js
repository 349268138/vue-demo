import Vue from 'vue'
import Vuex from 'vuex'
import countModule from './count/countModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    countModule: countModule
  },
  strict: true
})
