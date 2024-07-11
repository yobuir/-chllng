'use client';

import React from 'react';
import { Dropdown, Flex, Menu, MenuProps, Space } from 'antd';
import { DownOutlined, HeartOutlined, HomeOutlined, InfoCircleOutlined, LogoutOutlined, SearchOutlined, SettingOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image';
import DropDownComponent from './Other/DropDown';
import PrimaryLink from './Other/PrimaryLink';

const items: MenuProps['items'] = [
    {
        label: (
            <a target="_blank" style={{ gap: 12, padding: 10, display: 'flex' }}  >
                <Image src="/mark8-logo.svg" alt='user profile' width={40} height={40} />
                <div className='flex flex-col' style={{ gap: 0 }}>
                    <span className='font-bold'>Yves Honore B.</span>
                    <span>yveshonore@awesomity.rw</span></div>
            </a>
        ),
        key: '01',
    },
    {
        type: 'divider',
    },
    {
        label: (
            <a target="_blank" className='flex items-center' style={{ gap: 10, padding: 5, }}  >
                <UserOutlined />
                <span>My Account</span>
            </a>
        ),
        key: '0',
    },
    {
        label: (
            <a target="_blank" className='flex items-center' style={{ gap: 10, padding: 5, }}>
                <ShoppingCartOutlined />
                <span>My Orders</span>
            </a>
        ),
        key: '1',
    },
    {
        label: (
            <a target="_blank" className='flex items-center' style={{ gap: 10, padding: 5, }}>
                <UserOutlined />
                <span>Help</span>
            </a>
        ),
        key: '2',
    },

    {
        label: (
            <a target="_blank" className='flex items-center' style={{ gap: 10, padding: 5, }} >
                <InfoCircleOutlined />
                <span>About</span>
            </a>
        ),
        key: '3',
    },

    {
        label: (
            <a target="_blank" className='flex items-center' style={{ gap: 10, padding: 5, }} >
                <SettingOutlined />
                <span>Settings</span>
            </a>
        ),
        key: '4',
    },
    {
        type: 'divider',
    },
    {
        label: (
            <a target="_blank" className='flex items-center' style={{ gap: 10, padding: 5, }} >
                <LogoutOutlined />
                <span>Logout</span>
            </a>
        ),
        key: '5',
    },
];

const Navbar = () => {
    return (
        <Flex className=" px-20 p-1 sticky top-0 items-center border flex lg:flex-row flex-col border-b bg-white ">
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
                <PrimaryLink icon={<SearchOutlined />} name="" url="/" />
                <PrimaryLink icon={<ShoppingCartOutlined />} name="Cart" url="/home" /> 
                <PrimaryLink icon={<HeartOutlined />} name="Saved" url="/home" /> 
                
                <div className="flex" style={{ gap: 10 }}>
                    <div className='border rounded-lg flex text-primary-gray hover:bg-gray-100 cursor-pointer' style={{ padding: '10px 10px', color: '#495D69', gap: '20px' }}>
                        <span className='font-bold lg:block hidden' > Open a store</span>
                        <ShopOutlined style={{ color: '#C1CF16' }} />
                    </div>
                    <div className="">
                        <DropDownComponent items={items} />
                    </div>
                </div>

            </div>

        </Flex>
    );
};

export default Navbar;
