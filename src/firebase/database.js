import firebase from 'firebase/app'
import 'firebase/firebase-firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyA85x2cjWPsX5Ep6szQkFrUBE4ZREhGxjE',
  authDomain: 'frontendcafe-57ab2.firebaseapp.com',
  projectId: 'frontendcafe-57ab2',
  storageBucket: 'frontendcafe-57ab2.appspot.com',
  messagingSenderId: '389130071716',
  appId: '1:389130071716:web:aaecc363f4e40583e9c031'
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export {
  db,
  firebase
}
