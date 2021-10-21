import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index'
import Detail from '../pages/Detail'
import VueDetail from '../pages/detail/VueDetail'
import ReactDetail from '../pages/detail/ReactDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail,
      redirect: '/detail/vue',
      children: [
        {
          path: 'vue',
          name: 'VueDetail',
          component: VueDetail
        },
        {
          path: 'react',
          name: 'ReactDetail',
          component: ReactDetail
        }
      ]
    }
  ]
})
