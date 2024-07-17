'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { RightOutlined, SearchOutlined, ShopOutlined } from '@ant-design/icons';
import { fetchStores, FindStoreFiltersDto } from '../../utils/allStores.utils'; 
import StreListCard from './Components/StreListCard';

const StoreList: React.FC = () => {

    const [stores, setStores] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const filters: FindStoreFiltersDto = {
                pageNumber: 1,
                recordsPerPage: 3
            };

            try {
                const data = await fetchStores(filters);
                setStores(data.data?.stores);
            } catch (err) {
                console.error(err);
            };
        }
        fetchData();
    }, []);

    console.log(stores);
    const handleSearchChange = () => {
        // Your search change logic here
    }

    return (
        <div className="lg:max-w-md mx-auto bg-white rounded-lg border shadow-sm lg:min-w-[300px] w-full">
            <div className="p-4 flex items-center justify-between">
                <div className="flex gap-2 items-center">
                    <div className="text-lg text-primary-lightgreen">
                        <ShopOutlined />
                    </div>
                    <h2 className="text-lg font-bold">Top ({stores.length}) Stores</h2>
                </div>
                <Image src="/icons/link-square-02.svg" alt="stores" height={20} width={20} />
            </div>
            <div className="p-4 bg-gray-100">
                <div className="flex justify-center items-center">
                    <div className="items-center flex rounded lg:w-[100%] bg-white">
                        <div className="px-3 pr-0 text-lg text--gray-500">
                            <SearchOutlined />
                        </div>
                        <div className="flex-1">
                            <input
                                onChange={handleSearchChange}
                                type="text"
                                placeholder="Search a store"
                                className="w-full border-none rounded-lg bg-transparent focus:outline-none focus:ring-0 p-2"
                            />
                        </div>
                        <div className="px-4">
                            <Image src="/icons/filter-verticaldark.svg" alt="filter" width={20} height={20} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4">
                {stores.map((store) => (
                    <StreListCard store={store} key={store.id} />
                ))}
            </div>
        </div>
    );
};

export default StoreList;
