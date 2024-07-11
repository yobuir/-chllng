import React from 'react';

interface LabelProps {
    htmlFor: string;
    children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ htmlFor, children }) => {
    return (
        <label htmlFor={htmlFor} className="block text-sm text-gray-700  mb-2">
            {children}
        </label>
    );
};

export default Label;
