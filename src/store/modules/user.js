import loginApi from '../../api/login'
import getUserInfo from '@/api/sys'
import { setItem, getItem, removeAllItem } from '@/utils/storage'
export default {
  namespaced: true,
  state: () => ({
    token: getItem('token') || '',
    userTnfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', token)
    },
    loginOut(state) {
      removeAllItem()
      state.token = ''
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    async login({ commit }, payload) {
      try {
        const res = await loginApi.login(payload)
        commit('setToken', res.token)
        console.log(res, '0000')
      } catch (error) {
        console.log(error, '1111')
      }
    },
    async getUserInfo(context) {
      const res = await getUserInfo()
      this.commit('user/setUserInfo', res)
      return res
    }
  }
}
