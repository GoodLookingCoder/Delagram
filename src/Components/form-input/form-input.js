import React from 'react'
import "./form-input.scss"

const FormInput = ({label, handleChange, ...otherProps}) => {
    return (
        <div className="group-container">
            <input onChange={handleChange} className="form-input-container" {...otherProps}/>
            {
                label ? 
                    <label className={otherProps.value.length ? "shrink" : ""}>
                        {label}
                    </label>
                    :
                    null
            }
        </div>
    )
}

export default FormInput
