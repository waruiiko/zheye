import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Column from './views/ColumnDetail.vue'
import CreatePost from './views/CreatePost.vue'
import store from './store'

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      meta: { redirectAlreadyLogin: true },
      component: Login
    },
    {
      path: '/column/:id',
      name: 'column',
      component: Column
    },
    {
      path: '/create',
      name: 'create',
      meta: { requiredLogin: true },
      component: CreatePost
    }
  ]
})

router.beforeEach((to, from, next) => {
  // console.log(to.meta)
  if (to.meta.requiredLogin && !store.state.user.isLogin) {
    next({ name: 'login' })
  } else if(to.meta.redirectAlreadyLogin && store.state.user.isLogin) {
    next('/') //判断是否已经登录
  }else {
    next();
  }
})

export default router