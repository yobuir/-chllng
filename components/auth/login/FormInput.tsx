import React, { ChangeEvent } from 'react'; 
import { Input } from 'antd';
import { MailOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import Label from '../../Form/Label';
import InputField from '../../Form/InputField';

interface FormInputProps {
    name: string;
    type: string;
    value: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const customInputStyles: React.CSSProperties = {
    textAlign: 'left',
    padding: ' 10px 10px 10px 40px',
    position: 'relative',
    backgroundColor: '#0C0C0D0A',
    borderRadius: '7px',
    border: 'none',
};

const FormInput: React.FC<FormInputProps> = ({ name, type, value, placeholder, onChange }) => (
    <div className="flex flex-col gap-1">
        <Label htmlFor={name}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
        </Label>
        <div className="items-center flex gap-3">
            <div className="absolute pl-3 text-primary-lightgreen">
                {name === 'email' ? <MailOutlined /> : <LockOutlined />}
            </div>
            <div className="w-full">
                {name === 'password' ? (
                    <Input.Password
                        style={customInputStyles}
                        placeholder={placeholder}
                        name={name}
                        onChange={onChange}
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                ) : (
                    <InputField name={name} type={type} style={customInputStyles} placeholder={placeholder}
                        value={value} onChange={onChange} />
                )}
            </div>
        </div>
    </div>
);

export default FormInput;
