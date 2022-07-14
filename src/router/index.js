import {
  createRouter,
  // 去掉#号 history 模式
  createWebHistory,
  // hash 模式
  createWebHashHistory
} from "vue-router"
import Home from "@/views/home/index.vue"
const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue')
  },
  {
    path: '/newsList',
    name: 'newsList',
    component: () => import('@/views/biz/news/index.vue')
  },
  {
    path: '/newsDetails',
    name: 'newsDetails',
    component: () => import('@/views/biz/news/details.vue')
  },
  {
    path: '/siteList',
    name: 'siteList',
    component: () => import('@/views/biz/site/index.vue')
  },
  {
    path: '/siteDetails',
    name: 'siteDetails',
    component: () => import('@/views/biz/site/details.vue')
  },
  {
    path: '/writeBlog',
    name: 'writeBlog',
    component: () => import('@/views/biz/blog/index.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
