import router from './router'
import store from './store'

// 白名单
const whiteList = ['/login']

// 路由前置守卫
router.beforeEach((to, from, next) => {
  // 存在token 进入主页
  const token = store.getters.token
  if (token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      next()
    }
  } else {
    // 没有token进入白名单
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
