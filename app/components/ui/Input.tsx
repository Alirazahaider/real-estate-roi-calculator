// src/components/ui/Input.tsx
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const Input = ({ label, className = '', ...props }: InputProps) => {
    return (
        <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0d5256] focus:border-[#0d5256] ${className}`}
                {...props}
            />
        </div>
    );
};

export default Input;