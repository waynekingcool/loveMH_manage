import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@c/login/Login.vue'
import Home from '@c/Home.vue'
import User from '@c/user/Users.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    children: [
      { path: '/users', component: User}
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
