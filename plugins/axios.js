import { auth } from '~/plugins/firebase'

export default ({ $axios }) => {
  $axios.onRequest((config) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        user.getIdToken().then((accessToken) => {
          if (config.headers.common) {
            config.headers.common.Authorization = `Bearer ${accessToken}`
          }
        })
      }
    })
  })

  $axios.onError(() => {})
}
