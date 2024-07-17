import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Space, MenuProps } from 'antd';
import React from 'react';

interface DropDownComponentProps {
    items: MenuProps['items'];
}

const DropDownComponent: React.FC<DropDownComponentProps> = ({ items }) => {
    return (
        <Dropdown menu={{ items }} overlayStyle={{ gap: 20 }}>
            <a onClick={(e) => e.preventDefault()}>
                <Space className='border rounded-lg hover:text-primary-lightgreen text-primary-gray hover:bg-gray-100 cursor-pointer' style={{ padding: '10px 10px', color: '#495D69' }}>
                    <span>
                        <UserOutlined />
                    </span>
                    <span>
                        <DownOutlined />
                    </span>
                </Space>
            </a>
        </Dropdown>
    );
}

export default DropDownComponent;
