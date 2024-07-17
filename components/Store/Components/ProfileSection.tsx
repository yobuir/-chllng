import React from 'react';
import Image from 'next/image';
interface Store {
    image?: string;
    name?: string;
}
const ProfileSection: React.FC<{ store: Store }> = ({ store }) => (
    
    <div className="flex gap-3 flex-row">
        <div className="bg-gray-200 w-14 rounded-lg h-14">
            <Image
                src={store?.image ?? '/images/33c1ef9e9a57ac68ee296e0b09c603da.png'}
                height={20}
                width={20}
                className='object-cover w-[100%] h-[100%] rounded-lg'
                alt='Shop image'
            />
        </div>
        <div className="flex flex-col">
            <h1>{store?.name}</h1>
            <p>1234 Products</p>
        </div>
    </div>
);

export default ProfileSection;
