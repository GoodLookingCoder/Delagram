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
        uName: "",
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
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            await user.updateProfile({
                displayName: signUpValues.uName
            })
            await auth.signOut();
            await auth.updateCurrentUser(user);
            console.log(user)
            setLoading(false)
            history.push("/")
        }catch(error){
            setError("Failed to create an account")
            setLoading(false)
            console.log("error")
        }
    }

    return (<>
        <div className="sign-up-container">
            <h1 className="sign-up-title">Delagram</h1>
            <span>Registrate para ver fotos y videos de tus amigos</span>

            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    type= "text"
                    name="uName"
                    label="User Name"
                    value={signUpValues.uName}
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    type= "email"
                    name="email"
                    label="Email"
                    value={signUpValues.email}
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
