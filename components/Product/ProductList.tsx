
import React from 'react';
import { Product } from '../../utils/allProducts.utils';
import ProductCard from './ProductCard';

type ProductListProps = {
    products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6   w-full">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;

