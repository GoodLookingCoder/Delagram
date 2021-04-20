import {useContext} from 'react'
import {useHistory} from "react-router-dom"

import {Store} from "../../context/context"

import {auth} from "../../firebase/firebase"

const HomePage = () => {
    const { state } = useContext(Store)
    const history = useHistory()

    const handleLogOut = async () => {
        try{
            await auth.signOut()
            history.push("/signin")
        } catch(error){
            console.log(error)
        }
    }

    return (
        <div className="home-page">
            Welcome to Delagram  {state.currentUser.email}!!!

            <span onClick={handleLogOut}>Log Out</span>
        </div>
    )
}

export default HomePage
