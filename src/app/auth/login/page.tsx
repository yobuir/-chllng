'use client';

import React, { ChangeEvent, FormEvent, useState } from 'react';
import InputField from '../../../../components/Form/InputField';
import { Alert, Flex, Input } from 'antd';
import Label from '../../../../components/Form/Label';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightOutlined, EyeInvisibleOutlined, EyeTwoTone, LockOutlined, LoginOutlined, MailOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { setRefreshToken } from '../../../../utils/setRefreshToken';


const boxStyle: React.CSSProperties = {
    width: '100%',
    padding: '20px',
    minHeight: '100vh',
};
const customInputStyles: React.CSSProperties = {
    textAlign: 'left',
    padding: ' 10px 10px 10px 40px',
    position: 'relative',
    backgroundColor: '#0C0C0D0A',
    borderRadius: '7px',
    border: 'none',
}

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
        <Flex gap="middle" align="start" vertical className="bg-[#E3E3E3]">
            <Flex style={boxStyle} justify="center" align="center" vertical gap={20} className='bg-url'>
                <div className="bg-white flex gap-6 flex-row   shadow-sm lg:w-[45%] w-[90%] rounded-lg">
                    <div className="bg-[#F4F5F6]  p-6 flex-1 lg:flex hidden flex-col justify-between rounded-lg">
                        <div>
                            <Image src='/mark8-logo.svg' alt='logo' height={40} width={40} />
                        </div>
                        <div>
                            <div className="flex flex-col gap-2">
                                <h3 className='font-bold lg:text-2xl text-lg'>Mark8</h3>
                                <p className='text-[#495D69] font-normal text-sm'>By Awesomity Lab</p>
                            </div>
                        </div>
                        <div className='text-[#495D69] font-normal'><small>© 2024 Awesomity Lab </small></div>
                    </div>
                    <form onSubmit={handleLogin} className="flex-1 p-6 flex  flex-col justify-between gap-6">
                        <div className='w-full lg:hidden flex justify-center'>
                            <Image src='/mark8-logo.svg' alt='logo' height={40} width={40} />
                        </div>
                        <div className="">
                            <h1 className="mb-4  font-bold lg:text-2xl text-lg">Login</h1>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="">
                                {
                                    error && (<Alert
                                        description={error}
                                        type="error"
                                    />)
                                }
                            </div>
                            <div className="flex flex-col gap-1">
                                <Label htmlFor="email">
                                    Email
                                </Label>
                                <div className=" items-center flex gap-3 ">
                                    <div className="absolute pl-3 text-primary-lightgreen">
                                        <MailOutlined />
                                    </div>
                                    <div className="w-full">
                                        <InputField name='email' type="email" style={customInputStyles} placeholder="Enter email"
                                            value={loginData.email} onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <Label htmlFor="password">
                                    Password
                                </Label>
                                <div className=" items-center relative flex gap-3 ">
                                    <div className="absolute pl-3 text-primary-lightgreen">
                                        <LockOutlined />
                                    </div>
                                    <div className="w-full">
                                        <Input.Password
                                            style={customInputStyles}
                                            placeholder="input password"
                                            name='password'
                                            onChange={handleChange}
                                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-3 justify-between">
                            <a href="/forgot-password" className="font-semibold text-black hover:underline hover:text-primary-lightgreen mt-4 block">Forgot Password?</a>
                            <button type="submit" disabled={loading}
                                className='bg-primary-lightgreen px-6 py-3 rounded-lg hover:bg-white border hover:border-primary-lightgreen hover:text-primary-lightgreen font-bold flex items-center gap-4'
                            >
                                <span> {!loading ? 'Login' : "Loading..."} </span>
                                <LoginOutlined />
                            </button>
                        </div>
                    </form>
                </div>
                <div className="bg-white flex gap-6 flex-row text-[#495D69] shadow-sm lg:w-[45%] w-[90%] rounded-lg">
                    <div className="flex p-6 w-full lg:flex-row flex-col gap-3   justify-between rounded-lg">
                        <div className="flex flex-col">
                            <h5 className='font-bold'>New here ?</h5>
                            <p>Create an account</p>
                        </div>
                        <div className="">
                            <Link href='/auth/register'
                                className='border-gray-400 px-6 py-3 text-black rounded-lg hover:bg-white border hover:border-primary-lightgreen hover:text-primary-lightgreen font-bold flex items-center gap-4'>
                                <span>Register here</span>
                                <ArrowRightOutlined />
                            </Link>
                        </div>
                    </div>
                </div>
            </Flex>
        </Flex>
    );
};

export default AuthForm;