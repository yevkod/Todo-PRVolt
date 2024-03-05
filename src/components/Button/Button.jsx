import React from 'react'

export const Button = ({ text, className = '', ...rest }) => {
    return (
        <div>
            <button className={`bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white rounded-lg flex items-center gap-3 px-7 py-4 ${className}`} {...rest}>
                <span>{text}</span>
            </button>
        </div>
    )
}
