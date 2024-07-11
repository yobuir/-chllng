import React from 'react';
import Image from 'next/image';
import { RightOutlined, SearchOutlined, SettingOutlined, ShopOutlined } from '@ant-design/icons';

type Store = {
    id: number;
    name: string;
    productsCount: number;
    imageUrl: string;
};

type StoreListProps = {
    stores: Store[];
};

const StoreList: React.FC<StoreListProps> = ({ stores }) => {
    return (
        <div className="lg:max-w-md mx-auto bg-white rounded-lg border shadow-sm lg:min-w-[300px] w-full">
            <div className="p-4 flex items-center justify-between">
                <div className="flex  gap-2 items-center">
                    <div className="text-lg text-primary-lightgreen">
                        <ShopOutlined />
                    </div>
                    <h2 className="text-lg font-bold">Top 10 Stores</h2> 
                </div>
                <Image src="/icons/link-square-02.svg" alt='stores' height={20} width={20} />
            </div>
            <div className="p-4  bg-gray-100">
                
                <div className="flex justify-center items-center">
                    <div className="items-center flex rounded  lg:w-[100%]  bg-white ">
                        <div className='px-3 pr-0 text-lg text--gray-500'>
                            <SearchOutlined />
                        </div>
                        <div className="flex-1">
                            <input
                                type="text"
                                placeholder="Search a store"
                                className="w-full  border-none rounded-lg bg-transparent focus:outline-none focus:ring-0   p-2"
                            />
                        </div>
                        <div className='px-4'>
                            <Image src="/icons/filter-verticaldark.svg" alt='filter' width={20} height={20} />
                        </div>
                    </div>
                </div>


            </div>
            <div className="p-4">
                {stores.map((store) => (
                    <div key={store.id} className="flex items-center p-2 border-b last:border-b-0">
                        <div className="w-12 h-12 bg-primary-lightgreen rounded-lg overflow-hidden">
                            <Image src={store.imageUrl} alt={store.name} width={48} height={48}
                                className="object-cover h-full w-full" />
                        </div>
                        <div className="ml-4">
                            <p className="font-semibold">{store.name}</p>
                            <p className="text-gray-500 text-sm">{store.productsCount} Products</p>
                        </div>
                        <div className="ml-auto">
                            <span className="text-gray-400">
                                <RightOutlined />
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StoreList;
