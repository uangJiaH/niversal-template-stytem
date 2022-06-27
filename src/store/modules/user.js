import loginApi from '../../api/login'
export default {
  namespaced: true,
  state: () => ({
    token: ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
    }
  },
  actions: {
    async login({ commit }, payload) {
      try {
        const res = await loginApi.login(payload)
        console.log(res)
      } catch (error) {}
    }
  }
}
