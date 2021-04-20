import React, { createContext, useState, useEffect } from 'react';
import {auth, createUserProfileDocument} from "../firebase/firebase"
import {useHistory} from "react-router-dom"

export const Store = createContext();

const Context = ({children}) => {
    const initialState = {
		currentUser: null,
        loading: true
	};
    const history = useHistory()

    const [state, setState] = useState(initialState);

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(async user => {
            console.log("activated")
            if(user && user.displayName){
                const userRef = await createUserProfileDocument(user)
                userRef.onSnapshot(snapShot => {
                    setState({
                        ...state,
                        loading: false,
                        currentUser: {
                            ...snapShot.data(),
                            name: user.displayName
                        }
                  })
                  history.push("/")
                })
            }else {
                setState({
                    ...state,
                    currentUser: null,
                    loading: false
                })
            }
        })

        return unsubscribe
    }, [])

    return ( 
        <Store.Provider value={{ state, setState }}>
            { !state.loading && children}
        </Store.Provider>
    )
}

export default Context