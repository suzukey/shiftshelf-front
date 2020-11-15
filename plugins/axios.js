import { auth } from '~/plugins/firebase'

export default ({ $axios }) => {
  $axios.onRequest((config) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        user.getIdToken().then((accessToken) => {
          config.headers.common.Authorization = accessToken
        })
      }
    })
  })

  $axios.onError(() => {})
}
