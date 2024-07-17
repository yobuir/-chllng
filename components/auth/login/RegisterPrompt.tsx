import React from 'react';
import Link from 'next/link';
import { ArrowRightOutlined } from '@ant-design/icons';

const RegisterPrompt = () => (
    <div className="bg-white flex gap-6 flex-row text-[#495D69] shadow-sm lg:w-[45%] w-[90%] rounded-lg">
        <div className="flex p-6 w-full lg:flex-row flex-col gap-3 justify-between rounded-lg">
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
);

export default RegisterPrompt;
