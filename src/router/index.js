import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '../components/HelloWorld'
import LoginComp from '@/components/LoginComp'
import RegisterComp from '@/components/RegisterComp'

Vue.use(Router)

var router = new Router({
  // router-link-active
  linkActiveClass: 'my-active',
  // router-link-exact-active
  linkExactActiveClass: 'my-exact-active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'LoginComp',
      component: LoginComp,
      meta: { title: '登录' }
    },
    {
      path: '/register',
      name: 'RegisterComp',
      component: RegisterComp,
      meta: { title: '注册' }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 路由发生改变修改页面title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
