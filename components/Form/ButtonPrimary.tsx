import React from 'react';

interface ButtonPrimaryProps {
    type?: "submit" | "reset" | "button";
    onClick: () => void;
    children: React.ReactNode;
    buttonStyle:React.CSSProperties,}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ type, onClick, children, buttonStyle }) => {
    return (
        <button type={type} className='rounded-lg p-6 py-3 bg-primary-lightgreen' onClick={onClick}  >
            {children}
        </button>
    );
};

export default ButtonPrimary;
