import React from 'react'

import "./custom-button.scss"

const CustomButton = ({children, disabled}) => {
    return (
        <button disabled={disabled}>
            {children}
        </button>
    )
}

export default CustomButton
