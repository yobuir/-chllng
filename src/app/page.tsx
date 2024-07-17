'use client'

import Image from "next/image";
import MainNav from '../../components/Other/HeaderNav/MainNav';
import { FilterOutlined, SearchOutlined, SortAscendingOutlined } from '@ant-design/icons';
import ProductList from "../../components/Product/ProductList";
import MainFooter from "../../components/MainFooter";
import fetchProducts, { Product } from "../../utils/allProducts.utils";
import { useEffect, useState } from "react";
import StoreList from "../../components/Store/StoreList";

export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    const [search, setSearch] = useState<string>("");
    const [sortBy, setSortBy] = useState<string>("createdAt");
    const [sortOrder, setSortOrder] = useState<string>("ASC");
    const [filters, setFilters] = useState<{ pageNumber: number, recordsPerPage: number }>({ pageNumber: 1, recordsPerPage: 10 });
    const [hasMore, setHasMore] = useState<boolean>(true);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedProducts = await fetchProducts({ ...filters, name: search, sortBy, sortOrder });
                setProducts(prev => [...prev, ...fetchedProducts]);
                setHasMore(fetchedProducts.length > 0);
            } catch (error) {
                console.error("Failed to fetch products", error);
            }
        };

        fetchData();
    }, [search, sortBy, sortOrder, filters]);

    const loadMore = () => {
        setFilters(prev => ({
            ...prev,
            pageNumber: prev.pageNumber + 1
        }));
    };

    return (
        <>
            <div className='bg-white pb-28'>
                <MainNav />
                <main className='lg:px-20 p-1 mt-6'>
                    <section className='bg-[#1C2834] flex justify-center py-6 items-center rounded-lg lg:min-h-[262px]'>
                        <div className="flex flex-col gap-6 text-center w-full justify-center">
                            <div className="flex flex-col gap-2 text-center">
                                <div className="text-lg lg:text-3xl font-bold text-white">
                                    <h1>Welcome to <span className='text-primary-lightgreen'>Mark8</span></h1>
                                </div>
                                <div className="text-gray-400">
                                    <p>{products.length} Products</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="items-center flex rounded lg:w-[40%] bg-gray-700 ">
                                    <div className='px-4 pr-0 text-lg text-primary-lightgreen'>
                                        <SearchOutlined />
                                    </div>
                                    <div className="flex-1">
                                        <input
                                            type="text"
                                            placeholder="What are you looking for?"
                                            className="w-full border-none rounded-lg bg-transparent focus:outline-none focus:ring-0 text-white p-4"
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
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
                    <nav className='w-full flex justify-between items-center mt-8'>
                        <div className="flex items-center gap-2 ">
                            <div>
                                <Image src="icons/delivery-box-01.svg" width={25} height={25} alt="Product image" />
                            </div>
                            <div className='font-bold'>Recent products ({products.length})</div>
                        </div>
                        <div className="flex text-lg items-center justify-center gap-3">
                            <div className="border rounded px-3 py-1" onClick={() => setSortBy(sortBy === 'name' ? 'createdAt' : 'name')}> <FilterOutlined /></div>
                            <div className="border rounded px-3 py-1" onClick={() => setSortOrder(sortOrder === 'ASC' ? 'DESC' : 'ASC')}> <SortAscendingOutlined /></div>
                        </div>
                    </nav>
                    <section className="flex flex-col lg:flex-row gap-3 mt-8">
                        <div className="">
                            <ProductList products={products} />
                            {hasMore && (
                                <button onClick={loadMore} className="mt-4 px-6 py-3 text-black border border-gray-400 rounded-lg hover:bg-white hover:border-primary-lightgreen hover:text-primary-lightgreen font-bold">
                                    Load More
                                </button>
                            )}
                        </div>
                        <div className="fle ">
                            <div className="flex">
                                <StoreList />
                            </div>
                        </div>

                    </section>
                </main>
            </div>
            <MainFooter />
        </>
    );
}
