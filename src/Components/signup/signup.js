import {useState} from 'react'

import FormInput from "../form-input/form-input" 
import CustomButton from "../custom-button/custom-button"

import "./signup.scss"

const SignUp = () => {
    const [signUpValues, setSignUpValues] = useState({
        email: "",
        userName: "",
        password: ""
    })

    const handleChange = e => {
        const{name, value} = e.target

        setSignUpValues({
            ...signUpValues,
            [name]: value
        })
    }

    return (
        <div className="sign-up-container">
            <h1 className="sign-up-title">Delagram</h1>
            <span>Registrate para ver fotos y videos de tus amigos</span>

            <form className="sign-up-form">
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
                <CustomButton>
                    Registrate
                </CustomButton>
            </form>
        </div>
    )
}

export default SignUp
