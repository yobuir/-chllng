import React from 'react';
import { HeartOutlined, PhoneOutlined } from '@ant-design/icons';
import Link from 'next/link';

const ContactLinks = () => (
    <div className="flex gap-2 items-center">
        <Link href='tel:' className="text-gray-700 hover:bg-gray-200 border px-4 py-2 rounded-lg">
            <PhoneOutlined />
        </Link>
        <Link href='tel:' className="text-gray-700 hover:bg-gray-200 border px-4 py-2 rounded-lg">
            <HeartOutlined />
        </Link>
    </div>
);

export default ContactLinks;
