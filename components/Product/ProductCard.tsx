'use client';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'; 
export interface Category {
    createdAt: string;
    description: string;
    id: string;
    name: string;
    updatedAt: string;
}

export interface User {
    createdAt: string;
    currency: string;
    email: string;
    firstName: string;
    id: string;
    isActive: boolean;
    lastName: string;
    phoneNumber: string;
    shippingAddress: string;
    stripeAccountId: string;
    updatedAt: string;
}

export interface Product {
    category: Category;
    id: string;
    name: string;
    code: string;
    description: string;
    reviews: any[];
    thumbnail: string[];
    unitPrice: number;
    originalPrice: number;
    updatedAt: string;
    updatedBy: User;
    createdBy: User;
    createdAt: string;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const pathname = usePathname();
    return (
        <div className="rounded-lg overflow-hidden border shadow-sm min-h-[200px] bg-white">
            <Link href={`/product/${product?.id}`}>
                <div className="relative w-full h-48"> {/* Adjust height as needed */}
                    <Image
                        src={product?.thumbnail[0] ?? '/images/33c1ef9e9a57ac68ee296e0b09c603da.png'}
                        alt={product?.name}
                        fill
                        style={{ objectFit: 'contain' }}
                        className="absolute inset-0 w-full -z-0"
                    />
                </div>
            </Link>
            <div className="p-4 flex lg:flex-row gap-6 flex-col justify-between">
                <Link href={`/product/${product?.id}`}>
                    <p className="text-gray-700 font-semibold">{product?.name}</p>
                    <div className="flex items-center space-x-2 mt-2">
                        <span className="text-primary-lightgreen font-bold uppercase">
                            {product?.unitPrice} {product?.createdBy?.currency}
                        </span>
                        {pathname !== '/stores' && product?.originalPrice && (
                            <span className="text-gray-400 line-through uppercase">
                                {product?.originalPrice} {product?.createdBy?.currency}
                            </span>
                        )}
                    </div>
                </Link>
                <div className="flex items-center gap-3 justify-between">
                    {pathname !== '/stores' && (
                        <button className="flex items-center justify-center w-10 h-10 border border-gray-200 rounded-lg hover:bg-gray-100">
                            <ShoppingCartOutlined />
                        </button>
                    )}
                    <button className="flex items-center justify-center w-10 h-10 border border-gray-200 rounded-lg hover:bg-gray-100">
                        <HeartOutlined />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
