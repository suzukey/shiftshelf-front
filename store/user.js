export const state = () => ({
  name: '',
  email: '',
  icon_url: '',
})

export const getters = {
  userinfo(state) {
    return {
      name: state.name,
      email: state.email,
      icon_url: state.icon_url,
    }
  },
}

export const mutations = {
  setProfile(state, profile) {
    state.name = profile.user_name
    state.email = profile.email
    state.icon_url = profile.icon_url
  },
}

export const actions = {
  async getProfile({ commit }) {
    const res = await this.$axios.$get('/v1/profiles/me')
    commit('setProfile', res)
  },
}
