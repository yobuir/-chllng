'use client';

import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Flex } from 'antd';
import { useRouter } from 'next/navigation'; 
import { LoginOutlined } from '@ant-design/icons';
import { setRefreshToken } from '../../../../utils/setRefreshToken';
import Image from 'next/image';
import LogoSection from '../../../../components/auth/login/LogoSection';
import ErrorAlert from '../../../../components/auth/login/ErrorAlert';
import FormInput from '../../../../components/auth/login/FormInput';
import RegisterPrompt from '../../../../components/auth/login/RegisterPrompt';

const boxStyle: React.CSSProperties = {
    width: '100%',
    padding: '20px',
    minHeight: '100vh',
};

interface LoginFormData {
    email: string;
    password: string;
}

const AuthForm: React.FC = () => {

    const router = useRouter();
    const [loginData, setLoginData] = useState<LoginFormData>({ email: '', password: '' });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        if (!loginData.email || !loginData.password) {
            setError("Please enter your email address and password");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            });

            const data = await response.json();

            if (response.ok) {
                if (data.status != 201) {
                    setError(data.message);
                    return false;
                }
                localStorage.setItem('accessToken', data.data.accessToken);
                localStorage.setItem('refreshToken', data.data.refreshToken);
                setRefreshToken();
                router.push('/');
            } else {
                setError(data.message);
            }
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Flex gap="middle" align="start" vertical className='bg-url'>
            <Flex style={boxStyle} justify="center" align="center" vertical gap={20} className="bg-[#E3E3E3]/80">
                <div className="bg-white flex gap-6 flex-row shadow-sm lg:w-[45%] w-[90%] rounded-lg">
                    <LogoSection />
                    <form onSubmit={handleLogin} className="flex-1 p-6 flex flex-col justify-between gap-6">
                        <div className='w-full lg:hidden flex justify-center'>
                            <Image src='/mark8-logo.svg' alt='logo' height={40} width={40} />
                        </div>
                        <div>
                            <h1 className="mb-4 font-bold lg:text-2xl text-lg">Login</h1>
                        </div>
                        <div className="flex flex-col gap-6">
                            <ErrorAlert error={error} />
                            <FormInput name='email' type="email" value={loginData.email} placeholder="Enter email" onChange={handleChange} />
                            <FormInput name='password' type="password" value={loginData.password} placeholder="input password" onChange={handleChange} />
                        </div>
                        <div className="flex flex-col lg:flex-row gap-3 justify-between">
                            <a href="/forgot-password" className="font-semibold text-black hover:underline hover:text-primary-lightgreen mt-4 block">Forgot Password?</a>
                            <button type="submit" disabled={loading}
                                className='bg-primary-lightgreen px-6 py-3 rounded-lg hover:bg-white border hover:border-primary-lightgreen hover:text-primary-lightgreen font-bold flex items-center gap-4'
                            >
                                <span>{!loading ? 'Login' : "Loading..."}</span>
                                <LoginOutlined />
                            </button>
                        </div>
                    </form>
                </div>
                <RegisterPrompt />
            </Flex>
        </Flex>
    );
};

export default AuthForm;
