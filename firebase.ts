// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA-lRkawV8KH1OMW4kkyVMy-G6ISCogf9w',
  authDomain: 'netflix-clone-708ae.firebaseapp.com',
  projectId: 'netflix-clone-708ae',
  storageBucket: 'netflix-clone-708ae.appspot.com',
  messagingSenderId: '22829685696',
  appId: '1:22829685696:web:7760cbeb0af3901c624625',
}

// Initialize Firebase
// const app = initializeApp(firebaseConfig)

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
