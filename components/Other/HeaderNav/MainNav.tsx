'use client';
import React, { useState } from 'react';
import { Flex } from 'antd';
import { HeartOutlined, HomeOutlined, SearchOutlined, ShopOutlined } from '@ant-design/icons';

import Image from 'next/image';
import DropDownComponent from '../DropDown';
import PrimaryLink from '../PrimaryLink';
import Cart from '../Cart/Cart';
import DropDown from './DropDown';
import TopSearch from '../Search/TopSearch';


const Navbar = () => {


    const [showSearch, setShowSearch] = useState(false);

    const handleSearchClick = () => {
        setShowSearch(prev => !prev);
    };


    return (
        <>
            {showSearch &&
                <div onClick={handleSearchClick}>
                    <TopSearch />
            </div>}
            <Flex className=" px-20 p-1 sticky top-0 items-center border flex lg:flex-row z-40 flex-col border-b bg-white ">
                <div className=" flex items-center  lg:flex-row flex-col gap-4 lg:gap-24 ">
                    <div className="flex items-center" style={{ gap: '6px' }}>
                        <div className="">
                            <Image src="/mark8-logo.svg" alt="Logo" className="" width={45} height={45} />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-xl">Mark8</span>
                            <span className="text-sm text-gray-500">By Awesomity Lab</span>
                        </div>
                    </div>
                    <div className="flex items-center" style={{ gap: '30px', }}>
                        <PrimaryLink icon={<HomeOutlined />} name="Home" url="/" />
                        <PrimaryLink icon={<ShopOutlined />} name="Stores" url="/stores" />
                    </div>
                </div>
                <div className="flex items-center flex-1 lg:mt-0 mt-3 lg:gap-2  gap-4 justify-end">
                    <button className='flex gap-1 text-black items-center  lg:border-none border p-2 px-3 hover:text-primary-lightgreen rounded hover:bg-gray-100 cursor-pointer' onClick={handleSearchClick}> <SearchOutlined /></button>
                    <Cart />
                    <PrimaryLink icon={<HeartOutlined />} name="Saved" url="/saved" />
                    <div className="flex" style={{ gap: 10 }}>
                        <div className='border rounded-lg flex text-primary-gray hover:bg-gray-100 cursor-pointer' style={{ padding: '10px 10px', color: '#495D69', gap: '20px' }}>
                            <span className='font-bold lg:block hidden' > Open a store</span>
                            <ShopOutlined style={{ color: '#C1CF16' }} />
                        </div>
                        <DropDown />
                    </div>

                </div>

            </Flex>
        </>

    );
};

export default Navbar;
