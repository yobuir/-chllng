'use client';

import React, { ChangeEvent, FormEvent, useState } from 'react'; 
import { Alert, Flex } from 'antd'; 
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {  LoginOutlined, MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import TextField from '../../../../components/auth/register/TextField';
import PasswordField from '../../../../components/auth/register/PasswordField';
import LoginPrompt from '../../../../components/auth/register/LoginPrompt';
import registerUser from '../../../../utils/register.utils';
const boxStyle: React.CSSProperties = {
    width: '100%',
    padding: '20px',
    minHeight: '100vh',
};

interface FormData {
    email: string;
    password: string;
    confirmPassword: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
}

const initialFormData: FormData = {
    email: 'fegaf@mailinator.com',
    password: 'Yobuirhdj1',
    confirmPassword: 'Yobuirhdj1',
    firstName: 'Hahn',
    lastName: 'Hahn',
    phoneNumber: '250780809031',
};

const validatePassword = (password: string): boolean => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
};


const AuthForm = () => {
    const router = useRouter();
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormData>(initialFormData);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const { email, password, firstName, lastName, phoneNumber } = formData;

        if (!email || !password || !firstName || !lastName || !phoneNumber) {
            setError("All fields must be entered correctly");
            return;
        }
 
        if (!validatePassword(password)) {
            setError("Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.");
            return;
        }

        if (password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setLoading(true);
        try {
            const data = await registerUser(formData);
            if (data.status !== 201) {
                setError(data.message);
                return;
            }
            alert("Account created successfully");
            router.push('/auth/login');
        } catch (error: any) { 
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Flex gap="middle" align="start" vertical className="bg-url">
            <Flex style={boxStyle} justify="center" align="center" vertical gap={20} className='bg-[#E3E3E3]/80'>
                <form onSubmit={handleSubmit} className="bg-white flex gap-6 flex-row shadow-sm lg:w-[45%] w-[90%] rounded-lg">
                    <div className="flex-1 p-6 flex flex-col justify-between gap-6">
                        <h1 className="mb-4 font-bold lg:text-2xl text-lg">Register</h1>
                        {error && (<Alert description={error} type="error" />)}
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                            <TextField
                                label="First Name"
                                name="firstName"
                                icon={<UserOutlined />}
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                            <TextField
                                label="Last Name"
                                name="lastName"
                                icon={<UserOutlined />}
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                            <TextField
                                label="Email"
                                name="email"
                                type="email"
                                icon={<MailOutlined />}
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <TextField
                                label="Phone Number"
                                name="phoneNumber"
                                type="tel"
                                icon={<PhoneOutlined />}
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            />
                            <PasswordField
                                label="Password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <PasswordField
                                label="Confirm Password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col lg:flex-row gap-3 justify-between">
                            <div className="text-sm mt-4 flex items-center gap-2 text-[#495D69]">
                                <span>
                                    <input required type="checkbox" className=''/>
                                </span>
                                I agree to the
                                <Link href="" className='underline text-[#495D69] hover:text-primary-lightgreen font-semibold'> Terms </Link> and
                                <Link href="" className='hover:text-primary-lightgreen text-[#495D69] underline font-semibold'> Conditions </Link>
                            </div>
                            <button type="submit" disabled={loading}
                                className='bg-primary-lightgreen px-6 py-3 rounded-lg hover:bg-white border hover:border-primary-lightgreen hover:text-primary-lightgreen font-bold flex items-center gap-4'>
                                <span> {!loading ? 'Register' : "Loading..."} </span>
                                <LoginOutlined />
                            </button>
                        </div>
                    </div>
                </form>
                <LoginPrompt/>
            </Flex>
        </Flex>
    );
} 

export default AuthForm;
