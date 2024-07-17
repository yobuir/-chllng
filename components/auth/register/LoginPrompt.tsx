import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LoginPrompt = () => {
    return (
        <div className="bg-white flex gap-6 flex-row text-[#495D69] shadow-sm lg:w-[45%] w-[90%] rounded-lg">
            <div className="flex p-6 w-full lg:flex-row flex-col gap-3 justify-between rounded-lg">
                <div className="flex flex-col">
                    <h5 className='font-bold'>Already have an account?</h5>
                    <p>Go to login</p>
                </div>
                <div>
                    <Link href='/auth/login' type="submit"
                        className='border-gray-400 px-6 py-3 text-black rounded-lg hover:bg-white border hover:border-primary-lightgreen hover:text-primary-lightgreen font-bold flex items-center gap-4'>
                        <span>Login </span>
                        <Image src="/icons/arrow-right-02.svg" height={20} width={20} alt='' />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LoginPrompt;
