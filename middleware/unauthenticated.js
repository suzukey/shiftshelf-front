import { auth } from '../plugins/firebase'

const middleware = ({ redirect }) => {
  return new Promise((resolve) => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        return resolve()
      }
      return redirect('/home')
    })
  })
}

export default middleware
