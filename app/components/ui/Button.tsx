// src/components/ui/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const Button = ({ children, className = '', ...props }: ButtonProps) => {
    return (
        <button
            className={`bg-[#0d5256] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#0b4548] transition-colors ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;