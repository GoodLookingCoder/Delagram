import React from 'react'
import {useContext} from 'react'
import {Route, Redirect} from "react-router-dom"

import {Store} from "../../context/context"

const PrivateRoute = ({component: Component, ...otherProps}) => {
    const { state } = useContext(Store)

    return (
        <Route
            {...otherProps}
        >
            {state.currentUser ? <Component/> : <Redirect to="/signin"/>}
        </Route>
    )
}

export default PrivateRoute
