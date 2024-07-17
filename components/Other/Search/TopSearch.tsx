import React from 'react'; 
import {SearchOutlined } from '@ant-design/icons';
import ButtonPrimary from '../../Form/ButtonPrimary';

const customButtonStyles: React.CSSProperties = {

}

const handleClick = () => {

}
const TopSearch = () => {
    return (
        <div> 
            <div className="fixed h-[100%] flex justify-center items-center z-50 top-0 w-[100%] bg-black/50 ">
                <div className="flex rounded-lg  bg-white p-6 items-center flex-col lg:flex-row  gap-3 w-[90%]  lg:w-[60%]">
                    <label className='font-semibold lg:block hidden'>Search</label>
                    <div className=" relative flex-grow">
                        <span className="absolute text-primary-lightgreen inset-y-0 left-0 flex items-center pl-3">
                            <SearchOutlined />
                        </span>
                        <input type="search" className="pl-10 pr-4 py-2 w-full rounded-lg bg-gray-200 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent" placeholder="Search product, stores, etc" />
                    </div>
                    <div className="flex">
                        <ButtonPrimary buttonStyle={customButtonStyles} type="submit" onClick={handleClick}> Search <SearchOutlined /></ButtonPrimary>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopSearch;
