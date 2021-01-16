export const state = () => ({
  name: '',
  email: '',
  icon_url: '',
  isLoggedin: false,
})

export const getters = {
  userinfo(state) {
    return {
      name: state.name,
      email: state.email,
      icon_url: state.icon_url,
    }
  },
  isLoggedin(state) {
    return state.isLoggedin
  },
}

export const mutations = {
  setProfile(state, profile) {
    state.name = profile.user_name
    state.email = profile.email
    state.icon_url = profile.icon_url
  },
  setSignIn(state) {
    state.isLoggedin = true
  },
  setSignOut(state) {
    state.name = ''
    state.email = ''
    state.icon_url = ''
    state.isLoggedin = false
  },
}

export const actions = {
  async getProfile({ commit }) {
    const res = await this.$axios.$get('/v1/profiles/me')
    commit('setProfile', res)
    commit('setSignIn')
  },
  signOut({ commit }) {
    const auth = require('~/plugins/firebase').auth

    auth.signOut()
    commit('setSignOut')
  },
}
