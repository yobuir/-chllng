'use client';
import React, { useEffect, useState } from 'react';

import MainNav from '../../../../components/Other/HeaderNav/MainNav';
import MainFooter from "../../../../components/MainFooter";
import { ArrowLeftOutlined, HeartOutlined, MoreOutlined, PhoneOutlined, ShoppingCartOutlined, StarOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image';
import ProductList from '../../../../components/Product/ProductList';
import fetchProduct from '../../../../utils/fetchSingleProduct.utils';
import fetchProducts, { Product } from '../../../../utils/allProducts.utils';


export default function ProductDetails({ params }: { params: { id: string } }) {
    const [product, setProduct] = useState<Product | null>(null);
    const [products, setProducts] = useState<Product[]>([]);
    const [filters, setFilters] = useState<{ pageNumber: number, recordsPerPage: number }>({ pageNumber: 1, recordsPerPage: 10 });
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [search, setSearch] = useState<string>("");
    const [sortBy, setSortBy] = useState<string>("createdAt");
    const [sortOrder, setSortOrder] = useState<string>("ASC");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedProduct = await fetchProduct(params.id);
                setProduct(fetchedProduct);
            } catch (error) {
                console.error("Failed to fetch product", error);
            }
        };

        fetchData();
    }, [params.id]);



    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedProducts = await fetchProducts({ ...filters, name: search, sortBy, sortOrder });
                
                const filteredProducts = fetchedProducts.filter(p => p.id !== params.id);
                setProducts(prev => [...prev, ...filteredProducts]);
                setHasMore(filteredProducts.length > 0);

            } catch (error) {
                console.error("Failed to fetch products", error);
            }
        };

        fetchData();
    }, [search, sortBy, sortOrder, filters, params.id]);


    const averageRating = product?.reviews.length
        ? product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length
        : 0;

    return (
        <>
            <div className='bg-white pb-28'>
                <MainNav />
                <main className='lg:px-20 p-1'>
                    <div className="lg:container w-full lg:mx-auto py-6 px-6">
                        <nav className="text-gray-500 mb-4 flex flex-wrap gap-3">
                            <Link href="" className="hover:underline text-primary-lightgreen">
                                <ArrowLeftOutlined />
                            </Link>
                            <Link href="/" className="hover:underline">Home</Link> /
                            <Link href="#" className="hover:underline">Products</Link> /
                            <Link href="#" className="hover:underline">Vectors</Link> /
                            <span>{product?.name}</span>
                        </nav>
                        <div className="flex lg:space-x-6 lg:flex-row flex-col mt-8">
                            <div className="flex-shrink-0 border rounded-lg w-full lg:w-[40%]">
                                <Image
                                src={product?.thumbnail[0] ?? '/images/33c1ef9e9a57ac68ee296e0b09c603da.png'}
                                alt="Product" height={300} width={300} className="w-full h-96 bg-gray-200 rounded-t-lg object-contain" />
                                <div className="flex space-x-2 p-3">
                                    {product?.thumbnail.map((thumb, index) => (
                                        <Image key={index} height={100} width={100} src={thumb} alt="Thumbnail" className="w-16 h-16 bg-gray-200 rounded-lg" />
                                    ))}
                                </div>
                            </div>
                            <div className="flex-grow p-3 w-full lg:w-[63%]">
                                <div className="bg-white rounded-lg border w-full">
                                    <div className="flex p-6 border-b justify-between lg:flex-row flex-col lg:items-center gap-4">
                                        <div className="flex gap-12 items-center">
                                            <h3>Product details</h3>
                                            <span className="bg-[#F4F5F6] text-[#1C2834] px-2 py-1 text-sm rounded">In Stock</span>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <div>
                                                <button
                                                    type='button'
                                                    className='border-gray-400 p-2 text-black rounded-lg hover:bg-white border hover:border-primary-lightgreen hover:text-primary-lightgreen text-sm flex items-center gap-2'>
                                                    <HeartOutlined />
                                                    <span>Save</span>
                                                </button>
                                            </div>
                                            <div className="">
                                                <MoreOutlined />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between flex-col gap-3">
                                        <div className='p-6'>
                                            <div className="flex justify-between items-center">
                                                <h2 className="text-2xl font-bold text-gray-800">{product?.name}</h2>
                                            </div> 
                                            <div className="flex items-center space-x-2  text-lg text-gray-700 mb-4">
                                                <span className="text-primary-lightgreen font-bold uppercase">
                                                    {product?.unitPrice} {product?.createdBy?.currency}
                                                </span> 
                                                <span className="text-gray-400 line-through uppercase">
                                                    {product?.originalPrice} {product?.createdBy?.currency}
                                                </span>
                                            
                                            </div>
                                            <p className="text-gray-700 mb-4">{product?.description}</p>
                                            <div className="flex items-center mb-4">
                                                <span className="text-yellow-400 mr-2"><StarOutlined /></span>
                                                <span className="text-gray-700">
                                                    
                                                    {
                                                    averageRating
                                                    }
                                                     
                                                    ({product?.reviews.length} Reviews)</span>
                                                
                                            </div>
                                            <div className="flex lg:flex-row gap-4 flex-col">
                                                <div className="flex items-center space-x-4 mb-4">
                                                    <button className="border rounded-lg border-gray-200 text-gray-700 px-4 py-2">-</button>
                                                    <span className="text-gray-700 bg-gray-200 px-6 py-3 rounded-lg">1</span>
                                                    <button className="border rounded-lg border-gray-200 text-gray-700 px-4 py-2">+</button>
                                                </div>
                                                <div className="">
                                                    <button className="bg-primary-lightgreen px-6 py-2 gap-2 flex items-center rounded-lg">
                                                        <ShoppingCartOutlined />
                                                        <span>Add To Cart</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex lg:items-center flex-col gap-4 lg:flex-row space-x-4 p-6 border-t justify-between">
                                            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
                                                <div className="">
                                                    <h5 className='font-bold'>Store info:</h5>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Image src="/images/33c1ef9e9a57ac68ee296e0b09c603da.png"
                                                    height={10}
                                                    width={10} alt="Store" className="h-8 w-8 rounded-full bg-gray-200" />
                                                    <span className="text-gray-700">{product?.name}</span>
                                                </div>
                                            </div>
                                            <div className="">
                                                <button className="flex items-center space-x-2 bg-gray-200 text-gray-700 px-4 py-2 rounded">
                                                    <PhoneOutlined className='text-primary-lightgreen' />
                                                    <span>Contact Store</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="container mx-auto py-6 px-6">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">You might also like</h3>
                        <ProductList products={products} />
                    </section>
                </main>
            </div>
            <MainFooter />
        </>
    );
}

