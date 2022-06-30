import UserApi from '../../api/login'
import { setItem, getItem, removeItem } from '@/utils/storage'

export default {
  namespaced: true,
  state: () => ({
    token: getItem('token') || '',
    userInfo: getItem('userInfo') || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', token)
    },

    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
      setItem('userInfo', userInfo)
    }
  },
  actions: {
    // 获取token
    async login({ commit }, payload) {
      try {
        const response = await UserApi.login(payload)
        commit('setToken', response.token)
        return response
      } catch (error) {
        console.log(error)
      }
    },
    // 获取用户信息
    async getUserInfo({ commit }) {
      try {
        const response = await UserApi.getUserInfo()
        commit('setUserInfo', response)
        console.log(response, 'getuserInfo')
        return response
      } catch (error) {
        console.log(error)
      }
    },
    logout({ commit }) {
      commit('setToken', '')
      commit('setUserInfo', '')
      removeItem('token')
      removeItem('userInfo')
    }
  }
}
