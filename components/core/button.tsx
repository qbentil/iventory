import React from 'react'

interface ButtonProps {
    text: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
}

const Button = ({ text, onClick, variant = 'primary' }: ButtonProps) => {
    return (
        <button
            className={`border ${variant === 'primary' ? 'border-primary-500 text-gray-600' : 'bg-secondary-500 border-secondary-500 text-white'
                } px-5 py-2 rounded-lg`}
        >
            {text}
        </button>
    )
}

export default Button