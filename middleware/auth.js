import { auth } from '../plugins/firebase'

const middleware = ({ store, redirect }) => {
  return new Promise((resolve) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        return resolve()
      }
      return redirect('/login')
    })
  })
}

export default middleware
