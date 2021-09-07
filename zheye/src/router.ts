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
      component: CreatePost
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.name != 'login' && !store.state.user.isLogin){
    next({name: 'login'})
  }else{
    next();
  }
})

export default router