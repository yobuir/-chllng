import Link from 'next/link';
import React from 'react'; 

interface PrimaryLinkProps {
    icon: React.ReactNode;
    name: string;
    url: string;
}

const PrimaryLink: React.FC<PrimaryLinkProps> = ({ icon, name, url }) => {
    return (
        <Link href={url} className="flex gap-1 text-black items-center lg:border-none border p-2 px-3 hover:text-primary-lightgreen rounded hover:bg-gray-100 cursor-pointer">
            {icon}
            <span className='lg:block hidden'>{name}</span>
        </Link>
    );
}

export default PrimaryLink;
