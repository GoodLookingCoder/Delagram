import firebase from "firebase/app"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyDp8ga-Iu5gVg74O-rtHWnF8YwxNhHxdTA",
    authDomain: "delagram-fa0c2.firebaseapp.com",
    projectId: "delagram-fa0c2",
    storageBucket: "delagram-fa0c2.appspot.com",
    messagingSenderId: "191899589664",
    appId: "1:191899589664:web:98bba6d49ed8e3191ef045"
}

firebase.initializeApp(config)

export const auth = firebase.auth()

export default firebase