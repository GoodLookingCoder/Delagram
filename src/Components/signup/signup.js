import {useState, useContext} from 'react'
import {Link, useHistory} from "react-router-dom"

import {Store} from "../../context/context"
import {auth} from "../../firebase/firebase"

import FormInput from "../form-input/form-input" 
import CustomButton from "../custom-button/custom-button"

import "./signup.scss"

const SignUp = () => {
    const {state, setState} = useContext(Store)

    const [signUpValues, setSignUpValues] = useState({
        email: "",
        userName: "",
        password: ""
    })
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const handleChange = e => {
        const{name, value} = e.target

        setSignUpValues({
            ...signUpValues,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const {email, password} = signUpValues

        try{
            setError("")
            setLoading(true)
            await auth.createUserWithEmailAndPassword(email, password)
            history.push("/")
        }catch(error){
            setError("Failed to create an account")
            setLoading(false)
            console.log("error")
        }
        
        setLoading(false)
    }

    return (<>
        <div className="sign-up-container">
            <h1 className="sign-up-title">Delagram</h1>
            <span>Registrate para ver fotos y videos de tus amigos</span>

            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    type= "email"
                    name="email"
                    label="Email"
                    value={signUpValues.email}
                    handleChange={handleChange}
                    required
                />                
                <FormInput
                    type= "text"
                    name="userName"
                    label="User Name"
                    value={signUpValues.userName}
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    type= "password"
                    name="password"
                    label="Password"
                    value={signUpValues.password}
                    handleChange={handleChange}
                    required
                />
                <CustomButton disabled={loading} type="submit">
                    Registrate
                </CustomButton>
            </form>
        </div>
        <div className="login-link">
            <p>Already have an account? <Link to="/signin" className="link">Log In</Link></p>
        </div>
    </>)
}

export default SignUp
