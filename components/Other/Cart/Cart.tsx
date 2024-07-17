import React, { useState } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';
import type { DrawerProps, RadioChangeEvent } from 'antd';
import { DeleteOutlined, HeartOutlined, InfoCircleOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import CartCard from './CartCard';


const customButtonStyles: React.CSSProperties = {
    width: '100%',
    height: '100%',
}

const Cart: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState<DrawerProps['placement']>('right');

    const showDrawer = () => {
        setOpen(true);
    };

    const onChange = (e: RadioChangeEvent) => {
        setPlacement(e.target.value);
    };

    const onClose = () => {
        setOpen(false);
    };

    const cartItems = [
         {
            id: '23498sada213',
            name: 'Product 1',
            price: 9000,
            originalPrice: 12000,
            imageUrl: '/images/33c1ef9e9a57ac68ee296e0b09c603da.png',
        },
        {
            id: '23498sadaasdas213',
            name: 'Product 1',
            price: 9000,
            originalPrice: 12000,
            imageUrl: '/images/33c1ef9e9a57ac68ee296e0b09c603da.png',
        }
    ]
    return (
        <>
            <button className='flex gap-1 text-black items-center lg:border-none border p-2 px-3 hover:text-primary-lightgreen rounded hover:bg-gray-100 cursor-pointer'  onClick={showDrawer}>
                <ShoppingCartOutlined />   <span className='lg:block hidden'>My cart</span>
            </button>
            <Drawer
                title="My Cart (2)" 
                placement='right'
                width={590}
                onClose={onClose}
                open={open}
                style={{padding: 0}}
                extra={
                    <Space>
                        <button  className='flex border px-2 py-1  rounded-lg gap-3 items-center hover:border-primary-lightgreen' onClick={onClose} >
                            <span className='text-primary-lightgreen'>  <HeartOutlined /></span>
                            <span>Save cart for later</span></button>
                        <Button danger onClick={onClose}>
                            <DeleteOutlined />
                        </Button>
                    </Space>
                }
            >
                <div className='bg-gray-100 p-3 flex  gap-2'>
                    <InfoCircleOutlined />
                    <span>
                        By proceeding you won’t be charged yet
                    </span>
                </div>
                <div className="flex flex-col gap-5 mt-6">
                    {cartItems.map((item) => (
                        <CartCard key={item.id} item={item}/>
                    ))}
                </div>
            </Drawer>
        </>
    );
};

export default Cart;