import React from 'react';
import MainFooter from '../../../components/MainFooter';
import MainNav from '../../../components/MainNav';
import Image from 'next/image';
import { SearchOutlined } from '@ant-design/icons';

const Stores = () => {
    return (
        <>
            <div className='bg-white pb-28'>
                <MainNav />
                <main className='lg:px-20 p-1 mt-6'>
                    <section className=' bg-url  flex justify-center items-center rounded-lg  lg:min-h-[262px] p-0'>
                        <div className="flex flex-col gap-8 text-center py-6 rounded-lg   bg-gray-100/70  w-full justify-center h-[100%] ">
                            <div className="flex flex-col gap-2 text-center">
                                <div className="text-lg lg:text-3xl font-bold text-white">
                                    <h1>Welcome to <span className='text-primary-lightgreen'>Mark8</span></h1>
                                </div>
                                <div className="text-gray-400">
                                    <p>12,932 Products</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="items-center flex rounded  lg:w-[40%]  bg-gray-700 ">
                                    <div className='px-4 pr-0 text-lg text-primary-lightgreen'>
                                        <SearchOutlined />
                                    </div>
                                    <div className="flex-1">
                                        <input
                                            type="text"
                                            placeholder="Search a store"
                                            className="w-full  border-none rounded-lg bg-transparent focus:outline-none focus:ring-0 text-white  p-4"
                                        />
                                    </div>
                                    <div className='px-4'>
                                        <Image src="icons/filter-vertical.svg" alt='filter' width={20} height={20} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-center items-center gap-3">
                                <a href='' className='border rounded-full px-4 py-1 hover:bg-gray-700 text-white hover:text-white'>All</a>
                                <a href='' className='border rounded-full px-4 py-1 hover:bg-gray-700 text-gray-400 hover:text-white'>Vectors</a>
                                <a href='' className='border rounded-full px-4 py-1 hover:bg-gray-700 text-gray-400 hover:text-white'>Icons</a>
                                <a href='' className='border rounded-full px-4 py-1 hover:bg-gray-700 text-gray-400 hover:text-white'>Backgrounds</a>
                            </div>
                        </div>
                    </section>
                </main>
            </div>

            <MainFooter />
        </>
    );
}

export default Stores;
