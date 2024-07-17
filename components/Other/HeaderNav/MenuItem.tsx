import React from 'react';

const MenuItem = ({ icon, text, key }: { icon: React.ReactNode; text: string; key: string }) => (
    <a target="_blank" className='flex items-center' style={{ gap: 10, padding: 5 }}>
        {icon}
        <span>{text}</span>
    </a>
);

export default MenuItem;