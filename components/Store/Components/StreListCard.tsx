import { RightOutlined } from '@ant-design/icons';
import Image from 'next/image';
import React from 'react';

interface Store {
    image?: string;
    name?: string; 
    id?: string;
}
const StreListCard: React.FC<{ store: Store }> = ({ store }) => {
 
  return (
      <div key={store.id} className="flex items-center p-2 border-b last:border-b-0">
          <div className="w-12 h-12 bg-primary-lightgreen rounded-lg overflow-hidden">
              <Image
                  src={store?.image ?? '/images/33c1ef9e9a57ac68ee296e0b09c603da.png'}
                  alt={store?.name ?? 'Store image'}
                  width={48}
                  height={48}
                  className="object-cover h-full w-full"
              />
          </div>
          <div className="ml-4">
              <p className="font-semibold">{store.name}</p>
              <p className="text-gray-500 text-sm">124 Products</p>
          </div>
          <div className="ml-auto">
              <span className="text-gray-400">
                  <RightOutlined />
              </span>
          </div>
      </div>
  );
}

export default StreListCard;
