import { auth } from '../plugins/firebase'

export default ({ store }) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      store.dispatch('user/getProfile')
    }
  })
}
