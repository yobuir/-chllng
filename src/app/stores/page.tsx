'use client';
import React, { useEffect, useState } from 'react';
import MainFooter from '../../../components/MainFooter';
import MainNav from '../../../components/Other/HeaderNav/MainNav';
import Image from 'next/image';
import { SearchOutlined } from '@ant-design/icons';
import StoreCard from '../../../components/Store/StoreCard'; 
import { fetchStores, FindStoreFiltersDto } from '../../../utils/allStores.utils';

interface Store {
    id: string;
    name: string; 
}

interface StoreResponse {
    data: any;
    stores: Store[]; 
}


const Stores = () => {
    const [stores, setStores] = useState<Store[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    
    useEffect(() => {
        const fetchData = async () => {
            const filters: FindStoreFiltersDto = {
                pageNumber: 1,
                recordsPerPage: 3
            };

            try {
                const data: StoreResponse = await fetchStores(filters);
                setStores(data.data.stores);
            } catch (err) {
                setError("Error fetching stores");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    return (
        <>
            <div className='bg-white pb-28'>
                <MainNav />
                <main className='lg:px-20 p-1 mt-6'>
                    <section className=' bg-url  flex justify-center items-center rounded-lg  lg:min-h-[262px] p-0'>
                        <div className="flex flex-col gap-8 text-center py-6 rounded-lg   bg-gray-100/80  w-full justify-center h-[100%] ">
                            <div className="flex flex-col gap-2 text-center">
                                <div className="text-lg lg:text-3xl font-bold text-black">
                                    <h1><span className='text-primary-lightgreen'>Mark8</span> Stores</h1>
                                </div>
                                <div className="text-gray-400">
                                    <p>54 Stores</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="items-center flex rounded  lg:w-[40%]  bg-[#0C0C0D0A]/10 ">
                                    <div className='px-4 pr-0 text-lg text-primary-lightgreen'>
                                        <SearchOutlined />
                                    </div>
                                    <div className="flex-1">
                                        <input
                                            type="text"
                                            placeholder="Search a store"
                                            className="w-full  border-none rounded-lg placeholder:text-gray-500 bg-transparent focus:outline-none focus:ring-0 text-gray-500  p-4"
                                        />
                                    </div>
                                    <div className='px-4'>
                                        <Image src="icons/filter-verticaldark.svg" alt='filter' width={20} height={20} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-center items-center gap-3">
                                <a href='' className='border rounded-full border-black px-4 py-1 hover:bg-gray-700 text-black hover:text-white'>All</a>
                                <a href='' className='border rounded-full border-gray-400 px-4 py-1 hover:bg-gray-700 text-gray-400 hover:text-white'>Vectors</a>
                                <a href='' className='border rounded-full border-gray-400  px-4 py-1 hover:bg-gray-700 text-gray-400 hover:text-white'>Icons</a>
                                <a href='' className='border rounded-full border-gray-400  px-4 py-1 hover:bg-gray-700 text-gray-400 hover:text-white'>Backgrounds</a>
                            </div>
                        </div>
                    </section>
                    <section className="flex flex-col gap-12 mt-12">
                        
                        {
                            stores?.map((store) => (
                                <StoreCard store={store} key={store?.id} /> 
                            ))
                        }

                    </section>
                </main>
            </div>
            <MainFooter />
        </>
    );
}

export default Stores;
