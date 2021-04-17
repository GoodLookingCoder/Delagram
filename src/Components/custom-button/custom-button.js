import React from 'react'

import "./custom-button.scss"

const CustomButton = ({children}) => {
    return (
        <button>
            {children}
        </button>
    )
}

export default CustomButton
