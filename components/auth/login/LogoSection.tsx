import React from 'react';
import Image from 'next/image';

const LogoSection = () => (
    <div className="bg-[#F4F5F6] p-6 flex-1 lg:flex hidden flex-col justify-between rounded-lg">
        <div>
            <Image src='/mark8-logo.svg' alt='logo' height={40} width={40} />
        </div>
        <div>
            <div className="flex flex-col gap-2">
                <h3 className='font-bold lg:text-2xl text-lg'>Mark8</h3>
                <p className='text-[#495D69] font-normal text-sm'>By Awesomity Lab</p>
            </div>
        </div>
        <div className='text-[#495D69] font-normal'><small>© 2024 Awesomity Lab</small></div>
    </div>
);

export default LogoSection;
