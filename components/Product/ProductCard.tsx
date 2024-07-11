import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Product = {
    id:string;
    name: string;
    price: number;
    originalPrice: number;
    imageUrl: string;
};

type ProductCardProps = {
    product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className=" rounded-lg overflow-hidden border shadow-sm  bg-white">
            <Link href={`/product/${product.id}`} className="p-4 bg-gray-100 h-[200px] truncate">
                <Image
                    src={product.imageUrl ?? '/images/33c1ef9e9a57ac68ee296e0b09c603da.png'}
                    alt={product.name}
                    layout="responsive"
                    height={0}
                    width={0}
                    className="object-cover h-full w-full"
                />
            </Link>

            <div className="p-4 flex  lg:flex-row gap-6 flex-col justify-between">
                <Link href={`/product/${product.id}`}>
                    <p className="text-gray-700 font-semibold">{product.name}</p>
                    <div className="flex items-center space-x-2 mt-2">
                        <span className="text-primary-lightgreen font-bold text-lg">{product.price.toLocaleString()} Rwf</span>
                        <span className="text-gray-400 line-through">{product.originalPrice.toLocaleString()} Rwf</span>
                    </div>
                </Link>
                <div className="flex items-center gap-3 justify-between">
                    <button className="flex items-center justify-center w-10 h-10 border border-gray-200 rounded-lg hover:bg-gray-100">
                        <ShoppingCartOutlined />
                    </button>
                    <button className="flex items-center justify-center w-10 h-10 border border-gray-200 rounded-lg hover:bg-gray-100">
                        <HeartOutlined />
                    </button>
                </div>
            </div>
        </div>

    );
}

export default ProductCard;
