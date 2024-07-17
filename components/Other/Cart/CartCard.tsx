import { DeleteOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Image from 'next/image';
import React from 'react';

interface ItemProps {
    item: {
        id: string;
        name: string;
        price: number;
        imageUrl: string;
    };
}

const customImageStyles: React.CSSProperties = {
    width: '100%',
    height: '100%',
}


const CartCard: React.FC<ItemProps> = ({ item }) => {
    return (
        <div className='border rounded-lg px-6 p-4 flex items-center gap-3'>
            <div className="font-bold text-lg">1</div>
            <div className="flex items-center justify-between  w-full gap-2">
                <div className="flex items-center gap-2">
                    <div className="bg-gray-100 h-14 w-14 rounded-lg">
                        <Image height={50} width={50} style={customImageStyles} src={item.imageUrl} alt={item.name} />
                    </div>
                    <div className="">
                        <h2 className='font-semibold '>{item.name}</h2>
                        <p>Price: ${item.price}</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 ">
                        <button className="border rounded-lg  font-bold border-gray-200 text-gray-700 px-4 py-2  ">-</button>
                        <span className="text-gray-700 bg-gray-200 px-5 py-2 rounded-lg">1</span>
                        <button className="border rounded-lg border-gray-200 font-bold  text-gray-700 px-4 py-2  ">+</button>
                    </div>
                    <div className="flex">
                        <Button danger>
                            <DeleteOutlined />
                        </Button>
                    </div> 
                </div>

            </div>


        </div>
    );
}

export default CartCard;
