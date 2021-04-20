import React, { createContext, useState} from 'react';

export const Store = createContext();

const Context = ({children}) => {
    const initialState = {
		currentUser: null
	};

    const [state, setState] = useState(initialState);

    return ( 
        <Store.Provider value={{ state, setState }}>
            {children}
        </Store.Provider>
    )
}

export default Context