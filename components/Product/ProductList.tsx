import React from 'react';
import ProductCard from './ProductCard';
import { DownOutlined } from '@ant-design/icons';

const ProductList = () => {
    const sampleProduct = {
        id:'23498sada213',
        name: 'Product 1',
        price: 9000,
        originalPrice: 12000,
        imageUrl: '/images/33c1ef9e9a57ac68ee296e0b09c603da.png',
    };
    
    return (
        <div className='flex flex-col justify-center items-center gap-12'>
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 ">
                <ProductCard product={sampleProduct} />
            </div>
            <a href='' className='  flex-row   border-gray-400 px-6 py-3 text-black rounded-lg hover:bg-white border hover:border-primary-lightgreen hover:text-primary-lightgreen font-bold flex items-center gap-4' > <DownOutlined className='text-primary-lightgreen' /><span>Load More</span></a>
        </div>
        
    );
}

export default ProductList;
