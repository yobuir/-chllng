'use client';

import React, { ChangeEvent, FormEvent, useState } from 'react';
import InputField from '../../../../components/Form/InputField'; 
import { Alert, Flex, Input } from 'antd';
import Label from '../../../../components/Form/Label';
import Image from 'next/image';  
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined, LoginOutlined, MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';

const boxStyle: React.CSSProperties = {
    width: '100%',
    padding: '20px',
    minHeight: '100vh',
}; 
interface FormData {
    email: string;
    password: string;
    confirmPassword:string,
    firstName: string;
    lastName: string;
    phoneNumber: string; 
}

const customInputStyles: React.CSSProperties = {
    textAlign: 'left',
    padding: ' 10px 10px 10px 40px',
    position: 'relative',
    backgroundColor: '#0C0C0D0A',
    borderRadius: '7px',
    border: 'none',
}


export default function AuthForm() {

    const router = useRouter();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        phoneNumber: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validatePassword = (password: string) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return passwordRegex.test(password);
    };




    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault(); 

        if (!formData.email || !formData.password || !formData.firstName || !formData.lastName || !formData.phoneNumber)  {
            setError("All fields must be entered correctly ");
            return;
        }
        const { password, confirmPassword } = formData;

        if (!validatePassword(password)) {
            setError("Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.");
            return;
        }

        if (password !== confirmPassword) { 
            setError("Passwords do not match.");
            return;
        }

        const reqBodyData = {
            email:formData.email,
            password:formData.password,
            firstName:formData.firstName,
            lastName:formData.lastName,
            phoneNumber:formData.phoneNumber
            } 


        setLoading(true);
        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'user-type': process.env.USER_TYPE ?? 'seller'
                },
                body: JSON.stringify(reqBodyData)
            });

            const data = await response.json();
        
            if (response.ok) {
                if (data.status != 201) {
                    setError(data.message);
                    return false;
                } 
                alert("created successfully");
                router.push('/auth/login');
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
        <Flex gap="middle" align="start" vertical className="bg-url" >
            <Flex style={boxStyle} justify="center" align="center" vertical gap={20} className='bg-[#E3E3E3]/80' >
                <form onSubmit={handleSubmit}  className="bg-white flex gap-6 flex-row   shadow-sm lg:w-[45%] w-[90%] rounded-lg">
                    <div className="flex-1 p-6 flex  flex-col justify-between gap-6">
                        <div className="">
                            <h1 className="mb-4  font-bold lg:text-2xl text-lg">Register</h1>
                        </div>
                        <div className="">
                            {
                                error && (<Alert
                                    description={error}
                                    type="error"
                                />)
                            }
                        </div>
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                            
                            <div className="flex flex-col gap-3">
                                <Label htmlFor="firstName">
                                    First Name
                                </Label>
                                <div className=" items-center flex gap-1 ">
                                    <div className="absolute pl-3 text-primary-lightgreen">
                                        <UserOutlined />
                                    </div>
                                    <div className="w-full">
                                        <InputField type="text" name='firstName' style={customInputStyles} placeholder="Enter First Name"
                                            value={formData.firstName} onChange={handleChange}/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <Label htmlFor="firstName">
                                    Last Name
                                </Label>
                                <div className=" items-center flex gap-1 ">
                                    <div className="absolute pl-3 text-primary-lightgreen">
                                        <UserOutlined />
                                    </div>
                                    <div className="w-full">
                                        <InputField type="text" name='lastName' style={customInputStyles} placeholder="Enter Last Name"
                                            value={formData.lastName} onChange={handleChange} />
                                    </div>
                                </div>
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
                                            value={formData.email} onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <Label htmlFor="phoneNumber">
                                    Phone Number
                                </Label>
                                <div className=" items-center flex gap-3 ">
                                    <div className="absolute pl-3 flex text-primary-lightgreen">
                                        <PhoneOutlined />
                                    </div>
                                    <div className="w-full">
                                        <InputField type="tel" name='phoneNumber' style={customInputStyles} placeholder="Enter phone number"
                                            value={formData.phoneNumber} onChange={handleChange} />
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
                            <div className="flex flex-col gap-1">
                                <Label htmlFor="confirmPassword">
                                    Confirm Password
                                </Label>
                                <div className=" items-center relative flex gap-3 ">
                                    <div className="absolute pl-3 text-primary-lightgreen">
                                        <LockOutlined />
                                    </div>
                                    <div className="w-full"> 
                                        <Input.Password
                                            style={customInputStyles}
                                            placeholder="input password"
                                            name='confirmPassword'
                                            onChange={handleChange}
                                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-3 justify-between">
                            <div className="text-sm mt-4 text-[#495D69]  block">I agree to the 
                                <Link href="" className='underline text-[#495D69]  hover:text-primary-lightgreen font-semibold'> Terms </Link> and 
                                <Link href="" className=' hover:text-primary-lightgreen text-[#495D69] underline font-semibold'> Conditions </Link> </div>
                            
                            <button type="submit" disabled={loading}
                                className='bg-primary-lightgreen px-6 py-3 rounded-lg hover:bg-white border hover:border-primary-lightgreen hover:text-primary-lightgreen font-bold flex items-center gap-4'
                            >
                                <span> {!loading ? 'Register' : "Loading..."} </span>
                                <LoginOutlined />
                            </button>
                        </div>
                    </div>
                </form>
                <div className="bg-white flex gap-6 flex-row text-[#495D69]   shadow-sm lg:w-[45%] w-[90%] rounded-lg">
                    <div className="flex p-6 w-full lg:flex-row flex-col gap-3   justify-between rounded-lg">
                        <div className="flex flex-col">
                            <h5 className='font-bold'>Already have an account ?</h5>
                            <p>Go to login</p>
                        </div>
                        <div className="">
                            <Link href='/auth/login' type="submit"
                                className='border-gray-400 px-6 py-3 text-black rounded-lg hover:bg-white border hover:border-primary-lightgreen hover:text-primary-lightgreen font-bold flex items-center gap-4'>
                                <span>Login </span>
                                <Image src="/icons/arrow-right-02.svg" height={20} width={20} alt='' />
                            </Link>
                        </div>
                    </div>
                </div>
            </Flex>
        </Flex>
    );
}; 