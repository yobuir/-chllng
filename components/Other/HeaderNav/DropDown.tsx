import React from 'react';
import { InfoCircleOutlined, LogoutOutlined, SettingOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd'; 
import DropDownComponent from '../DropDown';
import ProfileInfo from './ProfileInfo';
import MenuItem from './MenuItem';
import { useRouter } from 'next/navigation';

const DropDown = () => {


    const router = useRouter();
    const handleLogout = () => { 
        document.cookie = "accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        document.cookie = "refreshToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        router.push('/auth/login');
    }

    const items: MenuProps['items'] = [
        {
            label: <ProfileInfo />,
            key: '01',
        },
        {
            type: 'divider',
        },
        {
            label: <MenuItem icon={<UserOutlined />} text="My Account" key="0" />,
            key: '0',
        },
        {
            label: <MenuItem icon={<ShoppingCartOutlined />} text="My Orders" key="1" />,
            key: '1',
        },
        {
            label: <MenuItem icon={<UserOutlined />} text="Help" key="2" />,
            key: '2',
        },
        {
            label: <MenuItem icon={<InfoCircleOutlined />} text="About" key="3" />,
            key: '3',
        },
        {
            label: <MenuItem icon={<SettingOutlined />} text="Settings" key="4" />,
            key: '4',
        },
        {
            type: 'divider',
        },
        {
            label: (
                <button  onClick={handleLogout} className='flex items-center' style={{ gap: 10, padding: 5 }}>
                    <LogoutOutlined/>
                    <span>Logout</span>
                </button>),
            key: '5',
        },
    ];

  return (
      <div className="">
          <DropDownComponent items={items} />
      </div>
  );
}

export default DropDown;
