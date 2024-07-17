'use client';
import { InstagramOutlined, LinkedinOutlined, MailOutlined, XOutlined, YoutubeOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ButtonPrimary from './Form/ButtonPrimary';

const customButtonStyles: React.CSSProperties = {

}

const MainFooter = () => {
    const handleClick = () => {

    }
    return (
        <div className='w-full mt-12 flex flex-col gap-6'>
            <div className="w-full flex flex-col lg:px-20 p-1">
                <div className="flex items-center  lg:flex-row flex-col lg:gap-3 gap-6 justify-between bg-gray-100 border p-4 rounded-lg ">
                    <h2 className="lg:text-2xl text-lg font-bold text-black">
                        <span className="text-lime-500">Open</span> your Store
                    </h2>
                    <div className="flex items-center lg:flex-row flex-col gap-3 w-full max-w-md">
                        <div className="relative flex-grow">
                            <span className="absolute text-primary-lightgreen inset-y-0 left-0 flex items-center pl-3">
                                <MailOutlined />
                            </span>
                            <input type="email" className="pl-10 pr-4 py-2 w-full rounded-lg bg-gray-200 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent" placeholder="Enter your Email" />
                        </div> 
                        <div className="">
                            <ButtonPrimary buttonStyle={customButtonStyles} type="submit" onClick={handleClick}> Submit →</ButtonPrimary>
                        </div>
                    </div>
                </div>
            </div>
            
            <footer className="bg-gray-100 py-4 lg:px-20 p-1">
                <div className="container mx-auto flex justify-between lg:flex-row flex-col gap-4 items-center">

                    <div className="flex items-center gap-2">
                        <Image src="/mark8-logo.svg" alt="Logo" className="" width={45} height={45} />
                        <span className="font-bold text-black">Mark8</span>
                    </div>

                    <div className="text-center text-sm">
                        <p className="text-gray-500">&copy; 2024. Mark8 <span className="text-black">By Awesomity Ltd</span></p>
                    </div>

                    <div className="flex gap-4">
                        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <XOutlined />
                        </Link>
                        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <InstagramOutlined />
                        </Link>
                        <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <YoutubeOutlined />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <LinkedinOutlined />
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default MainFooter;
