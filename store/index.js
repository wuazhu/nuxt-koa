import axios from 'axios'
export const state = () => ({
  authUser: null
})

export const mutations = {
  setAuth(state, user) {
    state.authUser = user
  }
}

export const actions = {
  // 此方法会在服务端渲染的时候最先调用
  nuxtServerInit({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit('setAuth', req.session.authUser)
    }
  },
  async doLogin({ commit }, userinfo) {
    try {
      const { data } = await axios.post('/api/login', userinfo)
      console.log('loginVuex请求来的 data', data)
      commit('setAuth', {
        ...data.data
      })
      return data
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials not login')
      }
      throw error
    }
  }
}
