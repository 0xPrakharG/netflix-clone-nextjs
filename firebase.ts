// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCVUa1oi06VrkMzVp4N570wtT519chgtXE',
  authDomain: 'netflix-clone-nextjs-e6f81.firebaseapp.com',
  projectId: 'netflix-clone-nextjs-e6f81',
  storageBucket: 'netflix-clone-nextjs-e6f81.appspot.com',
  messagingSenderId: '427839171196',
  appId: '1:427839171196:web:ef219c9bc2fb2303dd37f9',
  measurementId: 'G-9XNMBF1J1B',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { db, auth }
