import React, { createContext, useState, useEffect } from 'react';
import {auth} from "../firebase/firebase"

export const Store = createContext();

const Context = ({children}) => {
    const initialState = {
		currentUser: null,
        loading: true
	};

    const [state, setState] = useState(initialState);

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user => {
            setState({
                ...state, 
                currentUser: user,
                loading: false
            })
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