import React, {useState, useEffect, useContext} from 'react'
import {useHistory} from "react-router-dom"

import {auth, createUserProfileDocument} from "../../firebase/firebase"
import {Store} from "../../context/context"

const UserController = ({children}) => {
    const[loading, setLoading] =useState(true)
    const{state, setState} = useContext(Store)
    const history = useHistory()

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(async user => {
            console.log("activated")
            if(user && user.displayName){
                const userRef = await createUserProfileDocument(user)
                userRef.onSnapshot(snapShot => {
                    setState({
                        ...state,
                        currentUser: {
                            ...snapShot.data(),
                            name: user.displayName
                        }
                  })
                  setLoading(false)
                  history.push("/")
                })
            }else {
                setState({
                    ...state,
                    currentUser: null,
                })
                setLoading(false)
            }
        })

        return unsubscribe
    }, [])

    return (
        <div >
            {!loading && children}  
        </div>
    )
}

export default UserController
