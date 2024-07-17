import React from 'react';
import { StarOutlined } from '@ant-design/icons';
interface Store {
    image?: string;
    name?: string;
    description?: string;
}
const StoreInfo: React.FC<{ store: Store }> = ({ store }) => (

    <div className="flex flex-col flex-1 gap-4">
        <div>
            <h3 className='font-bold'>About</h3>
            <p className='text-base font-normal'>
                {
                    store.description
                }
            </p>
        </div>
        <div>
            <h3 className='font-bold mb-2'>Categories</h3>
            <div className="flex flex-row gap-3 flex-wrap">
                <a href='' className='border rounded-full border-gray-400 px-4 py-1 hover:bg-gray-700 text-gray-400 hover:text-white'>Vectors</a>
                <a href='' className='border rounded-full border-gray-400 px-4 py-1 hover:bg-gray-700 text-gray-400 hover:text-white'>Backgrounds</a>
            </div>
        </div>
        <div>
            <h3 className='font-bold mb-2'>Reviews</h3>
            <div className="flex items-center mb-4">
                <span className="text-yellow-400 mr-2"><StarOutlined /></span>
                <span className="text-gray-700"><span className='font-semibold'>4.9 </span>(14 Reviews)</span>
            </div>
        </div>
    </div>
);

export default StoreInfo;
