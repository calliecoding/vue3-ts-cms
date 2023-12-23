import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/cache'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/main/main.vue')
  }
]
const router = createRouter({
  routes,
  history: createWebHashHistory()
})

// 路由守卫
router.beforeEach((to) => {
  // 非登录页面
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    // 检查token
    if (!token) {
      return '/login'
    }
  }
})

export default router
