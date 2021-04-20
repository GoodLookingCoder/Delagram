import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const config = {
    apiKey: "AIzaSyDp8ga-Iu5gVg74O-rtHWnF8YwxNhHxdTA",
    authDomain: "delagram-fa0c2.firebaseapp.com",
    projectId: "delagram-fa0c2",
    storageBucket: "delagram-fa0c2.appspot.com",
    messagingSenderId: "191899589664",
    appId: "1:191899589664:web:98bba6d49ed8e3191ef045"
}
firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth) => {
    if(!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.displayName}`)
    const snapShot = await userRef.get() 

    if(!snapShot.exists){
        const {email, photoURL, uid} = userAuth

        try{
            await userRef.set({
                email,
                photoURL,
                id: uid
            })
        }catch(error){
            console.log("error creating user", error.message)
        }
    }

    return userRef
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export default firebase