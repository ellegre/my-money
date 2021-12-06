import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAbZGpAhdNYcL2aRCjCEn_avnSNLfm4Mtg",
  authDomain: "mymoney-7afa1.firebaseapp.com",
  projectId: "mymoney-7afa1",
  storageBucket: "mymoney-7afa1.appspot.com",
  messagingSenderId: "531892455972",
  appId: "1:531892455972:web:0df91883be2a27f37c26b1"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }