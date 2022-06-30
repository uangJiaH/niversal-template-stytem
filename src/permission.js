import router from './router'
import store from './store'

// 白名单
const whiteList = ['/login']

// 路由前置守卫
router.beforeEach(async (to, from, next) => {
  // 获取token 进入主页
  const token = store.getters.token
  // 获取用户信息
  const userInfo = store.getters.userInfo
  if (token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      if (userInfo) {
        next()
      } else {
        // 调用获取信息接口
        const response = await store.dispatch('user/getUserInfo')
        if (response) {
          next()
        } else {
          next('/login')
        }
      }
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
