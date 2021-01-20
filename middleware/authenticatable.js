import { auth } from '../plugins/firebase'

const middleware = ({ redirect }) => {
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
