import { Input } from 'antd';
import React from 'react';

interface InputFieldProps {
    type: string;
    placeholder: string;
    name:string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    style?: React.CSSProperties;  
}

const defaultInputStyle: React.CSSProperties = {
    textAlign: 'left',
    padding: ' 10px 10px 10px 40px',
    position: 'relative',
    backgroundColor: '#0C0C0D0A',
    borderRadius: '7px',
    border: 'none',
};

const InputField: React.FC<InputFieldProps> = ({ type, placeholder,name, value, onChange, style }) => {
    const InputStyles = {
        ...defaultInputStyle,
        ...style, 
    };

    return (
        <Input
            type={type}
            placeholder={placeholder}
            value={value}
            name={name}
            onChange={onChange}
            style={InputStyles} 
        />
    );
};

export default InputField;
