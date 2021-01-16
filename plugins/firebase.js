import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyC3XobVrKIekL9MSH6BsUw9dYitPexslpk',
  authDomain: 'cs-shifshel.firebaseapp.com',
  projectId: 'cs-shifshel',
}
// Appの初期化
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
