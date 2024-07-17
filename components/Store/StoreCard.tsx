'use client';
import React from 'react';
import ButtonPrimary from '../Form/ButtonPrimary';
import ProductCard from '../Product/ProductCard';
import ProfileSection from './Components/ProfileSection';
import ContactLinks from './Components/ContactLinks';
import StoreInfo from './Components/StoreInfo';
import { sampleProducts } from '../../utils/sampleProducts.utils';

const customButtonStyles: React.CSSProperties = {};

interface Store {
    image?: string;
    name?: string;
    id?: string;
}

const StoreCard: React.FC<{ store: Store }> = ({ store }) => {
    const handleClick = () => { };

    return (
        <div className='border flex flex-col rounded-xl'>
            <div className="border-b p-6 flex lg:flex-row flex-col gap-6 justify-between lg:items-center">
                <ProfileSection store={store} />
                <div className="flex gap-2 items-center">
                    <ButtonPrimary buttonStyle={customButtonStyles} type="submit" onClick={handleClick}>
                        View Profile
                    </ButtonPrimary>
                    <ContactLinks />
                </div>
            </div>
            <div className="border-b p-6 flex lg:flex-row flex-col gap-6 justify-between lg:items-center w-full">
                <StoreInfo store={store} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:max-w-[50%] gap-3 items-center">
                    {sampleProducts.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StoreCard;
