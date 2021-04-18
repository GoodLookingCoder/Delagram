import {useState, useContext} from 'react'
import {Link, useHistory} from "react-router-dom"

import {auth} from "../../firebase/firebase"

import FormInput from "../form-input/form-input" 
import CustomButton from "../custom-button/custom-button"

import "./signin.scss"

const SignIn = () => {
    const [signInValues, setSignInValues] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const handleChange = e => {
        const{name, value} = e.target

        setSignInValues({
            ...signInValues,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const {email, password} = signInValues

        try{
            setError("")
            setLoading(true)
            await auth.signInWithEmailAndPassword(email, password)
            setLoading(false)
            history.push("/")
        }catch(error){
            setError("Failed to sign in")
            setLoading(false)
            console.log(error)
        }
    }

    return (<>
        <div className="sign-in-container">
            <h1 className="sign-in-title">Delagram</h1>

            <form className="sign-in-form" onSubmit={handleSubmit}>
                <FormInput
                    type= "email"
                    name="email"
                    label="Email"
                    value={signInValues.email}
                    handleChange={handleChange}
                    required
                />                
                <FormInput
                    type= "password"
                    name="password"
                    label="Password"
                    value={signInValues.password}
                    handleChange={handleChange}
                    required
                />
                <CustomButton disabled={loading} type="submit">
                    Log In
                </CustomButton>
            </form>
        </div>
        <div className="signup-link">
            <p>Need an account? <Link className="link" to="/signup">Sign Up</Link></p>
        </div>
    </>)
}

export default SignIn
